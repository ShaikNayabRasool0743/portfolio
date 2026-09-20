import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Cpu, Layout, Wrench } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const categoryIcons: Record<string, React.ReactNode> = {
  programming: <Code className="w-4 h-4 text-accent" />,
  backend: <Server className="w-4 h-4 text-accent" />,
  libraries: <Database className="w-4 h-4 text-accent" />,
  frameworks: <Cpu className="w-4 h-4 text-accent" />,
  frontend: <Layout className="w-4 h-4 text-accent" />,
  tools: <Wrench className="w-4 h-4 text-accent" />,
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 lg:py-28 relative border-t border-surface-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Label */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs text-accent tracking-widest uppercase">03 // SKILLS</span>
          <span className="h-[1px] w-8 bg-surface-border" />
        </div>

        {/* Section Header */}
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
            Technical Stack
          </h2>
          <p className="text-base sm:text-lg text-text-secondary mt-1">
            Tools, libraries, and frameworks I use to engineer software and ML systems.
          </p>
        </div>

        {/* Categorized Skill Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.skillCategories.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: index * 0.06 }}
              className="bg-surface rounded-2xl border border-surface-border p-6 hover:border-accent/50 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-accent/5"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-3 border-b border-surface-border mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-background-secondary border border-surface-border group-hover:border-accent/40 group-hover:bg-accent/10 transition-colors">
                      {categoryIcons[group.category] || <Code className="w-4 h-4 text-accent" />}
                    </div>
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-text-primary">
                      {group.label}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-text-muted">
                    {group.skills.length} tools
                  </span>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {group.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.15 }}
                      className="px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-background-secondary text-text-primary border border-surface-border hover:border-accent hover:text-accent-light hover:bg-surface-hover transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Decorative category label bar */}
              <div className="mt-5 pt-3 border-t border-surface-border/40 flex items-center justify-between">
                <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider">
                  Verified In Practice
                </span>
                <span className="h-1 w-8 rounded-full bg-surface-border group-hover:bg-accent/40 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
