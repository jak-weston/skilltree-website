"use client";
import { HomeCopy as copy } from "@/content";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function Features() {
  const [selected, setSelected] = useState<string>(
    copy.features.items[0].title
  );

  const [selectedItem, setSelectedItem] = useState(copy.features.items[0]);

  useEffect(() => {
    const item = copy.features.items.find((item) => item.title === selected);
    if (item) {
      setSelectedItem(item);
    }
  }, [selected]);

  return (
    <section
      id="features"
      className="mt-6 w-full flex flex-col items-center justify-center spacing-section"
    >
      <span className="chip">Features</span>
      <h2 className="text-center text-white">{copy.features.header}</h2>
      <p className="text-lg mb-4 text-white/80">{copy.features.subheader}</p>

      {/* features list and image */}
      <div className="flex flex-row gap-4 w-full container mt-3 justify-center items-center">
        <ul className="flex flex-col gap-4 w-full max-w-xl h-full justify-center">
          {copy.features.items.map((content) => (
            <li
              key={content.title}
              className={cn(
                "glass-card p-6 cursor-pointer transition-all duration-300 hover:scale-105",
                selected === content.title
                  ? "ring-2 ring-blue-400/50 bg-blue-500/20"
                  : "hover:bg-white/5"
              )}
              onClick={() => setSelected(content.title)}
            >
              <h3 className="mb-2 text-center md:text-left text-white font-semibold">{content.title}</h3>
              <p className="text-lg text-center md:text-left text-white/80">
                {content.description}
              </p>

              <div className="w-full md:hidden items-center justify-center relative mt-4">
                {/* Background blur for the container */}
                <div className="absolute inset-0 z-0 backdrop-blur-xl rounded-4xl pointer-events-none" />

                {/* Blurred blue blob behind the image */}
                <div
                  className="absolute z-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[500px] md:h-[500px] rounded-full bg-blue-400/30 blur-[150px] animate-pulse"
                  aria-hidden="true"
                />

                {/* The image itself (not blurred) */}
                <Image
                  src={`/features/${content.image}`}
                  alt="Rep AI feature"
                  className="mx-auto z-10 w-[300px] md:w-80 transform scale-90 shadow-xl shadow-blue-500/20 border-5 border-solid border-white/20 rounded-4xl hover:-translate-y-2 hover:shadow-blue-400/30 transition-all duration-300"
                  width={600}
                  height={800}
                />
              </div>
            </li>
          ))}
        </ul>

        <div className="w-full hidden items-center justify-center relative md:flex">
          {/* Background blur for the container */}
          <div className="absolute inset-0 z-0 backdrop-blur-xl rounded-4xl pointer-events-none" />
          {/* Blurred blue blob behind the image */}
          <div
            className="absolute z-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[500px] md:h-[500px] rounded-full bg-blue-400/30 blur-[150px] animate-pulse"
            aria-hidden="true"
          />
          <div className="animate-sinusoidal">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedItem.image}
                initial={{ opacity: 0, x: 50, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, y: -50, scale: 0.8 }}
                transition={{ type: "tween", duration: 0.15 }}
                className="relative z-10 flex items-center justify-center"
              >
                {/* Phone frame */}
                <div className="relative glass-card rounded-[2.5rem] border-[8px] border-white/20 shadow-2xl w-[340px] h-[700px] flex items-center justify-center overflow-hidden">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-3 bg-white/20 rounded-b-xl z-20 -translate-y-[2px]" />
                  {/* Image (phone screen) */}
                  <Image
                    src={`/features/${selectedItem.image}`}
                    alt="Rep AI feature"
                    style={{
                      boxShadow: "6px 9px 0 0 rgba(255, 255, 255, 0.1)",
                    }}
                    className="w-full h-full object-cover rounded-[2rem] bg-white/5"
                    width={312}
                    height={676}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
