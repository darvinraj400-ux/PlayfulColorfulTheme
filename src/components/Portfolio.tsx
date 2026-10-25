import { useState } from 'react';

interface Project {
  id: number;
  number: string;
  category: string;
  title: string;
  description: string;
  colors: { bg: string; accent: string; shape: string };
}

const projects: Project[] = [
  {
    id: 1,
    number: '01',
    category: 'Brand worlds',
    title: 'Good Mood Market',
    description: 'Thoughtfully made for everyday use.',
    colors: { bg: '#FF6D59', accent: '#FFF6D9', shape: '#292342' },
  },
  {
    id: 2,
    number: '02',
    category: 'Digital playgrounds',
    title: 'Pop! Festival',
    description: 'A fresh perspective, shaped with care.',
    colors: { bg: '#C7B6FF', accent: '#8CD9FF', shape: '#292342' },
  },
  {
    id: 3,
    number: '03',
    category: 'Campaigns',
    title: 'Happy Habit',
    description: 'Designed to make the ordinary feel special.',
    colors: { bg: '#B9F3C7', accent: '#FFF6D9', shape: '#292342' },
  },
];

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Section header */}
        <div className="mb-16 md:mb-20">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-plum/50 mb-4">
            01 / The Collection
          </p>
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold text-plum leading-tight mb-4">
            What we make.
          </h2>
          <p className="text-lg text-plum/60 font-serif italic">
            Color outside the expected lines.
          </p>
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onExplore={() => setActiveProject(project)}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-plum font-semibold hover:text-coral transition-colors text-lg group"
          >
            See what's possible
            <span className="transition-transform group-hover:translate-x-1">↗</span>
          </a>
        </div>
      </div>

      {/* Project overlay */}
      {activeProject && (
        <ProjectOverlay
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}

function ProjectCard({ project, onExplore }: { project: Project; onExplore: () => void }) {
  return (
    <article className="project-card group rounded-2xl overflow-hidden bg-warm-white border border-plum/5">
      {/* Artwork area */}
      <div
        className="relative aspect-[4/3] overflow-hidden"
        style={{ backgroundColor: project.colors.bg + '20' }}
      >
        <ProjectArtwork project={project} />
        {/* Project number */}
        <div className="absolute top-4 left-4 bg-plum text-butter font-mono text-xs px-2.5 py-1 rounded-full">
          {project.number}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-plum/50 mb-2">
          {project.category}
        </p>
        <h3 className="text-xl font-bold text-plum mb-2">{project.title}</h3>
        <p className="text-sm text-plum/60 mb-4">{project.description}</p>
        <button
          onClick={onExplore}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-coral hover:text-coral-dark transition-colors group/link"
          aria-label={`Explore details for ${project.title}`}
        >
          Explore details
          <span className="transition-transform group-hover/link:translate-x-0.5">↗</span>
        </button>
      </div>
    </article>
  );
}

function ProjectArtwork({ project }: { project: Project }) {
  if (project.id === 1) {
    return (
      <svg className="w-full h-full" viewBox="0 0 300 225" fill="none" aria-hidden="true">
        <rect width="300" height="225" fill="#FFF0E8" />
        <circle cx="150" cy="112" r="70" fill="#FF6D59" opacity="0.8" />
        <rect x="100" y="60" width="100" height="100" rx="12" fill="#FFF6D9" opacity="0.7" />
        <circle cx="200" cy="160" r="30" fill="#292342" opacity="0.15" />
        <path d="M80 180L120 140L160 170L200 130L240 160" stroke="#292342" strokeWidth="2" fill="none" opacity="0.3" />
        <circle cx="90" cy="70" r="15" fill="#FF6D59" opacity="0.4" />
        <rect x="210" y="50" width="40" height="40" rx="8" fill="#FFF6D9" opacity="0.6" transform="rotate(15 230 70)" />
      </svg>
    );
  }
  if (project.id === 2) {
    return (
      <svg className="w-full h-full" viewBox="0 0 300 225" fill="none" aria-hidden="true">
        <rect width="300" height="225" fill="#EDE7FF" />
        <ellipse cx="150" cy="112" rx="90" ry="70" fill="#C7B6FF" opacity="0.6" />
        <circle cx="100" cy="90" r="40" fill="#8CD9FF" opacity="0.5" />
        <circle cx="200" cy="130" r="35" fill="#FF6D59" opacity="0.3" />
        <path d="M60 180C100 140 140 160 180 130C220 100 260 140 280 120" stroke="#292342" strokeWidth="2" fill="none" opacity="0.2" />
        <rect x="130" y="70" width="50" height="50" rx="25" fill="#FFF6D9" opacity="0.6" transform="rotate(20 155 95)" />
        <circle cx="230" cy="60" r="20" fill="#B9F3C7" opacity="0.5" />
      </svg>
    );
  }
  return (
    <svg className="w-full h-full" viewBox="0 0 300 225" fill="none" aria-hidden="true">
      <rect width="300" height="225" fill="#E8FBF0" />
      <circle cx="150" cy="112" r="65" fill="#B9F3C7" opacity="0.7" />
      <path d="M150 50L170 90L210 80L180 112L210 145L170 135L150 175L130 135L90 145L120 112L90 80L130 90L150 50Z" fill="#292342" opacity="0.12" />
      <circle cx="100" cy="160" r="25" fill="#FFF6D9" opacity="0.7" />
      <circle cx="210" cy="70" r="20" fill="#C7B6FF" opacity="0.5" />
      <ellipse cx="180" cy="170" rx="30" ry="20" fill="#FF6D59" opacity="0.2" />
      <path d="M70 50Q150 30 230 50" stroke="#292342" strokeWidth="1.5" fill="none" opacity="0.15" />
    </svg>
  );
}

function ProjectOverlay({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`Project details: ${project.title}`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-plum/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative bg-warm-white rounded-3xl max-w-lg w-full max-h-[85vh] overflow-y-auto p-8 md:p-10 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-plum/5 hover:bg-plum/10 flex items-center justify-center transition-colors"
          aria-label="Close project details"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="4" y1="4" x2="14" y2="14" />
            <line x1="14" y1="4" x2="4" y2="14" />
          </svg>
        </button>

        <div className="mb-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-plum/50 mb-2">
            Project {project.number} — {project.category}
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-plum">{project.title}</h3>
        </div>

        <div className="aspect-[16/10] rounded-xl overflow-hidden mb-6">
          <ProjectArtwork project={project} />
        </div>

        <p className="text-plum/70 leading-relaxed mb-4">
          {project.description}
        </p>
        <p className="text-plum/50 text-sm leading-relaxed mb-6">
          This is a concept project showcasing the studio's approach to {project.category.toLowerCase()}.
          Each project is crafted with intention, combining bold visual ideas with thoughtful execution.
        </p>

        <a
          href="#contact"
          onClick={onClose}
          className="inline-flex items-center gap-2 bg-coral text-warm-white px-6 py-3 rounded-full font-semibold hover:bg-coral-dark transition-colors"
        >
          Start a similar project
          <span>↗</span>
        </a>
      </div>
    </div>
  );
}
