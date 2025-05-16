export function Testimonials() {
    return (
        <section className="py-20 px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto bg-[#eff6ff] rounded-3xl p-12 text-center">
                <div className="text-4xl text-[#3b82f6] mb-6">"</div>
                <p className="text-xl text-[#333333] mb-8">
                    This component builder has completely transformed my workflow. I can now build landing pages in minutes that
                    used to take me hours to code from scratch.
                </p>
                <div className="flex items-center justify-center">
                    <div className="w-12 h-12 bg-[#3b82f6] rounded-full mr-4"></div>
                    <div className="text-left">
                        <div className="font-medium text-[#333333]">Sarah Johnson</div>
                        <div className="text-[#666666]">Frontend Developer</div>
                    </div>
                </div>
            </div>
        </section>
    )
}