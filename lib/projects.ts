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
    title: "Eldohub Academy LMS",
    description:
      "Learning management system for Eldohub Academy. Handles course enrolments, payments via M-Pesa, student progress tracking, and certificates.",
    tech: ["Laravel", "Tailwind CSS", "MySQL", "M-Pesa API"],
    category: "Web Application",
    year: "2024",
    featured: true,
    image: "/images/techrun.png",
  },
  {
    title: "TechRun & Inclusive TechRun Event",
    description:
      "Event management platform for tech community events — registrations, ticketing, attendee management, and post-event reporting.",
    tech: ["Laravel", "PHP", "Tailwind CSS"],
    category: "Web Application",
    year: "2024",
    featured: true,
    image: "/images/techrun.png",
  },
  {
    title: "Eldohub Website",
    description:
      "Main website for Eldohub innovation hub — showcasing programmes, events, and the team. Built on WordPress with custom Elementor components.",
    tech: ["WordPress", "Elementor", "PHP"],
    category: "Web Development",
    year: "2023",
    featured: true,
    image: "https://placehold.co/800x450/0d0d0d/22c55e?text=Eldohub+Website&font=montserrat",
  },
  {
    title: "Sunset Serenity Beach Villas",
    description:
      "Booking and property showcase website for a beach villa rental business. Integrated availability calendar and WhatsApp inquiry flow.",
    tech: ["WordPress", "PHP", "Elementor"],
    category: "Web Development",
    year: "2023",
    image: "https://placehold.co/800x450/0d0d0d/22c55e?text=Sunset+Serenity&font=montserrat",
  },
  {
    title: "Acacia School Eldoret",
    description:
      "Custom school website with admissions info, academic programmes, gallery, and school news section.",
    tech: ["HTML", "CSS", "PHP"],
    category: "Web Development",
    year: "2022",
    image: "https://placehold.co/800x450/0d0d0d/22c55e?text=Acacia+School&font=montserrat",
  },
  {
    title: "Central Primary School",
    description:
      "Clean, parent-friendly informational website for a primary school. Optimised for mobile and low bandwidth connections.",
    tech: ["WordPress"],
    category: "Web Development",
    year: "2022",
    image: "https://placehold.co/800x450/0d0d0d/22c55e?text=Central+Primary&font=montserrat",
  },
];
