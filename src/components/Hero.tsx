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
            <div className="p-4 border-2 rounded-md font-mono">
                <div className="flex gap-2">
                    <p className="text-accent font-bold">nofiniaina@nofyrnd$</p>
                    <p>nofy view:title</p>
                </div>
                <div className="flex flex-col">
                    <div className="flex gap-2">
                        <ChevronRightIcon className="size-6" /> 
                        <p>Hello i'm a Fullstack Developer</p>
                    </div>
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