import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blogs';
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Bookmark,
  MessageSquare,
  Sparkles,
  ChevronRight,
} from 'lucide-react';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
      {/* Back button */}
      <div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#a3e635] hover:text-[#bef264] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to all articles
        </Link>
      </div>

      {/* Article Header */}
      <header className="space-y-6 border-b border-slate-200 dark:border-white/10 pb-8">
        <div className="flex flex-wrap items-center gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md text-xs font-semibold bg-[#a3e635]/10 text-[#a3e635] border border-[#a3e635]/20 font-mono"
            >
              #{tag}
            </span>
          ))}
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#a3e635]/30">
              <Image
                src="/profile/img3-nobg.png"
                alt="Elisha Adamu Inuwa"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <p className="font-bold text-slate-900 dark:text-white">
                Elisha Adamu Inuwa
              </p>
              <p className="text-xs text-[#a3e635]">Senior Frontend & Mobile Developer</p>
            </div>
          </div>

          <div className="flex items-center gap-4 font-mono">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#a3e635]" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#a3e635]" />
              {post.readTime}
            </span>
          </div>
        </div>
      </header>

      {/* Cover Image if present */}
      {post.coverImage && (
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden glass-panel border border-white/10 dark:border-white/10">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            className="object-cover object-top"
          />
        </div>
      )}

      {/* Article Content */}
      <article className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base space-y-6">
        <div className="p-4 rounded-xl bg-[#a3e635]/10 border-l-4 border-[#a3e635] text-slate-900 dark:text-slate-100 text-sm font-medium">
          {post.summary}
        </div>

        <div className="space-y-6 whitespace-pre-line leading-relaxed">
          {post.content}
        </div>
      </article>

      {/* Footer Author Box */}
      <div className="rounded-2xl glass-panel p-6 sm:p-8 border border-white/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-[#a3e635]/30 flex-shrink-0">
            <Image
              src="/profile/img3-nobg.png"
              alt="Elisha Adamu Inuwa"
              fill
              className="object-contain"
            />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white">
              Written by Elisha Adamu Inuwa
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Senior Frontend React / Next.js Developer, Mobile Engineer (Android), and Electrical Electronics Engineer.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.link/powbca"
            target="_blank"
            rel="noreferrer"
            className="btn-primary-lime text-xs"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            Discuss on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
