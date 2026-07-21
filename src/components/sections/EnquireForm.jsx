import SectionHeading from "@/components/UI/SectionHeading";
import LeadForm from "@/components/LeadForm";

export default function EnquireForm() {
  return (
    <section id="enquire" className="py-16 bg-charcoal/5">
      <div className="max-w-md mx-auto px-6">
        <SectionHeading title="Get in" highlight="Touch" subtitle="Tell us about your team's training needs" />
        <LeadForm />
      </div>
    </section>
  );
}