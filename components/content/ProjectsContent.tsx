import { ExternalLink, Github } from 'lucide-react';

export function ProjectsContent() {
  const projects = [
    {
      id: 1,
      name: "E-Commerce Platform",
      description: "Full-stack React application with TypeScript and Node.js backend",
      tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1565687981296-535f09db714e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NTg3OTU4ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      id: 2,
      name: "Task Management App",
      description: "React Native mobile app with real-time collaboration features",
      tech: ["React Native", "Firebase", "Redux", "TypeScript"],
      image: "https://images.unsplash.com/photo-1699885960867-56d5f5262d38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFjdCUyMHR5cGVzY3JpcHQlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NTg4Mjg0MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      id: 3,
      name: "Design System",
      description: "Comprehensive UI component library built with Storybook",
      tech: ["React", "Storybook", "Tailwind CSS", "TypeScript"],
      image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjB1aXxlbnwxfHx8fDE3NTg4Mjg0MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      github: "https://github.com",
      demo: "https://demo.com"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Code-style comment */}
      <div className="text-green-600 dark:text-green-400">
        // My featured projects - built with modern web technologies
      </div>

      {/* Projects array representation */}
      <div className="space-y-1">
        <div>
          <span className="text-blue-600 dark:text-blue-400">const</span>{" "}
          <span className="text-purple-600 dark:text-purple-400">projects</span>{" "}
          <span className="text-gray-600 dark:text-gray-400">=</span>{" "}
          <span className="text-yellow-600 dark:text-yellow-400">[</span>
        </div>

        {projects.map((project, index) => (
          <div key={project.id} className="ml-4 border border-border rounded-lg p-4 bg-card hover:bg-accent/50 transition-colors">
            <div className="space-y-1 text-sm">
              <div>
                <span className="text-gray-600 dark:text-gray-400">  {"{"}
                </span>
              </div>
              <div className="ml-4">
                <span className="text-red-600 dark:text-red-400">name</span>: <span className="text-green-600 dark:text-green-400">"{project.name}"</span>,
              </div>
              <div className="ml-4">
                <span className="text-red-600 dark:text-red-400">description</span>: <span className="text-green-600 dark:text-green-400">"{project.description}"</span>,
              </div>
              <div className="ml-4">
                <span className="text-red-600 dark:text-red-400">tech</span>: [
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-green-600 dark:text-green-400">
                    "{tech}"{i < project.tech.length - 1 ? ", " : ""}
                  </span>
                ))}
                ],
              </div>
              
              {/* Project image */}
              <div className="ml-4 my-3 text-xl">
                Project Image
              </div>

              {/* Action buttons */}
              <div className="ml-4 flex space-x-3 mt-3">
                <a
                  href={project.github}
                  className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-green-600 dark:text-green-400">"View Code"</span>
                </a>
                <a
                  href={project.demo}
                  className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-green-600 dark:text-green-400">"Live Demo"</span>
                </a>
              </div>

              <div>
                <span className="text-gray-600 dark:text-gray-400">  {"}"}{index < projects.length - 1 ? "," : ""}</span>
              </div>
            </div>
          </div>
        ))}

        <div>
          <span className="text-yellow-600 dark:text-yellow-400">];</span>
        </div>
      </div>
    </div>
  );
}