import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import Features from "./components/Features";
import Demo from "./components/Demo";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        <Logos />
        <Features />
        <Demo />
        <Projects />
        <Testimonials />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}

export default App;
