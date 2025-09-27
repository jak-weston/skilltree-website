"use client";
import { HomeCopy as copy } from "@/content";
import { LucideMinus, LucidePlus } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const [selected, setSelected] = useState<number[]>([]);

  const toggleIndex = (index: number) => {
    setSelected((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section
      id="faq"
      className="w-full flex justify-center flex-col items-center py-8 pb-16"
    >
      <span className="chip">FAQ</span>
      <h2 className="text-center mb-2 mx-3 text-white bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
        Frequently asked questions
      </h2>
      <div className="max-w-md md:max-w-lg lg:max-w-xl w-full mx-auto">
        <div className="glass-card p-6">
          {copy.faq.items.map((q, index) => {
            const expanded = selected.includes(index);
            return (
              <div key={q.question} className="">
                <div className="flex flex-col py-5">
                  <div
                    className="flex flex-row items-center justify-between w-full cursor-pointer p-m md:px-0 group"
                    onClick={() => toggleIndex(index)}
                  >
                    <h6 className="font-sans group-hover:text-blue-300 transition-colors text-white">
                      {q.question}
                    </h6>
                    {expanded ? (
                      <LucideMinus className="text-blue-300" size={16} />
                    ) : (
                      <LucidePlus className="text-blue-300" size={16} />
                    )}
                  </div>
                  {expanded && (
                    <div className="pt-3 text-md p-m md:px-0 text-white/80">
                      {q.question === "How do you collect and store my information?" ? (
                        <div>
                          <p className="mb-2">
                            We collect minimal data necessary for app functionality and use industry-standard security measures. For detailed information about our data practices, please review our{" "}
                            <a href="/privacy-policy" className="text-blue-300 hover:text-blue-200 underline">
                              Terms of Service and Privacy Policy
                            </a>
                            .
                          </p>
                        </div>
                      ) : (
                        <p>{q.answer}</p>
                      )}
                    </div>
                  )}
                </div>

                {index + 1 < copy.faq.items.length && (
                  <div className="w-full bg-white/20 h-[1px]"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
