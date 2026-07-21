// src/components/sections/AccredianEdge.jsx
import SectionHeading from "@/components/ui/SectionHeading";
import { edgeSteps } from "@/lib/data";

export default function AccredianEdge() {
  return (
    <section id="accredian-edge" className="py-16 bg-charcoal/5">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="The Accredian"
          highlight="Edge"
          subtitle="Key Aspects of Our Strategic Training"
        />

        {/* Desktop: horizontal alternating timeline */}
        <div className="hidden md:flex relative justify-between items-center h-56 mt-10">
          {/* connecting line, vertically centered in this fixed-height row */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-charcoal/15 -translate-y-1/2" />

          {edgeSteps.map((step) => (
            <div key={step.title} className="relative flex-1 flex justify-center">
              {/* dot — always centered on the line, never moves */}
              <div className="w-4 h-4 rounded-full bg-amber ring-4 ring-cream z-10" />

              {/* text floats above or below the dot, doesn't affect dot position */}
              <div
                className={`absolute w-36 text-center ${
                  step.position === "top"
                    ? "bottom-full mb-3"
                    : "top-full mt-3"
                }`}
              >
                <p className="font-semibold text-charcoal text-sm mb-1">{step.title}</p>
                <p className="text-xs text-muted leading-snug">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: simple vertical stacked list */}
        <div className="md:hidden flex flex-col gap-6 mt-8">
          {edgeSteps.map((step) => (
            <div key={step.title} className="flex gap-4 items-start">
              <div className="w-3 h-3 mt-1.5 rounded-full bg-amber shrink-0" />
              <div>
                <p className="font-semibold text-charcoal text-sm">{step.title}</p>
                <p className="text-xs text-muted">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}