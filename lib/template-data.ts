export interface TemplateComponent {
  id: string
  category: string
  name: string
}

export interface Template {
  id: string
  name: string
  description: string
  category: string
  tags: string[]
  previewImage: string
  components: TemplateComponent[]
  features: string[]
  primaryColor?: string
  configuration: {
    header: string | null
    hero: string | null
    features: string | null
    testimonials: string | null
    pricing: string | null
    cta: string | null
    footer: string | null
  }
  customTextContent: Record<string, any>
}

export const templates: Template[] = [
  {
    id: "business-pro",
    name: "Business Pro",
    description:
      "A professional template for businesses looking to establish a strong online presence with a clean and modern design.",
    category: "business",
    tags: ["professional", "corporate", "modern"],
    previewImage: "/assets/template-thumbnail/business.png",
    primaryColor: "#3b82f6", // Blue
    components: [
      { id: "nav-header", category: "header", name: "Navigation Header" },
      { id: "split-hero", category: "hero", name: "Split Hero" },
      { id: "grid-features", category: "features", name: "Grid Features" },
      { id: "card-testimonials", category: "testimonials", name: "Card Testimonials" },
      { id: "simple-pricing", category: "pricing", name: "Simple Pricing" },
      { id: "boxed-cta", category: "cta", name: "Boxed CTA" },
      { id: "multi-column-footer", category: "footer", name: "Multi-column Footer" },
    ],
    features: [
      "Responsive design for all devices",
      "Customizable color scheme",
      "SEO optimized structure",
      "Fast loading performance",
      "Easy to edit content",
    ],
    configuration: {
      header: "nav-header",
      hero: "split-hero",
      features: "grid-features",
      testimonials: "card-testimonials",
      pricing: "simple-pricing",
      cta: "boxed-cta",
      footer: "multi-column-footer",
    },
    customTextContent: {
      "header-nav-header": {
        companyName: "Business Pro",
        menuItems: ["Home", "Services", "About", "Pricing", "Contact"],
        buttonText: ["Login", "Get Started"],
      },
      "hero-split-hero": {
        heading: "Grow Your Business with Confidence",
        subheading: "Our platform provides all the tools you need to scale your business and reach new customers.",
        buttonText: ["Get Started", "Learn More"],
      },
      "features-grid-features": {
        heading: "Our Services",
        subheading: "We offer a comprehensive suite of business solutions to help you succeed.",
        features: [
          "Strategic Consulting",
          "Digital Marketing",
          "Web Development",
          "Brand Identity",
          "Analytics",
          "Customer Support",
        ],
        featureDescriptions: [
          "Expert guidance to help you make informed business decisions and develop effective strategies.",
          "Comprehensive digital marketing services to increase your online visibility and reach.",
          "Custom web development solutions tailored to your specific business needs.",
          "Professional brand identity design to help you stand out in a competitive market.",
          "Data-driven insights to help you understand your customers and optimize your business.",
          "Dedicated support to ensure your success and satisfaction.",
        ],
      },
      "testimonials-card-testimonials": {
        heading: "What Our Clients Say",
        subheading: "Don't just take our word for it. Here's what our clients have to say about working with us.",
        testimonials: [
          {
            name: "Sarah Johnson",
            company: "Tech Innovations",
            text: "Working with Business Pro transformed our online presence. Their strategic approach and attention to detail exceeded our expectations.",
          },
          {
            name: "Michael Chen",
            company: "Growth Partners",
            text: "The team at Business Pro delivered exceptional results. Our conversion rates have increased by 45% since implementing their recommendations.",
          },
          {
            name: "Emily Rodriguez",
            company: "Startup Ventures",
            text: "As a startup, we needed a partner who understood our vision. Business Pro not only understood it but helped us refine and execute it perfectly.",
          },
        ],
      },
      "pricing-simple-pricing": {
        heading: "Simple, Transparent Pricing",
        subheading: "Choose the plan that's right for your business.",
        plans: [
          {
            name: "Starter",
            price: "49",
            features: ["5 Projects", "Basic Analytics", "24/7 Support", "1 Team Member"],
            buttonText: "Get Started",
          },
          {
            name: "Professional",
            price: "99",
            features: [
              "15 Projects",
              "Advanced Analytics",
              "24/7 Priority Support",
              "5 Team Members",
              "Custom Reporting",
            ],
            buttonText: "Subscribe",
          },
          {
            name: "Enterprise",
            price: "249",
            features: [
              "Unlimited Projects",
              "Premium Analytics",
              "24/7 VIP Support",
              "Unlimited Team Members",
              "Custom Reporting",
              "Dedicated Account Manager",
            ],
            buttonText: "Contact Sales",
          },
        ],
      },
      "cta-boxed-cta": {
        heading: "Ready to Take Your Business to the Next Level?",
        subheading: "Join thousands of successful businesses that trust our platform.",
        buttonText: "Start Your Free Trial",
      },
      "footer-multi-column-footer": {
        companyName: "Business Pro",
        companyDescription: "Helping businesses grow and succeed with innovative solutions and expert guidance.",
        socialLinks: ["FB", "TW", "IG", "LI"],
        columns: [
          {
            title: "Services",
            links: ["Consulting", "Marketing", "Development", "Design", "Analytics"],
          },
          {
            title: "Company",
            links: ["About", "Team", "Careers", "Blog", "Contact"],
          },
          {
            title: "Legal",
            links: ["Terms", "Privacy", "Cookies", "Licenses"],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Business Pro. All rights reserved.`,
      },
    },
  },
  {
    id: "startup-launch",
    name: "Startup Launch",
    description: "Perfect for startups and new product launches with a focus on conversion and user engagement.",
    category: "startup",
    tags: ["modern", "conversion", "product"],
    previewImage: "/assets/template-thumbnail/startup.png",
    primaryColor: "#10b981", // Green
    components: [
      { id: "simple-header", category: "header", name: "Simple Header" },
      { id: "centered-hero", category: "hero", name: "Centered Hero" },
      { id: "icon-features", category: "features", name: "Icon Features" },
      { id: "quote-testimonials", category: "testimonials", name: "Quote Testimonials" },
      { id: "simple-cta", category: "cta", name: "Simple CTA" },
      { id: "simple-footer", category: "footer", name: "Simple Footer" },
    ],
    features: [
      "Conversion-focused design",
      "Mobile-first approach",
      "Fast loading time",
      "Clear call-to-actions",
      "Minimalist aesthetic",
    ],
    configuration: {
      header: "simple-header",
      hero: "centered-hero",
      features: "icon-features",
      testimonials: "quote-testimonials",
      pricing: null,
      cta: "simple-cta",
      footer: "simple-footer",
    },
    customTextContent: {
      "header-simple-header": {
        companyName: "LaunchPad",
        menuItems: ["Features", "How It Works", "Pricing", "FAQ"],
        buttonText: "Sign Up Free",
      },
      "hero-centered-hero": {
        heading: "Launch Your Idea Faster",
        subheading: "The all-in-one platform for startups to build, launch, and grow their products without coding.",
        buttonText: ["Get Started Free", "Watch Demo"],
      },
      "features-icon-features": {
        heading: "Why Choose LaunchPad",
        subheading: "Our platform provides everything you need to go from idea to launch in record time.",
        features: ["No-Code Builder", "Analytics Dashboard", "User Management", "Payment Processing"],
        featureDescriptions: [
          "Build your product without writing a single line of code using our intuitive drag-and-drop interface.",
          "Track user behavior and conversion metrics with our comprehensive analytics dashboard.",
          "Manage users, roles, and permissions with our simple user management system.",
          "Accept payments globally with our integrated payment processing system.",
        ],
      },
      "testimonials-quote-testimonials": {
        quote:
          "LaunchPad helped us go from idea to paying customers in just 3 weeks. Their platform saved us months of development time and thousands in costs.",
        author: "Alex Rivera",
        position: "Founder, TechStart",
      },
      "cta-simple-cta": {
        heading: "Ready to Launch Your Idea?",
        subheading: "Join thousands of founders who have successfully launched with our platform.",
        buttonText: ["Start Free Trial", "Schedule Demo"],
      },
      "footer-simple-footer": {
        companyName: "LaunchPad",
        menuItems: ["Terms", "Privacy", "Contact"],
        copyright: `© ${new Date().getFullYear()} LaunchPad, Inc. All rights reserved.`,
      },
    },
  },
  {
    id: "creative-portfolio",
    name: "Creative Portfolio",
    description:
      "Showcase your creative work with this visually stunning portfolio template designed for artists, designers, and photographers.",
    category: "portfolio",
    tags: ["creative", "visual", "portfolio"],
    previewImage: "/assets/template-thumbnail/portfolio.png",
    primaryColor: "#8b5cf6", // Purple
    components: [
      { id: "simple-header", category: "header", name: "Simple Header" },
      { id: "image-hero", category: "hero", name: "Image Hero" },
      { id: "grid-features", category: "features", name: "Grid Features" },
      { id: "simple-cta", category: "cta", name: "Simple CTA" },
      { id: "social-footer", category: "footer", name: "Social Footer" },
    ],
    features: [
      "Visual-focused design",
      "Portfolio showcase",
      "Minimal and clean aesthetic",
      "Optimized for images",
      "Social media integration",
    ],
    configuration: {
      header: "simple-header",
      hero: "image-hero",
      features: "grid-features",
      testimonials: null,
      pricing: null,
      cta: "simple-cta",
      footer: "social-footer",
    },
    customTextContent: {
      "header-simple-header": {
        companyName: "Alex Morgan",
        menuItems: ["Portfolio", "About", "Process", "Contact"],
        buttonText: "Hire Me",
      },
      "hero-image-hero": {
        heading: "Creative Design Solutions",
        subheading: "Award-winning designer specializing in brand identity, web design, and digital experiences.",
        buttonText: ["View My Work", "Get in Touch"],
      },
      "features-grid-features": {
        heading: "Featured Projects",
        subheading: "A selection of my recent work across various industries and design disciplines.",
        features: [
          "Brand Refresh",
          "E-commerce Website",
          "Mobile App Design",
          "Marketing Campaign",
          "Logo Collection",
          "UI/UX Design System",
        ],
        featureDescriptions: [
          "Complete brand refresh for a tech startup, including logo, color palette, typography, and brand guidelines.",
          "Custom e-commerce website design and development for a boutique fashion retailer.",
          "User-centered mobile app design for a health and wellness platform.",
          "Integrated marketing campaign including digital and print assets for product launch.",
          "Collection of logo designs for various clients across different industries.",
          "Comprehensive UI/UX design system for a SaaS platform.",
        ],
      },
      "cta-simple-cta": {
        heading: "Let's Work Together",
        subheading: "I'm currently available for freelance projects and collaborations.",
        buttonText: ["Contact Me", "Download Resume"],
      },
      "footer-social-footer": {
        companyName: "Alex Morgan Design",
        menuItems: ["Portfolio", "About", "Process", "Contact", "Blog"],
        socialLinks: ["Behance", "Dribbble", "Instagram", "LinkedIn"],
        copyright: `© ${new Date().getFullYear()} Alex Morgan. All rights reserved.`,
        address: "New York, NY",
      },
    },
  },
  {
    id: "ecommerce-store",
    name: "E-commerce Store",
    description:
      "A complete e-commerce template with product showcases, features, and conversion elements designed to drive sales.",
    category: "ecommerce",
    tags: ["shop", "retail", "products"],
    previewImage: "/assets/template-thumbnail/ecommerce.png",
    primaryColor: "#ec4899", // Pink
    components: [
      { id: "full-header", category: "header", name: "Full Header" },
      { id: "split-hero", category: "hero", name: "Split Hero" },
      { id: "list-features", category: "features", name: "List Features" },
      { id: "card-testimonials", category: "testimonials", name: "Card Testimonials" },
      { id: "boxed-cta", category: "cta", name: "Boxed CTA" },
      { id: "multi-column-footer", category: "footer", name: "Multi-column Footer" },
    ],
    features: [
      "Product showcase",
      "Conversion-optimized layout",
      "Trust elements",
      "Mobile shopping experience",
      "Fast checkout flow",
    ],
    configuration: {
      header: "full-header",
      hero: "split-hero",
      features: "list-features",
      testimonials: "card-testimonials",
      pricing: null,
      cta: "boxed-cta",
      footer: "multi-column-footer",
    },
    customTextContent: {
      "header-full-header": {
        companyName: "ModernShop",
        contactInfo: "support@modernshop.com",
        topMenuItems: ["Track Order", "Help"],
        menuItems: ["Home", "Shop", "Collections", "New Arrivals", "Sale", "About"],
        buttonText: ["Account", "Cart (0)"],
      },
      "hero-split-hero": {
        heading: "Summer Collection 2025",
        subheading: "Discover our latest collection of premium products designed for comfort and style.",
        buttonText: ["Shop Now", "View Lookbook"],
      },
      "features-list-features": {
        heading: "Why Shop With Us",
        subheading: "We're committed to providing the best shopping experience for our customers.",
        features: ["Premium Quality", "Fast Shipping", "Easy Returns", "Secure Checkout"],
        featureDescriptions: [
          "All our products are made with premium materials and crafted with attention to detail.",
          "Free shipping on all orders over $50. Most orders ship within 24 hours.",
          "Not satisfied? Return any item within 30 days for a full refund.",
          "Shop with confidence using our secure and encrypted checkout process.",
        ],
      },
      "testimonials-card-testimonials": {
        heading: "Customer Reviews",
        subheading: "See what our customers have to say about their shopping experience.",
        testimonials: [
          {
            name: "Jessica T.",
            company: "Verified Buyer",
            text: "The quality of the products exceeded my expectations. Will definitely be ordering again!",
          },
          {
            name: "Mark R.",
            company: "Verified Buyer",
            text: "Fast shipping and excellent customer service. The return process was smooth and hassle-free.",
          },
          {
            name: "Sophia L.",
            company: "Verified Buyer",
            text: "Love my new purchase! The sizing guide was spot on and the quality is amazing for the price.",
          },
        ],
      },
      "cta-boxed-cta": {
        heading: "Join Our Newsletter",
        subheading: "Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.",
        buttonText: "Subscribe",
      },
      "footer-multi-column-footer": {
        companyName: "ModernShop",
        companyDescription: "Premium quality products for modern living. Designed with comfort and style in mind.",
        socialLinks: ["FB", "IG", "Pinterest", "TikTok"],
        columns: [
          {
            title: "Shop",
            links: ["All Products", "New Arrivals", "Best Sellers", "Sale", "Gift Cards"],
          },
          {
            title: "Help",
            links: ["Shipping", "Returns", "Sizing Guide", "FAQs", "Contact Us"],
          },
          {
            title: "Company",
            links: ["About Us", "Sustainability", "Careers", "Press", "Affiliates"],
          },
        ],
        copyright: `© ${new Date().getFullYear()} ModernShop. All rights reserved.`,
      },
    },
  },
  {
    id: "saas-platform",
    name: "SaaS Platform",
    description: "Designed for software-as-a-service companies with a focus on features, benefits, and conversion.",
    category: "saas",
    tags: ["software", "tech", "modern"],
    previewImage: "/assets/template-thumbnail/saas.png",
    primaryColor: "#6366f1", // Indigo
    components: [
      { id: "nav-header", category: "header", name: "Navigation Header" },
      { id: "centered-hero", category: "hero", name: "Centered Hero" },
      { id: "icon-features", category: "features", name: "Icon Features" },
      { id: "tiered-pricing", category: "pricing", name: "Tiered Pricing" },
      { id: "quote-testimonials", category: "testimonials", name: "Quote Testimonials" },
      { id: "simple-cta", category: "cta", name: "Simple CTA" },
      { id: "multi-column-footer", category: "footer", name: "Multi-column Footer" },
    ],
    features: [
      "Feature-focused design",
      "Clear value proposition",
      "Pricing comparison",
      "Social proof elements",
      "Technical details",
    ],
    configuration: {
      header: "nav-header",
      hero: "centered-hero",
      features: "icon-features",
      testimonials: "quote-testimonials",
      pricing: "tiered-pricing",
      cta: "simple-cta",
      footer: "multi-column-footer",
    },
    customTextContent: {
      "header-nav-header": {
        companyName: "CloudFlow",
        menuItems: ["Features", "Solutions", "Pricing", "Resources", "Customers"],
        buttonText: ["Login", "Start Free Trial"],
      },
      "hero-centered-hero": {
        heading: "Streamline Your Workflow",
        subheading:
          "CloudFlow helps teams collaborate, manage projects, and deliver results faster with our all-in-one platform.",
        buttonText: ["Start Free Trial", "Schedule Demo"],
      },
      "features-icon-features": {
        heading: "Powerful Features",
        subheading: "Everything you need to manage your team's work in one place.",
        features: ["Task Management", "Team Collaboration", "Time Tracking", "Reporting"],
        featureDescriptions: [
          "Create, assign, and track tasks with customizable workflows and automation.",
          "Real-time collaboration with comments, file sharing, and integrated messaging.",
          "Track time spent on tasks and projects with detailed reporting and billing integration.",
          "Generate comprehensive reports on team performance, project status, and resource allocation.",
        ],
      },
      "pricing-tiered-pricing": {
        heading: "Simple, Transparent Pricing",
        subheading: "Choose the plan that's right for your team.",
        plans: [
          {
            name: "Starter",
            price: "12",
            description: "Perfect for small teams and startups",
            features: ["Up to 5 users", "Basic features", "5GB storage", "Email support"],
            buttonText: "Start Free Trial",
          },
          {
            name: "Professional",
            price: "29",
            description: "Ideal for growing teams",
            features: ["Up to 20 users", "Advanced features", "25GB storage", "Priority support", "API access"],
            buttonText: "Start Free Trial",
          },
          {
            name: "Enterprise",
            price: "79",
            description: "For large organizations",
            features: [
              "Unlimited users",
              "Premium features",
              "Unlimited storage",
              "24/7 support",
              "Custom integrations",
              "Dedicated account manager",
            ],
            buttonText: "Contact Sales",
          },
        ],
      },
      "testimonials-quote-testimonials": {
        quote:
          "CloudFlow has transformed how our team works. We've reduced meeting time by 30% and increased project delivery speed by 25%. It's become an essential part of our daily workflow.",
        author: "David Wilson",
        position: "CTO, TechInnovate",
      },
      "cta-simple-cta": {
        heading: "Ready to Transform Your Workflow?",
        subheading: "Join over 10,000 teams already using CloudFlow to streamline their work.",
        buttonText: ["Start Free Trial", "Schedule Demo"],
      },
      "footer-multi-column-footer": {
        companyName: "CloudFlow",
        companyDescription:
          "The all-in-one platform for teams to collaborate, manage projects, and deliver results faster.",
        socialLinks: ["Twitter", "LinkedIn", "GitHub", "YouTube"],
        columns: [
          {
            title: "Product",
            links: ["Features", "Integrations", "Pricing", "Roadmap", "Updates"],
          },
          {
            title: "Resources",
            links: ["Documentation", "Guides", "API", "Community", "Webinars"],
          },
          {
            title: "Company",
            links: ["About", "Customers", "Careers", "Blog", "Contact"],
          },
        ],
        copyright: `© ${new Date().getFullYear()} CloudFlow, Inc. All rights reserved.`,
      },
    },
  },
  {
    id: "nonprofit-org",
    name: "Nonprofit Organization",
    description:
      "Designed for nonprofits and charitable organizations with a focus on mission, impact, and donation conversion.",
    category: "nonprofit",
    tags: ["charity", "cause", "community"],
    previewImage: "/assets/template-thumbnail/non-profit.png",
    primaryColor: "#f59e0b", // Amber
    components: [
      { id: "simple-header", category: "header", name: "Simple Header" },
      { id: "image-hero", category: "hero", name: "Image Hero" },
      { id: "list-features", category: "features", name: "List Features" },
      { id: "card-testimonials", category: "testimonials", name: "Card Testimonials" },
      { id: "boxed-cta", category: "cta", name: "Boxed CTA" },
      { id: "social-footer", category: "footer", name: "Social Footer" },
    ],
    features: [
      "Mission-focused design",
      "Impact storytelling",
      "Donation elements",
      "Volunteer opportunities",
      "Event promotion",
    ],
    configuration: {
      header: "simple-header",
      hero: "image-hero",
      features: "list-features",
      testimonials: "card-testimonials",
      pricing: null,
      cta: "boxed-cta",
      footer: "social-footer",
    },
    customTextContent: {
      "header-simple-header": {
        companyName: "EarthGuardian",
        menuItems: ["Our Mission", "Programs", "Get Involved", "Impact", "Events"],
        buttonText: "Donate Now",
      },
      "hero-image-hero": {
        heading: "Protecting Our Planet For Future Generations",
        subheading:
          "Join our global community of changemakers working to preserve natural habitats and combat climate change.",
        buttonText: ["Donate Now", "Learn More"],
      },
      "features-list-features": {
        heading: "Our Impact",
        subheading: "Through the support of our donors and volunteers, we've made significant progress in our mission.",
        features: ["Forest Conservation", "Ocean Cleanup", "Renewable Energy", "Education Programs"],
        featureDescriptions: [
          "Protected over 500,000 acres of critical forest habitat across 12 countries.",
          "Removed 250 tons of plastic from oceans and coastlines through community cleanup initiatives.",
          "Funded 75 renewable energy projects in underserved communities, reducing carbon emissions.",
          "Educated 100,000+ students about environmental conservation through our school programs.",
        ],
      },
      "testimonials-card-testimonials": {
        heading: "Voices of Change",
        subheading: "Hear from the people who are making a difference in our community.",
        testimonials: [
          {
            name: "Maria Gonzalez",
            company: "Volunteer",
            text: "Volunteering with EarthGuardian has been one of the most rewarding experiences of my life. I've seen firsthand the impact we're making in local communities.",
          },
          {
            name: "Dr. James Chen",
            company: "Environmental Scientist",
            text: "The data-driven approach that EarthGuardian takes to conservation is what sets them apart. Their programs are based on sound science and measurable outcomes.",
          },
          {
            name: "Sarah Johnson",
            company: "Monthly Donor",
            text: "I've been supporting EarthGuardian for five years now, and I'm continually impressed by their transparency and the tangible results they achieve with donations.",
          },
        ],
      },
      "cta-boxed-cta": {
        heading: "Make a Difference Today",
        subheading: "Your support helps us continue our vital work protecting the planet for future generations.",
        buttonText: "Donate Now",
      },
      "footer-social-footer": {
        companyName: "EarthGuardian",
        menuItems: ["About Us", "Programs", "Donate", "Volunteer", "Contact"],
        socialLinks: ["FB", "TW", "IG", "YouTube"],
        copyright: `© ${new Date().getFullYear()} EarthGuardian. All rights reserved.`,
        address: "123 Conservation Way, Portland, OR 97201",
      },
    },
  },
]
