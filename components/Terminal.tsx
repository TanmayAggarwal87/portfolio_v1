import { Terminal as TerminalIcon } from 'lucide-react';

export function Terminal() {
  return (
    <div className="h-32 bg-card border-t border-border flex flex-col">
      {/* Terminal header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-border">
        <div className="flex items-center space-x-2">
          <TerminalIcon className="w-4 h-4" />
          <span className="text-sm">Terminal</span>
        </div>
        <div className="flex space-x-2">
          <button className="text-xs px-2 py-1 bg-accent rounded">Problems</button>
          <button className="text-xs px-2 py-1 bg-primary text-primary-foreground rounded">Terminal</button>
          <button className="text-xs px-2 py-1 bg-accent rounded">Output</button>
        </div>
      </div>

      {/* Terminal content */}
      <div className="flex-1 p-4 font-mono text-sm bg-black text-green-400 overflow-hidden">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <span className="text-blue-400">~/portfolio</span>
            <span className="text-white">$</span>
            <span className="text-green-400">npm run dev</span>
          </div>
          <div className="text-gray-400">
            <div>Local: http://localhost:3000</div>
            <div>Ready in 1.2s</div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-blue-400">~/portfolio</span>
            <span className="text-white">$</span>
            <span className="animate-pulse">|</span>
          </div>
        </div>
      </div>
    </div>
  );
}