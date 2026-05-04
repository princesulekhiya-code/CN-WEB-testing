# Cloud Nexus — Website Architecture & Full Documentation

> **Project Name:** Cloud Nexus (CN-Web)
> **Version:** 0.0.1
> **Framework:** Next.js 16 (App Router) + React 19
> **Language:** TypeScript
> **Styling:** Tailwind CSS v4 + Framer Motion
> **Deployment:** Vercel (cn-web-21-04-26.vercel.app)
> **Repositories:**
> - [web-cn-20-04-2025](https://github.com/princesulekhiya-code/web-cn-20-04-2025)
> - [CN-WEB-21-04-26](https://github.com/princesulekhiya-code/CN-WEB-21-04-26)

---

## Table of Contents

1. [Tech Stack](#tech-stack)
2. [Project Structure](#project-structure)
3. [Route Architecture](#route-architecture)
4. [Page Details — Main Website](#page-details--main-website)
5. [Page Details — Admin Panel](#page-details--admin-panel)
6. [Components](#components)
7. [API & Backend Integration](#api--backend-integration)
8. [Styling & Theming](#styling--theming)
9. [Assets](#assets)
10. [Configuration](#configuration)

---

## Tech Stack

| Category | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript 5.9 |
| **UI Library** | React 19 |
| **Styling** | Tailwind CSS 4 + shadcn/ui |
| **Animations** | Framer Motion 12 |
| **Icons** | Lucide React |
| **HTTP Client** | Axios |
| **Smooth Scroll** | Lenis |
| **Theme** | next-themes (dark/light) |
| **Backend** | Node.js + Express + PostgreSQL (Prisma) |
| **Database/Storage** | Supabase |
| **Deployment** | Vercel + Netlify support |
| **CI/CD** | GitHub Actions |

| **Container** | Docker |

---

## Project Structure

```
web-cn-20-04-2025/
├── app/
│   ├── layout.tsx                    # Root layout (fonts, theme provider, smooth scroll)
│   ├── loading.tsx                   # Global loading spinner
│   ├── not-found.tsx                 # 404 page
│   ├── globals.css                   # Global styles, CSS variables, animations
│   ├── (main)/                       # Main website (with Navbar + Footer)
│   │   ├── layout.tsx                # Navbar, Footer, ScrollToTop
│   │   ├── loading.tsx               # Main section loading
│   │   ├── page.tsx                  # Homepage
│   │   ├── company/                  # Company pages
│   │   ├── services/                 # All service pages (20 categories, 129 pages)
│   │   ├── industry/                 # Industry pages (15 industries)
│   │   ├── resources/                # Resources pages
│   │   └── our-work/                 # Portfolio/Our Work page
│   └── (admin)/                      # Admin panel (with Sidebar)
│       ├── layout.tsx                # Admin sidebar, topbar, auth wrapper
│       └── admin/                    # Admin CRUD pages
├── components/
│   ├── navbar/                       # Navigation bar
│   ├── footer/                       # Footer
│   ├── sections/                     # Reusable page sections
│   ├── ui/                           # shadcn/ui components
│   └── *.tsx                         # Standalone components
├── lib/
│   ├── api/                          # API client, endpoints, services
│   ├── utils.ts                      # Utility functions
│   ├── supabase.ts                   # Supabase client
│   └── admin-auth-context.tsx        # Admin authentication context
├── hooks/                            # Custom React hooks
├── public/
│   └── assets/images/                # Local images (27 files)
├── backend/                          # Express.js backend (separate)
├── next.config.mjs                   # Next.js configuration
├── package.json                      # Dependencies
└── Dockerfile                        # Docker configuration
```

---

## Route Architecture

### Total Pages: ~180+

```
                            ┌──────────────────────┐
                            │    Root Layout       │
                            │  (Fonts, Theme,      │
                            │   Smooth Scroll)     │
                            └──────────┬───────────┘
                                       │
                    ┌──────────────────┴──────────────────┐
                    │                                      │
            ┌───────┴───────┐                    ┌────────┴────────┐
            │  (main)       │                    │  (admin)        │
            │  Layout       │                    │  Layout         │
            │  Navbar +     │                    │  Sidebar +      │
            │  Footer +     │                    │  Topbar +       │
            │  ScrollToTop  │                    │  Auth Guard     │
            └───────┬───────┘                    └────────┬────────┘
                    │                                      │
    ┌───────┬───────┼───────┬────────┐          ┌──────┬──┴──┬──────┐
    │       │       │       │        │          │      │     │      │
  Home  Company Services Industry Resources   Blogs  Jobs  Apps  Contacts
         (8)    (129)    (16)     (8)          (CRUD) (CRUD) (List) (List)
```

---

## Page Details — Main Website

### Homepage `/`
- Hero section with animated text and CTA buttons
- Top clients marquee
- "Known For" section
- Why CloudNexus section
- Build, Scale, Thrive section
- Stats globe with animated counters
- Case studies
- Tech stack showcase
- Testimonials
- Free consultation CTA

---

### Company Pages `/company/*`

| Route | Page | Description |
|---|---|---|
| `/company` | **Company Landing** | Hero, Stats bar, "Explore Cloud Nexus" cards linking to all sub-pages, Core Values, "Our Growth Journey" timeline with plant metaphor, CTA |
| `/company/overview` | **Company Overview** | Detailed company overview with stats, service offerings grid, tech capabilities, "Our Growth Journey" timeline, global presence map, CTA |
| `/company/about-us` | **About Us** | Company story, mission, vision, core values, leadership team, company culture |
| `/company/team` | **Our Team** | Team members showcase with roles, photos, and social links |
| `/company/infrastructure` | **Infrastructure** | Hero with data center image, office infrastructure (minimal icon cards), multi-cloud architecture diagram, CI/CD pipeline (interactive expandable cards), security measures |
| `/company/events` | **Events** | Hero with stats, featured events (tabbed), upcoming schedule, past highlights gallery, "Why Attend" section, CTA |
| `/company/career-benefits` | **Career Benefits** | Hero with stats, quick overview cards, banking & financial benefits (accordion), employee welfare & lifestyle cards, "Why Should You Join" interactive grid (9 cards), CTA |
| `/company/process-methodology` | **Process & Methodology** | Development methodology, agile process, quality assurance approach |
| `/company/life-at-cloud-nexus` | **Life at Cloud Nexus** | Company culture, workplace environment, employee experiences |

---

### Services Pages `/services/*` (20 Categories, 129 Pages)

Each service category has a **main page** + **sub-service pages**.

| # | Category | Route | Sub-Services |
|---|---|---|---|
| 1 | **All Services** | `/services` | Landing page listing all categories |
| 2 | **AI, ML & Data Science** | `/services/ai-ml-data-science` | Computer Vision, Data Engineering, Generative AI, Machine Learning, NLP & Conversational AI, Predictive Analytics |
| 3 | **Cloud Services** | `/services/cloud-services` | Cloud Application Services, Cloud Implementation Strategy, Cloud Infrastructure, Cloud Management, Cloud Migration, DevOps-as-a-Service |
| 4 | **Cloud & SaaS Solutions** | `/services/cloud-saas-solutions` | Landing page |
| 5 | **Custom Software Development** | `/services/custom-software-development` | Landing page |
| 6 | **Cybersecurity & Compliance** | `/services/cybersecurity-compliance` | Compliance Frameworks, Data Protection, Incident Response, Infrastructure Security, Security Assessment, Threat Monitoring |
| 7 | **DevOps & Cloud Automation** | `/services/devops-cloud-automation` | CI/CD Pipelines, Cloud Automation, Containerization, DevSecOps, Infrastructure as Code, Monitoring & Observability |
| 8 | **Digital Marketing** | `/services/digital-marketing` | App Store Optimization, Content Marketing, Email Marketing, PPC Advertising, SEO, Social Media Marketing |
| 9 | **Digital Transformation** | `/services/digital-transformation` | Architecture Modernization, Data Engineering & AI, Integration Modernization, Product Re-engineering, Technology Modernization, UI/UX Modernization |
| 10 | **E-commerce Development** | `/services/ecommerce-development` | E-commerce Mobile App, E-commerce Platform, Enterprise E-commerce, Headless Commerce, Multi-vendor Marketplace, Payment & Checkout |
| 11 | **Hire Dedicated Developers** | `/services/hire-dedicated-developers` | Hire Backend Developers, Hire Database Developers, Hire Digital Marketing Experts, Hire E-commerce/CMS Experts, Hire Frontend Developers, Hire Mobile App Developers |
| 12 | **IT Consulting** | `/services/it-consulting` | Cloud & Data Migration, Custom App Development, Digital Transformation Consulting, IT Assessments, IT Strategy & Planning, Security & Risk Assessments |
| 13 | **Mobile App Development** | `/services/mobile-app-development` | Android App Development, Flutter App Development, iOS App Development, MVP Development, Progressive Web Apps, React Native Development |
| 14 | **MVP Development** | `/services/mvp-development` | MVP Build, MVP Consulting, MVP Improvement, MVP to Full Scale, Prototype Design, Single Feature MVP |
| 15 | **Product Engineering** | `/services/product-engineering` | Digital Product Consultation, Digital Product Development, Product Experience Design, Product Prototyping, Quality Engineering, Software Product Architecting |
| 16 | **SaaS Development** | `/services/saas-development` | Custom SaaS Platform, SaaS API Integration, SaaS Mobile Solutions, SaaS Security, SaaS UI/UX Design, Subscription & Billing |
| 17 | **Software Development** | `/services/software-development` | Custom CRM Development, Custom Software, Data Analytics, Enterprise Software, Legacy System Modernization, Software Product Development |
| 18 | **Technology Consulting** | `/services/technology-consulting` | AI & Data Science Consulting, Augmented Reality Consulting, Big Data Consulting, Chatbot Consulting, Digital Experience Consulting, IoT Consulting |
| 19 | **UI/UX Design** | `/services/ui-ux-design` | Design Testing, Interaction Design, Mobile Design, UI/UX Consulting, Visual Design, Web Design |
| 20 | **Web Development** | `/services/web-development` | CMS Website Development, Custom Website Development, E-commerce Website Development, Progressive Web App Development, Responsive Website Design, Single Page App Development |
| 21 | **WordPress Development** | `/services/wordpress-development` | CMS Development, Custom WordPress Development, Responsive Theme Development, WordPress E-commerce, WordPress Migration & Maintenance, WordPress Plugin Development |

---

### Industry Pages `/industry/*` (16 Pages)

| Route | Industry |
|---|---|
| `/industry` | **Industries Landing Page** — Grid of all industries |
| `/industry/banking-finance-insurance` | Banking, Finance & Insurance |
| `/industry/ecommerce-solutions` | E-Commerce Solutions |
| `/industry/education-elearning` | Education & E-Learning |
| `/industry/enterprise-retail-manufacturing` | Enterprise, Retail & Manufacturing |
| `/industry/fintech` | FinTech |
| `/industry/healthcare-lifesciences` | Healthcare & Life Sciences |
| `/industry/home-service` | Home Services |
| `/industry/mcommerce` | M-Commerce |
| `/industry/media-entertainment` | Media & Entertainment |
| `/industry/oil-gas` | Oil & Gas |
| `/industry/on-demand-delivery` | On-Demand Delivery |
| `/industry/real-estate` | Real Estate |
| `/industry/social-networking` | Social Networking |
| `/industry/transport-logistics` | Transport & Logistics |
| `/industry/travel-hospitality` | Travel & Hospitality |

---

### Resources Pages `/resources/*`

| Route | Page | Description |
|---|---|---|
| `/resources` | **Resources Landing** | Cards linking to Blog, Career, Contact, Support, Consultation |
| `/resources/blog` | **Blog Listing** | All blog posts with hero, featured posts, grid layout |
| `/resources/blog/[slug]` | **Blog Detail** | Individual blog post (dynamic route, fetched from API) |
| `/resources/career` | **Careers** | Job listings, company culture, benefits overview |
| `/resources/career/[slug]` | **Job Detail** | Individual job posting (dynamic route, fetched from API) |
| `/resources/contact` | **Contact Us** | Contact form, office locations, map, social links |
| `/resources/support` | **Support** | Support channels, FAQ, ticket submission |
| `/resources/free-consultation` | **Free Consultation** | Consultation booking form, process steps |

---

### Other Pages

| Route | Page |
|---|---|
| `/our-work` | **Portfolio / Our Work** — Case studies and project showcases |

---

## Page Details — Admin Panel

### Admin Pages `/admin/*`

The admin panel has its own layout with a **sidebar navigation**, **topbar** with user info, and **authentication guard** using `AdminAuthProvider`.

| Route | Page | Description |
|---|---|---|
| `/admin` | **Dashboard** | Admin overview with stats and quick actions |
| `/admin/login` | **Login** | Admin authentication page |
| `/admin/signup` | **Signup** | Admin registration page |
| `/admin/blogs` | **Blog Management** | List all blogs, create/edit/delete (CRUD) |
| `/admin/blogs/new` | **New Blog** | Blog creation form |
| `/admin/blogs/[id]` | **Edit Blog** | Blog editing form (dynamic route) |
| `/admin/jobs` | **Job Postings** | List all job postings, create/edit/delete (CRUD) |
| `/admin/jobs/new` | **New Job** | Job posting creation form |
| `/admin/jobs/[id]` | **Edit Job** | Job posting editing form (dynamic route) |
| `/admin/applications` | **Applications** | View/manage job applications |
| `/admin/contacts` | **Contacts** | View contact form submissions |

---

## Components

### Layout Components

| Component | Path | Description |
|---|---|---|
| `Navbar` | `components/navbar/navbar.tsx` | Main navigation with mega-menu dropdowns for Services, Company, Resources, Industry. Supports mobile responsive drawer. |
| `LanguageSwitcher` | `components/navbar/language-switcher.tsx` | Language selection dropdown |
| `Footer` | `components/footer/footer.tsx` | Site-wide footer with links, social icons, company info |
| `ScrollToTop` | `components/scroll-to-top.tsx` | Floating button to scroll back to top |
| `SmoothScroll` | `components/smooth-scroll.tsx` | Lenis-based smooth scroll wrapper |
| `ThemeProvider` | `components/theme-provider.tsx` | Dark/Light theme provider using next-themes |

### Page Section Components

| Component | Path | Description |
|---|---|---|
| `HeroSection` | `components/sections/hero-section.tsx` | Homepage animated hero |
| `TopClients` | `components/sections/top-clients.tsx` | Client logos marquee |
| `KnownFor` | `components/sections/known-for.tsx` | "What We're Known For" section |
| `WhyCloudNexus` | `components/sections/why-cloudnexus.tsx` | Why choose us section |
| `BuildScaleThrive` | `components/sections/build-scale-thrive.tsx` | Three-step process section |
| `StatsGlobe` | `components/sections/stats-globe.tsx` | Animated globe with statistics |
| `CaseStudies` | `components/sections/case-studies.tsx` | Project showcase cards |
| `TechStack` | `components/sections/tech-stack.tsx` | Technology icons grid |
| `Testimonials` | `components/sections/testimonials.tsx` | Customer reviews slider |
| `FreeConsultation` | `components/sections/free-consultation.tsx` | CTA for booking consultation |
| `FAQs` | `components/sections/faqs.tsx` | Accordion FAQ section |

### Service Page Sections

| Component | Path |
|---|---|
| `ServiceHeroSection` | `components/sections/service-page/hero-section.tsx` |
| `ServiceOfferingsSection` | `components/sections/service-page/service-offerings-section.tsx` |
| `TechStackSection` | `components/sections/service-page/tech-stack-section.tsx` |
| `WhyChooseSection` | `components/sections/service-page/why-choose-section.tsx` |
| `WhyNeedSection` | `components/sections/service-page/why-need-section.tsx` |
| `ProcessSection` | `components/sections/service-page/process-section.tsx` |
| `CTASection` | `components/sections/service-page/cta-section.tsx` |

### Industry Page Sections

| Component | Path |
|---|---|
| `IndustryHeroSection` | `components/sections/industry-page/hero-section.tsx` |
| `IntroSection` | `components/sections/industry-page/intro-section.tsx` |
| `ServicesSection` | `components/sections/industry-page/services-section.tsx` |
| `SolutionsSection` | `components/sections/industry-page/solutions-section.tsx` |
| `TechSection` | `components/sections/industry-page/tech-section.tsx` |
| `ProcessSection` | `components/sections/industry-page/process-section.tsx` |
| `ExpertiseAccordionSection` | `components/sections/industry-page/expertise-accordion-section.tsx` |
| `WhyChooseSection` | `components/sections/industry-page/why-choose-section.tsx` |
| `CaseStudiesSection` | `components/sections/industry-page/case-studies-section.tsx` |
| `ProductShowcaseSection` | `components/sections/industry-page/product-showcase-section.tsx` |
| `CTASection` | `components/sections/industry-page/cta-section.tsx` |

### UI Components (shadcn/ui)

| Component | Path |
|---|---|
| `Button` | `components/ui/button.tsx` |
| `Card` | `components/ui/card.tsx` |
| `Input` | `components/ui/input.tsx` |
| `Badge` | `components/ui/badge.tsx` |
| `Avatar` | `components/ui/avatar.tsx` |
| `Table` | `components/ui/table.tsx` |
| `Sheet` | `components/ui/sheet.tsx` |
| `Collapsible` | `components/ui/collapsible.tsx` |
| `DropdownMenu` | `components/ui/dropdown-menu.tsx` |
| `ShimmerButton` | `components/ui/shimmer-button.tsx` |
| `Marquee` | `components/ui/marquee.tsx` |
| `TypingAnimation` | `components/ui/typing-animation.tsx` |

### Standalone Components

| Component | Path | Description |
|---|---|---|
| `SplashScreen` | `components/splash-screen.tsx` | Animated splash screen on first load |
| `SplashLoaderScreen` | `components/splash-loader-screen.tsx` | Loading splash variant |
| `SplashLoaderContent` | `components/splash-loader-content.tsx` | Splash content renderer |
| `HomeSplashWrapper` | `components/home-splash-wrapper.tsx` | Wrapper for homepage splash |
| `NavigationLoader` | `components/navigation-loader.tsx` | Page transition loader |
| `CareerIllustration` | `components/career-illustration.tsx` | SVG illustration for careers |

---

## API & Backend Integration

### Backend Stack
- **Runtime:** Node.js + Express.js
- **Database:** PostgreSQL (via Docker container)
- **ORM:** Prisma
- **Storage:** Supabase (file uploads)
- **Port:** 4000 (backend), 8081 (frontend dev)

### API Endpoints

```
Base URL: http://localhost:4000 (proxied via /api/* in Next.js)

Auth:
  POST   /auth/register              - User registration
  POST   /auth/login                 - User login
  GET    /auth/me                    - Current user
  POST   /auth/admin/login           - Admin login
  POST   /auth/admin/signup          - Admin signup
  POST   /auth/admin/verify-2fa      - Admin 2FA verification
  GET    /auth/admin/me              - Current admin user

Public:
  GET    /blogs                      - List all blogs
  GET    /blogs/:slug                - Blog by slug
  GET    /job-listings               - List all jobs
  GET    /job-listings/:slug         - Job by slug
  POST   /contacts                   - Submit contact form
  POST   /applications               - Submit job application

Admin (Protected):
  GET    /admin/blogs                - List blogs (admin)
  POST   /admin/blogs                - Create blog
  PUT    /admin/blogs/:id            - Update blog
  DELETE /admin/blogs/:id            - Delete blog
  POST   /admin/uploads/blog-image   - Upload blog image
  GET    /admin/applications         - List applications
  PUT    /admin/applications/:id/approve - Approve application
  DELETE /admin/applications/:id     - Delete application
  GET    /admin/contacts             - List contacts
  GET    /admin/job-postings         - List job postings
  POST   /admin/job-postings         - Create job posting
  PUT    /admin/job-postings/:id     - Update job posting
  DELETE /admin/job-postings/:id     - Delete job posting
```

### API Services (Frontend)

| Service | Path | Purpose |
|---|---|---|
| `AuthService` | `lib/api/services/auth.service.ts` | Authentication (login, signup, admin auth) |
| `BlogService` | `lib/api/services/blog.service.ts` | Blog CRUD operations |
| `JobService` | `lib/api/services/job.service.ts` | Job listing CRUD operations |
| `ContactService` | `lib/api/services/contact.service.ts` | Contact form submission |
| `AdminService` | `lib/api/services/admin.service.ts` | Admin-specific operations |
| `Axios Instance` | `lib/api/axios.ts` | Pre-configured HTTP client with interceptors |

---

## Styling & Theming

### Theme System
- **Provider:** `next-themes` with system preference detection
- **Modes:** Light (default) + Dark
- **Brand Color:** `#4EB3E8` (CloudNexus Blue)
- **Color System:** CSS custom properties using `oklch()` color space

### CSS Architecture
- **Base:** Tailwind CSS v4 with PostCSS
- **UI Library:** shadcn/ui components
- **Animations:** Framer Motion for scroll-triggered and interactive animations
- **Custom Animations:**
  - `text-shimmer` — Gradient text animation
  - `glitch-text` — Horizontal break glitch effect
  - `fadeInScale` — Scale-in entrance
  - `float` — Floating element animation
  - `shimmer-slide` — Button shimmer effect
  - `marquee` — Horizontal scroll marquee
  - `blink-cursor` — Typing cursor blink

### Custom Utility Classes
| Class | Purpose |
|---|---|
| `.brand-glass` | Glassmorphism effect |
| `.brand-glow` | Radial gradient glow |
| `.nexus-pattern` | Dot grid pattern background |
| `.text-glow` | Text shadow glow |
| `.premium-gradient-text` | White gradient text |
| `.scrollbar-hide` | Hide scrollbar |

---

## Assets

### Local Images (`public/assets/images/`)

| File | Used For |
|---|---|
| `about-hero.jpg` / `about-hero-v2.jpg` | About Us hero section |
| `blog-hero.jpg` | Blog page hero |
| `career-hero.jpg` | Career page hero |
| `infra-hero.png` | Infrastructure page hero |
| `growth-plant.png` | Growth Journey section (plant metaphor) |
| `multi-cloud-arch.png` / `multi-cloud-arch-v2.png` | Multi-cloud architecture diagram |
| `card-blog.jpg` | Blog resource card |
| `card-careers.jpg` | Careers resource card |
| `card-consultation.jpg` | Consultation resource card |
| `card-contact.jpg` | Contact resource card |
| `card-support.jpg` | Support resource card |
| `ind-ecommerce.jpg` | E-Commerce industry card |
| `ind-education.jpg` | Education industry card |
| `ind-fintech.jpg` | FinTech industry card |
| `ind-healthcare.jpg` | Healthcare industry card |
| `ind-logistics.jpg` | Logistics industry card |
| `ind-media.jpg` | Media industry card |
| `ind-realestate.jpg` | Real Estate industry card |
| `ind-saas.jpg` | SaaS industry card |
| `resources-hero.jpg` | Resources page hero |
| `resources-consultation.jpg` | Consultation image |
| `resources-dev.jpg` | Development image |
| `resources-meeting.jpg` | Meeting image |
| `resources-support.jpg` | Support image |
| `resources-team.jpg` | Team image |

### External Image Sources
- **Unsplash** (`images.unsplash.com`) — Stock photos
- **Pravatar** (`i.pravatar.cc`) — Avatar placeholders
- **Supabase** (`uqlyhicgvqawiiixuumy.supabase.co`) — Uploaded media
- **jsDelivr CDN** (`cdn.jsdelivr.net`) — Devicon tech logos

---

## Configuration

### `next.config.mjs`
- **React Strict Mode:** Enabled
- **Compression:** Enabled
- **API Proxy:** `/api/*` → `http://localhost:4000/*`
- **ESLint:** Ignored during builds
- **TypeScript:** Build errors ignored
- **Image Optimization:** AVIF + WebP formats
- **Remote Image Hosts:** Unsplash, Pravatar, Supabase, jsDelivr
- **Package Optimization:** `lucide-react`, `framer-motion`

### Navigation Structure (Navbar)

```
├── Home (/)
├── Services (/services) ──────────── Mega dropdown with 20+ categories
│   ├── AI, ML & Data Science
│   ├── Cloud Services
│   ├── Software Development
│   ├── Mobile App Development
│   ├── Web Development
│   ├── ... (15+ more)
│   └── WordPress Development
├── Industry (/industry) ──────────── Dropdown with 15 industries
│   ├── Banking & Finance
│   ├── Healthcare
│   ├── E-Commerce
│   └── ... (12 more)
├── Resources (/resources) ────────── Dropdown
│   ├── Blog
│   ├── Career
│   ├── Career Benefits
│   ├── Contact
│   ├── Free Consultation
│   └── Support
├── Company (/company) ────────────── Dropdown
│   ├── Overview
│   ├── About Us
│   ├── Team
│   ├── Infrastructure
│   ├── Events
│   ├── Process & Methodology
│   └── Life at Cloud Nexus
├── Our Work (/our-work)
└── Admin Panel (/admin) ──────────── Separate layout
    ├── Dashboard
    ├── Blogs (CRUD)
    ├── Jobs (CRUD)
    ├── Applications
    └── Contacts
```

---

## Summary

| Metric | Count |
|---|---|
| **Total Pages** | ~180+ |
| **Service Categories** | 20 |
| **Service Sub-pages** | 129 |
| **Industry Pages** | 16 |
| **Company Pages** | 9 |
| **Resource Pages** | 8 |
| **Admin Pages** | 11 |
| **Components** | 54+ |
| **UI Components** | 12 |
| **API Endpoints** | 20+ |
| **Local Images** | 27 |
| **Dependencies** | 20+ |

---

*Last updated: May 4, 2026*
*Built with Next.js 16, React 19, Tailwind CSS 4, and Framer Motion*
