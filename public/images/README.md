# Nexxus Lab - Image Assets

All images sourced from the original Nexxus Lab website repository.
Source: https://github.com/Brainardd/NexxusLabWeb

## 📁 Folder Structure

```
public/images/
├── logo/
│   ├── nexxuslab-logo.png          # Main logo (small)
│   ├── nexxuslab-logo.svg          # Main logo (vector)
│   ├── nexxuslab-footer-logo.png   # Footer logo (large)
│   └── nexxuslab-3d-logo.gif       # Animated 3D logo
│
├── team/
│   ├── chris-bautista.png          # CEO - Chris Bautista
│   ├── loreleen-sablot.png         # Co-Founder - Loreleen Mae Sablot
│   └── ojthee-team.png             # DLSUD Interns - OJThee Team
│
├── portfolio/
│   ├── portfolio-1.png             # MyChapters project
│   ├── portfolio-2.png             # MC Supplies project
│   ├── portfolio-3.png             # AI DefendBot project
│   ├── portfolio-4.png             # TAP Staffing project
│   ├── portfolio-5.png             # Bonnie Factor project
│   ├── portfolio-6.png             # Top 100 AI project
│   ├── portfolio-7.png             # Scale UI project
│   └── portfolio-8.png             # Fundraising for Jedd project
│
├── companies/
│   ├── company-1.svg               # MC Supplies logo
│   ├── company-2.svg               # Leading with Success logo
│   ├── company-3.svg               # AI DefendBot logo
│   └── company-4.svg               # Bonnie Factor logo
│
├── chatbot/
│   ├── chatbot-avatar.png          # Nexxusbot avatar
│   └── reset-icon.png              # Chat reset button icon
│
└── backgrounds/
    ├── hero-background.png         # Main hero section background
    └── hero-background-alt.png     # Alternative hero background
```

## 🖼️ Usage in Next.js

### Using Next.js Image Component (Recommended)

```tsx
import Image from "next/image";

// Logo
<Image 
  src="/images/logo/nexxuslab-logo.svg" 
  alt="Nexxus Lab Logo"
  width={120}
  height={40}
/>

// Team Member
<Image 
  src="/images/team/chris-bautista.png" 
  alt="Chris Bautista - CEO of Nexxus Lab"
  width={200}
  height={200}
  className="rounded-full"
/>

// Portfolio
<Image 
  src="/images/portfolio/portfolio-1.png" 
  alt="MyChapters - Web Application Project"
  width={400}
  height={300}
  className="rounded-xl"
/>

// Background (CSS)
<section style={{ backgroundImage: "url('/images/backgrounds/hero-background.png')" }}>
```

## 📏 Image Dimensions

| Category | Recommended Size | Format |
|----------|-----------------|--------|
| Logo | 120x40 | SVG/PNG |
| Team Photos | 200x200 | PNG |
| Portfolio | 400x300 | PNG |
| Company Logos | 80x30 | SVG |
| Hero Background | 1920x1080 | PNG |

## ✅ SEO Alt Tags

When using these images, always include descriptive alt tags:

| Image | Alt Tag Example |
|-------|----------------|
| Logo | "Nexxus Lab - Philippine Tech Company Logo" |
| Team | "[Name] - [Role] at Nexxus Lab" |
| Portfolio | "[Project Name] - [Brief Description]" |
| Companies | "[Company Name] - Nexxus Lab Client" |
