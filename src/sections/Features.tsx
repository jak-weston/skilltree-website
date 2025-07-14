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
      className="mt-6 w-full flex flex-col items-center justify-center"
    >
      <span className="chip">Features</span>
      <h2 className="text-center ">{copy.features.header}</h2>
      <p className="text-lg mb-4">{copy.features.subheader}</p>

      {/* features list and image */}
      <div className="flex flex-row  gap-4 w-full container mt-3 justify-center items-center">
        <ul className="flex flex-col gap-2 w-full max-w-xl h-full justify-center">
          {copy.features.items.map((content) => (
            <li
              key={content.title}
              className={cn(
                "md:p-4 py-3 md:py-6  rounded-md cursor-pointer md:hover:border-border border border-background transition-all",
                selected === content.title
                  ? "md:border-border md:bg-[var(--color-sk-purple)]"
                  : "bg-background md:hover:bg-secondary"
              )}
              onClick={() => setSelected(content.title)}
            >
              <h3 className="mb-2 text-center md:text-left">{content.title}</h3>
              <p className="text-lg text-center md:text-left">
                {content.description}
              </p>

              <div className="w-full md:hidden items-center justify-center relative">
                {/* Background blur for the container */}
                <div className="absolute inset-0 z-0 backdrop-blur-xl  rounded-4xl pointer-events-none" />

                {/* Blurred green blob behind the image */}
                <div
                  className="absolute z-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[500px] md:h-[500px] rounded-full bg-sk-purple-light/30 blur-[150px] animate-pulse"
                  aria-hidden="true"
                />

                {/* The image itself (not blurred) */}
                <Image
                  src={`/features/${content.image}`}
                  alt="Skill progression tree"
                  className="mx-auto z-10 w-[300px]  md:w-80 transform scale-90 shadow-xl shadow-secondary border-5 border-solid border-border rounded-4xl hover:-translate-y-2 hover:shadow-primary/10 transition-all duration-300"
                  width={600}
                  height={800}
                />
              </div>
            </li>
          ))}
        </ul>

        <div className="w-full hidden items-center justify-center relative md:flex">
          {/* Background blur for the container */}
          <div className="absolute inset-0 z-0 backdrop-blur-xl  rounded-4xl pointer-events-none" />
          {/* Blurred green blob behind the image */}
          <div
            className="absolute z-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[500px] md:h-[500px] rounded-full bg-sk-purple-light/30 blur-[150px] animate-pulse"
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
                className="relative z-10 flex items-center justify-center "
              >
                {/* Phone frame */}
                <div className="relative bg-primary/10 rounded-[2.5rem] border-[8px] border-frame shadow-2xl w-[340px] h-[700px] flex items-center justify-center overflow-hidden ">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-3 bg-frame rounded-b-xl z-20 -translate-y-[2px]" />
                  {/* Image (phone screen) */}
                  <Image
                    src={`/features/${selectedItem.image}`}
                    alt="Skill progression tree"
                    style={{
                      boxShadow: "6px 9px 0 0 #ffffff1a",
                    }}
                    className="w-full h-full object-cover rounded-[2rem] bg-primary/10"
                    width={312}
                    height={676}
                  />
                </div>
                {/* Side button (right) - outside the phone */}
                <div className="absolute right-[-6px] top-24 w-1.5 h-16 bg-primary/10 rounded-r-full z-20" />
                {/* Side button (left) - outside the phone */}
                <div className="absolute right-[-6px] top-[180px] w-1.5 h-10 bg-primary/10 rounded-r-full z-20" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
