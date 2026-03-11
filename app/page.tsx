import Link from "next/link";
import Image from "next/image";
import { programs } from "@/lib/programs";
import { projects } from "@/lib/projects";
import AnimatedCounter from "@/components/AnimatedCounter";
import Marquee from "@/components/Marquee";

const stats = [
  { value: 25, suffix: "+", label: "Projects delivered" },
  { value: 200, suffix: "+", label: "Entrepreneurs trained" },
  { value: 5, suffix: "+", label: "Programmes supported" },
  { value: 2, suffix: "+", label: "Years in tech" },
];

const services = [
  { title: "Web Development", desc: "Laravel, WordPress, Next.js, Shopify. I build things that work on day one and still work two years later. 90+ sites under management through EcoHost — so this isn't side-project territory." },
  { title: "Hosting & DevOps", desc: "cPanel, WHM, SSL, DNS, server migrations. The boring stuff that breaks everything when it goes wrong. I manage it so you don't have to think about it." },
  { title: "Programme Management", desc: "Workplans, donor reporting, partner coordination, delivery tracking. I've done this for GIZ, ENABEL, the World Bank, and the EU — the real implementation work, not the administrative version." },
  { title: "Tech Training", desc: "Workshops, bootcamps, digital skills sessions. I've trained 200+ people across West Pokot, Nyandarua, and the Rift Valley. I design for the room I'm in, not a generic curriculum." },
  { title: "Business Mentorship", desc: "One-on-one advisory for startups and SMEs — business models, digital tools, investor prep, market entry. I've mentored 60+ startups through a World Bank-backed programme. Real sessions, not motivational talks." },
  { title: "Graphic Design", desc: "Brand identity, social graphics, presentation design, marketing materials. I've built entire visual identities for organisations from scratch. Clean work, done on time." },
];

const gallery = [
  {
    image: "https://placehold.co/600x400/0d0d0d/22c55e?text=Training+Session&font=montserrat",
    caption: "Digital skills training, Eldoret",
    year: "2023",
  },
  {
    image: "https://placehold.co/600x400/0d0d0d/22c55e?text=Demo+Day&font=montserrat",
    caption: "SEADE AIoT Demo Day",
    year: "2025",
  },
  {
    image: "https://placehold.co/600x400/0d0d0d/22c55e?text=Mentorship+Session&font=montserrat",
    caption: "World Bank KIEP-SKIES mentorship",
    year: "2024",
  },
  {
    image: "https://placehold.co/600x400/0d0d0d/22c55e?text=AI+Strategy+Townhall&font=montserrat",
    caption: "Kenya National AI Strategy",
    year: "2024",
  },
];

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);
  const activePrograms = programs.filter((p) => p.status === "active");
  const completedPrograms = programs.filter((p) => p.status === "completed");

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Grid overlay — stronger in hero */}
        <div className="absolute inset-0 grid-bg opacity-70 pointer-events-none" />

        {/* Green glow */}
        <div
          className="absolute top-0 left-1/4 w-[700px] h-[500px] rounded-full opacity-[0.08] blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)" }}
        />

        <div className="relative max-w-6xl mx-auto px-6 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">

            {/* ─ TEXT ─ */}
            <div className="lg:col-span-3 fade-up">
              {/* Status badge */}
              <div className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-sm border border-outline bg-surface">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 dot-pulse" />
                <span className="text-xs text-t-secondary font-medium tracking-wide">
                  Available for freelance projects
                </span>
              </div>

              {/* Name */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none mb-6">
                <span className="text-t-primary">Jones</span>
                <br />
                <span className="gradient-text">Bosire</span>
              </h1>

              {/* Role tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["Web Developer", "Project/Program Manager", "Tech Trainer"].map((r) => (
                  <span key={r} className="tag tag-white">{r}</span>
                ))}
              </div>

              {/* Bio */}
              <p className="text-t-secondary text-lg max-w-xl leading-relaxed mb-10">
                I write code and run programmes sometimes in the same week. Based in Eldoret by choice, working across Kenya and the region.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link href="/projects" className="btn-accent">
                  View my work →
                </Link>
                <Link href="/contact" className="btn-ghost">
                  Get in touch
                </Link>
              </div>
            </div>

            {/* ─ PHOTO ─ */}
            <div className="lg:col-span-2 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Glow behind photo */}
                <div
                  className="absolute inset-0 rounded-sm blur-2xl opacity-20 scale-90 pointer-events-none"
                  style={{ background: "linear-gradient(135deg, var(--accent), #06b6d4)" }}
                />
                {/* Photo frame */}
                <div className="relative w-64 sm:w-72 md:w-80 lg:w-full lg:max-w-xs overflow-hidden rounded-sm border border-outline">
                  <Image
                    src="/jones.jpeg"
                    alt="Jones Bosire"
                    width={400}
                    height={500}
                    className="object-cover w-full"
                    priority
                    unoptimized
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/60 to-transparent" />
                  <p className="absolute bottom-3 left-4 text-xs text-white/70 font-medium">
                    Eldoret, Kenya
                  </p>
                </div>
                {/* Corner accents */}
                <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-accent/40" />
                <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-accent/40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE TICKER ───────────────────────────────── */}
      <Marquee />

      {/* ── STATS ────────────────────────────────────────── */}
      <section className="border-b border-outline py-14">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <p className="text-4xl font-bold text-t-primary mb-1">
                  <AnimatedCounter target={s.value} suffix={s.suffix} />
                </p>
                <p className="text-t-secondary text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────── */}
      <section className="py-16 md:py-24 max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="section-label mb-3">What I do</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-t-primary">
            Skills & Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <div key={s.title} className="card rounded-sm p-6">
              <div className="w-7 h-7 rounded-sm flex items-center justify-center mb-4 text-accent text-xs"
                   style={{ background: "rgba(34,197,94,0.1)" }}>
                ◈
              </div>
              <h3 className="font-semibold text-t-primary mb-2">{s.title}</h3>
              <p className="text-t-secondary text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROGRAMMES ───────────────────────────────────── */}
      <section className="py-16 md:py-24 border-t border-outline">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="section-label mb-3">The other half of the work</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-t-primary">
                Development Programmes
              </h2>
            </div>
            <Link href="/programs" className="hidden md:inline-flex text-sm text-t-secondary hover:text-accent transition-colors">
              All programmes →
            </Link>
          </div>

          <p className="text-t-secondary max-w-xl mb-10 leading-relaxed">
            A lot of what I do doesn&apos;t show up on a GitHub profile. Donor-funded programmes, government townhalls, early morning training sessions in West Pokot. This is the other half of the work — and honestly, the part that taught me the most.
          </p>

          {activePrograms.length > 0 && (
            <div className="mb-8">
              <p className="text-xs font-semibold tracking-widest text-green-500 uppercase mb-4">Currently active</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activePrograms.map((prog) => (
                  <Link key={prog.slug} href={`/programs/${prog.slug}`} className="card rounded-sm overflow-hidden group block">
                    <div className="relative h-36 overflow-hidden">
                      <Image
                        src={prog.image || `https://placehold.co/800x300/0d0d0d/1a1a1a?text=${encodeURIComponent(prog.tag)}&font=montserrat`}
                        alt={prog.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-t-primary mb-1 group-hover:text-accent transition-colors">{prog.title}</h3>
                      <p className="text-xs text-t-subtle mb-2">{prog.role} · {prog.period}</p>
                      <p className="text-t-secondary text-sm leading-relaxed">{prog.summary}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div>
            <p className="text-xs font-semibold tracking-widest text-t-subtle uppercase mb-4">Completed</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {completedPrograms.slice(0, 2).map((prog) => (
                <Link key={prog.slug} href={`/programs/${prog.slug}`} className="card rounded-sm overflow-hidden group block">
                  <div className="relative h-36 overflow-hidden">
                    <Image
                      src={prog.image || `https://placehold.co/800x300/0d0d0d/1a1a1a?text=${encodeURIComponent(prog.tag)}&font=montserrat`}
                      alt={prog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-t-primary mb-1 group-hover:text-accent transition-colors">{prog.title}</h3>
                    <p className="text-xs text-t-subtle mb-2">{prog.role}</p>
                    <p className="text-t-secondary text-sm leading-relaxed">{prog.summary}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-6 md:hidden">
            <Link href="/programs" className="btn-ghost w-full justify-center">All programmes →</Link>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ────────────────────────────── */}
      <section className="py-16 md:py-24 border-t border-outline">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="section-label mb-3">What I&apos;ve built</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-t-primary">
                Featured Projects
              </h2>
            </div>
            <Link href="/projects" className="hidden md:inline-flex text-sm text-t-secondary hover:text-accent transition-colors">
              All projects →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featuredProjects.map((p) => (
              <div key={p.title} className="card rounded-sm overflow-hidden group">
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={p.image || `https://placehold.co/800x350/0d0d0d/1a1a1a?text=${encodeURIComponent(p.title)}&font=montserrat`}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-t-primary text-lg mb-2 group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-t-secondary text-sm leading-relaxed mb-4">{p.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded-sm border border-outline text-t-subtle">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 md:hidden">
            <Link href="/projects" className="btn-ghost w-full justify-center">All projects →</Link>
          </div>
        </div>
      </section>

      {/* ── GALLERY — FROM THE FIELD ─────────────────────── */}
      <section className="py-16 md:py-24 border-t border-outline">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="section-label mb-3">On the ground</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-t-primary">
                From the field
              </h2>
            </div>
            <Link href="/programs" className="hidden md:inline-flex text-sm text-t-secondary hover:text-accent transition-colors">
              See all programmes →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {gallery.map((g, i) => (
              <div key={i} className="group relative overflow-hidden rounded-sm border border-outline">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={g.image}
                    alt={g.caption}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-xs text-white/80 leading-snug">{g.caption}</p>
                    <p className="text-xs text-white/40 mt-0.5">{g.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-16 md:py-24 border-t border-outline">
        <div className="max-w-6xl mx-auto px-6">
          <div
            className="relative rounded-sm border border-outline p-8 md:p-12 lg:p-16 overflow-hidden text-center"
            style={{ background: "var(--surface)" }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 60% 80% at 50% 50%, var(--glow-color), transparent)" }}
            />
            <p className="section-label mb-4">Let&apos;s work together</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-t-primary">
              Have something that needs building?
            </h2>
            <p className="text-t-secondary max-w-md mx-auto mb-8 leading-relaxed">
              A website, a system, a programme that needs running — or you just need someone who can do more than one of those things at the same time. Drop me a message. I reply.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-accent">Get in touch</Link>
              <a href="https://wa.me/254748835690" target="_blank" rel="noopener noreferrer" className="btn-ghost">
                WhatsApp me
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
