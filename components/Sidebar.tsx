'use client';

import Link from 'next/link';
import Image from 'next/image';
import { categories } from '@/lib/data';
import { Facebook, Instagram, Linkedin, Music, Twitter } from "lucide-react";
import { usePosts } from '@/hooks/usePosts';
import Hero from '@/app/assets/hero.svg'

export default function Sidebar() {
    const {data} = usePosts()
  const latestPosts = data?.items.slice(0, 5)

  return (
    <aside className="space-y-8">
      {/* Latest Posts */}
      <div className="">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Latest Post</h3>
        <div className="space-y-4">
          {latestPosts?.map((article: any) => (
            <Link key={article.id} href={`/articles/${article.id}`}>
              <div className="flex space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                <Image
                  src={Hero}
                  alt={article.slug}
                  width={60}
                  height={60}
                  className="rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 text-sm group-hover:text-[#FF9F43] transition-colors line-clamp-2">
                    {article.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">{article.createdAt}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Categories</h3>
        <div className="flex flex-wrap gap-4">
          {categories.slice(0, 6).map((category) => (
            <Link key={category} href={`/articles?category=${category.toLowerCase()}`}>
              <span className="text-gray-700 rounded-full px-2 py-[6px] hover:text-[#FF9F43] bg-gray-100 text-gray-700 hover:text-[#FF9F43]">
                {category}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="py-6">
      <h2 className="text-xl font-bold text-black mb-6">Socials</h2>
      
      <div className="flex gap-4">
        <a href="#" className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors">
          <Facebook className="w-6 h-6 text-white" />
        </a>
        
        <a href="#" className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors">
          <Instagram className="w-6 h-6 text-white" />
        </a>
        
        <a href="#" className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors">
          <Linkedin className="w-6 h-6 text-white" />
        </a>
        
        <a href="#" className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors">
          <Music className="w-6 h-6 text-white" />
        </a>
        
        <a href="#" className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors">
          <Twitter className="w-6 h-6 text-white" />
        </a>
      </div>
    </div>
    </aside>
  );
}