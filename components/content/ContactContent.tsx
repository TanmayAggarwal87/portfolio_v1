import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  MapPin,
  Download,
  X,
} from "lucide-react";

export function ContactContent() {
  const contactMethods = [
    {
      type: "email",
      label: "Email",
      value: "tanmayagg.2005@gmail.com",
      href: "mailto:tanmayagg.2005@gmail.com",
      icon: Mail,
      description: "For project inquiries and collaborations",
    },
    {
      type: "github",
      label: "GitHub",
      value: "@TanmayAggarwal87",
      href: "https://github.com/TanmayAggarwal87",
      icon: Github,
      description: "Check out my open source contributions",
    },
    {
      type: "linkedin",
      label: "LinkedIn",
      value: "Tanmay_Aggarwal",
      href: "www.linkedin.com/in/tanmay-aggarwal-2aa95632a",
      icon: Linkedin,
      description: "Professional network and career updates",
    },
    {
      type: "twitter",
      label: "Twitter",
      value: "@gernnonimo",
      href: "https://x.com/gernnonimo",
      icon: Twitter,
      description: "Tech thoughts and random musings",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Code-style comment */}
      <div className="text-green-600 dark:text-green-400">
        // Let's connect! Available for freelance projects and full-time
        opportunities
      </div>

      {/* Contact object */}
      <div className="space-y-1">
        <div>
          <span className="text-blue-600 dark:text-blue-400">const</span>{" "}
          <span className="text-purple-600 dark:text-purple-400">
            contactInfo
          </span>{" "}
          <span className="text-gray-600 dark:text-gray-400">=</span>{" "}
          <span className="text-gray-600 dark:text-gray-400">{"{"}</span>
        </div>

        <div className="ml-4">
          <div>
            <span className="text-red-600 dark:text-red-400">name</span>:{" "}
            <span className="text-green-600 dark:text-green-400">
              "Tanmay Aggarwal"
            </span>
            ,
          </div>
          <div>
            <span className="text-red-600 dark:text-red-400">role</span>:{" "}
            <span className="text-green-600 dark:text-green-400">
              "Full Stack Developer"
            </span>
            ,
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-red-600 dark:text-red-400">location</span>:{" "}
            <span className="text-green-600 dark:text-green-400">
              "Delhi, India"
            </span>
            <MapPin className="w-4 h-4 text-muted-foreground" />
          </div>
          <div>
            <span className="text-red-600 dark:text-red-400">availability</span>
            :{" "}
            <span className="text-green-600 dark:text-green-400">
              "Open to opportunities"
            </span>
            ,
          </div>
        </div>

        <div className="ml-4 mt-4">
          <span className="text-red-600 dark:text-red-400">social</span>:{" "}
          <span className="text-gray-600 dark:text-gray-400">{"{"}</span>
        </div>

        {contactMethods.map((contact, index) => {
          const Icon = contact.icon;
          return (
            <div
              key={contact.type}
              className="ml-8 p-3 border border-border rounded-lg bg-card hover:bg-accent/50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Icon className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-red-600 dark:text-red-400">
                        {contact.type}
                      </span>
                      :
                      <a
                        href={contact.href}
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="text-green-600 dark:text-green-400">
                          "{contact.value}"
                        </span>
                      </a>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      // {contact.description}
                    </div>
                  </div>
                </div>
              </div>
              {index < contactMethods.length - 1 && (
                <span className="text-gray-600 dark:text-gray-400">,</span>
              )}
            </div>
          );
        })}

        <div className="ml-4">
          <span className="text-gray-600 dark:text-gray-400">{"}"}</span>
        </div>

        <div>
          <span className="text-gray-600 dark:text-gray-400">{"}"};</span>
        </div>
      </div>

      {/* Download resume section */}
      <div className="mt-8 p-4 bg-accent/30 rounded-lg border border-border">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-green-600 dark:text-green-400 text-sm">
              // Want to see my full experience?
            </div>
            <div className="text-sm mt-1">
              <span className="text-blue-600 dark:text-blue-400">function</span>{" "}
              <span className="text-yellow-600 dark:text-yellow-400">
                downloadResume
              </span>
              <span className="text-gray-600 dark:text-gray-400">()</span>
            </div>
          </div>
          <a
            href="/Resume.pdf"
            download
            className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Resume.pdf</span>
          </a>
        </div>
      </div>

      {/* Response time */}
      <div className="mt-6 p-4 bg-muted/30 rounded-lg border border-border">
        <div className="text-green-600 dark:text-green-400 text-sm">
          // Response time: Usually within 24 hours | Timezone: IST (GMT+5:30)
        </div>
      </div>
    </div>
  );
}
