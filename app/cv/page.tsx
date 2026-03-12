import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CV — Jones Bosire",
  description:
    "Online CV for Jones Bosire — web developer, tech trainer, and project manager based in Eldoret, Kenya.",
};

const experience = [
  {
    role: "Web Developer & Technical Support",
    org: "EcoHost by EldoHub",
    period: "2024 — Present",
    type: "active",
    points: [
      "Develop and manage websites for 90+ clients across EcoHost's platform, supporting SME business growth through their web infrastructure",
      "Maintain server performance at 99.9% uptime across the client portfolio",
      "Handle SSL/DNS configuration, server optimization, and website migrations",
      "Built and maintain the EcoHost CRM — service billing, support tickets, automated reminders, and client portals",
    ],
  },
  {
    role: "Program Manager — IYBA-SEED Regional Expansion",
    org: "GIZ / ENABEL · EldoHub",
    period: "2025 — 2027",
    type: "active",
    points: [
      "Managing the regional expansion of IYBA-SEED, a green entrepreneurship support programme targeting market access across East Africa",
      "Represented EldoHub at the IYBA-SEED regional programme in Dakar, Senegal — one of the cross-regional exchange missions under the programme",
      "Workplan execution, partner coordination, and delivery tracking across counties",
      "Certified under the full SEED ToT series: SME Loop, Product Certification, Financial Literacy, SEB Tools, and Financial & Narrative Business Planning",
    ],
  },
  {
    role: "Technical Backstopper — SME Loop",
    org: "EldoHub",
    period: "2025 — Present",
    type: "active",
    points: [
      "Provide technical backstopping and strategic guidance for the SME Loop project",
      "Using data-driven methods to track SME progress and optimize regional market entry",
      "Solving the problems that come up mid-implementation — not just at scheduled check-ins",
    ],
  },
  {
    role: "Project Lead — SEADE AIoT Route to Market Accelerator",
    org: "EU-Africa SEADE Programme · EldoHub",
    period: "2025",
    type: "active",
    points: [
      "Led the AIoT Route to Market Accelerator under the EU-Africa SEADE programme",
      "Managed three delivery tracks simultaneously: Digital Youth Training, Soft-Landing Missions, and Learning Expeditions",
      "Partnered directly with WAZIUP e.V. and Addis Ababa University to align cross-regional goals between Africa and Europe",
      "Ran mentorship and workshops focused on women and youth building in the AIoT space",
    ],
  },
  {
    role: "EldoHub Website — Laravel Developer",
    org: "EldoHub",
    period: "Ongoing",
    type: "active",
    points: [
      "Building EldoHub's main website on a custom Laravel 12 and Filament CMS stack",
      "Responsible for architecture decisions, template integration, and ongoing development",
      "The system gives the EldoHub team editorial control without needing a developer for every update",
    ],
  },
  {
    role: "Gig & Tech Training Consultant — NikoBiz",
    org: "EldoHub & UK-Kenya Tech Hub",
    period: "2025",
    type: "active",
    points: [
      "Trained young entrepreneurs on business digitalization, e-commerce, and digital marketing",
      "Guided MSMEs in using technology to actually improve their operations — tools, setup, and strategy",
      "Developed and facilitated workshops on business model innovation and online business setup",
    ],
  },
  {
    role: "Coordinator & Systems Lead — Inclusive TechRun",
    org: "EldoHub · Ulinzi Sports Complex, Nairobi",
    period: "2025",
    type: "completed",
    points: [
      "Coordinated and delivered the first Inclusive TechRun — a 200+ athlete mixed-ability sports event integrating assistive technology",
      "Built the athlete check-in and bib assignment system from scratch for the event",
      "Led coordination team on the ground and managed logistics across multiple workstreams on event day",
    ],
  },
  {
    role: "Communications & Creative Lead — Gig Economy Project",
    org: "GIZ / EldoHub",
    period: "2024",
    type: "completed",
    points: [
      "Led the EldoHub creative and communications side of the GIZ Gig Economy Project — targeting 3,500 policymakers at county and national level through the SADA/Atingi platform",
      "Led the creative team in building comms materials that directly drove course signups and workshop attendance",
      "Spearheaded strategy that aligned with GIZ's brand guidelines while making the content land with a Kenyan audience",
      "Supported coordination of the policy stakeholder workshops themselves",
    ],
  },
  {
    role: "Business Mentor — Miliki-KIEP SKIES Project",
    org: "World Bank / KIEP-SKIES · EldoHub",
    period: "2024 — 2025",
    type: "completed",
    points: [
      "Mentored and trained 60+ startups and SMEs through a World Bank-backed acceleration programme",
      "Applied human-centered design and design thinking across mentorship sessions",
      "Coached on digital marketing, brand positioning, investor-ready pitch decks, and growth plans",
      "Supported SMEs through actual digital transformation — tools, e-commerce, and tech-enabled business models",
    ],
  },
  {
    role: "Coordinator — Kenya National AI Strategy Townhall",
    org: "Ministry of ICT Kenya · EldoHub · Global Partnership for AI",
    period: "2024",
    type: "completed",
    points: [
      "Coordinated the Kenya National AI Strategy Townhall in Eldoret — spanning government, academia, and industry",
      "Mobilized Eldoret's tech community and youth to participate in a national-level policy discussion",
      "Compiled regional input for the Ministry of ICT's national AI strategy documentation",
    ],
  },
  {
    role: "Programme Coordinator — Data Governance & AgriTech Workshop",
    org: "ESTDEV · GIZ · Expertise France · EldoHub",
    period: "2025",
    type: "completed",
    points: [
      "Coordinated a two-day Data Governance & AgriTech workshop for 30 CBO members from five Kenyan counties, part of the EU-funded Data Governance in Africa Initiative",
      "Managed programme operations: session design, communications, facilitation support, and documentation throughout the workshop",
      "Applied the GROW methodology to guide participants from data literacy basics to designing their own community digital pilots",
      "Partnered with ESTDEV, GIZ, Expertise France, KSA, and KALRO on programme delivery",
    ],
  },
  {
    role: "Entrepreneurship Coach — Ajira Poa Project",
    org: "Danish Church Aid (DCA) · EldoHub",
    period: "2024",
    type: "completed",
    points: [
      "Trained 200 young entrepreneurs across West Pokot and Nyandarua on core business skills — launching ventures, running them, and improving them",
      "Developed and delivered all training materials across sessions",
      "Served as a competition judge at the pitching event",
    ],
  },
  {
    role: "AWS Agentic AI Workshop — Host & Organizer",
    org: "EldoHub · AWS Cloud Club Moi University",
    period: "2025",
    type: "completed",
    points: [
      "Hosted an 80+ developer workshop at EldoHub featuring AWS Senior Developer Advocate Veliswa Bouga",
      "Session covered Strands, MCP (Model Context Protocol), and agent orchestration frameworks",
      "Organized the event, managed the AWS partnership, and ran it from venue to close",
    ],
  },
  {
    role: "Chief Information Officer",
    org: "Enactus Moi Annex",
    period: "2022 — 2024",
    type: "completed",
    points: [
      "Joined as a volunteer and left as CIO — led the media team and built the organization's social media presence from zero",
      "Designed all presentation, poster, video, and project materials for competitions",
      "Supported design and implementation of a project tracking and finance management system",
      "Led the team to the Enactus World Cup 2022–23, competing among 32 countries",
      "Led EldoHub's collaboration with KIRDI on Project Pika Smart — manufacturing affordable agri-waste briquettes in Kisumu",
    ],
  },
  {
    role: "Project Manager — Project Alleviate",
    org: "Enactus Moi Annex · Ford Motor Company",
    period: "2021 — 2022",
    type: "completed",
    points: [
      "Won a Ford Motor Company Community Challenge Grant — annual budget $5,000, total funds raised $10,000",
      "Managed a mushroom farming training and farming initiative across two terms",
      "Built the training manual from scratch in collaboration with JKUAT",
      "Led planning and construction of Shujaa 1, a pilot mushroom farming structure — affordable and replicable",
      "Expanded training specifically to women and girls in Kiplombe village",
    ],
  },
  {
    role: "Director of Communications",
    org: "Red Cross Moi University · Volunteer",
    period: "2021 — 2023",
    type: "completed",
    points: [
      "Led the communications team and contributed to the First Aid Curriculum design",
      "Supported implementation of the HINIVUU initiative — a community donation and charity programme",
      "Improved information flow and communication systems across the organization's stakeholders",
    ],
  },
];

const education = [
  {
    degree: "BSc Business Information Technology",
    institution: "Moi University",
    period: "2019 — 2023",
    note: "Second Class Upper Honours",
  },
  {
    degree: "Lead Change Basecamp: Innovation, Smart Solutions & Design Thinking",
    institution: "Watson Institute",
    period: "2023",
    note: "",
  },
  {
    degree: "William Davidson Institute Fellow — Team Building for Results; Starting a Business, An Entrepreneurial Journey",
    institution: "University of Michigan",
    period: "2022",
    note: "2nd place, team project",
  },
  {
    degree: "Digital Innovations for Business Resilience in the EAC Bootcamp",
    institution: "StartHub Africa",
    period: "2023",
    note: "",
  },
];

const certifications = [
  { name: "SME Loop Methodology Trainer of Trainers", issuer: "GIZ / ENABEL · IYBA-SEED", year: "2025" },
  { name: "Product Certification — Trainer of Trainers", issuer: "GIZ / ENABEL · IYBA-SEED", year: "2025" },
  { name: "Financial Literacy — Trainer of Trainers", issuer: "GIZ / ENABEL · IYBA-SEED", year: "2025" },
  { name: "SEED Expansion Box (SEB) Tools — Trainer of Trainers", issuer: "GIZ / ENABEL · IYBA-SEED", year: "2025" },
  { name: "Financial & Narrative Business Planning for Investment Readiness", issuer: "GIZ / ENABEL · IYBA-SEED", year: "2025" },
  { name: "Innovation Ecosystem Lifecycle", issuer: "Afrilabs & Strathmore University", year: "2024" },
  { name: "Gig & Digital Economy Trainer", issuer: "EldoHub / GIZ", year: "2023" },
];

const awards = [
  {
    title: "Ford Motor Company Community Challenge Grant",
    detail: "Raised $10,000 for Project Alleviate — a mushroom farming initiative for women and youth in Eldoret.",
    year: "2022",
  },
  {
    title: "Enactus World Cup — Team Kenya",
    detail: "Led Enactus Moi Annex to the global stage, competing among 32 countries as team CIO.",
    year: "2023",
  },
  {
    title: "William Davidson Institute Fellowship — 2nd Place",
    detail: "University of Michigan team project on entrepreneurship and business strategy.",
    year: "2022",
  },
  {
    title: "IYBA-SEED Regional Mission — Dakar, Senegal",
    detail: "Selected to represent EldoHub at the cross-regional IYBA-SEED programme exchange in Senegal.",
    year: "2025",
  },
];

const skills = {
  "Web Development": ["Laravel", "PHP", "Next.js", "Tailwind CSS", "Filament CMS", "WordPress", "Shopify", "JavaScript", "HTML/CSS", "MySQL"],
  "Server & Infrastructure": ["SSL/DNS", "cPanel / WHM", "Hosting environments", "Uptime optimization", "Website migration", "Server management"],
  "Systems Building": ["Custom check-in platforms", "Event management tools", "Client-side web apps", "CRM systems", "AIoT programme support"],
  "Programme Management": ["Donor-funded programme coordination", "Workplan execution & delivery tracking", "Multi-partner coordination", "Budget management", "Reporting"],
  "Training & Capacity Building": ["ToT certified: SME Loop, Product Certification, Financial Literacy, SEB", "Entrepreneurship coaching", "SME mentorship & acceleration", "Workshop design and facilitation"],
  "Communications & Creative": ["Brand strategy & identity", "Social media management", "Graphic design & content production", "Event coordination", "Stakeholder mobilization"],
};

export default function CVPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <p className="section-label mb-3">Online CV</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter font-[family-name:var(--font-space-grotesk)]">
            Jones Bosire
          </h1>
          <p className="text-t-secondary mt-2 text-lg">
            Web Developer · Program Manager · Tech Trainer
          </p>
          <p className="text-t-subtle text-sm mt-1">Eldoret, Kenya · EldoHub</p>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <a
            href="mailto:bosirej411@gmail.com"
            className="text-t-secondary hover:text-accent transition-colors"
          >
            bosirej411@gmail.com
          </a>
          <a
            href="https://wa.me/254748835690"
            className="text-t-secondary hover:text-accent transition-colors"
          >
            +254 748 835 690
          </a>
        </div>
      </div>

      <hr className="divider mb-12" />

      {/* Summary */}
      <section className="mb-12">
        <p className="section-label mb-4">About</p>
        <div className="space-y-4 text-t-secondary leading-relaxed max-w-3xl">
          <p>
            I&apos;m Jones Bosire — developer and programme manager at EldoHub, a tech and innovation hub based in Eldoret.
          </p>
          <p>
            My work doesn&apos;t have a clean job title. On any given week I&apos;m writing Laravel code, managing deliverables for a donor-funded programme, training entrepreneurs in a county most people can&apos;t find on a map, or coordinating a 200-person tech event. That&apos;s not scattered — it&apos;s the range I&apos;ve built deliberately over five years.
          </p>
          <p>
            On the technical side: I manage websites for 90+ clients through EcoHost, I&apos;ve built event systems from scratch, and I work on AIoT programmes at the intersection of hardware, software, and market access. On the programmes side: I implement development sector projects for GIZ, ENABEL, the EU, the World Bank, and Mastercard Foundation — the actual coordination work, not the administrative version.
          </p>
          <p>
            Numbers, because they matter: 200+ entrepreneurs trained across West Pokot and Nyandarua. 60+ startups mentored through a World Bank-backed accelerator. One check-in system built from scratch for a 200-athlete inclusive sports event — on a deadline, deployed on event day, worked first time. One Enactus team taken to the World Cup, competing among 32 countries.
          </p>
          <p>
            I&apos;m based in Eldoret by choice. The ecosystem here is still being built, and I&apos;d rather be part of building it than show up after it&apos;s done.
          </p>
          <p>
            If you need someone who can scope a technical build and write a donor report in the same afternoon — that&apos;s the job.
          </p>
        </div>
      </section>

      <hr className="divider mb-12" />

      {/* Experience */}
      <section className="mb-12">
        <p className="section-label mb-8">Experience</p>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-outline ml-1.5" />

          <div className="space-y-8">
            {experience.map((e, i) => (
              <div key={i} className="relative pl-8">
                <div
                  className={`absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 ${
                    e.type === "active"
                      ? "border-accent bg-accent/20"
                      : "border-outline bg-transparent"
                  }`}
                />

                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 mb-2">
                  <div>
                    <h3 className="font-semibold text-t-primary font-[family-name:var(--font-space-grotesk)]">
                      {e.role}
                    </h3>
                    <p className="text-t-secondary text-sm">{e.org}</p>
                  </div>
                  <span
                    className={`text-xs shrink-0 px-2 py-0.5 rounded-sm border ${
                      e.type === "active"
                        ? "border-accent/20 text-accent bg-accent/10"
                        : "border-outline text-t-secondary"
                    }`}
                  >
                    {e.period}
                  </span>
                </div>

                <ul className="space-y-1 mt-2">
                  {e.points.map((p, j) => (
                    <li
                      key={j}
                      className="text-sm text-t-secondary flex items-start gap-2 leading-relaxed"
                    >
                      <span className="text-t-subtle mt-0.5 shrink-0">·</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider mb-12" />

      {/* Selected Projects */}
      <section className="mb-12">
        <p className="section-label mb-8">Selected Projects</p>
        <div className="space-y-4">
          {[
            {
              title: "EcoHost CRM Platform",
              tech: "Laravel · PHP · MySQL · Tailwind CSS",
              year: "2025",
              desc: "Full-stack CRM for EcoHost by EldoHub — service billing, support tickets, automated reminders, client portals, and 90+ client accounts.",
            },
            {
              title: "AutoVault",
              tech: "Laravel 12 · Livewire 3 · PHP · MySQL",
              year: "2025",
              desc: "WhatsApp-first car classifieds marketplace for Kenya. C2C platform with trust scoring, admin-gated listing approval, and subscription monetization.",
            },
            {
              title: "Biz Mashinani Platform",
              tech: "Laravel · PHP · MySQL · Tailwind CSS",
              year: "2025",
              desc: "Web platform for the Mastercard Foundation / EldoHub Biz Mashinani programme — participant management, reporting, and programme delivery across four counties.",
              url: "https://bizmashinani.eldohub.co.ke/",
            },
            {
              title: "CorpusFeed",
              tech: "Laravel · PHP · MySQL · Tailwind CSS",
              year: "2025",
              desc: "Content aggregation and feed management platform — content ingestion, categorization, and delivery at scale.",
              url: "https://test.corpusfeed.co.ke/",
            },
            {
              title: "TechRun Event System",
              tech: "Laravel · PHP · Tailwind CSS",
              year: "2024",
              desc: "Event management and athlete check-in platform built for TechRun and the Inclusive TechRun — registrations, bib assignment, and attendee management.",
            },
            {
              title: "EldoHub Website (in progress)",
              tech: "Laravel 12 · Filament CMS · PHP",
              year: "Ongoing",
              desc: "Custom CMS-driven website for EldoHub — editorial control for the team without requiring developer involvement for routine updates.",
            },
          ].map((p, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:items-start justify-between p-5 rounded-sm border border-outline bg-surface gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <h3 className="font-semibold text-t-primary font-[family-name:var(--font-space-grotesk)]">{p.title}</h3>
                  {p.url && (
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-xs text-accent hover:underline">
                      ↗ live
                    </a>
                  )}
                </div>
                <p className="text-xs text-t-subtle mb-2">{p.tech}</p>
                <p className="text-sm text-t-secondary leading-relaxed">{p.desc}</p>
              </div>
              <span className="text-xs text-t-subtle shrink-0 sm:mt-1">{p.year}</span>
            </div>
          ))}
        </div>
      </section>

      <hr className="divider mb-12" />

      {/* Skills */}
      <section className="mb-12">
        <p className="section-label mb-8">Skills</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="p-5 rounded-sm border border-outline bg-surface">
              <p className="text-xs font-semibold tracking-widest text-t-subtle uppercase mb-3">
                {category}
              </p>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span key={skill} className="tag tag-white">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="divider mb-12" />

      {/* Education */}
      <section className="mb-12">
        <p className="section-label mb-8">Education</p>
        <div className="space-y-4">
          {education.map((e, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-sm border border-outline bg-surface"
            >
              <div>
                <h3 className="font-semibold text-t-primary font-[family-name:var(--font-space-grotesk)]">
                  {e.degree}
                </h3>
                <p className="text-t-secondary text-sm mt-0.5">{e.institution}</p>
                {e.note && (
                  <p className="text-t-subtle text-xs mt-0.5">{e.note}</p>
                )}
              </div>
              <span className="text-sm text-t-secondary mt-2 sm:mt-0 shrink-0">{e.period}</span>
            </div>
          ))}
        </div>
      </section>

      <hr className="divider mb-12" />

      {/* Certifications */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-8">
          <p className="section-label">Certifications</p>
          <Link href="/certificates" className="text-xs text-accent hover:underline">
            View certificates →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {certifications.map((c, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 rounded-sm border border-outline bg-surface"
            >
              <span className="text-accent text-sm shrink-0 mt-0.5">◈</span>
              <div>
                <p className="text-sm text-t-primary font-medium">{c.name}</p>
                <p className="text-xs text-t-secondary">
                  {c.issuer} · {c.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="divider mb-12" />

      {/* Awards & Recognition */}
      <section className="mb-12">
        <p className="section-label mb-8">Awards & Recognition</p>
        <div className="space-y-4">
          {awards.map((a, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-5 rounded-sm border border-outline bg-surface"
            >
              <span className="text-accent text-lg shrink-0 mt-0.5">◆</span>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                  <p className="font-semibold text-t-primary">{a.title}</p>
                  <span className="text-xs text-t-subtle shrink-0">{a.year}</span>
                </div>
                <p className="text-sm text-t-secondary mt-1 leading-relaxed">{a.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Download + Links */}
      <div className="flex flex-wrap gap-4 pt-4">
        <Link href="/contact" className="btn-accent">
          Get in touch
        </Link>
        <Link href="/projects" className="btn-ghost">
          View projects
        </Link>
        <Link href="/programs" className="btn-ghost">
          View programmes
        </Link>
        <Link href="/certificates" className="btn-ghost">
          View certificates
        </Link>
      </div>
    </div>
  );
}
