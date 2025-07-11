"use client";
import { HomeCopy as copy } from "@/content";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

export default function Benefits() {
  const [selected, setSelected] = useState<string>(
    copy.benefits.items[0].title
  );

  return (
    <section
      id="benefits"
      className="spacing-section w-full flex flex-col items-center justify-center"
    >
      <span className="chip">Benefits</span>
      <h2>{copy.benefits.header}</h2>
      <p className="text-lg mb-4">{copy.benefits.subheader}</p>

      {/* Benefits list and image */}
      <div className="flex flex-row  gap-4 w-full container mt-3 justify-center items-center">
        <ul className="flex flex-col gap-2 w-full max-w-xl h-full justify-center">
          {copy.benefits.items.map((content) => (
            <li
              key={content.title}
              className={cn(
                "md:p-4 py-3 md:py-6 md:hover:bg-secondary rounded-md cursor-pointer md:hover:border-border border border-background transition-all",
                selected === content.title
                  ? "bg-secondary border-border"
                  : "bg-background"
              )}
              onClick={() => setSelected(content.title)}
            >
              <h3 className="mb-2">{content.title}</h3>
              <p className="text-lg">{content.description}</p>

              <div className="md:hidden w-full aspect-[4/3] mt-4 rounded-md bg-gradient-to-tr from-primary/20 to-primary/5 flex items-center  justify-center">
                Image Placeholder
              </div>
            </li>
          ))}
        </ul>

        <div className="w-full flex items-center justify-center relative">
          {/* Background blur for the container */}
          <div className="absolute inset-0 z-0 backdrop-blur-xl  rounded-4xl pointer-events-none" />

          {/* Blurred green blob behind the image */}
          <div
            className="absolute z-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[500px] md:h-[500px] rounded-full bg-sk-purple-light/30 blur-[150px] animate-pulse"
            aria-hidden="true"
          />

          {/* The image itself (not blurred) */}
          <Image
            src="/features/tree.svg"
            alt="Skill progression tree"
            style={{
              boxShadow: "6px 9px 0 0 #ffffff1a",
            }}
            className="relative z-10 w-[300px] rotate-[15deg] -skew-y-[7deg] md:w-80 transform hover:scale-[0.91] scale-90 hover:rotate-x-5 animate-sinusoidal shadow-xl shadow-secondary border-4 border-solid border-border rounded-4xl hover:-translate-y-2 hover:shadow-primary/10 transition-all duration-300"
            width={600}
            height={800}
          />
        </div>
      </div>
    </section>
  );
}
