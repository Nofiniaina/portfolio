import { 
  ChevronRightIcon, 
  CommandLineIcon, 
  SparklesIcon,
  CodeBracketIcon,
  CogIcon,
  PaintBrushIcon,
  CircleStackIcon,
  ComputerDesktopIcon,
  WrenchScrewdriverIcon,
  CubeIcon
} from "@heroicons/react/24/outline";
import { useState, useRef, useEffect, type KeyboardEvent, type ChangeEvent } from "react";
import { motion, AnimatePresence } from "motion/react";

interface TechStack {
  name: string;
  skills: string[];
  icon: typeof CodeBracketIcon;
}

interface CommandOutput {
  command: string;
  response: string;
  timestamp: string;
}

const techStacks: TechStack[] = [
  {
    name: 'Languages',
    skills: ['PHP', 'JavaScript', 'TypeScript', 'Java', 'SQL'],
    icon: CodeBracketIcon
  },
  {
    name: 'Backend Frameworks',
    skills: ['Laravel', 'Symfony', 'Express', 'Node.js'],
    icon: CogIcon
  },
  {
    name: 'Frontend Frameworks',
    skills: ['React', 'Angular', 'Tailwind CSS'],
    icon: PaintBrushIcon
  },
  {
    name: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
    icon: CircleStackIcon
  },
  {
    name: 'Desktop Development',
    skills: ['Java Swing'],
    icon: ComputerDesktopIcon
  },
  {
    name: 'DevOps & Tools',
    skills: ['Docker', 'Git', 'GitHub', 'Linux', 'Nginx'],
    icon: WrenchScrewdriverIcon
  },
  {
    name: 'Architecture & Practices',
    skills: ['REST APIs', 'MVC', 'Microservices', 'Agile'],
    icon: CubeIcon
  },
];

function Stack() {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<CommandOutput[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString('en-US', { 
      hour12: false, 
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const handleCommand = (e: KeyboardEvent<HTMLInputElement>) => {
    // Handle arrow keys for command history
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
      return;
    }
    
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
      return;
    }

    if (e.key === 'Enter' && input.trim()) {
      const command = input.trim().toLowerCase();
      let response = '';

      // Add to command history
      setCommandHistory([...commandHistory, input]);
      setHistoryIndex(-1);
      setIsTyping(true);

      setTimeout(() => {
        switch (command) {
          case 'help':
            response = `Available commands:
  help     Show this help message
  clear    Clear the terminal
  skills   List all technical skills
  ls       List technology categories
  about    About me
  contact  Contact information`;
            break;
          case 'clear':
            setOutput([]);
            setInput('');
            setIsTyping(false);
            return;
          case 'skills':
            response = techStacks.map(tech => {
              const skillsList = tech.skills.map(skill => `    • ${skill}`).join('\n');
              return `${tech.name.toUpperCase()}\n${skillsList}`;
            }).join('\n\n');
            break;
          case 'about':
            response = `FULLSTACK DEVELOPER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Passionate about building web applications
Specialized in React, Node.js, and Symfony
Focus on clean code and best practices`;
            break;
          case 'contact':
            response = `CONTACT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Feel free to reach out via the contact form
Check the Contact section below for more details`;
            break;
          case 'ls':
          case 'list':
            response = techStacks.map((tech, idx) => 
              `${String(idx + 1).padStart(2, '0')}. ${tech.name.padEnd(30)} [${tech.skills.length} items]`
            ).join('\n');
            break;
          default:
            response = `Command not found: '${command}'
Type 'help' for available commands`;
        }

        setOutput([...output, { 
          command: input, 
          response,
          timestamp: getCurrentTime()
        }]);
        setInput('');
        setIsTyping(false);
      }, 300);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <section id="stack" className="py-16 px-4">
      <motion.h1 
        className="text-3xl font-bold mb-8 text-primary flex items-center gap-3"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <CommandLineIcon className="size-8" />
        Tools & Stack
      </motion.h1>
      
      <motion.div 
        className="p-6 border-2 border-border rounded-lg text-sm font-mono bg-card shadow-lg hover:shadow-xl transition-shadow duration-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
        onClick={focusInput}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <motion.div 
                className="w-3 h-3 rounded-full bg-destructive cursor-pointer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
              <motion.div 
                className="w-3 h-3 rounded-full bg-primary opacity-50 cursor-pointer"
                whileHover={{ scale: 1.2, opacity: 1 }}
                whileTap={{ scale: 0.9 }}
              />
              <motion.div 
                className="w-3 h-3 rounded-full bg-primary opacity-30 cursor-pointer"
                whileHover={{ scale: 1.2, opacity: 1 }}
                whileTap={{ scale: 0.9 }}
              />
            </div>
            <span className="text-muted-foreground text-xs ml-2">terminal — nofy@stack</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <SparklesIcon className="size-3" />
            <span>Interactive</span>
          </div>
        </div>

        {/* Command Prompt */}
        <motion.div 
          className="flex gap-2 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-primary font-bold">nofiniaina@nofyrnd</span>
          <span className="text-foreground">:</span>
          <span className="text-primary">~</span>
          <span className="text-foreground">$</span>
          <span className="text-muted-foreground ml-2">nofy view:stack</span>
        </motion.div>

        <div className="flex flex-col">
          <motion.div 
            className="flex gap-2 items-start mb-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <ChevronRightIcon className="size-4 text-primary mt-0.5 shrink-0" /> 
            <span className="text-foreground">Displaying technical stack for <span className="text-primary font-semibold">Fullstack Developer</span></span>
          </motion.div>
          <div className="border-t border-border my-4"></div>
          
          {/* Professional Tech Stack Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {techStacks.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div 
                  key={index} 
                  className="group cursor-pointer border border-border rounded p-3 hover:border-primary transition-all bg-muted/30"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -2 }}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="size-5 text-primary" />
                    </motion.div>
                    <div className="flex-1 flex items-center justify-between">
                      <span className="text-foreground font-bold text-sm uppercase tracking-wider">
                        {tech.name}
                      </span>
                      <span className="text-muted-foreground text-xs bg-muted px-2 py-0.5 rounded">
                        {tech.skills.length}
                      </span>
                    </div>
                  </div>
                  
                  {/* Skills List */}
                  <div className="space-y-1">
                    {tech.skills.map((skill, idx) => (
                      <motion.div 
                        key={idx} 
                        className="flex items-center gap-2 text-xs group/skill"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.08 + idx * 0.03 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-primary opacity-50 group-hover/skill:opacity-100 transition-opacity">
                          ▹
                        </span>
                        <span className="text-foreground group-hover/skill:text-primary transition-colors">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          <div className="border-t border-border my-4"></div>
          
          {/* Stats */}
          <div className="flex items-center justify-between text-xs">
            <div className="flex gap-2 items-center">
              <motion.span 
                className="text-primary"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                ●
              </motion.span>
              <span className="text-muted-foreground">
                Stack loaded • {techStacks.reduce((acc, tech) => acc + tech.skills.length, 0)} skills across {techStacks.length} categories
              </span>
            </div>
            <span className="text-muted-foreground">
              Type 'help' for commands
            </span>
          </div>

          {/* Command Output */}
          <AnimatePresence>
            {output.length > 0 && (
              <motion.div 
                ref={outputRef}
                className="mt-4 border-t border-border pt-4 max-h-80 overflow-y-auto custom-scrollbar"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                {output.map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    className="mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex gap-2 items-center mb-1">
                      <span className="text-muted-foreground text-xs font-mono">[{item.timestamp}]</span>
                      <span className="text-primary font-bold">nofiniaina@nofyrnd</span>
                      <span className="text-foreground">:</span>
                      <span className="text-primary">~</span>
                      <span className="text-foreground">$</span>
                      <span className="text-foreground ml-2">{item.command}</span>
                    </div>
                    <motion.div 
                      className="text-foreground whitespace-pre-line text-xs leading-relaxed bg-muted/50 p-3 rounded border-l-2 border-primary font-mono"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      {item.response}
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Interactive Terminal Input */}
          <div className="flex gap-2 mt-4 items-center pt-3 border-t border-border">
            <span className="text-primary font-bold">nofiniaina@nofyrnd</span>
            <span className="text-foreground">:</span>
            <span className="text-primary">~</span>
            <span className="text-foreground">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleCommand}
              className="ml-2 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground flex-1 font-mono focus:text-primary transition-colors"
              placeholder="Type 'help' for commands..."
              autoComplete="off"
            />
            {isTyping ? (
              <motion.span 
                className="text-primary text-xs"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                [processing]
              </motion.span>
            ) : (
              <motion.span 
                className="text-primary"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                ▋
              </motion.span>
            )}
          </div>

          {/* Helper Text */}
          <motion.div 
            className="mt-2 text-xs text-muted-foreground flex items-center gap-2 justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span>Commands: help • skills • ls • about • contact • clear</span>
            <span className="hidden md:block">Use ↑↓ arrows for history</span>
          </motion.div>
        </div>
      </motion.div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: var(--color-muted-foreground);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: var(--color-primary);
        }
      `}</style>
    </section>
  );
}

export default Stack;