import { motion } from "framer-motion";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faVial,
  faCode,
  faArrowRight,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import Card from "../components/Card";

const cards = [
  {
    icon: faShieldHalved,
    title: "Aik Tijarat — Enterprise Backend",
    tagline: "Real-world enterprise Java & Spring Boot backend",
    description:
      "Enterprise backend platform developed through Warmbytes vendor engagement. Implements a layered architecture, sensitive payload encryption, and secure JWT authentication.",
    techStack: ["Java", "Spring Boot", "Spring Security", "JWT", "MySQL", "Postman"],
    impact: "Enterprise security architecture with AES-GCM & RSA encryption",
    challenges: [
      "Architected clean Controller-Service-Repository-DTO-Entity layered backend",
      "Engineered secure handling of sensitive data with RSA & AES-GCM encryption",
      "Implemented JWT authentication, authorization, and Postman test suites",
    ],
    links: {
      repo: "https://github.com/ihammadalamgir",
      demo: null,
    },
    gradient: "from-blue-600 via-indigo-600 to-purple-600",
    live: false,
  },
  {
    icon: faVial,
    title: "Rahila Labs — Diagnostic Platform",
    tagline: "Online diagnostic laboratory & home sampling",
    description:
      "Final Year Project: A full-scale diagnostic platform where patients book home lab tests and track results across patients, admins, lab services, and riders.",
    techStack: ["Python", "REST APIs", "SQL Server", "React.js"],
    impact: "End-to-end medical test booking & home sampling dispatch",
    challenges: [
      "Developed backend REST API modules for test booking and patient workflows",
      "Integrated SQL Server for structured relational storage and query optimization",
      "Built and seamlessly integrated APIs with a responsive React.js frontend",
    ],
    links: {
      repo: "https://github.com/HammadAlamgir007/RahilaLabs.git",
      demo: "https://rahila-labs-web.azurewebsites.net/",
    },
    gradient: "from-cyan-600 via-teal-600 to-emerald-600",
    live: true,
  },
  {
    icon: faCode,
    title: "Java Spring Boot REST API",
    tagline: "High-performance layered CRUD & ORM system",
    description:
      "A production-grade RESTful API built with Spring Boot, Spring Data JPA, and Hibernate — featuring DTO validation, custom queries, and global exception handling.",
    techStack: ["Java", "Spring Boot", "Hibernate", "Spring Data JPA", "MySQL", "Maven"],
    impact: "Standardized API architecture with 100% verified endpoints in Postman",
    challenges: [
      "Engineered layered CRUD endpoints with strict DTO request/response schemas",
      "Integrated MySQL database utilizing Hibernate ORM and Spring Data JPA",
      "Implemented comprehensive validation and unified global exception handling",
    ],
    links: {
      repo: "https://github.com/ihammadalamgir",
      demo: null,
    },
    gradient: "from-amber-600 via-orange-600 to-rose-600",
    live: false,
  },
];

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      viewport={{ margin: "-80px", once: true }}
      className="py-28 md:py-40 px-6 sm:px-8 md:px-12 bg-transparent"
      id="project"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="section-badge">Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 font-heading">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg font-normal leading-relaxed">
            Enterprise backend systems, secure microservices, and database platforms built with Java, Spring Boot, and Python.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <Card key={index} {...card} index={index} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mt-20"
        >
          <p className="text-muted-foreground mb-6 text-sm font-normal">
            More open-source repositories, system prototypes, and backend architectures on GitHub.
          </p>
          <a
            href="https://github.com/ihammadalamgir"
            target="_blank"
            rel="noreferrer"
            className="btn-outline inline-flex items-center gap-3 !py-3.5 !px-8 text-sm"
            data-cursor-text="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
            Explore All on GitHub
            <FontAwesomeIcon icon={faArrowRight} className="w-3.5 h-3.5 ml-1" />
          </a>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Projects;
