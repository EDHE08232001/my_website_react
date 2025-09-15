import React from 'react';
import Navbar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const App: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 text-gray-800 font-sans">
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </div>
)

export default App
