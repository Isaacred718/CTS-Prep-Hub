# CTS Prep

An offline-first study app for the **AVIXA CTS, CTS-D and CTS-I** certifications:
study guides, spaced-repetition flashcards, quizzes, a practice-test generator,
scenario drills and an endless adaptive mode, with Google sign-in to sync
progress across devices.

The app runs on a topic-agnostic engine, so the same experience can be cloned
for any other subject. See **[TEMPLATE.md](TEMPLATE.md)**.

## What's inside

| Content | Count |
|---|---|
| Questions, every one with a full explanation | **685** |
| — CTS | 272 |
| — CTS-D (design) | 289 |
| — CTS-I (installation) | 124 |
| Flashcards (Leitner spaced repetition) | 131 |
| Study guides (incl. the Exam Cram quick reference) | 7 |
| Scenario drills | 40 |
| Question generators for Endless mode | 104 (40 CTS, 37 CTS-D, 27 CTS-I) |

**29 domains** across three certifications:

- **CTS (14):** Needs Analysis, AV Design, Sound & Physics, Video & Signal, AV Networking,
  Control Systems, Electrical & Site Survey, Project Management, Customer Relations,
  Troubleshooting & Verification, Commissioning & Closeout, AVIXA Standards, plus clearly
  labeled *Advanced* material (ST 2110 suite, Dante & AES67).
- **CTS-D (6):** Needs Assessment, Allied Trade Coordination, AV System Design,
  Design Calculations, Design Documentation, Verification & Closeout.
- **CTS-I (9):** Pre-Installation Activities, Rough-In & First Fix, Rack Build & Wiring,
  Mounting & Distribution, Termination & Cable Standards, Configuration & Networking,
  Testing & Calibration, Closeout & Training, Jobsite Operations & Safety.

The CTS-D and CTS-I banks follow the official AVIXA content outlines. Questions favor
realistic scenarios and calculations over trivia, and wrong answers are written as real
misconceptions at the same length and detail as the right one: always picking the
longest answer scores about 23%, no better than guessing.

## Features

- **Overview** — dashboard with content stats, Exam Readiness by domain (weakest first),
  career targets ranked by readiness, domain coverage, recent sessions and a study loop.
- **Study Guides** — concise domain guides and the *Exam Cram* (formulas, numbers to
  memorize, memory aids, common mistakes).
- **Flashcards** — Leitner 5-box spaced repetition with category filters; Box 4+ counts as mastered.
- **Quiz** — filter by certification and domain, choose a length and optional timer, get an
  explanation after every answer; ending early still scores what you answered.
- **Practice Test generator** — Quick (25), Standard (50) or Full exam sim (110 at exam pace,
  150 min); balanced across selected domains or pure random; no repeats; prev/next with
  changeable answers; per-domain breakdown and a full review.
- **Scenario Drills** — exam-style situations that end in a decision.
- **Endless mode** — difficulty adapts live (Lv 1–5), repeats come back rephrased, and the
  *Generated* source builds brand-new calculation, concept and trick questions forever.
  Optional per-question timer and lightning round.
- **Answer shuffling** — every mode shuffles answer order, so positions never give answers away.
- **Settings** (gear in the header) — see below.
- **Keyboard shortcuts** — 1–4 / A–D to answer, Enter or → for next, ← → in practice tests,
  Space / ← / → on flashcards.
- **Offline** — after one visit the whole app works with no connection.

## Settings

| Section | Settings |
|---|---|
| Appearance (this device) | Theme (dark / light / auto) · accent color · text size · reduce motion |
| Study (syncs) | Default certification · pass mark · readiness weighting (practice vs. flashcards) · default quiz and test length · auto-advance on correct answers · flashcard side shown first |
| Timers (syncs) | Practice-test pace (off / exam / 1.5× / 2×) · Endless question timer · lightning speed |
| Endless (syncs) | Starting level · difficulty ramp · generated share in Mixed |
| Sound & keyboard (this device) | Sound effects · keyboard shortcuts |
| Your data | Export / import a backup · reset flashcards, history or personal bests · restore defaults · erase all |
| About | Version · check for updates · repair the offline copy |

## How Exam Readiness is computed

Per domain:

- **Practice performance** — pooled correct ÷ answered across saved sessions that carry a
  per-domain breakdown (quizzes, practice tests and Endless runs).
- **Flashcard mastery** — share of the domain's cards in Leitner box 4 or 5.
- The two are blended by the *readiness weighting* setting (default 60% practice / 40% cards).
  With only one signal, it carries full weight; with neither, the domain shows "No data yet"
  and is left out of the overall score. Missing data is never scored as zero.

Overall readiness is the mean of the domains with data. Bands key off the *pass mark*
setting (default 70%): **Exam ready** at the halfway point between the pass mark and 100
(85), **Almost there** at the pass mark (70), **Building momentum** at pass − 20 (50), and
**Early stages** below that. The real exam uses scaled scoring, so readiness is a study
signal, not a prediction. Career targets rank roles by the average readiness of the domains
each role leans on.

## Google sign-in & progress sync (optional)

The app works fully without an account. **Sign in with Google** syncs progress across devices.

- **Backend:** Firebase project `lift-tracker-fade7` (shared with fitlog-tracker);
  `isaacred718.github.io` is an authorized domain.
- **Where:** one Firestore document per user, `cts_users/{uid}`:

| Field | Contents |
|---|---|
| `displayName`, `email`, `photoURL` | from the Google account |
| `updatedAt` | ms timestamp of the last change; drives the newer-wins merge |
| `leitnerBoxes` | flashcard boxes: `{ "domain\|front": 1–5 }` |
| `testHistory` | last 40 sessions: `{ date, n, score, mode, cert, domains: { [domain]: { c, t } } }` |
| `endlessBest` | Endless personal best level per certification |
| `settings` | study settings (appearance settings stay on each device) |

- **Merge rule:** on sign-in the newer side wins by `updatedAt`. Local changes push about
  2 seconds after you make them. Signing out leaves local progress on the device.
- **Offline-first:** every Firestore call is guarded; if it fails, the app keeps working on
  local storage and the header shows the sync status.
- **Security rules:** [`firestore.rules`](firestore.rules) holds the rules (a signed-in user
  can read and write only their own doc). Merge them into the project's existing rules; don't
  replace the fitlog rules.

## Offline mode and updates

A service worker caches the app shell, content and Firebase SDK. Online, it fetches fresh
files on every load, so a new deploy shows up the next time the app opens. No cache
version needs bumping. Offline, or on a very slow connection, it serves the cached copy.
Its caches are named `cts-prep-*` and it never touches other apps' caches on
`isaacred718.github.io`. **Settings → About → Repair offline copy** rebuilds it if anything
ever looks stuck.

## Run it locally

```bash
python3 -m http.server 8080   # in the repo folder, then open http://localhost:8080
```

## Deploy

Publish with GitHub Pages from the `main` branch root (**Settings → Pages → Deploy from a
branch → `main` / root**). Bump `version` in `topic.js` when you publish, so
**Settings → Check for updates** can tell you there's something new.

## Make a study app for another topic

```bash
node tools/new-topic.mjs ../spanish-prep --name "Spanish Prep" --id spanish --accent emerald
```

This creates a complete app with the same engine and the astronomy sample content from
`template/`. Then edit `topic.js`, replace `data/*.js`, and run `node tools/validate.mjs`.
[TEMPLATE.md](TEMPLATE.md) documents every field, content format and deploy step.

## Checking content

```bash
node tools/validate.mjs           # formats, indexes, duplicate card keys, length tells, generators
node tools/validate.mjs --strict  # warnings fail too
```

## File layout

```
index.html        app shell; loads topic.js first and applies saved theme before paint
topic.js          everything CTS-specific: tracks, copy, careers, exam pace, sync config
styles.css        dark/light themes, accents, text sizes
settings.js       settings store and sheet, export/import, update check
app.js            tabs, readiness, guides, flashcards, quiz, practice tests, drills, Endless
forge.js          question-generator engine
auth.js           Google sign-in + Firestore sync (offline-first)
sw.js             offline service worker
data/
  questions.js    530 questions: { domain, cert, duty, task, q, options[4], correct, explanation }
  cards.js        131 flashcards: { domain, front, back }
  guides.js       7 guides: { title, domain, body }
  drills.js       24 CTS drills: { duty, task, scenario, question, options, correct, explanation }
  ctsd-challenges.js  155 CTS-D questions, 16 CTS-D drills and 16 formula-sheet generators;
                  items carry diff (1-5) and ref (CTS-D Exam Guide chapter/section)
  forge.js        CTS generators: calculations, concept tables, trick tables
template/         starter topic for new apps (astronomy sample)
tools/
  new-topic.mjs   scaffold a new study app
  validate.mjs    content checker
TEMPLATE.md       how to build a study app for another topic
firestore.rules   reference Firestore security rules
```

## Content notes & provenance

- Merged from `CTS-Prep` (36 questions, 36 cards, 6 guides) and `cts-study` (87 questions,
  83 cards); every `cts-study` question got a full teaching explanation.
- 50 questions added for under-weighted CTS domains; near-duplicates removed.
- Advanced ST 2110 / Dante material is tagged `Advanced:` so it can't be confused with core CTS scope.
- **2026-09-27:** every question carries a `cert` tag; 104 CTS-D and 103 CTS-I questions
  authored against the official AVIXA outlines; 13 CTS top-ups.
- **2026-10-01:** 222 distractors rewritten and trick-question generators added.
- **2026-10-02 (v6):** settings menu; topic-agnostic engine and study-app template; answer
  shuffling in every mode; a second distractor pass that removed the remaining
  longest-answer giveaways (176 questions and 22 drills); and fact fixes — the EDID
  expansion, fiber bend radius, image system contrast ratios (analytical decision
  making 50:1, full-motion video 80:1), PAG/NAG, line level, Hi-Z impedance, phantom current,
  PoE switch-port vs device power, and HDMI passive length at 1080p vs 4K60.
