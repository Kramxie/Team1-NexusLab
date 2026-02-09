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
│   ├── bambooSpa.png               # Bamboo Spa NZ - Spa Software/CRM (Main Client)
│   ├── pfip.png                    # PFIP.com.ph - Dynamic Website (Main Client) [PLACEHOLDER - Replace with actual screenshot]
│   ├── mavers.png                  # Mavers Corp - Inventory System (Main Client)
│   ├── fundraising.png             # Fundraising for Jedd (Portfolio)
│   ├── Scale.png                   # Scale UI (Portfolio)
│   ├── TAP.png                     # TAP Staffing Solutions (Portfolio)
│   └── MyChapters.png              # MyChapters (Portfolio)
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

## 🎯 Client Hierarchy

The portfolio carousel follows this hierarchy (big clients first):

1. **Bamboo Spa NZ** - Spa Software / CRM
2. **PFIP.com.ph** - Dynamic Website
3. **[Reserved for Juggling Hats]** - Mobile App (to be added)
4. **Mavers Corp** - Inventory System for Grocery

Portfolio projects (NexusLab internal):
- Fundraising for Jedd
- Scale UI
- TAP Staffing Solutions
- MyChapters

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
