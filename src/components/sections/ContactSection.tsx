import ContactInfo from "../ContactInfo";
import SectionHeading from "../SectionHeading";
import ContactForm from "../forms/ContactForm";

/** Home page contact block: info panel + quick contact form. */
export default function ContactSection() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <SectionHeading
          eyebrow="Contact Us"
          title="We'd Love to Hear From You"
          text="Have a question about admissions, fees or our programmes? Reach out and our team will help."
        />
        <div className="contact-wrap">
          <div className="contact-panel reveal">
            <h3>Contact Information</h3>
            <p>Visit our campus or get in touch through any of the channels below.</p>
            <ContactInfo />
          </div>
          <ContactForm compact />
        </div>
      </div>
    </section>
  );
}
