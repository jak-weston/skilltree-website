"use client";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useState } from "react";

export default function BetaTest() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("yes");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    const formData = new FormData();
    formData.append("entry.110262845", firstName);
    formData.append("entry.1687157273", lastName);
    formData.append("entry.644514679", email);
    formData.append("entry.108978292", feedback);

    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLScvZwZzETDiZuumiR6wM_vYBhDOvdY9jH23U0-aIngWf6XMsA/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          body: formData,
        }
      );
      setSuccess("Thank you for signing up! We&apos;ll be in touch soon.");
      setFirstName("");
      setLastName("");
      setEmail("");
      setFeedback("yes");
    } catch {
      setError("There was an error submitting your request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
                Join the <span className="text-blue-300">Beta</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
                Be among the first to experience Rep AI&apos;s intelligent pushup analytics. Help shape the future of fitness tracking and get early access to exclusive features.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto">
            <div className="glass-card p-8">
              <h2 className="text-2xl font-semibold mb-6 text-white">Beta Test Signup</h2>
              
              {success && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300">
                  {success}
                </div>
              )}
              
              {error && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      First Name *
                    </label>
                    <Input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      className="glass-input text-white placeholder:text-white/60"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Last Name *
                    </label>
                    <Input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                      className="glass-input text-white placeholder:text-white/60"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="glass-input text-white placeholder:text-white/60"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Are you willing to give feedback? *
                  </label>
                  <Select value={feedback} onValueChange={setFeedback}>
                    <SelectTrigger className="glass-input text-white">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent className="glass-select-content">
                      <SelectItem value="yes" className="glass-select-item">Yes</SelectItem>
                      <SelectItem value="no" className="glass-select-item">No</SelectItem>
                      <SelectItem value="maybe" className="glass-select-item">Maybe</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full glass-button text-white hover:text-blue-300"
                >
                  {loading ? "Submitting..." : "Sign Up for Beta"}
                </Button>
              </form>
            </div>
          </div>

          {/* Additional Content */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">What You&apos;ll Get</h3>
                <ul className="text-white/80 space-y-2">
                  <li>• Early access to all features</li>
                  <li>• Direct feedback channel to developers</li>
                  <li>• Exclusive beta tester badge</li>
                  <li>• Priority support and updates</li>
                </ul>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">What We Need</h3>
                <ul className="text-white/80 space-y-2">
                  <li>• Honest feedback on features</li>
                  <li>• Bug reports and suggestions</li>
                  <li>• Usage patterns and preferences</li>
                  <li>• Ideas for future improvements</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
