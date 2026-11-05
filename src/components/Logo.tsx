import Link from "next/link";
import Icon from "./Icon";

export default function Logo() {
  return (
    <Link href="/" className="logo" aria-label="XYZ School — home">
      <span className="logo__mark">
        <Icon name="cap" size={24} />
      </span>
      <span className="logo__text">
        XYZ School
        <small>Since 1998</small>
      </span>
    </Link>
  );
}
