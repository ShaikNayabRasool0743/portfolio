import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/projects';
import { ProjectCard } from './ProjectCard';

type CategoryFilter = "All" | "Python" | "Machine Learning" | "Data" | "Web Development";

const filterTabs: CategoryFilter[] = ["All", "Python", "Machine Learning", "Data", "Web Development"];

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("All");

  const filteredProjects = projectsData.filter((proj) =>
    activeFilter === "All" ? true : proj.categories.includes(activeFilter)
  );

  return (
    <section id="projects" className="py-20 lg:py-28 relative border-t border-surface-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Label */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs text-accent tracking-widest uppercase">04 // PROJECTS</span>
          <span className="h-[1px] w-8 bg-surface-border" />
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
              Selected Projects
            </h2>
            <p className="text-base sm:text-lg text-text-secondary mt-1">
              Projects that demonstrate my hands-on development and problem-solving.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-surface border border-surface-border self-start md:self-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveFilter(tab)}
                className={`px-3 py-1.5 text-xs font-mono font-medium rounded-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  activeFilter === tab
                    ? 'bg-accent text-white shadow-sm'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface-hover'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
