/**
 * Single source of truth for all portfolio content.
 * Entries come from the CV (public/files/Hammad-Alamgir.pdf) and, for the
 * Aik Tijarat case study, from the production commit history behind it.
 * When either changes, update this file only.
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
  status: "Currently at Warmbytes — backend for the Aik Tijarat merchant-banking app",
  headline:
    "Production merchant-banking backends in Java 17 and Spring Boot 3 — passkey login, RSA-encrypted credentials, Redis-based session control and payment integrations.",
  summary: [
    "I'm a Java Backend Developer at Warmbytes, where I build and support Aik Tijarat — a production merchant-banking backend serving mobile and portal clients.",
    "It integrates with two core banks, card and payment switches, and national ID verification. My work spans passkey (FIDO2) login, RSA-encrypted credentials, Redis-based session and rate control, the Aik Khata credit-ledger module and NFC Tap to Pay.",
    "Alongside features, I handle production deployments and hotfixes, write migration scripts, and triage live issues from server logs on UAT and production.",
  ],
};

/** `tint` picks the app-icon colour used in the Dock and contact list. */
export const socials = [
  { label: "GitHub", href: "https://github.com/ihammadalamgir", handle: "ihammadalamgir", icon: "github", tint: "graphite" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ihammadalamgir", handle: "in/ihammadalamgir", icon: "linkedin", tint: "linkedin" },
  { label: "Email", href: `mailto:${profile.email}`, handle: profile.email, icon: "mail", tint: "sky" },
];

/** Section headings and intros. */
export const sections = {
  about: {
    title: "Backend engineering for a",
    titleAccent: "production banking app.",
  },
  experience: {
    title: "From intern to Java backend developer at Warmbytes.",
    intro: "Three roles across Warmbytes and Lexon IT — from Spring Boot features and REST APIs to building and supporting a production merchant-banking backend.",
  },
  skills: {
    title: "Java and Spring Boot at the core, with security and data alongside.",
    intro: "From my CV and production work: the stack behind a live merchant-banking backend, plus the tools and fundamentals around it.",
  },
  projects: {
    title: "Financial, healthcare and academic backends.",
    intro: "A production merchant-banking backend in depth, followed by a diagnostics platform and a hands-on Spring Boot system.",
  },
  education: {
    title: "A foundation in Information Technology.",
  },
  contact: {
    intro: `Based in ${profile.location}. The fastest way to reach me is email, LinkedIn or GitHub.`,
  },
};

/** Hero cards — from the CV and the Aik Tijarat commit history. */
export const highlights = [
  { value: "FIDO2", label: "Passkey login with MPIN fallback" },
  { value: "Redis", label: "Sessions, lockouts & duplicate-payment guard" },
  { value: "2", label: "Core banks integrated: iMAL & MicroBank" },
  { value: "~4,700", label: "Lines in the Aik Khata ledger module" },
];

export const facts = [
  { label: "Role", value: "Java Backend Developer" },
  { label: "Current", value: "Warmbytes" },
  { label: "Product", value: "Aik Tijarat · merchant banking" },
  { label: "Stack", value: "Java 17 · Spring Boot 3 · Redis" },
  { label: "Education", value: "BS IT, Bahria University" },
  { label: "Based in", value: "Islamabad, Pakistan" },
];

export const experience = [
  {
    role: "Java Backend Developer",
    company: "Warmbytes",
    start: "Sep 2026",
    end: "Present",
    tags: ["Java 17", "Spring Boot 3", "PostgreSQL", "SQL Server", "Redis", "FIDO2", "REST APIs", "Postman"],
    points: [
      "Build and support the production backend of Aik Tijarat, a merchant-banking app serving mobile and portal clients, on Java 17, Spring Boot 3, PostgreSQL, SQL Server and Redis.",
      "Built passkey (FIDO2 / WebAuthn) login with an MPIN fallback, RSA-OAEP encryption of MPIN and OTP, and fixes for every VAPT finding.",
      "Use Redis for single active sessions, token blacklisting, login lockouts and an atomic duplicate-payment guard.",
      "Developed the Aik Khata credit-ledger module (about 4,700 lines): customers, transactions, payment allocations, QR collection codes and an overdue-account scheduler.",
      "Integrated two core banking systems (iMAL and MicroBank), Euronet IBFT transfers, Raast QR payments and NADRA CNIC verification, and built the onboarding APIs for the NFC Tap to Pay SDK.",
      "Handle production deployments, hotfixes and migration scripts, and triage live issues from server logs on UAT and production.",
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
 * Technical skills from the CV, extended with the stack used on Aik Tijarat.
 * `size: "lg"` spans two columns from tablet up; with the dense grid this
 * order fills every row at two and three columns.
 */
export const skills = [
  { title: "Backend", icon: "server", tint: "blue", size: "lg", items: ["Spring Boot 3", "REST APIs", "Spring Data JPA", "Hibernate", "JDBC", "Maven", "CompletableFuture"] },
  { title: "Languages", icon: "code", tint: "indigo", items: ["Java 17", "Python", "SQL", "JavaScript", "C++"] },
  { title: "Security", icon: "lock", tint: "green", size: "lg", items: ["Spring Security", "JWT", "FIDO2 / WebAuthn", "RSA-OAEP", "AES-GCM", "OAuth 2.0", "mTLS", "JWS (ES256)"] },
  { title: "Data & caching", icon: "database", tint: "orange", items: ["PostgreSQL", "SQL Server", "MySQL", "Redis"] },
  { title: "Payments & integrations", icon: "card", tint: "sky", items: ["IBFT", "Raast QR", "NFC Tap to Pay", "Webhooks", "Firebase push"] },
  { title: "Observability & ops", icon: "pulse", tint: "purple", items: ["MDC request tracing", "Integration logs", "DB migrations", "CI/CD", "Hotfix releases"] },
  { title: "Architecture", icon: "layers", tint: "teal", items: ["Layered Architecture", "MVC", "API Gateway", "Microservices"] },
  { title: "Tools", icon: "terminal", tint: "graphite", size: "lg", items: ["Git", "GitHub", "Postman", "IntelliJ IDEA", "VS Code"] },
  { title: "Concepts", icon: "bulb", tint: "pink", items: ["OOP", "DSA", "DBMS", "SOLID", "Agile", "SDLC"] },
];

export const projects = [
  {
    name: "Aik Tijarat",
    subtitle: "Merchant banking app backend",
    context: "Warmbytes",
    category: "Fintech · Production",
    featured: true,
    description:
      "Built and supported a production merchant-banking backend serving mobile and portal clients. It integrates with two core banks, card and payment switches, and national ID verification. Highlights are passkey (FIDO2) login, RSA-encrypted credentials, Redis-based session and rate control, a credit-ledger module, and NFC Tap to Pay.",
    tech: ["Java 17", "Spring Boot 3", "PostgreSQL", "SQL Server", "Redis"],
    /** Engineering notes from the commit history, one sidebar topic each. */
    details: [
      {
        id: "security",
        label: "Security",
        title: "Security and authentication",
        icon: "lock",
        tint: "green",
        items: [
          {
            title: "FIDO2 / WebAuthn passkeys",
            text: "Passkey registration and login built on Yubico java-webauthn-server. Challenges expire after a set time, and login falls back to MPIN if the passkey fails.",
          },
          {
            title: "RSA encryption",
            text: "The app encrypts the MPIN and OTP with RSA-OAEP (SHA-256) before sending them; the server decrypts and then hashes them. A PKCS#1 variant serves the merchant-service integration, and I handled key rotation on production.",
          },
          {
            title: "Security test (VAPT) fixes",
            text: "Closed every reported finding: a hardened JWT filter, the token blacklist, input validation, and masking of card numbers, mobile numbers and IBANs in logs.",
          },
          {
            title: "Partner API security",
            text: "An API-key filter and credential check for partner endpoints, kept separate from the JWT flow.",
          },
          {
            title: "Device control",
            text: "A limit of two devices per user, plus a lockout for device-registration attempts.",
          },
          { title: "Code obfuscation", text: "Obfuscation of the production build." },
        ],
      },
      {
        id: "redis",
        label: "Redis",
        title: "Redis usage",
        icon: "bolt",
        tint: "red",
        items: [
          { title: "Single active session", text: "One valid token per user." },
          { title: "Token blacklist", text: "Tokens are rejected on logout, and every token is invalidated after a PIN change." },
          { title: "Login lockout", text: "Failed-attempt counters with a lockout that expires after a set time." },
          { title: "Onboarding session store", text: "Sessions for new-customer onboarding, indexed by mobile number." },
          { title: "Duplicate-transaction guard", text: "An atomic SETNX check with a time window, so double payments are blocked." },
          { title: "Token and data caching", text: "OAuth tokens for partner APIs, recents and favourites, and banners." },
        ],
      },
      {
        id: "aik-khata",
        label: "Aik Khata",
        title: "Aik Khata module",
        meta: "About 4,700 lines",
        icon: "book",
        tint: "orange",
        items: [
          { title: "Digital credit ledger", text: "Merchants track customers, transactions, line items and payment allocations." },
          { title: "QR collection", text: "QR collection codes with expiry, plus credit limits and status rules." },
          { title: "Scheduling and reporting", text: "A scheduler for overdue accounts, separate reporting APIs, and database indexes for search." },
        ],
      },
      {
        id: "payments",
        label: "Payments",
        title: "Payments and integrations",
        icon: "card",
        tint: "blue",
        items: [
          { title: "Request to Pay", text: "Aliases, pay now or later, and invoice numbers." },
          {
            title: "QR and Raast payments",
            text: "QR inquiry, payment and intimation (payment notification), Raast QR payment, and bulk QR generation.",
          },
          { title: "Transfers", text: "Interbank transfers (IBFT) through Euronet, plus wallet-to-core and wallet-to-wallet transfers." },
          { title: "Debit card lifecycle", text: "Issuance, activation, PIN set and change, block and unblock, and limits." },
          { title: "Bills and top-ups", text: "Mobile top-ups and bundles, bill payments, donations, and fee payments." },
          { title: "Identity and language", text: "NADRA CNIC verification, and Urdu transliteration (AKSA v2)." },
          { title: "Account certificates", text: "Withholding tax, account maintenance, and statements." },
        ],
      },
      {
        id: "tap-to-pay",
        label: "Tap to Pay",
        title: "NFC Tap to Pay",
        icon: "contactless",
        tint: "sky",
        items: [
          { title: "SDK onboarding APIs", text: "Onboarding APIs for the NFC Tap to Pay SDK." },
          {
            title: "Signed, mutually authenticated calls",
            text: "mTLS, OAuth client credentials, detached JWS signatures (ES256), and webhook signature verification.",
          },
        ],
      },
      {
        id: "onboarding",
        label: "Onboarding",
        title: "Onboarding and accounts",
        icon: "person",
        tint: "teal",
        items: [
          {
            title: "Two core banking systems",
            text: "Onboarding for new and existing customers across iMAL and MicroBank.",
          },
          { title: "Merchant upgrade", text: "Document upload, with approval in the admin portal." },
          { title: "CNIC expiry", text: "Expiry checks, reminders and the update flow." },
          { title: "Account lifecycle", text: "Account-closure handling and an account-status API." },
        ],
      },
      {
        id: "notifications",
        label: "Notifications",
        title: "Notifications",
        icon: "bell",
        tint: "pink",
        items: [
          { title: "Firebase push notifications" },
          { title: "Transaction alerts" },
          { title: "Asynchronous SMS OTP" },
        ],
      },
      {
        id: "performance",
        label: "Performance",
        title: "Performance",
        icon: "gauge",
        tint: "purple",
        items: [
          { title: "Query fixes", text: "Fixed N+1 queries, and added gzip responses." },
          { title: "Parallel dashboard", text: "The dashboard loads its data in parallel using CompletableFuture." },
          { title: "Views and indexes", text: "Replaced complex portal queries with optimized database views and indexes." },
          { title: "Async recents", text: "Moved recents saving to run asynchronously." },
        ],
      },
      {
        id: "production",
        label: "Production",
        title: "Production support and DevOps",
        icon: "server",
        tint: "graphite",
        items: [
          { title: "Releases", text: "Production deployments and hotfix releases." },
          { title: "Migrations", text: "Hand-written migration scripts for UAT, pre-production and production." },
          { title: "Configuration", text: "Moved configuration out to environment variables." },
          { title: "Live issues", text: "Triaged and fixed live issues from server logs on UAT and production." },
          { title: "Mock modes", text: "Built mock modes so QA could test without partner systems." },
          { title: "CI/CD", text: "Tested the CI/CD pipeline." },
        ],
      },
      {
        id: "observability",
        label: "Observability",
        title: "Observability",
        icon: "pulse",
        tint: "indigo",
        items: [
          { title: "Request IDs", text: "A request ID on every log line (MDC)." },
          { title: "Integration log", text: "An integration log table for all external calls." },
          { title: "Logging config", text: "Per-environment logging config, and request/response logging." },
        ],
      },
    ],
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
