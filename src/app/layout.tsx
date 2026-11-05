import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollEffects from "@/components/ScrollEffects";
import { site } from "@/lib/data";
import "./globals.css";

// next/font self-hosts the fonts at build time: no layout shift, no external request.
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: ["XYZ School", "school in Islamabad", "admissions", "Matric", "O Level", "primary school", "education"],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    images: [{ url: "/images/hero.jpg", width: 1600, height: 996, alt: "Students in a classroom at XYZ School" }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#183153" };

// Structured data so search engines understand this is a school.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "School",
  name: site.name,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  foundingDate: String(site.founded),
  address: { "@type": "PostalAddress", streetAddress: site.address, addressCountry: "PK" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <ScrollEffects />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
