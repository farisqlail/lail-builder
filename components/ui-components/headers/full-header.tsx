export default function FullHeader({ textContent = {} }) {
  const {
    companyName = "Company Name",
    contactInfo = "contact@example.com",
    topMenuItems = ["Support", "FAQ"],
    menuItems = ["Home", "Products", "Services", "About", "Blog", "Contact"],
    buttonText = ["Login", "Get Started"],
  } = textContent

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
          <div className="text-sm text-gray-600 dark:text-gray-400">Contact: {contactInfo}</div>
          <div className="flex space-x-4 text-sm">
            {topMenuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-full"></div>
            <div className="font-bold text-xl">{companyName}</div>
          </div>
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center space-x-3">
            <a href="#" className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700">
              {buttonText[0]}
            </a>
            <a href="#" className="px-4 py-2 rounded-md bg-primary text-white">{buttonText[1]}</a>
          </div>
        </div>
      </div>
    </header>
  )
}
