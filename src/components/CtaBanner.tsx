import Link from "next/link";
import Icon from "./Icon";

type Props = { title?: string; text?: string };

export default function CtaBanner({
  title = "Admissions Open for 2026–27",
  text = "Give your child the foundation for a bright future. Limited seats available in every class.",
}: Props) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-banner reveal">
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className="cta-banner__actions">
            <Link href="/admissions#apply" className="btn btn--gold">
              Apply Now <Icon name="arrow" size={18} />
            </Link>
            <Link href="/contact" className="btn btn--light">
              Book a Visit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
