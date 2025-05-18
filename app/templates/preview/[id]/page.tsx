"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@nextui-org/react"
import { ArrowLeft, Edit, Monitor, Smartphone, Tablet } from "lucide-react"
import { templates } from "@/lib/template-data"
import { ComponentLibrary } from "@/lib/component-library"

export default function TemplatePreviewPage() {
  const params = useParams()
  const router = useRouter()
  const [previewMode, setPreviewMode] = useState("desktop")
  const [isLoading, setIsLoading] = useState(true)

  const templateId = params.id as string
  const template = templates.find((t) => t.id === templateId)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (!template) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Template not found</h1>
        <p className="mb-8">The template you're looking for doesn't exist or has been removed.</p>
        <Link href="/templates">
          <Button color="primary">Back to Templates</Button>
        </Link>
      </div>
    )
  }

  const handleEditTemplate = () => {
    router.push(`/builder?template=${template.id}`)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl">Loading template preview...</p>
        </div>
      </div>
    )
  }

  // Render the template components in the preview
  const renderTemplateComponents = () => {
    // Order categories for display
    const orderedCategories = ["header", "hero", "features", "testimonials", "pricing", "cta", "footer"]

    return (
      <div className="preview-container">
        {orderedCategories.map((category) => {
          const componentId = template.configuration[category]
          if (!componentId) return null

          // Check if the category and component exist in the library
          if (!ComponentLibrary[category] || !ComponentLibrary[category][componentId]) {
            return null
          }

          const Component = ComponentLibrary[category][componentId]
          const textContent = template.customTextContent[`${category}-${componentId}`] || {}
          const color = template.primaryColor || "#3b82f6"

          return (
            <div key={`${category}-${componentId}`} className="relative">
              <div
                className={`component-wrapper component-${category}`}
                style={{ "--component-color": color } as React.CSSProperties}
              >
                <Component textContent={textContent} />
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/templates" className="mr-4">
              <Button isIconOnly variant="light" aria-label="Back">
                <ArrowLeft size={20} />
              </Button>
            </Link>
            <h1 className="text-xl font-bold">{template.name} Preview</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-2">
              <Button
                isIconOnly
                size="sm"
                variant={previewMode === "mobile" ? "solid" : "light"}
                onPress={() => setPreviewMode("mobile")}
                aria-label="Mobile preview"
              >
                <Smartphone size={16} />
              </Button>
              <Button
                isIconOnly
                size="sm"
                variant={previewMode === "tablet" ? "solid" : "light"}
                onPress={() => setPreviewMode("tablet")}
                aria-label="Tablet preview"
              >
                <Tablet size={16} />
              </Button>
              <Button
                isIconOnly
                size="sm"
                variant={previewMode === "desktop" ? "solid" : "light"}
                onPress={() => setPreviewMode("desktop")}
                aria-label="Desktop preview"
              >
                <Monitor size={16} />
              </Button>
            </div>
            <Button color="primary" startContent={<Edit size={18} />} onPress={handleEditTemplate}>
              Edit This Template
            </Button>
          </div>
        </div>
      </div>

      {/* Preview Area */}
      <div className="container mx-auto px-4 py-8 flex justify-center">
        <div
          className={`bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden transition-all duration-300 ${
            previewMode === "mobile" ? "w-[375px]" : previewMode === "tablet" ? "w-[768px]" : "w-full max-w-6xl"
          }`}
        >
          {renderTemplateComponents()}
        </div>
      </div>

      {/* Floating Action Button for Mobile */}
      <div className="fixed bottom-6 right-6 md:hidden">
        <Button
          color="primary"
          size="lg"
          isIconOnly
          className="shadow-lg rounded-full h-14 w-14"
          onPress={handleEditTemplate}
        >
          <Edit size={24} />
        </Button>
      </div>

      {/* Add custom styling for components */}
      <style jsx global>{`
        .component-wrapper [class*="bg-primary"],
        .component-wrapper [class*="bg-blue-"] {
          background-color: var(--component-color) !important;
        }
        
        .component-wrapper [class*="border-primary"],
        .component-wrapper [class*="border-blue-"] {
          border-color: var(--component-color) !important;
        }
        
        .component-wrapper [class*="text-primary"],
        .component-wrapper [class*="text-blue-"] {
          color: var(--component-color) !important;
        }
        
        .component-wrapper button[class*="bg-primary"],
        .component-wrapper button[class*="bg-blue-"] {
          background-color: var(--component-color) !important;
        }
        
        .component-header .w-8.h-8.bg-blue-600,
        .component-header .w-10.h-10.bg-blue-600,
        .component-features .w-6.h-6.bg-blue-600,
        .component-features .w-8.h-8.bg-blue-600 {
          background-color: var(--component-color) !important;
        }
        
        .component-testimonials .text-5xl.text-blue-600 {
          color: var(--component-color) !important;
        }
        
        .component-pricing [class*="border-blue-600"] {
          border-color: var(--component-color) !important;
        }
        
        .component-pricing .bg-blue-600,
        .component-cta .bg-blue-600,
        .component-cta .bg-blue-50 {
          background-color: var(--component-color) !important;
        }
        
        .component-cta .bg-blue-50,
        .component-cta .dark\\:bg-blue-900\\/20 {
          background-color: color-mix(in srgb, var(--component-color) 10%, transparent) !important;
        }
      `}</style>
    </div>
  )
}
