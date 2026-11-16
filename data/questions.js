// Merged CTS question bank — built from CTS-Prep, cts-study, and new content.
// Every entry: { domain, cert, duty, task, q, options[4], correct (index), explanation }
// Duty/task tags follow the official AVIXA outlines (CTS 2024, CTS-D 2023, CTS-I 2023).
// Expanded 2026-10-06 — 272 CTS + 134 CTS-D + 124 CTS-I = 530 questions.
const QUESTIONS = [
  {
    "domain": "CTS: Project Management",
    "cert": "CTS",
    "duty": "A",
    "task": "A3",
    "q": "When addressing scope creep during installation, what formal document must be submitted to and approved by the client?",
    "options": [
      "Field Report",
      "Change Order",
      "Certificate of Substantial Completion",
      "Punch List"
    ],
    "correct": 1,
    "explanation": "Any addition or modification to agreed scope must be documented and priced via a Change Order before work proceeds."
  },
  {
    "domain": "CTS: Project Management",
    "cert": "CTS",
    "duty": "B",
    "task": "B2",
    "q": "What does the Certificate of Substantial Completion establish on an AV project?",
    "options": [
      "That every punch list item is closed and the contractor can leave the site",
      "That the system is usable for its intended purpose, starting the warranty clock",
      "That the client has accepted the system and released final payment and retainage",
      "That commissioning can begin now that all equipment is installed and powered"
    ],
    "correct": 1,
    "explanation": "Substantial completion means the owner can use the system for its intended purpose. Minor punch list items may remain open; warranty periods and final payment terms typically start here."
  },
  {
    "domain": "CTS: Project Management",
    "cert": "CTS",
    "duty": "A",
    "task": "A3",
    "q": "In a project schedule, what does the critical path represent?",
    "options": [
      "The tasks carrying the highest budget, which need the closest cost control",
      "The longest sequence of dependent tasks, which sets the minimum project duration",
      "The sequence of tasks with the most float, which can slip without delaying anything",
      "The shortest route through the task list, which sets the earliest finish date"
    ],
    "correct": 1,
    "explanation": "The critical path is the longest chain of dependent tasks. Any delay on it delays the whole project; tasks off it have float."
  },
  {
    "domain": "CTS: Sound & Physics",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "A speaker produces 80 dB SPL at 2 meters. What is the SPL at 4 meters in a free field?",
    "options": [
      "77 dB SPL",
      "74 dB SPL",
      "70 dB SPL",
      "68 dB SPL"
    ],
    "correct": 1,
    "explanation": "Inverse Square Law: doubling distance from a point source in a free field drops SPL by 6 dB. 80 − 6 = 74."
  },
  {
    "domain": "CTS: Sound & Physics",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Doubling the electrical power to a loudspeaker produces roughly what change in SPL?",
    "options": [
      "+2 dB",
      "+3 dB",
      "+6 dB",
      "+10 dB"
    ],
    "correct": 1,
    "explanation": "Doubling power is +3 dB. Doubling perceived loudness takes roughly +10 dB, which is ten times the power."
  },
  {
    "domain": "CTS: Sound & Physics",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "What is the approximate wavelength of a 1 kHz tone in air at room temperature?",
    "options": [
      "0.034 m",
      "0.34 m",
      "3.4 m",
      "34 m"
    ],
    "correct": 1,
    "explanation": "Wavelength = speed / frequency. 343 m/s ÷ 1000 Hz ≈ 0.34 m."
  },
  {
    "domain": "CTS: Sound & Physics",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Per the Potential Acoustic Gain concept, what is the most effective way to increase gain before feedback?",
    "options": [
      "Add amplifier headroom so the whole system can run louder before it starts to ring out",
      "Move the microphone closer to the talker and the loudspeaker farther from the mic",
      "Add more open microphones so each talker is picked up from farther away",
      "Boost the system EQ at the feedback frequency so the ring is masked by level"
    ],
    "correct": 1,
    "explanation": "PAG/NAG is governed by distances. Shortening talker-to-mic distance and lengthening loudspeaker-to-mic distance both raise gain before feedback. Each doubling of open mics costs 3 dB."
  },
  {
    "domain": "CTS: AVIXA Standards",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Under AVIXA V201.01, what minimum contrast ratio is recommended for Basic Decision Making content?",
    "options": [
      "7:1",
      "15:1",
      "50:1",
      "80:1"
    ],
    "correct": 1,
    "explanation": "V201.01 specifies 15:1 for Basic Decision Making. Passive viewing is 7:1, Analytical Decision Making is 50:1, and Full Motion Video is 80:1."
  },
  {
    "domain": "CTS: AVIXA Standards",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Which AVIXA standard defines Display Image Size for 2D content in viewing environments?",
    "options": [
      "V201.01",
      "DISCAS (V202.01)",
      "A102.01",
      "F501.01"
    ],
    "correct": 1,
    "explanation": "DISCAS — Display Image Size for 2D Content in Audiovisual Systems — derives image height from farthest viewer distance and content element height."
  },
  {
    "domain": "CTS: AVIXA Standards",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "What does AVIXA A102.01 govern?",
    "options": [
      "Audio coverage uniformity in listener areas",
      "Rack building and cooling for AV equipment racks",
      "Image contrast ratio for projected displays",
      "Cable labeling for AV system installations"
    ],
    "correct": 0,
    "explanation": "A102.01, Audio Coverage Uniformity, sets tolerances for how evenly sound pressure level is distributed across a listener area."
  },
  {
    "domain": "CTS: Electrical & Site Survey",
    "cert": "CTS",
    "duty": "A",
    "task": "A2",
    "q": "What is the total current draw of three 120V racks if each draws 480 Watts?",
    "options": [
      "4 Amps",
      "12 Amps",
      "16 Amps",
      "20 Amps"
    ],
    "correct": 1,
    "explanation": "P = V × I. Total = 1440W. 1440 ÷ 120 = 12 Amps."
  },
  {
    "domain": "CTS: Electrical & Site Survey",
    "cert": "CTS",
    "duty": "A",
    "task": "A2",
    "q": "What is the continuous load limit on a 20A branch circuit under standard derating practice?",
    "options": [
      "12 A",
      "16 A",
      "18 A",
      "20 A"
    ],
    "correct": 1,
    "explanation": "Continuous loads are limited to 80% of the breaker rating. 20 × 0.8 = 16 A."
  },
  {
    "domain": "CTS: Electrical & Site Survey",
    "cert": "CTS",
    "duty": "D",
    "task": "D3",
    "q": "A ground loop hum in an unbalanced audio run is best resolved by which approach?",
    "options": [
      "Lifting the safety ground pin on one piece of equipment's power cord",
      "Inserting an isolation transformer or converting the run to balanced",
      "Raising gain at the mixer input and lowering the amplifier to compensate",
      "Re-routing the cable along a longer path away from the power lines"
    ],
    "correct": 1,
    "explanation": "Never lift a safety ground — it is a life-safety hazard. Break the loop galvanically with an isolation transformer, or move to a balanced connection with differential rejection."
  },
  {
    "domain": "CTS: Video & Signal",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "What is the approximate uncompressed bit rate of 1080p59.94 video at 4:2:2, 10-bit?",
    "options": [
      "1.5 Gbps",
      "3 Gbps",
      "6 Gbps",
      "12 Gbps"
    ],
    "correct": 1,
    "explanation": "1080p at 59.94 fps needs roughly 3 Gbps, which is why it maps to 3G-SDI. 1080i59.94 fits in 1.5G-SDI."
  },
  {
    "domain": "CTS: Video & Signal",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "In HDCP, what is the practical consequence of a repeater exceeding its device or depth limit?",
    "options": [
      "Video falls back to standard definition so the content stays protected",
      "Authentication fails and downstream displays go blank or show an error",
      "Audio drops out while the video keeps playing at its full resolution",
      "The repeater re-encrypts with an older HDCP version and keeps passing video"
    ],
    "correct": 1,
    "explanation": "HDCP repeaters have finite device counts and cascade depth. Exceeding either breaks authentication, and the sink shows black or an HDCP error rather than degrading gracefully."
  },
  {
    "domain": "CTS: Video & Signal",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "What does EDID communicate in an HDMI link?",
    "options": [
      "The content-protection keys the source uses to encrypt the video stream",
      "The sink's supported resolutions, timings, and audio formats to the source",
      "The cable's length and bandwidth rating so the source can limit its output",
      "The display's IP address and control port for the room control system"
    ],
    "correct": 1,
    "explanation": "Extended Display Identification Data lets the display tell the source what it can accept. Bad or missing EDID is a common cause of no-sync and wrong-resolution faults."
  },
  {
    "domain": "Advanced: ST 2110 Suite",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Which protocol does SMPTE ST 2110-10 leverage for microsecond-level synchronization across IP media networks?",
    "options": [
      "NTP / RFC 5905 (stratum 1)",
      "PTP / IEEE 1588 (ST 2059-2)",
      "SNTP / RFC 4330 (unicast)",
      "RTCP Sender Reports (RFC 3550)"
    ],
    "correct": 1,
    "explanation": "ST 2110-10 relies on Precision Time Protocol v2 under the SMPTE ST 2059-2 profile for frame-accurate sync over IP."
  },
  {
    "domain": "Advanced: ST 2110 Suite",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Which sub-standard governs transport of PCM digital audio streams?",
    "options": [
      "ST 2110-10",
      "ST 2110-20",
      "ST 2110-30",
      "ST 2110-40"
    ],
    "correct": 2,
    "explanation": "ST 2110-30 carries uncompressed PCM audio based on AES67. -20 is video, -40 is ancillary data."
  },
  {
    "domain": "Advanced: ST 2110 Suite",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "What is the defining architectural change ST 2110 makes relative to ST 2022-6?",
    "options": [
      "It replaces uncompressed SDI with a compressed IP payload to reduce overall network bandwidth",
      "It carries video, audio, and ancillary data as separate essence streams rather than one encapsulated SDI signal",
      "It replaces the PTP precision clocking of ST 2022-6 with standard NTP time synchronization",
      "It requires single-mode fiber for every network link, because copper cabling cannot carry separate essence streams"
    ],
    "correct": 1,
    "explanation": "ST 2022-6 wraps a whole SDI signal in IP. ST 2110 splits essences into independent streams that can be routed, shuffled, and processed separately."
  },
  {
    "domain": "Advanced: ST 2110 Suite",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "What does ST 2110-21 define?",
    "options": [
      "Ancillary data mapping for embedding captions and timecode into 2110 streams",
      "Traffic shaping and sender timing models (narrow, narrow linear, wide)",
      "Audio channel counts and sample rates permitted per 2110 essence stream",
      "Stream encryption, specifying the cipher suite senders must apply to essence packets"
    ],
    "correct": 1,
    "explanation": "ST 2110-21 specifies sender packet pacing so receivers can size buffers. Narrow senders pace tightly to the video timing; wide senders are burstier and demand more receiver buffer."
  },
  {
    "domain": "Advanced: ST 2110 Suite",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "How does a receiver handle duplicate streams under SMPTE ST 2022-7?",
    "options": [
      "It averages the two streams sample by sample to cancel out network jitter",
      "It performs packet-by-packet hitless merge using RTP sequence numbers",
      "It ignores the secondary stream until the primary link reports a failure",
      "It converts both streams to SDI and switches between them on loss of signal"
    ],
    "correct": 1,
    "explanation": "ST 2022-7 reconstructs an uninterrupted stream from identical RTP sequence numbers arriving on two independent network fabrics, so a fabric failure causes no visible glitch."
  },
  {
    "domain": "Advanced: ST 2110 Suite",
    "cert": "CTS",
    "duty": "B",
    "task": "B1",
    "q": "Which AMWA NMOS specification handles discovery and registration of media nodes?",
    "options": [
      "IS-04",
      "IS-05",
      "IS-08",
      "IS-09"
    ],
    "correct": 0,
    "explanation": "IS-04 is Discovery and Registration. IS-05 is Connection Management, IS-08 is audio channel mapping, IS-09 is system parameters."
  },
  {
    "domain": "Advanced: ST 2110 Suite",
    "cert": "CTS",
    "duty": "B",
    "task": "B1",
    "q": "What protocol do receiver endpoints use to join an active IP multicast stream?",
    "options": [
      "PIM-SM",
      "IGMP",
      "OSPF",
      "LLDP"
    ],
    "correct": 1,
    "explanation": "Endpoints send IGMP Join and Leave messages to the local switch to subscribe to multicast group addresses. PIM handles multicast routing between switches upstream of that."
  },
  {
    "domain": "Advanced: ST 2110 Suite",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "In a PTP domain, what is the role of the Boundary Clock in a leaf-spine media network?",
    "options": [
      "It generates the master time reference from a GPS receiver and distributes it as the domain grandmaster",
      "It syncs to the grandmaster on one port and re-serves timing downstream, offloading the grandmaster",
      "It converts incoming PTP timing to NTP so that legacy devices can synchronize to the media network",
      "It measures multicast bandwidth on the leaf-spine fabric to detect oversubscription of media flows"
    ],
    "correct": 1,
    "explanation": "A Boundary Clock syncs to the upstream grandmaster and acts as master to devices below it, which scales PTP distribution and limits accumulated jitter."
  },
  {
    "domain": "Advanced: ST 2110 Suite",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "What does SDP (Session Description Protocol) provide in an ST 2110 workflow?",
    "options": [
      "The encryption keys and cipher suite used to secure the media payload as it crosses the network",
      "The stream's multicast address, port, payload type and format, so a receiver can decode it",
      "The facility’s physical patch record, mapping every installed cable run to its switch ports",
      "The automatic switch-configuration instructions that provision VLANs and multicast routing"
    ],
    "correct": 1,
    "explanation": "The SDP file is the contract describing a stream. NMOS IS-05 typically hands SDP data to the receiver during connection management."
  },
  {
    "domain": "Advanced: Dante & AES67",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "What is the relationship between Dante and AES67?",
    "options": [
      "They are the same protocol: AES67 is simply the standards body's name for Dante",
      "Dante can switch on an AES67 mode to interoperate, though its native discovery differs",
      "AES67 is a licensed subset of Dante, so every AES67 device can join a Dante network natively",
      "They cannot interoperate, because Dante's proprietary clocking is incompatible"
    ],
    "correct": 1,
    "explanation": "Dante is a proprietary ecosystem with its own discovery and clocking. Enabling AES67 mode exposes standards-based multicast streams that other AES67 devices can subscribe to, with constraints on sample rate and packet time."
  },
  {
    "domain": "Advanced: Dante & AES67",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "In a Dante network, what does the Leader clock (formerly Master) provide?",
    "options": [
      "The routing table that decides which devices subscribe",
      "The PTP reference all devices sync their sample clocks to",
      "Network-wide gain staging so every channel arrives at level",
      "The naming service that resolves device and channel labels"
    ],
    "correct": 1,
    "explanation": "Dante elects a Leader clock by PTP. All devices word-clock to it, which is what allows sample-accurate playout across the network."
  },
  {
    "domain": "CTS: Video & Signal",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "When calculating the distance for a projector, what does 'Throw Ratio' represent?",
    "options": [
      "The ratio of the image width to the image height",
      "The ratio of the lens-to-screen distance to the image width",
      "The ratio of the projector's lumens to the screen area",
      "The ratio of the lens-to-screen distance to the image height"
    ],
    "correct": 1,
    "explanation": "Throw Ratio = Distance / Width. A 1.5:1 throw means the projector must be 1.5 times the image width away from the screen."
  },
  {
    "domain": "CTS: Video & Signal",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Which color space is the industry standard for HD video transmission and represents the primary colors of Red, Green, and Blue?",
    "options": [
      "YPbPr",
      "RGB",
      "YCbCr",
      "CMYK"
    ],
    "correct": 1,
    "explanation": "RGB is the primary color model used for displays and cameras. YCbCr (or YPbPr) is used for transmission to save bandwidth by separating luminance from chrominance."
  },
  {
    "domain": "CTS: Video & Signal",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "In a projection system, what is the primary cause of 'Keystone' distortion?",
    "options": [
      "A source resolution that does not match the native panel",
      "The projector being tilted relative to the screen plane",
      "A lens with too short a throw ratio for the screen size",
      "A screen surface with too much gain for the viewing angle"
    ],
    "correct": 1,
    "explanation": "Keystoning occurs when the projector is not perpendicular to the screen, causing the image to appear as a trapezoid."
  },
  {
    "domain": "CTS: Sound & Physics",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "What is the primary purpose of a 'Bass Trap' in a room's acoustic treatment?",
    "options": [
      "To reinforce low frequencies so the room sounds fuller in corners",
      "To absorb low-frequency standing waves typically found in corners",
      "To diffuse high frequencies so reflections spread evenly in the room",
      "To block low-frequency sound from leaking into the adjacent rooms"
    ],
    "correct": 1,
    "explanation": "Low frequencies have long wavelengths and accumulate in corners. Bass traps are designed to absorb these specific frequencies to reduce 'boominess'."
  },
  {
    "domain": "CTS: Sound & Physics",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "A microphone with a 'Cardioid' polar pattern is most sensitive to sound arriving from which direction?",
    "options": [
      "The rear",
      "The sides",
      "The front (0 degrees)",
      "All directions equally"
    ],
    "correct": 2,
    "explanation": "Cardioid (heart-shaped) mics are most sensitive to the front and reject sound from the rear, making them ideal for reducing feedback from monitors."
  },
  {
    "domain": "CTS: Sound & Physics",
    "cert": "CTS",
    "duty": "A",
    "task": "A2",
    "q": "What does RT60 refer to in room acoustics?",
    "options": [
      "The time it takes for sound to travel 60 meters",
      "The time it takes for a sound to decay by 60 decibels",
      "The time it takes for sound to decay by 60% of its original level",
      "The frequency response of a room at 60Hz"
    ],
    "correct": 1,
    "explanation": "RT60 (Reverberation Time) is the time required for the sound pressure level to drop 60 dB after the source has stopped."
  },
  {
    "domain": "CTS: AVIXA Standards",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "According to the DISCAS standard, the 'Minimum Content Element' is determined by what?",
    "options": [
      "The distance to the closest viewer",
      "The distance to the farthest viewer",
      "The native resolution of the display",
      "The ambient light level in the room"
    ],
    "correct": 1,
    "explanation": "DISCAS uses the farthest viewer distance to calculate how large the smallest critical piece of information (the content element) must be to be legible."
  },
  {
    "domain": "CTS: Project Management",
    "cert": "CTS",
    "duty": "B",
    "task": "B1",
    "q": "What is the primary goal of 'Commissioning' in an AV installation?",
    "options": [
      "To close out every punch list item before the client walkthrough",
      "To verify the system performs to the design intent and specifications",
      "To train the end users so they can operate the system on their own",
      "To document the as-built drawings so the client can sign the invoice"
    ],
    "correct": 1,
    "explanation": "Commissioning is the formal process of testing and documenting that every system function works as specified in the original design."
  },
  {
    "domain": "CTS: Electrical & Site Survey",
    "cert": "CTS",
    "duty": "A",
    "task": "A2",
    "q": "When performing a site survey, why is it critical to identify the 'HVAC noise floor'?",
    "options": [
      "To determine whether the HVAC can handle the equipment rack heat load",
      "To ensure the audio system can beat the background noise for intelligible speech",
      "To calculate how much electrical load the HVAC places on the room circuits",
      "To locate the condensate lines and ducts that could leak onto ceiling-mounted equipment"
    ],
    "correct": 1,
    "explanation": "If the background noise (HVAC) is too high, the audio system must be louder to be heard, which can increase the risk of feedback and reduce clarity."
  },
  {
    "domain": "CTS: Sound & Physics",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "What is the standard impedance of professional audio equipment?",
    "options": [
      "75 ohms",
      "50 ohms",
      "600 ohms",
      "300 ohms"
    ],
    "correct": 2,
    "explanation": "Legacy professional audio gear was designed around 600-ohm circuits, a standard inherited from telephone networks. Matching impedances was once critical for maximum power transfer; modern bridging inputs just need to be at least 10x the source impedance. On the exam, 600 ohms is the answer they expect for professional audio impedance."
  },
  {
    "domain": "CTS: Video & Signal",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Which video resolution is considered 4K UHD?",
    "options": [
      "1920x1080",
      "2560x1440",
      "3840x2160",
      "4096x2160"
    ],
    "correct": 2,
    "explanation": "4K UHD is 3840x2160 pixels — exactly twice the width and height of 1080p HD (1920x1080), so four times the pixels. Don't confuse it with 4K DCI (4096x2160), the digital cinema variant that is slightly wider. UHD is the consumer/AV-industry standard; DCI is for movie production."
  },
  {
    "domain": "CTS: Sound & Physics",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "What does SPL stand for?",
    "options": [
      "Sound Power Level",
      "Sound Pressure Level",
      "Signal Processing Level",
      "Speaker Performance Level"
    ],
    "correct": 1,
    "explanation": "SPL stands for Sound Pressure Level, measured in decibels relative to the threshold of human hearing (20 micropascals, defined as 0 dB SPL). It describes acoustic pressure in air, unlike dBu or dBV which describe electrical signal levels. Almost every audio measurement question on the exam ties back to SPL."
  },
  {
    "domain": "CTS: Video & Signal",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Which conductor construction is used inside a standard copper HDMI cable?",
    "options": [
      "Coaxial conductors",
      "Twisted pairs",
      "Ribbon cable",
      "Single solid wire"
    ],
    "correct": 1,
    "explanation": "Standard copper HDMI cables are built from multiple shielded twisted pairs that carry the high-speed TMDS data, plus separate conductors for control and power. The twisted-pair construction rejects electromagnetic interference, which is essential at HDMI data rates. Fiber-optic HDMI exists too, but it converts the signal to light for long runs rather than being the standard copper construction."
  },
  {
    "domain": "CTS: Video & Signal",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "What is the refresh rate of standard NTSC video?",
    "options": [
      "25 Hz",
      "30 Hz",
      "50 Hz",
      "59.94 Hz"
    ],
    "correct": 3,
    "explanation": "NTSC analog video refreshes at 59.94 Hz (often rounded to 60 Hz) — the odd fraction comes from a 1953 tweak that prevented the color subcarrier from interfering with the audio carrier. PAL/SECAM regions standardized on 50 Hz tied to their mains frequency. For digital formats this lives on as 59.94 fps and 29.97 fps frame rates."
  },
  {
    "domain": "CTS: Control Systems",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Which protocol is used for lighting control?",
    "options": [
      "DMX512",
      "MIDI",
      "RS-232",
      "TCP/IP"
    ],
    "correct": 0,
    "explanation": "DMX512 is the industry-standard digital protocol for stage and architectural lighting control, carrying up to 512 channels (one universe) of dimmer/control values. It uses RS-485-based differential signaling over 120-ohm twisted pair. MIDI is for musical instruments, RS-232 is general serial control — DMX512 is purpose-built for lighting."
  },
  {
    "domain": "CTS: AV Networking",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Maximum cable length for Cat6 Ethernet?",
    "options": [
      "50 meters",
      "100 meters",
      "150 meters",
      "200 meters"
    ],
    "correct": 1,
    "explanation": "The TIA/EIA standard limits copper Ethernet runs (Cat5e, Cat6, Cat6a) to 100 meters total channel length, including patch cords and 90 meters of horizontal cable. Beyond that, attenuation and timing make the link unreliable. Longer runs need fiber or an intermediate switch as a repeater."
  },
  {
    "domain": "CTS: Sound & Physics",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Which frequency range is mid-range audio?",
    "options": [
      "20-200 Hz",
      "200-2000 Hz",
      "2-20 kHz",
      "Above 20 kHz"
    ],
    "correct": 1,
    "explanation": "The midrange band (roughly 200 Hz to 2 kHz) carries most speech intelligibility and the presence region of many instruments. This is where the ear is most sensitive, so intelligibility specs and EQ problems concentrate here. Low frequencies are below it (20-200 Hz); highs extend from about 2 kHz to 20 kHz."
  },
  {
    "domain": "CTS: Video & Signal",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "What does EDID stand for?",
    "options": [
      "Extended Display Identification Data",
      "Enhanced Display Identification Data",
      "Extended Display Information Data",
      "Electronic Display Interface Data"
    ],
    "correct": 0,
    "explanation": "EDID (Extended Display Identification Data) is the data block a display sends back to the source over HDMI/DisplayPort, reporting its supported resolutions, refresh rates, and audio capabilities. Missing or corrupted EDID is one of the most common causes of 'no image' or wrong-resolution faults on site. The source reads EDID to pick a compatible output format automatically."
  },
  {
    "domain": "CTS: Sound & Physics",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Standard connector for professional microphones?",
    "options": [
      "1/4 inch TRS",
      "RCA",
      "XLR",
      "3.5mm"
    ],
    "correct": 2,
    "explanation": "The 3-pin XLR is the professional standard for balanced microphone connections: pins 1-3 carry ground, hot, and cold, with the balanced pair canceling induced noise over long runs. It also carries 48V phantom power for condenser mics. RCA and 3.5mm connectors are consumer/unbalanced; 1/4-inch TRS can be balanced but XLR is the mic standard."
  },
  {
    "domain": "CTS: Video & Signal",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Standard frame rate for film?",
    "options": [
      "23.976 fps",
      "24 fps",
      "25 fps",
      "30 fps"
    ],
    "correct": 1,
    "explanation": "Motion picture film standardized on 24 frames per second, a rate chosen early in the sound era as the slowest (cheapest) rate that still produced smooth motion. Digital cinema keeps 24 fps (often 23.976 for broadcast compatibility), which is why pulldown conversion exists to fit 24p content into 60 Hz video systems."
  },
  {
    "domain": "CTS: Video & Signal",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Technology for simultaneous multi-source display?",
    "options": [
      "Scaling",
      "Switching",
      "Windowing",
      "Routing"
    ],
    "correct": 2,
    "explanation": "Windowing lets a display or videowall processor show multiple sources simultaneously, each scaled into its own resizable window on one screen. It differs from simple switching (one source at a time) or a fixed multiviewer layout because windows can be sized and positioned freely. Control rooms and collaboration spaces rely on it heavily."
  },
  {
    "domain": "CTS: Sound & Physics",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Mixing console mic input impedance?",
    "options": [
      "600 ohms",
      "1k ohm",
      "2k ohms",
      "10k ohms"
    ],
    "correct": 2,
    "explanation": "Professional console mic preamps present about 2k ohms (2,000 ohms) of input impedance — roughly ten times the ~150-200 ohm source impedance of a typical dynamic mic. This 'bridging' ratio transfers voltage efficiently without loading the microphone. Lower impedance would load the mic and dull the sound; the 10:1 rule is the design principle behind it."
  },
  {
    "domain": "CTS: Video & Signal",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Highest color depth video format?",
    "options": [
      "RGB",
      "YUV 4:2:0",
      "YUV 4:2:2",
      "YUV 4:4:4"
    ],
    "correct": 3,
    "explanation": "4:4:4 chroma subsampling keeps full color resolution for every pixel — no chroma is discarded, unlike 4:2:2 (half horizontal color resolution) or 4:2:0 (quarter). That makes 4:4:4 the best choice for text, graphics, and color-critical content where subsampled color would blur edges. It costs more bandwidth, which is why video distribution often uses 4:2:0 instead."
  },
  {
    "domain": "CTS: AV Networking",
    "cert": "CTS",
    "duty": "B",
    "task": "B1",
    "q": "T568A/B 'T' stands for?",
    "options": [
      "Telephone",
      "Twisted",
      "Termination",
      "Telecommunications"
    ],
    "correct": 3,
    "explanation": "T568A and T568B are the two standard twisted-pair termination schemes, and the 'T' stands for Telecommunications (from the TIA — Telecommunications Industry Association — standards). The only difference between them is which color pairs land on pins 1-2 versus 3-6. What matters on the job is using the same scheme at both ends, or a proper crossover when needed."
  },
  {
    "domain": "CTS: Sound & Physics",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Audio connector providing phantom power?",
    "options": [
      "1/4 inch TS",
      "RCA",
      "XLR",
      "3.5mm TRS"
    ],
    "correct": 2,
    "explanation": "XLR connectors carry phantom power: 48V DC applied equally to pins 2 and 3 relative to pin 1 (ground), so condenser microphone capsules get power without disturbing the balanced audio signal. Dynamic mics simply ignore it. This is why phantom power only appears on mic inputs with XLRs — RCA, TS, and 3.5mm connectors don't support it."
  },
  {
    "domain": "CTS: Sound & Physics",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Standard phantom power voltage?",
    "options": [
      "12V",
      "24V",
      "48V",
      "60V"
    ],
    "correct": 2,
    "explanation": "The professional phantom power standard is 48V DC (P48), with a tolerance of ±4V, supplied through 6.81k-ohm feed resistors. Lower variants (12V, 24V) exist for battery-powered gear but 48V is the studio/console standard. Most condenser mics are designed around it, though many tolerate a range."
  },
  {
    "domain": "CTS: Sound & Physics",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Wireless microphone transmission technology?",
    "options": [
      "AM",
      "FM",
      "Digital spread spectrum",
      "All"
    ],
    "correct": 3,
    "explanation": "Modern wireless microphone systems use several transmission technologies — analog FM, digital, and digital spread-spectrum — chosen for range, audio quality, and RF congestion. No single technology covers every use case, so the exam answer is 'all of the above.' What matters more in practice is frequency coordination: avoiding TV bands, intermodulation, and other wireless devices in the venue."
  },
  {
    "domain": "CTS: Sound & Physics",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Purpose of DI box?",
    "options": [
      "Amplify signals",
      "Convert impedance",
      "Add effects",
      "Record audio"
    ],
    "correct": 1,
    "explanation": "A DI (direct injection) box converts a high-impedance, unbalanced instrument signal (guitar, keyboard) into a low-impedance, balanced mic-level signal that can run long distances to a console. It does this with a transformer or active buffer. Without it, the long cable run would pick up noise and lose high frequencies."
  },
  {
    "domain": "Advanced: Dante & AES67",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Protocol for digital audio over IP?",
    "options": [
      "AES/EBU",
      "SPDIF",
      "Dante",
      "MADI"
    ],
    "correct": 2,
    "explanation": "Dante, developed by Audinate, is the dominant protocol for transporting digital audio over standard IP/Ethernet networks, replacing racks of analog multicore cable with a single network. It uses IP networking with PTP clocking so every device stays sample-accurate. AES67 is the open interoperability standard; Dante devices can speak AES67 mode to talk to non-Dante gear."
  },
  {
    "domain": "CTS: Sound & Physics",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "CD audio bit depth?",
    "options": [
      "8 bits",
      "16 bits",
      "24 bits",
      "32 bits"
    ],
    "correct": 1,
    "explanation": "The CD Red Book standard specifies 16-bit audio at a 44.1 kHz sample rate — 16 bits gives ~96 dB of theoretical dynamic range. Professional production moved to 24-bit (144 dB theoretical) for more headroom during mixing, though delivery is still often 16-bit. Bit depth sets dynamic range; sample rate sets the highest reproducible frequency."
  },
  {
    "domain": "CTS: Video & Signal",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Highest bandwidth video interface?",
    "options": [
      "HDMI 1.4",
      "HDMI 2.0",
      "HDMI 2.1",
      "DisplayPort 1.4"
    ],
    "correct": 2,
    "explanation": "HDMI 2.1 raises the maximum throughput to 48 Gbps (up from 18 Gbps in HDMI 2.0), enabling uncompressed 4K at 120 Hz or 8K at 60 Hz. That bandwidth requires Ultra High Speed certified cables. DisplayPort 1.4 tops out around 32.4 Gbps, so HDMI 2.1 currently leads for single-cable consumer/pro AV video transport."
  },
  {
    "domain": "CTS: Video & Signal",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "HDR stands for?",
    "options": [
      "High Definition Resolution",
      "High Dynamic Range",
      "High Data Rate",
      "High Display Refresh"
    ],
    "correct": 1,
    "explanation": "HDR (High Dynamic Range) expands the range between the darkest black and brightest white a display can reproduce, along with wider color, for a more lifelike image. It is metadata-driven: the source tells the display how to tone-map each scene (HDR10, Dolby Vision, HLG). Resolution (pixel count) and dynamic range are independent — a 1080p HDR image can look better than 4K SDR."
  },
  {
    "domain": "CTS: Sound & Physics",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Acoustic treatment that absorbs sound?",
    "options": [
      "Diffusion panels",
      "Acoustic foam",
      "Reflective surfaces",
      "Hard surfaces"
    ],
    "correct": 1,
    "explanation": "Absorptive treatments like acoustic foam convert sound energy into heat through friction in the porous material, reducing reflections and reverberation. Diffusion panels scatter sound instead of absorbing it, and hard reflective surfaces do the opposite of treatment. Foam is most effective at mid and high frequencies; bass needs thicker traps."
  },
  {
    "domain": "CTS: AVIXA Standards",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "4K display viewing distance?",
    "options": [
      "1.5× screen height",
      "2× screen height",
      "3× screen height",
      "4× screen height"
    ],
    "correct": 0,
    "explanation": "For detailed 4K UHD content, design guidance puts the optimal viewing distance around 1.5 times the image height — close enough that the eye can actually resolve the extra pixels, per AVIXA DISCAS viewing-distance principles. Sit much farther and the eye can't distinguish 4K from 1080p, wasting the resolution. Farther viewing (3x height or more) is for passive viewing where detail doesn't matter."
  },
  {
    "domain": "CTS: AV Networking",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Network topology with most redundancy?",
    "options": [
      "Star",
      "Ring",
      "Mesh",
      "Bus"
    ],
    "correct": 2,
    "explanation": "In a mesh topology every node connects to multiple others, so traffic can reroute around any single failed link or node — the most redundant option. Star depends on one central switch, ring breaks if one link fails, and bus fails entirely with one break. Mesh costs more cabling and complexity, which is why AV networks usually use redundant star (core/distribution) instead of full mesh."
  },
  {
    "domain": "CTS: Video & Signal",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Purpose of matrix switcher?",
    "options": [
      "Amplify weak signals over long runs",
      "Route any input to any output",
      "Convert any input to one format",
      "Show one input on all outputs"
    ],
    "correct": 1,
    "explanation": "A matrix switcher routes any input to any output (or multiple outputs) independently — e.g., an 8x8 matrix can send any of 8 sources to any of 8 displays. That 'any-to-any' routing is the defining feature, versus a simple switcher that shows one source at a time. Amplifiers, format converters, and storage are separate device categories."
  },
  {
    "domain": "CTS: Sound & Physics",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Speaker sensitivity measurement?",
    "options": [
      "Watts",
      "Ohms",
      "dB SPL/W/m",
      "Hertz"
    ],
    "correct": 2,
    "explanation": "Speaker sensitivity is specified as dB SPL measured at 1 watt of input power from 1 meter away (dB SPL/W/m), telling you how efficiently the speaker converts power into sound. A speaker rated 90 dB/W/m needs half the amplifier power of one rated 87 dB/W/m for the same output. Watts, ohms, and hertz describe other things entirely — sensitivity is always an SPL figure."
  },
  {
    "domain": "CTS: Video & Signal",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "VSWR measures?",
    "options": [
      "Power output",
      "Signal strength",
      "Impedance matching",
      "Frequency response"
    ],
    "correct": 2,
    "explanation": "VSWR (Voltage Standing Wave Ratio) measures how well a transmission line's impedance matches its load — a 1:1 ratio means all power transfers, while higher ratios mean energy reflects back toward the source. It's most relevant in RF work (antennas, wireless mic systems, cable TV distribution). A high VSWR on a wireless mic antenna wastes transmit power and can damage the transmitter."
  },
  {
    "domain": "CTS: Video & Signal",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Best codec for 4K?",
    "options": [
      "H.264",
      "H.265/HEVC",
      "MJPEG",
      "DV"
    ],
    "correct": 1,
    "explanation": "H.265/HEVC (High Efficiency Video Coding) compresses video roughly twice as efficiently as H.264, delivering the same quality at about half the bitrate — which is what makes 4K streaming practical over real-world internet connections. The tradeoff is heavier encoding/decoding computation, so it needs newer hardware. MJPEG and DV are older, far less efficient codecs."
  },
  {
    "domain": "CTS: Video & Signal",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Standard daylight color temperature?",
    "options": [
      "3200K",
      "5600K",
      "6500K",
      "9300K"
    ],
    "correct": 2,
    "explanation": "The daylight/overcast reference white point is D65, standardized at 6500K, and it is the calibration target for video displays and reference monitors. 3200K is tungsten (indoor lighting), 5600K is direct sun/electronic flash, and 9300K is an old cool-white monitor preset. If a display looks too blue or too orange, its white point is off D65."
  },
  {
    "domain": "CTS: Electrical & Site Survey",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Best EMI cable shielding?",
    "options": [
      "Unshielded",
      "Foil",
      "Braided",
      "Quad shield"
    ],
    "correct": 3,
    "explanation": "Quad-shield cable (two foil layers plus two braided layers) gives the strongest protection against electromagnetic interference, combining foil's full coverage with braid's low-frequency effectiveness and durability. Single foil or single braid each cover different interference types, so stacking them wins. Use quad shield for long runs near lighting dimmers, motors, or RF sources."
  },
  {
    "domain": "CTS: Sound & Physics",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Crossover purpose?",
    "options": [
      "Boost the bass response",
      "Divide frequency ranges",
      "Match driver impedance",
      "Combine stereo channels"
    ],
    "correct": 1,
    "explanation": "A crossover divides the audio spectrum into frequency bands and sends each band to the driver built for it — lows to the woofer, highs to the tweeter (and mids to a midrange in 3-way systems). This prevents drivers from receiving frequencies they can't reproduce cleanly. Crossovers can be passive (in the speaker cabinet) or active/DSP-based before the amplifiers."
  },
  {
    "domain": "CTS: AV Networking",
    "cert": "CTS",
    "duty": "B",
    "task": "B1",
    "q": "IP camera control protocol?",
    "options": [
      "RTSP",
      "ONVIF",
      "SIP",
      "SNMP"
    ],
    "correct": 1,
    "explanation": "ONVIF is the open industry standard that lets IP cameras, encoders, and VMS/recording platforms from different manufacturers discover each other and interoperate — including PTZ camera control. RTSP is the underlying streaming protocol ONVIF often uses, but it's ONVIF that standardizes device control and management. SIP is for voice/video calls; SNMP is for network device monitoring."
  },
  {
    "domain": "CTS: AV Networking",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Single-mode fiber transmission distance?",
    "options": [
      "2 km",
      "10 km",
      "40 km",
      "Over 100 km"
    ],
    "correct": 3,
    "explanation": "Single-mode fiber uses a tiny core that carries one light path, so it avoids modal dispersion and can span very long distances — over 100 km with proper optics and amplification. Multimode fiber's larger core is cheaper to terminate but limited to about 2 km (and far less at high data rates). Campus and inter-building AV runs use single-mode."
  },
  {
    "domain": "CTS: Sound & Physics",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Object-based surround sound format?",
    "options": [
      "Dolby 5.1",
      "Dolby 7.1",
      "Dolby Atmos",
      "DTS-HD MA"
    ],
    "correct": 2,
    "explanation": "Dolby Atmos is an object-based format: instead of mixing to fixed channels (like 5.1 or 7.1), sounds are treated as objects with 3D position metadata that the renderer places in the room — including overhead speakers. The playback system adapts the mix to however many speakers are installed. 5.1/7.1 are channel-based; Atmos adds the height/object dimension."
  },
  {
    "domain": "CTS: Electrical & Site Survey",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "IP rating 'P' means?",
    "options": [
      "Power",
      "Protection",
      "Performance",
      "Pressure"
    ],
    "correct": 1,
    "explanation": "In an IP (Ingress Protection) rating like IP65, the 'P' stands for Protection — protection against the ingress of solids and liquids, rated by the two digits that follow. The first digit rates solid-particle protection, the second rates liquid protection. It has nothing to do with electrical power; check IP ratings when specifying outdoor or washdown AV gear."
  },
  {
    "domain": "CTS: Video & Signal",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Video standard with interlaced scanning?",
    "options": [
      "1080p",
      "720p",
      "1080i",
      "4K"
    ],
    "correct": 2,
    "explanation": "The 'i' in 1080i stands for interlaced: each frame is drawn as two fields, first the odd lines then the even lines, effectively halving the bandwidth versus progressive 1080p. 1080p, 720p, and 4K (as 2160p) are progressive — full frames every refresh. Interlacing is a legacy bandwidth-saving trick that can cause motion artifacts on modern displays."
  },
  {
    "domain": "CTS: Video & Signal",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Time code purpose?",
    "options": [
      "Color space mapping",
      "Audio level metering",
      "Frame identification",
      "Bitrate compression"
    ],
    "correct": 2,
    "explanation": "Timecode (SMPTE timecode) labels every video frame with an hours:minutes:seconds:frames address, so editors, switchers, and playback systems can identify and synchronize exact frames. It's the backbone of multi-camera sync, broadcast automation, and post-production. Color correction and compression don't need frame addresses — synchronization does."
  },
  {
    "domain": "CTS: AV Networking",
    "cert": "CTS",
    "duty": "B",
    "task": "B1",
    "q": "Device discovery protocol?",
    "options": [
      "DHCP server",
      "DNS server",
      "Bonjour/mDNS",
      "SMTP relay"
    ],
    "correct": 2,
    "explanation": "Bonjour (Apple's implementation of mDNS/DNS-SD) lets AV devices discover each other on a local network with zero configuration — no DNS server needed. Many AV products (Dante, AirPlay, control systems, printers) rely on it for automatic discovery. DHCP assigns addresses and DNS resolves names, but neither provides service discovery the way mDNS does."
  },
  {
    "domain": "CTS: Video & Signal",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Standard HDTV aspect ratio?",
    "options": [
      "4:3",
      "16:9",
      "16:10",
      "21:9"
    ],
    "correct": 1,
    "explanation": "HDTV standardized on the 16:9 widescreen aspect ratio (1920x1080), replacing the 4:3 ratio of standard-definition TV. 16:10 is a computer-display ratio and 21:9 is ultrawide cinema-style. When designing video systems, 16:9 is the default assumption for screens, switchers, and content unless the project specifies otherwise."
  },
  {
    "domain": "CTS: Sound & Physics",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Most wind-sensitive microphone?",
    "options": [
      "Dynamic",
      "Condenser",
      "Ribbon",
      "Shotgun"
    ],
    "correct": 2,
    "explanation": "Ribbon microphones are the most wind- and blast-sensitive: their ultra-thin corrugated ribbon element can be stretched or torn by strong air movement, which is why they're always used with pop filters and kept away from wind. Condenser and shotgun mics are also wind-sensitive, but a ribbon can be physically damaged. Dynamic mics are the most rugged choice outdoors."
  },
  {
    "domain": "CTS: AV Networking",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "PoE+ provides?",
    "options": [
      "Higher voltage",
      "More power",
      "Faster data",
      "Better reliability"
    ],
    "correct": 1,
    "explanation": "PoE+ (IEEE 802.3at) delivers up to 25.5 W to the powered device (30 W at the switch port), versus 12.95 W for standard PoE (802.3af, 15.4 W at the port) — the extra power supports PTZ cameras, video phones, and larger wireless access points. PoE++ (802.3bt) goes further, to 60 W or 90 W at the port. Voltage stays at ~48 V DC in all cases; the standards differ in available power, not voltage."
  },
  {
    "domain": "CTS: Control Systems",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Commercial AV control protocols?",
    "options": [
      "RS-232",
      "RS-485",
      "TCP/IP",
      "All"
    ],
    "correct": 3,
    "explanation": "Commercial AV control systems speak multiple protocols because different devices need different ones: RS-232 for simple point-to-point serial control, RS-485 for longer multi-drop runs, and TCP/IP for networked devices. A single control processor typically has ports for all three. The exam wants you to know that control is multi-protocol by nature — no single standard covers everything."
  },
  {
    "domain": "CTS: Video & Signal",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Media server purpose?",
    "options": [
      "Store/play content",
      "Control devices",
      "Route signals",
      "Amplify audio"
    ],
    "correct": 0,
    "explanation": "A media server stores and plays back audio/video content — digital signage playlists, show control timelines, projection mapping content — often with precise scheduling and synchronization across outputs. It doesn't route signals (that's a switcher) or control third-party devices (that's a control system), though high-end servers can do some of both. Think of it as the content source."
  },
  {
    "domain": "CTS: Sound & Physics",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Wireless mic range factors?",
    "options": [
      "Battery",
      "RF power",
      "Antenna",
      "All"
    ],
    "correct": 3,
    "explanation": "Wireless microphone range depends on every link in the chain: transmitter RF power and battery condition, antenna type/placement (diversity reception), and the RF environment (interference, obstacles, competing systems). Weakening any one of them shortens usable range. That's why the exam answer is 'all of the above' — range is a system property, not one spec."
  },
  {
    "domain": "CTS: Sound & Physics",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Professional audio sampling rate?",
    "options": [
      "44.1 kHz",
      "48 kHz",
      "96 kHz",
      "192 kHz"
    ],
    "correct": 1,
    "explanation": "48 kHz is the professional audio production standard — it syncs cleanly with video frame rates (unlike 44.1 kHz, the CD rate) and gives a Nyquist limit of 24 kHz, comfortably above human hearing. Film/video post, broadcast, and live consoles all run at 48 kHz. Higher rates (96/192 kHz) exist for recording headroom but 48 kHz is the working standard."
  },
  {
    "domain": "CTS: Video & Signal",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Deepest black display tech?",
    "options": [
      "LCD",
      "LED",
      "OLED",
      "Plasma"
    ],
    "correct": 2,
    "explanation": "OLED produces the deepest blacks because each pixel generates its own light and can switch completely off — true zero light output, giving effectively infinite contrast. LCD/LED-LCD always has a backlight, so blacks are really dark gray from light leakage. Plasma had excellent blacks too but is discontinued; OLED is the current reference."
  },
  {
    "domain": "CTS: AV Networking",
    "cert": "CTS",
    "duty": "B",
    "task": "B1",
    "q": "DHCP stands for?",
    "options": [
      "Dynamic Host Configuration Protocol",
      "Digital Host Configuration Protocol",
      "Dynamic Hardware Control Protocol",
      "Distributed Host Connection Protocol"
    ],
    "correct": 0,
    "explanation": "DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses, subnet masks, gateways, and DNS servers to devices when they join a network — no manual addressing needed. Without it (or static addressing), AV devices can't communicate on IP networks. It's the reason most AV gear 'just works' when plugged into a managed network."
  },
  {
    "domain": "CTS: Sound & Physics",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Balanced audio connector?",
    "options": [
      "1/4 inch TS",
      "RCA",
      "XLR",
      "3.5mm TRS"
    ],
    "correct": 2,
    "explanation": "XLR is the balanced audio connector: its three pins carry ground plus a differential signal pair that cancels induced hum and noise, allowing microphone cable runs of hundreds of feet. RCA and 1/4-inch TS are unbalanced; 3.5mm TRS is typically unbalanced stereo in consumer gear. On a pro job, balanced XLR is the default for mic-level runs."
  },
  {
    "domain": "CTS: Video & Signal",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Scaler purpose?",
    "options": [
      "Change resolution",
      "Switch inputs",
      "Record video",
      "Distribute signals"
    ],
    "correct": 0,
    "explanation": "A scaler converts video from one resolution to another — e.g., scaling a 1080p laptop output up to fill a 4K display, or down to match a projector's native resolution. Good scaling preserves image quality; cheap scaling softens detail or adds latency. Switchers route sources, recorders capture them, distributors split them — scalers change their resolution."
  },
  {
    "domain": "CTS: Video & Signal",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Best live streaming codec?",
    "options": [
      "H.264",
      "H.265",
      "MJPEG",
      "ProRes"
    ],
    "correct": 0,
    "explanation": "H.264 (AVC) remains the best-supported codec for live streaming because every device, browser, and platform decodes it in hardware with low latency — universal compatibility beats raw efficiency for live delivery. H.265 compresses better but needs more processing and has licensing friction. ProRes and MJPEG are production/editing codecs, far too heavy for streaming."
  },
  {
    "domain": "CTS: Video & Signal",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Roughly how far can a passive copper HDMI cable reliably carry 1080p video?",
    "options": [
      "5m",
      "15m",
      "25m",
      "50m"
    ],
    "correct": 1,
    "explanation": "Passive copper HDMI is generally reliable to about 15 meters (50 feet) at 1080p; at 4K60's 18 Gbps, plan on only about 5–7.5 m. Beyond that, signal attenuation causes dropouts, sparkles, or complete loss. Longer runs need active optical HDMI cables (fiber), HDBaseT extenders, or AV-over-IP — always budget one for long in-wall runs."
  },
  {
    "domain": "CTS: Sound & Physics",
    "cert": "CTS",
    "duty": "A",
    "task": "A2",
    "q": "Reverberation time factors?",
    "options": [
      "Size",
      "Shape",
      "Materials",
      "All"
    ],
    "correct": 3,
    "explanation": "Reverberation time depends on everything that shapes how sound decays in a room: its volume (size), its geometry (shape — parallel walls cause flutter echo), and its surface materials (absorption coefficients). Change any one and RT60 changes. That's why acoustic treatment starts with measuring the room, not just adding panels."
  },
  {
    "domain": "CTS: AV Networking",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "RTMP stands for?",
    "options": [
      "Real-Time Messaging Protocol",
      "Real-Time Media Protocol",
      "Remote Terminal Management Protocol",
      "Reliable Transport Media"
    ],
    "correct": 0,
    "explanation": "RTMP (Real-Time Messaging Protocol) was the long-time standard for pushing live streams from encoders to platforms (YouTube, Facebook, Twitch ingest), valued for low latency and broad support. Adobe created it for Flash; it survived Flash's death as an ingest protocol. Newer options like SRT and WebRTC exist, but RTMP ingest is still everywhere."
  },
  {
    "domain": "CTS: Sound & Physics",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Best stereo speaker placement?",
    "options": [
      "Equilateral triangle",
      "Side by side, centered",
      "L-shaped corner layout",
      "Facing each other"
    ],
    "correct": 0,
    "explanation": "The classic stereo listening setup places the two speakers and the listener at the corners of an equilateral triangle, so each speaker is the same distance from the listener and from each other. This gives a centered, stable stereo image with correct phantom-center placement. Angling the speakers inward (toe-in) toward the listener completes the setup."
  },
  {
    "domain": "CTS: Sound & Physics",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Compressor purpose?",
    "options": [
      "Increase overall level",
      "Reduce dynamic range",
      "Add reverb and delay",
      "Correct the pitch"
    ],
    "correct": 1,
    "explanation": "A compressor reduces a signal's dynamic range by automatically turning down the loudest parts once they cross a threshold — making quiet passages more audible and loud peaks more controlled. Ratio, attack, and release shape how aggressively it works. It doesn't just 'increase volume'; makeup gain afterward restores overall level with the peaks tamed."
  },
  {
    "domain": "CTS: Video & Signal",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Video format with alpha channel?",
    "options": [
      "MP4",
      "AVI",
      "MOV ProRes",
      "MPEG-2"
    ],
    "correct": 2,
    "explanation": "Apple ProRes in a MOV container supports an alpha (transparency) channel — the ProRes 4444 variant — making it the professional choice for graphics, lower-thirds, and overlays that need transparency. MP4/H.264 and MPEG-2 don't carry alpha. For playback systems and media servers, ProRes 4444 MOV is the standard transparent-video deliverable."
  },
  {
    "domain": "CTS: Video & Signal",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Video signal impedance?",
    "options": [
      "50 ohms",
      "75 ohms",
      "100 ohms",
      "300 ohms"
    ],
    "correct": 1,
    "explanation": "Video/coaxial systems standardized on 75-ohm impedance (cables, connectors, terminators) — mismatching to 50-ohm RF parts causes reflections and ghosting. Ethernet twisted pair is 100 ohms; pro audio is 600 ohms nominal. On site, using proper 75-ohm BNCs and terminators (not 50-ohm) is a classic 'invisible' fix for analog video problems."
  },
  {
    "domain": "CTS: AV Networking",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Wi-Fi frequency bands?",
    "options": [
      "900 MHz",
      "2.4 GHz",
      "5 GHz",
      "2.4 and 5 GHz"
    ],
    "correct": 3,
    "explanation": "Modern Wi-Fi operates in the 2.4 GHz band (longer range, more congestion and interference) and the 5 GHz band (faster, shorter range, more channels). Dual-band devices use both, typically preferring 5 GHz for throughput. Newer Wi-Fi 6E/7 adds 6 GHz, but 2.4 and 5 GHz remain the universal baseline every AV network design must account for."
  },
  {
    "domain": "CTS: Control Systems",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "API stands for?",
    "options": [
      "Application Programming Interface",
      "Automated Protocol Integration",
      "Application Protocol Interconnect",
      "Advanced Programming Interconnect"
    ],
    "correct": 0,
    "explanation": "API (Application Programming Interface) is the documented set of commands a device or software platform exposes so other systems — like an AV control processor — can integrate with it. Modern AV integration increasingly happens over IP APIs (REST, WebSocket) rather than serial strings. When a manufacturer publishes an API, your control system can drive their product."
  },
  {
    "domain": "CTS: Sound & Physics",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Long audio run cable type?",
    "options": [
      "Unbalanced",
      "Balanced",
      "Digital",
      "Wireless"
    ],
    "correct": 1,
    "explanation": "Balanced lines (XLR/TRS) reject induced noise through common-mode rejection — interference picked up equally on both conductors cancels at the differential receiver. That's why long microphone and line-level runs are always balanced. Unbalanced cable (RCA, TS) has no such rejection and is limited to short runs of a few feet."
  },
  {
    "domain": "CTS: Sound & Physics",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Limiter purpose?",
    "options": [
      "Boost signals",
      "Prevent clipping",
      "Add reverb",
      "Change frequency"
    ],
    "correct": 1,
    "explanation": "A limiter is a compressor with a very high ratio (often ∞:1) that acts as a ceiling: nothing passes above the threshold, preventing clipping and protecting speakers and ears. It's the last stage of protection in a signal chain. Unlike a compressor's gentle shaping, a limiter's job is purely protective — brick-wall level control."
  },
  {
    "domain": "CTS: Video & Signal",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Professional video calibration standard?",
    "options": [
      "sRGB",
      "Adobe RGB",
      "Rec. 709",
      "DCI-P3"
    ],
    "correct": 2,
    "explanation": "Rec. 709 is the ITU standard defining colorimetry for HDTV — the color space, gamma, and white point (D65) that HD broadcast and Blu-ray are mastered to. Professional calibration means adjusting a display to reproduce Rec. 709 accurately. sRGB is the computer-graphics cousin; DCI-P3 is the wider cinema gamut; Adobe RGB is for print photography."
  },
  {
    "domain": "CTS: AV Networking",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Latency refers to?",
    "options": [
      "Signal strength",
      "Time delay",
      "Frequency response",
      "Bit rate"
    ],
    "correct": 1,
    "explanation": "Latency is the time delay between a signal entering a system and emerging — caused by analog-to-digital conversion, DSP processing, network buffering, and codec encode/decode. In AV it shows up as lip-sync error, delayed foldback for performers, and sluggish video-conference interaction. Every digital stage adds latency, so system design is about budgeting it end to end."
  },
  {
    "domain": "CTS: Sound & Physics",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Digital audio connector?",
    "options": [
      "RCA phono plug",
      "XLR connector",
      "Optical TOSLINK",
      "1/4-inch TS plug"
    ],
    "correct": 2,
    "explanation": "Optical TOSLINK (Toshiba Link) carries digital audio as pulses of light through fiber, immune to electrical interference and ground loops — a classic fix for hum between a TV and a soundbar. It typically carries stereo PCM or compressed surround (Dolby Digital/DTS). RCA and XLR are analog electrical connectors; TOSLINK is digital optical."
  },
  {
    "domain": "CTS: Video & Signal",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "RGB color bit depth?",
    "options": [
      "8 bits per channel",
      "16 bits per channel",
      "24 bits total",
      "32 bits per pixel"
    ],
    "correct": 0,
    "explanation": "Standard 8-bit color gives 256 levels per channel (2^8), so RGB 8-bit-per-channel yields 16.7 million colors (256³). Banding in gradients is the visible symptom of 8-bit depth; 10-bit (1 billion colors) largely eliminates it. '24-bit color' means 8 bits × 3 channels — same thing stated differently."
  },
  {
    "domain": "CTS: AV Networking",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Edge processing technology?",
    "options": [
      "Scaling",
      "Processing",
      "FPGA",
      "Cloud computing"
    ],
    "correct": 2,
    "explanation": "FPGAs (Field-Programmable Gate Arrays) are reconfigurable chips that process signals in hardware with deterministic, ultra-low latency — ideal for edge processing like video scaling, format conversion, and Dante/AES67 audio bridging right at the network edge. Unlike CPUs (flexible but latent) or fixed ASICs (fast but inflexible), FPGAs can be reprogrammed for new AV standards after deployment."
  },
  {
    "domain": "CTS: Sound & Physics",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Buffer amplifier purpose?",
    "options": [
      "Boost volume",
      "Isolate impedance",
      "Add compression",
      "Reduce noise"
    ],
    "correct": 1,
    "explanation": "A buffer amplifier isolates one circuit stage from the next: it presents a high input impedance (so it doesn't load the source) and a low output impedance (so it can drive the load). It provides no voltage gain — its job is impedance isolation, preventing a downstream stage from affecting an upstream one. Think of it as an electrical 'one-way valve' between devices."
  },
  {
    "domain": "CTS: Video & Signal",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "HDMI backward compatible?",
    "options": [
      "DisplayPort",
      "DVI",
      "Component",
      "Composite"
    ],
    "correct": 1,
    "explanation": "HDMI is electrically backward-compatible with single-link DVI-D for video: a passive cable adapter carries the digital video signal between them, since both use TMDS signaling. But DVI carries no audio and no CEC/HDCP-handshake extras, so the compatibility is video-only. DisplayPort needs an active converter — it is not passively compatible."
  },
  {
    "domain": "CTS: Control Systems",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Professional lighting standard?",
    "options": [
      "DMX512",
      "Art-Net",
      "sACN",
      "All"
    ],
    "correct": 3,
    "explanation": "Professional lighting uses a stack of standards: DMX512 for the wired control bus, plus Art-Net and sACN (E1.31) which transport DMX universes over Ethernet/IP networks. A modern rig often runs sACN or Art-Net over the network with DMX512 at the fixtures. Knowing all three matters because you'll encounter each in real venues."
  },
  {
    "domain": "CTS: Sound & Physics",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Wireless mic frequencies?",
    "options": [
      "VHF",
      "UHF",
      "2.4 GHz",
      "All"
    ],
    "correct": 3,
    "explanation": "Wireless microphone systems operate across VHF, UHF, and 2.4 GHz bands depending on the design — traditional pro systems favor UHF for range and reliability, while compact digital systems increasingly use 2.4 GHz. Each band has tradeoffs in range, congestion, and licensing. Frequency coordination across all your wireless devices matters more than which band any single mic uses."
  },
  {
    "domain": "CTS: Sound & Physics",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "SNR stands for?",
    "options": [
      "Signal-to-Noise Ratio",
      "System Noise Rating",
      "Sound Noise Reference",
      "Signal Noise Response"
    ],
    "correct": 0,
    "explanation": "SNR (Signal-to-Noise Ratio) measures how far the desired signal sits above the background noise floor, in decibels — higher is cleaner. A 100 dB SNR means the loudest undistorted signal is 100 dB above the noise. It's the key quality figure for preamps, converters, and wireless systems: low SNR means audible hiss."
  },
  {
    "domain": "CTS: Video & Signal",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Video needing pulldown conversion?",
    "options": [
      "1080p",
      "1080i",
      "720p",
      "480p"
    ],
    "correct": 1,
    "explanation": "Pulldown (3:2 pulldown/telecine) converts 24 fps film content into 60-field interlaced video like 1080i by repeating fields in a 3-2 pattern. It's needed whenever film-rate content must play in an interlaced broadcast chain. Progressive formats (1080p, 720p) can carry 24p natively, so the question's classic exam pairing is 1080i with pulldown."
  },
  {
    "domain": "Advanced: Dante & AES67",
    "cert": "CTS",
    "duty": "B",
    "task": "B1",
    "q": "Dante Controller purpose?",
    "options": [
      "Route audio",
      "Manage devices",
      "Control lighting",
      "Sync video"
    ],
    "correct": 1,
    "explanation": "Dante Controller is Audinate's free software for managing a Dante network: it discovers every Dante device, routes audio between transmitters and receivers with a few clicks, and monitors clocking and latency. It's the central management tool — routing that once required physical patchbays now happens in software. It doesn't control lighting or video; it's the Dante network's command center."
  },
  {
    "domain": "CTS: AV Networking",
    "cert": "CTS",
    "duty": "B",
    "task": "B1",
    "q": "RJ45 termination connector?",
    "options": [
      "HDMI",
      "Ethernet",
      "USB",
      "Fiber optic"
    ],
    "correct": 1,
    "explanation": "The RJ45 8P8C modular connector is the standard termination for twisted-pair Ethernet (Cat5e/6/6a) — the physical plug on every network cable in an AV rack. HDMI, USB, and fiber use entirely different connectors. On the exam and on site, RJ45 = Ethernet, and correct T568A/B termination of that RJ45 is a core installation skill."
  },
  {
    "domain": "CTS: AV Networking",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "USB 3.0 data rate?",
    "options": [
      "480 Mbps",
      "5 Gbps",
      "10 Gbps",
      "40 Gbps"
    ],
    "correct": 1,
    "explanation": "USB 3.0 (SuperSpeed USB) runs at 5 Gbps — ten times USB 2.0's 480 Mbps — which is what makes it viable for HD video capture devices, audio interfaces, and fast storage in AV systems. USB 3.1/3.2 push 10 Gbps and USB4 reaches 40 Gbps. When a USB camera or capture device misbehaves, confirming a true USB 3.0 5 Gbps port (and cable) is a first troubleshooting step."
  },
  {
    "domain": "CTS: AV Networking",
    "cert": "CTS",
    "duty": "B",
    "task": "B1",
    "q": "Real-time streaming protocol?",
    "options": [
      "HTTP",
      "RTSP",
      "FTP",
      "SMTP"
    ],
    "correct": 1,
    "explanation": "RTSP (Real-Time Streaming Protocol) is the control protocol for streaming media sessions — it sets up and tears down streams (play, pause, teardown) for IP cameras, encoders, and media servers, usually with RTP carrying the actual media. HTTP/FTP/SMTP are web, file-transfer, and email protocols, not streaming control. ONVIF cameras use RTSP URLs for their video streams."
  },
  {
    "domain": "CTS: Sound & Physics",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "THD stands for?",
    "options": [
      "Total Harmonic Distortion",
      "Transient Harmonic Distortion",
      "Total Harmonic Dynamics",
      "Thermal Harmonic Data"
    ],
    "correct": 0,
    "explanation": "THD (Total Harmonic Distortion) measures the unwanted harmonic frequencies an amplifier or device adds to the signal, expressed as a percentage — lower is cleaner (0.01% is excellent; 1% is audible). It's the standard figure for amplifier and loudspeaker linearity. Thermal dissipation, dynamics, and heat are unrelated distractors."
  },
  {
    "domain": "CTS: Video & Signal",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Best bright environment display?",
    "options": [
      "OLED",
      "LCD",
      "Plasma",
      "LED LCD"
    ],
    "correct": 3,
    "explanation": "LED-backlit LCD wins in bright environments because it can push very high brightness (1,000+ nits) to overcome ambient light, and it suffers no burn-in from static content the way OLED and plasma can. OLED has better blacks and contrast in controlled light, but washes out under bright ambient. For lobbies, retail, and outdoor-adjacent installs, high-brightness LED LCD is the safe specification."
  },
  {
    "domain": "CTS: Video & Signal",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Broadcast color space?",
    "options": [
      "RGB",
      "YCbCr",
      "sRGB",
      "Adobe RGB"
    ],
    "correct": 1,
    "explanation": "Broadcast and video transmission standardized on YCbCr, which separates luminance (Y, brightness/detail) from chrominance (Cb/Cr, color) — allowing color resolution to be reduced (chroma subsampling) without visibly hurting the image. RGB carries full color per pixel and is used at displays and cameras. sRGB and Adobe RGB are computer/print color spaces, not broadcast transmission."
  },
  {
    "domain": "CTS: Video & Signal",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Reference monitor purpose?",
    "options": [
      "Record video",
      "Color calibration",
      "Transmit signals",
      "Amplify"
    ],
    "correct": 1,
    "explanation": "A reference monitor is a calibrated display used as the trusted color standard in grading suites and broadcast — it's built for accuracy (Rec. 709/DCI-P3, D65 white point, tight tolerances), not for recording, transmitting, or amplifying. Colorists make decisions on it knowing the audience's displays should match. Consumer TVs are not reference monitors, no matter how expensive."
  },
  {
    "domain": "CTS: Sound & Physics",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Audio format needing more bandwidth?",
    "options": [
      "Analog",
      "Compressed",
      "Uncompressed",
      "Wireless"
    ],
    "correct": 2,
    "explanation": "Uncompressed audio needs the most bandwidth because every sample is stored or transmitted in full — e.g., stereo 48 kHz/24-bit is about 2.3 Mbps before any overhead. Compressed formats (MP3, AAC) discard psychoacoustically masked data to shrink that dramatically. Analog isn't measured in digital bandwidth, and wireless is a transport, not a format — uncompressed digital is the bandwidth hog."
  },
  {
    "domain": "CTS: Video & Signal",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Blu-ray standard resolution?",
    "options": [
      "1280x720",
      "1920x1080",
      "2560x1440",
      "3840x2160"
    ],
    "correct": 1,
    "explanation": "The Blu-ray standard is built around 1920x1080 (1080p) high definition — the format was designed to deliver full HD movies. 4K content came later with Ultra HD Blu-ray (3840x2160). 720p and 1440p are computer/display resolutions, not Blu-ray standards. On the exam, Blu-ray = 1080p remains the expected answer."
  },
  {
    "domain": "CTS: Video & Signal",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Frame synchronization technology?",
    "options": [
      "Genlock",
      "Sync pulse",
      "Color burst",
      "Blanking"
    ],
    "correct": 0,
    "explanation": "Genlock (generator locking) synchronizes video devices to a common reference signal (black burst or tri-level sync) so their frames start at exactly the same instant — essential for clean switching between cameras without rolls or tears. Sync pulses, color burst, and blanking are parts of the video signal itself; genlock is the system-level technique that locks multiple devices together."
  },
  {
    "domain": "CTS: AVIXA Standards",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "CTS stands for?",
    "options": [
      "Certified Technical Specialist",
      "Certified Technology Specialist",
      "Commercial Television Systems",
      "Centralized Technology Services"
    ],
    "correct": 1,
    "explanation": "CTS stands for Certified Technology Specialist, the flagship AV-industry certification administered by AVIXA (the Audiovisual and Integrated Experience Association). It validates the core knowledge tested throughout this app — design, installation, and operation of AV systems. The other options are plausible-sounding distractors; only 'Certified Technology Specialist' is the real credential."
  },
  {
    "domain": "CTS: Needs Analysis",
    "cert": "CTS",
    "duty": "A",
    "task": "A1",
    "q": "What is the primary purpose of a needs analysis on an AV project?",
    "options": [
      "To select the equipment brands and models the design will be built on",
      "To define the problems the AV system must solve before any design begins",
      "To build the installation schedule and assign crews to each phase",
      "To test the installed system against the original design specifications"
    ],
    "correct": 1,
    "explanation": "A needs analysis defines the client's goals, tasks, and problems first — the 'why' behind the project. Equipment selection, scheduling, and testing all come later and depend on it. Designing without a needs analysis risks building an impressive system that solves the wrong problem."
  },
  {
    "domain": "CTS: Needs Analysis",
    "cert": "CTS",
    "duty": "A",
    "task": "A1",
    "q": "During stakeholder interviews, which group is MOST important to include for a conference room project?",
    "options": [
      "The executive sponsor, who owns the budget and vision",
      "The IT department, which owns the network and security",
      "End users, IT, facilities, and executive sponsors",
      "The architect, who controls the room's finishes and layout"
    ],
    "correct": 2,
    "explanation": "Different stakeholders own different requirements: end users know the workflows, IT owns network/security policy, facilities owns power/HVAC/structure, and sponsors own budget and vision. Interviewing only one group guarantees missed requirements that surface as expensive changes later."
  },
  {
    "domain": "CTS: Needs Analysis",
    "cert": "CTS",
    "duty": "A",
    "task": "A1",
    "q": "What is the key difference between a client's stated 'needs' and their 'wants'?",
    "options": [
      "There is no real difference; the contract treats both as deliverables",
      "Needs are required for the system to do its job; wants are desirable but optional",
      "Wants cost more than needs, so they are always cut first from the budget",
      "Needs come from the end users, while the wants come from the executive sponsors"
    ],
    "correct": 1,
    "explanation": "Separating must-haves from nice-to-haves lets you protect the core functionality when budget or schedule gets tight. Document both, but design the system around the needs first. This prioritization is what keeps scope creep from derailing the project."
  },
  {
    "domain": "CTS: Needs Analysis",
    "cert": "CTS",
    "duty": "A",
    "task": "A1",
    "q": "What document is the primary deliverable of a completed needs analysis?",
    "options": [
      "A detailed equipment list with manufacturer part numbers and quoted unit pricing",
      "A needs assessment / program report capturing requirements, constraints, and success criteria",
      "The final as-built drawings showing exactly what was installed in the field",
      "A signed service and maintenance contract covering post-warranty support and response times"
    ],
    "correct": 1,
    "explanation": "The needs assessment (program report) captures what was discovered: business goals, user workflows, technical requirements, constraints, budget range, and how success will be measured. It becomes the foundation the design is built on and the benchmark the final system is judged against — long before any equipment is specified."
  },
  {
    "domain": "CTS: Needs Analysis",
    "cert": "CTS",
    "duty": "A",
    "task": "A1",
    "q": "Why should budget expectations be established during the needs analysis phase?",
    "options": [
      "To lock in equipment pricing now, before manufacturers announce their next price rise",
      "So the design that follows is realistic and buildable within the client's means",
      "To work out the integrator's profit margin before the project scope is fully defined",
      "To set the payment schedule and the retainage terms that go into the contract"
    ],
    "correct": 1,
    "explanation": "A design created without budget context often prices itself out of existence, wasting everyone's time and damaging trust. Establishing a realistic budget range early lets you design to a target and have honest good/better/best conversations before drawings are finalized."
  },
  {
    "domain": "CTS: Needs Analysis",
    "cert": "CTS",
    "duty": "A",
    "task": "A2",
    "q": "How does a site survey differ from a needs analysis?",
    "options": [
      "They are the same activity, but a site survey is done by the installer instead",
      "Site surveys record physical conditions; needs analyses define functional requirements",
      "A site survey checks the installed system, while needs analysis comes before design",
      "A needs analysis covers the audio requirements; a site survey covers the video"
    ],
    "correct": 1,
    "explanation": "The needs analysis answers 'what must the system do?' while the site survey answers 'what are we working with physically?' — room dimensions, structure, power, HVAC noise, lighting, network drops, and pathways. Both feed the design, but they collect fundamentally different information."
  },
  {
    "domain": "CTS: Needs Analysis",
    "cert": "CTS",
    "duty": "A",
    "task": "A1",
    "q": "Which accessibility consideration must be captured during needs analysis for a public assembly space?",
    "options": [
      "Only the assistive listening system, since the ADA requires nothing else",
      "Assistive listening, sight lines, and accessible control interfaces",
      "Caption display sizes, since sight lines and controls are the owner's call",
      "Accessibility is handled by the architect, so AV design can leave it out"
    ],
    "correct": 1,
    "explanation": "Public assembly spaces carry legal accessibility obligations — assistive listening systems, clear sight lines to captioning/displays, and controls usable by people with disabilities. Capturing these in needs analysis means they're designed in from the start, not retrofitted at penalty cost after inspection."
  },
  {
    "domain": "CTS: Needs Analysis",
    "cert": "CTS",
    "duty": "A",
    "task": "A2",
    "q": "When assessing a client's existing infrastructure, what should you document?",
    "options": [
      "Only the equipment you plan to replace, since everything else stays as it is",
      "What can be reused, what must be replaced, and how existing systems constrain the design",
      "The network passwords and admin logins, so the installers can reach every device",
      "Nothing in detail, since the new design will replace all of the existing infrastructure anyway"
    ],
    "correct": 1,
    "explanation": "Knowing what stays and what goes prevents costly surprises: reusable displays, cabling, or network capacity can save budget, while legacy constraints (old switchers, analog-only paths) shape what the new design must accommodate. Documenting it also protects you from being blamed for pre-existing problems."
  },
  {
    "domain": "CTS: AV Design",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Per AVIXA DISCAS principles, what primarily determines the minimum image height for a display?",
    "options": [
      "The projector's lumen output and the ambient light level in the room",
      "The farthest viewer's distance and the smallest element that must be legible",
      "The room's ceiling height and the required bottom-of-image height above the floor",
      "The closest viewer's distance and the display's native resolution"
    ],
    "correct": 1,
    "explanation": "DISCAS sizes the image from the back of the room forward: the farthest viewer must be able to resolve the smallest critical detail (the 'content element'). Lumen output affects visibility in ambient light, not legibility of detail. This is why the same room needs a bigger image for spreadsheet review than for passive video watching."
  },
  {
    "domain": "CTS: AV Design",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "For a 1080p image, what is the generally accepted minimum viewing distance to avoid seeing individual pixels?",
    "options": [
      "Equal to the image width",
      "Approximately 2 times the image height",
      "Approximately 5 times the image height",
      "There is no minimum; closer is always better"
    ],
    "correct": 1,
    "explanation": "Viewers closer than about 2x image height on a 1080p display start resolving the pixel structure, which degrades the image and causes eye fatigue. This sets the front-row limit in design. Higher resolutions (4K) allow closer seating — roughly 1.5x height — because the pixels are smaller."
  },
  {
    "domain": "CTS: AV Design",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "When designing a distributed loudspeaker system, what does a uniformity target of ±3 dB mean?",
    "options": [
      "The system runs 3 dB louder than the design target to leave a safety margin",
      "SPL varies no more than 3 dB above or below the average across the listening area",
      "The amplifiers are sized with exactly 3 dB of headroom above the program level",
      "Adjacent speakers are spaced so their levels differ by 3 dB at the boundary"
    ],
    "correct": 1,
    "explanation": "Uniform coverage means every seat hears essentially the same level — AVIXA A102.01 sets the tolerance framework. A ±3 dB window is a common design target because variations smaller than that are barely noticeable to listeners. Achieving it drives speaker quantity, placement, and tap settings in a distributed design."
  },
  {
    "domain": "CTS: AV Design",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Why must ambient light levels be measured during the design phase for a projection system?",
    "options": [
      "Ambient light has no measurable effect on projected images, so measuring it during design adds nothing of value",
      "Projected contrast washes out as ambient light rises, so brightness, screen choice, or light control must compensate",
      "Ambient light measurement determines the projector’s throw ratio, which then drives the lens selection for the room",
      "Ambient light readings are only required to satisfy the electrical permit and have no bearing on the projection design"
    ],
    "correct": 1,
    "explanation": "A projector can't project black — dark areas of the image are just the screen showing ambient light. As ambient light rises, contrast ratio collapses regardless of lumen output. Measuring it tells you whether you need a brighter projector, an ambient-light-rejecting screen, or lighting control — decisions that must happen in design, not after installation."
  },
  {
    "domain": "CTS: AV Design",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "What is the recommended maximum conduit fill for AV cabling pathways?",
    "options": [
      "100%, since low-voltage cable produces no heat and conduit is costly",
      "Approximately 40%, leaving room for future expansion and heat dissipation",
      "80%, which is the same figure as the continuous-load derating rule for breakers",
      "About 60%, leaving just enough room to pull one more cable later on"
    ],
    "correct": 1,
    "explanation": "The 40% fill guideline leaves space to pull additional cable later without damaging existing runs, and reduces heat buildup. A conduit packed to 100% is effectively a dead end — the first future upgrade becomes a demolition project. Designing pathways for growth is a hallmark of professional AV design."
  },
  {
    "domain": "CTS: AV Design",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Why is heat load calculation part of equipment rack design?",
    "options": [
      "It is only required for outdoor racks that sit in direct sun through the summer",
      "Excess heat shortens equipment life and causes failures, so cooling is designed in",
      "It sets the rack's weight rating, since steel loses strength as it gets hotter",
      "Only the amplifiers make meaningful heat, so the calculation only covers those"
    ],
    "correct": 1,
    "explanation": "Every watt a rack's equipment consumes becomes heat. Without planned ventilation or active cooling, rack temperatures climb, components drift out of spec, and failures follow — usually after the warranty conversation gets awkward. Good design totals the thermal load and provides a cooling path before equipment is ordered."
  },
  {
    "domain": "CTS: AV Design",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "What is the purpose of a block diagram / signal flow drawing in an AV design package?",
    "options": [
      "It is a summary drawing for the client's sign-off, retired once installation starts",
      "It traces every signal path from source to destination, for building and troubleshooting",
      "It replaces the site survey by showing where each device will physically be mounted",
      "It is mainly a sales document that shows the client the overall scope of the whole project"
    ],
    "correct": 1,
    "explanation": "The signal flow diagram is the design's single source of truth: installers build from it, and technicians troubleshoot from it for the life of the system. When something fails at 8am before a board meeting, the tech traces the path on this drawing. Incomplete signal documentation is a design defect."
  },
  {
    "domain": "CTS: AV Design",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "For a seated audience, how high should the bottom of a presentation screen typically be mounted?",
    "options": [
      "At floor level, to maximize the projected image size when ceiling height limits the screen placement",
      "High enough to clear seated viewers' sight lines — typically around 42-48 inches above the finished floor",
      "Flush with the ceiling in every room, regardless of room depth, ceiling height, or viewer sight lines",
      "With the bottom of the screen at seated eye level, so viewers look straight ahead at the image"
    ],
    "correct": 1,
    "explanation": "If the bottom of the image sits below the sight lines of the back rows, those viewers see the backs of heads instead of content. The 42-48 inch guideline keeps the image above a seated audience's heads. Screen height, ceiling height, and projector placement all interact here — it's a three-way design compromise."
  },
  {
    "domain": "CTS: AV Design",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Why should AV traffic be placed on a separate VLAN or physical network from general corporate data?",
    "options": [
      "Because AV devices can't use the standard TCP/IP stack found on office networks",
      "To guarantee bandwidth, prioritize latency-sensitive media, and meet IT security policy",
      "Because a VLAN raises the total speed available on all the switch ports that AV devices use",
      "It is rarely needed, because a shared flat network always handles AV traffic fine"
    ],
    "correct": 1,
    "explanation": "Media traffic (Dante, NDI, control) is sensitive to latency and packet loss that bursty office data causes, and IT departments rightly resist unknown devices on the corporate LAN. A dedicated AV VLAN with QoS gives the media traffic priority and gives IT the security boundary they require. This conversation happens in design, with IT at the table."
  },
  {
    "domain": "CTS: Project Management",
    "cert": "CTS",
    "duty": "A",
    "task": "A3",
    "q": "What does a RACI chart clarify on an AV project?",
    "options": [
      "The Risks, Assumptions, Constraints and Issues logged against each project phase",
      "Who is Responsible, Accountable, Consulted, and Informed for each task or decision",
      "Which tasks are Required, Approved, Completed or Invoiced at each milestone",
      "Who Requests, Approves, Creates and Inspects each submittal on the project"
    ],
    "correct": 1,
    "explanation": "RACI eliminates the most common project dysfunction: everyone assuming someone else is handling a task. Each activity gets one Accountable owner (the single throat to choke), plus who's doing the work, who must be consulted, and who just needs updates. On multi-trade AV jobs, this clarity prevents dropped handoffs."
  },
  {
    "domain": "CTS: Project Management",
    "cert": "CTS",
    "duty": "A",
    "task": "A3",
    "q": "What is the primary value of a Gantt chart in AV project management?",
    "options": [
      "It lists every task with its assigned budget and its actual cost to date",
      "It visualizes tasks, durations, dependencies, and milestones on a timeline",
      "It records who is responsible and accountable for each project task",
      "It maps the signal flow between devices so the installers can build"
    ],
    "correct": 1,
    "explanation": "A Gantt chart turns a task list into a schedule you can actually manage: you see what happens in what order, which tasks depend on others, and where the milestones fall. When the electrician's rough-in slips, the chart shows exactly which AV tasks it impacts. It's the project's shared picture of time."
  },
  {
    "domain": "CTS: Project Management",
    "cert": "CTS",
    "duty": "A",
    "task": "A3",
    "q": "What is an RFI and when is it used?",
    "options": [
      "A Request for Information — used during construction to get clarification on ambiguous or conflicting design documents",
      "A wireless microphone system — an RF transmitter and receiver pair used for speech reinforcement in large lecture auditoriums",
      "A final progress billing invoice — submitted at closeout to release the last retained project funds",
      "An RF interference field report — documents wireless spectrum conflicts discovered during site surveys"
    ],
    "correct": 0,
    "explanation": "When drawings and specs conflict — or a field condition doesn't match the plan — the installer submits an RFI to get a formal, documented answer from the designer before proceeding. Guessing instead of asking is how expensive rework happens. RFIs create the paper trail that protects everyone."
  },
  {
    "domain": "CTS: Project Management",
    "cert": "CTS",
    "duty": "A",
    "task": "A3",
    "q": "What are submittals in the AV construction process?",
    "options": [
      "The final payment applications submitted at project closeout, requesting release of the retained contract balance",
      "Shop drawings, product data, and samples submitted for approval before procurement and installation",
      "Employee time sheets submitted weekly, documenting each installer's billable hours against the project budget",
      "Warranty claim forms submitted after installation, requesting manufacturer replacement of defective equipment"
    ],
    "correct": 1,
    "explanation": "Submittals prove that what you plan to install matches what was specified — exact models, shop drawings showing how it fits, and samples where needed. Approval happens before purchase, so a wrong or substituted product gets caught on paper instead of in the ceiling. Skipping submittals is a classic cause of rejected work."
  },
  {
    "domain": "CTS: Project Management",
    "cert": "CTS",
    "duty": "A",
    "task": "A3",
    "q": "What is a schedule of values in AV contracting?",
    "options": [
      "A negotiated list of equipment discounts and dealer margins, showing the client every markup applied to the original quote",
      "A line-item breakdown of the contract price tied to work progress, used as the basis for progress billing",
      "A calendar view of the project timeline, marking each milestone date when the next phase of construction is scheduled to begin",
      "A schedule of warranty coverage periods for each installed device, listing when manufacturer support expires per line item"
    ],
    "correct": 1,
    "explanation": "The schedule of values breaks the lump-sum price into billable chunks (engineering, rough-in, trim-out, programming, commissioning...). Each pay application bills the percentage complete per line. It aligns cash flow with actual progress and gives the client transparency into what they're paying for."
  },
  {
    "domain": "CTS: Project Management",
    "cert": "CTS",
    "duty": "A",
    "task": "A3",
    "q": "Which project risk should be identified earliest on an AV installation?",
    "options": [
      "Final programming details, such as the button labels and touch panel page layouts",
      "Long-lead equipment, trade coordination conflicts, and site-access constraints",
      "End-user training dates, since those are the last item before handover",
      "Punch list items, which should be predicted before installation starts"
    ],
    "correct": 1,
    "explanation": "Risks you identify early can be mitigated: long-lead items get ordered first, trade conflicts get sequenced in the schedule, and access constraints get planned around. Risks discovered late become delays and change orders. Early risk identification is the cheapest insurance a project manager buys."
  },
  {
    "domain": "CTS: Project Management",
    "cert": "CTS",
    "duty": "A",
    "task": "A3",
    "q": "What should a project communication plan define?",
    "options": [
      "The contact list for every trade, with their office phone numbers and emails",
      "Who gets which information, how often, by what channel, and who can decide",
      "The meeting agenda template that every weekly project status call follows",
      "Which messages go to the client in writing, and which are kept internal only"
    ],
    "correct": 1,
    "explanation": "A communication plan prevents the two classic failures: stakeholders blindsided by surprises, and decisions stalled because nobody knows who's authorized to make them. Regular status updates, defined meeting rhythms, and clear escalation paths keep small issues from becoming project crises."
  },
  {
    "domain": "CTS: Project Management",
    "cert": "CTS",
    "duty": "A",
    "task": "A3",
    "q": "What is a milestone in a project schedule?",
    "options": [
      "A routine daily task assigned to the lead technician and tracked on the project’s punch list every morning",
      "A significant checkpoint or event marking major progress, such as rough-in complete or system go-live",
      "The final invoice amount submitted to the client when the project reaches closeout",
      "A type of cable milestone marker clipped onto wire runs to label each completed pull"
    ],
    "correct": 1,
    "explanation": "Milestones are zero-duration markers of major progress — design approval, rough-in complete, commissioning done, go-live. They give the client and the team shared checkpoints to measure progress against, and slipping a milestone is the early warning that the schedule is at risk."
  },
  {
    "domain": "CTS: Project Management",
    "cert": "CTS",
    "duty": "A",
    "task": "A3",
    "q": "What is the purpose of a pre-installation / kickoff meeting with all trades?",
    "options": [
      "It serves a purely social function — the trades meet for introductions and lunch before real coordination begins",
      "To align schedule, sequencing, responsibilities, site rules, and communication before work begins",
      "To renegotiate the contract price and the final scope of work with every subcontractor present at once",
      "To train the end users on the new system while each trade demonstrates the devices they will install"
    ],
    "correct": 1,
    "explanation": "Most installation conflicts — AV rough-in blocked by HVAC ductwork, electricians unaware of AV power needs, painters painting over cable labels — come from trades working from different assumptions. A kickoff meeting puts everyone on the same sequence and the same rules before the first hole is drilled."
  },
  {
    "domain": "CTS: Customer Relations",
    "cert": "CTS",
    "duty": "A",
    "task": "A1",
    "q": "What is the most effective way to manage client expectations during an AV project?",
    "options": [
      "Promise the fastest possible timeline to win the client's confidence, then adjust it as you go",
      "Document assumptions, update the client proactively, and under-promise then over-deliver",
      "Hold back schedule details until the work is nearly done, to avoid false alarms",
      "Contact the client only when an issue needs a decision, to respect their time"
    ],
    "correct": 1,
    "explanation": "Expectations are managed with documentation and communication, not optimism. Written assumptions prevent 'I thought that was included' disputes; proactive updates prevent surprises; and conservative commitments you beat build more trust than aggressive ones you miss. Trust is the product you're really delivering."
  },
  {
    "domain": "CTS: Customer Relations",
    "cert": "CTS",
    "duty": "C",
    "task": "C1",
    "q": "A client is upset about a system malfunction during an important event. What is the best immediate response?",
    "options": [
      "Explain the technical cause in detail first, so the client understands what failed",
      "Listen, acknowledge the impact, restore function, then follow up with root cause and prevention",
      "Promise it will never happen again, so the client feels fully reassured before the event is over",
      "Point to the manufacturer's defect so the client knows the integrator was not at fault"
    ],
    "correct": 1,
    "explanation": "In the moment, the client needs two things: to feel heard, and to have the event saved. Fix first, investigate second, report third. Blame — of the client, the manufacturer, or anyone — destroys trust even when technically accurate. The follow-up report with root cause and prevention is what turns a failure into retained business."
  },
  {
    "domain": "CTS: Customer Relations",
    "cert": "CTS",
    "duty": "A",
    "task": "A3",
    "q": "Why should important client decisions and verbal agreements be confirmed in writing?",
    "options": [
      "It is unnecessary once a trusting relationship with the client has been built",
      "To create a shared record that prevents misunderstandings and protects both parties",
      "Only the contract needs to be written; meeting decisions are informal by nature",
      "It slows the project down, so it is reserved for decisions that change the price"
    ],
    "correct": 1,
    "explanation": "A brief confirming email after a meeting ('per our discussion, we agreed on X') takes two minutes and prevents the most expensive sentence in contracting: 'that's not what I remember.' Memories genuinely differ under project stress; the written record is the neutral referee both sides agreed to."
  },
  {
    "domain": "CTS: Customer Relations",
    "cert": "CTS",
    "duty": "A",
    "task": "A3",
    "q": "When a client asks for out-of-scope work, what is the most professional response?",
    "options": [
      "Decline it immediately and point the client to the scope section of the contract",
      "Welcome the request, explain the change-order process, and give its cost and schedule impact",
      "Do the work at no charge to build goodwill, as long as it takes less than a day",
      "Note the request for the end of the project and raise it with the client again at the closeout meeting"
    ],
    "correct": 1,
    "explanation": "'Yes, we can do that — here's what it adds in cost and time, and I need your approval to proceed' keeps the relationship positive while protecting the project's economics. Flat refusal feels adversarial; free work trains the client to expect it. The change order process turns scope discussions into business discussions."
  },
  {
    "domain": "CTS: Customer Relations",
    "cert": "CTS",
    "duty": "B",
    "task": "B2",
    "q": "What is the business value of thorough end-user training at project handover?",
    "options": [
      "Very little, since well-designed systems are intuitive enough to need no training",
      "Confident users file fewer support calls, value the system more, and refer future work",
      "It mainly satisfies the warranty paperwork, which requires a signed training record",
      "It shifts responsibility for operating errors from the integrator to the client"
    ],
    "correct": 1,
    "explanation": "An untrained user experiences even a perfect system as broken — every support call that starts 'the system doesn't work' and ends 'oh, that button' costs you money and goodwill. Good training, plus a one-page quick-start guide, converts the system from your project into their tool. That's what generates referrals."
  },
  {
    "domain": "CTS: Customer Relations",
    "cert": "CTS",
    "duty": "A",
    "task": "A3",
    "q": "What does presenting 'good / better / best' options accomplish in an AV proposal?",
    "options": [
      "It anchors the client on the cheapest tier, which lowers the final contract value",
      "It lets the client match the solution to their budget, with each tier's tradeoffs explicit",
      "It triples the engineering work, since every one of the tiers needs its own complete set of drawings",
      "It shows the client the integrator's full margin across three levels of equipment"
    ],
    "correct": 1,
    "explanation": "Tiered options turn a take-it-or-leave-it price into a conversation about value: the client sees what more money buys and what less money sacrifices. It respects their budget authority while keeping the recommended solution in front of them. Most clients choose the middle tier — which is usually what you'd have proposed anyway."
  },
  {
    "domain": "CTS: Customer Relations",
    "cert": "CTS",
    "duty": "C",
    "task": "C1",
    "q": "After project completion, what is the best way to maintain the client relationship?",
    "options": [
      "Wait for the client to call, since unsolicited contact can feel like a sales pitch",
      "Scheduled check-ins, a clear support path, and optional service agreements",
      "Send a monthly invoice for a support retainer, whether or not service is used",
      "Stay in touch mainly when you need a reference or a case study for marketing"
    ],
    "correct": 1,
    "explanation": "The most profitable AV work is repeat and referral business, and it goes to the integrator who stays present. A 30-day check-in call, a defined support number, and an optional service agreement keep small issues from becoming resentments — and keep you first in line for the next project."
  },
  {
    "domain": "CTS: Customer Relations",
    "cert": "CTS",
    "duty": "A",
    "task": "A1",
    "q": "Why is active listening more valuable than technical expertise in an initial client meeting?",
    "options": [
      "Technical expertise is never needed in a client meeting — only the contract terms and pricing matter",
      "Understanding the client's real problem matters more than showing what you know; solutions follow",
      "Clients dislike overly technical people, so expertise should be concealed during initial meetings",
      "Listening wastes valuable meeting time that would be better spent presenting product options and pricing"
    ],
    "correct": 1,
    "explanation": "Clients buy outcomes, not specifications. The integrator who asks sharp questions and truly hears the answers designs the right system; the one who leads with product knowledge often solves the wrong problem brilliantly. Expertise matters enormously — but only after understanding directs it."
  },
  {
    "domain": "CTS: Troubleshooting & Verification",
    "cert": "CTS",
    "duty": "D",
    "task": "D3",
    "q": "What is the 'half-splitting' method of AV troubleshooting?",
    "options": [
      "Cutting each cable in the signal chain in half to physically expose the precise location of the fault",
      "Testing at the midpoint of a signal path to find which half holds the fault, then repeating on that half",
      "Replacing half of the equipment at random and checking whether the fault condition disappears on its own",
      "Splitting the installation crew into two teams so each team can troubleshoot half of the system in parallel"
    ],
    "correct": 1,
    "explanation": "Half-splitting is binary search applied to signal flow: test the middle, and one test eliminates half the system as the culprit. It's dramatically faster than checking sources-to-destination in order. Combined with a signal flow diagram, it's the professional's default fault-isolation method."
  },
  {
    "domain": "CTS: Troubleshooting & Verification",
    "cert": "CTS",
    "duty": "D",
    "task": "D3",
    "q": "A display shows 'no signal' from a known-good source over HDMI. After verifying power and input selection, what is the most likely cause?",
    "options": [
      "The display's audio is muted, which blanks the HDMI input",
      "An HDCP authentication failure or corrupted EDID handshake",
      "The room is too bright for the display to show an image",
      "The source's video file is corrupted and will not decode"
    ],
    "correct": 1,
    "explanation": "HDMI is a negotiated digital link: source and display must complete HDCP authentication and EDID exchange before video flows. A failed handshake gives you 'no signal' from perfectly good hardware. Power-cycling the chain in order (display first, then source) or inserting an EDID emulator often resolves it — which is why it's the first suspect, not the last."
  },
  {
    "domain": "CTS: Troubleshooting & Verification",
    "cert": "CTS",
    "duty": "D",
    "task": "D3",
    "q": "A loud 60 Hz hum is present in the audio system. What does this symptom most likely indicate?",
    "options": [
      "A ground loop between equipment on different electrical grounds",
      "A blown loudspeaker cone rattling at the mains frequency of 60 Hz",
      "Acoustic feedback from the microphones at a low frequency",
      "A failed amplifier channel passing DC to the loudspeakers"
    ],
    "correct": 0,
    "explanation": "Mains-frequency hum (60 Hz in North America, 50 Hz elsewhere) is the signature of a ground loop — current flowing between chassis grounds at different potentials, often via cable shields. The fix is breaking the loop with an isolation transformer or balanced connections, never by lifting a safety ground. Blown speakers distort; feedback howls; ground loops hum."
  },
  {
    "domain": "CTS: Troubleshooting & Verification",
    "cert": "CTS",
    "duty": "C",
    "task": "C1",
    "q": "During sound check, the system feeds back when the presenter speaks. What is the correct order of corrective actions?",
    "options": [
      "Add loudspeakers near the stage so the presenter hears more, then raise the system level",
      "Reduce gain, move mics away from loudspeakers, then notch the ringing frequencies with EQ",
      "Swap every microphone for a higher-output model, then lower the channel gain to match",
      "Apply wide EQ cuts first, then raise the overall gain until the presenter is loud enough"
    ],
    "correct": 1,
    "explanation": "Feedback is a gain-before-feedback problem solved in order of effectiveness: less gain needed (move mic closer to talker), more distance between mics and speakers, then surgical EQ notches at the ringing frequencies. EQ first without fixing gain structure just moves the feedback to a new frequency. The PAG/NAG concept governs the whole process."
  },
  {
    "domain": "CTS: Troubleshooting & Verification",
    "cert": "CTS",
    "duty": "D",
    "task": "D3",
    "q": "There is no audio from any zone of a distributed system. What is the most logical first check?",
    "options": [
      "Rewire all the loudspeakers in every zone, since a single bad speaker connection is the most likely cause of total silence",
      "Verify the common upstream points first: source selection, system mute, main power, and the DSP/processor status",
      "Replace the amplifiers one at a time, starting with the oldest unit, because simultaneous amplifier failure explains all-zone outages",
      "Check the projector lamp hours and replace the lamp, since a failed lamp can mute the audio outputs of a distributed system"
    ],
    "correct": 1,
    "explanation": "A fault affecting every zone lives upstream of the zones — at the source, the system-wide mute, the DSP, or power. Troubleshooting from the common point outward finds system-wide faults in one step; starting at individual speakers wastes hours. Always ask 'what do all the failures have in common?' first."
  },
  {
    "domain": "CTS: Troubleshooting & Verification",
    "cert": "CTS",
    "duty": "B",
    "task": "B1",
    "q": "What is a toner (tone generator and probe) used for during verification?",
    "options": [
      "Calibrating projector color and grayscale against a reference",
      "Identifying and tracing individual cables in bundles and through walls",
      "Measuring sound pressure level and frequency response across the room",
      "Tuning wireless microphone frequencies to avoid intermodulation"
    ],
    "correct": 1,
    "explanation": "The toner injects an audible signal onto a cable at one end; the inductive probe finds that same tone at the far end — even through walls and inside bundles. It's how you answer 'which of these 40 identical cables is input 7?' during verification and retrofit work. Labeling as you go prevents ever needing it, but every tech carries one."
  },
  {
    "domain": "CTS: Troubleshooting & Verification",
    "cert": "CTS",
    "duty": "B",
    "task": "B1",
    "q": "Why are test patterns and signal generators used during video system verification?",
    "options": [
      "They are mainly for showroom demonstrations that show off a display's color range",
      "They give known-good reference signals to verify each link independently of the source devices",
      "They stand in for the displays, so the whole signal path can be tested before the screens arrive",
      "They raise the resolution the system can pass by forcing the highest available timing"
    ],
    "correct": 1,
    "explanation": "A laptop is an unknown variable — wrong resolution, HDCP issues, sleep mode. A test pattern generator outputs a precise, known signal, so any fault you see is definitively in the distribution path, not the source. Verifying the infrastructure with reference signals before connecting real sources is standard commissioning practice."
  },
  {
    "domain": "CTS: Troubleshooting & Verification",
    "cert": "CTS",
    "duty": "D",
    "task": "D3",
    "q": "An AV device is not reachable on the network. Which troubleshooting step comes first?",
    "options": [
      "Replace the network switch with a higher-capacity managed model before verifying link lights, cabling, or IP addressing",
      "Check the physical layer: link lights, cable, port, then IP addressing (DHCP/static, correct subnet/VLAN)",
      "Reinstall the device firmware to factory defaults, then re-upload its configuration before checking link lights",
      "Call the ISP's support line to reset the WAN connection before checking the device's link lights, cable, or subnet assignment"
    ],
    "correct": 1,
    "explanation": "Network troubleshooting follows the OSI model from the bottom up: no link light means a physical problem (cable, port, PoE), and link-with-no-communication means an addressing problem (wrong subnet, VLAN, or DHCP failure). Skipping to firmware or switch replacement before checking Layer 1 wastes time and risks breaking what works."
  },
  {
    "domain": "CTS: Troubleshooting & Verification",
    "cert": "CTS",
    "duty": "D",
    "task": "D3",
    "q": "Why is gain staging verified before any other audio troubleshooting step?",
    "options": [
      "Gain staging is not important — modern DSPs auto-correct any level mismatch, so audio troubleshooting can begin anywhere in the chain",
      "Proper gain staging keeps each device in its optimal range; bad staging causes noise or distortion that mimics other faults",
      "It only affects the subwoofers — full-range speakers and microphones operate independently of the system's overall gain structure",
      "Gain staging is performed after the client moves in — verifying levels before troubleshooting wastes valuable commissioning time"
    ],
    "correct": 1,
    "explanation": "If the first device in the chain is clipping or starved, every downstream symptom — distortion, hiss, weak output — is a lie told by bad gain structure. Verifying unity gain through the chain (each stage neither clipping nor buried in noise) eliminates a whole class of phantom faults before you chase real ones."
  },
  {
    "domain": "CTS: Commissioning & Closeout",
    "cert": "CTS",
    "duty": "B",
    "task": "B1",
    "q": "How does commissioning differ from installation?",
    "options": [
      "They are identical activities — commissioning is simply another word for the installation phase of a project",
      "Installation puts the equipment in place; commissioning systematically proves every function meets the design",
      "Commissioning happens before design, since it establishes the performance targets the design must meet",
      "Only the client performs commissioning — the integrator's work ends the moment installation is finished"
    ],
    "correct": 1,
    "explanation": "Installation ends when everything is connected; commissioning ends when everything is proven. Commissioning tests each input, output, preset, control function, and failure mode against the design documents and records the results. A system that was installed but never commissioned is an unverified system."
  },
  {
    "domain": "CTS: Commissioning & Closeout",
    "cert": "CTS",
    "duty": "B",
    "task": "B2",
    "q": "What are as-built drawings and why do they matter?",
    "options": [
      "Stylized marketing renderings of the finished room, produced for client presentations and the firm’s portfolio",
      "Drawings updated to reflect what was actually installed, serving as the accurate record for future service and expansion",
      "The original proposal drawings, reproduced unchanged at closeout and archived as the permanent system record",
      "The architect’s original building drawings, issued before the AV design work began and never updated at all during construction"
    ],
    "correct": 1,
    "explanation": "Field conditions always force deviations from the design — a rerouted conduit, a substituted model, a moved rack. As-builts capture reality, and the service tech who arrives three years later depends on them entirely. Delivering design drawings labeled as as-builts is a closeout failure."
  },
  {
    "domain": "CTS: Commissioning & Closeout",
    "cert": "CTS",
    "duty": "B",
    "task": "B2",
    "q": "What should client training at handover cover at minimum?",
    "options": [
      "Nothing formal; a well-designed system should explain itself to new users",
      "Daily operation, source switching, basic troubleshooting, and who to call for support",
      "How to reprogram the control system and edit the DSP presets when needs change",
      "The rack layout, IP address list and firmware versions for every device installed in the system"
    ],
    "correct": 1,
    "explanation": "Handover training converts the system from your project into their tool: how to turn it on, run a meeting, switch sources, recover from common issues, and reach support. It doesn't make them programmers — it makes them confident operators. Document it with a quick-start guide left at the rack."
  },
  {
    "domain": "CTS: Commissioning & Closeout",
    "cert": "CTS",
    "duty": "B",
    "task": "B2",
    "q": "What warranty information must be delivered to the client at closeout?",
    "options": [
      "None at handover; warranty terms are only shared once the first fault is reported",
      "What is covered, for how long, from when, what is excluded, and who to call",
      "The manufacturers' support phone numbers, since they handle every warranty claim",
      "A written promise that all parts and labor are covered for the life of the system"
    ],
    "correct": 1,
    "explanation": "Vague warranty promises become disputes: the client expects everything covered, you know labor and certain parts aren't. The closeout package must spell out coverage periods, start dates (usually substantial completion), exclusions, and the service contact path. Clarity at handover prevents conflict at the first failure."
  },
  {
    "domain": "CTS: Commissioning & Closeout",
    "cert": "CTS",
    "duty": "B",
    "task": "B2",
    "q": "What does final acceptance / sign-off signify on an AV project?",
    "options": [
      "The installer is released from all further support obligations and may stop responding to the client's calls",
      "The client formally accepts the system as complete and performing per contract, triggering final payment and warranty",
      "All equipment manufacturer warranties terminate immediately and the client assumes full responsibility for failures",
      "The design phase officially begins, since sign-off marks the point where the system can finally be engineered"
    ],
    "correct": 1,
    "explanation": "Sign-off is the contractual finish line: punch list cleared, commissioning documented, training delivered — the client agrees the contracted scope is complete. It releases final payment and starts warranty clocks. Never treat a project as done without it; undocumented 'we're basically finished' projects generate unpaid callbacks."
  },
  {
    "domain": "CTS: Commissioning & Closeout",
    "cert": "CTS",
    "duty": "B",
    "task": "B2",
    "q": "Why is 'attic stock' (spare parts) often specified at closeout?",
    "options": [
      "To pad the project cost with extra hardware the client will likely never touch or bother to inventory",
      "To ensure critical consumables and failure-prone parts are on hand for fast recovery without waiting on procurement",
      "Because federal law requires every AV installation to ship with a fixed minimum quantity of spare parts at closeout",
      "Spare parts serve no practical purpose and should be deliberately omitted from every closeout package"
    ],
    "correct": 1,
    "explanation": "A spare projector lamp, a couple of key cables, replacement batteries for wireless mics — attic stock turns a potential week-long outage into a ten-minute swap. It's cheap insurance specified at closeout when procurement is already mobilized, and the client will remember who thought of it."
  },
  {
    "domain": "CTS: Commissioning & Closeout",
    "cert": "CTS",
    "duty": "A",
    "task": "A3",
    "q": "What is the purpose of a post-project lessons-learned review?",
    "options": [
      "To assign blame for project problems to the specific team members responsible",
      "To capture what went well and what didn't so future projects benefit from the experience",
      "To renegotiate the contract terms based on what the review reveals about profitability",
      "It serves no purpose and should be skipped so the team can move straight to billable work"
    ],
    "correct": 1,
    "explanation": "Every project teaches something — an estimating miss, a coordination win, a product to avoid. A blameless review converts that experience into institutional knowledge: updated checklists, better estimates, fewer repeated mistakes. Companies that skip this step pay tuition on the same lessons repeatedly."
  },
  {
    "domain": "CTS-D: Needs Assessment",
    "cert": "CTS-D",
    "duty": "A",
    "task": "A1",
    "q": "A university asks you to design lecture capture for 40 classrooms. Several faculty members have strong opinions about features, but who must you formally identify FIRST before the design can be approved?",
    "options": [
      "The most vocal faculty members, since they teach in the rooms every day",
      "The decision-makers and stakeholders with budget and sign-off authority",
      "The IT helpdesk staff who will take the support calls after go-live",
      "The equipment vendors, to confirm product availability and lead times"
    ],
    "correct": 1,
    "explanation": "CTS-D Duty A Task 1: the design process starts by identifying who can approve scope, budget, and standards — typically a department head, dean, or facilities director. End-user input is gathered too, but only an authorized decision-maker can sign off on the design."
  },
  {
    "domain": "CTS-D: Needs Assessment",
    "cert": "CTS-D",
    "duty": "A",
    "task": "A1",
    "q": "You are designing a divisible ballroom where the operators will be rotating hotel banquet staff with no AV training. What is the most important design implication of their skill level?",
    "options": [
      "Specify the most powerful DSP available so its automation can correct any operator mistakes",
      "Design a one-touch control interface with locked-down presets and no exposed advanced settings",
      "Require the hotel to staff a dedicated AV technician for every event held in the ballroom",
      "Remove wireless microphones and room combining so there is less for the staff to manage"
    ],
    "correct": 1,
    "explanation": "CTS-D Duty A Task 1: the skill level of end users drives UI and system complexity decisions. For untrained rotating staff, the design must offer single-button presets (e.g., 'Presentation', 'Dinner', 'Dance') with advanced functions hidden behind a technician password."
  },
  {
    "domain": "CTS-D: Needs Assessment",
    "cert": "CTS-D",
    "duty": "A",
    "task": "A1",
    "q": "A client insists on '4K everywhere' but their building has only Cat5e infrastructure and no budget to re-cable. What is the designer's proper role here?",
    "options": [
      "Specify 4K endpoints anyway, since the cabling limits are the installer's responsibility",
      "Educate the client on the bandwidth and cabling implications, then document the agreed performance",
      "Design a 1080p system without comment, since most viewers cannot see the difference anyway",
      "Decline the project, because a professional designer should never deliver less than the client requested"
    ],
    "correct": 1,
    "explanation": "CTS-D Duty A Task 1 (Educate AV Clients): the designer must translate marketing terms into infrastructure reality — uncompressed 4K60 4:4:4 needs ~18 Gbps, far beyond Cat5e. Educate, present options (compression, new cable, realistic 1080p), and document what the client actually approves."
  },
  {
    "domain": "CTS-D: Needs Assessment",
    "cert": "CTS-D",
    "duty": "A",
    "task": "A2",
    "q": "A corporate client has a published 5-year global AV technology master plan standardizing on one control platform and one soft-codec. How should this affect your design for their new regional office?",
    "options": [
      "Treat it as informational, since each project should still pick best-of-breed products",
      "Conform to it unless an exception is documented and approved, preserving support and spares",
      "Apply it only to headquarters, since regional offices have their own local support teams",
      "Follow it for the control platform only, since codecs are chosen by the IT department"
    ],
    "correct": 1,
    "explanation": "CTS-D Duty A Task 2: reviewing the client's technology master plan is a formal task. Designing to the standard reduces training, spares, and support costs. Deviations need written justification and approval, not silent substitution."
  },
  {
    "domain": "CTS-D: Needs Assessment",
    "cert": "CTS-D",
    "duty": "A",
    "task": "A1",
    "q": "During needs assessment interviews, the client's team describes wanting a 'really impressive' boardroom. What is the designer's most effective next step?",
    "options": [
      "Specify the largest display and loudest audio that the budget can possibly accommodate",
      "Turn the vague wish into measurable, documented criteria, such as far-end viewers reading 10-pt text",
      "Ask the CEO which other boardrooms have impressed them, then replicate those systems feature for feature",
      "Copy the design of the competitor's boardroom, since the client already admires it"
    ],
    "correct": 1,
    "explanation": "CTS-D Duty A Task 1 (Identify Client Expectations): 'impressive' is not a design criterion. The designer translates subjective desires into verifiable performance targets (viewing distances, intelligibility, ease of use) that the finished system can be tested against."
  },
  {
    "domain": "CTS-D: Needs Assessment",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C4",
    "q": "Which element belongs in the AV scope of work document produced during the design phase?",
    "options": [
      "The installer’s internal labor rates, material markups, and profit margins for each line item",
      "A clear statement of inclusions, exclusions, and the performance criteria for verification",
      "The designer’s resume, certifications, portfolio of completed projects, and client references",
      "Glossy marketing brochures for each specified product, bound into the contract appendix as exhibits"
    ],
    "correct": 1,
    "explanation": "CTS-D Duty C Task 4: the scope of work defines what the project includes — and just as importantly what it excludes (e.g., 'client-provided network drops excluded'). It becomes the contractual baseline that change orders are measured against."
  },
  {
    "domain": "CTS-D: Needs Assessment",
    "cert": "CTS-D",
    "duty": "A",
    "task": "A1",
    "q": "What is the most reliable technique for uncovering a client's TRUE operational needs, beyond what they state in meetings?",
    "options": [
      "Send a detailed written questionnaire and design directly from the responses received",
      "Observe the users' actual workflow in the space and ask open-ended questions about pain points",
      "Base the design on industry trend reports and on what similar organizations have recently installed",
      "Interview senior management only, since they have the clearest view of the organization"
    ],
    "correct": 1,
    "explanation": "Stated needs ('we need a bigger screen') often mask real problems (glare, bad audio, confusing controls). Direct observation plus open-ended questions — 'walk me through a typical meeting' — reveals the workflow the design must actually support."
  },
  {
    "domain": "CTS-D: Needs Assessment",
    "cert": "CTS-D",
    "duty": "A",
    "task": "A1",
    "q": "IT wants the new boardroom on the corporate LAN with 802.1X; facilities wants it completely isolated for simplicity. Both are stakeholders. What should the designer do?",
    "options": [
      "Side with whichever department controls the larger share of the overall project budget and schedule",
      "Document both positions and trade-offs, and get a signed decision from the authorized approver",
      "Design it both ways and let the installer choose whichever turns out easier on site",
      "Choose the isolated network, since simplicity always outweighs the IT security policy"
    ],
    "correct": 1,
    "explanation": "Conflicting stakeholder requirements are normal. The designer's job is to surface the conflict, explain implications (security policy vs. simplicity/support), and get a documented decision — never to silently pick a side."
  },
  {
    "domain": "CTS-D: Needs Assessment",
    "cert": "CTS-D",
    "duty": "A",
    "task": "A1",
    "q": "How should a designer assess the technical skill level of the client's in-house support staff?",
    "options": [
      "Assume they are beginners with no AV knowledge, since in-house staff never have meaningful technical experience with systems",
      "Ask about their current responsibilities, tools they use, and systems they already support — then confirm by observing",
      "Give them a written exam on AV theory before the design starts, because test scores are the only valid measure of skill level",
      "Rely on the client's HR job titles alone, since titles like 'AV Technician' always accurately reflect hands-on capability"
    ],
    "correct": 1,
    "explanation": "Skill assessment is evidence-based: what systems do they support today, what tools (Dante Controller, DSP software) can they already drive, and what breaks them. This determines how much remote management, monitoring, and simplification the design must include."
  },
  {
    "domain": "CTS-D: Needs Assessment",
    "cert": "CTS-D",
    "duty": "A",
    "task": "A1",
    "q": "A client with a $50k budget expects a $200k experience. What concept should the designer use to reframe the conversation?",
    "options": [
      "Tell them plainly the budget is unrealistic and decline to design until it is raised",
      "Total cost of ownership, so trade-offs across purchase, support and refresh are informed",
      "Promise the $200k experience and plan to recover the difference through change orders",
      "Cut the warranty, training and documentation until the price hits the $50k budget"
    ],
    "correct": 1,
    "explanation": "Educating the client on total cost of ownership (not just equipment price) lets them make informed trade-offs: fewer rooms done well, phased deployment, or adjusted expectations. Hidden costs discovered later destroy trust."
  },
  {
    "domain": "CTS-D: Needs Assessment",
    "cert": "CTS-D",
    "duty": "A",
    "task": "A2",
    "q": "Why do enterprise clients standardize AV equipment across dozens of rooms, and what does the designer gain from knowing the standard?",
    "options": [
      "It is purely about bulk purchase discounts — standardization saves nothing on training, spare parts, or support costs across the enterprise",
      "Standardization cuts training, spares, and support costs; the designer gains a pre-approved product palette that speeds design and approval",
      "It has no real benefit — every room is unique, so standardizing equipment across dozens of rooms only limits the designer's creativity",
      "It is required by federal law — enterprises that fail to standardize AV equipment across every room face regulatory penalties"
    ],
    "correct": 1,
    "explanation": "A published standard means one control UI to learn, interchangeable spares, and faster troubleshooting. For the designer it means fewer submittal battles and a design the client's support team can actually sustain."
  },
  {
    "domain": "CTS-D: Needs Assessment",
    "cert": "CTS-D",
    "duty": "A",
    "task": "A3",
    "q": "Before detailed design begins, what formal step protects both the designer and the client?",
    "options": [
      "Ordering long-lead equipment immediately so delivery never delays the schedule",
      "Obtaining written sign-off on the needs assessment / program document",
      "Starting conduit rough-in before the program document is finalized",
      "Hiring the installation contractor before the program document is signed"
    ],
    "correct": 1,
    "explanation": "The signed program document is the baseline: it records what was asked for, what was agreed, and what success looks like. Design changes after sign-off are handled as revisions — not as 'you should have known.'"
  },
  {
    "domain": "CTS-D: Needs Assessment",
    "cert": "CTS-D",
    "duty": "A",
    "task": "A1",
    "q": "A client asks for larger displays because 'nobody can read the slides.' Observation shows the real problem is uncontrolled daylight washing out the screen. What is the correct design response?",
    "options": [
      "Specify the larger displays exactly as requested, since the client’s stated solution is authoritative",
      "Address the root cause first — lighting control/shades — then verify whether display size still needs to change",
      "Add more loudspeakers to the room to draw the audience’s attention away from the washed-out display",
      "Recommend that the client buy brighter laptops so the source content itself can overcome the daylight washout on screen"
    ],
    "correct": 1,
    "explanation": "A needs assessment that stops at the stated request produces an expensive wrong answer. The designer's value is diagnosing root cause: no display, however large, fixes 500 lux of daylight on the screen. Solve light control, then size the display to the viewing geometry."
  },
  {
    "domain": "CTS-D: Needs Assessment",
    "cert": "CTS-D",
    "duty": "A",
    "task": "A1",
    "q": "A 300-seat auditorium design must include hearing assistance. What drives this requirement?",
    "options": [
      "It is merely a nice-to-have experiential upgrade that improves comfort but carries no actual code or legal requirement",
      "Accessibility law (e.g., the ADA in the US) typically requires assistive listening in assembly spaces, sized to seating",
      "Hearing assistance is only required when the client specifically requests it during the needs assessment process",
      "Hearing assistance is completely obsolete — modern loudspeaker coverage has eliminated the need for assistive listening"
    ],
    "correct": 1,
    "explanation": "Accessibility is a needs-assessment item, not an afterthought. In the US, the ADA requires assistive listening systems in assembly areas, generally with receivers for ~4% of seats. The designer must capture the seat count and plan coverage, or the venue cannot legally open."
  },
  {
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B1",
    "q": "On the architect's reflected ceiling plan (RCP), you need to confirm projector locations won't clash with HVAC diffusers. What is the RCP actually showing you?",
    "options": [
      "The floor finishes — the RCP documents the carpet, tile, and wood selections for every area shown on the floor plan",
      "The ceiling as seen from above, showing lights, diffusers, sprinklers, and ceiling-mounted equipment positions",
      "The structural steel layout — the RCP shows beams, columns, and load ratings for rigging calculations",
      "The plumbing runs — the RCP traces water and waste piping above the ceiling for coordination"
    ],
    "correct": 1,
    "explanation": "CTS-D Duty B Task 1: the reflected ceiling plan is the designer's primary coordination tool — it shows everything competing for ceiling space. Reviewing A/E drawings early catches projector-vs-diffuser and speaker-vs-sprinkler clashes before they become field change orders."
  },
  {
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B1",
    "q": "The interior designer proposes a glass-walled huddle room with a hard concrete floor. What is your coordination responsibility?",
    "options": [
      "No action is required — finish selections are the interior designer’s sole responsibility, so AV has no input",
      "Flag the acoustic impact (flutter echo, long reverberation) and propose treatments or revised expectations in writing",
      "Specify higher-priced beamforming microphones to compensate for the room’s poor acoustics instead of treating the room",
      "Cancel the project entirely, since an acoustically poor room can never support a functioning AV system"
    ],
    "correct": 1,
    "explanation": "CTS-D Duty B Task 1: coordinating with architectural/interior professionals means raising AV impacts of finish choices early. Glass + concrete can push RT60 past 1.5 seconds, wrecking speech intelligibility. Document the concern and the options while finishes can still change."
  },
  {
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B3",
    "q": "Your rack room design dissipates 8 kW of heat. Who must you coordinate with, and what do they need from you?",
    "options": [
      "The electrical engineer — the heat load in watts, so they can upsize the panel feeders",
      "The mechanical (HVAC) engineer — the heat load in BTU/hr (W × 3.4) to size cooling",
      "The structural engineer — the rack weight and heat load so they can rate the floor",
      "No one — a rack room with vented doors and fans can shed 8 kW on its own"
    ],
    "correct": 1,
    "explanation": "CTS-D Duty B Task 3: AV heat is a mechanical coordination item. Convert equipment power to BTU/hr with the formula sheet's factor (8,000 W × 3.4 = 27,200 BTU/hr) and give the HVAC engineer the load plus any temperature limits, or the rack room becomes an oven."
  },
  {
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B2",
    "q": "A line-array loudspeaker cluster weighing 900 lbs will hang from the roof structure. What must happen before you finalize the rigging design?",
    "options": [
      "The installer can field-verify the steel by visual inspection and proceed with the rigging plan",
      "A licensed structural engineer must verify the structure can support the load and approve the attachment method",
      "Hang the cluster from the nearest sprinkler pipe, since fire-suppression piping is securely anchored",
      "Use heavier chain and extra shackles to be safe, since stronger rigging hardware offsets any unknown structural load path"
    ],
    "correct": 1,
    "explanation": "CTS-D Duty B Task 2: structural coordination is non-negotiable for suspended loads. Only a structural engineer can approve attachment points and load paths. Improvised rigging kills people and ends companies."
  },
  {
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B2",
    "q": "What electrical infrastructure information must the AV designer specify or coordinate for a large auditorium rack room?",
    "options": [
      "The brand and model of the electrician's hand tools, so the rack drawings can note the equipment used on site",
      "Dedicated circuits, panel locations, isolated-ground receptacles where needed, and the total connected load",
      "The color of the outlet and switch plate covers, so every receptacle matches the rack room's interior design palette",
      "Nothing needs specifying — standard building power is always adequate for any AV rack room regardless of connected load"
    ],
    "correct": 1,
    "explanation": "CTS-D Duty B Task 3: the designer provides the electrical engineer with connected load, circuit counts, and special requirements (isolated ground, sequenced power). AV sharing noisy circuits with dimmers or motors is a hum-and-buzz guarantee."
  },
  {
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B7",
    "q": "The lighting designer plans a preset that drives house lights to full during video playback. What is the coordination issue?",
    "options": [
      "There is no coordination issue — the house lighting system operates independently of AV, so designers need not coordinate presets",
      "Full house light on the screen destroys contrast, so lighting presets and AV control must dim the right zones together",
      "The AV designer should avoid consulting the lighting designer and leave all preset issues to be resolved during commissioning",
      "Brighter rooms always improve the viewing experience, so driving house lights to full is the correct video-playback preset"
    ],
    "correct": 1,
    "explanation": "CTS-D Duty B Task 1: lighting zones over the screen vs. over the audience must be separately controllable and coordinated with AV presets. This is agreed on drawings and in the sequence of operations — not discovered at commissioning."
  },
  {
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B4",
    "q": "The client's IT security team requires 802.1X authentication and MACsec on all switch ports the AV system will use. When should this surface in the design process?",
    "options": [
      "At commissioning, when the AV devices fail to authenticate and the failed connections stall the whole project",
      "During design coordination with IT security — it shapes device selection, switch configuration and the schedule",
      "Never — AV devices are exempt from the client’s IT security policy and may simply be whitelisted on request",
      "After the client signs off on the finished system, as a punch-list item for the security team to resolve"
    ],
    "correct": 1,
    "explanation": "CTS-D Duty B Task 4: network security requirements discovered at commissioning cause weeks of delay. The designer coordinates with IT early: which devices support 802.1X supplicants, who configures the switch, and what the InfoSec review timeline is."
  },
  {
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B5",
    "q": "The acoustical consultant specifies NC-25 for a videoconferencing suite. What does this mean for your microphone and DSP design?",
    "options": [
      "Nothing — NC ratings are purely an architectural and HVAC concern, so microphone selection, placement, and AEC tuning can proceed without reference to the noise criterion",
      "The background noise target is very low, so microphone placement and AEC can assume a quiet room; if the room can't meet NC-25, you must design for the actual noise floor",
      "NC-25 means 25 microphones are required by code for any videoconferencing suite, with one microphone per 25 square feet of floor area regardless of table layout",
      "Louder program loudspeakers are required to overcome NC-25, so the design should specify higher-SPL speakers that can mask the room's very low background noise"
    ],
    "correct": 1,
    "explanation": "CTS-D Duty B Task 5: Noise Criterion ratings set the room's background noise target. NC-25 is quiet (good for conferencing). The designer must confirm the HVAC and envelope can actually achieve it — designing AEC and mic coverage for NC-25 in an NC-40 room guarantees complaints."
  },
  {
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B6",
    "q": "Your design includes ceiling speakers in a plenum air-handling space and cable above the ceiling. What life-safety coordination items apply?",
    "options": [
      "No coordination is required — low-voltage AV equipment is entirely exempt from life-safety and building code review",
      "Plenum-rated cable, coordination with the fire alarm/mass notification interface, and verifying speaker back-cans don't violate fire separation",
      "Only the cable jacket color matters for code compliance, provided it visually matches the ceiling tiles and the metal trim throughout the plenum space",
      "Life-safety rules apply solely to the electrical contractor, so AV speakers and cable need no fire or code review at all"
    ],
    "correct": 1,
    "explanation": "CTS-D Duty B Task 6: low voltage doesn't mean no life-safety impact. Plenum spaces require plenum-rated cable, penetrations need firestopping, and in many jurisdictions the AV system must mute or override for emergency notification. Coordinate with the fire protection engineer."
  },
  {
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B1",
    "q": "When in the project timeline should the AV designer engage the architect and other trades?",
    "options": [
      "After the AV design is finished, so the trades can price it from complete drawings",
      "As early as possible: conduit, backing, power and cooling are cheapest before drywall closes",
      "During commissioning, when the actual field conditions of the room are finally known for certain",
      "Never directly, since coordinating the trades is the general contractor's job alone"
    ],
    "correct": 1,
    "explanation": "Early coordination is the whole point of Duty B. A backbox added on paper costs dollars; the same backbox cut into finished drywall with repainting costs hundreds and a schedule fight."
  },
  {
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B1",
    "q": "The millwork shop drawings show a credenza 18 inches deep for the rack. Your rack needs 30 inches with service clearance. What is the correct action?",
    "options": [
      "Order a shallower rack than the one specified and just hope the reduced depth still allows adequate airflow and service access",
      "Issue the dimensional conflict to the architect/millworker in writing during submittal review, with the required clearances",
      "Cut the back off the credenza on site during installation to force the rack into the shallow cabinet",
      "Abandon the credenza location and leave the equipment rack standing in the hallway outside the room"
    ],
    "correct": 1,
    "explanation": "Submittal review is where dimensional conflicts are caught on paper. The designer provides cut sheets with required depth, ventilation, and service access — and formally flags conflicts. Field surgery on custom millwork is the expensive alternative."
  },
  {
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B1",
    "q": "Floor boxes for table connectivity must land under a 20-foot conference table. Whose drawings determine the final location?",
    "options": [
      "The AV designer's drawings alone determine the location, since the furniture and electrical plans always conform to the AV floor plan",
      "It must be coordinated across the furniture plan, the electrical drawings, and the AV infrastructure drawings — all three must agree",
      "The installer's best guess on site is sufficient, because floor boxes can be relocated easily after the concrete is poured",
      "Whoever pours the concrete decides the location, so AV and electrical must accept wherever the box lands under the table"
    ],
    "correct": 1,
    "explanation": "Floor boxes are a classic three-trade collision: furniture layout, power, and AV. The designer cross-checks all three documents and issues a coordinated location. A box a foot off the table center is a permanent, visible failure."
  },
  {
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B1",
    "q": "A wall-mounted touch panel is drawn at 60 inches to center in a public corridor. What coordination issue exists?",
    "options": [
      "No coordination issue exists — 60 inches to center is the universal mounting standard for touch panels in every public corridor",
      "ADA reach-range rules generally cap operable controls at 48 inches for forward reach, so the mount must come down",
      "Touch panels are exempt from ADA — accessibility reach ranges apply only to door hardware and public drinking fountains",
      "Higher mounting is always better — visibility improves with height, so the panel should be raised rather than lowered"
    ],
    "correct": 1,
    "explanation": "ADA Standards set maximum reach ranges (48\" for unobstructed forward reach) for operable parts. The designer coordinates mounting heights with the architect so the installation is both usable and code-compliant."
  },
  {
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B6",
    "q": "The security consultant's camera layout and your videoconference camera layout both cover the boardroom. Why coordinate rather than work independently?",
    "options": [
      "There is no benefit to coordination, because AV and security systems operate on completely separate networks with no shared infrastructure",
      "Shared pathways, power and network, consistent privacy expectations, and no duplicate ceiling devices all need one plan",
      "AV videoconference cameras can fully replace security cameras, so the security consultant's layout should be deleted from the project",
      "Security always takes priority over AV, so the videoconference layout must be abandoned wherever it overlaps the camera coverage plan"
    ],
    "correct": 1,
    "explanation": "Overlapping trades without coordination means doubled conduit runs, conflicting privacy policies, and a ceiling cluttered with redundant devices. One coordinated RCP and pathway plan serves both systems."
  },
  {
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B2",
    "q": "Structural drawings show open-web steel joists where you planned to mount a projector. The joist bottom is 6 inches above your planned mount point. What do you do?",
    "options": [
      "Mount to the joist anyway, using longer bolts and a drop pipe to make up the 6 inches",
      "Detail a structural attachment, such as a unistrut bridge across the joists, for engineer review",
      "Hang the projector from the ceiling grid, which is already rated to carry the weight of light fixtures",
      "Move the projector to the nearest joist and mount it there without re-checking the throw"
    ],
    "correct": 1,
    "explanation": "Never improvise structural attachments. The designer details a proper spanning support and routes it through structural review. Ceiling tile grid is never a structural support."
  },
  {
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B3",
    "q": "What is the AV designer's deliverable to the electrical engineer for a divisible ballroom with three AV racks?",
    "options": [
      "A verbal estimate of ‘a lot of power’ — telling the electrical engineer the racks need plenty of juice is sufficient for proper circuit sizing",
      "A written electrical requirements package: connected load per rack, dedicated circuits, receptacle locations, and isolated-ground or sequencing needs",
      "The equipment owner’s manuals — handing the electrical engineer a full stack of manufacturer manuals completely covers the power coordination requirement",
      "Nothing — the EE sizes everything — electrical engineers automatically know every AV power requirement, so the AV designer provides zero input"
    ],
    "correct": 1,
    "explanation": "The electrical engineer can't size what they don't know. The designer provides load calcs, circuit schedules, and special requirements in the construction documents so power is right the first time."
  },
  {
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "D",
    "task": "D1",
    "q": "During a coordination meeting, the GC says AV conduit can go in 'after the drywall.' What is the risk, and how do you respond?",
    "options": [
      "Agree — it saves time — installing conduit after drywall is faster since the crew can see the finished surfaces",
      "Reply in writing that rough-in after drywall means cutting and patching, adds cost and delay, and needs a formal decision",
      "Install wireless everything instead — drop all conduit and run the entire AV system on Wi-Fi, eliminating the rough-in conflict",
      "Skip the conduit — surface-raceway and exposed cable are acceptable substitutes, so the conduit can be deleted from the scope"
    ],
    "correct": 1,
    "explanation": "Sequence matters: AV rough-in belongs before drywall close-up. If the schedule forces otherwise, the cost and patching responsibility must be documented and agreed — not absorbed silently by the AV contractor."
  },
  {
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C3",
    "q": "The architect asks you to 'just mark up our PDF' instead of producing AV drawings. Why should the AV designer still produce dedicated infrastructure and system drawings?",
    "options": [
      "Markups are sufficient for construction — a redlined PDF carries the same contractual weight as dedicated AV drawings, so producing a full drawing set adds no value",
      "Dedicated AV drawings (conduit and backbox plans, risers, rack elevations, AV ceiling plans) are the contract documents installers build from; markups are ambiguous",
      "PDFs can’t be printed — redlined markups exist only as digital files that cannot be printed, so the installer has no buildable documents without dedicated drawings",
      "Architects prefer markups — the design team explicitly forbids dedicated AV drawing sets, so redlined markups are the only deliverable the contract allows"
    ],
    "correct": 1,
    "explanation": "CTS-D Duty C Task 3: AV infrastructure and system drawings are formal deliverables — they define pathways, device locations, wiring, and rack build. A redline on someone else's PDF is not a buildable, biddable document set."
  },
  {
    "domain": "CTS-D: AV System Design",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C1",
    "q": "You are designing speech reinforcement for a 200-seat fan-shaped auditorium. Which loudspeaker approach best delivers even coverage?",
    "options": [
      "Two large loudspeakers at the front corners of the room, aimed straight ahead at the center of the seating",
      "A distributed or properly splayed system designed for ±3 dB coverage, verified in prediction software",
      "One large center cluster run at high level so its sound reaches all the way to the back rows",
      "Loudspeakers along the side walls only, so every seat is close to a source on one side"
    ],
    "correct": 1,
    "explanation": "Even coverage (±3 dB) is the design target for speech. In a fan-shaped room, a single pair of point-source boxes leaves the sides starved and the center hot. Distributed ceiling speakers or a designed array, modeled in prediction software, delivers consistent intelligibility to every seat."
  },
  {
    "domain": "CTS-D: AV System Design",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C1",
    "q": "A boardroom table seats 12 and will use ceiling microphones for soft-codec conferencing. What is the critical design consideration?",
    "options": [
      "Ceiling microphones work in any room without further design — microphone placement and room acoustics need no engineering attention whatsoever",
      "Every talker must be within a mic's pickup range in a room with controlled reverb and noise — typically one mic per 2–3 talkers, with AEC",
      "More microphones always equals better audio, so pack as many elements as possible across the ceiling and let them sum naturally for maximum pickup",
      "Ceiling microphones eliminate the need for a DSP entirely — no acoustic echo cancellation, automixing, or other processing is required at all"
    ],
    "correct": 1,
    "explanation": "Ceiling mics are not magic: pickup distance (usually 8–12 ft), room RT60, and HVAC noise determine performance. The design places enough elements to cover every seat and pairs them with acoustic echo cancellation referenced to the far-end audio."
  },
  {
    "domain": "CTS-D: AV System Design",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C1",
    "q": "For a videoconference room, the farthest viewer sits 18 feet from the display. What is the design rule for minimum image size?",
    "options": [
      "Any display size works as long as the resolution is 4K, since pixel density fully replaces image-height rules and guarantees legibility at any distance",
      "The farthest viewer should be no more than 4–6 times the image height away (AVIXA DISCAS guidance), so content like spreadsheets remains legible",
      "Bigger is always better regardless of viewing distance, so always specify the largest display that physically fits the wall",
      "Image size doesn't matter for video calls, because participants mostly watch the far end on their own laptop screens"
    ],
    "correct": 1,
    "explanation": "AVIXA's DISCAS standard ties image height to viewing distance: basic decision-making content is legible to about 6x image height; detailed content (spreadsheets) needs ~4x. At 18 ft, you need roughly a 4.5-ft-tall image — about a 98-inch 16:9 display."
  },
  {
    "domain": "CTS-D: AV System Design",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C1",
    "q": "A client wants to display one 4K source on four 1080p displays in a video wall. What must the design address?",
    "options": [
      "Nothing — any consumer HDMI splitter will automatically downscale, manage EDID, and strip HDCP for a mixed-resolution video wall",
      "Downscaling per output, EDID management so the source outputs a compatible format, HDCP compliance across the chain, and bezel compensation",
      "Just buy longer active HDMI cables for each display, since cable length is the only factor in distributing 4K to 1080p screens",
      "4K sources cannot feed 1080p displays at all, so the client must replace the source with a native 1080p media player for the whole video wall"
    ],
    "correct": 1,
    "explanation": "Mixed-resolution distribution requires deliberate design: the switcher/scaler must downscale 4K to 1080p per output, EDID must be managed so the source negotiates correctly, and HDCP must be supported end-to-end or content goes black."
  },
  {
    "domain": "CTS-D: AV System Design",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C1",
    "q": "You are designing control for a divisible room with three modes: whole, A/B split, and separate. What is the key control design principle?",
    "options": [
      "One fixed panel layout for all three modes, so users only ever learn a single interface that never changes regardless of the partition state",
      "The UI must follow the room state — separate controls when split, combined when whole — with a clear mode indicator and no dead buttons",
      "Give every user the admin password right on the touch panel, since full system access for everyone eliminates all confusion about room modes",
      "Control systems can't handle divisible rooms at all, so each space needs a completely separate control processor and user interface"
    ],
    "correct": 1,
    "explanation": "Divisible-room control is a classic design problem: the interface must dynamically match the acoustic reality. Show only the controls valid for the current partition state, indicate the mode clearly, and prevent Room A from changing Room B's volume."
  },
  {
    "domain": "CTS-D: AV System Design",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B4",
    "q": "An enterprise wants 50 Dante-enabled rooms on the corporate network. What must the AV design specify for the network?",
    "options": [
      "Any unmanaged switch will do — Dante auto-configures QoS, multicast routing, and clocking on any hardware with zero setup",
      "Managed switches with QoS/DSCP for PTP and audio, IGMP snooping and a querier for multicast, enough bandwidth, and VLANs agreed with IT",
      "Dante needs no network configuration at all — plug every device into any available switch and the multicast flows will route themselves perfectly",
      "Standard office Wi-Fi is fine for Dante — wireless access points handle PTP clocking and multicast audio with no dropouts"
    ],
    "correct": 1,
    "explanation": "Dante is real-time audio over IP: it needs QoS prioritizing PTP clocking, IGMP snooping so multicast doesn't flood every port, and gigabit (or better) backbones. The AV designer specifies these switch requirements for IT — 'the network just works' is not a design."
  },
  {
    "domain": "CTS-D: AV System Design",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C1",
    "q": "A lecture hall needs both in-room reinforcement and a separate record/stream mix. How should the DSP be designed?",
    "options": [
      "One mix fits all purposes — the in-room reinforcement feed is ideal for the stream, since remote viewers want to hear exactly what the room hears",
      "Separate mix buses: a reinforcement mix tuned for the room and a discrete stream/record mix with its own EQ, levels and audience-mic balance",
      "Just turn up the room mics for the stream — pushing the audience mics hotter in the reinforcement mix produces a complete broadcast-ready stream",
      "Streaming doesn’t need audio design — remote viewers accept any audio quality, so the stream can tap the room reinforcement feed with no dedicated engineering"
    ],
    "correct": 1,
    "explanation": "Room reinforcement and streaming are different products: the room needs the lecturer over the PA; the stream needs lecturer + audience questions at broadcast balance. The DSP design provides independent mixes, each with its own processing."
  },
  {
    "domain": "CTS-D: AV System Design",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C1",
    "q": "When designing a streaming encoder workflow for town halls, what must be specified beyond the encoder itself?",
    "options": [
      "Nothing beyond the encoder itself — modern encoders are plug-and-play and negotiate the entire streaming workflow automatically",
      "Target bitrate/resolution per platform, network uplink capacity, CDN or platform destination, redundancy, and monitoring",
      "Only the encoder's exterior color matters, so the streaming hardware matches the rack's overall aesthetic",
      "Streaming workflows never require redundancy — one encoder and one ISP connection are always sufficient"
    ],
    "correct": 1,
    "explanation": "A stream design is end-to-end: 1080p to a CDN needs ~6–8 Mbps of reliable uplink per stream; the design specifies bitrates, primary/backup paths, and how anyone knows the stream died. An encoder with no uplink plan is a paperweight."
  },
  {
    "domain": "CTS-D: AV System Design",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C1",
    "q": "A museum gallery has 85 dBA ambient noise from interactive exhibits. What does this demand of the audio design for a narration system?",
    "options": [
      "Standard ceiling speakers at normal levels — a typical 70V ceiling speaker layout at conversation volume stays fully intelligible even over 85 dBA of exhibit noise",
      "Reaching ~10–15 dB signal-to-noise takes directional speakers, zoned levels, maybe exhibit noise control; if physics won't allow it, reset expectations",
      "Just add more speakers — doubling the speaker count doubles intelligibility, so a dense enough ceiling speaker grid overcomes any ambient noise level",
      "Narration systems work in any noise — speech intelligibility is independent of background noise level, so loud galleries need no special audio design"
    ],
    "correct": 1,
    "explanation": "Intelligibility needs signal comfortably above noise. At 85 dBA ambient, narration needs ~95–100 dBA at the listener — potentially unsafe and impractical. The designer must confront this with directional audio, zoning, or honest expectation-setting, not wishful speaker counts."
  },
  {
    "domain": "CTS-D: AV System Design",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C1",
    "q": "You must choose between projection and direct-view LED for a bright atrium with 24/7 operation. What drives the decision?",
    "options": [
      "Purchase price alone (projection always wins), the projector's lamp wattage, fan noise level, and whichever vendor returns calls the fastest",
      "Ambient light level (LED wins in high ambient), duty cycle and maintenance (LED has no lamps/filters), viewing angles, and total cost of ownership",
      "Brand prestige (LED always wins), pixel pitch alone, the architect's favorite bezel finish, and whichever trade-show booth the client visited last",
      "Whichever technology the installer has in stock, throw distance alone, the remote control's battery life, and the color of the display bezel"
    ],
    "correct": 1,
    "explanation": "High ambient light kills projected contrast; 24/7 operation kills lamp/filter maintenance budgets. Direct-view LED costs more upfront but holds contrast in bright spaces and runs maintenance-light. The design compares total cost of ownership, not just purchase price."
  },
  {
    "domain": "CTS-D: AV System Design",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C3",
    "q": "A global company wants identical Teams Room experiences in 200 rooms across 30 countries. What is the central design strategy?",
    "options": [
      "Let each region design its rooms independently from scratch, since local engineers always understand their needs better than any central standard",
      "A standardized room kit — fixed BOM, standard control UI, standard network/security profile — with documented regional variants for power, code, and sourcing",
      "Buy whatever is cheapest from local suppliers per room, because per-room cost savings always outweigh the benefits of an identical user experience",
      "Standards don't scale globally across different countries, so identical room experiences are impossible given the wide variation in local codes and supply chains"
    ],
    "correct": 1,
    "explanation": "Scale demands standardization: one kit, one UI, one support playbook. The design defines the standard plus the allowed regional deltas (230V power, local codes, approved alternates). Without it, 200 rooms become 200 snowflakes."
  },
  {
    "domain": "CTS-D: AV System Design",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C1",
    "q": "In a courtroom, the judge requires that attorney microphones NEVER feed the public address when in recess. How is this designed?",
    "options": [
      "Trust the operator to mute — the court reporter watches the proceedings and mutes the attorneys’ microphones at the mixer whenever recess is called",
      "A positive-action privacy mute, such as a keyswitch or control logic that removes the mics from every output including record, with clear status",
      "Turn the volume down — the operator lowers the PA master fader during recess, which keeps the attorney microphones out of the public address feed",
      "Courtrooms don’t need special design — standard conference audio handles recess privacy adequately, since the attorneys simply stop talking when recess begins"
    ],
    "correct": 1,
    "explanation": "Privacy in sensitive spaces must be engineered, not procedural. The design provides a deterministic mute (separate from the operator's fader) with visible status, so 'is the mic live?' is never a guess."
  },
  {
    "domain": "CTS-D: AV System Design",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C1",
    "q": "What is the purpose of a DSP's acoustic echo canceller (AEC) in a soft-codec room, and what does it require?",
    "options": [
      "It boosts the room's loudspeaker output so the far end hears it louder; it requires bridging larger power amplifiers directly onto every microphone channel",
      "It removes the far end's own audio, played through the room speakers, from the mic signal so remote participants hear no echo; it needs a clean far-end reference",
      "It digitally erases all background noise in the room, including HVAC rumble; it requires mounting every microphone within six inches of the talker's mouth",
      "It only functions in auditoriums seating 500 or more; it requires a second dedicated DSP frame running nothing but the acoustic echo cancellation process"
    ],
    "correct": 1,
    "explanation": "AEC compares the mic signal against a reference of what the loudspeakers are playing and subtracts it. No reference (or a reference tapped after processing changes) = echo for the far end. The design must route a proper AEC reference for every mic channel."
  },
  {
    "domain": "CTS-D: AV System Design",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C1",
    "q": "A performing arts center needs a system that visiting engineers can walk up to and mix on with no training. What design approach serves this?",
    "options": [
      "A fully custom DSP layout with a unique workflow that guest engineers can explore and master during soundcheck",
      "Industry-standard console surfaces and documented, conventional signal flow — familiarity is the feature",
      "The lowest-cost analog mixer available, since visiting engineers adapt quickly to whatever hardware is cheapest",
      "No physical console at all — an iPad app handles the mix, since guest engineers prefer touchscreen-only control"
    ],
    "correct": 1,
    "explanation": "For guest-operator venues, the design optimizes for zero-learning-curve: standard console layouts, labeled patch, conventional gain structure. Clever custom workflows that confuse a visiting engineer at soundcheck are a design failure."
  },
  {
    "domain": "CTS-D: AV System Design",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C1",
    "q": "You are designing BYOD wireless presentation for a university. What are the key design decisions?",
    "options": [
      "Pick any consumer dongle — any $30 streaming stick performs identically in an enterprise deployment, so network, security, and protocol decisions are unnecessary",
      "Network architecture (dedicated VLAN/SSID or corporate LAN), security and onboarding, supported protocols (AirPlay/Miracast/Cast), latency and management",
      "Wireless presentation has no design considerations — BYOD sharing behaves identically on every network, so the designer need specify nothing at all",
      "Only the button color matters — the share button’s color is the designer’s sole BYOD decision; network architecture and security belong to the client"
    ],
    "correct": 1,
    "explanation": "Enterprise wireless presentation is a network and security design: how guests onboard, which VLAN carries the traffic, whether mDNS traverses subnets, and what latency is acceptable for video. The dongle is the last decision, not the first."
  },
  {
    "domain": "CTS-D: AV System Design",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C1",
    "q": "A 2,000-seat arena needs emergency voice evacuation override of the entertainment audio system. What is the design requirement?",
    "options": [
      "The operator will turn it down in an emergency — the house audio engineer manually ducks the entertainment system when the fire alarm sounds",
      "A supervised, fail-safe override — relay or DSP logic that forces evacuation audio to every zone regardless of system state, tied to the fire alarm panel",
      "Louder entertainment speakers — the evacuation requirement is satisfied by specifying entertainment speakers loud enough to double as the emergency alarm",
      "Emergency override is optional — voice evacuation may share the entertainment audio path with no dedicated override, at the designer’s discretion"
    ],
    "correct": 1,
    "explanation": "Life-safety override must be automatic, supervised (faults reported), and independent of operator action or entertainment system state. The design coordinates the interface with the fire alarm system and documents it for the AHJ."
  },
  {
    "domain": "CTS-D: AV System Design",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C1",
    "q": "What is 'gain structure' and why does the designer care before the installer touches a knob?",
    "options": [
      "It is the installer’s problem — gain staging is purely field work; the designer never specifies nominal levels, and the drawings carry no gain-structure information",
      "Staging signal levels through each device (mic → preamp → DSP → amp) for maximum signal-to-noise without clipping; the designer sets nominal levels and headroom",
      "It means turning everything up — proper gain structure means maximizing every gain stage in the chain, since hotter signals always produce better sound",
      "Gain structure only applies to analog systems — digital DSPs and amplifiers self-optimize their internal levels, so gain staging is irrelevant in digital signal chains"
    ],
    "correct": 1,
    "explanation": "Gain structure is designed, not discovered: each stage should operate in its linear range with ~12–20 dB of headroom. The designer documents target levels (e.g., 0 dBu nominal, +24 dBu clip) so commissioning verifies rather than guesses."
  },
  {
    "domain": "CTS-D: AV System Design",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C1",
    "q": "A client wants to add 20 networked AV endpoints next year without new switch hardware. What should the design include now?",
    "options": [
      "Nothing — deal with it next year — switches can be swapped and recabled in a day, so planning for growth wastes design effort",
      "Spare switch ports, PoE budget headroom, a documented VLAN/IP plan with reserved addresses, and pathway space for growth",
      "A note saying ‘good luck’ — a documented warning that expansion will require new hardware satisfies the designer’s obligation",
      "Wireless for everything — future endpoints will all be wireless, so wired port capacity and PoE budgets need no planning"
    ],
    "correct": 1,
    "explanation": "Scalability is a design deliverable: 20–30% spare ports, PoE budget with margin, an IP plan with room to grow, and empty conduit. Retrofitting capacity later costs multiples of designing it in."
  },
  {
    "domain": "CTS-D: AV System Design",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C1",
    "q": "For a video wall with a 1.2mm pixel pitch viewed from 10 feet, what design check matters most?",
    "options": [
      "The wall’s weight only — structural loading is the sole design check that matters; pixel pitch has no relationship to viewing distance or perceived image quality",
      "Pixel pitch vs. viewing distance: at 10 ft, ~1.2mm is near retina resolution, so finer pitch wastes budget and coarser pitch shows pixels",
      "Brighter is always better — specify the highest-nit panels available; brightness is the only specification that affects what the viewer perceives at 10 feet",
      "Pixel pitch is marketing — pitch specifications are manufacturer hype with no engineering basis, so a 1.2mm and a 4mm wall look identical from 10 feet"
    ],
    "correct": 1,
    "explanation": "LED pitch should match the closest viewing distance: a common rule is ~1mm pitch per 3–4 feet of viewing distance (some use 1mm per 8 ft for critical viewing). At 10 ft, 1.2–1.5mm is appropriate; finer pitch in a lobby viewed from 15 ft is money burned."
  },
  {
    "domain": "CTS-D: AV System Design",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C1",
    "q": "A house of worship wants to livestream with volunteer operators. What is the most robust design approach?",
    "options": [
      "A full-featured manual vision switcher with 12 inputs, which the volunteers can learn to operate reliably over several consecutive Sunday services",
      "Automated/simple workflows: preset camera shots, automix on microphones, one-button stream start/stop, and remote monitoring so a pro can assist",
      "No formal design work is needed — volunteers will naturally figure out the cameras and the stream on their first Sunday",
      "Ban all volunteers from touching any of the equipment and require a professionally paid operator at every single service"
    ],
    "correct": 1,
    "explanation": "Volunteer-operated systems must be designed for the lowest skill level present: automation (automix, presets), single-button operations, and remote oversight. Complexity that requires a trained operator every Sunday is a design that fails most Sundays."
  },
  {
    "domain": "CTS-D: AV System Design",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C3",
    "q": "What is the design purpose of a 'tech table' or operator position in a multi-purpose venue?",
    "options": [
      "It is decorative — the tech table is a furniture showpiece for the room’s design photos and carries no power, network, or sightline requirements",
      "A defined spot with power, network, audio and data tie-lines, and sightlines to the room, so operators can mix, present or troubleshoot well",
      "A place to store cables — the tech table is primarily spare-cable storage with a work surface, so it needs no power, network, or sightlines",
      "Only large arenas need one — tech tables exist only in stadiums; multi-purpose venues operate fine with the operator tucked in a back hallway"
    ],
    "correct": 1,
    "explanation": "The operator position is infrastructure: floor boxes with power/data/audio tie-lines at the mix position, in the drawings, roughed in during construction. Mixing from a random corner with extension cords is what happens when it isn't designed."
  },
  {
    "domain": "CTS-D: AV System Design",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C1",
    "q": "When designing for HDCP-protected content (Blu-ray, streaming sticks) across a distributed system, what must be true?",
    "options": [
      "HDCP works automatically over any extender or matrix, so the design needs no HDCP planning as long as the source is HDCP-compliant",
      "Every device in the chain (switcher, extender, display) must support the required HDCP version, within key limits and repeater depth",
      "HDCP can be ignored entirely in commercial systems, since content protection rules only apply to residential home theater installations",
      "Only the display's HDCP version matters; switchers, extenders, and scalers pass the encrypted signal through without participating"
    ],
    "correct": 1,
    "explanation": "HDCP is a chain-of-trust: one non-compliant device or an exceeded repeater/key limit blacks the whole path. The designer verifies HDCP versions end-to-end and designs EDID/HDCP management rather than hoping the chain negotiates."
  },
  {
    "domain": "CTS-D: AV System Design",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C1",
    "q": "A corporate lobby wants a 'wow' video wall but the facilities team has no AV staff. What should the design prioritize?",
    "options": [
      "The most complex system possible — maximum features and manual controls give the facilities team the most options, even with no AV staff on site",
      "Remote monitoring and management, automated on/off scheduling, a simple content workflow, and a service contract — operable without local staff",
      "A bigger wall — the wow factor scales with size alone, so the design should maximize square footage and skip the management features",
      "Manual operation only — a fully manual system with no automation is cheapest, and the facilities team will learn the controls quickly"
    ],
    "correct": 1,
    "explanation": "Designing for zero local staff means the system must run itself: astronomical-clock scheduling, SNMP/cloud monitoring with alerts, and content updates a marketing person can do. The design includes the service model, not just the hardware."
  },
  {
    "domain": "CTS-D: AV System Design",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C1",
    "q": "Why would a designer specify Dante Domain Manager or a similar management platform for a campus deployment?",
    "options": [
      "It makes audio sound better — Domain Manager applies enhancement algorithms that improve Dante audio fidelity and reduce latency",
      "Central authentication, role-based access, audit logging, and managed routing across subnets — what IT policy demands at campus scale",
      "It is required for all Dante systems — every Dante network, even two devices, must run Domain Manager or audio will not pass",
      "It replaces the DSP — Domain Manager performs all mixing, EQ, and processing, so the hardware DSP can be removed from the design"
    ],
    "correct": 1,
    "explanation": "At campus scale, unmanaged Dante is an IT security finding. A management platform provides user authentication, change auditing, and routed (unicast) audio across subnets — the design answers IT's governance questions before they're asked."
  },
  {
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C1",
    "q": "A projector with a 1.5–2.0:1 throw ratio lens must fill a 10-foot-wide screen. What is the allowable projector-to-screen distance range?",
    "options": [
      "5 to 6.7 feet (image width ÷ throw ratio)",
      "15 to 20 feet (throw ratio × image width)",
      "8.4 to 11.3 feet (throw ratio × image height)",
      "15 feet or more; zoom covers any longer throw"
    ],
    "correct": 1,
    "explanation": "Throw distance = throw ratio × image width. 1.5 × 10 ft = 15 ft minimum; 2.0 × 10 ft = 20 ft maximum. The projector must mount within this window — a mount point at 25 ft needs a different lens."
  },
  {
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C1",
    "q": "Per AVIXA DISCAS, the farthest viewer of detailed content (spreadsheets, CAD) should be within what multiple of image height?",
    "options": [
      "12x image height",
      "4x image height",
      "8x image height",
      "Distance doesn't matter with 4K"
    ],
    "correct": 1,
    "explanation": "DISCAS (Display Image Size for 2D Content in Audiovisual Systems) sets 4x image height for analytical decision-making (detailed content), 6x for basic decision-making. A 24-ft viewing distance for spreadsheets needs a 6-ft-tall image (~137-inch 16:9)."
  },
  {
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C1",
    "q": "A loudspeaker produces 90 dB SPL at 1 meter. What is the level at 8 meters in a free field?",
    "options": [
      "84 dB SPL",
      "72 dB SPL",
      "78 dB SPL",
      "66 dB SPL"
    ],
    "correct": 1,
    "explanation": "Inverse Square Law: −6 dB per doubling of distance. 1m→2m: 84; 2m→4m: 78; 4m→8m: 72 dB SPL. Three doublings = 18 dB of loss. This is why distant seats need distributed or delayed loudspeakers."
  },
  {
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C1",
    "q": "Doubling amplifier power to a loudspeaker yields approximately what SPL increase?",
    "options": [
      "+6 dB",
      "+10 dB",
      "+3 dB",
      "+1 dB"
    ],
    "correct": 2,
    "explanation": "Doubling electrical power = +3 dB (a just-noticeable increase). +10 dB — perceived as 'twice as loud' — requires TEN times the power. This is why amplifier headroom and speaker sensitivity matter more than raw watts."
  },
  {
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C1",
    "q": "What is the approximate uncompressed bandwidth of 4K60 4:4:4 video (8-bit)?",
    "options": [
      "1.5 Gbps",
      "6 Gbps",
      "About 15 Gbps",
      "48 Gbps"
    ],
    "correct": 2,
    "explanation": "The CTS-D formula sheet gives R = H × V × C × 1.25 × FPS × 3 = 3840 × 2160 × 8 × 1.25 × 60 × 3 ≈ 14.9 Gbps. The active pixels alone are about 11.9 Gbps; on HDMI 2.0, blanking and TMDS encoding push the link to about 17.8 of its 18 Gbps. Either way, uncompressed 4K60 needs more than a 10 Gbps link.",
    "ref": "AVIXA CTS-D formula sheet (2024), Digital Video Data Rate"
  },
  {
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C3",
    "q": "NEC conduit fill for more than two cables is limited to what percentage of the conduit's cross-section?",
    "options": [
      "100%",
      "53%",
      "40%",
      "25%"
    ],
    "correct": 2,
    "explanation": "NEC Chapter 9: 40% fill for 3+ conductors/cables (53% for one, 31% for two). AV designers size conduit for the cable bundle at 40% fill — and specify pull boxes so no run exceeds the practical pull length."
  },
  {
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C1",
    "q": "An AV rack's equipment draws 2,500 watts continuously. What cooling load must the HVAC design handle for this rack?",
    "options": [
      "Approximately 2,500 BTU/hr (1 watt = 1 BTU/hr)",
      "Approximately 8,500 BTU/hr (watts × 3.4)",
      "Approximately 735 BTU/hr (watts ÷ 3.4)",
      "None; rack fans exhaust the heat to the room"
    ],
    "correct": 1,
    "explanation": "Essentially all consumed electrical power becomes heat. The CTS-D formula sheet uses BTU/hr = watts × 3.4 (the exact factor is 3.412): 2,500 × 3.4 = 8,500 BTU/hr, roughly 0.7 tons of cooling. The designer gives this number to the mechanical engineer."
  },
  {
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C1",
    "q": "A 16:9 display has a 60-inch diagonal. What is its image width?",
    "options": [
      "60 inches — image width always equals the diagonal",
      "Approximately 52.3 inches (diagonal × 0.871)",
      "48 inches — a 60-inch 16:9 diagonal is 48 wide",
      "36 inches — width equals 60% of the diagonal"
    ],
    "correct": 1,
    "explanation": "For 16:9, width = diagonal × 0.871 and height = diagonal × 0.490. A 60\" diagonal is ~52.3\" wide × 29.4\" tall. Designers use this constantly for throw, viewing, and millwork coordination."
  },
  {
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C1",
    "q": "What is the maximum recommended viewing angle (horizontal) for the farthest off-axis seat to a flat display?",
    "options": [
      "90 degrees — viewers at 90° off-axis see full image quality, so seating may wrap fully around the display",
      "45 degrees off-axis (viewers beyond ~45° from perpendicular see degraded image and glare)",
      "10 degrees — only viewers within 10° of perpendicular get a usable image; all seats must face dead-on",
      "Viewing angle doesn’t matter — off-axis viewers see identical brightness and color at any angle"
    ],
    "correct": 1,
    "explanation": "AVIXA guidance: viewers seated more than ~45° off the display's perpendicular axis get poor contrast and color shift (worse on VA panels). The design checks the worst seat — wide rooms may need multiple or angled displays."
  },
  {
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C1",
    "q": "An amplifier rated 500W per channel will drive loudspeakers rated 250W continuous. What headroom concern applies?",
    "options": [
      "No concern exists — amplifiers always self-limit to the connected speaker's rating, so any extra headroom above 250W is automatically safe",
      "The amplifier can deliver twice the speaker's continuous rating, so the design must add limiting (DSP or amp) to protect the drivers",
      "Speakers are immune to damage from clean, unclipped power — only distorted signals harm drivers, no matter how much wattage is delivered",
      "The only safe fix is a smaller amplifier — headroom must never exceed the speaker's continuous rating or the manufacturer's warranty is void"
    ],
    "correct": 1,
    "explanation": "Headroom is good (amplifier clipping destroys drivers faster than clean power), but 2x continuous power into the speakers demands properly set limiters. The designer specifies limiter thresholds — typically based on the speaker's peak rating and measured voltage."
  },
  {
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C1",
    "q": "How many uncompressed 1080p60 video streams (~3 Gbps each) fit on a 10 Gbps AV-over-IP link?",
    "options": [
      "10, one stream per gigabit",
      "3, with headroom for overhead",
      "4, since overhead is negligible",
      "Unlimited, as multicast is free"
    ],
    "correct": 1,
    "explanation": "3 Gbps × 3 = 9 Gbps — three streams saturate a 10G link before overhead. The designer counts real bitrates against real link capacity; 'it'll probably fit' is how networks collapse during the all-hands."
  },
  {
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C1",
    "q": "A projector outputs 6,000 lumens onto a 120 sq ft screen (gain 1.0). What is the approximate screen luminance in foot-lamberts?",
    "options": [
      "6,000 fL (no division)",
      "50 fL (lumens ÷ area)",
      "120 fL (screen area only)",
      "720 fL (lumens ÷ gain)"
    ],
    "correct": 1,
    "explanation": "Foot-lamberts = (lumens × screen gain) ÷ screen area in sq ft. 6,000 ÷ 120 = 50 fL — a solid brightness for a dimmed room. In high ambient light, the designer compares this against the ambient washing the screen to check contrast."
  },
  {
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C1",
    "q": "Cat6A cable has a 90-meter permanent link limit (100m channel). A design shows a 130-meter horizontal run to a projector. What is the correct response?",
    "options": [
      "It’s close enough — install it — 130 meters is near enough to the 100m limit that the link will certify",
      "Redesign: add an IDF, switch to fiber, or move the endpoint — copper cannot be stretched past its limit",
      "Use Cat5e instead — Cat5e has a longer distance rating than Cat6A, so swapping cable types solves the 130m run",
      "Boost the signal with a bigger switch — a higher-powered switch pushes the signal the extra 30 meters without issues"
    ],
    "correct": 1,
    "explanation": "Copper length limits are physics (attenuation, delay skew), not suggestions. The design must respect 90m permanent link / 100m channel for Cat6A — beyond that, fiber or a closer telecom room is required."
  },
  {
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C1",
    "q": "A PoE++ (802.3bt Type 4) switch port can deliver up to what power, and why does the designer track the PoE budget?",
    "options": [
      "15.4W per port — PoE++ still delivers the original 802.3af 15.4W, and power budgets don’t matter because the switch sheds load automatically when oversubscribed",
      "Up to 90W per port (71.3W at the device after cable loss); the switch's total PoE budget is shared, so the designer sums every powered endpoint to avoid overloading the supply",
      "Unlimited power — a PoE++ switch delivers whatever wattage each connected device requests with no per-port or total budget limit, so designers never need to plan for PoE capacity",
      "PoE is only for phones — PoE++ exists solely for VoIP desk handsets, so AV endpoints like PTZ cameras and touch panels always need separate power supplies"
    ],
    "correct": 1,
    "explanation": "802.3bt delivers up to 90W/port, but the switch has a finite total PoE budget (e.g., 740W). Twenty PTZ cameras at 25W each = 500W — fine; add 20 more and the switch shuts ports down. The designer does the arithmetic."
  },
  {
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C1",
    "q": "What is the minimum bend radius rule of thumb for fiber optic cable during installation?",
    "options": [
      "Bend it as tightly as needed — fiber optic glass is flexible enough for any bend radius without signal loss",
      "15–20x the cable diameter while pulling under tension (about 10x once installed); tighter bends leak light and crack fibers",
      "Fiber has no bend limit — unlike copper, fiber can be tied in knots with zero effect on light transmission",
      "1 inch regardless of cable size — every fiber cable uses the same flat 1-inch minimum bend radius, independent of its diameter"
    ],
    "correct": 1,
    "explanation": "Fiber needs a larger radius while it is being pulled under tension (commonly 15–20x the cable diameter) than once it is installed and at rest (about 10x). Macrobending bleeds light out of the core; micro-cracks from tight bends fail later. The design specifies bend-radius-compliant pathways (sweep elbows, not 90° conduit bends) and the installer honors them."
  },
  {
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C1",
    "q": "A room needs 95 dB SPL peaks at the listener, 4 meters from the loudspeaker. The speaker sensitivity is 92 dB (1W/1m). Roughly how much amplifier power is needed?",
    "options": [
      "1 watt",
      "About 32 watts",
      "1,000 watts",
      "Power can't be calculated"
    ],
    "correct": 1,
    "explanation": "4m costs ~12 dB (two doublings: 1→2→4m). Needed at 1m: 95 + 12 = 107 dB. Above the 92 dB sensitivity: 15 dB → ~32x power (10 dB = 10x, 5 dB ≈ 3.16x; 10 × 3.16 ≈ 32). So ~32W — then add headroom. This is the core amplifier-sizing calculation."
  },
  {
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C1",
    "q": "Screen gain of 1.3 vs 1.0: what is the trade-off the designer is calculating?",
    "options": [
      "Higher gain is always better for every room, because a 1.3 screen delivers a full 30 percent more lumens than the projector itself outputs",
      "Gain 1.3 focuses reflected light toward the audience (brighter on-axis) but narrows the viewing cone and can hotspot; gain 1.0 spreads evenly",
      "Gain affects only the purchase price of the screen, so choose 1.3 when the budget allows and 1.0 when value-engineering the project",
      "Gain is irrelevant for modern laser projectors, since their brightness makes screen surface characteristics obsolete in every application"
    ],
    "correct": 1,
    "explanation": "High-gain screens buy on-axis brightness at the cost of off-axis uniformity — side seats see a dimmer, possibly hotspotted image. The designer matches gain to the room geometry: narrow rooms can use gain; wide rooms need unity or negative gain."
  },
  {
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C1",
    "q": "A 70V distributed system has 12 ceiling speakers tapped at 7.5W each. Using the CTS-D formula sheet, what is the minimum amplifier size?",
    "options": [
      "Exactly 90W (12 × 7.5), since 70V systems need no headroom",
      "About 108W (12 × 7.5 = 90W, plus 20 percent headroom)",
      "135W (12 × 7.5 × 1.5, which adds 50 percent headroom)",
      "7.5W, since only one speaker tap draws power at a time"
    ],
    "correct": 2,
    "explanation": "The formula sheet sizes a constant-voltage amplifier as Wt = W × N × 1.5, where 1.5 is 50 percent headroom: 7.5 × 12 × 1.5 = 135W. Specify the next standard size at or above that. 108W uses a 20 percent rule of thumb that the exam formula does not use, and an amp sized to the bare 90W tap total will clip on peaks.",
    "ref": "AVIXA CTS-D formula sheet (2024), Power Amplifier Wattage (Constant Voltage)"
  },
  {
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C1",
    "q": "Voltage drop on a long 70V speaker run causes what problem, and how does the designer prevent it?",
    "options": [
      "No problem — 70V is immune — constant-voltage distribution experiences zero wire loss at any distance or gauge, so the designer never needs to calculate voltage drop",
      "Undersized wire on long runs drops voltage, starving the far speakers and unbalancing the system; the designer sizes wire for the distance or splits the run",
      "Voltage drop only affects 8-ohm systems — 70V constant-voltage lines are immune to wire resistance, so the designer never considers gauge on long 70V runs",
      "Thicker wire is never needed — 24 AWG suffices for every 70V run because the high voltage keeps current tiny, which eliminates voltage drop entirely"
    ],
    "correct": 1,
    "explanation": "70V reduces current but doesn't repeal Ohm's law: a 500-ft run of 18 AWG can lose meaningful power. The designer checks the loop resistance against the load and upsizes wire or shortens runs — not the installer on a ladder."
  },
  {
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C2",
    "q": "An ST 2110 uncompressed 1080p59.94 stream needs about 1.5 Gbps. A design puts 24 such streams on one 25 Gbps uplink. Is this sound?",
    "options": [
      "Yes — 24 × 1.5 = 36 Gbps fits within a 25 Gbps uplink because 2110 streams share the capacity dynamically",
      "No — 36 Gbps exceeds the 25 Gbps uplink; the design needs more uplinks, 100G, or compressed (2110-22/JPEG XS) essence",
      "Bandwidth calculations do not apply to ST 2110 — uncompressed essence adapts to whatever uplink is available",
      "Uplinks have effectively unlimited capacity on modern switches, so oversubscription never constrains 2110 designs"
    ],
    "correct": 1,
    "explanation": "24 × 1.5 Gbps = 36 Gbps > 25 Gbps uplink. Broadcast IP designs must sum every essence flow (video + audio + ancillary) against uplink capacity. Options: LAG/more uplinks, 100G core, or JPEG XS compression (~10:1 visually lossless)."
  },
  {
    "domain": "CTS-D: Design Documentation",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C3",
    "q": "What is the purpose of an AV block diagram (flow diagram) in the design documentation set?",
    "options": [
      "It is decorative — the block diagram is presentation artwork for the proposal cover, with no role in communicating the design",
      "It shows every device and the signal flow between them — sources, processing, distribution, endpoints — so the design intent is unambiguous",
      "It replaces the equipment list — the flow diagram documents every part number and quantity, so a separate BOM is redundant",
      "It is only for the client — the block diagram is a sales visual, and installers and programmers never reference it at any point during the build"
    ],
    "correct": 1,
    "explanation": "CTS-D Duty C Task 3: the block diagram is the design's single source of truth for signal flow. The installer builds from it, the programmer programs from it, and troubleshooting starts from it. Ambiguity here becomes field improvisation."
  },
  {
    "domain": "CTS-D: Design Documentation",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C3",
    "q": "What distinguishes AV infrastructure drawings from AV system drawings?",
    "options": [
      "They are the same thing — infrastructure and system drawings are two names for a single identical document, and producing both is pure duplication",
      "Infrastructure drawings show pathways, conduit, backboxes and cable schedules (the skeleton); system drawings show devices, connections, racks and signal flow",
      "Infrastructure drawings are optional — pathways, conduit, and backboxes are the electrician’s concern, so AV infrastructure drawings add nothing to the package",
      "System drawings are only for large projects — on small jobs, device connections and signal flow are documented with a hand sketch taped inside the rack door"
    ],
    "correct": 1,
    "explanation": "CTS-D Duty C Task 3: infrastructure (conduit/backbox/cable schedule) is built by the electrical contractor during rough-in; system drawings (rack elevations, point-to-point wiring, RCP device plans) are built by the AV integrator. Different audiences, different bid packages."
  },
  {
    "domain": "CTS-D: Design Documentation",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C3",
    "q": "A cable schedule lists 'C-101, 2× Cat6A + 1× 18/2, AV Rack → Lectern floor box.' What is the designer communicating?",
    "options": [
      "A purchase order — the cable schedule is the financial document authorizing the vendor to ship cable to the jobsite",
      "Exactly which cables, in what quantities, run from where to where — the installer's pull list, with unique IDs for labeling and testing",
      "The cable manufacturer’s address — the schedule lists where to order each cable type, serving as the project’s vendor directory",
      "Nothing useful — cable schedules are bureaucratic filler; experienced installers pull whatever cable looks right for each location"
    ],
    "correct": 1,
    "explanation": "The cable schedule turns the drawings into a buildable list: unique cable IDs, types, endpoints. Every cable gets labeled to its ID at both ends, and test results are recorded against the same ID. No schedule = mystery cables."
  },
  {
    "domain": "CTS-D: Design Documentation",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C3",
    "q": "Why does the design include a rack elevation drawing with exact RU positions?",
    "options": [
      "For decoration — a nicely rendered rack elevation impresses the client during the proposal, but experienced installers ignore it and lay out the gear by feel on site",
      "It defines device placement, ventilation spacing, power sequencing order, weight distribution, and wire management — the rack is built from this drawing, not improvised",
      "Racks build themselves — modern AV devices auto-negotiate mounting position and power sequencing over the network, so the elevation drawing is only a formality",
      "Any order works — placement, ventilation gaps, and power sequencing are just preferences, so equipment can be racked in whatever order makes the cable runs shortest"
    ],
    "correct": 1,
    "explanation": "The rack elevation is a construction document: heavy amps low, ventilation gaps where specified, sequenced power order, patch fields accessible. A rack built 'however it fits' overheats and can't be serviced."
  },
  {
    "domain": "CTS-D: Design Documentation",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C4",
    "q": "What belongs in the AV equipment list / bill of materials (BOM)?",
    "options": [
      "Only the big-ticket items — displays, processors, and speakers; small parts like mounts and connectors are field-supplied and need no documentation",
      "Every device with manufacturer, model, quantity and accessories, down to mounts, plates, connectors and cable, so bids are complete and comparable",
      "The installer’s labor hours — the BOM tracks crew hours per device, since labor is the largest line item in the equipment budget",
      "Marketing descriptions — glossy feature bullets for each product, since the BOM’s purpose is selling the system to the client’s executives"
    ],
    "correct": 1,
    "explanation": "An incomplete BOM is where projects bleed: the forgotten $40 connectors, the missing rack shelves, the unpriced control license. The designer lists everything down to the wall plates so bids are apples-to-apples and nothing is 'discovered' mid-install."
  },
  {
    "domain": "CTS-D: Design Documentation",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C4",
    "q": "What is a 'sequence of operations' document in an AV design package?",
    "options": [
      "The installer’s work schedule — a day-by-day timetable showing crew assignments, which rooms get worked in what order, and the target completion date for the GC",
      "A written narrative of how the system behaves (what each button does, how rooms combine, automation) that the programmer builds and the client approves",
      "A packing list — an itemized manifest of every box and component shipped to the jobsite, which the receiving crew checks off as deliveries arrive",
      "The warranty terms — the legal document defining each manufacturer’s warranty period, coverage exclusions, and the RMA process for failed equipment"
    ],
    "correct": 1,
    "explanation": "The sequence of operations is the control system's functional spec: press 'Present' → display on, shade down, source routed, volume set. The client signs it (agreeing what they're buying) and the programmer codes to it (agreeing what to build)."
  },
  {
    "domain": "CTS-D: Design Documentation",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C4",
    "q": "TIA-606 labeling (e.g., '1A-B03' style identifiers) matters in AV documentation because:",
    "options": [
      "Labels are decorative and add no technical value — the cable schedule alone lets any technician trace cables years later without identifiers on the wire",
      "A consistent, documented labeling scheme lets anyone trace any cable, port, or device years later — essential for service and moves/adds/changes",
      "Labels are required for the equipment to power on — without a printed label on every cable, the devices refuse to boot and the system cannot function",
      "Labeling only matters during the first week of installation — after acceptance the labels fade and no service technician ever needs them again"
    ],
    "correct": 1,
    "explanation": "Five years later, nobody remembers what the blue cable was. TIA-606-style labels tied to the cable schedule and as-builts make the system serviceable by people who never met the installer."
  },
  {
    "domain": "CTS-D: Design Documentation",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C4",
    "q": "What are 'as-built' drawings, and when are they produced?",
    "options": [
      "The original design drawings as issued for construction, which remain accurate because installations always match the design exactly",
      "Drawings updated to show what was ACTUALLY installed, made at project end from field redlines and handed over for future service",
      "Drawings of the building's architecture and structure, produced by the architect to show walls, doors, and ceiling heights",
      "They are produced before construction begins, serving as the bid documents that each contractor uses to price their work against"
    ],
    "correct": 1,
    "explanation": "Field conditions always differ from design. As-builts capture the truth: actual cable routes, final IP addresses, substituted models. They're the document the next technician works from — worthless if never updated."
  },
  {
    "domain": "CTS-D: Design Documentation",
    "cert": "CTS-D",
    "duty": "D",
    "task": "D1",
    "q": "An installer submits an RFI: 'Drawing A-201 shows the projector at 18 ft; structural steel is at 16 ft. Advise.' What is the RFI process protecting?",
    "options": [
      "Nothing — RFIs are just paperwork — the installer should resolve the steel conflict in the field without bothering the busy design team",
      "It creates a documented question-and-answer record so conflicts are resolved by the design team in writing, not by field improvisation",
      "The installer’s profit — the RFI process exists to generate change orders and increase the contractor’s margin",
      "The architect’s ego — RFIs flatter the design team by asking their opinion on matters the field could decide alone"
    ],
    "correct": 1,
    "explanation": "RFIs (Requests for Information) are the formal channel for build conflicts. The designer answers in writing — possibly revising the design — creating a record that protects everyone when the question 'who decided this?' comes up later."
  },
  {
    "domain": "CTS-D: Design Documentation",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C4",
    "q": "What is the purpose of equipment submittals in the design-bid-build process?",
    "options": [
      "To delay the project — submittals exist to slow procurement and give the designer billable review hours",
      "The contractor submits proposed products for designer review BEFORE purchase, verifying they meet the specification — catching substitutions early",
      "To increase paperwork — submittals generate document volume to justify the design fee, with no effect on what gets purchased",
      "Submittals are only for architects — AV equipment is exempt from the submittal process, which applies to the architectural finishes and materials alone"
    ],
    "correct": 1,
    "explanation": "Submittals are quality control: the designer checks that the proposed projector actually meets the specified lumens, throw, and lens shift before it's bought. 'Or equal' substitutions die here, not on the jobsite."
  },
  {
    "domain": "CTS-D: Design Documentation",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C3",
    "q": "A reflected ceiling AV plan shows speaker symbols with coverage angles. What is the installer expected to derive from it?",
    "options": [
      "Just the speaker count — the plan communicates how many speakers to order; placement is decided by the installer on the ladder",
      "Exact speaker locations, spacing and aiming — the coverage design, coordinated with other ceiling trades, that installation and verification follow",
      "The speaker brand — the symbols identify the manufacturer and model; the layout itself is left to the installing contractor",
      "Nothing — speakers go wherever they fit — the symbols are diagrammatic only, so the installer places speakers around the lights and sprinklers"
    ],
    "correct": 1,
    "explanation": "The RCP AV plan IS the coverage design: locations derived from the ±3 dB coverage calculation, coordinated with other ceiling trades. The installer places per plan; verification measures against it."
  },
  {
    "domain": "CTS-D: Design Documentation",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C4",
    "q": "Why does the design package include an IP address schedule for networked AV?",
    "options": [
      "IP addresses configure themselves through plug-and-play — DHCP auto-assigns every address, so documenting the scheme is redundant",
      "A documented scheme (VLANs, static reservations, ranges) prevents conflicts, speeds commissioning, and lets IT and future techs manage the system",
      "DHCP eliminates the need for documentation — dynamically assigned addresses never conflict, and future technicians will never need to know any of them",
      "The IP schedule is written only for the control programmer — IT staff and future technicians never touch networked AV IP addresses"
    ],
    "correct": 1,
    "explanation": "Fifty AV devices on DHCP with no documentation is a troubleshooting nightmare. The IP schedule assigns static addresses or documented reservations per VLAN — commissioning goes faster and the next tech isn't guessing."
  },
  {
    "domain": "CTS-D: Design Documentation",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C3",
    "q": "What is drawing revision control (Rev A, B, C / delta triangles) protecting on an AV project?",
    "options": [
      "The designer’s artistic vision — revision control protects the aesthetic integrity of the drawings against unauthorized changes",
      "Everyone builds from the CURRENT set: superseded sheets are voided so no one roughs in from last month's device locations",
      "It makes drawings look official — revision triangles are decorative marks that lend authority to the drawing set",
      "Revision control is optional — installers reliably track which version is current from memory, so formal revision control adds nothing"
    ],
    "correct": 1,
    "explanation": "Building from Rev B when Rev D moved the projector 4 feet is a classic expensive error. Revision clouds, deltas, and a current-drawing log keep the field, the GC, and the design team on the same set."
  },
  {
    "domain": "CTS-D: Design Documentation",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C4",
    "q": "The O&M (Operations & Maintenance) manual the designer specifies should contain what?",
    "options": [
      "Only the equipment warranties — the O&M manual is just a binder of manufacturer warranty cards, since the client calls the integrator for any operational question",
      "System overview, as-builts, secured IP/password records, operating instructions, maintenance schedules, basic troubleshooting and vendor contacts",
      "The designer’s invoice — the O&M manual records the design fees, payment milestones, and final invoice so the client has a complete financial history",
      "Blank pages — the O&M manual ships with blank sections so the client’s own staff can write in operating procedures as they learn the system"
    ],
    "correct": 1,
    "explanation": "The O&M manual is the system's owner's manual: how to operate it, how to maintain it, who to call. A system handed over without one is handed over incomplete."
  },
  {
    "domain": "CTS-D: Design Documentation",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C3",
    "q": "A riser diagram in the AV package shows what?",
    "options": [
      "The building’s plumbing — the riser diagram traces water and waste stacks between floors for the AV rough-in",
      "Vertical distribution between floors/racks — backbone cable, floor-to-floor pathways, and IDF/MDF relationships",
      "The projector’s rise time — the diagram charts how quickly the projector lamp reaches full brightness",
      "Employee hierarchy — the riser shows the client’s org chart, clarifying who approves the AV design"
    ],
    "correct": 1,
    "explanation": "The riser shows the vertical backbone: which racks feed which floors, backbone cable counts, and pathway routing between levels. Multi-floor projects can't be cabled correctly without it."
  },
  {
    "domain": "CTS-D: Design Documentation",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C4",
    "q": "Before issuing the design for bid, what final documentation QA step should the designer perform?",
    "options": [
      "None — issue it immediately — speed to bid matters more than accuracy, so the package goes out without any QA review",
      "A coordination check: do the drawings, BOM, cable schedule, and specifications agree with each other (quantities, model numbers, locations)?",
      "Add more pages — a thicker bid package impresses bidders, so the QA step is padding the document count",
      "Remove the specifications to save printing — dropping the spec section cuts printing costs, which is the designer’s final quality assurance duty"
    ],
    "correct": 1,
    "explanation": "CTS-D Duty C Task 4 (Finalize Project Documentation): internal QA catches the drawing that shows 12 speakers while the BOM lists 10. Inconsistent bid documents produce inconsistent bids — and disputes."
  },
  {
    "domain": "CTS-D: Verification & Closeout",
    "cert": "CTS-D",
    "duty": "D",
    "task": "D2",
    "q": "What is 'system performance verification' in the CTS-D context, and how does it differ from the installer's own testing?",
    "options": [
      "They are the same thing — the installer’s button-press checks and the designer’s verification are identical activities with different names",
      "Independent confirmation, by the designer or a third party, that the system meets the documented criteria, using calibrated measurement",
      "Verification is just paperwork — it’s a signature on a form confirming the installer’s word, requiring no independent measurement",
      "Only the installer can verify — the installing contractor is the sole party qualified to confirm the system meets the design criteria"
    ],
    "correct": 1,
    "explanation": "CTS-D Duty D Task 2: the designer (or commissioning agent) verifies performance against the design criteria — measured SPL coverage, intelligibility, video resolution — independently of the installer's checkout. Self-graded homework isn't verification."
  },
  {
    "domain": "CTS-D: Verification & Closeout",
    "cert": "CTS-D",
    "duty": "D",
    "task": "D2",
    "q": "During verification, you measure speech intelligibility with STI. The design criterion was STI ≥ 0.60 ('good'). You measure 0.45 in several seats. What is the correct response?",
    "options": [
      "Sign off anyway — the room sounds subjectively fine to you, so the STI number can be safely ignored at acceptance",
      "Document the failure, diagnose the cause (noise, reverberation, coverage, EQ), and require corrective action before acceptance",
      "Lower the design criterion from 0.60 to 0.45 so that the measured result officially passes verification",
      "Keep re-measuring at different seats until one of them reads at least 0.60, then record that single seat as the room's official result"
    ],
    "correct": 1,
    "explanation": "Verification without consequences is theater. A failed criterion triggers documented diagnosis and remediation — acoustic treatment, speaker re-aiming, noise mitigation — then re-verification. The criterion doesn't move to meet the measurement."
  },
  {
    "domain": "CTS-D: Verification & Closeout",
    "cert": "CTS-D",
    "duty": "D",
    "task": "D2",
    "q": "What should the designer's verification test plan be based on?",
    "options": [
      "Whatever tests are quick — the fastest checks that fit the site visit define the plan; formal criteria and thresholds slow down closeout",
      "The performance criteria established in the design documentation — every specified criterion gets a defined test method, instrument, and pass/fail threshold",
      "The installer’s preferences — the lead technician chooses whatever tests they’re comfortable with, since they know the system best",
      "The installer's own standard checkout procedure, so the verification simply repeats the same tests the installing crew already ran during their system checkout"
    ],
    "correct": 1,
    "explanation": "You can't verify what you never specified. The design documents set measurable criteria (SPL ±3 dB, STI ≥ 0.60, 4K60 end-to-end); the verification plan tests each one with a stated method. Criteria → test plan → measured result."
  },
  {
    "domain": "CTS-D: Verification & Closeout",
    "cert": "CTS-D",
    "duty": "D",
    "task": "D2",
    "q": "A punch list item reads 'Boardroom display flickers intermittently.' What makes a punch list effective at closeout?",
    "options": [
      "Vague descriptions are fine — ‘display flickers’ is specific enough for the punch list, and the assigned technician will figure out the rest on site",
      "Each item is specific, assigned, and verifiable — location, symptom, responsible party, and a defined re-test — so closeout actually closes",
      "Punch lists should be verbal — spoken punch items avoid paperwork and get resolved faster than written lists",
      "Ignore intermittent issues — flickers that come and go aren’t real problems, so they don’t belong on the punch list"
    ],
    "correct": 1,
    "explanation": "'Display flickers' with no location or owner lingers forever. Effective punch lists name the room, the symptom, who fixes it, and how it's verified fixed — then they're tracked to zero."
  },
  {
    "domain": "CTS-D: Verification & Closeout",
    "cert": "CTS-D",
    "duty": "D",
    "task": "D3",
    "q": "What does the Certificate of Substantial Completion signify for the AV designer at closeout?",
    "options": [
      "The project is over — the certificate ends all obligations, so no warranty, documentation, or training follows it",
      "The system is usable for its purpose, starting warranty, final documents and training, even with minor punch items open",
      "All punch items are done — the certificate is only issued after every punch item is closed, with zero exceptions",
      "The designer is no longer involved — the certificate permanently releases the designer from any further project participation"
    ],
    "correct": 1,
    "explanation": "CTS-D Duty D Task 3: substantial completion is the milestone where the owner can use the system. It starts warranty clocks and releases retention per contract terms. The designer typically verifies readiness for this milestone."
  },
  {
    "domain": "CTS-D: Verification & Closeout",
    "cert": "CTS-D",
    "duty": "D",
    "task": "D1",
    "q": "Why should the designer participate in project implementation communication (site meetings, field reports)?",
    "options": [
      "To bill more hours — site meetings exist to generate additional billable time, with no benefit to the installed system",
      "To protect design intent — answering RFIs, reviewing submittals, and catching deviations while they're cheap to correct",
      "Designers should never visit sites — the design is complete at issue, so any site presence only confuses the installer",
      "It is purely social — implementation meetings are networking events for the design team, unrelated to the project’s success"
    ],
    "correct": 1,
    "explanation": "CTS-D Duty D Task 1: design intent erodes without the designer in the loop. A two-minute RFI answer during rough-in prevents a two-day rework after drywall. Presence is cheap insurance."
  },
  {
    "domain": "CTS-D: Verification & Closeout",
    "cert": "CTS-D",
    "duty": "D",
    "task": "D3",
    "q": "At closeout, the client asks for the admin passwords, DSP files, and control system source code. What is the correct position?",
    "options": [
      "Refuse to release passwords and source code — keeping them proprietary protects the integrator's future service revenue and builds healthy dependency",
      "Hand over complete documentation and credentials per the contract — the client owns their system; withholding it creates dependency, not value",
      "Charge the client a separate licensing fee for every admin password — withholding credentials until payment keeps the handover profitable",
      "Treat passwords as outside closeout scope — hand over only the user remotes and promise the admin credentials will arrive in a later email"
    ],
    "correct": 1,
    "explanation": "Closeout delivers a complete, ownable system: admin credentials, uncompiled/compiled code as contracted, DSP project files, as-builts. Clients who can't access their own system will never hire you again — and may sue."
  },
  {
    "domain": "CTS-D: Verification & Closeout",
    "cert": "CTS-D",
    "duty": "D",
    "task": "D3",
    "q": "What is 'attic stock' and why is it specified at closeout?",
    "options": [
      "Insulation for the rack room — attic stock is thermal insulation specified for the rack closet to control equipment heat",
      "Spare consumables and failure-prone parts (lamps, batteries, key cables) left on site, so a failure is a swap, not an order",
      "Old equipment stored in the attic — attic stock is the pile of legacy gear left above the ceiling during upgrades",
      "A credit the integrator holds for equipment the client may add later, drawn down against future change orders"
    ],
    "correct": 1,
    "explanation": "A spare wireless mic battery or projector lamp on the shelf turns a crisis into a ten-minute fix. Specifying attic stock at closeout — when procurement is mobilized — is cheap resilience."
  },
  {
    "domain": "CTS-D: Verification & Closeout",
    "cert": "CTS-D",
    "duty": "D",
    "task": "D2",
    "q": "The verification report shows the videoconference room meets all criteria except the camera framing preset for the whiteboard. What happens next?",
    "options": [
      "Accept the system as substantially complete — a single camera framing preset is too minor to hold up final acceptance",
      "The deficiency is documented, corrected (re-aim/re-program the preset), and re-verified before final acceptance",
      "Delete the whiteboard framing criterion from the verification report so the remaining criteria show a clean pass",
      "File a warranty claim with the camera manufacturer and defer the preset re-aiming until they respond"
    ],
    "correct": 1,
    "explanation": "Verification is binary against criteria: pass or correct-and-reverify. Documented deficiencies with assigned correction and re-test keep closeout honest and the system complete."
  },
  {
    "domain": "CTS-D: Verification & Closeout",
    "cert": "CTS-D",
    "duty": "D",
    "task": "D3",
    "q": "Why does the designer conduct or witness end-user training at closeout?",
    "options": [
      "To demonstrate the system's cost savings to the client's finance team — and to let the installer run all training alone with no design review of the UI or documentation",
      "To confirm the training matches the designed operation — and to hear firsthand where the UI or documentation confuses users, while fixes are still easy",
      "To certify that the training is entertaining enough to hold attention — and to rely on verbal handoffs instead of written documentation once users look confident",
      "To verify that every attendance sheet is fully signed — and to push all UI and documentation feedback into the warranty period, when fixes cost far more"
    ],
    "correct": 1,
    "explanation": "Training is where design assumptions meet reality. Watching users struggle with a control page reveals design flaws no checklist catches — and it's far cheaper to fix the UI before the support calls start."
  },
  {
    "domain": "CTS-D: Verification & Closeout",
    "cert": "CTS-D",
    "duty": "D",
    "task": "D3",
    "q": "What is the value of a post-project review for the design practice?",
    "options": [
      "It has no value — moving straight to the next project is always more profitable than spending hours reviewing completed work",
      "Capturing what the design got right and wrong (estimates, coordination wins, product issues) improves future designs and estimating accuracy",
      "It exists only to assign blame — post-project reviews document which person caused every problem, for the permanent record",
      "Clients dislike reviews — asking them about lessons learned damages the relationship, so post-project reviews should never be offered to them"
    ],
    "correct": 1,
    "explanation": "Every project teaches: which calculations held, which coordination failed, which products to avoid. A blameless review converts experience into better templates, checklists, and estimates."
  },
  {
    "domain": "CTS-D: Verification & Closeout",
    "cert": "CTS-D",
    "duty": "D",
    "task": "D2",
    "q": "Final acceptance testing reveals the assistive listening system doesn't cover the back rows. The design specified the correct transmitter power. What is the likely field issue?",
    "options": [
      "The design was wrong — the transmitter power specification was miscalculated, so the entire assistive listening design must be redone",
      "Installation/commissioning issue — antenna placement, orientation, or configuration — to be corrected and re-verified; the design criteria stand",
      "Assistive listening never works — these systems cannot cover large rooms regardless of design, so the back rows will never receive the signal",
      "Accept it as-is — partial coverage satisfies the requirement as long as the front rows work, so no correction is needed"
    ],
    "correct": 1,
    "explanation": "Verification distinguishes design errors from implementation errors. Correct design + failed measurement = field correction (antenna placement is the classic culprit for loop/IR systems), then re-verification against the unchanged criterion."
  },
  {
    "domain": "CTS-I: Pre-Installation Activities",
    "cert": "CTS-I",
    "duty": "A",
    "task": "A1",
    "q": "Before mobilizing to site, you review the AV design package. What are you primarily verifying?",
    "options": [
      "That every specified product is the latest model, so outdated equipment can be swapped out before any orders are placed",
      "That the drawings, BOM and scope are complete and coordinated, so orders, labor plans and RFIs happen before the crew is on site",
      "The designer's professional credentials — verifying their certifications matters more than reviewing the drawings or the BOM",
      "That the client paid the deposit — payment status is the only thing worth verifying before mobilizing the crew to the site"
    ],
    "correct": 1,
    "explanation": "CTS-I Duty A Task 1: reviewing project documentation before mobilization catches missing equipment, drawing conflicts, and scope gaps while they're cheap. The crew arriving to discover half the BOM was never ordered is a planning failure."
  },
  {
    "domain": "CTS-I: Pre-Installation Activities",
    "cert": "CTS-I",
    "duty": "A",
    "task": "A2",
    "q": "During the technical site survey, you find the equipment room is 4 feet narrower than the drawings show. What is the correct action?",
    "options": [
      "Squeeze the racks into the smaller room anyway and force the layout to fit on site during installation",
      "Document it with measurements and photos and issue an RFI; the rack layout must be revised before rough-in",
      "Skip the technical site survey entirely on future projects so these discrepancies never come to light",
      "Order smaller racks and install them quietly without telling the client or revising any of the drawings"
    ],
    "correct": 1,
    "explanation": "CTS-I Duty A Task 2: the technical site survey verifies field conditions against the design. Discrepancies get documented and resolved through RFIs — not absorbed silently. A rack that doesn't fit is discovered with a tape measure, not a saw."
  },
  {
    "domain": "CTS-I: Pre-Installation Activities",
    "cert": "CTS-I",
    "duty": "A",
    "task": "A4",
    "q": "What does 'staging' the installation mean, and why does it happen before site work?",
    "options": [
      "Delivering all equipment to a staging area on site, where it waits until each room is ready for installation",
      "Pre-assembling, labeling, updating firmware and testing racks in the shop, so site time is installation rather than assembly and debugging",
      "Dividing the installation into phases so the client can approve each stage before the next one is started",
      "Staging wastes time — shop assembly duplicates the site work, so the best practice is to ship everything boxed and assemble it all on site later"
    ],
    "correct": 1,
    "explanation": "CTS-I Duty A Task 4: shop staging catches DOA equipment, lets programmers load code, and means the rack arrives tested. An hour of shop time saves three hours of ladder time."
  },
  {
    "domain": "CTS-I: Pre-Installation Activities",
    "cert": "CTS-I",
    "duty": "A",
    "task": "A2",
    "q": "The GC's schedule shows drywall closing in 5 days, but your cable isn't on site. What facility-readiness issue is this?",
    "options": [
      "None — cable can be fished through finished drywall at no extra cost, so material delays have no impact on the close-up schedule",
      "The site is not ready for your phase: materials, pathways, and preceding trades must be sequenced BEFORE close-up, or you face destructive rework",
      "Drywall schedules only affect the painters and finish carpenters; AV rough-in floats independently of the GC's close-up milestones",
      "Install wireless access points and wireless HDMI links instead of cable, since wireless systems eliminate the need for any in-wall cable rough-in work"
    ],
    "correct": 1,
    "explanation": "CTS-I Duty A Task 3: evaluating facility readiness means confirming the site can actually receive your work — power on, pathways in, preceding trades complete, materials on hand. Working out of sequence multiplies cost."
  },
  {
    "domain": "CTS-I: Pre-Installation Activities",
    "cert": "CTS-I",
    "duty": "A",
    "task": "A4",
    "q": "On day one at the site, what should the lead installer establish FIRST?",
    "options": [
      "Start pulling cable immediately — billable progress on day one matters more than storage, safety orientation, or planning",
      "Site logistics: secure storage, tool power, trash and wash areas, safety orientation, GC contacts and the day's plan",
      "Unbox and inspect every piece of equipment for shipping damage before any other work begins",
      "Wait for instructions — the lead should stand by until the GC personally assigns each task for the day"
    ],
    "correct": 1,
    "explanation": "CTS-I Duty A Task 4: on-site preparation — secure storage (gear walks away), safety briefing, GC coordination, and a plan for the day. Crews that 'just start pulling' spend the afternoon looking for the cable they left in the truck."
  },
  {
    "domain": "CTS-I: Pre-Installation Activities",
    "cert": "CTS-I",
    "duty": "B",
    "task": "B3",
    "q": "The design calls for a projector mount at a location where you find a sprinkler head 12 inches away. What do you do?",
    "options": [
      "Mount it anyway — close enough — a projector mount 12 inches from a sprinkler head has adequate clearance, so proceed with the installation",
      "Stop and resolve: document the clash and check clearances with the GC and designer; moving a sprinkler or the mount needs coordinated approval",
      "Remove the sprinkler head — unscrew the sprinkler head to clear the mount location; the fire suppression system works fine with one head removed",
      "Mount the projector to the sprinkler pipe — the sprinkler pipe is sturdy overhead support, so hanging the projector mount from it resolves the clash"
    ],
    "correct": 1,
    "explanation": "Field clashes with life-safety systems are never solved unilaterally. Document, photograph, RFI. Moving sprinklers needs the fire protection engineer; moving the projector needs throw-distance verification."
  },
  {
    "domain": "CTS-I: Pre-Installation Activities",
    "cert": "CTS-I",
    "duty": "A",
    "task": "A4",
    "q": "Why should firmware on all networked AV devices be updated and standardized during staging rather than on site?",
    "options": [
      "Firmware doesn’t matter — firmware versions have no effect on device compatibility, so updating is pure busywork",
      "Staged updates catch incompatibilities (Dante, control firmware) on the bench with internet access, not on a ladder with no connectivity",
      "Newer firmware is always worse — every firmware update introduces new bugs, so the oldest available version is always the safest choice to run",
      "The client prefers old firmware — end users distrust updates, so the installer should preserve the factory firmware forever"
    ],
    "correct": 1,
    "explanation": "Mismatched firmware between Dante devices, DSPs, and control processors is a classic commissioning time-burn. Standardize versions in the shop, document them, and verify interoperability before mobilization."
  },
  {
    "domain": "CTS-I: Pre-Installation Activities",
    "cert": "CTS-I",
    "duty": "A",
    "task": "A4",
    "q": "What belongs on a pre-mobilization checklist for the lead installer?",
    "options": [
      "Only the tool inventory and van loading list, since drawings, materials, site contacts and safety are the project manager's job and get sorted out on site",
      "Drawings and BOM verified, materials received and staged, tools calibrated and packed, site contacts confirmed, safety plan reviewed, schedule understood",
      "Just show up — an experienced lead needs no checklist; drawings, materials, and tools can be figured out after arriving on site",
      "The client’s phone number — having the client on speed dial replaces the checklist, since any missing item can be resolved with a call"
    ],
    "correct": 1,
    "explanation": "Mobilization without a checklist is how crews arrive missing the lift, the labels, or the right drawings. The checklist converts the project plan into packed trucks and a ready crew."
  },
  {
    "domain": "CTS-I: Pre-Installation Activities",
    "cert": "CTS-I",
    "duty": "A",
    "task": "A2",
    "q": "The site survey reveals asbestos tile where floor boxes were designed. What is the correct response?",
    "options": [
      "Cut through it — asbestos floor tile is just tile, and coring through it poses no hazard to the installation crew",
      "Stop work in that area and notify the GC and client in writing; only licensed abatement may disturb asbestos",
      "Cover it with the floor box and say nothing — material that looks undisturbed needs no documentation or written notification",
      "Asbestos is harmless in small amounts — brief exposure during a quick cut stays well below any regulated legal limit"
    ],
    "correct": 1,
    "explanation": "Suspect materials stop work, period. Disturbing asbestos without abatement is illegal and dangerous. Document, notify in writing, and let the proper process run — no schedule is worth exposure."
  },
  {
    "domain": "CTS-I: Pre-Installation Activities",
    "cert": "CTS-I",
    "duty": "A",
    "task": "A4",
    "q": "How should high-value AV equipment be handled between delivery and installation?",
    "options": [
      "Leave the equipment in an unlocked hallway or stairwell under casual crew observation, issued by word of mouth with no inventory log",
      "Secure, climate-appropriate storage with inventory control — gear is inventoried on receipt, stored locked, and issued to the workface as needed",
      "Store the equipment outdoors under a waterproof tarp, exposed to humidity and temperature swings, with no lock or inventory record until install day",
      "Unbox all equipment immediately on delivery and scatter components across the jobsite for visibility, discarding the packing and labels"
    ],
    "correct": 1,
    "explanation": "Jobsite theft and damage are project killers. Staged equipment lives in locked storage, inventoried against the BOM. A $10,000 projector growing legs delays the project and the insurance claim takes longer."
  },
  {
    "domain": "CTS-I: Pre-Installation Activities",
    "cert": "CTS-I",
    "duty": "A",
    "task": "A4",
    "q": "The design specifies plenum cable above the ceiling, but your survey finds the space is used as an air-handling plenum with no fire rating on the cable in the BOM. What do you do?",
    "options": [
      "Install the non-plenum cable anyway, since the BOM is authoritative and ordering corrections cost time",
      "Flag it before rough-in: air-handling plenums need plenum-rated (CMP) cable, so correct the BOM through an RFI",
      "Cable jacket ratings are irrelevant to code compliance, so any jacket type may run in the air-handling space",
      "Pull the non-plenum cable inside metallic conduit instead, and skip the BOM correction and RFI entirely"
    ],
    "correct": 1,
    "explanation": "Code compliance is verified before installation, not after the inspector fails it. CMP (plenum) rating is required in air-handling spaces. Catching it at staging means a corrected order; catching it at inspection means a re-pull."
  },
  {
    "domain": "CTS-I: Pre-Installation Activities",
    "cert": "CTS-I",
    "duty": "A",
    "task": "A4",
    "q": "What is the installer's responsibility regarding permits and inspections?",
    "options": [
      "Permits are the client’s problem — the installer never verifies permits; if the inspector stops the job, that’s the client’s fault",
      "Confirm which permits and inspections apply to the AV scope (low-voltage, structural for rigging) and that they're in place first",
      "Work without permits to save time — skipping the permit process accelerates the schedule, and inspectors rarely check AV work",
      "Inspectors never check AV — low-voltage AV work is invisible to inspectors, so permits and inspections don’t apply"
    ],
    "correct": 1,
    "explanation": "Low-voltage permits, above-ceiling inspections, and structural inspections for rigging vary by jurisdiction. The lead installer confirms requirements with the GC/AHJ before the phase that triggers them."
  },
  {
    "domain": "CTS-I: Pre-Installation Activities",
    "cert": "CTS-I",
    "duty": "A",
    "task": "A4",
    "q": "A pre-installation labor plan should account for what?",
    "options": [
      "Only the total headcount matters — any warm body can pull cable, trim wall plates, and commission DSPs equally well",
      "Crew size by phase, skill mix (lead tech, installers, apprentice), lift/equipment needs, and coordination with other trades' schedules",
      "Labor planning is solely the project manager's job — the lead installer never contributes anything to crew sizing or to phase scheduling",
      "Only the coffee and lunch logistics — crew skill mix, lift needs, and trade coordination sort themselves out once on site"
    ],
    "correct": 1,
    "explanation": "The lead installer plans the workface: rough-in needs pullers; trim needs finish-careful techs; commissioning needs the programmer. Wrong crew mix at the wrong phase burns budget."
  },
  {
    "domain": "CTS-I: Pre-Installation Activities",
    "cert": "CTS-I",
    "duty": "A",
    "task": "A2",
    "q": "Why take pre-installation photos of the site?",
    "options": [
      "For social media — jobsite photos build the integrator’s Instagram following, which is the primary business purpose of site documentation",
      "To document existing conditions — damage, existing infrastructure, as-found states — protecting against back-charges and proving what you started with",
      "Photos are a waste of time — existing conditions are obvious to everyone on site, so photographic records add nothing to the project",
      "Only the GC takes photos — site photography is exclusively the general contractor’s responsibility, and AV trades are prohibited from documenting conditions"
    ],
    "correct": 1,
    "explanation": "'That scratch was already there' needs proof. Dated photos of existing conditions, ceiling spaces, and equipment rooms before work starts are cheap dispute insurance."
  },
  {
    "domain": "CTS-I: Pre-Installation Activities",
    "cert": "CTS-I",
    "duty": "A",
    "task": "A4",
    "q": "The project requires work in an occupied hospital wing. What pre-installation coordination is essential?",
    "options": [
      "No special coordination is needed — an occupied hospital wing works exactly like any office floor, so the crew works normal hours with its standard tools",
      "Infection control (ICRA) procedures, quiet hours, escort/badging requirements, and shutdown coordination with facilities — arranged BEFORE mobilization",
      "Hospitals waive all requirements for AV contractors — badging, escorts, ICRA barriers, and quiet hours apply only to medical staff",
      "Shift all work to unannounced night shifts — skipping ICRA procedures, permits, and facilities coordination keeps the project on schedule"
    ],
    "correct": 1,
    "explanation": "Healthcare, data centers, and occupied spaces have strict protocols — ICRA barriers, above-ceiling permits, escorted access. Arranging them at mobilization (not mid-project) keeps the crew working instead of waiting at security."
  },
  {
    "domain": "CTS-I: Pre-Installation Activities",
    "cert": "CTS-I",
    "duty": "A",
    "task": "A4",
    "q": "Your test equipment (cable certifier, SPL meter) hasn't been calibrated in three years. What is the risk?",
    "options": [
      "None — test gear doesn’t drift — certifiers and SPL meters hold factory accuracy forever, so recalibration is a revenue scheme",
      "Uncalibrated instruments give untrustworthy readings, so a 'passing' cable cert or SPL report may be fiction and won't hold up",
      "Calibration is only for show — the calibration sticker impresses clients, but it has no effect on measurement accuracy",
      "Old equipment works better — meters improve with age as components settle, so a three-year-old certifier outperforms a new one"
    ],
    "correct": 1,
    "explanation": "Measurements are only as good as the instrument. Annual calibration (with certificates) is standard practice; verification reports backed by uncalibrated gear won't survive scrutiny."
  },
  {
    "domain": "CTS-I: Rough-In & First Fix",
    "cert": "CTS-I",
    "duty": "C",
    "task": "C1",
    "q": "The project requires removing existing ceiling speakers and cable before the new install. What is the proper deinstallation practice?",
    "options": [
      "Rip it all out as fast as possible to keep the schedule, since speed matters more than documentation during a deinstallation",
      "Label what serves what, disconnect safely with power verified off, remove cleanly, and dispose or recycle per contract and regulations",
      "Leave old cable in place behind the ceiling — it's harmless, out of sight, and removing it only wastes billable labor hours",
      "Cut everything with one snip and toss it all in the dumpster, because abandoned cable and old speakers have no disposal regulations at all"
    ],
    "correct": 1,
    "explanation": "CTS-I Duty C Task 1: deinstallation is surgical, not demolition. Label circuits before disconnecting (some may stay live), verify power is off, and handle disposal — including e-waste rules for old electronics."
  },
  {
    "domain": "CTS-I: Rough-In & First Fix",
    "cert": "CTS-I",
    "duty": "C",
    "task": "C2",
    "q": "You are mounting unistrut substructure for a projector mount. What determines whether the attachment is acceptable?",
    "options": [
      "It feels solid — grab the unistrut and shake it hard; if nothing moves under force, the attachment is acceptable regardless of substrate or fastener type",
      "Attachment to structure (not tile), fasteners suited to the substrate, a load rating above the weight with a safety factor, and firestopped penetrations",
      "Any screw into drywall works — standard drywall screws into the ceiling tile grid provide plenty of holding power for projector substructure loads",
      "Substructure is optional — projector mounts can hang directly from the ceiling tile grid, since the tiles distribute the equipment load evenly across the ceiling"
    ],
    "correct": 1,
    "explanation": "CTS-I Duty C Task 2: substructure carries the load to the building. Fasteners must suit the substrate (concrete anchors, beam clamps — never drywall alone for heavy loads), and the assembly must handle the weight with margin."
  },
  {
    "domain": "CTS-I: Rough-In & First Fix",
    "cert": "CTS-I",
    "duty": "C",
    "task": "C3",
    "q": "While pulling Cat6A, the cable kinks hard around a conduit elbow. What is the correct response?",
    "options": [
      "Straighten it and keep pulling — a kinked section straightens out under tension and the run will certify normally afterward",
      "Stop: a hard kink can fracture pairs and fail certification, so cut back past it or replace the run, and fix the pathway",
      "Kinks don’t affect performance — Cat6A pairs are flexible enough that hard kinks never impact certification results",
      "Pull harder to work it out — increased pulling force irons out the kink, restoring the cable’s original geometry"
    ],
    "correct": 1,
    "explanation": "Kinks, over-tension, and tight bends permanently damage twisted-pair geometry. The run is suspect until re-tested; often it's replaced. Prevention — proper bend radius, pull boxes, lubricant, tension monitoring — is the real lesson."
  },
  {
    "domain": "CTS-I: Rough-In & First Fix",
    "cert": "CTS-I",
    "duty": "C",
    "task": "C3",
    "q": "What is the maximum pulling tension generally recommended for Cat6 UTP cable?",
    "options": [
      "As much tension as the puller can exert — copper conductors can handle any pulling force",
      "Around 25 lbs — exceeding it deforms the pairs and risks failing certification",
      "100 lbs — roughly four times the rated limit for long straight conduit runs",
      "Tension is irrelevant for data cable — only fiber optic cable has a pulling-tension limit"
    ],
    "correct": 1,
    "explanation": "Manufacturers typically rate Cat6 UTP for ~25 lbf (110 N) maximum pulling tension. Exceeding it stretches the copper and distorts pair geometry — the cable may 'work' but fail certification testing."
  },
  {
    "domain": "CTS-I: Rough-In & First Fix",
    "cert": "CTS-I",
    "duty": "C",
    "task": "C3",
    "q": "Cables pass through a 2-hour fire-rated wall. What is required at the penetration?",
    "options": [
      "Nothing — low voltage is exempt — AV cable penetrations need no firestopping in any rated wall",
      "Approved firestopping restoring the wall's fire rating — intumescent pillows, putty, or rated devices, installed per the listing",
      "Just caulk it — a bead of silicone caulk around the cables satisfies the firestop requirement for rated walls",
      "Fire ratings don’t apply to AV — fire-rated walls only restrict electrical and plumbing penetrations, never low-voltage AV cabling"
    ],
    "correct": 1,
    "explanation": "Every penetration of a rated assembly must be firestopped to maintain the rating. Inspectors check this. Listed firestop systems (not random caulk) installed per their listing are the requirement."
  },
  {
    "domain": "CTS-I: Rough-In & First Fix",
    "cert": "CTS-I",
    "duty": "C",
    "task": "C3",
    "q": "When should cables be labeled during rough-in?",
    "options": [
      "At the end of the project, once the final cable routes are known for the as-builts",
      "As they're pulled: both ends labeled to the cable schedule before the ceiling closes",
      "Only at the rack end, since the field end can be identified by its device location",
      "During commissioning, when each cable can be toned out and verified one at a time"
    ],
    "correct": 1,
    "explanation": "CTS-I Duty C Task 3: label at pull time. Once the ceiling closes, identifying 40 identical black cables is archaeology. Both ends, matching the cable schedule, before close-up."
  },
  {
    "domain": "CTS-I: Rough-In & First Fix",
    "cert": "CTS-I",
    "duty": "C",
    "task": "C3",
    "q": "A cable run exceeds the practical pull length with three 90-degree bends and no pull box. What is the correct fix?",
    "options": [
      "Pull harder with a stronger tugger — maximum pulling force overcomes any number of bends, so pull boxes are optional",
      "Add a pull box to break the run into manageable segments — the NEC limits total bends to 360° between pull points for good reason",
      "Use thinner cable — switching to a smaller-diameter cable lets the run navigate unlimited bends without a pull box",
      "Bends don’t affect pulls — 90-degree bends add zero pulling tension, so any number of bends is fine without adding pull boxes along the run"
    ],
    "correct": 1,
    "explanation": "360° of bend between pull points is the practical (and code-recognized) limit. Beyond it, friction makes damage likely. The fix is pathway design: pull boxes segmenting the run."
  },
  {
    "domain": "CTS-I: Rough-In & First Fix",
    "cert": "CTS-I",
    "duty": "C",
    "task": "C3",
    "q": "Why must cable ends be protected (capped/taped) during rough-in?",
    "options": [
      "For looks — capped cable ends look professional in progress photos, which is the only reason to protect them",
      "To keep out drywall dust, paint, and moisture that contaminate connectors and degrade terminations later",
      "It is not necessary — drywall dust and paint have no effect on connectors, so capping ends wastes material and time",
      "Only fiber needs protection — copper cable ends are immune to dust and moisture, so only fiber requires capping"
    ],
    "correct": 1,
    "explanation": "Construction debris in a connector is a future intermittent fault. Capped ends stay clean through drywall, paint, and flooring phases — a two-cent cap saves a two-hour troubleshooting call."
  },
  {
    "domain": "CTS-I: Rough-In & First Fix",
    "cert": "CTS-I",
    "duty": "C",
    "task": "C3",
    "q": "The electrician's conduit run for AV is full at 60% fill with their own wire. What is the issue?",
    "options": [
      "None — share it — conduit fill limits don’t apply when mixing trades, and AV signal cable runs fine alongside power conductors",
      "NEC fill limits (40% for 3+ cables) exist for heat and future pulls; plus AV signal cable shouldn't share conduit with power anyway (EMI, code)",
      "More fill is fine — 60% fill is acceptable for AV work, since signal cables generate no heat and the NEC fill limit applies only to power wiring",
      "AV cable is immune to interference — shielded AV cable cannot pick up EMI from power conductors, so sharing conduit is always safe"
    ],
    "correct": 1,
    "explanation": "Overfilled conduit violates code and cooks cable; and mixing power with AV signal cable invites hum and violates separation practices. The AV rough-in needs its own properly-sized pathway."
  },
  {
    "domain": "CTS-I: Rough-In & First Fix",
    "cert": "CTS-I",
    "duty": "C",
    "task": "C2",
    "q": "What is 'first fix' sequencing relative to drywall, and why does it matter?",
    "options": [
      "First fix happens after paint — substructure and cable go in once finishes are complete, so the AV work stays clean and protected",
      "First fix (substructure, cable, backboxes) happens BEFORE drywall close-up; after that, everything means cutting and patching",
      "Sequence doesn’t matter — first fix, drywall, and paint can happen in any order with no cost or quality impact",
      "Drywall first is better — closing up the walls before first fix protects the cable from drywall dust and damage"
    ],
    "correct": 1,
    "explanation": "The whole rough-in phase exists to get infrastructure in before concealment. Missing the window means destructive rework: cutting finished drywall, patching, repainting — at 10x the cost."
  },
  {
    "domain": "CTS-I: Rack Build & Wiring",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D1",
    "q": "Where should the heaviest equipment (large amplifiers, UPS) be placed in an AV rack?",
    "options": [
      "At the top for easy access — heavy amplifiers belong at the top where technicians can reach their controls without bending down",
      "At the bottom — low center of gravity prevents tip-over, and it keeps heat-rising paths clear for lighter gear above",
      "In the middle — centering the heaviest gear balances the rack perfectly, which is the recommended weight-distribution practice",
      "Outside the rack — amplifiers and UPS units should sit on the floor beside the rack to keep all heat out of the enclosure"
    ],
    "correct": 1,
    "explanation": "CTS-I Duty D Task 1: heavy at the bottom is both safety (a top-heavy rack tips when rolled) and thermal sense. Follow the rack elevation drawing — it was engineered, not suggested."
  },
  {
    "domain": "CTS-I: Rack Build & Wiring",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D1",
    "q": "Empty rack spaces between equipment should be filled with blanking panels primarily because:",
    "options": [
      "They look professional — blanking panels are purely cosmetic, filling gaps so the client doesn’t see empty rack space",
      "They stop hot exhaust from recirculating to equipment intakes, keeping front-to-back airflow and preventing thermal runaway",
      "They keep dust out of the open spaces, which matters more to equipment life than airflow does",
      "Panels are required by law — the NEC mandates blanking panels in every empty RU, with inspections failing racks that lack them"
    ],
    "correct": 1,
    "explanation": "Open RU gaps let hot exhaust loop back into intakes, cooking the gear above. Blanking panels enforce the designed airflow path. Thermal management is built, not hoped for."
  },
  {
    "domain": "CTS-I: Rack Build & Wiring",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D2",
    "q": "When wiring the rack, AC power cables and low-level analog audio cables should be:",
    "options": [
      "Bundled tightly together with the audio cables for the neatest, most serviceable rack dressing possible",
      "Routed separately with maximum practical separation, crossing at right angles, to minimize induced hum and interference",
      "Cable routing doesn't matter in a properly grounded rack — induced hum is a myth with modern equipment",
      "Wrapped in a tight spiral around the analog audio cables, so the power runs stay neatly organized right alongside them in the rack"
    ],
    "correct": 1,
    "explanation": "CTS-I Duty D Task 2: signal separation is fundamental rack craft. Parallel power/audio runs couple 60 Hz hum inductively; separation plus right-angle crossings keeps the noise floor down."
  },
  {
    "domain": "CTS-I: Rack Build & Wiring",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D2",
    "q": "What is a service loop, and why does every rack cable need one?",
    "options": [
      "Extra cable coiled for decoration behind the rack, since a full coil of spare wire makes the installation look professional",
      "Slack left at each termination so equipment can be pulled forward for service and re-terminated without replacing the run",
      "A loop that improves signal quality by conditioning the electrons, reducing jitter and extending the cable's rated distance",
      "Service loops are wasteful and should be eliminated, because tight, exact-length cables are always easier to service and repair"
    ],
    "correct": 1,
    "explanation": "Equipment needs to slide out for service; connectors get re-terminated. Without a service loop, the first repair means re-pulling cable. Leave manageable slack, dressed neatly."
  },
  {
    "domain": "CTS-I: Rack Build & Wiring",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D2",
    "q": "For bundling Cat6A patch cables in a rack, what should you use instead of nylon zip ties pulled tight?",
    "options": [
      "Nothing — let them hang — unsecured Cat6A patch cables hanging freely in the rack avoid all pressure points and certify reliably",
      "Velcro (hook-and-loop) straps, snug but not crushing — tight zip ties deform pair geometry and can fail Cat6A certification",
      "Metal hose clamps — stainless hose clamps torqued firmly around the bundle provide the most secure and professional cable management in the rack",
      "Tape — wrap electrical tape tightly around the Cat6A bundle every few inches; it holds firmly and leaves pair geometry unaffected"
    ],
    "correct": 1,
    "explanation": "Crushed Cat6A fails certification. Velcro provides support without point-loading the pairs. This is one of the most common (and avoidable) rack wiring defects."
  },
  {
    "domain": "CTS-I: Rack Build & Wiring",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D9",
    "q": "What is the purpose of a sequenced power controller in an AV rack?",
    "options": [
      "It makes the whole rack turn on faster — sequenced controllers boot every device simultaneously for the quickest possible system startup",
      "It powers equipment on/off in a defined order with delays — preventing inrush current trips and protecting speakers from turn-on thumps",
      "It saves electricity — the sequencer cuts standby power to zero, which is its primary purpose in the rack",
      "Sequencing is unnecessary — flipping one master breaker powers the rack safely, and inrush current is a myth"
    ],
    "correct": 1,
    "explanation": "Everything slamming on at once can trip breakers (inrush), and amplifiers powering before source muting causes speaker-damaging thumps. Sequencing: sources first, amps last on; reverse on shutdown."
  },
  {
    "domain": "CTS-I: Rack Build & Wiring",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D1",
    "q": "The rack elevation shows 1RU ventilation gaps above each amplifier. The installer wants to close them up to fit an extra device. What is the correct response?",
    "options": [
      "Go ahead — space is tight — rack space is expensive, and ventilation gaps are just empty air that could hold revenue-generating equipment",
      "No: the gaps are part of the thermal design, and closing them risks overheating. Issue an RFI if space is truly short",
      "Amplifiers don’t need ventilation — modern amplifiers run cool enough that ventilation gaps are a legacy requirement from the tube era",
      "Just add a fan later — close the gaps now to fit the gear, and bolt on a fan afterward if anything gets warm"
    ],
    "correct": 1,
    "explanation": "Thermal design is engineered: 1RU gaps, blanking panels, and fan placement work as a system. Improvising the layout improvises the cooling — usually discovered when gear starts thermal-shutting down in July."
  },
  {
    "domain": "CTS-I: Rack Build & Wiring",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D2",
    "q": "Why must the AV rack have a proper equipment grounding/bonding connection to the building ground?",
    "options": [
      "Grounding is optional for low-voltage racks — bonding adds no real safety benefit and only complicates the cable management inside the rack",
      "Safety and noise: bonding gives fault current a path so breakers trip instead of energizing the chassis, and it helps prevent ground loops",
      "It is what lets each device's safety ground be removed, so power cords can safely use two-prong plugs",
      "Rack grounding is strictly the electrician's concern — the AV installer should never bond equipment grounds to the building steel"
    ],
    "correct": 1,
    "explanation": "An ungrounded rack is a shock hazard and a hum generator. Bond the rack to the technical/building ground per the drawings — never daisy-chain grounds or lift them to 'fix' hum."
  },
  {
    "domain": "CTS-I: Rack Build & Wiring",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D2",
    "q": "Patch panel ports in the rack should be labeled:",
    "options": [
      "With a marker when you remember — hand-labeling ports whenever it occurs to you is the standard field practice",
      "To the labeling scheme at both ends, matching the cable schedule, so any port is traceable without toning",
      "Labels fall off anyway — adhesive labels never survive, so labeling patch panels is wasted effort",
      "Only the active ports — label just the ports in use today; future ports get labeled when they’re patched"
    ],
    "correct": 1,
    "explanation": "Every port labeled to the scheme, matching the far-end label and the cable schedule. Future moves/adds/changes and troubleshooting depend on it. Unlabeled panels are a tax on every future visit."
  },
  {
    "domain": "CTS-I: Rack Build & Wiring",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D2",
    "q": "A rack with 3,000W of equipment is fed from a single 20A/120V circuit (2,400W max continuous at 80%). What is the problem?",
    "options": [
      "No problem — circuit breakers are conservative by design, so a 20A breaker will carry 3,000W continuously without ever tripping",
      "The load exceeds the circuit's continuous rating — the design needs additional circuits; the installer must flag this, not just plug everything in",
      "20A/120V circuits can safely carry any connected load, because the breaker's job is to adapt its rating to whatever is plugged in",
      "Turn down the amplifier volume to reduce the rack's draw, since the audio power draw is the only load that counts toward the branch circuit's capacity"
    ],
    "correct": 1,
    "explanation": "Continuous loads are limited to 80% of breaker rating: 20A × 120V × 0.8 = 1,920W continuous. A 3,000W rack needs multiple dedicated circuits. Overloading means nuisance trips — discovered during the client's first big event."
  },
  {
    "domain": "CTS-I: Rack Build & Wiring",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D2",
    "q": "What is 'wire dress' and why do clients judge it?",
    "options": [
      "It is purely cosmetic — wire dress affects only appearance, and tangled, unlabeled cable performs and services identically to neatly dressed cable",
      "Neat, routed, labeled and secured cabling: it shows craftsmanship, makes service possible, and is often the client's only visible quality check",
      "Wire dress slows down the job — neat cabling wastes billable hours, so the fastest installers leave cable as it falls",
      "Only the front of the rack matters — the rear of the rack is never seen, so rear cable can be left tangled and unlabeled"
    ],
    "correct": 1,
    "explanation": "The client can't judge your DSP programming, but they CAN see the rack. Clean wire dress — bundled, routed, labeled, serviceable — is professionalism made visible, and it's what gets photographed."
  },
  {
    "domain": "CTS-I: Rack Build & Wiring",
    "cert": "CTS-I",
    "duty": "A",
    "task": "A4",
    "q": "Before the rack leaves the shop, what final staging check should be performed?",
    "options": [
      "None — it was built carefully — careful assembly eliminates all defects, so power-on testing in the shop wastes billable hours",
      "A power-on test: every device powers in sequence, firmware versions are checked, basic signal flow works, and issues are logged on the bench",
      "Just close the doors — the rack doors protect the gear in transit, which is the only staging check that matters",
      "Testing happens on site only — shop testing is discouraged, since the site's power and signal conditions can’t be faithfully replicated on the bench"
    ],
    "correct": 1,
    "explanation": "The shop power-on test catches DOA gear, wrong firmware, and wiring errors where they're cheapest to fix. A rack that first powers up on the jobsite is a gamble."
  },
  {
    "domain": "CTS-I: Rack Build & Wiring",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D2",
    "q": "Cable bend radius inside the rack for Cat6A patch cords should be respected because:",
    "options": [
      "It looks tidy — bend radius is an aesthetic guideline; tight bends at the patch panel look neat and perform identically",
      "Tight bends at the patch panel degrade return loss and can fail certification — maintain at least 4x the cable diameter",
      "Bend radius is a myth — copper cable can be bent at any angle with zero effect on return loss or certification",
      "Only fiber has bend limits — copper twisted-pair has no minimum bend radius, so Cat6A can be folded sharply at the panel"
    ],
    "correct": 1,
    "explanation": "The 90-degree jam of patch cords into a panel is a classic cert failure point. Maintain bend radius with proper managers and routing — especially with Cat6A's thicker construction."
  },
  {
    "domain": "CTS-I: Mounting & Distribution",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D4",
    "q": "You are mounting an 85-inch display (120 lbs) on a metal-stud wall. What is the correct approach?",
    "options": [
      "Toggle bolts directly into the drywall will hold 120 lbs safely, since modern toggle bolts are rated for any commercial display weight",
      "Open the wall and add plywood backing or span studs with a proper mount rated for the load — 120 lbs on drywall anchors alone will fail",
      "Drywall anchors are fine for any display weight, because the mount distributes the load evenly across the entire wall surface",
      "Lean the display against the wall on a credenza, since wall mounting always voids the manufacturer's warranty on 85-inch panels"
    ],
    "correct": 1,
    "explanation": "CTS-I Duty D Task 4: mounts must attach to structure. Metal studs alone won't hold 120 lbs reliably; backing (plywood spanning studs) or structural attachment is required. Drywall anchors for a display this size are a collapse waiting to happen."
  },
  {
    "domain": "CTS-I: Mounting & Distribution",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D4",
    "q": "A projector mount installation requires a safety cable (tether) in addition to the primary mount because:",
    "options": [
      "It looks professional — the safety cable is a cosmetic touch that signals quality workmanship to the client",
      "Secondary retention is standard safety practice: if the primary attachment fails, the tether keeps the projector off the occupants",
      "Safety cables are optional — modern projector mounts are engineered not to fail, so a secondary tether adds nothing to the installation",
      "Projectors never fall — properly torqued mounts have a zero failure rate, making safety tethers redundant"
    ],
    "correct": 1,
    "explanation": "Overhead equipment gets secondary retention, period. The tether is independently attached to structure and rated for the load. This is life-safety, not best practice decoration."
  },
  {
    "domain": "CTS-I: Mounting & Distribution",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D9",
    "q": "When aiming installed loudspeakers, what should the installer verify?",
    "options": [
      "That they look straight — visually aligning the cabinets so they appear level is the complete aiming procedure",
      "Aim per the design's coverage plan (splay angles, down-tilt), then verify coverage with measurement — not by eye alone",
      "Louder is better — aiming is irrelevant as long as the system plays loudly enough to reach every seat",
      "Aiming doesn’t matter — modern loudspeakers disperse sound evenly in all directions, so aiming has no effect on coverage"
    ],
    "correct": 1,
    "explanation": "Coverage was calculated; aiming realizes it. Set splay and tilt per the design, then verify with SPL measurements across seats. 'Looks about right' is how the back rows get nothing."
  },
  {
    "domain": "CTS-I: Mounting & Distribution",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D4",
    "q": "Equipment installed inside millwork (credenza) requires what special attention?",
    "options": [
      "None — it’s hidden — equipment inside millwork needs no special treatment since it’s out of sight and the wood insulates it",
      "Ventilation (active cooling if needed), service access (removable panels/rails), and cable management — hidden gear still needs air and access",
      "Millwork is naturally cool — wooden credenzas dissipate heat passively, so the enclosed AV gear never overheats and needs no extra ventilation at all",
      "Access is never needed — once installed in millwork, AV equipment runs forever without service, so access panels waste cabinetry"
    ],
    "correct": 1,
    "explanation": "Credeza installs cook equipment without ventilation planning and become unserviceable without access panels. Coordinate cutouts, fans, and pull-out rails before the millwork is finished."
  },
  {
    "domain": "CTS-I: Mounting & Distribution",
    "cert": "CTS-I",
    "duty": "B",
    "task": "B3",
    "q": "A floor box was roughed in 2 feet from where the conference table will sit. What is the least-bad option?",
    "options": [
      "Leave it in place — 2 feet from the table is well within cable reach, and a low-profile floor box in the open floor is not a trip hazard worth relocating",
      "Coordinate now: move the box before flooring, adjust the table layout, or get a documented client decision — a box in the walking path is a trip hazard",
      "Cover it with a rug — a rug over the floor box hides it from view and softens the edge, which resolves the trip hazard at zero cost and keeps the schedule intact",
      "Install a surface-mount cord cover from the box to the table, which removes the need to relocate anything"
    ],
    "correct": 1,
    "explanation": "Mislocated floor boxes are caught at layout verification — before finishes. After flooring, every option is expensive. Escalate early with photos and measurements."
  },
  {
    "domain": "CTS-I: Mounting & Distribution",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D4",
    "q": "Outdoor-rated displays or projectors differ from indoor models in what key installation respects?",
    "options": [
      "They are identical products — indoor displays and projectors perform exactly the same when mounted outdoors, with no installation changes needed",
      "Environmental sealing (IP rating), operating temperature range, brightness for daylight, and proper drainage/ventilation of the enclosure",
      "Outdoor models differ only in price — the higher cost covers marketing, while the internal components are exactly the same",
      "Indoor models work fine outside — a standard display survives rain, heat, and direct sunlight without any protective enclosure"
    ],
    "correct": 1,
    "explanation": "Outdoor installs battle water, temperature extremes, and sunlight. The enclosure's IP rating, thermal management, and drainage determine whether it survives the first storm — verify ratings match the actual exposure."
  },
  {
    "domain": "CTS-I: Mounting & Distribution",
    "cert": "CTS-I",
    "duty": "C",
    "task": "C2",
    "q": "What is the working load limit (WLL) and why must rigging hardware never exceed it?",
    "options": [
      "WLL is a suggestion — the working load limit is a conservative guideline, and exceeding it by 50% is standard rigging practice",
      "The maximum load the manufacturer rates the hardware for in normal use; exceeding it risks failure, and overhead failures injure or kill",
      "WLL only applies to chain motors — shackles, slings, and clamps have no load limits, so only motors need WLL compliance",
      "Stronger hardware is always available — if the load exceeds the WLL, just use the next hardware size up without needing any engineering review"
    ],
    "correct": 1,
    "explanation": "Rigging hardware is rated with safety factors (often 5:1 or 10:1). WLL is the legal and safe working maximum. Exceeding it — or using unrated hardware — is how rigging fails catastrophically."
  },
  {
    "domain": "CTS-I: Mounting & Distribution",
    "cert": "CTS-I",
    "duty": "C",
    "task": "C2",
    "q": "In seismic zones, AV equipment installations may require:",
    "options": [
      "Nothing special — standard rack installation survives earthquakes undamaged, so seismic zones need no additional measures",
      "Seismic bracing/restraints for racks and suspended equipment per local code — earthquakes turn unsecured racks into hazards",
      "Earthquakes don’t affect AV — AV equipment is too light to be damaged by seismic activity, so restraints are pointless",
      "Only California needs this — seismic bracing is a California-only rule with no application in any other seismic zone"
    ],
    "correct": 1,
    "explanation": "Seismic codes require racks bolted down, overhead equipment with seismic-rated attachments, and sometimes bracing. Check the AHJ requirements — it's structural life-safety, not optional."
  },
  {
    "domain": "CTS-I: Mounting & Distribution",
    "cert": "CTS-I",
    "duty": "C",
    "task": "C3",
    "q": "Wall penetrations for cable between rooms must be:",
    "options": [
      "Just drilled and left open — an open hole is fine for low-voltage cable, and firestopping doesn’t apply to AV penetrations",
      "Sleeved, bushed (to protect cable from sharp edges), and firestopped per the wall's rating — protecting both cable and fire separation",
      "As large as possible — oversized holes make future cable pulls easy, and the wall’s fire rating is unaffected by the size of the penetration",
      "Penetrations don’t matter — low-voltage cable is exempt from all wall-penetration requirements in every jurisdiction"
    ],
    "correct": 1,
    "explanation": "Bushings protect cable from cut metal edges; firestop maintains the wall rating. An open, sharp-edged hole is both a cable-killer and a code violation."
  },
  {
    "domain": "CTS-I: Mounting & Distribution",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D4",
    "q": "Distributed ceiling equipment (speakers, mics, WAPs) across a large floor should be installed:",
    "options": [
      "Wherever is most convenient for each device on installation day, adjusting the locations freely on the fly as the crew works through the floor",
      "Per the coordinated reflected ceiling plan, with locations checked against lights, sprinklers and HVAC before any hole is cut",
      "In a straight line at fixed, even spacing regardless of the reflected ceiling plan or other trades' devices",
      "Reflected ceiling plans are optional reference drawings and do not govern where ceiling equipment is placed"
    ],
    "correct": 1,
    "explanation": "CTS-I Duty D Task 3: distributed equipment follows the coordinated RCP. Verifying each location against other trades' devices before cutting prevents the speaker-in-the-sprinkler-head classic."
  },
  {
    "domain": "CTS-I: Termination & Cable Standards",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D5",
    "q": "When terminating RJ45 connectors for AV-over-IP, which wiring standard matters most?",
    "options": [
      "The standard doesn't matter as long as both ends of a cable match — mixing T568A and T568B across the facility causes no issues",
      "Consistency — pick T568A or T568B and use it on EVERY termination; mixing standards within a facility creates confusion and faults",
      "Always terminate to T568A for AV — T568B introduces crosstalk on AV-over-IP links and must never be used in the facility",
      "Always terminate to T568B for AV — T568A fails HDCP handshakes on every AV-over-IP encoder in the system"
    ],
    "correct": 1,
    "explanation": "CTS-I Duty D Task 5: electrically, A and B both work if both ends match. The standard that matters is consistency across the facility. Document which scheme the project uses and terminate everything to it."
  },
  {
    "domain": "CTS-I: Termination & Cable Standards",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D5",
    "q": "For Cat6 terminations, the pairs should be untwisted no more than:",
    "options": [
      "2 inches — untwisting 2 inches at the jack is standard and has no effect on NEXT or certification",
      "About 0.5 inches (13mm) — excessive untwist degrades NEXT performance and can fail certification",
      "6 inches — untwist pairs a full 6 inches for easier termination; untwist length does not affect NEXT",
      "Untwist doesn’t matter — pairs can be fully untwisted because NEXT depends on the jacket, not the twist"
    ],
    "correct": 1,
    "explanation": "Pair untwist at the termination is the #1 cause of Cat6 certification failures. Keep it under ~13mm, seat the pairs fully, and terminate with proper 110/RJ45 tooling. Neat terminations aren't vanity — they're performance."
  },
  {
    "domain": "CTS-I: Termination & Cable Standards",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D5",
    "q": "When soldering (or terminating) an XLR connector for a balanced microphone line, the correct pinout is:",
    "options": [
      "Pin 1 hot (+), Pin 2 ground/shield, Pin 3 cold (−)",
      "Pin 1 ground/shield, Pin 2 hot (+), Pin 3 cold (−)",
      "Pin 1 ground/shield, Pin 2 cold (−), Pin 3 hot (+)",
      "Pin 1 cold (−), Pin 2 hot (+), Pin 3 ground/shield"
    ],
    "correct": 1,
    "explanation": "Pin 1 = shield/ground, Pin 2 = hot (+), Pin 3 = cold (−). Reversed polarity between mics causes phase cancellation (thin sound, weak bass). Consistent pinout across every XLR is fundamental."
  },
  {
    "domain": "CTS-I: Termination & Cable Standards",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D2",
    "q": "Speaker wire polarity (positive to positive) matters because:",
    "options": [
      "It doesn’t matter — speakers work identically either way, and polarity has no audible effect",
      "One reversed speaker in a pair causes phase cancellation: bass thins out and imaging collapses",
      "Polarity only matters for the left speaker in a stereo pair; the right speaker is unaffected",
      "Polarity affects only the overall volume level, so reversed wiring just makes the speaker quieter"
    ],
    "correct": 1,
    "explanation": "Two speakers moving in opposite directions cancel each other's low frequencies. Verify polarity with a battery pop, phase tester, or measurement — especially on distributed 70V systems where one reversed tap hides among dozens."
  },
  {
    "domain": "CTS-I: Termination & Cable Standards",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D5",
    "q": "Before mating fiber optic connectors, what is the essential step?",
    "options": [
      "Blow on them — a sharp breath across the end-face removes dust effectively, and it’s the fastest field-cleaning method available on site",
      "Inspect and clean both the connector end-face and the adapter — a speck of dust causes massive insertion loss or permanent damage",
      "Fiber doesn’t need cleaning — factory-polished end-faces are permanently clean, so field cleaning is unnecessary",
      "Wipe them on your shirt — a quick wipe on a cotton shirt polishes the end-face and is standard field practice"
    ],
    "correct": 1,
    "explanation": "Contamination is the #1 cause of fiber link failure. Inspect with a scope, clean with proper tools (click cleaners, lint-free wipes), and cap when unmated. A dirty connector can destroy the mating connector's polish."
  },
  {
    "domain": "CTS-I: Termination & Cable Standards",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D2",
    "q": "A shielded twisted-pair (F/UTP) cable's drain wire should be terminated:",
    "options": [
      "Left floating at both ends — the drain wire should never contact ground anywhere, since any bond creates interference",
      "Per the design, typically bonded at one end (often the rack or patch panel) to avoid ground loops, following the grounding scheme",
      "Cut off and discarded — the drain wire is packing material with no electrical function, so trim it flush at both ends",
      "Wrapped around the power cable — coil the drain wire around the nearest power conductor so it can shunt any interference to ground"
    ],
    "correct": 1,
    "explanation": "Shield grounding follows the design's grounding scheme — commonly bonded at the telecommunications grounding point, not at every device (which creates ground loops). Random shield grounding causes the hum the shield was meant to prevent."
  },
  {
    "domain": "CTS-I: Termination & Cable Standards",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D5",
    "q": "What is the practical field limit for passive HDMI cable runs at 4K60?",
    "options": [
      "100 meters — passive HDMI cables carry 4K60 reliably to 100m, so no converters are needed for long runs",
      "Roughly 3–5 meters for reliable 18 Gbps 4K60 — beyond that, use active optical HDMI or convert to HDBaseT/fiber/AV-over-IP",
      "50 meters — a quality passive HDMI cable handles 4K60 to 50m, and only runs beyond that need active conversion",
      "Passive HDMI has no limit — copper HDMI has no distance restriction at any resolution, so active cables are a marketing upsell"
    ],
    "correct": 1,
    "explanation": "Passive HDMI at full 18 Gbps is a very short-haul medium. Long runs need active optical cables or conversion to a proper long-haul transport. The '50-foot 4K HDMI cable' that 'mostly works' is a service call waiting to happen."
  },
  {
    "domain": "CTS-I: Termination & Cable Standards",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D5",
    "q": "BNC connectors for SDI video should be terminated with:",
    "options": [
      "Pliers and hope — squeeze the BNC barrel with standard pliers; if it doesn’t fall off immediately, the termination is good for SDI",
      "Proper crimp or compression tooling with the correct die for the cable type — and a tug test; a loose BNC causes intermittent video",
      "Any crimper — every crimp tool works on every BNC and cable type, so the specific die and tooling don’t affect SDI reliability",
      "Twist-on connectors are fine for SDI — twist-on BNCs meet the same return-loss specs as crimped connectors for broadcast video"
    ],
    "correct": 1,
    "explanation": "SDI is unforgiving of bad connectors: impedance discontinuities cause reflections and dropouts. Use the right die, the right connector for the exact cable, and verify with a signal check — not just a visual."
  },
  {
    "domain": "CTS-I: Termination & Cable Standards",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D6",
    "q": "After terminating a Cat6A run, what proves the termination is good?",
    "options": [
      "The link light comes on — an active link LED proves the termination meets Category 6A performance, so no further testing is needed",
      "Certification testing with a calibrated certifier against the Category 6A standard — link lights only prove continuity, not performance",
      "It looks neat — a tidy, well-dressed termination is the accepted proof of quality; certification testing is redundant if the work looks professional",
      "Pinging the device — a successful ping through the run proves the termination performs to Category 6A, replacing certification testing"
    ],
    "correct": 1,
    "explanation": "A link light means two wires connect; certification proves the run meets NEXT, return loss, and alien crosstalk limits. For AV-over-IP carrying 10G, certification is the only proof that matters — document every result."
  },
  {
    "domain": "CTS-I: Termination & Cable Standards",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D5",
    "q": "Balanced audio lines (XLR/TRS) reject interference because:",
    "options": [
      "They are magic — balanced lines use proprietary noise-eating circuitry that no textbook explains; it simply works",
      "The receiving device subtracts the inverted cold leg from the hot leg — noise picked up equally on both legs cancels out (common-mode rejection)",
      "They use thicker wire — balanced cables reject interference purely because their conductors are a heavier gauge than the conductors in unbalanced cable",
      "Balanced lines don’t reject interference — balanced and unbalanced lines perform identically in noisy environments"
    ],
    "correct": 1,
    "explanation": "Common-mode rejection is why pro audio runs balanced: interference couples equally into both conductors and subtracts to (near) zero at the differential input. This only works if both legs are intact — a broken cold leg kills the rejection."
  },
  {
    "domain": "CTS-I: Termination & Cable Standards",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D4",
    "q": "When terminating 70V speaker lines, what must be verified at each tap?",
    "options": [
      "Nothing — 70V is foolproof — constant-voltage taps cannot be miswired or shorted, so verification is pointless",
      "Correct tap setting per the design, solid connections, and no shorts — one shorted tap can take down the entire 70V run",
      "Only the wire color — matching jacket colors at each tap is the complete verification; electrical checks are unnecessary",
      "70V systems can’t short — the transformer isolation makes short circuits physically impossible on 70V speaker lines"
    ],
    "correct": 1,
    "explanation": "A single shorted 70V tap silences every speaker on that run, and the fault hides among dozens of ceiling speakers. Verify tap settings against the design and test for shorts before closing ceilings."
  },
  {
    "domain": "CTS-I: Termination & Cable Standards",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D5",
    "q": "Compression vs. crimp RJ45 connectors: what is the practical difference for the installer?",
    "options": [
      "No difference — compression and crimp connectors are fully interchangeable, and any generic crimp tool works correctly on every RJ45 connector brand",
      "Both work with the correct tooling for that connector; mixing brands with the wrong die or tool causes failures, so follow the manufacturer's tooling",
      "Compression is always better — compression connectors outperform crimp connectors so completely that crimp tooling has no place on a professional jobsite",
      "Crimp is always better — crimp connectors outperform compression connectors so completely that compression tooling has no place on a professional jobsite"
    ],
    "correct": 1,
    "explanation": "The connector system (connector + specified tool) matters more than the style. Using Brand X connectors with Brand Y's crimper is the classic source of intermittent RJ45s. Match the tooling to the connector."
  },
  {
    "domain": "CTS-I: Configuration & Networking",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D6",
    "q": "AV devices on the corporate network should use static IP addresses (or DHCP reservations) rather than plain DHCP because:",
    "options": [
      "DHCP doesn’t work — DHCP servers cannot assign addresses to AV devices at all, so static addressing is the only functional option",
      "Control systems, monitoring, and documentation reference devices by address — a changed address breaks control and remote management",
      "Static IPs are faster — statically addressed devices process network traffic measurably faster than DHCP devices, improving AV performance",
      "DHCP is insecure — DHCP leases expose AV devices to network attacks, while statically addressed devices are invisible to hackers"
    ],
    "correct": 1,
    "explanation": "CTS-I Duty D Task 6: when the touch panel can't find the DSP because DHCP reassigned it, the room is down. Static IPs or documented reservations, recorded in the IP schedule, keep the system deterministic."
  },
  {
    "domain": "CTS-I: Configuration & Networking",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D6",
    "q": "IGMP snooping must be enabled on switches carrying Dante multicast flows because:",
    "options": [
      "It makes audio sound better — IGMP snooping applies audio enhancement to multicast streams, improving clarity and frequency response",
      "Without it, multicast floods every switch port, saturating links and breaking audio; snooping limits multicast to ports that requested it",
      "Dante requires it by law — federal regulations mandate IGMP snooping on any network carrying Dante, with fines for non-compliance",
      "It is optional — modern switches handle multicast flooding automatically, so IGMP snooping is a legacy setting with no effect on Dante"
    ],
    "correct": 1,
    "explanation": "Unmanaged multicast = every Dante flow sent to every port = network meltdown. IGMP snooping (plus a querier) prunes multicast to interested ports only. This is the most common network misconfiguration in AV-over-IP failures."
  },
  {
    "domain": "CTS-I: Configuration & Networking",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D6",
    "q": "QoS/DSCP markings for AV traffic (e.g., PTP clocking at the highest priority) are configured to:",
    "options": [
      "Make the whole network run faster by doubling the switch's clock speed — so every packet, including bulk file transfers, arrives noticeably sooner",
      "Ensure time-critical AV traffic (PTP, audio) is prioritized over bulk data during congestion — preventing clock dropouts and audio glitches",
      "Guarantee that QoS markings replace the need for gigabit cabling — since marked packets need no bandwidth, switches can run on 100 Mbps links",
      "Encrypt all AV traffic at the switch port — so eavesdroppers cannot intercept PTP timestamps or audio packets traveling on the wire"
    ],
    "correct": 1,
    "explanation": "When the network congests, unmarked AV traffic waits behind file transfers. DSCP markings (PTP highest, then media) tell switches what can't wait. The installer verifies the markings survive end-to-end."
  },
  {
    "domain": "CTS-I: Configuration & Networking",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D6",
    "q": "A Dante device shows a clocking fault (red clock icon). What is the first thing to check?",
    "options": [
      "Replace the device — a red clock icon means the Dante hardware has failed permanently, so swap the unit before checking anything else",
      "Network QoS and PTP: is QoS configured for PTP priority, is there exactly one leader clock, and is multicast PTP reaching the device?",
      "Turn it off and on forever — repeatedly power-cycling the device eventually clears the clock fault without any network investigation",
      "Clock faults fix themselves — Dante clocking faults are transient by design and always resolve without installer intervention"
    ],
    "correct": 1,
    "explanation": "Dante clock faults are almost always network issues: missing QoS, blocked multicast, or competing leaders. Check switch config and clock leader election in Dante Controller before touching hardware."
  },
  {
    "domain": "CTS-I: Configuration & Networking",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D7",
    "q": "When loading a control system program to the processor, what must be verified afterward?",
    "options": [
      "Nothing — uploads always work — a successful file transfer guarantees every button and preset operates exactly as programmed",
      "Every button, preset, and automated function operates as the sequence of operations describes — full functional test, not just 'the panel lights up'",
      "That the file transferred — confirming the upload completed is the full verification; the code itself needs no testing",
      "Only the power button — testing the power on/off button proves the program loaded correctly, which covers all of the other panel functions by implication"
    ],
    "correct": 1,
    "explanation": "CTS-I Duty D Task 7: loading code is step one; verification is the job. Exercise every UI element against the sequence of operations. The untested preset is the one that fails during the board meeting."
  },
  {
    "domain": "CTS-I: Configuration & Networking",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D7",
    "q": "EDID issues manifest as wrong resolutions or no video. What is the installer's EDID management task?",
    "options": [
      "Ignore EDID — it’s automatic — sources and displays always negotiate the perfect format, so EDID management is now obsolete",
      "Check that the source sees a compatible EDID through the whole chain, and set managed EDIDs where fixed formats are designed",
      "EDID only matters for older equipment — modern 4K sources and displays negotiate on their own and need no EDID management",
      "Replace the cables — EDID faults are almost always caused by defective HDMI cables, so swapping every cable is the real fix"
    ],
    "correct": 1,
    "explanation": "EDID is the display telling the source what it accepts. Through switchers and extenders, that conversation can break — the installer verifies negotiated resolutions end-to-end and applies managed EDIDs per the design."
  },
  {
    "domain": "CTS-I: Configuration & Networking",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D6",
    "q": "Before connecting AV devices to the client's production network, what coordination is required?",
    "options": [
      "Just plug in — it’s easier to ask forgiveness than permission — corporate networks auto-configure unknown devices, so IT coordination just wastes time",
      "Coordinate with IT: approved VLANs, IP scheme, 802.1X credentials if required, and a change window — rogue devices trigger security incidents",
      "Networks are plug-and-play — every corporate network automatically provisions AV devices with the correct VLAN, QoS, and security policies",
      "AV devices are invisible to IT — corporate network monitoring cannot detect AV endpoints, so unauthorized connections trigger no security response"
    ],
    "correct": 1,
    "explanation": "Rogue devices on enterprise networks get quarantined — or worse, trigger incident response. Coordinate with IT: which VLAN, which addresses, what authentication. Get it in writing."
  },
  {
    "domain": "CTS-I: Configuration & Networking",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D6",
    "q": "A network cable tester shows 'split pair' on a newly terminated run. What does this mean?",
    "options": [
      "The cable is fine — ‘split pair’ is the tester’s term for a correctly wired run, so the cable will certify and perform at full rated speed",
      "Wires from different twisted pairs ended up on one pin pair (e.g., 3 and 6) at termination; it may pass continuity but fails certification",
      "The tester is broken — certification testers cannot detect split pairs, so a split-pair reading is always a false alarm and the run should be certified as-is",
      "Split pairs are normal — mixing conductors between pairs at the termination is acceptable practice and the run will still certify to Category 6"
    ],
    "correct": 1,
    "explanation": "Split pairs pass a simple wiremap but destroy crosstalk performance — the classic 'link light on, gigabit won't negotiate' fault. Re-terminate carefully, keeping pairs together."
  },
  {
    "domain": "CTS-I: Configuration & Networking",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D7",
    "q": "When configuring a DSP, what is 'gain structure' in practical commissioning terms?",
    "options": [
      "Turning everything to maximum — push every input gain and fader to full scale; the DSP’s built-in limiters will sort out the levels automatically",
      "Setting input gains so nominal signals arrive at healthy levels (e.g., −20 dBFS average, peaks below clip), then staging outputs, verified on meters",
      "Gain structure is automatic — modern DSPs auto-calibrate every input and output level at power-up, so manual gain staging is obsolete",
      "Only the amplifier matters — gain structure concerns only the power amplifier’s input knob; DSP input levels have no effect on noise or clipping"
    ],
    "correct": 1,
    "explanation": "Commissioning sets gain stage by stage with meters: mic preamps peaking around −12 dBFS, processing unity where possible, outputs driving amps to rated input sensitivity. Done right, the system is quiet and clip-free."
  },
  {
    "domain": "CTS-I: Configuration & Networking",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D6",
    "q": "Multicast vs. unicast Dante flows: when does the installer need to care?",
    "options": [
      "Never — the Dante devices and the switch automatically negotiate the flow type, so multicast and unicast behave identically with zero configuration differences",
      "Multicast (one-to-many) needs IGMP snooping and a querier; unicast is simpler but uses bandwidth per receiver, so the choice drives switch setup and bandwidth",
      "They are identical in every way — multicast and unicast consume the same bandwidth per receiver and need the same IGMP settings, so no planning is required",
      "Dante only does unicast — each receiver gets a dedicated point-to-point stream, so IGMP snooping and querier settings are never required on any Dante network"
    ],
    "correct": 1,
    "explanation": "A multicast flow to 20 receivers uses one stream's bandwidth; unicast uses 20. But multicast demands proper IGMP infrastructure. The installer verifies the network matches the flow design in Dante Controller."
  },
  {
    "domain": "CTS-I: Configuration & Networking",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D7",
    "q": "What is the installer's role when the control system needs to integrate with the building's lighting or HVAC?",
    "options": [
      "Guess the protocol — cycle through common baud rates and command strings until the lights respond; formal documentation can be written after handover if there’s time",
      "Verify the integration interface (API, BACnet, contact closure, RS-232) with the other trade, test the real commands, and document them during commissioning",
      "Integrations always work first try — lighting and HVAC protocols are fully standardized across manufacturers, so the control system connects with no configuration or testing",
      "Skip integration testing — the lighting contractor certifies their own system independently, so the AV installer has no responsibility to verify combined operation"
    ],
    "correct": 1,
    "explanation": "Third-party integration is where 'it should work' goes to die. Get the protocol documentation, test every command both directions, and confirm with the other trade's technician on site."
  },
  {
    "domain": "CTS-I: Configuration & Networking",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D6",
    "q": "After configuring all networked AV devices, what documentation must be left?",
    "options": [
      "None — every device stores its own configuration internally, so future technicians can recover everything by logging into each unit one at a time",
      "Updated IP schedule, login credentials (secured handover), configuration backups, and firmware versions — the next technician's starting point",
      "A sticky note with the admin password taped inside the rack door, since one shared credential covers all documentation needs",
      "Documentation is the designer's job at bid time; the installer only configures, so no network records need to leave the jobsite"
    ],
    "correct": 1,
    "explanation": "Configuration without documentation is a trap for the next person. Back up every device config, record the IP scheme as-built, and hand over credentials securely. Future-you says thanks."
  },
  {
    "domain": "CTS-I: Testing & Calibration",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D8",
    "q": "What is the correct order of operations when testing a newly installed AV system?",
    "options": [
      "Test everything at once — powering the whole system and pressing buttons immediately is the fastest valid test sequence",
      "Infrastructure first (cable certification, power), then device-by-device signal flow, then subsystems, then full system operation",
      "Start with the control system — program the touch panel first, since infrastructure testing can’t begin until control is online",
      "Testing order doesn’t matter — infrastructure, devices, and subsystems can be verified in any sequence with identical results"
    ],
    "correct": 1,
    "explanation": "CTS-I Duty D Task 8: test in layers. Certified cable and correct power first — then each device, then signal paths, then the whole system. Testing top-down wastes hours chasing symptoms of a bad cable."
  },
  {
    "domain": "CTS-I: Testing & Calibration",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D8",
    "q": "A multimeter shows 0 ohms between the + and − of a 70V speaker run. What does this indicate?",
    "options": [
      "Normal 70V operation — tapped transformers present nearly zero ohms when the run is wired correctly",
      "A short circuit somewhere on the run — do NOT connect the amplifier until it's found and cleared",
      "A healthy load — the 0-ohm reading confirms every speaker transformer on the run is wired properly",
      "An open line past the first speaker — zero ohms means the signal cannot reach the remaining taps"
    ],
    "correct": 1,
    "explanation": "Zero ohms = dead short. Connecting an amplifier to a shorted line can destroy the amp. Isolate sections to find the fault (often a pinched wire or miswired tap) before powering up."
  },
  {
    "domain": "CTS-I: Testing & Calibration",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D8",
    "q": "How should loudspeaker polarity be verified across a distributed ceiling system?",
    "options": [
      "By standing in the center of the room and listening carefully — a trained ear can reliably detect one reversed speaker among twelve in a zone",
      "With a polarity/phase tester or impulse measurement at each speaker — one reversed speaker in a zone audibly degrades that zone",
      "No verification is needed for ceiling speakers — distributed 70V systems self-correct phase across every tap, so polarity cannot be wrong",
      "By trusting the printed wire colors at the rack — if every conductor matches its color code there, polarity is guaranteed at each speaker"
    ],
    "correct": 1,
    "explanation": "Wire colors lie (mislabeled cable, swapped at the rack). A polarity tester or Smaart impulse check at each location proves it. One reversed speaker among twelve creates a dead-sounding zone."
  },
  {
    "domain": "CTS-I: Testing & Calibration",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D9",
    "q": "What does calibrating a display (beyond 'looks good') actually involve?",
    "options": [
      "Turning up the brightness — pushing brightness and contrast to maximum is the complete calibration procedure, since a brighter image always looks better to every viewer in the room",
      "Setting brightness/contrast with test patterns (PLUGE), verifying color temperature, and confirming the signal chain delivers the intended resolution without scaling artifacts",
      "Calibration is automatic — every modern display self-calibrates to reference standards at power-on, so test patterns and manual adjustments are obsolete",
      "Vivid mode is best — the Vivid/Dynamic picture preset is the factory reference mode, so selecting it completes calibration with no further adjustment needed"
    ],
    "correct": 1,
    "explanation": "CTS-I Duty D Task 9: calibration uses test patterns — PLUGE for black level, resolution patterns for scaling check, grayscale for color temp. 'Vivid' mode is the enemy; calibrated is the deliverable."
  },
  {
    "domain": "CTS-I: Testing & Calibration",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D9",
    "q": "An SPL meter is used during commissioning primarily to:",
    "options": [
      "Impress the client — the SPL meter’s real purpose is demonstrating professional gear to the client during the walkthrough",
      "Verify the system meets the design's SPL and coverage criteria (±3 dB across seats) with calibrated, documented measurements",
      "Find the loudest seat — the meter identifies the single loudest seat, which is the only measurement the design requires",
      "SPL meters are obsolete — smartphone apps have replaced calibrated meters for all commissioning measurements"
    ],
    "correct": 1,
    "explanation": "The design specified coverage; the meter proves it. Calibrated SPL measurements across the seating area, documented against criteria, are the evidence the system performs as designed."
  },
  {
    "domain": "CTS-I: Testing & Calibration",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D8",
    "q": "A video path shows sparkles intermittently. What is the most likely cause and test?",
    "options": [
      "The display is broken — intermittent sparkles mean the panel’s internal video processor is failing, so replace the display before testing anything else in the chain",
      "Marginal digital signal integrity (a cable or connector at its limit): substitute a known-good path and check certification, since sparkles are bit errors",
      "Sparkles are normal — occasional sparkles are expected on every digital video path and indicate the system is operating within specification",
      "Increase the brightness — raising the display’s brightness overcomes the sparkles by boosting the video signal above the noise floor"
    ],
    "correct": 1,
    "explanation": "Digital sparkles are bit errors from a marginal link — long copper HDMI, bad termination, or failing extender. Unlike analog (which degrades gracefully), digital fails in sparkles then dropout. Find the weak link."
  },
  {
    "domain": "CTS-I: Testing & Calibration",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D8",
    "q": "What is the 'signal flow' troubleshooting method?",
    "options": [
      "Randomly swapping parts — replace the components in any order until the system works again; the faulty part will reveal itself eventually",
      "Tracing the signal path stage by stage from source to destination, verifying presence and quality at each point to isolate the fault",
      "Calling tech support first — the manufacturer’s helpline diagnoses every fault, so field troubleshooting is unnecessary",
      "Rebooting everything — power-cycling every device simultaneously resolves all signal faults, making tracing obsolete"
    ],
    "correct": 1,
    "explanation": "Half-splitting the signal path (check the middle: signal there? fault is downstream; not there? upstream) isolates faults methodically. Random part-swapping is expensive guessing."
  },
  {
    "domain": "CTS-I: Testing & Calibration",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D8",
    "q": "Network testing for AV-over-IP should include what beyond 'it connects'?",
    "options": [
      "Nothing else is required — a single successful ping and the link LED confirm the switch is fine, and AV-over-IP streams use so little bandwidth that load testing is pointless",
      "Ping for latency/loss, iperf for throughput, verification of VLAN/QoS/IGMP operation, and sustained load testing — the network must perform under show conditions, not just idle",
      "Run Speedtest.net once and record the download number — the internet WAN speed is the standard benchmark for proving AV-over-IP will perform on the local network",
      "Check the Wi-Fi signal bars on a laptop near the rack — full bars confirm the wired AV-over-IP network has enough throughput for sustained show-condition loads"
    ],
    "correct": 1,
    "explanation": "AV networks must be tested under load: multicast joins, PTP stability, throughput headroom. A network that 'connects' but drops PTP under load will glitch audio mid-event."
  },
  {
    "domain": "CTS-I: Testing & Calibration",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D8",
    "q": "Why test the control system with the actual user workflows (not just button-by-button)?",
    "options": [
      "Button tests are sufficient — pressing each button once proves the program logic, since sequences are just buttons pressed in a particular order",
      "Workflow testing catches logic errors — e.g., the room combines but the audio follow doesn't, or a preset works alone but not in sequence",
      "Users never find bugs — end users operate systems too simply to trigger logic errors, so workflow testing adds no value",
      "Workflows don’t matter — control logic is either right or wrong at the button level, so sequence testing is redundant"
    ],
    "correct": 1,
    "explanation": "Individual buttons can pass while the system fails: mode changes, room combines, and multi-step sequences are where control logic breaks. Test the way the client will actually use it."
  },
  {
    "domain": "CTS-I: Testing & Calibration",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D8",
    "q": "All test results should be:",
    "options": [
      "Kept in the installer’s head — experienced technicians memorize every measurement, which is more reliable than written records",
      "Documented (cable cert reports, SPL and coverage measurements, functional checklists) and included in closeout as proof of performance",
      "Thrown away — test results are working notes only; once the system passes, the records serve no further purpose and should be discarded",
      "Only failures need documentation — passing results are assumed and need no record; only failed tests require written reports"
    ],
    "correct": 1,
    "explanation": "Documented results are the evidence the system was verified: certifier reports per cable ID, measurement sheets, signed checklists. Undocumented testing didn't happen, as far as the warranty dispute is concerned."
  },
  {
    "domain": "CTS-I: Closeout & Training",
    "cert": "CTS-I",
    "duty": "E",
    "task": "E1",
    "q": "What is the purpose of the client demonstration at closeout?",
    "options": [
      "To show off — the demonstration is a sales showcase for the integrator’s capabilities, with no connection to the contracted specifications",
      "To prove the system performs to the contracted specifications — walking the client through every specified function before they sign acceptance",
      "Demonstrations are optional — client acceptance is based on the equipment list alone, so walking through functions is an unnecessary formality",
      "To sell more equipment — the closeout demo exists to pitch upgrades and service contracts, not to verify the installed system"
    ],
    "correct": 1,
    "explanation": "CTS-I Duty E Task 1: the demo is the acceptance test in front of the client. Every specified function demonstrated, every criterion shown met. Sign-off follows demonstrated performance — not promises."
  },
  {
    "domain": "CTS-I: Closeout & Training",
    "cert": "CTS-I",
    "duty": "E",
    "task": "E2",
    "q": "Effective end-user training should be:",
    "options": [
      "A quick five-minute walkthrough of the remote at handover, since modern systems are designed to be fully intuitive",
      "Role-based (operators vs. admins) and hands-on, covering normal use and common failures, with quick-reference guides left behind",
      "A cover-to-cover reading of the full 200-page manual with the users, so that every feature is covered before any hands-on time begins",
      "None at all — a well-designed system needs zero training, and users will figure out every function on their own"
    ],
    "correct": 1,
    "explanation": "CTS-I Duty E Task 2: training matches roles — users get daily workflows, admins get deeper access. Hands-on practice plus a one-page quick guide beats a lecture. The best-designed system fails if users fear it."
  },
  {
    "domain": "CTS-I: Closeout & Training",
    "cert": "CTS-I",
    "duty": "E",
    "task": "E3",
    "q": "What does project completion sign-off require from the installer?",
    "options": [
      "Just a signature — the installer signs the acceptance form and the project is complete, regardless of documentation or training status",
      "A complete system: punch list cleared, documentation delivered (as-builts, manuals, passwords), training done, spares provided",
      "Sign-off happens before the work is done — the client signs acceptance at rough-in so the installer can bill the final invoice early",
      "The client’s verbal approval — a spoken ‘looks good’ over the phone constitutes formal project completion sign-off"
    ],
    "correct": 1,
    "explanation": "CTS-I Duty E Task 3: sign-off is the contractual finish line. Chasing signatures with open punch items or missing manuals poisons the relationship — and delays final payment."
  },
  {
    "domain": "CTS-I: Closeout & Training",
    "cert": "CTS-I",
    "duty": "E",
    "task": "E3",
    "q": "As-built documentation the installer provides should reflect:",
    "options": [
      "The original design drawings, unchanged, since the engineer's design intent is the authoritative record regardless of any field changes that were made",
      "Reality: actual cable routes, final IP addresses, substituted equipment and field changes, redlined during the job and finalized at closeout",
      "Whatever is easiest to draw from memory at closeout, because precise cable routes and IP addresses rarely matter after handover",
      "As-builts are the designer's job alone; the installer only builds, so field documentation never needs to leave the design office"
    ],
    "correct": 1,
    "explanation": "Field redlines captured during installation become the as-builts. The next service tech works from these — accuracy here is a gift to the future (and often a contract requirement for final payment)."
  },
  {
    "domain": "CTS-I: Closeout & Training",
    "cert": "CTS-I",
    "duty": "E",
    "task": "E3",
    "q": "Why hand over admin passwords and configuration backups at closeout?",
    "options": [
      "You shouldn't hand them over — keeping the admin passwords guarantees the client must call you back for every future service visit",
      "The client owns the system; complete handover (secured) of credentials, DSP files, and control code is part of delivering a complete project",
      "Passwords don't matter at closeout, since the client will never touch the DSP or control system after the installer leaves",
      "The client will never need the configuration files, because any future changes require a full system redesign by the original integrator"
    ],
    "correct": 1,
    "explanation": "Withholding credentials creates hostage situations, not recurring revenue. Professional closeout hands over everything needed to own and operate the system — that's what was purchased."
  },
  {
    "domain": "CTS-I: Closeout & Training",
    "cert": "CTS-I",
    "duty": "E",
    "task": "E3",
    "q": "Warranty registration and documentation at closeout should include:",
    "options": [
      "Nothing — warranties are automatic — manufacturers track every serial number, so registration and documentation are unnecessary",
      "Serial numbers, warranty terms and start dates, and the claims process, so the client knows what's covered and how to claim it",
      "Only the installer’s warranty — manufacturer warranties don’t exist for commercial AV, so only the integrator’s labor warranty matters",
      "Warranties don’t matter — warranty claims are never honored, so documenting terms and serial numbers wastes closeout time"
    ],
    "correct": 1,
    "explanation": "A warranty the client can't invoke is worthless. Document what each manufacturer covers, for how long, from when — and who to call. This is part of the closeout package."
  },
  {
    "domain": "CTS-I: Closeout & Training",
    "cert": "CTS-I",
    "duty": "E",
    "task": "E3",
    "q": "What is a punch list, and when is it truly complete?",
    "options": [
      "A shopping list of spare parts; the punch list is considered complete the moment it is written down and handed to the client",
      "The list of deficient or incomplete items found before acceptance; complete only when every item is corrected AND re-verified",
      "Punch lists are informal reminders; the list is complete when the installer has made a good-faith attempt at each listed item",
      "Complete when the installer says so — the installer's own verbal assurance alone is the only verification a punch list ever needs"
    ],
    "correct": 1,
    "explanation": "'Fixed' isn't done — verified fixed is done. Each punch item needs correction plus re-test, tracked to zero. The final walkthrough confirms, not assumes."
  },
  {
    "domain": "CTS-I: Closeout & Training",
    "cert": "CTS-I",
    "duty": "E",
    "task": "E3",
    "q": "Spare parts ('attic stock') left at closeout typically include:",
    "options": [
      "A spare rack — a complete loaded spare rack is the standard attic stock, so the client can swap the entire system during any failure",
      "Consumables and high-failure items: projector lamps, wireless mic batteries, key cables, fuses — the parts that turn an outage into a swap",
      "Nothing — spares are wasteful — attic stock ties up capital in parts that expire, so best practice is to leave zero spares at closeout",
      "A complete duplicate system — attic stock means a full second copy of every device, installed in parallel and kept hot"
    ],
    "correct": 1,
    "explanation": "Attic stock is cheap insurance specified in the BOM: the parts most likely to fail or be consumed, on the shelf. The 9 PM wireless mic battery death is a non-event when spares are on site."
  },
  {
    "domain": "CTS-I: Closeout & Training",
    "cert": "CTS-I",
    "duty": "E",
    "task": "E1",
    "q": "The final client walkthrough should cover what?",
    "options": [
      "Just the main room — the largest space represents the whole project, so demonstrating it covers the walkthrough requirement for every other room",
      "Every space and function: demonstrate operation, confirm punch items, hand over documentation, and establish the support contact process",
      "A quick hello — a brief greeting at the front door satisfies the walkthrough; the client will discover the system functions on their own",
      "Walkthroughs are optional — the signed contract is the only acceptance the project needs, so the final demonstration can be skipped entirely"
    ],
    "correct": 1,
    "explanation": "The walkthrough is the ceremonial and practical handover: the client sees everything work, receives everything promised, and knows exactly who to call. Rushing it guarantees the first support call is confusion."
  },
  {
    "domain": "CTS-I: Closeout & Training",
    "cert": "CTS-I",
    "duty": "E",
    "task": "E3",
    "q": "What financial/administrative items typically gate final payment at closeout?",
    "options": [
      "Nothing — payment is automatic — final payment releases on the contract date regardless of the punch list or the closeout documentation status",
      "A completed punch list, delivered closeout documents, lien waivers, and reconciled change orders: the paperwork that releases retention",
      "Just asking nicely — a polite email to the client’s AP department is the industry-standard trigger for releasing final payment",
      "Threatening the client — warning of legal action is the fastest way to release retention, and most integrators lead with it"
    ],
    "correct": 1,
    "explanation": "Retention releases when the contract's closeout requirements are met: documentation, waivers, reconciled change orders. Installers who treat paperwork as optional wait longer for their money."
  },
  {
    "domain": "CTS-I: Jobsite Operations & Safety",
    "cert": "CTS-I",
    "duty": "A",
    "task": "A4",
    "q": "Before working from a 12-foot ladder on a jobsite, what is required?",
    "options": [
      "Nothing — ladders are simple — any ladder found on site is safe to climb immediately, and inspection is a waste of setup time",
      "Inspect it, set it on firm level ground at a 4:1 angle, keep three points of contact, and never stand on the top cap",
      "Ladders don’t need inspection — rental ladders are certified safe, so checking rails and locks before climbing is unnecessary",
      "The top cap is the best step — standing on the top cap gives the best reach, and the 4:1 angle rule doesn’t apply to short tasks"
    ],
    "correct": 1,
    "explanation": "Falls are a leading jobsite injury cause. Ladder safety — inspection, angle, three points of contact, top-cap prohibition — is OSHA basics and CTS-I Duty E territory. Most ladder injuries are preventable."
  },
  {
    "domain": "CTS-I: Jobsite Operations & Safety",
    "cert": "CTS-I",
    "duty": "A",
    "task": "A4",
    "q": "What PPE is typically required on an active construction site for AV installers?",
    "options": [
      "None — AV is clean work — pulling cable and hanging displays involves no hazards, so PPE is unnecessary for AV installers",
      "Hard hat, safety glasses, high-visibility vest, and task-appropriate gear (gloves, hearing protection, dust masks) per the site safety plan",
      "Just a hard hat — a hard hat alone satisfies every site safety plan, and glasses, vests, and gloves are optional extras for AV work",
      "PPE is optional — safety gear is a personal choice on construction sites, and low-voltage AV installers are exempt from the GC’s PPE requirements"
    ],
    "correct": 1,
    "explanation": "Active construction sites require PPE regardless of trade. The GC's site safety plan governs — comply fully. 'I'm just AV' doesn't stop falling objects."
  },
  {
    "domain": "CTS-I: Jobsite Operations & Safety",
    "cert": "CTS-I",
    "duty": "B",
    "task": "B2",
    "q": "Lockout/tagout (LOTO) applies to AV installers when:",
    "options": [
      "Never — it’s for electricians — lockout/tagout applies exclusively to licensed electricians, so AV installers never use it on any jobsite",
      "Working on or near energized circuits/panels — the circuit is locked in the off position and tagged so no one re-energizes it while you work",
      "Only in factories — LOTO is an industrial manufacturing requirement that does not apply to commercial AV installation work",
      "LOTO is outdated — modern breakers can’t be accidentally re-energized, so lockout/tagout has been retired from construction safety plans"
    ],
    "correct": 1,
    "explanation": "If you're in a panel landing AV circuits, LOTO protects you from someone flipping the breaker back on. It's your procedure too when you touch energized infrastructure."
  },
  {
    "domain": "CTS-I: Jobsite Operations & Safety",
    "cert": "CTS-I",
    "duty": "B",
    "task": "B1",
    "q": "Daily progress reports / field reports should capture:",
    "options": [
      "Nothing — they’re busywork — daily reports consume crew time without protecting against disputes, so skipping them saves money",
      "Crew on site, work completed, delays and their causes, visitors, safety issues, and photos — the contemporaneous record that resolves disputes",
      "Only the weather — the daily report’s sole purpose is logging weather conditions for the GC’s schedule claims",
      "Only the hours each crew member worked, since the daily report exists for payroll and the PM tracks progress, delays and safety issues separately"
    ],
    "correct": 1,
    "explanation": "CTS-I Duty B Task 1: daily reports are the project's memory. 'We were delayed three days waiting for the electrician' needs a dated record — written the day it happened, not reconstructed in a dispute."
  },
  {
    "domain": "CTS-I: Jobsite Operations & Safety",
    "cert": "CTS-I",
    "duty": "B",
    "task": "B2",
    "q": "The electrician's work blocks your cable path. What is the professional response?",
    "options": [
      "Move the electrician's work out of the way yourself — physically repositioning another trade's installed work is accepted, standard practice on a busy jobsite",
      "Coordinate: notify the GC/PM, document the impact, and agree on a resolution — trade conflicts are solved through coordination, not confrontation",
      "Work around it silently and absorb the cost — documenting the impact or notifying the GC only creates unnecessary conflict",
      "Stop all work permanently — one blocked cable path means the entire installation project must be abandoned immediately"
    ],
    "correct": 1,
    "explanation": "CTS-I Duty B Task 2: trade coordination runs through the GC/PM with documentation. Silent workarounds become unbillable costs; confrontation becomes a jobsite war. Coordinate and document."
  },
  {
    "domain": "CTS-I: Jobsite Operations & Safety",
    "cert": "CTS-I",
    "duty": "B",
    "task": "B3",
    "q": "You discover the field condition requires 200 extra feet of cable beyond the design. What is the correct process?",
    "options": [
      "Install the extra 200 feet immediately and bury the cost in the original bid, hoping nobody notices the overrun at closeout",
      "Document the field condition, notify the PM, and process it as a field modification/change order BEFORE doing the extra work",
      "Eat the cost silently and never mention the discrepancy, since raising change orders always damages the client relationship",
      "Skip that cable section entirely and leave it undocumented, because the system will probably work fine without those runs"
    ],
    "correct": 1,
    "explanation": "CTS-I Duty B Task 3: field modifications need approval before execution. Document the condition (photos, measurements), get authorization, then install. After-the-fact change orders are where margins die."
  },
  {
    "domain": "CTS-I: Jobsite Operations & Safety",
    "cert": "CTS-I",
    "duty": "F",
    "task": "F2",
    "q": "A systematic approach to repairing a failed AV system on a service call starts with:",
    "options": [
      "Replacing the most expensive component in the rack first, since the high-cost parts are statistically the most likely points of failure in a system",
      "Gathering symptoms, checking the simple/obvious (power, connections, settings), then half-splitting the signal path to isolate the fault",
      "Rewiring every connection in the system from scratch, then reprogramming the DSP to guarantee a known-good baseline state",
      "Blaming the previous installer's workmanship and re-quoting the client for a full system replacement before diagnosing anything"
    ],
    "correct": 1,
    "explanation": "CTS-I Duty F Task 2: most 'dead system' calls are power, a muted channel, or a loose cable. Check the obvious first, then isolate methodically. The expensive part is guilty last, not first."
  },
  {
    "domain": "CTS-I: Jobsite Operations & Safety",
    "cert": "CTS-I",
    "duty": "F",
    "task": "F1",
    "q": "Preventive maintenance visits for installed AV systems typically include:",
    "options": [
      "Nothing — AV doesn’t need maintenance — installed systems run indefinitely with zero service, so PM visits are pure profit-taking",
      "Filter cleaning, firmware review, battery checks, connection inspection and functional testing, to catch degradation before failure",
      "Just dusting — a PM visit is a light dusting of the rack exterior; internal inspection and testing are unnecessary",
      "Maintenance is the client’s job alone — the integrator’s responsibility ends at handover, and PM contracts are never offered"
    ],
    "correct": 1,
    "explanation": "CTS-I Duty F Task 1: projectors clog, batteries die, firmware ages. Scheduled maintenance — with a checklist and report — is both a service revenue stream and the reason systems keep working."
  },
  {
    "domain": "CTS-I: Jobsite Operations & Safety",
    "cert": "CTS-I",
    "duty": "A",
    "task": "A4",
    "q": "Why must installers maintain their tools and test equipment?",
    "options": [
      "They don’t — tools are disposable — drill bits and meters are consumables, so maintenance is wasted effort and you should just buy new ones",
      "Dull bits, uncalibrated meters and failing batteries cause bad work and false readings; maintained tools are a quality and safety need",
      "New tools are always better — a brand-new meter is always more accurate than a maintained older one, so replace tools yearly",
      "Maintenance wastes time — sharpening bits and calibrating meters consumes billable hours with no measurable quality benefit"
    ],
    "correct": 1,
    "explanation": "CTS-I Duty F Task 1: a drifting meter certifies bad cable as good; a dull hole saw tears up the ceiling. Tool maintenance — calibration, batteries, cutting edges — is part of professional practice."
  },
  {
    "domain": "CTS-I: Jobsite Operations & Safety",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D1",
    "q": "Lifting a heavy amplifier into a rack alone is:",
    "options": [
      "Fine — technicians are strong — AV techs lift heavy gear daily, so solo amplifier lifts are safe and expected",
      "Unsafe — use proper lifting technique, get help or a lift for heavy gear, and never compromise; back injuries end careers",
      "Acceptable as long as you keep your back straight, since good technique alone makes solo lifts of any rack equipment perfectly safe",
      "The only way — racks are too narrow for two people, so every amplifier must be lifted in alone"
    ],
    "correct": 1,
    "explanation": "Back injuries are career-enders and entirely preventable: team lifts, rack lifts, and mechanical aids for heavy amplifiers and displays. No deadline justifies a herniated disc."
  },
  {
    "domain": "CTS: Commissioning & Closeout",
    "cert": "CTS",
    "duty": "B",
    "task": "B1",
    "q": "During commissioning you find the installed projector's throw distance produces a 100-inch image but the client specified 120 inches. The mount is fixed. What is the correct action?",
    "options": [
      "Leave it — close enough — a 100-inch image from a 120-inch spec is within visual tolerance, so no documentation or client discussion is needed",
      "Document the variance, check whether another lens or mount position can reach spec, and resolve it with the client before sign-off",
      "Digitally stretch the image — use the projector’s digital zoom to stretch 100 inches to 120; the slight softness is invisible to viewers",
      "Blame the electrician — the throw shortfall is the electrical contractor’s fault for the mount position, so the AV installer bears no responsibility"
    ],
    "correct": 1,
    "explanation": "Commissioning verifies against the contracted specifications. An image size shortfall is a punch-list item: check lens options or repositioning, then get client direction. 'Close enough' is how disputes start."
  },
  {
    "domain": "CTS: Electrical & Site Survey",
    "cert": "CTS",
    "duty": "A",
    "task": "A2",
    "q": "A site survey finds the only available circuit for the AV rack is shared with the break-room microwave and refrigerator. What should you do?",
    "options": [
      "Use it — AV doesn’t draw much — amplifiers and racks sip power, so sharing a circuit with the break-room appliances causes no issues",
      "Specify a dedicated AV circuit: sharing with motor and compressor loads causes voltage sags and nuisance trips that get blamed on the AV",
      "Unplug the refrigerator — disconnect the break-room appliances permanently; AV performance takes priority over the staff kitchen",
      "Turn down the volume — running the AV system quietly reduces its power draw enough to coexist safely with the microwave and refrigerator"
    ],
    "correct": 1,
    "explanation": "Dedicated circuits isolate AV from noisy loads. Compressor startups cause voltage dips that reboot processors and drop networked audio. The survey's job is finding this BEFORE installation."
  },
  {
    "domain": "CTS: Electrical & Site Survey",
    "cert": "CTS",
    "duty": "A",
    "task": "A2",
    "q": "Why should a site survey measure ambient noise levels (NC rating) in each AV space?",
    "options": [
      "It isn’t necessary — modern DSP noise reduction eliminates all background noise electronically, so measuring the room’s NC rating wastes survey time",
      "Background noise sets the signal-to-noise the system must beat; speech can't be intelligible over 55 dBA of HVAC roar until the noise is addressed",
      "To pick paint colors — the NC rating guides the interior designer’s paint selection, since certain colors absorb HVAC noise better than others",
      "Noise measurements are only for concerts — NC ratings apply exclusively to music venues, so conference and meeting rooms never need ambient noise data"
    ],
    "correct": 1,
    "explanation": "The quietest the room gets is the noise floor; speech needs 15-25 dB above it. If the HVAC delivers NC-50, no speaker upgrade fixes intelligibility — the survey flags it so the design (or the mechanical engineer) can respond."
  },
  {
    "domain": "CTS: AVIXA Standards",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "Which AVIXA standard addresses cable labeling for AV systems?",
    "options": [
      "AVIXA F502.01:2018 — Cable Labeling for Audiovisual Systems",
      "No AVIXA standard addresses cable labeling in AV systems",
      "NEC Article 640 — Audio Systems and Amplification Equipment",
      "ISO 9001 — Quality Management Systems for AV Installation Firms"
    ],
    "correct": 0,
    "explanation": "F502.01:2018 defines cable labeling requirements for AV — unique identifiers linking cables to documentation. Consistent labeling is what makes systems serviceable years later."
  },
  {
    "domain": "CTS: AVIXA Standards",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "AVIXA's standard for image system contrast ratio (V201.01) is primarily concerned with:",
    "options": [
      "The projector’s marketing specs — V201.01 certifies that the manufacturer’s published contrast numbers are truthful",
      "The contrast the viewer actually perceives in the room, with ambient light washing out the image, not the projector's spec sheet",
      "The color of the screen — the standard regulates the paint color of the projection screen to maximize reflectivity",
      "Contrast doesn’t matter — V201.01 declares contrast ratio irrelevant to image quality, so it can safely be ignored during system design"
    ],
    "correct": 1,
    "explanation": "A 10,000:1 projector in a bright room delivers poor perceived contrast because ambient light raises the black floor. V201.01 addresses system contrast in the viewing environment — the number that actually matters."
  },
  {
    "domain": "CTS: Control Systems",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "What is the practical difference between RS-232 and IR control of a display?",
    "options": [
      "No difference — RS-232 and IR carry identical control commands with the same reliability, and both interfaces provide two-way status feedback from the display",
      "RS-232 is two-way (the system can query power/input status) and reliable over distance; IR is one-way, line-of-sight, and can be blocked or interfered with",
      "IR is always better — IR provides two-way status feedback and works through walls and around corners, making it more reliable than RS-232 over long distances",
      "RS-232 is wireless — RS-232 commands travel through the air to the display like IR does, so the control processor needs no wired connection to the display"
    ],
    "correct": 1,
    "explanation": "Two-way RS-232/IP control gives feedback — the system KNOWS the display is on the right input. IR is fire-and-forget. For reliable rooms, feedback-capable control wins."
  },
  {
    "domain": "CTS: Control Systems",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "A touch panel should be programmed so that:",
    "options": [
      "Every function is on the first page — cramming all controls onto one screen minimizes taps and is the professional standard",
      "Common tasks take one or two taps, advanced functions sit deeper, and the layout follows how users think",
      "It looks impressive — the panel’s visual wow factor is the only programming requirement; usability follows automatically",
      "More buttons are always better — maximum button density gives users the most control, so every function gets its own button"
    ],
    "correct": 1,
    "explanation": "UI design for control systems follows usability: the 90% tasks (on/off, source select, volume) front and center; admin functions tucked away. A panel nobody understands is a failed system."
  },
  {
    "domain": "CTS: Control Systems",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "What is 'feedback' in a control system, and why does it matter?",
    "options": [
      "Audio squealing — feedback is the loud howl when a microphone hears itself, and the control system’s job is to eliminate it",
      "True status from devices (power state, input, volume level) displayed on the UI — so the panel shows reality, not what was last commanded",
      "It doesn’t matter — the panel only needs to show the last command it sent, since devices always execute commands exactly as they were instructed",
      "Feedback is only for engineers — status readouts are diagnostic tools for programmers, with no value on the end-user touch panel"
    ],
    "correct": 1,
    "explanation": "Without feedback, the panel says 'Display ON' because someone pressed ON — even if the display never responded. True feedback queries the device and shows actual state. It's the difference between control and wishful thinking."
  },
  {
    "domain": "CTS: Control Systems",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "When a control processor loses network connectivity to its touch panels, the panels typically:",
    "options": [
      "Keep working normally — touch panels store the complete control program locally, so they keep operating the room with no dependence on the processor or network",
      "Show offline/disconnected status and can't control the room — which is why critical rooms need the control network designed for reliability (managed switches, proper VLANs)",
      "Control the room via Bluetooth — panels automatically fail over to a Bluetooth mesh with the displays and DSP, so full room control continues uninterrupted through any network outage",
      "Reboot the projector — when panels lose the processor, they send a reboot command to the projector, which re-establishes the control network connection"
    ],
    "correct": 1,
    "explanation": "Network-dependent control means network outages are room outages. Design the control network accordingly — and have a fallback plan (hard buttons for critical functions) in must-work spaces."
  },
  {
    "domain": "Advanced: Dante & AES67",
    "cert": "CTS",
    "duty": "B",
    "task": "B1",
    "q": "Dante's 'device latency' setting (e.g., 1ms vs 5ms) represents:",
    "options": [
      "How fast the device boots — the latency setting controls the device’s startup time, with 1ms booting faster than 5ms",
      "The receive buffer size: more latency tolerates more network jitter but adds delay, while less needs a cleaner, well-configured network",
      "The cable length — set the device latency to match the longest cable run: 1ms for short runs and 5ms for copper runs approaching 100 meters",
      "It is fixed and can’t change — device latency is burned into the Dante hardware at the factory and cannot be adjusted"
    ],
    "correct": 1,
    "explanation": "Latency setting = jitter buffer. 1ms needs a tight network (proper QoS, minimal hops); 5ms tolerates more. Set per the network's actual quality — and keep it consistent with the design's lip-sync budget."
  },
  {
    "domain": "Advanced: Dante & AES67",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "AES67 differs from Dante in that it is:",
    "options": [
      "A proprietary protocol — AES67 is owned by a single manufacturer and requires licensed hardware, so it cannot interoperate with any Dante-equipped devices",
      "An open interoperability standard (AES67-2018) for audio-over-IP — Dante devices can interoperate with AES67 gear in AES67 mode, bridging ecosystems",
      "Only for video — AES67 carries compressed video streams and has no audio capability, so it never interoperates with Dante audio networks",
      "Faster than Dante — AES67 moves audio with lower latency than Dante on the same network, which is why it replaces Dante in live sound"
    ],
    "correct": 1,
    "explanation": "AES67 is the standards-based interoperability layer: Dante, Ravenna, Q-LAN and others can exchange audio via AES67 mode. It trades some of Dante's ease (no automatic discovery) for cross-platform compatibility."
  },
  {
    "domain": "Advanced: Dante & AES67",
    "cert": "CTS",
    "duty": "A",
    "task": "A4",
    "q": "A redundant Dante network uses primary and secondary ports. What is the key cabling rule?",
    "options": [
      "Both primary and secondary ports can share one managed switch with VLANs, since VLANs provide full redundancy isolation",
      "Primary and secondary must be on COMPLETELY SEPARATE networks/switches — sharing infrastructure defeats the redundancy",
      "Redundancy is automatic once both ports are plugged in, because Dante negotiates the backup path with no cabling requirements",
      "Secondary is just a backup cable that carries no audio until the primary fails, so it can be run through the same conduit and switch"
    ],
    "correct": 1,
    "explanation": "Dante redundancy (like Isaac's own intentional Redundant mode setup) only works with fully independent networks — separate switches, separate cable paths. One shared switch = one point of failure for both."
  },
  {
    "domain": "Advanced: Dante & AES67",
    "cert": "CTS",
    "duty": "B",
    "task": "B1",
    "q": "Dante Controller's 'Transmit' tab showing a flow as multicast (flower icon) means:",
    "options": [
      "The flow is broken — the flower icon is Dante Controller’s error symbol, indicating the multicast stream has failed and needs rebuilding",
      "One stream is feeding multiple receivers efficiently — but the network must have IGMP snooping configured to handle it properly",
      "Multicast is always bad — the flower icon warns that multicast is degrading the network, and every flow should be switched to unicast immediately",
      "It means unicast — the flower icon indicates a dedicated unicast flow, so IGMP snooping is unnecessary for that stream"
    ],
    "correct": 1,
    "explanation": "Multicast flows are bandwidth-efficient for one-to-many, but they REQUIRE proper IGMP snooping/querier on the switches. The flower icon is your cue to verify the network config matches."
  },
  {
    "domain": "CTS: Commissioning & Closeout",
    "cert": "CTS",
    "duty": "B",
    "task": "B1",
    "q": "During installation verification, what is the correct power-up sequence for a newly wired AV rack?",
    "options": [
      "Amplifiers first, then processors and sources, so the outputs stabilize before signal arrives",
      "All devices at once via the master breaker, which is the fastest way to find wiring faults",
      "Sources and processors first, amplifiers last, to prevent turn-on transients from hitting the speakers",
      "Displays first, then control system, then audio, matching the order of the signal flow diagram"
    ],
    "correct": 2,
    "explanation": "Powering amplifiers last keeps turn-on thumps and surges away from the loudspeakers, and lets you verify each upstream stage is clean before adding gain. Sequence controllers exist for exactly this reason. CTS Duty B Task 1."
  },
  {
    "domain": "CTS: Troubleshooting & Verification",
    "cert": "CTS",
    "duty": "B",
    "task": "B1",
    "q": "Before landing loudspeaker wiring on the amplifier outputs, what check protects the amplifier?",
    "options": [
      "Measure each run for continuity and confirm no shorts between conductors or to ground",
      "Play program audio through the cable with a portable speaker to confirm it carries signal",
      "Megger-test the cable at 1000V to verify the insulation rating exceeds the amplifier output",
      "Short all conductors together at the far end to balance the load the amplifier will see"
    ],
    "correct": 0,
    "explanation": "A shorted or grounded speaker run can destroy an amplifier output stage the instant it powers up. A quick meter check for continuity, shorts, and impedance sanity takes two minutes and saves a very expensive mistake. CTS Duty B Task 1."
  },
  {
    "domain": "CTS: Troubleshooting & Verification",
    "cert": "CTS",
    "duty": "B",
    "task": "B1",
    "q": "Two ceiling speakers covering one zone both produce sound, but the zone sounds thin with almost no bass. What is the most likely installation error?",
    "options": [
      "The amplifier is underpowered for the combined load of the two speakers",
      "One speaker is wired out of phase, so the low frequencies cancel between the two",
      "The speaker cable is too long, rolling off the low frequencies before they arrive",
      "The DSP high-pass filter is set too high for full-range ceiling speakers"
    ],
    "correct": 1,
    "explanation": "Out-of-phase wiring makes one speaker push while the other pulls, and low frequencies cancel first because their long wavelengths overlap the most. It is the classic 'everything works but sounds wrong' fault, caught by a polarity check during verification. CTS Duty B Task 1."
  },
  {
    "domain": "CTS: Commissioning & Closeout",
    "cert": "CTS",
    "duty": "B",
    "task": "B1",
    "q": "The design calls for 75 dBA at the listener seats. After programming the DSP, how do you verify the installed system meets that target?",
    "options": [
      "Play familiar music and ask the client whether the level feels right for the room",
      "Check that the amplifier output meters peak near 0 dB during program material",
      "Play pink noise through the system and measure SPL with a calibrated meter at the seating positions",
      "Compare the amplifier's rated wattage against the speaker's program power handling"
    ],
    "correct": 2,
    "explanation": "Verification means measuring, not guessing. Pink noise gives equal energy per octave like real program material, and a calibrated meter at actual seats proves the design target is met where people sit. CTS Duty B Task 1."
  },
  {
    "domain": "CTS: Commissioning & Closeout",
    "cert": "CTS",
    "duty": "B",
    "task": "B1",
    "q": "Installation is complete and the control system is programmed. What does control system verification require before handover?",
    "options": [
      "Confirming the processor powers on and the touch panel displays the home page",
      "Testing one representative button per page, since all buttons share the same code",
      "Verifying the program file uploaded without errors, which proves all functions work",
      "Pressing every button, preset, and macro and confirming each produces its documented result"
    ],
    "correct": 3,
    "explanation": "A successful upload proves the code transferred, not that it works. Button-for-button testing against the documented outcomes is the only way to catch wrong joins, missing feedback, and macros that fire halfway. The client will press every button eventually; find the failures first. CTS Duty B Task 1."
  },
  {
    "domain": "CTS: Troubleshooting & Verification",
    "cert": "CTS",
    "duty": "B",
    "task": "B1",
    "q": "A newly pulled Cat6A run passes a wiremap test on the verifier. Why is that not sufficient to certify the run for AV-over-IP distribution?",
    "options": [
      "Wiremap only confirms pinout and continuity; certification measures NEXT, return loss, and other parameters the standard requires",
      "Wiremap tests are only valid for analog audio cable, not for twisted-pair data cable",
      "A passing wiremap voids the cable manufacturer's warranty, so it must be redone with a certifier",
      "Wiremap results expire after 24 hours, so the run must be retested the next day"
    ],
    "correct": 0,
    "explanation": "Wiremap says the cable is connected correctly; certification proves it performs to the category standard under real signal conditions. AV-over-IP needs the full performance envelope, so the certifier's report, not the wiremap, is the verification record. CTS Duty B Task 1."
  },
  {
    "domain": "CTS: Electrical & Site Survey",
    "cert": "CTS",
    "duty": "B",
    "task": "B1",
    "q": "A 4K HDMI run of 60 feet from rack to display shows sparkles and intermittent dropouts. The cable tests continuous on every pin. What is the most likely cause?",
    "options": [
      "The display's EDID is corrupted and must be rewritten with the manufacturer's utility",
      "Passive copper HDMI is unreliable at that length for 4K bandwidth; use an active optical cable or extender",
      "The source output voltage is too low, so a distribution amplifier must be added at the display",
      "The cable shield is picking up Wi-Fi interference, which only affects runs over 50 feet"
    ],
    "correct": 1,
    "explanation": "Continuity proves the cable is connected, not that it can carry 18 Gbps. Passive HDMI has real length limits that shrink as bandwidth grows; sparkles are the signature of a marginal link. Active optical HDMI or an extender is the correct fix. CTS Duty B Task 1."
  },
  {
    "domain": "CTS: Commissioning & Closeout",
    "cert": "CTS",
    "duty": "B",
    "task": "B1",
    "q": "During verification you find a cable labeled PROJ-1 at the rack end and DISP-2 at the display end. What is the correct action?",
    "options": [
      "Note the mismatch in the punch list and let the service tech sort it out on the first call",
      "Leave it; the labels are close enough that any tech will figure out the intent",
      "Relabel both ends to match the as-built drawing and retest the run end to end",
      "Swap the labels so the rack end reads DISP-2, which matches how the signal flows"
    ],
    "correct": 2,
    "explanation": "A label that lies is worse than no label: the next tech will trust it and waste an hour. Both ends must match the as-built exactly, and the run gets retested after relabeling so the record is trustworthy. CTS Duty B Task 1."
  },
  {
    "domain": "CTS: Troubleshooting & Verification",
    "cert": "CTS",
    "duty": "B",
    "task": "B1",
    "q": "New AV-over-IP encoders and decoders power up and link lights are on, but no stream establishes between them. What should you check first?",
    "options": [
      "Replace the Ethernet cables, since link lights can be on with a damaged cable",
      "Reboot the network switch, which clears most AV-over-IP discovery failures",
      "Verify the displays are set to the correct HDMI input for the decoder output",
      "Confirm all endpoints run matching, manufacturer-approved firmware versions"
    ],
    "correct": 3,
    "explanation": "AV-over-IP endpoints negotiate streams with protocols that change between firmware revisions. Mismatched firmware is the most common reason fresh-out-of-box units see each other but never stream. Match versions first, then troubleshoot the network. CTS Duty B Task 1."
  },
  {
    "domain": "CTS: Commissioning & Closeout",
    "cert": "CTS",
    "duty": "B",
    "task": "B1",
    "q": "During verification the fully loaded rack runs for an hour and the internal temperature keeps climbing past the equipment's rated limit. What is the correct response?",
    "options": [
      "Resolve the cooling problem (blanking panels, fans, ventilation) before the system is accepted",
      "Accept the system and note the temperature in the punch list for the client to monitor",
      "Turn down the amplifier gains until the temperature stabilizes, then sign off",
      "Leave the rack door open permanently, which is standard practice for warm racks"
    ],
    "correct": 0,
    "explanation": "Heat kills electronics slowly and voids warranties quickly. Verification under full load exists to catch exactly this, and the fix is airflow engineering, not gain reduction or wishful thinking. A rack that cannot stay cool is not ready for handover. CTS Duty B Task 1."
  },
  {
    "domain": "CTS: Commissioning & Closeout",
    "cert": "CTS",
    "duty": "B",
    "task": "B1",
    "q": "The projector is mounted well off-axis and the image is squared up with 25 degrees of digital keystone correction. Why should verification flag this?",
    "options": [
      "Keystone correction voids the projector warranty, so the manufacturer will refuse future claims",
      "Heavy digital keystone rescales the image, throwing away resolution and brightness the client paid for",
      "Keystone correction increases lamp power draw, which shortens the lamp life dramatically",
      "Off-axis mounting is a code violation in commercial installations regardless of image quality"
    ],
    "correct": 1,
    "explanation": "Digital keystone remaps pixels, so a 25-degree correction discards a large share of the projector's native resolution and light output. The correct fix is mechanical: reposition the mount or use optical lens shift. Flagging it at verification is the last chance before the client lives with a compromised image. CTS Duty B Task 1."
  },
  {
    "domain": "CTS: AVIXA Standards",
    "cert": "CTS",
    "duty": "B",
    "task": "B1",
    "q": "The installer declares the system finished, but the client questions whether every requirement was met. What is the authoritative reference for deciding the system is complete?",
    "options": [
      "The installer's professional judgment, since they built the system and know it best",
      "The manufacturer's specification sheets, which define what each device can do",
      "The approved design documents and performance targets the system was built against",
      "The project schedule, which defines completion as the date commissioning was planned"
    ],
    "correct": 2,
    "explanation": "Done is defined by the contract documents: drawings, performance targets, and the scope the client approved. Verification tests the installed system against those documents, which is why AVIXA's verification frameworks are built around comparing measured performance to documented requirements. CTS Duty B Task 1."
  },
  {
    "domain": "CTS: Troubleshooting & Verification",
    "cert": "CTS",
    "duty": "B",
    "task": "B1",
    "q": "AV-over-IP streams are clean to one display but stutter badly when three more displays join. The switch is unmanaged. What is the most likely cause?",
    "options": [
      "The encoder cannot handle more than one decoder, so a second encoder must be added",
      "The displays are negotiating different resolutions, which overloads the decoder buffers",
      "The Ethernet cables are too long, and the signal degrades with each added display",
      "Without IGMP snooping the switch floods multicast to every port, saturating the network"
    ],
    "correct": 3,
    "explanation": "Multicast video only scales when the switch prunes it with IGMP snooping. An unmanaged switch blasts every stream to every port, so each added display multiplies the traffic until the network chokes. Managed switching with IGMP snooping is a design requirement, not an upgrade. CTS Duty B Task 1."
  },
  {
    "domain": "CTS: Electrical & Site Survey",
    "cert": "CTS",
    "duty": "B",
    "task": "B1",
    "q": "Why must the AV rack's main power disconnect be clearly labeled and readily accessible?",
    "options": [
      "So power can be cut instantly in an emergency and locked out safely during service",
      "So the client can power-cycle the rack themselves instead of calling for support",
      "So the fire alarm panel can automatically shut down AV equipment during a drill",
      "So the cleaning crew can switch the rack off each night to save electricity"
    ],
    "correct": 0,
    "explanation": "An accessible, labeled disconnect is a life-safety and service-safety item: first responders and techs must kill power without hunting through a rack. Verification includes confirming it exists, is labeled, and actually disconnects the load. CTS Duty B Task 1."
  },
  {
    "domain": "CTS: Commissioning & Closeout",
    "cert": "CTS",
    "duty": "B",
    "task": "B1",
    "q": "How do you verify installed ceiling microphone coverage matches the design during system verification?",
    "options": [
      "Check the microphone spec sheets against the room dimensions to confirm the math",
      "Walk the seating area speaking at normal level while watching pickup and metering in the DSP",
      "Measure the distance from each microphone to the nearest seat with a laser measure",
      "Play pink noise through the loudspeakers and confirm the microphones do not feed back"
    ],
    "correct": 1,
    "explanation": "Coverage is proven by a talker test, not by paperwork. Walking the seats while watching live metering shows exactly where pickup drops off, which is the only evidence that matters to the client on their first conference call. CTS Duty B Task 1."
  },
  {
    "domain": "CTS: Commissioning & Closeout",
    "cert": "CTS",
    "duty": "B",
    "task": "B1",
    "q": "At final verification the brand-new projector's lamp-hour counter reads 214 hours. What should you do?",
    "options": [
      "Nothing; manufacturers burn in every projector for 200 hours before shipping",
      "Reset the counter to zero so the client's maintenance log starts clean",
      "Investigate and document it, since new equipment should show near-zero hours",
      "Replace the lamp immediately, because 214 hours means it is already near end of life"
    ],
    "correct": 2,
    "explanation": "A high hour count on 'new' equipment means it was a demo unit, previously installed, or the counter was never reset after testing. Any of those change what the client paid for, so it gets documented and resolved, not quietly zeroed. CTS Duty B Task 1."
  },
  {
    "domain": "CTS: Commissioning & Closeout",
    "cert": "CTS",
    "duty": "B",
    "task": "B2",
    "q": "Field conditions forced several cable reroutes and two device substitutions during installation. Who is responsible for recording those changes in the as-built drawings?",
    "options": [
      "The architect, since all building record drawings flow through their office",
      "The integrator, who must document what was actually installed for the client to own",
      "The equipment manufacturer, whose cut sheets define the final configuration",
      "No one; as-builts are issued from the original design drawings unchanged"
    ],
    "correct": 1,
    "explanation": "As-builts are the integrator's deliverable: the marked-up record of reality, reviewed against the design. The service tech who arrives in three years works from these drawings, so 'we meant to update them' is a closeout failure. CTS Duty B Task 2."
  },
  {
    "domain": "CTS: Commissioning & Closeout",
    "cert": "CTS",
    "duty": "B",
    "task": "B2",
    "q": "Which set of documents belongs in the system closeout package handed to the client?",
    "options": [
      "The original proposal, the installer's internal labor logs, and the equipment invoices",
      "Marketing brochures for every installed product and the manufacturer's full catalog",
      "As-built drawings, schematics, the operations manual, warranties, IP and password inventory, and training records",
      "The project schedule, the crew's time sheets, and the permit applications"
    ],
    "correct": 2,
    "explanation": "The closeout package is everything the owner needs to operate, maintain, and service the system without calling you for basics. If a document answers 'how does this work' or 'who do I call,' it belongs in the package. CTS Duty B Task 2."
  },
  {
    "domain": "CTS: Project Management",
    "cert": "CTS",
    "duty": "B",
    "task": "B2",
    "q": "Many manufacturers require product registration within a short window after installation. What is the risk if registration is missed?",
    "options": [
      "The warranty may fall back to a shorter term or the date of manufacture instead of the install date",
      "The equipment will stop functioning until it is registered with the manufacturer",
      "There is no risk; registration is only used for marketing emails to the client",
      "The installer becomes personally liable for all future repairs on that equipment"
    ],
    "correct": 0,
    "explanation": "Registration locks the warranty start to the project, not the factory or the distributor's shelf. Missing the window can quietly cost the client months of coverage, so warranty registration is a closeout task with a deadline, not a favor. CTS Duty B Task 2."
  },
  {
    "domain": "CTS: Customer Relations",
    "cert": "CTS",
    "duty": "B",
    "task": "B2",
    "q": "Why do integrators collect sign-in sheets at handover training sessions?",
    "options": [
      "To bill the client per attendee for the training time",
      "To prove training was delivered if the client later claims nobody was trained",
      "To build a marketing mailing list of the client's employees",
      "To satisfy the fire code occupancy count for the training room"
    ],
    "correct": 1,
    "explanation": "'Nobody ever trained us' is one of the most common post-project disputes, and it usually appears the first time something breaks. A signed attendance sheet with the topics covered ends that argument in seconds. CTS Duty B Task 2."
  },
  {
    "domain": "CTS: Project Management",
    "cert": "CTS",
    "duty": "B",
    "task": "B2",
    "q": "A critical switcher arrives dead on arrival two days before commissioning. What is the correct project response?",
    "options": [
      "Open the unit and attempt a component-level repair to keep the schedule",
      "Wait for the manufacturer to investigate before telling the client anything",
      "Document the failure, start the RMA immediately, deploy a workaround or loaner, and update the schedule",
      "Install it anyway; most DOA units recover after a firmware update and a power cycle"
    ],
    "correct": 2,
    "explanation": "DOA equipment is a logistics problem, not a repair project. Protect the schedule with a workaround, protect the warranty with a documented RMA, and protect trust by telling the client the plan the same day. CTS Duty B Task 2."
  },
  {
    "domain": "CTS: Commissioning & Closeout",
    "cert": "CTS",
    "duty": "B",
    "task": "B2",
    "q": "What must an AV operations manual contain to be useful to the client's staff?",
    "options": [
      "The integrator's internal cost breakdown and the crew's contact information",
      "Full programming source code for the control system and DSP",
      "A history of every change order issued during the project",
      "System description, normal operating procedures, basic troubleshooting, maintenance schedule, and support contacts"
    ],
    "correct": 3,
    "explanation": "The operations manual is written for the person running the room at 8 AM, not for the engineer who built it. If it does not answer 'how do I run a meeting, what do I do when it fails, and who do I call,' it is a binder, not a manual. CTS Duty B Task 2."
  },
  {
    "domain": "CTS: Project Management",
    "cert": "CTS",
    "duty": "B",
    "task": "B2",
    "q": "The installed system has dozens of device passwords and IP addresses. How should that inventory reach the client at handover?",
    "options": [
      "Through a secure handoff such as an encrypted file or in-person transfer, never plain email",
      "Printed on a label inside the rack door so any tech can find it quickly",
      "Emailed to the client's general info address for easy forwarding to whoever needs it",
      "Stored only in the integrator's ticketing system and provided on request"
    ],
    "correct": 0,
    "explanation": "Credentials are the keys to the client's network. A secure, documented transfer protects both sides: the client gets full ownership of their system, and the integrator cannot be blamed for a later breach. CTS Duty B Task 2."
  },
  {
    "domain": "CTS: Customer Relations",
    "cert": "CTS",
    "duty": "B",
    "task": "B2",
    "q": "During the warranty period, a device fails and the client calls the manufacturer directly for a replacement. What is the problem with bypassing the integrator?",
    "options": [
      "There is no problem; the manufacturer always responds faster than the integrator",
      "The integrator owns the system-level warranty and must coordinate the claim, verify the diagnosis, and protect the rest of the system",
      "Manufacturers refuse to speak with end users, so the call will be automatically rejected",
      "Direct manufacturer contact doubles the warranty period, which complicates the service records"
    ],
    "correct": 1,
    "explanation": "The integrator warranted the working system, not just the boxes. They confirm the device is truly at fault, handle the RMA without disrupting the installation, and keep one accountable party in front of the client. Bypassing them fragments responsibility the next time something fails. CTS Duty B Task 2."
  },
  {
    "domain": "CTS: Commissioning & Closeout",
    "cert": "CTS",
    "duty": "B",
    "task": "B2",
    "q": "The control system was reprogrammed in the field and three devices were substituted during installation. When must the schematics be updated?",
    "options": [
      "Never; schematics are design documents and the field changes are recorded verbally at training",
      "Only if the client pays for a documentation change order after the project closes",
      "Before closeout, so the as-built set reflects what was actually installed and programmed",
      "At the next service call, when the tech discovers the differences"
    ],
    "correct": 2,
    "explanation": "Drawings that do not match reality are worse than useless on a service call. Every field change gets captured before the as-built set is issued, while the crew that made the changes still remembers them. CTS Duty B Task 2."
  },
  {
    "domain": "CTS: Project Management",
    "cert": "CTS",
    "duty": "B",
    "task": "B2",
    "q": "What is retainage in AV contracting, and when is it typically released?",
    "options": [
      "A bonus paid to the integrator for finishing early, released at substantial completion",
      "The client's deposit, refunded if the project finishes under budget",
      "A penalty withheld for every day the project runs past the scheduled end date",
      "A percentage of each payment held back until punch list items are closed and final acceptance is signed"
    ],
    "correct": 3,
    "explanation": "Retainage is the client's leverage to ensure the last 5 percent of the work, the punch list, actually gets finished. It releases at final acceptance, which is why closing punch items promptly is a cash-flow issue, not just good manners. CTS Duty B Task 2."
  },
  {
    "domain": "CTS: Customer Relations",
    "cert": "CTS",
    "duty": "B",
    "task": "B2",
    "q": "Why leave a one-page quick-start guide at the lectern instead of relying on the full operations manual?",
    "options": [
      "Users need the five common tasks in thirty seconds; the full manual stays at the rack for deeper issues",
      "The full manual is proprietary and clients are not permitted to keep a copy",
      "Quick-start guides replace the need for any handover training session",
      "Manuals are too heavy to leave in the room and the lectern has limited space"
    ],
    "correct": 0,
    "explanation": "Nobody opens a 60-page manual five minutes before a meeting. The quick-start card handles power, source select, volume, and the help number; the manual handles everything else. Both get delivered, each where it will actually be used. CTS Duty B Task 2."
  },
  {
    "domain": "CTS: Commissioning & Closeout",
    "cert": "CTS",
    "duty": "B",
    "task": "B2",
    "q": "At handover, two devices are still running beta firmware the programmer installed to test a feature. What is the correct action?",
    "options": [
      "Leave it; the beta enabled the feature the client asked for and it works",
      "Roll back to the released firmware version before the client accepts the system",
      "Document the beta version in the as-builts and let the client decide later",
      "Upgrade every other device to the same beta so the versions match"
    ],
    "correct": 1,
    "explanation": "Beta firmware has no place in a client's production system: no support, no stability history, and no upgrade path guarantees. If the feature matters, wait for the release; hand over only released, manufacturer-supported versions. CTS Duty B Task 2."
  },
  {
    "domain": "CTS: Project Management",
    "cert": "CTS",
    "duty": "B",
    "task": "B2",
    "q": "Between substantial and final completion, who creates and owns the punch list?",
    "options": [
      "The client alone, since only the client can judge whether the work is acceptable",
      "The equipment manufacturers, who must certify each installed device",
      "The integrator compiles it with input from the client and consultant, then closes each item",
      "The general contractor, who holds the master punch list for all trades"
    ],
    "correct": 2,
    "explanation": "The integrator owns the punch list because the integrator owns the fixes. Client and consultant add items, but one party tracks, assigns, and closes every line, or items drift for months. CTS Duty B Task 2."
  },
  {
    "domain": "CTS: Commissioning & Closeout",
    "cert": "CTS",
    "duty": "B",
    "task": "B2",
    "q": "End users and the client's IT staff need different handover training. What is the key difference?",
    "options": [
      "End users are trained first because their session is longer and more technical",
      "There is no difference; everyone receives the same training for consistency",
      "IT staff are trained on daily operation while end users learn network administration",
      "End users learn daily operation; IT staff learn network setup, admin access, passwords, and backups"
    ],
    "correct": 3,
    "explanation": "Training matches the audience's job. Users need confidence running meetings; IT needs the keys to keep the system alive: admin credentials, network details, configuration backups, and the escalation path. Training IT like end users leaves nobody able to administer the system. CTS Duty B Task 2."
  },
  {
    "domain": "CTS: Project Management",
    "cert": "CTS",
    "duty": "B",
    "task": "B2",
    "q": "The client has occupied the rooms and the warranty clock has started, but several punch list items remain open. Which milestone was reached?",
    "options": [
      "Substantial completion: the system is usable for its intended purpose, with minor items still open",
      "Final completion: all obligations are fulfilled and retainage is released",
      "Beneficial occupancy: a real-estate term that has no meaning in AV contracts",
      "Provisional acceptance: the client has conditionally rejected the installation"
    ],
    "correct": 0,
    "explanation": "Substantial completion means usable, not perfect: the warranty clock and the punch list both start here. Final completion comes only after every punch item is closed and accepted. Confusing the two costs real money in warranty disputes. CTS Duty B Task 2."
  },
  {
    "domain": "CTS: Troubleshooting & Verification",
    "cert": "CTS",
    "duty": "C",
    "task": "C1",
    "q": "What is the minimum pre-event check for a high-stakes town hall starting in one hour?",
    "options": [
      "Confirm the room lights work and the seats are arranged, since facilities handles the rest",
      "Power up every source, test each microphone, confirm the recording path, and check the backup gear",
      "Play background music through the system to confirm the amplifiers are on",
      "Verify the control system home page loads, which proves all subsystems are ready"
    ],
    "correct": 1,
    "explanation": "High-stakes events get a full rehearsal of the signal path, not a glance. Every source, every mic, the record light actually recording, and the backup mic with fresh batteries: the hour before the event is when failures are cheap. CTS Duty C Task 1."
  },
  {
    "domain": "CTS: Troubleshooting & Verification",
    "cert": "CTS",
    "duty": "C",
    "task": "C1",
    "q": "Mid-presentation, a wireless handheld microphone starts dropping out. What is the correct first action while the presenter is still on stage?",
    "options": [
      "Open the receiver menu and start a fresh frequency scan during the presentation",
      "Raise the receiver's squelch threshold to force the signal to lock",
      "Hand the presenter the tested backup microphone and troubleshoot the dropout after the session",
      "Ask the presenter to speak louder and hold the mic closer until the dropout stops"
    ],
    "correct": 2,
    "explanation": "During a live event, restore service first and diagnose second. A backup mic on a coordinated frequency takes ten seconds; a menu dive takes the presenter's credibility with it. Root cause analysis happens when nobody is watching. CTS Duty C Task 1."
  },
  {
    "domain": "CTS: Customer Relations",
    "cert": "CTS",
    "duty": "C",
    "task": "C1",
    "q": "The main display wall goes dark five minutes before a board meeting starts. What is the correct priority?",
    "options": [
      "Get any working image on screen first using a backup input or path, then diagnose the failure after the meeting",
      "Trace the full signal path immediately; the meeting can wait for a proper diagnosis",
      "Explain to the board members that the hardware has failed and the meeting should be rescheduled",
      "Reboot every device in the chain at once, which is the fastest way to clear a digital fault"
    ],
    "correct": 0,
    "explanation": "The meeting is the product, not the display wall. A laptop direct to a confidence monitor or a backup input saves the meeting; the forensic work happens afterward. Clients remember that you saved their meeting far longer than they remember what failed. CTS Duty C Task 1."
  },
  {
    "domain": "CTS: Project Management",
    "cert": "CTS",
    "duty": "C",
    "task": "C1",
    "q": "You are supporting a CEO keynote with no rehearsal time. Which backup preparation matters most?",
    "options": [
      "A printed copy of the CEO's slides in case the audience wants handouts",
      "A redundant playback source and a spare wireless microphone on a coordinated frequency, both tested",
      "Extra gaffer tape and a longer HDMI cable in the equipment case",
      "The manufacturer's support phone number saved in your phone contacts"
    ],
    "correct": 1,
    "explanation": "No rehearsal means no chance to discover failures gently, so the two most failure-prone links, playback and wireless, each get a hot spare. Backups only count if they are tested before showtime. CTS Duty C Task 1."
  },
  {
    "domain": "CTS: Customer Relations",
    "cert": "CTS",
    "duty": "C",
    "task": "C1",
    "q": "The live stream drops during a hybrid all-hands meeting. What should the operator communicate to the room?",
    "options": [
      "Nothing; announcing problems makes the company look bad and the stream may recover on its own",
      "A detailed technical explanation of the encoder failure so the audience understands the complexity",
      "A brief, honest update on what is happening and when service is expected back, without jargon",
      "A promise that the recording will be perfect even though the live stream failed"
    ],
    "correct": 2,
    "explanation": "Silence breeds rumors and jargon breeds confusion. A short, plain-language update respects the audience and buys the operator the working time needed to fix the real problem. CTS Duty C Task 1."
  },
  {
    "domain": "CTS: Troubleshooting & Verification",
    "cert": "CTS",
    "duty": "C",
    "task": "C1",
    "q": "A guest presenter plugs in a laptop and the projector reports an unsupported signal. What is the fastest fix?",
    "options": [
      "Replace the projector lamp, since a weak lamp cannot sync to unusual resolutions",
      "Reboot the projector and hope the laptop renegotiates on the second attempt",
      "Open the laptop's display settings and enable every available resolution until one works",
      "Set the laptop to a standard resolution the system supports, or switch to the tested house laptop"
    ],
    "correct": 3,
    "explanation": "Guest laptops output whatever their last setup used, and the fix is to meet the system where it lives: a standard, EDID-safe resolution. The house laptop, already tested with the room, is the backup that ends the debate in seconds. CTS Duty C Task 1."
  },
  {
    "domain": "CTS: Customer Relations",
    "cert": "CTS",
    "duty": "C",
    "task": "C1",
    "q": "After an AV failure disrupts a client's important event, what follow-up best protects the relationship?",
    "options": [
      "A written incident report within 24 hours with root cause and the prevention plan",
      "A verbal apology at the next scheduled maintenance visit",
      "A discount offered immediately before anyone asks what went wrong",
      "No follow-up; raising it again only reminds the client of the failure"
    ],
    "correct": 0,
    "explanation": "The report turns a failure into evidence of professionalism: what happened, why, and what changes so it never recurs. Delivered fast and unprompted, it is often what keeps the contract. Silence reads as indifference. CTS Duty C Task 1."
  },
  {
    "domain": "CTS: Project Management",
    "cert": "CTS",
    "duty": "C",
    "task": "C1",
    "q": "Two tickets arrive at once: a dead projector in an unused huddle room, and intermittent audio in the boardroom with a meeting in one hour. Which gets priority?",
    "options": [
      "The huddle room, because a dead projector is a complete failure while the boardroom still has partial audio",
      "The boardroom, because business impact and urgency outrank the severity of the fault alone",
      "Whichever ticket arrived first, since queues must be worked in order to be fair",
      "Neither until both requesters confirm the problem still exists"
    ],
    "correct": 1,
    "explanation": "Prioritization weighs impact and urgency, not just brokenness. A total failure in an empty room loses to a partial failure in a room that matters in an hour, every time. CTS Duty C Task 1."
  },
  {
    "domain": "CTS: Troubleshooting & Verification",
    "cert": "CTS",
    "duty": "C",
    "task": "C1",
    "q": "Why should the event operator arrive 30 to 60 minutes before the start time?",
    "options": [
      "To reserve parking near the loading dock before the attendees arrive",
      "To socialize with the client contact and build the relationship before the pressure starts",
      "To test every source, microphone, and the recording path before anyone is watching",
      "To read the operations manual for a room they have never worked in"
    ],
    "correct": 2,
    "explanation": "The pre-show check is the event's insurance policy: every input switched, every mic spoken into, the record path confirmed. Failures found with an empty room are maintenance; failures found with a full room are incidents. CTS Duty C Task 1."
  },
  {
    "domain": "CTS: Troubleshooting & Verification",
    "cert": "CTS",
    "duty": "C",
    "task": "C1",
    "q": "Before a recorded deposition begins, what must be verified about the recording path?",
    "options": [
      "That the record button is illuminated, which guarantees the file is being written",
      "That the recording device powered on successfully during the morning check",
      "That last week's recording played back correctly, which proves the path still works",
      "That the device is actually recording now, with sufficient storage and a backup recorder running"
    ],
    "correct": 3,
    "explanation": "A lit record button once meant nothing when the disk was full, and depositions cannot be re-shot. Verify actual recording in progress, check remaining storage, and run a backup recorder: the content is legally irreplaceable. CTS Duty C Task 1."
  },
  {
    "domain": "CTS: Customer Relations",
    "cert": "CTS",
    "duty": "C",
    "task": "C1",
    "q": "During a hybrid meeting, remote participants hear the room clearly, but the room cannot hear the remote participants. Where is the fault?",
    "options": [
      "In the return audio path to the room, such as the far-end feed or the AEC reference routing",
      "In the room microphones, which are clearly not picking up the remote audio",
      "In the remote participants' internet connections, which are too slow for two-way audio",
      "In the room loudspeakers, which need to be turned up so the remote audio is audible"
    ],
    "correct": 0,
    "explanation": "One-way audio that favors the far end points at the return path: the far-end mix into the room, the AEC reference, or a muted return channel. The room mics are proven working because the remote side hears the room. CTS Duty C Task 1."
  },
  {
    "domain": "CTS: Project Management",
    "cert": "CTS",
    "duty": "C",
    "task": "C1",
    "q": "During a live event the operator hits a DSP fault they cannot resolve. What should have been defined before the event?",
    "options": [
      "The operator's hourly rate for the extended troubleshooting time",
      "The escalation contact and the expected response time for each level of problem",
      "A written guarantee from the manufacturer that the DSP would not fail",
      "The client's approval to purchase a replacement DSP on the spot"
    ],
    "correct": 1,
    "explanation": "Escalation is decided in calm planning, not in crisis. Knowing exactly who to call and how fast they answer turns a show-stopper into a ten-minute pause. CTS Duty C Task 1."
  },
  {
    "domain": "CTS: Troubleshooting & Verification",
    "cert": "CTS",
    "duty": "C",
    "task": "C1",
    "q": "What belongs in a technician's go-bag for live-event support calls?",
    "options": [
      "Only a laptop, since modern systems are entirely software-configured",
      "Marketing brochures and a contract template to upsell the client on site",
      "Adapters, spare cables, fresh batteries, a laptop, a toner, and a multimeter",
      "A full spare rack of equipment to replace anything that fails"
    ],
    "correct": 2,
    "explanation": "Most event failures are solved with adapters, batteries, and a cable, not a spare rack. The go-bag carries the high-probability fixes and the diagnostic tools to prove what failed. CTS Duty C Task 1."
  },
  {
    "domain": "CTS: Customer Relations",
    "cert": "CTS",
    "duty": "C",
    "task": "C1",
    "q": "Repairs will take 20 minutes but the client's meeting starts in 10. What do you tell the client contact?",
    "options": [
      "That everything is under control, to avoid worrying them before the meeting",
      "That the meeting must be cancelled, since the system will not be ready",
      "Nothing until the repair is done, so you are not distracted from the work",
      "The honest timeframe plus the interim workaround you are setting up for the first 10 minutes"
    ],
    "correct": 3,
    "explanation": "Bad news delivered early with a plan preserves trust; bad news discovered at start time destroys it. The workaround shows you are protecting their meeting, not just their equipment. CTS Duty C Task 1."
  },
  {
    "domain": "CTS: Troubleshooting & Verification",
    "cert": "CTS",
    "duty": "C",
    "task": "C1",
    "q": "When providing remote assistance on a client's AV system, what is required before connecting?",
    "options": [
      "The client's permission and an agreed support window; never connect silently",
      "Nothing; the support contract implies standing permission to connect at any time",
      "A full system backup, which the remote session performs automatically",
      "Physical presence of the client's IT staff watching the remote session"
    ],
    "correct": 0,
    "explanation": "Remote access to a client's network is a trust instrument. Permission and a defined window keep it professional and auditable; silent connections, even with good intent, read as intrusions when discovered. CTS Duty C Task 1."
  },
  {
    "domain": "CTS: Customer Relations",
    "cert": "CTS",
    "duty": "C",
    "task": "C1",
    "q": "A support contract promises a 4-hour response time. What does that obligate the provider to do?",
    "options": [
      "Fix any reported problem completely within 4 hours of the ticket",
      "Acknowledge the ticket and begin active work within 4 hours",
      "Arrive on site within 4 hours regardless of the problem's severity",
      "Answer the phone within 4 hours during business days only"
    ],
    "correct": 1,
    "explanation": "Response time is the clock to engagement, not to resolution: acknowledge, triage, and start work. Resolution times are a separate SLA tier. Knowing the difference prevents both overpromising and disputes. CTS Duty C Task 1."
  },
  {
    "domain": "CTS: Project Management",
    "cert": "CTS",
    "duty": "C",
    "task": "C1",
    "q": "Why do AV support teams run an on-call rotation instead of relying on one senior technician?",
    "options": [
      "Junior technicians need the overtime pay to stay motivated",
      "Clients prefer speaking to a different technician on every call",
      "It provides coverage without burnout and removes a single point of failure",
      "Senior technicians are not permitted to work after hours by labor law"
    ],
    "correct": 2,
    "explanation": "One hero tech is a resilience problem: vacations, illness, and exhaustion all become client-facing outages. A rotation spreads load and builds depth across the team. CTS Duty C Task 1."
  },
  {
    "domain": "CTS: Troubleshooting & Verification",
    "cert": "CTS",
    "duty": "C",
    "task": "C1",
    "q": "The main projector lamp fails mid-keynote and no spare lamp is on site. What is the best immediate recovery?",
    "options": [
      "Pause the keynote for 30 minutes while someone drives to buy a replacement lamp",
      "Continue in the dark and describe the slides verbally until the lamp cools and restrikes",
      "Open the projector and bypass the lamp safety interlock to force a restrike",
      "Reroute the program feed to the overflow displays and confidence monitors while a replacement is sourced"
    ],
    "correct": 3,
    "explanation": "The show continues on whatever displays exist: overflow rooms, confidence monitors, even a large flat panel. Forcing a hot restrike risks the lamp and the interlock bypass risks people. Redundancy in the signal path is the real backup plan. CTS Duty C Task 1."
  },
  {
    "domain": "CTS: Customer Relations",
    "cert": "CTS",
    "duty": "C",
    "task": "C1",
    "q": "What makes end-user training stick after the trainer leaves the building?",
    "options": [
      "Hands-on practice where the users operate the system themselves, plus a quick-start card left behind",
      "A long, detailed lecture covering every feature so nothing is missed",
      "Training only the most technical employee and letting them teach everyone else",
      "Emailing the full operations manual the day after the session"
    ],
    "correct": 0,
    "explanation": "People remember what their hands did, not what a presenter said. Users who run a mock meeting during training build muscle memory, and the quick-start card catches what memory drops. CTS Duty C Task 1."
  },
  {
    "domain": "CTS: Troubleshooting & Verification",
    "cert": "CTS",
    "duty": "C",
    "task": "C1",
    "q": "The same conference room 'loses audio' every Monday morning, and each time a reboot fixes it. What should the support tech do beyond the weekly reboot?",
    "options": [
      "Schedule a standing Monday morning reboot so the client never notices",
      "Find the pattern's cause, such as a weekend shutdown sequence or a scheduled device reboot, and fix it",
      "Replace the entire audio chain; recurring faults always mean failing hardware",
      "Train the client to reboot the system themselves every Monday"
    ],
    "correct": 1,
    "explanation": "A fault with a schedule has a cause with a schedule. The pattern points at something timed: an energy-saving shutdown, a network maintenance window, a device that does not recover from a weekly reboot. Fix the cause and the Mondays fix themselves. CTS Duty C Task 1."
  },
  {
    "domain": "CTS: Project Management",
    "cert": "CTS",
    "duty": "C",
    "task": "C1",
    "q": "What must every on-site support visit produce before the technician leaves?",
    "options": [
      "A five-star review request sent to the client contact's phone",
      "A verbal summary given to whoever happens to be in the room",
      "A written service report: symptoms, actions taken, parts used, time spent, and follow-ups",
      "An invoice for the visit, payable before the technician departs"
    ],
    "correct": 2,
    "explanation": "The service report is the institutional memory of the system: the next tech reads it instead of rediscovering the fault. No report means every visit starts from zero, and repeat failures look like new problems. CTS Duty C Task 1."
  },
  {
    "domain": "CTS: Electrical & Site Survey",
    "cert": "CTS",
    "duty": "C",
    "task": "C1",
    "q": "During an event the rack UPS starts beeping steadily although the building power is normal. What is the likely situation and response?",
    "options": [
      "The UPS is performing a scheduled self-test; ignore it until the event ends",
      "The UPS batteries are fully charged; the beep confirms the system is protected",
      "The beeping is a ground fault warning; lift the equipment grounds to silence it",
      "The UPS is on battery because its input power path failed; find the tripped breaker or failed UPS and restore normal power"
    ],
    "correct": 3,
    "explanation": "A UPS on battery with utility power present means the UPS is not seeing that power: tripped breaker, failed input, or a UPS fault. The beep is a countdown on finite battery runtime, so the power path gets restored now, not after the event. CTS Duty C Task 1."
  },
  {
    "domain": "CTS: Project Management",
    "cert": "CTS",
    "duty": "C",
    "task": "C1",
    "q": "Why assign a dedicated operator to a VIP event instead of relying on on-call support?",
    "options": [
      "A dedicated operator monitors proactively and responds in seconds, which the stakes justify",
      "VIP attendees require an operator with a higher certification level by regulation",
      "On-call technicians are not permitted inside executive boardrooms",
      "Dedicated operators cost less than on-call overtime for events over two hours"
    ],
    "correct": 0,
    "explanation": "On-call support reacts; a dedicated operator prevents. Watching meters, catching a dying wireless battery before it dies, and having hands on the faders is what high-stakes events are paying for. CTS Duty C Task 1."
  },
  {
    "domain": "CTS: Troubleshooting & Verification",
    "cert": "CTS",
    "duty": "C",
    "task": "C1",
    "q": "Before a multilingual event begins, how do you verify the interpretation feeds?",
    "options": [
      "Check that each interpreter's microphone powers on and the transmitters show RF signal",
      "Listen to each language channel on a receiver at the actual audience seats",
      "Confirm the interpreter booth windows are clean so the interpreters can see the stage",
      "Verify the main program audio is loud enough, since the interpreters listen to it"
    ],
    "correct": 1,
    "explanation": "RF signal at the booth proves transmission, not reception where it matters. Listening to every language channel from audience seats confirms the full path: interpreter mic, transmitter, distribution, and receiver. CTS Duty C Task 1."
  },
  {
    "domain": "CTS: Electrical & Site Survey",
    "cert": "CTS",
    "duty": "C",
    "task": "C1",
    "q": "The meeting recording sounds hollow and distant compared to how the room sounded live. What is the likely cause?",
    "options": [
      "The recording device's batteries are low, which degrades the audio quality",
      "The room is too large for the recording device's built-in microphone",
      "The recording is capturing the reinforced room mix instead of a dedicated, dry record mix",
      "The file was saved in a compressed format, which always sounds hollow"
    ],
    "correct": 2,
    "explanation": "A recording tapped from the room reinforcement mix inherits the room's acoustics, AEC processing, and reinforcement coloration. A dedicated record mix, dry and balanced for playback, is a separate mix bus for a reason. CTS Duty C Task 1."
  },
  {
    "domain": "CTS: AVIXA Standards",
    "cert": "CTS",
    "duty": "C",
    "task": "C1",
    "q": "A client complains the projected image looks washed out even though the projector is new. Using AVIXA V201.01 as the framework, what do you check first?",
    "options": [
      "The projector's color temperature setting, since new projectors ship in the wrong mode",
      "The HDMI cable length, because long cables wash out the image",
      "The projector's warranty status, to arrange a replacement unit",
      "Ambient light falling on the screen, since contrast ratio is about the difference between image black and room light"
    ],
    "correct": 3,
    "explanation": "V201.01 defines contrast as the ratio the viewer actually sees, which includes ambient light on the screen. A bright room can destroy a 15:1 contrast target no matter how good the projector is. Measure the room light first; it is the cheapest variable to fix. CTS Duty C Task 1."
  },
  {
    "domain": "CTS: Project Management",
    "cert": "CTS",
    "duty": "D",
    "task": "D1",
    "q": "For a 500-attendee general session with live audio, video, and streaming, which staffing mix is appropriate?",
    "options": [
      "A lead technician plus dedicated audio, video, and streaming operators with defined roles",
      "One senior technician, since a well-designed system should run itself",
      "Only a stage manager; the presenters can advance their own slides",
      "Two interns supervised remotely by the lead technician over the phone"
    ],
    "correct": 0,
    "explanation": "Supervising operations means matching crew to complexity: simultaneous audio, video, and streaming need simultaneous hands. Understaffing a general session guarantees that one failure cascades while the lone tech is busy elsewhere. CTS Duty D Task 1."
  },
  {
    "domain": "CTS: Customer Relations",
    "cert": "CTS",
    "duty": "D",
    "task": "D1",
    "q": "A contracted service vendor repeatedly misses its SLA response times. What is the supervisor's correct first step?",
    "options": [
      "Immediately terminate the contract and bring all service in-house",
      "Document the misses and issue a formal written notice citing the contract terms",
      "Quietly hire a second vendor to cover the gaps without telling the first",
      "Lower the SLA requirements so the vendor can meet them going forward"
    ],
    "correct": 1,
    "explanation": "Vendor management runs on documentation and process: logged failures, formal notice, cure period, then replacement if nothing changes. Skipping straight to termination invites disputes; lowering the bar rewards failure. CTS Duty D Task 1."
  },
  {
    "domain": "CTS: Project Management",
    "cert": "CTS",
    "duty": "D",
    "task": "D1",
    "q": "What belongs in the annual AV operations consumables budget?",
    "options": [
      "Salaries for the operations staff and the service contract fees",
      "Capital funds for a full technology refresh of every room",
      "Lamps, batteries, cables, adapters, and other items consumed or worn in normal use",
      "The client's contingency fund for unplanned room renovations"
    ],
    "correct": 2,
    "explanation": "Consumables are the predictable, recurring costs of keeping systems running: lamps age out, batteries cycle out, cables walk away. Budgeting them annually prevents the slow decay of 'we will order it when something breaks.' CTS Duty D Task 1."
  },
  {
    "domain": "CTS: Project Management",
    "cert": "CTS",
    "duty": "D",
    "task": "D1",
    "q": "Why do AV operations need written SOPs for routine room setups and event support?",
    "options": [
      "To satisfy the insurance company, which requires paperwork for every event",
      "To give new hires something to read during their first week",
      "To document the supervisor's personal preferences for room layouts",
      "To make service consistent across staff and shifts, so any trained tech delivers the same result"
    ],
    "correct": 3,
    "explanation": "SOPs turn individual expertise into team capability. The Tuesday night tech sets the room exactly like the Monday morning tech did, and new hires perform to standard on day one instead of month six. CTS Duty D Task 1."
  },
  {
    "domain": "CTS: Customer Relations",
    "cert": "CTS",
    "duty": "D",
    "task": "D1",
    "q": "What is the value of tracking room and system utilization data across the facility?",
    "options": [
      "It provides evidence for upgrade, staffing, and replacement budgets instead of opinions",
      "It lets the supervisor monitor which employees are using rooms the most",
      "It satisfies a legal requirement that all AV usage be logged",
      "It is mainly useful for marketing the AV department to other departments"
    ],
    "correct": 0,
    "explanation": "Utilization data converts 'we need new projectors' into 'the town hall system ran 340 hours last quarter with 12 support calls.' Supervisors who manage with data win budgets; those who manage with anecdotes lose them. CTS Duty D Task 1."
  },
  {
    "domain": "CTS: Project Management",
    "cert": "CTS",
    "duty": "D",
    "task": "D1",
    "q": "As operations supervisor, how do you triage the morning queue of service tickets?",
    "options": [
      "Strictly first-in, first-out, so no requester feels deprioritized",
      "By business impact and urgency first, then by arrival order within each tier",
      "By estimated repair cost, cheapest fixes first to clear the queue quickly",
      "By which requester complains the loudest, since squeaky wheels need grease"
    ],
    "correct": 1,
    "explanation": "Triage is a business decision, not a fairness ritual. A dead boardroom an hour before a meeting outranks three dead huddle rooms; within the same tier, FIFO keeps it fair. CTS Duty D Task 1."
  },
  {
    "domain": "CTS: Project Management",
    "cert": "CTS",
    "duty": "D",
    "task": "D1",
    "q": "Who owns the preventive maintenance calendar in an AV operations team?",
    "options": [
      "The equipment manufacturers, who schedule their own service visits",
      "The client, who requests maintenance when they notice problems",
      "The operations supervisor, who assigns the tasks and verifies completion",
      "No one; preventive maintenance happens naturally during service calls"
    ],
    "correct": 2,
    "explanation": "Maintenance that belongs to everyone belongs to no one. The supervisor assigns it, tracks it, and verifies it happened, because the calendar nobody owns is the calendar nobody follows. CTS Duty D Task 1."
  },
  {
    "domain": "CTS: Commissioning & Closeout",
    "cert": "CTS",
    "duty": "D",
    "task": "D2",
    "q": "Projectors in a dusty ballroom run 40 hours a week. How should their filters be maintained?",
    "options": [
      "Inspect and clean on the manufacturer's schedule, more often in harsh environments, since clogged filters cause overheating",
      "Remove the filters permanently; they restrict airflow and modern projectors do not need them",
      "Replace the filters only when the projector shuts down from overheating",
      "Clean them once a year regardless of environment, which satisfies every warranty"
    ],
    "correct": 0,
    "explanation": "Filters are the lungs of the projector. In a dusty room they load up fast, airflow drops, and heat builds until the projector protects itself by shutting down mid-event. Scheduled cleaning is cheap; emergency lamp replacements are not. CTS Duty D Task 2."
  },
  {
    "domain": "CTS: Electrical & Site Survey",
    "cert": "CTS",
    "duty": "D",
    "task": "D2",
    "q": "The facility uses rechargeable batteries in all wireless microphones. What maintenance practice prevents mid-event battery failures?",
    "options": [
      "Recharge the batteries only when they are fully dead to preserve their memory",
      "Track charge cycles and rotate batteries out on a schedule based on their rated cycle life",
      "Store all batteries fully charged in a hot equipment room for quick deployment",
      "Replace rechargeables with alkalines before every event to be safe"
    ],
    "correct": 1,
    "explanation": "Rechargeables fade gradually: fewer cycles of useful life each year until one dies mid-speech. Cycle tracking and scheduled rotation retire them before they fail on stage. Heat storage accelerates the decline, and full-discharge 'memory' advice is decades out of date. CTS Duty D Task 2."
  },
  {
    "domain": "CTS: Troubleshooting & Verification",
    "cert": "CTS",
    "duty": "D",
    "task": "D2",
    "q": "The manufacturer releases new DSP firmware for the 40 rooms across campus. What is the correct rollout?",
    "options": [
      "Push it to all 40 rooms overnight so every system is current by morning",
      "Wait a year; firmware updates are optional and the systems work fine today",
      "Test it in one pilot room through real use, then roll out on a schedule with a rollback plan",
      "Update only the rooms that have open service tickets, since the rest are stable"
    ],
    "correct": 2,
    "explanation": "Fleet-wide firmware pushes are how one bad release becomes forty broken rooms. A pilot room proves the release in your environment, and a rollback plan proves you thought about failure. 'It worked on the bench' is not a rollout strategy. CTS Duty D Task 2."
  },
  {
    "domain": "CTS: Commissioning & Closeout",
    "cert": "CTS",
    "duty": "D",
    "task": "D2",
    "q": "During preventive maintenance of installed cabling, what should be inspected?",
    "options": [
      "Only the cable jackets' color, to confirm they still match the room decor",
      "The original purchase price of each cable, to update the asset depreciation log",
      "The cable's data throughput with a speed test, since all AV cable degrades annually",
      "Connector seating, strain relief, labeling legibility, and any physical cable damage"
    ],
    "correct": 3,
    "explanation": "Cable failures announce themselves early to anyone who looks: a connector backing out, a tie-wrap crushing a jacket, a label faded unreadable. The inspection is visual and tactile, and it catches the failures that become 2 AM service calls. CTS Duty D Task 2."
  },
  {
    "domain": "CTS: Electrical & Site Survey",
    "cert": "CTS",
    "duty": "D",
    "task": "D2",
    "q": "The UPS self-test reports a weak battery, but the UPS still powers the rack during tests. Why replace the battery now?",
    "options": [
      "A weak battery means shrinking ride-through time; when it fails completely there is zero protection",
      "Weak batteries draw extra current, which will trip the branch circuit breaker",
      "The UPS warranty requires battery replacement at the first warning or it is voided retroactively",
      "Weak batteries emit gases that corrode the rack equipment above the UPS"
    ],
    "correct": 0,
    "explanation": "UPS batteries do not fail gracefully; they fade until one outage reveals they hold nothing. The self-test warning is the scheduled replacement notice, and acting on it is the entire point of having a UPS. CTS Duty D Task 2."
  },
  {
    "domain": "CTS: AVIXA Standards",
    "cert": "CTS",
    "duty": "D",
    "task": "D2",
    "q": "What maintenance record does the next service technician need most when they open a rack they have never seen?",
    "options": [
      "The original sales proposal showing what the system cost",
      "A dated log of maintenance performed, parts replaced, and current firmware versions",
      "The resumes of the technicians who previously worked on the system",
      "A copy of the building's floor plans from the architect"
    ],
    "correct": 1,
    "explanation": "The service log is the system's medical chart: what was done, when, what changed, and what version everything runs. Without it, every visit starts with rediscovery. AVIXA's verification frameworks treat documented baselines the same way: you cannot maintain what you never recorded. CTS Duty D Task 2."
  },
  {
    "domain": "CTS: Project Management",
    "cert": "CTS",
    "duty": "D",
    "task": "D2",
    "q": "When should preventive maintenance be scheduled in an occupied facility?",
    "options": [
      "During business hours, so the maintenance work is visible to the client",
      "Whenever the technician has a gap between service calls",
      "In off-hours windows coordinated with the room owners, so no meeting is disrupted",
      "Only during the annual holiday shutdown, to minimize scheduling effort"
    ],
    "correct": 2,
    "explanation": "Maintenance that interrupts meetings creates more complaints than the failures it prevents. Coordinated off-hours windows keep both the systems and the relationships healthy. CTS Duty D Task 2."
  },
  {
    "domain": "CTS: Troubleshooting & Verification",
    "cert": "CTS",
    "duty": "D",
    "task": "D2",
    "q": "System logs show a projector logged an over-temperature warning twice last month, but it is running fine today. What is the correct response?",
    "options": [
      "Clear the log so the warning does not confuse the next technician",
      "Wait for a third warning, since two events could be a sensor glitch",
      "Replace the projector immediately; any thermal warning means the unit is failing",
      "Investigate now: check the filter, fans, and ventilation before it fails during an event"
    ],
    "correct": 3,
    "explanation": "Logs are early warnings, not trivia. Two thermal warnings describe a cooling problem in progress: filter, fan, or blocked vent. Investigating today is a ten-minute maintenance task; ignoring it schedules a mid-event failure. CTS Duty D Task 2."
  },
  {
    "domain": "CTS: Electrical & Site Survey",
    "cert": "CTS",
    "duty": "D",
    "task": "D2",
    "q": "Why should equipment rooms be monitored for temperature and humidity?",
    "options": [
      "Heat and moisture shorten equipment life, so monitoring verifies the HVAC is protecting the investment",
      "Insurance policies require hourly temperature logs for every equipment room",
      "Monitoring is only needed in winter, when heating systems dry out the air",
      "Equipment rooms must be kept at exactly 68 degrees to satisfy manufacturer warranties"
    ],
    "correct": 0,
    "explanation": "Electronics age faster hot and corrode faster damp. A simple sensor that proves the room stays within spec protects both the equipment and any warranty claim that follows a failure. CTS Duty D Task 2."
  },
  {
    "domain": "CTS: Commissioning & Closeout",
    "cert": "CTS",
    "duty": "D",
    "task": "D2",
    "q": "A two-year-old video wall's panels no longer match in color and brightness. What maintenance action applies?",
    "options": [
      "Replace the entire wall; panels that drift can never be brought back into alignment",
      "Recalibrate the panels to the baseline settings recorded at commissioning",
      "Increase the brightness of the dimmest panel until it visually matches the others",
      "Swap the panels' positions so the mismatch is less noticeable from the seats"
    ],
    "correct": 1,
    "explanation": "Panels drift with age and hours; that is expected, not fatal. The commissioning baseline exists for exactly this moment: recalibrate to the recorded targets and the wall is uniform again. This is why baselines get documented. CTS Duty D Task 2."
  },
  {
    "domain": "CTS: AVIXA Standards",
    "cert": "CTS",
    "duty": "D",
    "task": "D2",
    "q": "Why does preventive maintenance include checking the spare-parts stock left at closeout?",
    "options": [
      "Spare parts expire after one year and must be thrown away on schedule",
      "The auditor requires a monthly count of all attic stock for insurance purposes",
      "Attic stock gets used over time; reordering before it runs out prevents the next failure from waiting on shipping",
      "Spare parts must be returned to the manufacturer if they are not used within two years"
    ],
    "correct": 2,
    "explanation": "Closeout spares are a consumable reserve, not a permanent fixture. Every used lamp, adapter, and battery depletes it, and the reorder has to happen before the stock hits zero, not after the next failure. CTS Duty D Task 2."
  },
  {
    "domain": "CTS: Project Management",
    "cert": "CTS",
    "duty": "D",
    "task": "D2",
    "q": "The DSP and control system software licenses expire next quarter. Why is renewal a maintenance task rather than an IT afterthought?",
    "options": [
      "Expired licenses cause the equipment to shut down immediately at midnight on the expiry date",
      "License renewals are required by law for all commercial AV installations",
      "The manufacturer doubles the renewal price for every month past expiration",
      "Expired licenses can block programming changes, updates, and manufacturer support when you need them"
    ],
    "correct": 3,
    "explanation": "The system keeps running on expired licenses right up until you need to change something: a programming update, a firmware patch, a support call. Then the expired license becomes the emergency. Tracking renewals is maintenance because it preserves the ability to maintain. CTS Duty D Task 2."
  },
  {
    "domain": "CTS: Troubleshooting & Verification",
    "cert": "CTS",
    "duty": "D",
    "task": "D2",
    "q": "Classroom touch panels have become unresponsive at the screen edges. What is the first maintenance step?",
    "options": [
      "Clean the touch surface and run the manufacturer's touch recalibration",
      "Replace all the touch panels; edge failure means the digitizers are worn out",
      "Reprogram the control system, since unresponsive edges are always a software bug",
      "Increase the touch panel brightness, which improves touch sensitivity"
    ],
    "correct": 0,
    "explanation": "Edges collect grime and calibration drifts with time and temperature; both are fixed in minutes with cleaning and recalibration. Replacing hardware before trying the maintenance step wastes money and the client's patience. CTS Duty D Task 2."
  },
  {
    "domain": "CTS: Electrical & Site Survey",
    "cert": "CTS",
    "duty": "D",
    "task": "D2",
    "q": "Projector lamps are rated for 3,000 hours and the maintenance log shows 2,700. What is the correct action?",
    "options": [
      "Run them to failure; rated life is conservative and lamps usually last twice as long",
      "Order replacements now and schedule the swap before the rated life is reached",
      "Reset the hour counter to extend the usable life of the current lamps",
      "Reduce the projector brightness to half, which doubles the remaining lamp life"
    ],
    "correct": 1,
    "explanation": "Rated life is a planning tool, not a challenge. Ordering and scheduling the swap before the lamps age out keeps replacements in a maintenance window instead of a dark room mid-presentation. CTS Duty D Task 2."
  },
  {
    "domain": "CTS: AVIXA Standards",
    "cert": "CTS",
    "duty": "D",
    "task": "D2",
    "q": "Maintenance compares current system performance against the measurements recorded at commissioning. Which AVIXA framework supports those recorded baselines?",
    "options": [
      "The AVIXA cable labeling standard, which identifies every measured cable",
      "The AVIXA rack building standard, which sets the measurement conditions",
      "The AVIXA audiovisual systems performance verification standard, which defines how performance is measured and documented",
      "The AVIXA control system programming guideline, which stores the measurements in the processor"
    ],
    "correct": 2,
    "explanation": "Performance verification is not a one-time event; it creates the documented baseline that all future maintenance is judged against. Without measured, recorded targets from commissioning, 'it doesn't sound like it used to' is just an opinion. CTS Duty D Task 2."
  },
  {
    "domain": "CTS: Troubleshooting & Verification",
    "cert": "CTS",
    "duty": "D",
    "task": "D3",
    "q": "An audio channel cuts in and out whenever the rack door is opened or closed. What is the most likely cause and the first check?",
    "options": [
      "An intermittent connector disturbed by the door movement; reseat and inspect each connector in that channel's path",
      "A failing amplifier channel; replace the amplifier before the fault becomes permanent",
      "Corrupted DSP programming; reload the program file to the processor",
      "A ground loop that only appears when the door changes the rack's grounding"
    ],
    "correct": 0,
    "explanation": "Faults that follow physical movement are mechanical: a connector backing out, a cold solder joint, a cable stressed by the door swing. Reseat and inspect before replacing anything; the fault is telling you exactly where to look. CTS Duty D Task 3."
  },
  {
    "domain": "CTS: Troubleshooting & Verification",
    "cert": "CTS",
    "duty": "D",
    "task": "D3",
    "q": "A system with analog microphones, a digital DSP, and Dante outputs has distortion on every output. What does 'every output' tell you about where to look?",
    "options": [
      "The fault must be in the Dante network, since digital faults affect everything downstream",
      "The fault is upstream of the split point: the analog front end or the DSP input stage, not any single output path",
      "Every output device has failed simultaneously and all must be replaced",
      "The fault is in the loudspeakers, since they are the only common element"
    ],
    "correct": 1,
    "explanation": "Symptoms shared by all outputs point upstream of where the signal divides. Half-splitting from that insight, you test the common path first instead of chasing each output. One test at the split eliminates half the system. CTS Duty D Task 3."
  },
  {
    "domain": "CTS: Troubleshooting & Verification",
    "cert": "CTS",
    "duty": "D",
    "task": "D3",
    "q": "A two-month-old amplifier fails under warranty. Why should the technician process an RMA swap instead of opening the unit for component-level repair?",
    "options": [
      "Component-level repair is illegal on commercial AV equipment",
      "RMA swaps are always faster than any in-house repair regardless of the fault",
      "Opening the unit voids the warranty, and the manufacturer owes a working unit",
      "Amplifiers contain no user-serviceable parts of any kind"
    ],
    "correct": 2,
    "explanation": "Warranty is a financial instrument: the manufacturer owns the failure. Opening the chassis trades a free factory repair for a voided warranty and a parts bill. Document, swap, and ship it back; repair what you own, RMA what is covered. CTS Duty D Task 3."
  },
  {
    "domain": "CTS: Troubleshooting & Verification",
    "cert": "CTS",
    "duty": "D",
    "task": "D3",
    "q": "An amplifier runs for about 30 minutes, shuts down, and works again once it cools. What is the most likely cause?",
    "options": [
      "A blown output transistor, which fails only when the program material is loud",
      "Corrupted firmware in the amplifier's control section causing a timed shutdown",
      "An underrated circuit breaker that trips thermally and resets when cool",
      "Thermal protection engaging: check fan operation, ventilation clearance, and load impedance"
    ],
    "correct": 3,
    "explanation": "The cool-down-and-recover cycle is the signature of thermal protection doing its job. The fault is not the protection circuit but whatever is overheating the amp: blocked vents, dead fans, or a load impedance lower than rated. CTS Duty D Task 3."
  },
  {
    "domain": "CTS: Troubleshooting & Verification",
    "cert": "CTS",
    "duty": "D",
    "task": "D3",
    "q": "After a building power outage, a DSP boots with scrambled routing although the program file on the laptop is intact. What is the fix?",
    "options": [
      "Reload the known-good program and configuration backup to the DSP, then verify operation",
      "Replace the DSP; scrambled routing after an outage means the processor is damaged",
      "Leave it; DSPs rebuild their routing automatically within 24 hours of an outage",
      "Rewire the rack to match the scrambled routing, since the DSP knows best"
    ],
    "correct": 0,
    "explanation": "Power events can corrupt a running configuration without harming the hardware. The configuration backup exists for exactly this: reload, verify every route, and get the room back. Then add the DSP to a UPS so the next outage is a non-event. CTS Duty D Task 3."
  },
  {
    "domain": "CTS: Troubleshooting & Verification",
    "cert": "CTS",
    "duty": "D",
    "task": "D3",
    "q": "A 150-foot installed cable run in conduit is suspected of causing intermittent video dropouts. What is the fastest way to confirm the cable is the fault?",
    "options": [
      "Pull the cable out of the conduit for a visual inspection of the full length",
      "Temporarily run a known-good cable alongside it; if the fault clears, the installed run is bad",
      "Increase the source output level to overcome whatever the cable is doing",
      "Replace every connector on the installed run and see if the problem stops"
    ],
    "correct": 1,
    "explanation": "Substitution is the fastest proof in troubleshooting: bypass the suspect with a known-good path and watch the symptom. One test gives a definitive answer, while re-terminating or repulling first is labor spent on a guess. CTS Duty D Task 3."
  },
  {
    "domain": "CTS: Troubleshooting & Verification",
    "cert": "CTS",
    "duty": "D",
    "task": "D3",
    "q": "A ten-year-old powered speaker hums loudly with no input connected and the gain down. What is the most likely internal cause?",
    "options": [
      "A worn-out woofer voice coil rubbing from a decade of use",
      "Dust in the amplifier heat sink causing the fan to vibrate",
      "Dried-out power supply filter capacitors letting mains ripple into the audio path",
      "A corrupted DSP preset boosting the 60 Hz band"
    ],
    "correct": 2,
    "explanation": "Electrolytic capacitors age out, and when the power supply filters dry up, mains ripple rides straight into the audio as hum. No input needed, gain irrelevant: the symptom is textbook. On decade-old gear, the power supply is always a suspect. CTS Duty D Task 3."
  },
  {
    "domain": "CTS: Troubleshooting & Verification",
    "cert": "CTS",
    "duty": "D",
    "task": "D3",
    "q": "After completing a break/fix repair, what must the service report include?",
    "options": [
      "Only the total time spent, so the invoice can be generated",
      "The technician's opinion of the client's equipment choices",
      "A recommendation to replace the entire system regardless of the repair outcome",
      "The reported symptoms, the root cause found, parts replaced, and the tests confirming the fix"
    ],
    "correct": 3,
    "explanation": "A repair without documentation is a rumor. Symptoms, root cause, parts, and verification tests give the next tech the full story and prove to the client that the fix was real, not a reboot and a hope. CTS Duty D Task 3."
  },
  {
    "domain": "CTS-D: Needs Assessment",
    "cert": "CTS-D",
    "duty": "A",
    "task": "A3",
    "q": "A design project kicks off and the client asks for an equipment list in week one. What is the designer's correct response regarding the program report?",
    "options": [
      "Provide the equipment list immediately to keep the project momentum going",
      "Explain that the program report comes first: it documents agreed needs, requirements, and decisions before any equipment is selected",
      "Send a preferred-brand list with a note that it may change later",
      "Skip the report to save design fee and move straight to drawings"
    ],
    "correct": 1,
    "explanation": "CTS-D Duty A Task 3: the program report is the written record of the needs analysis, capturing functional requirements, stakeholder decisions, and budget alignment. Equipment selected without it is designed to assumptions. The report is the baseline every later design phase references."
  },
  {
    "domain": "CTS-D: Needs Assessment",
    "cert": "CTS-D",
    "duty": "A",
    "task": "A3",
    "q": "A completed program report for a training center includes user stories like \"As an instructor, I need to start a recorded session from the lectern in under 30 seconds.\" Why are user stories valuable in the report?",
    "options": [
      "They specify which control system brand to purchase",
      "They describe successful outcomes from the user's perspective without locking in technology",
      "They replace the project budget as the cost control document",
      "They satisfy the building code documentation requirement"
    ],
    "correct": 1,
    "explanation": "CTS-D Duty A Task 3: user stories capture what success feels like in plain language, so the design can be validated against real use rather than equipment lists. They keep the report technology-neutral while making requirements testable at commissioning."
  },
  {
    "domain": "CTS-D: Needs Assessment",
    "cert": "CTS-D",
    "duty": "A",
    "task": "A3",
    "q": "During needs analysis the designer tours two similar facilities with the client and documents what worked and what failed. What does this benchmarking contribute to the program report?",
    "options": [
      "It lets the designer copy the other facility's drawings directly",
      "It grounds expectations in real-world reference points the client has personally seen",
      "It replaces the need for stakeholder interviews",
      "It sets the AV equipment budget by industry regulation"
    ],
    "correct": 1,
    "explanation": "CTS-D Duty A Task 3: benchmarking turns abstract requirements into shared reference experiences. The report can cite \"like the boardroom at Site X, but with better speech intelligibility,\" which aligns the client and the design team on a concrete, observable target."
  },
  {
    "domain": "CTS-D: Needs Assessment",
    "cert": "CTS-D",
    "duty": "A",
    "task": "A3",
    "q": "Why should the client formally approve the program report before conceptual design begins?",
    "options": [
      "Approval is a legal formality with no real project impact",
      "The approved report locks agreed scope, budget expectations, and success criteria, protecting both parties when scope pressure appears later",
      "It transfers all design liability to the client",
      "It is required before any building permits can be filed"
    ],
    "correct": 1,
    "explanation": "CTS-D Duty A Task 3: the program report is the baseline everything else is measured against. Without written sign-off, \"we thought it included that\" disputes surface at the worst moment. Approved reports convert conversations into commitments the designer can design to."
  },
  {
    "domain": "CTS-D: Needs Assessment",
    "cert": "CTS-D",
    "duty": "A",
    "task": "A1",
    "q": "Which of the following is a functional requirement rather than a technical specification?",
    "options": [
      "Provide a 98-inch 4K display with 800 nits brightness",
      "The room must support hybrid meetings with remote participants able to see content and hear every seated speaker",
      "Install a 12x10 matrix switcher in the equipment rack",
      "Use Dante for all audio transport in the facility"
    ],
    "correct": 1,
    "explanation": "CTS-D Duty A Task 1: functional requirements describe what the system must do, not what it is made of. Technology-neutral requirements let the designer evaluate multiple solutions and keep the design valid as products evolve."
  },
  {
    "domain": "CTS-D: Needs Assessment",
    "cert": "CTS-D",
    "duty": "A",
    "task": "A1",
    "q": "The dean wants lecture capture in every classroom; the IT director says the network cannot support it and wants to defer. Both are key stakeholders. What is the designer's responsibility at the functional requirements stage?",
    "options": [
      "Side with IT, since network limits are absolute",
      "Record both positions, quantify the implications of each, and get a documented decision before design proceeds",
      "Design for the dean's request and let IT adapt afterward",
      "Split the difference quietly without documenting anything"
    ],
    "correct": 1,
    "explanation": "CTS-D Duty A Task 1: the designer does not pick winners between stakeholders. Surfacing the conflict with honest implications (cost, capability, risk) and capturing the decision in the requirements prevents the losing side from reopening the fight during construction."
  },
  {
    "domain": "CTS-D: Needs Assessment",
    "cert": "CTS-D",
    "duty": "A",
    "task": "A1",
    "q": "A museum wants an interactive gallery, but the curators cannot articulate what visitors should experience. Which needs-analysis technique best helps them express requirements?",
    "options": [
      "Present a finished equipment list for approval",
      "Facilitate a workshop with user stories and reference examples, then draft scenarios for the curators to react to",
      "Ask for the budget and design to the number",
      "Proceed with standard gallery templates and adjust later"
    ],
    "correct": 1,
    "explanation": "CTS-D Duty A Task 1: stakeholders rarely speak in requirements; they react to concrete scenarios. Workshops that produce user stories (\"a school group of 30 gathers around the map table...\") turn vague desires into requirements the designer can actually design against."
  },
  {
    "domain": "CTS-D: Needs Assessment",
    "cert": "CTS-D",
    "duty": "A",
    "task": "A2",
    "q": "A university publishes a five-year AV technology master plan. What is its primary purpose?",
    "options": [
      "To list every piece of AV equipment currently on campus",
      "To define standards, refresh cycles, and a phased roadmap so individual projects align with institutional direction",
      "To satisfy an accreditation documentation requirement",
      "To lock the institution into a single vendor permanently"
    ],
    "correct": 1,
    "explanation": "CTS-D Duty A Task 2: a technology master plan is a long-range strategy document. It sets standards, budgets refresh waves, and gives each project a frame so rooms built in year one still integrate with the platform in year five."
  },
  {
    "domain": "CTS-D: Needs Assessment",
    "cert": "CTS-D",
    "duty": "A",
    "task": "A2",
    "q": "A campus master plan standardizes on one control platform and one soft codec. How does this constrain an individual classroom design?",
    "options": [
      "It has no effect on individual design choices",
      "The designer must select products within the standards and ensure the design integrates with the existing monitoring and support model",
      "It forces selection of the lowest-cost option in every category",
      "It bans all third-party peripherals from the design"
    ],
    "correct": 1,
    "explanation": "CTS-D Duty A Task 2: standards exist so support teams can actually support the fleet. The designer's job is to deliver the best room possible inside the standard, documenting any justified exception rather than freelancing around the plan."
  },
  {
    "domain": "CTS-D: Needs Assessment",
    "cert": "CTS-D",
    "duty": "A",
    "task": "A2",
    "q": "A corporate client's master plan calls for a three-year refresh of all huddle rooms. During a year-one design, what refresh-related provision belongs in the project?",
    "options": [
      "None; refresh is a future problem for a future designer",
      "Design for replaceability: standard rack layouts, documented as-builts, and conduit and cabling with headroom so year-three swaps do not require demolition",
      "Specify the cheapest gear available since it will be replaced anyway",
      "Promise the client the installed gear will last six years"
    ],
    "correct": 1,
    "explanation": "CTS-D Duty A Task 2: master plans make refresh predictable, so the designer builds for it. Replaceable, documented, standards-based installs cut the cost of the next cycle. Designing as if the room will never change is how institutions end up ripping out ceilings."
  },
  {
    "domain": "CTS-D: Design Documentation",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C2",
    "q": "The architectural reflected ceiling plan shows a supply diffuser exactly where the concept placed the center ceiling speaker. What is the correct design action?",
    "options": [
      "Install the speaker anyway and have the mechanical contractor shift the diffuser",
      "Revise the layout to relocate the speaker, recheck coverage, and coordinate the change with the A&E team on the drawings",
      "Delete the speaker and hope coverage still holds",
      "Leave both as drawn and let the field crew sort it out"
    ],
    "correct": 1,
    "explanation": "CTS-D Duty C Task 2: revising the conceptual design to site and A&E conditions is a core design task. Clashes found on paper cost a redraw; clashes found in the ceiling cost a change order. Move the speaker, verify coverage still meets the design criteria, and document the revision."
  },
  {
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C2",
    "q": "The concept called for a projector with a 1.5:1 to 2.5:1 zoom lens in a 24-foot-deep room, screen on the front wall. The site survey shows the actual mount position is only 14 feet from the screen. What must the designer do?",
    "options": [
      "Keep the lens and accept a smaller image than planned",
      "Recalculate: at 14 feet a 1.5:1 minimum throw yields an image no wider than about 9.3 feet, so revise the concept (shorter-throw lens, different screen size, or repositioned mount) and update the drawings",
      "Mount the projector 10 feet behind the rear wall to recover the throw distance",
      "Ignore the survey and build to the concept dimensions"
    ],
    "correct": 1,
    "explanation": "CTS-D Duty C Task 2: field conditions override concept assumptions. Throw ratio times throw distance sets the image width, so the designer reruns the math against real dimensions and revises the design on paper before anything is purchased or installed."
  },
  {
    "domain": "CTS-D: Design Calculations",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C2",
    "q": "The concept specified an 8,000-lumen projector based on 200 lux ambient at the screen, a 2 m2 screen, 15:1 contrast for presentations, screen gain 1, and 0.75 derating. The A&E package adds a glass wall and the measured ambient is now 500 lux. What does the recalculation show?",
    "options": [
      "About 20,000 lumens are now required, so the concept must be revised: brighter projector, smaller screen, higher gain, or window treatments coordinated with the architect",
      "About 8,000 lumens still suffice, since derating covers ambient changes",
      "Ambient light does not affect required projector lumens",
      "Reduce the contrast target to 7:1 and keep the original projector"
    ],
    "correct": 0,
    "explanation": "CTS-D Duty C Task 2: rerun the design math against real site conditions. 500 x 15 x 2 / (1 x 0.75) = 20,000 lumens. The concept's projector is now undersized by more than half, so the designer revises on paper and coordinates shading or screen changes with the A&E team."
  },
  {
    "domain": "CTS-D: Design Documentation",
    "cert": "CTS-D",
    "duty": "C",
    "task": "C2",
    "q": "The concept placed in-wall speakers in a demising wall, but the structural drawings show it is a shear wall that cannot be cut. What is the correct revision?",
    "options": [
      "Cut the wall anyway; AV takes priority once drywall is up",
      "Redesign with on-wall or ceiling speakers, recheck coverage and sightlines, and document the revision against the structural package",
      "Ask the installer to decide in the field",
      "Leave the concept unchanged and note it as a field issue"
    ],
    "correct": 1,
    "explanation": "CTS-D Duty C Task 2: structural constraints are non-negotiable. The designer revises the concept to a buildable solution, verifies performance still meets the criteria, and records the change so the design package reflects reality instead of wishes."
  },
  {
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B7",
    "q": "A museum gallery design includes light-sensitive artifacts. Why must the AV designer coordinate with the exhibit designer, a specialty professional, rather than just the architect?",
    "options": [
      "The architect handles all lighting decisions on museum projects",
      "Exhibit designers set conservation light levels (lux limits, UV and IR restrictions) and artifact placement that directly constrain display brightness, projector use, and interactive placement",
      "Museums have no special requirements beyond standard galleries",
      "Coordination with specialty professionals is the general contractor's job"
    ],
    "correct": 1,
    "explanation": "CTS-D Duty B Task 7: specialty professionals own domains the general design team does not. Exhibit designers define what the artifacts can tolerate; the AV design must live inside those limits. Missing this coordination risks damaging the collection or a redesign after opening."
  },
  {
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B7",
    "q": "A performing arts venue design must interface with the theatrical consultant's systems. What AV design coordination is typically required?",
    "options": [
      "None; theatrical systems are entirely separate from AV",
      "Coordinate fly and loft space, performance lighting control interfaces, production intercom, and show-control triggers so AV and theatrical systems share infrastructure without conflict",
      "Let the theatrical consultant design the AV systems",
      "Coordinate only the lobby displays and nothing else"
    ],
    "correct": 1,
    "explanation": "CTS-D Duty B Task 7: theatrical consultants own rigging, performance lighting, and show control. The AV designer coordinates shared pathways, control interfaces, and scheduling of the fly space so a concert and a corporate event can both use the venue without rework."
  },
  {
    "domain": "CTS-I: Pre-Installation Activities",
    "cert": "CTS-I",
    "duty": "A",
    "task": "A2",
    "q": "Before mobilizing, the lead installer walks the site and finds the actual ceiling height is 10 feet, not the 12 feet on the drawings. Why does this matter for the install?",
    "options": [
      "It does not; speakers mount the same at any height",
      "Coverage calculations, projector throw, screen viewing angles, and mount hardware all depend on real dimensions, so the installer documents the discrepancy and escalates before mounting",
      "The installer can compensate by eyeballing the difference",
      "Only the designer cares about drawing accuracy"
    ],
    "correct": 1,
    "explanation": "CTS-I Duty A Task 2: the site survey verifies reality against the design documents. A two-foot ceiling difference changes speaker coverage circles, throw distances, and rigging hardware. Catching it at survey time is a phone call; catching it after mounts are drilled is a rework bill."
  },
  {
    "domain": "CTS-I: Pre-Installation Activities",
    "cert": "CTS-I",
    "duty": "A",
    "task": "A2",
    "q": "During the site survey, what should the installer verify about electrical power for the AV racks?",
    "options": [
      "That outlets exist somewhere in the room",
      "Circuit count, amperage, dedicated versus shared circuits, grounding, and whether the circuits are actually live, documented and matched to the design's power requirements",
      "Nothing; the electrician handles everything related to power",
      "That power is adequate, which it always is in commercial buildings"
    ],
    "correct": 1,
    "explanation": "CTS-I Duty A Task 2: AV racks with amplifiers and displays draw real current with real grounding needs. The survey confirms the design's power assumptions: enough dedicated circuits, correct voltage, proper grounding, and live power before equipment arrives. Discovering a single shared 15A circuit on install day stalls the whole job."
  },
  {
    "domain": "CTS-I: Pre-Installation Activities",
    "cert": "CTS-I",
    "duty": "A",
    "task": "A3",
    "q": "The GC says the space is \"ready,\" but the network switches are not installed, HVAC is not running, and there is no secure storage. What is the correct installer response?",
    "options": [
      "Start pulling cable anyway to stay on schedule",
      "Perform a readiness assessment, document the missing items in writing to the GC and PM, and agree on a revised mobilization plan rather than working in an unready space",
      "Bring the racks and store them in the hallway",
      "Skip the assessment and trust the GC's word"
    ],
    "correct": 1,
    "explanation": "CTS-I Duty A Task 3: facility readiness is a gate, not a wish. Installing into a space without network, climate control, or secure storage risks equipment damage, theft, and rework. The professional move is written documentation of what is missing and a plan, which also protects the schedule claim later."
  },
  {
    "domain": "CTS-I: Jobsite Operations & Safety",
    "cert": "CTS-I",
    "duty": "B",
    "task": "B2",
    "q": "The electrician is about to pull line voltage for the projector outlet. What coordination does the installer owe the electrician?",
    "options": [
      "None; trades work independently on a jobsite",
      "Confirm the outlet location matches the design, verify the circuit is dedicated as specified, and agree on who provides and labels the disconnect, before the wire is pulled",
      "Tell the electrician the location verbally and check back later",
      "Wait until trim-out to verify anything electrical"
    ],
    "correct": 1,
    "explanation": "CTS-I Duty B Task 2: allied trade coordination happens before the work, not after. A five-minute confirmation of location, circuiting, and labeling responsibility prevents the classic failure of a projector outlet on a switched lighting circuit discovered at commissioning."
  },
  {
    "domain": "CTS-I: Jobsite Operations & Safety",
    "cert": "CTS-I",
    "duty": "B",
    "task": "B2",
    "q": "Drywallers are scheduled to close the ceiling in three days. The speaker rough-in brackets are not installed yet. What should the installer do?",
    "options": [
      "Let the ceiling close and cut the speakers in afterward",
      "Coordinate immediately with the GC to sequence the rough-in before close, or formally request a hold on the ceiling in the affected area",
      "Install the brackets after drywall using toggle bolts",
      "Accept the delay and blame the schedule"
    ],
    "correct": 1,
    "explanation": "CTS-I Duty B Task 2: sequencing with allied trades is the installer's job to manage. Rough-in before ceiling close is a one-time window; missing it means destructive rework. Escalate through the GC now, in writing, with the specific area and the date needed."
  },
  {
    "domain": "CTS-I: Jobsite Operations & Safety",
    "cert": "CTS-I",
    "duty": "B",
    "task": "B2",
    "q": "The HVAC contractor's diffusers sit directly above the planned microphone positions in a conference room. Why does the installer need to coordinate this with the GC?",
    "options": [
      "Diffusers do not affect microphone performance",
      "HVAC noise at the mic position raises the noise floor and kills intelligibility, so the installer flags it for diffuser relocation or mic repositioning before ceiling close",
      "The AV system can filter out any amount of air noise",
      "Only the mechanical engineer needs to know about diffuser placement"
    ],
    "correct": 1,
    "explanation": "CTS-I Duty B Task 2: air noise is the enemy of open microphones, and no DSP fully rescues a mic sitting in a diffuser's airstream. This is a coordination issue resolved on the ceiling plan with the GC and the mechanical trade, not a problem to discover at the first noisy meeting."
  },
  {
    "domain": "CTS-I: Jobsite Operations & Safety",
    "cert": "CTS-I",
    "duty": "B",
    "task": "B3",
    "q": "A beam blocks the designed cable pathway, and the only alternate route adds 60 feet to a Cat6A run that stays under the length limit. What is the correct process?",
    "options": [
      "Reroute and note it on the as-builts, since the design intent (signal integrity, capacity) is preserved",
      "Reroute without telling anyone to keep the job moving",
      "Stop work for a week until the designer redraws the pathway",
      "Abandon the run and drop that device from the system"
    ],
    "correct": 0,
    "explanation": "CTS-I Duty B Task 3: field modifications that preserve design intent and stay within engineering limits are normal installer judgment, but they must be documented on the as-builts immediately. The line is crossed when the change affects performance, capacity, or cost, which then needs PM and designer approval."
  },
  {
    "domain": "CTS-I: Jobsite Operations & Safety",
    "cert": "CTS-I",
    "duty": "B",
    "task": "B3",
    "q": "A field condition forces the installer to substitute a different projector mount than specified. What documentation is required?",
    "options": [
      "None, as long as it holds the projector securely",
      "Record the substitution on the as-built drawings and in the project records with the reason, so service and warranty know what is actually installed",
      "Mention it verbally at closeout and move on",
      "Only the purchase receipt needs to be kept"
    ],
    "correct": 1,
    "explanation": "CTS-I Duty B Task 3: every field modification becomes part of the permanent record. The next technician, the warranty claim, and the service contract all depend on the as-builts reflecting reality. \"It works\" is not documentation."
  },
  {
    "domain": "CTS-I: Jobsite Operations & Safety",
    "cert": "CTS-I",
    "duty": "B",
    "task": "B3",
    "q": "The only way to route cable to the lectern is across a fire-rated wall, and the design shows no rated penetration there. What must the installer do?",
    "options": [
      "Drill through and seal it with any caulk on the truck",
      "Stop, because penetrating a fire-rated assembly without the specified firestop system violates code and the design, and escalate to the PM and GC for a code-compliant path",
      "Run the cable over the top of the wall",
      "Get verbal approval from the client and proceed"
    ],
    "correct": 1,
    "explanation": "CTS-I Duty B Task 3: field modifications never override life safety or code. An unlisted penetration in a rated wall is a code violation and a liability. The installer stops and escalates so the design team and GC can provide a compliant route with the proper firestop assembly."
  },
  {
    "domain": "CTS-I: Closeout & Training",
    "cert": "CTS-I",
    "duty": "E",
    "task": "E2",
    "q": "The same system will be used by executives (who just need to start a meeting) and by in-house techs (who will troubleshoot it). How should training be structured?",
    "options": [
      "One identical session for everyone in the room",
      "Separate sessions matched to each audience: task-focused operation for end users, and system architecture, admin access, and troubleshooting for tech staff",
      "Train only the techs; executives can figure it out",
      "Hand over the manual instead of conducting training"
    ],
    "correct": 1,
    "explanation": "CTS-I Duty E Task 2: training must match the audience's role. Executives need confidence in three buttons; tech staff need to know signal flow, where the backups live, and what to check first. One generic session serves neither and guarantees support calls."
  },
  {
    "domain": "CTS-I: Closeout & Training",
    "cert": "CTS-I",
    "duty": "E",
    "task": "E2",
    "q": "At the end of a training session, what best confirms the training was effective?",
    "options": [
      "Every attendee signs the attendance sheet",
      "Each operator performs the key workflows hands-on (start a meeting, share content, shut down) while the trainer observes, and gaps are retaught before sign-off",
      "The trainer asks if there are any questions and hears none",
      "The session lasted the full scheduled hour"
    ],
    "correct": 1,
    "explanation": "CTS-I Duty E Task 2: attendance is not competence. Having users demonstrate the workflows proves they can operate the system when the trainer is gone, and it surfaces the confusing steps while there is still time to fix the training or simplify the interface."
  },
  {
    "domain": "CTS-I: Closeout & Training",
    "cert": "CTS-I",
    "duty": "F",
    "task": "F1",
    "q": "What belongs in a preventive maintenance visit for a typical conference room AV system?",
    "options": [
      "Only dusting the equipment rack",
      "Inspecting and cleaning filters and vents, checking lamp and laser hours against replacement thresholds, verifying control system operation, testing backup batteries, and confirming firmware is at the approved revision",
      "Replacing all cables as a precaution",
      "Repainting the room to refresh the space"
    ],
    "correct": 1,
    "explanation": "CTS-I Duty F Task 1: maintenance is scheduled prevention, not repair. Filters, hours, batteries, and firmware are the predictable failure points. A checklist-driven visit catches them before they become a dead room on a Monday morning."
  },
  {
    "domain": "CTS-I: Closeout & Training",
    "cert": "CTS-I",
    "duty": "F",
    "task": "F1",
    "q": "During a maintenance visit the technician finds a projector at 3,800 hours on a lamp rated for 4,000. What is the correct action?",
    "options": [
      "Leave it alone; it still works",
      "Flag it in the maintenance report and recommend scheduled replacement before failure, since lamps dim gradually and fail unpredictably near end of life",
      "Replace it immediately without telling the client",
      "Reset the hour counter to buy more time"
    ],
    "correct": 1,
    "explanation": "CTS-I Duty F Task 1: maintenance is about managing the failure curve, not reacting to it. Documenting the hours and recommending a planned swap during a maintenance window beats an emergency call when the lamp pops mid-presentation. Never reset a counter without replacing the lamp."
  },
  {
    "domain": "CTS-I: Closeout & Training",
    "cert": "CTS-I",
    "duty": "F",
    "task": "F1",
    "q": "A client asks the maintenance tech to update all device firmware to the latest release during a routine visit. What is the prudent response?",
    "options": [
      "Update everything; the newest release is always the best",
      "Verify the new firmware against the system's tested configuration, back up current configs first, and update only if the release is validated for the installed versions, since untested firmware can break control integrations",
      "Refuse all firmware updates permanently",
      "Update only the displays and leave everything else"
    ],
    "correct": 1,
    "explanation": "CTS-I Duty F Task 1: AV systems are integrated systems, and firmware is a change to the system. The maintenance discipline is backup, validate compatibility (especially control system and DSP), then update in a controlled way. \"Latest\" without validation is how working rooms break on a Tuesday."
  },
  {
    "domain": "CTS-I: Closeout & Training",
    "cert": "CTS-I",
    "duty": "F",
    "task": "F2",
    "q": "A six-month-old display has a failed power supply. Before processing a warranty claim, what must the technician establish?",
    "options": [
      "Nothing; just ship the unit back",
      "Determine the failure cause: a manufacturing defect is a warranty claim, but damage from a power surge, improper ventilation, or misuse is not, and the distinction must be documented",
      "Always blame the manufacturer to protect the client",
      "Replace it with a different brand immediately"
    ],
    "correct": 1,
    "explanation": "CTS-I Duty F Task 2: warranty covers defects, not damage or neglect. The technician's diagnosis determines whether the manufacturer pays or the client does. Documenting cause protects the integrator from eating costs that are not theirs and keeps the manufacturer relationship honest."
  },
  {
    "domain": "CTS-I: Closeout & Training",
    "cert": "CTS-I",
    "duty": "F",
    "task": "F2",
    "q": "A DSP fails under warranty and the room is needed for an executive briefing tomorrow. What is the best repair strategy?",
    "options": [
      "Wait for the standard RMA turnaround and apologize for the downtime",
      "Request advance replacement from the manufacturer (cross-ship) so the room is restored immediately, and return the failed unit per the RMA process",
      "Buy a different DSP locally and bill it as warranty",
      "Tell the client to reschedule the briefing"
    ],
    "correct": 1,
    "explanation": "CTS-I Duty F Task 2: repair is also logistics. Advance replacement gets the client operational while the RMA runs its course. The technician manages both tracks: restore service now, and complete the warranty paperwork correctly so the replacement is not billed."
  },
  {
    "domain": "CTS-I: Closeout & Training",
    "cert": "CTS-I",
    "duty": "F",
    "task": "F2",
    "q": "A control processor intermittently locks up. What documentation should the technician gather before calling manufacturer support?",
    "options": [
      "None; a verbal description is enough",
      "Firmware versions, a log of when the failures occur and what was running, steps already tried, network conditions, and the as-built config, because support can only help with facts",
      "Only the purchase receipt",
      "Only the client's phone number"
    ],
    "correct": 1,
    "explanation": "CTS-I Duty F Task 2: effective repair starts with evidence. Support engineers diagnose from data: versions, logs, and reproducible conditions. A technician who arrives with documented facts gets a useful answer; one who arrives with \"it sometimes freezes\" gets a callback queue."
  },
  {
    "domain": "CTS-I: Testing & Calibration",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D9",
    "q": "When commissioning the audio system, the technician plays pink noise and adjusts the DSP's parametric EQ using a real-time analyzer. What is the goal of this calibration?",
    "options": [
      "To make the system as loud as possible",
      "To achieve smooth, even frequency response at the listening positions, correcting for room modes and speaker anomalies within the limits of EQ",
      "To match the client's favorite music",
      "To maximize bass output for impact"
    ],
    "correct": 1,
    "explanation": "CTS-I Duty D Task 9: calibration tunes the system to the room. Pink noise plus RTA shows what the room and speakers actually produce; careful EQ flattens the response so speech is intelligible and program material sounds correct. EQ cannot fix bad acoustics, but it corrects what electronics can correct."
  },
  {
    "domain": "CTS-I: Testing & Calibration",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D9",
    "q": "An automixer in a boardroom feeds back when all microphones are open. What calibration step addresses gain-before-feedback?",
    "options": [
      "Turn everything down until the feedback stops",
      "Set individual channel gains for equal loudness, then set the automixer's NOM (number of open mics) and last-mic behavior correctly, verifying stable gain with all mics open at operating level",
      "Add more microphones to spread the load",
      "Disable the automixer and leave all mics open"
    ],
    "correct": 1,
    "explanation": "CTS-I Duty D Task 9: calibrating an automixer means setting gain structure so the system is stable with every mic open. Proper per-channel gain plus correct NOM attenuation gives the needed gain-before-feedback margin. Just turning it down trades the symptom for a system nobody can hear."
  },
  {
    "domain": "CTS-I: Testing & Calibration",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D9",
    "q": "After installing a projector, the technician displays test patterns and measures the projected image. What is being verified beyond \"it looks bright\"?",
    "options": [
      "Nothing else matters once the image looks good",
      "Focus uniformity, geometry, and that measured contrast and light output meet the design intent for the room's ambient conditions",
      "The brand of the projection screen",
      "That the remote control works from the back of the room"
    ],
    "correct": 1,
    "explanation": "CTS-I Duty D Task 9: calibration verifies performance against the design criteria, not just a pleasing picture. Test patterns reveal focus, convergence, and geometry issues invisible in content, and measurements confirm the brightness and contrast the designer specified for that room's light levels."
  },
  {
    "domain": "CTS-I: Testing & Calibration",
    "cert": "CTS-I",
    "duty": "D",
    "task": "D9",
    "q": "For a paging system in a transit facility, the specification requires 0.50 STI (Speech Transmission Index) minimum. What does calibration involve?",
    "options": [
      "Setting all speakers to maximum volume",
      "Measuring STI at representative listener positions and adjusting levels, EQ, and zoning until intelligibility meets the specified minimum everywhere it is required",
      "Asking staff whether announcements sound clear",
      "Measuring once at the equipment rack"
    ],
    "correct": 1,
    "explanation": "CTS-I Duty D Task 9: intelligibility is a measured quantity, not an opinion. STI measurements at real listener positions prove the system meets the performance the design promised, and adjustments to level, EQ, and zoning are what move the number."
  },
  {
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B1",
    "q": "The architect issues a revised reflected ceiling plan that moves recessed light fixtures into the ceiling zones you reserved for loudspeakers and cameras. What is the correct coordination step?",
    "options": [
      "Redraw your AV device locations on site during installation and hope nothing else moved on the revised plan",
      "Issue an updated AV ceiling plan overlay, flag the clashes in writing, and resolve them in the next coordination meeting before rough-in",
      "Delete the loudspeakers from the design, since lighting positions always take priority over AV device locations",
      "Wait until commissioning to address the clash, since final ceiling device positions are settled at the end of the project"
    ],
    "correct": 1,
    "explanation": "CTS-D Duty B Task 1: the RCP is a living coordination document, and every revision can create new clashes. The designer keeps a current AV ceiling plan, issues it as an overlay against each RCP revision, and resolves conflicts on paper in coordination meetings. Discovering a clash after rough-in means cutting open a finished ceiling."
  },
  {
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B1",
    "q": "The millwork detail shows your in-wall loudspeakers concealed behind solid laminate panels in a wood feature wall. What do you coordinate with the millworker and interior designer?",
    "options": [
      "Nothing, since solid laminate is acoustically transparent and speakers perform as designed behind any panel",
      "Specify larger amplifiers to push the sound through the solid laminate panels",
      "Require acoustically transparent grille fabric over the speaker openings, with finish samples reviewed before fabrication",
      "Move the speakers to the floor in front of the wall, since concealed speakers can never be coordinated with millwork"
    ],
    "correct": 2,
    "explanation": "CTS-D Duty B Task 1: finish materials chosen for looks can destroy speaker performance. Solid laminate over a driver kills high frequencies. The designer coordinates acoustically transparent grille cloth with the millworker, gets finish samples approved before fabrication, and documents the requirement so the shop does not substitute a solid panel."
  },
  {
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B1",
    "q": "The architect's interior elevation shows a decorative soffit dropping 18 inches across the front of the room, directly in the projector's throw path to the screen. What is your coordination responsibility?",
    "options": [
      "Provide a throw and sightline analysis showing the conflict, and coordinate a soffit height or projector position change before construction",
      "Accept the soffit as drawn, since projection brightness can simply be increased to compensate for a partially blocked throw path",
      "Lower the screen until it clears the soffit, even if the back rows can no longer see over the front rows",
      "Relocate the projector to the side wall, since off-axis projection never affects image geometry"
    ],
    "correct": 0,
    "explanation": "CTS-D Duty B Task 1: architectural features and AV sightlines share the same three-dimensional space. The designer produces the throw and sightline analysis that proves the conflict, then works with the architect on a fix (raise the soffit, move the projector, rethink the screen) while changes are still lines on a drawing."
  },
  {
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B2",
    "q": "In a renovation, the client says you can hang the new flown loudspeakers from the existing rigging points left by the previous tenant. What must happen first?",
    "options": [
      "A structural engineer verifies the points: existing points carry no automatic certification, and the building owner must provide load ratings and history before reuse",
      "Reuse them as-is, since any point that held a previous tenant's equipment is proven adequate for the new loudspeakers",
      "Double the number of hang points to add a 2:1 safety factor, which certifies the existing points for the new load",
      "Skip engineering review for loads under 1,000 lbs, since building code exempts lighter AV rigging from structural approval"
    ],
    "correct": 0,
    "explanation": "CTS-D Duty B Task 2: old rigging points are guilty until proven innocent. Ratings, installation method, corrosion, and prior overloads are all unknown. The designer requests the point certifications from the building owner and routes them through a structural engineer. Hanging from unverified steel is how rigging failures happen."
  },
  {
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B2",
    "q": "The project is in a high seismic design category. Your design includes ceiling-suspended loudspeakers and 7-foot equipment racks. What do you coordinate with the structural engineer?",
    "options": [
      "Nothing, since seismic bracing applies only to the building structure itself and never to AV equipment",
      "Provide equipment weights, dimensions, and locations so the structural engineer can detail seismic restraint and anchorage per code",
      "Specify heavier racks, since added mass alone satisfies seismic restraint requirements",
      "Restrain only the racks, since suspended loudspeakers are exempt from seismic bracing in all jurisdictions"
    ],
    "correct": 1,
    "explanation": "CTS-D Duty B Task 2: in seismic zones, suspended equipment and tall racks need engineered restraint so they do not become falling hazards. The AV designer's deliverable is accurate weights and locations; the structural engineer owns the bracing details and code compliance. This coordination belongs in the construction documents, not in the field."
  },
  {
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B3",
    "q": "The architect places the AV rack in a small closet with no dedicated cooling, and the building HVAC shuts down overnight. What do you coordinate with the mechanical engineer?",
    "options": [
      "Nothing, since equipment racks generate negligible heat and an unventilated closet is acceptable for any AV system",
      "Open the closet door during occupied hours, which provides sufficient cooling for rack equipment",
      "Dedicated 24-hour cooling sized to the rack heat load, with supply and exhaust or a split system, and the thermostat located away from equipment exhaust",
      "Specify only fanless equipment for the closet, which eliminates the need for any mechanical coordination"
    ],
    "correct": 2,
    "explanation": "CTS-D Duty B Task 3: a rack closet on building HVAC that shuts down at night will cook equipment during unoccupied hours. The designer gives the mechanical engineer the heat load and requires dedicated 24-hour cooling, with the sensor placed where it reads room air rather than hot exhaust. Thermal shutdowns at 2 AM are a coordination failure, not an equipment failure."
  },
  {
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B3",
    "q": "The local AHJ requires all low-voltage cable above the ceiling to be in conduit; open plenum-rated cable is not permitted in this jurisdiction. What is the key coordination item?",
    "options": [
      "Ignore the AHJ, since national code always permits plenum-rated cable without conduit and the local rule does not apply",
      "Define in the bid documents who furnishes and installs the conduit (typically the electrical contractor per AV drawings), and confirm pathway sizing with the electrical engineer",
      "Run the cable inside the return-air duct itself, which satisfies the conduit requirement without extra material",
      "Switch the entire AV system to wireless, which eliminates the conduit coordination entirely"
    ],
    "correct": 1,
    "explanation": "CTS-D Duty B Task 3: the AHJ has the final word, and conduit means real material and labor that someone must price. The designer confirms the requirement early, sizes the pathways on the AV drawings, and makes sure the bid documents assign furnishing and installation (usually Division 26 electrical) so the conduit is not left out of every bid."
  },
  {
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B3",
    "q": "The client's operations center must keep critical AV running through a utility outage. What do you coordinate with the electrical engineer?",
    "options": [
      "Which AV loads go on UPS and generator power, the required UPS runtime, and the power-up sequencing after transfer",
      "Nothing, since standard building power automatically rides through outages and no AV coordination is needed",
      "Put every AV device on the generator, including non-critical displays, since generator capacity is unlimited",
      "Specify a larger main breaker, which provides outage ride-through for the AV racks"
    ],
    "correct": 0,
    "explanation": "CTS-D Duty B Task 3: emergency power is a shared design problem. The AV designer identifies which loads are truly critical, the runtime the UPS must bridge, and the start-up sequence so everything does not inrush at once on transfer. The electrical engineer sizes the UPS and generator feed from that input. Projectors and control processors need a plan; digital signage usually does not."
  },
  {
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B4",
    "q": "The design puts AV-over-IP video, Dante audio, and control on the client's corporate network. What do you coordinate with the client's network engineer during design?",
    "options": [
      "Nothing, since AV-over-IP devices self-configure on any network and IT involvement is unnecessary",
      "A dedicated AV VLAN with DHCP scope, IGMP snooping and querier for multicast, and QoS or DSCP markings for audio traffic",
      "A single flat network with no VLANs, since segmentation always breaks AV-over-IP device discovery",
      "Static public IP addresses for every AV endpoint, so the devices are reachable from the internet for remote support"
    ],
    "correct": 1,
    "explanation": "CTS-D Duty B Task 4: converged AV lives or dies on network configuration. Multicast video floods a network without IGMP snooping and a querier, and Dante audio needs QoS to survive congestion. The designer coordinates the VLAN, addressing, multicast, and QoS requirements with the network engineer during design, plus who configures and owns the switch."
  },
  {
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B4",
    "q": "The client's InfoSec team sends a security questionnaire asking about default passwords, encryption, firmware updates, and remote access for the AV system. When and how do you handle it?",
    "options": [
      "Ignore it, since AV systems are exempt from corporate IT security policy",
      "File it as a punch-list item to answer after installation, since security questionnaires are handled at project closeout",
      "Complete it during design coordination with IT, selecting devices that support the policy: changed credentials, disabled unused services, and a documented update process",
      "Fill it out using the installer's personal credentials, since shared AV admin accounts satisfy every security policy"
    ],
    "correct": 2,
    "explanation": "CTS-D Duty B Task 4: InfoSec review discovered at commissioning can stall a project for weeks while non-compliant devices are swapped. The designer answers the questionnaire during design, picks devices that meet the client's password, encryption, and update policies, and confirms who owns switch configuration and ongoing patching before anything is purchased."
  },
  {
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B5",
    "q": "The mechanical drawings show a fan-powered VAV box directly above the boardroom table, and the acoustician's NC-30 target governs the room. What do you coordinate?",
    "options": [
      "Request the manufacturer's sound data at the diffusers, and coordinate relocating the unit, adding duct lining, or selecting a quieter unit so the room can meet NC-30",
      "Nothing, since VAV boxes are silent by design and the unit cannot affect the NC rating",
      "Raise the NC target to NC-50, since background noise requirements are flexible suggestions",
      "Specify louder ceiling speakers to mask the VAV noise, which brings the room into NC-30 compliance"
    ],
    "correct": 0,
    "explanation": "CTS-D Duty B Task 5: the NC rating is only as good as the noisiest device in the room, and a fan-powered box over the table can easily blow past NC-30. The designer coordinates with the mechanical engineer and acoustician: get octave-band sound data, relocate the unit away from the table, add lining or attenuators, or pick quieter equipment. Masking noise with louder speakers is not compliance."
  },
  {
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B5",
    "q": "The acoustician's design targets RT60 of 0.8 to 1.2 seconds for speech in the multipurpose hall, based on a specific area of absorptive treatment. The interior designer then value-engineers the treatment out. What is your coordination role?",
    "options": [
      "Accept the change, since RT60 targets are advisory and the sound system can fully compensate for a highly reverberant room",
      "Add more loudspeakers, since increased speaker count reduces reverberation time",
      "Treat the room after opening with portable panels, since acoustic treatment is always an owner-furnished afterthought",
      "Document that removing the treatment voids the RT60 target, and resolve it with the architect and acoustician before finishes are finalized: restore coverage, substitute finishes with known NRC data, or reset intelligibility expectations in writing"
    ],
    "correct": 3,
    "explanation": "CTS-D Duty B Task 5: RT60 is a property of the room's finishes, and deleting absorptive treatment deletes the acoustic design with it. No loudspeaker fixes a 2.5-second room for speech. The designer flags the conflict in writing, brings the architect and acoustician together, and gets a documented resolution (restored treatment, tested substitute finishes, or revised expectations) before finishes are locked."
  },
  {
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B6",
    "q": "Your AV cable penetrates a 2-hour fire-rated corridor wall. What life-safety coordination is required?",
    "options": [
      "No coordination, since low-voltage cable is exempt from fire-rating requirements in all jurisdictions",
      "A listed firestop system matching the wall's 2-hour rating, proper sleeve and annular space, and a clear bid-document assignment of who provides the firestopping",
      "Seal the penetration with expanding spray foam, which is an approved firestop for any rated assembly",
      "Route the cable under the door instead, which avoids the rated wall entirely and needs no firestopping"
    ],
    "correct": 1,
    "explanation": "CTS-D Duty B Task 6: every penetration of a rated assembly must be sealed with a listed firestop system rated for that assembly, installed with the right sleeve and annular space. Unsealed AV penetrations void the rating and fail inspection. The designer coordinates the requirement with the fire protection engineer and makes sure the bid documents say who provides the firestopping."
  },
  {
    "domain": "CTS-D: Allied Trade Coordination",
    "cert": "CTS-D",
    "duty": "B",
    "task": "B6",
    "q": "The building has a voice evacuation fire alarm system, and your design includes distributed program audio with local volume controls in each zone. What must you coordinate with the fire protection engineer?",
    "options": [
      "Nothing, since program audio and fire alarm are separate systems that never interact",
      "Leave the local volume controls as the override method, since occupants will turn the volume up to hear evacuation messages",
      "A fire alarm priority override that mutes or ducks program audio (typically a contact closure or priority input to the DSP), the override hierarchy, and AHJ acceptance testing",
      "Disconnect the program audio system entirely in buildings with voice evacuation, since the two systems cannot coexist"
    ],
    "correct": 2,
    "explanation": "CTS-D Duty B Task 6: in a voice evacuation building, program audio must yield to life-safety messages automatically, regardless of local volume settings. The designer coordinates the override interface (contact closure or priority DSP input), the muting hierarchy, and the acceptance test with the fire protection engineer and the AHJ. A volume knob is not a life-safety interface."
  }
];
