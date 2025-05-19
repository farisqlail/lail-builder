"use client"

import { useState } from "react"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Tabs, Tab } from "@nextui-org/react"
import { Copy, Download, Check } from 'lucide-react'

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
  customTextContent: Record<string, any>
  componentColors?: Record<string, string>
}

export function CodeExportModal({ isOpen, onClose, selectedComponents, customTextContent, componentColors = {} }: CodeExportModalProps) {
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

  const getComponentSourceCode = (category, componentId, componentColor = "#3b82f6") => {
    // Get the custom text content for this component
    const textContent = customTextContent[`${category}-${componentId}`] || {}
    const colorStyle = componentColor ? `style={{ backgroundColor: "${componentColor}" }}` : ""
    const colorStyleBg = componentColor ? `style={{ backgroundColor: "rgba(${hexToRgb(componentColor)}, 0.15)" }}` : ""
    const colorStyleText = componentColor ? `style={{ color: "${componentColor}" }}` : ""
    const colorStyleBorder = componentColor ? `style={{ borderColor: "${componentColor}" }}` : ""

    switch (componentId) {
      case "simple-header":
        return `<header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="font-bold text-xl">${textContent.companyName || "Company Name"}</div>
            <nav className="hidden md:flex space-x-6">
              ${(textContent.menuItems || ["Home", "Features", "Pricing", "About"])
                .map(
                  (item) =>
                    `<a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">${item}</a>`,
                )
                .join("\n              ")}
            </nav>
            <div className="flex items-center space-x-3">
              <button className="px-4 py-2 rounded-md bg-blue-600 text-white" ${colorStyle}>${textContent.buttonText || "Sign Up"}</button>
            </div>
          </div>
        </header>`
      case "nav-header":
        return `<header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-md" ${colorStyle}></div>
                <div className="font-bold text-xl">${textContent.companyName || "Company Name"}</div>
              </div>
              <nav className="hidden md:flex space-x-8">
                ${(textContent.menuItems || ["Home", "Products", "Features", "Pricing", "Contact"])
                  .map(
                    (item) =>
                      `<a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">${item}</a>`,
                  )
                  .join("\n                ")}
              </nav>
              <div className="flex items-center space-x-3">
                <button className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700">${
                  textContent.buttonText?.[0] || "Login"
                }</button>
                <button className="px-4 py-2 rounded-md bg-blue-600 text-white" ${colorStyle}>${
                  textContent.buttonText?.[1] || "Sign Up"
                }</button>
              </div>
            </div>
          </div>
        </header>`
      case "full-header":
        return `<header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
              <div className="text-sm text-gray-600 dark:text-gray-400">Contact: ${
                textContent.contactInfo || "contact@example.com"
              }</div>
              <div className="flex space-x-4 text-sm">
                ${(textContent.topMenuItems || ["Support", "FAQ"])
                  .map(
                    (item) =>
                      `<a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">${item}</a>`,
                  )
                  .join("\n                ")}
              </div>
            </div>
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-blue-600 rounded-full" ${colorStyle}></div>
                <div className="font-bold text-xl">${textContent.companyName || "Company Name"}</div>
              </div>
              <nav className="hidden md:flex space-x-8">
                ${(textContent.menuItems || ["Home", "Products", "Services", "About", "Blog", "Contact"])
                  .map(
                    (item) =>
                      `<a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">${item}</a>`,
                  )
                  .join("\n                ")}
              </nav>
              <div className="flex items-center space-x-3">
                <button className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700">${
                  textContent.buttonText?.[0] || "Login"
                }</button>
                <button className="px-4 py-2 rounded-md bg-blue-600 text-white" ${colorStyle}>${
                  textContent.buttonText?.[1] || "Get Started"
                }</button>
              </div>
            </div>
          </div>
        </header>`
      case "centered-hero":
        return `<section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">${
              textContent.heading || "Build Beautiful Websites Faster"
            }</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              ${
                textContent.subheading ||
                "Create stunning, responsive websites with our component library. Mix and match to build your perfect site."
              }
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-6 py-3 rounded-md bg-blue-600 text-white font-medium" ${colorStyle}>${
                textContent.buttonText?.[0] || "Get Started"
              }</button>
              <button className="px-6 py-3 rounded-md border border-gray-300 dark:border-gray-700 font-medium">
                ${textContent.buttonText?.[1] || "Learn More"}
              </button>
            </div>
          </div>
        </section>`
      case "split-hero":
        return `<section className="py-12 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">${
                  textContent.heading || "Design Your Website With Ease"
                }</h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                  ${
                    textContent.subheading ||
                    "Our component builder makes it simple to create beautiful, responsive websites without writing code."
                  }
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-6 py-3 rounded-md bg-blue-600 text-white font-medium" ${colorStyle}>${
                    textContent.buttonText?.[0] || "Start Building"
                  }</button>
                  <button className="px-6 py-3 rounded-md border border-gray-300 dark:border-gray-700 font-medium">
                    ${textContent.buttonText?.[1] || "Watch Demo"}
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
        </section>`
      case "image-hero":
        return `<section className="relative h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gray-900/60 z-10"></div>
          <div className="absolute inset-0 bg-gray-300 dark:bg-gray-800 flex items-center justify-center">
            <span className="text-gray-500 dark:text-gray-400">Background Image</span>
          </div>
          <div className="container mx-auto px-4 relative z-20 text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">${
              textContent.heading || "Create Without Limits"
            }</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              ${
                textContent.subheading ||
                "Our component library gives you the building blocks to create any website you can imagine."
              }
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-6 py-3 rounded-md bg-white text-gray-900 font-medium">${
                textContent.buttonText?.[0] || "Get Started"
              }</button>
              <button className="px-6 py-3 rounded-md border border-white font-medium">${
                textContent.buttonText?.[1] || "View Components"
              }</button>
            </div>
          </div>
        </section>`
      case "grid-features":
        return `<section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">${textContent.heading || "Powerful Features"}</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                ${textContent.subheading || "Everything you need to build beautiful websites quickly and efficiently."}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              ${(textContent.features || ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5", "Feature 6"])
                .map(
                  (
                    feature,
                    index,
                  ) => `<div key={${index}} className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4" ${colorStyleBg}>
                  <div className="w-6 h-6 bg-blue-600 rounded" ${colorStyle}></div>
                </div>
                <h3 className="text-xl font-semibold mb-2">${feature}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  ${
                    textContent.featureDescriptions?.[index] ||
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
                  }
                </p>
              </div>`,
                )
                .join("\n              ")}
            </div>
          </div>
        </section>`
      case "list-features":
        return `<section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <h2 className="text-3xl font-bold mb-4">${textContent.heading || "Why Choose Our Platform"}</h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                  ${
                    textContent.subheading ||
                    "We provide the tools you need to build websites faster and more efficiently."
                  }
                </p>
                <ul className="space-y-4">
                  ${(textContent.features || ["Feature 1", "Feature 2", "Feature 3", "Feature 4"])
                    .map(
                      (feature, index) => `<li className="flex items-start">
                    <div className="mr-4 mt-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white" ${colorStyle}>
                      ✓
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">${feature}</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        ${
                          textContent.featureDescriptions?.[index] ||
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor."
                        }
                      </p>
                    </div>
                  </li>`,
                    )
                    .join("\n                  ")}
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
              <h2 className="text-3xl font-bold mb-4">${textContent.heading || "Key Features"}</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                ${textContent.subheading || "Our platform provides everything you need to build beautiful websites."}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              ${(textContent.features || ["Feature 1", "Feature 2", "Feature 3", "Feature 4"])
                .map(
                  (feature, index) => `<div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4" ${colorStyleBg}>
                  <div className="w-8 h-8 bg-blue-600 rounded-full" ${colorStyle}></div>
                </div>
                <h3 className="text-xl font-semibold mb-2">${feature}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  ${
                    textContent.featureDescriptions?.[index] ||
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor."
                  }
                </p>
              </div>`,
                )
                .join("\n              ")}
            </div>
          </div>
        </section>`
      case "card-testimonials":
        return `<section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">${textContent.heading || "What Our Customers Say"}</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                ${
                  textContent.subheading ||
                  "Don't just take our word for it. See what our users have to say about our platform."
                }
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              ${(
                textContent.testimonials || [
                  {
                    name: "Customer Name",
                    company: "Company 1",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
                  },
                  {
                    name: "Customer Name",
                    company: "Company 2",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
                  },
                  {
                    name: "Customer Name",
                    company: "Company 3",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
                  },
                ]
              )
                .map(
                  (testimonial, index) => `<div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">${testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">${testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  "${testimonial.text}"
                </p>
                <div className="flex text-yellow-400">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
              </div>`,
                )
                .join("\n              ")}
            </div>
          </div>
        </section>`
      case "quote-testimonials":
        return `<section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-5xl text-blue-600 mb-6" ${colorStyleText}>"</div>
              <p className="text-2xl mb-8">
                ${
                  textContent.quote ||
                  "Our website building experience has been transformed since we started using this component builder. It's saved us countless hours and helped us deliver better results for our clients."
                }
              </p>
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full mr-4"></div>
                <div className="text-left">
                  <h4 className="font-semibold">${textContent.author || "Jane Smith"}</h4>
                  <p className="text-gray-600 dark:text-gray-400">${textContent.position || "CEO, Design Agency"}</p>
                </div>
              </div>
            </div>
          </div>
        </section>`
      case "simple-pricing":
        return `<section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">${textContent.heading || "Simple, Transparent Pricing"}</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                ${textContent.subheading || "Choose the plan that's right for you and start building today."}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              ${(
                textContent.plans || [
                  {
                    name: "Basic",
                    price: "0",
                    features: ["Feature 1", "Feature 2"],
                    buttonText: "Get Started",
                  },
                  {
                    name: "Pro",
                    price: "49",
                    features: ["Feature 1", "Feature 2", "Feature 3"],
                    buttonText: "Subscribe",
                  },
                  {
                    name: "Enterprise",
                    price: "99",
                    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
                    buttonText: "Subscribe",
                  },
                ]
              )
                .map(
                  (plan, index) => `<div
                className={\`border \${index === 1 ? "border-blue-600" : "border-gray-200 dark:border-gray-800"} rounded-lg p-8\`}
                ${index === 1 ? colorStyleBorder : ""}
              >
                <h3 className="text-2xl font-bold mb-4">${plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">\$${plan.price}</span>
                  <span className="text-gray-600 dark:text-gray-400">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  ${plan.features
                    .map(
                      (feature) => `<li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span>
                    <span>${feature}</span>
                  </li>`,
                    )
                    .join("\n                  ")}
                </ul>
                <button
                  className={\`w-full py-2 rounded-md \${
                    index === 1 ? "bg-blue-600 text-white" : "border border-gray-300 dark:border-gray-700"
                  }\`}
                  ${index === 1 ? colorStyle : ""}
                >
                  ${plan.buttonText}
                </button>
              </div>`,
                )
                .join("\n              ")}
            </div>
          </div>
        </section>`
      case "tiered-pricing":
        return `<section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">${textContent.heading || "Choose Your Plan"}</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                ${
                  textContent.subheading ||
                  "We have plans for businesses of all sizes. Select the one that works best for you."
                }
              </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
              ${(
                textContent.plans || [
                  {
                    name: "Starter",
                    price: "29",
                    description: "Perfect for small businesses and freelancers",
                    features: ["Feature 1", "Feature 2", "Feature 3"],
                    buttonText: "Get Started",
                  },
                  {
                    name: "Professional",
                    price: "79",
                    description: "Ideal for growing businesses and agencies",
                    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
                    buttonText: "Get Started",
                  },
                  {
                    name: "Enterprise",
                    price: "149",
                    description: "For large organizations with advanced needs",
                    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
                    buttonText: "Get Started",
                  },
                ]
              )
                .map(
                  (plan, index) => `<div
                className={\`flex-1 bg-white dark:bg-gray-900 rounded-lg shadow-sm overflow-hidden \${
                  index === 1 ? "lg:-mt-4 lg:-mb-4 lg:border-2 lg:border-blue-600" : ""
                }\`}
                ${index === 1 ? colorStyleBorder : ""}
              >
                ${
                  index === 1
                    ? `<div className="bg-blue-600 text-white text-center py-2 text-sm font-medium" ${colorStyle}>Most Popular</div>`
                    : ""
                }
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">${plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">\$${plan.price}</span>
                    <span className="text-gray-600 dark:text-gray-400">/month</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    ${plan.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    ${plan.features
                      .map(
                        (feature) => `<li className="flex items-center">
                      <span className="mr-2 text-green-500">✓</span>
                      <span>${feature}</span>
                    </li>`,
                      )
                      .join("\n                    ")}
                  </ul>
                  <button
                    className={\`w-full py-3 rounded-md \${
                      index === 1 ? "bg-blue-600 text-white" : "border border-gray-300 dark:border-gray-700"
                    }\`}
                    ${index === 1 ? colorStyle : ""}
                  >
                    ${plan.buttonText}
                  </button>
                </div>
              </div>`,
                )
                .join("\n              ")}
            </div>
          </div>
        </section>`
      case "simple-cta":
        return `<section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">${textContent.heading || "Ready to Get Started?"}</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                ${
                  textContent.subheading ||
                  "Join thousands of users who are already building beautiful websites with our platform."
                }
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-6 py-3 rounded-md bg-blue-600 text-white font-medium" ${colorStyle}>${
                  textContent.buttonText?.[0] || "Start Building Now"
                }</button>
                <button className="px-6 py-3 rounded-md border border-gray-300 dark:border-gray-700 font-medium">
                  ${textContent.buttonText?.[1] || "Contact Sales"}
                </button>
              </div>
            </div>
          </div>
        </section>`
      case "boxed-cta":
        return `<section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 md:p-12" ${colorStyleBg}>
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <h2 className="text-3xl font-bold mb-4">${textContent.heading || "Take Your Website to the Next Level"}</h2>
                  <p className="text-xl text-gray-700 dark:text-gray-300">
                    ${
                      textContent.subheading ||
                      "Start building with our component library today and see the difference."
                    }
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <button className="px-6 py-3 rounded-md bg-blue-600 text-white font-medium" ${colorStyle}>${
                    textContent.buttonText || "Get Started"
                  }</button>
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
                <div className="font-bold text-xl">${textContent.companyName || "Company Name"}</div>
                <p className="text-gray-600 dark:text-gray-400 mt-1">${
                  textContent.copyright || `© ${new Date().getFullYear()} All rights reserved.`
                }</p>
              </div>
              <div className="flex space-x-6">
                ${(textContent.menuItems || ["Terms", "Privacy", "Contact"])
                  .map(
                    (item) =>
                      `<a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">${item}</a>`,
                  )
                  .join("\n                ")}
              </div>
            </div>
          </div>
        </footer>`
      case "multi-column-footer":
        return `<footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <div className="font-bold text-xl mb-4">${textContent.companyName || "Company Name"}</div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  ${
                    textContent.companyDescription ||
                    "Building the future of web development with component-based design."
                  }
                </p>
                <div className="flex space-x-4">
                  ${(textContent.socialLinks || ["FB", "TW", "IG", "LI"])
                    .map(
                      (link) =>
                        `<a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">${link}</a>`,
                    )
                    .join("\n                  ")}
                </div>
              </div>
              ${(
                textContent.columns || [
                  {
                    title: "Product",
                    links: ["Features", "Pricing", "Tutorials", "Releases"],
                  },
                  {
                    title: "Company",
                    links: ["About", "Careers", "Blog", "Contact"],
                  },
                  {
                    title: "Legal",
                    links: ["Terms", "Privacy", "Cookies", "Licenses"],
                  },
                ]
              )
                .map(
                  (column) => `<div>
                <h3 className="font-semibold text-lg mb-4">${column.title}</h3>
                <ul className="space-y-2">
                  ${column.links
                    .map(
                      (link) =>
                        `<li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">${link}</a></li>`,
                    )
                    .join("\n                  ")}
                </ul>
              </div>`,
                )
                .join("\n              ")}
            </div>
            <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 text-center text-gray-600 dark:text-gray-400">
              ${textContent.copyright || `© ${new Date().getFullYear()} Company Name. All rights reserved.`}
            </div>
          </div>
        </footer>`
      case "social-footer":
        return `<footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col items-center">
              <div className="font-bold text-2xl mb-4">${textContent.companyName || "Company Name"}</div>
              <div className="flex space-x-8 mb-8">
                ${(textContent.menuItems || ["Home", "Features", "Pricing", "About", "Contact"])
                  .map(
                    (item) =>
                      `<a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">${item}</a>`,
                  )
                  .join("\n                ")}
              </div>
              <div className="flex space-x-6 mb-8">
                ${(textContent.socialLinks || ["FB", "TW", "IG", "LI"])
                  .map(
                    (link) =>
                      `<a href="#" className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center">${link}</a>`,
                  )
                  .join("\n                ")}
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                ${textContent.copyright || `© ${new Date().getFullYear()} Company Name. All rights reserved.`}
                <br />
                ${textContent.address || "123 Street Name, City, Country"}
              </p>
            </div>
          </div>
        </footer>`
      default:
        // For components we haven't explicitly defined, return a placeholder
        return `<div className="${category}-component ${componentId}">
          {/* Component content would go here */}
          <p>This is the ${componentId} component</p>
        </div>`
    }
  }

  const getFullComponentCode = (category, componentId) => {
    // Get the custom text content for this component
    const textContent = customTextContent[`${category}-${componentId}`] || {}

    // This would return the full component definition with text customization
    switch (componentId) {
      case "simple-header":
        return `export function SimpleHeader() {
  const companyName = "${textContent.companyName || "Company Name"}"
  const menuItems = ${JSON.stringify(textContent.menuItems || ["Home", "Features", "Pricing", "About"])}
  const buttonText = "${textContent.buttonText || "Sign Up"}"
  
  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-bold text-xl">{companyName}</div>
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item, index) => (
            <a key={index} href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 rounded-md bg-blue-600 text-white">{buttonText}</button>
        </div>
      </div>
    </header>
  )
}`
      case "nav-header":
        return `export function NavHeader() {
  const companyName = "${textContent.companyName || "Company Name"}"
  const menuItems = ${JSON.stringify(textContent.menuItems || ["Home", "Products", "Features", "Pricing", "Contact"])}
  const buttonText = ${JSON.stringify(textContent.buttonText || ["Login", "Sign Up"])}
  
  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-md"></div>
            <div className="font-bold text-xl">{companyName}</div>
          </div>
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item, index) => (
              <a key={index} href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center space-x-3">
            <button className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700">{buttonText[0]}</button>
            <button className="px-4 py-2 rounded-md bg-blue-600 text-white">{buttonText[1]}</button>
          </div>
        </div>
      </div>
    </header>
  )
}`
      case "full-header":
        return `export function FullHeader() {
  const companyName = "${textContent.companyName || "Company Name"}"
  const contactInfo = "${textContent.contactInfo || "contact@example.com"}"
  const topMenuItems = ${JSON.stringify(textContent.topMenuItems || ["Support", "FAQ"])}
  const menuItems = ${JSON.stringify(
          textContent.menuItems || ["Home", "Products", "Services", "About", "Blog", "Contact"],
        )}
  const buttonText = ${JSON.stringify(textContent.buttonText || ["Login", "Get Started"])}
  
  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
          <div className="text-sm text-gray-600 dark:text-gray-400">Contact: {contactInfo}</div>
          <div className="flex space-x-4 text-sm">
            {topMenuItems.map((item, index) => (
              <a key={index} href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                {item}
              </a>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-full"></div>
            <div className="font-bold text-xl">{companyName}</div>
          </div>
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item, index) => (
              <a key={index} href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center space-x-3">
            <button className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700">{buttonText[0]}</button>
            <button className="px-4 py-2 rounded-md bg-blue-600 text-white">{buttonText[1]}</button>
          </div>
        </div>
      </div>
    </header>
  )
}`
      case "centered-hero":
        return `export function CenteredHero() {
  const heading = "${textContent.heading || "Build Beautiful Websites Faster"}"
  const subheading = "${textContent.subheading ||
          "Create stunning, responsive websites with our component library. Mix and match to build your perfect site."
          }"
  const buttonText = ${JSON.stringify(textContent.buttonText || ["Get Started", "Learn More"])}
  
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{heading}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
          {subheading}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 py-3 rounded-md bg-blue-600 text-white font-medium">{buttonText[0]}</button>
          <button className="px-6 py-3 rounded-md border border-gray-300 dark:border-gray-700 font-medium">
            {buttonText[1]}
          </button>
        </div>
      </div>
    </section>
  )
}`
      case "split-hero":
        return `export function SplitHero() {
  const heading = "${textContent.heading || "Design Your Website With Ease"}"
  const subheading = "${textContent.subheading ||
          "Our component builder makes it simple to create beautiful, responsive websites without writing code."
          }"
  const buttonText = ${JSON.stringify(textContent.buttonText || ["Start Building", "Watch Demo"])}
  
  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{heading}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              {subheading}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 rounded-md bg-blue-600 text-white font-medium">{buttonText[0]}</button>
              <button className="px-6 py-3 rounded-md border border-gray-300 dark:border-gray-700 font-medium">
                {buttonText[1]}
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
  const heading = "${textContent.heading || "Create Without Limits"}"
  const subheading = "${textContent.subheading ||
          "Our component library gives you the building blocks to create any website you can imagine."
          }"
  const buttonText = ${JSON.stringify(textContent.buttonText || ["Get Started", "View Components"])}
  
  return (
    <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gray-900/60 z-10"></div>
      <div className="absolute inset-0 bg-gray-300 dark:bg-gray-800 flex items-center justify-center">
        <span className="text-gray-500 dark:text-gray-400">Background Image</span>
      </div>
      <div className="container mx-auto px-4 relative z-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{heading}</h1>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          {subheading}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 py-3 rounded-md bg-white text-gray-900 font-medium">{buttonText[0]}</button>
          <button className="px-6 py-3 rounded-md border border-white font-medium">{buttonText[1]}</button>
        </div>
      </div>
    </section>
  )
}`
      case "grid-features":
        return `export function GridFeatures() {
  const heading = "${textContent.heading || "Powerful Features"}"
  const subheading = "${textContent.subheading || "Everything you need to build beautiful websites quickly and efficiently."
          }"
  const features = ${JSON.stringify(
            textContent.features || ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5", "Feature 6"],
          )}
  const featureDescriptions = ${JSON.stringify(
            textContent.featureDescriptions || [
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
            ],
          )}
  
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{heading}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {subheading}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-blue-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {featureDescriptions[index] || "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
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
  const heading = "${textContent.heading || "Why Choose Our Platform"}"
  const subheading = "${textContent.subheading || "We provide the tools you need to build websites faster and more efficiently."
          }"
  const features = ${JSON.stringify(textContent.features || ["Feature 1", "Feature 2", "Feature 3", "Feature 4"])}
  const featureDescriptions = ${JSON.stringify(
            textContent.featureDescriptions || [
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
            ],
          )}
  
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h2 className="text-3xl font-bold mb-4">{heading}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              {subheading}
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-4 mt-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature}</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {featureDescriptions[index] || "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
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
  const heading = "${textContent.heading || "Key Features"}"
  const subheading = "${textContent.subheading || "Our platform provides everything you need to build beautiful websites."
          }"
  const features = ${JSON.stringify(textContent.features || ["Feature 1", "Feature 2", "Feature 3", "Feature 4"])}
  const featureDescriptions = ${JSON.stringify(
            textContent.featureDescriptions || [
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
            ],
          )}
  
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{heading}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {subheading}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {featureDescriptions[index] || "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
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
  const heading = "${textContent.heading || "What Our Customers Say"}"
  const subheading = "${textContent.subheading || "Don't just take our word for it. See what our users have to say about our platform."
          }"
  const testimonials = ${JSON.stringify(
            textContent.testimonials || [
              {
                name: "Customer Name",
                company: "Company 1",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
              },
              {
                name: "Customer Name",
                company: "Company 2",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
              },
              {
                name: "Customer Name",
                company: "Company 3",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
              },
            ],
          )}
  
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{heading}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {subheading}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                "{testimonial.text}"
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
  const quote = "${textContent.quote ||
          "Our website building experience has been transformed since we started using this component builder. It's saved us countless hours and helped us deliver better results for our clients."
          }"
  const author = "${textContent.author || "Jane Smith"}"
  const position = "${textContent.position || "CEO, Design Agency"}"
  
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-5xl text-blue-600 mb-6">"</div>
          <p className="text-2xl mb-8">
            {quote}
          </p>
          <div className="flex items-center justify-center">
            <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full mr-4"></div>
            <div className="text-left">
              <h4 className="font-semibold">{author}</h4>
              <p className="text-gray-600 dark:text-gray-400">{position}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}`
      case "simple-pricing":
        return `export function SimplePricing() {
  const heading = "${textContent.heading || "Simple, Transparent Pricing"}"
  const subheading = "${textContent.subheading || "Choose the plan that's right for you and start building today."}"
  const plans = ${JSON.stringify(
          textContent.plans || [
            {
              name: "Basic",
              price: "0",
              features: ["Feature 1", "Feature 2"],
              buttonText: "Get Started",
            },
            {
              name: "Pro",
              price: "49",
              features: ["Feature 1", "Feature 2", "Feature 3"],
              buttonText: "Subscribe",
            },
            {
              name: "Enterprise",
              price: "99",
              features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
              buttonText: "Subscribe",
            },
          ],
        )}
  
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{heading}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {subheading}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={\`border \${index === 1 ? "border-blue-600" : "border-gray-200 dark:border-gray-800"} rounded-lg p-8\`}
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">\${plan.price}</span>
                <span className="text-gray-600 dark:text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={\`w-full py-2 rounded-md \${
                  index === 1 ? "bg-blue-600 text-white" : "border border-gray-300 dark:border-gray-700"
                }\`}
              >
                {plan.buttonText}
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
  const heading = "${textContent.heading || "Choose Your Plan"}"
  const subheading = "${textContent.subheading || "We have plans for businesses of all sizes. Select the one that works best for you."
          }"
  const plans = ${JSON.stringify(
            textContent.plans || [
              {
                name: "Starter",
                price: "29",
                description: "Perfect for small businesses and freelancers",
                features: ["Feature 1", "Feature 2", "Feature 3"],
                buttonText: "Get Started",
              },
              {
                name: "Professional",
                price: "79",
                description: "Ideal for growing businesses and agencies",
                features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
                buttonText: "Get Started",
              },
              {
                name: "Enterprise",
                price: "149",
                description: "For large organizations with advanced needs",
                features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
                buttonText: "Get Started",
              },
            ],
          )}
  
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{heading}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {subheading}
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={\`flex-1 bg-white dark:bg-gray-900 rounded-lg shadow-sm overflow-hidden \${
                index === 1 ? "lg:-mt-4 lg:-mb-4 lg:border-2 lg:border-blue-600" : ""
              }\`}
            >
              {index === 1 && (
                <div className="bg-blue-600 text-white text-center py-2 text-sm font-medium">Most Popular</div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">\${plan.price}</span>
                  <span className="text-gray-600 dark:text-gray-400">/month</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="mr-2 text-green-500">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={\`w-full py-3 rounded-md \${
                    index === 1 ? "bg-blue-600 text-white" : "border border-gray-300 dark:border-gray-700"
                  }\`}
                >
                  {plan.buttonText}
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
  const heading = "${textContent.heading || "Ready to Get Started?"}"
  const subheading = "${textContent.subheading || "Join thousands of users who are already building beautiful websites with our platform."
          }"
  const buttonText = ${JSON.stringify(textContent.buttonText || ["Start Building Now", "Contact Sales"])}
  
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">{heading}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            {subheading}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-6 py-3 rounded-md bg-blue-600 text-white font-medium">{buttonText[0]}</button>
            <button className="px-6 py-3 rounded-md border border-gray-300 dark:border-gray-700 font-medium">
              {buttonText[1]}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}`
      case "boxed-cta":
        return `export function BoxedCta() {
  const heading = "${textContent.heading || "Take Your Website to the Next Level"}"
  const subheading = "${textContent.subheading || "Start building with our component library today and see the difference."
          }"
  const buttonText = "${textContent.buttonText || "Get Started"}"
  
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-3xl font-bold mb-4">{heading}</h2>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                {subheading}
              </p>
            </div>
            <div className="flex-shrink-0">
              <button className="px-6 py-3 rounded-md bg-blue-600 text-white font-medium">{buttonText}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}`
      case "simple-footer":
        return `export function SimpleFooter() {
  const companyName = "${textContent.companyName || "Company Name"}"
  const menuItems = ${JSON.stringify(textContent.menuItems || ["Terms", "Privacy", "Contact"])}
  const copyright = "${textContent.copyright || `© ${new Date().getFullYear()} All rights reserved.`}"
  
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="font-bold text-xl">{companyName}</div>
            <p className="text-gray-600 dark:text-gray-400 mt-1">{copyright}</p>
          </div>
          <div className="flex space-x-6">
            {menuItems.map((item, index) => (
              <a key={index} href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}`
      case "multi-column-footer":
        return `export function MultiColumnFooter() {
  const companyName = "${textContent.companyName || "Company Name"}"
  const companyDescription = "${textContent.companyDescription || "Building the future of web development with component-based design."
          }"
  const socialLinks = ${JSON.stringify(textContent.socialLinks || ["FB", "TW", "IG", "LI"])}
  const columns = ${JSON.stringify(
            textContent.columns || [
              {
                title: "Product",
                links: ["Features", "Pricing", "Tutorials", "Releases"],
              },
              {
                title: "Company",
                links: ["About", "Careers", "Blog", "Contact"],
              },
              {
                title: "Legal",
                links: ["Terms", "Privacy", "Cookies", "Licenses"],
              },
            ],
          )}
  const copyright = "${textContent.copyright || `© ${new Date().getFullYear()} Company Name. All rights reserved.`}"
  
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="font-bold text-xl mb-4">{companyName}</div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {companyDescription}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a key={index} href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  {link}
                </a>
              ))}
            </div>
          </div>
          {columns.map((column, index) => (
            <div key={index}>
              <h3 className="font-semibold text-lg mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 text-center text-gray-600 dark:text-gray-400">
          {copyright}
        </div>
      </div>
    </footer>
  )
}`
      case "social-footer":
        return `export function SocialFooter() {
  const companyName = "${textContent.companyName || "Company Name"}"
  const menuItems = ${JSON.stringify(textContent.menuItems || ["Home", "Features", "Pricing", "About", "Contact"])}
  const socialLinks = ${JSON.stringify(textContent.socialLinks || ["FB", "TW", "IG", "LI"])}
  const copyright = "${textContent.copyright || `© ${new Date().getFullYear()} Company Name. All rights reserved.`}"
  const address = "${textContent.address || "123 Street Name, City, Country"}"
  
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center">
          <div className="font-bold text-2xl mb-4">{companyName}</div>
          <div className="flex space-x-8 mb-8">
            {menuItems.map((item, index) => (
              <a key={index} href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                {item}
              </a>
            ))}
          </div>
          <div className="flex space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center"
              >
                {link}
              </a>
            ))}
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-center">
            {copyright}
            <br />
            {address}
          </p>
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

    // Convert React components to HTML with custom text
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
    // Ambil data teks custom untuk komponen ini
    const textContent = customTextContent[`${category}-${componentId}`] || {}
  
    switch (componentId) {
      case "simple-header":
        return `<header class="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div class="container mx-auto px-4 py-4 flex justify-between items-center">
            <div class="font-bold text-xl">${textContent.companyName || "Company Name"}</div>
            <nav class="hidden md:flex space-x-6">
              ${(textContent.menuItems || ["Home", "Features", "Pricing", "About"])
                .map(item => `<a href="#" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">${item}</a>`)
                .join("\n")}
            </nav>
            <div class="flex items-center space-x-3">
              <button class="px-4 py-2 rounded-md bg-blue-600 text-white">${textContent.buttonText || "Sign Up"}</button>
            </div>
          </div>
        </header>`
  
      case "nav-header":
        return `<header class="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div class="container mx-auto px-4 py-4">
            <div class="flex justify-between items-center">
              <div class="flex items-center space-x-2">
                <div class="w-8 h-8 bg-blue-600 rounded-md"></div>
                <div class="font-bold text-xl">${textContent.companyName || "Company Name"}</div>
              </div>
              <nav class="hidden md:flex space-x-8">
                ${(textContent.menuItems || ["Home", "Products", "Features", "Pricing", "Contact"])
                  .map(item => `<a href="#" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">${item}</a>`)
                  .join("\n")}
              </nav>
              <div class="flex items-center space-x-3">
                <button class="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700">${textContent.buttonText?.[0] || "Login"}</button>
                <button class="px-4 py-2 rounded-md bg-blue-600 text-white">${textContent.buttonText?.[1] || "Sign Up"}</button>
              </div>
            </div>
          </div>
        </header>`
  
      case "full-header":
        return `<header class="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div class="container mx-auto px-4">
            <div class="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
              <div class="text-sm text-gray-600 dark:text-gray-400">Contact: ${textContent.contactInfo || "contact@example.com"}</div>
              <div class="flex space-x-4 text-sm">
                ${(textContent.topMenuItems || ["Support", "FAQ"])
                  .map(item => `<a href="#" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">${item}</a>`)
                  .join("\n")}
              </div>
            </div>
            <div class="flex justify-between items-center py-4">
              <div class="flex items-center space-x-2">
                <div class="w-10 h-10 bg-blue-600 rounded-full"></div>
                <div class="font-bold text-xl">${textContent.companyName || "Company Name"}</div>
              </div>
              <nav class="hidden md:flex space-x-8">
                ${(textContent.menuItems || ["Home", "Products", "Services", "About", "Blog", "Contact"])
                  .map(item => `<a href="#" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">${item}</a>`)
                  .join("\n")}
              </nav>
              <div class="flex items-center space-x-3">
                <button class="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700">${textContent.buttonText?.[0] || "Login"}</button>
                <button class="px-4 py-2 rounded-md bg-blue-600 text-white">${textContent.buttonText?.[1] || "Get Started"}</button>
              </div>
            </div>
          </div>
        </header>`
  
      case "centered-hero":
        return `<section class="py-20 bg-white dark:bg-gray-900">
          <div class="container mx-auto px-4 text-center">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">${textContent.heading || "Build Beautiful Websites Faster"}</h1>
            <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">${textContent.subheading || "Create stunning, responsive websites with our component library. Mix and match to build your perfect site."}</p>
            <div class="flex flex-col sm:flex-row justify-center gap-4">
              <button class="px-6 py-3 rounded-md bg-blue-600 text-white font-medium">${textContent.buttonText?.[0] || "Get Started"}</button>
              <button class="px-6 py-3 rounded-md border border-gray-300 dark:border-gray-700 font-medium">${textContent.buttonText?.[1] || "Learn More"}</button>
            </div>
          </div>
        </section>`
  
      case "split-hero":
        return `<section class="py-12 bg-white dark:bg-gray-900">
          <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row items-center">
              <div class="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                <h1 class="text-4xl md:text-5xl font-bold mb-6">${textContent.heading || "Design Your Website With Ease"}</h1>
                <p class="text-xl text-gray-600 dark:text-gray-400 mb-8">${textContent.subheading || "Our component builder makes it simple to create beautiful, responsive websites without writing code."}</p>
                <div class="flex flex-col sm:flex-row gap-4">
                  <button class="px-6 py-3 rounded-md bg-blue-600 text-white font-medium">${textContent.buttonText?.[0] || "Start Building"}</button>
                  <button class="px-6 py-3 rounded-md border border-gray-300 dark:border-gray-700 font-medium">${textContent.buttonText?.[1] || "Watch Demo"}</button>
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
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">${textContent.heading || "Create Without Limits"}</h1>
            <p class="text-xl max-w-3xl mx-auto mb-8">${textContent.subheading || "Our component library gives you the building blocks to create any website you can imagine."}</p>
            <div class="flex flex-col sm:flex-row justify-center gap-4">
              <button class="px-6 py-3 rounded-md bg-white text-gray-900 font-medium">${textContent.buttonText?.[0] || "Get Started"}</button>
              <button class="px-6 py-3 rounded-md border border-white font-medium">${textContent.buttonText?.[1] || "View Components"}</button>
            </div>
          </div>
        </section>`
  
      case "grid-features":
        return `<section class="py-16 bg-white dark:bg-gray-900">
          <div class="container mx-auto px-4">
            <div class="text-center mb-12">
              <h2 class="text-3xl font-bold mb-4">${textContent.heading || "Powerful Features"}</h2>
              <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">${textContent.subheading || "Everything you need to build beautiful websites quickly and efficiently."}</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              ${(textContent.features || ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5", "Feature 6"])
                .map((feature, index) => `<div class="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
                  <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <div class="w-6 h-6 bg-blue-600 rounded"></div>
                  </div>
                  <h3 class="text-xl font-semibold mb-2">${feature}</h3>
                  <p class="text-gray-600 dark:text-gray-400">${textContent.featureDescriptions?.[index] || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."}</p>
                </div>`)
                .join("\n")}
            </div>
          </div>
        </section>`
  
      case "list-features":
        return `<section class="py-16 bg-white dark:bg-gray-900">
          <div class="container mx-auto px-4">
            <div class="flex flex-col lg:flex-row items-center">
              <div class="lg:w-1/2 mb-10 lg:mb-0">
                <h2 class="text-3xl font-bold mb-4">${textContent.heading || "Why Choose Our Platform"}</h2>
                <p class="text-xl text-gray-600 dark:text-gray-400 mb-8">${textContent.subheading || "We provide the tools you need to build websites faster and more efficiently."}</p>
                <ul class="space-y-4">
                  ${(textContent.features || ["Feature 1", "Feature 2", "Feature 3", "Feature 4"])
                    .map((feature, index) => `<li class="flex items-start">
                      <div class="mr-4 mt-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white">✓</div>
                      <div>
                        <h3 class="font-semibold mb-1">${feature}</h3>
                        <p class="text-gray-600 dark:text-gray-400">${textContent.featureDescriptions?.[index] || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor."}</p>
                      </div>
                    </li>`)
                    .join("\n")}
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
              <h2 class="text-3xl font-bold mb-4">${textContent.heading || "Key Features"}</h2>
              <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">${textContent.subheading || "Our platform provides everything you need to build beautiful websites."}</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              ${(textContent.features || ["Feature 1", "Feature 2", "Feature 3", "Feature 4"])
                .map((feature, index) => `<div class="text-center">
                  <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div class="w-8 h-8 bg-blue-600 rounded-full"></div>
                  </div>
                  <h3 class="text-xl font-semibold mb-2">${feature}</h3>
                  <p class="text-gray-600 dark:text-gray-400">${textContent.featureDescriptions?.[index] || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor."}</p>
                </div>`)
                .join("\n")}
            </div>
          </div>
        </section>`
  
      case "card-testimonials":
        return `<section class="py-16 bg-gray-50 dark:bg-gray-800">
          <div class="container mx-auto px-4">
            <div class="text-center mb-12">
              <h2 class="text-3xl font-bold mb-4">${textContent.heading || "What Our Customers Say"}</h2>
              <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">${textContent.subheading || "Don't just take our word for it. See what our users have to say about our platform."}</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              ${(textContent.testimonials || [
                {
                  name: "Customer Name",
                  company: "Company 1",
                  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
                },
                {
                  name: "Customer Name",
                  company: "Company 2",
                  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
                },
                {
                  name: "Customer Name",
                  company: "Company 3",
                  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
                },
              ])
                .map(testimonial => `<div class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
                  <div class="flex items-center mb-4">
                    <div class="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full mr-4"></div>
                    <div>
                      <h4 class="font-semibold">${testimonial.name}</h4>
                      <p class="text-sm text-gray-600 dark:text-gray-400">${testimonial.company}</p>
                    </div>
                  </div>
                  <p class="text-gray-600 dark:text-gray-400 mb-4">"${testimonial.text}"</p>
                  <div class="flex text-yellow-400">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                </div>`)
                .join("\n")}
            </div>
          </div>
        </section>`
  
      case "quote-testimonials":
        return `<section class="py-16 bg-white dark:bg-gray-900">
          <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto text-center">
              <div class="text-5xl text-blue-600 mb-6">"</div>
              <p class="text-2xl mb-8">${textContent.quote || "Our website building experience has been transformed since we started using this component builder. It's saved us countless hours and helped us deliver better results for our clients."}</p>
              <div class="flex items-center justify-center">
                <div class="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full mr-4"></div>
                <div class="text-left">
                  <h4 class="font-semibold">${textContent.author || "Jane Smith"}</h4>
                  <p class="text-gray-600 dark:text-gray-400">${textContent.position || "CEO, Design Agency"}</p>
                </div>
              </div>
            </div>
          </div>
        </section>`
  
      case "simple-pricing":
        return `<section class="py-16 bg-white dark:bg-gray-900">
          <div class="container mx-auto px-4">
            <div class="text-center mb-12">
              <h2 class="text-3xl font-bold mb-4">${textContent.heading || "Simple, Transparent Pricing"}</h2>
              <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">${textContent.subheading || "Choose the plan that's right for you and start building today."}</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              ${(textContent.plans || [
                {
                  name: "Basic",
                  price: "0",
                  features: ["Feature 1", "Feature 2"],
                  buttonText: "Get Started",
                },
                {
                  name: "Pro",
                  price: "49",
                  features: ["Feature 1", "Feature 2", "Feature 3"],
                  buttonText: "Subscribe",
                },
                {
                  name: "Enterprise",
                  price: "99",
                  features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
                  buttonText: "Subscribe",
                },
              ])
                .map(plan => `<div class="border ${plan.name === "Pro" ? "border-blue-600" : "border-gray-200 dark:border-gray-800"} rounded-lg p-8">
                  <h3 class="text-2xl font-bold mb-4">${plan.name}</h3>
                  <div class="mb-4">
                    <span class="text-4xl font-bold">$${plan.price}</span>
                    <span class="text-gray-600 dark:text-gray-400">/month</span>
                  </div>
                  <ul class="space-y-3 mb-8">
                    ${plan.features.map(feature => `<li class="flex items-center"><span class="mr-2 text-green-500">✓</span><span>${feature}</span></li>`).join("\n")}
                  </ul>
                  <button class="w-full py-2 rounded-md ${plan.name === "Pro" ? "bg-blue-600 text-white" : "border border-gray-300 dark:border-gray-700"}">${plan.buttonText}</button>
                </div>`).join("\n")}
            </div>
          </div>
        </section>`
  
      case "tiered-pricing":
        return `<section class="py-16 bg-gray-50 dark:bg-gray-800">
          <div class="container mx-auto px-4">
            <div class="text-center mb-12">
              <h2 class="text-3xl font-bold mb-4">${textContent.heading || "Choose Your Plan"}</h2>
              <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">${textContent.subheading || "We have plans for businesses of all sizes. Select the one that works best for you."}</p>
            </div>
            <div class="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
              ${(textContent.plans || [
                {
                  name: "Starter",
                  price: "29",
                  description: "Perfect for small businesses and freelancers",
                  features: ["Feature 1", "Feature 2", "Feature 3"],
                  buttonText: "Get Started",
                },
                {
                  name: "Professional",
                  price: "79",
                  description: "Ideal for growing businesses and agencies",
                  features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
                  buttonText: "Get Started",
                },
                {
                  name: "Enterprise",
                  price: "149",
                  description: "For large organizations with advanced needs",
                  features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
                  buttonText: "Get Started",
                },
              ])
                .map((plan, index) => `<div class="flex-1 bg-white dark:bg-gray-900 rounded-lg shadow-sm overflow-hidden ${index === 1 ? "lg:-mt-4 lg:-mb-4 lg:border-2 lg:border-blue-600" : ""}">
                  ${index === 1 ? '<div class="bg-blue-600 text-white text-center py-2 text-sm font-medium">Most Popular</div>' : ""}
                  <div class="p-8">
                    <h3 class="text-2xl font-bold mb-2">${plan.name}</h3>
                    <div class="mb-4">
                      <span class="text-4xl font-bold">$${plan.price}</span>
                      <span class="text-gray-600 dark:text-gray-400">/month</span>
                    </div>
                    <p class="text-gray-600 dark:text-gray-400 mb-6">${plan.description}</p>
                    <ul class="space-y-3 mb-8">
                      ${plan.features.map(feature => `<li class="flex items-center"><span class="mr-2 text-green-500">✓</span><span>${feature}</span></li>`).join("\n")}
                    </ul>
                    <button class="w-full py-3 rounded-md ${index === 1 ? "bg-blue-600 text-white" : "border border-gray-300 dark:border-gray-700"}">${plan.buttonText}</button>
                  </div>
                </div>`).join("\n")}
            </div>
          </div>
        </section>`
  
      case "simple-cta":
        return `<section class="py-16 bg-white dark:bg-gray-900">
          <div class="container mx-auto px-4">
            <div class="text-center max-w-3xl mx-auto">
              <h2 class="text-3xl font-bold mb-4">${textContent.heading || "Ready to Get Started?"}</h2>
              <p class="text-xl text-gray-600 dark:text-gray-400 mb-8">${textContent.subheading || "Join thousands of users who are already building beautiful websites with our platform."}</p>
              <div class="flex flex-col sm:flex-row justify-center gap-4">
                <button class="px-6 py-3 rounded-md bg-blue-600 text-white font-medium">${textContent.buttonText?.[0] || "Start Building Now"}</button>
                <button class="px-6 py-3 rounded-md border border-gray-300 dark:border-gray-700 font-medium">${textContent.buttonText?.[1] || "Contact Sales"}</button>
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
                  <h2 class="text-3xl font-bold mb-4">${textContent.heading || "Take Your Website to the Next Level"}</h2>
                  <p class="text-xl text-gray-700 dark:text-gray-300">${textContent.subheading || "Start building with our component library today and see the difference."}</p>
                </div>
                <div class="flex-shrink-0">
                  <button class="px-6 py-3 rounded-md bg-blue-600 text-white font-medium">${textContent.buttonText || "Get Started"}</button>
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
                <div class="font-bold text-xl">${textContent.companyName || "Company Name"}</div>
                <p class="text-gray-600 dark:text-gray-400 mt-1">${textContent.copyright || `© ${new Date().getFullYear()} All rights reserved.`}</p>
              </div>
              <div class="flex space-x-6">
                ${(textContent.menuItems || ["Terms", "Privacy", "Contact"])
                  .map(item => `<a href="#" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">${item}</a>`)
                  .join("\n")}
              </div>
            </div>
          </div>
        </footer>`
  
      case "multi-column-footer":
        return `<footer class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div class="container mx-auto px-4 py-12">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <div class="font-bold text-xl mb-4">${textContent.companyName || "Company Name"}</div>
                <p class="text-gray-600 dark:text-gray-400 mb-4">${textContent.companyDescription || "Building the future of web development with component-based design."}</p>
                <div class="flex space-x-4">
                  ${(textContent.socialLinks || ["FB", "TW", "IG", "LI"])
                    .map(link => `<a href="#" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">${link}</a>`)
                    .join("\n")}
                </div>
              </div>
              ${(textContent.columns || [
                { title: "Product", links: ["Features", "Pricing", "Tutorials", "Releases"] },
                { title: "Company", links: ["About", "Careers", "Blog", "Contact"] },
                { title: "Legal", links: ["Terms", "Privacy", "Cookies", "Licenses"] },
              ])
                .map(column => `<div>
                  <h3 class="font-semibold text-lg mb-4">${column.title}</h3>
                  <ul class="space-y-2">
                    ${column.links
                      .map(link => `<li><a href="#" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">${link}</a></li>`)
                      .join("\n")}
                  </ul>
                </div>`)
                .join("\n")}
            </div>
            <div class="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 text-center text-gray-600 dark:text-gray-400">${textContent.copyright || `© ${new Date().getFullYear()} Company Name. All rights reserved.`}</div>
          </div>
        </footer>`
  
      case "social-footer":
        return `<footer class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div class="container mx-auto px-4 py-12">
            <div class="flex flex-col items-center">
              <div class="font-bold text-2xl mb-4">${textContent.companyName || "Company Name"}</div>
              <div class="flex space-x-8 mb-8">
                ${(textContent.menuItems || ["Home", "Features", "Pricing", "About", "Contact"])
                  .map(item => `<a href="#" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">${item}</a>`)
                  .join("\n")}
              </div>
              <div class="flex space-x-6 mb-8">
                ${(textContent.socialLinks || ["FB", "TW", "IG", "LI"])
                  .map(link => `<a href="#" class="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center">${link}</a>`)
                  .join("\n")}
              </div>
              <p class="text-gray-600 dark:text-gray-400 text-center">${textContent.copyright || `© ${new Date().getFullYear()} Company Name. All rights reserved.`}<br />${textContent.address || "123 Street Name, City, Country"}</p>
            </div>
          </div>
        </footer>`
  
      default:
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
