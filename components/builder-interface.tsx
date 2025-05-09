"use client"

import { useState } from "react"
import { Button } from "@nextui-org/react"
import { ComponentSelector } from "@/components/component-selector"
import { PreviewArea } from "@/components/preview-area"
import { ComponentLibrary } from "@/lib/component-library"
import { NavbarComponent } from "@/components/ui-components/navbar"
import { CodeExportModal } from "@/components/code-export-modal"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

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

  const handleComponentSelect = (category: string, componentId: string) => {
    // Validate that the component exists before setting it
    if (ComponentLibrary[category] && ComponentLibrary[category][componentId]) {
      setSelectedComponents((prev) => ({
        ...prev,
        [category]: componentId,
      }))
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
  }

  const handleDropComponent = (item: { type: string; id: string }) => {
    if (ComponentLibrary[item.type] && ComponentLibrary[item.type][item.id]) {
      setSelectedComponents((prev) => ({
        ...prev,
        [item.type]: item.id,
      }))
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
              onExport={() => setIsExportModalOpen(true)}
              onRemoveComponent={handleRemoveComponent}
              onDropComponent={handleDropComponent}
              onColorChange={handleColorChange}
            />
          </div>
        </div>

        <CodeExportModal
          isOpen={isExportModalOpen}
          onClose={() => setIsExportModalOpen(false)}
          selectedComponents={selectedComponents}
        />
      </div>
    </DndProvider>
  )
}
