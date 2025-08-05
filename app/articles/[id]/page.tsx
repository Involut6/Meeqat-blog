import { notFound } from 'next/navigation';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import ArticleCard from '@/components/ArticleCard';
import { articles, recentArticles } from '@/lib/data';

interface ArticlePageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    id: article.id,
  }));
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = articles.find(a => a.id === params.id);
  
  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen container mx-auto">
      <Header />
      
      <article className="px-4 mt-8">
        <div className="">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="">
              {/* Article Header */}
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {article.title}
                </h1>
                
                <div className="flex items-center space-x-4 mb-6">
                  <Image
                    src={article.author.avatar}
                    alt={article.author.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover w-12 h-12"
                  />
                  <div className='flex items-center gap-1'>
                    <p className="font-medium text-gray-900">{article.author.name}</p>
                    <p className="text-sm text-gray-500">{article.author.date}</p>
                  </div>
                  {article.readTime && (
                    <span className="text-sm text-gray-500">• {article.readTime}</span>
                  )}
                </div>

                <Image
                  src={article.image}
                  alt={article.title}
                  width={800}
                  height={400}
                  className="w-full h-64 sm:h-80 object-cover rounded-xl mb-8"
                />
              </div>

              <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
                 {/* Article Content */}
              <div className="prose col-span-2 prose-lg max-w-none">
                {article.content ? (
                  <div className="text-gray-700 leading-relaxed space-y-6">
                    {article.content.split('\n\n').map((paragraph, index) => {
                      if (paragraph.startsWith('##')) {
                        return (
                          <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                            {paragraph.replace('## ', '')}
                          </h2>
                        );
                      }
                      return (
                        <p key={index} className="text-lg leading-relaxed">
                          {paragraph}
                        </p>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-gray-700 leading-relaxed">
                    <p className="text-lg mb-6">{article.excerpt}</p>
                    <p className="text-lg">
                      This is a sample article. In a real application, you would fetch the full content 
                      from your backend API. The content would include the complete article text, 
                      formatted with proper paragraphs, headings, and other elements.
                    </p>
                  </div>
                )}
              </div>
                <div className="lg:col-span-1">
                  <Sidebar />
                </div>

              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Read More Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Read More</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}