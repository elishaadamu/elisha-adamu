'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Testimonial } from '@/data/testimonials';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle, ExternalLink } from 'lucide-react';

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? testimonials.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === testimonials.length - 1 ? 0 : prevIdx + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Testimonial Card */}
      <div className="relative rounded-3xl bg-white dark:bg-[#0b0e14] border border-slate-200 dark:border-white/10 p-8 sm:p-12 transition-all duration-300">
        <div className="flex items-center justify-between pb-6 border-b border-slate-100 dark:border-white/10 mb-6">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
            <span className="ml-2 text-xs font-bold text-slate-700 dark:text-slate-300">
              5.0 / 5.0 Rating
            </span>
          </div>

          {current.highlightBadge && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#a3e635]/10 text-[#a3e635] border border-[#a3e635]/25">
              <CheckCircle className="w-3.5 h-3.5 text-[#a3e635]" />
              {current.highlightBadge}
            </span>
          )}
        </div>

        {/* Quote Content */}
        <div className="relative mb-8 min-h-[120px] flex items-start">
          <Quote className="w-10 h-10 text-[#a3e635]/20 shrink-0 mr-4 -mt-1 hidden sm:block" />
          <blockquote className="text-base sm:text-lg text-slate-800 dark:text-slate-200 leading-relaxed font-normal italic">
            &ldquo;{current.quote}&rdquo;
          </blockquote>
        </div>

        {/* Author Details & Controls Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-slate-100 dark:border-white/10">
          <div className="flex items-center gap-4">
            <div className="relative w-14 h-14 rounded-2xl overflow-hidden bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 shrink-0">
              <Image
                src={current.avatar}
                alt={current.name}
                fill
                unoptimized
                sizes="56px"
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-base">
                {current.name}
              </h4>
              <p className="text-xs text-[#84cc16] dark:text-[#a3e635] font-semibold">
                {current.role}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {current.company}
              </p>
            </div>
          </div>

          {/* Slider Arrows & Dots */}
          <div className="flex items-center gap-4 self-end sm:self-auto">
            {/* Dots */}
            <div className="flex items-center gap-1.5">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentIndex
                      ? 'w-6 bg-[#a3e635]'
                      : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:border-[#a3e635] hover:text-[#a3e635] transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:border-[#a3e635] hover:text-[#a3e635] transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
