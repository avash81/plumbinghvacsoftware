import { AuthorData } from '../types';

export const AUTHORS: Record<string, AuthorData> = {
  'marcus-vance': {
    slug: 'marcus-vance',
    name: 'Marcus Vance',
    role: 'Lead Field Operations & FSM Analyst',
    bio: 'Former master plumber and field service operations consultant with 14 years of commercial and residential plumbing experience in Ohio and Texas. Evaluates scheduling efficiency, dispatch routing, and mobile usability for trade contractors.',
    credentials: [
      'Master Plumber License (OH & TX)',
      '14+ Years Field & Dispatch Operations',
      'Certified QuickBooks ProAdvisor (Trade Specialization)',
    ],
    tradeExperience: '14 years running residential plumbing and drain service trucks',
    contactEmail: 'marcus@plumbinghvacsoftware.com',
    contactLinkedin: 'https://linkedin.com/in/marcusvance',
  },
  'elena-rostova': {
    slug: 'elena-rostova',
    name: 'Elena Rostova',
    role: 'HVAC Systems & Software Technology Editor',
    bio: 'Mechanical engineering graduate and former HVAC service dispatcher. Specializes in flat-rate pricebooks, seasonal maintenance agreement automation, and HVAC load calculation software integrations.',
    credentials: [
      'B.S. Mechanical Engineering',
      '8+ Years HVAC Dispatch & Estimating Systems',
      'ACCA Technical Committee Member',
    ],
    tradeExperience: '8 years managing multi-truck HVAC dispatch and maintenance contracts',
    contactEmail: 'elena@plumbinghvacsoftware.com',
    contactTwitter: 'https://twitter.com/elarostova',
  },
};

export const AUTHOR_LIST = Object.values(AUTHORS);

export function getAuthorBySlug(slug: string): AuthorData | undefined {
  return AUTHORS[slug];
}
