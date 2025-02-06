'use client';

import { Header } from "@/components/header";
import { CheckCircle2, AlertCircle } from "lucide-react";

export default function PlatformStatus() {
  const services = [
    {
      name: "AI Core Services",
      status: "operational",
      uptime: "99.99%",
      lastIncident: "None"
    },
    {
      name: "API Services",
      status: "operational",
      uptime: "99.98%",
      lastIncident: "7 days ago"
    },
    {
      name: "Database Services",
      status: "operational",
      uptime: "99.99%",
      lastIncident: "None"
    },
    {
      name: "Search Services",
      status: "operational",
      uptime: "99.97%",
      lastIncident: "14 days ago"
    },
    {
      name: "Analytics Services",
      status: "operational",
      uptime: "99.95%",
      lastIncident: "30 days ago"
    }
  ];

  const regions = [
    {
      name: "North America",
      status: "operational",
      latency: "45ms"
    },
    {
      name: "Europe",
      status: "operational",
      latency: "85ms"
    },
    {
      name: "Asia Pacific",
      status: "operational",
      latency: "120ms"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <CheckCircle2 className="w-8 h-8 text-green-400" />
            <h1 className="text-4xl font-bold">Platform Status</h1>
          </div>
          <p className="text-gray-400">
            Current status of UltraReach.ai services and infrastructure
          </p>
        </div>

        <div className="grid gap-8 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Services</h2>
            <div className="grid gap-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-gray-900/50 border border-gray-800"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold">{service.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                        <span className="text-green-400 text-sm">Operational</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-gray-400">Uptime</div>
                      <div className="font-semibold">{service.uptime}</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-400">
                    Last incident: {service.lastIncident}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Regional Performance</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {regions.map((region, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-gray-900/50 border border-gray-800"
                >
                  <h3 className="text-lg font-semibold mb-2">{region.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 text-sm">Operational</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    Average Latency: {region.latency}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Subscribe to Updates</h2>
          <p className="text-gray-400 mb-8">
            Get notified about platform status changes and maintenance windows.
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg bg-gray-900 border border-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
            <button className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
