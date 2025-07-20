import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import BetaTestSection from "@/components/BetaTestSignUp";
import { FaRegClock, FaRegEnvelope, FaRegBell } from "react-icons/fa6";
import { FaRegKeyboard } from "react-icons/fa";
import { span } from "motion/react-client";

export default function ComingSoon() {
  return (
    <div className="font-sans">
      <main className="flex flex-col">
        <Navbar />
        
        {/* Landing Section with Clipped BG */}
        <div className="w-full h-[78vh] relative overflow-hidden flex items-center justify-center flex-col gap-6 border-b border-border border-solid px-4 text-white">
          {/* Background inside, positioned absolutely */}
          <div className="bg-scroll-left" />
          
          <div className="text-center z-10">
            <h1 className="max-w-3xl text-center text-5xl mb-6">
              Coming <span className="text-accent">Soon</span>
            </h1>
            <p className="max-w-2xl text-center z-10 text-xl text-white/95 mb-8">
              We're working hard to bring you the smartest way to learn calisthenics. 
              Get ready to build strength, master skills, and transform your fitness journey.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center z-10">
            <Button size="lg" className="text-lg px-8 py-3" asChild>
              <a href="https://skilltreefitness.substack.com/" target="_blank" rel="noopener noreferrer">
                <FaRegEnvelope className="mr-2" />
                Join Waitlist
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-2 text-white/70 z-10 mt-8">
            <FaRegClock className="text-accent" />
            <span className="text-sm">Expected Launch: Q3 2025</span>
          </div>
        </div>

        <div className="container mx-auto px-4">
          {/* Features Preview */}
          <div className="py-16">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <span className="chip">What's Coming</span>
              </div>
              <h2 className="mt-4 mb-6">Train Smarter, Not Harder</h2>
              <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
                Skilltree combines AI-powered guidance with proven calisthenics progressions 
                to help you build real strength and master new skills.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "AI Form Coach",
                  description: "Get real-time feedback on your technique to prevent injuries and maximize results.",
                  icon: "🤖",
                  color: "purple"
                },
                {
                  title: "Skill Trees",
                  description: "Follow clear progressions from beginner to advanced for every calisthenics skill.",
                  icon: "🌳",
                  color: "green"
                },
                {
                  title: "Personalized Plans",
                  description: "Adaptive workouts that adjust to your progress, goals, and available time.",
                  icon: "📊",
                  color: "orange"
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-6 text-center hover:border-accent/50 transition-colors"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="py-16">
            <div className="text-center">
              <h2 className="mb-6">Be First to Know</h2>
              <p className="max-w-xl mx-auto mb-8 text-muted-foreground">
                Join our waitlist and get early access when we launch. 
                Plus, receive exclusive updates and behind-the-scenes content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-3" asChild>
                  <a href="https://skilltreefitness.substack.com/" target="_blank" rel="noopener noreferrer">
                    <FaRegEnvelope className="mr-2" />
                    Join Waitlist
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-3" asChild>
                  <a href="/blog" rel="noopener noreferrer">
                    Learn More
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