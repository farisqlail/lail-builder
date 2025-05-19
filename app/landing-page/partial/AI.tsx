import Link from "next/link"
import { Button } from "@nextui-org/react"
import { ArrowRight, LayoutTemplate, Sparkles } from "lucide-react";

export function AI() {
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
                                        ✓
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
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <div className="mb-6">
                                <h3 className="text-lg font-medium mb-2">AI Website Generator</h3>
                                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div className="h-full bg-[#3b82f6] w-3/4"></div>
                                </div>
                                <div className="flex justify-between mt-1 text-xs text-gray-500">
                                    <span>Business Info</span>
                                    <span>Features</span>
                                    <span>Design</span>
                                    <span>Result</span>
                                </div>
                            </div>
                            <div className="space-y-4 mb-6">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Business Type</label>
                                    <div className="border border-gray-300 rounded-md p-2 bg-gray-50 text-sm">
                                        E-commerce / Online Store
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Important Features</label>
                                    <div className="flex flex-wrap gap-2">
                                        {["Products", "Testimonials", "Pricing", "Contact"].map((tag) => (
                                            <span key={tag} className="bg-[#eff6ff] text-[#3b82f6] text-xs px-2 py-1 rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Color Scheme</label>
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-4 rounded-full bg-[#3b82f6]"></div>
                                        <span className="text-sm">Blue (Professional)</span>
                                    </div>
                                </div>
                            </div>
                            <Button className="w-full bg-[#3b82f6] text-white rounded-md">Generate Website</Button>
                        </div>
                        <div className="absolute -bottom-4 -right-4 bg-[#3b82f6] text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                            <Sparkles size={24} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}