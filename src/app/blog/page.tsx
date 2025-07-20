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
    <div className="font-sans">
      <main className="flex flex-col">
        <Navbar />
        
        {/* Landing Section with Clipped BG */}
        <div className="w-full h-[78vh] relative overflow-hidden flex items-center justify-center flex-col gap-3 border-b border-border border-solid px-4 text-white">
          {/* Background inside, positioned absolutely */}
          <div className="bg-scroll-left" />
          
          <h1 className="max-w-2xl text-center text-5xl z-10">
            SkillTree <span className="text-accent">Blog</span>
          </h1>
          <p className="max-w-xl text-center z-10 text-lg text-white/95">
            Insights, tips, and updates on calisthenics training, AI fitness, and building strength with purpose.
          </p>
        </div>

        <div className="container mx-auto px-4">
          {/* Blog Content */}
          <div className="max-w-4xl mx-auto py-16">
            {/* Supascribe Embed */}
            <div className="bg-[#1d1c21] border rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Latest Updates</h2>
              <div data-supascribe-embed-id="29698066869" data-supascribe-feed></div>
            </div>

            {/* Additional Content */}
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Training Tips</h3>
                <p className="text-muted-foreground mb-4">
                  Get the latest tips on calisthenics training, form improvement, and progress tracking.
                </p>
                <Button variant="outline" asChild>
                  <a href="https://skilltreefitness.substack.com/" target="_blank" rel="noopener noreferrer">
                    Read More
                  </a>
                </Button>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">App Updates</h3>
                <p className="text-muted-foreground mb-4">
                  Stay updated on new features, improvements, and behind-the-scenes development.
                </p>
                <Button variant="outline" asChild>
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