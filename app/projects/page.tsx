import Image from "next/image";
import { projects } from "@/lib/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Jones Bosire",
  description:
    "Websites and web applications I've built — from WordPress sites to Laravel systems.",
};

export default function ProjectsPage() {
  const webApps = projects.filter((p) => p.category === "Web Application");
  const webDev = projects.filter((p) => p.category === "Web Development");

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="mb-16">
        <p className="section-label mb-4">What I&apos;ve built</p>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4">
          Projects
        </h1>
        <p className="text-t-secondary max-w-xl leading-relaxed">
          A mix of client work and internal tools — mostly PHP/Laravel and
          WordPress, with some React in the mix. Most of these are live and
          actively used.
        </p>
      </div>

      {/* Web Applications */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <p className="text-xs font-semibold tracking-widest text-accent uppercase">
            Web Applications
          </p>
          <div className="flex-1 h-px bg-surface-2" />
          <span className="text-xs text-t-subtle">{webApps.length} projects</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {webApps.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </section>

      {/* Web Development */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <p className="text-xs font-semibold tracking-widest text-t-secondary uppercase">
            Web Development
          </p>
          <div className="flex-1 h-px bg-surface-2" />
          <span className="text-xs text-t-subtle">{webDev.length} projects</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {webDev.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <div className="card rounded-sm overflow-hidden group">
      {/* Project image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={
            project.image ||
            `https://placehold.co/800x400/0d0d0d/1a1a1a?text=${encodeURIComponent(project.title)}&font=montserrat`
          }
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Overlaid badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="tag tag-white">{project.category}</span>
          {project.featured && (
            <span className="tag">Featured</span>
          )}
        </div>
        {project.year && (
          <span className="absolute top-3 right-3 text-xs text-t-secondary bg-black/60 px-2 py-0.5 rounded-sm">
            {project.year}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-semibold text-t-primary text-lg mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-t-secondary text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-0.5 rounded-sm border border-outline text-t-secondary"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        {(project.url || project.github) && (
          <div className="flex gap-4 pt-3 border-t border-outline">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-t-secondary hover:text-accent transition-colors"
              >
                Live site →
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-t-secondary hover:text-accent transition-colors"
              >
                GitHub →
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
