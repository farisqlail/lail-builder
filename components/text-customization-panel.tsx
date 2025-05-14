"use client"

import { useState } from "react"
import { Input, Textarea, Accordion, AccordionItem, Button } from "@nextui-org/react"

interface TextCustomizationPanelProps {
  componentType: string
  textContent: any
  onTextChange: (key: string, value: any) => void
}

export function TextCustomizationPanel({ componentType, textContent, onTextChange }: TextCustomizationPanelProps) {
  const [activeKey, setActiveKey] = useState<string | null>("general")
  const renderInputField = (key: string, value: any, path = "") => {
    const fullPath = path ? `${path}.${key}` : key

    if (Array.isArray(value)) {
      return (
        <div key={fullPath} className="mb-4">
          <h3 className="text-sm font-medium mb-2 capitalize">{key.replace(/([A-Z])/g, " $1")}</h3>
          {value.map((item, index) => {
            if (typeof item === "object" && item !== null) {
              return (
                <div key={`${fullPath}-${index}`} className="pl-4 mb-2 border-l-2 border-gray-200 dark:border-gray-700">
                  <p className="text-xs text-gray-500 mb-1">Item {index + 1}</p>
                  {Object.entries(item).map(([itemKey, itemValue]) =>
                    renderInputField(itemKey, itemValue, `${fullPath}[${index}]`),
                  )}
                </div>
              )
            } else {
              return (
                <Input
                  key={`${fullPath}-${index}`}
                  size="sm"
                  label={`Item ${index + 1}`}
                  value={item}
                  className="mb-2"
                  onChange={(e) => {
                    const newArray = [...value]
                    newArray[index] = e.target.value
                    onTextChange(fullPath, newArray)
                  }}
                />
              )
            }
          })}
          <Button
            size="sm"
            color="primary"
            variant="flat"
            className="mt-2"
            onPress={() => {
              const newArray = [...value, typeof value[0] === "string" ? "" : {}]
              onTextChange(fullPath, newArray)
            }}
          >
            Add Item
          </Button>
        </div>
      )
    } else if (typeof value === "object" && value !== null) {
      return (
        <div key={fullPath} className="mb-4">
          <h3 className="text-sm font-medium mb-2 capitalize">{key.replace(/([A-Z])/g, " $1")}</h3>
          <div className="pl-4 border-l-2 border-gray-200 dark:border-gray-700">
            {Object.entries(value).map(([objKey, objValue]) => renderInputField(objKey, objValue, fullPath))}
          </div>
        </div>
      )
    } else if (typeof value === "string" && value.length > 50) {
      return (
        <Textarea
          key={fullPath}
          size="sm"
          label={
            key
              .replace(/([A-Z])/g, " $1")
              .charAt(0)
              .toUpperCase() + key.replace(/([A-Z])/g, " $1").slice(1)
          }
          value={value}
          className="mb-4"
          onChange={(e) => onTextChange(fullPath, e.target.value)}
        />
      )
    } else {
      return (
        <Input
          key={fullPath}
          size="sm"
          label={
            key
              .replace(/([A-Z])/g, " $1")
              .charAt(0)
              .toUpperCase() + key.replace(/([A-Z])/g, " $1").slice(1)
          }
          value={value}
          className="mb-4"
          onChange={(e) => onTextChange(fullPath, e.target.value)}
        />
      )
    }
  }

  const groupContent = () => {
    const groups: Record<string, any> = {
      general: {},
      buttons: {},
      features: {},
      other: {},
    }

    Object.entries(textContent).forEach(([key, value]) => {
      if (key.includes("heading") || key.includes("subheading") || key.includes("title") || key.includes("Name")) {
        groups.general[key] = value
      } else if (key.includes("button") || key.includes("Button")) {
        groups.buttons[key] = value
      } else if (key.includes("feature") || key.includes("Feature")) {
        groups.features[key] = value
      } else {
        groups.other[key] = value
      }
    })

    return groups
  }

  const contentGroups = groupContent()

  return (
    <div className="mt-6 border border-gray-200 dark:border-gray-800 rounded-lg p-4">
      <h3 className="text-lg font-bold mb-4">Text Customization</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Customize the text content for this component</p>

      <Accordion>
        {Object.entries(contentGroups).map(([group, content]) => {
          if (Object.keys(content).length === 0) return null

          return (
            <AccordionItem key={group} title={group.charAt(0).toUpperCase() + group.slice(1)} aria-label={group}>
              <div className="px-1 py-2">
                {Object.entries(content).map(([key, value]) => renderInputField(key, value))}
              </div>
            </AccordionItem>
          )
        })}
      </Accordion>
    </div>
  )
}
