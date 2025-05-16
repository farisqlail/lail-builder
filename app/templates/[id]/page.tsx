"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { Button, Card, CardBody, Chip, Tabs, Tab, Divider } from "@nextui-org/react"
import { ArrowLeft, Check, Monitor, Smartphone, Tablet, Eye } from "lucide-react"
import { templates } from "@/lib/template-data"

export default function TemplateDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [previewMode, setPreviewMode] = useState("desktop")

  const templateId = params.id as string
  const template = templates.find((t) => t.id === templateId)

  if (!template) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Template not found</h1>
        <p className="mb-8">The template you're looking for doesn't exist or has been removed.</p>
        <Link href="/templates">
          <Button color="primary">Back to Templates</Button>
        </Link>
      </div>
    )
  }

  const handleUseTemplate = () => {
    router.push(`/templates/preview/${template.id}`)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link
          href="/templates"
          className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Templates
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Preview Section */}
        <div className="lg:w-2/3">
          <Card className="border border-gray-200 dark:border-gray-800">
            <CardBody className="p-0">
              <div className="bg-gray-100 dark:bg-gray-800 p-4 flex justify-between items-center">
                <h2 className="text-lg font-semibold">Preview</h2>
                <div className="flex gap-2">
                  <Button
                    isIconOnly
                    size="sm"
                    variant={previewMode === "mobile" ? "solid" : "light"}
                    onPress={() => setPreviewMode("mobile")}
                    aria-label="Mobile preview"
                  >
                    <Smartphone size={16} />
                  </Button>
                  <Button
                    isIconOnly
                    size="sm"
                    variant={previewMode === "tablet" ? "solid" : "light"}
                    onPress={() => setPreviewMode("tablet")}
                    aria-label="Tablet preview"
                  >
                    <Tablet size={16} />
                  </Button>
                  <Button
                    isIconOnly
                    size="sm"
                    variant={previewMode === "desktop" ? "solid" : "light"}
                    onPress={() => setPreviewMode("desktop")}
                    aria-label="Desktop preview"
                  >
                    <Monitor size={16} />
                  </Button>
                </div>
              </div>
              <div className="p-4 flex justify-center">
                <div
                  className={`overflow-hidden transition-all duration-300 border border-gray-300 dark:border-gray-700 ${
                    previewMode === "mobile" ? "w-[375px]" : previewMode === "tablet" ? "w-[768px]" : "w-full"
                  }`}
                >
                  <img
                    src={template.previewImage || "/placeholder.svg"}
                    alt={template.name}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Details Section */}
        <div className="lg:w-1/3">
          <div className="sticky top-4">
            <h1 className="text-3xl font-bold mb-2">{template.name}</h1>
            <div className="flex gap-2 mb-4">
              <Chip color="primary" variant="flat">
                {template.category}
              </Chip>
              {template.tags.map((tag) => (
                <Chip key={tag} variant="flat">
                  {tag}
                </Chip>
              ))}
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-6">{template.description}</p>

            <div className="flex flex-col gap-3 mb-6">
              <Button
                color="primary"
                size="lg"
                className="w-full"
                onPress={handleUseTemplate}
                startContent={<Eye size={18} />}
              >
                Preview Template
              </Button>
              <Link href={`/app/builder?template=${template.id}`}>
                <Button color="default" variant="flat" size="lg" className="w-full">
                  Skip Preview & Edit
                </Button>
              </Link>
            </div>

            <Divider className="my-6" />

            <Tabs aria-label="Template details">
              <Tab key="components" title="Components">
                <div className="py-2">
                  <h3 className="text-lg font-semibold mb-3">Included Components</h3>
                  <ul className="space-y-2">
                    {template.components.map((component) => (
                      <li key={component.id} className="flex items-center">
                        <Check size={16} className="text-green-500 mr-2" />
                        <span>{component.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Tab>
              <Tab key="features" title="Features">
                <div className="py-2">
                  <h3 className="text-lg font-semibold mb-3">Template Features</h3>
                  <ul className="space-y-2">
                    {template.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check size={16} className="text-green-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
