import Image from "next/image";
import { audiences } from "@/lib/data";

export default function SkillEnhancement() {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-charcoal rounded-2xl overflow-hidden grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
          {/* Left: image + heading */}
          <div className="flex flex-col gap-4">
            <p className="text-amber font-semibold text-sm uppercase tracking-wide">
              Who Should Join?
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Strategic Skill Enhancement
            </h3>
            <div className="relative w-full h-56 rounded-xl overflow-hidden mt-2">
              <Image
                src="/images/skill_enrichment.jpg"
                alt="Professionals collaborating"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: 2x2 audience grid */}
          <div className="grid grid-cols-2 gap-6">
            {audiences.map((audience) => (
              <div key={audience.title} className="flex flex-col gap-1">
                <div className="mb-1 flex items-center justify-start text-amber">
                  <div className="w-7 h-7 flex items-center justify-center">{audience.icon}</div>
                </div>
                <p className="font-semibold text-white text-sm">{audience.title}</p>
                <p className="text-xs text-cream/70">{audience.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}