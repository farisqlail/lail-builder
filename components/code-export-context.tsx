"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import { ComponentLibrary } from "@/lib/component-library"
type ComponentTextContent = any

export const defaultTextContent: Record<string, ComponentTextContent> = {
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

export interface SelectedComponents {
  [key: string]: string | null
  header: string | null
  hero: string | null
  features: string | null
  testimonials: string | null
  pricing: string | null
  cta: string | null
  footer: string | null
}

interface CodeExportContextType {
  activeCategory: string
  setActiveCategory: (category: string) => void
  selectedComponents: SelectedComponents
  setSelectedComponents: React.Dispatch<React.SetStateAction<SelectedComponents>>
  componentColors: Record<string, string>
  setComponentColors: React.Dispatch<React.SetStateAction<Record<string, string>>>
  customTextContent: Record<string, ComponentTextContent>
  setCustomTextContent: React.Dispatch<React.SetStateAction<Record<string, ComponentTextContent>>>
  isExportModalOpen: boolean
  setIsExportModalOpen: (isOpen: boolean) => void
  activeEditComponent: { category: string; componentId: string } | null
  setActiveEditComponent: (component: { category: string; componentId: string } | null) => void
  
  // Helpers
  handleComponentSelect: (category: string, componentId: string) => void
  handleRemoveComponent: (category: string) => void
  handleDropComponent: (item: { type: string; id: string }) => void
  handleColorChange: (category: string, color: string) => void
  handleSaveTextCustomization: (newContent: any) => void
  handleEditComponent: (category: string, componentId: string) => void
}

const CodeExportContext = createContext<CodeExportContextType | undefined>(undefined)

interface CodeExportProviderProps {
  children: React.ReactNode
  initialComponents?: SelectedComponents | null
  initialTextContent?: Record<string, ComponentTextContent> | null
  initialColors?: Record<string, string> | null
}

export function CodeExportProvider({
  children,
  initialComponents = null,
  initialTextContent = null,
  initialColors = null,
}: CodeExportProviderProps) {
  const [activeCategory, setActiveCategory] = useState("header")
  const [selectedComponents, setSelectedComponents] = useState<SelectedComponents>(
    initialComponents || {
      header: null,
      hero: null,
      features: null,
      testimonials: null,
      pricing: null,
      cta: null,
      footer: null,
    }
  )
  const [componentColors, setComponentColors] = useState<Record<string, string>>(initialColors || {})
  const [isExportModalOpen, setIsExportModalOpen] = useState(false)
  const [customTextContent, setCustomTextContent] = useState<Record<string, ComponentTextContent>>(initialTextContent || {})
  const [activeEditComponent, setActiveEditComponent] = useState<{ category: string; componentId: string } | null>(null)

  // Initialize default colors for each component category
  useEffect(() => {
    if (!initialColors) {
      const defaultColors = {
        header: "#3b82f6", // blue
        hero: "#3b82f6",
        features: "#3b82f6",
        testimonials: "#3b82f6",
        pricing: "#3b82f6",
        cta: "#3b82f6",
        footer: "#3b82f6",
      }
      setComponentColors(prev => ({ ...defaultColors, ...prev }))
    }
  }, [initialColors])

  const handleComponentSelect = (category: string, componentId: string) => {
    // Validate that the component exists before setting it
    const lib = ComponentLibrary as any
    if (lib[category] && lib[category][componentId]) {
      setSelectedComponents((prev) => ({
        ...prev,
        [category as keyof typeof prev]: componentId,
      }))

      // Initialize custom text content if not already set
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
      [category as keyof typeof prev]: null,
    }))

    // Also remove the color setting for this component
    setComponentColors((prev) => {
      const newColors = { ...prev }
      delete newColors[category]
      return newColors
    })

    // Clear active edit component if it's the one being removed
    if (activeEditComponent && activeEditComponent.category === category) {
      setActiveEditComponent(null)
    }
  }

  const handleDropComponent = (item: { type: string; id: string }) => {
    // Validate that the component exists before setting it
    const lib = ComponentLibrary as any
    if (lib[item.type] && lib[item.type][item.id]) {
      setSelectedComponents((prev) => ({
        ...prev,
        [item.type as keyof typeof prev]: item.id,
      }))

      // Initialize custom text content if not already set
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

  const handleSaveTextCustomization = (newContent: any) => {
    if (!activeEditComponent) return

    const componentKey = `${activeEditComponent.category}-${activeEditComponent.componentId}`

    setCustomTextContent((prev) => ({
      ...prev,
      [componentKey]: newContent,
    }))

    setActiveEditComponent(null)
  }

  const handleEditComponent = (category: string, componentId: string) => {
    setActiveEditComponent({ category, componentId })
  }

  return (
    <CodeExportContext.Provider
      value={{
        activeCategory,
        setActiveCategory,
        selectedComponents,
        setSelectedComponents,
        componentColors,
        setComponentColors,
        customTextContent,
        setCustomTextContent,
        isExportModalOpen,
        setIsExportModalOpen,
        activeEditComponent,
        setActiveEditComponent,
        handleComponentSelect,
        handleRemoveComponent,
        handleDropComponent,
        handleColorChange,
        handleSaveTextCustomization,
        handleEditComponent,
      }}
    >
      {children}
    </CodeExportContext.Provider>
  )
}

export function useCodeExportContext() {
  const context = useContext(CodeExportContext)
  if (context === undefined) {
    throw new Error("useCodeExportContext must be used within a CodeExportProvider")
  }
  return context
}
