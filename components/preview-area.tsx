"use client"

import type React from "react"

import { ComponentLibrary } from "@/lib/component-library"
import { Button } from "@nextui-org/react"
import { Code, Trash2 } from "lucide-react"
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
  onExport: () => void
  onRemoveComponent: (category: string) => void
  onDropComponent: (item: { type: string; id: string }) => void
  onColorChange: (category: string, color: string) => void
}

export function PreviewArea({
  selectedComponents,
  componentColors,
  onExport,
  onRemoveComponent,
  onDropComponent,
  onColorChange,
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
            {Object.entries(selectedComponents).map(([category, componentId]) => {
              if (!componentId) return null
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
              const color = componentColors[category] || "#3b82f6" 

              return (
                <div key={`${category}-${componentId}`} className="relative group">
                  <div className="absolute right-4 top-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                    <div className="flex items-center bg-white dark:bg-gray-900 rounded-md shadow p-2">
                      <input
                        type="color"
                        value={color}
                        onChange={(e) => onColorChange(category, e.target.value)}
                        className="w-6 h-6 mr-2 cursor-pointer"
                        title="Change component color"
                      />
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
                    style={
                      {
                        "--primary": color,
                        "--primary-foreground": "#ffffff",
                      } as React.CSSProperties
                    }
                  >
                    <Component />
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
