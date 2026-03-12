import type { Metadata } from "next";
import Link from "next/link";
import { certificates } from "@/lib/certificates";
import CertificatesGrid from "@/components/CertificatesGrid";

export const metadata: Metadata = {
  title: "Certificates — Jones Bosire",
  description:
    "Certifications and credentials earned by Jones Bosire across training, programme management, and entrepreneurship.",
};

const categories = Array.from(new Set(certificates.map((c) => c.category)));

export default function CertificatesPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="mb-16 relative">
        <div
          className="absolute -top-10 -left-10 w-64 h-64 rounded-full opacity-[0.04] blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, var(--accent), transparent)" }}
        />
        <p className="section-label mb-4">Credentials</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter font-[family-name:var(--font-space-grotesk)] mb-4">
          Certificates
        </h1>
        <p className="text-t-secondary max-w-xl leading-relaxed">
          Certifications earned across training facilitation, programme management, entrepreneurship, and digital economy. Click any card to view the full certificate.
        </p>
      </div>

      {/* Grouped by category */}
      {categories.map((cat) => {
        const group = certificates.filter((c) => c.category === cat);
        return (
          <section key={cat} className="mb-14">
            <div className="flex items-center gap-4 mb-6">
              <p className="text-xs font-semibold tracking-widest text-accent uppercase">{cat}</p>
              <div className="flex-1 h-px bg-surface-2" />
              <span className="text-xs text-t-subtle">{group.length} certificate{group.length !== 1 ? "s" : ""}</span>
            </div>
            <CertificatesGrid certs={group} />
          </section>
        );
      })}

      {/* Upload note */}
      <div className="mt-8 p-5 rounded-sm border border-outline bg-surface">
        <p className="text-xs font-semibold tracking-widest text-t-subtle uppercase mb-2">Adding a certificate</p>
        <p className="text-sm text-t-secondary leading-relaxed">
          Drop the PDF into <code className="bg-surface-2 px-1.5 py-0.5 rounded text-accent text-xs">/public/certificates/</code> then set the <code className="bg-surface-2 px-1.5 py-0.5 rounded text-accent text-xs">file</code> field in <code className="bg-surface-2 px-1.5 py-0.5 rounded text-accent text-xs">lib/certificates.ts</code>. The card will automatically show a live preview.
        </p>
      </div>

      <div className="mt-8 flex gap-4">
        <Link href="/cv" className="btn-ghost">← Back to CV</Link>
      </div>
    </div>
  );
}
