import { motion } from "motion/react";
import { UserCircleIcon, CodeBracketIcon, MusicalNoteIcon, AcademicCapIcon } from "@heroicons/react/24/outline";

function About() {
  const highlights = [
    {
      icon: CodeBracketIcon,
      title: "Fullstack Development",
      description: "Specialized in building web applications with React, Node.js, and Symfony"
    },
    {
      icon: AcademicCapIcon,
      title: "Best Practices",
      description: "Following SOLID principles and modern design patterns for clean, efficient code"
    },
    {
      icon: MusicalNoteIcon,
      title: "Beyond Code",
      description: "Exploring new technologies, vibing with music, and playing instruments"
    }
  ];

  return (
    <section id="about" className="py-16 px-4">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {/* Section Header */}
        <motion.h2
          className="text-3xl font-bold mb-8 text-primary flex items-center gap-3"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <UserCircleIcon className="size-8" />
          About Me
        </motion.h2>

        {/* Main Content Card */}
        <motion.div
          className="border-2 border-border rounded-lg p-8 bg-card shadow-lg font-mono"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-destructive"></div>
              <div className="w-3 h-3 rounded-full bg-primary opacity-50"></div>
              <div className="w-3 h-3 rounded-full bg-primary opacity-30"></div>
            </div>
            <span className="text-muted-foreground text-xs ml-2">about.md — readonly</span>
          </div>

          {/* Introduction */}
          <motion.div
            className="text-foreground space-y-6 text-sm leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>
              <span className="text-muted-foreground">→</span> Hello! I'm{" "}
              <span className="text-primary font-bold">Nofiniaina</span>, a passionate{" "}
              <span className="text-primary font-bold">Fullstack Developer</span> specialized in
              building web applications with{" "}
              <span className="text-primary font-bold">React, Node.js, and Symfony</span>.
            </p>
            
            <p>
              <span className="text-muted-foreground">→</span> I'm also a{" "}
              <span className="text-primary font-bold">Java</span> enthusiast, building simple games 
              using Swing and AWT during my free time.
            </p>
            
            <p>
              <span className="text-muted-foreground">→</span> I love crafting clean and efficient code, 
              following best practices such as{" "}
              <span className="text-primary font-bold">SOLID principles</span> and modern design patterns.
              My goal is to create scalable, maintainable, and user-friendly digital experiences.
            </p>
            
            <p>
              <span className="text-muted-foreground">→</span> When I'm not coding, I enjoy exploring 
              new technologies and continuously improving my skills. Also vibing with music and playing 
              some instruments.
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-6 border-t border-border">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="group p-4 rounded border border-border bg-muted hover:border-primary transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <item.icon className="size-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-foreground font-bold text-xs mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Footer Status */}
          <motion.div
            className="flex items-center gap-2 mt-6 pt-4 border-t border-border text-xs"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="text-primary animate-pulse">●</span>
            <span className="text-muted-foreground">
              Passionate about building • Always learning • Open to collaborate
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;