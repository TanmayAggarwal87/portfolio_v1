import { ReactNode } from 'react';

interface CodeEditorProps {
  children: ReactNode;
  lineCount?: number;
}

export function CodeEditor({ children, lineCount = 50 }: CodeEditorProps) {
  const lineNumbers = Array.from({ length: lineCount }, (_, i) => i + 1);

  return (
    <div className="flex-1 flex bg-background">
      {/* Line numbers */}
      <div className="w-12 bg-muted/30 border-r border-border flex flex-col text-right py-4 text-sm font-mono text-muted-foreground select-none">
        {lineNumbers.map((num) => (
          <div key={num} className="px-2 h-6 leading-6">
            {num}
          </div>
        ))}
      </div>

      {/* Code content */}
      <div className="flex-1 p-4 font-mono text-sm overflow-auto">
        {children}
      </div>
    </div>
  );
}