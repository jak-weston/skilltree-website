"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";

const BetaTest: React.FC = () => {
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
      setSuccess("Thank you for signing up! We'll be in touch soon.");
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
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300 text-sm">
          {error}
        </div>
      )}
      {success && (
        <div className="p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300 text-sm">
          {success}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            First Name
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
            Last Name
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
          Email
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
          Are you willing to give feedback?
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
        className="w-full glass-button text-white hover:text-white font-bold shadow-lg hover:shadow-blue-500/25"
      >
        {loading ? "Submitting..." : "Sign Up for Beta"}
      </Button>
    </form>
  );
};

const BetaTestSection: React.FC = () => {
  return (
    <section className="spacing-section">
      <div className="flex flex-col items-center justify-center">
        <span className="chip">Beta Test</span>
        <h2 className="text-center text-white bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
          Join the Beta
        </h2>
        <p className="text-center text-white/80 mb-6">
          Join our beta test to help shape the future of Rep AI pushup analytics!
        </p>
        <div className="glass-card p-8 w-full max-w-lg">
          <BetaTest />
        </div>
      </div>
    </section>
  );
};

const BetaTestForm: React.FC = () => {
  return (
    <div className="w-full max-w-lg mx-auto">
      <BetaTest />
    </div>
  );
};

export default BetaTestSection;
export { BetaTestForm };
