import { motion } from "framer-motion";
import React from "react";
import { faFilePdf, faVial, faFilm } from "@fortawesome/free-solid-svg-icons";
import Card from "../components/Card";

const Projects = () => {
  const cards = [
    {
      icon: faFilePdf,
      title: "Fusionner PDF",
      description:
        "A responsive web application that allows users to merge PDF files using an intuitive drag-and-drop interface.",
      techStack: ["Next.js", "TypeScript", "AWS", "Tailwind CSS"],
      challenges: [
        "Integrated client-side file processing for seamless PDF merging.",
        "Styled with Tailwind CSS for a modern, responsive user interface.",
        "Deployed the application on AWS for reliable hosting and performance.",
      ],
      links: {
        repo: "https://github.com/ihammadalamgir",
        demo: "https://fussioner-pdf.vercel.app/",
      },
    },
    {
      icon: faVial,
      title: "Rahila Labs",
      description:
        "A professional home diagnostic testing platform that allows patients to book lab tests from the comfort of their home.",
      techStack: ["React", "Next.js", "Tailwind CSS", "Node.js"],
      challenges: [
        "Built a seamless test booking and address confirmation flow.",
        "Designed a clean and responsive user interface for patients.",
        "Ensured mobile-friendly access for convenient test scheduling.",
      ],
      links: {
        repo: "https://github.com/HammadAlamgir007/RahilaLabs.git",
        demo: "https://rahila-labs.vercel.app/",
      },
    },
    {
      icon: faFilm,
      title: "Movie Recommendation System",
      description:
        "A movie recommender system built using collaborative filtering techniques with Python and Flask.",
      techStack: ["Python", "Flask", "Pandas", "Machine Learning"],
      challenges: [
        "Cleaned and processed large datasets using Pandas for analysis.",
        "Implemented collaborative filtering for accurate recommendations.",
        "Deployed a simple web interface using the Flask framework.",
      ],
      links: {
        repo: "https://github.com/ihammadalamgir",
        demo: null,
      },
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      viewport={{ margin: "-100px", once: true }}
      className="py-20 px-6 md:px-16 bg-secondary/30"
      id="project"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 font-heading">
          Featured Projects
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A collection of applications built with modern tech stacks, focusing on clean code and practical solutions.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {cards.map((card, index) => (
            <Card
              key={index}
              {...card}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
