import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faDatabase,
  faGears,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    icon: faCode,
    number: "01",
    title: "Web Application Development",
    gradient: "from-violet-500 to-indigo-500",
    description:
      "End-to-end web applications built with ASP.NET Core MVC on the backend and React/Next.js on the frontend. Responsive, accessible, and production-ready.",
    deliverables: [
      "ASP.NET Core MVC / Web API",
      "React & Next.js frontend",
      "Entity Framework integration",
      "Authentication & authorization",
    ],
  },
  {
    icon: faDatabase,
    number: "02",
    title: "Database Design & Optimization",
    gradient: "from-cyan-500 to-teal-500",
    description:
      "Normalized schemas, complex stored procedures, indexing strategies, and query optimization for SQL Server, MySQL, and MongoDB workloads.",
    deliverables: [
      "Schema design & migrations",
      "Stored procedures & views",
      "Performance indexing",
      "Data integrity & constraints",
    ],
  },
  {
    icon: faGears,
    number: "03",
    title: "REST API Development",
    gradient: "from-amber-500 to-orange-500",
    description:
      "Well-documented, versioned, and secure RESTful APIs using ASP.NET Core and Node.js/Express — designed for mobile, SPA, and third-party integrations.",
    deliverables: [
      "ASP.NET Core Web API",
      "Node.js / Express endpoints",
      "JWT authentication",
      "Swagger / API documentation",
    ],
  },
];

const ServiceCard = ({ icon, title, description, deliverables, gradient, number, index, isInView }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ delay: 0.15 + index * 0.12, duration: 0.55 }}
    className="card-premium p-7 flex flex-col gap-5 group relative overflow-hidden"
  >
    {/* Background glow on hover */}
    <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-primary/6 blur-3xl
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    {/* Number + icon */}
    <div className="flex items-center justify-between">
      <div className={`w-13 h-13 w-12 h-12 rounded-xl bg-gradient-to-br ${gradient}
                       flex items-center justify-center shadow-card`}>
        <FontAwesomeIcon icon={icon} className="w-5 h-5 text-white" />
      </div>
      <span className="text-4xl font-bold font-heading text-foreground/6 select-none">
        {number}
      </span>
    </div>

    <div>
      <h3 className="text-xl font-bold text-foreground font-heading mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>

    {/* Deliverables */}
    <ul className="space-y-2 mt-auto">
      {deliverables.map((d) => (
        <li key={d} className="flex items-center gap-2.5 text-sm text-foreground/75">
          <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3 text-primary flex-shrink-0" />
          {d}
        </li>
      ))}
    </ul>
  </motion.div>
);

const Services = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="py-20 md:py-28 px-6 md:px-12 bg-gradient-subtle" ref={ref}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="section-badge">Services</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 font-heading">
            What I <span className="text-gradient">Build</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Production-grade software across the entire stack — from database schema to deployed UI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <ServiceCard
              key={service.title}
              {...service}
              index={idx}
              isInView={inView}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
