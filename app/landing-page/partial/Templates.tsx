import Link from "next/link"
import { Button } from "@nextui-org/react"

export function Templates() {
    return (
        <section id="templates" className="py-20 px-6 md:px-12 lg:px-24">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-normal text-[#333333]">
                    Beautiful <span className="text-[#3b82f6]">Templates</span>
                </h2>
                <p className="mt-4 text-lg text-[#666666] max-w-2xl mx-auto">
                    Start with professionally designed templates and customize them to match your vision.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="rounded-3xl overflow-hidden bg-white hover:shadow-lg transition-shadow">
                        <img
                            src={`/assets/template-thumbnail/${i === 1 ? 'business.png' : i === 2 ? 'portfolio.png' : 'ecommerce.png'}`}
                            alt={i === 1 ? "businesses" : i === 2 ? "portfolios" : "e-commerce"}
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-medium text-[#333333] mb-2">Template {i === 1 ? "Businesses Template" : i === 2 ? "Portfolios Template" : "E-Commerce Template"}</h3>
                            <p className="text-[#666666] mb-4">
                                A professional template designed for {i === 1 ? "businesses" : i === 2 ? "portfolios" : "e-commerce"}.
                            </p>
                            <Link href="/templates">
                                <Button
                                    className="bg-transparent text-[#3b82f6] border border-[#3b82f6] rounded-full px-4 py-1 
                    hover:bg-[#3b82f6] hover:text-white transition-colors"
                                >
                                    View Template
                                </Button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <Link href="/templates">
                    <Button className="bg-transparent text-[#3b82f6] border border-[#3b82f6] rounded-full px-6 py-2 hover:bg-[#3b82f6] hover:text-white transition-colors">
                        View All Templates
                    </Button>
                </Link>
            </div>
        </section>
    )
}