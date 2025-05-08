export default function SimpleFooter() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="font-bold text-xl">Company Name</div>
            <p className="text-gray-600 dark:text-gray-400 mt-1">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              Terms
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
