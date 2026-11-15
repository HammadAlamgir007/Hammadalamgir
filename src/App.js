import Navbar from "./components/Navbar";
import useReveal from "./hooks/useReveal";
import About from "./sections/About";
import Beyond from "./sections/Beyond";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Fintech from "./sections/Fintech";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

export default function App() {
  useReveal();

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-fg focus:px-5 focus:py-3 focus:text-bg"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Fintech />
        <Experience />
        <Projects />
        <Skills />
        <Beyond />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
