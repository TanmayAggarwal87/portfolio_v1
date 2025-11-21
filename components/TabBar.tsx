import { X, Circle } from 'lucide-react';

export interface Tab {
  id: string;
  name: string;
  filename: string;
  unsaved?: boolean;
}

interface TabBarProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  onTabClose: (tabId: string) => void;
}

export function TabBar({ tabs, activeTab, onTabChange, onTabClose }: TabBarProps) {
  if (tabs.length === 0) return null;

  return (
    <div className="h-9 bg-card border-b border-border flex items-center overflow-x-auto">
      {/* Space for mobile hamburger menu */}
      <div className="w-11 md:w-0 shrink-0"></div>
      
      <div className="flex">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`
              relative group flex items-center h-9 px-3 min-w-0 max-w-48 border-r border-border cursor-pointer
              hover:bg-accent/50 transition-colors
              ${activeTab === tab.id 
                ? 'bg-background border-b-2 border-b-primary text-foreground' 
                : 'bg-card text-muted-foreground'
              }
            `}
            onClick={() => onTabChange(tab.id)}
          >
            {/* File icon dot */}
            <div className="shrink-0 mr-2">
              {tab.unsaved ? (
                <Circle className="w-2 h-2 fill-current" />
              ) : (
                <div className="w-2 h-2 rounded-full bg-current opacity-60"></div>
              )}
            </div>
            
            {/* Filename */}
            <span className="text-sm truncate flex-1 select-none">
              {tab.filename}
            </span>
            
            {/* Close button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onTabClose(tab.id);
              }}
              className="shrink-0 ml-1 p-1 rounded opacity-0 group-hover:opacity-100 hover:bg-accent transition-all"
              aria-label={`Close ${tab.filename}`}
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}