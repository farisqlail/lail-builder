"use client"

import { useState, useEffect } from "react"
import {
  Input,
  Textarea,
  Accordion,
  AccordionItem,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ScrollShadow,
} from "@nextui-org/react"

interface TextCustomizationPanelProps {
  componentType: string
  textContent: any
  isOpen: boolean
  onClose: () => void
  onSave: (newContent: any) => void
}

export function TextCustomizationPanel({
  componentType,
  textContent,
  isOpen,
  onClose,
  onSave,
}: TextCustomizationPanelProps) {
  const [localContent, setLocalContent] = useState<any>(textContent || {})

  // Reset local content when textContent changes or modal opens
  useEffect(() => {
    if (isOpen) {
      setLocalContent(JSON.parse(JSON.stringify(textContent || {})))
    }
  }, [textContent, isOpen])

  const handleLocalChange = (key: string, value: any) => {
    // Deep clone to avoid mutating state directly
    const newContent = JSON.parse(JSON.stringify(localContent))
    
    // Handle nested properties with dot notation
    if (key.includes(".") || key.includes("[")) {
      // Parse the path and set the value
      const parts = key.split(".")
      let current = newContent

      for (let i = 0; i < parts.length - 1; i++) {
        const part = parts[i]

        // Handle array notation like "items[0]"
        if (part.includes("[")) {
          const arrayName = part.split("[")[0]
          const index = Number.parseInt(part.split("[")[1].replace("]", ""))

          if (!current[arrayName]) current[arrayName] = []
          if (!current[arrayName][index]) {
            // If it's an object in the array
            if (i < parts.length - 2) {
              current[arrayName][index] = {}
            }
          }

          current = current[arrayName][index]
        } else {
          if (!current[part]) {
            current[part] = {}
          }
          current = current[part]
        }
      }

      // Set the final value
      const lastPart = parts[parts.length - 1]
      if (lastPart.includes("[")) {
        const arrayName = lastPart.split("[")[0]
        const index = Number.parseInt(lastPart.split("[")[1].replace("]", ""))

        if (!current[arrayName]) current[arrayName] = []
        current[arrayName][index] = value
      } else {
        current[lastPart] = value
      }
    } else {
      // Simple property
      newContent[key] = value
    }

    setLocalContent(newContent)
  }

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
                    handleLocalChange(fullPath, newArray)
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
              handleLocalChange(fullPath, newArray)
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
          onChange={(e) => handleLocalChange(fullPath, e.target.value)}
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
          onChange={(e) => handleLocalChange(fullPath, e.target.value)}
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

    Object.entries(localContent).forEach(([key, value]) => {
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
    <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside" size="2xl">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Text Customization
              <p className="text-sm font-normal text-default-500">
                Customize the text content for {componentType}
              </p>
            </ModalHeader>
            <ModalBody>
              <ScrollShadow className="h-[60vh]">
                <Accordion defaultExpandedKeys={["general", "buttons", "features"]}>
                  {Object.entries(contentGroups).map(([group, content]) => {
                    if (Object.keys(content).length === 0) return null

                    return (
                      <AccordionItem
                        key={group}
                        title={group.charAt(0).toUpperCase() + group.slice(1)}
                        aria-label={group}
                      >
                        <div className="px-1 py-2">
                          {Object.entries(content).map(([key, value]) => renderInputField(key, value))}
                        </div>
                      </AccordionItem>
                    )
                  })}
                </Accordion>
              </ScrollShadow>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Cancel
              </Button>
              <Button color="primary" onPress={() => onSave(localContent)}>
                Apply
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
