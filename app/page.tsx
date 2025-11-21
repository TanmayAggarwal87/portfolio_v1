"use client"
import { useState, useEffect } from 'react';
import { TitleBar } from '../components/TitleBar';
import { Sidebar } from '../components/Sidebar';
import { CodeEditor } from '../components/CodeEditor';
import { Terminal } from '../components/Terminal';
import { TabBar } from '../components/TabBar';

import { AboutContent } from '../components/content/AboutContent';
import { ProjectsContent } from '../components/content/ProjectsContent';
import { JourneyContent } from '../components/content/JourneyContent';
import { SkillsContent } from '../components/content/SkillsContent';
import { ContactContent } from '../components/content/ContactContent';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '../components/ui/sheet';
import { Menu } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isDark, setIsDark] = useState(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [openTabs, setOpenTabs] = useState<string[]>(['about']);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const getSectionDisplayName = (section: string) => {
    const names: Record<string, string> = {
      about: 'README.md',
      projects: 'projects.json',
      journey: 'journey.ts',
      skills: 'skills.tsx',
      contact: 'contact.config.ts'
    };
    return names[section] || section;
  };

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    // Add to open tabs if not already present
    if (!openTabs.includes(section)) {
      setOpenTabs([...openTabs, section]);
    }
    // Close mobile sidebar when section changes
    setIsMobileSidebarOpen(false);
  };

  const handleCloseTab = (section: string) => {
    const newTabs = openTabs.filter(tab => tab !== section);
    setOpenTabs(newTabs);
    
    // If closing the active tab, switch to the last remaining tab or 'about'
    if (section === activeSection) {
      setActiveSection(newTabs.length > 0 ? newTabs[newTabs.length - 1] : 'about');
    }
    
    // Ensure 'about' is always available
    if (newTabs.length === 0) {
      setOpenTabs(['about']);
    }
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return <AboutContent />;
      case 'projects':
        return <ProjectsContent />;
      case 'journey':
        return <JourneyContent />;
      case 'skills':
        return <SkillsContent />;
      case 'contact':
        return <ContactContent />;
      default:
        return <AboutContent />;
    }
  };

  return (
    <div className="h-screen flex flex-col bg-background text-foreground">
      {/* Title Bar */}
      <TitleBar isDark={isDark} onThemeToggle={toggleTheme} />
      
      {/* Mobile Hamburger Menu */}
      <div className="relative h-9 bg-card border-b border-border md:hidden">
        <div className="absolute left-2 top-1/2 -translate-y-1/2">
          <Sheet open={isMobileSidebarOpen} onOpenChange={setIsMobileSidebarOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-0 gap-0">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <SheetDescription className="sr-only">
                Navigate through different sections of the portfolio
              </SheetDescription>
              <Sidebar 
                activeSection={activeSection} 
                onSectionChange={handleSectionChange} 
              />
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Tab Bar - Hidden on mobile */}
      <div className="hidden md:block">
        <TabBar 
          tabs={openTabs.map(section => ({
            id: section,
            name: section,
            filename: getSectionDisplayName(section)
          }))}
          activeTab={activeSection}
          onTabChange={setActiveSection}
          onTabClose={handleCloseTab}
        />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Desktop Sidebar - Hidden on mobile */}
        <div className="hidden md:block">
          <Sidebar 
            activeSection={activeSection} 
            onSectionChange={handleSectionChange} 
          />
        </div>
        
        {/* Code Editor Area */}
        <CodeEditor>
          {renderContent()}
        </CodeEditor>
      </div>

      {/* Terminal - Hidden on mobile */}
      <div className="hidden md:block">
        <Terminal />
      </div>
    </div>
  );
}