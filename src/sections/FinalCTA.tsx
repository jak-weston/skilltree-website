import { HomeCopy as copy } from "@/content";

export default function FinalCTA() {
  const { header, subheader } = copy.finalCta;

  return (
    <section id="final-cta" className="spacing-section-vertical text-white">
      <div className="w-full flex flex-col items-center justify-center text-center py-12 md:container glass-card relative overflow-hidden px-3">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-indigo-600/20 to-purple-600/20" />
        
        {/* Animated background elements */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-visible">
          <div className="absolute left-1/6 top-[-50%] h-[200%] w-[90px] bg-blue-400/20 rotate-45 animate-pulse" />
          <div className="absolute left-1/2 top-[-50%] h-[200%] w-[90px] bg-indigo-400/20 rotate-45 animate-pulse delay-500" />
          <div className="absolute left-5/6 top-[-50%] h-[200%] w-[90px] bg-purple-400/20 rotate-45 animate-pulse delay-1000" />
        </div>

        <h2 className="text-center md:text-left relative z-10 text-shadow-sm text-4xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
          {header}
        </h2>
        <p className="text-center md:text-left mt-2 text-white/90 text-xl relative z-10 text-shadow-sm">
          {subheader}
        </p>

        <div className="mt-8 flex justify-center items-center relative z-10">
          <a href="https://apps.apple.com/us/app/rep-ai/id6749606746?itscg=30200&itsct=apps_box_badge&mttnsubad=6749606746" target="_blank" rel="noopener noreferrer" style={{display: 'inline-block'}}>
            <img src="https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/en-us?releaseDate=1755820800" alt="Download on the App Store" style={{width: '180px', height: '60px', verticalAlign: 'middle', objectFit: 'contain'}} />
          </a>
        </div>
      </div>
    </section>
  );
}
