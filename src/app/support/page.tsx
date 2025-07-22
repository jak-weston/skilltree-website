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
    } catch (err) {
      setError("There was an error submitting your request. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-sans">
      <main className="flex flex-col">
        <Navbar />
        <div className="w-full min-h-[60vh] flex flex-col items-center justify-center gap-6 border-b border-border border-solid px-4 text-white bg-background pb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mt-12 mb-2">Support</h1>
          <p className="max-w-xl text-center text-lg text-white/90 mb-4">
            Need help or have questions? Fill out the form below and our support team will get back to you as soon as possible.
          </p>
          <form onSubmit={handleSubmit} className="w-full max-w-2xl flex flex-col gap-4 bg-secondary/30 rounded-xl p-6 border border-border pb-12">
            <Input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={e => setFullName(e.target.value)}
              required
            />
            <Input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <div>
              <label className="block mb-1 text-sm">Type of Issue</label>
              <Select value={issueType} onValueChange={setIssueType}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select an issue type" />
                </SelectTrigger>
                <SelectContent>
                  {ISSUE_TYPES.map((type) => (
                    <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {issueType === "Other" && (
              <Input
                type="text"
                placeholder="Describe your issue"
                value={otherIssue}
                onChange={e => setOtherIssue(e.target.value)}
                required
              />
            )}
            <Input
              type="text"
              placeholder="Device & Browser Info (e.g. iPhone 14, Chrome)"
              value={deviceInfo}
              onChange={e => setDeviceInfo(e.target.value)}
              required
            />
            <textarea
              className="rounded-md border border-border bg-background px-3 py-2 text-base text-white placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] min-h-[100px]"
              placeholder="Describe the issue in detail"
              value={description}
              onChange={e => setDescription(e.target.value)}
              required
            />
            <div>
              <label className="block mb-1 text-sm">Priority Level</label>
              <Select value={priority} onValueChange={setPriority}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a priority" />
                </SelectTrigger>
                <SelectContent>
                  {PRIORITY_LEVELS.map((level) => (
                    <SelectItem key={level.value} value={level.value}>{level.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {success && <div className="text-green-400 text-center">{success}</div>}
            {error && <div className="text-red-400 text-center">{error}</div>}
            <Button type="submit" disabled={loading} className="mt-2">
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
} 