import { Button } from "@/components/ui/button";
import { HomeCopy as copy } from "@/content";
import { LucideArrowRight } from "lucide-react";

export default function FinalCTA() {
  const { header, subheader } = copy.finalCta;

  return (
    <section id="final-cta" className="my-9 ">
      <div className=" w-full flex flex-col items-center justify-center text-center py-12 border border-sk-blue-light/30 border-solid rounded-xl backdrop-blur-2xl bg-background/50 md:container bg-gradient-to-tr from-sk-green-light/30 to-sk-purple-light/30 shadow-sk-purple-light/20">
        <h2 className="text-left">{header}</h2>
        <p className="mt-2">{subheader}</p>

        <div className="mt-4 flex flex-col sm:flex-row gap-4">
          <Button variant="secondary">Android: Coming Soon</Button>
          <Button className="group">
            Get Skilltree for iOS
            <LucideArrowRight
              className="group-hover:translate-x-0.5 text-sm transition-all"
              size={16}
            ></LucideArrowRight>
          </Button>
        </div>
      </div>
    </section>
  );
}
