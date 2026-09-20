import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = "" }) => {
  const { theme, setTheme } = useTheme();

  return (
    <div 
      className={`inline-flex items-center p-0.5 rounded-lg bg-surface border border-surface-border ${className}`}
      role="group"
      aria-label="Theme mode switcher"
    >
      <button
        type="button"
        onClick={() => setTheme('dark')}
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-medium transition-all duration-200 ${
          theme === 'dark'
            ? 'bg-accent text-white shadow-sm'
            : 'text-text-muted hover:text-text-primary hover:bg-surface-hover'
        }`}
        aria-pressed={theme === 'dark'}
        title="Switch to Dark Theme"
      >
        <Moon className="w-3.5 h-3.5" />
        <span>Dark</span>
      </button>

      <button
        type="button"
        onClick={() => setTheme('light')}
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-medium transition-all duration-200 ${
          theme === 'light'
            ? 'bg-accent text-white shadow-sm'
            : 'text-text-muted hover:text-text-primary hover:bg-surface-hover'
        }`}
        aria-pressed={theme === 'light'}
        title="Switch to Light Theme"
      >
        <Sun className="w-3.5 h-3.5" />
        <span>Light</span>
      </button>
    </div>
  );
};
