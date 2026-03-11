"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/programs", label: "Programs" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 w-full z-50 border-b border-outline backdrop-blur-md"
      style={{ background: "var(--nav-bg)" }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-[family-name:var(--font-space-grotesk)] font-bold text-xl tracking-tight text-t-primary"
        >
          Jones<span className="text-accent">.</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors duration-150 ${
                pathname === l.href
                  ? "text-accent"
                  : "text-t-secondary hover:text-t-primary"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right: theme toggle + hire me */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a href="mailto:bosirej411@gmail.com" className="btn-accent">
            Hire Me
          </a>
        </div>

        {/* Mobile right */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="text-t-subtle hover:text-t-primary transition-colors text-xl w-8 h-8 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {open ? "✕" : "≡"}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          className="md:hidden border-t border-outline px-6 py-5 flex flex-col gap-4"
          style={{ background: "var(--nav-bg)" }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`text-sm font-medium transition-colors ${
                pathname === l.href ? "text-accent" : "text-t-secondary"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a href="mailto:bosirej411@gmail.com" className="btn-accent w-fit mt-1">
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
