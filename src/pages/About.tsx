import { motion } from "framer-motion";
import profileImg from "@/assets/profile-hero.png";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const skills = ["HTML", "CSS", "JavaScript", "Python", "Canva"];

const About = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src={profileImg}
            alt="Poorvija"
            className="w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover shadow-xl border-2 border-primary/10"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">
            About <span className="text-gradient">Me</span>
          </h1>
          <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">
            I'm Poorvija, a front-end developer with a flair for modern UI/UX, playful animations, and creative branding.
            I love turning ideas into beautiful digital experiences that leave a lasting impression.
          </p>

          <h3 className="font-display text-xl font-semibold text-foreground mb-4">Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="bg-skill text-skill-foreground px-5 py-2.5 rounded-full font-display text-sm font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default About;
