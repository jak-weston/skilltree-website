import { Button } from "@/components/ui/button";
import { HomeCopy as copy } from "@/content";
import { cn } from "@/lib/utils";

export default function Expanation() {
  return (
    <section
      id="explanation"
      className="spacing-section w-full flex flex-col justify-center items-center "
    >
      <h2>{copy.example.header}</h2>
      <div className="flex flex-row gap-2 text-lg">
        {copy.benefits.taglines.map((tag) => (
          <p key={tag}>{tag}</p>
        ))}
      </div>

      <ul className="flex flex-col md:grid grid-cols-3 gap-3 mt-4">
        {copy.example.steps.map((step, index) => (
          <li
            className="cols-span-1 p-4 md:p-6 rounded-lg relative"
            key={step.title}
          >
            <div
              className={cn(
                "absolute top-1.5 left-1.5 bg-secondary border-[2px] border-solid border-border rounded-full  text-secondary-foreground shadow-xs hover:bg-sk-blue hover:text-primary-foreground cursor-pointer h-10 w-10 flex items-center justify-center",
              )}
            >
              <span>{index + 1}</span>
            </div>

            <div className="w-full aspect-[4/3] rounded-md bg-gradient-to-tr from-primary/20 to-primary/5 flex items-center  justify-center">
              Image Placeholder
            </div>

            <h3 className="mt-3 ">{step.title}</h3>
            <p>{step.description}</p>
          </li>
        ))}
      </ul>

      <Button>Download Now</Button>
    </section>
  );
}
