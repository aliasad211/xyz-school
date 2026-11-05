import Link from "next/link";
import Icon from "@/components/Icon";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <div className="not-found__code">404</div>
        <h1>Page not found</h1>
        <p className="text-muted">The page you are looking for doesn&rsquo;t exist or has been moved.</p>
        <Link href="/" className="btn btn--navy">
          Back to Home <Icon name="arrow" size={18} />
        </Link>
      </div>
    </section>
  );
}
