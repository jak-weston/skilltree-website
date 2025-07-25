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
import emailValidator from "email-validator";
// import "./BetaTest.css";

const BetaTest: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("Yes");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailValidator.validate(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");

    const formActionUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSfC3cffiwCUqmdoIQhg5VFIWJ7J4k8wr75DuQ6mDANwbf9j8g/formResponse";

    const formData = new FormData();
    formData.append("entry.54944481", firstName);
    formData.append("entry.932744665", lastName);
    formData.append("entry.1954724458", email);
    formData.append("entry.1653876590", feedback);

    fetch(formActionUrl, {
      method: "POST",
      body: formData,
      mode: "no-cors",
    })
      .then(() => {
        alert("Form submitted successfully!");
        setFirstName("");
        setLastName("");
        setEmail("");
        setFeedback("Yes");
      })
      .catch((err) => console.error("Form submission error:", err));
  };

  return (
    <div className="max-w-md">
      <h2 className="text-center">Beta Test Signup</h2>
      <p className="text-center">
        Join our beta test to help shape the future of Skilltree!
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-3">
        <label>
          <Input
            type="text"
            value={firstName}
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>

        <label>
          <Input
            type="text"
            value={lastName}
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>

        <label>
          <Input
            type="email"
            value={email}
            placeholder="name@example.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        {error && <p className="error-message">{error}</p>}

        <label>
          Are you willing to give feedback?
          <Select value={feedback} onValueChange={setFeedback}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Yes">Yes</SelectItem>
              <SelectItem value="No">No</SelectItem>
            </SelectContent>
          </Select>
        </label>

        <Button
          type="submit"
          variant="secondary"
          className="border border-border"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

const BetaTestSection: React.FC = () => {
  return (
    <div
      className="flex items-center justify-center flex-col my-16 spacing-section"
      id="collaborate"
    >
      <span className="chip">Join the Beta</span>

      <div className="container mx-auto  flex flex-col md:flex-row items-center justify-center gap-8">
        <BetaTest />
      </div>
    </div>
  );
};

export default BetaTestSection;
