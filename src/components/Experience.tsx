import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 lg:py-28 relative border-t border-surface-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Label */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs text-accent tracking-widest uppercase">02 // EXPERIENCE</span>
          <span className="h-[1px] w-8 bg-surface-border" />
        </div>

        {/* Section Header */}
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
            Work Experience
          </h2>
          <p className="text-base sm:text-lg text-text-secondary mt-1">
            Hands-on software and AI/ML engineering experience.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-surface-border ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-12">
          
          {portfolioData.experience.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="relative group"
            >
              {/* Timeline Indicator Dot with Animated Radar Ping */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-accent group-hover:border-accent-light group-hover:scale-110 transition-all flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="absolute -inset-1 rounded-full bg-accent/30 animate-ping pointer-events-none" />
              </div>

              {/* Experience Card */}
              <div className="bg-surface rounded-2xl border border-surface-border p-6 sm:p-8 hover:border-accent/40 transition-colors shadow-lg">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-surface-border mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl sm:text-2xl font-bold text-text-primary">
                        {exp.company}
                      </span>
                      {exp.program && (
                        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-accent/10 text-accent-light border border-accent/20">
                          {exp.program}
                        </span>
                      )}
                    </div>
                    <div className="text-base font-medium text-accent-light flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-accent" />
                      <span>{exp.role}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-xs text-text-muted bg-background-secondary px-3 py-1.5 rounded-lg border border-surface-border self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-accent" />
                    <span>Duration: {exp.duration}</span>
                  </div>
                </div>

                {/* Actual Responsibilities */}
                <div className="space-y-3 mb-6">
                  <span className="text-xs font-mono uppercase tracking-wider text-text-muted">
                    Core Technical Responsibilities & Contributions:
                  </span>
                  <ul className="space-y-3 pt-1">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-text-secondary leading-relaxed">
                        <ArrowRight className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology Tags (No fake metrics) */}
                <div className="pt-4 border-t border-surface-border flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-text-muted mr-1">Technologies Used:</span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono rounded-md bg-background-secondary text-text-primary border border-surface-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};
