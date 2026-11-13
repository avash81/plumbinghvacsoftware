import React from 'react';
import { Award, ArrowLeft, CheckCircle2, BookOpen, Wrench, ArrowRight, Mail } from 'lucide-react';
import { AuthorData } from '../types';
import { GUIDE_LIST } from '../lib/guides';
import { COMPARISON_LIST } from '../lib/comparisons';
import { BEST_OF_LIST } from '../lib/best-of';

interface AuthorDetailPageProps {
  author: AuthorData;
  onNavigate: (route: string) => void;
}

export const AuthorDetailPage: React.FC<AuthorDetailPageProps> = ({ author, onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Back Link */}
      <button
        type="button"
        onClick={() => onNavigate('/')}
        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0F4C6E] hover:underline"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </button>

      {/* Author Bio Header Card */}
      <div className="bg-white border border-[#D3DDE3] rounded-2xl p-6 md:p-8 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-[#0F4C6E] text-white flex items-center justify-center text-2xl font-black font-display shrink-0">
            {author.name.split(' ').map((n) => n[0]).join('')}
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F4C6E] uppercase tracking-wider spec-font mb-1">
              <Award className="w-3.5 h-3.5" />
              <span>Verified Industry Expert & Contributor</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black spec-font text-[#17242C]">
              {author.name}
            </h1>
            <p className="text-sm font-semibold text-[#17242C]/75 mt-0.5">
              {author.role}
            </p>
          </div>
        </div>

        <p className="text-sm md:text-base text-[#17242C]/85 font-body leading-relaxed border-t border-[#D3DDE3] pt-4">
          {author.bio}
        </p>

        {/* Human Connection: Contact the Author */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          {author.contactEmail && (
            <a
              href={`mailto:${author.contactEmail}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F4C6E] hover:underline"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email {author.name.split(' ')[0]} Directly</span>
            </a>
          )}
          {author.contactLinkedin && (
            <a
              href={author.contactLinkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F4C6E] hover:underline"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span>LinkedIn</span>
            </a>
          )}
          {author.contactTwitter && (
            <a
              href={author.contactTwitter}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F4C6E] hover:underline"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
              <span>Twitter</span>
            </a>
          )}
        </div>

        {/* Credentials & Hands-on Experience */}
        <div className="bg-[#F3F6F8] border border-[#D3DDE3] rounded-xs p-4 space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#17242C] spec-font">
            Verified Trade Background & Testing Credentials
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#17242C]/85">
            {author.credentials.map((cred, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0F4C6E] shrink-0" />
                <span>{cred}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Publications & Guides by this Author */}
      <div className="space-y-4">
        <h2 className="text-xl md:text-2xl font-black spec-font text-[#17242C] flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-[#0F4C6E]" />
          <span>Articles & Evaluations by {author.name}</span>
        </h2>

        {GUIDE_LIST.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {GUIDE_LIST.map((guide) => (
              <div
                key={guide.slug}
                onClick={() => onNavigate(`/guides/${guide.category}/${guide.slug}`)}
                className="p-5 bg-white border border-[#D3DDE3] hover:border-[#17242C] rounded-xs cursor-pointer transition-all hover:shadow-xs group flex flex-col justify-between"
              >
                <div>
                  <span className="badge-ink text-[10px] mb-2 inline-block">
                    {guide.categoryLabel}
                  </span>
                  <h3 className="font-bold text-sm text-[#17242C] group-hover:text-[#0F4C6E] transition-colors leading-snug">
                    {guide.title}
                  </h3>
                  <p className="text-xs text-[#17242C]/70 mt-1.5 line-clamp-2">
                    {guide.intro}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#D3DDE3] flex items-center justify-between text-[11px] text-[#0F4C6E] font-bold">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-6 bg-white border border-[#D3DDE3] rounded-xs text-[#17242C]/70 font-body text-xs md:text-sm">
            Articles and operational playbooks authored by {author.name} are currently being updated as part of our editorial overhaul and will be published here soon.
          </div>
        )}
      </div>
    </div>
  );
};
