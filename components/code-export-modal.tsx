"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { useCodeExport } from "@/hooks/use-code-export"
import { SelectedComponents } from "@/components/code-export-context"
import { ComponentTextContent } from "@/lib/code-export-templates"
import { Copy, Download, Check } from "lucide-react"

interface CodeExportModalProps {
  isOpen: boolean
  onClose: () => void
  selectedComponents: SelectedComponents
  customTextContent: Record<string, ComponentTextContent>
  componentColors: Record<string, string>
}

export function CodeExportModal({
  isOpen,
  onClose,
  selectedComponents,
  customTextContent,
  componentColors,
}: CodeExportModalProps) {
  const { generateNextJSCode, generateHTMLCode, generateInstallationGuide, downloadProjectZip } = useCodeExport({
    selectedComponents,
    customTextContent,
    componentColors,
  })

  const [activeTab, setActiveTab] = useState("nextjs")
  const [copied, setCopied] = useState(false)

  const codeContent = {
    nextjs: generateNextJSCode(),
    html: generateHTMLCode(),
    installation: generateInstallationGuide(),
  }

  const handleCopy = () => {
    const text = codeContent[activeTab as keyof typeof codeContent]
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[85vh] flex flex-col p-6">
        <DialogHeader className="flex-shrink-0">
          <DialogTitle className="text-xl">Export Code</DialogTitle>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col min-h-0 mt-4">
          <TabsList className="w-auto justify-start bg-transparent p-0 gap-2 flex-shrink-0">
            <TabsTrigger
              value="nextjs"
              className="data-[state=active]:bg-white data-[state=active]:shadow-sm border border-transparent data-[state=active]:border-gray-200 rounded-full px-4"
            >
              Next.js
            </TabsTrigger>
            <TabsTrigger
              value="html"
              className="data-[state=active]:bg-white data-[state=active]:shadow-sm border border-transparent data-[state=active]:border-gray-200 rounded-full px-4"
            >
              HTML
            </TabsTrigger>
          </TabsList>

          <TabsContent value="nextjs" className="mt-4 focus-visible:outline-none">
            <div className="border rounded-lg bg-slate-50 p-4 overflow-auto" style={{ height: "400px" }}>
              <pre className="text-sm text-slate-900 font-mono whitespace-pre">{codeContent.nextjs}</pre>
            </div>
          </TabsContent>

          <TabsContent value="html" className="mt-4 focus-visible:outline-none">
            <div className="border rounded-lg bg-slate-50 p-4 overflow-auto" style={{ height: "400px" }}>
              <pre className="text-sm text-slate-900 font-mono whitespace-pre">{codeContent.html}</pre>
            </div>
          </TabsContent>
        </Tabs>

        <DialogFooter className="flex-shrink-0 mt-6 gap-2 sm:gap-0">
          <div className="flex w-full justify-between sm:justify-end items-center gap-2">
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
            <Button variant="secondary" onClick={handleCopy} className="bg-blue-50 text-blue-600 hover:bg-blue-100 border-blue-100 border">
              {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
              {copied ? "Copied" : "Copy Code"}
            </Button>
            <Button onClick={downloadProjectZip} className="bg-blue-600 hover:bg-blue-700 text-white">
              <Download className="w-4 h-4 mr-2" />
              Download Next JS
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
