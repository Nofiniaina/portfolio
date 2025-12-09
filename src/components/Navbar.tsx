import { AnimatePresence, motion } from "motion/react";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

type NavProps = {
    index: number,
    content: string
}

function NavItem({index, content}: NavProps) {
    const [isCurrent, setIsCurrent] = useState(false);

    return(
        <motion.li className="relative flex items-center gap-2 cursor-pointer">
            <AnimatePresence initial={false}>
                {
                 isCurrent ? 
                    (<motion.span className="text-accent"
                        key="hover_icon"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        exit={{ opacity: 0, scale: 0 }}
                    >
                        <ChevronDoubleRightIcon className="size-4"/>
                    </motion.span>) 
                    : 
                    (<motion.span className="text-accent">
                        {index +1}. 
                    </motion.span>)   
                }
            </AnimatePresence>
            
            <motion.span
                onHoverStart={()=>{
                    setIsCurrent(true);
                }}
                onHoverEnd={()=>{
                    setIsCurrent(false);
                }}
            >
                {content}
            </motion.span>
        </motion.li>
    );
}

function Navbar() {

    const navcontent = ["About", "Tools & Stack", "Skills", "Projects", "Contact"];

    return(
        <nav className="pb-4 text-xl flex justify-between border-b-2">
            <div>
                {'<Nofiniaina/>'}
            </div>
            <ul className="flex gap-4">
                {
                    navcontent.map((content, index)=> 
                        <NavItem key={index} index={index} content={content}/>
                    )
                }
            </ul>
        </nav>
    );
}

export default Navbar;