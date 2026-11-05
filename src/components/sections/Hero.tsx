import Image from "next/image";
import Link from "next/link";
import Icon, { type IconName } from "../Icon";

const features: { icon: IconName; title: string; text: string }[] = [
  { icon: "users", title: "Expert Faculty", text: "120+ qualified teachers" },
  { icon: "cap", title: "Proven Results", text: "98% board pass rate" },
  { icon: "shield", title: "Safe Campus", text: "Secure & caring environment" },
];

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      {/* priority: the hero image is the LCP element, so load it eagerly. */}
      <Image
        src="/images/hero.jpg"
        alt="Teacher leading a lesson in an XYZ School classroom"
        fill
        priority
        sizes="100vw"
        className="hero__bg"
      />
      <div className="container">
        <div className="hero__content">
          <span className="hero__badge">
            <Icon name="star" size={16} /> Admissions Open 2026–27
          </span>
          <h1 id="hero-title">
            Inspiring Minds, <span>Building Futures</span>
          </h1>
          <p className="hero__lead">
            At XYZ School we combine academic excellence with character building, giving every child
            the confidence and skills to succeed in a changing world.
          </p>
          <div className="hero__actions">
            <Link href="/admissions#apply" className="btn btn--gold">
              Apply for Admission <Icon name="arrow" size={18} />
            </Link>
            <Link href="/about" className="btn btn--light">
              Explore Our School
            </Link>
          </div>
        </div>
      </div>

      <div className="hero__features">
        <div className="container">
          <ul>
            {features.map((f) => (
              <li key={f.title}>
                <span className="icon-badge">
                  <Icon name={f.icon} />
                </span>
                <div>
                  <strong>{f.title}</strong>
                  <span>{f.text}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
