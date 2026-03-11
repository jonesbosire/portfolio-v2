const items = [
  "Web Developer",
  "Eldoret, Kenya",
  "Laravel",
  "WordPress",
  "Tech Trainer",
  "200+ Entrepreneurs",
  "Project Manager",
  "AIoT Accelerator",
  "Digital Skills",
  "EcoHost",
  "Eldohub",
  "Available for Work",
  "React · Next.js",
  "Hosting & DevOps",
  "SME Support",
];

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-outline py-3 bg-surface">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[var(--bg)] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[var(--bg)] to-transparent pointer-events-none" />

      <div className="flex gap-0 animate-[marquee_30s_linear_infinite]">
        {/* Render twice for seamless loop */}
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 shrink-0 px-4 text-sm font-medium text-t-subtle whitespace-nowrap"
          >
            <span className="text-accent text-xs">◆</span>
            {item}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
