interface ImageHeroProps {
  textContent?: {
    heading?: string;
    subheading?: string;
    buttonText?: string[]; 
  };
}

export default function ImageHero({
  textContent = {
    heading: "Create Without Limits",
    subheading: "Our component library gives you the building blocks to create any website you can imagine.",
    buttonText: ["Get Started", "View Components"], 
  },
}: ImageHeroProps) {
  const { heading, subheading, buttonText = ["Get Started", "View Components"] } = textContent;

  return (
    <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gray-900/60 z-10"></div>
      <div className="absolute inset-0 bg-gray-300 dark:bg-gray-800 flex items-center justify-center">
        <span className="text-gray-500 dark:text-gray-400">Background Image</span>
      </div>
      <div className="container mx-auto px-4 relative z-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{heading}</h1>
        <p className="text-xl max-w-3xl mx-auto mb-8">{subheading}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#" className="px-6 py-3 rounded-md bg-white text-gray-900 font-medium">
            {buttonText[0]}
          </a>
          <a href="#" className="px-6 py-3 rounded-md border border-white font-medium">
            {buttonText[1]}
          </a>
        </div>
      </div>
    </section>
  );
}
