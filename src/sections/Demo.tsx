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

      <div className="flex w-full container h-full bg-transparent inset-3 aspect-video overflow-hidden shadow-lg rounded-2xl">
        <iframe
          width={560 * 1.5}
          height={315 * 1.5}
          className="w-full h-full aspect-video"
          src={copy.demo.link}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
