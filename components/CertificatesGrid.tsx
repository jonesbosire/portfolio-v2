"use client";

import { useState } from "react";
import type { Certificate } from "@/lib/certificates";

function PlaceholderPreview({ cert }: { cert: Certificate }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-4">
      <div className="w-14 h-14 rounded-sm border-2 border-accent/30 flex items-center justify-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent opacity-60">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <p className="text-xs text-t-subtle text-center leading-snug opacity-60">PDF not yet uploaded</p>
    </div>
  );
}

function PdfPreview({ file, name }: { file: string; name: string }) {
  return (
    <div className="w-full h-full overflow-hidden relative">
      <iframe
        src={`${file}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
        title={name}
        className="absolute top-0 left-0 pointer-events-none border-0"
        style={{
          width: "200%",
          height: "200%",
          transform: "scale(0.5)",
          transformOrigin: "top left",
        }}
      />
    </div>
  );
}

function Modal({ cert, onClose }: { cert: Certificate; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal panel */}
      <div
        className="relative z-10 w-full max-w-4xl max-h-[90vh] flex flex-col rounded-sm border border-outline bg-surface shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 px-5 py-4 border-b border-outline shrink-0">
          <div>
            <p className="text-xs text-t-subtle uppercase tracking-widest font-semibold mb-0.5">{cert.category}</p>
            <h3 className="font-semibold text-t-primary font-[family-name:var(--font-space-grotesk)] leading-snug">
              {cert.name}
            </h3>
            <p className="text-xs text-t-secondary mt-0.5">{cert.issuer} · {cert.year}</p>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 w-8 h-8 rounded-sm border border-outline flex items-center justify-center text-t-subtle hover:text-t-primary hover:border-outline transition-colors"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* PDF viewer */}
        <div className="flex-1 min-h-0">
          {cert.file ? (
            <iframe
              src={`${cert.file}#toolbar=1&navpanes=0`}
              title={cert.name}
              className="w-full h-full border-0"
              style={{ minHeight: "60vh" }}
            />
          ) : (
            <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
              <div className="w-16 h-16 rounded-sm border-2 border-outline flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-t-subtle">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="text-t-secondary text-sm">PDF not yet uploaded.</p>
                <p className="text-t-subtle text-xs mt-1">Drop the file in <code className="bg-surface-2 px-1 rounded">/public/certificates/</code> and add the path in <code className="bg-surface-2 px-1 rounded">lib/certificates.ts</code></p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CertificatesGrid({ certs }: { certs: Certificate[] }) {
  const [active, setActive] = useState<Certificate | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {certs.map((cert, i) => (
          <button
            key={i}
            onClick={() => setActive(cert)}
            className="card rounded-sm overflow-hidden group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            {/* Preview area */}
            <div className="relative h-44 bg-surface-2 overflow-hidden border-b border-outline">
              {cert.file ? (
                <PdfPreview file={cert.file} name={cert.name} />
              ) : (
                <PlaceholderPreview cert={cert} />
              )}
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-200 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs text-white font-semibold tracking-widest uppercase bg-accent px-3 py-1.5 rounded-sm">
                  View PDF
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="p-4">
              <p className="text-xs text-accent uppercase tracking-widest font-semibold mb-1">{cert.category}</p>
              <h3 className="text-sm font-semibold text-t-primary group-hover:text-accent transition-colors leading-snug mb-1 font-[family-name:var(--font-space-grotesk)]">
                {cert.name}
              </h3>
              <p className="text-xs text-t-subtle">{cert.issuer} · {cert.year}</p>
            </div>
          </button>
        ))}
      </div>

      {active && <Modal cert={active} onClose={() => setActive(null)} />}
    </>
  );
}
