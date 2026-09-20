import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, GraduationCap, Calendar, Award, Code2, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const About: React.FC = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-20 lg:py-28 relative border-t border-surface-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Label */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-3"
        >
          <span className="font-mono text-xs text-accent tracking-widest uppercase">01 // ABOUT</span>
          <span className="h-[1px] w-8 bg-surface-border" />
        </motion.div>

        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
            {about.heading}
          </h2>
          <p className="text-base sm:text-lg text-text-secondary mt-1 font-medium">
            {about.subheading}
          </p>
        </motion.div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Narrative Summary */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 space-y-5 text-text-secondary leading-relaxed"
          >
            {about.bio.map((paragraph, index) => (
              <p key={index} className="text-base sm:text-lg">
                {paragraph}
              </p>
            ))}

            <div className="pt-4 border-t border-surface-border/80">
              <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-text-primary mb-3">
                Core Development Focus Areas
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  "Python Machine Learning Pipelines",
                  "FastAPI & REST API Architecture",
                  "Structured Data Cleaning & Analytics",
                  "Modern Front-End (ReactJS & CSS3)",
                  "Model Evaluation on Structured Datasets",
                  "Clean Code & Software Design Patterns"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-text-secondary">
                    <span className="w-4 h-4 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0 text-accent">
                      <Check className="w-2.5 h-2.5" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Compact Verified Information Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <motion.div 
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="bg-surface rounded-2xl border border-surface-border hover:border-accent/40 p-6 shadow-xl relative overflow-hidden transition-colors"
            >
              {/* Subtle accent corner glow */}
              <div 
                className="absolute -top-12 -right-12 w-28 h-28 bg-accent/10 rounded-full blur-xl pointer-events-none" 
                aria-hidden="true" 
              />

              <div className="flex items-center justify-between pb-4 border-b border-surface-border mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="font-mono text-xs uppercase tracking-wider text-text-primary font-semibold">
                    Technical Profile Data
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-background-secondary border border-surface-border text-text-muted">
                  Verified
                </span>
              </div>

              <dl className="space-y-4 font-mono text-xs sm:text-sm">
                <div className="flex items-center justify-between py-2 border-b border-surface-border/40">
                  <dt className="flex items-center gap-2 text-text-muted">
                    <User className="w-3.5 h-3.5 text-accent" />
                    <span>NAME</span>
                  </dt>
                  <dd className="text-text-primary font-medium">{about.quickFacts.name}</dd>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-surface-border/40">
                  <dt className="flex items-center gap-2 text-text-muted">
                    <MapPin className="w-3.5 h-3.5 text-accent" />
                    <span>LOCATION</span>
                  </dt>
                  <dd className="text-text-primary font-medium">{about.quickFacts.location}</dd>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-surface-border/40">
                  <dt className="flex items-center gap-2 text-text-muted">
                    <GraduationCap className="w-3.5 h-3.5 text-accent" />
                    <span>EDUCATION</span>
                  </dt>
                  <dd className="text-text-primary font-medium">{about.quickFacts.education}</dd>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-surface-border/40">
                  <dt className="flex items-center gap-2 text-text-muted">
                    <Calendar className="w-3.5 h-3.5 text-accent" />
                    <span>GRADUATION</span>
                  </dt>
                  <dd className="text-text-primary font-medium">{about.quickFacts.graduation}</dd>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-surface-border/40">
                  <dt className="flex items-center gap-2 text-text-muted">
                    <Award className="w-3.5 h-3.5 text-accent" />
                    <span>CGPA</span>
                  </dt>
                  <dd className="text-accent-light font-bold">{about.quickFacts.cgpa}</dd>
                </div>

                <div className="flex items-center justify-between py-2">
                  <dt className="flex items-center gap-2 text-text-muted">
                    <Code2 className="w-3.5 h-3.5 text-accent" />
                    <span>ROLE</span>
                  </dt>
                  <dd className="text-text-primary font-medium bg-accent/15 text-accent-light px-2 py-0.5 rounded">
                    {about.quickFacts.role}
                  </dd>
                </div>
              </dl>
            </motion.div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
