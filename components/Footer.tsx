import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/programs", label: "Programs" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-outline mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="font-[family-name:var(--font-space-grotesk)] font-bold text-lg text-t-primary">
              Jones<span className="text-accent">.</span>
            </p>
            <p className="text-t-secondary text-sm mt-1">
              Web Developer · Tech Trainer · Project Manager
            </p>
            <p className="text-t-subtle text-xs mt-1">Eldoret, Kenya</p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-t-subtle hover:text-t-primary transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-t-subtle hover:text-t-primary text-sm transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-t-subtle hover:text-t-primary text-sm transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://wa.me/254748835690"
              target="_blank"
              rel="noopener noreferrer"
              className="text-t-subtle hover:text-t-primary text-sm transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <hr className="divider my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-t-subtle text-xs">
          <p>© {new Date().getFullYear()} Jones Bosire. All rights reserved.</p>
          <p>Built with Next.js · Deployed on Vercel</p>
        </div>
      </div>
    </footer>
  );
}
