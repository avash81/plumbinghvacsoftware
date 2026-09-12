# Project Implementation Guide
## Field Service Software Comparison Site — Plumbing & HVAC (USA Market)

This document is a complete specification for building the project. It is written to be handed directly to a developer or an AI coding tool as a build brief.

---

## 1. Project Overview

**Brand name:** PHS (short for Plumbing HVAC Software — full name used in domain/SEO context, "PHS" used as the everyday brand name in logo, nav, and copy)

**Domain:** plumbinghvacsoftware.com

**What we're building:** An independent, informational content website that helps small-to-mid-size plumbing and HVAC business owners in the USA choose field service management (FSM) software. The site publishes reviews, comparisons, "best of" roundups, and educational guides, and earns revenue through affiliate commissions.

**Target audience:** Plumbing and HVAC business owners/operators in the USA, primarily small teams (1–20 technicians).

**Business model:** Affiliate marketing.

**Core differentiator:** Genuine neutrality.

---

## 2. Products to Cover

**Coverage principle: comprehensive, not a fixed shortlist.**

### 2.1 Initial Launch Set

| Product | Affiliate Status | Priority |
|---|---|---|
| QuoteIQ | Confirmed — 40% recurring commission | Primary revenue driver |
| Jobber | Confirmed program exists | Primary revenue driver |
| Housecall Pro | Confirmed — $40–$400/sale | Secondary |
| ServiceTitan | No public content-affiliate program | Content-only |
| FieldEdge | No public affiliate program found | Content-only |
| Service Fusion, Simpro, FieldPulse | Not yet verified | Verify before publishing |

---

## 3. Site Structure / Information Architecture

### 3.1 Homepage Specification (Important — Keep Minimal)

The homepage is a **simple, clean entry point only**.

**What the homepage DOES include:**
- A short headline stating what the site does, incorporating the brand name.
- A one-line subheading reinforcing trust/neutrality.
- Simple navigation into the three or four main sections: Reviews, Compare, Best Of / Guides, About.
- Minimal supporting text.
- Clean visual hierarchy.

**What the homepage does NOT include:**
- No individual product/company names listed or featured.
- No pricing information, pricing tables, or pricing grids.
- No comparison tables or feature-by-feature grids.
- No "Top 3 Picks," "Best Overall," ranked/scored product lists, or star ratings.
- No long-form written content.
- No affiliate links or FTC disclosure blocks directly on the homepage.
- No embedded tools/quizzes.

### 3.2 Full Site Map

```
/                                   → Homepage
/software-reviews/                  → Review hub
  /software-reviews/[product-slug]/     ← Product Detail
/compare/                           → Comparison hub
  /compare/[product-a]-vs-[product-b]/  ← Comparison Detail
/best-of/                           → Pillar / "best of" roundup pages
/guides/                            → Blog / cluster content
/tools/                             → Interactive tools
/about/
/how-we-test/                       → Methodology page
/how-we-make-money/                 → Affiliate disclosure page
/authors/[author-slug]/             → Author bio pages
/contact/
```

---

## 4. Content Strategy

### 4.3 Editorial Rules
- No page crowns a single "winner" without showing genuine trade-offs and alternatives.
- Every comparison page includes at least one product the site does NOT earn commission from.
- Every review/comparison page displays a "Last verified: [date]" line.

---

## 5. SEO Requirements

- **On-page:** Unique title tag, meta description, H1, and logical H2/H3 structure.
- **Schema markup:** FAQ schema, Review schema, Product/Comparison schema.
- **Internal linking:** Enforced — no orphan pages.

---

## 6. Technical Specification

### 6.1 Stack

| Layer | Choice |
|---|---|
| Framework | Next.js (App Router), TypeScript |
| Content | React components / Data-driven |
| Styling | Tailwind CSS |
| Affiliate link management | Centralized `lib/affiliate-links.ts` |

### 6.1a Product Data Schema (`lib/products.ts`)

```ts
type Product = {
  slug: string;
  name: string;
  logoPath: string;
  website: string;
  startingPrice: string | null;
  bestForTeamSize: string;
  trades: ('plumbing' | 'hvac' | 'both')[];
  affiliateStatus: 'active' | 'pending' | 'none' | 'restricted';
  lastVerified: string;
  featureFlags: Record<string, boolean | string>;
};
```

---

## 8. Design System

**Brand color:** `#0e6e6a` (deep teal)

### Color Tokens
```css
--color-primary: #0e6e6a;
--color-primary-dark: #0a4f4c;
--color-ink: #16201f;
--color-paper: #fbfaf8;
--color-line: #dde3e1;
--color-accent: #d97a3f;
```

---

## 11. Responsive Design & Accessibility

### 11.2 Mobile-Specific Requirements
- **Navigation:** Collapses to a hamburger menu below `md`.
- **Comparison tables:** Horizontal scroll with visible affordance.
- **Touch targets:** Minimum 44x44px for all buttons/links.
