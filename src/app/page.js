// src/app/page.js
import AccredianEdge from "@/components/sections/AccredianEdge";
import CATFramework from "@/components/sections/CATframework";
import CTABanner from "@/components/sections/CTABanner";
import CustomCourses from "@/components/sections/CustomCourses";
import DeliverResults from "@/components/sections/DeliverResults";
import DomainExpertise from "@/components/sections/DomainExpertise";
import FAQ from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import Partnerships from "@/components/sections/Partnerships";
import SkillEnhancement from "@/components/sections/SkillEnhancement";
import Testimonials from "@/components/sections/Testimonials";
import TrackRecord from "@/components/sections/TrackRecord";
import EnquireForm from "@/components/sections/EnquireForm";

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