interface SimpleHeaderProps {
  textContent?: {
    companyName?: string;
    menuItems?: string[];
    buttonText?: string;
  };
}

export default function SimpleHeader({
  textContent = {
    companyName: "Company Name",
    menuItems: ["Home", "Features", "Pricing", "About"],
    buttonText: "Sign Up",
  },
}: SimpleHeaderProps) {
  const {
    companyName,
    menuItems = [], 
    buttonText = "Sign Up",
  } = textContent;

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-bold text-xl">{companyName}</div>
        <nav className="hidden md:flex space-x-6">
          {menuItems?.map((item, index) => (
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
          <a href="#" className="px-4 py-2 rounded-md bg-primary text-white">
            {buttonText}
          </a>
        </div>
      </div>
    </header>
  );
}
