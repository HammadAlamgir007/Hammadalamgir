import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faBolt } from "@fortawesome/free-solid-svg-icons";

const Card = ({ icon, title, tagline, description, techStack, links, challenges, impact, live, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: 0.1 + (index ?? 0) * 0.1, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      className="card-premium flex flex-col h-full rounded-3xl overflow-hidden border border-border shadow-soft hover-lift group"
    >
      {/* Sleek Adaptive Banner */}
      <div className="h-40 bg-gradient-hero border-b border-border relative overflow-hidden flex-shrink-0 flex items-center justify-center">
        {/* Subtle grid accent */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08)_1px,transparent_1px)] bg-[size:18px_18px] opacity-60" />

        {/* Icon */}
        <div className="relative w-16 h-16 rounded-2xl bg-card border border-border/80 shadow-soft
                        flex items-center justify-center group-hover:scale-110 group-hover:border-primary/40 transition-all duration-300">
          <FontAwesomeIcon icon={icon} className="w-8 h-8 text-primary" />
        </div>

        {/* Live / In Progress badge */}
        {live !== undefined && (
          <div className="absolute top-4 right-4">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-card/85 border border-border text-foreground backdrop-blur-md shadow-soft">
              {live && (
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
              )}
              {live ? "Live Demo" : "Repository"}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-7 flex flex-col flex-1 gap-5">
        <div>
          <h3 className="text-xl font-bold text-foreground font-heading mb-1">{title}</h3>
          {tagline && (
            <p className="text-xs text-primary font-mono font-semibold mb-2.5">{tagline}</p>
          )}
          <p className="text-muted-foreground text-sm font-normal leading-relaxed">{description}</p>
        </div>

        {/* Impact metric */}
        {impact && (
          <div className="flex items-start gap-2.5 px-3.5 py-2.5 rounded-xl bg-primary/8 border border-primary/15">
            <FontAwesomeIcon icon={faBolt} className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
            <p className="text-xs text-foreground font-medium">{impact}</p>
          </div>
        )}

        {/* Tech Stack */}
        {techStack && (
          <div className="flex flex-wrap gap-1.5">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-secondary text-foreground/85 text-xs font-medium rounded-lg
                           border border-border"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Key achievements */}
        {challenges && (
          <ul className="space-y-1.5 mt-auto pt-2 border-t border-border">
            {challenges.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-muted-foreground font-normal leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        )}

        {/* Action buttons */}
        <div className="flex gap-3 mt-2 pt-4 border-t border-border">
          {links?.repo && (
            <a
              href={links.repo}
              target="_blank"
              rel="noreferrer"
              className="btn-outline !py-2.5 !px-4 !text-xs flex-1 flex items-center justify-center gap-2"
              data-cursor-text="Code"
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
              className="btn-solid !py-2.5 !px-4 !text-xs flex-1 flex items-center justify-center gap-2"
              data-cursor-text="Demo"
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
