import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, MapPin, ExternalLink, CheckCircle2, Loader2, RefreshCw, Copy, Check } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface SentMessageRecord {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatusMessage("Please fill in all required fields (Name, Email, Message).");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatusMessage("Please enter a valid email address.");
      return;
    }

    setStatusMessage(null);
    setIsSubmitting(true);

    // Save message locally in localStorage so records are preserved
    try {
      const existing: SentMessageRecord[] = JSON.parse(localStorage.getItem('snr_sent_messages') || '[]');
      const newRecord: SentMessageRecord = {
        id: Date.now().toString(),
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim() || 'Software Engineering Inquiry',
        message: formData.message.trim(),
        timestamp: new Date().toISOString(),
      };
      existing.unshift(newRecord);
      localStorage.setItem('snr_sent_messages', JSON.stringify(existing.slice(0, 50)));
    } catch {
      // Ignore localStorage errors
    }

    // Construct mailto link
    const subject = encodeURIComponent(formData.subject.trim() || `Portfolio Contact from ${formData.name.trim()}`);
    const body = encodeURIComponent(
      `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`
    );
    const mailtoUrl = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;

    // Trigger mailto dispatch
    try {
      window.location.href = mailtoUrl;
    } catch {
      // Ignore window location errors
    }

    // Brief realistic spinner
    await new Promise((resolve) => setTimeout(resolve, 600));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setIsSubmitted(false);
    setStatusMessage(null);
  };

  // Gmail compose link as convenience fallback
  const getGmailComposeUrl = () => {
    const targetEmail = siteConfig.email || "rasoolnayabshaik0743@gmail.com";
    const subj = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Shaik Nayab Rasool,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`
    );
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${targetEmail}&su=${subj}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative border-t border-surface-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Label */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs text-accent tracking-widest uppercase">07 // CONTACT</span>
          <span className="h-[1px] w-8 bg-surface-border" />
        </div>

        {/* Section Header */}
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
            Let's Connect
          </h2>
          <p className="text-base sm:text-lg text-text-secondary mt-1">
            Reach out for AI/ML engineering opportunities, technical collaboration, or inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-surface rounded-2xl border border-surface-border p-6 sm:p-7 space-y-6">
              <h3 className="text-lg font-bold text-text-primary">
                Direct Channels
              </h3>

              {/* Direct Email (mailto) Channel */}
              <div className="p-4 rounded-xl bg-background-secondary border border-surface-border space-y-2">
                <span className="text-[11px] font-mono uppercase text-text-muted flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-accent" />
                  Primary Email
                </span>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-xs sm:text-sm font-mono text-accent-light hover:underline truncate"
                  >
                    {siteConfig.email}
                  </a>
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="p-2 rounded-lg bg-surface hover:bg-surface-hover border border-surface-border text-text-secondary hover:text-text-primary transition-colors"
                      title="Copy email to clipboard"
                      aria-label="Copy email address"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-accent text-white text-xs font-mono font-medium hover:bg-accent-hover transition-colors shadow-sm"
                    >
                      <span>Email Me</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
                {copied && (
                  <p className="text-[11px] font-mono text-emerald-400 animate-fadeIn">
                    ✓ Email address copied to clipboard
                  </p>
                )}
              </div>

              {/* Location */}
              <div className="p-4 rounded-xl bg-background-secondary border border-surface-border space-y-1">
                <span className="text-[11px] font-mono uppercase text-text-muted flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  Location
                </span>
                <div className="text-sm font-mono text-text-primary">
                  {siteConfig.location}
                </div>
              </div>

              {/* Verified Social Networks: GitHub & LinkedIn */}
              <div className="pt-2 border-t border-surface-border/60">
                <span className="text-xs font-mono uppercase text-text-muted block mb-3">
                  Verified Engineering Profiles
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {siteConfig.github && (
                    <motion.a
                      whileHover={{ y: -3, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={siteConfig.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3.5 rounded-xl bg-background-secondary hover:bg-surface-hover border border-surface-border hover:border-accent/50 text-text-primary transition-all flex flex-col justify-between group shadow-sm"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="p-2 rounded-lg bg-surface border border-surface-border group-hover:border-accent/40 text-accent transition-colors">
                          <GithubIcon className="w-4 h-4" />
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-text-muted group-hover:text-accent transition-colors" />
                      </div>
                      <div>
                        <span className="font-mono text-xs font-bold block text-text-primary group-hover:text-accent-light transition-colors">
                          GitHub
                        </span>
                        <span className="text-[11px] font-mono text-text-muted truncate block">
                          @ShaikNayabRasool0743
                        </span>
                      </div>
                    </motion.a>
                  )}

                  {siteConfig.linkedin && (
                    <motion.a
                      whileHover={{ y: -3, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={siteConfig.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3.5 rounded-xl bg-background-secondary hover:bg-surface-hover border border-surface-border hover:border-accent/50 text-text-primary transition-all flex flex-col justify-between group shadow-sm"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="p-2 rounded-lg bg-surface border border-surface-border group-hover:border-accent/40 text-accent transition-colors">
                          <LinkedinIcon className="w-4 h-4" />
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-text-muted group-hover:text-accent transition-colors" />
                      </div>
                      <div>
                        <span className="font-mono text-xs font-bold block text-text-primary group-hover:text-accent-light transition-colors">
                          LinkedIn
                        </span>
                        <span className="text-[11px] font-mono text-text-muted truncate block">
                          in/shaik-nayab-rasool
                        </span>
                      </div>
                    </motion.a>
                  )}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-surface rounded-2xl border border-surface-border p-6 sm:p-8">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  /* Success Screen */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-8 flex flex-col items-center text-center space-y-4"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-text-primary">
                        Email Client Prepared & Ready!
                      </h3>
                      <p className="text-sm text-text-secondary max-w-md">
                        Thank you, <span className="text-text-primary font-semibold">{formData.name}</span>! Your pre-filled message has been prepared for <span className="text-text-primary font-semibold">{siteConfig.email}</span>.
                      </p>
                    </div>

                    <div className="pt-4 flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto">
                      <a
                        href={getGmailComposeUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent hover:bg-accent-hover text-white text-xs font-mono font-medium transition-all shadow-sm"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Open in Gmail (Pre-filled)</span>
                      </a>

                      <button
                        type="button"
                        onClick={handleReset}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-background-secondary hover:bg-surface-hover border border-surface-border text-text-primary text-xs font-mono font-medium transition-colors"
                      >
                        <RefreshCw className="w-3.5 h-3.5 text-text-muted" />
                        <span>Send Another Message</span>
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  /* Form Screen */
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <h3 className="text-lg font-bold text-text-primary">
                      Send a Message
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-xs font-mono uppercase text-text-muted mb-1.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Hiring Manager / Recruiter"
                          className="w-full px-4 py-3 rounded-xl bg-background-secondary border border-surface-border text-text-primary placeholder:text-text-muted/60 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-xs font-mono uppercase text-text-muted mb-1.5">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="e.g. recruiter@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-background-secondary border border-surface-border text-text-primary placeholder:text-text-muted/60 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-xs font-mono uppercase text-text-muted mb-1.5">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="AI/ML Developer / Engineering Opportunity"
                        className="w-full px-4 py-3 rounded-xl bg-background-secondary border border-surface-border text-text-primary placeholder:text-text-muted/60 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-mono uppercase text-text-muted mb-1.5">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Share details regarding your team, role, or technical requirements..."
                        className="w-full px-4 py-3 rounded-xl bg-background-secondary border border-surface-border text-text-primary placeholder:text-text-muted/60 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                      />
                    </div>

                    {statusMessage && (
                      <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/25 text-xs font-mono text-amber-400">
                        {statusMessage}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent hover:bg-accent-hover disabled:opacity-70 text-white font-medium text-sm transition-all shadow-lg shadow-accent/20 hover:shadow-accent/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Preparing Email...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message via Email</span>
                        </>
                      )}
                    </button>

                    <p className="text-center text-[11px] font-mono text-text-muted">
                      Direct mailto dispatch to {siteConfig.email}. Typically responds within 24 hours.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
