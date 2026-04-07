"use client"

import { useState } from "react"
import { Button } from "@nextui-org/react"
import { ComponentSelector } from "@/components/component-selector"
import { PreviewArea } from "@/components/preview-area"
import { BuilderToolbar } from "@/components/builder-toolbar"
import { ComponentLibrary } from "@/lib/component-library"
import { NavbarComponent } from "@/components/ui-components/navbar"
import { CodeExportModal } from "@/components/code-export-modal"
import { TextCustomizationPanel } from "@/components/text-customization-panel"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { useCodeExportContext } from "@/components/code-export-context"

export function BuilderInterface() {
  const {
    activeCategory,
    setActiveCategory,
    selectedComponents,
    componentColors,
    customTextContent,
    isExportModalOpen,
    setIsExportModalOpen,
    activeEditComponent,
    setActiveEditComponent,
    handleComponentSelect,
    handleRemoveComponent,
    handleDropComponent,
    handleColorChange,
    setComponentColors,
    handleSaveTextCustomization,
    handleEditComponent,
  } = useCodeExportContext()

  const [isPreviewMode, setIsPreviewMode] = useState(false)
  const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop')

  const handleGlobalColorChange = (color: string) => {
    const newColors = { ...componentColors }
    Object.keys(newColors).forEach(key => {
      newColors[key] = color
    })
    setComponentColors(newColors)
  }

  const categories = Object.keys(ComponentLibrary)

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col h-screen">
        <NavbarComponent />
        <BuilderToolbar 
          deviceView={deviceView}
          setDeviceView={setDeviceView}
          isPreviewMode={isPreviewMode}
          setIsPreviewMode={setIsPreviewMode}
          currentColor={componentColors.header || "#3b82f6"}
          onColorChange={handleGlobalColorChange}
          onExport={() => setIsExportModalOpen(true)}
        />
        <div className="flex flex-1 overflow-hidden">
          {!isPreviewMode && (
            <div className="w-[500px] flex-none border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 overflow-y-auto z-10" style={{width: "500px"}}>
              <h2 className="text-xl font-bold mb-4">Components</h2>
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
                {(ComponentLibrary as any)[activeCategory] ? (
                  <ComponentSelector
                    category={activeCategory}
                    components={(ComponentLibrary as any)[activeCategory]}
                    onSelect={handleComponentSelect}
                    selectedComponent={selectedComponents[activeCategory as keyof typeof selectedComponents]}
                  />
                ) : (
                  <div className="p-4 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 rounded-md">
                    No components available for this category.
                  </div>
                )}
              </div>
            </div>
          )}
          <div className="flex-1 bg-gray-50 dark:bg-gray-950 p-4 overflow-y-auto">
            <div 
              className="mx-auto min-h-full bg-white dark:bg-black shadow-sm border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden transition-all duration-300"
              style={{
                maxWidth: deviceView === 'mobile' ? '375px' : deviceView === 'tablet' ? '768px' : '100%'
              }}
            >
              <PreviewArea
              selectedComponents={selectedComponents}
              componentColors={componentColors}
              customTextContent={customTextContent}
              onExport={() => setIsExportModalOpen(true)}
              onRemoveComponent={handleRemoveComponent}
              onDropComponent={handleDropComponent}
              onColorChange={handleColorChange}
              onEditComponent={handleEditComponent}
            />
          </div>
        </div>
      </div>

        <CodeExportModal
          isOpen={isExportModalOpen}
          onClose={() => setIsExportModalOpen(false)}
          selectedComponents={selectedComponents}
          customTextContent={customTextContent as Record<string, any>}
          componentColors={componentColors}
        />

        <TextCustomizationPanel
          componentType={activeEditComponent?.componentId || ""}
          textContent={
            activeEditComponent
              ? customTextContent[`${activeEditComponent.category}-${activeEditComponent.componentId}`] || {}
              : {}
          }
          isOpen={!!activeEditComponent}
          onClose={() => setActiveEditComponent(null)}
          onSave={handleSaveTextCustomization}
        />
      </div>
    </DndProvider>
  )
}
