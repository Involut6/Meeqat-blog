
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import Hero from '@/app/assets/hero.svg'

import { usePost } from '@/hooks/usePosts';

interface ArticlePageProps {
  params: {
    id: string;
  };
}

const BASE_URL = process.env.NEXT_PUBLIC_API_URL

export async function generateStaticParams() {
  const articles = await fetch(`${BASE_URL}/posts`).then(res => res.json());
  return articles.items.map((article: any) => ({
    id: article.id,
  }));
}


export default async function ArticlePage({ params }: ArticlePageProps) {
  
  const res = await fetch(`${BASE_URL}/posts/${params.id}`);
  const article = await res.json();

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
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
                    src={Hero ?? Hero}
                    alt="Image"
                    width={48}
                    height={48}
                    className="rounded-full object-cover w-12 h-12"
                  />
                  <div className='flex items-center gap-1'>
                    <p className="font-medium text-gray-900">{article.author?.firstName}</p>
                    <p>{new Date(article.updatedAt).toLocaleDateString(undefined, {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}</p>
                  </div>
                  {/* {article.readTime && (
                    <span className="text-sm text-gray-500">• {article.readTime}</span>
                  )} */}
                </div>

                <Image
                  src={Hero}
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
                    {article.content.split('\n\n').map((paragraph: any, index: any) => {
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
                      {article.content}
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
      {/* <section className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Read More</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
}