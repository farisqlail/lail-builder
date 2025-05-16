'use client'

import { Camera } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 bg-[#f8f8f8] border-t border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div>
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-[#3b82f6] rounded-full flex items-center justify-center mr-3">
              <img src="/favicon.png" className="rounded-full" alt="logo" />
            </div>
            <span className="text-xl font-medium text-[#333333]">Lail Builder</span>
          </div>
          <p className="text-[#666666] mb-4">
            Build beautiful websites without writing code. Our component builder makes web development fast and easy.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-medium text-[#333333] mb-4">Product</h3>
          <ul className="space-y-2">
            <li>
              <a href="#features" className="text-[#666666] hover:text-[#3b82f6] transition-colors">
                Features
              </a>
            </li>
            <li>
              <a href="#templates" className="text-[#666666] hover:text-[#3b82f6] transition-colors">
                Templates
              </a>
            </li>
            <li>
              <a href="#how-it-works" className="text-[#666666] hover:text-[#3b82f6] transition-colors">
                How It Works
              </a>
            </li>
            <li>
              <a href="#" className="text-[#666666] hover:text-[#3b82f6] transition-colors">
                Pricing
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-medium text-[#333333] mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-[#666666] hover:text-[#3b82f6] transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-[#666666] hover:text-[#3b82f6] transition-colors">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-[#666666] hover:text-[#3b82f6] transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-medium text-[#333333] mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-[#666666] hover:text-[#3b82f6] transition-colors">
                Terms
              </a>
            </li>
            <li>
              <a href="#" className="text-[#666666] hover:text-[#3b82f6] transition-colors">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="text-[#666666] hover:text-[#3b82f6] transition-colors">
                Cookies
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center pt-8 border-t border-gray-200">
        <p className="text-[#666666]">© {new Date().getFullYear()} Laildev. All rights reserved.</p>
      </div>
    </footer>
  );
}
