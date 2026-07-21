import SectionHeading from "@/components/ui/SectionHeading";
import IconCard from "@/components/ui/IconCard";
import { domains } from "@/lib/data";

export default function DomainExpertise() {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          title="Our Domain"
          highlight="Expertise"
          subtitle="Specialized Programs Designed to Fuel Innovation"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {domains.map((domain) => (
            <IconCard key={domain.title} icon={domain.icon} title={domain.title} />
          ))}
        </div>
      </div>
    </section>
  );
}