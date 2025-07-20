import { Button } from "@/components/ui/button";
import { HomeCopy as copy } from "@/content";
import { LucideArrowRight } from "lucide-react";

export default function FinalCTA() {
  const { header, subheader } = copy.finalCta;

  return (
    <section id="final-cta" className="spacing-section-vertical text-white">
      <div
        className="w-full flex flex-col items-center justify-center text-center py-12 border-6 inset md:container bg-gradient-to-tr rounded-2xl border-solid border-transparent relative overflow-hidden px-3"
        style={{
          background:
            "linear-gradient(to right, var(--color-sk-red), var(--color-sk-yellow), var(--color-sk-green))",
          borderLeft: "2px solid var(--color-sk-red)",
          borderRight: "2px solid var(--color-sk-green)",
        }}
      >
        {/* 3 diagonal lines */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-visible">
          <div className="absolute left-1/6 top-[-50%] h-[200%] w-[90px] bg-white/20 rotate-45" />
          <div className="absolute left-1/2 top-[-50%] h-[200%] w-[90px] bg-white/20 rotate-45" />
          <div className="absolute left-5/6 top-[-50%] h-[200%] w-[90px] bg-white/20 rotate-45" />
        </div>

        <h2 className="text-center md:text-left relative z-10 text-shadow-sm">
          {header}
        </h2>
        <p className="texet-center md:text-left mt-2 text-white text-xl relative z-10 text-shadow-sm">
          {subheader}
        </p>

        <div className="mt-4 flex flex-col sm:flex-row gap-4 relative z-10">
          <Button variant="secondary" asChild>
            <a href="/coming-soon">Android: Coming Soon</a>
          </Button>
          <Button className="group" asChild>
            <a href="/coming-soon">
              Get Skilltree for iOS
              <LucideArrowRight
                className="group-hover:translate-x-0.5 text-sm transition-all"
                size={16}
              ></LucideArrowRight>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
