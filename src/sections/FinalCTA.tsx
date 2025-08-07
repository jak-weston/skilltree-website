import { Button } from "@/components/ui/button";
import { HomeCopy as copy } from "@/content";
import { LucideArrowRight } from "lucide-react";

export default function FinalCTA() {
  const { header, subheader } = copy.finalCta;

  return (
    <section id="final-cta" className="spacing-section-vertical text-white">
      <div className="w-full flex flex-col items-center justify-center text-center py-12 md:container glass-card relative overflow-hidden px-3">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-indigo-600/20 to-purple-600/20" />
        
        {/* Animated background elements */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-visible">
          <div className="absolute left-1/6 top-[-50%] h-[200%] w-[90px] bg-blue-400/20 rotate-45 animate-pulse" />
          <div className="absolute left-1/2 top-[-50%] h-[200%] w-[90px] bg-indigo-400/20 rotate-45 animate-pulse delay-500" />
          <div className="absolute left-5/6 top-[-50%] h-[200%] w-[90px] bg-purple-400/20 rotate-45 animate-pulse delay-1000" />
        </div>

        <h2 className="text-center md:text-left relative z-10 text-shadow-sm text-4xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
          {header}
        </h2>
        <p className="text-center md:text-left mt-2 text-white/90 text-xl relative z-10 text-shadow-sm">
          {subheader}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 relative z-10">
          <Button className="glass-button text-white hover:text-blue-300 px-8 py-3 text-lg" asChild>
            <a href="/coming-soon">Android: Coming Soon</a>
          </Button>
          <Button className="glass-button text-white hover:text-blue-300 px-8 py-3 text-lg group" asChild>
            <a href="/coming-soon">
              Get Rep AI for iOS
              <LucideArrowRight
                className="group-hover:translate-x-0.5 text-sm transition-all"
                size={16}
              />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
