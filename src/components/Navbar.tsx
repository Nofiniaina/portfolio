import { AnimatePresence, motion } from "motion/react";
import { ChevronDoubleRightIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

type NavProps = {
  index: number,
  content: string,
  href: string
}

function NavItem({index, content, href}: NavProps) {
  const [isCurrent, setIsCurrent] = useState(false);
  
  return(
    <motion.li className="relative flex items-center gap-1 cursor-pointer group">
      <AnimatePresence initial={false}>
        {
          isCurrent ? 
          (<motion.span className="text-primary"
            key="hover_icon"
            initial={{ opacity: 0, x: -10, scale: 0 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
            exit={{ opacity: 0, x: -10, scale: 0 }}
          >
            <ChevronDoubleRightIcon className="size-4"/>
          </motion.span>) 
          : 
          (<motion.span 
            className="text-muted-foreground text-sm"
            exit={{ opacity: 0 }}
          >
            {String(index + 1).padStart(2, '0')}
          </motion.span>)   
        }
      </AnimatePresence>
      <motion.a
        href={href}
        className="text-foreground hover:text-primary transition-colors relative font-medium"
        onHoverStart={()=>{
          setIsCurrent(true);
        }}
        onHoverEnd={()=>{
          setIsCurrent(false);
        }}
      >
        {content}
        <motion.span 
          className="absolute -bottom-1 left-0 h-0.5 bg-primary"
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.3 }}
        />
      </motion.a>
    </motion.li>
  );
}

function Navbar() {
  const navcontent = [
    { name: "About", href: "#about" },
    { name: "Tools & Stack", href: "#stack" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];
  
  return(
    <nav className="pb-6 text-base flex justify-between items-center border-b-2 border-border">
      <motion.div 
        className="text-foreground font-bold flex items-center gap-2 text-xl"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <CodeBracketIcon className="size-6 text-primary" />
        <span className="font-mono">
          {'<'}
          <span className="text-primary">Nofiniaina</span>
          {'/>'}
        </span>
      </motion.div>
      
      <ul className="flex gap-6 items-center">
        {
          navcontent.map((item, index)=> 
            <NavItem 
              key={index} 
              index={index} 
              content={item.name}
              href={item.href}
            />
          )
        }
      </ul>
    </nav>
  );
}

export default Navbar;