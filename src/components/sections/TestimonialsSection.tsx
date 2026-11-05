import SectionHeading from "../SectionHeading";
import TestimonialCard from "../TestimonialCard";
import { testimonials } from "@/lib/data";

export default function TestimonialsSection({ alt = true }: { alt?: boolean }) {
  return (
    <section className={`section${alt ? " section--alt" : ""}`} id="testimonials">
      <div className="container">
        <SectionHeading
          eyebrow="Parent Testimonials"
          title="What Parents Say About Us"
          text="The trust of our parents is our biggest achievement."
        />
        <div className="grid grid-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} {...t} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}
