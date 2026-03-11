export interface Project {
  title: string;
  description: string;
  tech: string[];
  category: string;
  // Replace these placeholder URLs with actual screenshots:
  // Put your image in /public/images/projects/filename.jpg
  // then set image: "/images/projects/filename.jpg"
  image?: string;
  url?: string;
  github?: string;
  featured?: boolean;
  year?: string;
}

export const projects: Project[] = [
  {
    title: "EcoHost CRM Platform",
    description:
      "Full-stack hosting and client management system for EcoHost by Eldohub. Handles service billing, support tickets, automated reminders, and client portals.",
    tech: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    category: "Web Application",
    year: "2025",
    featured: true,
    image: "/images/ecohost.png",
  },
  {
    title: "AutoVault",
    description:
      "WhatsApp-first car classifieds marketplace for Kenya. C2C platform where sellers list vehicles and buyers contact them directly. Features a trust scoring system, admin-gated listing approval, and subscription monetization. Built for the Kenyan market — think OLX Autos, purpose-built.",
    tech: ["Laravel 12", "Livewire 3", "PHP", "MySQL", "Tailwind CSS"],
    category: "Web Application",
    year: "2025",
    featured: true,
    image: "/images/autovault.png",
  },
  {
    title: "Biz Mashinani Platform",
    description:
      "Web platform for the Biz Mashinani programme — a 15-month Mastercard Foundation initiative implemented by EldoHub to empower financially disadvantaged youth to build digital livelihoods across four rural counties in Kenya.",
    tech: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    category: "Web Application",
    year: "2025",
    featured: true,
    url: "https://bizmashinani.eldohub.co.ke/",
    image: "/images/biz-mashinani.png",
  },
  {
    title: "CorpusFeed",
    description:
      "Content aggregation and feed management platform. Handles content ingestion, categorization, and delivery — built for scale and editorial control.",
    tech: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    category: "Web Application",
    year: "2025",
    featured: true,
    url: "https://test.corpusfeed.co.ke/",
    image: "/images/corpus-feed.jpg",
  },
  {
    title: "TechRun & Inclusive TechRun Event",
    description:
      "Event management platform for tech community events — registrations, ticketing, attendee management, and post-event reporting.",
    tech: ["Laravel", "PHP", "Tailwind CSS"],
    category: "Web Application",
    year: "2024",
    featured: false,
    image: "/images/techrun.png",
  },
  {
    title: "Eldoret Wraps & Tints",
    description:
      "Business website for a vehicle wrapping and window tinting company in Eldoret. Showcases services, portfolio, and drives customer inquiries.",
    tech: ["WordPress", "PHP", "Elementor"],
    category: "Web Development",
    year: "2025",
    url: "https://eldwraps.limbaromana.co.ke/",
    image: "/images/eldoret-wraps.jpg",
  },
  {
    title: "Sunset Serenity Beach Villas",
    description:
      "Booking and property showcase website for a beach villa rental business. Integrated availability calendar and WhatsApp inquiry flow.",
    tech: ["WordPress", "PHP", "Elementor"],
    category: "Web Development",
    year: "2023",
    image: "/images/sunset-serenity.png",
  },
  {
    title: "Acacia School Eldoret",
    description:
      "Custom school website with admissions info, academic programmes, gallery, and school news section.",
    tech: ["HTML", "CSS", "PHP"],
    category: "Web Development",
    year: "2022",
    image: "/images/acacia-school.jpg",
  },
  {
    title: "Central Primary School",
    description:
      "Clean, parent-friendly informational website for a primary school. Optimised for mobile and low bandwidth connections.",
    tech: ["WordPress"],
    category: "Web Development",
    year: "2022",
    image: "/images/central-primary.png",
  },
];
