'use client'

import Link from "next/link"
import { useEffect } from "react";

import { Button } from "@nextui-org/react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Build Websites Without Writing Code</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Our component builder makes it simple to create beautiful, responsive websites by selecting and combining pre-built components.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/builder">
                <Button color="primary" size="lg" endContent={<ArrowRight size={16} />}>
                  Start Building
                </Button>
              </Link>
              <Button variant="bordered" size="lg">
                Watch Demo
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="overflow-hidden">
              <img src="/assets/images/hero.png" alt="Web Component Builder Interface" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
