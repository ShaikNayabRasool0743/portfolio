import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { portfolioData } from '../data/portfolio';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Hero: React.FC = () => {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden">
      {/* Subtle radial ambient background light */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[140px] pointer-events-none -z-10" 
        aria-hidden="true"
      />
      <div 
        className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-violetAccent/5 rounded-full blur-[120px] pointer-events-none -z-10" 
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Primary Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary tracking-tight leading-[1.1] mb-4">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-accent-light to-accent">Shaik Nayab Rasool</span>.
            </h1>

            {/* Value Proposition */}
            <h2 className="text-xl sm:text-2xl font-semibold text-text-secondary mb-5 leading-snug">
              I engineer reliable software with <span className="text-text-primary font-bold">Python</span>, <span className="text-text-primary font-bold">FastAPI</span>, and <span className="text-text-primary font-bold">Modern Web Systems</span>.
            </h2>

            {/* Concise Bio Paragraph strictly from resume */}
            <p className="text-base sm:text-lg text-text-secondary/90 max-w-2xl leading-relaxed mb-8">
              Computer Science graduate focused on backend architectures, RESTful APIs, data handling pipelines, and performant user interfaces.
            </p>

            {/* CTA Button Group */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-6 w-full sm:w-auto">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                onClick={scrollToProjects}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent hover:bg-accent-hover text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-accent/20 hover:shadow-accent/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={siteConfig.resumeUrl}
                download="Shaik_Nayab_Rasool_Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-surface hover:bg-surface-hover text-text-primary border border-surface-border hover:border-accent/40 font-mono text-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Download className="w-4 h-4 text-accent" />
                <span>Download Resume</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                onClick={scrollToContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-text-secondary hover:text-text-primary hover:bg-surface/50 font-medium text-sm transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>Let's Connect</span>
              </motion.a>
            </div>

            {/* Social Quick-Access Links */}
            <div className="flex items-center gap-3 mb-10">
              <span className="text-xs font-mono text-text-muted">Connect:</span>
              {siteConfig.github && (
                <motion.a
                  whileHover={{ y: -2 }}
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface hover:bg-surface-hover border border-surface-border hover:border-accent/50 text-xs font-mono text-text-secondary hover:text-text-primary transition-all shadow-sm"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-accent" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-text-muted" />
                </motion.a>
              )}
              {siteConfig.linkedin && (
                <motion.a
                  whileHover={{ y: -2 }}
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface hover:bg-surface-hover border border-surface-border hover:border-accent/50 text-xs font-mono text-text-secondary hover:text-text-primary transition-all shadow-sm"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-accent" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-text-muted" />
                </motion.a>
              )}
            </div>

            {/* Proof Strip */}
            <div className="w-full pt-6 border-t border-surface-border grid grid-cols-2 sm:grid-cols-4 gap-4">
              {portfolioData.proofStrip.map((item) => (
                <div key={item.number} className="flex flex-col">
                  <div className="flex items-center gap-1.5 font-mono text-xs text-accent mb-0.5">
                    <span>{item.number}</span>
                    <span className="h-[1px] w-4 bg-accent/40" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-text-primary">{item.label}</span>
                  <span className="text-[11px] text-text-muted">{item.detail}</span>
                </div>
              ))}
            </div>

          </motion.div>

          {/* Right Column: Framed Professional Portrait with Technical Metadata */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Animated backlight breathing glow */}
              <motion.div 
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-tr from-accent via-accent-light to-violetAccent rounded-[32px] blur-3xl -z-10 transform-gpu" 
                aria-hidden="true" 
              />

              {/* Portrait Container Frame */}
              <motion.div 
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-[24px] overflow-hidden border border-surface-border hover:border-accent/40 bg-surface p-2 shadow-xl shadow-black/25 transition-colors"
              >
                <div className="relative aspect-square rounded-[20px] overflow-hidden bg-background-secondary">
                  <img
                    src={`${import.meta.env.BASE_URL}profile.png`}
                    alt="Shaik Nayab Rasool - AI/ML Developer and Python Engineer"
                    width={400}
                    height={400}
                    loading="eager"
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
                    onError={(e) => {
                      // Fallback to jpg if png has issue
                      const target = e.currentTarget;
                      if (!target.src.endsWith('profile.jpg')) {
                        target.src = `${import.meta.env.BASE_URL}profile.jpg`;
                      }
                    }}
                  />
                  
                  {/* Subtle inner shadow border */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[20px] pointer-events-none" />
                </div>

                {/* Technical Metadata Badges around/over portrait */}
                <div className="mt-3 px-2 py-1.5 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-[11px] font-mono uppercase tracking-wider text-text-secondary">Core Stack:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {["Python", "FastAPI", "ReactJS", "REST APIs"].map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] font-mono font-medium rounded-md bg-background-secondary text-text-primary border border-surface-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-1 px-2 pb-1 flex items-center justify-between text-[11px] font-mono text-text-muted border-t border-surface-border/50 pt-2">
                  <span>Location: Ongole, AP</span>
                  <span className="flex items-center gap-1 text-accent-light">
                    <CheckCircle2 className="w-3 h-3 text-accent" />
                    Verified Resume Profile
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
