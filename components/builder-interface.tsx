"use client"

import { useState, useEffect } from "react"
import { Button } from "@nextui-org/react"
import { ComponentSelector } from "@/components/component-selector"
import { PreviewArea } from "@/components/preview-area"
import { ComponentLibrary } from "@/lib/component-library"
import { NavbarComponent } from "@/components/ui-components/navbar"
import { CodeExportModal } from "@/components/code-export-modal"
import { TextCustomizationPanel } from "@/components/text-customization-panel"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

const defaultTextContent = {
  "simple-header": {
    companyName: "Company Name",
    menuItems: ["Home", "Features", "Pricing", "About"],
    buttonText: "Sign Up",
  },
  "nav-header": {
    companyName: "Company Name",
    menuItems: ["Home", "Products", "Features", "Pricing", "Contact"],
    buttonText: ["Login", "Sign Up"],
  },
  "full-header": {
    companyName: "Company Name",
    contactInfo: "contact@example.com",
    topMenuItems: ["Support", "FAQ"],
    menuItems: ["Home", "Products", "Services", "About", "Blog", "Contact"],
    buttonText: ["Login", "Get Started"],
  },
  "centered-hero": {
    heading: "Build Beautiful Websites Faster",
    subheading:
      "Create stunning, responsive websites with our component library. Mix and match to build your perfect site.",
    buttonText: ["Get Started", "Learn More"],
  },
  "split-hero": {
    heading: "Design Your Website With Ease",
    subheading: "Our component builder makes it simple to create beautiful, responsive websites without writing code.",
    buttonText: ["Start Building", "Watch Demo"],
  },
  "image-hero": {
    heading: "Create Without Limits",
    subheading: "Our component library gives you the building blocks to create any website you can imagine.",
    buttonText: ["Get Started", "View Components"],
  },
  "grid-features": {
    heading: "Powerful Features",
    subheading: "Everything you need to build beautiful websites quickly and efficiently.",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5", "Feature 6"],
    featureDescriptions: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    ],
  },
  "list-features": {
    heading: "Why Choose Our Platform",
    subheading: "We provide the tools you need to build websites faster and more efficiently.",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    featureDescriptions: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
    ],
  },
  "icon-features": {
    heading: "Key Features",
    subheading: "Our platform provides everything you need to build beautiful websites.",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    featureDescriptions: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
    ],
  },
  "card-testimonials": {
    heading: "What Our Customers Say",
    subheading: "Don't just take our word for it. See what our users have to say about our platform.",
    testimonials: [
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
  },
  "quote-testimonials": {
    quote:
      "Our website building experience has been transformed since we started using this component builder. It's saved us countless hours and helped us deliver better results for our clients.",
    author: "Jane Smith",
    position: "CEO, Design Agency",
  },
  "simple-pricing": {
    heading: "Simple, Transparent Pricing",
    subheading: "Choose the plan that's right for you and start building today.",
    plans: [
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
  },
  "tiered-pricing": {
    heading: "Choose Your Plan",
    subheading: "We have plans for businesses of all sizes. Select the one that works best for you.",
    plans: [
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
  },
  "simple-cta": {
    heading: "Ready to Get Started?",
    subheading: "Join thousands of users who are already building beautiful websites with our platform.",
    buttonText: ["Start Building Now", "Contact Sales"],
  },
  "boxed-cta": {
    heading: "Take Your Website to the Next Level",
    subheading: "Start building with our component library today and see the difference.",
    buttonText: "Get Started",
  },
  "simple-footer": {
    companyName: "Company Name",
    menuItems: ["Terms", "Privacy", "Contact"],
    copyright: `© ${new Date().getFullYear()} All rights reserved.`,
  },
  "multi-column-footer": {
    companyName: "Company Name",
    companyDescription: "Building the future of web development with component-based design.",
    socialLinks: ["FB", "TW", "IG", "LI"],
    columns: [
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
    copyright: `© ${new Date().getFullYear()} Company Name. All rights reserved.`,
  },
  "social-footer": {
    companyName: "Company Name",
    menuItems: ["Home", "Features", "Pricing", "About", "Contact"],
    socialLinks: ["FB", "TW", "IG", "LI"],
    copyright: `© ${new Date().getFullYear()} Company Name. All rights reserved.`,
    address: "123 Street Name, City, Country",
  },
}

export function BuilderInterface() {
  const [activeCategory, setActiveCategory] = useState("header")
  const [selectedComponents, setSelectedComponents] = useState<{
    header: string | null
    hero: string | null
    features: string | null
    testimonials: string | null
    pricing: string | null
    cta: string | null
    footer: string | null
  }>({
    header: null,
    hero: null,
    features: null,
    testimonials: null,
    pricing: null,
    cta: null,
    footer: null,
  })
  const [componentColors, setComponentColors] = useState<Record<string, string>>({})
  const [isExportModalOpen, setIsExportModalOpen] = useState(false)
  const [customTextContent, setCustomTextContent] = useState<Record<string, any>>({})
  const [activeEditComponent, setActiveEditComponent] = useState<{ category: string; componentId: string } | null>(null)

  const handleComponentSelect = (category: string, componentId: string) => {
    if (ComponentLibrary[category] && ComponentLibrary[category][componentId]) {
      setSelectedComponents((prev) => ({
        ...prev,
        [category]: componentId,
      }))

      if (!customTextContent[`${category}-${componentId}`]) {
        setCustomTextContent((prev) => ({
          ...prev,
          [`${category}-${componentId}`]: defaultTextContent[componentId] || {},
        }))
      }
    } else {
      console.error(`Component not found: ${category}/${componentId}`)
    }
  }

  const handleRemoveComponent = (category: string) => {
    setSelectedComponents((prev) => ({
      ...prev,
      [category]: null,
    }))

    setComponentColors((prev) => {
      const newColors = { ...prev }
      delete newColors[category]
      return newColors
    })

    if (activeEditComponent && activeEditComponent.category === category) {
      setActiveEditComponent(null)
    }
  }

  const handleDropComponent = (item: { type: string; id: string }) => {
    if (ComponentLibrary[item.type] && ComponentLibrary[item.type][item.id]) {
      setSelectedComponents((prev) => ({
        ...prev,
        [item.type]: item.id,
      }))
      if (!customTextContent[`${item.type}-${item.id}`]) {
        setCustomTextContent((prev) => ({
          ...prev,
          [`${item.type}-${item.id}`]: defaultTextContent[item.id] || {},
        }))
      }
    } else {
      console.error(`Component not found: ${item.type}/${item.id}`)
    }
  }

  const handleColorChange = (category: string, color: string) => {
    setComponentColors((prev) => ({
      ...prev,
      [category]: color,
    }))
  }

  const handleTextChange = (key: string, value: any) => {
    if (!activeEditComponent) return

    const componentKey = `${activeEditComponent.category}-${activeEditComponent.componentId}`

    if (key.includes(".") || key.includes("[")) {
      const newTextContent = { ...customTextContent[componentKey] }

      const parts = key.split(".")
      let current = newTextContent

      for (let i = 0; i < parts.length - 1; i++) {
        const part = parts[i]
        if (part.includes("[")) {
          const arrayName = part.split("[")[0]
          const index = Number.parseInt(part.split("[")[1].replace("]", ""))

          if (!current[arrayName]) current[arrayName] = []
          if (!current[arrayName][index]) {
            if (i < parts.length - 2) {
              current[arrayName][index] = {}
            }
          }

          current = current[arrayName][index]
        } else {
          if (!current[part]) {
            current[part] = {}
          }
          current = current[part]
        }
      }

      const lastPart = parts[parts.length - 1]
      if (lastPart.includes("[")) {
        const arrayName = lastPart.split("[")[0]
        const index = Number.parseInt(lastPart.split("[")[1].replace("]", ""))

        if (!current[arrayName]) current[arrayName] = []
        current[arrayName][index] = value
      } else {
        current[lastPart] = value
      }

      setCustomTextContent((prev) => ({
        ...prev,
        [componentKey]: newTextContent,
      }))
    } else {
      setCustomTextContent((prev) => ({
        ...prev,
        [componentKey]: {
          ...prev[componentKey],
          [key]: value,
        },
      }))
    }
  }

  const handleEditComponent = (category: string, componentId: string) => {
    setActiveEditComponent({ category, componentId })
  }

  const initializeDefaultColors = () => {
    const defaultColors = {
      header: "#3b82f6", // blue
      hero: "#3b82f6",
      features: "#3b82f6",
      testimonials: "#3b82f6",
      pricing: "#3b82f6",
      cta: "#3b82f6",
      footer: "#3b82f6",
    }

    setComponentColors(defaultColors)
  }

  useEffect(() => {
    initializeDefaultColors()
  }, [])

  const categories = Object.keys(ComponentLibrary)

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col h-screen">
        <NavbarComponent onExport={() => setIsExportModalOpen(true)} />
        <div className="flex flex-1 overflow-hidden">
          <div className="w-1/3 border-r border-gray-200 dark:border-gray-800 p-4 overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">Component Library</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  color={activeCategory === category ? "primary" : "default"}
                  variant={activeCategory === category ? "solid" : "light"}
                  onPress={() => setActiveCategory(category)}
                  size="sm"
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Button>
              ))}
            </div>

            {activeEditComponent && (
              <TextCustomizationPanel
                componentType={activeEditComponent.componentId}
                textContent={
                  customTextContent[`${activeEditComponent.category}-${activeEditComponent.componentId}`] || {}
                }
                onTextChange={handleTextChange}
              />
            )}

            <div className="mt-4">
              {ComponentLibrary[activeCategory] ? (
                <ComponentSelector
                  category={activeCategory}
                  components={ComponentLibrary[activeCategory]}
                  onSelect={handleComponentSelect}
                  selectedComponent={selectedComponents[activeCategory]}
                />
              ) : (
                <div className="p-4 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 rounded-md">
                  No components available for this category.
                </div>
              )}
            </div>
          </div>
          <div className="w-2/3 p-4 overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">Preview</h2>
            <PreviewArea
              selectedComponents={selectedComponents}
              componentColors={componentColors}
              customTextContent={customTextContent}
              onExport={() => setIsExportModalOpen(true)}
              onRemoveComponent={handleRemoveComponent}
              onDropComponent={handleDropComponent}
              onColorChange={handleColorChange}
              onEditComponent={handleEditComponent}
            />
          </div>
        </div>

        <CodeExportModal
          isOpen={isExportModalOpen}
          onClose={() => setIsExportModalOpen(false)}
          selectedComponents={selectedComponents}
          customTextContent={customTextContent}
        />
      </div>
    </DndProvider>
  )
}
