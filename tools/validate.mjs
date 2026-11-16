#!/usr/bin/env node
/* validate.mjs — check a study app's content before you ship it.

   Usage:  node tools/validate.mjs [app-dir] [--strict] [--top N]
     app-dir   folder holding topic.js and data/ (default: current folder)
     --strict  treat warnings as errors (exit code 1)
     --top N   how many "longest answer" offenders to list (default 10)

   Errors are things that break the app or lose progress (bad indexes,
   duplicate flashcard keys, unknown tracks). Warnings are quality issues
   (the correct answer is usually the longest option, a generator that keeps
   failing, a career pointing at a domain with no questions).
   No dependencies; Node 16+. */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const args = process.argv.slice(2);
const strict = args.includes('--strict');
const topIdx = args.indexOf('--top');
const TOP = topIdx >= 0 ? Math.max(0, +args[topIdx + 1] || 10) : 10;
const dir = path.resolve(args.find((a, i) => !a.startsWith('--') && args[i - 1] !== '--top') || '.');

const errors = [], warnings = [], notes = [];
const err = m => errors.push(m), warn = m => warnings.push(m), note = m => notes.push(m);

/* ---------- load ---------- */
const FILES = ['topic.js', 'data/questions.js', 'data/cards.js', 'data/guides.js', 'data/drills.js', 'forge.js', 'data/forge.js', 'data/ctsd-challenges.js'];
let src = '';
const toolRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
for (const f of FILES) {
  let p = path.join(dir, f);
  // validating content on its own (e.g. template/): borrow the engine's forge.js
  if (f === 'forge.js' && !fs.existsSync(p)) p = path.join(toolRoot, 'forge.js');
  if (!fs.existsSync(p)) {
    if (f === 'topic.js' || f === 'data/questions.js') err(`${f} is missing`);
    continue;
  }
  const code = fs.readFileSync(p, 'utf8');
  try { new vm.Script(code, { filename: f }); }
  catch (e) { err(`${f} has a syntax error: ${e.message}`); continue; }
  src += `\n;/* ${f} */\n` + code;
}
if (errors.length) finish();
src += `\n;this.__out = {
  TOPIC: typeof TOPIC !== 'undefined' ? TOPIC : null,
  QUESTIONS: typeof QUESTIONS !== 'undefined' ? QUESTIONS : [],
  CARDS: typeof CARDS !== 'undefined' ? CARDS : [],
  GUIDES: typeof GUIDES !== 'undefined' ? GUIDES : [],
  DRILLS: typeof DRILLS !== 'undefined' ? DRILLS : [],
  FORGE: typeof FORGE !== 'undefined' ? FORGE : null
};`;
const ctx = {};
vm.createContext(ctx);
try { vm.runInContext(src, ctx, { filename: 'app-content' }); }
catch (e) { err(`content failed to load: ${e.message}`); finish(); }
const { TOPIC, QUESTIONS, CARDS, GUIDES, DRILLS, FORGE } = ctx.__out;

/* ---------- topic.js ---------- */
const T = TOPIC || {};
if (!TOPIC) err('topic.js does not define TOPIC');
if (!/^[a-z][a-z0-9-]*$/.test(T.id || '')) err(`topic.id "${T.id}" must be lowercase letters, digits or hyphens, starting with a letter`);
if (!T.name) warn('topic.name is empty');
const tracks = Array.isArray(T.tracks) && T.tracks.length ? T.tracks : [{ id: 'main', label: 'All' }];
const trackIds = tracks.map(t => t.id);
if (new Set(trackIds).size !== trackIds.length) err('topic.tracks has duplicate ids');
tracks.forEach(t => { if (!t.id || !t.label) err('every track needs an id and a label'); });
const defaultTrack = T.defaultTrack || trackIds[0];
if (Array.isArray(T.tracks) && T.tracks.length && !trackIds.includes(defaultTrack)) err(`topic.defaultTrack "${T.defaultTrack}" is not one of the tracks`);
if (T.accent && !['sky', 'violet', 'emerald', 'amber', 'rose', 'indigo'].includes(T.accent)) warn(`topic.accent "${T.accent}" is not a known accent (sky, violet, emerald, amber, rose, indigo)`);
if (T.levels && (!Array.isArray(T.levels) || T.levels.length !== 5)) warn('topic.levels should list exactly five level names');
const lengths = (T.exam && T.exam.lengths) || [];
lengths.forEach(l => { if (!(l.n > 0) || !l.label) err('every exam length needs a positive n and a label'); });
if (T.difficulty) {
  for (const k of ['hard', 'easy']) {
    if (T.difficulty[k]) { try { new RegExp(T.difficulty[k], 'i'); } catch (e) { err(`topic.difficulty.${k} is not a valid regular expression`); } }
  }
}
if (T.sync && !(T.sync.firebase && T.sync.firebase.apiKey && T.sync.firebase.projectId)) err('topic.sync is set but sync.firebase is incomplete (or set sync: null)');
const multi = tracks.length > 1;
const certOf = q => q.cert || q.track || defaultTrack;

/* ---------- questions ---------- */
const isStr = s => typeof s === 'string' && s.trim().length > 0;
function checkOptions(label, item) {
  const o = item.options;
  if (!Array.isArray(o) || o.length < 2 || o.length > 6) { err(`${label}: needs 2–6 options`); return false; }
  if (!o.every(isStr)) { err(`${label}: every option must be non-empty text`); return false; }
  if (new Set(o.map(s => s.trim().toLowerCase())).size !== o.length) err(`${label}: duplicate options`);
  if (!Number.isInteger(item.correct) || item.correct < 0 || item.correct >= o.length) { err(`${label}: "correct" must be an index from 0 to ${o.length - 1}`); return false; }
  return true;
}
if (!QUESTIONS.length && !(FORGE && FORGE.generators && FORGE.generators.length)) err('no questions (and no forge generators)');
const stems = new Map();
QUESTIONS.forEach((q, i) => {
  const label = `question #${i}${q && q.q ? ` ("${String(q.q).slice(0, 50)}")` : ''}`;
  if (!q || typeof q !== 'object') { err(`${label}: not an object`); return; }
  if (!isStr(q.domain)) err(`${label}: missing domain`);
  if (!isStr(q.q)) err(`${label}: missing question text (q)`);
  if (!isStr(q.explanation)) err(`${label}: missing explanation`);
  checkOptions(label, q);
  if (q.cert && !trackIds.includes(q.cert)) err(`${label}: cert "${q.cert}" is not a track in topic.js`);
  if (multi && !q.cert && !q.track) warn(`${label}: no cert; it will count as the default track "${defaultTrack}"`);
  if (q.diff !== undefined && !(q.diff >= 1 && q.diff <= 5)) err(`${label}: diff must be 1–5`);
  const k = String(q.q || '').trim().toLowerCase();
  if (k) { if (stems.has(k)) warn(`${label}: same question text as #${stems.get(k)}`); else stems.set(k, i); }
});
const qDomains = new Set(QUESTIONS.map(q => q.domain));

/* ---------- cards, guides, drills ---------- */
const cardKeys = new Map();
CARDS.forEach((c, i) => {
  const label = `card #${i}${c && c.front ? ` ("${String(c.front).slice(0, 40)}")` : ''}`;
  if (!isStr(c.domain) || !isStr(c.front) || !isStr(c.back)) { err(`${label}: needs domain, front and back`); return; }
  const k = c.domain + '|' + c.front;
  if (cardKeys.has(k)) err(`${label}: same domain + front as card #${cardKeys.get(k)} — they would share one progress slot`);
  else cardKeys.set(k, i);
});
[...new Set(CARDS.map(c => c.domain))].filter(d => !qDomains.has(d))
  .forEach(d => warn(`card domain "${d}" has no questions, so its flashcards never feed readiness`));
GUIDES.forEach((g, i) => { if (!isStr(g.title) || !isStr(g.body)) err(`guide #${i}: needs a title and a body`); });
DRILLS.forEach((d, i) => {
  const label = `drill #${i}`;
  if (!isStr(d.scenario) || !isStr(d.question) || !isStr(d.explanation)) err(`${label}: needs scenario, question and explanation`);
  if (!isStr(d.duty)) warn(`${label}: no duty (results group it under "Drills")`);
  checkOptions(label, d);
});
(T.careers || []).forEach(c => {
  (c.domains || []).filter(d => !qDomains.has(d)).forEach(d => warn(`career "${c.title}" uses domain "${d}", which has no questions`));
});

/* ---------- answer-length tell ----------
   If the correct option is usually the longest, "pick the longest" scores
   well without knowing anything. A giveaway is a correct answer at least
   10% longer than every wrong one (and 20+ characters, since short labels
   like "Mercury" or "8 minutes" carry no length signal). The aim is close
   to chance: about 1 in 4 with four options. */
const GIVEAWAY_RATIO = 1.1, MIN_LEN = 20;
function lengthStats(list) {
  let longest = 0, giveaways = 0;
  const offenders = [];
  list.forEach((q, i) => {
    if (!Array.isArray(q.options) || !Number.isInteger(q.correct) || !q.options[q.correct]) return;
    const L = q.options.map(o => String(o).length), c = L[q.correct];
    const maxOther = Math.max(...L.filter((_, j) => j !== q.correct));
    if (c <= maxOther) return;
    longest++;
    const ratio = c / maxOther;
    if (ratio >= GIVEAWAY_RATIO && c >= MIN_LEN) { giveaways++; offenders.push({ i, ratio, q }); }
  });
  offenders.sort((a, b) => b.ratio - a.ratio);
  const pct = x => list.length ? Math.round(100 * x / list.length) : 0;
  return { n: list.length, longest, giveaways, pctLongest: pct(longest), pct: pct(giveaways), offenders };
}
const ls = lengthStats(QUESTIONS);
const lsMsg = `${ls.giveaways}/${ls.n} questions (${ls.pct}%) have a correct answer clearly longer than every wrong one; ` +
  `it is the longest by any margin in ${ls.longest} (${ls.pctLongest}%, chance ≈ 25%)`;
if (ls.pct > 15 || ls.pctLongest > 45) warn('answer-length tell: ' + lsMsg); else note('answer length: ' + lsMsg);
if (multi) {
  tracks.forEach(t => {
    const s = lengthStats(QUESTIONS.filter(q => certOf(q) === t.id));
    if (s.n) note(`  ${t.label}: ${s.giveaways} giveaways, longest in ${s.longest}/${s.n} (${s.pctLongest}%)`);
  });
}
const dl = lengthStats(DRILLS);
if (DRILLS.length) (dl.pct > 15 ? warn : note)(`drills: ${dl.giveaways}/${dl.n} giveaways, correct is longest in ${dl.longest} (${dl.pctLongest}%)`);
if (TOP && ls.offenders.length) {
  note(`biggest giveaways (correct answer length ÷ longest wrong answer):`);
  ls.offenders.slice(0, TOP).forEach(o => note(`  ${o.ratio.toFixed(2)}×  #${o.i} ${o.q.domain}: ${String(o.q.q).slice(0, 70)}`));
}
const pos = new Array(6).fill(0);
QUESTIONS.forEach(q => { if (Number.isInteger(q.correct)) pos[q.correct]++; });
note(`stored correct-answer positions A–D: ${pos.slice(0, 4).join(' / ')} (display order is shuffled, so this is informational)`);

/* ---------- forge generators ---------- */
if (FORGE && FORGE.generators && FORGE.generators.length) {
  const gens = FORGE.generators.filter(g => !g.disabled);
  const valid = m => m && isStr(m.q) && Array.isArray(m.options) && m.options.length >= 2 && m.options.length <= 6 &&
    new Set(m.options).size === m.options.length && Number.isInteger(m.correct) && m.correct >= 0 && m.correct < m.options.length && isStr(m.explanation);
  let failed = 0;
  gens.forEach(g => {
    let bad = 0, firstErr = '';
    for (let k = 0; k < 300; k++) {
      try { if (!valid(g.make())) bad++; } catch (e) { bad++; if (!firstErr) firstErr = e.message; }
    }
    if (!trackIds.includes(g.cert)) err(`generator ${g.id}: track "${g.cert}" is not in topic.js`);
    if (!qDomains.has(g.domain)) warn(`generator ${g.id}: domain "${g.domain}" has no bank questions, so it never shows in readiness`);
    if (bad > 30) err(`generator ${g.id}: ${bad}/300 draws failed${firstErr ? ' — ' + firstErr : ''}`);
    else if (bad) { warn(`generator ${g.id}: ${bad}/300 draws failed (retried automatically)${firstErr ? ' — ' + firstErr : ''}`); }
    if (bad) failed++;
  });
  const byTrack = trackIds.map(t => `${t}: ${gens.filter(g => g.cert === t).length}`).join(', ');
  note(`forge: ${gens.length} generators (${byTrack})${failed ? `, ${failed} with failures` : ', all clean over 300 draws each'}`);
  trackIds.forEach(t => {
    if (!gens.some(g => g.cert === t)) return;
    const out = FORGE.draw(50, { cert: t, diff: 3 });
    if (out.length < 50) err(`forge.draw for track ${t} returned ${out.length}/50 questions`);
    if (out.some(m => !m.domain)) err(`forge.draw for track ${t} produced questions without a domain`);
  });
} else {
  note('forge: no generators (Endless mode uses the question bank only)');
}

/* ---------- summary ---------- */
note(`content: ${QUESTIONS.length} questions in ${qDomains.size} domains, ${CARDS.length} flashcards, ${GUIDES.length} guides, ${DRILLS.length} drills`);
if (multi) note(`tracks: ${tracks.map(t => `${t.label} ${QUESTIONS.filter(q => certOf(q) === t.id).length}`).join(' · ')}`);
const thin = [...qDomains].filter(d => QUESTIONS.filter(q => q.domain === d).length < 3);
if (thin.length) note(`domains with fewer than 3 questions: ${thin.join(', ')}`);
finish();

function finish() {
  const out = [];
  out.push(`Validating ${dir}`);
  if (notes.length) out.push('', ...notes.map(n => '  ' + n));
  if (warnings.length) out.push('', `${warnings.length} warning${warnings.length > 1 ? 's' : ''}:`, ...warnings.map(w => '  ! ' + w));
  if (errors.length) out.push('', `${errors.length} error${errors.length > 1 ? 's' : ''}:`, ...errors.map(e => '  ✗ ' + e));
  out.push('', errors.length ? 'FAILED' : warnings.length ? (strict ? 'FAILED (strict: warnings count)' : 'OK with warnings') : 'OK');
  console.log(out.join('\n'));
  process.exit(errors.length || (strict && warnings.length) ? 1 : 0);
}
