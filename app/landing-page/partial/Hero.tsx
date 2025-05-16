'use client'

import Link from "next/link"
import { useEffect } from "react";

import { Button } from "@nextui-org/react";
import { ArrowRight, LayoutTemplate } from "lucide-react";

export function Hero() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-normal text-[#333333] leading-tight">
            Build your website
            <span className="block">with elegant</span>
            <span className="text-[#3b82f6]">components</span>
          </h1>
          <p className="mt-6 text-lg text-[#666666] max-w-md">
            Create stunning, responsive websites by selecting and customizing pre-built components. No coding
            required.
          </p>
          <div className="mt-10">
            <Link href="/app/builder">
              <Button className="bg-[#3b82f6] text-white rounded-full px-8 py-6 text-lg hover:bg-[#2563eb] transition-colors">
                Start Building
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="bg-[#eff6ff] rounded-3xl overflow-hidden">
            <img
              src="/assets/images/hero.png?height=600&width=800"
              alt="Website builder interface"
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full py-2 px-4 shadow-md">
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-6 h-6 bg-gray-200 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-gray-300"></div>
                </div>
              ))}
              <span className="ml-2 text-sm text-[#666666]">1,456 Happy Users</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
