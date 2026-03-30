import React, { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Loading from "./components/loading";
import Starfield from "./components/Starfield";
import AboutMe from "./pages/About_me";
import Home from "./pages/Home";
import WhyHireMe from "./pages/WhyHireMe";
import Projects from "./pages/projects";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-background dark:aurora-bg dark:cyber-grid text-foreground">
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <Loading />
        </div>
      ) : (
        <>
          <Starfield />
          <Navbar />
          <main>
            <Home id="mainy" />
            <AboutMe id="aboutMey" />
            <WhyHireMe />
            <Services />
            <Skills id="skills" />
            <Projects id="project" />
            <ContactForm id="contact" />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
