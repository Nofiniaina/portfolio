import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { useState, type KeyboardEvent, type ChangeEvent } from "react";

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
    <section>
      <h1 className="text-3xl font-bold mb-6 text-primary">Tool & Stack</h1>
      <div className="p-6 border-2 border-border rounded-lg text-sm font-mono bg-card">
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
            <span className="text-foreground">Hello, I'm a <span className="text-primary">Fullstack Developer</span></span>
          </div>
          <div className="border-t border-border my-2"></div>
          
          {/* 2-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            {techStacks.map((tech, index) => (
              <div key={index} className="mb-4">
                <div className="flex gap-2 mb-1">
                  <span className="text-primary">→</span>
                  <span className="text-foreground font-semibold">{tech.name}</span>
                </div>
                <div className="ml-5 space-y-1">
                  <div className="flex gap-2">
                    <span className="text-muted-foreground">├─</span>
                    <span className="text-muted-foreground">Skills:</span>
                  </div>
                  {tech.skills.map((skill, idx) => (
                    <div key={idx} className="flex gap-2">
                      <span className="text-muted-foreground">│  {idx === tech.skills.length - 1 ? '└' : '├'}─</span>
                      <span className="text-primary">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="border-t border-border my-2"></div>
          <div className="flex gap-2 text-muted-foreground text-xs">
            <span>[✓]</span>
            <span>Stack loaded successfully</span>
          </div>

          {/* Command Output */}
          {output.map((item, idx) => (
            <div key={idx} className="mt-2">
              <div className="flex gap-2">
                <span className="text-primary font-bold">nofiniaina@nofyrnd</span>
                <span className="text-foreground">:</span>
                <span className="text-primary">~</span>
                <span className="text-foreground">$</span>
                <span className="text-muted-foreground ml-2">{item.command}</span>
              </div>
              <div className="text-foreground mt-1 whitespace-pre-line">{item.response}</div>
            </div>
          ))}

          {/* Interactive Terminal Input */}
          <div className="flex gap-2 mt-2 items-center">
            <span className="text-primary font-bold">nofiniaina@nofyrnd</span>
            <span className="text-foreground">:</span>
            <span className="text-primary">~</span>
            <span className="text-foreground">$</span>
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleCommand}
              className="ml-2 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground flex-1 font-mono"
              placeholder="Type 'help' for commands..."
              autoFocus
            />
            <span className="animate-pulse text-foreground">_</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stack;