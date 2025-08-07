"use client";
import { HomeCopy as copy } from "@/content";
import { motion } from "motion/react";

export default function Benefits() {
  return (
    <section id="benefits" className="relative spacing-section">
      {/* Header and buttons to navigate left and right. Buttons disappear on mobile, opting for a column list */}
      <div className="flex flex-col items-center justify-center gap-1 my-3">
        <span className="chip">Benefits</span>
        <h2 className="text-center text-white bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
          {copy.benefits.header}
        </h2>
        <p className="text-lg text-white/80">{copy.benefits.subheader}</p>
      </div>

      <div className="relative mt-6">
        <ul className="flex flex-col md:grid md:grid-cols-3 gap-6">
          {copy.benefits.items.map((f, idx) => {
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: 50, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: idx * 0.05,
                }}
                className="glass-card p-6 py-8 group relative overflow-hidden hover:scale-105 transition-all duration-300"
              >
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
                  <div className="absolute w-[200%] h-10 bottom-[5%] left-[-15%] group-hover:left-[-17%] -rotate-45 transition-all duration-300 bg-blue-400/20" />
                  <div className="absolute w-[200%] h-12 bottom-[5%] left-[2%] group-hover:left-[0] -rotate-45 transition-all duration-300 bg-blue-400/20" />
                </div>

                <div className="relative z-10">
                  <h3 className="text-3xl text-white font-bold mb-4">{f.title}</h3>
                  <p className="text-lg text-white/80">{f.description}</p>
                </div>
              </motion.div>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
