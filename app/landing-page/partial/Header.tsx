'use client'

import Link from "next/link";
import { Button } from "@nextui-org/react";

export function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-bold text-xl">Lail Builder</div>
        <nav className="hidden md:flex space-x-6">
          <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            Features
          </a>
          <a href="#how-it-works" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            How It Works
          </a>
          <a href="#pricing" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            Pricing
          </a>
        </nav>
        <div className="flex items-center space-x-3">
          <Link href="/builder">
            <Button color="primary">Get Started</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
