import { HomeCopy as copy } from "@/content";
export default function Demo() {
  return (
    <section
      id="demo"
      className="w-full flex flex-col items-center justify-center spacing-section"
    >
      <span className="chip">Demo</span>
      <h2>{copy.demo.header}</h2>
      <p className="mb-3">{copy.demo.subheader}</p>

      <div className="flex w-full container mt-4 aspect-video rounded-md bg-gradient-to-tr from-primary/20 to-primary/5 items-center  justify-center">
        [YouTube Video Demo]
      </div>
    </section>
  );
}
