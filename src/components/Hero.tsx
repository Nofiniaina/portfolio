import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { NAME, FIRSTNAME, JOBTITLE } from "../utils/constants/ascii";

function Hero() {
  return(
    <section>
      <div className="m-4 flex flex-col items-center">
        <pre className="text-foreground">
          {NAME}
        </pre>
        <pre className="text-foreground">
          {FIRSTNAME}
        </pre>
      </div>
      <div className="p-6 border-2 border-border rounded-lg text-sm font-mono bg-card">
        <div className="flex gap-2 mb-4">
          <span className="text-primary font-bold">nofiniaina@nofyrnd</span>
          <span className="text-foreground">:</span>
          <span className="text-primary">~</span>
          <span className="text-foreground">$</span>
          <span className="text-muted-foreground ml-2">nofy view:title</span>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-2 items-start mb-3">
            <ChevronRightIcon className="size-4 text-primary mt-0.5 shrink-0" /> 
            <span className="text-foreground">Hello, I'm a <span className="text-primary">Fullstack Developer</span></span>
          </div>
          <div className="border-t border-border my-2"></div>
          <div className="transform scale-50 origin-top-left">
            <pre className="leading-none text-muted-foreground">
              {JOBTITLE}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;