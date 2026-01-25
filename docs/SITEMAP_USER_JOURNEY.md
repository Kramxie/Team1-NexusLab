# Nexxus Lab - Sitemap & User Journey

## 📍 Proposed Sitemap Structure

```
nexxuslab.com/
│
├── / (Home)
│   └── Hero → Services Preview → Workflows → Clients → Newsletter → CTA
│
├── /services
│   └── Service Overview → Pricing Tiers → Detailed Services → FAQ → CTA
│
├── /workflows
│   └── Process Overview → Automation Samples → CTA
│
├── /clients
│   └── Client Showcase (filterable) → Testimonials → CTA
│
├── /team
│   └── Team Members → Company Values → Contact Info → CTA
│
├── /contact
│   └── Contact Form → Contact Info → Map
│
└── (Future Pages)
    ├── /blog (Content Marketing)
    ├── /case-studies/[slug] (Detailed Case Studies)
    └── /pricing (Dedicated Pricing Page)
```

---

## 🧭 User Journey Maps

### Journey 1: New Visitor → Lead (Primary Conversion)

```
Landing (Home)
    ↓
Explore Services (/services)
    ↓
View Pricing Tiers
    ↓
Check Clients/Social Proof (/clients)
    ↓
Contact Form (/contact)
    ↓
✅ CONVERSION: Lead Captured
```

**Key Touchpoints:**
- Hero CTA: "Start Your Project"
- Services page pricing comparison
- Client testimonials as social proof
- Low-friction contact form

---

### Journey 2: Research Phase → Qualified Lead

```
Landing (Home or /services)
    ↓
Deep Dive: Workflows/Automation (/workflows)
    ↓
Evaluate Team Expertise (/team)
    ↓
Review Case Studies (/clients)
    ↓
Subscribe to Newsletter
    ↓
Receive Nurture Emails
    ↓
Book Discovery Call (/contact)
    ↓
✅ CONVERSION: Qualified Lead
```

**Key Touchpoints:**
- Workflow automation samples
- Team credentials & values
- Newsletter signup (lead nurture)
- Multiple CTA opportunities

---

### Journey 3: Referral → Fast Conversion

```
Direct Link (from referral)
    ↓
Landing (Home)
    ↓
Quick Services Scan
    ↓
Contact Form (/contact)
    ↓
✅ CONVERSION: Warm Lead
```

**Key Touchpoints:**
- Trust indicators on homepage
- Clear, accessible contact options
- Fast path to conversion

---

## 🎯 Conversion Points by Page

| Page | Primary CTA | Secondary CTA |
|------|-------------|---------------|
| Home | "Start Your Project" | "Explore Services" |
| Services | "Get Started" (pricing) | "Contact Us" (custom) |
| Workflows | "Schedule a Consultation" | "View Services" |
| Clients | "Start Your Project" | "View Services" |
| Team | "Contact Us" | Newsletter signup |
| Contact | Form submission | Direct email/phone |

---

## 📊 Analytics Events to Track

```javascript
// Key conversion events
- 'cta_click': { location, destination }
- 'form_submit': { form_type, page }
- 'pricing_tier_click': { tier_name }
- 'client_card_click': { client_id }
- 'newsletter_signup': { page }
- 'contact_method': { method: 'form' | 'email' | 'phone' }
```

---

## 🔄 Navigation Flow

### Header Navigation
```
Logo → Home
Services → /services
Workflows → /workflows  
Clients → /clients
Team → /team
Contact → /contact
[CTA Button] → /contact (Book a Call)
```

### Footer Navigation
```
Quick Links: Services, Workflows, Clients, Team, Contact
Legal: Privacy Policy, Terms of Service
Social: LinkedIn, GitHub, Facebook, Instagram
Contact: Address, Phone, Email
```

---

## 📱 Mobile-First Priorities

1. **Sticky header** with hamburger menu
2. **Thumb-friendly CTAs** at bottom of viewport
3. **Collapsible sections** for long content
4. **Click-to-call** phone number
5. **Simplified forms** (fewer fields on mobile)

---

## 🚀 Future Enhancements

1. **Blog Section** - SEO & thought leadership
2. **Case Study Pages** - Deep dives per client
3. **Pricing Calculator** - Interactive quote tool
4. **Live Chat Widget** - Crisp/Tidio integration
5. **Client Portal** - Project tracking for active clients
