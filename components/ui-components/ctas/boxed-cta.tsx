export default function BoxedCta() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="bg-primary/10 dark:bg-primary/5 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-3xl font-bold mb-4">Take Your Website to the Next Level</h2>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                Start building with our component library today and see the difference.
              </p>
            </div>
            <div className="flex-shrink-0">
              <button className="px-6 py-3 rounded-md bg-primary text-white font-medium">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
