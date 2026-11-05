"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Icon from "./Icon";
import Logo from "./Logo";
import { navLinks, site } from "@/lib/data";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close the mobile menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  // Add a shadow to the sticky header once the page is scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the drawer is open; close it with Escape.
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <div className="topbar">
        <div className="container">
          <div className="topbar__info">
            <a href={`tel:${site.phone.replace(/\s/g, "")}`}>
              <Icon name="phone" size={15} /> {site.phone}
            </a>
            <a href={`mailto:${site.email}`}>
              <Icon name="mail" size={15} /> {site.email}
            </a>
            <span>
              <Icon name="clock" size={15} /> {site.hours}
            </span>
          </div>
          <div className="topbar__social">
            <span>Admissions open for 2026–27</span>
          </div>
        </div>
      </div>

      <header className={`header${scrolled ? " header--scrolled" : ""}`}>
        <div className="container">
          <Logo />

          <button
            type="button"
            className="menu-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="main-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>

          <nav id="main-nav" className={`nav${open ? " nav--open" : ""}`} aria-label="Main navigation">
            <ul className="nav__list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`nav__link${isActive(link.href) ? " nav__link--active" : ""}`}
                    aria-current={isActive(link.href) ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/admissions#apply" className="btn btn--gold nav__cta">
              Apply Now
            </Link>
          </nav>

          <div
            className={`nav-backdrop${open ? " nav-backdrop--visible" : ""}`}
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
        </div>
      </header>
    </>
  );
}
