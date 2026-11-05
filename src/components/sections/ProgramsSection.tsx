import Link from "next/link";
import Icon from "../Icon";
import ProgramCard from "../ProgramCard";
import SectionHeading from "../SectionHeading";
import { programs } from "@/lib/data";

export default function ProgramsSection() {
  return (
    <section className="section section--alt" id="programs">
      <div className="container">
        <SectionHeading
          eyebrow="Academic Programs"
          title="Learning Pathways for Every Stage"
          text="A carefully structured curriculum that grows with your child — from first words to university applications."
        />
        <div className="grid grid-4">
          {programs.map((p, i) => (
            <ProgramCard key={p.slug} program={p} delay={i * 100} />
          ))}
        </div>
        <div className="center mt-lg">
          <Link href="/academics" className="btn btn--outline">
            View All Academics <Icon name="arrow" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
