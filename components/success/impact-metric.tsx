'use client';

import { motion } from 'framer-motion';
import { BarChart3, Bot, Clock, Globe2, Languages, LineChart, MessageSquare, Shield, Sparkles, TrendingUp, Users, Zap, type LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Clock,
  Users,
  TrendingUp,
  BarChart3,
  Bot,
  Globe2,
  Languages,
  LineChart,
  MessageSquare,
  Shield,
  Sparkles,
  Zap
};

interface ImpactMetricProps {
  iconName: keyof typeof iconMap;
  value: string;
  label: string;
  description: string;
  index: number;
}

export function ImpactMetric({ iconName, value, label, description, index }: ImpactMetricProps) {
  const Icon = iconMap[iconName];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 text-center group hover:bg-gray-900/80 transition-colors"
    >
      <Icon className="w-8 h-8 mx-auto mb-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
      <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text [-webkit-background-clip:text]">
        {value}
      </div>
      <div className="font-medium mb-2">{label}</div>
      <div className="text-sm text-gray-400">{description}</div>
    </motion.div>
  );
}
