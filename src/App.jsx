import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
   useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

   useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty(
        "--mouse-x",
        `${e.clientX}px`
      );
      document.documentElement.style.setProperty(
        "--mouse-y",
        `${e.clientY}px`
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
