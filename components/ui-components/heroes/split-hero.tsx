interface SplitHeroProps {
  textContent?: {
    heading?: string;
    subheading?: string;
    buttonText?: string[];
  };
}

export default function SplitHero({
  textContent = {
    heading: "Design Your Website With Ease",
    subheading: "Our component builder makes it simple to create beautiful, responsive websites without writing code.",
    buttonText: ["Start Building", "Watch Demo"], 
  },
}: SplitHeroProps) {
  const { heading, subheading, buttonText = ["Start Building", "Watch Demo"] } = textContent; 

  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{heading}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">{subheading}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="px-6 py-3 rounded-md bg-primary text-white font-medium"
              >
                {buttonText[0]}
              </a>
              <a
                href="#"
                className="px-6 py-3 rounded-md border border-gray-300 dark:border-gray-700 font-medium"
              >
                {buttonText[1]}
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-gray-200 dark:bg-gray-800 rounded-lg h-80 flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">Hero Image</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
