import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faBolt } from "@fortawesome/free-solid-svg-icons";

const Card = ({ icon, title, tagline, description, techStack, links, challenges, gradient, impact, live, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: 0.1 + (index ?? 0) * 0.1, duration: 0.5 }}
      className="flex flex-col h-full rounded-2xl overflow-hidden border border-border
                 bg-card shadow-card group hover:-translate-y-2 hover:shadow-elevated
                 hover:border-primary/30 transition-all duration-300"
    >
      {/* Gradient banner */}
      <div className={`h-36 bg-gradient-to-br ${gradient ?? "from-primary to-accent"} relative overflow-hidden flex-shrink-0`}>
        {/* Shimmer overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                        bg-[linear-gradient(135deg,transparent_40%,rgba(255,255,255,0.12)_50%,transparent_60%)]
                        bg-[length:200%_200%] animate-shimmer" />

        {/* Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20
                          flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <FontAwesomeIcon icon={icon} className="w-8 h-8 text-white drop-shadow-lg" />
          </div>
        </div>

        {/* Live / In Progress badge */}
        {live !== undefined && (
          <div className="absolute top-3 right-3">
            <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
              live
                ? "bg-emerald-500/90 text-white"
                : "bg-black/40 text-white/80 border border-white/20"
            }`}>
              {live && (
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white" />
                </span>
              )}
              {live ? "Live" : "Repo Only"}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 gap-4">
        <div>
          <h3 className="text-lg font-bold text-foreground font-heading mb-0.5">{title}</h3>
          {tagline && (
            <p className="text-xs text-primary font-medium mb-2">{tagline}</p>
          )}
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>

        {/* Impact metric */}
        {impact && (
          <div className="flex items-start gap-2 px-3 py-2 rounded-lg bg-primary/8 border border-primary/15">
            <FontAwesomeIcon icon={faBolt} className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
            <p className="text-xs font-medium text-primary">{impact}</p>
          </div>
        )}

        {/* Tech Stack */}
        {techStack && (
          <div className="flex flex-wrap gap-1.5">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 bg-secondary text-foreground/75 text-xs rounded-lg
                           border border-border font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Key achievements */}
        {challenges && (
          <ul className="space-y-1.5 mt-auto">
            {challenges.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                <span className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        )}

        {/* Action buttons */}
        <div className="flex gap-2.5 mt-2 pt-2 border-t border-border/60">
          {links?.repo && (
            <a
              href={links.repo}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3
                         bg-secondary hover:bg-secondary/70 text-foreground/80
                         rounded-xl border border-border text-xs font-semibold
                         transition-all duration-200 hover:text-foreground"
            >
              <FontAwesomeIcon icon={faGithub} className="w-3.5 h-3.5" />
              Code
            </a>
          )}
          {links?.demo && (
            <a
              href={links.demo}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3
                         bg-primary hover:bg-primary/90 text-primary-foreground
                         rounded-xl shadow-glow text-xs font-semibold
                         transition-all duration-200"
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-3 h-3" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
