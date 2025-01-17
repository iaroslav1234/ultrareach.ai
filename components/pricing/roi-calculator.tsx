'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calculator, Clock, DollarSign, Users } from 'lucide-react';

export function ROICalculator() {
  const [monthlyCallVolume, setMonthlyCallVolume] = useState(1000);
  const [avgCallDuration, setAvgCallDuration] = useState(5);
  const [agentHourlyCost, setAgentHourlyCost] = useState(25);
  const [numAgents, setNumAgents] = useState(5);

  // Calculate ROI
  const calculateMonthlyROI = () => {
    const totalCallMinutes = monthlyCallVolume * avgCallDuration;
    const totalAgentHours = (totalCallMinutes / 60) * numAgents;
    const currentMonthlyCost = totalAgentHours * agentHourlyCost;
    
    // Assume 70% cost reduction with AI
    const aiMonthlyCost = currentMonthlyCost * 0.3;
    const monthlySavings = currentMonthlyCost - aiMonthlyCost;
    
    return {
      currentCost: Math.round(currentMonthlyCost),
      aiCost: Math.round(aiMonthlyCost),
      savings: Math.round(monthlySavings)
    };
  };

  const roi = calculateMonthlyROI();

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Calculate Your ROI
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            See how much you can save by implementing our voice AI solution
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Input Form */}
          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Monthly Call Volume
                  </label>
                  <div className="flex gap-4">
                    <input
                      type="range"
                      min="100"
                      max="10000"
                      step="100"
                      value={monthlyCallVolume}
                      onChange={(e) => setMonthlyCallVolume(Number(e.target.value))}
                      className="flex-1"
                    />
                    <span className="w-20 text-right">{monthlyCallVolume}</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Average Call Duration (minutes)
                  </label>
                  <div className="flex gap-4">
                    <input
                      type="range"
                      min="1"
                      max="30"
                      value={avgCallDuration}
                      onChange={(e) => setAvgCallDuration(Number(e.target.value))}
                      className="flex-1"
                    />
                    <span className="w-20 text-right">{avgCallDuration}</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Agent Hourly Cost ($)
                  </label>
                  <div className="flex gap-4">
                    <input
                      type="range"
                      min="15"
                      max="50"
                      value={agentHourlyCost}
                      onChange={(e) => setAgentHourlyCost(Number(e.target.value))}
                      className="flex-1"
                    />
                    <span className="w-20 text-right">${agentHourlyCost}</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Number of Agents
                  </label>
                  <div className="flex gap-4">
                    <input
                      type="range"
                      min="1"
                      max="50"
                      value={numAgents}
                      onChange={(e) => setNumAgents(Number(e.target.value))}
                      className="flex-1"
                    />
                    <span className="w-20 text-right">{numAgents}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="space-y-6">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Monthly Savings</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <DollarSign className="w-5 h-5 text-gray-400" />
                      <span>Current Cost</span>
                    </div>
                    <span className="font-bold">${roi.currentCost}</span>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Calculator className="w-5 h-5 text-blue-400" />
                      <span>AI Solution Cost</span>
                    </div>
                    <span className="font-bold">${roi.aiCost}</span>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg">
                    <div className="flex items-center gap-3">
                      <DollarSign className="w-5 h-5 text-green-400" />
                      <span>Monthly Savings</span>
                    </div>
                    <span className="font-bold text-green-400">${roi.savings}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 font-medium hover:opacity-90 transition-opacity">
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
