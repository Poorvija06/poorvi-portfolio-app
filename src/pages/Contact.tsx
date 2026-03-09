import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Linkedin, Github, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/poorvija-dhanu-sri-d-b31886297", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/Poorvija06", label: "GitHub" },
  { icon: Phone, href: "https://wa.me/9360827631", label: "WhatsApp" },
  { icon: Mail, href: "mailto:poorvija@gmail.com", label: "Email" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! Your message has been sent. 🎉");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <section className="flex-1 pt-28 pb-20">
        <div className="max-w-xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h1 className="font-display text-4xl font-bold text-foreground mb-2">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-muted-foreground font-body">I'd love to hear from you!</p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="space-y-4"
          >
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="font-body"
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="font-body"
            />
            <Textarea
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              className="font-body"
            />
            <Button variant="hero" size="lg" type="submit" className="w-full">
              <Send size={18} /> Send Message
            </Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center gap-6 mt-10"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                aria-label={s.label}
              >
                <s.icon size={24} />
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
