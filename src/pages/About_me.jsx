import { motion } from "framer-motion";
import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faBullseye, faBolt } from "@fortawesome/free-solid-svg-icons";
import profile from "../assets/images/profile.png";

const highlights = [
  {
    icon: faLightbulb,
    title: 'My Vision',
    description: 'To build robust web applications and database-driven systems that power innovative solutions and drive business growth.',
  },
  {
    icon: faBullseye,
    title: 'My Approach',
    description: 'Combining clean code practices with continuous learning to deliver reliable, scalable, and maintainable solutions.',
  },
  {
    icon: faBolt,
    title: 'My Focus',
    description: 'Expanding knowledge in modern frameworks, REST APIs, and cloud deployment to turn ideas into working solutions.',
  },
];

const expertise = [
  'C#',
  'ASP.NET Core',
  'React',
  'Next.js',
  'SQL Server',
  'REST APIs',
];

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={ref}
      id="aboutMey"
      className="py-20 md:py-32 px-6 md:px-16 bg-gradient-subtle"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Motivated developer passionate about writing clean code and building scalable web applications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side - Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="flex flex-col items-center justify-center">
              {/* Circular Profile Picture */}
              <div className="relative mb-6">
                {/* Glow ring */}
                <div className="absolute -inset-3 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 blur-xl" />
                <div className="relative w-52 h-52 rounded-full overflow-hidden border-4 border-primary/40 shadow-elevated ring-2 ring-primary/20 ring-offset-2 ring-offset-background">
                  <img
                    src={profile}
                    alt="Hammad Alamgir"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-heading font-semibold text-foreground">Hammad Alamgir</h3>
              <p className="text-muted-foreground mt-1">Software Engineer / .NET Developer</p>
            </div>
          </motion.div>

          {/* Content Side - Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed">
                I am a motivated and eager-to-learn .NET Developer with a growing skill set in C#, ASP.NET Core MVC, Entity Framework, and SQL Server. I am passionate about writing clean code, improving problem-solving skills, and turning ideas into working solutions through continuous learning.
              </p>
            </div>

            <div>
              <p className="text-muted-foreground leading-relaxed">
                I focus on expanding my knowledge in building web applications, database-driven systems, and REST APIs, while also utilizing modern JavaScript frameworks like React and Next.js for creating responsive, user-friendly interfaces.
              </p>
            </div>

            {/* Expertise Tags */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                Areas of Expertise
              </h4>
              <div className="flex flex-wrap gap-2">
                {expertise.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    className="px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="p-6 rounded-xl glass hover-lift"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={item.icon} className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-heading font-semibold mb-2 text-foreground">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
