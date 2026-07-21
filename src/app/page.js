// src/app/page.js
import AccredianEdge from "@/Components/Sections/AccredianEdge";
import CATFramework from "@/Components/Sections/CATframework";
import CTABanner from "@/Components/Sections/CTABanner";
import CustomCourses from "@/Components/Sections/CustomCourses";
import DeliverResults from "@/Components/Sections/DeliverResults";
import DomainExpertise from "@/Components/Sections/DomainExpertise";
import FAQ from "@/Components/Sections/FAQ";
import Hero from "@/components/sections/Hero";
import Partnerships from "@/Components/Sections/Partnership";
import SkillEnhancement from "@/Components/Sections/SkillEnhancement";
import Testimonials from "@/Components/Sections/Testimonials";
import TrackRecord from "@/components/sections/TrackRecord";
import EnquireForm from "@/Components/Sections/EnquireForm";

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