# Purvi Discovery — Product Requirements Document

**Version:** 1.0
**Date:** March 2026
**Prepared for:** Purvi Discovery Pvt. Ltd.
**Document type:** Product Requirements Document (PRD)

---

## 1. Overview & Vision

### 1.1 What is Purvi Discovery?

Purvi Discovery is a pioneering heritage hospitality brand operating three colonial-era tea bungalows in Upper Assam, India — **Mancotta, Chowkidinghee, and Wathai** — established in 2000. The company curates immersive experiences (tea tours, bird walks, horse riding, cultural visits) and positions itself as the definitive authority on slow, heritage travel in Assam and the broader Northeast.

### 1.2 Vision Statement

To become the world's most recognized platform for heritage tea bungalow stays in Assam — blending colonial nostalgia, Assamese culture, and sustainable tourism into a single, unforgettable travel narrative.

### 1.3 Mission Statement

To offer travelers beyond-accommodation experiences that connect them with Assam's tea heritage, indigenous communities, and pristine wilderness — while championing responsible, community-first tourism.

### 1.4 Problem Statement

The current website is a dated, static brochure that fails to:
- Evoke the emotional romance of staying in a colonial-era bungalow surrounded by tea gardens
- Convey the depth and exclusivity of the experiences on offer
- Build trust with discerning international travelers
- Drive direct bookings or generate qualified leads effectively
- Reflect the brand's 25+ years of expertise and authority

### 1.5 Opportunity

Heritage and experiential travel is one of the fastest-growing segments globally (Bain & Company's 2024 travel report: "transformative travel" growing at 2x market rate). Assam's tea heritage is an underserved, globally compelling story with almost no digital footprint. Purvi Discovery has first-mover advantage — owning the digital narrative here is existential.

---

## 2. Strategic Analysis

### 2.1 Brand Pillars

| Pillar       | Description                                                            |
|--------------|------------------------------------------------------------------------|
| **Heritage** | Colonial-era bungalows, Raj-era architecture, living history           |
| **Tea**      | The world's largest tea-growing region; immersive tea culture          |
| **Wildlife** | Bird watching, gibbon sanctuaries, proximity to Dibru Saikhowa         |
| **Community**| Singpho tribe visits, local weavers, responsible tourism                |
| **Slow Travel** | No rushing — unhurried stays, long walks, tea tastings, stargazing  |

### 2.2 Target Audiences

| Segment                       | %   | Profile                                                          | Motivation                            |
|-------------------------------|-----|------------------------------------------------------------------|---------------------------------------|
| Heritage Enthusiasts          | 40% | 45-65+, UK/US/Australia, retired professionals, families with roots in Assam | Nostalgia, ancestry tours, colonial history |
| Nature & Birding Travelers    | 25% | 35-60, global, ornithologists, wildlife photographers            | Rare species (Hollock gibbon, migratory birds), eco-tourism |
| Luxury Slow Travelers         | 20% | 30-55, urban Indians (Delhi, Mumbai, Bangalore) + affluent global | Exclusivity, digital detox, aesthetics |
| Solo & Couple Adventurers     | 15% | 28-45, backpackers to mid-range, domestic and SE Asia           | Off-the-beaten-path, authenticity, cultural immersion |

### 2.3 Competitive Landscape

**Direct competitors** (heritage tea bungalows in Assam):
- Gibri Estate, Jorhat
- Local estate bungalows (informal, no web presence)

**Indirect competitors** (Northeast India tour operators):
- Pure Travel India
- Greener Pastures
- Northeast package tour operators

**Gap:** No competitor has a strong, design-forward digital presence in this niche. Purvi Discovery can own the "heritage tea bungalow" keyword cluster globally.

### 2.4 Key Business Metrics

| Metric                    | Current State            | 12-Month Target  |
|---------------------------|--------------------------|------------------|
| Organic search traffic    | Low (minimal SEO)        | +300%            |
| Direct booking rate       | Near zero (third-party)   | 25% of total     |
| Average session duration  | < 1 min (high bounce)     | > 3.5 min        |
| Lead form submissions     | < 10/month               | 80+/month        |
| Booking engine integration| None (external link)     | Fully integrated |

---

## 3. Product Requirements

### 3.1 Information Architecture

```
Home
├── Hero — Full-bleed cinematic video/imagery, tagline, primary CTA
├── Brand Story Snippet — "Since 2000" + 3-pillar intro
├── Bungalows Showcase — Cards for Mancotta, Chowkidinghee, Wathai
├── Experiences Preview — Curated visual grid
├── Testimonials Wall — Live social proof
├── Press / As Seen In
├── Newsletter / Lead Capture
└── Footer — Contact, links, social

/Bungalows
├── Mancotta Heritage Bungalow
│   ├── Gallery
│   ├── Rooms & Suites
│   ├── Amenities
│   ├── Experiences at Mancotta
│   └── Reviews
├── Chowkidinghee Heritage Bungalow
│   └── (same sections)
└── Wathai Heritage Bungalow
    └── (same sections)

/Experiences
├── Tea Tours
├── Country Walks & Birding
├── Horse Riding
├── Golf
├── Weaving & Handicrafts
└── Festivals & Culture

/Book (Integrated Booking Engine)
├── Property Selector
├── Date Picker (live availability)
├── Room/Suite Selector
├── Add-on Experiences
└── Guest Details + Payment

/Tours
├── Multi-day itinerary packages
├── Day trips
└── Custom/group itineraries

/Who We Are
├── Brand Story
├── Team
├── Sustainability & Responsible Tourism
├── Press & Awards
└── Blog

/Getting Here
├── How to reach (air, rail, road)
├── Transfer arrangements
└── Visa & travel advisories

/Contact
├── Inquiry Form
├── WhatsApp CTA (sticky)
└── Office addresses
```

### 3.2 Core Feature Requirements

#### 3.2.1 Immersive Homepage
- **Cinematic hero section:** Full-viewport, autoplay video loop of tea gardens at dawn, misty mornings, colonial bungalow facade. Parallax scroll.
- **Scroll-driven storytelling:** Sections reveal as user scrolls — animated text, staggered image grids, subtle parallax layers.
- **Sticky CTA bar:** "Book Your Stay" always accessible without hunting.
- **Dynamic date availability widget:** Quick-check availability from homepage.

#### 3.2.2 Bungalow Detail Pages (3)
Each bungalow page must include:
- Fullscreen image gallery with lightbox, swipe gestures, and room/area categorization
- Virtual tour integration (360 degree photos)
- Room inventory with live availability from booking engine
- Experience tags — what makes this bungalow unique
- Guest reviews — geo-tagged, categorized by travel type (couple, family, solo)
- Location map with surrounding points of interest
- "Best for" recommendation — families, birders, tea lovers, etc.

#### 3.2.3 Integrated Booking Engine
- Live availability calendar (no redirects to third-party)
- Room types, pricing, and extras displayed inline
- Multi-property booking (stay at Mancotta + Wathai in one trip)
- Experience add-ons during booking flow
- Secure payment (Razorpay / Stripe for international)
- Confirmation + itinerary email auto-generated
- Cancellation/modification self-serve portal
- Guest account for returning visitors

#### 3.2.4 Experiences Module
- Filterable grid — by activity type, duration, difficulty, proximity
- Rich media pages — video, photo essays, guest stories, seasonal availability
- Experience bundles — "Tea & Tigers," "Birding Bonanza," etc.
- Seasonal calendar — best time to visit for each experience
- Booking integration — add to stay or book as standalone day trip

#### 3.2.5 Tour Packages
- Pre-curated multi-day itineraries (2N/3D, 5N/6D, etc.)
- Itinerary builder — guests can customize days, bungalows, experiences
- Group tour calendar — scheduled departure dates for small groups
- Custom itinerary request form — for high-value inquiries

#### 3.2.6 Testimonials & Social Proof
- Verified guest reviews with photo, name, country, travel date
- Instagram feed integration — geo-tagged posts from guests
- Press mentions — TTG, National Geographic Traveller, Outlook Traveller
- "As seen in" logos prominently displayed

#### 3.2.7 Lead Capture & CRM
- Exit-intent popup with itinerary planning guide (lead magnet)
- Newsletter with seasonal updates, new experiences, early-bird offers
- WhatsApp integration — sticky chat widget, inquiry via WhatsApp Business API
- CRM backend — capture, tag, and segment leads by interest

#### 3.2.8 SEO & Content
- Blog — travel guides (Dibrugarh, Majuli, Sivasagar), seasonal packing lists, heritage essays
- Target keyword clusters: "heritage tea bungalow Assam," "Assam tea estate stay," "heritage hotels Northeast India," "bird watching Assam"
- Schema markup for Hotel, TourOperator, Event, Review
- Multi-language support — Hindi + Bengali (high domestic traffic)

### 3.3 Technical Requirements

| Requirement           | Specification                                                                          |
|-----------------------|---------------------------------------------------------------------------------------|
| **Platform**          | Headless CMS (Sanity) + Next.js frontend                                              |
| **Hosting**          | Vercel + Cloudflare Pages (edge-cached for global speed)                               |
| **Performance**       | Lighthouse score > 90 on mobile; Core Web Vitals green                                 |
| **CMS**              | Sanity.io (rich media, i18n, real-time content updates)                               |
| **Booking Engine**    | Custom integration with existing partner OR Cloudbeds/Asiyo API                         |
| **Payments**         | Razorpay (INR) + Stripe (international)                                               |
| **CDN**              | Cloudflare for image optimization and DDoS protection                                  |
| **Images**           | WebP/AVIF format, lazy loading, blur placeholders                                     |
| **Analytics**        | Google Analytics 4 + Hotjar + Google Search Console                                   |
| **SEO**              | Open Graph, Twitter cards, hreflang, semantic HTML                                    |
| **Accessibility**    | WCAG 2.1 AA compliance                                                                |
| **Security**         | HTTPS (forced), CSP headers, rate limiting on forms                                    |
| **Email**            | ConvertKit (newsletters) + Resend (transactional)                                     |
| **Maps**             | Mapbox (styled custom maps matching brand aesthetic)                                   |
| **Chat**             | Crisp or Intercom for pre-booking queries                                             |
| **WhatsApp**         | WhatsApp Business API with quick-reply bots                                           |

### 3.4 Third-Party Integrations

| Integration           | Purpose                                       |
|----------------------|-----------------------------------------------|
| Booking Engine API   | Live availability, pricing, reservations       |
| Razorpay / Stripe    | Payment processing                            |
| Instagram Graph API  | Social feed on homepage                       |
| Trustpilot / Reviews | Pull verified guest reviews                  |
| WhatsApp Business API | Inquiry and booking assistance              |

---

## 4. Design & User Experience Direction

### 4.1 Aesthetic Direction

**"Colonial Garden Archive"** — The visual identity should feel like opening a beautifully preserved photo album from the 1930s, mixed with the tactility of a botanical field journal. Think: aged cream paper, pressed ferns, vintage botanical illustrations, ink-stamped lettering, handwritten annotations on maps. Warm, textured, romantic — not cold and corporate.

**NOT:** Generic luxury hotel aesthetics (dark hero images, gold accents, stock photos of champagne). **NOT:** sterile modernism.

### 4.2 Color Palette

| Role             | Color             | Hex       | Use                                      |
|------------------|-------------------|-----------|------------------------------------------|
| Primary          | Warm Tea Brown    | `#5C3D2E` | Headings, CTAs, brand elements           |
| Secondary        | Lush Tea Green    | `#3D5A3D` | Accents, nature sections, icons           |
| Accent           | Brass Gold        | `#C9A84C` | Borders, highlights, luxury touches      |
| Background       | Aged Cream        | `#F5F0E8` | Page background                          |
| Surface          | Warm White        | `#FDFAF5` | Cards, modals                            |
| Text Primary     | Deep Bark         | `#2C1A0E` | Body text                                |
| Text Secondary   | Faded Ink         | `#7A6B5E` | Captions, metadata                       |
| Overlay          | Misty Sepia       | `rgba(44, 26, 14, 0.6)` | Image overlays                   |

### 4.3 Typography

| Role                  | Font                   | Character                              |
|-----------------------|------------------------|----------------------------------------|
| Display / Headings    | Playfair Display       | Romantic, editorial, heritage          |
| Sub-headings          | Cormorant Garamond     | Refined, botanical journal feel        |
| Body                  | Source Serif 4         | Highly readable, warm, editorial      |
| UI / Labels           | DM Sans                | Clean, modern contrast to serif       |
| Accent / Pull quotes  | Caveat (handwritten)   | Guest testimonials, annotations       |

### 4.4 Motion Philosophy

- **Entrance animations:** Fade-up with stagger (100ms delay between elements) — evokes turning pages
- **Scroll-triggered reveals:** Text and images emerge as user scrolls — mimics reading a book
- **Parallax:** Subtle depth on hero images and section dividers
- **Image transitions:** Ken Burns effect on hero; smooth crossfade on galleries
- **Hover states:** Gentle scale (1.02), warm shadow lift, color shifts toward brass gold
- **Page transitions:** Soft fade, no jarring cuts
- **No:** Bouncing, spinning, or attention-grabbing animations — everything should feel unhurried

### 4.5 Layout Principles

- **Editorial magazine grid** — asymmetric, with generous whitespace and text-wrapping images
- **Section rhythm:** Alternating dense (gallery + text) and airy (full-bleed image) sections
- **Visual pacing:** Hero (cinematic) -> Story (quiet) -> Bungalows (dense) -> Experience (light) -> Social proof (quiet) -> CTA (warm)
- **Responsive:** Mobile-first; the site must feel native on a phone held in a tea garden at golden hour
- **Accessibility:** Alt text for every image; keyboard navigation; sufficient contrast; reduced-motion support

### 4.6 Photography & Video Direction

**Required:**
- Drone footage of bungalow surroundings (tea gardens, river, forest edges)
- Golden hour photography — warm light, morning mist, lanterns
- Detail photography: old brass keys, tea cups, embroidered cushions, cricket bats on verandas
- Lifestyle photography: guests reading on porches, tea pluckers at work, tribal artisans

**Avoid:** Generic stock photos; posed, stiff hotel shots; washed-out daylight images

---

## 5. Content Requirements

### 5.1 Brand Voice

- **Tone:** Warm, unhurried, knowledgeable, romantic — like a well-traveled friend writing from Assam
- **Avoid:** Corporate-speak, superlatives ("world's best," "luxury"), AI-generated blandness
- **Voice:** Descriptive, sensory. Write about smells (wet earth, fresh tea), sounds (gibbons at dawn, distant plucker songs), textures (old teak, rough linen)

### 5.2 Key Copy Priorities

| Section              | Copy Focus                                                    |
|----------------------|---------------------------------------------------------------|
| Homepage Hero        | Evocative tagline — sensory, not transactional               |
| Bungalow intros      | Unique character of each bungalow (not copy-paste)           |
| Experience descriptions | What the guest *feels*, not just *does*                  |
| About page           | 25-year story, founder's vision, community commitment        |
| Booking confirmation | Warm, personal — sets expectations for the stay             |
| Post-stay email      | "We'd love your story" — encourage reviews and sharing       |

### 5.3 Microcopy

- Form validation: Warm, helpful ("Almost there! Just need your email to send your itinerary")
- Empty states: Suggest an action ("No availability this date? Ask us about alternatives — we love a good challenge")
- 404 page: Themed ("You've wandered off the estate map. Let's get you back.")

---

## 6. Performance & Quality Requirements

| Criteria                            | Target              |
|-------------------------------------|---------------------|
| Page Load Time (LCP)                | < 2.5s on 3G        |
| First Input Delay (FID)              | < 100ms             |
| Cumulative Layout Shift (CLS)        | < 0.1               |
| Mobile usability                     | 100/100 PageSpeed   |
| SEO score                           | 90+/100             |
| Conversion rate (homepage -> booking)| > 2.5%              |
| Form submission rate                 | > 4% of sessions    |
| Accessibility                       | WCAG 2.1 AA         |
| Uptime                              | 99.9% SLA           |

---

## 7. Roadmap & Phases

### Phase 1 — Foundation (Weeks 1-6)
- Design system: colors, typography, components
- Homepage redesign (hero, bungalow showcase, story)
- Bungalow detail pages (Mancotta first, then Chowkidinghee, Wathai)
- Responsive implementation (mobile-first)
- CMS setup (Sanity)

### Phase 2 — Booking & Experiences (Weeks 7-12)
- Booking engine integration (live availability, room inventory)
- Experiences module (all 6 experience types)
- Tour packages section with itinerary builder
- Payment gateway integration
- Lead capture forms + CRM setup

### Phase 3 — Content, SEO & Polish (Weeks 13-16)
- Blog with 12 SEO-optimized articles
- SEO audit + schema markup + sitemap
- Testimonials + social proof integration
- Instagram feed + review aggregation
- Performance optimization (image CDN, lazy loading)
- Accessibility audit + fixes
- Analytics + Hotjar setup
- Pre-launch QA + cross-browser testing

### Phase 4 — Launch & Iterate (Week 17+)
- Soft launch (beta users)
- Feedback iteration
- Launch campaign (email, social, Google Ads)
- Monthly content calendar (blog + social)
- A/B testing on booking flow

---

## 8. Success Metrics

| KPI                        | Baseline  | 6-Month Target | 12-Month Target |
|----------------------------|-----------|----------------|----------------|
| Organic sessions/month     | ~2,000    | 8,000          | 20,000         |
| Direct bookings (website)   | 0         | 15/month       | 50/month       |
| Booking revenue via website | Rs.0      | Rs.6L/month    | Rs.25L/month   |
| Avg. session duration      | 45 sec    | 3 min          | 4 min          |
| Bounce rate                | ~80%      | 45%            | 35%            |
| Lead form submissions/month | ~8        | 40             | 100            |
| Newsletter subscribers      | ~500      | 2,000          | 5,000          |
| Lighthouse (mobile)        | ~50       | 85             | 92             |
| "Book Now" CTA click rate   | < 1%      | 3%             | 5%             |

---

## 9. Risks & Mitigations

| Risk                                    | Probability | Impact | Mitigation                                               |
|-----------------------------------------|-------------|--------|----------------------------------------------------------|
| Booking engine API not ready            | Medium      | High   | Modular integration layer; fallback to inquiry form     |
| Content / photography not ready         | High        | Medium | Curated stock + existing assets; phased photography    |
| Internal buy-in / approval delays       | Medium      | High   | Weekly demos; iterate in public; internal champion      |
| Slow hosting in India                   | Low         | Medium | Edge hosting (Vercel/Cloudflare); image CDN           |
| SEO competition from OTA giants         | Low         | Medium | Long-tail niche keywords; own "heritage tea bungalow"  |
| WhatsApp/payment API regional restrictions | Low      | Medium | Dual gateway (Razorpay + Stripe); WhatsApp + email fallback |

---

## 10. Appendix

### 10.1 Reference Sites
- [Soneva](https://www.soneva.com/) — storytelling, booking flow
- [Aman Resorts](https://www.aman.com/) — editorial restraint, photography
- [Abercrombie & Kent](https://www.abercrombiekent.com/) — luxury travel UX patterns

### 10.2 Glossary
- **OTA:** Online Travel Agency (e.g., MakeMyTrip, Booking.com)
- **Chang Bungalow:** Tea garden manager's residence; the colonial-era bungalow typology Purvi operates
- **Dibrugarh:** Capital of Upper Assam; nearest city/railhead
- **Hollock Gibbon:** Endangered primate found near Wathai and Barekuri
- **Majuli:** World's largest inhabited river island, accessible via Purvi experiences
- **Singpho:** Indigenous tribal community near tea estates; part of Purvi cultural tours

### 10.3 Key Contacts

| Role                    | Name | Email                                |
|-------------------------|------|--------------------------------------|
| Primary decision-maker  | TBD  | TBD                                  |
| Technical / booking lead| TBD  | purvidiscovery@purvidiscovery.com   |
| Content / brand         | TBD  | purvidiscovery@purvidiscovery.com   |

---

*This PRD is a living document. It should be reviewed and updated every quarter as the product evolves and metrics come in. All estimates are based on current site analysis and industry benchmarks — they should be validated with actual data post-launch.*
