import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Summary from "@/components/Summary";
import EducationAndCertifications from "@/components/EducationAndCertifications";
import Experience from "@/components/Experience";
import Organizations from "@/components/Organizations";
import Additional from "@/components/Additional";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      <main>
        <Hero />
        <Summary />
        <EducationAndCertifications />
        <Experience />
        <Organizations />
        <Additional />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
