'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './article.module.css';
import { CalendarDays, Clock, Share2, Twitter, Linkedin, Facebook } from 'lucide-react';

export default function InsightArticle({ params }: { params: { slug: string } }) {
  // In a real app, fetch the article data based on the slug
  const article = {
    title: "The Future of AI in Real Estate: 2025 and Beyond",
    subtitle: "How artificial intelligence is revolutionizing property matching, market analysis, and customer experience in the real estate industry",
    excerpt: "Explore how artificial intelligence is reshaping the real estate industry, from automated property matching to predictive market analysis.",
    content: `
      Artificial intelligence is revolutionizing the real estate industry in ways we could only imagine a few years ago. From automated property matching to predictive market analysis, AI is becoming an indispensable tool for real estate professionals.

      ## The Impact of AI on Property Matching

      One of the most significant applications of AI in real estate is in property matching. Advanced algorithms can now analyze thousands of data points to match properties with potential buyers more accurately than ever before.

      ### Key Benefits:
      - More accurate property recommendations
      - Reduced time to find suitable properties
      - Better understanding of buyer preferences
      - Improved conversion rates

      ## Predictive Analytics in Real Estate

      AI-powered predictive analytics is giving real estate professionals unprecedented insights into market trends and property valuations.

      ### Applications:
      - Market trend analysis
      - Property value predictions
      - Investment opportunity identification
      - Risk assessment

      ## The Future of AI in Real Estate

      As we look towards the future, AI will continue to play an increasingly important role in real estate operations. We can expect to see:

      1. More sophisticated property matching algorithms
      2. Better predictive analytics
      3. Automated property valuations
      4. Enhanced customer service through AI
    `,
    category: "Industry Trends",
    author: {
      name: "Sarah Chen",
      role: "Head of AI Strategy",
      image: "/images/team/sarah-chen.jpg",
      bio: "Sarah leads AI strategy at UltraReach.ai, focusing on developing innovative solutions for the real estate industry."
    },
    date: "February 7, 2025",
    readTime: "5 min read",
    image: "/images/insights/ai-future.jpg",
    tags: ["Artificial Intelligence", "Real Estate", "Property Tech", "Market Analysis"]
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Article Header */}
      <div className="relative">
        <div className="aspect-w-16 aspect-h-6 relative">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>
      </div>

      <div className="relative z-10 -mt-32 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category and Share */}
            <div className="flex items-center justify-between mb-8">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500 text-blue-400 text-sm font-medium">
                {article.category}
              </div>
              <div className="flex items-center gap-4">
                <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                  <Twitter size={16} className="text-gray-400" />
                </button>
                <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                  <Linkedin size={16} className="text-gray-400" />
                </button>
                <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                  <Facebook size={16} className="text-gray-400" />
                </button>
                <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                  <Share2 size={16} className="text-gray-400" />
                </button>
              </div>
            </div>

            {/* Title and Subtitle */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              {article.title}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {article.subtitle}
            </p>

            {/* Author and Article Info */}
            <div className="flex items-center gap-6 py-6 border-t border-b border-gray-800">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500">
                  <Image
                    src={article.author.image}
                    alt={article.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium text-white">{article.author.name}</div>
                  <div className="text-sm text-gray-400">{article.author.role}</div>
                </div>
              </div>
              <div className="flex items-center gap-6 ml-auto text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <CalendarDays size={16} />
                  {article.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  {article.readTime}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <article className={`${styles.prose} prose-lg max-w-none`}>
            <div className="content" dangerouslySetInnerHTML={{ 
              __html: article.content.split('\n').map(line => {
                if (line.startsWith('##')) {
                  return line.replace(/##\s(.*)/, '<h2>$1</h2>');
                }
                if (line.startsWith('###')) {
                  return line.replace(/###\s(.*)/, '<h3>$1</h3>');
                }
                if (line.startsWith('-')) {
                  return line.replace(/-\s(.*)/, '<ul><li>$1</li></ul>');
                }
                if (line.match(/^\d\./)) {
                  return line.replace(/\d\.\s(.*)/, '<ol><li>$1</li></ol>');
                }
                if (line.trim()) {
                  return `<p>${line}</p>`;
                }
                return line;
              }).join('\n') 
            }} />
          </article>

          {/* Tags */}
          <div className="mt-12 pt-6 border-t border-gray-800">
            <h4 className="text-sm font-medium text-gray-400 mb-4">Tagged with</h4>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/insights/tags/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-3 py-1 rounded-full bg-gray-900 text-gray-400 text-sm hover:bg-gray-800 transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-12 p-6 rounded-2xl bg-gray-900/50 border border-gray-800">
            <div className="flex items-start gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-r from-blue-500 to-purple-500">
                <Image
                  src={article.author.image}
                  alt={article.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white mb-2">About {article.author.name}</h4>
                <p className="text-gray-400">{article.author.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-white mb-8">More from {article.category}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <Link key={i} href="#" className="group">
              <div className="rounded-xl overflow-hidden bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-colors">
                <div className="aspect-w-16 aspect-h-9 relative">
                  <Image
                    src="/images/insights/market-analysis.jpg"
                    alt="Related article"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-flex items-center px-2 py-1 rounded-full bg-blue-600/20 border border-blue-500 text-blue-400 text-xs font-medium mb-4">
                    {article.category}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    Understanding AI-Powered Market Analysis
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2">
                    A deep dive into how artificial intelligence is transforming market analysis in real estate.
                  </p>
                  <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-800">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500">
                      <Image
                        src={article.author.image}
                        alt="Author"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-gray-300">Emily Watson</span>
                      <span className="text-gray-500">Feb 3, 2025</span>
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
        <div className="max-w-3xl mx-auto rounded-2xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/20 p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-400 mb-8">
            Get the latest insights on AI in real estate and property technology delivered to your inbox.
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
  );
}
