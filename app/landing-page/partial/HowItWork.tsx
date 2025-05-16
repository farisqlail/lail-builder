export function HowItWork() {
    return (
        <section id="how-it-works" className="py-20 px-6 md:px-12 lg:px-24 bg-white">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-normal text-[#333333]">
                    How It <span className="text-[#3b82f6]">Works</span>
                </h2>
                <p className="mt-4 text-lg text-[#666666] max-w-2xl mx-auto">
                    Building a website with our component builder is simple and straightforward.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {[
                    {
                        step: "1",
                        title: "Choose Components",
                        description: "Browse our library of pre-built components and select the ones you want to use.",
                    },
                    {
                        step: "2",
                        title: "Customize Design",
                        description: "Personalize colors, text, and content to match your brand and vision.",
                    },
                    {
                        step: "3",
                        title: "Export Your Code",
                        description: "When you're happy with your design, export the code and use it in your project.",
                    },
                ].map((step, index) => (
                    <div key={index} className="text-center">
                        <div className="w-16 h-16 bg-[#eff6ff] rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="text-xl font-medium text-[#3b82f6]">{step.step}</span>
                        </div>
                        <h3 className="text-xl font-medium text-[#333333] mb-3">{step.title}</h3>
                        <p className="text-[#666666]">{step.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}