import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { ThemeToggle } from './ThemeToggle';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (!isHomePage) return;

      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (isHomePage) {
      const targetEl = document.querySelector(href);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/' + href);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/85 backdrop-blur-md border-b border-surface-border py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="/" 
          onClick={handleLogoClick}
          className="group flex items-center text-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg p-1"
          aria-label="Shaik Nayab Rasool - Return to top"
        >
          <span className="font-mono text-sm sm:text-base font-bold tracking-tight text-text-primary group-hover:text-accent transition-colors">
            {siteConfig.fullName}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => {
            const isActive = isHomePage && activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-3 py-1.5 text-xs lg:text-sm font-medium transition-colors rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  isActive
                    ? 'text-accent font-semibold'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface/50'
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-accent rounded-full animate-fadeIn" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons: Theme Toggle, Social & Resume */}
        <div className="hidden md:flex items-center gap-2.5">
          <ThemeToggle />

          {siteConfig.github && (
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-secondary hover:text-text-primary hover:bg-surface border border-transparent hover:border-surface-border rounded-lg transition-all transform hover:-translate-y-0.5"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}

          {siteConfig.linkedin && (
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-secondary hover:text-text-primary hover:bg-surface border border-transparent hover:border-surface-border rounded-lg transition-all transform hover:-translate-y-0.5"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          )}

          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-medium text-text-primary bg-surface hover:bg-surface-hover border border-surface-border hover:border-accent/50 rounded-lg transition-all transform hover:-translate-y-0.5 shadow-sm hover:shadow-accent/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <FileText className="w-3.5 h-3.5 text-accent" />
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3 text-text-muted" />
          </a>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-text-secondary hover:text-text-primary hover:bg-surface border border-surface-border rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-x-0 top-[61px] bottom-0 bg-background/95 backdrop-blur-xl border-b border-surface-border flex flex-col justify-between p-6 z-50 animate-fadeIn"
          style={{ height: 'calc(100vh - 61px)' }}
        >
          <nav className="flex flex-col gap-2 pt-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-text-muted px-3 mb-2">Navigation</span>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-4 py-3 text-lg font-medium text-text-primary hover:text-accent hover:bg-surface rounded-xl transition-all flex items-center justify-between"
              >
                <span>{item.name}</span>
                <span className="text-xs font-mono text-text-muted">&rarr;</span>
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-surface-border flex flex-col gap-3 pb-8">
            <div className="flex items-center justify-between px-3 py-2 bg-surface rounded-xl border border-surface-border">
              <span className="text-xs font-mono text-text-secondary">Theme</span>
              <ThemeToggle />
            </div>

            <div className="flex gap-2">
              {siteConfig.github && (
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 text-xs font-mono font-medium text-text-primary bg-surface hover:bg-surface-hover border border-surface-border rounded-xl transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              )}
              {siteConfig.linkedin && (
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 text-xs font-mono font-medium text-text-primary bg-surface hover:bg-surface-hover border border-surface-border rounded-xl transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-accent" />
                  <span>LinkedIn</span>
                </a>
              )}
            </div>

            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 text-sm font-mono font-medium text-text-primary bg-surface hover:bg-surface-hover border border-surface-border rounded-xl transition-colors"
            >
              <FileText className="w-4 h-4 text-accent" />
              <span>View Resume (PDF)</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-text-muted" />
            </a>
            <div className="text-center text-xs text-text-muted font-mono pt-2">
              {siteConfig.location}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
