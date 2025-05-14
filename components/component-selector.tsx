import React, { forwardRef } from "react"
import { Card, CardBody } from "@nextui-org/react"
import { Check } from "lucide-react"
import { useDrag } from "react-dnd"

interface ComponentSelectorProps {
  category: string
  components: Record<string, React.ComponentType>
  onSelect: (category: string, componentId: string) => void
  selectedComponent: string | null
}

export function ComponentSelector({
  category,
  components,
  onSelect,
  selectedComponent,
}: ComponentSelectorProps) {
  if (!components || Object.keys(components).length === 0) {
    return (
      <div className="p-4 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 rounded-md">
        No components available for this category.
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-4 mt-4">
      {Object.keys(components).map((componentId) => {
        const Component = components[componentId]

        return (
          <ComponentCard
            key={componentId}
            category={category}
            componentId={componentId}
            isSelected={selectedComponent === componentId}
            onSelect={onSelect}
            Component={Component}
          />
        )
      })}
    </div>
  )
}

interface ComponentCardProps {
  category: string
  componentId: string
  isSelected: boolean
  onSelect: (category: string, componentId: string) => void
  Component: React.ComponentType
}

const ComponentCard = forwardRef<HTMLDivElement, ComponentCardProps>(
  ({ category, componentId, isSelected, onSelect, Component }: ComponentCardProps, ref) => {
    const [{ isDragging }, drag] = useDrag(() => ({
      type: "component",
      item: { type: category, id: componentId },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }))

    return (
      <Card
        ref={(node) => {
          drag(node) 
          if (typeof ref === "function") ref(node)
        }}
        isPressable
        isHoverable
        className={`border-2 ${isSelected ? "border-primary" : "border-transparent"} ${
          isDragging ? "opacity-50" : ""
        } cursor-grab`}
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
            {isSelected && <Check className="text-primary" size={20} />}
          </div>

          <div className="mt-2 border border-gray-200 dark:border-gray-800 rounded-md overflow-hidden">
            <div className="transform scale-[0.4] origin-top-left h-[250px] w-[250%] pointer-events-none">
              <Component />
            </div>
          </div>
        </CardBody>
      </Card>
    )
  }
)

ComponentCard.displayName = "ComponentCard"

export default ComponentSelector
