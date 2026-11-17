import { BestOfArticle } from '../types';

export const BEST_OF_ARTICLES: Record<string, BestOfArticle> = {};

export const BEST_OF_LIST: BestOfArticle[] = [];

export function getBestOfBySlug(slug: string): BestOfArticle | undefined {
  if (!slug) return undefined;
  return BEST_OF_ARTICLES[slug.toLowerCase().trim()];
}
