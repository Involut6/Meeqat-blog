'use client';

import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/app/assets/hero.svg'
import { ArrowUpRight } from 'lucide-react';

// Mock Article type for demo
interface Article {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  readTime?: string;
}

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
  return (
    <Link href={`/articles/${article.id}`} className="group block">
      <div className={`flex flex-col lg:flex-row items-center
      `}>
        {/* Image Section */}
        <div className="relative w-full lg:w-3/5 rounded-2xl overflow-hidden rounded-2xl p-4 md:p-6 hover:shadow-lg transition-shadow border border-gray-200 hover:shadow-md">
            <Image 
              src={Hero} 
              alt={article.title}
              width={600}
              height={400}
              className="w-full h-auto"
            />

        </div>

        {/* Content Section */}
        <div className="w-full h-full relative py-12 px-6 bg-gray-50 lg:w-2/5">
            <div className='w-fit flex items-center gap-4 absolute -top-6 rounded-full px-2 py-2 bg-gray-100'>
            <span className="bg-[#FF9F43] text-white px-3 py-1 rounded-full text-xs font-semibold">
              New!
            </span>
            {article.readTime && (
              <span className="text-xs text-gray-500 pr-2 font-medium">
                {article.readTime}
              </span>
          )}
        </div>
          <h3 className={`font-medium text-gray-900 mb-3 group-hover:text-[#FF9F43] transition-colors ${
            featured ? 'text-2xl lg:text-3xl xl:text-4xl' : 'text-xl md:text-2xl'
          }`}>
            {article.title}
          </h3>
          <p className={`text-gray-600 mb-4 leading-relaxed ${
            featured ? 'text-base lg:text-lg mb-6 lg:mb-8' : 'text-sm md:text-base mb-4'
          }`}>
            {article.excerpt}
          </p>
          <div className="flex items-center text-[#FF9F43] font-semibold hover:text-orange-600 transition group">
            <span className={featured ? 'text-lg font-medium' : ''}>Read More</span>
            <ArrowUpRight className={`ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ${
              featured ? 'w-5 h-5' : 'w-4 h-4'
            }`} />
          </div>
        </div>
      </div>
    </Link>
  );
}

// Demo component showing the featured usage
function Demo() {
  const featuredArticle: Article = {
    id: '1',
    title: 'Unlocking Efficiency: The Power Of A Modern Technology',
    excerpt: 'How do you create compelling presentations that wow your colleagues and impress your managers? Linear helps streamline software projects, sprints, tasks, and bug tracking. Here\'s how to get started.',
    image: '/placeholder-image.jpg',
    readTime: '8 Mins Read'
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <ArticleCard article={featuredArticle} featured={true} />
    </div>
  );
}