import { HomeCopy as copy } from "@/content";
import { cn } from "@/lib/utils";
import { FaStar, FaQuoteRight } from "react-icons/fa6";

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
          <div
            key={index}
            className={cn(
              "border p-4 md:p-6 relative rounded-lg",
              index >= 4 ? "hidden md:block" : ""
            )}
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
          </div>
        ))}
      </div>
    </section>
  );
}
