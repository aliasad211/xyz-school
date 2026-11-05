import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";

type Props = { title: string; text: string; image: string; crumb: string };

/** Banner at the top of every inner page, with a breadcrumb back to Home. */
export default function PageHero({ title, text, image, crumb }: Props) {
  return (
    <section className="page-hero">
      <Image src={image} alt="" fill priority sizes="100vw" className="page-hero__bg" />
      <div className="container">
        <h1>{title}</h1>
        <p>{text}</p>
        <nav aria-label="Breadcrumb">
          <ol className="breadcrumb">
            <li>
              <Link href="/">
                <Icon name="home" size={16} /> Home
              </Link>
            </li>
            <li className="breadcrumb__sep" aria-hidden="true">
              <Icon name="chevronRight" size={14} />
            </li>
            <li aria-current="page">{crumb}</li>
          </ol>
        </nav>
      </div>
    </section>
  );
}
