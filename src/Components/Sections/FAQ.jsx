"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import AccordionItem from "@/components/ui/AccordionItem";
import Button from "@/components/ui/Button";
import { faqCategories, faqs } from "@/lib/data";

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState(faqCategories[0]);

  const filteredFaqs = faqs.filter((faq) => faq.category === activeCategory);

  return (
    <section id="faqs" className="py-16 bg-charcoal/5">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading title="Frequently Asked" highlight="Questions" />

        <div className="grid md:grid-cols-[220px_1fr] gap-8">
          {/* Category sidebar */}
          <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
            {faqCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                  activeCategory === category
                    ? "bg-charcoal text-white"
                    : "bg-white text-charcoal/70 border border-charcoal/10 hover:border-amber"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Questions + CTA */}
          <div>
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => (
                <AccordionItem key={faq.question} question={faq.question} answer={faq.answer} />
              ))
            ) : (
              <p className="text-sm text-muted">No questions in this category yet.</p>
            )}
            <div className="mt-6">
              <Button href="#enquire">Enquire Now</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}