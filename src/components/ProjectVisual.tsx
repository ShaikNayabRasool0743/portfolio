import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, TrendingUp, FileText, Cpu, CheckCircle, Scissors, ArrowRight, Sparkles, Layers, Check, Copy } from 'lucide-react';

interface ProjectVisualProps {
  type: "dashboard" | "nlp-pipeline" | "url-shortener";
  className?: string;
}

export const ProjectVisual: React.FC<ProjectVisualProps> = ({ type, className = "" }) => {
  // Interactive state for URL Shortener demonstration
  const [shortened, setShortened] = useState(true);
  const [copiedLink, setCopiedLink] = useState(false);

  // Interactive state for Dashboard breakdown
  const [activeSegment, setActiveSegment] = useState(2);

  if (type === "dashboard") {
    const bars = [45, 68, 52, 85, 92, 74, 98, 88];

    return (
      <div className={`relative bg-background-secondary/90 rounded-xl border border-surface-border p-4 sm:p-5 overflow-hidden font-mono ${className}`}>
        {/* Conceptual Label */}
        <div className="flex items-center justify-between pb-3 border-b border-surface-border mb-3 text-[10px] text-text-muted">
          <span className="flex items-center gap-1.5 text-accent font-semibold">
            <BarChart3 className="w-3.5 h-3.5" />
            POWER BI & SQL ANALYTICS
          </span>
          <span className="bg-surface px-2 py-0.5 rounded text-[9px] text-text-muted border border-surface-border">
            Interactive preview
          </span>
        </div>

        {/* Mini Dashboard Grid */}
        <div className="grid grid-cols-3 gap-2 mb-3">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-surface p-2.5 rounded-lg border border-surface-border cursor-default"
          >
            <span className="text-[10px] text-text-muted block">KPI 01</span>
            <span className="text-xs sm:text-sm font-bold text-text-primary">Sales Trend</span>
            <div className="flex items-center gap-1 text-[10px] text-emerald-400 mt-1">
              <TrendingUp className="w-3 h-3 animate-pulse" />
              <span>Positive</span>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-surface p-2.5 rounded-lg border border-surface-border cursor-default"
          >
            <span className="text-[10px] text-text-muted block">KPI 02</span>
            <span className="text-xs sm:text-sm font-bold text-text-primary">Volume</span>
            <span className="text-[10px] text-accent-light block mt-1">Segmented</span>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-surface p-2.5 rounded-lg border border-surface-border cursor-default"
          >
            <span className="text-[10px] text-text-muted block">KPI 03</span>
            <span className="text-xs sm:text-sm font-bold text-text-primary">Margin</span>
            <span className="text-[10px] text-violetAccent block mt-1">Aggregated</span>
          </motion.div>
        </div>

        {/* Animated Chart Bars */}
        <div className="bg-surface/70 rounded-lg p-3 border border-surface-border">
          <div className="flex items-center justify-between text-[10px] text-text-muted mb-2">
            <span>SQL Aggregated Output</span>
            <span className="text-accent text-[9px]">Click bars to inspect</span>
          </div>
          <div className="h-16 flex items-end justify-between gap-1.5 pt-2">
            {bars.map((val, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveSegment(idx)}
                className="flex-1 flex flex-col items-center gap-1 h-full justify-end group/bar focus:outline-none"
                aria-label={`Quarter ${idx % 4 + 1} metric ${val}`}
              >
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: `${val}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.05, ease: "easeOut" }}
                  className={`w-full rounded-t transition-colors ${
                    activeSegment === idx
                      ? 'bg-gradient-to-t from-accent to-accent-light shadow-sm shadow-accent/40'
                      : 'bg-gradient-to-t from-accent/30 to-accent/60 group-hover/bar:from-accent/50 group-hover/bar:to-accent'
                  }`}
                />
                <span className={`text-[8px] transition-colors ${activeSegment === idx ? 'text-accent font-bold' : 'text-text-muted'}`}>
                  Q{idx % 4 + 1}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "nlp-pipeline") {
    return (
      <div className={`relative bg-background-secondary/90 rounded-xl border border-surface-border p-4 sm:p-5 overflow-hidden font-mono ${className}`}>
        <div className="flex items-center justify-between pb-3 border-b border-surface-border mb-3 text-[10px] text-text-muted">
          <span className="flex items-center gap-1.5 text-accent font-semibold">
            <Cpu className="w-3.5 h-3.5" />
            NLP & MACHINE LEARNING PIPELINE
          </span>
          <span className="bg-surface px-2 py-0.5 rounded text-[9px] text-text-muted border border-surface-border">
            Animated flow
          </span>
        </div>

        {/* Animated Flowchart Nodes */}
        <div className="grid grid-cols-5 gap-1.5 items-center text-center py-2">
          
          <motion.div 
            whileHover={{ y: -2 }}
            className="bg-surface p-2 rounded-lg border border-surface-border flex flex-col items-center"
          >
            <FileText className="w-3.5 h-3.5 text-text-secondary mb-1" />
            <span className="text-[9px] font-bold text-text-primary">Article</span>
            <span className="text-[8px] text-text-muted">Raw Text</span>
          </motion.div>

          {/* Animated Arrow 1 */}
          <div className="flex justify-center relative">
            <ArrowRight className="w-3.5 h-3.5 text-accent/50" />
            <motion.span 
              animate={{ x: [-10, 10], opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="absolute w-1 h-1 rounded-full bg-accent"
            />
          </div>

          <motion.div 
            whileHover={{ y: -2 }}
            className="bg-surface p-2 rounded-lg border border-accent/30 flex flex-col items-center bg-accent/5"
          >
            <Layers className="w-3.5 h-3.5 text-accent mb-1" />
            <span className="text-[9px] font-bold text-accent-light">TF-IDF</span>
            <span className="text-[8px] text-text-muted">Vectors</span>
          </motion.div>

          {/* Animated Arrow 2 */}
          <div className="flex justify-center relative">
            <ArrowRight className="w-3.5 h-3.5 text-accent/50" />
            <motion.span 
              animate={{ x: [-10, 10], opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: 0.7, ease: "easeInOut" }}
              className="absolute w-1 h-1 rounded-full bg-accent"
            />
          </div>

          <motion.div 
            whileHover={{ y: -2 }}
            className="bg-surface p-2 rounded-lg border border-emerald-500/40 flex flex-col items-center bg-emerald-500/10"
          >
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400 mb-1" />
            <span className="text-[9px] font-bold text-emerald-400">Classify</span>
            <span className="text-[8px] text-emerald-300/80">Real/Fake</span>
          </motion.div>

        </div>

        {/* Streamlit Output Strip with Pulse */}
        <div className="mt-3 bg-surface/80 rounded-lg px-3 py-2 border border-surface-border flex items-center justify-between text-[10px]">
          <span className="text-text-muted flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Streamlit Deployment
          </span>
          <span className="text-accent-light font-medium flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-accent" />
            Instant Inference
          </span>
        </div>
      </div>
    );
  }

  // URL Shortener Interactive Simulator
  const handleCopy = () => {
    navigator.clipboard.writeText("https://tinyurl.com/s8x92a");
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className={`relative bg-background-secondary/90 rounded-xl border border-surface-border p-4 sm:p-5 overflow-hidden font-mono ${className}`}>
      <div className="flex items-center justify-between pb-3 border-b border-surface-border mb-3 text-[10px] text-text-muted">
        <span className="flex items-center gap-1.5 text-accent font-semibold">
          <Scissors className="w-3.5 h-3.5" />
          PYTHON TKINTER SHORTENER
        </span>
        <button
          type="button"
          onClick={() => setShortened(!shortened)}
          className="bg-surface hover:bg-surface-hover px-2 py-0.5 rounded text-[9px] text-accent border border-surface-border transition-colors"
        >
          {shortened ? 'Reset' : 'Run Simulator'}
        </button>
      </div>

      <div className="space-y-2 py-1">
        {/* Long URL Input Simulation */}
        <div className="bg-surface p-2.5 rounded-lg border border-surface-border flex items-center justify-between text-[10px]">
          <span className="text-text-muted truncate mr-2">
            https://example.com/long-dataset-query-parameter
          </span>
          <span className="text-text-secondary flex-shrink-0 text-[9px] px-1.5 py-0.5 rounded bg-background-secondary border border-surface-border">
            INPUT
          </span>
        </div>

        <div className="flex items-center justify-center gap-2 text-text-muted text-[10px] py-0.5">
          <span className="h-[1px] w-8 bg-surface-border" />
          <span className="text-accent font-semibold flex items-center gap-1">
            PyShorteners Translation
          </span>
          <span className="h-[1px] w-8 bg-surface-border" />
        </div>

        {/* Shortened URL Output with Copy Feedback */}
        <AnimatePresence mode="wait">
          {shortened ? (
            <motion.div 
              key="result"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="bg-surface p-2.5 rounded-lg border border-accent/30 flex items-center justify-between text-[10px] bg-accent/5"
            >
              <span className="text-accent-light font-bold truncate mr-2">
                https://tinyurl.com/s8x92a
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="flex items-center gap-1 px-2 py-0.5 rounded bg-surface hover:bg-surface-hover border border-surface-border text-emerald-400 font-medium transition-colors"
              >
                {copiedLink ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                <span>{copiedLink ? 'Copied' : 'Copy'}</span>
              </button>
            </motion.div>
          ) : (
            <div className="text-center py-2 text-[10px] text-text-muted">
              Click 'Run Simulator' to trigger shortening
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
