import { HomeCopy as copy } from "@/content";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="w-full flex flex-col items-center justify-center"
    >
      <h2>{copy.testimonials.header}</h2>
      <div className="flex flex-col gap-4 w-full max-w-2xl mt-4">
        {copy.testimonials.quotes.map((quote, index) => (
          <div key={index} className="border p-4 rounded">
            <p className="italic">{quote.text}</p>
            <p className="mt-2 text-right">– {quote.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
