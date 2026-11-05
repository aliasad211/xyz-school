import Icon from "./Icon";
import { stagger } from "@/lib/stagger";

type Props = { name: string; role: string; quote: string; delay?: number };

const initials = (name: string) =>
  name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

export default function TestimonialCard({ name, role, quote, delay = 0 }: Props) {
  return (
    <figure className="card testimonial reveal" style={stagger(delay)}>
      <Icon name="quote" size={34} className="testimonial__quote-icon" />
      <div className="testimonial__stars" aria-label="Rated 5 out of 5">
        {Array.from({ length: 5 }, (_, i) => (
          <Icon key={i} name="star" size={16} />
        ))}
      </div>
      <blockquote>&ldquo;{quote}&rdquo;</blockquote>
      <figcaption>
        <span className="avatar" aria-hidden="true">
          {initials(name)}
        </span>
        <span>
          <strong>{name}</strong>
          <span>{role}</span>
        </span>
      </figcaption>
    </figure>
  );
}
