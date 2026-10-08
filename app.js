/* app.js — study app engine: tabs, overview, readiness, guides, flashcards,
   quiz, practice tests, scenario drills and endless adaptive mode.

   Topic-agnostic engine file. Topic specifics come from topic.js (TOPIC),
   content from data/*.js (QUESTIONS, CARDS, GUIDES, DRILLS + forge content),
   and preferences from settings.js (Settings). */
(function () {
'use strict';

const T = window.TOPIC || {};
const S = window.Settings;
const BANK = typeof QUESTIONS !== 'undefined' ? QUESTIONS : [];
const DECK = typeof CARDS !== 'undefined' ? CARDS : [];
const GUIDE_LIST = typeof GUIDES !== 'undefined' ? GUIDES : [];
const DRILL_LIST = typeof DRILLS !== 'undefined' ? DRILLS : [];
const HAS_FORGE = typeof FORGE !== 'undefined' && FORGE.generators && FORGE.generators.length > 0;

/* ---------- helpers ---------- */
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
// Lowercase a leading capital for mid-sentence use, leaving acronyms alone.
const lcfirst = s => /^[A-Z](?![A-Z0-9])/.test(s) ? s.charAt(0).toLowerCase() + s.slice(1) : s;
function shuffle(a) {
  a = a.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function sampleNoRepeat(arr, n) { return shuffle(arr).slice(0, Math.min(n, arr.length)); }
const indexOrder = q => shuffle(q.options.map((_, k) => k)); // display order of a question's options
function md(src) {
  // minimal markdown: ## / ###, - bullets, 1. numbered lists, **bold**, *italic*, `code`
  const lines = String(src).split('\n');
  let html = '', list = null;
  const close = () => { if (list) { html += `</${list}>`; list = null; } };
  const open = kind => { if (list !== kind) { close(); html += `<${kind}>`; list = kind; } };
  const inline = t => esc(t)
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^*])\*([^*\n]+)\*/g, '$1<em>$2</em>')
    .replace(/`([^`]+)`/g, '<code>$1</code>');
  for (const line of lines) {
    const h = line.match(/^(#{1,3})\s+(.*)/), li = line.match(/^\s*-\s+(.*)/), ol = line.match(/^\s*\d+[.)]\s+(.*)/);
    if (h) { close(); html += h[1].length === 3 ? `<h3>${inline(h[2])}</h3>` : `<h2>${inline(h[2])}</h2>`; }
    else if (li) { open('ul'); html += `<li>${inline(li[1])}</li>`; }
    else if (ol) { open('ol'); html += `<li>${inline(ol[1])}</li>`; }
    else if (line.trim() === '') close();
    else { close(); html += `<p>${inline(line)}</p>`; }
  }
  close();
  return html;
}
function domainsOf(list) {
  const m = new Map();
  list.forEach(q => m.set(q.domain, (m.get(q.domain) || 0) + 1));
  return [...m.entries()].sort((a, b) => a[0].localeCompare(b[0]));
}
const ADV = T.advancedPrefix === undefined ? 'Advanced:' : T.advancedPrefix;
const isAdv = d => !!ADV && String(d).indexOf(ADV) === 0;
const tagCls = d => 'tag' + (isAdv(d) ? ' adv' : '');
const fmtSecs = s => Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
const today = () => new Date().toLocaleDateString();
function setSeg(segId, attr, value) {
  $(segId).querySelectorAll('button').forEach(b => {
    const on = String(b.dataset[attr]) === String(value);
    b.classList.toggle('on', on);
    b.setAttribute('aria-pressed', on);
  });
}
function bindSeg(segId, attr, onPick) {
  $(segId).querySelectorAll('button').forEach(b => b.addEventListener('click', () => {
    setSeg(segId, attr, b.dataset[attr]);
    onPick(b.dataset[attr]);
  }));
}
const shown = el => !!el && el.style.display !== 'none' && el.offsetParent !== null;
// A clicked Start/Next button that has just been hidden keeps focus, and Enter
// would re-click it (restarting a quiz). Drop focus from hidden controls.
function releaseFocus() {
  const a = document.activeElement;
  if (a && a !== document.body && a.blur && !shown(a)) a.blur();
}

/* ---------- tracks (certifications / exams / levels) ----------
   Every question carries q.cert (a track id). certOf() falls back to the
   default track so a single-track bank can omit the field entirely. */
const TRACKS = T.tracks && T.tracks.length ? T.tracks : [{ id: 'main', label: T.name || 'All' }];
const MULTI = TRACKS.length > 1;
const DEFAULT_TRACK = T.defaultTrack || TRACKS[0].id;
const TRACK_WORD = T.trackLabel || 'Track';
const TRACK_PLURAL = T.trackLabelPlural || (TRACK_WORD.toLowerCase() + 's');
const certOf = q => (q && (q.cert || q.track)) || DEFAULT_TRACK;
const inTrack = (q, tr) => !tr || tr === '__all' || certOf(q) === tr;
const trackName = id => id === '__all' ? 'All ' + TRACK_PLURAL : ((TRACKS.find(t => t.id === id) || {}).label || id);
const countForTrack = id => BANK.filter(q => certOf(q) === id).length;
function domainsForTrack(tr) { return domainsOf(BANK.filter(q => inTrack(q, tr))).map(([d]) => d); }
function fillTrackSelect(sel, value) {
  sel.innerHTML = TRACKS.map(t => `<option value="${esc(t.id)}">${esc(t.label)}</option>`).join('') +
    `<option value="__all">${esc(trackName('__all'))}</option>`;
  sel.value = value;
  if (sel.value !== value) sel.value = DEFAULT_TRACK;
}
// Single-track topics hide every track picker; labels follow topic.trackLabel.
document.querySelectorAll('.track-pick').forEach(w => { w.hidden = !MULTI; });
document.querySelectorAll('[data-track-label]').forEach(l => { l.textContent = TRACK_WORD; });

/* Pure question selection for the practice-test generator (DOM-free, so it can
   be unit-tested). pool = track-filtered candidates, selected = domain names. */
function selectQuestions(pool, selected, tLen, tMix) {
  const byDom = {};
  selected.forEach(d => { byDom[d] = pool.filter(q => q.domain === d); });
  let picked = [];
  if (tMix === 'balanced') {
    // round-robin across the selected domains so each is represented
    const pools = Object.entries(byDom).map(([, arr]) => shuffle(arr));
    let progressed = true;
    while (picked.length < tLen && progressed) {
      progressed = false;
      for (const p of pools) {
        if (picked.length >= tLen) break;
        if (p.length) { picked.push(p.pop()); progressed = true; }
      }
    }
  } else {
    // pure random draw from the combined pool of selected domains
    picked = sampleNoRepeat(selected.flatMap(d => byDom[d] || []), tLen);
  }
  return { picked: shuffle(picked), capped: picked.length < tLen };
}

/* ---------- storage ----------
   Keys are namespaced by topic id ("cts_leitner_v1", ...) so several study
   apps can share one site (e.g. username.github.io) without colliding. */
const P = (T.id || 'study') + '_';
const LS = { boxes: P + 'leitner_v1', hist: P + 'test_history', meta: P + 'sync_meta_v1', best: P + 'endless_best' };
const HIST_MAX = 40;
function readJSON(key, fallback) {
  try { const v = JSON.parse(localStorage.getItem(key) || 'null'); return v == null ? fallback : v; } catch (e) { return fallback; }
}
function writeJSON(key, v) { try { localStorage.setItem(key, JSON.stringify(v)); } catch (e) {} }
function pushHistory(entry) {
  const hist = readJSON(LS.hist, []);
  hist.unshift(entry);
  writeJSON(LS.hist, hist.slice(0, HIST_MAX));
}

/* ---------- score thresholds ----------
   Everything keys off the pass mark (Settings, default 70):
   hi = halfway from pass to 100 (85), good = a third of the way (80),
   low = pass − 10 (60), floor = pass − 20 (50). */
function TH() {
  const m = S.get('passMark');
  return { pass: m, hi: m + (100 - m) / 2, good: m + (100 - m) / 3, low: m - 10, floor: m - 20 };
}
function bandClass(pct) { const t = TH(); return pct >= t.good ? 'pass' : pct >= t.low ? 'warn' : 'fail'; }
function barColor(pct) { const t = TH(); return pct >= t.good ? 'var(--green)' : pct >= t.low ? 'var(--amber)' : 'var(--red)'; }
function domainBar(domain, correct, total) {
  const pct = total ? Math.round(100 * correct / total) : 0;
  return `<div class="dbar"><div class="dlbl"><span>${esc(domain)}</span><span>${correct}/${total} · ${pct}%</span></div>` +
    `<div class="dtrack"><div class="dfill" style="width:${pct}%;background:${barColor(pct)}"></div></div></div>`;
}
/* Result bars that match the home-page readiness meters: same band colors
   (readyColor) and band labels (readyBand). Used for practice-test results. */
function readyBar(label, correct, total) {
  const pct = total ? Math.round(100 * correct / total) : 0;
  const b = readyBand(pct);
  return `<div class="dbar"><div class="dlbl"><span>${esc(label)}</span>` +
    `<span class="${b.cls}">${pct}% · ${b.label}</span></div>` +
    `<div class="dtrack"><div class="dfill" style="width:${pct}%;background:${readyColor(pct)}"></div></div></div>`;
}
const byWorst = (a, b) => (a[1].c / a[1].t) - (b[1].c / b[1].t);
const EXAM = T.exam || {};
const DISCLAIMER = EXAM.disclaimer || 'Treat this as a practice benchmark, not a prediction.';

/* ---------- copy ----------
   {questions} {cards} {guides} {drills} {track:ID} expand to live counts. */
const COPY = Object.assign({
  blurb: 'Every question comes with a full explanation. Build a fresh practice test any time, drill flashcards ' +
    'with spaced repetition, and watch your readiness climb domain by domain.',
  careersIntro: 'Ranked by your readiness in the domains each role leans on.',
  drillsIntro: 'Short scenarios that end in a decision, not isolated facts.'
}, T.copy || {});
function fill(s) {
  const n = { questions: BANK.length, cards: DECK.length, guides: GUIDE_LIST.length, drills: DRILL_LIST.length };
  return String(s || '')
    .replace(/\{(questions|cards|guides|drills)\}/g, (m, k) => n[k])
    .replace(/\{track:([^}]+)\}/g, (m, id) => countForTrack(id));
}

/* ---------- toast ---------- */
let toastTimer = null;
function toast(msg, action) {
  const el = $('toast');
  if (!el) return;
  const hide = () => el.classList.remove('show');
  el.innerHTML = `<span>${esc(msg)}</span>` + (action ? `<button type="button" class="toast-btn">${esc(action.label)}</button>` : '');
  if (action) el.querySelector('button').addEventListener('click', () => { hide(); action.fn(); });
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(hide, action ? 8000 : 3200);
}

/* ---------- sound effects (Web Audio, no files) ---------- */
const Sound = (function () {
  let ctx = null;
  function tone(freq, start, dur, type, gain) {
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type; o.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, start);
    g.gain.exponentialRampToValueAtTime(gain, start + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, start + dur);
    o.connect(g); g.connect(ctx.destination);
    o.start(start); o.stop(start + dur + 0.03);
  }
  function play(kind) {
    if (!S.get('sounds')) return;
    try {
      ctx = ctx || new (window.AudioContext || window.webkitAudioContext)();
      if (ctx.state === 'suspended') ctx.resume();
      const t = ctx.currentTime + 0.01;
      if (kind === 'ok') { tone(660, t, 0.12, 'sine', 0.13); tone(880, t + 0.09, 0.18, 'sine', 0.13); }
      else if (kind === 'no') tone(196, t, 0.26, 'triangle', 0.16);
      else if (kind === 'up') [523, 659, 784, 1047].forEach((f, i) => tone(f, t + i * 0.07, 0.16, 'sine', 0.1));
    } catch (e) {}
  }
  return { play };
})();

/* ---------- progress bridge (used by auth.js for Google sign-in / cloud sync,
   and by settings.js for export / import / reset) ---------- */
function setMetaTs(ts) { writeJSON(LS.meta, { updatedAt: ts || Date.now() }); }
function readMetaTs() { return (readJSON(LS.meta, {}) || {}).updatedAt || 0; }
function notifyProgress() {
  setMetaTs(Date.now());
  try { renderReadiness(); } catch (e) {}
  const B = window.Study;
  if (B && typeof B.onChange === 'function') { try { B.onChange(); } catch (e) {} }
}
let adoptingCloud = false;
const Study = {
  onChange: null, // auth.js assigns a debounced cloud-push callback
  getState() {
    return {
      boxes: readJSON(LS.boxes, {}), hist: readJSON(LS.hist, []), best: readJSON(LS.best, {}),
      settings: S.synced(), updatedAt: readMetaTs()
    };
  },
  applyState(s) {
    if (!s) return;
    if (s.boxes) writeJSON(LS.boxes, s.boxes);
    if (s.hist) writeJSON(LS.hist, s.hist.slice(0, HIST_MAX));
    if (s.best) writeJSON(LS.best, s.best);
    if (s.settings) { adoptingCloud = true; try { S.adopt(s.settings); } finally { adoptingCloud = false; } }
    setMetaTs(s.updatedAt); // adopt the cloud timestamp so we don't push straight back
  },
  refreshUI() {
    try { FC.reload(); } catch (e) {}
    renderHistory();
    try { renderReadiness(); } catch (e) {}
    try { Endless.renderBest(); } catch (e) {}
  },
  toast,
  exportData() {
    const st = Study.getState();
    const data = {
      app: T.id, name: T.name, version: T.version, exportedAt: new Date().toISOString(),
      progress: { boxes: st.boxes, hist: st.hist, best: st.best, updatedAt: st.updatedAt },
      settings: S.all()
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `${T.id || 'study'}-progress-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1500);
    toast('Backup downloaded.');
  },
  importData(data) {
    const p = data && data.progress;
    if (!p || typeof p !== 'object') return false;
    writeJSON(LS.boxes, p.boxes && typeof p.boxes === 'object' ? p.boxes : {});
    writeJSON(LS.hist, Array.isArray(p.hist) ? p.hist.slice(0, HIST_MAX) : []);
    writeJSON(LS.best, p.best && typeof p.best === 'object' ? p.best : {});
    if (data.settings && typeof data.settings === 'object') S.replaceAll(data.settings);
    notifyProgress(); // the restore is the newest change, so it syncs up when signed in
    Study.refreshUI();
    return true;
  },
  reset(kind) {
    if (kind === 'cards' || kind === 'all') writeJSON(LS.boxes, {});
    if (kind === 'history' || kind === 'all') writeJSON(LS.hist, []);
    if (kind === 'best' || kind === 'all') writeJSON(LS.best, {});
    notifyProgress();
    Study.refreshUI();
  }
};
window.Study = Study;
window.CTS = Study; // pre-v6 name, kept so a cached older auth.js still finds the bridge

/* ---------- tabs ---------- */
const HAS = {
  guides: GUIDE_LIST.length > 0, cards: DECK.length > 0, drills: DRILL_LIST.length > 0,
  quiz: BANK.length > 0, test: BANK.length > 0, endless: BANK.length > 0 || HAS_FORGE
};
let currentTab = 'overview';
function showTab(tab) {
  currentTab = tab;
  document.querySelectorAll('nav.tabs button').forEach(x => {
    const on = x.dataset.tab === tab;
    x.classList.toggle('active', on);
    if (on) x.setAttribute('aria-current', 'page'); else x.removeAttribute('aria-current');
  });
  document.querySelectorAll('.tabpane').forEach(p => p.classList.toggle('active', p.id === 'pane-' + tab));
  if (tab === 'overview') { try { renderReadiness(); } catch (e) {} }
  if (tab === 'roadmap') { try { renderRoadmap(); } catch (e) {} }
  window.scrollTo(0, 0);
}
document.querySelectorAll('nav.tabs button').forEach(b => {
  const tab = b.dataset.tab;
  if (HAS[tab] === false) b.hidden = true;
  const custom = T.labels && T.labels[tab];
  if (custom) b.querySelector('.lbl').textContent = custom;
  b.addEventListener('click', () => showTab(tab));
});

/* ---------- career targets ----------
   Each role maps to the 1–3 domains it leans on (topic.js). Roles are ranked
   by the average readiness of their mapped domains; roles with no signal
   yet are never given a fake score. */
const CAREERS = Array.isArray(T.careers) ? T.careers : [];

/* ---------- overview ---------- */
const MODE_NAMES = { balanced: 'practice', random: 'practice · random', quiz: 'quiz', drill: 'drills', endless: 'endless' };
/* ---------- official AVIXA duty weights (percent of each exam) ----------
   Source: the exam content outline PDFs in data/docs/. ANP has no questions
   in the bank yet, so every ANP duty reports "No data yet". */
const DUTY_WEIGHTS = {
  'CTS':   { A: 35, B: 30, C: 15, D: 20 },
  'CTS-D': { A: 20, B: 28, C: 38, D: 14 },
  'CTS-I': { A: 17, B: 12, C: 12, D: 39, E: 12, F: 8 },
  'ANP':   { A: 16, B: 19, C: 15, D: 27, E: 13, F: 10 }
};
const DUTY_NAMES = {
  'CTS': { A: 'Creating AV Solutions', B: 'Implementing AV Solutions',
    C: 'Supporting AV System Operation', D: 'Servicing AV Solutions' },
  'CTS-D': { A: 'Conduct a Needs Assessment', B: 'Coordinate with Other Professionals',
    C: 'Develop and Document AV Designs', D: 'Deploy AV Designs' },
  'CTS-I': { A: 'Implement Pre-Installation Activities', B: 'Practice Ongoing Project Responsibilities',
    C: 'Conduct Site Rough-In/First-Fix', D: 'Install AV Systems',
    E: 'Perform AV Systems Closeout', F: 'Conduct Post Project Activities' },
  'ANP': { A: 'Conduct a Needs Analysis', B: 'Design Hardware Network Topology',
    C: 'Design Software Network Topology', D: 'Perform System Deployment',
    E: 'Verify System Performance', F: 'Conduct Project Closeout' }
};

(function overview() {
  const parts = MULTI ? TRACKS.map(t => `${countForTrack(t.id)} ${t.label}`) : [`${BANK.length} questions`];
  if (DECK.length) parts.push(`${DECK.length} cards`);
  if (DRILL_LIST.length) parts.push(`${DRILL_LIST.length} drills`);
  $('hdr-stats').textContent = parts.join(' · ');
  const statBox = (v, l) => `<div class="stat-box"><div class="stat-val">${v}</div><div class="stat-lbl">${l}</div></div>`;
  $('ov-stats').innerHTML = [[BANK.length, 'questions'], [DECK.length, 'flashcards'], [GUIDE_LIST.length, 'guides'],
    [DRILL_LIST.length, 'drills']].filter(([v]) => v > 0).map(([v, l]) => statBox(v, l)).join('');
  $('ov-blurb').textContent = fill(COPY.blurb);
  if (COPY.readinessTitle) $('readiness-title').textContent = COPY.readinessTitle;
  $('ov-domains').innerHTML = domainsOf(BANK).map(([d, n]) => {
    const pct = Math.round(100 * n / BANK.length);
    return `<div class="dbar"><div class="dlbl"><span>${esc(d)}</span><span>${n}</span></div>` +
      `<div class="dtrack"><div class="dfill" style="width:${pct}%;background:var(--accent)"></div></div></div>`;
  }).join('');
  if (CAREERS.length) {
    $('careers-intro').textContent = fill(COPY.careersIntro);
    if (COPY.careersTitle) $('careers-title').textContent = COPY.careersTitle;
  } else {
    $('careers-card').hidden = true;
  }
  const rc = $('r-cert');
  fillTrackSelect(rc, S.get('track'));
  rc.addEventListener('change', () => { try { renderReadiness(); } catch (e) {} });
  renderHistory();
  renderStudyLoop();
  renderReadiness();
})();
function renderStudyLoop() {
  const el = $('ov-loop');
  if (!el) return;
  if (Array.isArray(COPY.studyLoop)) {
    el.innerHTML = COPY.studyLoop.map((s, i) => `${i + 1}. ${md(s).replace(/^<p>|<\/p>$/g, '')}`).join('<br>');
    return;
  }
  const steps = [];
  if (GUIDE_LIST.length) steps.push('Read a <b>Study Guide</b> for your weakest domain.');
  if (DECK.length) steps.push('Drill its <b>Flashcards</b> until most reach Box 4+.');
  steps.push('Take a <b>Quiz</b> filtered to that domain.');
  const lens = EXAM.lengths || [];
  const sim = lens.length ? lens[lens.length - 1].label : '';
  steps.push(`When every domain feels solid, run <b>${sim ? esc(sim) + 's' : 'full-length practice tests'}</b> ` +
    `until you consistently beat ${Math.round(TH().good)}%.`);
  el.innerHTML = steps.map((s, i) => `${i + 1}. ${s}`).join('<br>');
}
function renderHistory() {
  const el = $('ov-history');
  const hist = readJSON(LS.hist, []);
  if (!hist.length) {
    el.innerHTML = '<p class="muted">No sessions yet — generate one in the Practice tab.</p>';
    return;
  }
  const m = S.get('passMark');
  el.innerHTML = hist.slice(0, 5).map(h =>
    `<div class="hist-row"><span>${esc(h.date)} · ${+h.n || 0}Q ${esc(MODE_NAMES[h.mode] || h.mode || '')}` +
    `${h.cert && MULTI ? ' · ' + esc(trackName(h.cert)) : ''}</span>` +
    `<strong class="${h.score >= m ? 'pass' : 'fail'}">${+h.score || 0}%</strong></div>`
  ).join('');
}

/* ---------- exam readiness ----------
   Per-domain rows: practice performance (pooled correct/answered across
   history entries that carry a per-domain breakdown) weighted against
   flashcard mastery (% of the domain's cards in Leitner box 4 or 5). The
   weighting is a setting (default 60/40). With only one signal available,
   that signal carries full weight; with none, the domain reports "No data
   yet".
   Per-duty rows: for tracks with official duty weights, each duty's test
   score is pooled from h.duties (recorded at quiz/test/endless completion;
   old entries without h.duties are treated as no duty data and never crash).
   Flashcards have no duty tags, so the track's overall flashcard mastery
   applies uniformly to every duty: dutyScore = wT*dutyTest + (1-wT)*mastery.
   Duties with neither signal report "No data yet".
   OVERALL: Σ(dutyScore × officialWeight), renormalized over the duties that
   have data. For track sets without official weights (All tracks) the old
   mean-of-domains overall is kept. Bands key off the pass mark. */
function computeReadiness(track) {
  const hist = readJSON(LS.hist, []);
  const boxes = readJSON(LS.boxes, {});
  const wT = S.get('testWeight') / 100;
  const per = domainsOf(BANK.filter(q => inTrack(q, track))).map(([d]) => {
    let c = 0, t = 0; // pooled practice performance for this domain
    hist.forEach(h => {
      const hd = h && h.domains && h.domains[d];
      if (hd) { c += (+hd.c || 0); t += (+hd.t || 0); }
    });
    const test = t > 0 ? 100 * c / t : null;
    const cards = DECK.filter(x => x.domain === d);
    let mastered = 0, touched = 0; // touched = cards with any recorded box (seen at least once)
    cards.forEach(x => {
      const b = +boxes[x.domain + '|' + x.front] || 0;
      if (b > 0) { touched++; if (b >= 4) mastered++; }
    });
    const mastery = touched ? 100 * mastered / cards.length : null;
    let score = null;
    if (test !== null && mastery !== null) score = wT * test + (1 - wT) * mastery;
    else if (test !== null) score = test;
    else if (mastery !== null) score = mastery;
    return { domain: d, test, mastery, score: score === null ? null : Math.round(score) };
  });
  const weights = DUTY_WEIGHTS[track];
  let duties = [], overall = null;
  if (weights) {
    // overall flashcard mastery for the track, applied uniformly to every duty
    const trackDoms = new Set(per.map(p => p.domain));
    const cards = DECK.filter(x => trackDoms.has(x.domain));
    let mastered = 0, touched = 0;
    cards.forEach(x => {
      const b = +boxes[x.domain + '|' + x.front] || 0;
      if (b > 0) { touched++; if (b >= 4) mastered++; }
    });
    const overallMastery = touched ? 100 * mastered / cards.length : null;
    duties = Object.keys(weights).map(duty => {
      let c = 0, t = 0; // pooled practice performance for this duty, this track only
      hist.forEach(h => {
        if (h.cert && h.cert !== '__all' && h.cert !== track) return;
        const hd = h && h.duties && h.duties[duty];
        if (hd) { c += (+hd.c || 0); t += (+hd.t || 0); }
      });
      const test = t > 0 ? 100 * c / t : null;
      let score = null;
      if (test !== null && overallMastery !== null) score = wT * test + (1 - wT) * overallMastery;
      else if (test !== null) score = test;
      else if (overallMastery !== null) score = overallMastery;
      return { duty, name: (DUTY_NAMES[track] || {})[duty] || 'Duty ' + duty,
        weight: weights[duty], test, mastery: overallMastery,
        score: score === null ? null : Math.round(score) };
    });
    const scored = duties.filter(p => p.score !== null);
    if (scored.length) {
      const wsum = scored.reduce((a, p) => a + p.weight, 0);
      overall = Math.round(scored.reduce((a, p) => a + p.score * p.weight, 0) / wsum);
    }
  } else {
    const scored = per.filter(p => p.score !== null);
    overall = scored.length
      ? Math.round(scored.reduce((a, p) => a + p.score, 0) / scored.length) : null;
  }
  return { per, duties, overall };
}
function readyBand(score) {
  const t = TH();
  if (score === null) return { label: 'No data yet', cls: 'muted' };
  if (score >= t.hi) return { label: 'Exam ready', cls: 'pass' };
  if (score >= t.pass) return { label: 'Almost there', cls: 'info' };
  if (score >= t.floor) return { label: 'Building momentum', cls: 'warn' };
  return { label: 'Early stages', cls: 'fail' };
}
function readyColor(score) {
  const t = TH();
  if (score >= t.hi) return 'var(--green)';
  if (score >= t.pass) return 'var(--blue)';
  if (score >= t.floor) return 'var(--amber)';
  return 'var(--red)';
}
function renderReadiness() {
  const el = $('ov-readiness');
  if (!el) return;
  const rc = $('r-cert');
  const track = rc && rc.value ? rc.value : '__all';
  const { per, duties, overall } = computeReadiness(track);
  const b = readyBand(overall);
  const w = S.get('testWeight');
  const rows = per.slice().sort((a, c) =>
    (a.score === null ? 9999 : a.score) - (c.score === null ? 9999 : c.score));
  let basis = DECK.length ? `Practice ${w}% · flashcards ${100 - w}%. ` : '';
  if (duties.length) basis += 'Overall is weighted by the official exam duty weights. ';
  el.innerHTML =
    `<div class="ready-head"><div class="ready-score ${b.cls}">${overall === null ? '—' : overall + '%'}</div>` +
    `<div><div class="ready-band ${b.cls}">${b.label}</div>` +
    `<p class="muted small" style="margin:4px 0 0">${basis}Pass heuristic: ${S.get('passMark')}% — ${esc(lcfirst(DISCLAIMER))}</p></div></div>` +
    rows.map(p => {
      if (p.score === null)
        return `<div class="dbar"><div class="dlbl"><span>${esc(p.domain)}</span>` +
          `<span class="muted">No data yet</span></div></div>`;
      const pb = readyBand(p.score);
      return `<div class="dbar"><div class="dlbl"><span>${esc(p.domain)}</span>` +
        `<span class="${pb.cls}">${p.score}% · ${pb.label}</span></div>` +
        `<div class="dtrack"><div class="dfill" style="width:${p.score}%;background:${readyColor(p.score)}"></div></div></div>`;
    }).join('') +
    (duties.length
      ? `<h3 class="duty-h">Duty breakdown, by official exam weight</h3>` +
        duties.map(p => {
          const lbl = `Duty ${p.duty}: ${p.name}, ${p.weight}% of exam`;
          if (p.score === null)
            return `<div class="dbar"><div class="dlbl"><span>${esc(lbl)}</span>` +
              `<span class="muted">No data yet</span></div></div>`;
          const pb = readyBand(p.score);
          return `<div class="dbar"><div class="dlbl"><span>${esc(lbl)}</span>` +
            `<span class="${pb.cls}">${p.score}% · ${pb.label}</span></div>` +
            `<div class="dtrack"><div class="dfill" style="width:${p.score}%;background:${readyColor(p.score)}"></div></div></div>`;
        }).join('')
      : '');
  renderCareers(per);
}

function matchLabel(avg) {
  const t = TH();
  if (avg === null) return { label: 'Study to unlock signal', cls: 'muted' };
  if (avg >= t.good) return { label: 'Strong match', cls: 'pass' };
  if (avg >= t.low) return { label: 'Developing', cls: 'info' };
  return { label: 'Early', cls: 'warn' };
}
function renderCareers(per) {
  const box = $('ov-careers');
  if (!box || !CAREERS.length) return;
  const byDom = {};
  per.forEach(p => { byDom[p.domain] = p.score; });
  const ranked = CAREERS.map(c => {
    const scores = c.domains.map(d => byDom[d]).filter(s => s !== null && s !== undefined);
    const avg = scores.length ? Math.round(scores.reduce((a, s) => a + s, 0) / scores.length) : null;
    return { title: c.title, domains: c.domains, why: c.why, avg };
  }).sort((a, b) => (b.avg === null ? -1 : b.avg) - (a.avg === null ? -1 : a.avg));
  box.innerHTML = ranked.slice(0, 6).map(c => {
    const m = matchLabel(c.avg);
    return `<div class="career"><div class="career-top"><h3>${esc(c.title)}</h3>` +
      `<span class="match ${m.cls}">${m.label}${c.avg !== null ? ' · ' + c.avg + '%' : ''}</span></div>` +
      `<div class="career-domains">${c.domains.map(esc).join(' · ')}</div>` +
      `<p class="muted small career-why">${esc(c.why || '')}</p></div>`;
  }).join('');
}

/* ---------- document library ----------
   Official AVIXA PDFs shipped in data/docs/ and cached offline by sw.js.
   Relative hrefs so the library works from the local copy with no network. */
const DOC_GROUPS = [
  { cert: 'CTS', docs: [
    ['cts_handbook_august_2026.pdf', 'CTS Candidate Handbook (Aug 2026)', 'Eligibility, scheduling, policies'],
    ['cts_exam_content_outline_2024.pdf', 'CTS Exam Content Outline 2024', 'Official duty/task weights'],
    ['code_of_ethics.pdf', 'CTS Code of Ethics and Conduct', 'Professional conduct requirements']
  ]},
  { cert: 'CTS-D', docs: [
    ['cts-d_handbook_august_2026.pdf', 'CTS-D Candidate Handbook (Aug 2026)', 'Eligibility, scheduling, policies'],
    ['cts-d_exam_content_outline.pdf', 'CTS-D Exam Content Outline', 'Official duty/task weights'],
    ['ctsd_math_formulas_2024.pdf', 'CTS-D Math Formulas 2024', 'The official formula sheet']
  ]},
  { cert: 'CTS-I', docs: [
    ['cts-i_handbook_august_2026.pdf', 'CTS-I Candidate Handbook (Aug 2026)', 'Eligibility, scheduling, policies'],
    ['cts-i_exam_content_outline.pdf', 'CTS-I Exam Content Outline', 'Official duty/task weights']
  ]},
  { cert: 'ANP', docs: [
    ['anp_handbook_2026.pdf', 'ANP Candidate Handbook 2026', 'Eligibility, scheduling, policies'],
    ['anp-exam-content-outline-october-2023.pdf', 'ANP Exam Content Outline (Oct 2023)', 'Official duty/task weights']
  ]},
  { cert: 'Shared', docs: [
    ['certification_fee_schedule_2025.pdf', 'Certification Fee Schedule 2025 (USD)', 'Exam, application and retest fees'],
    ['ru_options_chart_2023.pdf', 'Renewal Unit (RU) Options Chart', 'How to earn renewal units']
  ]}
];
(function library() {
  const el = $('doc-library');
  if (!el) return;
  el.innerHTML = DOC_GROUPS.map(g =>
    `<div class="dgroup"><h3>${esc(g.cert)}</h3>` +
    g.docs.map(([file, title, desc]) =>
      `<a href="data/docs/${esc(file)}" target="_blank" rel="noopener">` +
      `<div class="gt">${esc(title)}</div><div class="gd">${esc(desc)}</div></a>`).join('') +
    `</div>`).join('');
})();

/* ---------- certification roadmap ----------
   One checklist per cert track, in the forced order: CTS first (CTS-D and
   CTS-I require a current general CTS), ANP standalone with no prerequisite.
   One boolean per item, persisted as cts_roadmap_v1: { CTS: [bool,...], ... }. */
const ROADMAP = [
  { id: 'CTS', status: 'Exam booked: Friday, October 9, 2026, 3:45 PM ET, Pearson Professional Centers, 2 Teleport Dr, Suite 100, Staten Island, NY 10311.',
    note: null,
    items: ['Handbook read', 'Application approved', 'Fee paid ($490 non-member)', 'Pearson VUE scheduled', 'Exam taken', 'Pass'] },
  { id: 'CTS-D', status: null,
    note: 'Requires holding a current general CTS. 110 questions (10 pilot), 150 minutes.',
    items: ['Hold current CTS', 'Handbook read', 'Application submitted', 'Fee paid ($590)', 'Scheduled', 'Exam taken', 'Pass'] },
  { id: 'CTS-I', status: null,
    note: 'Requires holding a current general CTS. 110 questions (10 pilot), 150 minutes.',
    items: ['Hold current CTS', 'Handbook read', 'Application submitted', 'Fee paid ($590)', 'Scheduled', 'Exam taken', 'Pass'] },
  { id: 'ANP', status: null,
    note: 'No CTS required. 115 questions (15 pilot), 150 minutes.',
    items: ['Handbook read', 'Application submitted', 'Fee paid ($350)', 'Scheduled', 'Exam taken', 'Pass'] }
];
const RM_KEY = P + 'roadmap_v1';
function renderRoadmap() {
  const el = $('roadmap-tracks');
  if (!el) return;
  const state = readJSON(RM_KEY, {});
  el.innerHTML = ROADMAP.map((r, ri) => {
    const done = (state[r.id] || []).map(Boolean);
    const n = done.filter(Boolean).length;
    const pct = r.items.length ? Math.round(100 * n / r.items.length) : 0;
    return `<div class="rm-track"><h3>${ri + 1}. ${esc(r.id)}</h3>` +
      (r.status ? `<p class="small">${esc(r.status)}</p>` : '') +
      (r.note ? `<p class="rm-note2">${esc(r.note)}</p>` : '') +
      `<div class="rm-prog"><div class="dbar"><div class="dlbl"><span class="muted">Progress</span>` +
      `<span>${n}/${r.items.length}</span></div>` +
      `<div class="dtrack"><div class="dfill" style="width:${pct}%;background:var(--accent)"></div></div></div></div>` +
      r.items.map((item, ii) =>
        `<label class="checkline"><input type="checkbox" data-rm="${ri}" data-ii="${ii}"${done[ii] ? ' checked' : ''}> ${esc(item)}</label>`
      ).join('') + `</div>`;
  }).join('');
  el.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', () => {
      const s = readJSON(RM_KEY, {});
      const id = ROADMAP[+cb.dataset.rm].id;
      const arr = Array.isArray(s[id]) ? s[id].slice() : [];
      arr[+cb.dataset.ii] = cb.checked;
      s[id] = arr;
      writeJSON(RM_KEY, s);
      renderRoadmap();
    });
  });
}

/* ---------- guides ---------- */
(function guides() {
  const list = $('guide-list');
  list.innerHTML = '';
  GUIDE_LIST.forEach(g => {
    const b = document.createElement('button');
    b.innerHTML = `<div class="gt">${esc(g.title)}</div><div class="gd">${esc(g.domain || '')}</div>`;
    b.addEventListener('click', () => {
      list.parentElement.style.display = 'none';
      $('guide-view').style.display = '';
      $('guide-body').innerHTML = md(g.body);
      window.scrollTo(0, 0);
    });
    list.appendChild(b);
  });
  $('guide-back').addEventListener('click', () => {
    $('guide-view').style.display = 'none';
    list.parentElement.style.display = '';
    window.scrollTo(0, 0);
  });
})();

/* ---------- flashcards (Leitner) ---------- */
const FC = (function () {
  if (!DECK.length) return { reload() {}, rebuild() {}, show() {}, flip() { return false; } };
  let boxes = readJSON(LS.boxes, {});
  const save = () => { writeJSON(LS.boxes, boxes); notifyProgress(); };
  const key = c => c.domain + '|' + c.front;
  const boxOf = c => boxes[key(c)] || 1;
  const card = $('fc-card');

  const cats = [...new Set(DECK.map(c => c.domain))].sort();
  const sel = $('fc-filter');
  cats.forEach(c => {
    const o = document.createElement('option');
    o.value = c; o.textContent = `${c} (${DECK.filter(x => x.domain === c).length})`;
    sel.appendChild(o);
  });

  let deck = [], idx = 0, flipped = false;
  const inFilter = c => sel.value === '__all' || c.domain === sel.value;

  function buildDeck() {
    deck = shuffle(DECK.filter(inFilter).sort((a, b) => boxOf(a) - boxOf(b)));
    idx = 0;
  }
  function renderBoxes() {
    const list = DECK.filter(inFilter);
    const counts = [0, 0, 0, 0, 0, 0];
    list.forEach(c => counts[boxOf(c)]++);
    const cur = deck.length && idx < deck.length ? boxOf(deck[idx]) : 0;
    $('fc-boxes').innerHTML = [1, 2, 3, 4, 5].map(b =>
      `<div class="box${cur === b ? ' cur' : ''}"><b>${counts[b]}</b>Box ${b}</div>`).join('');
    $('fc-progress').textContent = list.length
      ? `${counts[4] + counts[5]}/${list.length} mastered (Box 4+) · ${deck.length - idx} left in deck`
      : 'No cards in this category yet.';
    $('fc-count').textContent = `· ${list.length} cards`;
  }
  function show() {
    flipped = false;
    card.classList.remove('flipped');
    if (!deck.length) {
      $('fc-front').textContent = 'Deck complete — nice work!';
      $('fc-back').textContent = 'Shuffle to run it again.';
    } else {
      const c = deck[idx];
      const rev = S.get('cardFront') === 'definition';
      $('fc-front').textContent = rev ? c.back : c.front;
      $('fc-back').textContent = rev ? c.front : c.back;
    }
    renderBoxes();
  }
  function flip() {
    flipped = !flipped;
    card.classList.toggle('flipped', flipped);
    return true;
  }
  function grade(ok) {
    if (!deck.length) return;
    const c = deck[idx];
    boxes[key(c)] = ok ? Math.min(5, boxOf(c) + 1) : 1;
    Sound.play(ok ? 'ok' : 'no');
    save();
    idx++;
    if (idx >= deck.length) {
      // rebuild with remaining weak cards first for continuous drilling
      deck = shuffle(DECK.filter(x => boxOf(x) < 3 && inFilter(x)));
      idx = 0;
    }
    show();
  }
  card.addEventListener('click', flip);
  $('fc-got').addEventListener('click', () => grade(true));
  $('fc-miss').addEventListener('click', () => grade(false));
  $('fc-shuffle').addEventListener('click', () => { buildDeck(); show(); });
  $('fc-reset').addEventListener('click', () => {
    if (!confirm('Reset all flashcard progress?')) return;
    boxes = {}; save(); buildDeck(); show();
  });
  sel.addEventListener('change', () => { buildDeck(); show(); });
  buildDeck(); show();
  return {
    show, flip,
    rebuild: () => { buildDeck(); show(); },
    reload() { // re-read boxes from storage (e.g. after adopting cloud state), then redraw
      boxes = readJSON(LS.boxes, {});
      buildDeck(); show();
    }
  };
})();

/* ---------- shared test/quiz engine ---------- */
function makeTimer(displayEl, minutes, onExpire) {
  if (!minutes || minutes <= 0) { displayEl.style.display = 'none'; return { stop() {} }; }
  let left = Math.round(minutes * 60);
  displayEl.style.display = '';
  const tick = () => {
    displayEl.textContent = fmtSecs(left);
    displayEl.classList.toggle('danger', left <= 300);
    if (left <= 0) { clearInterval(iv); onExpire(); return; }
    left--;
  };
  const iv = setInterval(tick, 1000);
  tick();
  return { stop() { clearInterval(iv); } };
}
// Render a question's options in a fixed display order (shuffled once per
// question), so the bank's answer position never gives the answer away.
function renderOptions(box, q, order, onPick) {
  box.innerHTML = '';
  order.forEach(oi => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'option';
    b.textContent = q.options[oi];
    b.dataset.oi = oi;
    b.addEventListener('click', () => onPick(oi, b));
    box.appendChild(b);
  });
}
function markAnswered(box, correct, picked) {
  [...box.children].forEach(b => {
    b.disabled = true;
    const oi = +b.dataset.oi;
    if (oi === correct) b.classList.add('correct');
    else if (oi === picked) b.classList.add('wrong');
    else b.classList.add('dim');
  });
}
function reviewItem(q, picked) {
  const ok = picked === q.correct;
  const mark = ok ? '<span class="pass">✓ Correct</span>' : '<span class="fail">✗ Missed</span>';
  const your = picked == null ? '<em>unanswered</em>' : esc(q.options[picked]);
  return `<div class="review-item"><div class="rq">${mark} · ${esc(q.q)}</div>` +
    `<div class="ra">Your answer: <strong>${your}</strong><br>Correct answer: <strong class="pass">${esc(q.options[q.correct])}</strong></div>` +
    `<div class="re">${esc(q.explanation)}</div></div>`;
}
function tally(items, okAt, keyOf) {
  const by = {};
  items.forEach((it, i) => {
    const k = keyOf(it);
    by[k] = by[k] || { c: 0, t: 0 };
    by[k].t++;
    if (okAt(i)) by[k].c++;
  });
  return by;
}
const AUTO_ADVANCE_MS = 1300;

/* ---------- quiz ---------- */
const Quiz = (function () {
  if (!BANK.length) return {};
  let qs = [], orders = [], i = 0, results = [], timer = null, total = 0, advanceT = null, expired = false;
  const trackSel = $('q-cert'), domSel = $('q-domain');
  fillTrackSelect(trackSel, S.get('track'));
  function rebuildDomains() {
    const keep = domSel.value;
    domSel.innerHTML = '<option value="__all">All domains</option>' +
      domainsOf(BANK.filter(q => inTrack(q, trackSel.value)))
        .map(([d, n]) => `<option value="${esc(d)}">${esc(d)} (${n})</option>`).join('');
    domSel.value = keep;
    if (domSel.value !== keep) domSel.value = '__all';
  }
  rebuildDomains();
  trackSel.addEventListener('change', rebuildDomains);

  let qCount = S.get('quizLength');
  setSeg('q-count-seg', 'n', qCount);
  bindSeg('q-count-seg', 'n', v => { qCount = +v; });

  $('q-start').addEventListener('click', () => {
    const d = domSel.value;
    const pool = BANK.filter(q => inTrack(q, trackSel.value) && (d === '__all' || q.domain === d));
    const n = qCount === 0 ? pool.length : qCount;
    // unchecked "Shuffle questions" keeps bank order
    qs = $('q-shuffle').checked ? sampleNoRepeat(pool, n) : pool.slice(0, n);
    if (!qs.length) { alert('No questions for this selection.'); return; }
    orders = qs.map(indexOrder);
    i = 0; results = []; total = qs.length; expired = false;
    $('quiz-setup').style.display = 'none';
    $('quiz-results').style.display = 'none';
    $('quiz-run').style.display = '';
    if (timer) timer.stop();
    timer = makeTimer($('quiz-timer'), +$('q-timer').value || 0, () => { expired = true; finish(); });
    show();
  });

  function show() {
    clearTimeout(advanceT);
    const q = qs[i];
    $('quiz-pos').textContent = `Question ${i + 1} of ${total}`;
    $('quiz-bar').style.width = (100 * i / total) + '%';
    $('quiz-tag').className = tagCls(q.domain);
    $('quiz-tag').textContent = q.domain;
    $('quiz-q').textContent = q.q;
    $('quiz-explain').style.display = 'none';
    $('quiz-next').style.display = 'none';
    renderOptions($('quiz-opts'), q, orders[i], answer);
    releaseFocus();
    window.scrollTo(0, 0);
  }
  function answer(oi) {
    const q = qs[i];
    if (results.length > i) return; // already answered
    const ok = oi === q.correct;
    results.push({ q, picked: oi, ok });
    markAnswered($('quiz-opts'), q.correct, oi);
    Sound.play(ok ? 'ok' : 'no');
    const ex = $('quiz-explain');
    ex.innerHTML = `<div class="explain"><strong>${ok ? 'Correct.' : 'Not quite.'}</strong> ${esc(q.explanation)}</div>`;
    ex.style.display = '';
    $('quiz-next').style.display = '';
    $('quiz-next').textContent = i + 1 === total ? 'See results →' : 'Next →';
    if (ok && S.get('autoAdvance')) {
      const at = i;
      advanceT = setTimeout(() => { if (i === at && shown($('quiz-run'))) next(); }, AUTO_ADVANCE_MS);
    }
  }
  function next() { clearTimeout(advanceT); i++; i < total ? show() : finish(); }
  $('quiz-next').addEventListener('click', next);
  $('quiz-quit').addEventListener('click', () => {
    clearTimeout(advanceT);
    if (timer) timer.stop();
    if (results.length) finish(); else backToSetup();
  });

  function backToSetup() {
    $('quiz-run').style.display = 'none';
    $('quiz-results').style.display = 'none';
    $('quiz-setup').style.display = '';
    releaseFocus();
  }
  function finish() {
    clearTimeout(advanceT);
    if (timer) timer.stop();
    const answered = results.length;
    const correct = results.filter(r => r.ok).length;
    const pct = answered ? Math.round(100 * correct / answered) : 0;
    $('quiz-run').style.display = 'none';
    $('quiz-results').style.display = '';
    const t = TH(), cls = bandClass(pct);
    const sc = $('qr-score');
    sc.textContent = pct + '%';
    sc.className = 'big-score ' + cls;
    $('qr-verdict').textContent = pct >= t.good ? 'Strong — exam ready on this material.'
      : pct >= t.low ? 'Getting there — review the weak domains.' : 'Keep studying — hit the guides and cards first.';
    $('qr-verdict').className = 'verdict ' + cls;
    $('qr-note').textContent = (expired ? 'Time expired. ' : '') +
      (answered < total ? `Scored on the ${answered} of ${total} questions you answered.` : '');
    const byDom = tally(results, k => results[k].ok, r => r.q.domain);
    const byDuty = {}; // per-duty breakdown (questions without a duty tag are skipped)
    results.forEach(r => {
      const d = r.q && r.q.duty;
      if (!d) return;
      byDuty[d] = byDuty[d] || { c: 0, t: 0 };
      byDuty[d].t++; if (r.ok) byDuty[d].c++;
    });
    $('qr-domains').innerHTML = Object.entries(byDom).sort(byWorst).map(([d, v]) => domainBar(d, v.c, v.t)).join('');
    $('qr-review-list').style.display = 'none';
    $('qr-review-list').innerHTML = results.map(r => reviewItem(r.q, r.picked)).join('');
    releaseFocus();
    if (answered) {
      const certs = [...new Set(results.map(r => certOf(r.q)))];
      pushHistory({ date: today(), n: answered, score: pct, mode: 'quiz', cert: certs.length === 1 ? certs[0] : '__all', domains: byDom, duties: byDuty });
      notifyProgress();
      renderHistory();
    }
    window.scrollTo(0, 0);
  }
  $('qr-retry').addEventListener('click', backToSetup);
  $('qr-review').addEventListener('click', () => {
    const l = $('qr-review-list');
    l.style.display = l.style.display === 'none' ? '' : 'none';
  });
  return {
    setCount(n) { qCount = n; setSeg('q-count-seg', 'n', n); },
    setTrack(tr) { fillTrackSelect(trackSel, tr); rebuildDomains(); } // a running quiz captured its pool at start
  };
})();

/* ---------- practice test generator ---------- */
const PTest = (function () {
  if (!BANK.length) return {};
  let qs = [], orders = [], i = 0, answers = [], timer = null, meta = {};
  const trackSel = $('t-cert');
  fillTrackSelect(trackSel, S.get('track'));
  const domGrid = $('t-domain-grid');
  function rebuildDomainGrid() {
    domGrid.innerHTML = '';
    domainsForTrack(trackSel.value).forEach(d => {
      const lab = document.createElement('label');
      lab.innerHTML = `<input type="checkbox" value="${esc(d)}" checked> ${esc(d)}`;
      domGrid.appendChild(lab);
    });
  }
  rebuildDomainGrid();
  trackSel.addEventListener('change', rebuildDomainGrid);
  $('t-dom-all').addEventListener('click', () => domGrid.querySelectorAll('input').forEach(c => { c.checked = true; }));
  $('t-dom-none').addEventListener('click', () => domGrid.querySelectorAll('input').forEach(c => { c.checked = false; }));

  // lengths and exam pace come from topic.js; pace multiplier from Settings
  const LENGTHS = EXAM.lengths && EXAM.lengths.length ? EXAM.lengths : [{ n: 25, label: 'Quick' }, { n: 50, label: 'Standard' }];
  const perQ = (EXAM.simMinutes || 150) / (EXAM.simQuestions || 110); // minutes per question at exam pace
  const PACE = { off: 0, exam: 1, relaxed: 1.5, extended: 2 };
  $('t-len-seg').innerHTML = LENGTHS.map(l => `<button type="button" data-n="${l.n}">${esc(l.label)} · ${l.n}</button>`).join('');
  let tLen = S.get('testLength'), tMix = 'balanced';
  const minutesFor = n => Math.round(n * perQ * (PACE[S.get('testPace')] || 0));
  function applyDefaults() { // a running test captured its questions and timer at start
    tLen = S.get('testLength');
    setSeg('t-len-seg', 'n', tLen);
    $('t-timer').value = minutesFor(tLen);
    const pace = S.get('testPace');
    $('t-timer-hint').textContent = pace === 'off' ? 'Untimed by default — set the pace in Settings.'
      : `Exam pace: ${EXAM.simMinutes || 150} min for ${EXAM.simQuestions || 110} questions` +
        (pace === 'exam' ? '.' : ` · ${pace === 'relaxed' ? '1.5×' : '2×'} pace from Settings.`);
  }
  bindSeg('t-len-seg', 'n', v => { tLen = +v; $('t-timer').value = minutesFor(tLen); });
  bindSeg('t-mix-seg', 'm', v => { tMix = v; });
  applyDefaults();

  function buildTest() {
    // selected domains drive both mix modes; nothing checked = every domain of the track
    const checked = [...domGrid.querySelectorAll('input:checked')].map(c => c.value);
    const selected = checked.length ? checked : domainsForTrack(trackSel.value);
    const pool = BANK.filter(q => inTrack(q, trackSel.value));
    return selectQuestions(pool, selected, tLen, tMix);
  }

  $('t-start').addEventListener('click', () => {
    const { picked, capped } = buildTest();
    if (!picked.length) { alert('No questions available for this selection.'); return; }
    qs = picked; i = 0; answers = new Array(qs.length).fill(null);
    orders = qs.map(indexOrder); // stable per question for the whole run
    meta = { n: qs.length, mode: tMix === 'balanced' ? 'balanced' : 'random', capped, cert: trackSel.value };
    $('test-setup').style.display = 'none';
    $('test-results').style.display = 'none';
    $('test-run').style.display = '';
    if (timer) timer.stop();
    timer = makeTimer($('test-timer'), +$('t-timer').value || 0, () => grade(true));
    show();
  });

  function drawOptions() {
    const box = $('test-opts');
    renderOptions(box, qs[i], orders[i], oi => { answers[i] = oi; drawOptions(); drawProgress(); });
    [...box.children].forEach(b => {
      const on = +b.dataset.oi === answers[i];
      b.classList.toggle('selected', on);
      b.setAttribute('aria-pressed', on);
    });
  }
  function drawProgress() {
    const answered = answers.filter(a => a !== null).length;
    $('test-bar').style.width = (100 * answered / qs.length) + '%';
  }
  function show() {
    const q = qs[i];
    $('test-pos').textContent = `Question ${i + 1} of ${qs.length}${meta.capped ? ' (capped: bank exhausted)' : ''}`;
    $('test-tag').className = tagCls(q.domain);
    $('test-tag').textContent = q.domain;
    $('test-q').textContent = q.q;
    drawOptions();
    drawProgress();
    $('test-prev').disabled = i === 0;
    $('test-next').style.display = i === qs.length - 1 ? 'none' : '';
    $('test-finish').style.display = i === qs.length - 1 ? '' : 'none';
    releaseFocus();
    window.scrollTo(0, 0);
  }
  $('test-prev').addEventListener('click', () => { if (i > 0) { i--; show(); } });
  $('test-next').addEventListener('click', () => { if (i < qs.length - 1) { i++; show(); } });
  $('test-finish').addEventListener('click', () => {
    const un = answers.filter(a => a === null).length;
    if (un && !confirm(`${un} question${un > 1 ? 's' : ''} unanswered. Finish and grade anyway?`)) return;
    grade(false);
  });
  $('test-quit').addEventListener('click', () => {
    if (!confirm('Abandon this test? Progress will be lost.')) return;
    if (timer) timer.stop();
    $('test-run').style.display = 'none';
    $('test-setup').style.display = '';
    releaseFocus();
  });

  function grade(expired) {
    if (timer) timer.stop();
    const okAt = idx => answers[idx] === qs[idx].correct;
    const correct = qs.filter((q, idx) => okAt(idx)).length;
    const byDom = tally(qs, okAt, q => q.domain);
    const byDuty = {}; // per-duty breakdown (questions without a duty tag are skipped)
    qs.forEach((q, idx) => {
      const d = q && q.duty;
      if (!d) return;
      byDuty[d] = byDuty[d] || { c: 0, t: 0 };
      byDuty[d].t++; if (okAt(idx)) byDuty[d].c++;
    });
    const pct = Math.round(100 * correct / qs.length);
    const t = TH();
    $('test-run').style.display = 'none';
    $('test-results').style.display = '';
    const sc = $('tr-score');
    const sb = readyBand(pct);
    sc.textContent = pct + '%';
    sc.className = 'big-score ' + sb.cls;
    const verdict = $('tr-verdict');
    if (pct >= t.hi) { verdict.textContent = 'Excellent — exam ready.'; verdict.className = 'verdict pass'; }
    else if (pct >= t.pass) { verdict.textContent = 'Likely pass — keep polishing weak domains.'; verdict.className = 'verdict pass'; }
    else { verdict.textContent = 'Below the pass heuristic — more study needed.'; verdict.className = 'verdict fail'; }
    $('tr-note').textContent = (expired ? 'Time expired — test auto-graded. ' : '') +
      `Pass heuristic: ${t.pass}%. ${DISCLAIMER}`;
    const dutyNames = (meta.cert && DUTY_NAMES[meta.cert]) || {};
    const dutyLabel = d => dutyNames[d] ? `Duty ${d}: ${dutyNames[d]}` : `Duty ${d}`;
    $('tr-domains').innerHTML =
      Object.entries(byDom).sort(byWorst).map(([d, v]) => readyBar(d, v.c, v.t)).join('') +
      (Object.keys(byDuty).length
        ? `<h3 class="duty-h">Duty breakdown, by official exam weight</h3>` +
          Object.entries(byDuty).sort(byWorst).map(([d, v]) => readyBar(dutyLabel(d), v.c, v.t)).join('')
        : '');
    $('tr-review-list').style.display = 'none';
    $('tr-review-list').innerHTML = qs.map((q, idx) => reviewItem(q, answers[idx])).join('');
    releaseFocus();
    // history — entries carry the track; old entries without `cert` keep working
    pushHistory({ date: today(), n: qs.length, score: pct, mode: meta.mode, cert: meta.cert, domains: byDom, duties: byDuty });
    notifyProgress();
    renderHistory();
    window.scrollTo(0, 0);
  }
  $('tr-new').addEventListener('click', () => {
    $('test-results').style.display = 'none';
    $('test-setup').style.display = '';
    releaseFocus();
  });
  $('tr-review').addEventListener('click', () => {
    const l = $('tr-review-list');
    l.style.display = l.style.display === 'none' ? '' : 'none';
  });
  return {
    applyDefaults,
    setTrack(tr) { fillTrackSelect(trackSel, tr); rebuildDomainGrid(); }
  };
})();

/* ---------- scenario drills ----------
   Exam-style scenario drills. Results are recorded into session history
   (mode 'drill') so they ride the same local + cloud sync channel as
   quizzes and practice tests. */
const Drills = (function () {
  let qs = [], orders = [], i = 0, answers = [];
  if (!DRILL_LIST.length) return {};
  $('drill-count').textContent = DRILL_LIST.length;
  $('drills-intro').textContent = fill(COPY.drillsIntro);

  function backToSetup() {
    $('drill-run').style.display = 'none';
    $('drill-results').style.display = 'none';
    $('drill-setup').style.display = '';
  }
  function show(scroll) {
    const d = qs[i], picked = answers[i];
    $('drill-pos').textContent = `Drill ${i + 1} of ${qs.length}`;
    $('drill-bar').style.width = (100 * answers.filter(a => a !== null).length / qs.length) + '%';
    $('drill-tag').className = 'tag';
    $('drill-tag').textContent = d.duty || '';
    $('drill-task').textContent = d.task || '';
    $('drill-task').style.display = d.task ? '' : 'none';
    $('drill-scenario').textContent = d.scenario;
    $('drill-q').textContent = d.question;
    const box = $('drill-opts');
    renderOptions(box, d, orders[i], oi => {
      if (answers[i] !== null) return;
      answers[i] = oi;
      Sound.play(oi === d.correct ? 'ok' : 'no');
      show(false);
    });
    const ex = $('drill-explain');
    if (picked !== null) {
      markAnswered(box, d.correct, picked);
      const ok = picked === d.correct;
      ex.style.display = '';
      ex.innerHTML = `<div class="${ok ? 'pass' : 'fail'}" style="font-weight:700;margin-bottom:6px">${ok ? '✓ Correct' : '✗ Not quite — correct answer: ' + esc(d.options[d.correct])}</div><div>${esc(d.explanation)}</div>`;
      ex.className = 'explain ' + (ok ? 'ok' : 'no');
      $('drill-next').style.display = '';
      $('drill-next').textContent = i === qs.length - 1 ? 'See results →' : 'Next →';
    } else {
      ex.style.display = 'none';
      $('drill-next').style.display = 'none';
    }
    releaseFocus();
    if (scroll !== false) window.scrollTo(0, 0);
  }
  function finish() {
    const okAt = idx => answers[idx] === qs[idx].correct;
    const correct = qs.filter((d, idx) => okAt(idx)).length;
    const byDuty = tally(qs, okAt, d => d.duty || 'Drills');
    const pct = Math.round(100 * correct / qs.length);
    const t = TH();
    $('drill-run').style.display = 'none';
    $('drill-results').style.display = '';
    const sc = $('dr-score');
    sc.textContent = pct + '%';
    sc.className = 'big-score ' + (pct >= t.pass ? 'pass' : 'fail');
    const verdict = $('dr-verdict');
    if (pct >= t.hi) { verdict.textContent = 'Excellent — strong decision instincts.'; verdict.className = 'verdict pass'; }
    else if (pct >= t.pass) { verdict.textContent = 'Solid — keep polishing the weak duties.'; verdict.className = 'verdict pass'; }
    else { verdict.textContent = 'Below the pass heuristic — run them again.'; verdict.className = 'verdict fail'; }
    $('dr-duties').innerHTML = Object.entries(byDuty).sort(byWorst).map(([d, v]) => domainBar(d, v.c, v.t)).join('');
    $('dr-review-list').style.display = 'none';
    $('dr-review-list').innerHTML = qs.map((d, idx) => {
      const picked = answers[idx], ok = picked === d.correct;
      const your = picked == null ? '<em>unanswered</em>' : esc(d.options[picked]);
      return `<div class="review-item"><div class="rq">${ok ? '<span class="pass">✓ Correct</span>' : '<span class="fail">✗ Missed</span>'} · ${esc(d.duty || '')}</div>` +
        `<div class="drill-scenario" style="margin:8px 0">${esc(d.scenario)}</div>` +
        `<div class="ra">Your answer: <strong>${your}</strong><br>Correct answer: <strong class="pass">${esc(d.options[d.correct])}</strong></div>` +
        `<div class="re">${esc(d.explanation)}</div></div>`;
    }).join('');
    releaseFocus();
    // history — same shape as quizzes/tests, so overview + cloud sync pick it up
    pushHistory({ date: today(), n: qs.length, score: pct, mode: 'drill', domains: byDuty });
    notifyProgress();
    renderHistory();
    window.scrollTo(0, 0);
  }
  $('drill-start').addEventListener('click', () => {
    qs = shuffle(DRILL_LIST); i = 0; answers = new Array(qs.length).fill(null);
    orders = qs.map(indexOrder);
    $('drill-setup').style.display = 'none';
    $('drill-results').style.display = 'none';
    $('drill-run').style.display = '';
    show();
  });
  $('drill-next').addEventListener('click', () => {
    if (i < qs.length - 1) { i++; show(); }
    else finish();
  });
  $('drill-quit').addEventListener('click', () => {
    if (!confirm('End this drill run? Progress will be lost.')) return;
    backToSetup();
  });
  $('dr-retry').addEventListener('click', () => {
    $('drill-results').style.display = 'none';
    $('drill-setup').style.display = '';
  });
  $('dr-review').addEventListener('click', () => {
    const l = $('dr-review-list');
    l.style.display = l.style.display === 'none' ? '' : 'none';
  });
  return {};
})();

/* ---------- endless adaptive mode ----------
   Difficulty 1-5 is auto-tagged per question at load (length + signal words
   from topic.js), unless the question sets `diff` itself. The player's level
   floats 1.0-5.0: correct answers push it up, misses pull it down (the ramp
   is a setting), and the next question is drawn from the bucket nearest the
   level. Questions seen before in a run come back rephrased (stem rewrite +
   reshuffled options). The HUD tracks level, streak and rolling accuracy in
   real time. Ending a run pushes a history entry so it feeds readiness like
   any other practice. */
(function tagDifficulty() {
  const D = T.difficulty || {};
  const HARD = new RegExp(D.hard || 'calculat|scenario|troubleshoot|best practice|most likely|except|difference between|compare|sequence|how many|how much|how long|how far', 'i');
  const EASY = new RegExp(D.easy || '^(what is|what are|what does|what do the letters)', 'i');
  BANK.forEach((q, i) => {
    q._qi = i;
    if (q.diff >= 1 && q.diff <= 5) { q._diff = Math.round(q.diff); return; }
    let d = 2;
    if (q.q.length > 90) d++;
    if (q.q.length > 140) d++;
    if (HARD.test(q.q)) d++;
    if (EASY.test(q.q)) d--;
    const avgOpt = q.options.reduce((a, o) => a + o.length, 0) / q.options.length;
    if (avgOpt > 45) d++;
    q._diff = Math.min(5, Math.max(1, d));
  });
})();

const LEVEL_NAMES = Array.isArray(T.levels) && T.levels.length === 5
  ? T.levels : ['Foundations', 'Core Knowledge', 'Proficient', 'Advanced', 'Expert'];
const RAMPS = {
  gentle: { up: 0.25, bonus: 0.1, down: 0.35 },
  normal: { up: 0.35, bonus: 0.15, down: 0.5 },
  steep: { up: 0.5, bonus: 0.2, down: 0.7 }
};

const Endless = (function () {
  const seen = {}; // _qi -> times answered this run
  let pool = [], recent = [];
  const trackSel = $('e-cert');
  fillTrackSelect(trackSel, S.get('track'));
  let eSource = 'bank'; // bank | mixed | forge
  const forgeTracks = HAS_FORGE ? FORGE.tracks() : [];
  if (!HAS_FORGE) $('e-src-wrap').hidden = true;
  if (!BANK.length) eSource = 'forge'; // generated-only topic
  setSeg('e-src-seg', 's', eSource);
  bindSeg('e-src-seg', 's', v => { eSource = v; renderSetup(); });
  let level = 1, peak = 1, streak = 0, bestStreak = 0;
  let correct = 0, total = 0, win = [], cur = null, byDom = {}, byDuty = {};
  // timer + lightning-round state
  let eTimerOn = false, eLightning = false, locked = false, past = [];
  let timerSecs = 150, timeLeft = 150, timerId = null, runTrack = DEFAULT_TRACK, ramp = RAMPS.normal;
  let runId = 0, pendingT = null; // runId invalidates timeouts from an earlier run

  const getBest = () => readJSON(LS.best, {});
  function renderBest() {
    const b = getBest()[trackSel.value];
    const where = MULTI ? ` on ${trackSel.value === '__all' ? 'all ' + TRACK_PLURAL : 'this ' + TRACK_WORD.toLowerCase()}` : '';
    $('e-best').textContent = b ? `Personal best${where}: Lv ${b} · ${LEVEL_NAMES[b - 1]}` : `No runs yet${where} — set the bar.`;
  }
  function renderSetup() {
    $('e-timer-label').textContent = `⏱ Per-question timer (${fmtSecs(S.get('endlessSecs'))})`;
    if (HAS_FORGE) {
      const tr = trackSel.value;
      const covers = forgeTracks.map(trackName).join(', ');
      const has = tr === '__all' || forgeTracks.indexOf(tr) !== -1;
      $('e-forge-note').textContent = 'Generated questions are built fresh every draw — calculations with new numbers, ' +
        'concepts with rotated distractors.' + (MULTI ? ` Currently covers ${covers}.` : '') +
        (!has && eSource !== 'bank' ? ` Nothing is generated for ${trackName(tr)} yet, so this run uses the bank.` : '');
    }
  }
  trackSel.addEventListener('change', () => { renderBest(); renderSetup(); });
  renderBest();
  renderSetup();

  const diffPips = d => '●'.repeat(d) + '○'.repeat(5 - d);
  const levelName = () => LEVEL_NAMES[Math.min(4, Math.max(0, Math.round(level) - 1))];

  /* --- rephrase engine: meaning-preserving rewrites, rotated by repeat count --- */
  const REWRITES = [
    [/^What is ([^?]+)\?$/i, 'Which of the following best describes $1?'],
    [/^What are ([^?]+)\?$/i, 'Which of the following best describes $1?'],
    [/^Which of the following is NOT ([^?]+)\?$/i, 'All of the following are $1 EXCEPT:']
  ];
  const PREFIXES = Array.isArray(T.rephrasePrefixes) && T.rephrasePrefixes.length
    ? T.rephrasePrefixes : ['Quick check: ', 'Think it through: ', 'Once more: '];
  const FALLBACKS = PREFIXES.map(p => s => p + lcfirst(s));
  function rephrase(q, n) {
    // odd repeats use a pattern-matching rewrite when one fits; even repeats
    // use a lead-in, so back-to-back repeats never read identically
    const matches = REWRITES.filter(rw => rw[0].test(q.q));
    if (matches.length && n % 2 === 1) {
      const rw = matches[Math.floor((n - 1) / 2) % matches.length];
      return q.q.replace(rw[0], rw[1]);
    }
    return FALLBACKS[(n - 1) % FALLBACKS.length](q.q);
  }

  function pick() {
    if (!pool.length) return null;
    const target = Math.round(level);
    const cands = pool.length > recent.length ? pool.filter(q => recent.indexOf(q) === -1) : pool.slice();
    let best = null, bestScore = 1e9;
    for (const q of cands) {
      let s = Math.abs(q._diff - target) + Math.random() * 0.6;
      if (seen[q._qi]) s += 1.5; // prefer unseen questions
      if (s < bestScore) { bestScore = s; best = q; }
    }
    return best;
  }

  function hud(bump) {
    const lv = Math.round(level);
    const el = $('e-level');
    el.textContent = 'Lv ' + lv;
    if (bump) { el.classList.remove('bump'); void el.offsetWidth; el.classList.add('bump'); }
    $('e-level-name').textContent = levelName();
    // progress toward the next displayed level: Lv n spans [n − 0.5, n + 0.5)
    const lower = Math.max(1, lv - 0.5), upper = Math.min(5, lv + 0.5);
    $('e-lvbar').style.width = (level >= 5 ? 100 : Math.round(100 * (level - lower) / (upper - lower))) + '%';
    $('e-streak').textContent = streak > 1 ? '🔥 ' + streak : '';
    $('e-acc').textContent = win.length ? Math.round(100 * win.filter(Boolean).length / win.length) + '% last ' + win.length : '—';
    $('e-score').textContent = correct + '/' + total;
  }

  function nextQ() {
    // forged questions are generated fresh per draw, targeted at the current level
    const useForge = HAS_FORGE && (eSource === 'forge' || (eSource === 'mixed' && Math.random() < S.get('mixedShare') / 100));
    if (useForge) {
      const gs = FORGE.draw(1, { cert: runTrack, diff: Math.round(level) });
      if (gs.length) return gs[0];
    }
    return pick() || (HAS_FORGE ? FORGE.draw(1, { cert: runTrack, diff: Math.round(level) })[0] : null);
  }

  function drawTimer() {
    const el = $('e-timer');
    el.style.display = eTimerOn ? '' : 'none';
    if (eTimerOn) {
      el.textContent = '⏱ ' + fmtSecs(Math.max(0, timeLeft));
      el.classList.toggle('low', timeLeft <= Math.min(30, Math.round(timerSecs / 5)));
    }
  }
  function stopTimer() { if (timerId) { clearInterval(timerId); timerId = null; } }
  function startTimer() {
    stopTimer();
    timeLeft = timerSecs;
    drawTimer();
    if (!eTimerOn) return;
    timerId = setInterval(() => {
      if (locked) return;
      timeLeft--;
      drawTimer();
      if (timeLeft <= 0) resolve(false, null, true);
    }, 1000);
  }
  function renderPast() {
    const c = $('e-carousel');
    if (!eLightning || !past.length) { c.style.display = 'none'; return; }
    c.style.display = '';
    c.innerHTML = past.slice(-30).map(ok => `<span class="e-chip ${ok ? 'ok' : 'no'}">${ok ? '✓' : '✗'}</span>`).join('');
    c.scrollLeft = c.scrollWidth;
  }
  function later(fn, ms) {
    clearTimeout(pendingT);
    const rid = runId;
    pendingT = setTimeout(() => { if (rid === runId && $('endless-run').style.display !== 'none') fn(); }, ms);
  }

  function show() {
    clearTimeout(pendingT);
    cur = nextQ();
    if (!cur) { finish(); return; }
    locked = false;
    recent.push(cur); if (recent.length > 30) recent.shift();
    const n = seen[cur._qi] || 0;
    const text = n ? rephrase(cur, n) : cur.q;
    const order = indexOrder(cur);
    cur._shown = { text, order, rephrased: n > 0 };
    $('e-pos').textContent = 'Question ' + (total + 1) + ' · endless';
    $('e-diff').textContent = diffPips(cur._diff);
    $('e-tag').className = tagCls(cur.domain);
    $('e-tag').textContent = cur.domain;
    $('e-reph').style.display = cur._shown.rephrased ? '' : 'none';
    $('e-q').textContent = text;
    $('e-explain').style.display = 'none';
    $('e-next').style.display = 'none';
    renderOptions($('e-opts'), cur, order, (oi, b) => answer(oi, b));
    hud(false);
    startTimer();
    releaseFocus();
    window.scrollTo(0, 0);
  }

  function resolve(ok, btn, timedOut) {
    if (locked) return;
    locked = true;
    stopTimer();
    const okFinal = !!ok;
    const before = Math.round(level);
    seen[cur._qi] = (seen[cur._qi] || 0) + 1;
    total++; win.push(okFinal); if (win.length > 10) win.shift();
    past.push(okFinal); if (past.length > 30) past.shift();
    const d = cur.domain;
    byDom[d] = byDom[d] || { c: 0, t: 0 };
    byDom[d].t++; if (okFinal) byDom[d].c++;
    if (cur.duty) { // per-duty breakdown (forged questions carry no duty tag)
      const du = cur.duty;
      byDuty[du] = byDuty[du] || { c: 0, t: 0 };
      byDuty[du].t++; if (okFinal) byDuty[du].c++;
    }
    let moved;
    if (okFinal) {
      correct++; streak++; bestStreak = Math.max(bestStreak, streak);
      level = Math.min(5, level + ramp.up + (streak >= 3 ? ramp.bonus : 0));
      moved = 'up';
    } else {
      streak = 0;
      level = Math.max(1, level - ramp.down);
      moved = 'down';
    }
    peak = Math.max(peak, Math.round(level));
    Sound.play(okFinal ? (Math.round(level) > before ? 'up' : 'ok') : 'no');
    markAnswered($('e-opts'), cur.correct, btn ? +btn.dataset.oi : -1);
    renderPast();
    if (eLightning) {
      // lightning round: no explanation, auto-advance
      $('e-explain').style.display = 'none';
      later(show, S.get('lightningMs'));
    } else {
      const ex = $('e-explain'), after = Math.round(level);
      // only say "Level up/down" when the displayed level actually changes
      const note = after !== before ? `Level ${moved} → Lv ${after} · ${levelName()}`
        : `Lv ${after} · ${levelName()} — ${moved === 'up' ? (after >= 5 ? 'holding at the top' : 'climbing') : 'easing off'}`;
      ex.innerHTML = `<div class="explain"><strong>${timedOut ? "⏱ Time's up." : (okFinal ? 'Correct.' : 'Not quite.')}</strong> ${esc(cur.explanation)}` +
        `<div class="small muted" style="margin-top:6px">${note}</div></div>`;
      ex.style.display = '';
      $('e-next').style.display = '';
      if (okFinal && S.get('autoAdvance')) later(show, AUTO_ADVANCE_MS);
    }
    hud(true);
  }

  function answer(oi, btn) {
    if (locked) return;
    resolve(oi === cur.correct, btn, false);
  }

  function start() {
    runTrack = trackSel.value;
    pool = BANK.filter(q => inTrack(q, runTrack));
    const canForge = HAS_FORGE && eSource !== 'bank' && FORGE.draw(1, { cert: runTrack }).length > 0;
    if (!pool.length && !canForge) { alert('No questions for this selection.'); return; }
    runId++;
    eTimerOn = $('e-timer-on').checked;
    eLightning = $('e-lightning').checked;
    timerSecs = S.get('endlessSecs');
    ramp = RAMPS[S.get('endlessRamp')] || RAMPS.normal;
    level = S.get('endlessStart'); peak = Math.round(level);
    recent = []; streak = 0; bestStreak = 0;
    correct = 0; total = 0; win = []; past = []; byDom = {}; byDuty = {};
    for (const k in seen) delete seen[k];
    $('endless-setup').style.display = 'none';
    $('endless-results').style.display = 'none';
    $('endless-run').style.display = '';
    show();
  }

  function finish() {
    runId++;
    clearTimeout(pendingT);
    stopTimer();
    locked = true;
    $('endless-run').style.display = 'none';
    $('endless-results').style.display = '';
    const pct = total ? Math.round(100 * correct / total) : 0;
    $('er-level').textContent = 'Lv ' + peak;
    $('er-level-name').textContent = 'Peak level · ' + LEVEL_NAMES[peak - 1];
    $('er-score').textContent = correct + '/' + total + ' correct (' + pct + '%)';
    $('er-streak').textContent = 'Best streak: ' + bestStreak;
    $('er-domains').innerHTML = Object.entries(byDom).sort(byWorst).map(([d, v]) => domainBar(d, v.c, v.t)).join('');
    releaseFocus();
    if (total > 0) {
      pushHistory({ date: today(), n: total, score: pct, mode: 'endless', cert: runTrack, domains: byDom, duties: byDuty });
      const bb = getBest();
      if (!bb[runTrack] || peak > bb[runTrack]) { bb[runTrack] = peak; writeJSON(LS.best, bb); }
      notifyProgress();
      renderHistory();
    }
    renderBest();
    window.scrollTo(0, 0);
  }

  $('e-start').addEventListener('click', start);
  $('e-next').addEventListener('click', show);
  $('e-quit').addEventListener('click', () => {
    if (!total || confirm('End this run? Your progress so far will be saved.')) finish();
  });
  const toSetup = () => {
    $('endless-results').style.display = 'none';
    $('endless-setup').style.display = '';
  };
  $('er-again').addEventListener('click', toSetup);
  $('er-done').addEventListener('click', toSetup);
  // read-only test hook, only on a local copy (file:// or localhost), never on the live site
  if (location.protocol === 'file:' || /^(localhost|127\.0\.0\.1)$/.test(location.hostname)) {
    window.__endless = {
      state: () => ({ level, peak, streak, bestStreak, correct, total, diff: cur ? cur._diff : null, forged: !!(cur && cur._forged) }),
      correctIndex: () => (cur ? cur.correct : -1),
      questionText: () => (cur && cur._shown ? cur._shown.text : ''),
      rephrase: (q, n) => rephrase(typeof q === 'number' ? BANK[q] : q, n),
      forceTimeout: () => { if (!locked && timerId) { timeLeft = 1; } },
      past: () => past.slice(),
      timerText: () => $('e-timer').textContent,
      timerOn: () => eTimerOn,
      lightning: () => eLightning,
      explainVisible: () => $('e-explain').style.display !== 'none',
      nextVisible: () => $('e-next').style.display !== 'none',
      current: () => cur
    };
  }
  return {
    renderBest, renderSetup,
    setTrack(tr) { fillTrackSelect(trackSel, tr); renderBest(); renderSetup(); } // a run captured its track at start
  };
})();

/* ---------- settings → live UI ---------- */
S.onChange(key => {
  const all = key === '*';
  if (all || key === 'passMark' || key === 'testWeight') {
    try { renderReadiness(); } catch (e) {}
    renderHistory();
    renderStudyLoop();
  }
  if (all || key === 'track') {
    const tr = S.get('track');
    fillTrackSelect($('r-cert'), tr);
    try { renderReadiness(); } catch (e) {}
    if (Quiz.setTrack) Quiz.setTrack(tr);
    if (PTest.setTrack) PTest.setTrack(tr);
    if (Endless.setTrack) Endless.setTrack(tr);
  }
  if ((all || key === 'quizLength') && Quiz.setCount) Quiz.setCount(S.get('quizLength'));
  if ((all || key === 'testLength' || key === 'testPace') && PTest.applyDefaults) PTest.applyDefaults();
  if (all || key === 'cardFront') FC.show();
  if (all || key === 'endlessSecs') Endless.renderSetup();
  // study preferences ride the cloud sync; appearance stays on this device
  if (!adoptingCloud && (all || S.isSynced(key))) notifyProgress();
});

/* ---------- keyboard shortcuts ----------
   1–6 / A–F answer, Enter or → next, ← → move through a practice test,
   Space flips a flashcard, ← / → grade it. Off in Settings. */
document.addEventListener('keydown', e => {
  if (!S.get('shortcuts') || e.defaultPrevented || e.ctrlKey || e.metaKey || e.altKey) return;
  const sheet = $('settings');
  if (sheet && !sheet.hidden) return;
  const tgt = e.target;
  if (tgt && tgt.closest && tgt.closest('input, select, textarea, [contenteditable="true"]')) return;
  const k = e.key;
  const ctl = tgt && tgt.closest ? tgt.closest('button, a, summary') : null;
  // never let Enter/Space activate a control that is no longer on screen
  if (ctl && !shown(ctl) && (k === 'Enter' || k === ' ')) e.preventDefault();
  // Enter/Space on a visible control keeps its native meaning, except on the
  // tab you are already on (re-activating it would do nothing)
  const passive = !ctl || !shown(ctl) || ctl.matches('nav.tabs button.active');
  const opt = /^[1-6]$/.test(k) ? +k - 1 : /^[a-f]$/i.test(k) ? k.toLowerCase().charCodeAt(0) - 97 : -1;
  const next = k === 'ArrowRight' || (k === 'Enter' && passive);
  const press = id => { const b = $(id); if (shown(b) && !b.disabled) { b.click(); return true; } return false; };
  const choose = id => { const box = $(id), b = box && box.children[opt]; if (b && shown(b) && !b.disabled) { b.click(); return true; } return false; };
  let done = false;
  if (currentTab === 'cards') {
    const gradeBtn = ctl && (ctl.id === 'fc-got' || ctl.id === 'fc-miss');
    if ((k === ' ' && (passive || gradeBtn)) || (k === 'Enter' && passive)) done = FC.flip();
    else if (k === 'ArrowRight') done = press('fc-got');
    else if (k === 'ArrowLeft') done = press('fc-miss');
  } else if (currentTab === 'quiz' && shown($('quiz-run'))) {
    if (opt >= 0) done = choose('quiz-opts');
    else if (next) done = press('quiz-next');
  } else if (currentTab === 'test' && shown($('test-run'))) {
    if (opt >= 0) done = choose('test-opts');
    else if (k === 'ArrowLeft') done = press('test-prev');
    else if (next) done = press('test-next');
  } else if (currentTab === 'drills' && shown($('drill-run'))) {
    if (opt >= 0) done = choose('drill-opts');
    else if (next) done = press('drill-next');
  } else if (currentTab === 'endless' && shown($('endless-run'))) {
    if (opt >= 0) done = choose('e-opts');
    else if (next) done = press('e-next');
  }
  if (done) e.preventDefault();
});

})();
