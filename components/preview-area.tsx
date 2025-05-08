"use client"

import { ComponentLibrary } from "@/lib/component-library"
import { Button } from "@nextui-org/react"
import { Code } from "lucide-react"

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
  onExport: () => void
}

export function PreviewArea({ selectedComponents, onExport }: PreviewAreaProps) {
  const hasSelectedComponents = Object.values(selectedComponents).some((value) => value !== null)

  const handleCopyCode = () => {
    onExport()
  }

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
      <div className="bg-gray-50 dark:bg-gray-800 min-h-[500px] overflow-y-auto">
        {!hasSelectedComponents ? (
          <div className="flex items-center justify-center h-full text-gray-500">
            Select components to preview your website
          </div>
        ) : (
          <div className="preview-container">
            {Object.entries(selectedComponents).map(([category, componentId]) => {
              if (!componentId) return null

              const Component = ComponentLibrary[category][componentId]
              return <Component key={`${category}-${componentId}`} />
            })}
          </div>
        )}
      </div>
    </div>
  )
}
