'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import { Sparkles } from "lucide-react"

export function Header() {
  const router = useRouter();

  const toHome = () => {
    router.push('/')
  }

  return (
    <header className="py-6 px-6 md:px-12 lg:px-24 flex justify-between items-center">
      <div className="flex items-center cursor-pointer" onClick={toHome}>
        <div className="w-10 h-10 bg-[#3b82f6] rounded-full flex items-center justify-center mr-3">
          <img src="/favicon.png" className="rounded-full" alt="logo" />
        </div>
        <span className="text-xl font-semibold text-[#333333]">Lail Builder</span>
      </div>
      <nav className="hidden md:flex space-x-8">
        <a href="#features" className="text-[#333333] hover:text-[#3b82f6] transition-colors">
          Features
        </a>
        <a href="/templates" className="text-[#333333] hover:text-[#3b82f6] transition-colors">
          Templates
        </a>
        <a href="#how-it-works" className="text-[#333333] hover:text-[#3b82f6] transition-colors">
          How It Works
        </a>
        <a href="#faq" className="text-[#333333] hover:text-[#3b82f6] transition-colors">
          FAQs
        </a>
      </nav>
      <div className="flex gap-2">
        <Link href="/ai-generator">
          <Button className="bg-transparent border border-[#3b82f6] text-[#3b82f6] rounded-full px-6 py-2 hover:bg-[#3b82f6] hover:text-white transition-colors flex items-center gap-1">
            <Sparkles size={16} />
            AI Generator
          </Button>
        </Link>
        <Link href="/builder">
          <Button className="bg-[#3b82f6] text-white rounded-full px-6 py-2 hover:bg-[#2563eb] transition-colors">
            Start Building
          </Button>
        </Link>
      </div>
    </header>
  );
}
