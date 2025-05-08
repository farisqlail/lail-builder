"use client"

import { useState } from "react"
import { Button } from "@nextui-org/react"
import { ComponentSelector } from "@/components/component-selector"
import { PreviewArea } from "@/components/preview-area"
import { ComponentLibrary } from "@/lib/component-library"
import { NavbarComponent } from "@/components/ui-components/navbar"
import { CodeExportModal } from "@/components/code-export-modal"

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
  const [isExportModalOpen, setIsExportModalOpen] = useState(false)

  const handleComponentSelect = (category: string, componentId: string) => {
    setSelectedComponents((prev) => ({
      ...prev,
      [category]: componentId,
    }))
  }

  const categories = Object.keys(ComponentLibrary)

  return (
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
          <div className="mt-4">
            <ComponentSelector
              category={activeCategory}
              components={ComponentLibrary[activeCategory]}
              onSelect={handleComponentSelect}
              selectedComponent={selectedComponents[activeCategory]}
            />
          </div>
        </div>
        <div className="w-2/3 p-4 overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">Preview</h2>
          <PreviewArea selectedComponents={selectedComponents} onExport={() => setIsExportModalOpen(true)} />
        </div>
      </div>

      <CodeExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        selectedComponents={selectedComponents}
      />
    </div>
  )
}
