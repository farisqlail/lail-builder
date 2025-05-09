export function Testimonials() {
    return (
        <section className="py-16 bg-gray-50 dark:bg-gray-800" data-aos="fade-up">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Don't just take our word for it. See what developers and designers have to say about our platform.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full mr-4"></div>
                            <div>
                                <h4 className="font-semibold">Sarah Johnson</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Frontend Developer</p>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            "This tool has completely transformed my workflow. I can now build landing pages in minutes that used to
                            take me hours to code from scratch."
                        </p>
                        <div className="flex text-yellow-400">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span key={star}>★</span>
                            ))}
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full mr-4"></div>
                            <div>
                                <h4 className="font-semibold">Michael Chen</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">UX Designer</p>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            "As a designer who doesn't code, this tool is a game-changer. I can now create functional prototypes
                            that my clients can actually interact with."
                        </p>
                        <div className="flex text-yellow-400">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span key={star}>★</span>
                            ))}
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full mr-4"></div>
                            <div>
                                <h4 className="font-semibold">Alex Rodriguez</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Startup Founder</p>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            "We launched our startup's landing page in a single day using this tool. The code quality is excellent
                            and it saved us thousands in development costs."
                        </p>
                        <div className="flex text-yellow-400">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span key={star}>★</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}