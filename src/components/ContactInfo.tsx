import Icon from "./Icon";
import { site } from "@/lib/data";

/** Address / phone / email / hours list, reused on the home page and Contact page. */
export default function ContactInfo() {
  const tel = site.phone.replace(/\s/g, "");
  return (
    <ul className="info-list">
      <li className="info-item">
        <span className="icon-badge">
          <Icon name="map" />
        </span>
        <div>
          <h4>Visit Us</h4>
          <p>{site.address}</p>
        </div>
      </li>
      <li className="info-item">
        <span className="icon-badge">
          <Icon name="phone" />
        </span>
        <div>
          <h4>Call Us</h4>
          <a href={`tel:${tel}`}>{site.phone}</a>
        </div>
      </li>
      <li className="info-item">
        <span className="icon-badge">
          <Icon name="mail" />
        </span>
        <div>
          <h4>Email Us</h4>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </li>
      <li className="info-item">
        <span className="icon-badge">
          <Icon name="clock" />
        </span>
        <div>
          <h4>Office Hours</h4>
          <p>{site.hours}</p>
        </div>
      </li>
    </ul>
  );
}
