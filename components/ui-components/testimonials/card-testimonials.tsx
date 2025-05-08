export default function CardTestimonials() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it. See what our users have to say about our platform.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Customer Name</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Company {item}</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam."
              </p>
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star}>★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
