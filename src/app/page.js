// src/app/page.js
import AccredianEdge from "@/components/Sections/AccredianEdge";
import CATFramework from "@/components/Sections/CATframework";
import CTABanner from "@/components/Sections/CTABanner";
import CustomCourses from "@/components/Sections/CustomCourses";
import DeliverResults from "@/components/Sections/DeliverResults";
import DomainExpertise from "@/components/Sections/DomainExpertise";
import FAQ from "@/components/Sections/FAQ";
import Hero from "@/components/Sections/Hero";
import Partnerships from "@/components/Sections/Partnerships";
import SkillEnhancement from "@/components/Sections/SkillEnhancement";
import Testimonials from "@/components/Sections/Testimonials";
import TrackRecord from "@/components/Sections/TrackRecord";
import EnquireForm from "@/components/Sections/EnquireForm";

export default function Home() {
  return (
    <>
      <Hero />
      <TrackRecord />
      <Partnerships />
      <AccredianEdge />
      <DomainExpertise/>
      <CustomCourses/>
      <SkillEnhancement/>
      <CATFramework/>
      <DeliverResults/>
      <FAQ/>
      <Testimonials/>
      <EnquireForm />
      <CTABanner/>

    </>
  );
}