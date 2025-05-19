"use client"

import type React from "react"

import { ComponentLibrary } from "@/lib/component-library"
import { Button } from "@nextui-org/react"
import { Code, Trash2, Type } from "lucide-react"
import { useDrop } from "react-dnd"

interface PreviewAreaProps {
  selectedComponents: {
    header: string | null
    hero: string | null
    features: string | null
    testimonials: string | null
    pricing: string | null
    cta: string | null
    footer: string | null
  }
  componentColors: Record<string, string>
  customTextContent: Record<string, any>
  onExport: () => void
  onRemoveComponent: (category: string) => void
  onDropComponent: (item: { type: string; id: string }) => void
  onColorChange: (category: string, color: string) => void
  onEditComponent: (category: string, componentId: string) => void
}

export function PreviewArea({
  selectedComponents,
  componentColors,
  customTextContent,
  onExport,
  onRemoveComponent,
  onDropComponent,
  onColorChange,
  onEditComponent,
}: PreviewAreaProps) {
  const hasSelectedComponents = Object.values(selectedComponents).some((value) => value !== null)

  const handleCopyCode = () => {
    onExport()
  }

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "component",
    drop: (item: { type: string; id: string }) => {
      onDropComponent(item)
      return undefined
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }))

  // Sort components in a logical order for display
  const orderedCategories = ["header", "hero", "features", "testimonials", "pricing", "cta", "footer"]

  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
      <div className="bg-white dark:bg-gray-900 p-4 flex justify-end gap-2">
        <Button
          color="primary"
          variant="flat"
          startContent={<Code size={16} />}
          onPress={handleCopyCode}
          isDisabled={!hasSelectedComponents}
        >
          Export Code
        </Button>
      </div>
      <div
        ref={drop}
        className={`bg-gray-50 dark:bg-gray-800 min-h-[500px] overflow-y-auto ${isOver ? "border-2 border-dashed border-primary" : ""}`}
      >
        {!hasSelectedComponents ? (
          <div className="flex items-center justify-center h-full text-gray-500">
            Select components or drag them here to preview your website
          </div>
        ) : (
          <div className="preview-container">
            {orderedCategories.map((category) => {
              const componentId = selectedComponents[category]
              if (!componentId) return null

              // Check if the category and component exist in the library
              if (!ComponentLibrary[category] || !ComponentLibrary[category][componentId]) {
                console.error(`Component not found: ${category}/${componentId}`)
                return (
                  <div
                    key={`${category}-${componentId}-error`}
                    className="p-4 bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200 my-2"
                  >
                    Component not found: {category}/{componentId}
                  </div>
                )
              }

              const Component = ComponentLibrary[category][componentId]
              const color = componentColors[category] || "#3b82f6" // Default to blue if no color is set
              const textContent = customTextContent[`${category}-${componentId}`] || {}

              return (
                <div key={`${category}-${componentId}`} className="relative group">
                  <div className="absolute right-4 top-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                    <div className="flex items-center bg-white dark:bg-gray-900 rounded-md shadow p-2">
                      <Button
                        isIconOnly
                        color="primary"
                        variant="light"
                        size="sm"
                        onPress={() => onEditComponent(category, componentId)}
                        title="Edit text content"
                        className="mr-2"
                      >
                        <Type size={16} />
                      </Button>
                      <div className="flex items-center">
                        <input
                          type="color"
                          value={color}
                          onChange={(e) => onColorChange(category, e.target.value)}
                          className="w-8 h-8 rounded-md cursor-pointer border border-gray-300 dark:border-gray-700"
                          title="Change component color"
                        />
                      </div>
                      <Button
                        isIconOnly
                        color="danger"
                        variant="light"
                        size="sm"
                        onPress={() => onRemoveComponent(category)}
                        title="Remove component"
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </div>
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
        )}
      </div>
      {/* Add custom styling for components */}
      <style jsx global>{`
  .component-wrapper {
    --component-color: #3b82f6;
  }
  
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
  .component-cta .bg-blue-600 {
    background-color: var(--component-color) !important;
  }
  
  .component-cta .bg-blue-50,
  .component-cta .dark\\:bg-blue-900\\/20 {
    background-color: color-mix(in srgb, var(--component-color) 10%, transparent) !important;
  }
  
  .component-wrapper .bg-blue-50,
  .component-wrapper .bg-blue-100,
  .component-wrapper .bg-primary\\/20 {
    background-color: color-mix(in srgb, var(--component-color) 15%, transparent) !important;
  }
`}</style>
    </div>
  )
}
