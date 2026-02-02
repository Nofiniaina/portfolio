import { motion } from "motion/react";
import {
  EnvelopeIcon,
  MapPinIcon,
  CodeBracketIcon,
  HeartIcon
} from "@heroicons/react/24/outline";

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/Nofiniaina", icon: "GH" },
    { name: "Facebook", url: "https://www.facebook.com/sam.rnd.73", icon: "FB" },
    { name: "Portfolio", url: "https://nofiniaina.github.io/portfolio/", icon: "WEB" }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Stack", href: "#stack" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="border-t-2 border-border bg-card mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <CodeBracketIcon className="size-6 text-primary" />
              <span className="font-mono text-lg font-bold text-foreground">
                {"<"}
                <span className="text-primary">Nofiniaina</span>
                {"/>"}
              </span>
            </div>
            <p className="text-sm text-muted-foreground font-mono leading-relaxed">
              Fullstack Developer passionate about building scalable web applications
              and crafting clean code.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono flex items-center gap-2"
                  >
                    <span className="text-primary">→</span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">
              Connect
            </h3>

            <div className="space-y-3 mb-4">
              <div className="flex items-start gap-2 text-sm text-muted-foreground font-mono">
                <MapPinIcon className="size-4 text-primary mt-0.5 shrink-0" />
                <span>Antananarivo, Madagascar</span>
              </div>

              <div className="flex items-start gap-2 text-sm text-muted-foreground font-mono">
                <EnvelopeIcon className="size-4 text-primary mt-0.5 shrink-0" />
                <a
                  href="#contact"
                  className="hover:text-primary transition-colors"
                >
                  Get in touch
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-xs font-mono border border-border bg-muted hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all rounded"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-6"></div>

        {/* Bottom Bar */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-mono"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2">
            <span>© {currentYear} Nofiniaina RANDRIAMBOLA</span>
            <span className="hidden md:block">•</span>
            <span className="hidden md:block">All rights reserved</span>
          </div>

          <div className="flex items-center gap-1">
            <span>Built with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <HeartIcon className="size-3 text-primary fill-primary" />
            </motion.span>
            <span>using React & Tailwind CSS</span>
          </div>
        </motion.div>

        {/* Command Prompt Style */}
        <motion.div
          className="mt-6 pt-4 border-t border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex gap-2 text-xs font-mono">
            <span className="text-primary">nofiniaina@portfolio</span>
            <span className="text-foreground">:</span>
            <span className="text-primary">~</span>
            <span className="text-foreground">$</span>
            <span className="text-muted-foreground ml-2">
              echo "Thanks for visiting! 🚀"
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
