import { ChevronDown, ChevronRight, Folder, FolderOpen, User, Briefcase, Code, Mail, FileText } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const sections = [
  { id: 'about', label: 'About', icon: FileText },
  { id: 'projects', label: 'Projects', icon: Briefcase },
  { id: 'journey', label: 'Journey', icon: User },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  return (
    <div className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Explorer header */}
      <div className="p-3 border-b border-sidebar-border">
        <div className="flex items-center space-x-2 text-sidebar-foreground text-sm uppercase tracking-wide">
          <ChevronDown className="w-4 h-4" />
          <span>Explorer</span>
        </div>
      </div>

      {/* File tree */}
      <div className="flex-1 p-2">
        <div className="space-y-1">
          {/* Portfolio folder */}
          <div className="flex items-center space-x-2 text-sidebar-foreground text-sm py-1">
            <ChevronDown className="w-4 h-4" />
            <FolderOpen className="w-4 h-4 text-blue-500" />
            <span>portfolio</span>
          </div>

          {/* Sections */}
          <div className="ml-4 space-y-1">
            {sections.map((section) => {
              const Icon = section.icon;
              const isActive = activeSection === section.id;
              
              return (
                <button
                  key={section.id}
                  onClick={() => onSectionChange(section.id)}
                  className={`w-full flex items-center space-x-2 text-sm py-1 px-2 rounded hover:bg-sidebar-accent text-left ${
                    isActive ? 'bg-sidebar-primary text-sidebar-primary-foreground' : 'text-sidebar-foreground'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{section.label}.tsx</span>
                </button>
              );
            })}
          </div>

          {/* Other files */}
          <div className="ml-4 space-y-1 mt-4">
            <div className="flex items-center space-x-2 text-sidebar-foreground text-sm py-1 px-2 opacity-60">
              <Code className="w-4 h-4" />
              <span>package.json</span>
            </div>
            <div className="flex items-center space-x-2 text-sidebar-foreground text-sm py-1 px-2 opacity-60">
              <Code className="w-4 h-4" />
              <span>tailwind.config.js</span>
            </div>
            <div className="flex items-center space-x-2 text-sidebar-foreground text-sm py-1 px-2 opacity-60">
              <Code className="w-4 h-4" />
              <span>README.md</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}