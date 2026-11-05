import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBanner from "@/components/CtaBanner";
import Icon, { type IconName } from "@/components/Icon";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { programs } from "@/lib/data";
import { stagger } from "@/lib/stagger";

export const metadata: Metadata = {
  title: "Academics",
  description:
    "Explore XYZ School's academic programmes: Early Years, Primary, Middle School and Senior Secondary (Matric, FSc, O/A Level).",
  alternates: { canonical: "/academics" },
};

const approach: { icon: IconName; title: string; text: string }[] = [
  { icon: "users", title: "Student-Centred", text: "Lessons designed around how each child learns best, with small groups and personal attention." },
  { icon: "flask", title: "Learning by Doing", text: "Experiments, projects and field trips turn concepts into real understanding." },
  { icon: "file", title: "Continuous Assessment", text: "Monthly tests, term exams and detailed reports keep parents informed of progress." },
  { icon: "monitor", title: "Digital Literacy", text: "Computer science and safe technology use are part of every grade." },
];

const calendar = [
  { term: "Spring Term", dates: "April – June", note: "Session begins, first-term assessments" },
  { term: "Summer Break", dates: "June – August", note: "Optional summer camp & revision classes" },
  { term: "Autumn Term", dates: "August – December", note: "Mid-term exams, sports week, science fair" },
  { term: "Winter Term", dates: "January – March", note: "Final exams, annual prize distribution" },
];

export default function AcademicsPage() {
  return (
    <>
      <PageHero
        title="Academics"
        text="A balanced, future-ready curriculum from Early Years through Senior Secondary."
        image="/images/middle.jpg"
        crumb="Academics"
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Our Programs"
            title="Education at Every Stage"
            text="Each programme builds on the last, so students move confidently from one stage to the next."
          />
          <div>
            {programs.map((p) => (
              <article key={p.slug} id={p.slug} className="program-row">
                <div className="program-row__media reveal">
                  <Image src={p.image} alt={`${p.title} at XYZ School`} fill sizes="(max-width: 960px) 100vw, 50vw" />
                </div>
                <div className="reveal" style={stagger(120)}>
                  <div className="pill-row">
                    <span className="pill">{p.grades}</span>
                    <span className="pill pill--green">{p.ages}</span>
                  </div>
                  <h2>{p.title}</h2>
                  <p className="text-muted">{p.summary}</p>
                  <ul className="check-list check-list--2">
                    {p.highlights.map((h) => (
                      <li key={h}>
                        <Icon name="check" size={18} /> {h}
                      </li>
                    ))}
                  </ul>
                  <Link href="/admissions#apply" className="link-arrow">
                    Apply for {p.title} <Icon name="arrow" size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeading eyebrow="Teaching Approach" title="How We Teach" />
          <div className="grid grid-4">
            {approach.map((a, i) => (
              <article key={a.title} className="card reveal" style={stagger(i * 100)}>
                <span className={`icon-badge${i % 2 ? " icon-badge--green" : ""}`}>
                  <Icon name={a.icon} />
                </span>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Academic Calendar" title="The School Year at a Glance" />
          <div className="table-wrap reveal">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Term</th>
                  <th scope="col">Duration</th>
                  <th scope="col">Highlights</th>
                </tr>
              </thead>
              <tbody>
                {calendar.map((c) => (
                  <tr key={c.term}>
                    <td>{c.term}</td>
                    <td>{c.dates}</td>
                    <td>{c.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CtaBanner title="Ready to Join XYZ School?" text="Find the right programme for your child and apply online in minutes." />
    </>
  );
}
