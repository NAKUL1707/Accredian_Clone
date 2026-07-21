import SectionHeading from "@/components/UI/SectionHeading";
import StatCard from "@/components/ui/StatCard";
import { stats } from "@/lib/data";

export default function TrackRecord() {
  return (
    <section id="stats" className="bg-charcoal/5 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          title="Our"
          highlight="Track Record"
          subtitle="The Numbers Behind Our Success"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-charcoal/10">
          {stats.map((stat) => (
            <StatCard key={stat.label} number={stat.number} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}