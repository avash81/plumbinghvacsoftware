import { GuideArticle } from '../types';

export const GUIDES: Record<string, GuideArticle> = {};

export const GUIDE_LIST: GuideArticle[] = [];

export function getGuideBySlug(slug: string): GuideArticle | undefined {
  if (!slug) return undefined;
  return GUIDES[slug.toLowerCase().trim()];
}
