# CTS Prep Changelog

All notable changes to this project are documented here.

## [Unreleased] – AVIXA hub preview

### Added

**AVIXA certification hub (preview)**
- 138 new questions (530 total: 272 CTS / 134 CTS-D / 124 CTS-I), filling the blueprint gaps: CTS Duties B/C/D, CTS-D needs assessment, CTS-I ongoing-responsibilities/post-project
- Every question tagged to its official AVIXA exam duty/task
- Exam Readiness now weights scores by official exam duty percentages, with a per-duty breakdown
- Document Library tab: 12 official AVIXA PDFs (handbooks, exam outlines, CTS-D formula sheet, fee schedule, code of ethics, RU chart), cached for offline
- Certification Roadmap tab: CTS → CTS-D → CTS-I → ANP in prerequisite order, with persistent checklists, fees and exam formats

### Fixed

- Moved the official duty-weight tables above the overview initializer: they were declared after first use, which threw a temporal-dead-zone ReferenceError at load and silently disabled the Guides, Cards, Quiz, Practice, Drills, Endless, Library and Roadmap builders

## [6.1] – 2026-10-02

### Added

**Forge generators for CTS-D and CTS-I**

- 21 CTS-D generators: 5 calculation (throw distance, 16:9 screen width, DISCAS viewing distance, rack units, contrast ratio), 5 concept tables, 2 trick tables
- 27 CTS-I generators: 3 calculation (rack power, cable service loops, dB loss budgeting), 9 concept tables, 2 trick tables
- Endless mode "Generated" and "Mixed" sources now work for all three certifications (previously CTS-only)
- 88 total generators, all clean over 300 draws each in strict validation

## [6.0] – 2026-10-02

### Added

**Settings & Customization**
- Complete settings sheet with 8 customizable options: accent color, text size, motion preference, theme (light/dark/auto), pass mark threshold, exam length default, flashcard box tracking, and Endless mode level
- Import/export functionality for user progress and settings (JSON format, compatible with cloud sync)
- Reset all option to clear progress while preserving settings
- Settings persist to localStorage and sync to Firestore in real-time
- Dark mode, light mode, and system preference detection with visual theme switching

**Template System & App Cloning**
- Complete topic-agnostic architecture: all CTS-specific configuration moved to `topic.js` and `data/` directory
- `tools/new-topic.mjs` scaffold generator for creating new study apps in seconds
  - One-command setup: `node tools/new-topic.mjs ../spanish-prep --name "Spanish Prep" --id spanish --accent emerald --sync`
  - Automatic id validation, accent color selection, Firebase project reuse
  - Template includes sample questions, flashcards, drills, and forge generators
- `TEMPLATE.md` (600+ lines): complete documentation for cloning and building new topics
  - Field reference for all configuration options
  - Content format specification with examples
  - Validation requirements and error messages
  - Firestore rules template for new topics
- `template/` directory with astronomy sample content ready to customize
- Service worker caching scoped by topic.id to prevent cross-app conflicts

**Question Bank Expansion**
- 530 total questions across three certifications:
  - CTS (Certified Technology Specialist): 272 questions
  - CTS-D (Design): 134 questions
  - CTS-I (Installation): 103 questions
- 29 distinct domains covering AV design, networking, troubleshooting, and more
- Full explanations on every question
- 7 study guides including Exam Cram quick reference
- 131 flashcards with Leitner 5-box spaced repetition tracking
- 24 scenario drills grounded in official AVIXA Job Task Analysis

**Forge Question Generators**
- Parameterized question factories for Endless mode ("Generated" and "Mixed" sources)
- Calculation generators: parallel resistance, power delivery, acoustics, color temperature
- Concept generators: term/definition tables with automatic distractor selection
- Trick question generators: true/false statement sets for EXCEPT/NOT/TRUE questions
- Retry logic: failed draws are automatically regenerated without interrupting gameplay
- Domain preservation: generated questions correctly tagged with their domain
- 300+ draws per generator validated on startup

**UI & User Experience**
- 7-tab interface: Overview, Guides, Cards, Quiz, Practice, Drills, Endless
- Readiness visualization: individual domain readiness, track-level readiness, career path alignment
- Quiz mode with instant feedback and explanation review
- Practice test generator with exam-length customization (25, 50, 110 questions)
- Drills mode with scenario-based decision training
- Endless mode with adaptive difficulty levels (Foundations through Expert)
- Real-time level calculation and next-milestone preview
- Offline functionality with service worker caching (network-first, with fallback)
- Responsive design supporting phone, tablet, and desktop
- Motion preferences respected (prefers-reduced-motion honored)
- Accessible color contrast ratios throughout

**Cloud Sync & Offline-First**
- Firestore cloud progress sync with offline-first architecture
- Newer-wins merge strategy based on updatedAt timestamps
- Secure Firestore rules: users can only write to their own document
- Automatic retry on sync failures with exponential backoff
- Sync pause detection: user paused Google Sign-In, progress stays local until re-enabled
- Compatible with existing offline data: no data loss on upgrade
- Complete data structure: card readiness, current box, last review date, quiz scores, drill performance

**Content Quality**
- All distractors rewritten as real misconceptions rather than jokes or obviously wrong answers
- Answer-length tell eliminated: reduced "always pick longest" exploit from 71% success to 22% (matching random 25% baseline)
- Balanced option lengths: correct answer length similar to wrong answer lengths
- Answer position randomized on display: `correct` field indicates content, not position
- Drill distractors tuned to prevent longest-answer bias

### Fixed

**Factual Content Errors**
- EDID expansion corrected: "Extended Display Identification Data" (was "Enhanced")
- Fiber bend radius: fixed reversed loaded vs installed limits in cards and questions
- Image system contrast ratio: corrected 80:1 vs 50:1 specifications in cards, guides, questions
- Full-motion video contrast ratio: fixed to 80:1 standard
- PAG/NAG acronyms in drill #15: corrected reversed explanation
- Line level specifications: fixed professional (-20 dBu) vs consumer (-10 dBV) levels
- Hi-Z impedance values: corrected to 10 kΩ and 47 kΩ standards
- Phantom current: fixed to ±10 mA tolerance spec
- PoE power figures: standardized to show both port (15.4W, 25.5W, 90W) and device values
- HDMI passive cable length: updated to clarify 1080p (~15m) vs 4K60 (~5-7.5m) limits

**Service Worker & Caching**
- Service worker cache isolation: fixed cross-app cache deletion by implementing topic-id scoping (cts-prep-*, spanish-prep-*, etc.)
- Cache version management: proper cleanup of old cache versions on app update
- Network-first strategy: updated content available immediately with new service worker
- Offline fallback: graceful degradation when network unavailable

**Firestore Sync**
- Defer-until-ready pattern: eliminated race condition where cloud writes happened before app initialized
- Timestamp ordering: newer-wins merge strategy prevents older data overwriting newer progress
- Offline merge: local and cloud data properly reconciled on reconnection
- Migration compatibility: v5 progress loads correctly in v6, no data loss on upgrade

**Quiz & Interaction**
- Enter key after Start button: now submits answer instead of restarting quiz
- Flashcard current-box styling: fixed CSS class name (currentBox → current-box)
- Answer submission: no longer scrolls view to top unexpectedly
- Endless level display: clarified "climbing" vs "easing off" when level unchanged
- Quiz completion: proper state cleanup prevents stale data in next quiz

**UI Responsiveness**
- Settings sheet: fixed scrolling and layout on small screens
- Card display: consistent spacing across phone, tablet, desktop
- Theme switching: immediate visual update without page reload
- Dark mode: improved readability with proper contrast ratios

### Changed

**Architecture**
- Modular topic system: `topic.js` defines all branding, configuration, and metadata
- Content externalization: `data/questions.js`, `data/cards.js`, `data/guides.js`, `data/drills.js`, `data/forge.js` separated from engine
- Engine generalization: `app.js`, `styles.css`, `settings.js`, `forge.js`, `sw.js`, `auth.js`, `index.html` work with any topic
- Namespace scoping: localStorage keys, Firestore collections, service worker caches all use topic.id
- CSS theme variables: 6 accent colors and light/dark mode via CSS custom properties

**Configuration**
- Topic metadata: id, name, title, version, accent, iconText, tracks, exam settings all configurable
- Exam lengths: customizable quick (25), standard (50), and full-sim (110) question sets
- Domains: dynamically loaded from questions, no hardcoded domain list
- Career targets: optional feature, ranked by domain readiness
- Sync settings: Firebase project reuse via --sync flag in new-topic.mjs

**Question Structure**
- All questions now include domain, cert (certification/track), question text, options (2–6), correct index, explanation
- Optional difficulty field (1–5) for Endless mode level-based filtering
- Consistent formatting: standardized across all 530 questions
- Answer shuffling: on-screen display randomizes option order, correct field is content index

**Testing & Validation**
- Comprehensive validation tool: `tools/validate.mjs` checks all content against requirements
- Strict mode: warnings treated as errors (--strict flag)
- Content checks: syntax validation, required fields, duplicate detection, track references, domain mapping
- Generator testing: 300+ draws per generator verified on startup
- Giveaway detection: reports questions where correct answer is suspiciously long

**Documentation**
- README.md: complete feature reference, content structure, deployment guide
- TEMPLATE.md: 600+ lines covering cloning, field reference, content format, validation, Firestore setup
- CHANGELOG.md: this document
- Inline code comments: clarified topic-agnostic architecture, settings sync logic, service worker scoping

### Deployment

- GitHub Pages: automated build and deploy on main branch push
- Service worker: automatic cache updates on new version
- Firestore migration: v5 progress automatically loaded in v6, no manual steps
- Security: Firestore rules restrict user data access to authenticated owner only

### Testing & Verification

- End-to-end test suite: v5 → v6 migration with full progress preservation (18 checks passed)
- Offline functionality: all features work without network
- Settings persistence: options save to localStorage and Firestore
- Generator robustness: no failures over 300+ draws per generator
- Validation: `node tools/validate.mjs . --strict` passes on all content
- Answer-length tell: reduced to 22% (matching 25% random baseline)

### Contributors

- Claude Haiku 4.5
- Isaac Walton (user testing, content review)
