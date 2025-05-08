export default function NavHeader() {
  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-md"></div>
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
              Features
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Pricing
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Contact
            </a>
          </nav>
          <div className="flex items-center space-x-3">
            <button className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700">Login</button>
            <button className="px-4 py-2 rounded-md bg-primary text-white">Sign Up</button>
          </div>
        </div>
      </div>
    </header>
  )
}
