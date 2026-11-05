import Link from "next/link";
import Icon, { type IconName } from "./Icon";
import Logo from "./Logo";
import { navLinks, programs, site } from "@/lib/data";

const socials: { name: IconName; label: string; href: string }[] = [
  { name: "facebook", label: "Facebook", href: "https://facebook.com" },
  { name: "instagram", label: "Instagram", href: "https://instagram.com" },
  { name: "youtube", label: "YouTube", href: "https://youtube.com" },
  { name: "linkedin", label: "LinkedIn", href: "https://linkedin.com" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <Logo />
          <p>
            Providing quality education since {site.founded}. We nurture curious minds, strong
            character and a lifelong love of learning.
          </p>
          <div className="social">
            {socials.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                <Icon name={s.name} size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3>Quick Links</h3>
          <ul className="footer__links">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Programs</h3>
          <ul className="footer__links">
            {programs.map((p) => (
              <li key={p.slug}>
                <Link href={`/academics#${p.slug}`}>{p.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Get in Touch</h3>
          <ul className="footer__contact">
            <li>
              <Icon name="map" size={18} />
              <span>{site.address}</span>
            </li>
            <li>
              <Icon name="phone" size={18} />
              <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
            </li>
            <li>
              <Icon name="mail" size={18} />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <Icon name="clock" size={18} />
              <span>{site.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <span>© {year} XYZ School. All rights reserved.</span>
          <span>{site.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
