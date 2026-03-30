import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCode,
    faDatabase,
    faGears,
} from "@fortawesome/free-solid-svg-icons";

const ServiceCard = ({ icon, title, description }) => {
    return (
        <motion.div
            whileHover={{ y: -5, borderColor: "hsl(var(--primary))" }}
            className="h-full bg-card backdrop-blur-sm border border-border p-8 rounded-2xl flex flex-col gap-4 hover:shadow-glow transition-all duration-300"
        >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-2xl mb-2">
                <FontAwesomeIcon icon={icon} />
            </div>
            <h3 className="text-xl font-bold text-foreground font-heading">{title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm flex-grow">{description}</p>
        </motion.div>
    );
};

const Services = () => {
    const services = [
        {
            icon: faCode,
            title: "Web Application Development",
            description:
                "Building responsive interfaces and robust backend logic using ASP.NET Core, React, Next.js, and modern JavaScript frameworks.",
        },
        {
            icon: faDatabase,
            title: "Database Design & Optimization",
            description:
                "Creating normalized schemas with SQL Server, MySQL, and MongoDB. Writing optimized queries, stored procedures, and complex indexing for performance.",
        },
        {
            icon: faGears,
            title: "REST API Development",
            description:
                "Designing and integrating RESTful APIs for software solutions using Node.js, Express.js, and ASP.NET Core for scalable, secure communication.",
        },
    ];

    return (
        <section id="services" className="py-20 px-6 md:px-12 bg-secondary/30">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 font-heading">
                        What I Do
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Leveraging modern technologies to build scalable web applications, optimized databases, and reliable APIs.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="h-full"
                        >
                            <ServiceCard {...service} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
