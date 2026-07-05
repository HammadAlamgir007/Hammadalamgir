import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLayerGroup,
  faDatabase,
  faLightbulb,
  faGraduationCap,
  faShieldHalved,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const bentoItems = [
  {
    icon: faLayerGroup,
    title: "Full-Stack Coverage",
    description:
      "I own the entire delivery pipeline — from SQL schema to REST endpoint to pixel-perfect React component.",
    gradient: "from-violet-500 to-indigo-500",
    span: "md:col-span-1 md:row-span-2",
    highlight: true,
  },
  {
    icon: faDatabase,
    title: "Database-Driven",
    description:
      "Optimized queries, indexed schemas, and stored procedures that keep production fast under real load.",
    gradient: "from-cyan-500 to-teal-500",
    span: "md:col-span-1",
  },
  {
    icon: faLightbulb,
    title: "Problem Solver",
    description:
      "I diagnose root causes, not symptoms — and I document solutions so teams don't repeat the same mistakes.",
    gradient: "from-amber-500 to-orange-500",
    span: "md:col-span-1",
  },
  {
    icon: faShieldHalved,
    title: "Security-Conscious",
    description:
      "Auth, input validation, parameterized queries — I don't ship without covering the basics.",
    gradient: "from-emerald-500 to-green-500",
    span: "md:col-span-1",
  },
  {
    icon: faGraduationCap,
    title: "Always Growing",
    description:
      "Currently deepening cloud (AWS) and machine learning knowledge to build smarter, more scalable systems.",
    gradient: "from-pink-500 to-rose-500",
    span: "md:col-span-1",
  },
  {
    icon: faClock,
    title: "Ships On Time",
    description:
      "I scope accurately, communicate blockers early, and deliver — no last-minute surprises.",
    gradient: "from-blue-500 to-sky-500",
    span: "md:col-span-1",
  },
];

const trustBadges = [
  "Clean Code",
  "SOLID Principles",
  "Agile-Ready",
  "REST APIs",
  "Git Workflow",
  "Code Reviews",
];

const WhyHireMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1, duration: 0.5 }}
      className="py-20 md:py-28 px-6 md:px-16 bg-background"
      id="why-hire-me"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-badge">Value Proposition</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground mb-4">
            Why <span className="text-gradient">Hire Me?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            I don't just write code — I solve problems, meet deadlines, and make my teammates' lives easier.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid md:grid-cols-3 gap-4 auto-rows-auto">
          {bentoItems.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + idx * 0.09, duration: 0.5 }}
              className={`card-premium p-6 flex flex-col gap-4 ${card.span} ${
                card.highlight ? "bg-bento" : ""
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.gradient}
                            flex items-center justify-center shadow-card flex-shrink-0`}
              >
                <FontAwesomeIcon icon={card.icon} className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground font-heading mb-1.5">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-4">
            I practice
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="px-4 py-1.5 rounded-full text-sm font-medium
                           border border-border bg-card text-foreground/70
                           hover:border-primary/50 hover:text-primary transition-all duration-200"
              >
                {badge}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default WhyHireMe;
