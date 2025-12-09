import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { NAME, FIRSTNAME, JOBTITLE } from "../utils/constants/ascii";
function Hero() {
    return(
        <section>
            <div className="m-4 flex flex-col items-center">
                <pre className="">
                    {NAME}
                </pre>
                <pre className="">
                    {FIRSTNAME}
                </pre>
            </div>
            <div className="p-6 border-2 rounded-lg text-sm font-mono">
                <div className="flex gap-2 mb-4">
                    <span className="text-accent font-bold">nofiniaina@nofyrnd</span>
                    <span className="text-white">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-white">$</span>
                    <span className="text-gray-300 ml-2">nofy view:title</span>
                </div>
                <div className="flex flex-col">
                    <div className="flex gap-2 items-start mb-3">
                        <ChevronRightIcon className="size-4 text-green-400 mt-0.5 shrink-0" /> 
                        <span>Hello, I'm a <span className="text-cyan-400">Fullstack Developer</span></span>
                    </div>
                    <div className="border-t border-gray-800 my-2"></div>
                    <div className="transform scale-50 origin-top-left">
                        <pre className="leading-none">
                            {JOBTITLE}
                        </pre>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

export default Hero;