import { HomeCopy as copy } from "@/content";
import Features from "@/sections/Features";
import Benefits from "@/sections/Benefits";
import Demo from "@/sections/Demo";
import Testimonials from "@/sections/Testimonials";
import Pricing from "@/sections/Pricing";
import FAQ from "@/sections/FAQ";
import FinalCTA from "@/sections/FinalCTA";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import BetaTestSection from "@/components/BetaTestSignUp";

export default function Home() {
  return (
    <div className="font-sans">
      <main className="flex flex-col">
        <Navbar />
        {/* Landing Section with Clipped BG */}
        <div className="w-full h-[78vh] relative overflow-hidden flex items-center justify-center flex-col gap-3 border-b border-border border-solid px-4 text-white">
          {/* Background inside, positioned absolutely */}
          <div className="bg-scroll-left" />
          <h1 className="max-w-2xl text-center text-5xl z-10 ">
            Move Better. Train Smarter. Progress with <i>Purpose.</i>
          </h1>
          <p className="max-w-xl text-center z-10 text-lg text-white/95">
            {copy.hero.subheader}
          </p>
          <div className="inline-flex gap-2 items-center z-10">
            <Button>Download</Button>
            <Button variant={"secondary"}>Learn More</Button>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <Benefits />
          <Features />
          <Testimonials />
          <Demo />
          <Pricing />
          <BetaTestSection />
          <FinalCTA />
          <FAQ />
        </div>
      </main>

      <Footer />
    </div>
  );
}
