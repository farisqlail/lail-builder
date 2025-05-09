export function HowItWork() {
    return (
        <section id="how-it-works" className="py-16 bg-white dark:bg-gray-900" data-aos="fade-up">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">How It Works</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Building a website with our component builder is simple and straightforward.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-xl font-bold text-blue-600 dark:text-blue-400">1</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Select Components</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Browse our library of pre-built components and select the ones you want to use in your website.
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-xl font-bold text-blue-600 dark:text-blue-400">2</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Preview Your Design</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            See how your website will look in real-time as you add and arrange components in the preview area.
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-xl font-bold text-blue-600 dark:text-blue-400">3</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Export Your Code</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            When you're happy with your design, export the code and use it in your project or deploy it directly.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}