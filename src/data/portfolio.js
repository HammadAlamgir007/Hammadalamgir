/**
 * Single source of truth for all portfolio content.
 * Entries come from the CV (public/files/Hammad-Alamgir.pdf) and, for the
 * Aik Tijarat case study, from the production commit history behind it.
 * When either changes, update this file only.
 */

import aikHome from "../assets/aik-tijarat/home.webp";
import aikIcon from "../assets/aik-tijarat/icon.webp";
import aikPayBills from "../assets/aik-tijarat/pay-bills.webp";
import aikQr from "../assets/aik-tijarat/qr.webp";
import aikSendMoney from "../assets/aik-tijarat/send-money.webp";
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
    src: photo384,
    srcSet: `${photo192} 192w, ${photo384} 384w`,
    alt: "Portrait of Hammad Alamgir",
  },
  specialty: "Fintech & Payments",
  headline: "I build secure, reliable backends for banking and payments — currently at Warmbytes.",
  /** About — the professional story, first paragraph is the lead. */
  story: [
    "I'm a Bahria University IT graduate who moved into backend development through two internships — first as a software developer at Lexon IT, then as a Java backend intern at Warmbytes — and now work there as a Java Backend Developer.",
    "Today I build and support Aik Tijarat, a production merchant-banking backend serving mobile and portal clients. It connects to two core banks, card and payment switches and national ID verification, so most of my work sits where security and reliability matter: passkey (FIDO2) login, RSA-encrypted credentials, Redis-based session control, the Aik Khata credit ledger and NFC Tap to Pay.",
    "Alongside features, I handle production deployments and hotfixes, write migration scripts and triage live issues from server logs on UAT and production.",
  ],
  belief:
    "Good software is not just about writing code. It's about understanding problems, building thoughtful solutions, and creating experiences people can rely on.",
};

export const hero = {
  title: "Building reliable systems.",
  titleAccent: "Solving real problems.",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/HammadAlamgir007", handle: "HammadAlamgir007", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ihammadalamgir", handle: "in/ihammadalamgir", icon: "linkedin" },
  { label: "Email", href: `mailto:${profile.email}`, handle: profile.email, icon: "mail" },
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
  projects: {
    title: "Financial, healthcare and academic backends.",
    intro: "A live merchant-banking app in depth — the screens, the problem, my part, the decisions and the result — followed by a diagnostics platform and a hands-on Spring Boot system.",
  },
  skills: {
    title: "Technologies I work with.",
    intro: "Java and Spring Boot at the core, with security, data and integrations around them — the stack behind a live merchant-banking backend.",
  },
  contact: {
    title: "Let's build something",
    titleAccent: "meaningful.",
    intro: "Have an opportunity, an interesting project, or simply want to connect? I'd love to hear from you.",
  },
};

/** Proof strip in the Fintech section — from the CV and the Aik Tijarat commit history. `tone` colours the number. */
export const highlights = [
  { value: "Live", label: "Banking app on Google Play", tone: "green" },
  { value: "2", label: "Core banks connected", tone: "blue" },
  { value: "Passkeys", label: "Modern, secure login", tone: "orange" },
  { value: "QR & NFC", label: "Payments, transfers & Tap to Pay", tone: "amber" },
];

/**
 * Fintech & payments specialisation — every line is drawn from the CV and the
 * Aik Tijarat notes below. `tone` picks the mini colour of each icon.
 */
export const fintech = {
  title: "Specialised in",
  titleAccent: "banking and payment systems.",
  intro:
    "Most of my work sits inside a production merchant-banking backend — where money moves, identities are verified and every request has to be secure and traceable.",
  flowTitle: "How a payment works",
  flowNote: "Simplified",
  flow: [
    { title: "Encrypted PIN", text: "The app encrypts the PIN (RSA) before it leaves the phone.", icon: "lock", tone: "blue" },
    { title: "Login check", text: "One valid session per user; old or logged-out tokens are rejected.", icon: "person", tone: "orange" },
    { title: "No double payments", text: "A Redis lock stops the same payment from going through twice.", icon: "bolt", tone: "amber" },
    { title: "Money sent", text: "By interbank transfer (IBFT), Raast QR or wallet transfer.", icon: "card", tone: "green" },
    { title: "Bank systems", text: "Connected to two core banking systems: iMAL and MicroBank.", icon: "server", tone: "blue" },
    { title: "Alerts & logs", text: "The customer gets an alert, and every external call is logged with a request ID.", icon: "bell", tone: "red" },
  ],
  areas: [
    {
      title: "Payments & transfers",
      icon: "card",
      tone: "green",
      text: "Request to Pay, interbank transfers (IBFT) through Euronet, Raast QR payments, wallet-to-core and wallet-to-wallet transfers, bills, top-ups and fee payments.",
      tags: ["IBFT", "Raast QR", "Request to Pay", "Wallet transfers"],
    },
    {
      title: "Banking security",
      icon: "lock",
      tone: "blue",
      text: "Passkey (FIDO2) login with an MPIN fallback, RSA-OAEP encrypted MPIN and OTP, a two-device limit and every VAPT finding closed.",
      tags: ["FIDO2", "RSA-OAEP", "JWT", "VAPT"],
    },
    {
      title: "Bank connections",
      icon: "server",
      tone: "orange",
      text: "Onboarding for new and existing customers across iMAL and MicroBank, merchant upgrades with portal approval, and account-lifecycle APIs.",
      tags: ["iMAL", "MicroBank", "Onboarding"],
    },
    {
      title: "Cards & Tap to Pay",
      icon: "contactless",
      tone: "amber",
      text: "The debit card lifecycle — issuance, activation, PIN, block and limits — and onboarding APIs for the NFC Tap to Pay SDK over mTLS with signed requests.",
      tags: ["Debit cards", "NFC", "mTLS", "JWS"],
    },
    {
      title: "Digital credit book",
      icon: "book",
      tone: "red",
      text: "Aik Khata: customers, transactions, payment allocations, QR collection codes with expiry, credit limits and an overdue-account scheduler.",
      tags: ["Aik Khata", "QR collection", "Scheduler"],
    },
    {
      title: "ID checks & data safety",
      icon: "person",
      tone: "blue",
      text: "NADRA CNIC verification, CNIC-expiry checks and reminders, masking of card numbers, mobile numbers and IBANs in logs, and account certificates.",
      tags: ["NADRA CNIC", "Log masking", "Certificates"],
    },
  ],
};

export const facts = [
  { label: "Role", value: "Java Backend Developer" },
  { label: "Focus", value: "Fintech · payments · banking" },
  { label: "Current", value: "Warmbytes" },
  { label: "Product", value: "Aik Tijarat · merchant banking" },
  { label: "Stack", value: "Java 17 · Spring Boot 3 · Redis" },
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

/** The technologies shown first, as one prominent row. */
export const coreStack = [
  "Java 17",
  "Spring Boot 3",
  "PostgreSQL",
  "SQL Server",
  "Redis",
  "Spring Data JPA",
  "REST APIs",
  "JWT",
  "Git",
  "Maven",
];

/** Technical skills from the CV, extended with the stack used on Aik Tijarat. */
export const skills = [
  { title: "Backend", icon: "server", items: ["Spring Boot 3", "REST APIs", "Spring Data JPA", "Hibernate", "JDBC", "Maven", "CompletableFuture"] },
  { title: "Security", icon: "lock", items: ["Spring Security", "JWT", "FIDO2 / WebAuthn", "RSA-OAEP", "AES-GCM", "OAuth 2.0", "mTLS", "JWS (ES256)"] },
  { title: "Languages", icon: "code", items: ["Java 17", "Python", "SQL", "JavaScript", "C++"] },
  { title: "Data & caching", icon: "database", items: ["PostgreSQL", "SQL Server", "MySQL", "Redis"] },
  {
    title: "Fintech & payments",
    icon: "card",
    items: ["Core banking (iMAL, MicroBank)", "IBFT", "Raast QR", "Request to Pay", "NFC Tap to Pay", "Debit card lifecycle", "NADRA CNIC verification", "Webhooks", "Firebase push"],
  },
  { title: "Observability & ops", icon: "pulse", items: ["MDC request tracing", "Integration logs", "DB migrations", "CI/CD", "Hotfix releases"] },
  { title: "Architecture", icon: "layers", items: ["Layered Architecture", "MVC", "API Gateway", "Microservices"] },
  { title: "Tools", icon: "terminal", items: ["Git", "GitHub", "Postman", "IntelliJ IDEA", "VS Code"] },
  { title: "Concepts", icon: "bulb", items: ["OOP", "DSA", "DBMS", "SOLID", "Agile", "SDLC"] },
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
    /** The live app. Screens are from its public Google Play listing. */
    app: {
      name: "aik Tijarat",
      tagline: "Sharia-compliant QR payments, money transfers and bill payments for businesses.",
      store: "Google Play",
      url: "https://play.google.com/store/apps/details?id=com.warmbytes.bipl.aik.kuikpay",
      icon: aikIcon,
      screens: [
        { src: aikHome, width: 480, height: 1041, caption: "Home", alt: "aik Tijarat home screen with balance, quick actions and recent transactions" },
        { src: aikQr, width: 480, height: 1061, caption: "QR payments", alt: "aik Tijarat Generate QR screen showing a merchant's Raast QR code" },
        { src: aikSendMoney, width: 480, height: 1061, caption: "Send money", alt: "aik Tijarat Send Money screen with aik, bank and Raast transfer options" },
        { src: aikPayBills, width: 480, height: 1061, caption: "Pay bills", alt: "aik Tijarat Pay Bills screen with gas, electricity, water and other billers" },
      ],
    },
    /** Case-study summary, written only from the facts in `details` below. */
    caseStudy: {
      problem:
        "Aik Tijarat's backend serves mobile and portal clients and has to work with two core banking systems, card and payment switches and national ID verification — while staying secure enough to pass a VAPT security test.",
      contribution: [
        "Passkey (FIDO2) login with an MPIN fallback",
        "RSA-OAEP encryption of MPIN and OTP",
        "Redis session, lockout and duplicate-payment controls",
        "The Aik Khata credit-ledger module (~4,700 lines)",
        "Onboarding APIs for the NFC Tap to Pay SDK",
        "Production deployments, hotfixes and migrations",
      ],
      decisions: [
        {
          title: "Redis for security state",
          text: "Single active sessions, token blacklisting and login lockouts live in Redis with expiry, so stale state clears itself.",
        },
        {
          title: "Atomic duplicate-payment guard",
          text: "A SETNX check with a time window blocks double payments.",
        },
        {
          title: "Parallel dashboard loading",
          text: "CompletableFuture loads dashboard data in parallel instead of one call after another.",
        },
        {
          title: "Traceable by default",
          text: "An MDC request ID on every log line and an integration log table for all external calls.",
        },
      ],
      outcome:
        "Running in production for mobile and portal clients, with every reported VAPT finding closed and live issues triaged from UAT and production logs.",
    },
    /** Engineering notes from the commit history, one topic each. */
    details: [
      {
        id: "security",
        label: "Security",
        title: "Security and authentication",
        icon: "lock",
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
    degree: "BS Information Technology",
    school: "Bahria University, Islamabad",
    location: "Islamabad, Pakistan",
    notes: ["CGPA 3.1 / 4.0"],
  },
];

/** "Beyond the code" — the human side. */
export const beyond = {
  title: "Beyond the code.",
  intro:
    "I like understanding how technology works behind the scenes, and I keep challenging myself to get a little better at what I do.",
  // TODO(human): add 2–4 of your real interests as { title, text, icon }.
  // icon: one of "compass", "book", "bulb", "code", "globe", "heart", "terminal", "person".
  // While this list is empty, the section shows the doodle illustration instead of cards.
  interests: [],
};

export const navItems = [
  { id: "about", label: "About" },
  { id: "fintech", label: "Fintech" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
