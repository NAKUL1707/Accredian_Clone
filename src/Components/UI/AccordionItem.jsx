"use client";

import { useState } from "react";

export default function AccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-charcoal/10 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left"
      >
        <span className="font-medium text-charcoal text-sm">{question}</span>
        <span className={`text-amber transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
          ▾
        </span>
      </button>
      {isOpen && (
        <p className="text-sm text-muted mt-3 animate-fade-up">{answer}</p>
      )}
    </div>
  );
}