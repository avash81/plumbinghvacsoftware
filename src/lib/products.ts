/**
 * Central catalog for published field service management product reviews.
 */

import { ProductData } from '../types';

export const PRODUCTS: Record<string, ProductData> = {};

export const PRODUCT_LIST: ProductData[] = [];

export function getProductBySlug(slug: string): ProductData | undefined {
  if (!slug) return undefined;
  return PRODUCTS[slug.toLowerCase().trim()];
}
