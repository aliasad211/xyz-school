import Image from "next/image";
import Link from "next/link";
import Icon from "../Icon";
import { site } from "@/lib/data";
import { stagger } from "@/lib/stagger";

const points = [
  "Experienced & caring teachers",
  "Modern, activity-based curriculum",
  "Small class sizes (max 25)",
  "Strong focus on values & discipline",
  "Co-curricular clubs & sports",
  "Regular parent–teacher meetings",
];

type Props = { showButton?: boolean };

/** "About Our School" split section — used on Home and About pages. */
export default function AboutSection({ showButton = true }: Props) {
  const years = new Date().getFullYear() - site.founded;
  return (
    <section className="section" id="about">
      <div className="container split">
        <div className="about-media reveal">
          <div className="about-media__main">
            <Image
              src="/images/primary.jpg"
              alt="Primary students working together at their desks"
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
            />
          </div>
          <div className="about-media__accent">
            <Image src="/images/books.jpg" alt="" fill sizes="(max-width: 960px) 45vw, 25vw" />
          </div>
          <div className="about-media__badge">
            <strong>{years}+</strong>
            <span>Years of Excellence</span>
          </div>
        </div>

        <div className="reveal" style={stagger(120)}>
          <span className="eyebrow">About Our School</span>
          <h2>A Place Where Every Child Learns, Grows &amp; Shines</h2>
          <p className="text-muted">
            Founded in {site.founded}, XYZ School has grown into one of Lahore&rsquo;s most trusted
            institutions. We believe education is more than textbooks — it is about curiosity,
            confidence and character.
          </p>
          <p className="text-muted">
            From Early Years to Senior Secondary, our dedicated teachers guide students through a
            balanced programme of academics, arts, sports and community service.
          </p>
          <ul className="check-list check-list--2">
            {points.map((p) => (
              <li key={p}>
                <Icon name="check" size={18} /> {p}
              </li>
            ))}
          </ul>
          {showButton && (
            <Link href="/about" className="btn btn--navy">
              More About Us <Icon name="arrow" size={18} />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
