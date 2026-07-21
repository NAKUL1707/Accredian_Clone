import SectionHeading from "@/components/ui/SectionHeading";
import { deliverySteps } from "@/lib/data";

export default function DeliverResults() {
  return (
    <section id="how-it-works" className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          title="How We Deliver"
          highlight="Results"
          subtitle="A Structured Three-Step Approach to Skill Development"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deliverySteps.map((step) => (
            <div
              key={step.number}
              className="relative bg-white border border-charcoal/10 rounded-xl p-6 hover:shadow-md hover:scale-[1.02] transition-all duration-200"
            >
              <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-amber text-white text-sm font-bold flex items-center justify-center">
                {step.number}
              </div>
              <p className="font-semibold text-charcoal mt-3 mb-2">{step.title}</p>
              <p className="text-sm text-muted">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}