import Image from "next/image";
import Link from "next/link";

type Props = { title: string; text: string; image: string; crumb: string };

/** Banner at the top of every inner page, with a breadcrumb back to Home. */
export default function PageHero({ title, text, image, crumb }: Props) {
  return (
    <section className="page-hero">
      <Image src={image} alt="" fill priority sizes="100vw" className="page-hero__bg" />
      <div className="container">
        <h1>{title}</h1>
        <p>{text}</p>
        <nav aria-label="Breadcrumb" className="breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{crumb}</span>
        </nav>
      </div>
    </section>
  );
}
