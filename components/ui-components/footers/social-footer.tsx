export default function SocialFooter() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center">
          <div className="font-bold text-2xl mb-4">Company Name</div>
          <div className="flex space-x-8 mb-8">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              Home
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              Features
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              Pricing
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              About
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              Contact
            </a>
          </div>
          <div className="flex space-x-6 mb-8">
            <a
              href="#"
              className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center"
            >
              FB
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center"
            >
              TW
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center"
            >
              IG
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center"
            >
              LI
            </a>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-center">
            © {new Date().getFullYear()} Company Name. All rights reserved.
            <br />
            123 Street Name, City, Country
          </p>
        </div>
      </div>
    </footer>
  )
}
