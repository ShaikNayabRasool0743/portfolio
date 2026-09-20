import React, { useState, useEffect } from 'react';
import { FileText, Download, ArrowUpRight, AlertCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const ResumeCTA: React.FC = () => {
  const [resumeAvailable, setResumeAvailable] = useState<boolean>(true);

  useEffect(() => {
    // Graceful verification that resume is accessible
    fetch(siteConfig.resumeUrl, { method: 'HEAD' })
      .then((res) => {
        if (!res.ok) {
          setResumeAvailable(false);
        }
      })
      .catch(() => {
        // Fallback: don't break UI
      });
  }, []);

  return (
    <section className="py-16 lg:py-20 relative border-t border-surface-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-surface to-background-secondary rounded-3xl border border-surface-border p-8 sm:p-12 relative overflow-hidden text-center max-w-4xl mx-auto shadow-2xl">
          
          {/* Ambient light */}
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-32 bg-accent/10 rounded-full blur-2xl pointer-events-none" 
            aria-hidden="true" 
          />

          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase bg-accent/10 border border-accent/25 text-accent-light mb-4">
            <FileText className="w-3.5 h-3.5" />
            Curriculum Vitae
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight mb-3">
            Let's build something useful.
          </h2>

          <p className="text-base sm:text-lg text-text-secondary max-w-xl mx-auto mb-8">
            Interested in my background or technical work? Review my complete technical qualifications and project history.
          </p>

          {resumeAvailable ? (
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-accent hover:bg-accent-hover text-white font-medium text-sm transition-all shadow-lg shadow-accent/20 hover:shadow-accent/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <span>View Resume</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={siteConfig.resumeUrl}
                download="Shaik_Nayab_Rasool_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-surface hover:bg-surface-hover text-text-primary border border-surface-border hover:border-accent/40 font-mono text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Download className="w-4 h-4 text-accent" />
                <span>Download Resume</span>
              </a>
            </div>
          ) : (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-sm font-mono">
              <AlertCircle className="w-4 h-4" />
              <span>Resume PDF not added yet.</span>
            </div>
          )}

          <div className="mt-6 text-xs font-mono text-text-muted">
            Format: PDF • Sourced directly from verified resume
          </div>

        </div>
      </div>
    </section>
  );
};
