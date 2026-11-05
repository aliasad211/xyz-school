import Icon from "../Icon";
import SectionHeading from "../SectionHeading";
import StatCounter from "../StatCounter";
import { achievements, stats } from "@/lib/data";
import { stagger } from "@/lib/stagger";

export default function StatsSection() {
  return (
    <section className="section section--navy stats" id="achievements">
      <div className="container">
        <SectionHeading
          eyebrow="Achievements & Statistics"
          title="Numbers That Speak for Themselves"
          text="Decades of commitment reflected in our students' success, inside and outside the classroom."
        />
        <div className="grid grid-4">
          {stats.map((s) => (
            <StatCounter key={s.label} {...s} />
          ))}
        </div>
        <div className="grid grid-3 mt-lg">
          {achievements.map((a, i) => (
            <div key={a.title} className="achievement reveal" style={stagger(i * 100)}>
              <span className="icon-badge">
                <Icon name={a.icon} />
              </span>
              <div>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
