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
        <h2 className="text-white bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
          {copy.testimonials.header}
        </h2>
        <p className="text-white/80">{copy.testimonials.subheader}</p>
      </div>

      <div className="flex flex-col gap-4 w-full md:container mt-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6">
        {copy.testimonials.quotes.map((quote, index) => (
          <motion.div
            key={index}
            className={cn(
              "glass-card p-4 md:p-6 relative rounded-lg hover:scale-105 transition-all duration-300",
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
              className="absolute top-2 right-2 text-blue-400/60"
              size={60}
            />

            <h5 className="-mb-1 text-white font-semibold">{quote.author}</h5>

            {Array.from({ length: 5 }, (_, i) => (
              <FaStar
                key={i}
                className={
                  i < quote.rating
                    ? "text-yellow-400 inline-block mr-1"
                    : "text-white/30 inline-block mr-1"
                }
              />
            ))}

            <p className="mt-2 text-white/80">{quote.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
