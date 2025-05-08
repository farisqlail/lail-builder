export default function GridFeatures() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Everything you need to build beautiful websites quickly and efficiently.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-primary rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Feature {item}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
