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
    const Component = ComponentLibrary[category][componentId]

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
        </footer>>`
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

const ComponentLibrary = {
  header: {
    "simple-header": () =>
      `<header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">...</header>`,
    "nav-header": () =>
      `<header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">...</header>`,
  },
  hero: {
    "centered-hero": () => `<section className="py-20 bg-white dark:bg-gray-900">...</section>`,
    "split-hero": () => `<section className="py-12 bg-white dark:bg-gray-900">...</section>`,
  },
  features: {
    "grid-features": () => `<section className="py-16 bg-white dark:bg-gray-900">...</section>`,
  },
  footer: {
    "simple-footer": () =>
      `<footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">...</footer>`,
  },
}
