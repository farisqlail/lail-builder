export default function CenteredHero() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Build Beautiful Websites Faster</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
          Create stunning, responsive websites with our component library. Mix and match to build your perfect site.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#" className="px-6 py-3 rounded-md bg-primary text-white font-medium">Get Started</a>
          <a href="#" className="px-6 py-3 rounded-md border border-gray-300 dark:border-gray-700 font-medium">
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
