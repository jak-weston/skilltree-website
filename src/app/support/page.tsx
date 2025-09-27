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

const ISSUE_TYPES = [
  { value: "Website not loading or broken", label: "Website not loading or broken" },
  { value: "Login/sign-up issue", label: "Login/sign-up issue" },
  { value: "Content is incorrect or outdated", label: "Content is incorrect or outdated" },
  { value: "Feature not working as expected", label: "Feature not working as expected" },
  { value: "Mobile responsiveness issue", label: "Mobile responsiveness issue" },
  { value: "UI/UX feedback or suggestion", label: "UI/UX feedback or suggestion" },
  { value: "Other", label: "Other (describe below)" },
];

const PRIORITY_LEVELS = [
  { value: "Low", label: "Low" },
  { value: "Medium", label: "Medium" },
  { value: "High", label: "High" },
];

export default function Support() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [issueType, setIssueType] = useState(ISSUE_TYPES[0].value);
  const [otherIssue, setOtherIssue] = useState("");
  const [description, setDescription] = useState("");
  const [deviceInfo, setDeviceInfo] = useState("");
  const [priority, setPriority] = useState(PRIORITY_LEVELS[0].value);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Google Form entry IDs
  const ENTRY = {
    fullName: "entry.110262845",
    email: "entry.1687157273",
    issueType: "entry.644514679",
    otherIssue: "entry.644514679.other_option_response",
    description: "entry.108978292",
    deviceInfo: "entry.1254630050",
    priority: "entry.1635996446",
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess("");
    setError("");
    setLoading(true);

    const formData = new FormData();
    formData.append(ENTRY.fullName, fullName);
    formData.append(ENTRY.email, email);
    formData.append(ENTRY.issueType, issueType);
    if (issueType === "Other") {
      formData.append(ENTRY.otherIssue, otherIssue);
    }
    formData.append(ENTRY.description, description);
    formData.append(ENTRY.deviceInfo, deviceInfo);
    formData.append(ENTRY.priority, priority);

    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLScvZwZzETDiZuumiR6wM_vYBhDOvdY9jH23U0-aIngWf6XMsA/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          body: formData,
        }
      );
      setSuccess("Your support request has been submitted! We'll get back to you soon.");
      setFullName("");
      setEmail("");
      setIssueType(ISSUE_TYPES[0].value);
      setOtherIssue("");
      setDescription("");
      setDeviceInfo("");
      setPriority(PRIORITY_LEVELS[0].value);
    } catch {
      setError("There was an error submitting your request. Please try again later.");
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
      
      <Navbar />
      <main className="flex flex-col relative z-10 pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto">
            <div className="glass-card p-8">
              <h2 className="text-2xl font-semibold mb-6 text-white">Contact Support</h2>
              
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
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      className="glass-input text-white placeholder:text-white/60"
                      placeholder="Your full name"
                    />
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
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Issue Type *
                  </label>
                  <Select value={issueType} onValueChange={setIssueType}>
                    <SelectTrigger className="glass-input text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="glass-select-content">
                      {ISSUE_TYPES.map((type) => (
                        <SelectItem key={type.value} value={type.value} className="glass-select-item">
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {issueType === "Other" && (
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Please describe your issue
                    </label>
                    <Input
                      type="text"
                      value={otherIssue}
                      onChange={(e) => setOtherIssue(e.target.value)}
                      className="glass-input text-white placeholder:text-white/60"
                      placeholder="Describe your issue..."
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Description *
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    rows={4}
                    className="w-full glass-input text-white placeholder:text-white/60 resize-none"
                    placeholder="Please provide a detailed description of your issue..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Device Information
                  </label>
                  <Input
                    type="text"
                    value={deviceInfo}
                    onChange={(e) => setDeviceInfo(e.target.value)}
                    className="glass-input text-white placeholder:text-white/60"
                    placeholder="Device, browser, OS (optional)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Priority Level
                  </label>
                  <Select value={priority} onValueChange={setPriority}>
                    <SelectTrigger className="glass-input text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="glass-select-content">
                      {PRIORITY_LEVELS.map((level) => (
                        <SelectItem key={level.value} value={level.value} className="glass-select-item">
                          {level.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full glass-button text-white hover:text-white font-bold shadow-lg hover:shadow-blue-500/25"
                >
                  {loading ? "Submitting..." : "Submit Support Request"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 