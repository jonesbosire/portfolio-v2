import Link from "next/link";
import Image from "next/image";
import { programs } from "@/lib/programs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Development Programmes — Jones Bosire",
  description:
    "Entrepreneurship programmes, accelerators, and tech initiatives I've supported across Kenya.",
};

export default function ProgramsPage() {
  const active = programs.filter((p) => p.status === "active");
  const completed = programs.filter((p) => p.status === "completed");

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="mb-16 relative">
        {/* Subtle background glow */}
        <div
          className="absolute -top-10 -left-10 w-64 h-64 rounded-full opacity-[0.04] blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, var(--accent), transparent)" }}
        />
        <p className="section-label mb-4">Beyond the code</p>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter font-[family-name:var(--font-space-grotesk)] mb-4">
          Development
          <br />
          Programmes
        </h1>
        <p className="text-t-secondary max-w-xl leading-relaxed">
          I&apos;ve been involved in a range of programmes across entrepreneurship,
          digital skills, and tech policy — mostly in the Rift Valley but with
          some national-level work too. Each one has taught me something
          different.
        </p>
      </div>

      {/* Active */}
      {active.length > 0 && (
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <p className="text-xs font-semibold tracking-widest text-emerald-500 uppercase">
              Currently active
            </p>
            <div className="flex-1 h-px bg-surface-2" />
            <span className="text-xs text-t-subtle">{active.length} programme{active.length !== 1 ? "s" : ""}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {active.map((prog) => (
              <ProgramCard key={prog.slug} program={prog} />
            ))}
          </div>
        </section>
      )}

      {/* Completed */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <p className="text-xs font-semibold tracking-widest text-t-subtle uppercase">
            Completed
          </p>
          <div className="flex-1 h-px bg-surface-2" />
          <span className="text-xs text-t-subtle">{completed.length} programme{completed.length !== 1 ? "s" : ""}</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {completed.map((prog) => (
            <ProgramCard key={prog.slug} program={prog} />
          ))}
        </div>
      </section>

      {/* Note */}
      <div className="mt-16 p-6 rounded-sm border border-outline bg-surface">
        <p className="text-t-subtle text-sm leading-relaxed">
          Each programme listed here has its own page with full details —
          what it was about, the role I played, and the outcomes. Click any
          card to read more.
        </p>
      </div>
    </div>
  );
}

function ProgramCard({ program }: { program: (typeof programs)[0] }) {
  const isActive = program.status === "active";

  return (
    <Link
      href={`/programs/${program.slug}`}
      className="card rounded-sm overflow-hidden group block"
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <Image
          src={program.image || `https://placehold.co/800x350/0d0d0d/1a1a1a?text=${encodeURIComponent(program.tag)}&font=montserrat`}
          alt={program.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className={`tag ${isActive ? "" : "tag-white"}`}>{program.tag}</span>
        </div>
        {isActive ? (
          <div className="absolute top-3 right-3 flex items-center gap-1.5 text-xs text-emerald-400 bg-black/60 px-2 py-0.5 rounded-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dot-pulse" />
            Active
          </div>
        ) : (
          <span className="absolute top-3 right-3 text-xs text-t-secondary bg-black/60 px-2 py-0.5 rounded-sm">
            {program.period}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="font-semibold text-t-primary text-lg mb-1 group-hover:text-accent transition-colors leading-snug">
          {program.title}
        </h2>
        <p className="text-xs text-t-subtle mb-3">
          {program.role} · {isActive ? program.period : program.organization}
        </p>
        <p className="text-t-secondary text-sm leading-relaxed mb-4">
          {program.summary}
        </p>

        {/* Impact highlights */}
        <div className="flex gap-4 pt-4 border-t border-outline">
          {program.impact.slice(0, 3).map((i) => (
            <div key={i.label}>
              <p className="text-t-primary font-bold text-sm">{i.value}</p>
              <p className="text-t-subtle text-xs">{i.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}
