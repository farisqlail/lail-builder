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
import { generateWebsiteWithGroqPrompt, type GroqWebsiteConfig } from "@/lib/groq-utils"

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
  { label: "Orange (Energetic)", value: "#f97316" },
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
  const [mode, setMode] = useState<"select" | "form" | "prompt">("select")
  const [step, setStep] = useState(1)
  const [generating, setGenerating] = useState(false)
  const [generatedTemplate, setGeneratedTemplate] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  // Form state
  const [businessName, setBusinessName] = useState("")
  const [businessType, setBusinessType] = useState("")
  const [businessDescription, setBusinessDescription] = useState("")
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])
  const [colorScheme] = useState("#3b82f6")
  const [additionalInfo] = useState("")

  // Groq Prompt state
  const [groqPrompt, setGroqPrompt] = useState("")
  const [groqConfig, setGroqConfig] = useState<GroqWebsiteConfig | null>(null)

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
    setError(null)

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
    setStep(3)
  }

  const handleGenerateWithGroq = async () => {
    if (!groqPrompt.trim()) {
      setError("Silakan masukkan prompt Anda")
      return
    }

    setGenerating(true)
    setError(null)

    try {
      const config = await generateWebsiteWithGroqPrompt(groqPrompt)
      setGroqConfig(config)
      setGeneratedTemplate(config.businessName)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Terjadi kesalahan saat generate website")
    } finally {
      setGenerating(false)
    }
  }

  const handleViewWebsite = () => {
    let color = colorScheme
    if (groqConfig) {
      color = groqConfig.colorScheme
    }

    if (generatedTemplate) {
      router.push(`/builder?template=${generatedTemplate}&color=${encodeURIComponent(color)}`)
    }
  }

  // Mode selection screen
  if (mode === "select") {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold flex items-center justify-center gap-2 mb-4">
                <Sparkles className="text-primary" size={28} />
                AI Website Generator
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Pilih cara terbaik untuk membuat website Anda
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Step by Step Mode */}
              <Card className="shadow-lg hover:shadow-xl transition-shadow cursor-pointer" isPressable onClick={() => setMode("form")}>
                <CardBody className="p-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      <ArrowRight className="text-blue-600 dark:text-blue-400" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold">Langkah demi Langkah</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Jawab beberapa pertanyaan terstruktur tentang bisnis Anda
                    </p>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2 text-left w-full mt-4">
                      <li>✓ Pilih jenis bisnis</li>
                      <li>✓ Tentukan fitur penting</li>
                      <li>✓ Pilih skema warna</li>
                    </ul>
                    <div className="mt-4 w-full">
                      <div className="w-full bg-primary text-primary-foreground font-semibold py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors text-center">
                        Mulai Sekarang
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>

              {/* Groq AI Prompt Mode */}
              <Card className="shadow-lg hover:shadow-xl transition-shadow cursor-pointer" isPressable onClick={() => setMode("prompt")}>
                <CardBody className="p-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                      <Sparkles className="text-purple-600 dark:text-purple-400" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold">AI Prompt (Groq)</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Jelaskan visi website Anda dengan AI Groq
                    </p>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2 text-left w-full mt-4">
                      <li>✓ Ceritakan ide Anda</li>
                      <li>✓ AI analisis kebutuhan</li>
                      <li>✓ Generate website instan</li>
                    </ul>
                    <div className="relative w-full mt-4">
                      <div className="w-full bg-primary text-primary-foreground font-semibold py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors text-center">
                        Coba Sekarang
                      </div>
                      <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                        NEW
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Groq Prompt Mode
  if (mode === "prompt") {
    if (groqConfig) {
      // Show result after Groq generates
      return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
                  <Sparkles className="text-primary" size={24} />
                  Website Siap Dibuat!
                </h1>
              </div>

              <Card className="shadow-md">
                <CardBody className="p-6">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check size={24} className="text-primary" />
                    </div>
                    <h2 className="text-xl font-semibold">Website Anda Siap!</h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                      AI Groq telah menganalisis kebutuhan Anda
                    </p>
                  </div>

                  <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 space-y-3">
                    <div>
                      <h3 className="font-medium text-gray-700 dark:text-gray-300">Nama Bisnis</h3>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">{groqConfig.businessName}</p>
                    </div>
                    <Divider />
                    <div>
                      <h3 className="font-medium text-gray-700 dark:text-gray-300">Tipe Bisnis</h3>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">{groqConfig.businessType}</p>
                    </div>
                    <Divider />
                    <div>
                      <h3 className="font-medium text-gray-700 dark:text-gray-300">Deskripsi</h3>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">{groqConfig.businessDescription}</p>
                    </div>
                    <Divider />
                    <div>
                      <h3 className="font-medium text-gray-700 dark:text-gray-300">Fitur Utama</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {groqConfig.selectedFeatures.map((feature) => (
                          <span key={feature} className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Divider />
                    <div>
                      <h3 className="font-medium text-gray-700 dark:text-gray-300">Warna Utama</h3>
                      <div className="flex items-center gap-2 mt-2">
                        <div
                          className="w-8 h-8 rounded border border-gray-300"
                          style={{ backgroundColor: groqConfig.colorScheme }}
                        />
                        <span className="text-gray-600 dark:text-gray-400">{groqConfig.colorScheme}</span>
                      </div>
                    </div>
                  </div>

                  <Divider className="my-6" />

                  <div className="flex flex-col items-center gap-4">
                    <p className="text-center text-gray-600 dark:text-gray-400">
                      Website Anda siap untuk dikustomisasi lebih lanjut di builder
                    </p>
                    <div className="flex gap-4 w-full">
                      <Button
                        variant="flat"
                        className="flex-1"
                        onPress={() => {
                          setGroqConfig(null)
                          setGroqPrompt("")
                          setMode("prompt")
                        }}
                      >
                        Kembali
                      </Button>
                      <Button
                        color="primary"
                        className="flex-1"
                        size="lg"
                        onPress={handleViewWebsite}
                      >
                        Lihat & Edit Website
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      )
    }

    // Show prompt input
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
                <Sparkles className="text-primary" size={24} />
                Buat Website dengan Prompt
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Jelaskan visi website Anda dan biarkan AI Groq menganalisisnya
              </p>
            </div>

            <Card className="shadow-md">
              <CardBody className="p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Berikan Prompt untuk Website Anda</h3>
                  <Textarea
                    placeholder="Contoh: Saya ingin membuat website toko online yang modern untuk menjual elektronik berkualitas tinggi dengan fitur testimonial, showcase produk, dan contact form yang bagus..."
                    value={groqPrompt}
                    onChange={(e) => setGroqPrompt(e.target.value)}
                    minRows={6}
                    className="mb-4"
                  />
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    💡 Tips: Jelaskan tujuan website, jenis bisnis, fitur penting, dan preferensi desain Anda
                  </p>
                </div>

                {error && (
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                    <p className="text-red-700 dark:text-red-400">{error}</p>
                  </div>
                )}

                <div className="flex gap-4">
                  <Button
                    variant="flat"
                    className="flex-1"
                    onPress={() => {
                      setMode("select")
                      setGroqPrompt("")
                    }}
                  >
                    Kembali
                  </Button>
                  <Button
                    color="primary"
                    className="flex-1"
                    size="lg"
                    isLoading={generating}
                    onPress={handleGenerateWithGroq}
                    disabled={!groqPrompt.trim()}
                  >
                    {generating ? "Menganalisis..." : "Analisis & Generate"}
                  </Button>
                </div>

                {generating && (
                  <div className="flex flex-col items-center justify-center py-8">
                    <Loader2 size={40} className="text-primary animate-spin mb-4" />
                    <h3 className="text-lg font-medium mb-2">AI Groq sedang Bekerja</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-center max-w-md">
                      AI Groq sedang menganalisis prompt Anda dan membuat konfigurasi website yang sempurna...
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

  // Form mode (Step by Step)
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
              Jawab beberapa pertanyaan dan biarkan AI membuat website sempurna untuk bisnis Anda
            </p>
          </div>

          {/* Progress indicator */}
          <div className="mb-8">
            <Progress value={(step / 3) * 100} color="primary" className="h-2" aria-label="Generation progress" />
            <div className="flex justify-between mt-2 text-sm text-gray-600 dark:text-gray-400">
              <span>Info Bisnis</span>
              <span>Fitur Penting</span>
              <span>Hasil</span>
            </div>
          </div>

          <Card className="shadow-md">
            <CardBody className="p-6">
              {/* Step 1: Business Information */}
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold">Ceritakan tentang bisnis Anda</h2>

                  <div className="space-y-4">
                    <Input
                      label="Nama Bisnis"
                      placeholder="Masukkan nama bisnis Anda"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                    />

                    <Select
                      label="Tipe Bisnis"
                      placeholder="Pilih tipe bisnis Anda"
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
                      label="Deskripsi Bisnis"
                      placeholder="Jelaskan singkat tentang bisnis, produk, atau layanan Anda"
                      value={businessDescription}
                      onChange={(e) => setBusinessDescription(e.target.value)}
                      minRows={3}
                    />
                  </div>

                  <div className="flex justify-between">
                    <Button
                      variant="flat"
                      onPress={() => {
                        setMode("select")
                      }}
                    >
                      Kembali
                    </Button>
                    <Button
                      color="primary"
                      endContent={<ArrowRight size={16} />}
                      onPress={handleNext}
                      isDisabled={!businessName || !businessType}
                    >
                      Lanjut
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 2: Important Features */}
              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold">Fitur apa yang penting untuk website Anda?</h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Pilih fitur yang ingin Anda sertakan di website Anda (pilih minimal 3)
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
                      Kembali
                    </Button>
                    <Button
                      color="primary"
                      endContent={<Sparkles size={16} />}
                      onPress={handleGenerate}
                      isDisabled={selectedFeatures.length < 3}
                      isLoading={generating}
                    >
                      Generate Website
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3: Result */}
              {step === 3 && generatedTemplate && (
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check size={24} className="text-primary" />
                    </div>
                    <h2 className="text-xl font-semibold">Website Anda Siap!</h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                      Kami telah membuat website khusus berdasarkan kebutuhan Anda
                    </p>
                  </div>

                  <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                    <h3 className="font-medium mb-2">Ringkasan Website</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <span className="font-medium">Nama Bisnis:</span> {businessName}
                      </li>
                      <li>
                        <span className="font-medium">Tipe Bisnis:</span>{" "}
                        {businessTypes.find((t) => t.value === businessType)?.label}
                      </li>
                      <li>
                        <span className="font-medium">Fitur Utama:</span>{" "}
                        {selectedFeatures
                          .map((f) => importantFeatures.find((feature) => feature.value === f)?.label)
                          .join(", ")}
                      </li>
                    </ul>
                  </div>

                  <Divider />

                  <div className="flex flex-col items-center">
                    <p className="text-center mb-4">
                      Website Anda siap untuk dikustomisasi lebih lanjut di builder. Anda dapat membuat penyesuaian lebih lanjut
                      untuk sesuai dengan kebutuhan spesifik Anda.
                    </p>
                    <Button color="primary" size="lg" onPress={handleViewWebsite}>
                      Lihat & Edit Website Anda
                    </Button>
                  </div>
                </div>
              )}

              {/* Loading State */}
              {generating && (
                <div className="absolute inset-0 bg-white/80 dark:bg-gray-900/80 flex flex-col items-center justify-center z-10 rounded-lg">
                  <Loader2 size={40} className="text-primary animate-spin mb-4" />
                  <h3 className="text-xl font-medium mb-2">Membuat Website Anda</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center max-w-md">
                    AI sedang menganalisis kebutuhan Anda dan membuat website sempurna untuk bisnis Anda...
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

