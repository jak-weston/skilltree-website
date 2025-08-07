import { policy } from "@/content/privacy/policy";
import Markdown from "react-markdown";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
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
        
        <div className="w-full min-h-[60vh] flex flex-col items-center justify-center gap-6 px-4 text-white pb-16">
          <div className="text-center max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Privacy <span className="text-blue-300">Policy</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              How we protect and handle your data in Rep AI.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <div className="prose prose-invert prose-lg max-w-none prose-headings:font-sans prose-headings:font-semibold prose-headings:text-white prose-p:text-white/80 prose-a:text-blue-300 prose-strong:text-white">
              <Markdown>{policy}</Markdown>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
