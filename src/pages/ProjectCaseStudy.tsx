import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Check, Terminal, Layers, BookOpen, AlertCircle } from 'lucide-react';
import { projectsData } from '../data/projects';
import { ProjectVisual } from '../components/ProjectVisual';
import { GithubIcon } from '../components/SocialIcons';

export const ProjectCaseStudy: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const project = projectsData.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4">
        <div className="bg-surface rounded-2xl border border-surface-border p-8 max-w-md w-full text-center">
          <AlertCircle className="w-10 h-10 text-amber-400 mx-auto mb-4" />
          <h1 className="text-xl font-bold text-text-primary mb-2">Project Case Study Not Found</h1>
          <p className="text-sm text-text-secondary mb-6">
            The project case study specified could not be located in the catalog.
          </p>
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent hover:bg-accent-hover text-white text-sm font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio Projects</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen pt-28 pb-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-text-secondary hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO PROJECTS</span>
          </Link>
        </div>

        {/* Header Block */}
        <div className="border-b border-surface-border pb-8 mb-10">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="font-mono text-xs font-bold text-accent px-2.5 py-1 rounded bg-accent/10 border border-accent/20">
              PROJECT {project.number}
            </span>
            <span className="text-xs font-mono text-text-muted">
              {project.categories.filter(c => c !== 'All').join(' • ')}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight mb-4">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-text-secondary max-w-3xl leading-relaxed mb-6">
            {project.shortDescription}
          </p>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono rounded-lg bg-surface text-text-primary border border-surface-border"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* External Links if available */}
          {(project.githubUrl || project.liveUrl) && (
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface hover:bg-surface-hover border border-surface-border text-xs font-mono text-text-primary transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-accent" />
                  <span>View Repository</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent hover:bg-accent-hover text-xs font-mono text-white transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Application</span>
                </a>
              )}
            </div>
          )}
        </div>

        {/* Main Visual & Pipeline Diagram */}
        <div className="mb-12">
          <h2 className="text-xs font-mono uppercase text-text-muted tracking-wider mb-3 flex items-center gap-2">
            <Layers className="w-3.5 h-3.5 text-accent" />
            System Architecture & Flow Diagram
          </h2>
          <ProjectVisual type={project.workflowType} className="p-6 sm:p-8" />
        </div>

        {/* Content Breakdown */}
        <div className="space-y-10">
          
          {/* Overview */}
          <section className="bg-surface rounded-2xl border border-surface-border p-6 sm:p-8">
            <h2 className="text-xl font-bold text-text-primary mb-3">Project Overview</h2>
            <p className="text-text-secondary leading-relaxed text-base">
              {project.overview}
            </p>
          </section>

          {/* Problem & Approach */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="bg-surface rounded-2xl border border-surface-border p-6 sm:p-7">
              <h2 className="text-lg font-bold text-text-primary mb-3">The Problem</h2>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                {project.problem}
              </p>
            </section>

            <section className="bg-surface rounded-2xl border border-surface-border p-6 sm:p-7">
              <h2 className="text-lg font-bold text-text-primary mb-3">Technical Approach</h2>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                {project.approach}
              </p>
            </section>
          </div>

          {/* Key Functionality & Features */}
          <section className="bg-surface rounded-2xl border border-surface-border p-6 sm:p-8">
            <h2 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
              <Terminal className="w-5 h-5 text-accent" />
              <span>Key Features & Implementation Details</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-text-secondary">
                  <span className="w-4 h-4 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0 text-accent mt-0.5">
                    <Check className="w-2.5 h-2.5" />
                  </span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-surface-border">
              <h3 className="text-xs font-mono uppercase tracking-wider text-text-muted mb-2">
                Implementation Modules:
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.keyFunctionality.map((func, idx) => (
                  <span key={idx} className="px-2.5 py-1 text-xs font-mono rounded bg-background-secondary text-text-primary border border-surface-border">
                    {func}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* What I Learned */}
          <section className="bg-surface rounded-2xl border border-surface-border p-6 sm:p-8">
            <h2 className="text-xl font-bold text-text-primary mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-accent" />
              <span>What I Learned</span>
            </h2>
            <p className="text-text-secondary text-base leading-relaxed">
              {project.whatILearned}
            </p>
          </section>

        </div>

        {/* Footer Navigation */}
        <div className="mt-14 pt-8 border-t border-surface-border flex items-center justify-between">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface hover:bg-surface-hover border border-surface-border text-xs font-mono text-text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-accent" />
            <span>Back to All Projects</span>
          </Link>
          
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              navigate('/#contact');
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent hover:bg-accent-hover text-xs font-mono text-white transition-colors"
          >
            <span>Discuss This Project</span>
          </a>
        </div>

      </div>
    </article>
  );
};
