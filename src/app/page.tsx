import Features from "@/sections/Features";
import Testimonials from "@/sections/Testimonials";
import FinalCTA from "@/sections/FinalCTA";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-sans min-h-screen overflow-hidden">
      {/* Global blue gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900/50 via-blue-800/30 to-indigo-900/50 -z-10" />
      
      {/* Animated background elements for entire page */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>
      
      <Navbar />
      <main className="flex flex-col relative z-10 pt-20">
        {/* Landing Section with Glassmorphism */}
        <div className="w-full min-h-[85vh] relative overflow-hidden flex items-center justify-center gap-6 px-4 text-white pt-4 pb-8">
          {/* Content */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-8 w-full max-w-7xl mx-auto">
            {/* Left side - Text content */}
            <div className="flex-1 text-center lg:text-left w-full">
              <div className="glass-card p-4 md:p-6 rounded-2xl overflow-hidden md:block hidden">
                <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Turn pushup tracking into <span className="text-blue-300">strength building</span>
                </h1>
                <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 mb-4 md:mb-6 max-w-2xl mx-auto lg:mx-0">
                  Ready to transform your pushup training? Rep AI makes it simple to track your progress, compete with friends, and get AI powered insights to build real strength.
                </p>
                <div className="flex justify-center lg:justify-start items-center">
                  <a href="https://apps.apple.com/us/app/rep-ai/id6749606746?itscg=30200&itsct=apps_box_badge&mttnsubad=6749606746" target="_blank" rel="noopener noreferrer" style={{display: 'inline-block'}}>
                    <img src="https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/en-us?releaseDate=1755820800" alt="Download on the App Store" style={{width: '160px', height: '53px', verticalAlign: 'middle', objectFit: 'contain'}} />
                  </a>
                </div>
              </div>
              
              {/* Mobile version without container */}
              <div className="md:hidden px-4">
                <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Turn pushup tracking into <span className="text-blue-300">strength building</span>
                </h1>
                <p className="text-lg text-white/90 mb-6">
                  Ready to transform your pushup training? Rep AI makes it simple to track your progress, compete with friends, and get AI powered insights to build real strength.
                </p>
                <div className="flex justify-center items-center">
                  <a href="https://apps.apple.com/us/app/rep-ai/id6749606746?itscg=30200&itsct=apps_box_badge&mttnsubad=6749606746" target="_blank" rel="noopener noreferrer" style={{display: 'inline-block'}}>
                    <img src="https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/en-us?releaseDate=1755820800" alt="Download on the App Store" style={{width: '180px', height: '60px', verticalAlign: 'middle', objectFit: 'contain'}} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Right side - Video */}
            <div className="flex-1 flex justify-center lg:justify-end w-full">
              <div className="w-full items-center justify-center relative">
                {/* Video container */}
                <div className="flex items-center justify-center">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="mx-auto w-[250px] md:w-[300px] lg:w-[350px] shadow-xl shadow-blue-500/20 border-4 border-solid border-white/20 rounded-[2rem]"
                    style={{ aspectRatio: '9/15', objectFit: 'cover' }}
                  >
                    <source src="/features/Rep AI Promo (male).mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <Features />
          <Testimonials />
          <FinalCTA />
        </div>
      </main>

      <Footer />
    </div>
  );
}
