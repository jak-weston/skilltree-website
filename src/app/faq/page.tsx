"use client";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/sections/FAQ";

export default function FAQPage() {
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
        <div className="w-full h-[78vh] relative overflow-hidden flex items-center justify-center flex-col gap-6 px-4 text-white">
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <div className="glass-card p-8 mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Frequently Asked <span className="text-blue-300">Questions</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
                Everything you need to know about Rep AI, pushup tracking, and how to get the most out of the app.
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <FAQ />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
