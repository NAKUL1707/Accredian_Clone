"use client";

import { useState } from "react";

export default function LeadForm() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Submission failed");

      setStatus("success");
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white border border-amber rounded-xl p-6 text-center">
        <p className="font-semibold text-charcoal">Thanks! We'll be in touch soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-charcoal/10 rounded-xl p-6 flex flex-col gap-4">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="border border-charcoal/15 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber"
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        required
        className="border border-charcoal/15 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber"
      />
      <input
        type="text"
        name="company"
        placeholder="Company Name"
        value={formData.company}
        onChange={handleChange}
        className="border border-charcoal/15 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber"
      />
      <textarea
        name="message"
        placeholder="How can we help?"
        value={formData.message}
        onChange={handleChange}
        rows={3}
        className="border border-charcoal/15 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber resize-none"
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-amber hover:bg-amber-dark text-white font-semibold py-2.5 rounded-lg transition-colors duration-200 disabled:opacity-60"
      >
        {status === "loading" ? "Submitting..." : "Enquire Now"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong — please try again.</p>
      )}
    </form>
  );
}