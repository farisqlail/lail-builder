"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@nextui-org/react"
import { ArrowRight, LayoutTemplate, Sparkles, Check, RefreshCcw } from "lucide-react";

export function AI() {
    const [isGenerating, setIsGenerating] = useState(false)
    const [showResult, setShowResult] = useState(false)
    
    // Default form values
    const [formData, setFormData] = useState({
        businessType: "E-commerce / Online Store",
        features: ["Products", "Testimonials", "Pricing", "Contact"],
        colorName: "Blue (Professional)",
        colorValue: "#3b82f6"
    })

    const handleGenerate = () => {
        setIsGenerating(true)
        setTimeout(() => {
            setIsGenerating(false)
            setShowResult(true)
        }, 2000)
    }

    const handleReset = () => {
        setShowResult(false)
    }

    return (
        <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#eff6ff]">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-block bg-[#3b82f6]/20 rounded-full px-4 py-1 text-[#3b82f6] font-medium text-sm mb-4">
                            NEW FEATURE
                        </div>
                        <h2 className="text-4xl font-normal text-[#333333] mb-6">
                            Let AI <span className="text-[#3b82f6]">Build Your Website</span> For You
                        </h2>
                        <p className="text-lg text-[#666666] mb-6">
                            Answer a few simple questions about your business, and our AI will automatically generate a custom
                            website tailored to your needs.
                        </p>
                        <ul className="space-y-3 mb-8">
                            {[
                                "Save hours of design time",
                                "Get a professionally designed website in minutes",
                                "Customize to your exact requirements",
                                "Perfect for businesses of all sizes",
                            ].map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <div className="mr-3 mt-1 w-5 h-5 bg-[#3b82f6] rounded-full flex items-center justify-center text-white text-xs">
                                        <Check size={12} />
                                    </div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Link href="/ai-generator">
                            <Button className="bg-[#3b82f6] text-white rounded-full px-8 py-3 text-lg hover:bg-[#2563eb] transition-colors flex items-center gap-2">
                                <Sparkles size={18} />
                                Try AI Generator
                            </Button>
                        </Link>
                    </div>
                    <div className="relative">
                        <div className="bg-white rounded-xl shadow-lg p-6 min-h-[450px] flex flex-col">
                            {!showResult ? (
                                <>
                                    <div className="mb-6">
                                        <h3 className="text-lg font-medium mb-2">AI Website Generator</h3>
                                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                            <div 
                                                className="h-full bg-[#3b82f6] transition-all duration-1000 ease-out" 
                                                style={{ width: isGenerating ? '100%' : '75%' }}
                                            ></div>
                                        </div>
                                        <div className="flex justify-between mt-1 text-xs text-gray-500">
                                            <span>Business Info</span>
                                            <span>Features</span>
                                            <span className={isGenerating ? "text-[#3b82f6] font-medium" : ""}>Result</span>
                                        </div>
                                    </div>
                                    <div className="space-y-4 mb-6 flex-grow">
                                        <div>
                                            <label className="block text-sm font-medium mb-1">Business Type</label>
                                            <div className="border border-gray-300 rounded-md p-2 bg-gray-50 text-sm">
                                                {formData.businessType}
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">Important Features</label>
                                            <div className="flex flex-wrap gap-2">
                                                {formData.features.map((tag) => (
                                                    <span key={tag} className="bg-[#eff6ff] text-[#3b82f6] text-xs px-2 py-1 rounded-full">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <Button 
                                        className="w-full bg-[#3b82f6] text-white rounded-md"
                                        isLoading={isGenerating}
                                        onPress={handleGenerate}
                                    >
                                        {isGenerating ? "Generating..." : "Generate Website"}
                                    </Button>
                                </>
                            ) : (
                                <div className="flex flex-col h-full animate-in fade-in duration-500">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-lg font-medium text-green-600 flex items-center gap-2">
                                            <Sparkles size={18} /> Website Generated!
                                        </h3>
                                        <Button size="sm" variant="light" isIconOnly onPress={handleReset}>
                                            <RefreshCcw size={16} />
                                        </Button>
                                    </div>
                                    
                                    <div className="border rounded-lg overflow-hidden flex-grow flex flex-col shadow-sm mb-4">
                                        {/* Mock Website Preview */}
                                        <div className="text-white p-3 flex justify-between items-center" style={{ backgroundColor: formData.colorValue }}>
                                            <div className="font-bold text-sm">Brand</div>
                                            <div className="flex gap-2 text-[10px]">
                                                {formData.features.slice(0, 3).map(f => <span key={f} className="opacity-90">{f}</span>)}
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 flex-1 p-6 flex flex-col justify-center items-center text-center relative overflow-hidden">
                                            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" 
                                                style={{ backgroundImage: `radial-gradient(${formData.colorValue} 1px, transparent 1px)`, backgroundSize: '10px 10px' }}>
                                            </div>
                                            <h1 className="text-lg font-bold text-gray-800 mb-2 leading-tight">
                                                Premium {formData.businessType} Solutions
                                            </h1>
                                            <p className="text-xs text-gray-500 mb-4 max-w-[200px]">
                                                We provide the best services for your business needs. 
                                                {formData.features.includes("Products") && " Check out our products today."}
                                            </p>
                                            <div className="flex gap-2">
                                                <div className="px-3 py-1 rounded text-xs text-white" style={{ backgroundColor: formData.colorValue }}>
                                                    Get Started
                                                </div>
                                                <div className="px-3 py-1 rounded text-xs bg-white border border-gray-200">
                                                    Learn More
                                                </div>
                                            </div>
                                            
                                            {/* Mock Content Blocks */}
                                            <div className="mt-6 w-full grid grid-cols-2 gap-2">
                                                <div className="h-12 bg-white rounded border border-gray-100 p-2">
                                                    <div className="w-6 h-6 rounded-full mb-1" style={{ backgroundColor: formData.colorValue, opacity: 0.2 }}></div>
                                                    <div className="h-1 w-12 bg-gray-200 rounded"></div>
                                                </div>
                                                <div className="h-12 bg-white rounded border border-gray-100 p-2">
                                                    <div className="w-6 h-6 rounded-full mb-1" style={{ backgroundColor: formData.colorValue, opacity: 0.2 }}></div>
                                                    <div className="h-1 w-12 bg-gray-200 rounded"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <Link href="/ai-generator" className="w-full">
                                        <Button className="w-full bg-[#3b82f6] text-white rounded-md">
                                            Customize & Publish
                                        </Button>
                                    </Link>
                                </div>
                            )}
                        </div>
                        <div className="absolute -bottom-4 -right-4 bg-[#3b82f6] text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg z-10">
                            <Sparkles size={24} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}