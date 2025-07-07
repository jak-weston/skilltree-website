import { HomeCopy as copy } from "@/content";

export default function Features() {
  return (
    <section id="features" className="relative">
      {/* Header and buttons to navigate left and right. Buttons disappear on mobile, opting for a column list */}
      <div className="flex flex-col items-center justify-center gap-1 my-3">
        <span className="chip">Features</span>
        <h2>{copy.features.header}</h2>
        <p className="text-lg">{copy.features.subheader}</p>
      </div>

      <div className="relative mt-6 ">
        <ul className="flex flex-col md:grid md:grid-cols-3 gap-4 ">
          {copy.features.items.map((f) => {
            const bgVar = `--color-sk-${f.color}`;
            const lightBgVar = `--color-sk-${f.color}-light`;
            return (
              <div
                style={{
                  background: `linear-gradient(to top, var(${bgVar}), var(${lightBgVar}))`,
                  borderColor: `var(${lightBgVar})`,
                }}
                className={`text-primary overflow-hidden rounded-xl border-b-6 w-full md:max-w-xl flex-shrink-0 p-4 py-6 md:p-6 md:py-8 group relative ${bgVar}`}
                key={f.title}
              >
                <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
                  <div
                    style={{
                      background: `linear-gradient(to right, var(${bgVar}), var(${lightBgVar}))`,
                    }}
                    className="absolute w-[200%] h-10 group-hover:h-11 bottom-[5%] left-[-15%] group-hover:left-[-17%] -rotate-45 transition-all duration-300"
                  />
                  <div
                    style={{
                      background: `linear-gradient(to right, var(${bgVar}), var(${lightBgVar}))`,
                    }}
                    className="absolute w-[200%] h-10 group-hover:h-11 bottom-[5%] left-[0%] group-hover:left-[-2%] -rotate-45 transition-all duration-300"
                  />
                </div>

                <div className="relative z-10">
                  <h3 className="text-3xl">{f.title}</h3>
                  <p className="text-lg text-primary/90">{f.description}</p>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
