import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNodeJs,
  faAws,
  faPython,
  faReact,
  faJs,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faDatabase,
  faLayerGroup,
  faServer,
  faToolbox,
  faCubes,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";

const skillCategories = [
  {
    title: 'Languages',
    icon: faCode,
    color: 'from-teal-500 to-cyan-500',
    skills: [
      { name: 'C#', level: 85, icon: faCode },
      { name: 'JavaScript', level: 80, icon: faJs },
      { name: 'Python', level: 70, icon: faPython },
      { name: 'SQL', level: 85, icon: faDatabase },
      { name: 'HTML/CSS', level: 90, icon: faCode },
    ],
  },
  {
    title: 'Frameworks',
    icon: faLayerGroup,
    color: 'from-blue-500 to-indigo-500',
    skills: [
      { name: 'ASP.NET Core MVC', level: 85, icon: faServer },
      { name: 'Entity Framework', level: 80, icon: faCubes },
      { name: 'React', level: 80, icon: faReact },
      { name: 'Next.js', level: 75, icon: faReact },
      { name: 'Express.js', level: 75, icon: faNodeJs },
      { name: 'Flutter', level: 70, icon: faMobile },
    ],
  },
  {
    title: 'Databases',
    icon: faDatabase,
    color: 'from-emerald-500 to-teal-500',
    skills: [
      { name: 'Microsoft SQL Server', level: 85, icon: faDatabase },
      { name: 'MySQL', level: 80, icon: faDatabase },
      { name: 'MongoDB', level: 70, icon: faDatabase },
    ],
  },
  {
    title: 'Tools & Cloud',
    icon: faToolbox,
    color: 'from-violet-500 to-purple-500',
    skills: [
      { name: 'Visual Studio', level: 85, icon: faToolbox },
      { name: 'VS Code', level: 90, icon: faToolbox },
      { name: 'Git/GitHub', level: 85, icon: faGitAlt },
      { name: 'AWS', level: 65, icon: faAws },
      { name: 'ClickUp', level: 70, icon: faToolbox },
      { name: 'ODOO', level: 60, icon: faToolbox },
    ],
  },
  {
    title: 'Core Concepts',
    icon: faCubes,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'OOP', level: 85, icon: faCubes },
      { name: 'MVC Architecture', level: 85, icon: faLayerGroup },
      { name: 'REST APIs', level: 85, icon: faServer },
      { name: 'Stored Procedures', level: 80, icon: faDatabase },
    ],
  },
];

function SkillBar({ name, level, delay, isInView, icon }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-semibold text-foreground flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-primary/10 dark:bg-white/10 ring-1 ring-border/40 dark:ring-white/10">
            <FontAwesomeIcon icon={icon} className="text-primary w-3.5 h-3.5" />
          </span>
          {name}
        </span>
        <span className="sr-only">{level}%</span>
      </div>
      <div className="h-2.5 bg-secondary/70 dark:bg-white/10 rounded-full overflow-hidden ring-1 ring-border/40 dark:ring-white/10">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-primary via-cyan-400 to-accent rounded-full shadow-glow relative"
        />
      </div>
    </div>
  );
}

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="skills"
      className="relative py-20 md:py-32 px-6 md:px-16 bg-gradient-subtle overflow-hidden"
      ref={ref}
    >
      {/* Soft optimistic glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Expertise across the development stack, from .NET backend systems to modern frontend frameworks
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="group relative p-6 rounded-2xl bg-white/80 dark:bg-card/70 backdrop-blur-xl shadow-card border border-border/60 dark:border-white/10 hover-lift overflow-hidden"
            >
              {/* Top accent bar (full-bleed) */}
              <div
                className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${category.color} opacity-90 group-hover:opacity-100 transition-opacity`}
              />

              {/* Subtle gadget glow */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start gap-3 mb-5 pt-1">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-glow ring-1 ring-white/20`}>
                  <FontAwesomeIcon icon={category.icon} className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-foreground leading-tight">{category.title}</h3>
                  <p className="text-xs text-muted-foreground/90 mt-0.5">Proficiency overview</p>
                </div>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={categoryIndex * 0.1 + skillIndex * 0.05}
                    isInView={isInView}
                    icon={skill.icon ?? category.icon}
                  />
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
