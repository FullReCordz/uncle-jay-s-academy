# Uncle Jay's Academy Website - Getting Started Guide

## Quick Start

### 1. View the Website Locally
The website is already running on your development server. You can view it at:
- **Homepage:** http://localhost:3000
- **About:** http://localhost:3000/about
- **Programs:** http://localhost:3000/programs
- **Enroll:** http://localhost:3000/enroll
- **Contact:** http://localhost:3000/contact
- **FAQ:** http://localhost:3000/faq
- **Testimonials:** http://localhost:3000/testimonials
- **Tutors:** http://localhost:3000/tutors

### 2. Install & Deploy to Vercel

#### Option A: Download ZIP and Use Shadcn CLI
1. Click the three dots (...) in the top right of the v0 Block
2. Select "Download ZIP"
3. Extract the ZIP file locally
4. Run: `npx create-next-app@latest my-app`
5. Replace with the extracted files
6. Run: `pnpm install` and `pnpm dev`
7. Deploy: Push to GitHub or deploy directly to Vercel

#### Option B: Deploy Directly with Publish Button
1. Click the "Publish" button in the top right
2. Follow the Vercel deployment prompts
3. Website will be live on your Vercel domain

#### Option C: Connect GitHub
1. Click Settings in the top right
2. Connect your GitHub repository
3. Each commit will trigger automatic deployments

## Project Structure

```
uncle-jays-academy/
├── app/
│   ├── layout.tsx              # Root layout with fonts
│   ├── globals.css             # Tailwind config + theme
│   ├── page.tsx                # Homepage
│   ├── about/page.tsx          # About Us page
│   ├── programs/page.tsx       # Programs page
│   ├── enroll/page.tsx         # Enrollment page
│   ├── contact/page.tsx        # Contact page
│   ├── faq/page.tsx            # FAQ page
│   ├── testimonials/page.tsx   # Testimonials page
│   └── tutors/page.tsx         # Tutors page
│
├── components/
│   ├── header.tsx              # Navigation header
│   ├── footer.tsx              # Footer
│   ├── hero-section.tsx        # Reusable hero
│   ├── why-uja-section.tsx     # Benefits section
│   ├── stats-section.tsx       # Statistics section
│   ├── testimonials-section.tsx # Testimonials carousel
│   ├── programs-section.tsx    # Programs grid
│   ├── tutor-profile.tsx       # Tutor card
│   ├── cta-section.tsx         # Call-to-action banner
│   └── ui/button.tsx           # Button component
│
├── public/                     # Static assets (images, icons)
├── package.json                # Dependencies
├── next.config.mjs             # Next.js config
├── tsconfig.json               # TypeScript config
└── tailwind.config.js          # Tailwind configuration
```

## Customization Guide

### Change Brand Name
1. Edit `components/header.tsx` - Update the logo text
2. Edit `app/layout.tsx` - Update meta title/description
3. Search for "Uncle Jay's Academy" and replace globally

### Change Colors
1. Edit `app/globals.css` - Modify the @theme section:
```css
@theme {
  --color-ujo-bg: #f8fafb;           /* Background */
  --color-ujo-blue: #C9D6E8;         /* Primary */
  --color-ujo-blue-dark: #a8b8d0;    /* Primary Dark */
  --color-ujo-purple: #7c3aed;       /* Accent 1 */
  --color-ujo-gold: #f59e0b;         /* Accent 2 */
  --color-ujo-pink: #ec4899;         /* Accent 3 */
  --color-ujo-text: #1a202c;         /* Text Dark */
  --color-ujo-text-light: #4a5568;   /* Text Light */
  --color-ujo-white: #ffffff;        /* White */
}
```

### Update Contact Information
1. Edit `components/footer.tsx`:
   - Update phone number
   - Update email address
   - Update social media links

2. Edit `components/header.tsx`:
   - Update WhatsApp number in the floating button
   - Update Explore menu items

3. Edit `app/contact/page.tsx`:
   - Update phone number
   - Update email
   - Update office hours

### Add a New Page
1. Create a new folder in `app/`:
```bash
mkdir app/new-page
```

2. Create `app/new-page/page.tsx`:
```tsx
'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'

export default function NewPage() {
  return (
    <>
      <Header />
      <main>
        {/* Your content here */}
      </main>
      <Footer />
    </>
  )
}
```

3. Update navigation in `components/header.tsx` to add the new page

### Integrate Forms

#### Contact Form
The contact form in `/contact` currently logs to console. To integrate:
1. Install form library: `pnpm add formspree` (or similar)
2. Update `app/contact/page.tsx` to send form data to your backend
3. Or use a service like Formspree, Netlify Forms, or SendGrid

#### Enrollment Form
To integrate a Tally form:
1. Get your Tally form ID
2. Replace the placeholder in `app/enroll/page.tsx` with your form embed code
3. Or create a custom form component

### Add Images
1. Place images in the `public/` folder
2. Reference them in code:
```tsx
import Image from 'next/image'

<Image 
  src="/images/my-image.jpg" 
  alt="Description" 
  width={800} 
  height={600} 
/>
```

### Update Testimonials
Edit `app/testimonials/page.tsx`:
1. Update the `testimonials` array with real testimonials
2. Replace emoji avatars with actual images
3. Update names and locations

### Update Programs
Edit `app/programs/page.tsx`:
1. Modify the `programs` array
2. Add/remove program types
3. Update subjects, outcomes, and highlights

## Deployment Checklist

Before deploying to production:

- [ ] Update all contact information
- [ ] Change brand colors if needed
- [ ] Add real testimonials
- [ ] Integrate contact forms
- [ ] Add Google Analytics
- [ ] Update meta descriptions
- [ ] Add favicon
- [ ] Test all links
- [ ] Test on mobile
- [ ] Verify email links work
- [ ] Verify phone links work
- [ ] Verify WhatsApp link works

## Environment Variables

No environment variables are required for the basic site. However, for advanced features:

```
# For email integration
SENDGRID_API_KEY=your_key_here
CONTACT_EMAIL=your@email.com

# For analytics
NEXT_PUBLIC_GA_ID=your_ga_id

# For third-party forms
TALLY_FORM_ID=your_form_id
```

Add these to your Vercel project settings → Environment Variables.

## Browser Support

The website is tested and works on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Optimize Images**: Compress images before adding to public folder
2. **Lazy Loading**: Images are automatically lazy-loaded in Next.js
3. **Code Splitting**: Routes are automatically code-split by Next.js
4. **Caching**: Vercel handles caching automatically
5. **CDN**: Vercel serves assets from a global CDN

## Security Best Practices

1. **Never commit secrets** - Use environment variables
2. **Validate forms** - All form inputs are validated
3. **Escape user input** - Already handled by React
4. **Use HTTPS** - Vercel provides SSL by default
5. **Update dependencies** - Run `pnpm update` periodically

## Troubleshooting

### Page Not Loading
1. Check if dev server is running
2. Clear browser cache (Ctrl+Shift+Delete)
3. Restart dev server: `pnpm dev`

### Styles Not Applying
1. Make sure Tailwind CSS is imported in `globals.css`
2. Check class names for typos
3. Restart dev server

### Navigation Links Not Working
1. Check file paths in component links
2. Verify page files exist in app folder
3. Check for typos in route names

### Mobile Layout Issues
1. Check responsive breakpoints (md:, lg:)
2. Test in browser dev tools mobile mode
3. Verify viewport meta tag

## Support & Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Vercel Docs:** https://vercel.com/docs
- **React Docs:** https://react.dev

## Contact for Help

For technical assistance:
- Email: unclejaysacademy@gmail.com
- Phone: +234 905-832-4190
- WhatsApp: https://wa.me/2348031659857

---

## Summary

Your Uncle Jay's Academy website is ready to go! You can:
1. View it locally at http://localhost:3000
2. Customize content and colors
3. Deploy to Vercel with one click
4. Integrate forms and tools as needed

Happy teaching! 🎓
