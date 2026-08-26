import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Loading from "./components/loading";
import AnimatedBackground from "./components/AnimatedBackground";
import CustomCursor from "./components/CustomCursor";

// Lazy-load below-fold sections for better LCP / performance
const AboutMe              = lazy(() => import("./pages/About_me"));
const EngineeringPractices = lazy(() => import("./pages/WhyHireMe"));
const Skills               = lazy(() => import("./components/Skills"));
const Projects             = lazy(() => import("./pages/projects"));
const ContactForm          = lazy(() => import("./components/ContactForm"));

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground relative selection:bg-primary selection:text-primary-foreground transition-colors duration-300">
      <CustomCursor />
      <AnimatedBackground />
      <Navbar />

      <main className="relative z-10">
        {/* Hero loads immediately — no lazy needed */}
        <Home />

        <Suspense fallback={<Loading />}>
          <AboutMe />
          <Skills />
          <Projects />
          <EngineeringPractices />
          <ContactForm />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
