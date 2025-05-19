import { templates } from "@/lib/template-data"

export interface AIGeneratorFormData {
  businessName: string
  businessType: string
  businessDescription: string
  colorScheme: string
  selectedFeatures: string[]
  additionalInfo?: string
}

export function generateWebsiteConfiguration(formData: AIGeneratorFormData) {
  const { businessName, businessType, businessDescription, colorScheme, selectedFeatures, additionalInfo } = formData

  // Map business types to template categories
  const categoryMap: Record<string, string> = {
    ecommerce: "ecommerce",
    services: "business",
    portfolio: "portfolio",
    saas: "saas",
    blog: "business",
    nonprofit: "nonprofit",
    restaurant: "business",
    education: "business",
    realestate: "business",
    health: "business",
  }

  // Find templates that match the business category
  const category = categoryMap[businessType] || "business"
  const matchingTemplates = templates.filter((t) => t.category === category)

  // If no direct match, use any template
  if (matchingTemplates.length === 0) {
    return {
      templateId: templates[0].id,
      primaryColor: colorScheme,
    }
  }

  // Score each template based on features
  const scoredTemplates = matchingTemplates.map((template) => {
    let score = 0

    // Check if template has testimonials
    if (
      selectedFeatures.includes("testimonials") &&
      (template.configuration.testimonials === "card-testimonials" ||
        template.configuration.testimonials === "quote-testimonials")
    ) {
      score += 2
    }

    // Check if template has pricing
    if (
      selectedFeatures.includes("pricing") &&
      (template.configuration.pricing === "simple-pricing" || template.configuration.pricing === "tiered-pricing")
    ) {
      score += 2
    }

    // Check if template has CTA
    if (
      selectedFeatures.includes("cta") &&
      (template.configuration.cta === "simple-cta" || template.configuration.cta === "boxed-cta")
    ) {
      score += 2
    }

    // Bonus for templates with more components that match user needs
    const componentCount = Object.values(template.configuration).filter(Boolean).length
    score += componentCount * 0.5

    return { template, score }
  })

  // Sort by score and get the highest
  scoredTemplates.sort((a, b) => b.score - a.score)

  // Generate custom text content based on user inputs
  const customTextContent = generateCustomTextContent(businessName, businessDescription, businessType, selectedFeatures)

  return {
    templateId: scoredTemplates[0].template.id,
    primaryColor: colorScheme,
    customTextContent,
  }
}

function generateCustomTextContent(
  businessName: string,
  businessDescription: string,
  businessType: string,
  selectedFeatures: string[],
) {
  // This would be more sophisticated in a real implementation
  // Here we're just doing some basic customization

  const customContent: Record<string, any> = {}

  // Header customization
  customContent["header-simple-header"] = {
    companyName: businessName,
    menuItems: ["Home", "About", "Services", "Contact"],
    buttonText: "Get Started",
  }

  customContent["header-nav-header"] = {
    companyName: businessName,
    menuItems: ["Home", "About", "Services", "Contact"],
    buttonText: ["Login", "Get Started"],
  }

  // Hero customization
  const heroHeading = getBusinessTypeHeading(businessType)

  customContent["hero-centered-hero"] = {
    heading: heroHeading,
    subheading: businessDescription || "We provide high-quality services tailored to your specific needs.",
    buttonText: ["Get Started", "Learn More"],
  }

  customContent["hero-split-hero"] = {
    heading: heroHeading,
    subheading: businessDescription || "We provide high-quality services tailored to your specific needs.",
    buttonText: ["Get Started", "Learn More"],
  }

  return customContent
}

function getBusinessTypeHeading(businessType: string): string {
  switch (businessType) {
    case "ecommerce":
      return "Quality Products for Every Need"
    case "services":
      return "Professional Services You Can Trust"
    case "portfolio":
      return "Showcasing Creative Excellence"
    case "saas":
      return "Simplify Your Workflow with Our Software"
    case "blog":
      return "Insights and Ideas for Your Journey"
    case "nonprofit":
      return "Making a Difference Together"
    case "restaurant":
      return "Delicious Food, Memorable Experiences"
    case "education":
      return "Knowledge and Growth for All"
    case "realestate":
      return "Finding Your Perfect Property"
    case "health":
      return "Your Health, Our Priority"
    default:
      return "Welcome to Our Website"
  }
}
