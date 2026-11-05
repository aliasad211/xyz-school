type Props = {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "center" | "left";
  /** Use h1 when the heading is the page's main title. */
  as?: "h1" | "h2";
};

export default function SectionHeading({ eyebrow, title, text, align = "center", as: Tag = "h2" }: Props) {
  return (
    <div className={`section-head reveal${align === "left" ? " section-head--left" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <Tag>{title}</Tag>
      {text && <p>{text}</p>}
    </div>
  );
}
