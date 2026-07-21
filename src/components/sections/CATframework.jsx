import SectionHeading from "@/components/ui/SectionHeading";
import { catSteps } from "@/lib/data";

export default function CATFramework() {
  return (
    <section id="cat" className="py-16 bg-charcoal/5">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          title="The CAT"
          highlight="Framework"
          subtitle="Our Proven Approach to Learning Excellence"
        />
        <div className="relative flex justify-center items-center gap-6 md:gap-9">
          {/* connecting line behind the circles, desktop only */}
          <div className="hidden md:block absolute top-1/2 left-16 right-16 h-px bg-charcoal/15 -translate-y-1/2 -z-0" />

          {catSteps.map((step) => (
            <div
              key={step.title}
              className="relative z-10 w-40 h-40 md:w-48 md:h-48 rounded-full border-2 border-amber bg-cream flex flex-col items-center justify-center text-center p-4 -mx-2 md:-mx-4 "
            >
              <p className="font-bold text-charcoal text-lg mb-1">{step.title}</p>
              <p className="text-xs text-muted leading-snug">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}