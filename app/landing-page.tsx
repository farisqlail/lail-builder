import Link from "next/link"
import { Button } from "@nextui-org/react"
import { Camera } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      {/* Header */}
      <header className="py-6 px-6 md:px-12 lg:px-24 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-[#3b82f6] rounded-full flex items-center justify-center mr-3">
            <Camera className="text-white" size={20} />
          </div>
          <span className="text-xl font-medium text-[#333333]">Web Component Builder</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-[#333333] hover:text-[#3b82f6] transition-colors">
            Features
          </a>
          <a href="#templates" className="text-[#333333] hover:text-[#3b82f6] transition-colors">
            Templates
          </a>
          <a href="#how-it-works" className="text-[#333333] hover:text-[#3b82f6] transition-colors">
            How It Works
          </a>
          <a href="#faq" className="text-[#333333] hover:text-[#3b82f6] transition-colors">
            FAQs
          </a>
        </nav>
        <Link href="/app/builder">
          <Button className="bg-[#3b82f6] text-white rounded-full px-6 py-2 hover:bg-[#2563eb] transition-colors">
            Start Building
          </Button>
        </Link>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-normal text-[#333333] leading-tight">
              Build your website
              <span className="block">with elegant</span>
              <span className="text-[#3b82f6]">components</span>
            </h1>
            <p className="mt-6 text-lg text-[#666666] max-w-md">
              Create stunning, responsive websites by selecting and customizing pre-built components. No coding
              required.
            </p>
            <div className="mt-10">
              <Link href="/app/builder">
                <Button className="bg-[#3b82f6] text-white rounded-full px-8 py-6 text-lg hover:bg-[#2563eb] transition-colors">
                  Start Building
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="bg-[#eff6ff] rounded-3xl overflow-hidden">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Website builder interface"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full py-2 px-4 shadow-md">
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-6 h-6 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-gray-300"></div>
                  </div>
                ))}
                <span className="ml-2 text-sm text-[#666666]">1,456 Happy Users</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-normal text-[#333333]">
            Powerful <span className="text-[#3b82f6]">Features</span>
          </h2>
          <p className="mt-4 text-lg text-[#666666] max-w-2xl mx-auto">
            Everything you need to build beautiful websites quickly and efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Component Library",
              description:
                "Choose from a wide range of pre-built components including headers, heroes, features, and more.",
            },
            {
              title: "Visual Preview",
              description: "See exactly how your website will look as you build it with our real-time preview feature.",
            },
            {
              title: "Code Export",
              description:
                "Export your design as clean, production-ready Next.js or HTML code that you can use in your projects.",
            },
          ].map((feature, index) => (
            <div key={index} className="p-8 rounded-3xl bg-[#f8f8f8] hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#eff6ff] rounded-full flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-[#3b82f6] rounded-full"></div>
              </div>
              <h3 className="text-xl font-medium text-[#333333] mb-3">{feature.title}</h3>
              <p className="text-[#666666]">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Templates Section */}
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
              <div className="h-64 bg-[#eff6ff]"></div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-[#333333] mb-2">Template {i}</h3>
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

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-normal text-[#333333]">
            How It <span className="text-[#3b82f6]">Works</span>
          </h2>
          <p className="mt-4 text-lg text-[#666666] max-w-2xl mx-auto">
            Building a website with our component builder is simple and straightforward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              step: "1",
              title: "Choose Components",
              description: "Browse our library of pre-built components and select the ones you want to use.",
            },
            {
              step: "2",
              title: "Customize Design",
              description: "Personalize colors, text, and content to match your brand and vision.",
            },
            {
              step: "3",
              title: "Export Your Code",
              description: "When you're happy with your design, export the code and use it in your project.",
            },
          ].map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-[#eff6ff] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-medium text-[#3b82f6]">{step.step}</span>
              </div>
              <h3 className="text-xl font-medium text-[#333333] mb-3">{step.title}</h3>
              <p className="text-[#666666]">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto bg-[#eff6ff] rounded-3xl p-12 text-center">
          <div className="text-4xl text-[#3b82f6] mb-6">"</div>
          <p className="text-xl text-[#333333] mb-8">
            This component builder has completely transformed my workflow. I can now build landing pages in minutes that
            used to take me hours to code from scratch.
          </p>
          <div className="flex items-center justify-center">
            <div className="w-12 h-12 bg-[#3b82f6] rounded-full mr-4"></div>
            <div className="text-left">
              <div className="font-medium text-[#333333]">Sarah Johnson</div>
              <div className="text-[#666666]">Frontend Developer</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-normal text-[#333333]">
            Ready to <span className="text-[#3b82f6]">Start Building?</span>
          </h2>
          <p className="mt-4 text-lg text-[#666666] max-w-2xl mx-auto mb-10">
            Join thousands of users who are already using our platform to build beautiful websites faster.
          </p>
          <Link href="/app/builder">
            <Button className="bg-[#3b82f6] text-white rounded-full px-8 py-6 text-lg hover:bg-[#2563eb] transition-colors">
              Start Building Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 lg:px-24 bg-[#f8f8f8] border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-[#3b82f6] rounded-full flex items-center justify-center mr-3">
                <Camera className="text-white" size={20} />
              </div>
              <span className="text-xl font-medium text-[#333333]">Web Component Builder</span>
            </div>
            <p className="text-[#666666] mb-4">
              Build beautiful websites without writing code. Our component builder makes web development fast and easy.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-[#333333] mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-[#666666] hover:text-[#3b82f6] transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#templates" className="text-[#666666] hover:text-[#3b82f6] transition-colors">
                  Templates
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-[#666666] hover:text-[#3b82f6] transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="text-[#666666] hover:text-[#3b82f6] transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-[#333333] mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#666666] hover:text-[#3b82f6] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-[#666666] hover:text-[#3b82f6] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-[#666666] hover:text-[#3b82f6] transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-[#666666] hover:text-[#3b82f6] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-[#333333] mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#666666] hover:text-[#3b82f6] transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-[#666666] hover:text-[#3b82f6] transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-[#666666] hover:text-[#3b82f6] transition-colors">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-gray-200">
          <p className="text-[#666666]">© {new Date().getFullYear()} Web Component Builder. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
