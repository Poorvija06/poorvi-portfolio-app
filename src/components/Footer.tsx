import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => (
  <footer className="bg-nav py-8">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-nav-foreground/60 text-sm font-body">
        © 2026 Poorvija Dhanusri. All rights reserved.
      </p>
      <div className="flex gap-5">
        <a href="https://www.linkedin.com/in/poorvija-dhanu-sri-d-b31886297" target="_blank" rel="noreferrer" className="text-nav-foreground/60 hover:text-primary transition-colors">
          <Linkedin size={20} />
        </a>
        <a href="https://github.com/Poorvija06" target="_blank" rel="noreferrer" className="text-nav-foreground/60 hover:text-primary transition-colors">
          <Github size={20} />
        </a>
        <a href="https://wa.me/9360827631" target="_blank" rel="noreferrer" className="text-nav-foreground/60 hover:text-primary transition-colors">
          <Phone size={20} />
        </a>
        <a href="mailto:poorvija@gmail.com" className="text-nav-foreground/60 hover:text-primary transition-colors">
          <Mail size={20} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
