import { ChevronRightIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { motion } from "motion/react";
import { NAME, FIRSTNAME, JOBTITLE } from "../utils/constants/ascii";

function Hero() {
  return(
    <section className="py-12">
      {/* ASCII Art Name */}
      <motion.div 
        className="m-4 flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        <pre className="text-foreground text-center leading-tight">
          {NAME}
        </pre>
        <pre className="text-primary text-center leading-tight mt-2">
          {FIRSTNAME}
        </pre>
      </motion.div>

      {/* Terminal Card */}
      <motion.div 
        className="p-6 border-2 border-border rounded-lg text-sm font-mono bg-card shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {/* Terminal Header */}
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-destructive"></div>
            <div className="w-3 h-3 rounded-full bg-primary opacity-50"></div>
            <div className="w-3 h-3 rounded-full bg-primary opacity-30"></div>
          </div>
          <span className="text-muted-foreground text-xs ml-2">terminal — nofy@intro</span>
        </div>

        {/* Command Prompt */}
        <div className="flex gap-2 mb-4">
          <span className="text-primary font-bold">nofiniaina@nofyrnd</span>
          <span className="text-foreground">:</span>
          <span className="text-primary">~</span>
          <span className="text-foreground">$</span>
          <span className="text-muted-foreground ml-2">nofy view:title</span>
        </div>

        <div className="flex flex-col">
          {/* Main Introduction */}
          <motion.div 
            className="flex gap-2 items-start mb-3 group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <ChevronRightIcon className="size-4 text-primary mt-0.5 shrink-0 group-hover:translate-x-1 transition-transform" /> 
            <span className="text-foreground">
              Hello, I'm a <span className="text-primary font-bold">Fullstack Developer</span>
            </span>
          </motion.div>

          {/* Additional Info */}
          <motion.div 
            className="flex gap-2 items-start mb-3 group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            <SparklesIcon className="size-4 text-primary mt-0.5 shrink-0 group-hover:rotate-12 transition-transform" />
            <span className="text-muted-foreground text-xs">
              Crafting scalable web applications with modern technologies
            </span>
          </motion.div>

          <div className="border-t border-border my-4"></div>

          {/* Job Title ASCII Art */}
          <motion.div 
            className="bg-muted p-4 rounded border-l-4 border-primary"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
          >
            <div className="transform scale-50 origin-top-left">
              <pre className="leading-none text-foreground">
                {JOBTITLE}
              </pre>
            </div>
          </motion.div>

          {/* Status Line */}
          <motion.div 
            className="flex gap-2 text-primary text-xs items-center mt-4 pt-3 border-t border-border"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.4 }}
          >
            <span className="animate-pulse">●</span>
            <span className="text-muted-foreground">Ready to build • Open for opportunities</span>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="flex gap-3 mt-3 text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.4 }}
          >
            <a 
              href="#stack" 
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
            >
              <span>→</span>
              <span>View Stack</span>
            </a>
            <span className="text-muted-foreground">•</span>
            <a 
              href="#projects" 
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
            >
              <span>→</span>
              <span>See Projects</span>
            </a>
            <span className="text-muted-foreground">•</span>
            <a 
              href="#contact" 
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
            >
              <span>→</span>
              <span>Get in Touch</span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;