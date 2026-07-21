import { Headphones } from "lucide-react";
import Button from "@/components/UI/Button";

export default function CTABanner() {
  return (
    <section className="py-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-charcoal rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-amber/20 flex items-center justify-center shrink-0 text-amber">
              <Headphones className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-white text-lg">
                Want to Learn More About Our Training Solutions?
              </p>
              <p className="text-cream/70 text-sm mt-1">
                Get Expert Guidance for Your Team's Success
              </p>
            </div>
          </div>
          <Button href="#enquire" variant="primary">
            Contact Us <span aria-hidden="true">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
}