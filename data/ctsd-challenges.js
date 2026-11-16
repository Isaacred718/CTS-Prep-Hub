// CTS-D design challenges: original questions, multi-step drills and
// formula-sheet generators written for the current CTS-D exam outline
// (11/13/2023: Duty A 20%, B 28%, C 38%, D 14%).
// Each item's "ref" points to the CTS-D Exam Guide, 2nd edition, chapter and
// section (or the 2024 AVIXA formula sheet) it draws on, so you can look it up.
// Loaded after data/forge.js and before app.js.
(function () {
  const CTSD_QUESTIONS = [
  {
    "id": "ctsd-A1-01",
    "domain": "CTS-D: Needs Assessment",
    "cert": "CTS-D",
    "duty": "A",
    "task": "A1",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 3, The Needs Analysis",
    "q": "In a needs-analysis interview, a sales director says: \"Our team needs to pitch to clients in other cities and see their faces while we walk through a deck.\" Which statement captures this as a functional requirement rather than a product choice?",
    "options": [
      "Install a 98-inch display and a certified room kit for the sales team's preferred platform",
      "Presenters can share content and see remote participants at the same time during a call",
      "Provide a 4K PTZ camera with 12x zoom mounted directly below the main room display",
      "Specify a dual-display videoconference codec on the corporate standard platform"
    ],
    "correct": 1,
    "explanation": "A functional requirement describes what users must be able to do, in their terms, with no products named. \"Share content and see remote participants at the same time\" is testable and leaves the design open; the other three jump straight to equipment, which belongs in the conceptual design after the requirement is agreed."
  },
  {
    "id": "ctsd-A1-02",
    "domain": "CTS-D: Needs Assessment",
    "cert": "CTS-D",
    "duty": "A",
    "task": "A1",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 3, Step 3: Evaluate the Site Environment/Benchmarking",
    "q": "A law firm wants its new training room \"to feel like the one at our New York office.\" What is the most useful needs-analysis step to turn that wish into requirements?",
    "options": [
      "Order the same equipment list the New York office used, so the two rooms are guaranteed to match",
      "Ask the client for a budget first, then scale the New York design down until it fits that number",
      "Benchmark the New York room with its users: document what works, what fails and how it is used",
      "Skip the comparison and design from scratch, since benchmarking another site biases the design"
    ],
    "correct": 2,
    "explanation": "Benchmarking an existing space with the people who use it shows which features actually deliver the experience the client likes, and which problems not to copy. Cloning the equipment list repeats its faults and ignores differences in room size, ambient light and use."
  },
  {
    "id": "ctsd-A1-03",
    "domain": "CTS-D: Needs Assessment",
    "cert": "CTS-D",
    "duty": "A",
    "task": "A1",
    "diff": 2,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 3, Who Are the End Users?",
    "q": "A hospital board approves the budget for a new education center, but residents and visiting lecturers will run every session. Whose input should most shape the functional requirements for the presenter position?",
    "options": [
      "The board members, because they approve the budget and sign off on the final design",
      "The hospital IT department, because it will own the network that the AV system connects to",
      "The architect, because the presenter position has to fit the room layout the architect drew",
      "The residents and lecturers, because they are the end users who will operate it every day"
    ],
    "correct": 3,
    "explanation": "The people who approve a project and the people who use it are often different. Budget holders set limits, but the end users define the tasks the system must support, so their workflows drive the functional requirements. IT and the architect are stakeholders whose constraints are gathered too."
  },
  {
    "id": "ctsd-A1-04",
    "domain": "CTS-D: Needs Assessment",
    "cert": "CTS-D",
    "duty": "A",
    "task": "A1",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 3, Step 1: Ask Questions",
    "q": "Which needs-analysis question best reveals a requirement that changes the audio design of a multipurpose room?",
    "options": [
      "Will presenters ever use the room for live music, or only for speech and video playback?",
      "Which brand of microphone has your team used in the past, and did everyone like using it?",
      "Would you prefer black or white ceiling loudspeaker grilles to match the finishes?",
      "How many of the chairs in the room will be stackable for the weekend events?"
    ],
    "correct": 0,
    "explanation": "Live music versus speech only changes headroom (about 10 dB for speech, 20 dB or more for music), loudspeaker choice, amplifier power and mixing. Brand history, grille color and chair type are worth noting but do not change the system architecture."
  },
  {
    "id": "ctsd-A1-05",
    "domain": "CTS-D: Needs Assessment",
    "cert": "CTS-D",
    "duty": "A",
    "task": "A1",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 3, Creating an Exceptional AV Experience",
    "q": "A user story reads: \"As a visiting guest lecturer, I need to connect my own laptop at the lectern and be presenting within two minutes, without calling for help.\" What does this story most directly require of the design?",
    "options": [
      "A trained operator on standby in a control booth for every scheduled session",
      "Wired and wireless presentation inputs at the lectern with automatic switching",
      "A printed manual taped to the lectern explaining every input and menu",
      "A full matrix switcher with a technician-only setup page for each source"
    ],
    "correct": 1,
    "explanation": "The story names the user (a guest who has never seen the room), the task (connect a laptop) and the measure of success (presenting in two minutes, unaided). That points to self-explanatory connectivity with auto-switching at the lectern. An operator or a manual fails the \"without calling for help\" test."
  },
  {
    "id": "ctsd-A1-06",
    "domain": "CTS-D: Needs Assessment",
    "cert": "CTS-D",
    "duty": "A",
    "task": "A1",
    "diff": 4,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 3, Step 4: Conduct Program Meetings",
    "q": "During program meetings, the CFO wants the lowest first cost, while the facilities director wants equipment the in-house team can maintain for ten years. How should the designer handle the conflict?",
    "options": [
      "Side with the CFO, since the person who signs the purchase order sets the design direction",
      "Side with facilities, since long-term maintenance always outweighs the cost of purchase",
      "Present options with first cost and lifecycle cost side by side, and let the client decide",
      "Design two separate systems and install whichever one the project budget turns out to fit"
    ],
    "correct": 2,
    "explanation": "Conflicting stakeholder goals are the client's decision, not the designer's. The designer's job is to make the trade-off visible: first cost, service life, support burden and total cost of ownership, then record the decision in the program report."
  },
  {
    "id": "ctsd-A1-07",
    "domain": "CTS-D: Needs Assessment",
    "cert": "CTS-D",
    "duty": "A",
    "task": "A1",
    "diff": 2,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 3, Types of AV Experience",
    "q": "A corporate lobby display will run looping brand content that people glance at while walking past. In AVIXA viewing-task terms, what kind of viewing is this?",
    "options": [
      "Analytical decision making",
      "Basic decision making",
      "Full-motion video",
      "Passive viewing"
    ],
    "correct": 3,
    "explanation": "Passive viewing is content people take in without acting on its detail: ambient signage, lobby loops. It carries the lowest ISCR contrast target (7:1). Basic decision making (15:1) is presentation content people must read and act on; analytical (50:1) needs pixel-level detail; full-motion video is 80:1."
  },
  {
    "id": "ctsd-A1-08",
    "domain": "CTS-D: Needs Assessment",
    "cert": "CTS-D",
    "duty": "A",
    "task": "A1",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 5, Viewing Requirements",
    "q": "Radiologists will review scans on a wall display in a teaching room and must spot fine detail. Which viewing category should the needs analysis record, and why does it matter?",
    "options": [
      "Basic decision making, which sets 15:1 contrast and a 30-degree vertical limit",
      "Analytical decision making, which sets 50:1 contrast and pixel-level viewing distances",
      "Full-motion video, which sets 80:1 contrast and the closest seats for cinematic content",
      "Passive viewing, which sets 7:1 contrast because the scans are mainly reference images"
    ],
    "correct": 1,
    "explanation": "Medical imaging is the textbook analytical decision-making (ADM) task: viewers must resolve individual pixels. Recording ADM in the needs analysis drives a 50:1 ISCR contrast target and DISCAS ADM distances, which are far shorter than BDM distances for the same image size."
  },
  {
    "id": "ctsd-A2-01",
    "domain": "CTS-D: Needs Assessment",
    "cert": "CTS-D",
    "duty": "A",
    "task": "A2",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 3, Step 2: Review Existing Documentation",
    "q": "You are hired to design one floor of a client that has a published technology master plan. What should you do with the master plan first?",
    "options": [
      "Set it aside until the concept is done, so it does not limit creative options early on",
      "Review it before design starts and treat its standards as requirements unless the client waives them",
      "Rewrite it to match your preferred platforms, then ask the client to adopt the new version",
      "Use it only for its budget figures, since the equipment standards in master plans go out of date quickly"
    ],
    "correct": 1,
    "explanation": "A technology master plan records the client's long-term standards: platforms, room types, support model, refresh cycles. Reviewing it first keeps the new floor consistent with the rest of the estate. Departing from it is the client's call, and the reasons belong in writing."
  },
  {
    "id": "ctsd-A2-02",
    "domain": "CTS-D: Needs Assessment",
    "cert": "CTS-D",
    "duty": "A",
    "task": "A2",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 3, The Phases of an AV Design Project",
    "q": "A university has no AV master plan and asks you to help write one for 120 classrooms. Which content belongs in a technology master plan rather than in a single room design?",
    "options": [
      "Room standards, a support model, a refresh cycle and a phased budget",
      "A rack elevation and full wire list for the largest lecture hall on the main campus",
      "The exact loudspeaker tap settings for each classroom's ceiling loudspeakers",
      "Final device IP addresses for the first building to be renovated next summer"
    ],
    "correct": 0,
    "explanation": "A master plan works at the portfolio level: standard room types, platforms, how rooms are supported, when they are refreshed and how spending is phased. Rack elevations, tap settings and IP schedules are project-level design documents produced later for specific rooms."
  },
  {
    "id": "ctsd-A2-03",
    "domain": "CTS-D: Needs Assessment",
    "cert": "CTS-D",
    "duty": "A",
    "task": "A2",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 3, Step 2: Review Existing Documentation",
    "q": "The master plan standardizes on one control platform. The client's new auditorium needs a feature that platform cannot provide. What is the right course?",
    "options": [
      "Quietly specify a second control platform, since the auditorium is a special case",
      "Drop the feature, because the master plan forbids anything outside the standard platform",
      "Document the gap and options, and get a written decision from the plan's owner",
      "Ask the integrator to choose a platform during installation, once the rooms are built"
    ],
    "correct": 2,
    "explanation": "Standards exist so the estate stays supportable. When a requirement cannot be met inside the standard, the designer documents the gap, shows the options (custom programming, an exception, a different approach) and gets the decision from whoever owns the master plan. Neither silently breaking nor silently obeying the standard serves the client."
  },
  {
    "id": "ctsd-A2-04",
    "domain": "CTS-D: Needs Assessment",
    "cert": "CTS-D",
    "duty": "A",
    "task": "A2",
    "diff": 2,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 3, Infrastructure Considerations",
    "q": "A master plan calls for every meeting room to be refreshed on a five-year cycle while the building itself will stand for 40 years. Which design decision best supports that plan?",
    "options": [
      "Specify the most expensive equipment available so it outlasts the refresh cycle",
      "Size the infrastructure (conduit, backboxes, power, cabling) for future technology",
      "Mount every device permanently so the refresh crew cannot alter the installation",
      "Delay the cable design until the first refresh, when future needs are known"
    ],
    "correct": 1,
    "explanation": "Equipment turns over every few years; pathways, power and backboxes stay for decades. Oversizing conduit, providing spare pathways and power and choosing standard mounts lets each refresh swap devices without opening walls."
  },
  {
    "id": "ctsd-A2-05",
    "domain": "CTS-D: Needs Assessment",
    "cert": "CTS-D",
    "duty": "A",
    "task": "A2",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 18, Determining a Security Posture",
    "q": "The client's master plan says all AV devices must join the enterprise network and be managed by IT. What must the room design include as a result?",
    "options": [
      "A separate unmanaged AV network so the devices never touch the corporate LAN",
      "Consumer-grade devices, since IT will replace their firmware with its own builds",
      "No network devices at all, because managed networks block AV traffic by default",
      "Devices that meet IT's security requirements, plus port, VLAN and address needs"
    ],
    "correct": 3,
    "explanation": "If the standard puts AV on the enterprise network, every device must meet IT's security posture (authentication, updates, no default passwords) and the design must state the network services it needs: ports, VLANs, multicast, QoS and addressing. An isolated network would break the plan."
  },
  {
    "id": "ctsd-A2-06",
    "domain": "CTS-D: Needs Assessment",
    "cert": "CTS-D",
    "duty": "A",
    "task": "A2",
    "diff": 2,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 3, The Phases of an AV Design Project",
    "q": "Why do large clients include standard room types (huddle, medium meeting, boardroom) in their technology master plans?",
    "options": [
      "So every room of a type works the same way, which simplifies training, support and spares",
      "So designers never need to visit the site, since every room of a type is the same size",
      "So the integrator can skip commissioning on every room after the first of each type",
      "So the rooms can be bought from one dealer without any competitive bid process"
    ],
    "correct": 0,
    "explanation": "Room types give users the same experience in every room and let support staff stock one set of spares and one set of procedures. Each room still needs site verification and commissioning, because size, light and noise differ."
  },
  {
    "id": "ctsd-A2-07",
    "domain": "CTS-D: Needs Assessment",
    "cert": "CTS-D",
    "duty": "A",
    "task": "A2",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 3, Budget Recommendations",
    "q": "A master plan budgets $40,000 per medium meeting room. Your needs analysis for one room finds an extra requirement (lecture capture) that pushes the estimate to $52,000. What should you do?",
    "options": [
      "Cut other features until the room fits $40,000, without telling the client which ones",
      "Approve the overrun yourself, since the needs analysis found a genuine requirement",
      "Report the variance and its cause, and let the client choose to fund it or defer it",
      "Remove lecture capture, since anything not in the master plan is out of scope"
    ],
    "correct": 2,
    "explanation": "The master plan budget is the client's planning number. When a real requirement exceeds it, the designer reports the gap and the reason and offers options (fund it, phase it, provide infrastructure only). The client decides; the decision goes in the program report."
  },
  {
    "id": "ctsd-A2-08",
    "domain": "CTS-D: Needs Assessment",
    "cert": "CTS-D",
    "duty": "A",
    "task": "A2",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 9, Energy Management",
    "q": "A client's master plan commits to ANSI/AVIXA S601.01 Audiovisual Systems Energy Management. What does that add to each room design?",
    "options": [
      "A requirement that every device stays powered on around the clock for fast startup",
      "Control and monitoring of AV power, so devices drop to low-power states when idle",
      "A ban on networked devices, since network ports draw standby power all the time",
      "A rule that every room uses projectors, because they use less power than displays"
    ],
    "correct": 1,
    "explanation": "S601.01 sets requirements for controlling and continuously monitoring AV power, so components run at the lowest energy state that still meets user needs, with automation, monitoring, reporting and documentation. The designer specifies schedules, occupancy-based shutdown and power metering."
  },
  {
    "id": "ctsd-A2-09",
    "domain": "CTS-D: Needs Assessment",
    "cert": "CTS-D",
    "duty": "A",
    "task": "A2",
    "diff": 2,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 3, Step 2: Review Existing Documentation",
    "q": "Which existing document is most likely to tell you the client's preferred support model, such as in-house staff versus a managed service?",
    "options": [
      "The architect's finish schedule",
      "The structural general notes",
      "The technology master plan",
      "The electrical panel schedule"
    ],
    "correct": 2,
    "explanation": "The technology master plan records how the organization intends to run its AV estate: who supports it, how it is monitored, how often it is refreshed. The other documents describe the building, not the operating model."
  },
  {
    "id": "ctsd-A2-10",
    "domain": "CTS-D: Needs Assessment",
    "cert": "CTS-D",
    "duty": "A",
    "task": "A2",
    "diff": 4,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 17, Streaming Needs Analysis",
    "q": "The master plan says town halls will stream to 5,000 desktops across one campus network. Which network question must the needs analysis settle before you design the streaming system?",
    "options": [
      "Whether the campus network supports multicast between the encoder and the viewers",
      "Whether the viewers prefer to watch in a browser tab or in a full-screen window",
      "Whether the encoder can be painted to match the finishes of the control room",
      "Whether the town halls are recorded on Mondays or on Fridays most of the time"
    ],
    "correct": 0,
    "explanation": "At 5,000 viewers, unicast multiplies the stream bandwidth by 5,000 (5,000 x 4 Mbps = 20 Gbps), while multicast sends one copy per link. Whether IT supports multicast, or a reflector or CDN approach is needed instead, shapes the whole design."
  },
  {
    "id": "ctsd-A3-01",
    "domain": "CTS-D: Needs Assessment",
    "cert": "CTS-D",
    "duty": "A",
    "task": "A3",
    "diff": 2,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 3, A Closer Look at the Concept Design/Program Report",
    "q": "Which set of sections belongs in a concept design/program report?",
    "options": [
      "Executive summary, space planning, systems, infrastructure and budget",
      "Wire list, IP schedule, rack elevations, control code and labeling plan",
      "Punch list, as-built drawings, warranty letters and training sign-in sheets",
      "Submittal log, RFI log, change orders and the integrator's daily site reports"
    ],
    "correct": 0,
    "explanation": "The program report sets out what the client needs and the proposed approach: an executive summary, space planning, system descriptions, infrastructure considerations and budget recommendations. Wire lists and rack elevations come with final design; punch lists and as-builts come at closeout."
  },
  {
    "id": "ctsd-A3-02",
    "domain": "CTS-D: Needs Assessment",
    "cert": "CTS-D",
    "duty": "A",
    "task": "A3",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 3, Space Planning",
    "q": "Why does the program report include space planning for AV, such as rack room sizes and projection paths, so early?",
    "options": [
      "So the integrator can order equipment before the architect finishes the floor plans",
      "So the architect can reserve space before walls, ceilings and rooms are fixed in place",
      "So the client can start training staff on the equipment in the empty spaces",
      "So the AV designer can skip coordination meetings later in the design phase"
    ],
    "correct": 1,
    "explanation": "Space is cheapest to claim before the architecture is set. Rack rooms, projection paths, screen pockets, ceiling heights and cable pathways in the program report give the architect and engineers time to plan for them. Asking later usually means compromises or change orders."
  },
  {
    "id": "ctsd-A3-03",
    "domain": "CTS-D: Needs Assessment",
    "cert": "CTS-D",
    "duty": "A",
    "task": "A3",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 3, Distribution and Approval",
    "q": "A program report has gone out for review, and the client's comments have been addressed. What is the most important next step before conceptual design begins?",
    "options": [
      "Order long-lead equipment so the schedule does not slip",
      "Start the bill of materials and request integrator pricing",
      "Obtain formal client approval of the program report",
      "Send the report to the structural engineer for stamping"
    ],
    "correct": 2,
    "explanation": "Formal approval turns the program report into the agreed baseline. Later design work is checked against it, and requirements added after approval are clearly changes in scope. Without sign-off, every later disagreement turns into an argument about what was agreed."
  },
  {
    "id": "ctsd-A3-04",
    "domain": "CTS-D: Needs Assessment",
    "cert": "CTS-D",
    "duty": "A",
    "task": "A3",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 3, Infrastructure Considerations",
    "q": "Your program report for a divisible ballroom must flag infrastructure needs. Which item belongs there?",
    "options": [
      "The color of the wireless microphone windscreens for each partition zone",
      "The menu layout of the touch panel for the combined-room mode",
      "The brand of batteries for the wireless microphones used in the ballroom",
      "Rigging points, floor boxes, partition sensors and dedicated AV power"
    ],
    "correct": 3,
    "explanation": "Infrastructure considerations are the building elements other trades must provide: structure for rigging, floor boxes and conduit, partition position sensing for room combining, AV power and data. Touch panel menus and batteries are details settled much later."
  },
  {
    "id": "ctsd-A3-05",
    "domain": "CTS-D: Needs Assessment",
    "cert": "CTS-D",
    "duty": "A",
    "task": "A3",
    "diff": 2,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 3, Executive Summary",
    "q": "Who is the primary audience for the executive summary of a program report?",
    "options": [
      "Decision makers who need the purpose, scope and budget without technical detail",
      "The installation crew, who need the cable types and termination details for each run",
      "The control programmer, who needs the device list and the control ports",
      "The electrical contractor, who needs the circuit and receptacle schedule"
    ],
    "correct": 0,
    "explanation": "The executive summary is for the people who approve the project. It states what the system is for, what it includes and what it costs, in plain language. Technical audiences read the system descriptions and drawings."
  },
  {
    "id": "ctsd-A3-06",
    "domain": "CTS-D: Needs Assessment",
    "cert": "CTS-D",
    "duty": "A",
    "task": "A3",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 3, Budget Recommendations",
    "q": "The program report gives a budget of $180,000 for a training center. At concept stage, how should that number be presented?",
    "options": [
      "As a fixed, guaranteed price that the integrator must later match",
      "As a rough figure with no breakdown, so the client cannot second-guess it",
      "As an estimate with its assumptions and a contingency, broken out by system",
      "As the equipment total only, with labor and programming added at bid time"
    ],
    "correct": 2,
    "explanation": "Concept budgets are estimates. Stating the assumptions (system scope, quality level, labor, programming, contingency) and breaking it out by system lets the client see what drives cost and decide where to adjust."
  },
  {
    "id": "ctsd-A3-07",
    "domain": "CTS-D: Needs Assessment",
    "cert": "CTS-D",
    "duty": "A",
    "task": "A3",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 3, System Descriptions",
    "q": "What is the right level of detail for system descriptions in a program report?",
    "options": [
      "Exact model numbers and quantities for every device in each room",
      "What each system does for users and its major parts, in plain language",
      "Termination diagrams for every connector so pricing is accurate",
      "The full control system source code, so the client can review the logic"
    ],
    "correct": 1,
    "explanation": "At program stage, system descriptions explain function and scope, such as \"speech reinforcement with ceiling loudspeakers and wireless lapel mics, with recording to the network\", so the client can confirm the intent. Model numbers and terminations come in later design phases."
  },
  {
    "id": "ctsd-A3-08",
    "domain": "CTS-D: Needs Assessment",
    "cert": "CTS-D",
    "duty": "A",
    "task": "A3",
    "diff": 4,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 3, Developing the Concept Design/Program Report",
    "q": "After the program report is approved, the client asks for a 300-seat broadcast studio to be added to the scope. What is the correct response?",
    "options": [
      "Add it to the conceptual design right away, since the client is always right",
      "Refuse it, because an approved program report can never be changed later",
      "Ask the integrator to absorb it during installation as a no-cost addition",
      "Treat it as a scope change: assess it, revise the report and get approval again"
    ],
    "correct": 3,
    "explanation": "An approved program report is a baseline, not a prison. A significant new requirement is a change in scope: assess its impact on fees, budget, space and schedule, update the report, and get it approved again so everyone works from the same document."
  },
  {
    "id": "ctsd-A3-09",
    "domain": "CTS-D: Needs Assessment",
    "cert": "CTS-D",
    "duty": "A",
    "task": "A3",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 4, Sightlines",
    "q": "The architect's early plan puts a 200-seat lecture hall on a flat floor. What should the program report recommend if the back rows must see the lower part of the screen?",
    "options": [
      "Raising the screen as high as possible, whatever the vertical viewing angle in the front row",
      "Tiered or raked seating, or a sightline study to set the screen height and seating rise",
      "A brighter projector, since brightness compensates for blocked sightlines",
      "Moving every seat closer to the screen until the back rows disappear"
    ],
    "correct": 1,
    "explanation": "On a flat floor, rear sightlines are blocked by the heads of the people in front. A raked or tiered floor fixes this at the source, and a sightline study sets screen height and seating rise. Raising the screen hits the 30-degree limit for the front row, and brightness cannot see through heads."
  },
  {
    "id": "ctsd-A3-10",
    "domain": "CTS-D: Needs Assessment",
    "cert": "CTS-D",
    "duty": "A",
    "task": "A3",
    "diff": 2,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 3, The Phases of an AV Design Project",
    "q": "In which design project phase is the program report produced?",
    "options": [
      "The concept design/briefing/program phase",
      "The construction phase",
      "The verification phase",
      "The design development and documentation phase"
    ],
    "correct": 0,
    "explanation": "The program report is the main product of the concept design (briefing or program) phase. It captures needs, functional requirements and a recommended approach before detailed design begins."
  },
  {
    "id": "ctsd-B1-01",
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B1",
    "diff": 2,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 3, Drawing Types",
    "q": "How should a reflected ceiling plan (RCP) be read?",
    "options": [
      "As a view looking up at the ceiling from below, flipped left to right",
      "As if the floor were a mirror reflecting the ceiling features above it",
      "As a section cut through the ceiling plenum at the height of the deck",
      "As an elevation of the ceiling drawn from the back of the room forward"
    ],
    "correct": 1,
    "explanation": "An RCP is drawn as though the floor were a mirror, so ceiling items line up with the floor plan below them instead of appearing reversed. It shows light fixtures, diffusers, sprinklers and ceiling-mounted AV, which is why it is the main coordination drawing for loudspeakers and projectors."
  },
  {
    "id": "ctsd-B1-02",
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B1",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 8, Wall and Table Finishes",
    "q": "The interior designer selects a high-gloss white tabletop for a videoconference room. What should the AV designer raise?",
    "options": [
      "Nothing, since table finishes are outside the AV scope of work entirely",
      "That the gloss will raise the room's RT60 above the acoustician's target",
      "That gloss reflects light into cameras and displays; matte works better",
      "That white tables make the far-end participants look too warm on camera"
    ],
    "correct": 2,
    "explanation": "Glossy surfaces create specular reflections: hot spots on camera, glare on displays, and bright under-lighting of faces. Videoconference rooms work best with matte, medium-reflectance finishes. Raising it early with the interior designer costs nothing; replacing furniture later does."
  },
  {
    "id": "ctsd-B1-03",
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B1",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 4, Tables and Chairs",
    "q": "The architect's layout leaves 600 mm (24 in) between the conference table edge and the wall where presenters will walk. What coordination point should the AV designer make?",
    "options": [
      "That is ample, since the recommended clearance is only 450 mm (18 in)",
      "Ask for the table to be lowered, which solves the clearance problem",
      "Increase it to 2.4 m (8 ft), since presenters always need room to stand at a lectern",
      "Ask for about 1,220 mm (48 in) so people can stand and others can pass"
    ],
    "correct": 3,
    "explanation": "Ergonomic guidance calls for about 1,220 mm (48 in) between a table edge and the nearest wall or obstruction, so people can push back their chairs and others can walk behind them. A 600 mm gap traps seated users, and it affects camera framing and display placement too."
  },
  {
    "id": "ctsd-B1-04",
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B1",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 3, Drawing Types",
    "q": "Which drawing should you coordinate with the architect to confirm a display's mounting height, its backbox and the nearby receptacles on a wall?",
    "options": [
      "An interior elevation of that wall",
      "The site plan of the building",
      "The structural framing plan",
      "The plumbing riser diagram for the floor"
    ],
    "correct": 0,
    "explanation": "Interior elevations show what sits on a wall and at what height: displays, backboxes, receptacles, faceplates, chair rails, windows and doors. They are where you confirm mounting heights and clearances with the architect."
  },
  {
    "id": "ctsd-B1-05",
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B1",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 8, Shades and Blackout Drapes",
    "q": "A training room has a full window wall facing west, and the projected image must meet 15:1 contrast all day. What should you coordinate with the architect first?",
    "options": [
      "A higher-gain screen that rejects all direct sunlight, with no other changes",
      "Shades or blackout treatment in the window design, under AV control",
      "A request that classes never be scheduled in the afternoon in this training room",
      "A projector twice as bright as the calculation requires, to overpower the sun"
    ],
    "correct": 1,
    "explanation": "Ambient light on the screen is the biggest threat to contrast, and controlling it at the window is far cheaper than buying lumens. Shades or blackout treatment must be designed into the window system early, with control integration, so the room meets ISCR at the times it is used."
  },
  {
    "id": "ctsd-B1-06",
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B1",
    "diff": 2,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 3, Architectural Drawing Symbols",
    "q": "On an architectural floor plan, what does a section cut flag tell you?",
    "options": [
      "Where a light fixture is circuited to the panel serving that room",
      "Where an existing wall must be demolished before construction starts",
      "Which drawing shows a vertical slice through the building at that line",
      "Which side of the wall gets the AV backbox for the touch panel"
    ],
    "correct": 2,
    "explanation": "A section cut flag marks the line where the building is sliced vertically and refers you to the sheet that shows that section. Sections show ceiling heights, plenum depth, floor rake and structure, which are vital for projection and sightline work."
  },
  {
    "id": "ctsd-B1-07",
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B1",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 7, Communicating with Stakeholders",
    "q": "The architect wants the ceiling loudspeakers painted to match a dark ceiling and asks for them to be moved off the grid to follow a lighting pattern. What is the best response?",
    "options": [
      "Refuse both requests, since loudspeaker placement and finish are AV decisions only",
      "Agree to both and adjust the coverage calculations after the ceiling is installed",
      "Ask the integrator to decide on site, since the ceiling contractor will be there anyway",
      "Accept a paintable model, and check any new layout against the coverage calculation"
    ],
    "correct": 3,
    "explanation": "Aesthetics are a fair architectural concern, so meet it where you can: many loudspeakers have paintable grilles. Moving them is fine only if the new positions still deliver the coverage and spacing you calculated, so rerun the layout and agree positions on the RCP before construction."
  },
  {
    "id": "ctsd-B1-08",
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B1",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 4, Lecterns",
    "q": "The interior designer has drawn a tall, enclosed lectern for a lecture hall. What AV coordination matters most?",
    "options": [
      "Height, sightlines, cable entry, ventilation and access to the gear",
      "Only the finish of the lectern, since the AV equipment will be mounted somewhere else",
      "Only the lectern's weight, because it has to be moved for events",
      "Nothing, since lecterns are furniture and are never part of the AV design"
    ],
    "correct": 0,
    "explanation": "Lecterns hold presentation equipment, so their height (and adjustability), sightlines to the presenter, floor box and cable pathways, ventilation for any equipment inside and service access all need agreement with the interior designer before it is built."
  },
  {
    "id": "ctsd-B2-01",
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B2",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 9, Load Limit",
    "q": "A loudspeaker with its mounting bracket weighs 34 kg. Using the 5:1 safety factor, what load rating should the mounting hardware have at minimum?",
    "options": [
      "68 kg",
      "102 kg",
      "170 kg",
      "340 kg"
    ],
    "correct": 2,
    "explanation": "Best practice multiplies the mounted weight by the safety (design) factor of 5: 34 kg x 5 = 170 kg. 68 kg is a 2:1 factor and 340 kg is 10:1. Remember that every component in the load path (bolts, anchors, structure) needs its own adequate rating."
  },
  {
    "id": "ctsd-B2-02",
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B2",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 9, Load Limit",
    "q": "A wall mount is rated to fail at 1,000 lb. Using a safety factor of 5, can it carry an 85 lb display plus a 25 lb articulating arm?",
    "options": [
      "No: the safe working load is 100 lb, and the total is 110 lb",
      "Yes: the safe working load is 200 lb, and the total is 110 lb",
      "Yes: the mount is rated 1,000 lb, which covers 110 lb nine times over",
      "No: the safe working load is 50 lb, and the display alone exceeds it"
    ],
    "correct": 1,
    "explanation": "Safe working load = failure rating / safety factor = 1,000 / 5 = 200 lb. The load is 85 + 25 = 110 lb, which is within 200 lb. Always add the mount, arm and accessories to the device weight, and check the wall and fasteners separately."
  },
  {
    "id": "ctsd-B2-03",
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B2",
    "diff": 4,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 9, Mounting Considerations",
    "q": "A videowall uses 12 displays at 28 kg each on individual mounts weighing 6 kg each. What dead load must you report to the structural engineer for the wall, before any safety factor?",
    "options": [
      "336 kg",
      "408 kg",
      "2,040 kg",
      "34 kg"
    ],
    "correct": 1,
    "explanation": "Dead load = (28 + 6) x 12 = 34 x 12 = 408 kg. Report the real load (and its layout) to the structural engineer, who applies the building code. You apply the 5:1 factor to the mounting hardware: 408 x 5 = 2,040 kg. 336 kg leaves out the mounts."
  },
  {
    "id": "ctsd-B2-04",
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B2",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 9, Load Limit",
    "q": "A projector hangs from a mount rated at a 5:1 factor, attached with threaded rod and beam clamps. Which statement about the load path is correct?",
    "options": [
      "The mount's 5:1 rating covers every part of the assembly, rod and clamps included",
      "Only the structure needs a rating, since hardware never fails before the beam does",
      "Each component has its own rating, and the weakest link sets the assembly's limit",
      "Threaded rod needs no rating, because it is stronger than any projector mount"
    ],
    "correct": 2,
    "explanation": "A mount's load rating applies only to the mount. The rod, clamps, anchors and the structure each have their own ratings, and the assembly is only as strong as its weakest component. The designer documents the whole load path and coordinates the structure with the structural engineer."
  },
  {
    "id": "ctsd-B2-05",
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B2",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 9, Codes and Regulations",
    "q": "Your design hangs a 3 m wide projection screen from the ceiling of a new auditorium. What must happen before the drawings are issued?",
    "options": [
      "The structural engineer confirms the attachment points and the support the structure needs",
      "The integrator chooses anchors on site, once the ceiling grid has been installed",
      "The lighting designer approves the screen weight, since screens hang between lighting pipes",
      "Nothing, because screens are light enough to hang from any ceiling grid in the room"
    ],
    "correct": 0,
    "explanation": "Anything suspended overhead needs a confirmed load path to structure. The AV designer supplies weights, dimensions and attachment locations; the structural engineer confirms or designs the supports. Ceiling grids are not structural."
  },
  {
    "id": "ctsd-B2-06",
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B2",
    "diff": 4,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 9, Mounting Considerations",
    "q": "A designer wants a 40-inch-deep rack on a raised access floor in a broadcast control room. What must be coordinated with the structural engineer or floor manufacturer?",
    "options": [
      "Only the rack color, so that it matches the finish of the floor tiles",
      "The concentrated load of the loaded rack and whether the floor needs support",
      "Nothing, since access floors are designed to carry any equipment placed on them",
      "Only the cable cutout size, since a rack's weight spreads across the whole floor"
    ],
    "correct": 1,
    "explanation": "A fully loaded rack can weigh several hundred kilograms on four small casters or feet. Raised floors have point-load limits per tile, so the designer provides the loaded weight and footprint and coordinates pedestals, stringers or a support frame."
  },
  {
    "id": "ctsd-B2-07",
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B2",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 9, Codes and Regulations (seismic bracing is general practice)",
    "q": "In a high seismic zone, what does the AV designer coordinate for tall equipment racks?",
    "options": [
      "Nothing, since seismic design applies only to the building structure, not to fixtures",
      "Rubber feet under each rack, which isolate the rack from movement of the floor",
      "Taller racks, since a higher rack is more stable during an earthquake",
      "Seismic anchoring and bracing per the AHJ, with details from the structural engineer"
    ],
    "correct": 3,
    "explanation": "Codes in seismic regions require nonstructural components, including racks and suspended equipment, to be anchored and braced. The designer shows rack locations and loads, and the structural engineer or a seismic specialist details the anchorage to satisfy the authority having jurisdiction (AHJ)."
  },
  {
    "id": "ctsd-B3-01",
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B3",
    "diff": 2,
    "ref": "AVIXA CTS-D formula sheet (2024), Heat Load",
    "q": "The AV equipment in a control room (no power amplifiers) draws 1,850 W in total. Using the exam formula sheet, what heat load should you give the mechanical engineer?",
    "options": [
      "544 BTU/hr",
      "1,850 BTU/hr",
      "6,290 BTU/hr",
      "18,500 BTU/hr"
    ],
    "correct": 2,
    "explanation": "Total BTU = watts of equipment x 3.4. 1,850 x 3.4 = 6,290 BTU/hr (about 0.52 tons, at 12,000 BTU/hr per ton). 544 comes from dividing by 3.4 instead of multiplying. For amplifiers, use the separate amplifier heat load formula."
  },
  {
    "id": "ctsd-B3-02",
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B3",
    "diff": 3,
    "ref": "AVIXA CTS-D formula sheet (2024), Power Amplifier Heat Load",
    "q": "A 2,000 W power amplifier is 65 percent efficient. Using the formula sheet, how much heat does it produce?",
    "options": [
      "2,380 BTU/hr",
      "4,420 BTU/hr",
      "6,800 BTU/hr",
      "1,300 BTU/hr"
    ],
    "correct": 0,
    "explanation": "Amplifier heat = W x 3.4 x (1 - efficiency) = 2,000 x 3.4 x 0.35 = 2,380 BTU/hr. The efficient part of the power leaves as sound in the loudspeakers; only the losses heat the rack. 4,420 uses 0.65 instead of 0.35, and 6,800 ignores efficiency entirely."
  },
  {
    "id": "ctsd-B3-03",
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B3",
    "diff": 4,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 9, Calculating Heat Load from Power Amplifiers",
    "q": "A rack holds 1,200 W of signal and network equipment plus two 800 W amplifiers that are each 70 percent efficient. What total heat load should you report?",
    "options": [
      "4,080 BTU/hr",
      "9,520 BTU/hr",
      "5,712 BTU/hr",
      "7,888 BTU/hr"
    ],
    "correct": 2,
    "explanation": "Non-amplifier gear: 1,200 x 3.4 = 4,080 BTU/hr. Amplifiers: 2 x 800 x 3.4 x (1 - 0.70) = 1,632 BTU/hr. Total = 5,712 BTU/hr. 9,520 treats the amplifiers as 100 percent heat, and 4,080 forgets them."
  },
  {
    "id": "ctsd-B3-04",
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B3",
    "diff": 2,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 9, Heat Load",
    "q": "In a metric project, the same 1,850 W of AV equipment must be reported in kilojoules per hour. What is the heat load?",
    "options": [
      "6,290 kJ/hr",
      "6,660 kJ/hr",
      "514 kJ/hr",
      "1,850 kJ/hr"
    ],
    "correct": 1,
    "explanation": "One watt produces 3.6 kJ of heat per hour, so 1,850 x 3.6 = 6,660 kJ/hr. 6,290 is the BTU/hr figure (x 3.4). Use whichever unit the mechanical engineer works in, and state it clearly."
  },
  {
    "id": "ctsd-B3-05",
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B3",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 10, Branch Circuit Loads",
    "q": "In the U.S., you must power equipment drawing 6 A, 4.5 A, 3.2 A, 2.8 A and 2 A from 20 A branch circuits. What is the fewest number of circuits that follows the NEC 80 percent rule?",
    "options": [
      "One circuit",
      "Three circuits",
      "Four circuits",
      "Two circuits"
    ],
    "correct": 3,
    "explanation": "The total is 18.5 A. The NEC limits a branch circuit's load to 80 percent of its rating: 0.8 x 20 A = 16 A. 18.5 A needs two circuits, for example 6 + 4.5 + 3.2 = 13.7 A and 2.8 + 2 = 4.8 A. One circuit would be over the limit even though 18.5 is under 20."
  },
  {
    "id": "ctsd-B3-06",
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B3",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 2, Electrical Calculations",
    "q": "An AV rack draws 1,560 W at 120 V. Which branch circuit can carry it under the NEC 80 percent rule?",
    "options": [
      "A 15 A circuit, since 13 A is below the 15 A rating",
      "A 20 A circuit, since 13 A is below the 16 A limit",
      "Neither, since the rack needs at least a 30 A circuit",
      "Either one, since the 80 percent rule only applies to motors"
    ],
    "correct": 1,
    "explanation": "I = P / V = 1,560 / 120 = 13 A. A 15 A circuit allows 0.8 x 15 = 12 A, so 13 A is too much. A 20 A circuit allows 16 A, so it works with spare capacity. Specify a dedicated AV circuit and note it on the drawings."
  },
  {
    "id": "ctsd-B3-07",
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B3",
    "diff": 4,
    "ref": "AVIXA CTS-D formula sheet (2024), Conduit Capacity; Jam Ratio",
    "q": "Three cables (OD 0.25, 0.25 and 0.35 in) share one conduit. EMT inside diameters are 0.622 in (1/2\"), 0.824 in (3/4\"), 1.049 in (1\") and 1.380 in (1-1/4\"). After checking both fill and jam ratio, which size do you specify?",
    "options": [
      "1/2\" EMT, since the cables total only 0.85 inch across",
      "3/4\" EMT, since it meets the 40 percent fill rule",
      "1\" EMT, since 3/4\" meets fill but falls in the jam range",
      "1-1/4\" EMT, since three cables always need two sizes up"
    ],
    "correct": 2,
    "explanation": "Fill (3+ cables, 40%): ID > sqrt((0.25² + 0.25² + 0.35²) / 0.40) = sqrt(0.2475 / 0.40) = 0.787 in, so 3/4\" (0.824) passes. Jam ratio = ID / average OD = 0.824 / 0.283 = 2.91, inside the 2.8 to 3.2 danger zone, so go up a size. 1\" gives 1.049 / 0.283 = 3.70, which is clear."
  },
  {
    "id": "ctsd-B3-08",
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B3",
    "diff": 3,
    "ref": "AVIXA CTS-D formula sheet (2024), Conduit Capacity",
    "q": "A single fiber cable with a 0.50 in OD runs alone in a conduit. Under the NEC fill rules, what is the minimum conduit inside diameter?",
    "options": [
      "0.50 in",
      "0.69 in",
      "0.94 in",
      "1.25 in"
    ],
    "correct": 1,
    "explanation": "One cable may fill 53 percent: ID > sqrt(OD² / 0.53) = sqrt(0.25 / 0.53) = sqrt(0.472) = 0.687 in, about 0.69 in. The fill limit is a percentage of area, which is why the diameters are squared. Size up further for bends and pull length."
  },
  {
    "id": "ctsd-B3-09",
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B3",
    "diff": 3,
    "ref": "AVIXA CTS-D formula sheet (2024), Conduit Capacity",
    "q": "Two cables, each 0.40 in OD, share a conduit. What is the minimum inside diameter under the two-cable fill limit?",
    "options": [
      "0.80 in",
      "0.89 in",
      "1.02 in",
      "1.29 in"
    ],
    "correct": 2,
    "explanation": "Two cables may fill only 31 percent: ID > sqrt((0.40² + 0.40²) / 0.31) = sqrt(0.32 / 0.31) = sqrt(1.032) = 1.02 in. Two cables have the lowest allowance because they can sit side by side across the conduit and wedge. 0.89 in wrongly uses the 40 percent rule."
  },
  {
    "id": "ctsd-B3-10",
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B3",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 10, Calculating the Number of Circuits: An Example",
    "q": "Which general note belongs on the AV power plan you give the electrical engineer?",
    "options": [
      "AV circuits may be shared with the coffee machines in the room to save panel space",
      "AV receptacles may be on any phase, since the phase is irrelevant to AV systems",
      "Where circuits are short on capacity, use three-to-two-pin adapters to save outlets",
      "Circuits for AV use only, from the same phase and panel, each with a safety ground"
    ],
    "correct": 3,
    "explanation": "Typical AV power notes: circuits for AV only, with no non-AV loads; all AV circuits from the same phase and the same distribution board, which helps avoid ground-potential problems; and a protective earth on every circuit. Ground-lifting adapters are never acceptable."
  },
  {
    "id": "ctsd-B3-11",
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B3",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 9, HVAC Considerations",
    "q": "The mechanical drawings show a chilled-water pipe running directly above your planned rack room. What should you do?",
    "options": [
      "Ask for the pipe to be rerouted or for drip protection above the racks",
      "Nothing, since the pipe is the mechanical engineer's concern and outside the AV scope",
      "Move the racks into the corridor, where there are no pipes overhead to worry about",
      "Add a dehumidifier, which removes any risk of water damage from leaks"
    ],
    "correct": 0,
    "explanation": "Water and electronics do not mix. Coordinate with the mechanical and plumbing engineers to keep wet pipes out of AV equipment rooms, or to add drip pans and leak detection where rerouting is impossible. It is cheap on paper and expensive after a leak."
  },
  {
    "id": "ctsd-B3-12",
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B3",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 9, HVAC Issues That Impact Design",
    "q": "The building's HVAC switches to setback mode at night and on weekends, but the AV racks run 24/7 for monitoring and updates. What must you coordinate?",
    "options": [
      "Lower-power equipment, so the racks never need cooling at all",
      "Rack doors left open at night so the heat escapes into the corridor",
      "Dedicated cooling for the rack room that runs whenever the AV gear does",
      "A schedule that shuts the AV system down whenever the HVAC sets back"
    ],
    "correct": 2,
    "explanation": "Heat load does not stop when the office closes. Give the mechanical engineer the heat load and the operating hours, so the rack room gets dedicated cooling (or the zone is excluded from setback). Open doors push heat into other spaces and do not cool the gear."
  },
  {
    "id": "ctsd-B4-01",
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B4",
    "diff": 4,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 16, Network Devices (PoE)",
    "q": "A switch has a 740 W PoE budget. It will power 10 PTZ cameras at 802.3bt Type 3 (60 W per port at the switch) and 8 ceiling microphones at 802.3af (15.4 W per port). Does the budget work?",
    "options": [
      "No: the load is 1,054 W, so a second switch is required",
      "Yes: the load is 723 W, which fits within 740 W with little spare",
      "Yes: the load is 255 W, because PoE devices draw only a quarter of their rating",
      "No: 802.3bt and 802.3af devices can never share one switch"
    ],
    "correct": 1,
    "explanation": "Budget at the switch (PSE) values: 10 x 60 W = 600 W and 8 x 15.4 W = 123.2 W, total 723.2 W, which fits in 740 W with about 17 W spare. That is very little headroom for growth, so many designers would still choose a larger budget. Mixed PoE classes share switches all the time."
  },
  {
    "id": "ctsd-B4-02",
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B4",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 16, IPv4 Addressing",
    "q": "A campus AV VLAN must hold about 300 devices with room for growth. Which IPv4 subnet is the smallest that fits?",
    "options": [
      "/24 (254 usable hosts)",
      "/25 (126 usable hosts)",
      "/22 (1,022 usable hosts)",
      "/23 (510 usable hosts)"
    ],
    "correct": 3,
    "explanation": "Usable hosts = 2^(32 - prefix) - 2. A /24 gives 254, too few for 300. A /23 gives 2^9 - 2 = 510, the smallest that fits with growth room. A /22 also fits but is larger than needed. Agree the addressing plan with the network team."
  },
  {
    "id": "ctsd-B4-03",
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B4",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 17, Implementing Multicast",
    "q": "Your AV-over-IP video and AES67 audio use multicast across several switches. What must the network team enable so multicast does not flood every port?",
    "options": [
      "IGMP snooping on the switches, with an IGMP querier on the VLAN",
      "Spanning Tree turned off on every port carrying AV traffic",
      "Jumbo frames on all ports, so multicast packets are forwarded faster",
      "DHCP on the AV VLAN, so devices learn which streams to join"
    ],
    "correct": 0,
    "explanation": "Without IGMP snooping, switches treat multicast like broadcast and send every stream to every port. Snooping forwards streams only to ports that joined them, and a querier keeps those memberships current. These are design requirements to agree with IT, not settings to discover during installation."
  },
  {
    "id": "ctsd-B4-04",
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B4",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 16, Quality of Service",
    "q": "AES67 and Dante audio share converged switches with office traffic. Which network service protects the audio's clock and media packets?",
    "options": [
      "Port mirroring, which copies the audio to a monitoring port",
      "QoS, with DSCP marking so clock and audio go in priority queues",
      "NAT, which hides the audio devices behind one public address",
      "Link aggregation, which doubles the speed of every audio port"
    ],
    "correct": 1,
    "explanation": "Quality of Service prioritizes time-critical traffic. Media networks mark PTP clock and audio packets with DSCP values, and the switches must map those to strict-priority queues. The designer documents the required markings and queue settings for the network team."
  },
  {
    "id": "ctsd-B4-05",
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B4",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 12, Digital Audio Bandwidth",
    "q": "An AES67 stream carries 8 channels of 48 kHz, 24-bit audio. Ignoring packet overhead, what is its payload bit rate?",
    "options": [
      "1.15 Mbps",
      "9.22 Mbps",
      "18.4 Mbps",
      "73.7 Mbps"
    ],
    "correct": 1,
    "explanation": "Bit rate = sampling rate x bit depth x channels = 48,000 x 24 x 8 = 9,216,000 bps, about 9.22 Mbps. Packet headers add more on the wire, so leave margin when you plan bandwidth with IT. 1.15 Mbps is in bytes, and 73.7 Mbps is 64 channels."
  },
  {
    "id": "ctsd-B4-06",
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B4",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 18, Mitigation Planning",
    "q": "IT asks how the AV design will meet its security policy. Which set of measures belongs in your response?",
    "options": [
      "Leave default passwords on, so support staff can always log in during an outage",
      "Put every device on a public IP address, so remote support is simpler",
      "Change default passwords, use role-based accounts and patch firmware",
      "Turn off device logging, so attackers cannot read the logs if they get in"
    ],
    "correct": 2,
    "explanation": "Baseline mitigations for networked AV: change default credentials, give each user an account with the right role, disable unneeded services and ports, keep firmware updated, and enable encryption and auditing where available. These come from AVIXA RP-C303.01 and the IT team's risk register."
  },
  {
    "id": "ctsd-B4-07",
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B4",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 16, Reserve DHCP",
    "q": "Control processors need to reach displays and DSPs at fixed addresses, but IT requires all addresses to come from DHCP. Which approach meets both needs?",
    "options": [
      "Use APIPA addresses on every device, so they never conflict with IT",
      "Let devices pick random static addresses, then tell IT afterwards",
      "Ask IT to turn DHCP off for the whole building's network",
      "Use DHCP reservations tied to each device's MAC address"
    ],
    "correct": 3,
    "explanation": "A DHCP reservation hands the same address to the same MAC address every time, so control programming can rely on it while IT keeps central management. List the reservations in the IP schedule. APIPA (169.254.x.x) addresses are not routable and change unpredictably."
  },
  {
    "id": "ctsd-B4-08",
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B4",
    "diff": 4,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 18, Assessing Risk; Ch. 16, Network Access Control",
    "q": "The client's security team will not allow AV devices that cannot authenticate with 802.1X onto the network. Several displays you planned do not support it. When should this be resolved?",
    "options": [
      "During design, by choosing compliant devices or agreeing an exception with IT",
      "At installation, when the integrator can try the displays on the network",
      "After handover, when the client can decide whether it really needs 802.1X",
      "Never, because AV devices are exempt from enterprise security requirements"
    ],
    "correct": 0,
    "explanation": "Security requirements are design inputs. Discovering a conflict at installation means change orders or a non-compliant system. Resolve it in design: pick devices that support 802.1X, or agree a documented mitigation such as MAC Authentication Bypass on an isolated VLAN with IT."
  },
  {
    "id": "ctsd-B5-01",
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B5",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Appendix A, Simplified Room Mode Calculation",
    "q": "A meeting room is 8 m long, 5 m wide and 2.7 m high. Using the simplified room mode formula, below about what frequency will room modes dominate?",
    "options": [
      "127 Hz",
      "206 Hz",
      "381 Hz",
      "1,029 Hz"
    ],
    "correct": 2,
    "explanation": "Critical (Schroeder) frequency ≈ 3 x Cair / smallest room dimension = 3 x 343 / 2.7 = 381 Hz. Below roughly that transition region, room modes dominate, so measurement position matters a lot during equalization. 127 Hz forgets the factor of 3."
  },
  {
    "id": "ctsd-B5-02",
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B5",
    "diff": 2,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 11, Sound Reception",
    "q": "What does RT60 measure?",
    "options": [
      "The time sound takes to travel 60 m from the loudspeaker to the listener",
      "The time for a sound to decay by 60 dB after the source stops",
      "The level of background noise 60 seconds after the HVAC turns on",
      "The delay of the first reflection, measured in units of 60 ms"
    ],
    "correct": 1,
    "explanation": "Reverberation time (RT60) is the time it takes sound energy in a room to decay by 60 dB, to one-millionth of its original intensity, after the source stops. It varies with frequency; speech rooms need shorter RT60 than music venues."
  },
  {
    "id": "ctsd-B5-03",
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B5",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 11, Transmission",
    "q": "A presentation in a training room peaks at 92 dB SPL next to a wall rated STC 45. Barring flanking paths, about what level reaches the office next door?",
    "options": [
      "47 dB SPL",
      "45 dB SPL",
      "69 dB SPL",
      "137 dB SPL"
    ],
    "correct": 0,
    "explanation": "STC approximates transmission loss at speech frequencies: 92 - 45 ≈ 47 dB SPL. In practice, gaps around conduit, back-to-back boxes and open ceiling plenums often make the real result worse, and STC says little about low-frequency music or mechanical noise."
  },
  {
    "id": "ctsd-B5-04",
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B5",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 11, Transmission",
    "q": "Your design puts back-to-back wall boxes on both sides of a high-STC wall between two conference rooms. What should you coordinate with the acoustician?",
    "options": [
      "Nothing, since wall boxes are too small to affect sound isolation",
      "A thinner wall, since the boxes need extra depth in the stud cavity",
      "A wider conduit, since larger pathways carry less sound between rooms",
      "Offsetting the boxes and sealing them, since they create a flanking path"
    ],
    "correct": 3,
    "explanation": "Openings in a partition let sound bypass it. Back-to-back boxes, unsealed conduit and gaps at the deck are classic flanking paths that can wipe out much of a wall's rating. Offset the boxes by at least one stud bay and seal them with acoustic putty pads, per the acoustician's details."
  },
  {
    "id": "ctsd-B5-05",
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B5",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 6, It Must Be Intelligible",
    "q": "In a long hall, the rear wall sends a strong reflection back to the front rows about 90 ms after the direct sound. What is the likely effect, and who should treat it?",
    "options": [
      "Better speech clarity, so no treatment is needed for this room",
      "Audible echo; the acoustician treats the rear wall",
      "A boost to bass response, which the AV designer then adds to with equalization",
      "Feedback at the lectern, which a narrower microphone pattern solves fully"
    ],
    "correct": 1,
    "explanation": "Reflections arriving 50 to 80 ms or more after the direct sound, at enough energy, are heard as a distinct echo that reduces intelligibility. Equalization cannot fix a time-domain problem. The acoustician treats the surface (absorption or diffusion), and the AV designer avoids aiming loudspeakers at it."
  },
  {
    "id": "ctsd-B5-06",
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B5",
    "diff": 4,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 11, Absorption (Sabine is not on the exam formula sheet)",
    "q": "An acoustician tells you a 600 m³ seminar room needs RT60 of 0.8 seconds. Using the Sabine equation (RT60 = 0.161 x V / A), about how much total absorption does the room need?",
    "options": [
      "77 m² sabins",
      "97 m² sabins",
      "121 m² sabins",
      "483 m² sabins"
    ],
    "correct": 2,
    "explanation": "Rearranged, A = 0.161 x V / RT60 = 0.161 x 600 / 0.8 = 120.75, about 121 m² (metric sabins). Sabine is the acoustician's tool rather than a formula-sheet item, but understanding it helps you see why more absorption shortens RT60 and why finish changes matter."
  },
  {
    "id": "ctsd-B5-07",
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B5",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 11, Background Noise",
    "q": "A soft-codec room is specified with a background noise limit. Which source is the AV designer most responsible for keeping out of the room?",
    "options": [
      "Traffic noise from the street, which depends on the building's facade",
      "Footfall from the floor above, which depends on the slab construction",
      "Fan noise from AV equipment such as projectors, racks and codecs",
      "Duct noise from the HVAC system, which the mechanical engineer designs"
    ],
    "correct": 2,
    "explanation": "The other trades own facade, structure and HVAC noise; the AV designer owns the noise the AV equipment adds. Locate racks outside the room or in a ventilated closet, choose quiet projectors and displays, and include their noise when you check the room against its target."
  },
  {
    "id": "ctsd-B5-08",
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B5",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 11, Absorption",
    "q": "The acoustician lists a ceiling tile with an NRC of 0.70. What does that tell you?",
    "options": [
      "It absorbs on average about 70 percent of sound energy at speech frequencies",
      "It blocks 70 dB of sound passing from the room into the plenum above",
      "It reflects 70 percent of the sound back into the room at all frequencies",
      "It can carry 70 percent more weight than a standard ceiling tile"
    ],
    "correct": 0,
    "explanation": "Noise Reduction Coefficient (NRC) is the average absorption coefficient at 250, 500, 1,000 and 2,000 Hz, from 0.00 (reflective) to 1.00 (absorptive). NRC 0.70 absorbs about 70 percent on average across that range. It says nothing about blocking sound (that is STC) or about low frequencies. The guide notes that the newer sound absorption average (SAA) is replacing NRC, though product data still quotes NRC."
  },
  {
    "id": "ctsd-B6-01",
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B6",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 9, Fire and Life Safety Protection",
    "q": "In a theater with a voice evacuation fire alarm, what must happen to the AV program audio when the fire alarm activates?",
    "options": [
      "It should get louder, so the audience notices the alarm sooner",
      "It must mute or duck automatically, so the voice messages are heard",
      "It may keep playing, since fire alarms have their own loudspeakers",
      "It should switch to the alarm tone, so the AV system replaces the fire alarm"
    ],
    "correct": 1,
    "explanation": "Life-safety messages must be intelligible. The AV system takes a monitored signal from the fire alarm system and mutes or ducks program audio when the alarm activates. The interface is designed with the fire alarm designer and approved by the AHJ; the AV system never replaces a listed fire alarm system."
  },
  {
    "id": "ctsd-B6-02",
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B6",
    "diff": 2,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 9, Fire Isolation",
    "q": "AV cabling must pass through a one-hour fire-rated wall. What must the design require?",
    "options": [
      "A larger hole, so the cable can be pulled through without damage",
      "An access panel in the wall, so the cable can be inspected later",
      "Plenum cable only, which makes the opening fire-rated by itself",
      "A listed firestop system that restores the wall's fire rating"
    ],
    "correct": 3,
    "explanation": "Any penetration of a rated assembly must be sealed with a listed firestop system matched to the wall type and the penetrating items, so the wall keeps its rating. Sleeves with firestop pillows or putty let cables be added later. Plenum rating is about smoke and flame spread, not the opening."
  },
  {
    "id": "ctsd-B6-03",
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B6",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 8, Illuminated Exit Signs",
    "q": "A screening room needs a dark room for 80:1 contrast, but code requires illuminated exit signs. How should the design handle this?",
    "options": [
      "Cover the exit signs during screenings, since contrast is critical in this room",
      "Ask the AHJ to waive the signs, since the room is only used for short screenings",
      "Keep the signs, and coordinate low-glare types and placement away from the screen",
      "Wire the signs to the AV system so they switch off when the projector turns on"
    ],
    "correct": 2,
    "explanation": "Life-safety devices cannot be covered, switched off or waived for image quality. Coordinate with the architect and lighting designer on sign types (such as low-glare models with dark faces where allowed) and locations that keep their light off the screen and out of the viewers' direct view."
  },
  {
    "id": "ctsd-B7-01",
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B7",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 7, Communicating with Stakeholders",
    "q": "A content studio will produce media for a 7,680 x 1,080 pixel LED wall. What must you give the content creators early in the project?",
    "options": [
      "The exact canvas resolution, frame rate and safe areas, plus any processor mapping",
      "The brand of the LED processor, so they can buy the same model for their own studio",
      "Nothing, since content creators always deliver in 1080p and the processor will scale it",
      "The installation schedule, so they can deliver content after commissioning ends"
    ],
    "correct": 0,
    "explanation": "Content made for the wrong canvas gets scaled, cropped or stretched. Give creators the native pixel canvas, aspect ratio, frame rate, color space and any bezel or mapping details as soon as the display is designed, so test content is ready for commissioning."
  },
  {
    "id": "ctsd-B7-02",
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B7",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 8, Lighting Control",
    "q": "A theater's lighting console must recall house-light levels when the AV system starts a presentation. What should the design specify?",
    "options": [
      "An operator who changes the lights by hand every time a presentation starts",
      "A control interface such as DMX or sACN, with agreed trigger points and presets",
      "Lights wired to the projector's power, so they dim whenever it is on",
      "Separate systems with no link, so a lighting fault cannot affect the AV system"
    ],
    "correct": 1,
    "explanation": "AV and theatrical lighting systems are usually linked through a defined control interface: DMX, sACN, contact closures or a network protocol. The design documents who sends what, which presets exist and what happens on failure, agreed with the theatrical consultant."
  },
  {
    "id": "ctsd-B7-03",
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B7",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 7, Industry Standards as Common Language",
    "q": "An exhibit designer wants interactive kiosks recessed into display cases. What does the AV designer need to coordinate?",
    "options": [
      "Only the screen size, since everything else is the exhibit designer's problem",
      "Nothing, since kiosks are standalone devices with no AV infrastructure",
      "The total weight, since kiosks must hang from the gallery ceiling grid",
      "Ventilation, service access, power and data, and how content is updated"
    ],
    "correct": 3,
    "explanation": "Recessed equipment overheats without airflow and is useless if nobody can service it. Coordinate ventilation, access panels, power and data pathways and the content-update method with the exhibit designer, who controls the casework."
  },
  {
    "id": "ctsd-C1-01",
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C1",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 5, Calculating Required Projector Brightness; AVIXA CTS-D formula sheet, Projector Lumens Output",
    "q": "A 2.4 x 1.35 m screen (gain 1.0) receives 100 lux of ambient light. For basic decision making (15:1 ISCR) and the formula sheet's 0.75 derating, how many lumens must the projector be rated for?",
    "options": [
      "4,860 lumens",
      "6,480 lumens",
      "3,645 lumens",
      "48,600 lumens"
    ],
    "correct": 1,
    "explanation": "Lumens = (L x C x A / Sg) / Dr. A = 2.4 x 1.35 = 3.24 m². 100 x 15 x 3.24 / 1.0 = 4,860, then / 0.75 = 6,480 lumens. 4,860 skips the derating, and 3,645 multiplies by 0.75 instead of dividing."
  },
  {
    "id": "ctsd-C1-02",
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C1",
    "diff": 4,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 5, Calculating Required Projector Brightness; AVIXA CTS-D formula sheet, Projector Lumens Output",
    "q": "An 8 x 4.5 ft screen with gain 1.3 receives 5 foot-candles of ambient light. For analytical decision making (50:1 ISCR) with Dr = 0.75, what projector rating is needed?",
    "options": [
      "6,923 lumens",
      "11,700 lumens",
      "15,600 lumens",
      "9,231 lumens"
    ],
    "correct": 3,
    "explanation": "A = 8 x 4.5 = 36 ft². (5 x 50 x 36) / 1.3 = 6,923, then / 0.75 = 9,231 lumens. Working in feet and foot-candles gives lumens directly, just as square meters and lux do. 6,923 skips the derating, and 11,700 multiplies by the gain instead of dividing."
  },
  {
    "id": "ctsd-C1-03",
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C1",
    "diff": 4,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 5, Calculating Required Projector Brightness",
    "q": "A 3.2 x 1.8 m screen in a lit lobby gets 300 lux. For 15:1 ISCR at gain 1, how much does the required rating change if the projector manufacturer's data supports a derating of 0.9 instead of the default 0.75?",
    "options": [
      "From 34,560 to 28,800 lumens",
      "From 25,920 to 23,328 lumens",
      "From 28,800 to 34,560 lumens",
      "It does not change, since Dr is fixed"
    ],
    "correct": 0,
    "explanation": "Base = 300 x 15 x (3.2 x 1.8) = 300 x 15 x 5.76 = 25,920. At Dr 0.75: 25,920 / 0.75 = 34,560 lumens. At 0.9: 25,920 / 0.9 = 28,800 lumens. A smaller loss allowance means a smaller projector, but use 0.75 unless the exam or real data says otherwise."
  },
  {
    "id": "ctsd-C1-04",
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C1",
    "diff": 2,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 5, Element Height; ANSI/AVIXA V202.01",
    "q": "The smallest characters on a 3840 x 2160 display are 65 pixels tall. What is the percentage of element height (%EH)?",
    "options": [
      "1.7 percent",
      "6.5 percent",
      "3.0 percent",
      "33 percent"
    ],
    "correct": 2,
    "explanation": "%EH = element height / image height = 65 / 2,160 = 0.030, or 3.0 percent. %EH is a ratio, so it is the same in pixels or millimeters as long as both values use the same unit. 1.7 percent divides by the width (3,840) instead of the height."
  },
  {
    "id": "ctsd-C1-05",
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C1",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 5, Element Height; Viewing Distance; ANSI/AVIXA V202.01",
    "q": "For basic decision making (BDM), farthest viewer = 200 x element height. With a 1.5 m tall image and a 3 percent %EH, how far back can the farthest viewer sit?",
    "options": [
      "4.5 m",
      "9 m",
      "6 m",
      "13.5 m"
    ],
    "correct": 1,
    "explanation": "Element height = 0.03 x 1.5 m = 0.045 m. Farthest viewer = 200 x 0.045 = 9 m. Equivalently, viewing distance / image height = 200 x %EH = 6, so 6 x 1.5 = 9 m. If the last row is farther, raise %EH (bigger content) or enlarge the image."
  },
  {
    "id": "ctsd-C1-06",
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C1",
    "diff": 4,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 5, Element Height; Viewing Distance; ANSI/AVIXA V202.01",
    "q": "A training room's last row is 12 m from the screen, and the client's content uses a 4 percent %EH. Using the BDM relationship (FV = 200 x EH), what is the minimum image height?",
    "options": [
      "0.6 m",
      "1.2 m",
      "2.4 m",
      "1.5 m"
    ],
    "correct": 3,
    "explanation": "The element must be at least 12 / 200 = 0.06 m tall at the farthest seat. Image height = element height / %EH = 0.06 / 0.04 = 1.5 m. A 1.5 m-high 16:9 image is about 2.67 m wide."
  },
  {
    "id": "ctsd-C1-07",
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C1",
    "diff": 4,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 5, Viewing Angles",
    "q": "For BDM, the top of the image should be no more than 30 degrees above the closest viewer's eye. That viewer sits 3 m from the screen with a 1.2 m seated eye height. What is the highest the top of the image can be?",
    "options": [
      "About 2.93 m above the floor",
      "About 4.20 m above the floor",
      "About 2.70 m above the floor",
      "About 1.73 m above the floor"
    ],
    "correct": 0,
    "explanation": "Rise = 3 x tan(30°) = 3 x 0.577 = 1.73 m above eye level. Add the 1.2 m eye height: 1.73 + 1.2 = 2.93 m. 1.73 m forgets the eye height. If the screen must sit higher, the first row has to move back."
  },
  {
    "id": "ctsd-C1-08",
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C1",
    "diff": 3,
    "ref": "AVIXA CTS-D formula sheet (2024), Video Camera Image Size",
    "q": "A camera with a 60-degree horizontal angle of view sits 4 m from the presenters. How wide a shot does it capture at that distance?",
    "options": [
      "2.31 m",
      "6.93 m",
      "4.62 m",
      "8.00 m"
    ],
    "correct": 2,
    "explanation": "IS = 2 x D x tan(A/2) = 2 x 4 x tan(30°) = 8 x 0.577 = 4.62 m. 2.31 m forgets the factor of 2, and 8 m treats tan(30°) as 1."
  },
  {
    "id": "ctsd-C1-09",
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C1",
    "diff": 4,
    "ref": "AVIXA CTS-D formula sheet (2024), Video Camera Image Size",
    "q": "A camera 5 m from a conference table must frame a 3.6 m wide group exactly. What horizontal angle of view does the lens need?",
    "options": [
      "About 19.8 degrees",
      "About 39.6 degrees",
      "About 71.7 degrees",
      "About 45.0 degrees"
    ],
    "correct": 1,
    "explanation": "Rearrange IS = 2 x D x tan(A/2): tan(A/2) = 3.6 / (2 x 5) = 0.36, so A/2 = 19.8° and A = 39.6°. 19.8° is only the half-angle. Pick a zoom range that includes about 40° at this distance."
  },
  {
    "id": "ctsd-C1-10",
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C1",
    "diff": 3,
    "ref": "AVIXA CTS-D formula sheet (2024), Ceiling Loudspeaker Coverage",
    "q": "Ceiling loudspeakers with 90-degree coverage are in a 3.0 m ceiling over seated listeners (ear height 1.2 m). What is the coverage diameter at ear height?",
    "options": [
      "1.8 m",
      "2.6 m",
      "6.0 m",
      "3.6 m"
    ],
    "correct": 3,
    "explanation": "D = 2 x (H - h) x tan(C/2) = 2 x (3.0 - 1.2) x tan(45°) = 2 x 1.8 x 1 = 3.6 m. The radius is 1.8 m. For standing listeners (ears about 1.7 m), the circle shrinks to 2 x 1.3 = 2.6 m."
  },
  {
    "id": "ctsd-C1-11",
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C1",
    "diff": 4,
    "ref": "AVIXA CTS-D formula sheet (2024), Ceiling Loudspeaker Spacing",
    "q": "Each ceiling loudspeaker covers a 1.8 m radius at ear height. For a speech-reinforcement room you choose minimum overlap in a square grid. What center-to-center spacing should you lay out?",
    "options": [
      "2.55 m",
      "3.60 m",
      "1.80 m",
      "3.12 m"
    ],
    "correct": 0,
    "explanation": "Square grid spacing: edge-to-edge = 2r = 3.6 m; minimum overlap = r x √2 = 1.8 x 1.414 = 2.55 m; center-to-center (the edge of one reaches the center of the next) = r = 1.8 m. 3.12 m is r x √3, the hexagonal minimum overlap."
  },
  {
    "id": "ctsd-C1-12",
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C1",
    "diff": 4,
    "ref": "AVIXA CTS-D formula sheet (2024), Wattage at the Loudspeaker",
    "q": "A loudspeaker with 95 dB sensitivity (1 W, 1 m) must deliver 85 dB SPL at 12 m with 10 dB of headroom. What electrical power is required?",
    "options": [
      "About 14 W",
      "About 72 W",
      "About 144 W",
      "About 288 W"
    ],
    "correct": 2,
    "explanation": "EPR = 10^((Lp + H - Ls + 20log(D2/Dr)) / 10) x Wref. 20log(12) = 21.6 dB. Exponent = (85 + 10 - 95 + 21.6) / 10 = 2.16, and 10^2.16 ≈ 144 W. About 14 W comes from leaving out the 10 dB of headroom."
  },
  {
    "id": "ctsd-C1-13",
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C1",
    "diff": 5,
    "ref": "AVIXA CTS-D formula sheet (2024), Potential and Needed Acoustic Gain",
    "q": "D0 = 20 m, EAD = 2 m, D1 = 4 m, D2 = 5 m, Ds = 0.6 m, with 4 open mics and a 6 dB FSM. Is the system stable (NAG < PAG - 10log(NOM) - FSM)?",
    "options": [
      "Yes, with 8.5 dB to spare",
      "Yes, since PAG is 28.5 dB",
      "No, but only by 0.5 dB",
      "No, it falls 3.5 dB short"
    ],
    "correct": 3,
    "explanation": "NAG = 20log(20/2) = 20 dB. PAG = 20log((20 x 4) / (5 x 0.6)) = 20log(26.7) = 28.5 dB. Available = 28.5 - 10log(4) - 6 = 28.5 - 6 - 6 = 16.5 dB, which is 3.5 dB short of 20. Halving Ds to 0.3 m adds 6 dB (22.5 dB available), which makes it stable."
  },
  {
    "id": "ctsd-C1-14",
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C1",
    "diff": 3,
    "ref": "AVIXA CTS-D formula sheet (2024), Digital Video Data Rate",
    "q": "Using the exam formula sheet (R = H x V x C x 1.25 x FPS x 3), what is the data rate of 3840 x 2160 video at 30 fps and 8 bits per color?",
    "options": [
      "About 7.46 Gbps",
      "About 5.97 Gbps",
      "About 2.49 Gbps",
      "About 14.9 Gbps"
    ],
    "correct": 0,
    "explanation": "3,840 x 2,160 x 8 x 1.25 x 30 x 3 = 7,464,960,000 bps, about 7.46 Gbps. 5.97 Gbps leaves out the 1.25 overhead factor, and 14.9 Gbps is the 60 fps result. Compare the result with the link capacity of the transport you choose."
  },
  {
    "id": "ctsd-C2-01",
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C2",
    "diff": 3,
    "ref": "AVIXA CTS-D formula sheet (2024), Ceiling Loudspeaker Coverage",
    "q": "The architect raises a ceiling to 10 ft. Seated ears are at 4 ft, and the loudspeakers have 100-degree coverage. What is the new coverage diameter at ear height?",
    "options": [
      "7.15 ft",
      "10.07 ft",
      "14.30 ft",
      "12.00 ft"
    ],
    "correct": 2,
    "explanation": "D = 2 x (10 - 4) x tan(50°) = 12 x 1.192 = 14.30 ft. 7.15 ft is the radius, and 12 ft treats tan(50°) as 1. A higher ceiling widens each circle, so you may need fewer loudspeakers; rerun the layout."
  },
  {
    "id": "ctsd-C2-02",
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C2",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 9, HVAC Considerations",
    "q": "The revised mechanical plan puts a supply diffuser exactly where your projector hangs. What should you do?",
    "options": [
      "Leave the projector there, since the airflow will cool it",
      "Coordinate a new location for one of them on the RCP",
      "Move the projector to the back wall, regardless of the new throw distance",
      "Wait until installation to see whether the diffuser causes any problems"
    ],
    "correct": 1,
    "explanation": "Air blowing onto a projector can disturb its intake and exhaust, carry dust and shimmer the image. Coordinate on the RCP: move the diffuser, or move the projector within its throw range (and recheck image size and lens shift). Moving it anywhere without recalculating breaks the design."
  },
  {
    "id": "ctsd-C2-03",
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C2",
    "diff": 4,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 5, Calculating Required Projector Brightness",
    "q": "The architect replaces solid walls with glass, raising ambient light on the 3.24 m² screen from 100 to 250 lux. At 15:1, gain 1 and Dr 0.75, what rating do you need now?",
    "options": [
      "9,720 lumens",
      "12,150 lumens",
      "6,480 lumens",
      "16,200 lumens"
    ],
    "correct": 3,
    "explanation": "250 x 15 x 3.24 / 1 = 12,150, then / 0.75 = 16,200 lumens (up from 6,480). Required brightness rises in direct proportion to ambient light. That jump is usually a reason to push back for shading before buying a far larger projector."
  },
  {
    "id": "ctsd-C2-04",
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C2",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 3, Budget Recommendations (value engineering is general practice)",
    "q": "During value engineering, the owner wants to cut the AV budget by 15 percent. What is the AV designer's best approach?",
    "options": [
      "Show options and their effect on each requirement so the owner can choose",
      "Cut items evenly across every room until the budget falls by 15 percent",
      "Remove the systems the AV designer personally considers the least useful",
      "Refuse any cuts, since the design already meets the program report"
    ],
    "correct": 0,
    "explanation": "Value engineering should keep the requirements in view. Present options (lower-cost equivalents, phasing, infrastructure now and equipment later, removing features) with what each one does to the needs in the program report, and let the owner decide. Record the decision."
  },
  {
    "id": "ctsd-C2-05",
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C2",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 4, Sightlines; Ch. 5, Viewing Angles",
    "q": "A structural beam runs where your sightline study placed the projected image's top edge. What should you revise?",
    "options": [
      "Nothing, since the audience can lean to see around the beam",
      "The beam, by asking the structural engineer to remove it from the design",
      "Image height and placement, checking DISCAS and sightlines for every seat",
      "The content, by telling users not to put anything in the top third of slides"
    ],
    "correct": 2,
    "explanation": "Structure rarely moves for AV. Revise the screen size and position below the beam (or move the screen), then recheck %EH, the farthest viewer, the vertical angle from the front row and sightlines past heads. If the image can no longer meet DISCAS, take that back to the client."
  },
  {
    "id": "ctsd-C2-06",
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C2",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 9, Mounting Considerations (post-tension slabs); RFIs are general practice",
    "q": "During construction, the contractor finds that the slab under a planned floor box is post-tensioned. What is the right step?",
    "options": [
      "Tell the contractor to core drill carefully and continue with the work",
      "Resolve it through an RFI with the structural engineer and revise",
      "Move the floor box anywhere nearby without telling the other trades",
      "Cancel the floor box and tell the client to use extension cords instead"
    ],
    "correct": 1,
    "explanation": "Drilling a post-tensioned slab can cut a tendon, which is dangerous and costly. The question goes through an RFI; the structural engineer decides (often scanning the slab or relocating), and the AV designer issues revised drawings so every trade works from the same information."
  },
  {
    "id": "ctsd-C2-07",
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C2",
    "diff": 2,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 3, Front-End Documentation (addenda are general practice)",
    "q": "You must change the AV drawings after the bid documents go out but before bids are due. How is that change issued?",
    "options": [
      "As a change order once the contract has been signed",
      "By phone to each bidder who asks a question",
      "As a punch list item during the final walkthrough",
      "As an addendum to all bidders through the bid process"
    ],
    "correct": 3,
    "explanation": "Changes during bidding are issued as addenda to every bidder at once, so all bids are based on the same documents. Change orders apply after the contract is awarded, and punch lists belong to closeout."
  },
  {
    "id": "ctsd-C2-08",
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C2",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 8, Lighting a Videoconference; Color Balance",
    "q": "The lighting designer proposes 2700 K downlights in a videoconference room and 4000 K over the whiteboard. What should you request?",
    "options": [
      "Matching color temperature, within about ±200 K, with CRI 90 or better",
      "Colored LED fixtures, so the room looks warmer on camera to far-end sites",
      "Brighter whiteboard lighting, since a mismatch only affects people in the room",
      "Nothing, since cameras white-balance automatically to any mix of sources"
    ],
    "correct": 0,
    "explanation": "A camera can white-balance to one color temperature, not two. Mixed sources make faces or the whiteboard look orange or blue. Ask for one color temperature throughout, within about ±200 K, with high color rendering (CRI 90+) so skin tones look natural."
  },
  {
    "id": "ctsd-C2-09",
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C2",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 4, Furniture",
    "q": "The client changes a boardroom table from rectangular to a long boat shape. Which part of your design must you check again?",
    "options": [
      "Only the rack elevation, since table shape affects the equipment rack",
      "Camera framing, mic coverage, display sightlines and the table boxes",
      "Only the projector lumens, since the table finish might change",
      "Nothing, since a new table shape never affects an AV design"
    ],
    "correct": 1,
    "explanation": "Table shape drives where people sit. That changes camera angles and framing, how many tabletop or ceiling mics are needed and where, sightlines and viewing angles to the displays, and where the table boxes and cable pathways go. Rerun those parts and update the drawings."
  },
  {
    "id": "ctsd-C2-10",
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C2",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 9, Fire and Life Safety Protection",
    "q": "On the coordinated RCP, a sprinkler head sits 150 mm from a planned ceiling projector mount. What should you consider?",
    "options": [
      "Sprinklers can be moved freely, so tell the fire contractor to relocate it",
      "It does not matter, since sprinklers only work if the projector catches fire",
      "Nothing, since sprinkler placement is entirely outside of the AV scope of work",
      "Clearance rules around the head, by moving the mount or asking the fire engineer"
    ],
    "correct": 3,
    "explanation": "Fire codes require clear space around sprinkler heads so the spray pattern is not blocked. Equipment that obstructs a head can fail inspection. Move the AV item, or ask the fire protection engineer whether the head can be relocated, and record the result on the coordinated RCP."
  },
  {
    "id": "ctsd-C2-11",
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C2",
    "diff": 4,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 6, Designing Loudspeaker Coverage",
    "q": "The architect wants the ceiling loudspeakers removed from a lecture hall for a cleaner ceiling and proposes two loudspeakers beside the screen instead. When is that acceptable?",
    "options": [
      "Always, since two loudspeakers by the screen sound better than any ceiling design",
      "Never, since ceiling loudspeakers are required by code in every lecture hall",
      "Only if new modeling shows they meet coverage, level and intelligibility targets",
      "Only if the client agrees to turn the volume up to make up for the change"
    ],
    "correct": 2,
    "explanation": "Any architectural change to loudspeaker locations must still meet the performance requirements: even coverage, adequate SPL with headroom, and intelligibility. Model the alternative (directivity, distances, the room's reflections). If it cannot meet the targets, explain the trade-off to the owner in writing."
  },
  {
    "id": "ctsd-C2-12",
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C2",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 3, Step 3: Evaluate the Site Environment/Benchmarking",
    "q": "A site survey of an existing building shows the ceiling is 300 mm lower than the old drawings. Which design items most need recalculating?",
    "options": [
      "Loudspeaker coverage and spacing, image height limits and projector throw",
      "Only the cable lengths to the rack, since they are now slightly shorter",
      "Only the heat load in the rack room, since the ceiling height changed",
      "Nothing, since 300 mm is too small a change to affect an AV design"
    ],
    "correct": 0,
    "explanation": "Ceiling height sets the loudspeaker-to-ear distance (so coverage diameter and spacing), the maximum screen height, and projector mounting position and throw. Field conditions override old drawings; recalculate and revise before procurement."
  },
  {
    "id": "ctsd-C3-01",
    "domain": "CTS-D: Design Documentation",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C3",
    "diff": 2,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 3, Drawing Types",
    "q": "At what height is a plan view (floor plan) normally cut?",
    "options": [
      "At floor level, showing only the floor finish and the floor boxes",
      "About 1 m (4 ft) above the floor, looking down",
      "Just below the ceiling, looking up at fixtures",
      "At the roof line, showing the building from above"
    ],
    "correct": 1,
    "explanation": "A plan view is a horizontal slice about 1 m (4 ft) above the floor, looking down. It shows walls, doors, windows and anything below the cut. Items above the cut, such as ceiling devices, appear on the reflected ceiling plan."
  },
  {
    "id": "ctsd-C3-02",
    "domain": "CTS-D: Design Documentation",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C3",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 3, AV System Drawings: System Diagrams",
    "q": "What is the main purpose of a signal flow (functional) diagram in an AV drawing package?",
    "options": [
      "To show the exact physical location of each device in the building",
      "To show the rack layout with rack units and mounting heights",
      "To show how signals pass between devices, with connections and cable IDs",
      "To show the electrical panel schedule for each of the AV power circuits"
    ],
    "correct": 2,
    "explanation": "Signal flow diagrams show devices as blocks, the connections between them, signal types and cable numbers, usually flowing left to right from inputs to outputs. They do not show physical location, which is the job of plans, elevations and rack drawings."
  },
  {
    "id": "ctsd-C3-03",
    "domain": "CTS-D: Design Documentation",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C3",
    "diff": 2,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 3, AV System Drawings: System Diagrams; Ch. 9, Designing the Rack",
    "q": "Which drawing shows the order of equipment in a rack, including blank panels, vent panels and rack units used?",
    "options": [
      "The reflected ceiling plan for the equipment room",
      "The signal flow diagram for the whole system",
      "The site plan of the building and its grounds",
      "The rack elevation"
    ],
    "correct": 3,
    "explanation": "A rack elevation shows the front (and often rear) face of each rack, with every device, its RU height and position, plus blanks, vents, drawers and power. It drives the installer's build and helps check heat and weight."
  },
  {
    "id": "ctsd-C3-04",
    "domain": "CTS-D: Design Documentation",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C3",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 3, AV Drawing Symbols; ANSI/INFOCOMM J-STD-710",
    "q": "Which standard gives AV designers a common set of drawing symbols for audio, video and control devices?",
    "options": [
      "ANSI/INFOCOMM J-STD-710",
      "ANSI/AVIXA F501.01",
      "ANSI/AVIXA V202.01:2016",
      "ANSI/INFOCOMM 10:2013"
    ],
    "correct": 0,
    "explanation": "J-STD-710 (Audio, Video, and Control Architectural Drawing Symbols) standardizes the symbols used on AV architectural drawings. F501.01 covers cable labeling, V202.01 covers DISCAS, and 10:2013 covers system verification."
  },
  {
    "id": "ctsd-C3-05",
    "domain": "CTS-D: Design Documentation",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C3",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 3, AV System Drawings: System Diagrams; ANSI/AVIXA F501.01",
    "q": "Under ANSI/AVIXA F501.01, what should a cable's label allow a technician to do?",
    "options": [
      "Show which manufacturer made the cable and the date it was installed",
      "Identify the cable uniquely and trace it to the drawings and schedule",
      "Show how long the cable is, so the cable run can be replaced easily",
      "Show the installer's initials, so warranty claims can be traced"
    ],
    "correct": 1,
    "explanation": "F501.01 requires each cable to carry a unique identifier at both ends that matches the drawings and cable schedule, so any cable can be found and traced. The standard lets the designer choose the numbering scheme, but it must be consistent and documented."
  },
  {
    "id": "ctsd-C3-06",
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C3",
    "diff": 2,
    "ref": "AVIXA CTS-D formula sheet (2024), Parallel Loudspeaker Impedance",
    "q": "Four 8-ohm loudspeakers are wired in parallel on one amplifier channel. What is the load impedance?",
    "options": [
      "32 ohms",
      "4 ohms",
      "8 ohms",
      "2 ohms"
    ],
    "correct": 3,
    "explanation": "For equal parallel loads, ZT = Z / N = 8 / 4 = 2 ohms. 32 ohms is the series total. Check that the amplifier is rated for a 2-ohm load before you specify it."
  },
  {
    "id": "ctsd-C3-07",
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C3",
    "diff": 3,
    "ref": "AVIXA CTS-D formula sheet (2024), Parallel Loudspeaker Impedance",
    "q": "An amplifier channel drives three loudspeakers in parallel: 8, 8 and 16 ohms. What is the total impedance?",
    "options": [
      "3.2 ohms",
      "10.7 ohms",
      "4.0 ohms",
      "32 ohms"
    ],
    "correct": 0,
    "explanation": "ZT = 1 / (1/8 + 1/8 + 1/16) = 1 / (0.125 + 0.125 + 0.0625) = 1 / 0.3125 = 3.2 ohms. 10.7 ohms is the average, and 32 ohms is the series sum. Parallel totals are always below the smallest single load."
  },
  {
    "id": "ctsd-C3-08",
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C3",
    "diff": 4,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 6, Loudspeakers Wired in a Series and Parallel Combination",
    "q": "An amplifier channel drives two branches in parallel; each branch has two 8-ohm loudspeakers in series. What load does the amplifier see?",
    "options": [
      "2 ohms",
      "4 ohms",
      "16 ohms",
      "8 ohms"
    ],
    "correct": 3,
    "explanation": "Each branch is 8 + 8 = 16 ohms in series. Two 16-ohm branches in parallel give 16 / 2 = 8 ohms. Series-parallel wiring lets you put four loudspeakers on a channel while keeping the load at a safe 8 ohms."
  },
  {
    "id": "ctsd-C3-09",
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C3",
    "diff": 3,
    "ref": "AVIXA CTS-D formula sheet (2024), Power Amplifier Wattage (Constant Voltage)",
    "q": "A 70 V paging zone has 24 ceiling loudspeakers, each tapped at 6 W. Using the formula sheet, what amplifier power do you specify?",
    "options": [
      "144 W",
      "173 W",
      "216 W",
      "288 W"
    ],
    "correct": 2,
    "explanation": "Wt = W x N x 1.5 = 6 x 24 x 1.5 = 216 W. The 1.5 adds 50 percent headroom. 144 W has no headroom, 173 W uses only 20 percent, and 288 W doubles it. Choose the next standard amplifier size at or above 216 W."
  },
  {
    "id": "ctsd-C3-10",
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C3",
    "diff": 4,
    "ref": "AVIXA CTS-D formula sheet (2024), Power Amplifier Wattage (Constant Voltage)",
    "q": "An existing 250 W, 70 V amplifier must drive 20 identical loudspeakers with 50 percent headroom. Taps are available at 2, 4, 8 and 16 W. What is the highest tap you can use?",
    "options": [
      "16 W",
      "8 W",
      "4 W",
      "2 W"
    ],
    "correct": 1,
    "explanation": "Rearrange Wt = W x N x 1.5: W = 250 / (20 x 1.5) = 8.33 W. The highest tap at or below 8.33 W is 8 W (8 x 20 x 1.5 = 240 W). The 16 W tap would need 480 W."
  },
  {
    "id": "ctsd-C3-11",
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C3",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 6, Transformers; Loudspeaker Taps",
    "q": "A loudspeaker transformer tapped at 100 W on a 70.7 V line presents roughly what impedance to the line?",
    "options": [
      "About 50 ohms",
      "About 8 ohms",
      "About 100 ohms",
      "About 707 ohms"
    ],
    "correct": 0,
    "explanation": "Z = V² / P = 70.7² / 100 = 5,000 / 100 = 50 ohms. Lower taps present higher impedance: a 10 W tap is about 500 ohms. This is why many loudspeakers can be paralleled on one constant-voltage line."
  },
  {
    "id": "ctsd-C3-12",
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C3",
    "diff": 4,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 6, Ohm’s Law Revisited (cable loss is general practice)",
    "q": "An 8-ohm loudspeaker is 100 ft from the amplifier (200 ft round trip) on 14 AWG cable at about 2.5 ohms per 1,000 ft. About how much level is lost in the cable?",
    "options": [
      "About 0.05 dB",
      "About 0.26 dB",
      "About 3 dB",
      "About 0.53 dB"
    ],
    "correct": 3,
    "explanation": "Cable resistance = 0.2 x 2.5 = 0.5 ohm. Loss = 20log((ZL + R) / ZL) = 20log(8.5 / 8) = 0.53 dB. Many designers aim for 0.5 dB or less on low-impedance runs, so this run sits right at the line; a heavier gauge would bring it under."
  },
  {
    "id": "ctsd-C3-13",
    "domain": "CTS-D: Design Documentation",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C3",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 3, Drawing Types",
    "q": "The installer needs to know exactly how a projector mount attaches to the structure above a ceiling. Which drawing provides that?",
    "options": [
      "A floor plan of the room",
      "A signal flow diagram",
      "A detail drawing",
      "A site plan"
    ],
    "correct": 2,
    "explanation": "A detail drawing is an enlarged view of a specific assembly, such as mounting hardware, a floor box or a custom plate, showing parts, dimensions and attachment methods. Plans and elevations reference details with callouts."
  },
  {
    "id": "ctsd-C3-14",
    "domain": "CTS-D: Design Documentation",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C3",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 3, The AV Design Package",
    "q": "Which schedule lists every cable with its number, type, source, destination and length?",
    "options": [
      "The equipment schedule",
      "The cable schedule",
      "The door schedule",
      "The panel schedule"
    ],
    "correct": 1,
    "explanation": "A cable schedule (run sheet) lists each cable's unique ID, type, origin and destination (often with connectors and lengths). It ties the signal flow diagram to the labels on site and is a key tool for installers and verification."
  },
  {
    "id": "ctsd-C4-01",
    "domain": "CTS-D: Design Documentation",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C4",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 3, AV System Specifications",
    "q": "A public-sector client must allow open competition. Which way of specifying a DSP best fits?",
    "options": [
      "A proprietary specification naming one model with no substitutions",
      "A sole-source specification that is approved by the AV designer alone",
      "A performance specification stating the functions and performance required",
      "No specification, leaving the choice of DSP to each bidder"
    ],
    "correct": 2,
    "explanation": "A performance specification defines what the equipment must do (channel count, processing, control interface and so on), so any compliant product can compete. Proprietary and sole-source specs restrict competition and often need justification in public work."
  },
  {
    "id": "ctsd-C4-02",
    "domain": "CTS-D: Design Documentation",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C4",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 3, AV System Specifications",
    "q": "What does \"or approved equal\" mean in a descriptive (prescriptive) specification?",
    "options": [
      "The contractor may use any product it likes without asking anyone",
      "The named product must be used, and substitutions are never allowed",
      "The owner pays extra for any product that is not the one named",
      "Another product may be used if the designer approves it"
    ],
    "correct": 3,
    "explanation": "\"Or approved equal\" names a basis-of-design product but lets bidders propose alternatives. The designer reviews each substitution request against the specified performance and approves or rejects it before bids or during submittals, as the specification sets out."
  },
  {
    "id": "ctsd-C4-03",
    "domain": "CTS-D: Design Documentation",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C4",
    "diff": 2,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 3, AV System Specifications (MasterFormat is general practice)",
    "q": "In CSI MasterFormat, which division covers communications, including most AV systems?",
    "options": [
      "Division 27",
      "Division 26",
      "Division 23",
      "Division 08"
    ],
    "correct": 0,
    "explanation": "Division 27 (Communications) holds most AV specifications, such as 27 41 00 for audio-video systems. Division 26 is electrical, 23 is HVAC, and 08 is openings (doors and windows). Using the right sections helps AV fit into the project manual."
  },
  {
    "id": "ctsd-C4-04",
    "domain": "CTS-D: Design Documentation",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C4",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 3, Front-End Documentation",
    "q": "What belongs in a statement of work (SOW) for the AV contract?",
    "options": [
      "Only the list of equipment and the total price of the contract",
      "The tasks, deliverables, responsibilities, schedule and exclusions",
      "Only the warranty terms that apply after the system is handed over",
      "Only the name and phone number of the AV project manager"
    ],
    "correct": 1,
    "explanation": "A SOW defines what work will be done, by whom, when and to what standard, including deliverables (drawings, programming, training, documentation), interfaces with other trades and what is excluded. Clear exclusions prevent disputes."
  },
  {
    "id": "ctsd-C4-05",
    "domain": "CTS-D: Design Documentation",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C4",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 3, The AV Design Package; Glossary, bill of materials",
    "q": "What information should a design bill of materials (BOM) include for each line?",
    "options": [
      "Only the manufacturer's marketing description of each product on the list",
      "Only the total price, so bidders cannot see each item's cost",
      "Only the room name, since quantities are counted on site",
      "Quantity, manufacturer, model, description and its location or system"
    ],
    "correct": 3,
    "explanation": "A good BOM lets bidders price and installers build: quantity, manufacturer and model (or performance reference), a brief description, and where it goes (room, rack or system). It should match the drawings exactly, so check quantities against the plans and rack elevations."
  },
  {
    "id": "ctsd-C4-06",
    "domain": "CTS-D: Design Documentation",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C4",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 3, Construction Phase; Front-End Documentation",
    "q": "During construction, the integrator sends product data and shop drawings for review. What is the AV designer's role?",
    "options": [
      "Review the submittals against the design and specification, then return them",
      "Approve them without reading, since the integrator is responsible for its work",
      "Order the equipment directly for the integrator as soon as it is listed",
      "Forward them to the client, since the designer has no role after bids close"
    ],
    "correct": 0,
    "explanation": "Submittal review checks that the proposed products, shop drawings and programming plans meet the contract documents. The designer marks them approved, approved as noted, or revise and resubmit. It is a key quality checkpoint before equipment is bought."
  },
  {
    "id": "ctsd-C4-07",
    "domain": "CTS-D: Design Documentation",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C4",
    "diff": 4,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 3, Front-End Documentation (bid alternates are general practice)",
    "q": "An owner is unsure whether to add a broadcast camera package this year. How can the bid documents capture its price without committing to it?",
    "options": [
      "Include it in the base bid and remove it later by change order if needed",
      "Leave it out completely and price it again after the project is finished",
      "List it as a bid alternate that the owner may accept or reject",
      "Ask one bidder privately for its price before the other bids arrive"
    ],
    "correct": 2,
    "explanation": "An alternate is priced separately from the base bid, so the owner can accept it at award or decline it. That gives a competitive price for the option without committing to it. Removing scope by change order is slower and rarely gives full credit."
  },
  {
    "id": "ctsd-C4-08",
    "domain": "CTS-D: Design Documentation",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C4",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 3, Front-End Documentation (allowances are general practice)",
    "q": "The client has not picked its digital signage content system yet but wants the AV contract to include it. Which mechanism fits best?",
    "options": [
      "A sole-source specification naming one popular signage product",
      "An allowance, a set sum carried in the bid and adjusted later",
      "A warranty clause that adds signage once the project is finished",
      "Nothing, since undecided items can never appear in a bid"
    ],
    "correct": 1,
    "explanation": "An allowance carries a stated sum for an item that is not yet defined. Every bidder includes the same amount, and the final cost is reconciled when the choice is made. It keeps bids comparable while the decision is pending."
  },
  {
    "id": "ctsd-C4-09",
    "domain": "CTS-D: Design Documentation",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C4",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 3, AV System Specifications",
    "q": "Which wording belongs in a specification?",
    "options": [
      "\"The contractor should try to use quality cable where possible.\"",
      "\"Use good loudspeakers that sound nice in the room.\"",
      "\"Install displays at whatever height looks right on site.\"",
      "\"The contractor shall provide plenum-rated cable where required.\""
    ],
    "correct": 3,
    "explanation": "Specifications use clear, mandatory, measurable language (\"shall\") with defined criteria. \"Should try,\" \"good\" and \"looks right\" cannot be enforced or verified. Tie requirements to standards, drawings or numbers wherever possible."
  },
  {
    "id": "ctsd-C4-10",
    "domain": "CTS-D: Design Documentation",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C4",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 3, The AV Design Package",
    "q": "Bid documents include drawings and a project manual. What does the project manual contain?",
    "options": [
      "Bidding requirements, contract conditions and the technical specifications",
      "Only the floor plans and the ceiling plans for every room in the building",
      "Only the equipment manuals that the manufacturers ship with their products",
      "Only the commissioning results, collected at the end of the project"
    ],
    "correct": 0,
    "explanation": "The project manual holds the written documents: bidding requirements, contract forms and conditions, and the specifications by division and section. The drawings show the graphic information. Together they form the contract documents."
  },
  {
    "id": "ctsd-C4-11",
    "domain": "CTS-D: Design Documentation",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C4",
    "diff": 4,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 3, Front-End Documentation",
    "q": "Three AV bids arrive. One is 30 percent below the others. What should you check before recommending it?",
    "options": [
      "Nothing, since the lowest price always gives the owner the best value",
      "Only the bidder's logo, to make sure it is a real company",
      "Scope coverage against the documents, exclusions and any substitutions",
      "Only whether the bidder has worked with this owner on earlier projects"
    ],
    "correct": 2,
    "explanation": "A much lower bid often means missing scope, unapproved substitutions, broad exclusions or misread documents. Level the bids: compare line items against the BOM and SOW, review qualifications and exclusions, and clarify before award."
  },
  {
    "id": "ctsd-C4-12",
    "domain": "CTS-D: Design Documentation",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C4",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 3, Design Phase; Front-End Documentation",
    "q": "The owner wants the AV system supported for three years after handover. Where should that requirement be stated?",
    "options": [
      "In a verbal agreement with the integrator's sales team",
      "In the specification and contract terms, with its scope",
      "In the rack elevation, as a note beside the equipment",
      "Nowhere, since all AV equipment includes three-year support"
    ],
    "correct": 1,
    "explanation": "Warranty and service expectations belong in the contract documents: duration, what is covered (parts, labor, software), response times, preventive maintenance and how service is requested. Manufacturer warranties vary and do not cover labor or system integration."
  },
  {
    "id": "ctsd-C4-13",
    "domain": "CTS-D: Design Documentation",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C4",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 3, Construction Phase",
    "q": "The specification calls for 12 ceiling microphones, but the RCP shows 10. How should this be prevented?",
    "options": [
      "By telling bidders to always use the larger quantity of the two",
      "By removing quantities from both, so bidders count them on site",
      "By letting the integrator decide during installation which is correct",
      "By cross-checking BOM, specs and drawings before every issue"
    ],
    "correct": 3,
    "explanation": "Conflicts between documents create disputes and change orders. Run a coordination check (quantities, model references, cable IDs) across the BOM, specifications and drawings before each issue. Contracts often set an order of precedence, but consistent documents avoid the argument."
  },
  {
    "id": "ctsd-C4-14",
    "domain": "CTS-D: Design Documentation",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C4",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 3, Design Phase; ANSI/AVIXA 10:2013",
    "q": "How should a specification define the required sound system performance so that it can be verified?",
    "options": [
      "With measurable targets such as SPL, coverage variation and STI",
      "With adjectives such as clear, powerful and pleasant to the ear",
      "With the brand names of the loudspeakers the designer likes best",
      "With a requirement that the owner be happy with the final sound"
    ],
    "correct": 0,
    "explanation": "Verification needs numbers. State targets such as SPL at listener positions, maximum variation across seats, STI for speech, and the measurement method (for example, referencing ANSI/AVIXA standards). Then the commissioning tests in the verification plan can prove compliance."
  },
  {
    "id": "ctsd-D1-01",
    "domain": "CTS-D: Verification & Closeout",
    "cert": "CTS-D",
    "duty": "D",
    "task": "D1",
    "diff": 2,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 3, Construction Phase",
    "q": "During the construction phase, the integrator turns the design documents into which drawings for fabrication and installation?",
    "options": [
      "Record (as-built) drawings",
      "Concept drawings",
      "Shop drawings",
      "Program drawings"
    ],
    "correct": 2,
    "explanation": "The guide calls them shop, workshop, submittal or installation drawings. They take the design documents to the level of detail needed to build racks, plates and systems. As-built (record) drawings come at closeout and show what was actually installed."
  },
  {
    "id": "ctsd-D1-02",
    "domain": "CTS-D: Verification & Closeout",
    "cert": "CTS-D",
    "duty": "D",
    "task": "D1",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 3, Construction Phase",
    "q": "Which three interconnected processes make up the construction phase?",
    "options": [
      "Coordination, procurement and installation",
      "Programming, briefing and concept design",
      "Bidding, award and contract negotiation",
      "Training, sign-off and warranty service"
    ],
    "correct": 0,
    "explanation": "The guide describes the construction phase as coordination, procurement and installation, all feeding off the drawings, specifications and equipment schedules from the design phase. They also lay the groundwork for testing, verification and training."
  },
  {
    "id": "ctsd-D1-03",
    "domain": "CTS-D: Verification & Closeout",
    "cert": "CTS-D",
    "duty": "D",
    "task": "D1",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 3, Construction Phase",
    "q": "Why should construction drawings be issued as locked PDFs or another unalterable format?",
    "options": [
      "So the files are smaller and faster to send by email to the integrator",
      "So nobody can change the design intent without a documented revision",
      "So the integrator cannot print them, which keeps the design confidential",
      "So the drawings meet the color requirements of the J-STD-710 symbols"
    ],
    "correct": 1,
    "explanation": "Drawings change through controlled revisions, not by someone editing a file. Locked formats protect the design intent and keep every trade working from the same issued set. Inaccurate or uncontrolled documents lead to change orders and delays."
  },
  {
    "id": "ctsd-D1-04",
    "domain": "CTS-D: Verification & Closeout",
    "cert": "CTS-D",
    "duty": "D",
    "task": "D1",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 9, Mounting Considerations",
    "q": "On a site visit, you find the integrator anchoring a projector mount into a post-tensioned concrete ceiling with no scan. What should you do?",
    "options": [
      "Approve it, since anchors in concrete are always stronger than steel",
      "Ask the integrator to drill slower so the anchor holds more firmly",
      "Note it for the punch list and inspect the mount again at closeout",
      "Stop the drilling and escalate; cutting a tendon is a serious hazard"
    ],
    "correct": 3,
    "explanation": "Post-tension slabs carry steel tendons under very high tension. Drilling into one can snap it with dangerous force and damage the structure. Stop the work and escalate through the project team; the structural engineer decides how and where to attach (usually after scanning)."
  },
  {
    "id": "ctsd-D1-05",
    "domain": "CTS-D: Verification & Closeout",
    "cert": "CTS-D",
    "duty": "D",
    "task": "D1",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 10, Grounds for Confusion; Ground Loops",
    "q": "During installation, the integrator proposes lifting the safety ground on a rack to cure a hum. How should you respond?",
    "options": [
      "Accept it if the hum goes away, since that proves it is a ground loop",
      "Accept it only for equipment that has a metal chassis in the rack",
      "Reject it; protective earth must stay, and fix the loop another way",
      "Reject it, but allow three-to-two-pin adapters on non-rack devices"
    ],
    "correct": 2,
    "explanation": "Removing protective earth creates a shock hazard and violates code. Solve hum with proper design: same-phase power from one panel, balanced connections, isolation transformers or other methods, while keeping every safety ground connected."
  },
  {
    "id": "ctsd-D1-06",
    "domain": "CTS-D: Verification & Closeout",
    "cert": "CTS-D",
    "duty": "D",
    "task": "D1",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 3, Construction Phase",
    "q": "The integrator asks to substitute a different DSP that it says is equivalent. What is the designer's role?",
    "options": [
      "Review the substitution against the specified performance before approval",
      "Accept any substitution the integrator says is equal, without any further review",
      "Refuse every substitution, since the BOM can never change after award",
      "Let the client's IT team decide, since a DSP sits on the network"
    ],
    "correct": 0,
    "explanation": "Substitutions go through the process the specifications and general conditions define. The designer checks that the proposed product meets the functional and technical requirements, including channel count, processing, control and network needs, and documents the decision."
  },
  {
    "id": "ctsd-D1-07",
    "domain": "CTS-D: Verification & Closeout",
    "cert": "CTS-D",
    "duty": "D",
    "task": "D1",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 7, Tracking the Project",
    "q": "Which tool best shows the AV installation tasks against dates, so you can see how a late ceiling affects the AV schedule?",
    "options": [
      "A signal flow diagram",
      "A Gantt chart",
      "A rack elevation",
      "A risk register"
    ],
    "correct": 1,
    "explanation": "A Gantt chart shows tasks as bars along a timeline, often with dependencies, so delays in one trade show their effect on others. A work breakdown structure lists the tasks, and a logic network diagram shows their sequence and dependencies."
  },
  {
    "id": "ctsd-D1-08",
    "domain": "CTS-D: Verification & Closeout",
    "cert": "CTS-D",
    "duty": "D",
    "task": "D1",
    "diff": 4,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 7, Tracking the Project",
    "q": "What does a work breakdown structure (WBS) do for an AV project?",
    "options": [
      "It shows the signal path from each source to each display in the system",
      "It lists all the people who must sign the final acceptance of the AV system",
      "It sets the dates for every task in the project on a calendar view",
      "It breaks the work into smaller deliverables that can be planned and tracked"
    ],
    "correct": 3,
    "explanation": "A WBS decomposes the project into deliverables and work packages, such as rack build, programming and room fit-out, so each can be scheduled, assigned and tracked. Schedules (Gantt) and logic networks are built from it."
  },
  {
    "id": "ctsd-D1-09",
    "domain": "CTS-D: Verification & Closeout",
    "cert": "CTS-D",
    "duty": "D",
    "task": "D1",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 7, Showing Workmanship",
    "q": "On a site walk, you see cables in a rack bundled tightly with plastic ties and bent sharply around the rails. What should you do?",
    "options": [
      "Nothing, since workmanship is the integrator's concern, not the designer's",
      "Ask for the rack to be painted, which hides the cabling from the client",
      "Raise it against the workmanship and bend-radius requirements in the spec",
      "Accept it if the system works on the day, since problems never appear later"
    ],
    "correct": 2,
    "explanation": "Overtightened ties and tight bends damage cables, especially fiber and high-speed copper, and cause intermittent failures later. Good workmanship (dressing, bend radius, separation, labeling) is part of the specification and the verification checklist, so raise it during installation."
  },
  {
    "id": "ctsd-D2-01",
    "domain": "CTS-D: Verification & Closeout",
    "cert": "CTS-D",
    "duty": "D",
    "task": "D2",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 19, Performance Verification Standard; ANSI/AVIXA 10:2013",
    "q": "Which standard defines a process for verifying that an AV system performs as designed?",
    "options": [
      "ANSI/AVIXA 10:2013, AV Systems Performance Verification",
      "ANSI/AVIXA V202.01, Display Image Size for 2D Content",
      "ANSI/INFOCOMM J-STD-710, AV Architectural Drawing Symbols",
      "ANSI/AVIXA F501.01, Cable Labeling for AV Systems"
    ],
    "correct": 0,
    "explanation": "ANSI/AVIXA 10:2013 gives a framework for verification items, when they are checked and how results are documented. It defines the verification phases and a reference list of items to verify. The other standards cover image size, symbols and labeling."
  },
  {
    "id": "ctsd-D2-02",
    "domain": "CTS-D: Verification & Closeout",
    "cert": "CTS-D",
    "duty": "D",
    "task": "D2",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 19, System Verification Process",
    "q": "In what order do the verification phases of ANSI/AVIXA 10:2013 run?",
    "options": [
      "Closeout, post-integration, pre-integration, systems integration",
      "Pre-integration, systems integration, post-integration, closeout",
      "Systems integration, pre-integration, closeout, post-integration",
      "Post-integration, closeout, systems integration, pre-integration"
    ],
    "correct": 1,
    "explanation": "Verification runs pre-integration (before installation starts), systems integration (during installation), post-integration (after installation, before handover), then closeout. Substantial completion and final acceptance mark the end. Checking at each stage catches problems while they are still cheap to fix."
  },
  {
    "id": "ctsd-D2-03",
    "domain": "CTS-D: Verification & Closeout",
    "cert": "CTS-D",
    "duty": "D",
    "task": "D2",
    "diff": 4,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 19, Performance Verification Standard (design and coordination checklist)",
    "q": "On the AV Systems Design and Coordination Processes Checklist, an item carries activity codes M, C and D. What do they stand for?",
    "options": [
      "Measurement, calculation and demonstration",
      "Maintenance, commissioning and documentation",
      "Meeting, coordination and deliverable",
      "Monitoring, control and design review"
    ],
    "correct": 2,
    "explanation": "Each checklist item gets an activity code (deliverable D, coordination C, task T, meeting M, other O, or not applicable NA), a responsible party who performs it, and an \"accepted by\" party who verifies it. An item like scheduling project meetings can be M, C and D at once."
  },
  {
    "id": "ctsd-D2-04",
    "domain": "CTS-D: Verification & Closeout",
    "cert": "CTS-D",
    "duty": "D",
    "task": "D2",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 19, Audio/Video Sync",
    "q": "You measure audio arriving 60 ms after the matching video at the display. Is that acceptable, and what fixes it?",
    "options": [
      "Yes, since anything under 100 ms is invisible to every viewer",
      "Yes, since audio after video is always comfortable for viewers",
      "No; fix it by delaying the audio by another 60 ms in the DSP",
      "No; it is past the 45 ms limit, so shorten the audio path or delay video"
    ],
    "correct": 3,
    "explanation": "A common target is audio no more than 15 ms ahead of or 45 ms behind the video. 60 ms late is outside that window. Since the audio is already late, you either delay the video path or reduce delay elsewhere in the audio path. Adding audio delay makes it worse."
  },
  {
    "id": "ctsd-D2-05",
    "domain": "CTS-D: Verification & Closeout",
    "cert": "CTS-D",
    "duty": "D",
    "task": "D2",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 19, Audio System Verification",
    "q": "Which set of measurements verifies a speech reinforcement system against its design targets?",
    "options": [
      "SPL and coverage at many seats, frequency response and STI",
      "Only the amplifier output power at its maximum gain setting",
      "Only a listening test by the client at the front row",
      "Only the loudspeaker impedance on the day of handover"
    ],
    "correct": 0,
    "explanation": "Verify against measurable targets: SPL at listener positions (and its variation across the room), frequency response, intelligibility (STI) and system stability, using calibrated tools. One listening position or one test cannot show coverage."
  },
  {
    "id": "ctsd-D2-06",
    "domain": "CTS-D: Verification & Closeout",
    "cert": "CTS-D",
    "duty": "D",
    "task": "D2",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 5, ANSI/AVIXA V201.01:2021",
    "q": "How do you check that a projection system conforms to ANSI/AVIXA V201.01 image contrast requirements?",
    "options": [
      "Measure brightness at the center of the screen once, with the room dark",
      "Measure white and black luminance at the set positions under room light",
      "Read the projector's contrast rating from its specification sheet",
      "Ask the client whether the image looks bright enough from the back row"
    ],
    "correct": 1,
    "explanation": "V201.01 checks the image system contrast ratio (ISCR) by measuring full-white and full-black luminance at defined viewing positions in the actual lighting conditions. Data sheet contrast ratings are measured in a dark lab and do not show the room's ambient light."
  },
  {
    "id": "ctsd-D2-07",
    "domain": "CTS-D: Verification & Closeout",
    "cert": "CTS-D",
    "duty": "D",
    "task": "D2",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 13, HDCP Device Limits",
    "q": "A source feeds a switcher, then a splitter, then two receivers and their displays. Some displays go blank with protected content. Which limit should you check first?",
    "options": [
      "The number of EDID blocks the source can read in one session",
      "The maximum length of a fiber run between each repeater device",
      "The source's HDCP key limit and the repeater depth",
      "The color depth that each display supports in its EDID table"
    ],
    "correct": 2,
    "explanation": "HDCP 2.x supports up to 32 downstream devices and 4 levels of repeaters, but many sources support far fewer keys. Each switcher, splitter and receiver can count. Map the chain and the source's key limit; reduce repeaters or use a device that manages HDCP authentication."
  },
  {
    "id": "ctsd-D2-08",
    "domain": "CTS-D: Verification & Closeout",
    "cert": "CTS-D",
    "duty": "D",
    "task": "D2",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 13, Resolving EDID Issues",
    "q": "One display in a distribution system shows a lower resolution than the others. What is the most likely cause?",
    "options": [
      "An HDCP failure, which always lowers the resolution on one display",
      "A loudspeaker impedance mismatch on the display's audio output",
      "A ground loop, which reduces the number of pixels shown on screen",
      "An EDID mismatch, so the source is choosing a common lower format"
    ],
    "correct": 3,
    "explanation": "Sources pick formats from the EDID they receive. When devices report different capabilities, a switcher or source may fall back to a format they all support. An EDID strategy, such as fixed EDID on switcher inputs, keeps formats consistent. HDCP failures usually produce a blank or error screen."
  },
  {
    "id": "ctsd-D2-09",
    "domain": "CTS-D: Verification & Closeout",
    "cert": "CTS-D",
    "duty": "D",
    "task": "D2",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 15, Verifying System Performance",
    "q": "How should the control system be verified before handover?",
    "options": [
      "Test every button and function against the approved design and user flows",
      "Press the main power button once, since everything else follows from that",
      "Let users find problems during their first week of normal use",
      "Read the program code and assume it works if it compiles cleanly"
    ],
    "correct": 0,
    "explanation": "Control verification checks every function in the approved control design: each button and page, feedback, presets, error handling and integration with lighting, shades and other systems. Users discovering bugs in their first week means verification was skipped."
  },
  {
    "id": "ctsd-D3-01",
    "domain": "CTS-D: Verification & Closeout",
    "cert": "CTS-D",
    "duty": "D",
    "task": "D3",
    "diff": 2,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 19, Closeout Documentation",
    "q": "Which documents show the system exactly as it was installed, including any field changes?",
    "options": [
      "The concept design report",
      "The bid response forms",
      "The as-built drawings",
      "The invitation to bid"
    ],
    "correct": 2,
    "explanation": "As-built (record) drawings are updated to reflect what was actually installed, including field changes, cable IDs and final settings. Along with manuals, warranties, passwords and test results, they let the owner operate and maintain the system."
  },
  {
    "id": "ctsd-D3-02",
    "domain": "CTS-D: Verification & Closeout",
    "cert": "CTS-D",
    "duty": "D",
    "task": "D3",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 19, Conducting System Closeout",
    "q": "A few minor items are found during the final walkthrough. How should they be handled?",
    "options": [
      "Ignore them, since minor items never affect how the system works",
      "Record them on a punch list with responsibility and follow-up dates",
      "Hold all payments until the system is replaced with a different design",
      "Fix them yourself without telling anyone, so closeout is faster"
    ],
    "correct": 1,
    "explanation": "A punch (snag) list records each correction or change needed, who is responsible and when it will be done. If items cannot be finished at once, arrange follow-up. Final acceptance comes after the list is cleared or agreed."
  },
  {
    "id": "ctsd-D3-03",
    "domain": "CTS-D: Verification & Closeout",
    "cert": "CTS-D",
    "duty": "D",
    "task": "D3",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 19, Customer Training",
    "q": "What makes customer training at closeout effective?",
    "options": [
      "One long lecture for everyone at once, covering every technical detail",
      "Handing over the manuals, since users can read them later",
      "Training only the IT staff, since end users never need training",
      "Training each user group on the tasks it does, with hands-on practice"
    ],
    "correct": 3,
    "explanation": "Different users need different training: presenters learn everyday operation, technical staff learn configuration and troubleshooting, and administrators learn maintenance. Hands-on practice with the real system and simple quick-reference guides make it stick."
  },
  {
    "id": "ctsd-D3-04",
    "domain": "CTS-D: Verification & Closeout",
    "cert": "CTS-D",
    "duty": "D",
    "task": "D3",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 19, Client Sign-Off",
    "q": "What does client sign-off at the end of an AV project confirm?",
    "options": [
      "That the client accepts the system as meeting the agreed requirements",
      "That the client will never request any change to the system again",
      "That the integrator's warranty ends on the date of the sign-off",
      "That the designer has no responsibility for any documentation errors"
    ],
    "correct": 0,
    "explanation": "Sign-off records that the client's representative accepts that the system meets the performance specifications and agreed scope, usually after verification and punch list completion. It often starts the warranty period and triggers final payment."
  },
  {
    "id": "ctsd-D3-05",
    "domain": "CTS-D: Verification & Closeout",
    "cert": "CTS-D",
    "duty": "D",
    "task": "D3",
    "diff": 3,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 19, Closeout Documentation",
    "q": "Which item belongs in the closeout package for networked AV systems?",
    "options": [
      "The integrator's internal bid pricing for each and every line of the BOM",
      "A copy of every email sent between trades during the project",
      "IP schedules, configuration files and credentials, handed over securely",
      "Only the manufacturers' marketing brochures for each product"
    ],
    "correct": 2,
    "explanation": "The owner needs what it takes to run and maintain the system: IP and VLAN schedules, device configuration and DSP files, control code, firmware versions, and admin credentials delivered through a secure process. Without them, every future change depends on the original integrator."
  },
  {
    "id": "ctsd-D3-06",
    "domain": "CTS-D: Verification & Closeout",
    "cert": "CTS-D",
    "duty": "D",
    "task": "D3",
    "diff": 4,
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 19, Conducting System Closeout; ANSI/AVIXA 10:2013",
    "q": "Under ANSI/AVIXA 10:2013, what happens between substantial completion and final acceptance?",
    "options": [
      "The design is started again from the beginning, with a new set of requirements",
      "Closeout items, such as the punch list, documentation and training, finish",
      "The equipment is ordered and delivered to the site for the installers",
      "The pre-integration checks are run for the first time on the system"
    ],
    "correct": 1,
    "explanation": "At substantial completion the system is usable, but closeout tasks remain: completing punch list items, delivering as-builts and documentation, training, and final verification. Final acceptance follows when those are done and the owner signs off."
  }
];
  const CTSD_DRILLS = [
  {
    "cert": "CTS-D",
    "duty": "Duty C: Develop and Document AV Designs",
    "task": "Create conceptual AV design",
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 5, Calculating Required Projector Brightness",
    "scenario": "A divisible ballroom gets two 16:9 screens, each 3.0 m wide. The client wants basic decision making (15:1 ISCR) with the house lights at the meeting level, which puts 150 lux on the screens. The screens have unity gain. Your shortlist has projectors rated 12,000, 15,000, 16,000 and 20,000 lumens.",
    "question": "Using the formula sheet with Dr = 0.75, which is the smallest projector on the list that meets the target?",
    "options": [
      "12,000 lumens, since the screens are only 3 m wide",
      "15,000 lumens, since it is within 2 percent of the requirement",
      "16,000 lumens, since about 15,200 lumens are needed",
      "20,000 lumens, since you should always double the requirement"
    ],
    "correct": 2,
    "explanation": "Image height = 3.0 x 9/16 = 1.6875 m, so A = 3.0 x 1.6875 = 5.06 m². Lumens = (150 x 15 x 5.06 / 1) / 0.75 = 15,188. The 15,000 model falls just short, so the smallest that meets the requirement is 16,000 lumens. Doubling is not a design method."
  },
  {
    "cert": "CTS-D",
    "duty": "Duty C: Develop and Document AV Designs",
    "task": "Create conceptual AV design",
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 5, Element Height; Viewing Distance; ANSI/AVIXA V202.01",
    "scenario": "A training room's farthest seat is 10 m from the display wall. The client's slide templates put the smallest text at 36 pixels tall on a 1080-line canvas. Trainees need to read the text (basic decision making), and the BDM relationship is farthest viewer = 200 x element height.",
    "question": "What is the minimum image height the design needs?",
    "options": [
      "About 1.2 m",
      "About 1.5 m",
      "About 2.0 m",
      "About 3.0 m"
    ],
    "correct": 1,
    "explanation": "%EH = 36 / 1,080 = 3.33 percent. At 10 m the element must be at least 10 / 200 = 0.05 m tall. Image height = 0.05 / 0.0333 = 1.5 m. A smaller image needs bigger text, so tell the client which lever they hold."
  },
  {
    "cert": "CTS-D",
    "duty": "Duty C: Develop and Document AV Designs",
    "task": "Create conceptual AV design",
    "ref": "AVIXA CTS-D formula sheet (2024), Ceiling Loudspeaker Coverage; Spacing; Power Amplifier Wattage (Constant Voltage)",
    "scenario": "A 12 x 9 m open office needs background music and paging from ceiling loudspeakers in a 3.0 m ceiling. Listeners are seated (ear height 1.2 m). The loudspeakers have 90-degree coverage and will be tapped at 4 W on a 70 V line. You choose a minimum-overlap square grid.",
    "question": "About how many loudspeakers do you need, and what amplifier power does the formula sheet give?",
    "options": [
      "12 loudspeakers and a 72 W amplifier",
      "20 loudspeakers and an 80 W amplifier",
      "35 loudspeakers and a 210 W amplifier",
      "20 loudspeakers and a 120 W amplifier"
    ],
    "correct": 3,
    "explanation": "Coverage radius = (3.0 - 1.2) x tan(45°) = 1.8 m. Minimum-overlap spacing = 1.8 x √2 = 2.55 m. 12 / 2.55 = 4.7, so 5 rows; 9 / 2.55 = 3.5, so 4 columns: 20 loudspeakers. Amplifier = 4 W x 20 x 1.5 = 120 W. 12 loudspeakers is edge-to-edge spacing, and 80 W leaves out the headroom."
  },
  {
    "cert": "CTS-D",
    "duty": "Duty B: Coordinate with Other Professionals",
    "task": "Coordinate with mechanical, electrical, and plumbing professionals",
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 9, Heat Load; Calculating Heat Load from Power Amplifiers",
    "scenario": "A rack room holds 2,400 W of processing, switching and network equipment, plus four power amplifiers rated at 1,000 W each and 80 percent efficient. The mechanical engineer asks for the heat load in BTU/hr and in tons of cooling (12,000 BTU/hr per ton).",
    "question": "What do you report?",
    "options": [
      "About 10,880 BTU/hr, or about 0.9 ton",
      "About 21,760 BTU/hr, or about 1.8 tons",
      "About 8,160 BTU/hr, or about 0.7 ton",
      "About 6,400 BTU/hr, or about 0.5 ton"
    ],
    "correct": 0,
    "explanation": "Non-amplifier gear: 2,400 x 3.4 = 8,160 BTU/hr. Amplifiers: 4 x 1,000 x 3.4 x (1 - 0.8) = 2,720 BTU/hr. Total = 10,880 BTU/hr, about 0.91 ton. 21,760 treats the amplifiers as pure heat, and 8,160 forgets them. Give the operating hours too, so the cooling runs when the gear does."
  },
  {
    "cert": "CTS-D",
    "duty": "Duty B: Coordinate with Other Professionals",
    "task": "Coordinate with mechanical, electrical, and plumbing professionals",
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 10, Branch Circuit Loads; Calculating the Number of Circuits: An Example",
    "scenario": "In a U.S. project, a rack's equipment draws 4,000 W in total at 120 V. The electrical engineer will provide 20 A branch circuits, and you can split the equipment across circuits however you like.",
    "question": "How many dedicated 20 A circuits should you request under the NEC 80 percent rule?",
    "options": [
      "Two circuits, since 40 A of capacity covers about 33 A",
      "Three circuits, since each one carries no more than 16 A",
      "Four circuits, since each needs 50 percent headroom",
      "One circuit, if it is a dedicated AV circuit"
    ],
    "correct": 1,
    "explanation": "I = 4,000 / 120 = 33.3 A. Each 20 A circuit may carry 0.8 x 20 = 16 A. 33.3 / 16 = 2.08, so you need three circuits. Two circuits give only 32 A of usable capacity. Note on the drawings that they come from the same phase and panel."
  },
  {
    "cert": "CTS-D",
    "duty": "Duty C: Develop and Document AV Designs",
    "task": "Create conceptual AV design",
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 6, PAG/NAG; More Variables: NOM and FSM",
    "scenario": "A council chamber has D0 = 16 m, EAD = 1 m, D1 = 4 m, D2 = 6 m and Ds = 0.5 m. Four microphones can be open at once, and you require a 6 dB FSM. The system is short of the needed acoustic gain.",
    "question": "Which change, or combination, makes the system stable?",
    "options": [
      "Halve Ds to 0.25 m by moving the microphones closer to the talkers",
      "Use an automatic mixer so only one microphone is open at a time",
      "Reduce the FSM to 0 dB so all the potential gain can be used",
      "Halve Ds and gate the mics to one open at a time, together"
    ],
    "correct": 3,
    "explanation": "NAG = 20log(16/1) = 24.1 dB. PAG = 20log((16 x 4) / (6 x 0.5)) = 26.6 dB; minus 10log(4) = 6 dB and FSM 6 dB leaves 14.6 dB, about 9.5 dB short. Halving Ds adds 6 dB (20.6 dB, still short). One open mic adds 6 dB (20.6 dB, still short). Both give 26.6 dB, stable by 2.5 dB. Dropping the FSM sacrifices stability."
  },
  {
    "cert": "CTS-D",
    "duty": "Duty B: Coordinate with Other Professionals",
    "task": "Coordinate with mechanical, electrical, and plumbing professionals",
    "ref": "AVIXA CTS-D formula sheet (2024), Conduit Capacity",
    "scenario": "Four cables must share one EMT run from a floor box to the wall: three at 0.30 in OD and one at 0.40 in OD. EMT inside diameters are 0.824 in (3/4\"), 1.049 in (1\"), 1.380 in (1-1/4\") and 1.610 in (1-1/2\").",
    "question": "What is the smallest conduit that meets the fill rule?",
    "options": [
      "3/4\" EMT",
      "1\" EMT",
      "1-1/4\" EMT",
      "1-1/2\" EMT"
    ],
    "correct": 1,
    "explanation": "With three or more cables the fill limit is 40 percent: ID > sqrt((3 x 0.30² + 0.40²) / 0.40) = sqrt(0.43 / 0.40) = 1.04 in. 1\" EMT (1.049 in) just passes. With so little margin, many designers would go to 1-1/4\" to allow for bends, pull length and future cables."
  },
  {
    "cert": "CTS-D",
    "duty": "Duty C: Develop and Document AV Designs",
    "task": "Create conceptual AV design",
    "ref": "AVIXA CTS-D formula sheet (2024), Digital Video Data Rate; Ch. 13, Video over IP Networks",
    "scenario": "A medical simulation lab wants 3840 x 2160 video at 60 fps, 8 bits per color, routed between rooms over the network. IT offers 10 Gbps ports to each endpoint and asks whether that is enough to send the video uncompressed.",
    "question": "Using the formula sheet, what do you tell IT?",
    "options": [
      "Yes: the stream needs about 7.5 Gbps, which fits within one 10 Gbps port",
      "Yes: the stream needs about 4.5 Gbps, which leaves room for two streams",
      "No: the stream needs about 14.9 Gbps, so plan compression or faster links",
      "No: the stream needs about 30 Gbps, so the video must go over fiber"
    ],
    "correct": 2,
    "explanation": "R = 3,840 x 2,160 x 8 x 1.25 x 60 x 3 = 14.9 Gbps. That exceeds a 10 Gbps port, so choose light (visually lossless) compression, a lower frame rate or chroma subsampling, or faster network links. 7.5 Gbps is the 30 fps figure."
  },
  {
    "cert": "CTS-D",
    "duty": "Duty B: Coordinate with Other Professionals",
    "task": "Coordinate with IT and network security professionals",
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 17, Unicast and Multicast; Implementing Multicast",
    "scenario": "A company all-hands will be streamed live to 200 desktops in one building at 4 Mbps per stream. The building core has a 1 Gbps link to the floor switches, shared with normal office traffic.",
    "question": "What is the best design recommendation?",
    "options": [
      "Multicast with IGMP snooping, so each switch link carries one 4 Mbps copy",
      "Unicast to all 200 desktops, since 800 Mbps fits within a 1 Gbps link",
      "Unicast at 1 Mbps per viewer, so the total drops to 200 Mbps instead",
      "Broadcast to every port, since broadcast needs no switch configuration"
    ],
    "correct": 0,
    "explanation": "Unicast sends one copy per viewer: 200 x 4 = 800 Mbps, nearly saturating the shared 1 Gbps link. Multicast sends one copy per link to the switches that requested it, so the load stays near 4 Mbps. IGMP snooping and a querier keep the stream off ports that did not join it."
  },
  {
    "cert": "CTS-D",
    "duty": "Duty C: Develop and Document AV Designs",
    "task": "Create conceptual AV design",
    "ref": "AVIXA CTS-D formula sheet (2024), Video Camera Image Size",
    "scenario": "A lecture capture camera will be mounted on the back wall, 9 m from the front of the room. The presentation area it must frame (lectern, whiteboard and screen) is 6 m wide.",
    "question": "What horizontal angle of view must the lens reach at its widest useful framing?",
    "options": [
      "About 18 degrees",
      "About 67 degrees",
      "About 53 degrees",
      "About 37 degrees"
    ],
    "correct": 3,
    "explanation": "tan(A/2) = 6 / (2 x 9) = 0.333, so A/2 = 18.4° and A = 36.9°. Choose a camera whose zoom range covers about 37° with room to spare, and check the tightest shot (for example, the presenter alone) at the long end of the zoom."
  },
  {
    "cert": "CTS-D",
    "duty": "Duty C: Develop and Document AV Designs",
    "task": "Create conceptual AV design",
    "ref": "AVIXA CTS-D formula sheet (2024), Wattage at the Loudspeaker",
    "scenario": "A sanctuary needs 90 dB SPL at the farthest seat, 20 m from the main loudspeaker. The loudspeaker's sensitivity is 98 dB (1 W, 1 m), and the client only needs speech, so you allow the 10 dB of headroom the guide suggests for speech.",
    "question": "About how much amplifier power must reach the loudspeaker?",
    "options": [
      "About 63 W",
      "About 317 W",
      "About 634 W",
      "About 1,268 W"
    ],
    "correct": 2,
    "explanation": "EPR = 10^((90 + 10 - 98 + 20log(20/1)) / 10). 20log(20) = 26.0 dB, so the exponent is (2 + 26.0) / 10 = 2.80, and 10^2.80 ≈ 634 W. 63 W leaves out the headroom. If the client later wants music, the guide suggests 20 dB of headroom, which needs about ten times the power."
  },
  {
    "cert": "CTS-D",
    "duty": "Duty B: Coordinate with Other Professionals",
    "task": "Coordinate with structural professionals",
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 9, Load Limit; Mounting Considerations",
    "scenario": "A 3 x 3 videowall uses nine 55-inch displays at 25 kg each, each on its own push-in mount weighing 8 kg. The structural engineer needs the load, and you must specify the mounting hardware.",
    "question": "What do you give the engineer, and what rating must the mounting hardware carry?",
    "options": [
      "225 kg dead load; hardware rated at least 1,125 kg",
      "297 kg dead load; hardware rated at least 1,485 kg",
      "297 kg dead load; hardware rated at least 594 kg",
      "1,485 kg dead load; hardware rated at least 7,425 kg"
    ],
    "correct": 1,
    "explanation": "Dead load = (25 + 8) x 9 = 297 kg, which goes to the structural engineer with the wall layout. With the 5:1 safety factor, the mounting system must be rated for at least 297 x 5 = 1,485 kg. 225 kg leaves out the mounts, and 594 kg uses only a 2:1 factor."
  },
  {
    "cert": "CTS-D",
    "duty": "Duty D: Deploy AV Designs",
    "task": "Verify system performance",
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 5, ANSI/AVIXA V201.01:2021; Ch. 8, Shades and Blackout Drapes",
    "scenario": "During post-integration verification of a classroom, you measure 300 cd/m² on a full-white test pattern and 30 cd/m² on full black at a required viewing position, with the room lights and blinds as the client will use them. The design target is 15:1 ISCR.",
    "question": "What is the result, and what is the best first fix?",
    "options": [
      "It passes at 15:1, so no fix is needed for this viewing position",
      "It passes at 30:1, since the projector rating is what counts",
      "It fails at 10:1; replace the projector with a much brighter model first",
      "It fails at 10:1; reduce light on the screen with blinds or lighting zones"
    ],
    "correct": 3,
    "explanation": "Contrast = 300 / 30 = 10:1, which fails the 15:1 target. The black level comes from ambient light hitting the screen, so cutting that light (blinds, separate lighting zones that keep the screen dark) raises contrast cheaply. A brighter projector also works, but costs far more."
  },
  {
    "cert": "CTS-D",
    "duty": "Duty D: Deploy AV Designs",
    "task": "Verify system performance",
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 19, Audio/Video Sync; Correcting Audio/Video Sync Errors",
    "scenario": "In a boardroom, the video passes through a scaler that adds 2 frames and a display that adds 1 frame at 60 fps, about 50 ms in total. The audio path through the DSP adds 5 ms. Viewers say voices seem to come before the lips move.",
    "question": "What is wrong, and how do you fix it?",
    "options": [
      "Audio leads by about 45 ms, beyond the +15 ms limit; delay the audio",
      "Audio lags by about 45 ms, inside the limit; no change is needed",
      "Audio leads by about 45 ms; delay the video by another 45 ms",
      "Audio leads by about 5 ms; remove the DSP from the audio path"
    ],
    "correct": 0,
    "explanation": "Video arrives about 50 ms after the source and audio about 5 ms after, so audio leads by about 45 ms. The usual tolerance is audio no more than 15 ms early or 45 ms late. Add roughly 45 ms of delay in the DSP so audio lines up with the picture, then verify with a sync test signal."
  },
  {
    "cert": "CTS-D",
    "duty": "Duty D: Deploy AV Designs",
    "task": "Verify system performance",
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 13, HDCP Authentication with Repeaters; HDCP Device Limits",
    "scenario": "A media player feeds a matrix switcher, which feeds four splitters. Each splitter feeds four displays. With protected content, only some displays show the picture. The player's documentation says it accepts 16 HDCP keys.",
    "question": "What is the most likely cause?",
    "options": [
      "The topology breaks the HDCP 2.x limit of 32 devices and 4 repeater levels",
      "The chain has 21 downstream devices, over the player's 16-key limit",
      "The splitters are too far from the switcher, so the locality check fails",
      "The displays are reporting different EDIDs, so the player stops sending"
    ],
    "correct": 1,
    "explanation": "Downstream devices: 1 switcher + 4 splitters + 16 displays = 21, at two repeater levels. That is within the HDCP 2.x limits (32 devices, 4 levels), but over the 16 keys this source accepts. Reduce the device count, use a source with more keys, or use equipment that manages HDCP on the source's behalf."
  },
  {
    "cert": "CTS-D",
    "duty": "Duty A: Conduct a Needs Assessment",
    "task": "Generate and/or Review the Program Report",
    "ref": "CTS-D Exam Guide (2nd ed.), Ch. 3, A Closer Look at the Concept Design/Program Report; Budget Recommendations",
    "scenario": "The program report you are reviewing lists 40 meeting rooms with full videoconferencing and a budget that covers about half of them. The facilities director says all 40 are needed, while finance says the budget is fixed.",
    "question": "What should the revised program report do?",
    "options": [
      "Keep all 40 rooms and the budget, and let the integrator sort it out later",
      "Remove the videoconferencing from every room so the budget will be met",
      "Present prioritized options and costs so the client can decide, then record it",
      "Cut the number of rooms to 20 without telling the facilities director"
    ],
    "correct": 2,
    "explanation": "The program report is where needs, scope and budget are reconciled before design. Offer choices such as phasing, room types with different feature levels, or infrastructure now and equipment later, each with its cost and what it gives up. The client decides, and the approved report records the decision."
  }
];
  if (typeof QUESTIONS !== 'undefined') QUESTIONS.push(...CTSD_QUESTIONS);
  if (typeof DRILLS !== 'undefined') DRILLS.push(...CTSD_DRILLS);
})();

/* ---------- CTS-D formula-sheet generators ----------
   Fresh numbers on every draw. Each one follows the AVIXA CTS-D formula
   sheet (2024) so the practice math matches what you see on exam day. */
(function (F) {
  if (!F || !F.calc) return;
  const { R, pick, fmt, mkOptions } = F.helpers;
  const CALC = 'CTS-D: Design Calculations';
  const ATC = 'CTS-D: Allied Trade Coordination';
  const comma = n => Math.round(n).toLocaleString('en-US');
  const tan = deg => Math.tan(deg * Math.PI / 180);
  const log10 = Math.log10;

  // Projector lumens = (L x C x A / Sg) / Dr, Dr = 0.75
  F.calc('ctsd-lumens', CALC, 'CTS-D', 3, () => {
    const w = R(10, 20) / 5;                 // 2.0 to 4.0 m wide, 16:9
    const h = w * 9 / 16, a = w * h;
    const L = pick([50, 100, 150, 200, 250, 300]);
    const use = pick([['passive viewing', 7], ['basic decision making', 15], ['analytical decision making', 50]]);
    const base = L * use[1] * a, ans = base / 0.75;
    const o = mkOptions(`${comma(ans)} lumens`, [
      `${comma(base)} lumens`, `${comma(base * 0.75)} lumens`,
      `${comma(L * use[1] * w / 0.75)} lumens`, `${comma(ans * 2)} lumens`
    ]);
    return {
      q: `A ${fmt(w, 1)} m wide 16:9 screen (gain 1.0) receives ${L} lux of ambient light. For ${use[0]} (${use[1]}:1 ISCR) and Dr = 0.75, what projector rating is required?`,
      ...o,
      explanation: `Image height = ${fmt(w, 1)} x 9/16 = ${fmt(h, 3)} m, so A = ${fmt(a, 2)} m². Lumens = (L x C x A / Sg) / Dr = (${L} x ${use[1]} x ${fmt(a, 2)} / 1) / 0.75 = ${comma(ans)} lumens. Skipping the 0.75 derating gives ${comma(base)}.`
    };
  });

  // Ceiling loudspeaker coverage D = 2 x (H - h) x tan(C/2)
  F.calc('ctsd-coverage', CALC, 'CTS-D', 3, () => {
    const H = pick([2.7, 3.0, 3.3, 3.6, 4.0, 4.5]);
    const ear = pick([['seated', 1.2], ['standing', 1.7]]);
    const C = pick([60, 90, 100, 120]);
    const d = 2 * (H - ear[1]) * tan(C / 2);
    const o = mkOptions(`${fmt(d, 2)} m`, [
      `${fmt(d / 2, 2)} m`, `${fmt(2 * H * tan(C / 2), 2)} m`,
      `${fmt(2 * (H - ear[1]), 2)} m`, `${fmt(d * 2, 2)} m`
    ]);
    return {
      q: `Ceiling loudspeakers with ${C}-degree coverage are mounted at ${fmt(H, 1)} m over ${ear[0]} listeners (ear height ${fmt(ear[1], 1)} m). What is the coverage diameter at ear height?`,
      ...o,
      explanation: `D = 2 x (H - h) x tan(C/2) = 2 x (${fmt(H, 1)} - ${fmt(ear[1], 1)}) x tan(${C / 2}°) = ${fmt(d, 2)} m. The radius, half of that, is what you use for spacing.`
    };
  });

  // Ceiling loudspeaker spacing from radius
  F.calc('ctsd-spacing', CALC, 'CTS-D', 3, () => {
    const r = R(12, 30) / 10;
    const layouts = [
      ['edge-to-edge', 2 * r, '2r'],
      ['minimum overlap (square grid)', r * Math.SQRT2, 'r x √2'],
      ['minimum overlap (hexagonal grid)', r * Math.sqrt(3), 'r x √3'],
      ['center-to-center (edge-to-center)', r, 'r']
    ];
    const pickIdx = R(0, 3), L = layouts[pickIdx];
    const o = mkOptions(`${fmt(L[1], 2)} m`, layouts.filter((_, i) => i !== pickIdx).map(x => `${fmt(x[1], 2)} m`).concat(`${fmt(r / 2, 2)} m`));
    return {
      q: `Each ceiling loudspeaker covers a ${fmt(r, 1)} m radius at ear height. What spacing gives ${L[0]} coverage?`,
      ...o,
      explanation: `Spacing for ${L[0]} = ${L[2]} = ${fmt(L[1], 2)} m. The others: edge-to-edge 2r, square minimum overlap r√2, hex minimum overlap r√3, center-to-center r.`
    };
  });

  // Constant-voltage amplifier Wt = W x N x 1.5
  F.calc('ctsd-cv-amp', CALC, 'CTS-D', 2, () => {
    const W = pick([1, 2, 4, 5, 8, 10]), N = R(8, 40);
    const ans = W * N * 1.5;
    const o = mkOptions(`${fmt(ans, 1)} W`, [`${fmt(W * N, 1)} W`, `${fmt(W * N * 1.2, 1)} W`, `${fmt(W * N * 2, 1)} W`, `${fmt(W * N * 1.5 / 0.75, 1)} W`]);
    return {
      q: `A 70 V system has ${N} loudspeakers tapped at ${W} W each. Using the formula sheet, what amplifier power is required?`,
      ...o,
      explanation: `Wt = W x N x 1.5 = ${W} x ${N} x 1.5 = ${fmt(ans, 1)} W. The 1.5 adds 50 percent headroom; ${fmt(W * N, 1)} W would have none.`
    };
  });

  // Power amplifier heat = W x 3.4 x (1 - Ed)
  F.calc('ctsd-amp-heat', ATC, 'CTS-D', 3, () => {
    const W = pick([500, 800, 1000, 1200, 1500, 2000, 2500]);
    const E = pick([0.5, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9]);
    const ans = W * 3.4 * (1 - E);
    const o = mkOptions(`${comma(ans)} BTU/hr`, [`${comma(W * 3.4 * E)} BTU/hr`, `${comma(W * 3.4)} BTU/hr`, `${comma(W * (1 - E))} BTU/hr`, `${comma(W * 3.6 * (1 - E))} BTU/hr`]);
    return {
      q: `A ${comma(W)} W power amplifier is ${Math.round(E * 100)} percent efficient. How much heat does it release, per the formula sheet?`,
      ...o,
      explanation: `Heat = W x 3.4 x (1 - Ed) = ${comma(W)} x 3.4 x ${fmt(1 - E, 2)} = ${comma(ans)} BTU/hr. Only the wasted power heats the rack.`
    };
  });

  // Equipment heat = W x 3.4 (BTU/hr) or x 3.6 (kJ/hr)
  F.calc('ctsd-heat', ATC, 'CTS-D', 2, () => {
    const W = R(8, 60) * 50;
    const kj = Math.random() < 0.4;
    const ans = W * (kj ? 3.6 : 3.4), unit = kj ? 'kJ/hr' : 'BTU/hr';
    const o = mkOptions(`${comma(ans)} ${unit}`, [`${comma(W * (kj ? 3.4 : 3.6))} ${unit}`, `${comma(W / 3.4)} ${unit}`, `${comma(W)} ${unit}`, `${comma(W * 12)} ${unit}`]);
    return {
      q: `The non-amplifier AV equipment in a room draws ${comma(W)} W. What heat load do you give the mechanical engineer in ${unit}?`,
      ...o,
      explanation: `Heat load = watts x ${kj ? '3.6' : '3.4'} = ${comma(W)} x ${kj ? '3.6' : '3.4'} = ${comma(ans)} ${unit}.${kj ? '' : ' 12,000 BTU/hr is one ton of cooling.'}`
    };
  });

  // Conduit minimum inside diameter: ID > sqrt(sum OD² / fill)
  F.calc('ctsd-conduit', ATC, 'CTS-D', 4, () => {
    const n = pick([1, 2, 3, 3, 4]);
    const ods = Array.from({ length: n }, () => R(20, 50) / 100);
    const fill = n === 1 ? 0.53 : n === 2 ? 0.31 : 0.40;
    const sum = ods.reduce((a, b) => a + b * b, 0);
    const ans = Math.sqrt(sum / fill);
    const wrongFill = n === 1 ? 0.40 : n === 2 ? 0.40 : 0.31;
    const o = mkOptions(`${fmt(ans, 2)} in`, [
      `${fmt(Math.sqrt(sum / wrongFill), 2)} in`, `${fmt(ods.reduce((a, b) => a + b, 0) / fill, 2)} in`,
      `${fmt(Math.sqrt(sum), 2)} in`, `${fmt(sum / fill, 2)} in`
    ]);
    return {
      q: `${n === 1 ? 'One cable' : n + ' cables'} (OD ${ods.map(x => fmt(x, 2)).join(', ')} in) will run in one conduit. What is the minimum conduit inside diameter under the fill rules?`,
      ...o,
      explanation: `Fill for ${n === 1 ? 'one cable' : n === 2 ? 'two cables' : 'three or more cables'} is ${Math.round(fill * 100)} percent. ID > sqrt(ΣOD² / ${fill}) = sqrt(${fmt(sum, 4)} / ${fill}) = ${fmt(ans, 2)} in. Then pick the next trade size up and allow for bends.`
    };
  });

  // Jam ratio = ID / average OD (three cables; 2.8 to 3.2 risks jamming)
  F.calc('ctsd-jam', ATC, 'CTS-D', 3, () => {
    const id = pick([0.622, 0.824, 1.049, 1.38]);
    const od = R(18, 45) / 100;
    const ratio = id / od;
    const risk = ratio >= 2.8 && ratio <= 3.2;
    const verdict = r => `${fmt(r, 2)}, ${r >= 2.8 && r <= 3.2 ? 'at risk of jamming' : 'outside the jam range'}`;
    const o = mkOptions(verdict(ratio), [
      `${fmt(ratio, 2)}, ${risk ? 'outside the jam range' : 'at risk of jamming'}`,
      verdict(id / (od * 3)), verdict(id / od / 2), verdict(ratio + 1)
    ]);
    return {
      q: `Three cables, each ${fmt(od, 2)} in OD, will be pulled through a conduit with a ${fmt(id, 3)} in inside diameter. What is the jam ratio, and is the pull at risk?`,
      ...o,
      explanation: `Jam ratio = ID / average OD = ${fmt(id, 3)} / ${fmt(od, 2)} = ${fmt(ratio, 2)}. A ratio between 2.8 and 3.2 lets three cables wedge side by side, so ${risk ? 'this pull is at risk; change the conduit size' : 'this pull is clear of the jam range'}.`
    };
  });

  // Electrical power required at the loudspeaker
  F.calc('ctsd-epr', CALC, 'CTS-D', 4, () => {
    const Ls = R(86, 100), H = pick([10, 10, 20]), D2 = pick([4, 5, 8, 10, 12, 16, 20, 25]);
    // keep the answer between about 1 W and 2,000 W
    const lo = Math.ceil(Ls - H - 20 * log10(D2)), Lp = Math.min(100, Math.max(65, lo + R(2, 30)));
    const exp = (Lp + H - Ls + 20 * log10(D2)) / 10;
    const ans = Math.pow(10, exp);
    const f = v => v < 10 ? `${fmt(v, 1)} W` : `${comma(v)} W`;
    const o = mkOptions(f(ans), [f(ans / Math.pow(10, H / 10)), f(Math.pow(10, (Lp + H - Ls + 10 * log10(D2)) / 10)), f(ans * 2), f(ans / 2), f(ans * 10)]);
    return {
      q: `A loudspeaker rated ${Ls} dB (1 W, 1 m) must produce ${Lp} dB SPL at ${D2} m with ${H} dB of headroom. What electrical power is required?`,
      ...o,
      explanation: `EPR = 10^((Lp + H - Ls + 20log(D2/Dr)) / 10) = 10^((${Lp} + ${H} - ${Ls} + ${fmt(20 * log10(D2), 1)}) / 10) = 10^${fmt(exp, 2)} = ${f(ans)}. Use 20log for distance, not 10log.`
    };
  });

  // Camera image size IS = 2 x D x tan(A/2)
  F.calc('ctsd-camera', CALC, 'CTS-D', 3, () => {
    const D = R(3, 15), A = pick([30, 40, 45, 50, 60, 70, 80]);
    const ans = 2 * D * tan(A / 2);
    const o = mkOptions(`${fmt(ans, 2)} m`, [`${fmt(ans / 2, 2)} m`, `${fmt(2 * D * tan(A), 2)} m`, `${fmt(D * A / 45, 2)} m`, `${fmt(ans * 2, 2)} m`]);
    return {
      q: `A camera with a ${A}-degree horizontal angle of view is ${D} m from the subject. How wide is the shot at that distance?`,
      ...o,
      explanation: `IS = 2 x D x tan(A/2) = 2 x ${D} x tan(${A / 2}°) = ${fmt(ans, 2)} m.`
    };
  });

  // Digital video data rate R = H x V x C x 1.25 x FPS x 3
  F.calc('ctsd-datarate', CALC, 'CTS-D', 3, () => {
    const fmtv = pick([[1280, 720], [1920, 1080], [1920, 1200], [2560, 1440], [3840, 2160]]);
    const C = pick([8, 10, 12]), fps = pick([24, 30, 50, 60]);
    const bps = fmtv[0] * fmtv[1] * C * 1.25 * fps * 3;
    const g = v => `${fmt(v / 1e9, 2)} Gbps`;
    const o = mkOptions(g(bps), [g(bps / 1.25), g(bps / 3), g(bps * 2), g(bps / 8)]);
    return {
      q: `Using the formula sheet, what is the data rate of ${fmtv[0]} x ${fmtv[1]} video at ${fps} fps with ${C}-bit color?`,
      ...o,
      explanation: `R = H x V x C x 1.25 x FPS x 3 = ${fmtv[0]} x ${fmtv[1]} x ${C} x 1.25 x ${fps} x 3 = ${g(bps)}. The 1.25 covers encoding overhead and the 3 is for three color channels.`
    };
  });

  // Minimum task lighting = (Lp / A) / 3
  F.calc('ctsd-tasklight', CALC, 'CTS-D', 3, () => {
    const Lp = R(6, 30) * 500, w = R(10, 20) / 5, h = w * 9 / 16, a = w * h;
    const ans = Lp / a / 3;
    const o = mkOptions(`${comma(ans)} lux`, [`${comma(Lp / a)} lux`, `${comma(Lp / a * 3)} lux`, `${comma(Lp / 3)} lux`, `${comma(Lp / a / 15)} lux`]);
    return {
      q: `A ${comma(Lp)}-lumen projector fills a ${fmt(w, 1)} m wide 16:9 screen. Using the formula sheet (unity gain), what is the minimum task-light level for the viewers' work surfaces?`,
      ...o,
      explanation: `A = ${fmt(w, 1)} x ${fmt(h, 3)} = ${fmt(a, 2)} m². LightMin = (Lp / A) / 3 = (${comma(Lp)} / ${fmt(a, 2)}) / 3 = ${comma(ans)} lux. The guide aims task light within a third to three times the screen's white level; its version also multiplies by screen gain and the 0.75 derating.`
    };
  });

  // Parallel loudspeaker impedance
  F.calc('ctsd-parallel', CALC, 'CTS-D', 2, () => {
    const mixed = Math.random() < 0.5;
    let zs = mixed ? [pick([4, 8, 16]), pick([4, 8, 16]), pick([8, 16])] : Array(R(2, 6)).fill(pick([4, 8, 16]));
    const ans = 1 / zs.reduce((a, z) => a + 1 / z, 0);
    const sum = zs.reduce((a, b) => a + b, 0);
    const o = mkOptions(`${fmt(ans, 2)} Ω`, [`${fmt(sum, 2)} Ω`, `${fmt(sum / zs.length, 2)} Ω`, `${fmt(ans * 2, 2)} Ω`, `${fmt(Math.min(...zs), 2)} Ω`, `${fmt(ans / 2, 2)} Ω`, `${fmt(Math.max(...zs) * 2, 2)} Ω`]);
    return {
      q: `Loudspeakers of ${zs.join(', ')} Ω are wired in parallel on one amplifier channel. What is the total impedance?`,
      ...o,
      explanation: `ZT = 1 / (${zs.map(z => '1/' + z).join(' + ')}) = ${fmt(ans, 2)} Ω. A parallel total is always below the smallest single load.`
    };
  });

  // Branch circuits under the NEC 80 percent rule
  F.calc('ctsd-circuits', ATC, 'CTS-D', 3, () => {
    const W = R(10, 80) * 100, I = W / 120, amps = pick([15, 20]);
    const per = amps * 0.8, ans = Math.ceil(I / per);
    const s = n => `${n} circuit${n === 1 ? '' : 's'}`;
    const raw = Math.ceil(I / amps);
    const ds = [s(ans + 1), s(ans + 2), s(ans + 3)];
    if (ans > 1) ds.push(s(ans - 1));
    if (raw !== ans) ds.unshift(s(raw));
    const o = mkOptions(s(ans), ds);
    return {
      q: `AV equipment drawing ${comma(W)} W at 120 V will be split across ${amps} A branch circuits. Under the NEC 80 percent rule, how many circuits do you need?`,
      ...o,
      explanation: `I = P / V = ${comma(W)} / 120 = ${fmt(I, 1)} A. Each ${amps} A circuit may carry ${fmt(per, 1)} A, so ${fmt(I, 1)} / ${fmt(per, 1)} rounds up to ${s(ans)}.`
    };
  });

  // Mounting hardware with a 5:1 safety factor
  F.calc('ctsd-mount', ATC, 'CTS-D', 2, () => {
    const dev = R(8, 90), mount = R(3, 15), total = dev + mount;
    const o = mkOptions(`${total * 5} kg`, [`${dev * 5} kg`, `${total * 2} kg`, `${total * 10} kg`, `${total} kg`]);
    return {
      q: `A ${dev} kg display hangs on a ${mount} kg mount. Using a 5:1 safety factor, what load rating must the mounting hardware have?`,
      ...o,
      explanation: `Total load = ${dev} + ${mount} = ${total} kg. Rating = 5 x ${total} = ${total * 5} kg. Always include the mount and accessories, and check the structure separately.`
    };
  });

  // DISCAS basic decision making: farthest viewer = 200 x element height
  F.calc('ctsd-bdm', CALC, 'CTS-D', 3, () => {
    const lines = pick([1080, 2160]), px = pick(lines === 1080 ? [27, 32, 36, 43, 54] : [54, 65, 72, 86, 108]);
    const ih = R(8, 24) / 10, eh = px / lines, fv = 200 * eh * ih;
    const o = mkOptions(`${fmt(fv, 1)} m`, [`${fmt(fv / 2, 1)} m`, `${fmt(3438 * eh * ih, 1)} m`, `${fmt(4 * ih, 1)} m`, `${fmt(fv * 2, 1)} m`]);
    return {
      q: `Text on a ${lines}-line image is ${px} pixels tall, and the image is ${fmt(ih, 1)} m high. For basic decision making, how far away can the farthest viewer sit?`,
      ...o,
      explanation: `%EH = ${px} / ${lines} = ${fmt(eh * 100, 2)} percent, so the element is ${fmt(eh * ih, 3)} m tall. BDM: farthest viewer = 200 x element height = 200 x ${fmt(eh * ih, 3)} = ${fmt(fv, 1)} m.`
    };
  });
})(typeof FORGE !== 'undefined' ? FORGE : null);
