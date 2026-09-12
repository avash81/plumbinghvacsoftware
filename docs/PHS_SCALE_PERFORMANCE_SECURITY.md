# PHS Scale, Performance & Security Guide

This document defines the production readiness standards for the PHS site.

---

## 1. Performance Standards

- **Static First**: All content pages must be pre-rendered using SSG (Static Site Generation).
- **Lighthouse Targets**:
    - Performance: 90+
    - Accessibility: 90+
    - Best Practices: 90+
    - SEO: 100
- **Image Optimization**: All images must use the Next.js `Image` component with WebP support.
- **Bundle Size**: Avoid large third-party libraries. Prefer lightweight alternatives (e.g., Lucide for icons).

---

## 2. Security Hardening

- **Security Headers**:
    - `Content-Security-Policy`: Restrict sources to trusted domains.
    - `X-Frame-Options`: DENY or SAMEORIGIN.
    - `Referrer-Policy`: `strict-origin-when-cross-origin`.
- **API Protection**: All server-side API routes (if any) must have rate limiting.
- **Secret Management**: Never commit API keys to Git. Use environment variables.

---

## 3. Language & Tone Standard

- **No Promotional Language**: Avoid words like "best," "amazing," "incredible" unless backed by data.
- **Evidence-Based**: Every claim must be tied to a verifiable feature or pricing tier.
- **Trade-Centric**: Use terminology real plumbers and HVAC techs use (e.g., "dispatch," "flat-rate," "PM agreements").
- **Independent Tone**: Maintain the voice of a neutral researcher, not a vendor representative.
