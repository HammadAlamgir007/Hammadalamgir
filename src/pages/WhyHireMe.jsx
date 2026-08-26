import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const standards = [
  "Java 21 LTS",
  "Spring Boot 3.3",
  "Layered Architecture",
  "Spring Security",
  "JWT Auth",
  "RSA & AES-GCM",
  "Spring Data JPA",
  "Hibernate",
  "Postman Validated",
  "SOLID Principles",
  "MySQL / PostgreSQL",
  "Git Workflows",
];

const WhyHireMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="py-20 md:py-28 px-6 sm:px-8 md:px-12 bg-transparent"
      id="practices"
    >
      <div className="max-w-4xl mx-auto text-center">
        <span className="section-badge">Standards &amp; Methodologies</span>
        <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground mb-4">
          Engineering <span className="text-gradient">Practices</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg font-normal leading-relaxed mb-10">
          Enterprise backend standards, clean architecture principles, and security-first pipelines.
        </p>

        {/* Standards badges */}
        <div className="flex flex-wrap justify-center gap-2.5">
          {standards.map((badge) => (
            <span
              key={badge}
              className="px-4 py-2 rounded-full text-xs font-mono font-medium
                         border border-border bg-card/80 backdrop-blur-md text-foreground/80 shadow-soft
                         hover:border-primary hover:text-primary transition-all duration-200"
              data-cursor-text={badge}
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WhyHireMe;
