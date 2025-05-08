export default function SimpleHeader() {
  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-bold text-xl">Company Name</div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            Home
          </a>
          <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            Features
          </a>
          <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            Pricing
          </a>
          <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            About
          </a>
        </nav>
        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 rounded-md bg-primary text-white">Sign Up</button>
        </div>
      </div>
    </header>
  )
}
