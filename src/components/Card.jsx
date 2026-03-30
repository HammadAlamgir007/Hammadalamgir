import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const Card = ({ icon, title, description, techStack, links, challenges }) => {
  return (
    <div className="bg-card border border-border rounded-xl shadow-card overflow-hidden flex flex-col h-full transition-transform hover:-translate-y-2 group">
      <div className="h-32 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-card/10 backdrop-blur-sm"></div>
        <div className="z-10 text-5xl text-primary group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
          <FontAwesomeIcon icon={icon} />
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1 gap-4">
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2 font-heading">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>

          {/* Tech Stack Badges */}
          {techStack && (
            <div className="flex flex-wrap gap-2 mb-4">
              {techStack.map((tech, idx) => (
                <span key={idx} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded border border-primary/20">
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Challenges & Solutions */}
          {challenges && (
            <div className="mb-4 bg-secondary/50 p-3 rounded text-xs text-foreground/80">
              <strong className="block text-foreground mb-1">Key Features:</strong>
              <ul className="list-disc pl-4 space-y-1">
                {challenges.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-auto flex gap-3">
          {links?.repo && (
            <a
              href={links.repo}
              target="_blank"
              rel="noreferrer"
              className="flex-1 text-center px-4 py-2 bg-secondary hover:bg-secondary/80 text-foreground rounded border border-border transition flex items-center justify-center gap-2 text-sm font-medium"
            >
              <FontAwesomeIcon icon={faGithub} /> Code
            </a>
          )}
          {links?.demo && (
            <a
              href={links.demo}
              target="_blank"
              rel="noreferrer"
              className="flex-1 text-center px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded shadow-lg shadow-primary/20 transition flex items-center justify-center gap-2 text-sm font-medium"
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} /> Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
