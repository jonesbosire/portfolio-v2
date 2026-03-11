export interface ProgramImpact {
  value: string;
  label: string;
}

export interface Program {
  slug: string;
  title: string;
  tag: string;
  organization: string;
  role: string;
  period: string;
  location: string;
  category: "entrepreneurship" | "tech" | "training" | "leadership" | "sme" | "capacity-building";
  summary: string;
  about: string[];
  impact: ProgramImpact[];
  highlights: string[];
  partners?: string[];
  status: "active" | "completed";
  image?: string;    // thumbnail used on cards / fallback
  images?: string[]; // slider images on the detail page
}

// ─────────────────────────────────────────────────────────────
// ADD NEW PROGRAMS HERE — copy one of the blocks below and fill
// it in. The slug becomes the URL: /programs/your-slug
// ─────────────────────────────────────────────────────────────

export const programs: Program[] = [
  {
    slug: "iyba-seed-accelerator",
    title: "IYBA-SEED Regional Expansion",
    tag: "Green Entrepreneurship",
    organization: "GIZ / ENABEL · Bond'Innov · EldoHub",
    role: "BDS Provider Representative — EldoHub",
    period: "2025 — 2026",
    location: "Kenya · Senegal · Togo · Benin · South Africa",
    category: "capacity-building",
    summary:
      "EldoHub is one of six BDS providers selected across five African countries to deliver the IYBA-SEED Regional Expansion Programme — an 18-month initiative empowering green industry entrepreneurs to expand into regional markets. I represent EldoHub in this programme, was at the onboarding in Dakar, and am certified across the full SEED Expansion Box Trainer of Trainers series.",
    about: [
      "IYBA-SEED Regional Expansion is a GIZ and ENABEL-backed programme that selected 6 Business Development Services (BDS) providers across Kenya, Senegal, Togo, Benin, and South Africa to build a continental capacity for supporting green entrepreneurs into regional markets.",
      "EldoHub is the Kenyan BDS provider in this programme, alongside Innov'up, Impact Plus Consulting Group, Nakuru Box, Propella (South Africa), and ADEPME Senegal. I represent EldoHub and attended the onboarding event in Dakar, Senegal — a week of intensive programme design, peer learning, and cross-border collaboration.",
      "The programme runs in 4 phases over 18 months: programme design and launch, BDS capacity building using the SEED Expansion Box (SEB), a pilot support programme for 20–22 green entrepreneurs, and final evaluation. The SEB itself is a digital toolkit with 5 ready-to-use training sessions, 12 practical tools, and 12 resource documents — all built around helping green startups expand regionally.",
      "By the end of the programme, EldoHub should have new structured partnerships, a proven expansion service offering, and a cohort of Kenyan green startups who have made measurable progress in regional markets.",
    ],
    impact: [
      { value: "5", label: "Countries in the programme" },
      { value: "6", label: "BDS providers selected" },
      { value: "20–22", label: "Green startups to be supported" },
      { value: "18 months", label: "Programme duration" },
    ],
    highlights: [
      "Selected as EldoHub's representative in the IYBA-SEED Regional Expansion programme",
      "Attended the onboarding event in Dakar, Senegal — programme design and peer learning with 5 other BDS providers",
      "Certified under the full SEED Expansion Box (SEB) Trainer of Trainers series",
      "Responsible for selecting and supporting a cohort of Kenyan green industry entrepreneurs",
      "Building EldoHub's structured expansion service offering around the SEB tools",
      "Participating in cross-border collaboration and a pan-African Demo Day for top BDS providers",
      "Working toward MoUs with investors, regional partners, and green economy stakeholders",
    ],
    partners: ["GIZ", "ENABEL", "Bond'Innov", "EldoHub", "ADEPME Senegal", "Innov'up", "Propella"],
    status: "active",
    image: "/images/programs/iyba-seed-1.jpg",
    images: [
      "/images/programs/iyba-seed-1.jpg",
      "/images/programs/iyba-seed-2.jpg",
    ],
  },

  {
    slug: "seade-aiot-accelerator",
    title: "SEADE AIoT Route to Market Accelerator",
    tag: "Tech & Innovation",
    organization: "EU-Africa SEADE Programme · EldoHub",
    role: "Project Lead",
    period: "2025",
    location: "Eldoret, Kenya",
    category: "tech",
    summary:
      "Led the AIoT Route to Market Accelerator at EldoHub under the EU-Africa SEADE programme. The programme targets green-tech AIoT startups and helps them get their products to actual markets — not just proof-of-concept demos. Guided MSMEs and innovators through operations, productivity, and scale for climate-smart solutions.",
    about: [
      "The EU-Africa SEADE programme targets AIoT startups working at the intersection of hardware, software, and sustainability — and the Route to Market Accelerator at EldoHub was designed specifically to help those startups cross the gap between prototype and actual sales.",
      "I managed three delivery tracks simultaneously: Digital Youth Training, Soft-Landing Missions, and Learning Expeditions. The work required coordinating directly with WAZIUP e.V. and Addis Ababa University to align cross-regional goals between Africa and Europe.",
      "This wasn't a coordination-only role. I was in the room for technical conversations, running mentorship and workshops focused specifically on women and youth building in the AIoT space, and responsible for making sure the programme actually landed — not just that the reports were filed.",
    ],
    impact: [
      { value: "3", label: "Delivery tracks managed" },
      { value: "2", label: "International partners" },
      { value: "Women & youth", label: "Focus cohorts" },
    ],
    highlights: [
      "Managed Digital Youth Training, Soft-Landing Missions, and Learning Expeditions tracks",
      "Coordinated directly with WAZIUP e.V. (Germany) and Addis Ababa University",
      "Ran mentorship focused on women and youth in AIoT and green-tech",
      "Guided startups from prototype stage through to market entry strategy",
      "Aligned cross-regional delivery goals between Africa and European partners",
    ],
    partners: ["EldoHub", "WAZIUP e.V.", "Addis Ababa University", "EU SEADE Programme"],
    status: "active",
    image: "/images/programs/seade-1.jpg",
  },

  {
    slug: "inclusive-techrun",
    title: "Inclusive TechRun",
    tag: "Sports & Assistive Tech",
    organization: "EldoHub X Uk Kenya Tech Hub X Enda Sports Wear",
    role: "Organizer & Coordinator Systems Lead",
    period: "March 2026",
    location: "Ulinzi Sports Complex, Nairobi",
    category: "tech",
    summary:
      "Coordinated and delivered the first Inclusive TechRun at Ulinzi Sports Complex — a 200+ athlete mixed-ability sports event integrating assistive technology. Built the athlete check-in and bib assignment system from scratch, led a coordination team on the ground, and managed logistics across multiple workstreams running at the same time.",
    about: [
      "The Inclusive TechRun was a 200+ athlete mixed-ability sports event at Ulinzi Sports Complex in Nairobi — bringing together athletes with and without disabilities in a shared race environment supported by assistive technology.",
      "I built the athlete check-in and bib assignment system from scratch specifically for the event. The system needed to handle high-volume registration, real-time bib tracking, and smooth ground-level coordination across multiple entry points — all on event day with no room for error.",
      "On the day itself, I led my own coordination team on the ground and managed logistics across multiple workstreams running simultaneously. The system worked. The event ran clean. 200 athletes checked in without a queue disaster.",
    ],
    impact: [
      { value: "200+", label: "Athletes participated" },
      { value: "1", label: "Custom check-in system built" },
      { value: "0", label: "Queue disasters" },
    ],
    highlights: [
      "Built the athlete check-in and bib assignment system from scratch for the event",
      "Led an on-ground coordination team across multiple logistics workstreams",
      "Managed event-day operations at Ulinzi Sports Complex, Nairobi",
      "Coordinated mixed-ability athlete registration and flow for 200+ participants",
      "Integrated assistive technology into the event infrastructure",
    ],
    partners: ["EldoHub"],
    status: "completed",
    image: "/images/programs/inclusive-techrun-1.jpg",
    images: [
      "/images/programs/inclusive-techrun-1.jpg",
      "/images/programs/inclusive-techrun-2.jpg",
      "/images/programs/inclusive-techrun-3.jpg",
    ],
  },

  {
    slug: "techrun",
    title: "TechRun 2025",
    tag: "Tech Community Event",
    organization: "EldoHub",
    role: "Organizer & Technical Support",
    period: "2024 — Present",
    location: "Eldoret, Kenya",
    category: "tech",
    summary:
      "Annual tech community event bringing together developers, entrepreneurs, and innovators in Eldoret. Built and maintained the event management infrastructure — registrations, ticketing, attendee management, and post-event reporting — while running coordination on the ground.",
    about: [
      "TechRun is EldoHub's flagship annual tech community event, bringing together developers, entrepreneurs, students, and innovators from across the Rift Valley region for a full day of talks, workshops, and networking.",
      "Beyond running the event, I built and maintain the technical infrastructure behind it — event registration, ticketing, attendee check-in, and post-event reporting. The system was built in Laravel and designed to handle event-day volume without manual intervention.",
      "The event has grown each year. What started as a local meetup now draws participants from multiple counties and has become one of the more consistent tech community touchpoints in the Eldoret ecosystem.",
    ],
    impact: [
      { value: "Annual", label: "Event cadence" },
      { value: "Multi-county", label: "Participant reach" },
      { value: "Full-stack", label: "Event infrastructure built" },
    ],
    highlights: [
      "Built the event registration, ticketing, and check-in system in Laravel",
      "Coordinated speakers, sponsors, and logistics for each annual edition",
      "Managed attendee communications and post-event reporting",
      "Served as on-ground coordinator and technical support across event days",
    ],
    partners: ["EldoHub"],
    status: "active",
    image: "/images/programs/techrun-1.jpg",
    images: [
      "/images/programs/techrun-1.jpg",
      "/images/programs/techrun-2.jpg",
    ],
  },

  {
    slug: "world-bank-kiep-skies",
    title: "Program Support — Miliki-KIEP SKIES Project",
    tag: "Entrepreneurship",
    organization: "World Bank / KIEP-SKIES · EldoHub",
    role: "Program Support",
    period: "2024 — 2025",
    location: "Eldoret, Kenya",
    category: "entrepreneurship",
    summary:
      "Mentored and trained 60+ startups and SMEs on digital tools through a World Bank-backed acceleration programme. Applied human-centered design and design thinking across mentorship sessions. Coached on digital marketing, brand positioning, pitch decks, and growth plans — and supported SMEs through actual digital transformation, not just slides about it.",
    about: [
      "The Miliki-KIEP SKIES project is a World Bank-backed acceleration programme supporting startups and SMEs across Kenya's secondary cities, implemented through Kenya Industrial Estates with EldoHub as the Rift Valley partner.",
      "Over the programme period I mentored and trained 60+ startups and SMEs through structured business advisory sessions. The approach was grounded in human-centered design and design thinking — we weren't delivering generic business training, we were working on real problems with real founders.",
      "Beyond advisory, I supported participants through actual digital transformation — setting up e-commerce, configuring tools, and helping them build tech-enabled business models. Not just slide decks about it.",
    ],
    impact: [
      { value: "60+", label: "Startups mentored" },
      { value: "HCD", label: "Design thinking applied" },
      { value: "Mentorship", label: "Pitch decks built" },
    ],
    highlights: [
      "Applied human-centered design and design thinking across all mentorship sessions",
      "Coached participants on digital marketing, brand positioning, and online growth",
      "Helped participants build investor-ready pitch decks and growth plans",
      "Ran capacity-building sessions on digital tools and e-commerce setup",
      "Supported SMEs through hands-on digital transformation, not just training",
    ],
    partners: ["World Bank", "Kenya Industrial Estates", "EldoHub"],
    status: "completed",
    image: "/images/programs/miliki-1.jpg",
    images: [
      "/images/programs/miliki-1.jpg",
      "/images/programs/miliki-2.jpg",
      "/images/programs/miliki-3.jpg",
      "/images/programs/miliki-4.jpg",
    ],
  },

  {
    slug: "kenya-national-ai-strategy",
    title: "Kenya National AI Strategy Townhall — Eldoret",
    tag: "Policy & Advocacy",
    organization: "Ministry of ICT Kenya · GPSDD · EldoHub",
    role: "Townhall Convenor",
    period: "August 2024",
    location: "Eldoret, Uasin Gishu County",
    category: "leadership",
    summary:
      "EldoHub was selected as the Eldoret townhall convenor for Kenya's National AI Strategy — one of a handful of organizations across the country trusted to run this process. I led the full delivery: stakeholder mapping, workshop design, facilitation, data collection, and the final report submitted to the Ministry of ICT and GPSDD.",
    about: [
      "The Ministry of ICT and the Global Partnership for Sustainable Development Data (GPSDD) put out a call for expressions of interest from organizations that could host and run townhall engagements as part of building Kenya's National AI Strategy. Eldoret was one of the selected counties — Nairobi, Nakuru, Mombasa, Kisumu, Kisii, and Eldoret. EldoHub applied and was selected as the convenor.",
      "This wasn't just hosting an event. The convenor role meant designing the whole thing — stakeholder mapping across Uasin Gishu County, identifying and reaching community leaders, business reps, academics, government officials, youth, women, and persons with disability. We ran a co-creation design sprint approach, not a lecture. The Ministry provided discussion facilitation guides; we brought the room and the people.",
      "Delivery included venue, AV, logistics, facilitation, live polling and feedback collection, and a comprehensive report submitted within the deadline. The report — documenting who said what, through which method, and what they recommended — fed directly into the national strategy drafting process.",
    ],
    impact: [
      { value: "1 of 6", label: "Counties selected nationally" },
      { value: "Multi-sector", label: "Stakeholders mapped & engaged" },
      { value: "Aug 2024", label: "Townhall delivered on schedule" },
      { value: "National", label: "Report fed into AI strategy" },
    ],
    highlights: [
      "Coordinated stakeholder mapping across Uasin Gishu County — government, academia, business, civil society, and marginalized groups",
      "Co-designed the workshop with Ministry of ICT and GPSDD using a design sprint approach",
      "Managed full event logistics: venue, AV, facilitation, live polling, and feedback collection",
      "Captured insights, pain points, personas, and use case recommendations from participants",
      "Submitted a comprehensive final report to Ministry of ICT and GPSDD feeding into the national strategy",
      "Ensured inclusion of voices across the digital divide — youth, women, PWDs, and rural communities",
    ],
    partners: ["Ministry of ICT Kenya", "GPSDD", "EldoHub"],
    status: "completed",
    image: "/images/programs/strategy-townhall-1.jpg",
    images: [
      "/images/programs/strategy-townhall-1.jpg",
      "/images/programs/strategy-townhall-2.jpg",
    ],
  },

  {
    slug: "sme-loop",
    title: "SME Loop Methodology Programme",
    tag: "SME Development",
    organization: "EldoHub",
    role: "Technical Backstopper",
    period: "2025 — Present",
    location: "Eldoret, Kenya",
    category: "sme",
    summary:
      "Providing technical backstopping and strategic guidance for the SME Loop project — supporting business improvement cycles for SMEs in the region. Using data-driven methods to track SME progress and optimize their regional market entry. The backstopper role means I'm the person behind the people doing the training, solving the problems that come up mid-implementation.",
    about: [
      "SME Loop is a structured business development methodology focused on helping small and medium enterprises grow systematically — covering operations, marketing, finance, and strategy.",
      "As Technical Backstopper, I sit behind the trainers and SME coaches — I'm the escalation point when implementation hits a wall. When a business flags a digital gap, a tool they can't configure, or a system that isn't working, I step in and fix it practically.",
      "It's a different kind of role from running programmes. It requires staying close to what's happening on the ground and being available to solve problems quickly, not just at scheduled check-ins.",
    ],
    impact: [
      { value: "Ongoing", label: "Active engagement" },
      { value: "Real-time", label: "Problem resolution" },
    ],
    highlights: [
      "Providing real-time technical backstopping for SME Loop coaches and trainers",
      "Resolving implementation blockers for businesses mid-programme",
      "Setting up digital tools, websites, and online presence for SME cohort participants",
      "Using data-driven tracking to monitor SME progress and regional market entry",
      "Certified SME Loop Methodology Trainer",
    ],
    partners: ["EldoHub", "SME Loop"],
    status: "active",
    image: "https://placehold.co/1200x500/0d0d0d/22c55e?text=SME+Loop+Programme&font=montserrat",
  },

  {
    slug: "ajira-poa",
    title: "Ajira Poa Digital Training",
    tag: "Digital Skills",
    organization: "Danish Church Aid (DCA) · EldoHub",
    role: "Entrepreneurship Coach",
    period: "2024",
    location: "West Pokot & Nyandarua, Kenya",
    category: "training",
    summary:
      "Trained 200 young entrepreneurs across West Pokot and Nyandarua on core business skills — launching ventures, running them, and improving them. Served as a competition judge at the pitching event. Developed and delivered all training materials across sessions.",
    about: [
      "Ajira Poa under Danish Church Aid targeted entrepreneurs in underserved counties — West Pokot and Nyandarua — with practical business skills training built around the realities of operating in those environments.",
      "I developed and delivered all training materials across sessions, covering how to launch a venture, run it day-to-day, and improve it over time. I also served as a competition judge at the programme's pitching event.",
      "This wasn't a lecture series. These were entrepreneurs in underserved counties building real businesses with limited resources, and the training was designed around that reality.",
    ],
    impact: [
      { value: "200", label: "Entrepreneurs trained" },
      { value: "2", label: "Counties reached" },
      { value: "1", label: "Pitching competition judged" },
    ],
    highlights: [
      "Developed and delivered all training materials from scratch for the programme",
      "Trained 200 entrepreneurs across West Pokot and Nyandarua counties",
      "Covered venture launch, operations, and business improvement",
      "Served as competition judge at the programme pitching event",
      "Designed training around the realities of underserved county entrepreneurs",
    ],
    partners: ["Danish Church Aid (DCA)", "EldoHub"],
    status: "completed",
    image: "https://placehold.co/1200x500/0d0d0d/22c55e?text=Ajira+Poa+Digital+Training&font=montserrat",
  },

  {
    slug: "red-white-build-hackathon",
    title: "Red White & Build Hackathon",
    tag: "Hackathon",
    organization: "EldoHub",
    role: "Coordinator & Organizer",
    period: "2025",
    location: "Eldoret, Kenya",
    category: "tech",
    summary:
      "Coordinated and organized the Red White & Build Hackathon at EldoHub — bringing together developers, designers, and problem-solvers to build solutions under time pressure. Managed everything from participant recruitment and team formation through to judging, logistics, and prizes.",
    about: [
      "The Red White & Build Hackathon was a competitive build event organized through EldoHub, designed to push participants to ship working solutions within a tight timeframe.",
      "As coordinator and organizer, I handled the end-to-end logistics — venue, participant recruitment, team formation, challenge briefs, mentorship allocation during the event, judging coordination, and prizes. The kind of event where things go wrong and you have to fix them on the spot.",
      "These events matter because they create a different kind of pressure than classroom training. People figure out what they're actually capable of when there's a countdown on the board.",
    ],
    impact: [
      { value: "Competitive", label: "Build format" },
      { value: "Multi-team", label: "Participants" },
      { value: "End-to-end", label: "Organized & run" },
    ],
    highlights: [
      "Organized and coordinated the full hackathon from planning through to prize-giving",
      "Managed participant recruitment, team formation, and challenge design",
      "Coordinated mentors and judges for the event",
      "Handled venue logistics and on-the-day coordination",
      "Created a competitive build environment for the Eldoret tech community",
    ],
    partners: ["EldoHub"],
    status: "completed",
    image: "/images/programs/rwb-1.jpg",
    images: [
      "/images/programs/rwb-1.jpg",
      "/images/programs/rwb-2.jpg",
      "/images/programs/rwb-3.jpg",
      "/images/programs/rwb-4.jpg",
    ],
  },

  {
    slug: "kenya-software-ai-summit",
    title: "Kenya Software & AI Summit — Cyber Drill",
    tag: "Cybersecurity",
    organization: "EldoHub",
    role: "Coordinator & Organizer",
    period: "2025",
    location: "Kenya",
    category: "tech",
    summary:
      "EldoHub hosted a live Cyber Drill at the Kenya Software & AI Summit — an interactive cybersecurity simulation where participants experienced real-world attack and defense scenarios firsthand. Not a talk. Not a panel. A live drill.",
    about: [
      "The Kenya Software & AI Summit is one of the bigger national tech gatherings for developers, AI practitioners, startups, and policymakers. EldoHub didn't just attend — we hosted a session.",
      "The Cyber Drill was an interactive simulation designed to mirror real-world cybersecurity attack and defense scenarios. Anyone interested in security — experienced or just curious — could participate. The format was hands-on: you weren't watching someone explain how attacks work, you were in it.",
      "I coordinated and organized EldoHub's involvement in the summit, including the Cyber Drill session design, logistics, and on-the-day delivery. Bringing this kind of session to a national stage mattered — cybersecurity skills are needed everywhere, not just in the companies that can afford to hire specialists.",
    ],
    impact: [
      { value: "National", label: "Summit scale" },
      { value: "Live drill", label: "Hands-on format" },
      { value: "EldoHub", label: "Session host" },
    ],
    highlights: [
      "Hosted EldoHub's Cyber Drill session at the Kenya Software & AI Summit",
      "Designed an interactive live simulation of real-world attack and defense scenarios",
      "Opened the session to anyone interested in cybersecurity — beginner to experienced",
      "Coordinated logistics, session design, and on-the-day delivery",
      "Represented EldoHub at a national-level tech summit",
    ],
    partners: ["EldoHub"],
    status: "completed",
    image: "/images/programs/ai-summit-1.jpg",
    images: [
      "/images/programs/ai-summit-1.jpg",
      "/images/programs/ai-summit-2.jpg",
    ],
  },

  {
    slug: "athletics-value-chain-hackathon",
    title: "AI Innovation Challenge & Hackathon — Athletics",
    tag: "Hackathon",
    organization: "EldoHub · Uk Kenya Tech Hub · MoICT Kenya",
    role: "Coordinator & Organizer",
    period: "9–10 November 2025",
    location: "Moi University, Eldoret",
    category: "tech",
    summary:
      "AI Innovation Challenge at TechRun 2025 — a 2-day hackathon at Moi University themed 'Digitizing the Athletics Value Chain: From Talent Registration to Risk Management.' Built with Google Hackathon best practices and a special focus on AI solutions for mental health and wellbeing in sports.",
    about: [
      "Eldoret is the running capital of the world. The AI Innovation Challenge at TechRun 2025 was built around a simple question: what would it look like if the tech matched the talent? The theme — Digitizing the Athletics Value Chain, from Talent Registration to Risk Management — covered the full lifecycle of an athlete in Kenya's ecosystem.",
      "Held over two days at Moi University, the challenge drew teams from universities and the developer community to build AI-driven solutions across five judging dimensions: impact, innovation, technical execution, UX, and scalability. Judging criteria were adapted from Google Hackathon best practices.",
      "The 2025 edition placed a special emphasis on mental health and wellbeing in sports — recognising that psychological resilience is as important to athletic performance as physical training. Bonus points were available for responsible AI use, inclusivity and gender equity in design, and innovative mental health solutions for athletes.",
      "I coordinated and organized the event end-to-end: challenge design, judging framework, participant mobilization, mentorship, and on-the-day delivery.",
    ],
    impact: [
      { value: "2 days", label: "9–10 November 2025" },
      { value: "Moi Uni", label: "Venue" },
      { value: "Athletics", label: "Special focus area" },
    ],
    highlights: [
      "Designed the full challenge theme: Digitizing the Athletics Value Chain — from Talent Registration to Risk Management",
      "Built judging criteria adapted from Google Hackathon best practices across 5 dimensions",
      "Introduced a special emphasis on AI solutions for mental health and wellbeing in sports",
      "Hosted at Moi University with participation from University of Eldoret students",
      "Incorporated bonus criteria for responsible AI, gender equity, and team collaboration",
      "Coordinated end-to-end: challenge design, judging, mentorship, logistics, and prize-giving",
    ],
    partners: ["EldoHub", "Moi University", "University of Eldoret"],
    status: "completed",
    image: "/images/programs/athletics-1.jpg",
    images: [
      "/images/programs/athletics-1.jpg",
      "/images/programs/athletics-2.jpg",
      "/images/programs/athletics-3.jpg",
    ],
  },

  {
    slug: "kenya-data-governance-townhall",
    title: "Kenya National Data Governance Policy — North Rift Townhall",
    tag: "Policy & Advocacy",
    organization: "Ministry of ICT Kenya · DITIM · EldoHub",
    role: "Coordinator",
    period: "2025",
    location: "Eldoret, Kenya",
    category: "leadership",
    summary:
      "Coordinated the North Rift regional townhall on Kenya's National Data Governance Policy — bringing together innovators, policymakers, and community leaders for a collaborative dialogue on inclusivity, accountability, and trust in data management. EldoHub hosted; the conversations shaped real national policy.",
    about: [
      "As Kenya developed its National Data Governance Policy, regional townhalls were organized across the country to ensure that the policy wasn't just written in Nairobi. The North Rift session happened at EldoHub — and I coordinated it.",
      "The discussions centred on three things: inclusivity (who gets to benefit from data systems), accountability (who answers when things go wrong), and trust (why ordinary Kenyans should believe their data is safe). Those aren't abstract policy questions in the North Rift — they're practical ones.",
      "Delivered in partnership with the Ministry of ICT and the Directorate of Information Technology and Information Management (DITIM), the session brought together voices from across the region to shape how Kenya's digital future gets governed.",
    ],
    impact: [
      { value: "North Rift", label: "Region represented" },
      { value: "3", label: "Policy pillars discussed" },
      { value: "National", label: "Policy input submitted" },
    ],
    highlights: [
      "Coordinated and hosted the North Rift townhall on Kenya's National Data Governance Policy",
      "Convened innovators, policymakers, and community leaders from across the region",
      "Facilitated discussions on inclusivity, accountability, and trust in data governance",
      "Contributed regional input to a national policy shaping Kenya's data-driven economy",
      "Partnered with Ministry of ICT Kenya and DITIM on programme delivery",
    ],
    partners: ["Ministry of ICT Kenya", "DITIM", "EldoHub"],
    status: "completed",
    image: "/images/programs/data-governance-1.jpg",
    images: [
      "/images/programs/data-governance-1.jpg",
      "/images/programs/data-governance-2.jpg",
    ],
  },
];

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}
