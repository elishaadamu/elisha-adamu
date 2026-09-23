import React from 'react';
import Image from 'next/image';
import { Testimonial } from '@/data/testimonials';
import { Star, Quote, ExternalLink, Mail, ShieldCheck } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="rounded-2xl glass-panel glass-panel-hover p-6 sm:p-7 flex flex-col justify-between h-full relative border border-sky-500/20">
      <div className="space-y-4">
        {/* Top Badges & Stars */}
        <div className="flex items-center justify-between gap-2">
          {testimonial.highlightBadge && (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-500" />
              {testimonial.highlightBadge}
            </span>
          )}

          {testimonial.rating && (
            <div className="flex items-center gap-0.5 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
          )}
        </div>

        {/* Quote text */}
        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed italic">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>

      {/* Author Details Footer */}
      <div className="pt-6 mt-6 border-t border-sky-500/10 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-sky-500/30 flex-shrink-0 bg-slate-200 dark:bg-slate-800">
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
              {testimonial.name}
            </h4>
            <p className="text-xs text-sky-600 dark:text-sky-400 font-medium">
              {testimonial.role}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 truncate max-w-[200px] sm:max-w-xs">
              {testimonial.company}
            </p>
          </div>
        </div>

        {/* Contact/Website link */}
        <div className="flex items-center gap-1.5 flex-shrink-0">
          {testimonial.website && (
            <a
              href={testimonial.website}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit ${testimonial.name}'s website`}
              className="p-2 rounded-lg text-slate-500 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {testimonial.email && (
            <a
              href={`mailto:${testimonial.email}`}
              aria-label={`Email ${testimonial.name}`}
              className="p-2 rounded-lg text-slate-500 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
