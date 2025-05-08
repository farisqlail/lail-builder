"use client"

import type React from "react"
import { Card, CardBody } from "@nextui-org/react"
import { Check } from "lucide-react"

interface ComponentSelectorProps {
  category: string
  components: Record<string, React.ComponentType>
  onSelect: (category: string, componentId: string) => void
  selectedComponent: string | null
}

export function ComponentSelector({ category, components, onSelect, selectedComponent }: ComponentSelectorProps) {
  return (
    <div className="grid grid-cols-1 gap-4 mt-4">
      {Object.keys(components).map((componentId) => {
        const Component = components[componentId]

        return (
          <Card
            key={componentId}
            isPressable
            isHoverable
            className={`border-2 ${selectedComponent === componentId ? "border-primary" : "border-transparent"}`}
            onPress={() => onSelect(category, componentId)}
          >
            <CardBody className="p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">
                  {componentId
                    .split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                </span>
                {selectedComponent === componentId && <Check className="text-primary" size={20} />}
              </div>

              {/* Component Preview */}
              <div className="mt-2 border border-gray-200 dark:border-gray-800 rounded-md overflow-hidden">
                <div className="transform scale-[0.4] origin-top-left h-[250px] w-[250%] pointer-events-none">
                  <Component />
                </div>
              </div>
            </CardBody>
          </Card>
        )
      })}
    </div>
  )
}
