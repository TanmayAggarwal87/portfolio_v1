import { Sun, Moon, Minus, Square, X } from 'lucide-react';

interface TitleBarProps {
  isDark: boolean;
  onThemeToggle: () => void;
}

export function TitleBar({ isDark, onThemeToggle }: TitleBarProps) {
  return (
    <div className="h-8 bg-card border-b border-border flex items-center justify-between px-2">
      {/* Left side - Menu */}
      <div className="flex items-center space-x-2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>

      {/* Center - File name */}
      <div className="flex-1 flex justify-center">
        <div className="flex items-center space-x-2 bg-accent px-3 py-1 rounded text-sm">
          <span className="text-muted-foreground">●</span>
          <span>portfolio.tsx</span>
        </div>
      </div>

      {/* Right side - Theme toggle and window controls */}
      <div className="flex items-center space-x-2">
        <button
          onClick={onThemeToggle}
          className="p-1 hover:bg-accent rounded"
          aria-label="Toggle theme"
        >
          {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
        <div className="flex items-center space-x-1">
          <button className="p-1 hover:bg-accent rounded">
            <Minus className="w-4 h-4" />
          </button>
          <button className="p-1 hover:bg-accent rounded">
            <Square className="w-4 h-4" />
          </button>
          <button className="p-1 hover:bg-red-500 hover:text-white rounded">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}