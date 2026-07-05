import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faBullseye,
  faBolt,
  faGraduationCap,
  faCalendar,
  faMapMarkerAlt,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import profile from "../assets/images/profile.png";

const highlights = [
  {
    icon: faLightbulb,
    title: "Product-Minded",
    gradient: "from-amber-500 to-orange-500",
    description:
      "I build features users actually need — combining clean architecture with real business outcomes.",
  },
  {
    icon: faBullseye,
    title: "Quality First",
    gradient: "from-violet-500 to-indigo-500",
    description:
      "Every line I write follows SOLID principles, tested patterns, and maintainable code practices.",
  },
  {
    icon: faBolt,
    title: "Fast Learner",
    gradient: "from-cyan-500 to-blue-500",
    description:
      "Picked up React, Next.js, and Flutter alongside .NET — I expand my stack to fit the problem.",
  },
];

const expertise = [
  "C#", "ASP.NET Core", "Entity Framework", "React", "Next.js",
  "SQL Server", "REST APIs", "Node.js", "Flutter", "Git",
];

const timeline = [
  {
    year: "Jun 2026 – Present",
    title: "Software Engineer Intern",
    place: "Lexon IT Solutions Pvt Ltd",
    location: "Remote · lexonit.com",
    icon: faBriefcase,
    description:
      "AI Full Stack Development internship — building intelligent web applications, contributing to production codebases, and working under senior engineers in an agile remote environment.",
  },
  {
    year: "2025 – 2026",
    title: "Software Engineer",
    place: "Freelance / Projects",
    location: "Islamabad, PK",
    icon: faGraduationCap,
    description: "Built full-stack web apps and REST APIs for clients using .NET, React, and cloud deployment.",
  },
  {
    year: "2022 – 2026",
    title: "BS Software Engineering",
    place: "University of Management Sciences",
    location: "Islamabad, PK",
    icon: faGraduationCap,
    description: "Studied OOP, database systems, algorithms, software architecture, and modern development practices.",
  },
];

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      id="aboutMey"
      className="py-20 md:py-28 px-6 md:px-16 bg-gradient-subtle"
    >
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-badge">Who I Am</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A software engineer who ships real products — not just code.
          </p>
        </motion.div>

        {/* Profile + Bio grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left: Profile card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-premium rounded-2xl p-8 flex flex-col items-center text-center gap-4">
              {/* Profile picture with glow ring */}
              <div className="relative mb-2">
                <div className="absolute -inset-3 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 blur-xl animate-pulse-slow" />
                <div className="relative w-64 h-64 rounded-full overflow-hidden
                                border-4 border-primary/40 shadow-elevated animate-glow-ring">
                  <img
                    src={profile}
                    alt="Muhammad Hammad Alamgir — Software Engineer"
                    className="w-full h-full object-cover object-top scale-125"
                    loading="lazy"
                    width={256}
                    height={256}
                  />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold text-foreground">Hammad Alamgir</h3>
                <p className="text-primary font-medium mt-1">.NET &amp; React Engineer</p>
              </div>

              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="w-3.5 h-3.5 text-primary" />
                Islamabad, Pakistan
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-3 w-full mt-2">
                {[
                  { n: "3+",  l: "Projects"    },
                  { n: "10+", l: "Technologies" },
                  { n: "2+",  l: "Years"        },
                ].map((s) => (
                  <div key={s.l} className="rounded-xl bg-primary/8 border border-primary/15 py-2">
                    <div className="text-xl font-bold text-gradient font-heading">{s.n}</div>
                    <div className="text-xs text-muted-foreground">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Bio + expertise */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-7"
          >
            <div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">My Story</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a Software Engineer with hands-on experience in{" "}
                <span className="text-foreground font-medium">C# / ASP.NET Core</span>,{" "}
                <span className="text-foreground font-medium">React</span>, and{" "}
                <span className="text-foreground font-medium">SQL Server</span>. I've shipped
                real applications — from a home diagnostic booking platform to PDF-processing tools
                and ML-powered recommendation systems.
              </p>
            </div>

            <div>
              <p className="text-muted-foreground leading-relaxed">
                My strength is connecting backend logic to frontend experience: I write
                optimized stored procedures, design clean REST APIs, and build responsive UIs that
                users actually enjoy. I care about{" "}
                <span className="text-foreground font-medium">maintainability, performance,
                and delivery speed</span> — not just making things work.
              </p>
            </div>

            {/* Expertise tags */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                Core Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {expertise.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.04 }}
                    className="tech-badge"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-xl font-heading font-semibold mb-6 text-center text-foreground">
            Experience &amp; Education
          </h3>
          <div className="space-y-4">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.15 }}
                className="glass-premium rounded-xl p-5 flex gap-5 items-start hover-lift"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-accent
                                flex items-center justify-center flex-shrink-0 shadow-glow">
                  <FontAwesomeIcon icon={item.icon} className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h4 className="font-heading font-semibold text-foreground">{item.title}</h4>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <FontAwesomeIcon icon={faCalendar} className="w-3 h-3" />
                      {item.year}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-primary">{item.place}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.location}</p>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Highlight cards */}
        <div className="grid md:grid-cols-3 gap-5 mt-12">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
              className="glass-premium rounded-2xl p-6 hover-lift glow-border"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient}
                              flex items-center justify-center mb-4 shadow-card`}>
                <FontAwesomeIcon icon={item.icon} className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-heading font-bold mb-2 text-foreground">{item.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
};

export default AboutMe;
