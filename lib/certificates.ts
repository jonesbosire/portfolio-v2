export interface Certificate {
  name: string;
  issuer: string;
  year: string;
  category: string;
  file?: string; // drop PDF in /public/certificates/ then set: "/certificates/filename.pdf"
}

export const certificates: Certificate[] = [
  {
    name: "SME Loop Methodology — Trainer of Trainers",
    issuer: "GIZ / ENABEL · IYBA-SEED",
    year: "2025",
    category: "Training & Facilitation",
    // file: "/certificates/sme-loop-tot.pdf",
  },
  {
    name: "Product Certification — Trainer of Trainers",
    issuer: "GIZ / ENABEL · IYBA-SEED",
    year: "2025",
    category: "Training & Facilitation",
    // file: "/certificates/product-certification-tot.pdf",
  },
  {
    name: "Financial Literacy — Trainer of Trainers",
    issuer: "GIZ / ENABEL · IYBA-SEED",
    year: "2025",
    category: "Training & Facilitation",
    // file: "/certificates/financial-literacy-tot.pdf",
  },
  {
    name: "SEED Expansion Box (SEB) Tools — Trainer of Trainers",
    issuer: "GIZ / ENABEL · IYBA-SEED",
    year: "2025",
    category: "Training & Facilitation",
    // file: "/certificates/seb-tools-tot.pdf",
  },
  {
    name: "Financial & Narrative Business Planning for Investment Readiness",
    issuer: "GIZ / ENABEL · IYBA-SEED",
    year: "2025",
    category: "Business & Finance",
    // file: "/certificates/financial-narrative-planning.pdf",
  },
  {
    name: "Innovation Ecosystem Lifecycle",
    issuer: "Afrilabs & Strathmore University",
    year: "2024",
    category: "Innovation & Ecosystems",
    // file: "/certificates/innovation-ecosystem-lifecycle.pdf",
  },
  {
    name: "Gig & Digital Economy Trainer",
    issuer: "EldoHub / GIZ",
    year: "2023",
    category: "Training & Facilitation",
    // file: "/certificates/gig-digital-economy-trainer.pdf",
  },
];
