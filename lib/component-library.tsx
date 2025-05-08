// Header Components
import SimpleHeader from "@/components/ui-components/headers/simple-header"
import NavHeader from "@/components/ui-components/headers/nav-header"
import FullHeader from "@/components/ui-components/headers/full-header"

// Hero Components
import CenteredHero from "@/components/ui-components/heroes/centered-hero"
import SplitHero from "@/components/ui-components/heroes/split-hero"
import ImageHero from "@/components/ui-components/heroes/image-hero"

// Features Components
import GridFeatures from "@/components/ui-components/features/grid-features"
import ListFeatures from "@/components/ui-components/features/list-features"
import IconFeatures from "@/components/ui-components/features/icon-features"

// Footer Components
import SimpleFooter from "@/components/ui-components/footers/simple-footer"
import MultiColumnFooter from "@/components/ui-components/footers/multi-column-footer"
import SocialFooter from "@/components/ui-components/footers/social-footer"

// Testimonials Components
import CardTestimonials from "@/components/ui-components/testimonials/card-testimonials"
import QuoteTestimonials from "@/components/ui-components/testimonials/quote-testimonials"

// CTA Components
import SimpleCta from "@/components/ui-components/ctas/simple-cta"
import BoxedCta from "@/components/ui-components/ctas/boxed-cta"

// Pricing Components
import SimplePricing from "@/components/ui-components/pricing/simple-pricing"
import TieredPricing from "@/components/ui-components/pricing/tiered-pricing"

export const ComponentLibrary = {
  header: {
    "simple-header": SimpleHeader,
    "nav-header": NavHeader,
    "full-header": FullHeader,
  },
  hero: {
    "centered-hero": CenteredHero,
    "split-hero": SplitHero,
    "image-hero": ImageHero,
  },
  features: {
    "grid-features": GridFeatures,
    "list-features": ListFeatures,
    "icon-features": IconFeatures,
  },
  testimonials: {
    "card-testimonials": CardTestimonials,
    "quote-testimonials": QuoteTestimonials,
  },
  pricing: {
    "simple-pricing": SimplePricing,
    "tiered-pricing": TieredPricing,
  },
  cta: {
    "simple-cta": SimpleCta,
    "boxed-cta": BoxedCta,
  },
  footer: {
    "simple-footer": SimpleFooter,
    "multi-column-footer": MultiColumnFooter,
    "social-footer": SocialFooter,
  },
}
