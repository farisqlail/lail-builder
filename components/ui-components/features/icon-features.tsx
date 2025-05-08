export default function IconFeatures() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Key Features</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Our platform provides everything you need to build beautiful websites.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Feature {item}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
