import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

const projects = [
  {
    title: "Creative Canva Design",
    description: "Branding design created using Canva.",
    image: project1,
    link: "https://www.canva.com/design/DAGsxcj1g-w/JBhakhJHzqB_7D8ML_S72Q/view",
  },
  {
    title: "Heaven Bite Branding",
    description: "A playful food brand design.",
    image: project2,
    link: "https://www.canva.com/design/DAGs3NffCuw/imHsLForx5YYczM19gH5TQ/view",
  },
  {
    title: "Babies Shop",
    description: "Modern e-commerce design for baby products.",
    image: project3,
    link: "https://www.canva.com/design/DAGtHmhIasE/7zb0mdMEKbkiIAC_piLtJg/view",
  },
];

const Projects = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-4xl font-bold text-foreground text-center mb-12"
        >
          My Creative <span className="text-gradient">Projects</span>
        </motion.h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-card-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm mb-4">
                  {project.description}
                </p>
                <Button variant="hero" size="sm" asChild>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <ExternalLink size={14} /> View Project
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Projects;
