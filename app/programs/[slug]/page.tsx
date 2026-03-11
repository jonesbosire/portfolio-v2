import { programs, getProgramBySlug } from "@/lib/programs";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import ProgramImageSlider from "@/components/ProgramImageSlider";

export async function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) return {};
  return {
    title: `${program.title} — Jones Bosire`,
    description: program.summary,
  };
}

export default async function ProgramPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) notFound();

  const isActive = program.status === "active";
  const currentIndex = programs.findIndex((p) => p.slug === slug);
  const prev = programs[currentIndex - 1];
  const next = programs[currentIndex + 1];

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      {/* Back */}
      <Link
        href="/programs"
        className="inline-flex items-center gap-2 text-sm text-t-secondary hover:text-t-primary transition-colors mb-10"
      >
        ← All programmes
      </Link>

      {/* Hero image slider */}
      <ProgramImageSlider
        images={
          program.images && program.images.length > 0
            ? program.images
            : [program.image || `https://placehold.co/1200x500/0d0d0d/22c55e?text=${encodeURIComponent(program.title)}&font=montserrat`]
        }
        title={program.title}
        tag={program.tag}
        isActive={isActive}
        period={program.period}
      />

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight mb-4">
          {program.title}
        </h1>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-t-secondary">
          <span><span className="text-t-subtle">Role </span>{program.role}</span>
          <span><span className="text-t-subtle">Organisation </span>{program.organization}</span>
          <span><span className="text-t-subtle">Period </span>{program.period}</span>
          <span><span className="text-t-subtle">Location </span>{program.location}</span>
        </div>
      </div>

      <hr className="divider mb-10" />

      {/* Impact stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {program.impact.map((i) => (
          <div
            key={i.label}
            className="p-5 rounded-sm border border-outline bg-surface text-center"
          >
            <p className="text-3xl font-bold text-t-primary mb-1">{i.value}</p>
            <p className="text-t-secondary text-xs">{i.label}</p>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Body */}
        <div className="lg:col-span-2">
          <div className="mb-8">
            <p className="section-label mb-4">About this programme</p>
            <div className="space-y-4">
              {program.about.map((para, i) => (
                <p key={i} className="text-t-secondary leading-relaxed">{para}</p>
              ))}
            </div>
          </div>

          <div>
            <p className="section-label mb-4">What I worked on</p>
            <ul className="space-y-3">
              {program.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3 text-t-secondary text-sm leading-relaxed">
                  <span className="text-accent mt-0.5 shrink-0">→</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          <div className="p-5 rounded-sm border border-outline bg-surface">
            <p className="text-xs font-semibold tracking-widest text-t-subtle uppercase mb-4">
              Quick info
            </p>
            <dl className="space-y-3">
              {[
                { label: "Role", value: program.role },
                { label: "Period", value: program.period },
                { label: "Location", value: program.location },
                { label: "Status", value: isActive ? "Active" : "Completed", highlight: isActive },
              ].map(({ label, value, highlight }) => (
                <div key={label}>
                  <dt className="text-xs text-t-subtle mb-0.5">{label}</dt>
                  <dd className={`text-sm font-medium ${highlight ? "text-emerald-500" : "text-zinc-300"}`}>
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {program.partners && program.partners.length > 0 && (
            <div className="p-5 rounded-sm border border-outline bg-surface">
              <p className="text-xs font-semibold tracking-widest text-t-subtle uppercase mb-4">
                Partners
              </p>
              <div className="flex flex-wrap gap-2">
                {program.partners.map((p) => (
                  <span key={p} className="tag tag-white">{p}</span>
                ))}
              </div>
            </div>
          )}

          <div className="p-5 rounded-sm border border-accent/20 bg-accent/[0.04]">
            <p className="text-sm text-t-secondary mb-3 leading-relaxed">
              Running a similar programme or looking for someone to support your initiative?
            </p>
            <Link href="/contact" className="btn-accent w-full justify-center">
              Get in touch
            </Link>
          </div>
        </div>
      </div>

      {/* Prev/Next */}
      {(prev || next) && (
        <div className="mt-16 pt-8 border-t border-outline grid grid-cols-2 gap-4">
          {prev ? (
            <Link href={`/programs/${prev.slug}`} className="group card rounded-sm p-4">
              <p className="text-xs text-t-subtle mb-1">← Previous</p>
              <p className="text-sm text-t-primary group-hover:text-accent transition-colors font-medium">
                {prev.title}
              </p>
            </Link>
          ) : <div />}
          {next && (
            <Link href={`/programs/${next.slug}`} className="group card rounded-sm p-4 text-right">
              <p className="text-xs text-t-subtle mb-1">Next →</p>
              <p className="text-sm text-t-primary group-hover:text-accent transition-colors font-medium">
                {next.title}
              </p>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
