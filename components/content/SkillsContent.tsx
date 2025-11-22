export function SkillsContent() {
  const skills = {
    frontend: {
      frameworks: ["React", "Next.js"],
      languages: ["TypeScript", "JavaScript", "HTML5", "CSS3"],
      styling: ["Tailwind CSS", "Styled Components", "SASS", "CSS Modules"],
      tools: ["Webpack", "Vite", "ESLint", "Prettier"]
    },
    backend: {
      languages: ["Node.js", "Python"],
      frameworks: ["Express.js", "FastAPI"],
      databases: ["PostgreSQL", "MongoDB"],
      cloud: ["AWS", "Google Cloud", "Docker"]
    },
    mobile: {
      frameworks: ["React Native","Swift"],
      platforms: ["iOS", "Android"],
      tools: ["Expo", "Xcode", "Android Studio"]
    },
    other: {
      design: ["Figma"],
      version_control: ["Git", "GitHub", "GitLab"],

    }
  };

  const proficiencyLevels = {
    expert: ["React", "TypeScript", "JavaScript","React Native", "Node.js", "CSS3", "Git"],
    advanced: ["Next.js", "Python","MongoDB"],
    intermediate: ["Docker", "PostgreSQL", "AWS"],
    learning: []
  };

  return (
    <div className="space-y-6">
      {/* Code-style comment */}
      <div className="text-green-600 dark:text-green-400">
        // My technical skills - organized by category and proficiency level
      </div>

      {/* Skills object */}
      <div className="space-y-1">
        <div>
          <span className="text-blue-600 dark:text-blue-400">interface</span>{" "}
          <span className="text-yellow-600 dark:text-yellow-400">Developer</span>{" "}
          <span className="text-gray-600 dark:text-gray-400">{"{"}</span>
        </div>

        {Object.entries(skills).map(([category, categorySkills]) => (
          <div key={category} className="ml-4">
            <div>
              <span className="text-red-600 dark:text-red-400">{category}</span>: <span className="text-gray-600 dark:text-gray-400">{"{"}</span>
            </div>
            
            {Object.entries(categorySkills).map(([subcategory, skillList]) => (
              <div key={subcategory} className="ml-4">
                <span className="text-red-600 dark:text-red-400">{subcategory}</span>: [
                <div className="ml-4">
                  {(skillList as string[]).map((skill, index) => (
                    <span
                      key={skill}
                      className={`inline-block mr-2 mb-1 px-2 py-1 rounded text-xs ${
                        proficiencyLevels.expert.includes(skill)
                          ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                          : proficiencyLevels.advanced.includes(skill)
                          ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                          : proficiencyLevels.intermediate.includes(skill)
                          ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
                          : 'bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200'
                      }`}
                    >
                      <span className="text-green-600 dark:text-green-400">"{skill}"</span>
                      {index < (skillList as string[]).length - 1 ? <span className="text-gray-600 dark:text-gray-400">,</span> : ""}
                    </span>
                  ))}
                </div>
                <span className="text-yellow-600 dark:text-yellow-400">]</span>
                {subcategory !== Object.keys(categorySkills)[Object.keys(categorySkills).length - 1] && <span className="text-gray-600 dark:text-gray-400">,</span>}
              </div>
            ))}
            
            <div>
              <span className="text-gray-600 dark:text-gray-400">{"}"}</span>
              {category !== Object.keys(skills)[Object.keys(skills).length - 1] && <span className="text-gray-600 dark:text-gray-400">;</span>}
            </div>
          </div>
        ))}

        <div>
          <span className="text-gray-600 dark:text-gray-400">{"}"}</span>
        </div>
      </div>

      {/* Proficiency legend */}
      <div className="mt-8 p-4 bg-muted/30 rounded-lg border border-border">
        <div className="text-green-600 dark:text-green-400 text-sm mb-3">
          // Proficiency levels:
        </div>
        <div className="flex flex-wrap gap-2 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded"></div>
            <span>Expert</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded"></div>
            <span>Advanced</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-yellow-500 rounded"></div>
            <span>Intermediate</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gray-500 rounded"></div>
            <span>Learning</span>
          </div>
        </div>
      </div>

      {/* Current focus */}
      <div className="mt-6 p-4 bg-accent/30 rounded-lg border border-border">
        <div className="text-green-600 dark:text-green-400 text-sm">
          // Currently focusing on: Advanced React patterns, System Design, and Cloud Architecture
        </div>
      </div>
    </div>
  );
}