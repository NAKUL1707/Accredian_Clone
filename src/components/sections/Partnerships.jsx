import SectionHeading from "@/components/UI/SectionHeading";
import { partners } from "@/lib/data";

export default function Partnership() {
  return (
    <section id="clients" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Our Proven"
          highlight="Partnerships"
          subtitle="Successful Collaborations With the Industry's Best"
        />
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {partners.map((name) => (
            <span
              key={name}
              className="text-xl font-bold text-charcoal/30 hover:text-charcoal/60 transition-colors duration-200"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}