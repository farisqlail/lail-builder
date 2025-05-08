export default function SimpleCta() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Join thousands of users who are already building beautiful websites with our platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-6 py-3 rounded-md bg-primary text-white font-medium">Start Building Now</button>
            <button className="px-6 py-3 rounded-md border border-gray-300 dark:border-gray-700 font-medium">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
