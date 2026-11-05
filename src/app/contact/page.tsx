import type { Metadata } from "next";
import ContactInfo from "@/components/ContactInfo";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/forms/ContactForm";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact XYZ School in Lahore. Call ${site.phone}, email ${site.email} or visit our campus.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        text="Questions about admissions, fees or campus visits? Our team is here to help."
        image="/images/library.jpg"
        crumb="Contact Us"
      />

      <section className="section">
        <div className="container contact-wrap">
          <div className="contact-panel reveal">
            <h2>Get in Touch</h2>
            <p>Visit our campus during office hours or reach us by phone or email.</p>
            <ContactInfo />
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeading eyebrow="Find Us" title="Our Campus Location" />
          <iframe
            className="map-frame reveal"
            title="XYZ School location on Google Maps"
            src="https://www.google.com/maps?q=Gulberg+III,+Lahore&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <TestimonialsSection alt={false} />
    </>
  );
}
