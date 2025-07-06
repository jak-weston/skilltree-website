import { HomeCopy as copy } from "@/content";

export default function Benefits() {
  return (
    <section id="benefits" className="spacing-section w-full">
      <div className="flex flex-row  gap-4 w-full container">
        <ul className="flex flex-col gap-2 w-full max-w-xl h-full ">
          {copy.benefits.items.map((content) => (
            <li
              key={content.title}
              className="md:p-4 py-3 md:py-6 md:hover:bg-secondary rounded-md cursor-pointer md:hover:border-border border border-background transition-all"
            >
              <h3 className="mb-2">{content.title}</h3>
              <p className="text-lg">{content.description}</p>

              <div className="md:hidden w-full mt-4 aspect-[4/3] rounded-md bg-gradient-to-tr from-primary/20 to-primary/5 flex items-center  justify-center">
                Image Placeholder
              </div>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex w-full mt-4 aspect-[4/3] rounded-md bg-gradient-to-tr from-primary/20 to-primary/5 items-center  justify-center">
          Image Placeholder
        </div>
      </div>
    </section>
  );
}
