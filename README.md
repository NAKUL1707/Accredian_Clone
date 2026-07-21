# Accredian Enterprise — Partial Clone

A responsive recreation of the Accredian Enterprise landing page (https://enterprise.accredian.com/), built with Next.js (App Router) and Tailwind CSS, as part of the Full Stack Developer Intern assignment.

**Live site:** --https://accredian-clone-8pxsrb8oo-nakul1707s-projects.vercel.app/


---

## Setup Instructions

1. Clone the repo
   ```
   git clone <your-repo-url>
   cd accredian-clone
   ```
2. Install dependencies
   ```
   npm install
   ```
3. Run the dev server
   ```
   npm run dev
   ```
4. Open http://localhost:3000

No environment variables are required. The lead-capture form's API route stores submissions in memory, so there is nothing to configure to run it locally.

---

## Approach Taken

Instead of pixel-cloning the original site, I focused on recreating its structure, content, and interaction patterns while building my own visual identity on top of it. The assignment brief says not to copy templates directly and to focus on clarity/structure over pixel-perfect design, so I treated that as room to make real design decisions rather than just translating the original into code.

Content: All section content, copy, numbers, client names, and FAQ questions were taken directly from the real Accredian Enterprise site. I did not invent placeholder data.

Design: I designed a custom color system (warm cream background, deep charcoal-teal for text, amber as the single accent color) instead of reusing Accredian's blue palette, following a 60-30-10 color distribution. I used Stitch to prototype this style direction before writing any component code.

Structure: I broke the page into 14 sections (Navbar, Hero, Track Record, Partnerships, Accredian Edge, Domain Expertise, Custom Courses, Skill Enhancement, CAT Framework, Deliver Results, FAQ, Testimonials, Enquiry Form, CTA Banner, Footer), each as its own component, with smaller reusable pieces (Button, SectionHeading, StatCard, IconCard, AccordionItem) shared across sections wherever the same pattern repeated. Content data (stats, FAQs, testimonials, etc.) is kept separate from component markup in a lib/data.js file, so content changes do not require touching JSX.

Interactivity: Only the components that genuinely need client-side state use "use client" — the FAQ accordion and category filter, the testimonials dot navigation, the mobile nav toggle, and the lead-capture form. Everything else is a Server Component by default.

API integration: I built a Next.js Route Handler (/api/lead) backing a lead-capture form, which covers both the mandatory API integration requirement and the bonus lead-capture points in one piece of work. Submissions are currently stored in memory (they reset on redeploy) — see Improvements below for what a production version would need.

---

## AI Usage Explanation

I used Claude throughout this project, since I had never worked with Next.js before this assignment and needed to learn it while building on a 48-hour deadline. Being transparent about where it helped and where I made my own calls:

Where AI helped:
- Generating the initial component code for each section, based on screenshots I took of the real Accredian site
- Explaining Next.js App Router concepts I did not know — Server vs. Client Components, file-based routing, Route Handlers — as they came up, rather than reading documentation cold
- Drafting the Stitch prompt used to explore the custom color palette and visual style
- Debugging two real issues I hit: a Tailwind v4 configuration mistake (missing @theme block, so custom colors were not rendering), and a CSS layout bug in the Accredian Edge timeline where the connector dots were not aligned on the line
- Explaining tradeoffs between different approaches (e.g., chatbot vs. lead-capture form for the API requirement, in-memory vs. database storage) so I could make an informed choice given the time constraint

What I modified or decided myself:
- The decision to redesign the visual identity entirely (palette, typography treatment) instead of cloning the original blue theme
- Sourcing and picking the actual images used in the Hero and Skill Enhancement sections
- Setting up and running the project environment locally, and testing every section in the browser before moving to the next one
- Catching bugs as they appeared (missing styles, empty sections, non-smooth scroll) and describing them precisely enough to get them fixed, rather than assuming generated code was correct
- Choosing in-memory storage for the lead form given the deadline, understanding the tradeoff involved
- Final review pass across the whole page for consistency and responsiveness

---

## Improvements I Would Make With More Time

- Persistent storage for the lead-capture form — currently in-memory, so it resets on redeploy. I would wire it to a lightweight database (Supabase/Postgres) or at minimum a Google Sheets webhook.
- Real icon set — several sections currently use emoji as placeholder icons (Domain Expertise, Skill Enhancement audience tags). I would swap these for a proper icon library (e.g., lucide-react) for a more polished, consistent look.
- Scroll-triggered animations — the fade-up animation currently runs once on page load. With more time I would implement it with an IntersectionObserver so sections animate in as the user scrolls to them.
- Real partner/client logos — the Partnerships section currently renders client names as styled text rather than actual logo images, since I did not have licensed logo assets on hand.
- Form validation and error states — the lead form has basic required-field validation; I would add inline field-level error messages and email format validation.
- Accessibility pass — audit color contrast, keyboard navigation through the FAQ accordion and mobile nav, and add more complete ARIA labeling.
- Automated tests — given more time, I would add basic component/integration tests, particularly around the FAQ filtering logic and the lead form submission flow.
