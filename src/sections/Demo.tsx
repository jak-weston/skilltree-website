import { HomeCopy as copy } from "@/content";
export default function Demo() {
  return (
    <section
      id="demo"
      className="w-full flex flex-col items-center justify-center"
    >
      <span className="chip">Demo</span>
      <h2 className="text-white bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
        {copy.demo.header}
      </h2>
      <p className="mb-3 text-white/80">{copy.demo.subheader}</p>

      <div className="flex w-full max-w-9xl container h-full glass-card aspect-video overflow-hidden shadow-2xl rounded-2xl">
        <iframe
          width={560 * 1.5}
          height={315 * 1.5}
          className="w-full h-full aspect-video rounded-2xl"
          src={copy.demo.link}
          title="Rep AI Demo Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
