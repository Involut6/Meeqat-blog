import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/ArticleCard';
import HeroSection from '@/components/HeroSection';
import NewsletterSignup from '@/components/NewsletterSignup';
import { featuredArticle, recentArticles } from '@/lib/data';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ArticlesPage from './articles';

export default function Home() {
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 pb-16">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="gap-12 items-center">
          <div>
            <HeroSection article={featuredArticle} featured={true} />
          </div>
        </div>
      </section>

      {/* Recent Articles Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Recent Articles</h2>
            <p className="text-gray-600">Stay informed with our latest insight</p>
          </div>
          <div className="flex space-x-2">
            <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      <ArticlesPage />

      <NewsletterSignup />
      <Footer />
    </div>
  );
}