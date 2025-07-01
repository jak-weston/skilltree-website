"use client";
import { HomeCopy as copy } from "@/content";
import { LucideMinus, LucidePlus } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const [selected, setSelected] = useState<number[]>([]);

  const toggleIndex = (index: number) => {
    setSelected((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <section
      id="faq"
      className=" w-full flex justify-center flex-col spacing-section"
    >
      <h2 className="text-center mb-2 mx-3">Frequently asked questions</h2>
      <div className="max-w-md md:max-w-lg lg:max-w-xl w-full mx-auto">
        {copy.faq.items.map((q, index) => {
          const expanded = selected.includes(index);
          return (
            <div key={q.question} className="">
              <div className="flex flex-col py-5 ">
                <div
                  className="flex flex-row items-center justify-between w-full cursor-pointer p-m md:px-0"
                  onClick={() => toggleIndex(index)}
                >
                  <h6 className="font-sans">{q.question}</h6>
                  {expanded ? (
                    <LucideMinus className="text-primary" size={16} />
                  ) : (
                    <LucidePlus className="text-primary" size={16} />
                  )}
                </div>
                {expanded && (
                  <p className="pt-3 text-sm p-m md:px-0">{q.answer}</p>
                )}
              </div>

              {index + 1 < copy.faq.items.length && (
                <div className="w-full bg-border h-[1px]"></div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
