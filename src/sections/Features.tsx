"use client";

import { useRef } from "react";
import { HomeCopy as copy } from "@/content";
import { Button } from "@/components/ui/button";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export default function Features() {
  const scrollRef = useRef<HTMLUListElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const distance = 768; // Adjust scroll distance
      scrollRef.current.scrollBy({
        left: dir === "left" ? -distance : distance,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="features" className="relative">
      {/* Header and buttons to navigate left and right. Buttons disappear on mobile, opting for a column list */}
      <div className="flex-row inline-flex justify-between items-center w-full mt-4.5">
        <div className="flex flex-col gap-1">
          <h2>{copy.features.header}</h2>
          <p className="text-lg">{copy.features.subheader}</p>
        </div>
        <div className="hidden md:inline-flex gap-2 ">
          <Button
            variant="secondary"
            onClick={() => scroll("left")}
            className="border-[2px] border-primary/25 border-solid cursor-pointer h-10 w-10 group"
          >
            <BsArrowLeft className="group-hover:-translate-x-[2px] transition-all" />
          </Button>

          <Button
            variant="secondary"
            onClick={() => scroll("right")}
            className="border-[2px] border-primary/25 border-solid cursor-pointer h-10 w-10 group transition-all"
          >
            <BsArrowRight className="group-hover:translate-x-[2px] " />
          </Button>
        </div>
      </div>

      <div className="relative mt-3 ">
        <ul
          ref={scrollRef}
          className="flex flex-col md:flex-row gap-4 overflow-x-scroll  scroll-smooth scrollbar-hide px-1 w-full rounded-xl"
        >
          {copy.features.items.map((f) => {
            const bgVar = `--color-sk-${f.color}`;
            const lightBgVar = `--color-sk-${f.color}-light`;
            return (
              <div
                style={{
                  background: `linear-gradient(to top, var(${bgVar}), var(${lightBgVar}))`,
                }}
                className={`text-primary-foreground overflow-hidden rounded-xl border border-solid border-border w-full md:max-w-xl flex-shrink-0  p-4 md:p-6 aspect-[3/2] group relative ${bgVar}`}
                key={f.title}
              >
                <h3 className="text-3xl">{f.title}</h3>
                <p className="text-lg text-primary-foreground/90">
                  {f.description}
                </p>
                <div
                  style={{ backgroundColor: `var(${lightBgVar})` }}
                  className="absolute w-[200%] h-10 group-hover:h-11 bottom-[5%] left-[-15%] group-hover:left-[-17%] -rotate-45 z-0 transition-all duration-300"
                />
                <div
                  style={{ backgroundColor: `var(${lightBgVar})` }}
                  className="absolute w-[200%] h-10 group-hover:h-11 bottom-[5%] left-[0%] group-hover:left-[-2%] -rotate-45 z-0 transition-all duration-300"
                />
              </div>
            );
          })}
        </ul>

        <div className="pointer-events-none absolute right-0 top-0 h-full w-[125px] bg-gradient-to-l from-background/25 to-transparent hidden md:block" />
      </div>
    </section>
  );
}
