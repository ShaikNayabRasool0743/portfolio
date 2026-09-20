import React from 'react';
import { ArrowUp, Mail, Terminal } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-surface-border bg-background-secondary/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-surface-border/60">
          <div>
            <div className="flex items-center gap-2 font-mono text-sm font-bold text-text-primary mb-1">
              <Terminal className="w-4 h-4 text-accent" />
              <span>{siteConfig.fullName}</span>
            </div>
            <p className="text-xs font-mono text-text-secondary">
              {siteConfig.role} • {siteConfig.location}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-text-secondary">
            <a href="#about" className="hover:text-text-primary transition-colors">About</a>
            <a href="#experience" className="hover:text-text-primary transition-colors">Experience</a>
            <a href="#skills" className="hover:text-text-primary transition-colors">Skills</a>
            <a href="#projects" className="hover:text-text-primary transition-colors">Projects</a>
            <a href="#education" className="hover:text-text-primary transition-colors">Education</a>
            <a href="#contact" className="hover:text-text-primary transition-colors">Contact</a>
            
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface hover:bg-surface-hover border border-surface-border text-text-primary transition-colors ml-auto md:ml-2"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-accent" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-text-muted">
          <div>
            © 2026 {siteConfig.fullName}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            {siteConfig.showEmail && siteConfig.email ? (
              <a href={`mailto:${siteConfig.email}`} className="hover:text-text-primary transition-colors flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-accent" />
                <span>Email</span>
              </a>
            ) : (
              <a href="#contact" className="hover:text-text-primary transition-colors flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-accent" />
                <span>Message</span>
              </a>
            )}
            {siteConfig.github && (
              <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors flex items-center gap-1">
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            )}
            {siteConfig.linkedin && (
              <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors flex items-center gap-1">
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
