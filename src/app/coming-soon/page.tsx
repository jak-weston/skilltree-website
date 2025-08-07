import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { FaRegClock, FaRegEnvelope } from "react-icons/fa6";

export default function ComingSoon() {
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
                Coming <span className="text-blue-300">Soon</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
                We&apos;re working hard to bring you the smartest way to track pushups and compete with friends. 
                Get ready to build strength, master skills, and transform your fitness journey.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button size="lg" className="glass-button text-white hover:text-white text-lg px-8 py-3 font-bold shadow-2xl hover:shadow-blue-500/25" asChild>
                  <a href="https://skilltreefitness.substack.com/" target="_blank" rel="noopener noreferrer">
                    <FaRegEnvelope className="mr-2" />
                    Join Waitlist
                  </a>
                </Button>
              </div>

              <div className="flex items-center justify-center gap-2 text-white/70">
                <FaRegClock className="text-blue-300" />
                <span className="text-sm">Expected Launch: Q3 2025</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          {/* Features Preview */}
          <div className="py-16">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <span className="chip">What&apos;s Coming</span>
              </div>
              <h2 className="mt-4 mb-6 text-white bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Track Smarter, Not Harder</h2>
              <p className="max-w-2xl mx-auto text-lg text-white/80">
                Rep AI combines AI-powered analytics with proven pushup progressions 
                to help you build real strength and master new skills.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "AI Form Analysis",
                  description: "Get real-time feedback on your pushup technique to prevent injuries and maximize results.",
                  icon: "🤖",
                  color: "purple"
                },
                {
                  title: "Competitive Duals",
                  description: "Challenge friends to head-to-head pushup competitions with live tracking and leaderboards.",
                  icon: "🏆",
                  color: "green"
                },
                {
                  title: "Progress Analytics",
                  description: "Adaptive insights that adjust to your progress, goals, and available time.",
                  icon: "📊",
                  color: "orange"
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="glass-card p-6 text-center hover:scale-105 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-white/80">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="py-16">
            <div className="text-center">
              <h2 className="mb-6 text-white bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Be First to Know</h2>
              <p className="max-w-xl mx-auto mb-8 text-white/80">
                Join our waitlist and get early access when we launch. 
                Plus, receive exclusive updates and behind-the-scenes content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="glass-button text-white hover:text-white text-lg px-8 py-3 font-bold shadow-2xl hover:shadow-blue-500/25" asChild>
                  <a href="https://skilltreefitness.substack.com/" target="_blank" rel="noopener noreferrer">
                    <FaRegEnvelope className="mr-2" />
                    Join Waitlist
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