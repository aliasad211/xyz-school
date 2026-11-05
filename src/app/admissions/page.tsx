import type { Metadata } from "next";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import AdmissionForm from "@/components/forms/AdmissionForm";
import { admissionSteps, faqs, feeStructure, requiredDocuments } from "@/lib/data";
import { stagger } from "@/lib/stagger";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Apply online for admission to XYZ School for the 2026–27 session. View the admission process, required documents and fee structure.",
  alternates: { canonical: "/admissions" },
};

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        title="Admissions"
        text="Admissions are open for the 2026–27 academic session. Join a community that inspires excellence."
        image="/images/senior.jpg"
        crumb="Admissions"
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="How to Apply"
            title="Simple 4-Step Admission Process"
            text="We have made applying to XYZ School quick and transparent."
          />
          <div className="grid grid-4 steps">
            {admissionSteps.map((s, i) => (
              <article key={s.title} className="card step reveal" style={stagger(i * 100)}>
                <span className={`icon-badge${i % 2 ? " icon-badge--green" : ""}`}>
                  <Icon name={(["file", "cap", "users", "check"] as const)[i]} />
                </span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container contact-wrap">
          <div className="stack">
            <div className="reveal">
              <span className="eyebrow">Requirements</span>
              <h2>Documents Required</h2>
              <p className="text-muted">Please bring the following documents at the time of the entrance assessment.</p>
              <ul className="check-list">
                {requiredDocuments.map((d) => (
                  <li key={d}>
                    <Icon name="check" size={18} /> {d}
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal">
              <h3>Fee Structure 2026–27</h3>
              <div className="table-wrap">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Level</th>
                      <th scope="col">Admission</th>
                      <th scope="col">Monthly</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feeStructure.map((f) => (
                      <tr key={f.level}>
                        <td>{f.level}</td>
                        <td>{f.admission}</td>
                        <td>{f.monthly}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="note">* Sibling discounts available. Transport and uniform charged separately.</p>
            </div>
          </div>

          <AdmissionForm />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="FAQs" title="Frequently Asked Questions" />
          <div className="faq">
            {faqs.map((f) => (
              <details key={f.q} className="reveal">
                <summary>
                  {f.q}
                  <Icon name="chevron" size={20} />
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
