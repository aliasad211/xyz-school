import type { Metadata } from "next";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import FacilitiesSection from "@/components/sections/FacilitiesSection";
import Hero from "@/components/sections/Hero";
import ProgramsSection from "@/components/sections/ProgramsSection";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export const metadata: Metadata = { alternates: { canonical: "/" } };

// Homepage: the 8 required sections. Header (1) and Footer (8) come from the root layout.
export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProgramsSection />
      <FacilitiesSection />
      <StatsSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
