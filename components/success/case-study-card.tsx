'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CaseStudyMetric {
  label: string;
  value: string;
  prefix?: string;
  suffix?: string;
}

interface CaseStudyProps {
  title: string;
  description: string;
  industry: string;
  challenge: string;
  solution: string;
  metrics: CaseStudyMetric[];
  gradientFrom: string;
  gradientVia: string;
  gradientTo: string;
}

export function CaseStudyCard({
  title,
  description,
  industry,
  challenge,
  solution,
  metrics,
  gradientFrom,
  gradientVia,
  gradientTo
}: CaseStudyProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl bg-gray-900/50 border border-gray-800 overflow-hidden hover:bg-gray-900/80 transition-colors group"
    >
      <div className="p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className={`text-sm font-medium px-3 py-1 rounded-full bg-gradient-to-r from-${gradientFrom} via-${gradientVia} to-${gradientTo} text-white`}>
            {industry}
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-400 mb-6">{description}</p>

        <div className="mb-6">
          <div className="text-sm font-medium text-gray-400 mb-2">Challenge:</div>
          <p className="text-gray-300">{challenge}</p>
        </div>

        <div className="mb-8">
          <div className="text-sm font-medium text-gray-400 mb-2">Solution:</div>
          <p className="text-gray-300">{solution}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-black/30 rounded-lg p-4">
              <div className="text-sm text-gray-400 mb-1">{metric.label}</div>
              <div className="text-2xl font-bold">
                {metric.prefix}
                <span className={`text-transparent bg-gradient-to-r from-${gradientFrom} via-${gradientVia} to-${gradientTo} bg-clip-text [-webkit-background-clip:text]`}>
                  {metric.value}
                </span>
                {metric.suffix}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`h-1 w-full bg-gradient-to-r from-${gradientFrom} via-${gradientVia} to-${gradientTo}`} />
    </motion.div>
  );
}
