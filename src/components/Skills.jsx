import { motion } from "framer-motion";
import React from "react";

/* ── Technical skills exact match with CV (cv.txt) ── */
const skillGroups = [
  {
    category: "Languages",
    skills: ["Java", "Python", "SQL", "JavaScript", "C++"],
  },
  {
    category: "Backend",
    skills: [
      "Core Java",
      "Spring Boot",
      "REST APIs",
      "Spring MVC",
      "Spring Data JPA",
      "Hibernate",
      "JDBC",
      "Maven",
    ],
  },
  {
    category: "Security",
    skills: [
      "Spring Security",
      "JWT",
      "Authentication & Authorization",
      "RSA Encryption",
      "AES-GCM",
      "Secure Sensitive Data Handling",
    ],
  },
  {
    category: "Databases",
    skills: ["MySQL", "SQL Server", "PostgreSQL"],
  },
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "HTML", "CSS"],
  },
  {
    category: "Tools",
    skills: ["IntelliJ IDEA", "Git", "GitHub", "Postman", "VS Code"],
  },
  {
    category: "Core Concepts",
    skills: [
      "Object-Oriented Programming (OOP)",
      "Data Structures & Algorithms (DSA)",
      "Database Management Systems (DBMS)",
      "SOLID Principles",
      "SDLC",
      "Layered Architecture",
      "Agile",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-28 md:py-40 px-6 sm:px-8 md:px-12 bg-transparent overflow-hidden"
    >
      <div className="max-w-4xl mx-auto relative">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-16"
        >
          <span className="section-badge">Skill Set</span>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-4 text-foreground">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto font-normal leading-relaxed">
            A comprehensive overview of my technical stack and engineering proficiencies.
          </p>
        </motion.div>

        {/* Simple CV-Style Skills List */}
        <div className="space-y-4">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: [0.23, 1, 0.32, 1] }}
              className="glass-premium rounded-2xl p-5 sm:p-6 border border-border flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 hover-lift"
            >
              {/* Category Label */}
              <div className="sm:w-40 flex-shrink-0">
                <span className="text-xs font-mono font-bold text-primary uppercase tracking-widest">
                  {group.category}
                </span>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 flex-1">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 rounded-xl bg-secondary/80 border border-border text-foreground text-xs sm:text-sm font-medium transition-colors hover:border-primary/40 hover:bg-card"
                    data-cursor-text={skill}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
