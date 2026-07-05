import { motion } from "framer-motion";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faFilePdf,
  faVial,
  faFilm,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Card from "../components/Card";

const cards = [
  {
    icon: faFilePdf,
    title: "Fusionner PDF",
    tagline: "Drag-and-drop PDF merging at scale",
    description:
      "A responsive web app that lets users merge PDF files instantly — no uploads to third-party servers, fully client-side processing for privacy.",
    techStack: ["Next.js", "TypeScript", "AWS", "Tailwind CSS"],
    impact: "100% client-side — zero server costs for file processing",
    challenges: [
      "Integrated PDF.js for in-browser merging without server roundtrips",
      "Implemented drag-and-drop reordering for intuitive UX",
      "Deployed on AWS with CDN for sub-second global load times",
    ],
    links: {
      repo: "https://github.com/ihammadalamgir",
      demo: "https://fussioner-pdf.vercel.app/",
    },
    gradient: "from-violet-600 via-indigo-600 to-blue-600",
    live: true,
  },
  {
    icon: faVial,
    title: "Rahila Labs",
    tagline: "Home diagnostic booking platform",
    description:
      "A professional telemedicine-adjacent platform where patients book home lab tests with address confirmation — reducing friction from clinic visits.",
    techStack: ["React", "Next.js", "Tailwind CSS", "Node.js"],
    impact: "Eliminated the need for in-person test registration",
    challenges: [
      "Built a multi-step booking flow with address confirmation and slot selection",
      "Designed mobile-first UI for patients accessing from low-end devices",
      "Integrated notification system for test reminders and result updates",
    ],
    links: {
      repo: "https://github.com/HammadAlamgir007/RahilaLabs.git",
      demo: "https://rahila-labs-web.azurewebsites.net/",
    },
    gradient: "from-cyan-600 via-teal-600 to-emerald-600",
    live: true,
  },
  {
    icon: faFilm,
    title: "Movie Recommendation Engine",
    tagline: "ML-powered collaborative filtering",
    description:
      "A Python-powered recommender system using collaborative filtering — trained on a large movie dataset to surface personalized suggestions via a Flask API.",
    techStack: ["Python", "Flask", "Pandas", "Machine Learning"],
    impact: "85%+ recommendation accuracy on test dataset",
    challenges: [
      "Preprocessed 100K+ rows with Pandas to remove noise and improve model quality",
      "Implemented user-user collaborative filtering from scratch",
      "Built a Flask REST API to serve real-time recommendations",
    ],
    links: {
      repo: "https://github.com/ihammadalamgir",
      demo: null,
    },
    gradient: "from-amber-600 via-orange-600 to-red-600",
    live: false,
  },
];

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 0.5 }}
      viewport={{ margin: "-100px", once: true }}
      className="py-20 md:py-28 px-6 md:px-16 bg-secondary/25"
      id="project"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-badge">Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 font-heading">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real applications built to solve real problems — not just tutorial clones.
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
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4 text-sm">
            More experiments, side projects, and open-source contributions on GitHub.
          </p>
          <motion.a
            href="https://github.com/ihammadalamgir"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl
                       border-2 border-border text-foreground font-semibold text-sm
                       hover:border-primary hover:text-primary hover:bg-primary/5
                       transition-all duration-300"
          >
            <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
            View All on GitHub
            <FontAwesomeIcon icon={faArrowRight} className="w-3.5 h-3.5" />
          </motion.a>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Projects;
