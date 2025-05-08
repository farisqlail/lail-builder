export default function FullHeader() {
  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
          <div className="text-sm text-gray-600 dark:text-gray-400">Contact: contact@example.com</div>
          <div className="flex space-x-4 text-sm">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              Support
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              FAQ
            </a>
          </div>
        </div>
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-full"></div>
            <div className="font-bold text-xl">Company Name</div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Home
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Products
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Services
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              About
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Blog
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Contact
            </a>
          </nav>
          <div className="flex items-center space-x-3">
            <button className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700">Login</button>
            <button className="px-4 py-2 rounded-md bg-primary text-white">Get Started</button>
          </div>
        </div>
      </div>
    </header>
  )
}
