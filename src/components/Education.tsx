import React from 'react';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 lg:py-28 relative border-t border-surface-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Label */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs text-accent tracking-widest uppercase">05 // EDUCATION</span>
          <span className="h-[1px] w-8 bg-surface-border" />
        </div>

        {/* Section Header */}
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
            Academic Background
          </h2>
          <p className="text-base sm:text-lg text-text-secondary mt-1">
            Formal engineering education in Computer Science.
          </p>
        </div>

        {/* Education Timeline Card */}
        <div className="max-w-3xl">
          {portfolioData.education.map((edu, idx) => (
            <div
              key={idx}
              className="bg-surface rounded-2xl border border-surface-border p-6 sm:p-8 hover:border-accent/40 transition-colors shadow-lg relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-5 border-b border-surface-border mb-6">
                <div>
                  <div className="flex items-center gap-2 text-accent-light text-sm font-mono mb-1">
                    <GraduationCap className="w-4 h-4 text-accent" />
                    <span>DEGREE PROGRAM</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-text-primary">
                    {edu.degree}
                  </h3>
                  <div className="text-base font-medium text-text-secondary mt-1">
                    {edu.institution}
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-1.5 font-mono text-xs text-text-muted">
                  <div className="flex items-center gap-1.5 bg-background-secondary px-3 py-1.5 rounded-lg border border-surface-border">
                    <Calendar className="w-3.5 h-3.5 text-accent" />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="flex items-center gap-1 text-text-muted pt-1">
                    <MapPin className="w-3 h-3" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono uppercase text-text-muted">Cumulative Score:</span>
                  <span className="px-3 py-1 text-sm font-mono font-bold rounded-md bg-accent/15 text-accent-light border border-accent/25 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-accent" />
                    {edu.grade}
                  </span>
                </div>

                <span className="text-xs font-mono text-text-muted">
                  Affiliated & Verified
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
