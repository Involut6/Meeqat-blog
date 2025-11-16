'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { BlogPost } from '@/types/general';
import Hero from '@/app/assets/hero.svg'

// Mock Article type for demo
interface Author {
  name: string;
  avatar: string;
  date: string;
}


interface ArticleCardProps {
  article: BlogPost;
  featured?: boolean;
}

export default function SpecialCard({ article, featured = false }: ArticleCardProps) {
  const cardClasses = featured
    ? "group cursor-pointer"
    : "group cursor-pointer bg-white rounded-xl h-full overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100";

  return (
    <Link href={`/articles/${article.id}`}>
      <div className={cardClasses}>
        <div className="relative overflow-hidden rounded-xl">
          {/* Background Image Container */}
            <div 
            className="w-full h-[359px] bg-cover bg-center bg-no-repeat relative group-hover:scale-105 transition-transform duration-300"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0.2,0.1), rgba(0,0,0.2,0.9)), url('${Hero}')`
            }}
            >
            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="text-[#FF9F43] bg-white px-3 py-1 rounded-full text-sm font-medium">
                {article.categories[0]}
              </span>
            </div>
            
            {/* Read Time Badge for Featured */}
            {/* {featured && article.readTime && (
              <div className="absolute top-4 right-4">
                <span className="bg-white bg-opacity-90 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                  {article.readTime}
                </span>
              </div>
            )} */}
            
            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className={`font-bold mb-3 group-hover:text-orange-200 transition-colors ${
                featured ? 'text-3xl leading-tight' : 'text-xl'
              }`}>
                {article.title}
              </h3>
              
              <p className={`mb-4 leading-relaxed text-gray-200 ${
                featured ? 'text-lg' : 'text-base'
              }`}>
                {article.excerpt}
              </p>
              
              {featured && (
                <div className="flex items-center text-orange-300 font-medium mb-6 group-hover:text-orange-200 transition-colors">
                  <span>Read More</span>
                  <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              )}
              
              {/* Author Info */}
              <div className="flex items-center space-x-3">
                <Image
                  src={Hero }
                  alt={article.authorId}
                  width={40}
                  height={40}
                  className="rounded-full object-cover w-10 h-10 border-2 border-white border-opacity-30"
                />
                <div>
                  <p className="font-medium text-white">{article.author.firstName} {article.author.lastName}</p>
                  <p>{new Date(article.updatedAt).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Non-featured cards get white background content area */}
        {/* {!featured && (
          <div className="p-6 bg-white">
            <h3 className="font-bold text-gray-900 mb-3 group-hover:text-[#FF9F43] transition-colors text-xl">
              {article.title}
            </h3>
            
            <p className="text-gray-600 mb-4 leading-relaxed text-base">
              {article.excerpt}
            </p>
            
            <div className="flex items-center space-x-3">
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
        )} */}
      </div>
    </Link>
  );
}