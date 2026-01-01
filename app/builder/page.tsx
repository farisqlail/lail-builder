"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { BuilderInterface } from "@/components/builder-interface"
import { CodeExportProvider } from "@/components/code-export-context"
import { templates } from "@/lib/template-data"

export default function BuilderPage() {
  const searchParams = useSearchParams()
  const templateId = searchParams.get("template")
  const [isLoading, setIsLoading] = useState(!!templateId)

  // Load template configuration if template ID is provided
  const [initialComponents, setInitialComponents] = useState<any>(null)
  const [initialTextContent, setInitialTextContent] = useState<any>(null)
  const [initialColors, setInitialColors] = useState<any>(null)

  useEffect(() => {
    if (templateId) {
      const template = templates.find((t) => t.id === templateId)

      if (template) {
        setInitialComponents(template.configuration)
        setInitialTextContent(template.customTextContent)

        // Set default colors for each component category
        const colors: Record<string, string> = {}
        Object.entries(template.configuration).forEach(([category, componentId]) => {
          if (componentId) {
            colors[category] = template.primaryColor || "#3b82f6"
          }
        })
        setInitialColors(colors)

        // Simulate loading time
        const timer = setTimeout(() => {
          setIsLoading(false)
        }, 1000)

        return () => clearTimeout(timer)
      } else {
        setIsLoading(false)
      }
    }
  }, [templateId])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl">Loading template...</p>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen">
      <CodeExportProvider
        initialComponents={initialComponents}
        initialTextContent={initialTextContent}
        initialColors={initialColors}
      >
        <BuilderInterface />
      </CodeExportProvider>
    </main>
  )
}
