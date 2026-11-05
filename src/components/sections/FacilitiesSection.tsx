import FacilityCard from "../FacilityCard";
import SectionHeading from "../SectionHeading";
import { facilities } from "@/lib/data";

type Props = { showAll?: boolean; alt?: boolean };

/**
 * School facilities. Home shows the six photo cards;
 * the About page also lists the extra icon-only facilities below them.
 */
export default function FacilitiesSection({ showAll = false, alt = false }: Props) {
  const featured = facilities.filter((f) => f.image);
  const extra = facilities.filter((f) => !f.image);

  return (
    <section className={`section${alt ? " section--alt" : ""}`} id="facilities">
      <div className="container">
        <SectionHeading
          eyebrow="School Facilities"
          title="World-Class Facilities for Holistic Growth"
          text="Purpose-built spaces that make learning engaging, safe and inspiring."
        />
        <div className="grid grid-3">
          {featured.map((f, i) => (
            <FacilityCard key={f.title} facility={f} delay={(i % 3) * 100} />
          ))}
        </div>
        {showAll && (
          <div className="grid grid-3 mt-lg">
            {extra.map((f, i) => (
              <FacilityCard key={f.title} facility={f} delay={i * 100} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
