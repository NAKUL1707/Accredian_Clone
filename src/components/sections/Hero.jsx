import Image from "next/image";
import { Check } from "lucide-react";
import Button from "@/components/ui/Button";

const bullets = ["Tailored Solutions", "Industry Insights", "Expert Guidance"];

export default function Hero() {
  return (
    <section id="home" className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-charcoal leading-tight mb-6">
          Next-Gen <span className="text-amber">Expertise</span> For Your{" "}
          <span className="text-amber">Enterprise</span>
        </h1>
        <p className="text-muted text-lg mb-6">
          Cultivate high-performance teams through expert learning.
        </p>
        <ul className="flex flex-wrap gap-4 mb-8">
          {bullets.map((item) => (
            <li key={item} className="flex items-center gap-2 text-charcoal text-sm font-medium">
              <Check className="w-4 h-4 text-amber" /> {item}
            </li>
          ))}
        </ul>
        <Button href="#enquire">Enquire Now</Button>
      </div>

      <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-sm">
        <Image
          src="/images/hero_photo.jpg"
          alt="Accredian enterprise team"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}