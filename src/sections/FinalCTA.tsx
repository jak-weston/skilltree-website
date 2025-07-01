import { HomeCopy as copy } from "@/content";

export default function FinalCTA() {
  const { header, subheader, cta } = copy.finalCta;

  return (
    <section id="final-cta" className=" spacing-section ">
      <div className=" w-full flex flex-col items-center justify-center text-center bg-purple-300 py-6">
        <h2>{header}</h2>
        <p className="mt-2">{subheader}</p>

        <div className="mt-4 flex flex-col sm:flex-row gap-4">
          {cta.map((text, index) => (
            <button key={index} className="px-4 py-2 border rounded">
              {text}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
