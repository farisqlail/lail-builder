'use client'

import Link from "next/link"
import { useEffect } from "react";

import { Button } from "@nextui-org/react";
import { ArrowRight, LayoutTemplate, Sparkles } from "lucide-react";

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
          <div className="flex gap-2 mt-10">
            <Link href="/ai-generator">
              <Button className="bg-transparent border border-[#3b82f6] text-[#3b82f6] rounded-full px-8 py-6 hover:bg-[#3b82f6] hover:text-white transition-colors flex items-center gap-1">
                <Sparkles size={16} />
                AI Generator
              </Button>
            </Link>
            <Link href="/builder">
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
        </div>
      </div>
    </section>
  );
}
