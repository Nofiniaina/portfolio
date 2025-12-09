import { ChevronRightIcon } from "@heroicons/react/24/outline";

const techStacks = [
    {
      name: 'PHP',
      skills: ['Laravel', 'Symfony'],
    },
    {
      name: 'JavaScript/TypeScript',
      skills: ['React', 'Node.js', 'Express', 'Angular'],
    },
    {
      name: 'Java',
      skills: ['Swing'],
    }
  ];

function Stack() {
    return(
        <section>
            <h1> Tool & Stack</h1>
            <div className="p-6 border-2 rounded-lg text-sm font-mono">
                <div className="flex gap-2 mb-4">
                    <span className="text-accent font-bold">nofiniaina@nofyrnd</span>
                    <span className="text-white">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-white">$</span>
                    <span className="text-gray-300 ml-2">nofy view:stack</span>
                </div>
                <div className="flex flex-col">
                    <div className="flex gap-2 items-start mb-3">
                        <ChevronRightIcon className="size-4 text-green-400 mt-0.5 shrink-0" /> 
                        <span>Hello, I'm a <span className="text-cyan-400">Fullstack Developer</span></span>
                    </div>
                    <div className="border-t border-gray-800 my-2"></div>
                    {techStacks.map((tech, index) => (
                        <div key={index} className="mb-4">
                            <div className="flex gap-2 mb-1">
                                <span className="text-yellow-400">→</span>
                                <span className="text-white font-semibold">{tech.name}</span>
                            </div>
                            
                            <div className="ml-5 space-y-1">
                                <div className="flex gap-2">
                                <span className="text-gray-500">├─</span>
                                <span className="text-gray-400">Skills:</span>
                                </div>
                                {tech.skills.map((skill, idx) => (
                                <div key={idx} className="flex gap-2">
                                    <span className="text-gray-500">│  {idx === tech.skills.length - 1 ? '└' : '├'}─</span>
                                    <span className="text-green-400">{skill}</span>
                                </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div className="border-t border-gray-800 my-2"></div>
          
                    <div className="flex gap-2 text-gray-500 text-xs">
                        <span>[✓]</span>
                        <span>Stack loaded successfully</span>
                    </div>
                    
                    {/* Cursor */}
                    <div className="flex gap-2 mt-2">
                        <span className="text-accent font-bold">nofiniaina@nofyrnd</span>
                        <span className="text-white">:</span>
                        <span className="text-blue-400">~</span>
                        <span className="text-white">$</span>
                        <span className="ml-2 animate-pulse">_</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Stack;
