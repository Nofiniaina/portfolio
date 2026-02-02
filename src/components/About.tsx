import { motion } from "motion/react";
import { UserCircleIcon } from "@heroicons/react/24/outline";

function About() {
  return (
    <section id="about" className="py-16 px-4 flex flex-col items-center">
      <motion.h2
        className="text-3xl font-bold mb-6 text-primary flex items-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <UserCircleIcon className="size-8" />
        About Me
      </motion.h2>
      <motion.div
        className="max-w-3xl text-center text-foreground space-y-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <p>
          Hello! I'm <span className="text-primary font-bold">Nofiniaina</span>, a passionate
          <span className="text-primary font-bold"> Fullstack Developer</span> specialized in
          building web applications with <span className="text-primary font-bold">React, Node.js, and Symfony</span>.
        </p>
        <p>
          I'm also a <span className="text-primary font-bold">Java</span> enthusiast and building simple game using Swing and AWT when I have freetime
        </p>
        <p>
          I love crafting clean and efficient code, following best practices such as
          <span className="text-primary font-bold"> SOLID principles</span> and modern design patterns.
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