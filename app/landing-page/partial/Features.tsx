'use client'

import { Layers, Palette, Code, Zap, Monitor, Smartphone } from "lucide-react";

export function Features() {
  return (
    <section id="features" className="py-16 bg-gray-50 dark:bg-gray-800" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Everything you need to build beautiful websites quickly and efficiently.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <Layers />, title: "Component Library", description: "Choose from a wide range of pre-built components." },
            { icon: <Palette />, title: "Visual Preview", description: "See how your website looks in real-time." },
            { icon: <Code />, title: "Code Export", description: "Export your design as clean, production-ready code." },
            { icon: <Zap />, title: "Fast Development", description: "Build websites in minutes instead of days." },
            { icon: <Monitor />, title: "Responsive Design", description: "All components look great on any device." },
            { icon: <Smartphone />, title: "Modern UI", description: "Create websites with the latest design trends." },
          ].map((feature, index) => (
            <div key={index} className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
