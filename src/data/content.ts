/**
 * content.ts — SINGLE SOURCE OF TRUTH for all portfolio text and data.
 *
 * Edit this file to update any copy without touching layout components.
 * Comments mark which tier each skill belongs to so you can reclassify them.
 *
 * NOTE: showPhone is false — phone number is intentionally NOT published.
 * NOTE: All Protection Lab notes are marked "draftReview: true" — review
 *       every line before an interview. You must be able to defend each claim.
 */

// ---------------------------------------------------------------------------
// Personal details
// ---------------------------------------------------------------------------
export const person = {
  name: "Arvind S A",
  email: "arvindsa2005@gmail.com",
  /** Set to true and add phone to publish it */
  showPhone: false,
  phone: "", // do not publish until explicitly enabled
  linkedIn: "https://www.linkedin.com/in/arvind-sa-962252328",
  github: "https://github.com/arvindsa2005",
  resumeFile: "/resume/ARVIND_SA_EEE_Hitachi_Energy.docx",
  resumeLabel: "Download Resume",
  positioning:
    "Electrical engineer focused on substation protection and control — with software skills that automate engineering work.",
  introParagraph:
    "Final-year B.E. EEE student at Velammal College of Engineering and Technology, Madurai (class of 2026). My core interest is secondary design for high-voltage substations — protection philosophy, breaker control logic, trip matrices and changeover planning. I have built two desk-level engineering studies to practice those skills, verified with automated Python checks. On the side, I use software to speed up the documentation side of engineering work.",
};

// ---------------------------------------------------------------------------
// Hero credential cards — exact numbers from project READMEs
// ---------------------------------------------------------------------------
export const credentialCards = [
  {
    id: "edu",
    title: "B.E. EEE",
    value: "CGPA 8.54",
    sub: "Velammal College of Engineering and Technology, Madurai · 2022–2026",
  },
  {
    id: "bay132",
    title: "132 kV Bay Model",
    value: "64 / 64",
    sub: "Python checks passed locally · Revision B · 21 Oct 2026",
  },
  {
    id: "retrofit",
    title: "Retrofit Desk Study",
    value: "67 wiring records",
    sub: "12 changeover stages · 11 hazards · 0 errors, 6 warnings (pending verification)",
  },
  {
    id: "software",
    title: "Software Side",
    value: "AI & SAP",
    sub: "AI agents, enterprise portals, full-stack finance app · 2 Microsoft certs",
  },
];

// ---------------------------------------------------------------------------
// Skills
// ---------------------------------------------------------------------------

/**
 * TIER 1 — "Applied in my projects"
 * Move a skill to tier2 if it was only studied, not used in deliverables.
 */
export const tier1Skills = [
  // --- Protection and Control Design ---
  {
    group: "Protection & Control Design",
    items: [
      "Protection philosophy and function selection",
      "Trip matrix and breaker control logic",
      "Switching interlocks and closing permissives",
      "Breaker-failure (50BF/86BF) logic and timers",
      "Trip-circuit supervision (TCS)",
      "Distance protection (21) — static mho",
      "Overcurrent and earth-fault backup (51/51N)",
      "VT supervision — blocking distance, retaining OC backup",
      "Signal lists and I/O allocation",
      "Cable schedules and wiring change registers",
      "DXF schematic drafting and automated drawing generation",
      "Excel schedule generation (Trip Matrix, SCADA Signals, BoM)",
    ],
  },
  // --- Simulation ---
  {
    group: "Simulation & Modelling",
    items: [
      "Python (phasor-based protection simulation)",
      "MATLAB / Simulink",
      "Simscape Electrical",
      "Embedded C / C++",
      "Arduino Uno prototyping",
    ],
  },
  // --- Documentation & Automation ---
  {
    group: "Documentation & Automation",
    items: [
      "Automated Python checking and validation suites",
      "Changeover sequencing with hold points",
      "Risk register preparation (qualitative)",
      "Design assumptions and open-items tracking",
      "Engineering-hour estimation concepts",
    ],
  },
];

/**
 * TIER 2 — "Working knowledge / learning"
 * These are tools studied or partially used; not yet exercised end-to-end.
 * Move to tier1 once you have a deliverable that uses them.
 */
export const tier2Skills = [
  // --- Relay / IED Toolchains ---
  {
    group: "Relay & IED Toolchains",
    items: [
      "PCM600 (ABB/Hitachi Energy relay configuration tool)",
      "DIGSI (Siemens relay configuration)",
      "MiCOM S1 Agile",
      "Omicron CMC 356 / CMC 256 secondary injection",
    ],
  },
  // --- Substation Systems ---
  {
    group: "Substation Systems",
    items: [
      "Structured Text (IEC 61131-3)",
      "Zenon SCADA / Micro SCADA concepts",
      "ABB Compact Control Builder",
      "SCADA monitoring interfaces",
      "AIS / GIS secondary design concepts",
      "Teleprotection interfaces",
    ],
  },
  // --- CAD Tools ---
  {
    group: "CAD Tools (learning)",
    items: [
      "AutoCAD (basic)",
      "Zuken E3 (learning)",
      "Elecdes (learning)",
    ],
  },
  // --- Standards ---
  {
    group: "Standards Awareness",
    items: [
      "IEC 60255 (protection relays — context reading)",
      "IEC 61850 (substation communication — introductory)",
      "Networking and cybersecurity basics",
    ],
  },
];

// ---------------------------------------------------------------------------
// IT Skills (Section 07)
// ---------------------------------------------------------------------------
export const itSkills = [
  {
    group: "AI & LLM",
    items: [
      "LLMs, RAG, Prompt Engineering",
      "LangChain, LangGraph, LlamaIndex",
      "Agentic AI, multi-agent systems",
      "Google Gemini API",
    ],
  },
  {
    group: "Backend & APIs",
    items: [
      "Python, FastAPI",
      "Java (Advanced), Spring Boot",
      "RESTful APIs, JWT authentication",
      "SAP OData / RFC Web Services",
      "PostgreSQL, Supabase",
    ],
  },
  {
    group: "Frontend & UI",
    items: [
      "Angular (TypeScript)",
      "Flutter / Dart",
      "Gradio, Streamlit",
      "Kotlin (Android SMS processing)",
    ],
  },
  {
    group: "Tools & Practices",
    items: [
      "Git, GitHub",
      "SQL",
      "API integration and debugging",
      "Software development lifecycle",
    ],
  },
];

// ---------------------------------------------------------------------------
// Electrical Projects (Section 03 — 70%)
// ---------------------------------------------------------------------------
export const electricalProjects = [
  // --- 132 kV Bay ---
  {
    id: "bay132",
    title: "132 kV Transmission Line Bay — Protection and Control",
    status: "In Progress" as const,
    statusNote: "Desk study · Revision B · 21 Oct 2026",
    tags: ["Python", "Protection Logic", "DXF Schematics", "Phasor Simulation"],
    summary:
      "A functional protection and breaker-control model for a single outgoing 132 kV line bay. Implements distance protection (21), overcurrent and earth-fault backup (51/51N), VT supervision, breaker-failure (50BF / 86BF), trip-circuit supervision (TCS) and full closing logic. Verified by 64/64 Python checks run locally.",
    designBasis: [
      { param: "System", value: "132 kV line-to-line, 50 Hz, single bus" },
      { param: "Line", value: "80 km; Z1 = 8 + j32 Ω; Z0 = 24 + j96 Ω" },
      { param: "Instrument ratios", value: "CT 600/1 A; VT 132 kV / 110 V L-L" },
      { param: "Zone 1", value: "6.4 + j25.6 Ω primary; 20 ms" },
      { param: "Zone 2", value: "9.6 + j38.4 Ω primary; 300 ms" },
      { param: "Phase / residual backup", value: "720 A / 500 ms; 120 A residual / 400 ms" },
      { param: "BF supervision", value: "Phase current ≥ 60 A OR closed indication" },
      { param: "Breaker / control supply", value: "60 ms assumed opening; two coils; 110 V DC" },
    ],
    implementedFunctions: [
      { fn: "21 distance", behaviour: "AB, BC, CA, AG, BG, CG impedance loops; forward static mho zones" },
      { fn: "51 / 51N", behaviour: "Definite-time phase and residual overcurrent backup" },
      { fn: "VT supervision", behaviour: "Blocks distance while current-only backup remains available" },
      { fn: "50BF", behaviour: "TC2 retrip at 100 ms and external backup at 200 ms after protection trip" },
      { fn: "86BF and reset", behaviour: "Latched backup lockout; supervised manual reset with event history" },
      { fn: "TCS", behaviour: "Unhealthy-input alarm after 100 ms; both channel health inputs inhibit closing" },
      { fn: "Closing", behaviour: "Local/remote source, position/mechanism/DC/25 interlocks, edge qualification" },
      { fn: "Operator OPEN", behaviour: "Selected-source demand held until open confirmed; overrides closing; no BF start" },
    ],
    /** Breaker-failure timeline scenarios — exact ms from README */
    bfScenarios: [
      { label: "50% fault — healthy breaker", tc1: 120, tc2: null, open: 180, backup: null },
      { label: "90% fault — healthy breaker", tc1: 400, tc2: null, open: 460, backup: null },
      { label: "130% fault — phase backup", tc1: 600, tc2: null, open: 660, backup: null },
      { label: "TC1 failure — TC2 healthy", tc1: 120, tc2: 220, open: 280, backup: null },
      { label: "Mechanism failure — bus backup", tc1: 120, tc2: 220, open: null, backup: 320 },
    ],
    scopeAndLimitations: [
      "One local bay, one IED, common DC supply — no independent Main 2.",
      "Ideal phasors and fixed 60 ms opening delay — no EMT solver, CT saturation or waveform dynamics.",
      "Static mho excludes zero impedance. No memory polarisation, load encroachment or power-swing blocking.",
      "51/51N are non-directional; a reverse fault above pickup can trip.",
      "MATLAB/Simulink, AutoCAD, PCM600, hardware injection, FAT, SAT and site commissioning have not been executed.",
      "CI workflow is configured for GitHub; it has not been run on GitHub here.",
    ],
    aiNote:
      "Development and documentation were AI-assisted. Review and understand the model before presenting it in an interview.",
    githubUrl: null, // private / not yet published
    reportLabel: "Engineering Report (PDF, docs folder)",
  },

  // --- Feeder Retrofit ---
  {
    id: "retrofit",
    title: "Feeder Protection Panel Retrofit — Electromechanical to Numerical",
    status: "Completed" as const,
    statusNote: "Desk study · Revision C01 · 21 Oct 2026 · Illustrative only — not for construction",
    tags: ["DXF Schematics", "Python", "Excel Schedules", "Risk Register"],
    summary:
      "A complete conceptual design package for upgrading a 132 kV line feeder panel from electromechanical relays to a numerical IED. Covers function mapping, retained physical trip and lockout hardware, measurement and control interfaces, six schedule sheets, a 12-stage changeover sequence with hold points, and a qualitative risk register. Validated by automated Python checks.",
    deliverables: [
      "67 wiring records (retained, removed, modified and new cores)",
      "8 trip-matrix entries",
      "15 SCADA points",
      "25 material / interface items (BoM)",
      "15 assumptions, 14 open items",
      "12 changeover stages",
      "11 qualitative risk hazards",
      "4 editable DXF drawings + matching figures",
    ],
    validationResults: {
      workbook: "0 errors, 6 warnings, 3 information items",
      checkerSuite: "16/16 challenge tests passed (13 defective-workbook + 3 positive cases)",
      dxfAudit: "4 drawings, 0 audit errors, 0 fixes",
    },
    designPrinciples: [
      {
        heading: "Why physical lockout and trip hardware may remain",
        body: "After a numerical upgrade the existing auxiliary trip and lockout relays (e.g., 86) often stay because they provide proven, independent trip-circuit isolation, visible flag indication for safety, and a physical interlock that panel operators can physically verify. The numerical relay replaces the measuring and decision element; the trip and lockout chain is retained pending a suitability check.",
      },
      {
        heading: "CT shorting alone does not make live-panel work safe",
        body: "Shorting the CT secondary prevents an open-circuit overvoltage hazard during core-by-core disconnection, but it does not remove the DC tripping supply from the panel, the bus VT hazard, or the need for an authorised outage and safe-work boundary. It is one step in a controlled switching procedure, not a standalone safety clearance.",
      },
    ],
    scopeAndLimitations: [
      "No live equipment has been inspected, tested, commissioned or approved.",
      "Supplied ratings are exercise inputs, not site measurements.",
      "Checker results establish document and data relationships only — not protection performance, electrical correctness or standards compliance.",
      "The numerical relay is a functional requirement, not a selected or proven product.",
      "Real work requires verified site records, approved settings, authorised outage plans and independent design review.",
    ],
    githubUrl: null,
  },

  // --- TLMS ---
  {
    id: "tlms",
    title: "Three-Phase Transmission Line Fault Analysis & Embedded Monitoring",
    status: "Completed" as const,
    statusNote: "Academic project",
    tags: ["MATLAB/Simulink", "Simscape Electrical", "Arduino Uno", "Embedded C/C++"],
    summary:
      "Modelled a three-phase transmission line in MATLAB / Simulink (Simscape Electrical) and analysed voltage, current, active and reactive power waveforms under normal and fault conditions. Built a low-voltage hardware prototype using an Arduino Uno, sensors and relay hardware for threshold-based fault indication and serial diagnostics. Compared line-to-ground and line-to-line fault readings.",
    highlights: [
      "Simulated normal load and fault transients using Simscape Electrical blocks",
      "Analysed current and voltage changes for LG and LL faults",
      "Embedded C firmware for fault threshold comparison and relay control",
      "Serial diagnostics for real-time monitoring on the hardware prototype",
    ],
    githubUrl: null,
  },
];

// --- Internship ---
export const internship = {
  id: "internship",
  company: "Energy Tec, Madurai",
  role: "Electrical Engineering Intern",
  duration: "2 months",
  bullets: [
    "Exposure to manufacturing of electrical panels and 11 kV–33 kV CTs and PTs — winding, insulation, vacuum oil filling and assembly.",
    "Practised panel wiring, wire routing, cable management and termination for substation control panels.",
    "Learned testing, quality control and inspection procedures per IEC/IS standards; studied electrical schematics, substation equipment and electrical safety practices.",
  ],
};

// ---------------------------------------------------------------------------
// Protection Lab notes (Section 04)
// ---------------------------------------------------------------------------
/**
 * draftReview: true — owner MUST review every sentence before any interview.
 * These notes are built from project file content; verify them against your
 * deliverables and the underlying technical references before citing them.
 */
export const protectionLabNotes = [
  {
    id: "pl-bf",
    question: "Why does breaker failure use a retrip before escalating to bus backup?",
    body: "When a protection trip is issued and the breaker fails to open, the first response is to re-energise the trip coil via the second trip coil (TC2) — a retrip — at 100 ms after the protection trip in this model. Only if the breaker remains closed at 200 ms is an external bus backup signal issued. The reason is that many breaker failures are coil or control-circuit faults, not mechanical failures. A retrip on the second coil resolves these cases without disturbing the busbar. Escalating immediately to bus backup would unnecessarily isolate all feeders on the bus, causing a wider outage than necessary.",
    draftReview: true,
    source: "132 kV Bay README — 50BF function table, BF scenario timing table",
  },
  {
    id: "pl-vtsup",
    question: "Why does VT supervision block distance but leave overcurrent backup active?",
    body: "Distance protection (21) measures the apparent impedance of the fault loop from the voltage and current phasors. If the VT fuse blows or the VT secondary circuit is open, the relay sees a collapsed voltage — the calculated impedance falls into Zone 1 even for a healthy line, causing a false trip. VT supervision detects this condition (current present, voltage collapsed) and blocks the distance element. Overcurrent backup (51/51N) uses current magnitude only; it does not need voltage measurement, so it remains armed and provides a fallback protection path while the VT fault is investigated.",
    draftReview: true,
    source: "132 kV Bay README — VT supervision function table entry",
  },
  {
    id: "pl-ct",
    question: "Why are CT secondaries shorted before disconnecting them from a relay panel?",
    body: "A current transformer secondary must never be open-circuited while the primary is energised. The CT is a current-source device; with the secondary open its full magnetising voltage appears across the open terminals — potentially hundreds of volts — which can arc, destroy the CT insulation and injure personnel. Shorting the secondary with an approved shorting link before breaking any terminal connection ensures the secondary current has a low-impedance return path at all times. This is a fundamental safe-working requirement, not an optional precaution, and it is the first step in any CT secondary disconnection procedure.",
    draftReview: true,
    source: "Retrofit README — CT shorting design principle",
  },
  {
    id: "pl-lockout",
    question: "Why might physical lockout relays remain after fitting a numerical IED?",
    body: "A numerical relay replaces the measuring and decision functions of older electromechanical relays — the distance, overcurrent and earth-fault elements. But the trip and lockout chain often serves a different purpose: physical flag indication that an authorised operator can see and reset, a proven mechanical interlock for safe isolation of the breaker trip coil, and an independent trip-circuit path that does not depend on the IED's processor or firmware. Replacing these with software equivalents requires a careful suitability assessment. Until that is complete, retaining the physical auxiliary trip (e.g., relay 86) is the conservative and safer choice.",
    draftReview: true,
    source: "Retrofit README — design principles; 'physical lockout' note",
  },
  {
    id: "pl-tripmatrix",
    question: "What is a trip matrix and what does it actually control?",
    body: "A trip matrix is a tabular document that maps every protection function output to every trip and control action it must initiate. Each row is a protection signal (e.g., Zone 1 trip, earth-fault trip, 86BF bus backup received); each column is an output (e.g., TC1, TC2, main breaker, interconnected breakers, SCADA alarm). A cell contains a mark if that function drives that output. Engineers use it during design to ensure every fault is covered, during commissioning to verify relay settings and wiring, and during maintenance to trace the consequence of any single protection operation. It is one of the most important secondary-design documents because it is the authoritative statement of what the protection scheme does.",
    draftReview: true,
    source: "Retrofit README — schedule contents; 132 kV Bay README — implemented functions",
  },
  {
    id: "pl-changeover",
    question: "Why does a relay changeover plan define hold points?",
    body: "A hold point is a stage in the changeover sequence where work must stop and a defined check must be completed and signed off before the next stage begins. Without hold points, a team working under time pressure might proceed through multiple steps in sequence and reach a state where the feeder has no protection — for example, the old relay removed and the new IED not yet energised. Hold points enforce that protection is independently adequate at every intermediate state. The retrofit study plan defines 12 changeover stages; protection adequacy must be demonstrated at each stage boundary, and if it cannot be demonstrated, work stops.",
    draftReview: true,
    source: "Retrofit README — changeover plan; 12 stages; protection adequacy note",
  },
];

// ---------------------------------------------------------------------------
// Technical Journey (Section 05)
// ---------------------------------------------------------------------------
/**
 * draftReview: true — review reflections for accuracy before using in interviews.
 */
export const journey = [
  {
    id: "j1",
    stage: 1,
    title: "Electrical Foundations",
    period: "2022–2026",
    body: "B.E. EEE at Velammal College of Engineering and Technology, Madurai. Coursework covered power systems, protection, machines, control systems and electronics. CGPA 8.54.",
    takeaway: "Built the theoretical foundation for understanding why protection schemes work the way they do.",
    draftReview: true,
  },
  {
    id: "j2",
    stage: 2,
    title: "Industry Exposure",
    period: "Internship · Energy Tec, Madurai",
    body: "2-month internship: panel manufacturing, CT/PT winding and assembly for 11–33 kV applications, substation control panel wiring, and IEC/IS testing and inspection.",
    takeaway: "Understood what physical equipment looks like and how wiring errors are caught before energisation.",
    draftReview: true,
  },
  {
    id: "j3",
    stage: 3,
    title: "Protection & Control Design",
    period: "Projects · 2025–2026",
    body: "Built a desk-level 132 kV bay model with distance, BF, TCS and closing logic verified by 64 Python checks. Prepared a complete retrofit study package for a feeder panel upgrade, including schedules, drawings and risk register.",
    takeaway: "Learned that engineering rigour is about closing every open item and being honest about every assumption.",
    draftReview: true,
  },
  {
    id: "j4",
    stage: 4,
    title: "Software & AI",
    period: "KaarTech internship · AI projects",
    body: "SAP intern at KaarTech building enterprise portals. Built AI Resume Analyzer, AI-Enabled Customer Portal and a full-stack finance app. Two Microsoft certifications in Agentic AI. Software is most useful when it automates engineering documentation — schedules, drawings, validation checks.",
    takeaway: "Software accelerates engineering work when it is built to serve the engineer, not replace the thinking.",
    draftReview: true,
  },
  {
    id: "j5",
    stage: 5,
    title: "Next: Control, Protection & Power Conversion",
    period: "Targeting 2026",
    body: "Seeking a graduate role in control and protection design or power conversion / substation automation engineering at Hitachi Energy. Ready to work under supervision, learn vendor toolchains (PCM600, Zenon, Compact Control Builder) and contribute to real engineering deliverables from day one.",
    takeaway: "The goal is to do real engineering work that keeps the grid reliable and safe.",
    draftReview: true,
  },
];

// ---------------------------------------------------------------------------
// About (Section 06)
// ---------------------------------------------------------------------------
export const about = {
  paragraphs: [
    "I am a final-year Electrical and Electronics Engineering student with a genuine interest in secondary substation design — protection philosophy, breaker control sequences, changeover planning and the documentation that ties a scheme together. I chose to build two engineering studies rather than summarise theory, because I believe the fastest way to understand a technical discipline is to attempt its deliverables and discover what you do not yet know.",
    "Software is a force multiplier for an engineer, not a separate career track. Python lets me run hundreds of automated checks on a protection model in seconds; it generates DXF drawings and Excel schedules from a single data file; it catches inconsistencies that a manual review would miss. That is why I spent time on it — not to become a software developer, but to make my engineering work more verifiable and faster to iterate.",
    "I am a fresher. I have no years of industry experience, no approved designs and no site commissioning credits. What I have is a clear picture of the gap between a desk study and a real project, a disciplined habit of stating assumptions and limitations honestly, and a strong motivation to close that gap under the supervision of experienced engineers at a company like Hitachi Energy.",
  ],
  educationCards: [
    {
      institution: "Velammal College of Engineering and Technology",
      location: "Madurai",
      degree: "B.E., Electrical and Electronics Engineering",
      period: "2022 – 2026",
      grade: "CGPA: 8.54",
    },
    {
      institution: "Krishnammal Ramasubbaiyer School",
      location: "Madurai",
      degree: "Schooling — Biology Stream",
      period: "2022",
      grade: "SSLC: 88.6% · HSC: 89.4%",
    },
  ],
};

// ---------------------------------------------------------------------------
// Software & AI projects (Section 07 — 30%)
// ---------------------------------------------------------------------------
export const itInternship = {
  company: "KaarTech",
  role: "SAP Intern",
  duration: "Internship",
  bullets: [
    "Developed enterprise web portals using Angular and integrated backend services through SAP OData APIs.",
    "Worked with API-based data exchange, JSON responses, debugging and backend integration workflows.",
    "Applied software development lifecycle practices including requirement analysis, testing and issue resolution.",
    "Gained exposure to enterprise application architecture and cross-functional business processes.",
  ],
};

export const itProjects = [
  {
    id: "ai-resume",
    title: "AI Resume Analyzer",
    tags: ["Python", "FastAPI", "Google Gemini API", "NLP", "Streamlit"],
    summary:
      "ATS-style resume scoring system using NLP and prompt engineering. Compares a resume against a job description, identifies missing keywords and generates AI-driven improvement suggestions via the Gemini API. Interactive web interface built with Streamlit.",
    githubUrl: null, // not found on GitHub — show as private/local
    status: "Built" as const,
  },
  {
    id: "customer-portal",
    title: "AI-Enabled Customer Portal (SAP)",
    tags: ["Angular", "Python", "FastAPI", "SAP OData", "Google Gemini API"],
    summary:
      "AI agent that understands customer requests and dynamically selects enterprise tools for order tracking, invoice lookup and profile information. SAP OData services integrated with FastAPI backend. Tool-based orchestration routes user intent to the correct backend service.",
    githubUrl: "https://github.com/arvindsa2005/customer-portal-sap",
    status: "Built" as const,
  },
  {
    id: "vendor-portal",
    title: "SAP Vendor Portal",
    tags: ["Angular", "SAP ABAP", "HTML", "RFC Web Services"],
    summary:
      "Full-stack SAP Vendor Portal enabling vendors to access RFQs, purchase orders, goods receipts, invoices, payment details and financial transactions through seamless SAP integration.",
    githubUrl: "https://github.com/arvindsa2005/Vendor-portal-SAP",
    status: "Built" as const,
  },
  {
    id: "txn-manager",
    title: "Transaction Manager — AI-Powered Finance App",
    tags: ["Flutter", "Dart", "FastAPI", "PostgreSQL", "Supabase", "JWT", "Kotlin"],
    summary:
      "Full-stack finance application using Flutter and FastAPI. Scalable REST APIs with PostgreSQL/Supabase and JWT authentication. Kotlin-based SMS processing automatically extracts, categorises and processes banking transactions.",
    githubUrl: null,
    status: "Built" as const,
  },
];

// Certifications — from IT resume only
export const certifications = [
  {
    id: "cert-ab100",
    title: "Agentic AI Business Solutions Architect (AB-100)",
    issuer: "Microsoft",
    credentialUrl:
      "https://learn.microsoft.com/api/credentials/share/en-us/ArvindSA-2318/274C550AA06D08F6?sharingId",
    summary:
      "Agentic AI solution architecture, Generative AI, multi-agent systems, Microsoft Foundry, Azure AI services, Copilot Studio, MCP, Agent2Agent, Responsible AI, security, governance and AI application lifecycle.",
  },
  {
    id: "cert-ab620",
    title: "Designing and Building Integrated AI Agent Solutions in Copilot Studio (AB-620)",
    issuer: "Microsoft",
    credentialUrl:
      "https://learn.microsoft.com/api/credentials/share/en-us/ArvindSA-2318/FB34B4BD2E0B0FCF?sharingId",
    summary:
      "AI agent development, Microsoft Copilot Studio, Microsoft Foundry, Generative AI, RAG, prompt engineering, REST APIs, MCP, agent integration, testing, monitoring and ALM.",
  },
];

// One-line bridge sentence for Section 07
export const itBridgeLine =
  "Software lets me automate schedules, drawings and checks for engineering work — turning hours of manual cross-checking into a repeatable, auditable process.";

// ---------------------------------------------------------------------------
// GitHub repos (Section 08) — static fallback
// Sourced from GitHub API on 21 Oct 2026; loaded live at runtime with fallback.
// Skip: Rag-notes (fork, no description)
// ---------------------------------------------------------------------------
export const githubFallbackRepos = [
  {
    name: "customer-portal-sap",
    description:
      "SAP Customer Portal — Angular, SAP ABAP, RFC Web Services. Real-time access to sales orders, deliveries, invoices, payments and aging reports.",
    language: "TypeScript",
    url: "https://github.com/arvindsa2005/customer-portal-sap",
    classification: "IT" as const,
    updatedAt: "2026-06-21",
  },
  {
    name: "Vendor-portal-SAP",
    description:
      "Full-stack SAP Vendor Portal — Angular and SAP ABAP. Vendor access to RFQs, purchase orders, goods receipts, invoices and payment details.",
    language: "HTML / TypeScript",
    url: "https://github.com/arvindsa2005/Vendor-portal-SAP",
    classification: "IT" as const,
    updatedAt: "2026-06-22",
  },
  {
    name: "Turf-Reservation",
    description: "Sports turf booking system (Java). Minimal demo project.",
    language: "Java",
    url: "https://github.com/arvindsa2005/Turf-Reservation",
    classification: "IT" as const,
    updatedAt: "2025-05-11",
  },
];

// ---------------------------------------------------------------------------
// SEO / meta
// ---------------------------------------------------------------------------
export const seo = {
  title: "Arvind S A — Protection & Control Engineer | Portfolio",
  description:
    "Final-year EEE student (2026) with desk-level experience in 132 kV bay protection, feeder panel retrofit design and automated engineering checks. Seeking graduate roles in control, protection and power conversion engineering.",
  ogImage: "/og-image.png",
  canonicalUrl: "https://arvindsa.dev", // update once deployed
};
