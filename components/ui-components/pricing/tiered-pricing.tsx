export default function TieredPricing() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Choose Your Plan</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We have plans for businesses of all sizes. Select the one that works best for you.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          {["Starter", "Professional", "Enterprise"].map((plan, index) => (
            <div
              key={plan}
              className={`flex-1 bg-white dark:bg-gray-900 rounded-lg shadow-sm overflow-hidden ${
                index === 1 ? "lg:-mt-4 lg:-mb-4 lg:border-2 lg:border-primary" : ""
              }`}
            >
              {index === 1 && (
                <div className="bg-primary text-white text-center py-2 text-sm font-medium">Most Popular</div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">${index === 0 ? "29" : index === 1 ? "79" : "149"}</span>
                  <span className="text-gray-600 dark:text-gray-400">/month</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {index === 0
                    ? "Perfect for small businesses and freelancers"
                    : index === 1
                      ? "Ideal for growing businesses and agencies"
                      : "For large organizations with advanced needs"}
                </p>
                <ul className="space-y-3 mb-8">
                  {[1, 2, 3, 4, 5].slice(0, index + 3).map((feature) => (
                    <li key={feature} className="flex items-center">
                      <span className="mr-2 text-green-500">✓</span>
                      <span>Feature {feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-md ${
                    index === 1 ? "bg-primary text-white" : "border border-gray-300 dark:border-gray-700"
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
