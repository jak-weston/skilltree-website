"use client";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function Blog() {
  useEffect(() => {
    // Load Supascribe script dynamically
    const script = document.createElement('script');
    script.src = 'https://js.supascribe.com/v1/loader/DWOAK03c4he9ofX0v15yrk6gQzI2.js';
    script.async = true;
    document.head.appendChild(script);
  }, []);

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
      
      <main className="flex flex-col relative z-10">
        <Navbar />
        
        {/* Landing Section with Glassmorphism */}
        <div className="w-full h-[78vh] relative overflow-hidden flex items-center justify-center flex-col gap-6 px-4 text-white">
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <div className="glass-card p-8 mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Rep AI <span className="text-blue-300">Blog</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
                Insights, tips, and updates on pushup training, AI fitness analytics, and building strength with purpose.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          {/* Blog Content */}
          <div className="max-w-4xl mx-auto py-16">
            {/* Supascribe Embed */}
            <div className="glass-card p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">Latest Updates</h2>
              <div data-supascribe-embed-id="29698066869" data-supascribe-feed></div>
            </div>

            {/* Additional Content */}
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">Training Tips</h3>
                <p className="text-white/80 mb-4">
                  Get the latest tips on pushup training, form improvement, and progress tracking with AI analytics.
                </p>
                <Button variant="outline" className="glass-button border-white/20 text-white hover:text-blue-300" asChild>
                  <a href="https://skilltreefitness.substack.com/" target="_blank" rel="noopener noreferrer">
                    Read More
                  </a>
                </Button>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">App Updates</h3>
                <p className="text-white/80 mb-4">
                  Stay updated on new features, improvements, and behind-the-scenes development of Rep AI.
                </p>
                <Button variant="outline" className="glass-button border-white/20 text-white hover:text-blue-300" asChild>
                  <a href="https://skilltreefitness.substack.com/" target="_blank" rel="noopener noreferrer">
                    Read More
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 