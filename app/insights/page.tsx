import Link from 'next/link';
import Image from 'next/image';
import articles from '@/data/insights';

export default function Insights() {
  // Get the latest article for the featured section
  const featuredArticle = articles[0];
  const recentArticles = articles.slice(1);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry Insights & Analysis
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Expert perspectives on AI technology, real estate trends, and the future of property technology.
            </p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-4 justify-center">
          {['All', 'Industry Trends', 'Technology', 'Marketing', 'Investment', 'Property Management'].map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full text-sm font-medium transition-colors
                       hover:bg-blue-600 hover:text-white
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black
                       border border-gray-800 text-gray-400"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Article */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href={`/insights/${featuredArticle.slug}`} className="group">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 p-8">
              <div className="inline-block px-4 py-1 rounded-full bg-blue-600/20 border border-blue-500 text-blue-400 text-sm font-medium mb-4">
                {featuredArticle.category}
              </div>
              <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {featuredArticle.title}
              </h2>
              <p className="text-gray-300 mb-4 max-w-3xl">
                {featuredArticle.excerpt}
              </p>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500">
                    <Image
                      src={featuredArticle.author.image}
                      alt={featuredArticle.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="text-white font-medium">{featuredArticle.author.name}</div>
                  <div className="text-gray-400 text-sm">{featuredArticle.author.role}</div>
                </div>
                <div className="text-gray-400 text-sm">
                  {featuredArticle.date} · {featuredArticle.readTime}
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Article Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentArticles.map((article) => (
            <Link key={article.id} href={`/insights/${article.slug}`} className="group">
              <div className="rounded-xl overflow-hidden bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-colors h-full flex flex-col">
                <div className="relative aspect-w-16 aspect-h-9">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="inline-block px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500 text-blue-400 text-sm font-medium mb-4">
                    {article.category}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 mb-4 flex-1">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-800">
                    <div className="flex-shrink-0">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500">
                        <Image
                          src={article.author.image}
                          alt={article.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="text-white font-medium">{article.author.name}</div>
                      <div className="text-gray-400 text-sm">{article.author.role}</div>
                    </div>
                    <div className="text-gray-400 text-sm ml-auto">
                      {article.date} · {article.readTime}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-2xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/20 p-8 md:p-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Informed
            </h2>
            <p className="text-gray-400 mb-8">
              Get the latest insights on AI in real estate, market trends, and technology delivered directly to your inbox.
            </p>
            <form className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-black/50 border border-gray-800 text-white placeholder-gray-500
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-500
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
