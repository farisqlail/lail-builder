export default function NavHeader({ textContent = {} }) {
  const {
    companyName = "Company Name",
    menuItems = ["Home", "Products", "Features", "Pricing", "Contact"],
    buttonText = ["Login", "Sign Up"],
  } = textContent

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-md"></div>
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
