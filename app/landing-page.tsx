import Link from "next/link"
import { Button } from "@nextui-org/react"
import { ArrowRight, Layers, Palette, Code, Zap, Monitor, Smartphone } from "lucide-react"

import { BuilderInterface } from "@/components/builder-interface"

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-bold text-xl">Lail Builder</div>
          <nav className="hidden md:flex space-x-6">
            <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              How It Works
            </a>
            <a href="#pricing" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Pricing
            </a>
          </nav>
          <div className="flex items-center space-x-3">
            <Link href="/builder">
              <Button color="primary">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Build Websites Without Writing Code</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Our component builder makes it simple to create beautiful, responsive websites by selecting and
                combining pre-built components.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/builder">
                  <Button color="primary" size="lg" endContent={<ArrowRight size={16} />}>
                    Start Building
                  </Button>
                </Link>
                <Button variant="bordered" size="lg">
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Web Component Builder Interface"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Everything you need to build beautiful websites quickly and efficiently.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <Layers className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Component Library</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Choose from a wide range of pre-built components including headers, heroes, features, testimonials, and
                more.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <Palette className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visual Preview</h3>
              <p className="text-gray-600 dark:text-gray-400">
                See exactly how your website will look as you build it with our real-time preview feature.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Code Export</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Export your design as clean, production-ready Next.js or HTML code that you can use in your projects.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Development</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Build complete websites in minutes instead of hours or days with our intuitive interface.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <Monitor className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
              <p className="text-gray-600 dark:text-gray-400">
                All components are fully responsive and look great on any device, from mobile to desktop.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Modern UI</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Create websites with modern, clean designs that follow the latest web design trends and best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Building a website with our component builder is simple and straightforward.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Select Components</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Browse our library of pre-built components and select the ones you want to use in your website.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Preview Your Design</h3>
              <p className="text-gray-600 dark:text-gray-400">
                See how your website will look in real-time as you add and arrange components in the preview area.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Export Your Code</h3>
              <p className="text-gray-600 dark:text-gray-400">
                When you're happy with your design, export the code and use it in your project or deploy it directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Don't just take our word for it. See what developers and designers have to say about our platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Frontend Developer</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                "This tool has completely transformed my workflow. I can now build landing pages in minutes that used to
                take me hours to code from scratch."
              </p>
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star}>★</span>
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Michael Chen</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">UX Designer</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                "As a designer who doesn't code, this tool is a game-changer. I can now create functional prototypes
                that my clients can actually interact with."
              </p>
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star}>★</span>
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Alex Rodriguez</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Startup Founder</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                "We launched our startup's landing page in a single day using this tool. The code quality is excellent
                and it saved us thousands in development costs."
              </p>
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star}>★</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Choose the plan that's right for you and start building today.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Free</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-gray-600 dark:text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  <span>Access to basic components</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  <span>Export as HTML</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  <span>1 project</span>
                </li>
              </ul>
              <Link href="/app/page">
                <Button color="primary" variant="flat" className="w-full">
                  Get Started
                </Button>
              </Link>
            </div>
            <div className="border-2 border-blue-600 dark:border-blue-500 rounded-lg p-8 -mt-4 shadow-lg relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-4">Pro</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">$29</span>
                <span className="text-gray-600 dark:text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  <span>Access to all components</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  <span>Export as HTML and Next.js</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  <span>10 projects</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  <span>Custom branding</span>
                </li>
              </ul>
              <Link href="/app/page">
                <Button color="primary" className="w-full">
                  Subscribe
                </Button>
              </Link>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">$99</span>
                <span className="text-gray-600 dark:text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  <span>Access to all components</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  <span>Export to any framework</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  <span>Unlimited projects</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  <span>Custom components</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  <span>Priority support</span>
                </li>
              </ul>
              <Link href="/app/page">
                <Button color="primary" variant="flat" className="w-full">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Building?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Join thousands of developers and designers who are already using our platform to build beautiful websites
            faster.
          </p>
          <Link href="/app/page">
            <Button size="lg" color="default" className="bg-white text-blue-600 hover:bg-gray-100">
              Get Started for Free
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Web Component Builder</h3>
              <p className="text-gray-400 mb-4">
                Build beautiful websites without writing code. Our component builder makes web development fast and
                easy.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="text-gray-400 hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-gray-400 hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Tutorials
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Changelog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Cookies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Licenses
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Web Component Builder. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
