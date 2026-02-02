import { ChevronRightIcon, CommandLineIcon } from "@heroicons/react/24/outline";
import { useState, type KeyboardEvent, type ChangeEvent } from "react";
import { motion } from "motion/react";

interface TechStack {
  name: string;
  skills: string[];
}

interface CommandOutput {
  command: string;
  response: string;
}

const techStacks: TechStack[] = [
  {
    name: 'Languages',
    skills: ['PHP', 'JavaScript', 'TypeScript', 'Java', 'SQL'],
  },
  {
    name: 'Backend Frameworks',
    skills: ['Laravel', 'Symfony', 'Express', 'Node.js'],
  },
  {
    name: 'Frontend Frameworks',
    skills: ['React', 'Angular', 'Tailwind CSS'],
  },
  {
    name: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    name: 'Desktop Development',
    skills: ['Java Swing'],
  },
  {
    name: 'DevOps & Tools',
    skills: ['Docker', 'Git', 'GitHub', 'Linux', 'Nginx'],
  },
  {
    name: 'Architecture & Practices',
    skills: ['REST APIs', 'MVC', 'Microservices', 'Agile'],
  },
];

function Stack() {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<CommandOutput[]>([]);

  const handleCommand = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim()) {
      const command = input.trim().toLowerCase();
      let response = '';

      switch (command) {
        case 'help':
          response = 'Available commands: help, clear, skills, about, contact';
          break;
        case 'clear':
          setOutput([]);
          setInput('');
          return;
        case 'skills':
          response = techStacks.map(tech => `${tech.name}: ${tech.skills.join(', ')}`).join('\n');
          break;
        case 'about':
          response = "I'm a Fullstack Developer passionate about building web applications.";
          break;
        case 'contact':
          response = 'Feel free to reach out via my portfolio contact form!';
          break;
        default:
          response = `Command not found: ${command}. Type 'help' for available commands.`;
      }

      setOutput([...output, { command: input, response }]);
      setInput('');
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <section id="stack" className="py-16 px-4">
      <motion.h1 
        className="text-3xl font-bold mb-8 text-primary flex items-center gap-3"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <CommandLineIcon className="size-8" />
        Tools & Stack
      </motion.h1>
      
      <motion.div 
        className="p-6 border-2 border-border rounded-lg text-sm font-mono bg-card shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {/* Terminal Header */}
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-destructive"></div>
            <div className="w-3 h-3 rounded-full bg-primary opacity-50"></div>
            <div className="w-3 h-3 rounded-full bg-primary opacity-30"></div>
          </div>
          <span className="text-muted-foreground text-xs ml-2">terminal — nofy@stack</span>
        </div>

        {/* Command Prompt */}
        <div className="flex gap-2 mb-4">
          <span className="text-primary font-bold">nofiniaina@nofyrnd</span>
          <span className="text-foreground">:</span>
          <span className="text-primary">~</span>
          <span className="text-foreground">$</span>
          <span className="text-muted-foreground ml-2">nofy view:stack</span>
        </div>

        <div className="flex flex-col">
          <div className="flex gap-2 items-start mb-3">
            <ChevronRightIcon className="size-4 text-primary mt-0.5 shrink-0" /> 
            <span className="text-foreground">Displaying technical stack for <span className="text-primary font-semibold">Fullstack Developer</span></span>
          </div>
          <div className="border-t border-border my-4"></div>
          
          {/* 2-Column Grid with improved spacing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {techStacks.map((tech, index) => (
              <motion.div 
                key={index} 
                className="group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <div className="flex gap-2 mb-2">
                  <span className="text-primary group-hover:scale-110 transition-transform">▸</span>
                  <span className="text-foreground font-bold tracking-wide">{tech.name}</span>
                </div>
                <div className="ml-5 space-y-1.5">
                  {tech.skills.map((skill, idx) => (
                    <div key={idx} className="flex gap-2 items-center group/skill hover:translate-x-1 transition-transform">
                      <span className="text-muted-foreground text-xs">•</span>
                      <span className="text-foreground group-hover/skill:text-primary transition-colors">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="border-t border-border my-4"></div>
          <div className="flex gap-2 text-primary text-xs items-center">
            <span className="animate-pulse">●</span>
            <span className="text-muted-foreground">Stack loaded • {techStacks.reduce((acc, tech) => acc + tech.skills.length, 0)} skills available</span>
          </div>

          {/* Command Output */}
          {output.length > 0 && (
            <div className="mt-4 border-t border-border pt-4 max-h-60 overflow-y-auto">
              {output.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  className="mb-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex gap-2">
                    <span className="text-primary font-bold">nofiniaina@nofyrnd</span>
                    <span className="text-foreground">:</span>
                    <span className="text-primary">~</span>
                    <span className="text-foreground">$</span>
                    <span className="text-muted-foreground ml-2">{item.command}</span>
                  </div>
                  <div className="text-foreground mt-1 ml-6 whitespace-pre-line text-xs leading-relaxed bg-muted p-2 rounded border-l-2 border-primary">
                    {item.response}
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Interactive Terminal Input */}
          <div className="flex gap-2 mt-4 items-center pt-3 border-t border-border">
            <span className="text-primary font-bold">nofiniaina@nofyrnd</span>
            <span className="text-foreground">:</span>
            <span className="text-primary">~</span>
            <span className="text-foreground">$</span>
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleCommand}
              className="ml-2 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground flex-1 font-mono focus:text-primary transition-colors"
              placeholder="Type 'help' for commands..."
              autoFocus
            />
            <span className="animate-pulse text-primary">▋</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Stack;