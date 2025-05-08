export default function ListFeatures() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Platform</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              We provide the tools you need to build websites faster and more efficiently.
            </p>
            <ul className="space-y-4">
              {[1, 2, 3, 4].map((item) => (
                <li key={item} className="flex items-start">
                  <div className="mr-4 mt-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Feature {item}</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <div className="bg-gray-200 dark:bg-gray-800 rounded-lg h-80 flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">Feature Image</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
