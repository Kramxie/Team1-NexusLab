# NEXXUS LAB - Low-Fidelity Wireframe Specification
## UI/UX Design Documentation for Figma Recreation

---

## 📐 Design System & Grid

### Breakpoints
| Device | Width | Columns | Gutter | Margin |
|--------|-------|---------|--------|--------|
| Mobile | 375px | 4 | 16px | 20px |
| Tablet | 768px | 8 | 24px | 32px |
| Desktop | 1440px | 12 | 24px | 80px |

### Spacing Scale (8px base)
- `xs`: 4px
- `sm`: 8px
- `md`: 16px
- `lg`: 24px
- `xl`: 32px
- `2xl`: 48px
- `3xl`: 64px
- `4xl`: 96px
- `5xl`: 128px

### Typography Scale
| Element | Desktop | Mobile | Weight |
|---------|---------|--------|--------|
| H1 (Hero) | 72px / 1.1 | 40px / 1.2 | Bold (700) |
| H2 (Section) | 48px / 1.2 | 32px / 1.3 | Bold (700) |
| H3 (Card) | 24px / 1.3 | 20px / 1.4 | Semibold (600) |
| Body | 16px / 1.6 | 16px / 1.6 | Regular (400) |
| Small | 14px / 1.5 | 14px / 1.5 | Regular (400) |
| Caption | 12px / 1.4 | 12px / 1.4 | Medium (500) |

### Color Palette (Wireframe)
- Background: `#1a1a1a` (dark gray)
- Surface: `#2a2a2a` (card bg)
- Border: `#3a3a3a` (subtle lines)
- Text Primary: `#ffffff`
- Text Secondary: `#888888`
- Accent: `#00d4ff` (cyan highlight)
- Placeholder: `#444444` (image placeholders)

---

## 🧩 Component Library

### Navigation Bar
```
┌─────────────────────────────────────────────────────────────────────┐
│  [LOGO]        Home  Services  Workflows  Clients  Team    [CTA]   │
│  NEXXUS LAB                                                Contact  │
└─────────────────────────────────────────────────────────────────────┘
Height: 64px (desktop) / 56px (mobile)
Logo: 120px × 32px
Nav Links: 14px, 32px spacing
CTA Button: 120px × 40px, rounded-full
```

### Mobile Navigation
```
┌──────────────────────────┐
│  [LOGO]            [☰]   │
└──────────────────────────┘
│ ┌──────────────────────┐ │
│ │ Home                 │ │
│ │ Services             │ │
│ │ Workflows            │ │
│ │ Clients              │ │
│ │ Team                 │ │
│ │ Contact              │ │
│ │ ┌──────────────────┐ │ │
│ │ │   Book a Call    │ │ │
│ │ └──────────────────┘ │ │
│ └──────────────────────┘ │
```

### Hero Section
```
Desktop (1440px):
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│                        [  BADGE TEXT  ]                             │
│                                                                     │
│                    MAIN HEADLINE TEXT                               │
│                    GRADIENT ACCENT.                                 │
│                                                                     │
│              Supporting description text goes here                  │
│              spanning maximum two lines on desktop.                 │
│                                                                     │
│              [ Primary CTA ]    [ Secondary CTA ]                   │
│                                                                     │
│                     Trusted by: Logo  Logo  Logo                    │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
Height: 90vh (min 600px)
Max-width content: 800px centered
Badge: pill shape, 12px text
CTA Primary: 180px × 52px
CTA Secondary: 160px × 52px, outline style
```

### Section Header
```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│                         Section Title                               │
│                   Subtitle description text                         │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
Padding: 96px top, 48px bottom
Title: H2, centered
Subtitle: Body, #888, centered, max-width 600px
```

### Service Card
```
┌─────────────────────────────┐
│                             │
│  [Icon]                     │
│                             │
│  Card Title                 │
│                             │
│  Description text that      │
│  spans multiple lines       │
│  explaining the service.    │
│                             │
└─────────────────────────────┘
Size: 380px × auto (desktop), full-width (mobile)
Padding: 24px
Border: 1px solid #3a3a3a
Border-radius: 16px
Icon: 48px × 48px
```

### Pricing Tier Card
```
┌─────────────────────────────┐
│      [ MOST POPULAR ]       │  ← Only on highlighted
├─────────────────────────────┤
│                             │
│  Tier Name                  │
│                             │
│  Let's Talk                 │
│                             │
│  Short description of       │
│  this pricing tier.         │
│                             │
│  ✓ Feature item one         │
│  ✓ Feature item two         │
│  ✓ Feature item three       │
│  ✓ Feature item four        │
│  ✓ Feature item five        │
│                             │
│  ┌───────────────────────┐  │
│  │     Get Started       │  │
│  └───────────────────────┘  │
│                             │
└─────────────────────────────┘
Size: 380px × auto
Highlighted: cyan border + glow
Badge: absolute positioned -16px top
```

### Workflow Step Card
```
┌─────────────────────────────┐
│ (1)                         │  ← Step number badge
│                             │
│  Step Title                 │
│                             │
│  Description of this        │
│  workflow step.             │
│                             │
│  › Sub-step one             │
│  › Sub-step two             │
│  › Sub-step three           │
│                             │
└─────────────────────────────┘
Step badge: 32px circle, gradient bg, absolute -16px top
```

### Client Card
```
┌─────────────────────────────┐
│                             │
│  [Logo]  Client Name        │
│          Industry           │
│                             │
│  Short description of the   │
│  client and project.        │
│                             │
│  ┌───────────────────────┐  │
│  │ "Testimonial quote    │  │
│  │  preview text..."     │  │
│  │        — Author Name  │  │
│  └───────────────────────┘  │
│                             │
│  Visit Project →            │
│                             │
└─────────────────────────────┘
Logo placeholder: 56px × 56px rounded
Testimonial box: darker bg, 12px padding
```

### Team Member Card
```
┌─────────────────────────────┐
│                             │
│         ┌─────┐             │
│         │ IMG │             │  ← 96px circle avatar
│         └─────┘             │
│                             │
│       Member Name           │
│         Role Title          │
│                             │
│   Short bio description     │
│   about this team member.   │
│                             │
│      [in] [gh] [fb]         │  ← Social icons
│                             │
└─────────────────────────────┘
Avatar: 96px circle, centered
Social icons: 24px, 12px gap
Card: centered text alignment
```

### Contact Form
```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  ┌─────────────────────────────┐  ┌─────────────────────────────┐  │
│  │                             │  │                             │  │
│  │  Form Title                 │  │  Contact Information        │  │
│  │                             │  │                             │  │
│  │  ┌───────────────────────┐  │  │  📍 Address                 │  │
│  │  │ Your Name             │  │  │     Street, City            │  │
│  │  └───────────────────────┘  │  │                             │  │
│  │  ┌───────────────────────┐  │  │  📞 Phone                   │  │
│  │  │ Email Address         │  │  │     +63 XXX-XXX-XXXX        │  │
│  │  └───────────────────────┘  │  │                             │  │
│  │  ┌───────────────────────┐  │  │  ✉️ Email                   │  │
│  │  │ Company (Optional)    │  │  │     team@nexxuslab.com      │  │
│  │  └───────────────────────┘  │  │                             │  │
│  │  ┌───────────────────────┐  │  │  ┌───────────────────────┐  │  │
│  │  │                       │  │  │  │                       │  │  │
│  │  │ Your Message          │  │  │  │   Map Placeholder     │  │  │
│  │  │                       │  │  │  │                       │  │  │
│  │  └───────────────────────┘  │  │  └───────────────────────┘  │  │
│  │  ┌───────────────────────┐  │  │                             │  │
│  │  │    Send Message       │  │  └─────────────────────────────┘  │
│  │  └───────────────────────┘  │                                   │
│  │                             │                                   │
│  └─────────────────────────────┘                                   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
Layout: 2-column on desktop, stacked on mobile
Form inputs: 100% width, 48px height, 12px radius
Textarea: 120px min-height
```

### CTA Section
```
┌─────────────────────────────────────────────────────────────────────┐
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│  ░░░░░░░░░░                                          ░░░░░░░░░░░░░  │
│  ░░░░░░░░░░       CTA Headline Text Here             ░░░░░░░░░░░░░  │
│  ░░░░░░░░░░                                          ░░░░░░░░░░░░░  │
│  ░░░░░░░░░░    Supporting description paragraph      ░░░░░░░░░░░░░  │
│  ░░░░░░░░░░                                          ░░░░░░░░░░░░░  │
│  ░░░░░░░░░░         [ CTA Button ]                   ░░░░░░░░░░░░░  │
│  ░░░░░░░░░░                                          ░░░░░░░░░░░░░  │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
└─────────────────────────────────────────────────────────────────────┘
Background: gradient overlay with blur effects
Border-radius: 24px
Padding: 64px (desktop), 32px (mobile)
```

### Footer
```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  NEXXUS LAB              Quick Links        Legal                   │
│                          Services           Privacy Policy          │
│  Leave the tech to us.   Workflows          Terms of Service        │
│  Short brand desc.       Clients                                    │
│                          Team                                       │
│  [X] [in] [gh] [ig]      Contact                                    │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│  © 2026 Nexxus Lab          Makati City, Philippines                │
└─────────────────────────────────────────────────────────────────────┘
Layout: 4-column grid on desktop, stacked on mobile
Height: auto
Padding: 48px top/bottom
Bottom bar: border-top, 24px padding
```

---

## 📱 Page Wireframes

### Page 1: HOME

#### Desktop (1440px)
```
┌─────────────────────────────────────────────────────────────────────┐
│  [NAV]                                                              │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│                     [HERO SECTION - 90vh]                           │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                     SERVICES SECTION                                │
│                                                                     │
│    ┌──────────┐  ┌──────────┐  ┌──────────┐                        │
│    │ Service  │  │ Service  │  │ Service  │                        │
│    │ Card 1   │  │ Card 2   │  │ Card 3   │                        │
│    └──────────┘  └──────────┘  └──────────┘                        │
│    ┌──────────┐  ┌──────────┐  ┌──────────┐                        │
│    │ Service  │  │ Service  │  │ Service  │                        │
│    │ Card 4   │  │ Card 5   │  │ Card 6   │                        │
│    └──────────┘  └──────────┘  └──────────┘                        │
│                                                                     │
│                    View all services →                              │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                     WORKFLOW SECTION                                │
│                                                                     │
│    ┌──────────┐  ┌──────────┐  ┌──────────┐                        │
│    │ Step 1   │──│ Step 2   │──│ Step 3   │                        │
│    └──────────┘  └──────────┘  └──────────┘                        │
│                                                                     │
│                    See our full process →                           │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                     CLIENTS SECTION                                 │
│                                                                     │
│    ┌──────────┐  ┌──────────┐  ┌──────────┐                        │
│    │ Client   │  │ Client   │  │ Client   │                        │
│    │ Card 1   │  │ Card 2   │  │ Card 3   │                        │
│    └──────────┘  └──────────┘  └──────────┘                        │
│                                                                     │
│                    View all case studies →                          │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                     NEWSLETTER SECTION                              │
│                                                                     │
│              ┌─────────────────────────────────┐                    │
│              │  [Email input]  [Subscribe]     │                    │
│              └─────────────────────────────────┘                    │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                     CHAT SECTION                                    │
│                                                                     │
│              [ Start a Conversation 💬 ]                            │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                     CTA SECTION                                     │
│                                                                     │
│  ┌───────────────────────────────────────────────────────────────┐  │
│  │            Let's Build Your Automation                        │  │
│  │               [ Schedule a Call ]                             │  │
│  └───────────────────────────────────────────────────────────────┘  │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│  [FOOTER]                                                           │
└─────────────────────────────────────────────────────────────────────┘
```

#### Mobile (375px)
```
┌─────────────────────┐
│  [NAV - Mobile]     │
├─────────────────────┤
│                     │
│   [HERO - 80vh]     │
│                     │
│   Badge             │
│                     │
│   Headline          │
│   Text              │
│                     │
│   Description       │
│                     │
│   [Primary CTA]     │
│   [Secondary CTA]   │
│                     │
│   Trust logos       │
│                     │
├─────────────────────┤
│   SERVICES          │
│                     │
│   ┌───────────────┐ │
│   │ Service 1     │ │
│   └───────────────┘ │
│   ┌───────────────┐ │
│   │ Service 2     │ │
│   └───────────────┘ │
│   ┌───────────────┐ │
│   │ Service 3     │ │
│   └───────────────┘ │
│        ...          │
│                     │
│   View all →        │
│                     │
├─────────────────────┤
│   WORKFLOWS         │
│                     │
│   ┌───────────────┐ │
│   │ Step 1        │ │
│   └───────────────┘ │
│   ┌───────────────┐ │
│   │ Step 2        │ │
│   └───────────────┘ │
│   ┌───────────────┐ │
│   │ Step 3        │ │
│   └───────────────┘ │
│                     │
├─────────────────────┤
│   CLIENTS           │
│   (Same pattern)    │
├─────────────────────┤
│   NEWSLETTER        │
│   [Email]           │
│   [Subscribe]       │
├─────────────────────┤
│   CHAT              │
│   [Start Chat]      │
├─────────────────────┤
│   CTA SECTION       │
├─────────────────────┤
│   [FOOTER]          │
└─────────────────────┘
```

---

### Page 2: SERVICES

#### Desktop (1440px)
```
┌─────────────────────────────────────────────────────────────────────┐
│  [NAV]                                                              │
├─────────────────────────────────────────────────────────────────────┤
│                     HERO SECTION                                    │
│                                                                     │
│                  Services & Pricing                                 │
│              Description text here                                  │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                     PRICING TIERS                                   │
│                                                                     │
│    ┌──────────┐  ┌──────────────┐  ┌──────────┐                    │
│    │          │  │  POPULAR ★   │  │          │                    │
│    │ Starter  │  │    Growth    │  │Enterprise│                    │
│    │          │  │              │  │          │                    │
│    │Let's Talk│  │  Let's Talk  │  │Let's Talk│                    │
│    │          │  │              │  │          │                    │
│    │ ✓ feat   │  │  ✓ feat      │  │ ✓ feat   │                    │
│    │ ✓ feat   │  │  ✓ feat      │  │ ✓ feat   │                    │
│    │ ✓ feat   │  │  ✓ feat      │  │ ✓ feat   │                    │
│    │          │  │  ✓ feat      │  │ ✓ feat   │                    │
│    │ [CTA]    │  │  [CTA]       │  │ [CTA]    │                    │
│    │          │  │              │  │          │                    │
│    └──────────┘  └──────────────┘  └──────────┘                    │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                     SERVICES GRID                                   │
│                                                                     │
│    ┌────────────────────┐  ┌────────────────────┐                   │
│    │ Service Card       │  │ Service Card       │                   │
│    │ with features      │  │ with features      │                   │
│    └────────────────────┘  └────────────────────┘                   │
│    ┌────────────────────┐  ┌────────────────────┐                   │
│    │ Service Card       │  │ Service Card       │                   │
│    │ with features      │  │ with features      │                   │
│    └────────────────────┘  └────────────────────┘                   │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                     FAQ SECTION                                     │
│                                                                     │
│    ┌─────────────────────────────────────────────────────────────┐  │
│    │ 01  How long does a typical project take?                   │  │
│    │     Answer text here...                                     │  │
│    └─────────────────────────────────────────────────────────────┘  │
│    ┌─────────────────────────────────────────────────────────────┐  │
│    │ 02  Do you offer ongoing support?                           │  │
│    │     Answer text here...                                     │  │
│    └─────────────────────────────────────────────────────────────┘  │
│    ┌─────────────────────────────────────────────────────────────┐  │
│    │ 03  What technologies do you use?                           │  │
│    │     Answer text here...                                     │  │
│    └─────────────────────────────────────────────────────────────┘  │
│                                                                     │
│                    Still have questions?                            │
│                    Get in touch →                                   │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│  [FOOTER]                                                           │
└─────────────────────────────────────────────────────────────────────┘
```

---

### Page 3: WORKFLOWS

#### Desktop (1440px)
```
┌─────────────────────────────────────────────────────────────────────┐
│  [NAV]                                                              │
├─────────────────────────────────────────────────────────────────────┤
│                     HERO SECTION                                    │
│                                                                     │
│                  [Badge: Automation Experts]                        │
│                  Workflows That Work For You                        │
│                  Description text here                              │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                     PROCESS SECTION                                 │
│                                                                     │
│         ───────────────────────────────────────                     │
│    ┌────┐     ┌────┐     ┌────┐     ┌────┐                         │
│    │ 1  │─────│ 2  │─────│ 3  │─────│ 4  │                         │
│    └────┘     └────┘     └────┘     └────┘                         │
│   Discover    Design     Develop    Deploy                          │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                     AUTOMATION SAMPLES                              │
│                                                                     │
│    ┌────────────────────────────┐  ┌────────────────────────────┐   │
│    │ [Category Badge]          │  │ [Category Badge]          │   │
│    │                           │  │                           │   │
│    │ Sample Title              │  │ Sample Title              │   │
│    │                           │  │                           │   │
│    │ ⚠️ Problem                │  │ ⚠️ Problem                │   │
│    │ Description text          │  │ Description text          │   │
│    │                           │  │                           │   │
│    │ ✅ Solution               │  │ ✅ Solution               │   │
│    │ Description text          │  │ Description text          │   │
│    │                           │  │                           │   │
│    │ Tools: [Tag] [Tag] [Tag]  │  │ Tools: [Tag] [Tag] [Tag]  │   │
│    └────────────────────────────┘  └────────────────────────────┘   │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                     CTA SECTION                                     │
├─────────────────────────────────────────────────────────────────────┤
│  [FOOTER]                                                           │
└─────────────────────────────────────────────────────────────────────┘
```

---

### Page 4: CLIENTS

#### Desktop (1440px)
```
┌─────────────────────────────────────────────────────────────────────┐
│  [NAV]                                                              │
├─────────────────────────────────────────────────────────────────────┤
│                     HERO SECTION                                    │
│                                                                     │
│                  [Badge: Trusted by Leaders]                        │
│                       Our Clients                                   │
│                  Description text here                              │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                     FILTER & GRID                                   │
│                                                                     │
│       [All] [Technology] [Healthcare] [Finance] [Retail]            │
│                                                                     │
│                    Showing X clients                                │
│                                                                     │
│    ┌──────────┐  ┌──────────┐  ┌──────────┐                        │
│    │ Client   │  │ Client   │  │ Client   │                        │
│    │ Card     │  │ Card     │  │ Card     │                        │
│    └──────────┘  └──────────┘  └──────────┘                        │
│    ┌──────────┐  ┌──────────┐  ┌──────────┐                        │
│    │ Client   │  │ Client   │  │ Client   │                        │
│    │ Card     │  │ Card     │  │ Card     │                        │
│    └──────────┘  └──────────┘  └──────────┘                        │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                     TESTIMONIALS                                    │
│                                                                     │
│    ┌────────────────────────────┐  ┌────────────────────────────┐   │
│    │  "                         │  │  "                         │   │
│    │  Quote text here...        │  │  Quote text here...        │   │
│    │                            │  │                            │   │
│    │  [Avatar] Name, Role       │  │  [Avatar] Name, Role       │   │
│    └────────────────────────────┘  └────────────────────────────┘   │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                     CTA SECTION                                     │
├─────────────────────────────────────────────────────────────────────┤
│  [FOOTER]                                                           │
└─────────────────────────────────────────────────────────────────────┘
```

---

### Page 5: TEAM

#### Desktop (1440px)
```
┌─────────────────────────────────────────────────────────────────────┐
│  [NAV]                                                              │
├─────────────────────────────────────────────────────────────────────┤
│                     HERO SECTION                                    │
│                                                                     │
│                  [Badge: Based in Makati]                           │
│                     Meet Our Team                                   │
│                  Description text here                              │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                     TEAM GRID                                       │
│                                                                     │
│    ┌──────────┐  ┌──────────┐  ┌──────────┐                        │
│    │  (IMG)   │  │  (IMG)   │  │  (IMG)   │                        │
│    │  Name    │  │  Name    │  │  Name    │                        │
│    │  Role    │  │  Role    │  │  Role    │                        │
│    │  Bio     │  │  Bio     │  │  Bio     │                        │
│    │ [social] │  │ [social] │  │ [social] │                        │
│    └──────────┘  └──────────┘  └──────────┘                        │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                     VALUES SECTION                                  │
│                                                                     │
│    ┌──────────┐  ┌──────────┐  ┌──────────┐                        │
│    │    🚀    │  │    🤝    │  │    ✨    │                        │
│    │Innovation│  │Partnership│  │Excellence│                        │
│    │  Desc    │  │   Desc   │  │   Desc   │                        │
│    └──────────┘  └──────────┘  └──────────┘                        │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                     CONTACT INFO                                    │
│                                                                     │
│         📍 Address    📞 Phone    ✉️ Email                          │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                     CTA SECTION                                     │
├─────────────────────────────────────────────────────────────────────┤
│  [FOOTER]                                                           │
└─────────────────────────────────────────────────────────────────────┘
```

---

### Page 6: CONTACT

#### Desktop (1440px)
```
┌─────────────────────────────────────────────────────────────────────┐
│  [NAV]                                                              │
├─────────────────────────────────────────────────────────────────────┤
│                     HERO SECTION                                    │
│                                                                     │
│                       Let's Talk                                    │
│                  Description text here                              │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                     CONTACT SECTION                                 │
│                                                                     │
│  ┌─────────────────────────────┐  ┌─────────────────────────────┐  │
│  │                             │  │                             │  │
│  │  Send us a Message          │  │  Contact Information        │  │
│  │                             │  │                             │  │
│  │  ┌───────────────────────┐  │  │  ┌───────────────────────┐  │  │
│  │  │ Your Name             │  │  │  │ 📍 Office Address     │  │  │
│  │  └───────────────────────┘  │  │  │    Makati City, PH    │  │  │
│  │  ┌───────────────────────┐  │  │  └───────────────────────┘  │  │
│  │  │ Email Address         │  │  │  ┌───────────────────────┐  │  │
│  │  └───────────────────────┘  │  │  │ 📞 Phone              │  │  │
│  │  ┌───────────────────────┐  │  │  │    +63 XXX-XXX-XXXX   │  │  │
│  │  │ Company (Optional)    │  │  │  └───────────────────────┘  │  │
│  │  └───────────────────────┘  │  │  ┌───────────────────────┐  │  │
│  │  ┌───────────────────────┐  │  │  │ ✉️ Email              │  │  │
│  │  │                       │  │  │  │    team@nexxuslab.com │  │  │
│  │  │ Your Message          │  │  │  └───────────────────────┘  │  │
│  │  │                       │  │  │                             │  │
│  │  │                       │  │  │  ┌───────────────────────┐  │  │
│  │  └───────────────────────┘  │  │  │                       │  │  │
│  │  ┌───────────────────────┐  │  │  │   MAP PLACEHOLDER     │  │  │
│  │  │    Send Message       │  │  │  │                       │  │  │
│  │  └───────────────────────┘  │  │  │   View on Maps →      │  │  │
│  │                             │  │  │                       │  │  │
│  └─────────────────────────────┘  │  └───────────────────────┘  │  │
│                                   │                             │  │
│                                   └─────────────────────────────┘  │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│  [FOOTER]                                                           │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 🎨 Figma Recreation Checklist

### Step 1: Setup
- [ ] Create new Figma file
- [ ] Set up 3 frames: Mobile (375×812), Tablet (768×1024), Desktop (1440×900)
- [ ] Install "Inter" font from Google Fonts
- [ ] Create color styles
- [ ] Create text styles

### Step 2: Components (Create in separate page)
- [ ] Navigation (Desktop + Mobile)
- [ ] Hero Section
- [ ] Section Header
- [ ] Service Card
- [ ] Pricing Tier Card
- [ ] Workflow Step Card
- [ ] Client Card
- [ ] Team Member Card
- [ ] Testimonial Card
- [ ] FAQ Item
- [ ] Contact Form
- [ ] CTA Section
- [ ] Footer

### Step 3: Pages
- [ ] Home (Desktop + Mobile)
- [ ] Services (Desktop + Mobile)
- [ ] Workflows (Desktop + Mobile)
- [ ] Clients (Desktop + Mobile)
- [ ] Team (Desktop + Mobile)
- [ ] Contact (Desktop + Mobile)

### Step 4: Prototype
- [ ] Link navigation to pages
- [ ] Add hover states
- [ ] Add mobile menu interactions

---

## 📎 Export Settings

For handoff to development:
- Export @1x, @2x for images
- Use CSS variables for colors
- Document all spacing values
- Include component specs

---

*Document prepared by: UI/UX Design Team*
*Last updated: January 26, 2026*
