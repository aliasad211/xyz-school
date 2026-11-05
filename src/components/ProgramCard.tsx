import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import type { Program } from "@/lib/data";
import { stagger } from "@/lib/stagger";

export default function ProgramCard({ program, delay = 0 }: { program: Program; delay?: number }) {
  return (
    <article className="program-card reveal" style={stagger(delay)}>
      <div className="program-card__media">
        <Image
          src={program.image}
          alt={`${program.title} students at XYZ School`}
          fill
          sizes="(max-width: 720px) 100vw, (max-width: 1080px) 50vw, 25vw"
        />
        <span className="program-card__tag">{program.grades}</span>
      </div>
      <div className="program-card__body">
        <h3>{program.title}</h3>
        <span className="program-card__ages">{program.ages}</span>
        <p>{program.summary}</p>
        <Link href={`/academics#${program.slug}`} className="link-arrow">
          Learn more <Icon name="arrow" size={16} />
        </Link>
      </div>
    </article>
  );
}
