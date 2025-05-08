export default function SplitHero() {
  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Design Your Website With Ease</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Our component builder makes it simple to create beautiful, responsive websites without writing code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="px-6 py-3 rounded-md bg-primary text-white font-medium">Start Building</a>
              <a href="#" className="px-6 py-3 rounded-md border border-gray-300 dark:border-gray-700 font-medium">
                Watch Demo
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
  )
}
