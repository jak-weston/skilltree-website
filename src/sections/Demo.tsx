import { HomeCopy as copy } from "@/content";
export default function Demo() {
  return (
    <section
      id="demo"
      className="w-full flex  flex-col items-center justify-center spacing-section"
    >
      <h2>{copy.demo.header}</h2>
      <p>{copy.demo.subheader}</p>

      <div className="rounded-xl border border-solid border-background aspect-video bg-purple-300 w-lg"></div>
    </section>
  );
}
