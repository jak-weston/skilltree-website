"use client";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BetaTest() {
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
        <div className="w-full h-[78vh] relative overflow-hidden flex items-center justify-center flex-col gap-6 px-4 text-white">
          {/* Content */}
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <div className="glass-card p-8 mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Download <span className="text-blue-300">Rep AI</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
                Rep AI is now live on the App Store! Download the app and start tracking your pushups with AI-powered analytics and competitive features.
              </p>
              <div className="flex justify-center items-center">
                <a href="https://apps.apple.com/us/app/rep-ai/id6749606746?itscg=30200&itsct=apps_box_badge&mttnsubad=6749606746" target="_blank" rel="noopener noreferrer" style={{display: 'inline-block'}}>
                  <img src="https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/en-us?releaseDate=1755820800" alt="Download on the App Store" style={{width: '180px', height: '60px', verticalAlign: 'middle', objectFit: 'contain'}} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center py-12">
            <div className="glass-card p-8 w-full max-w-2xl">
              <h2 className="text-2xl font-semibold mb-6 text-white">What You Get</h2>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-center gap-3">
                  <span className="text-blue-400">✓</span>
                  <span>Smart pushup tracking with AI form analysis</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-400">✓</span>
                  <span>Competitive duals with friends</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-400">✓</span>
                  <span>Progress tracking and analytics</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-400">✓</span>
                  <span>Social leaderboards and community features</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-400">✓</span>
                  <span>Free basic features with Pro upgrade available</span>
                </li>
                </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}