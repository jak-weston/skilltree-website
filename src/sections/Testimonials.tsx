"use client";
import { HomeCopy as copy } from "@/content";
import { FaStar, FaQuoteRight } from "react-icons/fa6";

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

      <div className="w-full mt-4 overflow-hidden">
        <div className="flex gap-4 animate-scroll" style={{ width: '200%' }}>
          {/* First set of testimonials */}
          {copy.testimonials.quotes.map((quote, index) => (
            <div
              key={`first-${index}`}
              className="glass-card p-4 md:p-6 relative rounded-lg flex-shrink-0 w-[300px] md:w-[350px]"
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
            </div>
          ))}
          
          {/* Second set of testimonials (duplicate for seamless loop) */}
          {copy.testimonials.quotes.map((quote, index) => (
            <div
              key={`second-${index}`}
              className="glass-card p-4 md:p-6 relative rounded-lg flex-shrink-0 w-[300px] md:w-[350px]"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
