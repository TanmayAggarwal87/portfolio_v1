import { Code, Coffee, Heart, Zap } from 'lucide-react';


export function AboutContent() {
  const stats = [
    { label: "Years of Experience", value: "0+", icon: Code },
    { label: "Projects Completed", value: "10+", icon: Zap },
    { label: "Cups of Coffee & Red Bull", value: "2,847", icon: Coffee },
  ];

  const technologies = [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js", 
    "Python", "PostgreSQL", "AWS", "Docker", "Git"
  ];

  return (
    <div className="space-y-8">
      {/* Header comment */}
      <div className="text-green-600 dark:text-green-400">
        // Welcome to my digital workspace - where code meets creativity
      </div>

      {/* Main about section */}
      <div className="space-y-1">
        <div>
          <span className="text-blue-600 dark:text-blue-400">class</span>{" "}
          <span className="text-yellow-600 dark:text-yellow-400">Developer</span>{" "}
          <span className="text-blue-600 dark:text-blue-400">extends</span>{" "}
          <span className="text-yellow-600 dark:text-yellow-400">Human</span>{" "}
          <span className="text-gray-600 dark:text-gray-400">{"{"}</span>
        </div>

        <div className="ml-4 space-y-4">
          {/* Constructor */}
          <div className="space-y-2">
            <div>
              <span className="text-blue-600 dark:text-blue-400">constructor</span>
              <span className="text-gray-600 dark:text-gray-400">()</span>{" "}
              <span className="text-gray-600 dark:text-gray-400">{"{"}</span>
            </div>
            <div className="ml-4 space-y-1">
              <div>
                <span className="text-blue-600 dark:text-blue-400">this</span>.
                <span className="text-red-600 dark:text-red-400">name</span> = 
                <span className="text-green-600 dark:text-green-400"> "Tanmay Aggarwal"</span>;
              </div>
              <div>
                <span className="text-blue-600 dark:text-blue-400">this</span>.
                <span className="text-red-600 dark:text-red-400">role</span> = 
                <span className="text-green-600 dark:text-green-400"> "Full Stack Developer"</span>;
              </div>
              <div>
                <span className="text-blue-600 dark:text-blue-400">this</span>.
                <span className="text-red-600 dark:text-red-400">location</span> = 
                <span className="text-green-600 dark:text-green-400"> "Delhi, India"</span>;
              </div>
              <div>
                <span className="text-blue-600 dark:text-blue-400">this</span>.
                <span className="text-red-600 dark:text-red-400">passion</span> = 
                <span className="text-green-600 dark:text-green-400"> "Building stuff that actually works in the real world."</span>;
              </div>
              <div>
                <span className="text-blue-600 dark:text-blue-400">this</span>.
                <span className="text-red-600 dark:text-red-400">education</span> = 
                <span className="text-green-600 dark:text-green-400"> "Student at Maharaja Agrasen Institute of Technology,Rohini,Delhi"</span>;
              </div>
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-400">{"}"}</span>
            </div>
          </div>

          {/* Profile image */}
          <div className="my-6 flex justify-center">
            <div className="relative text-xl">
              <img src={"https://avatars.githubusercontent.com/u/175019491?v=4"} className="w-48 h-48 rounded-full object-cover border-4 border-primary/20"/>
              <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-background flex items-center justify-center">
              </div>
            </div>
          </div>

          {/* About method */}
          <div className="space-y-2">
            <div>
              <span className="text-purple-600 dark:text-purple-400">getAbout</span>
              <span className="text-gray-600 dark:text-gray-400">()</span>{" "}
              <span className="text-gray-600 dark:text-gray-400">{"{"}</span>
            </div>
            <div className="ml-4">
              <span className="text-blue-600 dark:text-blue-400">return</span>{" "}
              <span className="text-green-600 dark:text-green-400"><br/>`</span>
              <div className="ml-4 text-green-600 dark:text-green-400 leading-relaxed">
                I'm a full-stack developer with hands-on experience in web and mobile development.<br/>
                Currently diving deeper into full-stack architectures,<br/>
                advanced backend patterns, and building real-time, scalable applications<br/>
                using Next.js, React Native, and modern backend stacks.
              </div>
              <span className="text-green-600 dark:text-green-400">`</span>;
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-400">{"}"}</span>
            </div>
          </div>

          {/* Skills array */}
          <div className="space-y-2">
            <div>
              <span className="text-purple-600 dark:text-purple-400">getFavoriteStack</span>
              <span className="text-gray-600 dark:text-gray-400">()</span>{" "}
              <span className="text-gray-600 dark:text-gray-400">{"{"}</span>
            </div>
            <div className="ml-4">
              <span className="text-blue-600 dark:text-blue-400">return</span>{" "}
              <span className="text-yellow-600 dark:text-yellow-400">[</span>
              <div className="ml-4 flex flex-wrap gap-2 my-2">
                {technologies.map((tech, index) => (
                  <span
                    key={tech}
                    className="inline-block px-3 py-1 bg-accent rounded-full text-sm border border-border hover:bg-accent/80 transition-colors"
                  >
                    <span className="text-green-600 dark:text-green-400">"{tech}"</span>
                    {index < technologies.length - 1 && <span className="text-gray-600 dark:text-gray-400">,</span>}
                  </span>
                ))}
              </div>
              <span className="text-yellow-600 dark:text-yellow-400">]</span>;
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-400">{"}"}</span>
            </div>
          </div>

          {/* Stats */}
          <div className="space-y-2">
            <div>
              <span className="text-purple-600 dark:text-purple-400">getStats</span>
              <span className="text-gray-600 dark:text-gray-400">()</span>{" "}
              <span className="text-gray-600 dark:text-gray-400">{"{"}</span>
            </div>
            <div className="ml-4">
              <span className="text-blue-600 dark:text-blue-400">return</span>{" "}
              <span className="text-gray-600 dark:text-gray-400">{"{"}</span>
              <div className="ml-4 grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="p-4 bg-card border border-border rounded-lg hover:bg-accent/50 transition-colors">
                      <div className="flex items-center space-x-3">
                        <Icon className="w-6 h-6 text-primary" />
                        <div>
                          <div className="text-2xl font-bold text-primary">{stat.value}</div>
                          <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <span className="text-gray-600 dark:text-gray-400">{"}"}</span>;
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-400">{"}"}</span>
            </div>
          </div>
        </div>

        <div>
          <span className="text-gray-600 dark:text-gray-400">{"}"}</span>
        </div>
      </div>

      {/* Fun fact */}
      <div className="mt-8 p-4 bg-muted/30 rounded-lg border border-border">
        <div className="text-green-600 dark:text-green-400 text-sm">
          // Fun fact: I believe the best code is not just functional, but also readable, <br />
          // maintainable, and brings joy to both the developer and the user. 
        </div>
      </div>
    </div>
  );
}