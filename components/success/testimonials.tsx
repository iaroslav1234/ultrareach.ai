'use client';

import { motion } from 'framer-motion';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "UltraReach AI transformed our lead response system. We're now able to engage potential clients instantly, any time of day.",
    author: "Sarah Chen",
    role: "Director of Sales",
    company: "Premier Properties"
  },
  {
    quote: "The AI's ability to understand and accurately respond to complex property inquiries is remarkable. It's like having an expert agent available 24/7.",
    author: "Michael Rodriguez",
    role: "Managing Broker",
    company: "Luxury Estates Group"
  },
  {
    quote: "Implementation was smooth, and the results were immediate. Our response times went from hours to seconds.",
    author: "Emily Thompson",
    role: "Operations Manager",
    company: "Metropolitan Realty"
  },
  {
    quote: "The multilingual support has been a game-changer for our international clients. It's opened up entirely new markets for us.",
    author: "David Kim",
    role: "Global Sales Director",
    company: "International Property Advisors"
  },
  {
    quote: "Our agents love how the AI handles initial inquiries, letting them focus on high-value activities. It's boosted our efficiency tremendously.",
    author: "Jennifer Walsh",
    role: "Agency Principal",
    company: "Coastal Properties"
  },
  {
    quote: "The personalization capabilities are impressive. Each client interaction feels tailored and professional.",
    author: "Robert Martinez",
    role: "Customer Success Manager",
    company: "Urban Living Real Estate"
  },
  {
    quote: "We've seen a significant increase in lead conversion since implementing UltraReach AI. The ROI has been exceptional.",
    author: "Lisa Parker",
    role: "Marketing Director",
    company: "Skyline Properties"
  },
  {
    quote: "The system's ability to learn and adapt to our specific market needs has exceeded our expectations.",
    author: "James Wilson",
    role: "Tech Innovation Lead",
    company: "Future Homes"
  },
  {
    quote: "Our property management operations have never been more streamlined. Tenant satisfaction is at an all-time high.",
    author: "Amanda Foster",
    role: "Property Manager",
    company: "Elite Property Management"
  },
  {
    quote: "The analytics and insights provided have helped us make better business decisions. It's more than just a communication tool.",
    author: "Thomas Lee",
    role: "CEO",
    company: "Pacific Real Estate Group"
  },
  {
    quote: "We were skeptical about AI at first, but the results speak for themselves. Our team wouldn't want to work without it now.",
    author: "Rachel Morgan",
    role: "Team Lead",
    company: "City Center Realty"
  },
  {
    quote: "The cost savings and efficiency gains have been substantial. It's revolutionized how we handle client communications.",
    author: "Daniel Clark",
    role: "Operations Director",
    company: "National Property Solutions"
  }
];

export function Testimonials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:bg-gray-900/80 transition-colors"
        >
          <div className="mb-4">
            <p className="text-gray-300 italic">"{testimonial.quote}"</p>
          </div>
          <div>
            <p className="font-semibold text-white">{testimonial.author}</p>
            <p className="text-sm text-gray-400">{testimonial.role}</p>
            <p className="text-sm text-gray-400">{testimonial.company}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
