import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Resume = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <Navbar />

    <section className="flex-1 flex items-center justify-center pt-20 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg mx-auto px-6"
      >
        <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6">
          <FileText className="text-primary-foreground" size={36} />
        </div>
        <h1 className="font-display text-4xl font-bold text-foreground mb-4">
          My <span className="text-gradient">Resume</span>
        </h1>
        <p className="text-muted-foreground font-body text-lg mb-8">
          Download my resume to learn more about my experience, education, and skills.
        </p>
        <Button variant="hero" size="lg" asChild>
          <a href="/assets/documents/Poorvi Resume pdf.pdf" target="_blank" rel="noreferrer">
            <Download size={18} /> Download Resume
          </a>
        </Button>
      </motion.div>
    </section>

    <Footer />
  </div>
);

export default Resume;
