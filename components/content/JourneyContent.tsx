export function JourneyContent() {
  const journey = [
    {
      year: "2024",
      role: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      description: "Leading a team of 5 developers, architecting scalable React applications"
    },
    {
      year: "2022",
      role: "Full Stack Developer",
      company: "StartupXYZ",
      description: "Built MVP from scratch using React, Node.js, and PostgreSQL"
    },
    {
      year: "2020",
      role: "Frontend Developer",
      company: "Digital Agency",
      description: "Developed responsive websites and web applications for various clients"
    },
    {
      year: "2019",
      role: "Junior Developer",
      company: "Local Software Company",
      description: "Started my professional journey, learned best practices and modern development workflows"
    },
    {
      year: "2018",
      role: "Computer Science Graduate",
      company: "University",
      description: "Graduated with honors, specialized in software engineering and web technologies"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Code-style comment */}
      <div className="text-green-600 dark:text-green-400">
        // My professional journey - from student to senior developer
      </div>

      <div className="space-y-1">
        <div>
          <span className="text-blue-600 dark:text-blue-400">function</span>{" "}
          <span className="text-yellow-600 dark:text-yellow-400">getCareerTimeline</span>
          <span className="text-gray-600 dark:text-gray-400">()</span>{" "}
          <span className="text-gray-600 dark:text-gray-400">{"{"}</span>
        </div>

        <div className="ml-4">
          <span className="text-blue-600 dark:text-blue-400">return</span>{" "}
          <span className="text-yellow-600 dark:text-yellow-400">[</span>
        </div>

        {journey.map((item, index) => (
          <div key={index} className="ml-8 space-y-1">
            <div className="text-green-600 dark:text-green-400">
              // {item.year} - {item.role}
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-400">{"  {"}</span>
            </div>
            <div className="ml-4 space-y-1">
              <div>
                <span className="text-red-600 dark:text-red-400">year</span>: <span className="text-green-600 dark:text-green-400">"{item.year}"</span>,
              </div>
              <div>
                <span className="text-red-600 dark:text-red-400">position</span>: <span className="text-green-600 dark:text-green-400">"{item.role}"</span>,
              </div>
              <div>
                <span className="text-red-600 dark:text-red-400">company</span>: <span className="text-green-600 dark:text-green-400">"{item.company}"</span>,
              </div>
              <div>
                <span className="text-red-600 dark:text-red-400">achievements</span>: <span className="text-green-600 dark:text-green-400">"{item.description}"</span>
              </div>
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-400">  {"}"}{index < journey.length - 1 ? "," : ""}</span>
            </div>
            {index < journey.length - 1 && <div className="h-2"></div>}
          </div>
        ))}

        <div className="ml-4">
          <span className="text-yellow-600 dark:text-yellow-400">];</span>
        </div>

        <div>
          <span className="text-gray-600 dark:text-gray-400">{"}"}</span>
        </div>
      </div>

      <div className="mt-8 p-4 bg-muted/30 rounded-lg border border-border">
        <div className="text-green-600 dark:text-green-400 text-sm">
          // Fun fact: I've written over 100,000 lines of code and consumed approximately 2,847 cups of coffee ☕
        </div>
      </div>
    </div>
  );
}