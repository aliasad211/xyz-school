import type { Metadata } from "next";
import CtaBanner from "@/components/CtaBanner";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import AboutSection from "@/components/sections/AboutSection";
import FacilitiesSection from "@/components/sections/FacilitiesSection";
import StatsSection from "@/components/sections/StatsSection";
import { leadership, milestones, values } from "@/lib/data";
import { stagger } from "@/lib/stagger";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about XYZ School's history, mission, vision, values and leadership team. Serving students in Lahore since 1998.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About XYZ School"
        text="More than 25 years of nurturing young minds with knowledge, values and confidence."
        image="/images/campus.jpg"
        crumb="About Us"
      />

      <AboutSection showButton={false} />

      <section className="section section--alt">
        <div className="container">
          <SectionHeading eyebrow="Who We Are" title="Mission, Vision & Values" />
          <div className="grid grid-3">
            {values.map((v, i) => (
              <article key={v.title} className="card reveal" style={stagger(i * 100)}>
                <span className={`icon-badge${i === 1 ? " icon-badge--green" : ""}`}>
                  <Icon name={v.icon} />
                </span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Our Journey" title="Milestones Over the Years" />
          <ol className="timeline">
            {milestones.map((m) => (
              <li key={m.year} className="timeline__item reveal">
                <span className="timeline__year">{m.year}</span>
                <p>{m.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <StatsSection />

      <section className="section section--alt">
        <div className="container">
          <SectionHeading
            eyebrow="Leadership"
            title="Meet Our Leadership Team"
            text="Experienced educators who guide our school with vision and dedication."
          />
          <div className="grid grid-4">
            {leadership.map((p, i) => (
              <article key={p.name} className="card team-card reveal" style={stagger(i * 100)}>
                <span className="avatar" aria-hidden="true">
                  {p.initials}
                </span>
                <h3>{p.name}</h3>
                <p>{p.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FacilitiesSection showAll />

      <CtaBanner />
    </>
  );
}
