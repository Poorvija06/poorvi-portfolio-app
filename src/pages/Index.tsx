import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/profile-hero.png";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const useTypewriter = (text: string, speed = 80) => {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    setDisplayed("");
    setDone(false);
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return { displayed, done };
};

const Index = () => {
  const { displayed, done } = useTypewriter("Front-End Developer", 90);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="min-h-screen flex items-center pt-20">
        <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-muted-foreground font-body text-lg mb-2">Hi, I'm</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground leading-tight mb-2">
              Poorvija Dhanusri
            </h1>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-gradient mb-6">
              {displayed}
              <span className={`inline-block w-0.5 h-8 bg-primary ml-1 align-middle ${done ? "animate-cursor-blink" : ""}`} />
            </h2>
            <p className="text-muted-foreground font-body text-lg mb-8 max-w-lg">
              Crafting modern, playful interfaces with a passion for creative branding and delightful user experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/projects">
                  <Briefcase size={18} /> View My Work
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/resume">
                  <Download size={18} /> Resume
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full gradient-primary opacity-20 absolute -inset-4 blur-3xl" />
              <img
                src={profileImg}
                alt="Poorvija Dhanusri"
                className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover relative z-10 border-4 border-primary/20"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
