import Image from "next/image";
import Icon from "./Icon";
import type { Facility } from "@/lib/data";
import { stagger } from "@/lib/stagger";

export default function FacilityCard({ facility, delay = 0 }: { facility: Facility; delay?: number }) {
  return (
    <article
      className={`card reveal${facility.image ? " facility-card" : ""}`}
      style={stagger(delay)}
    >
      {facility.image && (
        <div className="facility-card__media">
          <Image src={facility.image} alt={facility.title} fill sizes="(max-width: 720px) 100vw, 33vw" />
        </div>
      )}
      <div className={facility.image ? "facility-card__body" : undefined}>
        <span className="icon-badge">
          <Icon name={facility.icon} />
        </span>
        <h3>{facility.title}</h3>
        <p>{facility.text}</p>
      </div>
    </article>
  );
}
