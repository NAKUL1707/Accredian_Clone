"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          title="Testimonials from"
          highlight="Our Partners"
          subtitle="What Our Clients Are Saying"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.partner}
              className={`bg-white border rounded-xl p-6 transition-all duration-200 ${
                index === activeIndex ? "border-amber shadow-md" : "border-charcoal/10"
              }`}
            >
              <p className="font-bold text-charcoal/40 text-sm mb-3">{testimonial.partner}</p>
              <p className="text-sm text-muted leading-relaxed">{testimonial.quote}</p>
            </div>
          ))}
        </div>

        {/* Dot navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.partner}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show testimonial ${index + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 ${
                index === activeIndex ? "bg-amber" : "bg-charcoal/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}