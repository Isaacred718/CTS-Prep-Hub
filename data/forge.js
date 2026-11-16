// CTS question forge content — registered into the FORGE engine (forge.js).
// Calculation generators build fresh numbers every draw; concept and trick
// tables are sampled with rotated stems and distractors. See TEMPLATE.md for
// the format of each piece.
(function (F) {
  const { R, pick, fmt, mkOptions } = F.helpers;

  /* ================= calculation generators ================= */

  // Inverse square law: SPL at a new distance
  F.calc('inv-square', 'CTS: Sound & Physics', 'CTS', 3, () => {
    const spl = R(80, 95), d1 = pick([1, 2, 3, 4]), mult = pick([2, 4]);
    const d2 = d1 * mult, drop = mult === 2 ? 6 : 12, ans = spl - drop;
    const o = mkOptions(`${ans} dB SPL`, [`${spl - 3} dB SPL`, `${spl - 10} dB SPL`, `${spl} dB SPL`, `${spl - 12} dB SPL`]);
    return {
      q: `A loudspeaker produces ${spl} dB SPL at ${d1} meter${d1 > 1 ? 's' : ''}. What is the SPL at ${d2} meters in a free field?`,
      ...o,
      explanation: `Inverse square law: each doubling of distance in a free field drops SPL by 6 dB. ${d1} m to ${d2} m is ${mult === 2 ? 'one doubling' : 'two doublings'}, so ${spl} − ${drop} = ${ans} dB SPL.`
    };
  });

  // Power ratio -> dB change (10 log)
  F.calc('power-db', 'CTS: Sound & Physics', 'CTS', 3, () => {
    const cases = [
      { r: 'double', db: '+3 dB', wrong: ['+6 dB', '+10 dB', '+1.5 dB'] },
      { r: 'quadruple', db: '+6 dB', wrong: ['+3 dB', '+12 dB', '+10 dB'] },
      { r: '10x', db: '+10 dB', wrong: ['+20 dB', '+3 dB', '+6 dB'] },
      { r: 'halve', db: '−3 dB', wrong: ['−6 dB', '−10 dB', '+3 dB'] }
    ];
    const c = pick(cases);
    const o = mkOptions(c.db, [...c.wrong, '0 dB']);
    const verb = { double: 'double', quadruple: 'quadruple', '10x': 'increase tenfold', halve: 'halve' }[c.r];
    return {
      q: `You ${verb} the electrical power to a loudspeaker. What is the approximate change in SPL?`,
      ...o,
      explanation: `Power ratio in dB uses 10·log10. Doubling power is 10·log10(2) ≈ +3 dB, four times is +6 dB, ten times is +10 dB, halving is −3 dB.`
    };
  });

  // Wavelength from frequency
  F.calc('wavelength', 'CTS: Sound & Physics', 'CTS', 3, () => {
    const f = pick([125, 250, 500, 1000, 2000, 4000, 8000]);
    const lam = 343 / f;
    const fLabel = f >= 1000 ? fmt(f / 1000, 1) + ' kHz' : f + ' Hz';
    const article = /^(8|11|18)/.test(fLabel) ? 'an' : 'a';
    const o = mkOptions(`${fmt(lam)} m`, [`${fmt(lam * 2)} m`, `${fmt(lam / 2)} m`, `${fmt(lam * 10)} m`, `${fmt(f / 343)} m`]);
    return {
      q: `What is the approximate wavelength of ${article} ${fLabel} tone in air at room temperature?`,
      ...o,
      explanation: `Wavelength = speed of sound ÷ frequency. 343 m/s ÷ ${f} Hz ≈ ${fmt(lam)} m.`
    };
  });

  // Ohm's law: V = I × R
  F.calc('ohm-v', 'CTS: Electrical & Site Survey', 'CTS', 2, () => {
    const i = R(2, 12), r = pick([4, 8, 16, 25, 50]), v = i * r;
    const o = mkOptions(`${v} V`, [`${fmt(i + r)} V`, `${fmt(v / 2)} V`, `${fmt(v * 2)} V`, `${fmt(i / r, 2)} V`]);
    return {
      q: `A circuit draws ${i} A through a ${r} Ω load. What is the voltage across the load?`,
      ...o,
      explanation: `Ohm's law: V = I × R = ${i} A × ${r} Ω = ${v} V.`
    };
  });

  // Power: P = V² / R
  F.calc('ohm-p', 'CTS: Electrical & Site Survey', 'CTS', 3, () => {
    const v = pick([12, 24, 48, 120]), r = pick([4, 8, 12, 24]);
    const p = (v * v) / r;
    const o = mkOptions(`${fmt(p)} W`, [`${fmt(v * r)} W`, `${fmt(v / r, 2)} W`, `${fmt(p / 2)} W`, `${fmt(p * 4)} W`]);
    return {
      q: `How much power is dissipated by a ${r} Ω load with ${v} V across it?`,
      ...o,
      explanation: `P = V² ÷ R = ${v}² ÷ ${r} = ${fmt(v * v)} ÷ ${r} = ${fmt(p)} W.`
    };
  });

  // Series resistance
  F.calc('series-r', 'CTS: Electrical & Site Survey', 'CTS', 2, () => {
    const n = pick([2, 2, 3]);
    const vals = [10, 22, 33, 47, 68, 100];
    const rs = []; for (let k = 0; k < n; k++) rs.push(pick(vals));
    // Avoid all-identical values: they collapse distractors into duplicates
    if (rs.every(v => v === rs[0])) rs[rs.length - 1] = pick(vals.filter(v => v !== rs[0]));
    const total = rs.reduce((a, b) => a + b, 0);
    const o = mkOptions(`${total} Ω`, [`${fmt(total / n, 1)} Ω`, `${fmt(total * 2)} Ω`, `${fmt(total - rs[0])} Ω`, `${rs[0]} Ω`]);
    return {
      q: `What is the total resistance of ${rs.join(' Ω, ')} Ω resistors wired in series?`,
      ...o,
      explanation: `Resistors in series add directly: ${rs.join(' + ')} = ${total} Ω.`
    };
  });

  // Parallel resistance (two resistors, clean values)
  F.calc('parallel-r', 'CTS: Electrical & Site Survey', 'CTS', 4, () => {
    const pair = pick([[8, 8], [12, 12], [16, 16], [20, 20], [8, 24], [12, 24], [6, 12]]);
    const [r1, r2] = pair, lo = Math.min(r1, r2);
    const total = (r1 * r2) / (r1 + r2);
    // Six candidate mistakes; equal pairs collapse a few of them, which still
    // leaves at least three distinct distractors.
    const o = mkOptions(`${fmt(total, 1)} Ω`, [
      `${r1 + r2} Ω`, `${fmt((r1 + r2) / 2, 1)} Ω`, `${fmt(lo / 2, 1)} Ω`,
      `${lo} Ω`, `${fmt(total * 2, 1)} Ω`, `${fmt(total / 2, 1)} Ω`
    ]);
    return {
      q: `What is the total resistance of a ${r1} Ω and a ${r2} Ω resistor wired in parallel?`,
      ...o,
      explanation: `Parallel: 1/R = 1/${r1} + 1/${r2}, so R = (${r1} × ${r2}) ÷ (${r1} + ${r2}) = ${fmt(total, 1)} Ω. Note it is always less than the smallest branch.`
    };
  });

  // Voltage ratio -> dB (20 log) — classic discriminator
  F.calc('volt-db', 'CTS: Sound & Physics', 'CTS', 4, () => {
    const cases = [
      { r: 'doubles', db: '+6 dB', wrong: ['+3 dB', '+10 dB', '+12 dB'] },
      { r: 'quadruples', db: '+12 dB', wrong: ['+6 dB', '+24 dB', '+3 dB'] },
      { r: 'increases tenfold', db: '+20 dB', wrong: ['+10 dB', '+6 dB', '+40 dB'] }
    ];
    const c = pick(cases);
    const o = mkOptions(c.db, [...c.wrong, '0 dB']);
    return {
      q: `A line-level signal voltage ${c.r}. What is the change in dB?`,
      ...o,
      explanation: `Voltage ratios use 20·log10 (not 10·log10 like power). Doubling voltage is 20·log10(2) ≈ +6 dB — twice the dB value of doubling power.`
    };
  });

  // Projector throw distance
  F.calc('throw-dist', 'CTS: Video & Signal', 'CTS', 2, () => {
    const ratio = pick([12, 14, 16, 18, 20, 25]) / 10;
    const w = R(2, 5), dist = ratio * w;
    const o = mkOptions(`${fmt(dist, 1)} m`, [`${fmt(w / ratio, 1)} m`, `${fmt(w + ratio, 1)} m`, `${fmt(dist * 2, 1)} m`, `${fmt(dist / 2, 1)} m`]);
    return {
      q: `A projector has a throw ratio of ${fmt(ratio, 1)}:1 and the screen is ${w} m wide. How far from the screen should the projector sit?`,
      ...o,
      explanation: `Throw distance = throw ratio × image width = ${fmt(ratio, 1)} × ${w} m = ${fmt(dist, 1)} m.`
    };
  });

  // Subnet host count
  F.calc('subnet-hosts', 'CTS: AV Networking', 'CTS', 3, () => {
    const n = pick([24, 25, 26, 27, 28, 30]);
    const hosts = Math.pow(2, 32 - n) - 2;
    const full = Math.pow(2, 32 - n);
    // Off-by-one traps; all guaranteed unique and != hosts
    const o = mkOptions(`${hosts}`, [`${full}`, `${hosts + 1}`, `${Math.max(1, hosts - 1)}`, `${full + 1}`]);
    return {
      q: `How many usable host addresses does a /${n} subnet provide?`,
      ...o,
      explanation: `A /${n} leaves ${32 - n} host bits: 2^${32 - n} = ${full} addresses, minus the network and broadcast addresses = ${hosts} usable hosts.`
    };
  });

  /* ================= concept fact tables =================
     Each fact: { t: term (as it reads mid-sentence), d: definition }. */
  F.concepts([
    {
      domain: 'CTS: Sound & Physics', cert: 'CTS', diff: 2,
      facts: [
        { t: 'the inverse square law', d: 'In a free field, doubling the distance from a point source drops SPL by 6 dB.' },
        { t: 'doubling amplifier power', d: 'Doubling the electrical power to a loudspeaker increases SPL by about 3 dB.' },
        { t: 'a perceived doubling of loudness', d: 'Roughly a 10 dB increase is heard as twice as loud, and takes ten times the power.' },
        { t: 'wavelength', d: 'The physical length of one cycle of a sound wave: speed of sound divided by frequency.' },
        { t: 'comb filtering', d: 'The hollow, phasey coloration caused by mixing a signal with a slightly delayed copy of itself.' },
        { t: 'the Haas (precedence) effect', d: 'When two identical sounds arrive within about 5–35 ms, the brain fuses them and localizes to the first arrival.' },
        { t: 'auditory masking', d: 'A louder sound rendering a quieter, nearby-frequency sound inaudible.' },
        { t: 'RT60', d: 'The time it takes reverberant sound to decay by 60 dB after the source stops.' },
        { t: 'phantom power', d: '48 V DC sent down a balanced mic cable to power condenser microphones.' },
        { t: '0 dB SPL', d: 'The reference for sound pressure level: 20 micropascals, about the threshold of human hearing.' }
      ]
    },
    {
      domain: 'CTS: Video & Signal', cert: 'CTS', diff: 2,
      facts: [
        { t: 'EDID', d: 'The data block a display sends its source describing supported resolutions, refresh rates, and audio formats.' },
        { t: 'HDCP', d: 'Content-protection encryption on HDMI/DisplayPort links; a failed handshake shows a black screen, not a degraded image.' },
        { t: '4:2:0 chroma subsampling', d: 'Storing color at quarter resolution while keeping full luminance resolution, roughly halving bandwidth.' },
        { t: 'genlock', d: 'Synchronizing video devices to a common reference signal so switching between them is clean.' },
        { t: 'scaling', d: 'Converting an image from one resolution to another; scaling up cannot create detail that was never captured.' },
        { t: 'refresh rate', d: 'How many times per second a display redraws its image, measured in hertz.' },
        { t: 'the practical limit of passive HDMI copper', d: 'About 5–7.5 meters at 4K60 (about 15 m at 1080p); longer runs need active, fiber, or HDBaseT extension.' },
        { t: 'HDBaseT', d: 'A standard carrying uncompressed video, audio, Ethernet, control, and power up to 100 m over one Cat6 cable.' },
        { t: 'contrast ratio', d: 'The luminance difference between the brightest white and the darkest black a display can produce.' },
        { t: 'video latency', d: 'The delay from camera capture to display; lip-sync problems typically appear above about 40 ms.' }
      ]
    },
    {
      domain: 'CTS: AV Networking', cert: 'CTS', diff: 2,
      facts: [
        { t: 'a subnet mask', d: 'The value that defines which part of an IP address is the network and which part is the host.' },
        { t: 'the default gateway', d: 'The router address a host uses to reach destinations on other networks.' },
        { t: 'DHCP', d: 'The service that automatically assigns IP addresses, subnet masks, gateways, and DNS; a failed request can leave a 169.254.x.x link-local address.' },
        { t: 'a VLAN', d: 'A logical segmentation of one physical switch into multiple isolated broadcast domains.' },
        { t: 'multicast', d: 'One stream delivered to many subscribed receivers via IGMP, unlike one-to-one unicast or send-to-everyone broadcast.' },
        { t: 'IGMP snooping', d: 'The switch feature that forwards multicast only to ports with subscribed receivers, preventing network floods.' },
        { t: 'the PoE standards', d: 'Power over Ethernet: 802.3af delivers up to about 15 W, 802.3at (PoE+) about 30 W, and 802.3bt up to 60 or 90 W.' },
        { t: 'Dante', d: 'A protocol transporting uncompressed, low-latency digital audio over standard IP networks with PTP clocking.' },
        { t: 'QoS / DSCP markings', d: 'Priority tags that let time-sensitive AV packets jump the queue ahead of bulk data traffic.' },
        { t: 'the Dante latency setting', d: 'A per-device buffer (commonly 1 ms) that must be set at or above what the slowest network path requires.' }
      ]
    },
    {
      domain: 'CTS: Electrical & Site Survey', cert: 'CTS', diff: 2,
      facts: [
        { t: "Ohm's law", d: 'Voltage equals current times resistance: V = I × R.' },
        { t: 'resistors in series', d: 'Their resistances add directly, and the same current flows through each one.' },
        { t: 'resistors in parallel', d: 'The total is always less than the smallest branch: 1/R = 1/R1 + 1/R2.' },
        { t: 'a ground loop', d: 'Hum or noise caused by two grounded devices sitting at different ground potentials, so current flows on the shield.' },
        { t: 'American Wire Gauge (AWG)', d: 'A sizing standard where a lower number means a thicker conductor that carries more current.' },
        { t: 'the 80% breaker rule', d: 'Continuous loads should not exceed 80% of a breaker rating — 16 A on a 20 A breaker.' },
        { t: 'an isolated-ground receptacle', d: 'The orange outlet whose ground runs dedicated back to the panel, reducing noise coupling.' },
        { t: 'a UPS', d: 'Battery backup that keeps gear alive for graceful shutdown; it does not fix grounding or replace surge protection.' }
      ]
    },
    {
      domain: 'CTS: Control Systems', cert: 'CTS', diff: 2,
      facts: [
        { t: 'a control processor', d: 'The central brain of an AV system: it sends commands to devices and reads back their status.' },
        { t: 'RS-232 control', d: 'A short-distance serial protocol (typically under 15 m) using transmit, receive, and ground.' },
        { t: 'IP control', d: 'Device commands sent over the network, allowing long distances and two-way feedback.' },
        { t: 'a relay (dry contact closure)', d: 'A simple on/off switch output used for screens, lifts, shades, and power sequencing.' },
        { t: 'an API', d: 'The documented command set a device exposes so control systems and software can operate it.' },
        { t: 'two-way feedback', d: 'Status reported back from a device so the control system shows true state instead of assuming it.' }
      ]
    },
    {
      domain: 'CTS: Troubleshooting & Verification', cert: 'CTS', diff: 3,
      facts: [
        { t: 'the divide-and-conquer method', d: 'Isolating a fault by testing the midpoint of a signal chain first, then halving the suspect half.' },
        { t: 'known-good substitution', d: 'Swapping in a verified cable, source, or display to rule out a suspect component fast.' },
        { t: 'tracing signal flow', d: 'Walking the chain from source to display to find exactly where the signal breaks.' },
        { t: 'mismatched firmware', d: 'A common cause of discovery or audio failures between networked AV devices that otherwise look healthy.' },
        { t: 'cable certification vs. verification', d: 'Certification proves a run meets Cat6 performance; a basic tester only checks for opens and shorts.' },
        { t: 'as-built documentation', d: 'The record of what was actually installed — the drawing you troubleshoot against, not the proposal.' }
      ]
    }
  ], {
    stems: ['Which of the following best describes {term}?', 'In AV practice, {term} refers to which of the following?']
  });

  /* ================= trick question tables =================
     EXCEPT / NOT / TRUE / FALSE stems with always/never absolute traps.
     Each item has trueStmts (unambiguously true) and falseStmts
     (unambiguously false), written to similar lengths. */
  F.tricks([
    {
      domain: 'CTS: Sound & Physics', cert: 'CTS', diff: 3,
      items: [
        {
          topic: 'the inverse square law',
          trueStmts: [
            'In a free field, doubling the distance from a point source drops SPL by 6 dB.',
            'Moving from 1 meter to 4 meters from a source reduces SPL by about 12 dB.',
            'The law assumes a free field with no reflections adding energy back in.'
          ],
          falseStmts: [
            'Doubling the distance from a source always drops SPL by exactly 3 dB.',
            'The inverse square law applies unchanged inside small reverberant rooms.',
            'Halving the distance to a source never changes the measured SPL.'
          ]
        },
        {
          topic: 'decibel changes with power',
          trueStmts: [
            'Doubling amplifier power yields roughly a 3 dB increase in SPL.',
            'A 10 dB gain requires about ten times the amplifier power.',
            'Halving the power to a loudspeaker drops output by about 3 dB.'
          ],
          falseStmts: [
            'Doubling amplifier power always doubles the perceived loudness.',
            'A 3 dB increase requires ten times the power, never less.',
            'Tripling the power invariably adds exactly 10 dB of output.'
          ]
        },
        {
          topic: 'phantom power',
          trueStmts: [
            'Phantom power is 48 V DC carried on a balanced microphone cable.',
            'It is intended for condenser microphones and active DI boxes.',
            'Dynamic microphones generally ignore phantom power when wired correctly.'
          ],
          falseStmts: [
            'Phantom power is always 12 V AC on an unbalanced instrument cable.',
            'Every microphone ever made requires phantom power to produce signal.',
            'Phantom power is an RF signal sent to power wireless transmitters.'
          ]
        },
        {
          topic: 'comb filtering',
          trueStmts: [
            'It is the hollow coloration from mixing a signal with a delayed copy of itself.',
            'It commonly results from two microphones picking up one source at different distances.',
            'The 3:1 microphone placement rule helps avoid it.'
          ],
          falseStmts: [
            'Comb filtering only ever occurs in digital systems, never with analog mics.',
            'It is always desirable because it doubles the perceived loudness.',
            'Comb filtering is caused by mismatched speaker impedance alone.'
          ]
        },
        {
          topic: 'RT60',
          trueStmts: [
            'RT60 is the time for reverberant sound to decay 60 dB after the source stops.',
            'Longer RT60 values make speech intelligibility worse in most rooms.',
            'It is measured with the sound source turned off, capturing the room decay.'
          ],
          falseStmts: [
            'RT60 measures the time for sound to travel 60 feet, never decay.',
            'A longer RT60 always improves speech clarity in every room.',
            'RT60 is only defined for outdoor free-field measurements.'
          ]
        }
      ]
    },
    {
      domain: 'CTS: Video & Signal', cert: 'CTS', diff: 3,
      items: [
        {
          topic: 'EDID',
          trueStmts: [
            'EDID is the data block a display sends describing its supported resolutions.',
            'A missing or corrupt EDID can leave a source with no image at all.',
            'EDID emulators hold a fixed resolution so sources stay locked when displays change.'
          ],
          falseStmts: [
            'EDID is an audio encryption scheme that always blocks unlicensed sources.',
            'Displays never send EDID; sources simply guess the resolution instead.',
            'EDID exclusively carries HDCP keys and never mentions resolutions.'
          ]
        },
        {
          topic: 'HDCP',
          trueStmts: [
            'HDCP is content-protection encryption on HDMI and DisplayPort links.',
            'A failed HDCP handshake typically produces a black screen, not a dim image.',
            'Too many devices in series can exceed the HDCP repeater limit.'
          ],
          falseStmts: [
            'HDCP failures always show a clear image with a small warning icon.',
            'HDCP is an audio-only protocol that never affects the video signal.',
            'Every display manufactured supports all HDCP versions simultaneously.'
          ]
        },
        {
          topic: 'HDBaseT',
          trueStmts: [
            'HDBaseT carries video, audio, Ethernet, control, and power over one Cat cable.',
            'Its rated distance is up to 100 meters on Cat6 for most feature sets.',
            'It uses standard RJ45 terminations rather than proprietary connectors.'
          ],
          falseStmts: [
            'HDBaseT runs exclusively on fiber and never on copper cable.',
            'It is limited to 5 meters and cannot carry control signals at all.',
            'HDBaseT always requires a separate power cable for every endpoint.'
          ]
        },
        {
          topic: 'chroma subsampling',
          trueStmts: [
            '4:2:0 stores color at quarter resolution while keeping full luminance detail.',
            'It roughly halves bandwidth because human vision is less sensitive to color detail.',
            'Most streamed video uses 4:2:0 rather than full 4:4:4 color.'
          ],
          falseStmts: [
            '4:2:0 always doubles the bandwidth compared to uncompressed RGB video.',
            'Chroma subsampling exclusively affects audio and never touches the image.',
            '4:4:4 is never used anywhere because it contains no color information.'
          ]
        }
      ]
    },
    {
      domain: 'CTS: AV Networking', cert: 'CTS', diff: 3,
      items: [
        {
          topic: 'multicast',
          trueStmts: [
            'Multicast delivers one stream to many subscribed receivers via IGMP.',
            'It uses far less bandwidth than sending a separate unicast to each receiver.',
            'IGMP snooping keeps multicast from flooding ports with no subscribers.'
          ],
          falseStmts: [
            'Multicast always sends every packet to every device on the network.',
            'Multicast and broadcast are identical and never differ in behavior.',
            'IGMP is a video codec and has nothing to do with network traffic.'
          ]
        },
        {
          topic: 'DHCP',
          trueStmts: [
            'DHCP automatically assigns IP addresses, masks, gateways, and DNS servers.',
            'A failed DHCP request can leave a device with a 169.254.x.x link-local address.',
            'Reservations tie a specific IP to a device MAC address.'
          ],
          falseStmts: [
            'DHCP manually requires typing every address and never automates anything.',
            'A 169.254.x.x address always proves the DHCP server is working perfectly.',
            'DHCP exclusively assigns printer names and never handles IP addresses.'
          ]
        },
        {
          topic: 'VLANs',
          trueStmts: [
            'A VLAN logically segments one physical switch into isolated broadcast domains.',
            'AV traffic is often placed on its own VLAN to isolate it from data traffic.',
            'Devices on different VLANs need a router to communicate with each other.'
          ],
          falseStmts: [
            'VLANs physically divide a switch with internal walls and separate power.',
            'Every device on any VLAN can always see all traffic on all other VLANs.',
            'A VLAN is a type of audio cable and never relates to networking.'
          ]
        },
        {
          topic: 'Power over Ethernet',
          trueStmts: [
            '802.3af delivers up to about 15 W and 802.3at (PoE+) about 30 W.',
            '802.3bt extends PoE to 60 W or 90 W for demanding endpoints.',
            'The powered device negotiates its power class with the switch.'
          ],
          falseStmts: [
            'All PoE standards always deliver exactly 90 W regardless of the class.',
            'PoE sends high-voltage AC mains power down the Ethernet cable.',
            'A PoE switch can never power a device; injectors are always mandatory.'
          ]
        }
      ]
    },
    {
      domain: 'CTS: Electrical & Site Survey', cert: 'CTS', diff: 3,
      items: [
        {
          topic: "Ohm's law",
          trueStmts: [
            "Ohm's law states that voltage equals current times resistance: V = I x R.",
            'Doubling the voltage across a fixed resistor doubles the current through it.',
            'It applies to the resistive portion of AC and DC circuits alike.'
          ],
          falseStmts: [
            "Ohm's law states that power always equals voltage divided by current.",
            'Current through a resistor never changes when the voltage changes.',
            "Ohm's law only applies to capacitors and never to resistors."
          ]
        },
        {
          topic: 'ground loops',
          trueStmts: [
            'A ground loop causes hum when two grounded devices sit at different ground potentials.',
            'Current flowing on cable shields is the classic symptom of a ground loop.',
            'Lifting the shield at one end of a balanced line can break the loop.'
          ],
          falseStmts: [
            'Ground loops only occur in fiber-optic systems and never with copper.',
            'A ground loop always improves audio quality by adding shielding current.',
            'Ground loops are exclusively a video-sync issue unrelated to audio hum.'
          ]
        },
        {
          topic: 'the 80% breaker rule',
          trueStmts: [
            'Continuous loads should not exceed 80% of a breaker rating.',
            'On a 20 A breaker, the continuous load limit is 16 A.',
            'The rule prevents nuisance tripping from heat buildup over long shows.'
          ],
          falseStmts: [
            'Breakers should always be loaded to 100% continuously for efficiency.',
            'The 80% rule applies only to lighting and never to AV equipment.',
            'A 20 A breaker safely carries 25 A forever without any derating.'
          ]
        }
      ]
    },
    {
      domain: 'CTS: Control Systems', cert: 'CTS', diff: 3,
      items: [
        {
          topic: 'RS-232 control',
          trueStmts: [
            'RS-232 is a short-distance serial protocol, typically reliable under 15 meters.',
            'It uses transmit, receive, and ground conductors between devices.',
            'Baud rate, data bits, and parity must match on both ends of the link.'
          ],
          falseStmts: [
            'RS-232 reliably spans 500 meters and always carries 4K video.',
            'RS-232 uses only a single conductor with no ground reference at all.',
            'Baud rate mismatches never matter because RS-232 auto-negotiates.'
          ]
        },
        {
          topic: 'two-way feedback',
          trueStmts: [
            'Two-way feedback reports true device status back to the control system.',
            'It lets touch panels display actual volume levels instead of assumed ones.',
            'Feedback requires the controlled device to expose a status-reporting protocol.'
          ],
          falseStmts: [
            'Two-way feedback means the user must press every button twice always.',
            'It is impossible over IP networks and only works on infrared.',
            'Feedback lets the control system ignore device state entirely forever.'
          ]
        }
      ]
    },
    {
      domain: 'CTS: Troubleshooting & Verification', cert: 'CTS', diff: 3,
      items: [
        {
          topic: 'divide-and-conquer troubleshooting',
          trueStmts: [
            'It isolates a fault by testing the midpoint of the signal chain first.',
            'Each test halves the suspect portion of the chain until the fault is found.',
            'It is faster than swapping components one at a time from one end.'
          ],
          falseStmts: [
            'It always starts at the display end and never tests the middle.',
            'The method requires replacing every cable before any testing begins.',
            'Divide-and-conquer only works on networks and never on signal chains.'
          ]
        },
        {
          topic: 'cable certification vs. verification',
          trueStmts: [
            'Certification proves a run meets Cat6 performance across the full spec.',
            'A basic wire-map tester only checks for opens, shorts, and miswires.',
            'Certification results are the documented proof a cable plant performs.'
          ],
          falseStmts: [
            'A $30 continuity tester always certifies Cat6A to the full standard.',
            'Certification and verification are identical and never differ.',
            'Certification exclusively tests fiber and never applies to copper.'
          ]
        }
      ]
    }
  ]);


  /* ================= CTS-D calculation generators ================= */

  // Projector throw distance = screen width x throw ratio
  F.calc('ctsd-throw', 'CTS-D: Design Calculations', 'CTS-D', 2, () => {
    const w = R(8, 16), ratio = pick([15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]) / 10;
    const dist = w * ratio;
    const o = mkOptions(`${fmt(dist, 1)} ft`, [
      `${fmt(w / ratio, 1)} ft`, `${fmt(w + ratio, 1)} ft`,
      `${fmt(dist * 2, 1)} ft`, `${fmt(dist + w, 1)} ft`
    ]);
    return {
      q: `A projector with a ${fmt(ratio, 1)}:1 throw ratio must fill a ${w}-foot-wide screen. How far from the screen should the lens sit?`,
      ...o,
      explanation: `Throw distance = throw ratio x image width = ${fmt(ratio, 1)} x ${w} ft = ${fmt(dist, 1)} ft.`
    };
  });

  // 16:9 screen width from diagonal (width = diagonal x 0.8716)
  F.calc('ctsd-screen-width', 'CTS-D: Design Calculations', 'CTS-D', 3, () => {
    const d = R(100, 200);
    const w = Math.round(d * 0.8716);
    const o = mkOptions(`${w}"`, [
      `${Math.round(d * 0.49)}"`, `${Math.round(d * 1.2)}"`,
      `${Math.round(d / 2)}"`, `${d}"`
    ]);
    return {
      q: `What is the approximate width of a ${d}-inch diagonal 16:9 projection screen?`,
      ...o,
      explanation: `For 16:9, width = diagonal x 0.8716. ${d} x 0.8716 = ${fmt(d * 0.8716, 1)}, about ${w} inches. (Diagonal x 0.49 gives the height, not the width.)`
    };
  });

  // Max viewing distance by the older 4-6-8 rule of thumb (DISCAS is the exam method)
  F.calc('ctsd-view-dist', 'CTS-D: Design Calculations', 'CTS-D', 2, () => {
    const h = R(4, 10), ans = 4 * h;
    const o = mkOptions(`${ans} ft`, [`${2 * h} ft`, `${6 * h} ft`, `${8 * h} ft`, `${10 * h} ft`]);
    return {
      q: `A video wall is ${h} feet tall and will display detailed spreadsheets. Using the older "4-6-8" rule of thumb, what is the maximum viewing distance for the farthest seat?`,
      ...o,
      explanation: `The 4-6-8 rule of thumb puts the farthest viewer of detailed content at about 4 times the image height: 4 x ${h} ft = ${ans} ft. On the CTS-D exam, use DISCAS (ANSI/AVIXA V202.01) instead, which works from element height: for basic decision making, farthest viewer = 200 x element height.`
    };
  });

  // Rack units: device heights + 1 RU ventilation
  F.calc('ctsd-rack-ru', 'CTS-D: AV System Design', 'CTS-D', 1, () => {
    const devs = ['DSP processor', 'power amplifier', 'network switch', 'control processor', 'matrix switcher', 'wireless mic receiver', 'streaming encoder', 'UPS'];
    const n = pick([3, 3, 4]);
    const pool = [...devs], chosen = [];
    for (let k = 0; k < n; k++) chosen.push(pool.splice(R(0, pool.length - 1), 1)[0]);
    const rus = chosen.map(() => R(1, 4));
    if (rus.every(v => v === 1)) rus[rus.length - 1] = 2; // keep "device count" distractor unique
    const sum = rus.reduce((a, b) => a + b, 0), ans = sum + 1;
    const o = mkOptions(`${ans} RU`, [`${sum} RU`, `${sum * 2} RU`, `${n} RU`, `${sum + 2} RU`]);
    const list = chosen.map((d, i) => `a ${d} (${rus[i]} RU)`).join(', ');
    return {
      q: `A rack layout calls for ${list}. Allowing 1 RU for ventilation, what is the minimum rack size?`,
      ...o,
      explanation: `Add the device heights (${rus.join(' + ')} = ${sum} RU), then add 1 RU for ventilation: ${ans} RU total.`
    };
  });

  // Contrast ratio = white luminance / black luminance
  F.calc('ctsd-contrast', 'CTS-D: Design Calculations', 'CTS-D', 3, () => {
    const white = pick([100, 120, 150, 180, 200, 240, 300, 360, 400, 500]);
    const black = pick([1, 2, 4, 5]);
    const ratio = white / black;
    const o = mkOptions(`${fmt(ratio, 1)}:1`, [
      `1:${fmt(ratio, 1)}`, `${white - black}:1`, `${white + black}:1`, `${fmt(white / (black + 1), 1)}:1`
    ]);
    return {
      q: `A display measures ${white} cd/m² on full white and ${black} cd/m² on full black. What is its contrast ratio?`,
      ...o,
      explanation: `Contrast ratio = white luminance / black luminance = ${white} / ${black} = ${fmt(ratio, 1)}:1.`
    };
  });

  /* ================= CTS-D concept fact tables =================
     Each fact: { t: term (as it reads mid-sentence), d: definition }. */
  F.concepts([
    {
      domain: 'CTS-D: Needs Assessment', cert: 'CTS-D', diff: 2,
      facts: [
        { t: 'a site survey', d: 'A walkthrough of the venue documenting room dimensions, existing infrastructure, and constraints before design begins.' },
        { t: 'stakeholder interviews', d: 'Structured conversations with end users, IT, and facilities capturing how the space will actually be used.' },
        { t: 'needs vs. wants', d: 'Needs are requirements the system must satisfy; wants are nice-to-haves ranked against the available budget.' },
        { t: 'budget constraints', d: 'The fixed spending limit that determines system scope, equipment tier, and whether the project is phased.' },
        { t: 'the room usage profile', d: 'How often, by whom, and for what purpose the space is used, which drives the required system complexity.' },
        { t: 'planning for future expansion', d: 'Sizing conduit, rack space, and infrastructure headroom for systems the client may add later.' },
        { t: 'accessibility requirements', d: 'Obligations such as hearing assistance, wheelchair sightlines, and reach ranges that the design must satisfy.' },
        { t: 'the needs assessment report', d: 'The document summarizing findings, requirements, and budget that the entire design is built against.' },
        { t: 'user workflows', d: 'The step-by-step tasks users perform in the space, which the system and its control interface must support.' },
        { t: 'success criteria', d: 'Measurable outcomes agreed with the client, used to verify the finished system meets expectations.' }
      ]
    },
    {
      domain: 'CTS-D: Allied Trade Coordination', cert: 'CTS-D', diff: 2,
      facts: [
        { t: 'the electrician', d: 'Provides dedicated circuits, isolated grounds, and rough-in boxes per the AV power and conduit schedule.' },
        { t: 'HVAC coordination', d: 'Keeps mechanical noise within the NC rating and airflow away from microphones and projector intakes.' },
        { t: 'the architect', d: 'Aligns sightlines, finishes, and millwork with display placement, loudspeaker locations, and acoustic needs.' },
        { t: 'the structural engineer', d: 'Verifies that ceilings, walls, and rigging points can carry the loads of hung displays and loudspeakers.' },
        { t: 'the reflected ceiling plan (RCP)', d: 'The drawing showing ceiling-mounted AV devices coordinated with lights, sprinklers, and diffusers.' },
        { t: 'millwork coordination', d: 'Ensures lecterns, credenzas, and built-in racks have cable paths, ventilation, and service access.' },
        { t: 'the lighting designer', d: 'Coordinates house-light positions and dimming so projection contrast and camera images hold up.' },
        { t: 'fire and life-safety coordination', d: 'Aligns strobe placement, speaker audibility, and plenum cable ratings with code requirements.' },
        { t: 'the IT / network team', d: 'Supplies VLANs, IP schemes, PoE budgets, and security policies for networked AV devices.' },
        { t: 'the general contractor', d: 'The single point of contact sequencing AV rough-in and trim with the other trades on site.' }
      ]
    },
    {
      domain: 'CTS-D: AV System Design', cert: 'CTS-D', diff: 3,
      facts: [
        { t: 'signal flow', d: 'The path audio and video take from source to destination; the backbone every AV design is built on.' },
        { t: 'block diagrams', d: 'Single-line drawings showing devices and signal paths without physical layout detail.' },
        { t: 'coverage patterns', d: 'Loudspeaker dispersion angles mapped over the seating area to verify even SPL distribution.' },
        { t: 'headroom', d: 'Extra amplifier power, typically 3 to 6 dB above the required SPL, so peaks never clip.' },
        { t: 'redundancy', d: 'Backup paths or devices, such as dual network links, that keep critical systems running during a failure.' },
        { t: 'gain structure', d: 'Setting levels through the chain so each stage operates in its clean range, avoiding noise and clipping.' },
        { t: 'the single-line drawing', d: 'A schematic showing every device and connection in the system as one continuous diagram.' },
        { t: 'DSP programming', d: 'Configuring mixing, EQ, echo cancellation, and routing in the digital signal processor per the design.' },
        { t: 'sightline analysis', d: 'Verifying every seat can see the display within acceptable vertical and horizontal viewing angles.' },
        { t: 'acoustic treatment coordination', d: 'Setting absorption and diffusion targets with the acoustician so speech stays intelligible.' }
      ]
    },
    {
      domain: 'CTS-D: Design Documentation', cert: 'CTS-D', diff: 2,
      facts: [
        { t: 'construction drawings', d: 'Plans, sections, and elevations showing exactly where AV devices mount and how they connect.' },
        { t: 'the equipment schedule', d: 'A list of every device with model numbers, quantities, and locations, used for procurement.' },
        { t: 'the cable schedule', d: 'A run-by-run list of cable types, endpoints, and lengths for rough-in and pulling.' },
        { t: 'specifications', d: 'Written requirements covering workmanship, acceptable products, and performance criteria.' },
        { t: 'submittals', d: 'Contractor-provided product data and shop drawings submitted for approval before procurement.' },
        { t: 'rack elevations', d: 'Front-view drawings of each rack showing device order, ventilation gaps, and power distribution.' },
        { t: 'the riser diagram', d: 'A vertical schematic showing how signals and conduit run between floors or rooms.' },
        { t: 'as-built drawings', d: 'Final drawings updated to reflect what was actually installed, delivered at project closeout.' },
        { t: 'the drawing legend', d: 'The key defining every symbol and abbreviation used across the drawing set.' },
        { t: 'revision control', d: 'Numbered drawing issues, such as Rev C, so every trade builds from the current set.' }
      ]
    },
    {
      domain: 'CTS-D: Verification & Closeout', cert: 'CTS-D', diff: 2,
      facts: [
        { t: 'commissioning', d: 'Systematic testing and tuning that proves the installed system meets the design intent.' },
        { t: 'the punch list', d: 'Outstanding items the contractor must correct before the client grants final acceptance.' },
        { t: 'owner training', d: 'Hands-on instruction so client staff can operate the system confidently after handover.' },
        { t: 'the warranty period', d: 'Typically one year, during which the integrator corrects defects at no cost to the client.' },
        { t: 'acceptance testing', d: 'Formal measurements and demonstrations against the specification before project sign-off.' },
        { t: 'system tuning', d: 'Final EQ, level-setting, and DSP adjustments made in the finished, furnished room.' },
        { t: 'the final walkthrough', d: 'A joint review with the client confirming the system is complete and operational.' },
        { t: 'O&M manuals', d: 'Operation and maintenance documentation handed to the client at project closeout.' }
      ]
    }
  ], {
    stems: ['Which of the following best describes {term}?', 'In AV practice, {term} refers to which of the following?']
  });

  /* ================= CTS-D trick question tables =================
     EXCEPT / NOT / TRUE / FALSE stems with always/never absolute traps.
     Each item has trueStmts (unambiguously true) and falseStmts
     (unambiguously false), written to similar lengths. */
  F.tricks([
    {
      domain: 'CTS-D: Design Calculations', cert: 'CTS-D', diff: 3,
      items: [
        {
          topic: 'throw ratio',
          trueStmts: [
            'Throw distance equals throw ratio multiplied by image width.',
            'A 2.0:1 lens on a 10-foot-wide screen needs about 20 feet of throw.',
            'A zoom lens offers a throw ratio range, such as 1.5-2.0:1, rather than one fixed value.'
          ],
          falseStmts: [
            'Throw ratio is always found by dividing the screen width by the throw distance.',
            'A larger throw ratio number always means the projector sits closer to the screen.',
            'The zoom setting of a lens never changes its throw ratio.'
          ]
        },
        {
          topic: 'viewing distance',
          trueStmts: [
            'For detailed content, the farthest viewer should sit within about 4 times the image height.',
            'The 4-times-height figure is a maximum for detailed content, so seats closer than that are still acceptable.',
            'Content with larger text and simpler graphics can be read from farther than the detailed-content limit.'
          ],
          falseStmts: [
            'The farthest viewer must always sit at exactly 4 times the image height, never closer.',
            'Viewing-distance guidelines never apply to direct-view LED video walls.',
            'A smaller image always lets viewers sit farther away from the screen.'
          ]
        }
      ]
    },
    {
      domain: 'CTS-D: Design Documentation', cert: 'CTS-D', diff: 3,
      items: [
        {
          topic: 'submittals',
          trueStmts: [
            'Submittals are product data and shop drawings the contractor provides for approval before purchasing equipment.',
            'Equipment covered by a submittal should not be ordered until the submittal is approved.',
            'Submittals are reviewed against the specifications, not against the lowest bid price.'
          ],
          falseStmts: [
            'Submittals are always approved automatically and never need designer review.',
            'A submittal is the final invoice and is never prepared before installation.',
            'Submittals only ever cover furniture and never include AV equipment.'
          ]
        },
        {
          topic: 'as-built drawings',
          trueStmts: [
            'As-built drawings record what was actually installed, including field changes from the design.',
            'They are delivered at project closeout and used for future service and troubleshooting.',
            'Red-line markups made during installation become the basis for the final as-builts.'
          ],
          falseStmts: [
            'As-built drawings are always identical to the original design drawings.',
            'As-builts are finished before construction starts and are never updated.',
            'As-builts show only pricing information and never show device locations.'
          ]
        }
      ]
    }
  ]);

  /* ================= CTS-I calculation generators ================= */

  // Total rack power draw
  F.calc('ctsi-rack-power', 'CTS-I: Rack Build & Wiring', 'CTS-I', 2, () => {
    const devs = ['power amplifier', 'DSP processor', 'network switch', 'matrix switcher', 'wireless mic receiver', 'control processor', 'media server'];
    const n = pick([3, 3, 4]);
    const pool = [...devs], chosen = [];
    for (let k = 0; k < n; k++) chosen.push(pool.splice(R(0, pool.length - 1), 1)[0]);
    const watts = chosen.map(() => Math.round(R(50, 500) / 25) * 25);
    if (watts.every(v => v === watts[0])) watts[watts.length - 1] = Math.min(500, watts[watts.length - 1] + 25);
    const total = watts.reduce((a, b) => a + b, 0);
    const mx = Math.max(...watts), avg = Math.round(total / n);
    const o = mkOptions(`${total} W`, [`${avg} W`, `${mx} W`, `${total * 2} W`, `${Math.round(total * 1.2)} W`]);
    const list = chosen.map((d, i) => `a ${watts[i]} W ${d}`).join(', ');
    return {
      q: `A rack will hold ${list}. What is the total connected power load?`,
      ...o,
      explanation: `Add every device: ${watts.join(' + ')} = ${total} W. Size the circuit and UPS from the total load, not the average or the single largest device.`
    };
  });

  // Cable length with service loops (10 ft each end)
  F.calc('ctsi-cable-service', 'CTS-I: Rough-In & First Fix', 'CTS-I', 1, () => {
    const run = R(25, 150), ans = run + 20;
    const o = mkOptions(`${ans} ft`, [`${run} ft`, `${run + 10} ft`, `${run * 2} ft`, `${run + 30} ft`]);
    return {
      q: `A cable run measures ${run} feet between endpoints. The specification requires a 10-foot service loop at each end. How much cable should be pulled?`,
      ...o,
      explanation: `Run length plus one 10-foot loop at each end: ${run} + 10 + 10 = ${ans} ft.`
    };
  });

  // Total dB loss = cable loss + connector losses
  F.calc('ctsi-db-loss', 'CTS-I: Testing & Calibration', 'CTS-I', 3, () => {
    const rate = pick([3.0, 4.0, 5.0]);          // dB per 100 ft
    const len = pick([200, 300]);                 // feet
    const nConn = pick([2, 4]);                   // connectors
    const cableLoss = rate * len / 100, connLoss = nConn * 0.5;
    const ans = cableLoss + connLoss;
    const o = mkOptions(`${fmt(ans, 1)} dB`, [
      `${fmt(cableLoss, 1)} dB`, `${fmt(connLoss, 1)} dB`,
      `${fmt(rate + connLoss, 1)} dB`, `${fmt(cableLoss + connLoss * 2, 1)} dB`
    ]);
    return {
      q: `A ${len}-foot cable run is rated at ${fmt(rate, 1)} dB loss per 100 feet and has ${nConn} connectors at 0.5 dB each. What is the total link loss?`,
      ...o,
      explanation: `Cable loss: ${fmt(rate, 1)} dB/100 ft x ${len / 100} = ${fmt(cableLoss, 1)} dB. Connector loss: ${nConn} x 0.5 = ${fmt(connLoss, 1)} dB. Total: ${fmt(cableLoss, 1)} + ${fmt(connLoss, 1)} = ${fmt(ans, 1)} dB.`
    };
  });

  /* ================= CTS-I concept fact tables ================= */
  F.concepts([
    {
      domain: 'CTS-I: Pre-Installation Activities', cert: 'CTS-I', diff: 1,
      facts: [
        { t: 'the site readiness check', d: 'Confirming the space is enclosed, powered, and clear of other trades before the AV crew mobilizes.' },
        { t: 'material staging', d: 'Receiving, inventorying, and securely storing equipment before installation begins.' },
        { t: 'the tool check', d: 'Verifying every technician has calibrated, working tools before heading to the site.' },
        { t: 'the drawing review', d: 'The crew walking the current drawings together so everyone builds from the same plan.' },
        { t: 'an RFI (request for information)', d: 'A formal question to the designer that resolves a conflict or ambiguity before work proceeds.' },
        { t: 'the PPE check', d: 'Confirming hard hats, glasses, gloves, and vests are on hand for the site requirements.' },
        { t: 'schedule coordination', d: 'Aligning the AV crew arrival with the general contractor construction sequence.' },
        { t: 'the pre-installation meeting', d: 'A kickoff with the GC and other trades confirming scope, access, and working hours.' }
      ]
    },
    {
      domain: 'CTS-I: Rough-In & First Fix', cert: 'CTS-I', diff: 2,
      facts: [
        { t: 'conduit runs', d: 'Pathways installed before drywall that protect AV cabling and allow future pulls.' },
        { t: 'pull strings', d: 'Lines left inside conduit so cables can be pulled through after the walls close.' },
        { t: 'cable labeling', d: 'Tagging both ends of every run with its circuit ID before ceilings and walls close up.' },
        { t: 'bend radius', d: 'The minimum curve a cable may take, typically 4 times its diameter for Cat6, which must not be exceeded.' },
        { t: 'fire-stopping', d: 'Sealing penetrations through fire-rated walls with approved materials after cables pass through.' },
        { t: 'back boxes', d: 'Enclosures roughed into walls that receive AV wall plates and connectors at trim-out.' },
        { t: 'cable separation', d: 'Keeping low-voltage AV cable away from mains power runs to avoid induced hum and interference.' },
        { t: 'mud rings', d: 'Open-backed wall brackets that position low-voltage plates flush with the finished drywall.' }
      ]
    },
    {
      domain: 'CTS-I: Rack Build & Wiring', cert: 'CTS-I', diff: 2,
      facts: [
        { t: 'lacing bars', d: 'Horizontal supports that carry cable bundles and relieve strain on rear-panel connectors.' },
        { t: 'power sequencing', d: 'Turning equipment on and off in a controlled order to avoid speaker thumps and inrush trips.' },
        { t: 'thermal management', d: 'Blanking panels, fans, and device spacing that keep rack temperatures within specification.' },
        { t: 'cable dressing', d: 'Routing and securing internal rack cabling so airflow and service access stay clear.' },
        { t: 'star grounding', d: 'Tying rack grounds to a single common point to prevent ground-loop hum between chassis.' },
        { t: 'service loops', d: 'Extra cable length left in the rack so devices can slide out for maintenance without disconnecting.' },
        { t: 'the rack grounding bus', d: 'The common copper bar bonding every chassis to the facility ground.' },
        { t: 'labeling both ends', d: 'Identifying every internal rack cable at both ends before the rack ships or goes live.' }
      ]
    },
    {
      domain: 'CTS-I: Mounting & Distribution', cert: 'CTS-I', diff: 2,
      facts: [
        { t: 'projector mounts', d: 'Ceiling or wall brackets rated for the projector weight plus the mount hardware itself.' },
        { t: 'display mounts', d: 'VESA-compatible brackets selected for the display size, weight, and wall construction.' },
        { t: 'structural ratings', d: 'The engineered load limits that every hung mount and rigging point must stay within.' },
        { t: 'safety cables', d: 'Secondary steel tethers that catch a hung device if the primary mount fails.' },
        { t: 'in-wall back boxes', d: 'Enclosures hiding power and signal connections behind flat-panel displays.' },
        { t: 'extension columns', d: 'Drop pipes that lower a projector mount from high ceilings to the correct throw height.' },
        { t: 'tilt and roll adjustment', d: 'Fine aiming controls on a projector mount for squaring the image to the screen.' },
        { t: 'seismic restraints', d: 'In earthquake zones, added bracing that keeps hung AV gear from swinging free.' }
      ]
    },
    {
      domain: 'CTS-I: Termination & Cable Standards', cert: 'CTS-I', diff: 3,
      facts: [
        { t: 'T568B wiring', d: 'The common pinout: white/orange, orange, white/green, blue, white/blue, green, white/brown, brown.' },
        { t: 'T568A wiring', d: 'The alternate pinout swapping the green and orange pairs; both ends of a run must match.' },
        { t: 'the XLR pinout', d: 'Pin 1 is ground/shield, pin 2 is hot (+), and pin 3 is cold (-) on a balanced audio connector.' },
        { t: 'crossover cables', d: 'Cables swapping transmit and receive pairs; most modern gear auto-senses with Auto-MDIX instead.' },
        { t: 'soldering XLR connectors', d: 'Tinning conductors and flowing solder into the cups without bridging adjacent pins.' },
        { t: 'shielded twisted pair', d: 'Foil or braid shielding that must be bonded, at least at one end, to actually reject noise.' },
        { t: 'crimp connectors', d: 'RJ45 plugs terminated with a crimp tool; conductors must reach the front face of the plug.' },
        { t: 'the 8P8C connector', d: 'The formal name for the 8-position plug commonly called RJ45 on twisted-pair Ethernet.' }
      ]
    },
    {
      domain: 'CTS-I: Configuration & Networking', cert: 'CTS-I', diff: 3,
      facts: [
        { t: 'static IP addressing', d: 'Manually assigning fixed addresses to AV devices so control systems always find them.' },
        { t: 'DHCP reservations', d: 'Binding a device MAC address to a fixed IP so it keeps the same address automatically.' },
        { t: 'Dante Controller routing', d: 'Subscribing receiver channels to transmitter flows to build the audio network.' },
        { t: 'device discovery', d: 'Protocols such as mDNS/Bonjour that let software find AV devices on the local subnet.' },
        { t: 'firmware matching', d: 'Keeping Dante devices and Controller on compatible firmware to avoid discovery failures.' },
        { t: 'subnet planning', d: 'Placing AV devices on their own subnet or VLAN to isolate them from office traffic.' },
        { t: 'PTP clocking', d: 'Precision Time Protocol synchronizing all Dante devices to one elected master clock.' },
        { t: 'IGMP snooping', d: 'The switch setting that keeps multicast AV streams off ports with no subscribed receivers.' }
      ]
    },
    {
      domain: 'CTS-I: Testing & Calibration', cert: 'CTS-I', diff: 2,
      facts: [
        { t: 'the multimeter', d: 'Measures voltage, continuity, and resistance for power and wiring verification.' },
        { t: 'the cable tester', d: 'Verifies wire-map, opens, and shorts on twisted-pair runs.' },
        { t: 'cable certification', d: 'Proves a run meets Cat6/Cat6A performance across the full frequency sweep.' },
        { t: 'the signal generator', d: 'Injects test tones or patterns to verify audio and video paths end to end.' },
        { t: 'the SPL meter', d: 'Measures sound pressure level to verify coverage and calibrate system levels.' },
        { t: 'the RTA', d: 'A real-time analyzer showing the frequency spectrum for EQ and tuning decisions.' },
        { t: 'pink noise', d: 'Equal energy per octave; the standard stimulus for tuning loudspeaker systems.' },
        { t: 'projector alignment', d: 'Focusing, zooming, and lens-shifting the image square onto the screen.' }
      ]
    },
    {
      domain: 'CTS-I: Closeout & Training', cert: 'CTS-I', diff: 1,
      facts: [
        { t: 'as-built documentation', d: 'Drawings and schedules updated to reflect what was actually installed.' },
        { t: 'client training', d: 'Teaching end users and administrators to operate the finished system.' },
        { t: 'the punch list walkthrough', d: 'Reviewing open items with the client before final sign-off.' },
        { t: 'warranty documentation', d: 'The written terms and support contact path for the post-installation period.' },
        { t: 'the spare parts handoff', d: 'Leaving labeled lamps, cables, and key spares with the client.' },
        { t: 'the password handover', d: 'Transferring admin credentials for DSPs, control processors, and network gear.' },
        { t: 'the final system backup', d: 'Saving DSP, control, and network configurations off the devices for recovery.' },
        { t: 'attic stock', d: 'Extra matching plates, connectors, and cable left for future moves and changes.' }
      ]
    },
    {
      domain: 'CTS-I: Jobsite Operations & Safety', cert: 'CTS-I', diff: 1,
      facts: [
        { t: 'PPE', d: 'Hard hats, safety glasses, gloves, and vests worn as the site requires.' },
        { t: 'ladder safety', d: 'The 3-point-contact rule: always keep three limbs in contact with the ladder.' },
        { t: 'lockout/tagout', d: 'Locking and tagging breakers off so stored energy cannot injure someone on a circuit.' },
        { t: 'fall protection', d: 'Harnesses and anchor points required when working above the site height threshold.' },
        { t: 'hard-hat areas', d: 'Zones where overhead work makes head protection mandatory for everyone.' },
        { t: 'tool tethering', d: 'Securing tools when working overhead so nothing falls on people below.' },
        { t: 'hot-work permits', d: 'Authorization required before welding, grinding, or soldering on site.' },
        { t: 'housekeeping', d: 'Keeping walkways clear of cable coils and debris to prevent trips and falls.' }
      ]
    }
  ], {
    stems: ['Which of the following best describes {term}?', 'In AV practice, {term} refers to which of the following?']
  });

  /* ================= CTS-I trick question tables ================= */
  F.tricks([
    {
      domain: 'CTS-I: Termination & Cable Standards', cert: 'CTS-I', diff: 3,
      items: [
        {
          topic: 'T568A vs. T568B',
          trueStmts: [
            'T568B is the most common commercial pinout: white/orange, orange, white/green, blue, white/blue, green, white/brown, brown.',
            'T568A swaps the green and orange pairs relative to T568B; both ends of one cable must use the same standard.',
            'T568A on one end and T568B on the other creates a crossover cable.'
          ],
          falseStmts: [
            'T568A and T568B are always identical, so the choice of standard never matters.',
            'In T568B, the brown pair always lands on pins 1 and 2.',
            'A cable wired to different standards on each end is never usable for any purpose.'
          ]
        },
        {
          topic: 'XLR pinout',
          trueStmts: [
            'On a balanced XLR, pin 1 is ground/shield, pin 2 is hot (+), and pin 3 is cold (-).',
            'The shield should run continuously from chassis to chassis for proper noise rejection.',
            'Swapping pins 2 and 3 inverts the polarity of the audio signal.'
          ],
          falseStmts: [
            'XLR pin 1 always carries the hot audio signal while pin 2 is the shield.',
            'Pins 2 and 3 are never differentiated because polarity does not exist on XLR.',
            'Twisted pairs alone reject all noise, so balanced XLR cables never need a shield.'
          ]
        }
      ]
    },
    {
      domain: 'CTS-I: Jobsite Operations & Safety', cert: 'CTS-I', diff: 2,
      items: [
        {
          topic: 'PPE',
          trueStmts: [
            'Hard hats are required where overhead work creates a falling-object hazard.',
            'Safety glasses protect against debris when drilling or pulling cable overhead.',
            'The site safety plan decides which PPE is mandatory, not personal preference.'
          ],
          falseStmts: [
            'PPE is always optional and safety rules never apply to experienced technicians.',
            'Hard hats are never needed indoors under any circumstances.',
            'Safety glasses only ever block sunlight and are useless indoors.'
          ]
        },
        {
          topic: 'ladder and electrical safety',
          trueStmts: [
            'Maintain three points of contact on a ladder at all times.',
            'Lockout/tagout keeps a circuit de-energized while someone works on it.',
            'Fiberglass ladders are preferred near electrical work because they do not conduct.'
          ],
          falseStmts: [
            'It is always safe to stand on the top rung of a stepladder to reach higher.',
            'Lockout/tagout is never needed because breakers always stay off by themselves.',
            'Metal ladders are always the safest choice around live electrical panels.'
          ]
        }
      ]
    }
  ]);
})(FORGE);
