import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';
import type { Project } from '../data/projects';
import { ProjectVisual } from './ProjectVisual';
import { GithubIcon } from './SocialIcons';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-surface rounded-2xl border border-surface-border p-6 sm:p-7 flex flex-col justify-between hover:border-accent/40 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 group">
      <div>
        {/* Top bar: Project Number & Visual */}
        <div className="flex items-center justify-between pb-4 border-b border-surface-border mb-5">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-accent px-2 py-0.5 rounded bg-accent/10 border border-accent/20">
              PROJECT {project.number}
            </span>
          </div>
          <span className="text-xs font-mono text-text-muted uppercase">
            {project.categories.filter(c => c !== "All").join(" • ")}
          </span>
        </div>

        {/* Conceptual Visual Preview */}
        <div className="mb-6">
          <ProjectVisual type={project.workflowType} />
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-text-primary group-hover:text-accent-light transition-colors mb-3">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-6">
          {project.shortDescription}
        </p>

        {/* Technology Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-mono rounded-md bg-background-secondary text-text-secondary border border-surface-border"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-5 border-t border-surface-border flex items-center justify-between gap-3">
        <Link
          to={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-text-primary hover:text-accent group/btn transition-colors"
        >
          <span>View Case Study</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform text-accent" />
        </Link>

        <div className="flex items-center gap-2">
          {/* GitHub link only if configured */}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source code on GitHub`}
              className="p-2 rounded-lg bg-background-secondary hover:bg-surface-hover border border-surface-border text-text-secondary hover:text-text-primary transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}

          {/* Live URL only if configured */}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demonstration of ${project.title}`}
              className="p-2 rounded-lg bg-background-secondary hover:bg-surface-hover border border-surface-border text-text-secondary hover:text-text-primary transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
