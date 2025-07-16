"use client";
import { HomeCopy as copy } from "@/content";
import { cn } from "@/lib/utils";
import { FaStar, FaQuoteRight } from "react-icons/fa6";
import { motion } from "motion/react";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="w-full flex flex-col items-center justify-center spacing-section"
    >
      <div className="w-full flex flex-col items-center justify-center text-center">
        <span className="chip">Testimonials</span>
        <h2>{copy.testimonials.header}</h2>
        <p>{copy.testimonials.subheader}</p>
      </div>

      <div className="flex flex-col gap-4 w-full md:container mt-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 ">
        {copy.testimonials.quotes.map((quote, index) => (
          <motion.div
            key={index}
            className={cn(
              "border p-4 md:p-6 relative rounded-lg",
              index >= 4 ? "hidden md:block" : ""
            )}
            initial={{ opacity: 0, x: 50, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              delay: index * 0.05,
            }}
          >
            <FaQuoteRight
              className="absolute top-2 right-2 text-secondary"
              size={60}
            />

            <h5 className="-mb-1">{quote.author}</h5>

            {Array.from({ length: 5 }, (_, i) => (
              <FaStar
                key={i}
                className={
                  i < quote.rating
                    ? "text-yellow-500 inline-block mr-1"
                    : "text-primary/50 inline-block mr-1"
                }
              />
            ))}

            <p className="mt-2 text-primary/90">{quote.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
