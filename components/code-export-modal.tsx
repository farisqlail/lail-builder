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
  customTextContent: Record<string, any>
}

export function CodeExportModal({ isOpen, onClose, selectedComponents, customTextContent }: CodeExportModalProps) {
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState("nextjs")

  const generateNextJSCode = () => {
    let code = `"use client"

import React from 'react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
`

    Object.entries(selectedComponents).forEach(([category, componentId]) => {
      if (!componentId) return

      const componentCode = getComponentSourceCode(category, componentId)

      code += `      {/* ${category.charAt(0).toUpperCase() + category.slice(1)}: ${componentId} */}\n`
      code += `      ${componentCode}\n\n`
    })

    code += `    </div>
  )
}

`

    Object.entries(selectedComponents).forEach(([category, componentId]) => {
      if (!componentId) return
      const fullComponentCode = getFullComponentCode(category, componentId)

      code += `\n// ${category.charAt(0).toUpperCase() + category.slice(1)} Component: ${componentId}\n`
      code += fullComponentCode
      code += "\n\n"
    })

    return code
  }

  const getComponentSourceCode = (category, componentId) => {
    const textContent = customTextContent[`${category}-${componentId}`] || {}

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
              <button className="px-4 py-2 rounded-md bg-blue-600 text-white">${textContent.buttonText || "Sign Up"}</button>
            </div>
          </div>
        </header>`
      case "centered-hero":
        return `<section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">${textContent.heading || "Build Beautiful Websites Faster"}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              ${textContent.subheading || "Create stunning, responsive websites with our component library. Mix and match to build your perfect site."}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-6 py-3 rounded-md bg-blue-600 text-white font-medium">${textContent.buttonText?.[0] || "Get Started"}</button>
              <button className="px-6 py-3 rounded-md border border-gray-300 dark:border-gray-700 font-medium">
                ${textContent.buttonText?.[1] || "Learn More"}
              </button>
            </div>
          </div>
        </section>`
      default:
        return `<div className="${category}-component ${componentId}">
          {/* Component content would go here */}
          <p>This is the ${componentId} component</p>
        </div>`
    }
  }

  const getFullComponentCode = (category, componentId) => {
    switch (componentId) {
      case "simple-header":
        return `export function SimpleHeader() {
    const companyName = "${customTextContent[`${category}-${componentId}`]?.companyName || "Company Name"}"
    const menuItems = ${JSON.stringify(customTextContent[`${category}-${componentId}`]?.menuItems || ["Home", "Features", "Pricing", "About"])}
    const buttonText = "${customTextContent[`${category}-${componentId}`]?.buttonText || "Sign Up"}"
    
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
      case "centered-hero":
        return `export function CenteredHero() {
    const heading = "${customTextContent[`${category}-${componentId}`]?.heading || "Build Beautiful Websites Faster"}"
    const subheading = "${customTextContent[`${category}-${componentId}`]?.subheading || "Create stunning, responsive websites with our component library. Mix and match to build your perfect site."}"
    const buttonText = ${JSON.stringify(customTextContent[`${category}-${componentId}`]?.buttonText || ["Get Started", "Learn More"])}
    
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

      default:
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
    const textContent = customTextContent[`${category}-${componentId}`] || {}
    switch (componentId) {
      case "simple-header":
        return `<header class="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <div class="font-bold text-xl">${textContent.companyName || "Company Name"}</div>
        <nav class="hidden md:flex space-x-6">
          ${(textContent.menuItems || ["Home", "Features", "Pricing", "About"])
            .map(
              (item) =>
                `<a href="#" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">${item}</a>`,
            )
            .join("\n          ")}
        </nav>
        <div class="flex items-center space-x-3">
          <button class="px-4 py-2 rounded-md bg-blue-600 text-white">${textContent.buttonText || "Sign Up"}</button>
        </div>
      </div>
    </header>`
      case "centered-hero":
        return `<section class="py-20 bg-white dark:bg-gray-900">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">${textContent.heading || "Build Beautiful Websites Faster"}</h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
          ${textContent.subheading || "Create stunning, responsive websites with our component library. Mix and match to build your perfect site."}
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <button class="px-6 py-3 rounded-md bg-blue-600 text-white font-medium">${textContent.buttonText?.[0] || "Get Started"}</button>
          <button class="px-6 py-3 rounded-md border border-gray-300 dark:border-gray-700 font-medium">${textContent.buttonText?.[1] || "Learn More"}</button>
        </div>
      </div>
    </section>`
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
