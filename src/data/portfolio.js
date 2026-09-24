/**
 * Single source of truth for all portfolio content.
 * Every entry below is taken from the CV:
 *   public/files/Hammad-Alamgir.pdf
 * When the CV changes, update this file only.
 */

import photo192 from "../assets/profile-192.webp";
import photo384 from "../assets/profile-384.webp";

export const profile = {
  name: "Hammad Alamgir",
  fullName: "Muhammad Hammad Alamgir",
  initials: "HA",
  role: "Java Backend Developer",
  shortRole: "Java Backend Developer",
  location: "Islamabad, Pakistan",
  email: "hammadalamgir778@gmail.com",
  phone: "+92 318-7646051",
  phoneHref: "tel:+923187646051",
  cv: "/files/Hammad-Alamgir.pdf",
  photo: {
    src: photo192,
    srcSet: `${photo192} 192w, ${photo384} 384w`,
    alt: "Portrait of Hammad Alamgir",
  },
  status: "Currently at Warmbytes — Java backend for the Aik Tijarat financial app",
  headline:
    "Enterprise backend services in Java and Spring Boot — REST APIs, JPA/Hibernate, SQL and secure integrations for financial applications.",
  summary: [
    "I'm a Java Backend Developer experienced in developing and maintaining enterprise applications using Java, Spring Boot, REST APIs, JPA/Hibernate, and SQL.",
    "My work spans financial application development: secure APIs, encryption/decryption, notifications, API Gateway, integrations, debugging, and feature enhancements.",
    "I have a strong understanding of backend architecture, database-driven applications, API development, and software development practices.",
  ],
};

export const socials = [
  { label: "GitHub", href: "https://github.com/ihammadalamgir", handle: "ihammadalamgir", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ihammadalamgir", handle: "in/ihammadalamgir", icon: "linkedin" },
  { label: "Email", href: `mailto:${profile.email}`, handle: profile.email, icon: "mail" },
];

/** Section headings and intros. */
export const sections = {
  about: {
    title: "Backend engineering for an",
    titleAccent: "enterprise financial application.",
  },
  experience: {
    title: "From intern to Java backend developer at Warmbytes.",
    intro: "Three roles across Warmbytes and Lexon IT — building Spring Boot services, REST APIs and database-driven features in production codebases.",
  },
  skills: {
    title: "Java and Spring Boot at the core, with security and data alongside.",
    intro: "Grouped as in my CV: languages, backend, security, databases, architecture, tools and concepts.",
  },
  projects: {
    title: "Financial, healthcare and academic backends.",
    intro: "From a production enterprise financial application to a diagnostics platform and a hands-on Spring Boot system.",
  },
  contact: {
    intro: `Based in ${profile.location}. The fastest way to reach me is email, LinkedIn or GitHub.`,
  },
};

/** Hero cards — facts taken directly from the CV (it lists no metrics). */
export const highlights = [
  { value: "Java", label: "Spring Boot backend services" },
  { value: "REST", label: "APIs, JPA/Hibernate & SQL" },
  { value: "AES · RSA", label: "Encryption, JWT & Spring Security" },
  { value: "3", label: "Databases: MySQL, PostgreSQL, SQL Server" },
];

export const facts = [
  { label: "Role", value: "Java Backend Developer" },
  { label: "Current", value: "Warmbytes" },
  { label: "Focus", value: "Spring Boot · REST APIs" },
  { label: "Domain", value: "Financial applications" },
  { label: "Education", value: "BS IT, Bahria University" },
  { label: "Based in", value: "Islamabad, Pakistan" },
];

export const experience = [
  {
    role: "Java Backend Developer",
    company: "Warmbytes",
    start: "Sep 2026",
    end: "Present",
    tags: ["Java", "Spring Boot", "REST APIs", "JPA/Hibernate", "SQL", "API Gateway", "Postman"],
    points: [
      "Develop and maintain backend services for an enterprise financial application using Java, Spring Boot, REST APIs, JPA/Hibernate, and SQL.",
      "Work across Controllers, Services, Repositories, DTOs, integrations, and security components within a production codebase.",
      "Develop and enhance the Aik Khata module, including REST APIs, business logic, validation, and database operations.",
      "Work on notification workflows, encryption/decryption, API Gateway configuration, integrations, bug fixes, and feature enhancements.",
      "Debug backend and integration issues, test APIs using Postman, and analyze application logs.",
      "Collaborate with developers using Git/GitHub and follow code review and Agile development practices.",
    ],
  },
  {
    role: "Java Backend Developer Intern",
    company: "Warmbytes",
    start: "Jul 2026",
    tags: ["Java", "Spring Boot", "REST APIs", "JPA/Hibernate", "SQL", "Postman"],
    points: [
      "Developed backend features and REST APIs using Java and Spring Boot in a production development environment.",
      "Worked with Controllers, Services, Repositories, DTOs, JPA/Hibernate, and SQL databases.",
      "Learned and applied backend development practices including API design, validation, exception handling, database integration, and debugging.",
      "Tested APIs with Postman and contributed to integrations, bug fixes, and backend improvements using Git/GitHub.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Lexon IT",
    start: "Jun 2026",
    tags: ["Web Applications", "Backend APIs", "Git/GitHub", "Agile"],
    points: [
      "Developed and maintained web application features and database-driven functionality.",
      "Worked with backend APIs, frontend integration, debugging, and application improvements.",
      "Collaborated with developers using Git/GitHub and followed Agile software development practices.",
    ],
  },
];

/**
 * Grouped exactly as the CV's "Technical Skills" section.
 * `size`: "lg" spans two columns from tablet up, "wide" from desktop up.
 * Order is chosen so the bento grid fills evenly.
 */
export const skills = [
  { title: "Backend", size: "lg", items: ["Spring Boot", "REST APIs", "Spring Data JPA", "Hibernate", "JDBC", "Maven"] },
  { title: "Languages", items: ["Java", "Python", "SQL", "JavaScript", "C++"] },
  { title: "Security", items: ["Spring Security", "JWT", "RSA", "AES-GCM", "Encryption/Decryption"] },
  { title: "Databases", items: ["MySQL", "PostgreSQL", "SQL Server"] },
  { title: "Architecture", items: ["Layered Architecture", "MVC", "API Gateway", "Microservices"] },
  { title: "Tools", size: "wide", items: ["Git", "GitHub", "Postman", "IntelliJ IDEA", "VS Code"] },
  { title: "Concepts", items: ["OOP", "DSA", "DBMS", "SOLID", "Agile", "SDLC"] },
];

export const projects = [
  {
    name: "Aik Tijarat",
    subtitle: "Enterprise Financial Application",
    context: "Warmbytes",
    category: "Fintech · Production",
    featured: true,
    description:
      "Enterprise financial application built with Java, Spring Boot, REST APIs and an API Gateway, secured with JWT, RSA and AES. Contributed to backend development across Aik Khata, notifications, API Gateway, encryption/decryption, integrations, bug fixes and feature enhancements.",
    highlights: [
      "Aik Khata module",
      "Notification workflows",
      "API Gateway configuration",
      "Encryption / decryption",
      "Integrations & bug fixes",
      "Feature enhancements",
    ],
    architectureCaption: "Layers worked across",
    architecture: ["Controller", "Service", "Repository", "DTO", "Security"],
    platforms: ["REST APIs", "SQL"],
    tech: ["Java", "Spring Boot", "REST APIs", "API Gateway", "JWT", "RSA", "AES"],
  },
  {
    name: "Rahila Labs",
    subtitle: "Diagnostic Platform",
    category: "Healthcare · Diagnostics",
    description:
      "Built REST APIs for laboratory test booking, appointments, patient records, and multi-role workflows, integrated with SQL Server and React.js.",
    tech: ["Python", "SQL Server", "React.js"],
  },
  {
    name: "University Management System",
    subtitle: "Spring Boot Backend",
    category: "Academic · Backend",
    description:
      "Hands-on Spring Boot backend applying REST APIs, dependency injection, layered architecture, JPA/Hibernate, entity relationships, DTOs, validation, exception handling and authentication, with CRUD and business logic on MySQL.",
    tech: ["Java", "Spring Boot", "REST APIs", "MySQL"],
  },
];

/** The CV has no separate "Key Achievements" section, so the Impact section is hidden. */
export const achievements = [];

export const education = [
  {
    degree: "Bachelor of Science in Information Technology",
    school: "Bahria University, Islamabad",
    location: "Islamabad, Pakistan",
    notes: ["CGPA: 3.1 / 4.0"],
  },
];

export const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
