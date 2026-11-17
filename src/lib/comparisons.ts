import { ComparisonPair } from '../types';

export const COMPARISONS: Record<string, ComparisonPair> = {};

export const COMPARISON_LIST: ComparisonPair[] = [];

export function getComparisonBySlug(slug: string): ComparisonPair | undefined {
  if (!slug) return undefined;
  return COMPARISONS[slug.toLowerCase().trim()];
}
