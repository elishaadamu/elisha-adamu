'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/data/blogs';
import { BookOpen, Calendar, Clock, ArrowRight, Tag, Sparkles } from 'lucide-react';

export default function BlogPage() {
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const allTags = ['All', ...Array.from(new Set(blogPosts.flatMap((p) => p.tags)))];

  const filteredPosts =
    selectedTag === 'All'
      ? blogPosts
      : blogPosts.filter((p) => p.tags.includes(selectedTag));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#a3e635]/10 text-[#a3e635] border border-[#a3e635]/25 font-mono">
          <BookOpen className="w-3.5 h-3.5" />
          Technical Essays & Case Studies
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Engineering Insights & Systems Architecture
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          In-depth technical reflections covering mobile AI integrations, high-volume VTU fintech gateways, Next.js performance tuning, and the enduring power of static site architecture.
        </p>
      </div>

      {/* Tags Filter */}
      <div className="flex flex-wrap items-center gap-2 pb-2">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              selectedTag === tag
                ? 'bg-[#a3e635] text-black scale-102 font-bold'
                : 'bg-slate-100 dark:bg-white/[0.04] text-slate-600 dark:text-slate-400 hover:bg-[#a3e635]/10 hover:text-[#a3e635] border border-transparent dark:border-white/5'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <article
            key={post.id}
            className="rounded-2xl glass-panel glass-panel-hover flex flex-col overflow-hidden h-full border border-white/10 dark:border-white/10 hover:border-[#a3e635]/40 transition-colors"
          >
            {post.coverImage && (
              <div className="relative w-full aspect-[16/9] bg-slate-950 overflow-hidden border-b border-white/10">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}

            <div className="p-6 flex flex-col flex-grow space-y-4">
              <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 font-mono">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#a3e635]" />
                  {post.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#a3e635]" />
                  {post.readTime}
                </span>
              </div>

              <h2 className="text-xl font-bold text-slate-900 dark:text-white hover:text-[#a3e635] transition-colors leading-snug">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                {post.summary}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-[#a3e635]/10 text-[#a3e635] border border-[#a3e635]/20 font-mono"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="pt-4 mt-auto border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#a3e635] hover:text-[#bef264] transition-colors"
                >
                  Read Full Article
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
