export default function SimplePricing() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Choose the plan that's right for you and start building today.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {["Basic", "Pro", "Enterprise"].map((plan, index) => (
            <div
              key={plan}
              className={`border ${index === 1 ? "border-primary" : "border-gray-200 dark:border-gray-800"} rounded-lg p-8`}
            >
              <h3 className="text-2xl font-bold mb-4">{plan}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">${index === 0 ? "0" : index === 1 ? "49" : "99"}</span>
                <span className="text-gray-600 dark:text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  <span>Feature 1</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  <span>Feature 2</span>
                </li>
                {index >= 1 && (
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span>
                    <span>Feature 3</span>
                  </li>
                )}
                {index >= 2 && (
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span>
                    <span>Feature 4</span>
                  </li>
                )}
              </ul>
              <button
                className={`w-full py-2 rounded-md ${
                  index === 1 ? "bg-primary text-white" : "border border-gray-300 dark:border-gray-700"
                }`}
              >
                {index === 0 ? "Get Started" : "Subscribe"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
