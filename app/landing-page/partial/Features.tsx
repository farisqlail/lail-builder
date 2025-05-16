'use client'

import { Layers, Palette, Code, Zap, Monitor, Smartphone } from "lucide-react";

export function Features() {
  return (
    <section id="features" className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-normal text-[#333333]">
          Powerful <span className="text-[#3b82f6]">Features</span>
        </h2>
        <p className="mt-4 text-lg text-[#666666] max-w-2xl mx-auto">
          Everything you need to build beautiful websites quickly and efficiently.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Component Library",
            description:
              "Choose from a wide range of pre-built components including headers, heroes, features, and more.",
          },
          {
            title: "Visual Preview",
            description: "See exactly how your website will look as you build it with our real-time preview feature.",
          },
          {
            title: "Code Export",
            description:
              "Export your design as clean, production-ready Next.js or HTML code that you can use in your projects.",
          },
        ].map((feature, index) => (
          <div key={index} className="p-8 rounded-3xl bg-[#f8f8f8] hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#eff6ff] rounded-full flex items-center justify-center mb-6">
              <div className="w-6 h-6 bg-[#3b82f6] rounded-full"></div>
            </div>
            <h3 className="text-xl font-medium text-[#333333] mb-3">{feature.title}</h3>
            <p className="text-[#666666]">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
