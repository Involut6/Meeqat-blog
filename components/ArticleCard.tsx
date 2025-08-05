'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import type { Article } from '@/lib/data';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
  const cardClasses = featured 
    ? "group cursor-pointer" 
    : "group cursor-pointer bg-white rounded-xl h-full overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100";

  const imageClasses = featured
    ? "w-full h-80 object-cover rounded-xl"
    : "w-full h-48 object-cover";

  return (
    <Link href={`/articles/${article.id}`}>
      <div className={cardClasses}>
        <div className="relative overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            width={featured ? 600 : 400}
            height={featured ? 320 : 192}
            className={`${imageClasses} group-hover:scale-105 transition-transform duration-300`}
          />
          <div className="absolute top-4 left-4">
            <span className="bg-[#FF9F43] text-white px-3 py-1 rounded-full text-sm font-medium">
              {article.category}
            </span>
          </div>
          {featured && article.readTime && (
            <div className="absolute top-4 right-4">
              <span className="bg-white bg-opacity-90 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                {article.readTime}
              </span>
            </div>
          )}
        </div>

        <div className={featured ? "mt-6" : "p-6"}>
          <h3 className={`font-bold text-gray-900 mb-3 group-hover:text-[#FF9F43] transition-colors ${
            featured ? 'text-3xl leading-tight' : 'text-xl'
          }`}>
            {article.title}
          </h3>
          
          <p className={`text-gray-600 mb-4 leading-relaxed ${
            featured ? 'text-lg' : 'text-base'
          }`}>
            {article.excerpt}
          </p>

          {featured && (
            <div className="flex items-center text-[#FF9F43] font-medium mb-6 group-hover:text-orange-600 transition-colors">
              <span>Read More</span>
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </div>
          )}

          <div className="flex items-center mt-16 space-x-3">
            <Image
              src={article.author.avatar}
              alt={article.author.name}
              width={40}
              height={40}
              className="rounded-full object-cover w-10 h-10"
            />
            <div>
              <p className="font-medium text-gray-900">{article.author.name}</p>
              <p className="text-sm text-gray-500">{article.author.date}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}