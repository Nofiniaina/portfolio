import { motion } from "motion/react";
import {
  FolderIcon,
  StarIcon,
  CodeBracketIcon,
  ArrowTopRightOnSquareIcon,
  CommandLineIcon
} from "@heroicons/react/24/outline";
import { useState } from "react";

interface Project {
  id: number;
  name: string;
  description: string;
  stack: string[];
  stars?: number;
  link: string;
  category: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    name: "checkers_game",
    description:
      "A classic checkers game implementation with GUI built using Java Swing. Features include player vs player mode, move validation, and piece capturing logic.",
    stack: ["Java", "Swing", "AWT"],
    link: "https://github.com/Nofiniaina/checkers_game",
    category: "Desktop Game",
    featured: true
  },
  {
    id: 2,
    name: "Ludo",
    description:
      "Digital implementation of the popular Ludo board game with interactive gameplay, turn-based mechanics, and custom game rules.",
    stack: ["Java", "Swing"],
    stars: 3,
    link: "https://github.com/Nofiniaina/Ludo",
    category: "Desktop Game",
    featured: true
  },
  {
    id: 3,
    name: "Chess",
    description:
      "Full-featured chess game with complete rule implementation, move validation, check/checkmate detection, and graphical interface.",
    stack: ["Java", "Swing"],
    stars: 1,
    link: "https://github.com/Nofiniaina/Chess",
    category: "Desktop Game",
    featured: true
  },
  {
    id: 4,
    name: "vente",
    description:
      "E-commerce platform with product management, shopping cart functionality, and secure payment processing.",
    stack: ["PHP", "MySQL", "HTML", "CSS"],
    link: "https://github.com/Nofiniaina/vente",
    category: "Web Application"
  },
  {
    id: 5,
    name: "express-cli",
    description:
      "Minimalist CLI tool for scaffolding Express.js projects with best practices, folder structure, and essential dependencies pre-configured.",
    stack: ["JavaScript", "Node.js", "CLI"],
    link: "https://github.com/Nofiniaina/express-cli",
    category: "Developer Tool",
    featured: true
  },
  {
    id: 6,
    name: "signature",
    description:
      "Digital signature application for document signing and verification with cryptographic security features.",
    stack: ["Python"],
    link: "https://github.com/Nofiniaina/signature",
    category: "Utility"
  }
];

const categories = [
  "All",
  "Desktop Game",
  "Web Application",
  "Developer Tool",
  "Utility"
];

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-16 px-4">
      <motion.div
        className="max-w-6xl mx-auto"
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
          <FolderIcon className="size-8" />
          Projects
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
          <div className="flex items-center justify-between gap-2 mb-6 pb-4 border-b border-border">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive"></div>
                <div className="w-3 h-3 rounded-full bg-primary opacity-50"></div>
                <div className="w-3 h-3 rounded-full bg-primary opacity-30"></div>
              </div>
              <span className="text-muted-foreground text-xs ml-2">
                projects.json — {filteredProjects.length} items
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <CommandLineIcon className="size-3 text-muted-foreground" />
              <a
                href="https://github.com/Nofiniaina"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
              >
                View on GitHub
                <ArrowTopRightOnSquareIcon className="size-3" />
              </a>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-6">
            <div className="flex gap-2 items-center mb-3">
              <span className="text-muted-foreground text-xs">→</span>
              <span className="text-foreground text-sm">
                Filter by category:
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1.5 text-xs rounded border transition-all ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-muted text-foreground border-border hover:border-primary"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="border-t border-border mb-6"></div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative border border-border rounded p-4 bg-muted/30 hover:border-primary transition-all cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                {project.featured && (
                  <div className="absolute -top-2 -right-2">
                    <motion.div
                      className="bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: index * 0.1 + 0.3,
                        type: "spring"
                      }}
                    >
                      ★
                    </motion.div>
                  </div>
                )}

                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <FolderIcon className="size-5 text-primary group-hover:scale-110 transition-transform" />
                    <h3 className="text-foreground font-bold text-sm group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                  </div>
                  {project.stars !== undefined && (
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <StarIcon className="size-3" />
                      <span>{project.stars}</span>
                    </div>
                  )}
                </div>

                <p className="text-foreground text-xs leading-relaxed mb-4 min-h-[3rem]">
                  {project.description}
                </p>

                <div className="mb-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-muted text-foreground text-xs rounded border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <span className="text-xs text-muted-foreground">
                    {project.category}
                  </span>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-primary hover:underline"
                    whileHover={{ x: 2 }}
                  >
                    View Code
                    <ArrowTopRightOnSquareIcon className="size-3" />
                  </motion.a>
                </div>

                {hoveredProject === project.id && (
                  <motion.div
                    className="absolute inset-0 border-2 border-primary rounded pointer-events-none"
                    layoutId="projectHover"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Footer Stats */}
          <motion.div
            className="flex items-center justify-between mt-6 pt-4 border-t border-border text-xs"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2">
              <motion.span
                className="text-primary"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                ●
              </motion.span>
              <span className="text-muted-foreground">
                Showing {filteredProjects.length} of {projects.length} projects
              </span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CodeBracketIcon className="size-3" />
              <span>
                Total stars:{" "}
                {projects.reduce((acc, p) => acc + (p.stars || 0), 0)}
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/Nofiniaina"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
            whileHover={{ x: 4 }}
          >
            <span>→</span>
            <span>View all repositories on GitHub</span>
            <ArrowTopRightOnSquareIcon className="size-4" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Projects;
