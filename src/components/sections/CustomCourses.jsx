import Image from "next/image";
import SectionHeading from "@/components/UI/SectionHeading";
import { courses } from "@/lib/data";

export default function CustomCourses() {
  return (
    <section className="py-16 bg-charcoal/5">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          subtitle="Explore Custom-fit Courses Designed to Address Every Professional Focus"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {courses.map((course) => (
            <div
              key={course.title}
              className="bg-white rounded-xl overflow-hidden border border-charcoal/10 hover:shadow-md hover:scale-[1.02] transition-all duration-200"
            >
              <div className="relative w-full h-32">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <p className="font-semibold text-charcoal text-sm">{course.title}</p>
                <p className="text-xs text-muted mt-1">{course.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}