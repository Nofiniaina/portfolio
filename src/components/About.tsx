import { motion } from "motion/react";
import { UserCircleIcon } from "@heroicons/react/24/outline";

function About() {
  return (
    <section id="about" className="py-16 px-4 flex flex-col items-center">
      <motion.h2
        className="text-3xl font-bold mb-6 text-accent"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <UserCircleIcon /> About Me
      </motion.h2>

      <motion.div
        className="max-w-3xl text-center text-text-primary space-y-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <p>
          Hello! I'm <span className="text-accent font-bold">Nofiniaina</span>, a passionate
          <span className="text-accent font-bold"> Fullstack Developer</span> specialized in
          building web applications with <span className="text-accent font-bold">React, Node.js, and Symfony</span>.
        </p>

        <p>I'm also a <span className="text-accent font-bold">Java </span>  
         enthuasist and building simple game using Swing and AWT when i have freetime
        </p>

        <p>
          I love crafting clean and efficient code, following best practices such as
          <span className="text-accent font-bold"> SOLID principles</span> and modern design patterns.
          My goal is to create scalable, maintainable, and user-friendly digital experiences.
        </p>

        <p>
          When I'm not coding, I enjoy exploring new technologies, and continuously improving my skills.
          Also vibing with Music and playing some instruments.
        </p>
      </motion.div>
    </section>
  );
}

export default About;
