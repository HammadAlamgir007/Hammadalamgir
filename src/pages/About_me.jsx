import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faCalendar,
  faMapMarkerAlt,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import profile from "../assets/images/profile.png";

const expertise = [
  "Java", "Spring Boot", "Spring Security", "JWT", "Spring Data JPA",
  "Hibernate", "REST APIs", "MySQL", "PostgreSQL", "SQL Server",
  "Python", "React.js", "Maven", "Postman", "Git & GitHub",
];

const timeline = [
  {
    year: "Jun 2026 – Present",
    title: "Java Backend Developer Intern",
    place: "Warmbytes",
    location: "Islamabad, PK · Enterprise Engagement",
    icon: faBriefcase,
    description:
      "Contributing to backend development for Aik Tijarat, a real-world enterprise application. Developing robust Java & Spring Boot microservices, building secure RESTful APIs, implementing RSA/AES-GCM encryption workflows, and integrating JWT authentication.",
  },
  {
    year: "2022 – 2026",
    title: "Bachelor of Science in Information Technology (BS IT)",
    place: "Bahria University",
    location: "Islamabad, PK · CGPA: 3.1 / 4.0",
    icon: faGraduationCap,
    description:
      "Core focus on Data Structures & Algorithms, Object-Oriented Programming, Database Systems (DBMS), Software Engineering, Computer Networks, and Cybersecurity.",
  },
];

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      id="aboutMey"
      className="py-28 md:py-40 px-6 sm:px-8 md:px-12 bg-transparent"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-16"
        >
          <span className="section-badge">Who I Am</span>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-4 text-foreground">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            A software engineer who ships real, performant products — not just code.
          </p>
        </motion.div>

        {/* Profile + Bio grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* Left: Profile card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-5"
          >
            <div className="glass-premium rounded-3xl p-8 flex flex-col items-center text-center gap-6 border border-border shadow-soft group">
              {/* Profile picture with centered face alignment */}
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-br from-primary/30 via-accent/20 to-transparent rounded-full blur-xl animate-pulse-slow pointer-events-none" />
                <div className="relative w-56 h-56 sm:w-60 sm:h-60 rounded-full overflow-hidden border-4 border-border shadow-elevated bg-card">
                  <img
                    src={profile}
                    alt="Muhammad Hammad Alamgir — Java Backend Developer"
                    className="w-full h-full object-cover object-[50%_18%] transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    width={240}
                    height={240}
                  />
                </div>
              </div>

              {/* Name & Role Alignment */}
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-foreground tracking-tight">
                  Muhammad Hammad Alamgir
                </h3>
                <p className="text-xs uppercase tracking-widest text-primary font-mono font-bold mt-1.5">
                  Java Backend Developer
                </p>
              </div>

              {/* Location Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/80 border border-border text-xs text-muted-foreground font-medium">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="w-3.5 h-3.5 text-primary" />
                Islamabad, Pakistan
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-3 w-full mt-1">
                {[
                  { n: "3+",  l: "Projects"    },
                  { n: "12+", l: "Tech Stack" },
                  { n: "3.1", l: "BS IT CGPA"  },
                ].map((s) => (
                  <div key={s.l} className="rounded-2xl bg-secondary/80 border border-border py-3 px-2">
                    <div className="text-lg font-extrabold text-foreground font-heading">{s.n}</div>
                    <div className="text-[11px] text-muted-foreground font-medium mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Bio + expertise (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-7 space-y-7"
          >
            <div className="glass-premium rounded-3xl p-8 border border-border shadow-soft space-y-6">
              <div>
                <h3 className="text-xl font-heading font-bold mb-3 text-foreground">Professional Background</h3>
                <p className="text-muted-foreground leading-relaxed text-base font-normal">
                  I'm a <span className="text-foreground font-semibold">Java Backend Developer</span> with hands-on experience developing enterprise backend systems, RESTful APIs, and database-driven architectures. Currently contributing to <span className="text-foreground font-semibold">Aik Tijarat</span> at <span className="text-foreground font-semibold">Warmbytes</span> using <span className="text-foreground font-semibold">Java &amp; Spring Boot</span>.
                </p>
              </div>

              <div>
                <p className="text-muted-foreground leading-relaxed text-base font-normal">
                  My technical foundation spans <span className="text-foreground font-semibold">Spring Security, JWT authentication, RSA &amp; AES-GCM encryption</span>, layered architecture (Controllers, Services, Repositories, DTOs, Entities), and relational databases like <span className="text-foreground font-semibold">MySQL, SQL Server, and PostgreSQL</span>.
                </p>
              </div>

              {/* Expertise tags */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                  Core Technologies
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
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.45, ease: [0.23, 1, 0.32, 1] }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              Experience &amp; Education
            </h3>
          </div>
          <div className="space-y-4">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.55 + i * 0.12, ease: [0.23, 1, 0.32, 1] }}
                className="glass-premium rounded-2xl p-6 flex gap-5 items-start hover-lift border border-border shadow-soft"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20
                                flex items-center justify-center flex-shrink-0 text-primary shadow-soft">
                  <FontAwesomeIcon icon={item.icon} className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h4 className="font-heading font-bold text-foreground text-base md:text-lg">{item.title}</h4>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                      <FontAwesomeIcon icon={faCalendar} className="w-3 h-3 text-primary" />
                      {item.year}
                    </span>
                  </div>
                  <p className="text-xs uppercase tracking-wider font-semibold text-primary">{item.place}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.location}</p>
                  <p className="text-sm text-muted-foreground mt-2.5 leading-relaxed font-normal">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default AboutMe;
