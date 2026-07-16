# Uncle Jay's Academy Website

A modern, warm, and trustworthy educational website for Uncle Jay's Academy, a virtual tutoring academy helping African children in the diaspora excel academically, build confidence, and stay connected to cultural roots.

## 🎨 Design

**Brand Colors:**
- Primary Blue: `#C9D6E8` (powder blue)
- Dark Blue: `#a8b8d0`
- Purple Accent: `#7c3aed`
- Gold Accent: `#f59e0b`
- Pink Accent: `#ec4899`
- Text: `#1a202c`
- Light Text: `#4a5568`

**Typography:**
- Headings: Merriweather (serif) - bold, elegant
- Body: Poppins (sans-serif) - clean, friendly

**Design Reference:** Khan Academy's clean, credible, education-focused aesthetic with lots of whitespace, friendly rounded cards, and clear typography hierarchy.

## 📁 Project Structure

```
app/
├── layout.tsx              # Root layout with fonts and metadata
├── globals.css             # Tailwind CSS with brand colors
├── page.tsx                # Homepage
└── tutors/
    └── page.tsx            # Tutors page

components/
├── header.tsx              # Sticky navigation with mega-menu
├── footer.tsx              # Footer with contact and social links
├── hero-section.tsx        # Homepage hero banner
├── why-uja-section.tsx     # 4 benefit cards section
├── stats-section.tsx       # Animated impact statistics
├── testimonials-section.tsx # Carousel with testimonials
├── programs-section.tsx    # Programs grid
├── cta-section.tsx         # Final call-to-action
└── tutor-profile.tsx       # Individual tutor profile component
```

## 🌍 Pages

### Homepage (`/`)
The landing page featuring:
- **Hero Section**: Bold headline "Raising Confident African Scholars for a Global Future"
- **Why UJA Section**: 4 benefit cards (Academic Excellence, Global Learners African Roots, Confidence Building, Dedicated Tutors)
- **Impact Stats**: Animated counters (250+ lessons, 95% parent confidence, 90% grade improvement, 12 countries)
- **Testimonials**: Carousel with parent testimonials from different countries
- **Programs**: Grid showcase of 7 learning programs (Early Years, Primary, Junior Secondary, etc.)
- **Final CTA**: Gold-to-pink gradient banner encouraging discovery calls
- **Footer**: Quick links, contact info, and social media

### Tutors Page (`/tutors`)
Dedicated page showcasing the educational team:
- **Page Header**: "Meet Your Tutors" with subtitle
- **About Uncle Jay**: Section with emoji illustration and founder bio (9+ years experience)
- **Tutor Profiles**: 3 alternating split-screen sections featuring:
  - Babajide Oduga (Uncle Jay) - Mathematics teacher
  - Abigeal Ogunlaja (Miss Abby) - Mathematics tutor
  - Deborah Adesile (Miss Queen) - English educator with 10+ years experience
- **Final CTA**: "Ready to meet your child's tutor?" call-to-action

## 🧭 Global Navigation

**Sticky Header Features:**
- Logo with colorful multi-color "Academy" text
- Home link
- Explore dropdown mega-menu with 7 items:
  - About Us
  - Programs/Courses
  - Enroll
  - Tutors
  - Testimonials
  - FAQ
  - Contact
- "Book a Free Consultation" button
- Mobile hamburger menu with expandable sections
- **WhatsApp Floating Button**: Fixed position bottom-right for instant messaging

## 🔧 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 with custom color tokens
- **Fonts**: Merriweather (serif) + Poppins (sans-serif) from Google Fonts
- **Icons**: Lucide React
- **Interactivity**: React hooks for carousel, stats animations, mobile menu

## ✨ Key Features

1. **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop
2. **Animated Stats**: Counter animation in the impact section (0 → target numbers over 2 seconds)
3. **Testimonial Carousel**: Interactive carousel with dot indicators and navigation arrows
4. **Mega-Menu**: Hover-based mega-menu (desktop) with accordion on mobile
5. **Semantic HTML**: Proper heading hierarchy, alt text, ARIA labels
6. **Smooth Interactions**: Hover effects, transitions, and visual feedback
7. **WhatsApp Integration**: Floating button linking to business WhatsApp number

## 🚀 Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build
```

The app runs on `http://localhost:3000` by default.

## 📱 Accessibility

- Semantic HTML structure with proper heading hierarchy
- ARIA labels for interactive elements and icons
- Keyboard navigation support
- Screen reader friendly content
- Sufficient color contrast throughout
- Focus indicators on interactive elements

## 📊 Performance

- Static site generation where possible
- Optimized images and lazy loading
- Minimal CSS with Tailwind's purging
- No unnecessary JavaScript
- Fast First Contentful Paint and Largest Contentful Paint

## 🎯 Content

All content reflects Uncle Jay's Academy's mission:
- **Tagline**: "Excellence through guided learning"
- **Vision**: Build a leading learning community that inspires lasting excellence
- **Mission**: Create a calm, supportive learning space where every student feels encouraged and equipped to learn and excel
- **Target Audience**: African children in the diaspora aged 4-18 across 12+ countries

## 📞 Contact

- **Phone**: +234 905-832-4190
- **Email**: unclejaysacademy@gmail.com
- **WhatsApp**: Floating button on all pages

## 📝 License

© 2024 Uncle Jay's Academy. All rights reserved.

---

**Excellence through guided learning.**
