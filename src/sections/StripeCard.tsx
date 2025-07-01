"use client";

interface StripeCardProps {
  color: string;
  children: React.ReactNode;
}

export default function StripeCard({ color, children }: StripeCardProps) {
  const bgVar = `--color-sk-${color}`;
  const lightBgVar = `--color-sk-${color}-light`;

  return (
    <div
      // style={{ backgroundColor: `var(${bgVar})` }}
      // className="overflow-hidden rounded-xl border border-solid border-border w-full md:max-w-xl p-4 aspect-[3/2] group relative spacing-section"
      // className={`${bgVar}`}
      className="bg-purple-300"
    >
      <div
        style={{ backgroundColor: `var(${lightBgVar})` }}
        className="absolute w-[200%] h-10 group-hover:h-11 bottom-[5%] left-[-15%] group-hover:left-[-18%] -rotate-45 z-0 transition-all duration-300"
      />
      <div
        style={{ backgroundColor: `var(${lightBgVar})` }}
        className="absolute w-[200%] h-[200px] group-hover:h-11 bottom-[5%] left-[-2%] group-hover:left-[-5%] -rotate-45 z-0 transition-all duration-300"
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
