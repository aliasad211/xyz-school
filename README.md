# XYZ School Website

A modern, fully responsive, multi-page school website built with **Next.js 15 (App Router)**, **React 19** and **TypeScript**, styled with plain CSS.

## Pages

| Route         | Content |
| ------------- | ------- |
| `/`           | Home page with the 8 required sections: Header & Navigation, Hero, About Our School, Academic Programs, School Facilities, Achievements & Statistics, Parent Testimonials, Contact Section & Footer |
| `/about`      | Story, mission / vision / values, milestones timeline, statistics, leadership team, all facilities |
| `/academics`  | Detailed programmes (Early Years → Senior Secondary), teaching approach, academic calendar |
| `/admissions` | 4-step process, required documents, fee structure, **online admission form**, FAQs |
| `/contact`    | Contact details, **contact form**, Google Map, testimonials |

## Features

- **Responsive** desktop, tablet and mobile layouts (breakpoints at 1080 / 960 / 720 / 400 px)
- **Mobile hamburger menu**: slide-in drawer with backdrop, Escape-to-close, body scroll lock, closes on navigation
- **Form validation** for the admission and contact forms:
  - errors appear after a field is left (on blur) and update live while typing
  - on submit, every field is checked and the first invalid one is focused
  - the **same rules run on the server** in the API routes (`/api/admissions`, `/api/contact`)
- **Animations**: scroll-reveal fade-ins, counting statistics, hover effects on cards, buttons and links, hero zoom. All of them respect `prefers-reduced-motion`
- **SEO**: page-specific titles and descriptions, canonical URLs, Open Graph tags, `sitemap.xml`, `robots.txt`, School JSON-LD structured data, semantic HTML
- **Performance**: `next/image` (resized, lazy-loaded, modern formats), `next/font` (self-hosted Poppins and Inter, no layout shift), static pre-rendering for every page, most components rendered on the server
- **Accessibility**: skip link, visible focus rings, ARIA labels, `aria-invalid` / `aria-describedby` on form errors, breadcrumbs

## Design system

| Token          | Hex       | Usage             |
| -------------- | --------- | ----------------- |
| Navy Blue      | `#183153` | Primary           |
| Golden Yellow  | `#D6A84B` | Accent            |
| Light Grey     | `#F5F7FA` | Background        |
| White          | `#FFFFFF` | Cards & sections  |
| Dark Grey      | `#263238` | Text              |
| Green          | `#3B7A57` | Secondary accent  |

Headings use **Poppins** and body text uses **Inter**. All colours are CSS variables in `src/app/globals.css`.

## Project structure

```
src/
├── app/                      # Routes (Next.js App Router)
│   ├── layout.tsx            # Root layout: fonts, SEO metadata, Header/Footer
│   ├── page.tsx              # Home page
│   ├── about/ academics/ admissions/ contact/
│   ├── api/contact/route.ts  # POST: server-side validation for the contact form
│   ├── api/admissions/route.ts
│   ├── sitemap.ts  robots.ts  not-found.tsx
│   └── globals.css           # Design tokens and all styles
├── components/
│   ├── Header.tsx            # Sticky header and mobile menu (client component)
│   ├── Footer.tsx  Logo.tsx  Icon.tsx (inline SVG icons)
│   ├── PageHero.tsx  SectionHeading.tsx  CtaBanner.tsx  ContactInfo.tsx
│   ├── ProgramCard.tsx  FacilityCard.tsx  TestimonialCard.tsx  StatCounter.tsx
│   ├── ScrollEffects.tsx     # One IntersectionObserver for every .reveal element, plus back-to-top
│   ├── sections/             # Home page sections, some reused on inner pages
│   └── forms/                # AdmissionForm, ContactForm, Field, FormStatus, SubmitButton
└── lib/
    ├── data.ts               # All site content (programmes, facilities, stats, ...)
    ├── validation.ts         # Validation rules shared by client and server
    ├── useForm.ts            # Form-state hook (values, touched, errors, submit)
    └── stagger.ts            # Helper that staggers reveal animations
```

**Content lives apart from layout.** All text is in `src/lib/data.ts`, so changing it never means editing a component.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
npm run lint
```

## Deployment

The site deploys to **Vercel** with no extra configuration: import the GitHub repo and click Deploy. If the deployed domain differs from the placeholder, update `site.url` in `src/lib/data.ts`, because the sitemap and canonical URLs are built from it.

## Notes

- The form API routes validate the data and return a response. They do not store it. In production they would save the data to a database or send an email.
- Photos are from [Unsplash](https://unsplash.com) (free licence). The school name, people and figures are fictional.

## Links

- Live site: https://xyz-school-navy.vercel.app
- Repository: https://github.com/aliasad211/xyz-school
