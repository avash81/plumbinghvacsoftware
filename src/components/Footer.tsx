import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Wrench } from 'lucide-react';

interface FooterProps {
  onNavigate: (route: string) => void;
}

const groups = [
  {
    title: 'Research',
    links: [
      ['Software reviews', '/software-reviews'],
      ['Compare', '/compare'],
      ['Best of', '/best-of'],
      ['Guides', '/guides'],
      ['Finder quiz', '/tools'],
      ['Cost calculator', '/tools'],
    ],
  },
  {
    title: 'About',
    links: [
      ['Our story', '/about'],
      ['How we test', '/how-we-test'],
      ['How we make money', '/how-we-make-money'],
      ['Contact', '/contact'],
      ['Marcus Vance', '/authors/marcus-vance'],
    ],
  },
  {
    title: 'Legal',
    links: [
      ['Privacy policy', '/privacy-policy'],
      ['Terms of service', '/terms-of-service'],
      ['Cookie policy', '/privacy-policy'],
      ['Affiliate disclosure', '/how-we-make-money'],
    ],
  },
] as const;

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="site-footer mt-20 border-t-4 text-[#d5dee4]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1.4fr]">
          <div>
            <button type="button" onClick={() => onNavigate('/')} className="flex items-center gap-3 text-left">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white"><Wrench className="h-5 w-5" aria-hidden="true" /></span>
              <span>
                <span className="block font-serif text-3xl leading-none text-white">PHS</span>
                <span className="mt-1 block text-xs text-[#9aadb8]">Plumbing & HVAC software</span>
              </span>
            </button>
            <p className="mt-5 max-w-sm text-sm leading-6 text-[#b7c6d0]">
              Independent software research to help plumbing and HVAC businesses make clearer buying decisions.
            </p>
            <form onSubmit={handleSubscribe} className="mt-7 max-w-md rounded-2xl border border-white/10 bg-white/5 p-4">
              <label htmlFor="footer-email" className="text-sm font-semibold text-white">
                Weekly research notes
              </label>
              <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                <input
                  id="footer-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Work email"
                  required
                  className="min-w-0 flex-1 rounded-xl border border-white/15 bg-white/5 px-3 py-3 text-sm text-white outline-none placeholder:text-slate-400 focus:border-orange-300 focus:ring-2 focus:ring-orange-300/20"
                />
                <button type="submit" className="site-footer__button min-h-11 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors">
                  Subscribe
                </button>
              </div>
              {subscribed && (
                <p className="mt-3 flex items-center gap-2 text-sm text-[#b7e0c8]">
                  <CheckCircle2 className="w-4 h-4" />
                  Subscribed. You can unsubscribe any time.
                </p>
              )}
              <p className="mt-3 text-xs leading-5 text-[#8ea0ab]">No sponsored rankings. Unsubscribe any time.</p>
            </form>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {groups.map((group) => (
              <div key={group.title}>
                <h2 className="text-sm font-semibold text-white">{group.title}</h2>
                <ul className="mt-4 space-y-3">
                  {group.links.map(([label, route]) => (
                    <li key={label}>
                      <button
                        type="button"
                        onClick={() => onNavigate(route)}
                        className="group inline-flex min-h-7 items-center gap-1 text-left text-sm text-[#b7c6d0] transition-colors hover:text-white"
                      >
                        {label}
                        <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-12 border-t border-white/10 pt-6 text-xs text-[#8ea0ab]">
          © {new Date().getFullYear()} PHS. Reviews are independent. Some links are affiliate links.
        </p>
      </div>
    </footer>
  );
};
