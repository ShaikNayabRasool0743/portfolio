import React from 'react';
import { Award, CheckCircle2, Languages, Globe } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 lg:py-28 relative border-t border-surface-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Label */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs text-accent tracking-widest uppercase">06 // CERTIFICATIONS</span>
          <span className="h-[1px] w-8 bg-surface-border" />
        </div>

        {/* Section Header */}
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
            Certifications & Languages
          </h2>
          <p className="text-base sm:text-lg text-text-secondary mt-1">
            Verified coursework credentials and spoken languages.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Certifications (8 columns) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioData.certifications.map((cert, idx) => (
              <div
                key={idx}
                className="bg-surface rounded-2xl border border-surface-border p-6 hover:border-accent/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-surface-border mb-4">
                    <span className="text-[10px] font-mono text-accent-light uppercase tracking-wider px-2 py-0.5 rounded bg-accent/10 border border-accent/20">
                      Verified Certification
                    </span>
                    <Award className="w-4 h-4 text-accent" />
                  </div>

                  <h3 className="text-lg font-bold text-text-primary mb-1">
                    {cert.title}
                  </h3>
                  <div className="text-sm font-mono text-accent-light font-medium mb-3">
                    {cert.provider}
                  </div>

                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-surface-border/40 flex items-center gap-1.5 text-xs font-mono text-text-muted">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Credential Completed</span>
                </div>
              </div>
            ))}
          </div>

          {/* Spoken Languages Card (4 columns) */}
          <div className="lg:col-span-4">
            <div className="bg-surface rounded-2xl border border-surface-border p-6 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-surface-border mb-4">
                  <div className="flex items-center gap-2">
                    <Languages className="w-4 h-4 text-accent" />
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-text-primary">
                      Languages Known
                    </span>
                  </div>
                  <Globe className="w-4 h-4 text-text-muted" />
                </div>

                <p className="text-xs sm:text-sm text-text-secondary mb-4 leading-relaxed">
                  Proficient communication for cross-functional teamwork and technical collaboration:
                </p>

                <div className="space-y-2.5">
                  {portfolioData.languages.map((lang) => (
                    <div
                      key={lang}
                      className="flex items-center justify-between p-3 rounded-xl bg-background-secondary border border-surface-border font-mono text-xs"
                    >
                      <span className="text-text-primary font-medium">{lang}</span>
                      <span className="text-accent-light flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        Fluent / Spoken
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-surface-border/40 text-[11px] font-mono text-text-muted">
                No quantitative score claims; verified proficiency.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
