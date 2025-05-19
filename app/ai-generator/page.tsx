"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  Card,
  CardBody,
  Button,
  Input,
  Textarea,
  Select,
  SelectItem,
  Checkbox,
  Progress,
  Divider,
} from "@nextui-org/react"
import { Sparkles, ArrowRight, Check, Loader2 } from "lucide-react"
import { generateWebsiteConfiguration, type AIGeneratorFormData } from "@/lib/ai-generator-utils"

const businessTypes = [
  { label: "E-commerce / Online Store", value: "ecommerce" },
  { label: "Professional Services", value: "services" },
  { label: "Portfolio / Creative", value: "portfolio" },
  { label: "SaaS / Technology", value: "saas" },
  { label: "Blog / Content", value: "blog" },
  { label: "Nonprofit / Organization", value: "nonprofit" },
  { label: "Restaurant / Food", value: "restaurant" },
  { label: "Education / Courses", value: "education" },
  { label: "Real Estate", value: "realestate" },
  { label: "Health / Wellness", value: "health" },
]

const colorSchemes = [
  { label: "Blue (Professional)", value: "#3b82f6" },
  { label: "Green (Fresh & Natural)", value: "#10b981" },
  { label: "Purple (Creative)", value: "#8b5cf6" },
  { label: "Pink (Bold & Modern)", value: "#ec4899" },
  { label: "Orange (Energetic)", value: "#f59e0b" },
  { label: "Red (Passionate)", value: "#ef4444" },
  { label: "Teal (Balanced)", value: "#14b8a6" },
  { label: "Gray (Minimal)", value: "#6b7280" },
]

const importantFeatures = [
  { label: "About Us / Company Information", value: "about" },
  { label: "Services / Products Showcase", value: "showcase" },
  { label: "Testimonials / Reviews", value: "testimonials" },
  { label: "Pricing Information", value: "pricing" },
  { label: "Contact Form / Information", value: "contact" },
  { label: "Team Members / Staff", value: "team" },
  { label: "Blog / News Section", value: "blog" },
  { label: "Portfolio / Case Studies", value: "portfolio" },
  { label: "FAQ Section", value: "faq" },
  { label: "Call to Action", value: "cta" },
]

export default function AIGeneratorPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [generating, setGenerating] = useState(false)
  const [generatedTemplate, setGeneratedTemplate] = useState<string | null>(null)

  // Form state
  const [businessName, setBusinessName] = useState("")
  const [businessType, setBusinessType] = useState("")
  const [businessDescription, setBusinessDescription] = useState("")
  const [colorScheme, setColorScheme] = useState("")
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])
  const [additionalInfo, setAdditionalInfo] = useState("")

  const handleFeatureToggle = (feature: string) => {
    if (selectedFeatures.includes(feature)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== feature))
    } else {
      setSelectedFeatures([...selectedFeatures, feature])
    }
  }

  const handleNext = () => {
    setStep(step + 1)
  }

  const handleBack = () => {
    setStep(step - 1)
  }

  const handleGenerate = async () => {
    setGenerating(true)

    // Simulate AI processing time
    await new Promise((resolve) => setTimeout(resolve, 3000))

    // Generate website configuration using our utility function
    const formData: AIGeneratorFormData = {
      businessName,
      businessType,
      businessDescription,
      colorScheme,
      selectedFeatures,
      additionalInfo,
    }

    const config = generateWebsiteConfiguration(formData)
    setGeneratedTemplate(config.templateId)

    // In a real implementation, we would store the configuration
    // and pass it to the builder page

    setGenerating(false)
    setStep(4)
  }

  const handleViewWebsite = () => {
    if (generatedTemplate) {
      // In a real implementation, we would also pass the custom text content
      // and color scheme to the builder page
      router.push(`/builder?template=${generatedTemplate}&color=${encodeURIComponent(colorScheme)}`)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
              <Sparkles className="text-primary" size={24} />
              AI Website Generator
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Answer a few questions and let AI create the perfect website for your business
            </p>
          </div>

          {/* Progress indicator */}
          <div className="mb-8">
            <Progress value={(step / 4) * 100} color="primary" className="h-2" aria-label="Generation progress" />
            <div className="flex justify-between mt-2 text-sm text-gray-600 dark:text-gray-400">
              <span>Business Info</span>
              <span>Features</span>
              <span>Design</span>
              <span>Result</span>
            </div>
          </div>

          <Card className="shadow-md">
            <CardBody className="p-6">
              {/* Step 1: Business Information */}
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold">Tell us about your business</h2>

                  <div className="space-y-4">
                    <Input
                      label="Business Name"
                      placeholder="Enter your business name"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                    />

                    <Select
                      label="Business Type"
                      placeholder="Select your business type"
                      selectedKeys={businessType ? [businessType] : []}
                      onChange={(e) => setBusinessType(e.target.value)}
                    >
                      {businessTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </Select>

                    <Textarea
                      label="Business Description"
                      placeholder="Briefly describe your business, products, or services"
                      value={businessDescription}
                      onChange={(e) => setBusinessDescription(e.target.value)}
                      minRows={3}
                    />
                  </div>

                  <div className="flex justify-end">
                    <Button
                      color="primary"
                      endContent={<ArrowRight size={16} />}
                      onPress={handleNext}
                      isDisabled={!businessName || !businessType}
                    >
                      Next
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 2: Important Features */}
              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold">What features are important for your website?</h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Select the features you want to include on your website (select at least 3)
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {importantFeatures.map((feature) => (
                      <Checkbox
                        key={feature.value}
                        isSelected={selectedFeatures.includes(feature.value)}
                        onValueChange={() => handleFeatureToggle(feature.value)}
                      >
                        {feature.label}
                      </Checkbox>
                    ))}
                  </div>

                  <div className="flex justify-between">
                    <Button variant="flat" onPress={handleBack}>
                      Back
                    </Button>
                    <Button
                      color="primary"
                      endContent={<ArrowRight size={16} />}
                      onPress={handleNext}
                      isDisabled={selectedFeatures.length < 3}
                    >
                      Next
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3: Design Preferences */}
              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold">Design Preferences</h2>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Choose a color scheme</label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {colorSchemes.map((scheme) => (
                          <div
                            key={scheme.value}
                            className={`
                              cursor-pointer rounded-md p-3 border-2 flex flex-col items-center
                              ${colorScheme === scheme.value ? "border-primary" : "border-gray-200 dark:border-gray-700"}
                            `}
                            onClick={() => setColorScheme(scheme.value)}
                          >
                            <div className="w-8 h-8 rounded-full mb-2" style={{ backgroundColor: scheme.value }}></div>
                            <span className="text-xs text-center">{scheme.label}</span>
                            {colorScheme === scheme.value && (
                              <div className="absolute top-1 right-1">
                                <Check size={16} className="text-primary" />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    <Textarea
                      label="Additional Information (Optional)"
                      placeholder="Any other details you'd like us to consider when generating your website"
                      value={additionalInfo}
                      onChange={(e) => setAdditionalInfo(e.target.value)}
                      minRows={3}
                    />
                  </div>

                  <div className="flex justify-between">
                    <Button variant="flat" onPress={handleBack}>
                      Back
                    </Button>
                    <Button
                      color="primary"
                      endContent={<Sparkles size={16} />}
                      onPress={handleGenerate}
                      isDisabled={!colorScheme}
                      isLoading={generating}
                    >
                      Generate Website
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 4: Result */}
              {step === 4 && generatedTemplate && (
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check size={24} className="text-primary" />
                    </div>
                    <h2 className="text-xl font-semibold">Your Website is Ready!</h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                      We've created a custom website based on your requirements
                    </p>
                  </div>

                  <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                    <h3 className="font-medium mb-2">Website Summary</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <span className="font-medium">Business Name:</span> {businessName}
                      </li>
                      <li>
                        <span className="font-medium">Business Type:</span>{" "}
                        {businessTypes.find((t) => t.value === businessType)?.label}
                      </li>
                      <li>
                        <span className="font-medium">Key Features:</span>{" "}
                        {selectedFeatures
                          .map((f) => importantFeatures.find((feature) => feature.value === f)?.label)
                          .join(", ")}
                      </li>
                      <li className="flex items-center">
                        <span className="font-medium mr-2">Color Scheme:</span>
                        <div
                          className="w-4 h-4 rounded-full inline-block mr-1"
                          style={{ backgroundColor: colorScheme }}
                        ></div>
                        {colorSchemes.find((c) => c.value === colorScheme)?.label}
                      </li>
                    </ul>
                  </div>

                  <Divider />

                  <div className="flex flex-col items-center">
                    <p className="text-center mb-4">
                      Your website is ready to be customized in the builder. You can make further adjustments to match
                      your exact needs.
                    </p>
                    <Button color="primary" size="lg" onPress={handleViewWebsite}>
                      View & Edit Your Website
                    </Button>
                  </div>
                </div>
              )}

              {/* Loading State */}
              {generating && (
                <div className="absolute inset-0 bg-white/80 dark:bg-gray-900/80 flex flex-col items-center justify-center z-10 rounded-lg">
                  <Loader2 size={40} className="text-primary animate-spin mb-4" />
                  <h3 className="text-xl font-medium mb-2">Generating Your Website</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center max-w-md">
                    Our AI is analyzing your requirements and creating the perfect website for your business...
                  </p>
                </div>
              )}
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}
