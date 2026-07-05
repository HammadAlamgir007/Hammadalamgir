import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Loading from "./components/loading";

// Lazy-load below-fold sections for better LCP / performance
const AboutMe      = lazy(() => import("./pages/About_me"));
const WhyHireMe    = lazy(() => import("./pages/WhyHireMe"));
const Services     = lazy(() => import("./components/Services"));
const Skills       = lazy(() => import("./components/Skills"));
const Projects     = lazy(() => import("./pages/projects"));
const ContactForm  = lazy(() => import("./components/ContactForm"));

function App() {
  return (
    <div className="min-h-screen bg-background dark:aurora-bg dark:cyber-grid text-foreground">

      <Navbar />

      <main>
        {/* Hero loads immediately — no lazy needed */}
        <Home />

        <Suspense fallback={<Loading />}>
          <AboutMe />
          <WhyHireMe />
          <Services />
          <Skills />
          <Projects />
          <ContactForm />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
