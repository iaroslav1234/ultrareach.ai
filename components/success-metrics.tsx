'use client';

import React from 'react';
import { 
  Zap, 
  Globe2, 
  BarChart3, 
  Brain,
  Clock,
  Users,
  TrendingUp,
  MessageSquare
} from 'lucide-react';
import { motion } from 'framer-motion';

const metrics = [
  {
    icon: Clock,
    value: '0.8s',
    label: 'Average Response Time',
    description: 'Lightning-fast AI responses to every inquiry'
  },
  {
    icon: Globe2,
    value: '15+',
    label: 'Languages Supported',
    description: 'Breaking down language barriers globally'
  },
  {
    icon: Users,
    value: '1000x',
    label: 'Call Capacity',
    description: 'Handle thousands of simultaneous conversations'
  },
  {
    icon: TrendingUp,
    value: '85%',
    label: 'Lead Capture Rate',
    description: 'Significantly higher than industry average'
  }
];

const capabilities = [
  {
    icon: Brain,
    title: 'Natural Language Understanding',
    description: 'Advanced AI that understands context and intent',
    stats: [
      { label: 'Intent Recognition', value: '98%' },
      { label: 'Contextual Accuracy', value: '95%' }
    ]
  },
  {
    icon: MessageSquare,
    title: 'Conversational Intelligence',
    description: 'Dynamic responses adapted to each interaction',
    stats: [
      { label: 'Response Relevance', value: '96%' },
      { label: 'User Satisfaction', value: '92%' }
    ]
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Instant insights for better decision making',
    stats: [
      { label: 'Data Processing', value: '< 1s' },
      { label: 'Accuracy Rate', value: '99.9%' }
    ]
  },
  {
    icon: Zap,
    title: 'Automated Learning',
    description: 'Continuous improvement through interactions',
    stats: [
      { label: 'Learning Rate', value: '24/7' },
      { label: 'Pattern Recognition', value: '97%' }
    ]
  }
];

export function SuccessMetrics() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powered by{' '}
            <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text [-webkit-background-clip:text]">
              Advanced AI
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our cutting-edge technology delivers measurable results through real-time processing and intelligent automation
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 text-center group hover:bg-gray-900/80 transition-colors"
            >
              <metric.icon className="w-8 h-8 mx-auto mb-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
              <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text [-webkit-background-clip:text]">
                {metric.value}
              </div>
              <div className="font-medium mb-2">{metric.label}</div>
              <div className="text-sm text-gray-400">{metric.description}</div>
            </motion.div>
          ))}
        </div>

        {/* AI Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-xl bg-gray-900/50 border border-gray-800 group hover:bg-gray-900/80 transition-colors"
            >
              <div className="flex items-start gap-6">
                <capability.icon className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{capability.title}</h3>
                  <p className="text-gray-400 mb-4">{capability.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {capability.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="bg-black/30 rounded-lg p-3">
                        <div className="text-sm text-gray-400">{stat.label}</div>
                        <div className="text-lg font-semibold text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text [-webkit-background-clip:text]">
                          {stat.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
