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
  faCubes,
  faMobileScreen,
  faWrench,
  faCloud,
} from "@fortawesome/free-solid-svg-icons";

/* ── Skill level labels ───────────────────────────────── */
const levelLabel = (pct) => {
  if (pct >= 85) return { text: "Advanced",      color: "text-emerald-500" };
  if (pct >= 70) return { text: "Intermediate",  color: "text-blue-500"    };
  return              { text: "Familiar",        color: "text-amber-500"   };
};

/* ── Skill categories ─────────────────────────────────── */
const skillCategories = [
  {
    title: "Languages",
    icon: faCode,
    color: "from-violet-500 to-indigo-500",
    skills: [
      { name: "C#",        pct: 85, icon: faCode   },
      { name: "JavaScript",pct: 80, icon: faJs     },
      { name: "Python",    pct: 70, icon: faPython  },
      { name: "SQL",       pct: 85, icon: faDatabase},
      { name: "HTML/CSS",  pct: 90, icon: faCode   },
    ],
  },
  {
    title: "Frameworks",
    icon: faLayerGroup,
    color: "from-cyan-500 to-teal-500",
    skills: [
      { name: "ASP.NET Core MVC", pct: 85, icon: faServer     },
      { name: "Entity Framework", pct: 80, icon: faCubes      },
      { name: "React",            pct: 80, icon: faReact      },
      { name: "Next.js",          pct: 75, icon: faReact      },
      { name: "Express.js",       pct: 75, icon: faNodeJs     },
      { name: "Flutter",          pct: 70, icon: faMobileScreen},
    ],
  },
  {
    title: "Databases",
    icon: faDatabase,
    color: "from-emerald-500 to-green-500",
    skills: [
      { name: "MS SQL Server", pct: 85, icon: faDatabase },
      { name: "MySQL",         pct: 80, icon: faDatabase },
      { name: "MongoDB",       pct: 70, icon: faDatabase },
    ],
  },
  {
    title: "Dev Tools",
    icon: faWrench,
    color: "from-amber-500 to-orange-500",
    skills: [
      { name: "Visual Studio",   pct: 90, icon: faCode    },
      { name: "VS Code",         pct: 90, icon: faCode    },
      { name: "Postman",         pct: 85, icon: faServer  },
      { name: "Git / GitHub",    pct: 85, icon: faGitAlt  },
      { name: "Docker",          pct: 70, icon: faCloud   },
      { name: "ClickUp",         pct: 75, icon: faWrench  },
    ],
  },
  {
    title: "Cloud & APIs",
    icon: faCloud,
    color: "from-sky-500 to-blue-500",
    skills: [
      { name: ".NET Web API",    pct: 85, icon: faServer  },
      { name: "Azure",           pct: 70, icon: faCloud   },
      { name: "AWS",             pct: 65, icon: faAws     },
      { name: "REST APIs",       pct: 85, icon: faServer  },
      { name: "ODOO",            pct: 60, icon: faCubes   },
    ],
  },
  {
    title: "Core Concepts",
    icon: faCubes,
    color: "from-pink-500 to-rose-500",
    skills: [
      { name: "OOP",              pct: 85, icon: faCubes     },
      { name: "MVC Architecture", pct: 85, icon: faLayerGroup},
      { name: "REST APIs",        pct: 85, icon: faServer    },
      { name: "Stored Procedures",pct: 80, icon: faDatabase  },
    ],
  },
];

/* ── Skill bar ────────────────────────────────────────── */
function SkillBar({ name, pct, delay, isInView, icon }) {
  const { text, color } = levelLabel(pct);
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-xs font-semibold text-foreground flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-md
                           bg-primary/10 dark:bg-white/8 border border-border/50">
            <FontAwesomeIcon icon={icon} className="text-primary w-3 h-3" />
          </span>
          {name}
        </span>
        <span className={`text-[10px] font-bold uppercase tracking-wide ${color}`}>{text}</span>
      </div>
      <div className="h-2 bg-secondary dark:bg-white/8 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${pct}%` } : {}}
          transition={{ duration: 1.1, delay, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full relative"
        />
      </div>
    </div>
  );
}

/* ── Main component ───────────────────────────────────── */
const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      className="relative py-20 md:py-28 px-6 md:px-16 bg-gradient-subtle overflow-hidden"
      ref={ref}
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-accent/8 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-badge">Expertise</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Across the full stack — from .NET APIs and SQL schemas to React UIs and cloud deployments.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="group relative rounded-2xl bg-card border border-border shadow-card
                         overflow-hidden hover:-translate-y-1.5 hover:shadow-elevated
                         hover:border-primary/30 transition-all duration-300"
            >
              {/* Top accent */}
              <div className={`h-1 bg-gradient-to-r ${category.color}`} />

              {/* Hover glow */}
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full
                              bg-primary/8 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="p-5">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color}
                                   flex items-center justify-center shadow-card`}>
                    <FontAwesomeIcon icon={category.icon} className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground text-sm leading-tight">
                      {category.title}
                    </h3>
                    <p className="text-[10px] text-muted-foreground mt-0.5">
                      {category.skills.length} skills
                    </p>
                  </div>
                </div>

                {/* Skill bars */}
                <div className="space-y-3.5">
                  {category.skills.map((skill, skillIdx) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      pct={skill.pct}
                      delay={catIdx * 0.1 + skillIdx * 0.06}
                      isInView={isInView}
                      icon={skill.icon ?? category.icon}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
