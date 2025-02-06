'use client';

import { Header } from "@/components/header";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarLinks = {
  "Getting Started": [
    { name: "Platform Overview", href: "/docs/overview" },
    { name: "Quick Start Guide", href: "/docs/quickstart" },
    { name: "Core Concepts", href: "/docs/concepts" },
    { name: "Best Practices", href: "/docs/best-practices" }
  ],
  "AI Features": [
    { name: "Automated Responses", href: "/docs/automated-responses" },
    { name: "Lead Qualification", href: "/docs/lead-qualification" },
    { name: "Property Matching", href: "/docs/property-matching" },
    { name: "Market Analysis", href: "/docs/market-analysis" }
  ],
  "Integration": [
    { name: "API Reference", href: "/docs/api" },
    { name: "Webhooks", href: "/docs/webhooks" },
    { name: "Authentication", href: "/docs/authentication" },
    { name: "Data Models", href: "/docs/data-models" },
    { name: "API Errors", href: "/docs/errors" }
  ]
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <nav className="space-y-8 sticky top-24">
              {Object.entries(sidebarLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="font-semibold mb-3 text-lg text-white">{category}</h3>
                  <ul className="space-y-2">
                    {links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className={`block px-3 py-2 rounded-lg transition-colors ${
                            pathname === link.href
                              ? "bg-blue-600 text-white"
                              : "text-gray-400 hover:text-white hover:bg-gray-900"
                          }`}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <div className="prose prose-invert max-w-none">
              <style jsx global>{`
                .prose h1 {
                  font-size: 2.5rem;
                  font-weight: 700;
                  margin-bottom: 1.5rem;
                  color: white;
                }
                .prose h2 {
                  font-size: 1.875rem;
                  font-weight: 600;
                  margin-top: 2.5rem;
                  margin-bottom: 1rem;
                  color: white;
                }
                .prose h3 {
                  font-size: 1.5rem;
                  font-weight: 600;
                  margin-top: 2rem;
                  margin-bottom: 0.75rem;
                  color: #e5e7eb;
                }
                .prose p {
                  margin-top: 1rem;
                  margin-bottom: 1rem;
                  line-height: 1.75;
                  color: #9ca3af;
                }
                .prose ul {
                  margin-top: 1rem;
                  margin-bottom: 1rem;
                  list-style-type: disc;
                  padding-left: 1.5rem;
                  color: #9ca3af;
                }
                .prose li {
                  margin-top: 0.5rem;
                  margin-bottom: 0.5rem;
                }
                .prose code {
                  color: #e5e7eb;
                  background-color: rgba(31, 41, 55, 0.5);
                  padding: 0.2rem 0.4rem;
                  border-radius: 0.25rem;
                  font-size: 0.875rem;
                }
                .prose pre {
                  background-color: rgba(31, 41, 55, 0.5);
                  padding: 1rem;
                  border-radius: 0.5rem;
                  overflow-x: auto;
                }
                .prose a {
                  color: #60a5fa;
                  text-decoration: none;
                }
                .prose a:hover {
                  text-decoration: underline;
                }
              `}</style>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
