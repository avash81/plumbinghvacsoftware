# PHS Coding Standards & Documentation Guide

**Reference model:** These standards adapt the philosophy of the **C++ Core Guidelines** — the widely-used industry reference authored by Bjarne Stroustrup (creator of C++) and Herb Sutter. Their core principle, applied here: *comments and structure should state intent, not repeat what the code already says* — and consistency matters more than any single stylistic preference. This document translates that philosophy into TypeScript/Next.js conventions for the PHS codebase.

Every file, component, and function in this project should follow the rules below so the codebase stays maintainable as it grows past dozens of pages and products.

---

## 1. Core Principle (from the Guidelines)

> "Comments should say what code cannot say for itself — intent, not mechanics."

Applied here:
- Don't write `// increment counter` above `count++`.
- Do write `// Re-run affiliate click count if the same product is clicked twice in one session, per Guide Section 13` above logic that isn't self-evident.
- Code should be readable enough that comments are the exception, reserved for *why*, not *what*.

---

## 2. File Header Block (every file)

Every source file starts with a standard header comment — this is the single most important habit for a small/remote team, since it lets anyone (including an AI tool) understand a file's purpose without reading the whole thing first.

```ts
/**
 * [FileName].tsx
 * ---------------------------------------------------------
 * [One-line purpose].
 * Used on: [Routes/Views using it]
 *
 * Data source: [e.g. lib/products.ts]
 * Related: [e.g. lib/affiliate-links.ts]
 *
 * Guide reference: project-implementation-guide.md, Section [X]
 * ---------------------------------------------------------
 */
```

**Required fields in every header:** file name, one-line purpose, which route(s) use it, what data it depends on, and which Guide section it implements. This is what "connects everything to the real project" — no file exists in isolation from the plan.

---

## 3. Naming Conventions

| Type | Convention | Example |
|---|---|---|
| Components (files + function name match) | PascalCase, descriptive noun | `ComparisonTable.tsx`, `AffiliateCTA.tsx` |
| Utility/lib functions | camelCase, verb-first (states intent) | `getProductBySlug()`, `formatPrice()`, `trackAffiliateClick()` |
| Types/interfaces | PascalCase, no `I` prefix | `Product`, `AffiliateLink`, not `IProduct` |
| Constants | SCREAMING_SNAKE_CASE, only for true constants | `MAX_COMPARISON_ROWS`, `DEFAULT_COOKIE_DAYS` |
| Route folders | kebab-case, matches URL exactly | `/software-reviews/`, `/how-we-make-money/` |
| MDX content files | kebab-case, matches slug | `quoteiq-vs-jobber.mdx` |

**Rule (from the Guidelines' naming philosophy):** name length should match scope. A one-line helper used once can have a short name; a function used across the whole site (`getProductBySlug`) needs a fully descriptive name, since it will be read far more often than it's written.

---

## 4. One Responsibility Per File (Class/Component Analogy)

The Guidelines' principle for C++ classes — one clear responsibility, one reason to change — applies directly to components and lib modules:

- `ComparisonTable.tsx` renders a table. It does not fetch data, does not format prices, does not track analytics — it receives clean props and renders.
- `lib/products.ts` holds product *data*. It does not contain rendering logic or affiliate-link URLs (those live in `lib/affiliate-links.ts`, kept deliberately separate per Guide Section 6.1a).
- `lib/analytics.ts` owns all GA4 event firing — no component should call `gtag()` directly; it should call a named function from this file.

If a file starts doing two unrelated things, split it. This mirrors the Guidelines' resource-management principle: one clear owner per concern.

---

## 5. Function-Level Documentation

Every exported function gets a short JSDoc block — intent, parameters, and return value, not a restatement of the code:

```ts
/**
 * Returns the product record for a given slug, or null if not found.
 * Used by review, comparison, and pillar pages to pull structured
 * product data from the single source of truth (Guide Section 6.1a).
 */
export function getProductBySlug(slug: string): Product | null {
  return products.find((p) => p.slug === slug) ?? null;
}
```

Internal (non-exported) helper functions only need a comment if their purpose isn't obvious from the name and signature alone.

---

## 6. Recommended Additional Structure

To keep the "everything connected to the real plan" property as the codebase grows, add:

```
/lib
  products.ts          → product data (Section 6.1a of the guide)
  affiliate-links.ts   → affiliate URLs/commission data, kept separate from products.ts
  analytics.ts          → single owner of all GA4/event-tracking calls
  seo-schema.ts          → JSON-LD generators, one function per schema type
  mdx-utils.ts

/docs
  CODING_STANDARDS.md          → this file
  project-implementation-guide.md
  CHANGELOG.md                  → dated log of structural/content-model changes (not blog posts — code/data changes)
```

---

## 7. Commenting Rules (Summary)

1. State intent, not mechanics.
2. If a piece of logic exists because of a specific business rule (e.g. "never show a product with zero affiliate relationship at the top of a ranked list"), comment the *rule* and cite the Guide section — future editors need to know it's deliberate, not a bug.
3. Delete commented-out code before committing — Git history is the record, not comments.
4. No comment should go stale silently — if you change the logic, update or delete the comment in the same commit.

---

## 8. Consistency Over Preference

Per the Guidelines' own stated philosophy: the goal is consistency across the codebase, not enforcing any one contributor's personal style. If a future contributor prefers a different pattern, the existing convention in this document wins unless the team deliberately updates this document first.
