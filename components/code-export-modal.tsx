"use client"

import { useState } from "react"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Tabs, Tab } from "@nextui-org/react"
import { Copy, Download, Check } from "lucide-react"

interface CodeExportModalProps {
  isOpen: boolean
  onClose: () => void
  selectedComponents: {
    header: string | null
    hero: string | null
    features: string | null
    testimonials: string | null
    pricing: string | null
    cta: string | null
    footer: string | null
  }
}

export function CodeExportModal({ isOpen, onClose, selectedComponents }: CodeExportModalProps) {
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState("nextjs")

  const generateNextJSCode = () => {
    // Import statements for the page
    let code = `"use client"

import React from 'react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
`

    // Add each selected component's JSX directly
    Object.entries(selectedComponents).forEach(([category, componentId]) => {
      if (!componentId) return

      // Get the component's source code
      const componentCode = getComponentSourceCode(category, componentId)

      // Add the component JSX directly
      code += `      {/* ${category.charAt(0).toUpperCase() + category.slice(1)}: ${componentId} */}\n`
      code += `      ${componentCode}\n\n`
    })

    code += `    </div>
  )
}

`

    // Add all component definitions as separate components
    Object.entries(selectedComponents).forEach(([category, componentId]) => {
      if (!componentId) return

      // Get the full component definition
      const fullComponentCode = getFullComponentCode(category, componentId)

      // Add the component definition
      code += `\n// ${category.charAt(0).toUpperCase() + category.slice(1)} Component: ${componentId}\n`
      code += fullComponentCode
      code += "\n\n"
    })

    return code
  }

  const getComponentSourceCode = (category, componentId) => {
    switch (componentId) {
      case "simple-header":
        return `<header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="font-bold text-xl">Company Name</div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Home</a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Features</a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Pricing</a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About</a>
            </nav>
            <div className="flex items-center space-x-3">
              <button className="px-4 py-2 rounded-md bg-blue-600 text-white">Sign Up</button>
            </div>
          </div>
        </header>`
      case "nav-header":
        return `<header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-md"></div>
                <div className="font-bold text-xl">Company Name</div>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Home</a>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Products</a>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Features</a>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Pricing</a>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Contact</a>
              </nav>
              <div className="flex items-center space-x-3">
                <button className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700">Login</button>
                <button className="px-4 py-2 rounded-md bg-blue-600 text-white">Sign Up</button>
              </div>
            </div>
          </div>
        </header>`
      case "full-header":
        return `<header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
              <div className="text-sm text-gray-600 dark:text-gray-400">Contact: contact@example.com</div>
              <div className="flex space-x-4 text-sm">
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Support</a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">FAQ</a>
              </div>
            </div>
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-blue-600 rounded-full"></div>
                <div className="font-bold text-xl">Company Name</div>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Home</a>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Products</a>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Services</a>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About</a>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Blog</a>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Contact</a>
              </nav>
              <div className="flex items-center space-x-3">
                <button className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700">Login</button>
                <button className="px-4 py-2 rounded-md bg-blue-600 text-white">Get Started</button>
              </div>
            </div>
          </div>
        </header>`
      case "centered-hero":
        return `<section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Build Beautiful Websites Faster</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              Create stunning, responsive websites with our component library. Mix and match to build your perfect site.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-6 py-3 rounded-md bg-blue-600 text-white font-medium">Get Started</button>
              <button className="px-6 py-3 rounded-md border border-gray-300 dark:border-gray-700 font-medium">Learn More</button>
            </div>
          </div>
        </section>`
      case "split-hero":
        return `<section className="py-12 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Design Your Website With Ease</h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                  Our component builder makes it simple to create beautiful, responsive websites without writing code.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-6 py-3 rounded-md bg-blue-600 text-white font-medium">Start Building</button>
                  <button className="px-6 py-3 rounded-md border border-gray-300 dark:border-gray-700 font-medium">Watch Demo</button>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="bg-gray-200 dark:bg-gray-800 rounded-lg h-80 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">Hero Image</span>
                </div>
              </div>
            </div>
          </div>
        </section>`
      case "image-hero":
        return `<section className="relative h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gray-900/60 z-10"></div>
          <div className="absolute inset-0 bg-gray-300 dark:bg-gray-800 flex items-center justify-center">
            <span className="text-gray-500 dark:text-gray-400">Background Image</span>
          </div>
          <div className="container mx-auto px-4 relative z-20 text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Create Without Limits</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Our component library gives you the building blocks to create any website you can imagine.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-6 py-3 rounded-md bg-white text-gray-900 font-medium">Get Started</button>
              <button className="px-6 py-3 rounded-md border border-white font-medium">View Components</button>
            </div>
          </div>
        </section>`
      case "grid-features":
        return `<section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Everything you need to build beautiful websites quickly and efficiently.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <div className="w-6 h-6 bg-blue-600 rounded"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Feature {item}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>`
      case "list-features":
        return `<section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <h2 className="text-3xl font-bold mb-4">Why Choose Our Platform</h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                  We provide the tools you need to build websites faster and more efficiently.
                </p>
                <ul className="space-y-4">
                  {[1, 2, 3, 4].map((item) => (
                    <li key={item} className="flex items-start">
                      <div className="mr-4 mt-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white">
                        ✓
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Feature {item}</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2 lg:pl-12">
                <div className="bg-gray-200 dark:bg-gray-800 rounded-lg h-80 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">Feature Image</span>
                </div>
              </div>
            </div>
          </div>
        </section>`
      case "icon-features":
        return `<section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Key Features</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Our platform provides everything you need to build beautiful websites.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Feature {item}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>`
      case "card-testimonials":
        return `<section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Don't just take our word for it. See what our users have to say about our platform.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-semibold">Customer Name</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Company {item}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam."
                  </p>
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star}>★</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>`
      case "quote-testimonials":
        return `<section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-5xl text-blue-600 mb-6">"</div>
              <p className="text-2xl mb-8">
                Our website building experience has been transformed since we started using this component builder. It's
                saved us countless hours and helped us deliver better results for our clients.
              </p>
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full mr-4"></div>
                <div className="text-left">
                  <h4 className="font-semibold">Jane Smith</h4>
                  <p className="text-gray-600 dark:text-gray-400">CEO, Design Agency</p>
                </div>
              </div>
            </div>
          </div>
        </section>`
      case "simple-pricing":
        return `<section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Choose the plan that's right for you and start building today.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {["Basic", "Pro", "Enterprise"].map((plan, index) => (
                <div
                  key={plan}
                  className={\`border \${index === 1 ? "border-blue-600" : "border-gray-200 dark:border-gray-800"} rounded-lg p-8\`}
                >
                  <h3 className="text-2xl font-bold mb-4">{plan}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">\${index === 0 ? "0" : index === 1 ? "49" : "99"}</span>
                    <span className="text-gray-600 dark:text-gray-400">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <span className="mr-2 text-green-500">✓</span>
                      <span>Feature 1</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-green-500">✓</span>
                      <span>Feature 2</span>
                    </li>
                    {index >= 1 && (
                      <li className="flex items-center">
                        <span className="mr-2 text-green-500">✓</span>
                        <span>Feature 3</span>
                      </li>
                    )}
                    {index >= 2 && (
                      <li className="flex items-center">
                        <span className="mr-2 text-green-500">✓</span>
                        <span>Feature 4</span>
                      </li>
                    )}
                  </ul>
                  <button
                    className={\`w-full py-2 rounded-md \${
                      index === 1 ? "bg-blue-600 text-white" : "border border-gray-300 dark:border-gray-700"
                    }\`}
                  >
                    {index === 0 ? "Get Started" : "Subscribe"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>`
      case "tiered-pricing":
        return `<section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Choose Your Plan</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                We have plans for businesses of all sizes. Select the one that works best for you.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
              {["Starter", "Professional", "Enterprise"].map((plan, index) => (
                <div
                  key={plan}
                  className={\`flex-1 bg-white dark:bg-gray-900 rounded-lg shadow-sm overflow-hidden \${
                    index === 1 ? "lg:-mt-4 lg:-mb-4 lg:border-2 lg:border-blue-600" : ""
                  }\`}
                >
                  {index === 1 && (
                    <div className="bg-blue-600 text-white text-center py-2 text-sm font-medium">Most Popular</div>
                  )}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2">{plan}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">\${index === 0 ? "29" : index === 1 ? "79" : "149"}</span>
                      <span className="text-gray-600 dark:text-gray-400">/month</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {index === 0
                        ? "Perfect for small businesses and freelancers"
                        : index === 1
                          ? "Ideal for growing businesses and agencies"
                          : "For large organizations with advanced needs"}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {[1, 2, 3, 4, 5].slice(0, index + 3).map((feature) => (
                        <li key={feature} className="flex items-center">
                          <span className="mr-2 text-green-500">✓</span>
                          <span>Feature {feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      className={\`w-full py-3 rounded-md \${
                        index === 1 ? "bg-blue-600 text-white" : "border border-gray-300 dark:border-gray-700"
                      }\`}
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>`
      case "simple-cta":
        return `<section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Join thousands of users who are already building beautiful websites with our platform.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-6 py-3 rounded-md bg-blue-600 text-white font-medium">Start Building Now</button>
                <button className="px-6 py-3 rounded-md border border-gray-300 dark:border-gray-700 font-medium">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>`
      case "boxed-cta":
        return `<section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <h2 className="text-3xl font-bold mb-4">Take Your Website to the Next Level</h2>
                  <p className="text-xl text-gray-700 dark:text-gray-300">
                    Start building with our component library today and see the difference.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <button className="px-6 py-3 rounded-md bg-blue-600 text-white font-medium">Get Started</button>
                </div>
              </div>
            </div>
          </div>
        </section>`
      case "simple-footer":
        return `<footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <div className="font-bold text-xl">Company Name</div>
                <p className="text-gray-600 dark:text-gray-400 mt-1">© {new Date().getFullYear()} All rights reserved.</p>
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Terms</a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Privacy</a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Contact</a>
              </div>
            </div>
          </div>
        </footer>`
      case "multi-column-footer":
        return `<footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <div className="font-bold text-xl mb-4">Company Name</div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Building the future of web development with component-based design.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">FB</a>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">TW</a>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">IG</a>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">LI</a>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4">Product</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Features</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Pricing</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Tutorials</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Releases</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">About</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Careers</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Blog</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Terms</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Privacy</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Cookies</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Licenses</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 text-center text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Company Name. All rights reserved.
            </div>
          </div>
        </footer>`
      case "social-footer":
        return `<footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col items-center">
              <div className="font-bold text-2xl mb-4">Company Name</div>
              <div className="flex space-x-8 mb-8">
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Home</a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Features</a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Pricing</a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">About</a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Contact</a>
              </div>
              <div className="flex space-x-6 mb-8">
                <a href="#" className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center">FB</a>
                <a href="#" className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center">TW</a>
                <a href="#" className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center">IG</a>
                <a href="#" className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center">LI</a>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                © {new Date().getFullYear()} Company Name. All rights reserved.
                <br />
                123 Street Name, City, Country
              </p>
            </div>
          </div>
        </footer>`
      // Add cases for other components
      default:
        // For components we haven't explicitly defined, return a placeholder
        return `<div className="${category}-component ${componentId}">
          {/* Component content would go here */}
          <p>This is the ${componentId} component</p>
        </div>`
    }
  }

  const getFullComponentCode = (category, componentId) => {
    // This would return the full component definition
    switch (componentId) {
      case "simple-header":
        return `export function SimpleHeader() {
    return (
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-bold text-xl">Company Name</div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Home
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Features
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Pricing
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              About
            </a>
          </nav>
          <div className="flex items-center space-x-3">
            <button className="px-4 py-2 rounded-md bg-blue-600 text-white">Sign Up</button>
          </div>
        </div>
      </header>
    )
  }`
      case "nav-header":
        return `export function NavHeader() {
    return (
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-md"></div>
              <div className="font-bold text-xl">Company Name</div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                Home
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                Products
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                Features
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                Pricing
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                Contact
              </a>
            </nav>
            <div className="flex items-center space-x-3">
              <button className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700">Login</button>
              <button className="px-4 py-2 rounded-md bg-blue-600 text-white">Sign Up</button>
            </div>
          </div>
        </div>
      </header>
    )
  }`
      case "full-header":
        return `export function FullHeader() {
    return (
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
            <div className="text-sm text-gray-600 dark:text-gray-400">Contact: contact@example.com</div>
            <div className="flex space-x-4 text-sm">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                Support
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                FAQ
              </a>
            </div>
          </div>
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-full"></div>
              <div className="font-bold text-xl">Company Name</div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                Home
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                Products
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                Services
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                About
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                Blog
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                Contact
              </a>
            </nav>
            <div className="flex items-center space-x-3">
              <button className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700">Login</button>
              <button className="px-4 py-2 rounded-md bg-blue-600 text-white">Get Started</button>
            </div>
          </div>
        </div>
      </header>
    )
  }`
      case "centered-hero":
        return `export function CenteredHero() {
    return (
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Build Beautiful Websites Faster</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Create stunning, responsive websites with our component library. Mix and match to build your perfect site.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-6 py-3 rounded-md bg-blue-600 text-white font-medium">Get Started</button>
            <button className="px-6 py-3 rounded-md border border-gray-300 dark:border-gray-700 font-medium">
              Learn More
            </button>
          </div>
        </div>
      </section>
    )
  }`
      case "split-hero":
        return `export function SplitHero() {
    return (
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Design Your Website With Ease</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Our component builder makes it simple to create beautiful, responsive websites without writing code.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 rounded-md bg-blue-600 text-white font-medium">Start Building</button>
                <button className="px-6 py-3 rounded-md border border-gray-300 dark:border-gray-700 font-medium">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-200 dark:bg-gray-800 rounded-lg h-80 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Hero Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }`
      case "image-hero":
        return `export function ImageHero() {
    return (
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gray-900/60 z-10"></div>
        <div className="absolute inset-0 bg-gray-300 dark:bg-gray-800 flex items-center justify-center">
          <span className="text-gray-500 dark:text-gray-400">Background Image</span>
        </div>
        <div className="container mx-auto px-4 relative z-20 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Create Without Limits</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Our component library gives you the building blocks to create any website you can imagine.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-6 py-3 rounded-md bg-white text-gray-900 font-medium">Get Started</button>
            <button className="px-6 py-3 rounded-md border border-white font-medium">View Components</button>
          </div>
        </div>
      </section>
    )
  }`
      case "grid-features":
        return `export function GridFeatures() {
    return (
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Everything you need to build beautiful websites quickly and efficiently.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-blue-600 rounded"></div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Feature {item}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }`
      case "list-features":
        return `export function ListFeatures() {
    return (
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h2 className="text-3xl font-bold mb-4">Why Choose Our Platform</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                We provide the tools you need to build websites faster and more efficiently.
              </p>
              <ul className="space-y-4">
                {[1, 2, 3, 4].map((item) => (
                  <li key={item} className="flex items-start">
                    <div className="mr-4 mt-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white">
                      ✓
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Feature {item}</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <div className="bg-gray-200 dark:bg-gray-800 rounded-lg h-80 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Feature Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }`
      case "icon-features":
        return `export function IconFeatures() {
    return (
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our platform provides everything you need to build beautiful websites.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Feature {item}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }`
      case "card-testimonials":
        return `export function CardTestimonials() {
    return (
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Don't just take our word for it. See what our users have to say about our platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Customer Name</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Company {item}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam."
                </p>
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star}>★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }`
      case "quote-testimonials":
        return `export function QuoteTestimonials() {
    return (
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-5xl text-blue-600 mb-6">"</div>
            <p className="text-2xl mb-8">
              Our website building experience has been transformed since we started using this component builder. It's
              saved us countless hours and helped us deliver better results for our clients.
            </p>
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full mr-4"></div>
              <div className="text-left">
                <h4 className="font-semibold">Jane Smith</h4>
                <p className="text-gray-600 dark:text-gray-400">CEO, Design Agency</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }`
      case "simple-pricing":
        return `export function SimplePricing() {
    return (
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Choose the plan that's right for you and start building today.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {["Basic", "Pro", "Enterprise"].map((plan, index) => (
              <div
                key={plan}
                className={\`border \${index === 1 ? "border-blue-600" : "border-gray-200 dark:border-gray-800"} rounded-lg p-8\`}
              >
                <h3 className="text-2xl font-bold mb-4">{plan}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">\${index === 0 ? "0" : index === 1 ? "49" : "99"}</span>
                  <span className="text-gray-600 dark:text-gray-400">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span>
                    <span>Feature 1</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span>
                    <span>Feature 2</span>
                  </li>
                  {index >= 1 && (
                    <li className="flex items-center">
                      <span className="mr-2 text-green-500">✓</span>
                      <span>Feature 3</span>
                    </li>
                  )}
                  {index >= 2 && (
                    <li className="flex items-center">
                      <span className="mr-2 text-green-500">✓</span>
                      <span>Feature 4</span>
                    </li>
                  )}
                </ul>
                <button
                  className={\`w-full py-2 rounded-md \${
                    index === 1 ? "bg-blue-600 text-white" : "border border-gray-300 dark:border-gray-700"
                  }\`}
                >
                  {index === 0 ? "Get Started" : "Subscribe"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }`
      case "tiered-pricing":
        return `export function TieredPricing() {
    return (
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose Your Plan</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We have plans for businesses of all sizes. Select the one that works best for you.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
            {["Starter", "Professional", "Enterprise"].map((plan, index) => (
              <div
                key={plan}
                className={\`flex-1 bg-white dark:bg-gray-900 rounded-lg shadow-sm overflow-hidden \${
                  index === 1 ? "lg:-mt-4 lg:-mb-4 lg:border-2 lg:border-blue-600" : ""
                }\`}
              >
                {index === 1 && (
                  <div className="bg-blue-600 text-white text-center py-2 text-sm font-medium">Most Popular</div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">\${index === 0 ? "29" : index === 1 ? "79" : "149"}</span>
                    <span className="text-gray-600 dark:text-gray-400">/month</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {index === 0
                      ? "Perfect for small businesses and freelancers"
                      : index === 1
                        ? "Ideal for growing businesses and agencies"
                        : "For large organizations with advanced needs"}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[1, 2, 3, 4, 5].slice(0, index + 3).map((feature) => (
                      <li key={feature} className="flex items-center">
                        <span className="mr-2 text-green-500">✓</span>
                        <span>Feature {feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={\`w-full py-3 rounded-md \${
                      index === 1 ? "bg-blue-600 text-white" : "border border-gray-300 dark:border-gray-700"
                    }\`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }`
      case "simple-cta":
        return `export function SimpleCta() {
    return (
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Join thousands of users who are already building beautiful websites with our platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-6 py-3 rounded-md bg-blue-600 text-white font-medium">Start Building Now</button>
              <button className="px-6 py-3 rounded-md border border-gray-300 dark:border-gray-700 font-medium">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }`
      case "boxed-cta":
        return `export function BoxedCta() {
    return (
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h2 className="text-3xl font-bold mb-4">Take Your Website to the Next Level</h2>
                <p className="text-xl text-gray-700 dark:text-gray-300">
                  Start building with our component library today and see the difference.
                </p>
              </div>
              <div className="flex-shrink-0">
                <button className="px-6 py-3 rounded-md bg-blue-600 text-white font-medium">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }`
      case "simple-footer":
        return `export function SimpleFooter() {
    return (
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="font-bold text-xl">Company Name</div>
              <p className="text-gray-600 dark:text-gray-400 mt-1">© {new Date().getFullYear()} All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                Terms
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                Privacy
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
  }`
      // Add cases for other components
      default:
        // For components we haven't explicitly defined, return a placeholder
        return `export function ${componentId
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join("")}() {
    return (
      <div className="${category}-component ${componentId}">
        {/* Component content would go here */}
        <p>This is the ${componentId} component</p>
      </div>
    )
  }`
    }
  }

  const generateHTMLCode = () => {
    let htmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Website</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            primary: '#3b82f6', // blue-500
          }
        }
      }
    }
  </script>
</head>
<body>
  <div class="min-h-screen">
`

    // Convert React components to HTML
    Object.entries(selectedComponents).forEach(([category, componentId]) => {
      if (!componentId) return

      htmlCode += `    <!-- ${category.charAt(0).toUpperCase() + category.slice(1)}: ${componentId} -->\n`
      htmlCode += `    ${getComponentHTML(category, componentId)}\n\n`
    })

    htmlCode += `  </div>
</body>
</html>`

    return htmlCode
  }

  const getComponentHTML = (category, componentId) => {
    // Convert React JSX to HTML
    switch (componentId) {
      case "simple-header":
        return `<header class="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <div class="font-bold text-xl">Company Name</div>
        <nav class="hidden md:flex space-x-6">
          <a href="#" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Home</a>
          <a href="#" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Features</a>
          <a href="#" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Pricing</a>
          <a href="#" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About</a>
        </nav>
        <div class="flex items-center space-x-3">
          <button class="px-4 py-2 rounded-md bg-blue-600 text-white">Sign Up</button>
        </div>
      </div>
    </header>`
      case "nav-header":
        return `<header class="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div class="container mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-blue-600 rounded-md"></div>
            <div class="font-bold text-xl">Company Name</div>
          </div>
          <nav class="hidden md:flex space-x-8">
            <a href="#" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Home</a>
            <a href="#" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Products</a>
            <a href="#" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Features</a>
            <a href="#" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Pricing</a>
            <a href="#" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Contact</a>
          </nav>
          <div class="flex items-center space-x-3">
            <button class="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700">Login</button>
            <button class="px-4 py-2 rounded-md bg-blue-600 text-white">Sign Up</button>
          </div>
        </div>
      </div>
    </header>`
      case "full-header":
        return `<header class="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
          <div class="text-sm text-gray-600 dark:text-gray-400">Contact: contact@example.com</div>
          <div class="flex space-x-4 text-sm">
            <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Support</a>
            <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">FAQ</a>
          </div>
        </div>
        <div class="flex justify-between items-center py-4">
          <div class="flex items-center space-x-2">
            <div class="w-10 h-10 bg-blue-600 rounded-full"></div>
            <div class="font-bold text-xl">Company Name</div>
          </div>
          <nav class="hidden md:flex space-x-8">
            <a href="#" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Home</a>
            <a href="#" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Products</a>
            <a href="#" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Services</a>
            <a href="#" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About</a>
            <a href="#" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Blog</a>
            <a href="#" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Contact</a>
          </nav>
          <div class="flex items-center space-x-3">
            <button class="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700">Login</button>
            <button class="px-4 py-2 rounded-md bg-blue-600 text-white">Get Started</button>
          </div>
        </div>
      </div>
    </header>`
      case "centered-hero":
        return `<section class="py-20 bg-white dark:bg-gray-900">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Build Beautiful Websites Faster</h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
          Create stunning, responsive websites with our component library. Mix and match to build your perfect site.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <button class="px-6 py-3 rounded-md bg-blue-600 text-white font-medium">Get Started</button>
          <button class="px-6 py-3 rounded-md border border-gray-300 dark:border-gray-700 font-medium">Learn More</button>
        </div>
      </div>
    </section>`
      case "split-hero":
        return `<section class="py-12 bg-white dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 class="text-4xl md:text-5xl font-bold mb-6">Design Your Website With Ease</h1>
            <p class="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Our component builder makes it simple to create beautiful, responsive websites without writing code.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <button class="px-6 py-3 rounded-md bg-blue-600 text-white font-medium">Start Building</button>
              <button class="px-6 py-3 rounded-md border border-gray-300 dark:border-gray-700 font-medium">Watch Demo</button>
            </div>
          </div>
          <div class="md:w-1/2">
            <div class="bg-gray-200 dark:bg-gray-800 rounded-lg h-80 flex items-center justify-center">
              <span class="text-gray-500 dark:text-gray-400">Hero Image</span>
            </div>
          </div>
        </div>
      </div>
    </section>`
      case "image-hero":
        return `<section class="relative h-[500px] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-gray-900/60 z-10"></div>
      <div class="absolute inset-0 bg-gray-300 dark:bg-gray-800 flex items-center justify-center">
        <span class="text-gray-500 dark:text-gray-400">Background Image</span>
      </div>
      <div class="container mx-auto px-4 relative z-20 text-center text-white">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Create Without Limits</h1>
        <p class="text-xl max-w-3xl mx-auto mb-8">
          Our component library gives you the building blocks to create any website you can imagine.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <button class="px-6 py-3 rounded-md bg-white text-gray-900 font-medium">Get Started</button>
          <button class="px-6 py-3 rounded-md border border-white font-medium">View Components</button>
        </div>
      </div>
    </section>`
      case "grid-features":
        return `<section class="py-16 bg-white dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">Powerful Features</h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Everything you need to build beautiful websites quickly and efficiently.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <div class="w-6 h-6 bg-blue-600 rounded"></div>
            </div>
            <h3 class="text-xl font-semibold mb-2">Feature 1</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <div class="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <div class="w-6 h-6 bg-blue-600 rounded"></div>
            </div>
            <h3 class="text-xl font-semibold mb-2">Feature 2</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <div class="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <div class="w-6 h-6 bg-blue-600 rounded"></div>
            </div>
            <h3 class="text-xl font-semibold mb-2">Feature 3</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>
        </div>
      </div>
    </section>`
      case "list-features":
        return `<section class="py-16 bg-white dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row items-center">
          <div class="lg:w-1/2 mb-10 lg:mb-0">
            <h2 class="text-3xl font-bold mb-4">Why Choose Our Platform</h2>
            <p class="text-xl text-gray-600 dark:text-gray-400 mb-8">
              We provide the tools you need to build websites faster and more efficiently.
            </p>
            <ul class="space-y-4">
              <li class="flex items-start">
                <div class="mr-4 mt-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white">✓</div>
                <div>
                  <h3 class="font-semibold mb-1">Feature 1</h3>
                  <p class="text-gray-600 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
                  </p>
                </div>
              </li>
              <li class="flex items-start">
                <div class="mr-4 mt-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white">✓</div>
                <div>
                  <h3 class="font-semibold mb-1">Feature 2</h3>
                  <p class="text-gray-600 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div class="lg:w-1/2 lg:pl-12">
            <div class="bg-gray-200 dark:bg-gray-800 rounded-lg h-80 flex items-center justify-center">
              <span class="text-gray-500 dark:text-gray-400">Feature Image</span>
            </div>
          </div>
        </div>
      </div>
    </section>`
      case "icon-features":
        return `<section class="py-16 bg-white dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">Key Features</h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Our platform provides everything you need to build beautiful websites.
          </p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div class="w-8 h-8 bg-blue-600 rounded-full"></div>
            </div>
            <h3 class="text-xl font-semibold mb-2">Feature 1</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
            </p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div class="w-8 h-8 bg-blue-600 rounded-full"></div>
            </div>
            <h3 class="text-xl font-semibold mb-2">Feature 2</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
            </p>
          </div>
        </div>
      </div>
    </section>`
      case "card-testimonials":
        return `<section class="py-16 bg-gray-50 dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it. See what our users have to say about our platform.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full mr-4"></div>
              <div>
                <h4 class="font-semibold">Customer Name</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">Company 1</p>
              </div>
            </div>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam."
            </p>
            <div class="flex text-yellow-400">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
          </div>
        </div>
      </div>
    </section>`
      case "quote-testimonials":
        return `<section class="py-16 bg-white dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <div class="text-5xl text-blue-600 mb-6">"</div>
          <p class="text-2xl mb-8">
            Our website building experience has been transformed since we started using this component builder. It's
            saved us countless hours and helped us deliver better results for our clients.
          </p>
          <div class="flex items-center justify-center">
            <div class="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full mr-4"></div>
            <div class="text-left">
              <h4 class="font-semibold">Jane Smith</h4>
              <p class="text-gray-600 dark:text-gray-400">CEO, Design Agency</p>
            </div>
          </div>
        </div>
      </div>
    </section>`
      case "simple-pricing":
        return `<section class="py-16 bg-white dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Choose the plan that's right for you and start building today.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div class="border border-gray-200 dark:border-gray-800 rounded-lg p-8">
            <h3 class="text-2xl font-bold mb-4">Basic</h3>
            <div class="mb-4">
              <span class="text-4xl font-bold">$0</span>
              <span class="text-gray-600 dark:text-gray-400">/month</span>
            </div>
            <ul class="space-y-3 mb-8">
              <li class="flex items-center">
                <span class="mr-2 text-green-500">✓</span>
                <span>Feature 1</span>
              </li>
              <li class="flex items-center">
                <span class="mr-2 text-green-500">✓</span>
                <span>Feature 2</span>
              </li>
            </ul>
            <button class="w-full py-2 rounded-md border border-gray-300 dark:border-gray-700">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>`
      case "simple-cta":
        return `<section class="py-16 bg-white dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Join thousands of users who are already building beautiful websites with our platform.
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <button class="px-6 py-3 rounded-md bg-blue-600 text-white font-medium">Start Building Now</button>
            <button class="px-6 py-3 rounded-md border border-gray-300 dark:border-gray-700 font-medium">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>`
      case "boxed-cta":
        return `<section class="py-16 bg-white dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 md:p-12">
          <div class="flex flex-col md:flex-row md:items-center justify-between">
            <div class="mb-6 md:mb-0 md:mr-8">
              <h2 class="text-3xl font-bold mb-4">Take Your Website to the Next Level</h2>
              <p class="text-xl text-gray-700 dark:text-gray-300">
                Start building with our component library today and see the difference.
              </p>
            </div>
            <div class="flex-shrink-0">
              <button class="px-6 py-3 rounded-md bg-blue-600 text-white font-medium">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </section>`
      case "simple-footer":
        return `<footer class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div class="container mx-auto px-4 py-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="mb-4 md:mb-0">
            <div class="font-bold text-xl">Company Name</div>
            <p class="text-gray-600 dark:text-gray-400 mt-1">© ${new Date().getFullYear()} All rights reserved.</p>
          </div>
          <div class="flex space-x-6">
            <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Terms</a>
            <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Privacy</a>
            <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>`
      // Add cases for other components
      default:
        // For components we haven't explicitly defined, return a placeholder
        return `<div class="${category}-component ${componentId}">
      <!-- Component content would go here -->
      <p>This is the ${componentId} component</p>
    </div>`
    }
  }

  const getCode = () => {
    if (activeTab === "nextjs") {
      return generateNextJSCode()
    } else {
      return generateHTMLCode()
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(getCode())
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDownload = () => {
    const element = document.createElement("a")
    const file = new Blob([getCode()], { type: "text/plain" })
    element.href = URL.createObjectURL(file)
    element.download = activeTab === "nextjs" ? "page.tsx" : "index.html"
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="3xl">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Export Code</ModalHeader>
            <ModalBody>
              <Tabs selectedKey={activeTab} onSelectionChange={(key) => setActiveTab(key.toString())}>
                <Tab key="nextjs" title="Next.js">
                  <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-md overflow-auto max-h-[400px]">
                    <pre className="text-sm">
                      <code>{generateNextJSCode()}</code>
                    </pre>
                  </div>
                </Tab>
                <Tab key="html" title="HTML">
                  <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-md overflow-auto max-h-[400px]">
                    <pre className="text-sm">
                      <code>{generateHTMLCode()}</code>
                    </pre>
                  </div>
                </Tab>
              </Tabs>
            </ModalBody>
            <ModalFooter>
              <Button color="default" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button
                color="primary"
                variant="flat"
                startContent={copied ? <Check size={16} /> : <Copy size={16} />}
                onPress={handleCopy}
              >
                {copied ? "Copied!" : "Copy Code"}
              </Button>
              <Button color="primary" startContent={<Download size={16} />} onPress={handleDownload}>
                Download
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
