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
    <motion.li 
      className="relative flex items-center gap-1 cursor-pointer group"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4, type: "spring" }}
    >
      <AnimatePresence mode="wait">
        {
          isCurrent ? 
          (<motion.span 
            className="text-primary"
            key="hover_icon"
            initial={{ opacity: 0, x: -10, scale: 0, rotate: -180 }}
            animate={{ 
              opacity: 1, 
              x: 0, 
              scale: 1, 
              rotate: 0,
              transition: {
                duration: 0.4,
                type: "spring",
                stiffness: 300,
                damping: 20
              }
            }}
            exit={{ 
              opacity: 0, 
              x: -10, 
              scale: 0, 
              rotate: 180,
              transition: { duration: 0.2 }
            }}
          >
            <ChevronDoubleRightIcon className="size-4"/>
          </motion.span>) 
          : 
          (<motion.span 
            className="text-muted-foreground text-sm font-mono"
            key="index_number"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              transition: { duration: 0.3 }
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.8,
              transition: { duration: 0.2 }
            }}
          >
            {String(index + 1).padStart(2, '0')}
          </motion.span>)   
        }
      </AnimatePresence>
      
      <motion.a
        href={href}
        className="text-foreground hover:text-primary transition-colors relative font-medium"
        onHoverStart={() => {
          setIsCurrent(true);
        }}
        onHoverEnd={() => {
          setIsCurrent(false);
        }}
        whileHover={{ x: 4 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {content}
        
        {/* Underline animation */}
        <motion.span 
          className="absolute -bottom-1 left-0 h-0.5 bg-primary"
          initial={{ width: 0, opacity: 0 }}
          animate={{ 
            width: isCurrent ? "100%" : 0,
            opacity: isCurrent ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
        
        {/* Glowing effect on hover */}
        {isCurrent && (
          <motion.span
            className="absolute inset-0 bg-primary opacity-5 rounded"
            layoutId="navHighlight"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
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
    <motion.nav 
      className="pb-6 text-base flex justify-between items-center border-b-2 border-border sticky top-0 bg-background z-50 pt-6"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
    >
      {/* Logo */}
      <motion.a
        href="#"
        className="text-foreground font-bold flex items-center gap-2 text-xl cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <CodeBracketIcon className="size-6 text-primary" />
        </motion.div>
        <span className="font-mono">
          {'<'}
          <motion.span 
            className="text-primary"
            whileHover={{ 
              textShadow: "0 0 8px rgba(136, 136, 136, 0.5)"
            }}
          >
            Nofiniaina
          </motion.span>
          {'/>'}
        </span>
      </motion.a>
      
      {/* Navigation Items */}
      <ul className="flex gap-6 items-center">
        {
          navcontent.map((item, index) => 
            <NavItem 
              key={index} 
              index={index} 
              content={item.name}
              href={item.href}
            />
          )
        }
      </ul>
    </motion.nav>
  );
}

export default Navbar;