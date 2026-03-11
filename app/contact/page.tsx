import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — Jones Bosire",
  description:
    "Get in touch with Jones Bosire for web development, programme management, or tech training.",
};

const contactMethods = [
  {
    label: "Email",
    value: "bosirej411@gmail.com",
    href: "mailto:bosirej411@gmail.com",
    desc: "Best for project inquiries and formal communication. I usually reply within 24 hours.",
  },
  {
    label: "WhatsApp",
    value: "+254 748 835 690",
    href: "https://wa.me/254748835690",
    desc: "Quickest way to reach me. Drop a message and let's talk.",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/jonesbosire",
    href: "https://linkedin.com",
    desc: "Connect professionally, see my full work history, and endorsements.",
  },
];

const services = [
  "Website design and development",
  "Laravel / PHP web applications",
  "WordPress sites and e-commerce",
  "Hosting setup and server management",
  "Tech programme coordination",
  "Business mentorship and training",
  "Graphic design and branding",
];

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="mb-16 relative">
        <div
          className="absolute -top-10 -left-10 w-64 h-64 rounded-full opacity-[0.04] blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, var(--accent), transparent)" }}
        />
        <p className="section-label mb-4">Let&apos;s talk</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter font-[family-name:var(--font-space-grotesk)] mb-4">
          Get in touch
        </h1>
        <p className="text-t-secondary max-w-xl leading-relaxed">
          Whether it&apos;s a website, a web app, a tech programme, or just a
          question — reach out. I&apos;m based in Eldoret but work with clients
          and partners across Kenya and remotely.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Contact methods */}
        <div className="lg:col-span-3 space-y-4">
          <p className="section-label mb-6">Reach me directly</p>

          {contactMethods.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="card rounded-sm p-5 group block"
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <p className="text-xs text-t-subtle uppercase tracking-widest font-semibold mb-1">
                    {c.label}
                  </p>
                  <p className="text-t-primary font-medium font-[family-name:var(--font-space-grotesk)] group-hover:text-accent transition-colors break-all">
                    {c.value}
                  </p>
                </div>
                <span className="text-t-subtle group-hover:text-accent transition-colors text-xl">
                  →
                </span>
              </div>
              <p className="text-t-secondary text-sm leading-relaxed">{c.desc}</p>
            </a>
          ))}

          {/* Location note */}
          <div className="p-5 rounded-sm border border-outline bg-surface">
            <p className="text-xs text-t-subtle uppercase tracking-widest font-semibold mb-2">
              Location
            </p>
            <p className="text-t-primary font-medium font-[family-name:var(--font-space-grotesk)]">
              Eldoret, Uasin Gishu — Kenya
            </p>
            <p className="text-t-secondary text-sm mt-1">
              Available for in-person meetings in Eldoret. Open to remote work
              and virtual calls anywhere.
            </p>
          </div>
        </div>

        {/* Sidebar: what I can help with + availability */}
        <div className="lg:col-span-2 space-y-4">
          {/* Availability */}
          <div className="p-5 rounded-sm border border-emerald-500/20 bg-emerald-500/[0.04]">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dot-pulse" />
              <p className="text-xs font-semibold text-emerald-500 uppercase tracking-widest">
                Available now
              </p>
            </div>
            <p className="text-t-secondary text-sm leading-relaxed">
              Open to new freelance projects and programme collaborations. If
              you have something in mind, now&apos;s a good time to reach out.
            </p>
          </div>

          {/* What I do */}
          <div className="p-5 rounded-sm border border-outline bg-surface">
            <p className="text-xs font-semibold tracking-widest text-t-subtle uppercase mb-4">
              I can help with
            </p>
            <ul className="space-y-2">
              {services.map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-2 text-sm text-t-secondary"
                >
                  <span className="text-accent text-xs">→</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Response time */}
          <div className="p-5 rounded-sm border border-outline bg-surface">
            <p className="text-xs font-semibold tracking-widest text-t-subtle uppercase mb-3">
              Response time
            </p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-t-secondary">WhatsApp</span>
                <span className="text-t-primary">A few hours</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-t-secondary">Email</span>
                <span className="text-t-primary">Within 24 hours</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-t-secondary">LinkedIn</span>
                <span className="text-t-primary">1-2 days</span>
              </div>
            </div>
          </div>

          {/* View CV link */}
          <Link
            href="/cv"
            className="block p-5 rounded-sm border border-outline bg-surface text-center hover:border-accent/30 transition-colors group"
          >
            <p className="text-sm text-t-secondary group-hover:text-t-primary transition-colors">
              View my full CV →
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
