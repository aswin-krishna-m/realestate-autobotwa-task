import { Button } from "@/components/ui/button"

export function PricingSection() {
  const plans = [
    {
      name: "Explorer",
      price: "$29",
      features: ["Access to all property listings", "Basic search filters", "Email support", "Save up to 5 favorites"],
      isPopular: false,
    },
    {
      name: "Professional",
      price: "$79",
      features: [
        "Everything in Explorer",
        "Advanced search & AI recommendations",
        "Priority phone & chat support",
        "Unlimited saved properties",
        "Virtual tour scheduling",
        "Market insights & analytics",
      ],
      isPopular: true,
    },
    {
      name: "Premium",
      price: "$149",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Exclusive off-market listings",
        "Investment analysis tools",
        "First access to new properties",
        "Personalized property tours",
      ],
      isPopular: false,
    },
  ]

  return (
    <section className="bg-muted/30 py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Membership Plans
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Choose the perfect plan for your real estate journey
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 shadow-sm ${
                plan.isPopular
                  ? "border-4 border-primary bg-card shadow-xl scale-105"
                  : "border-2 border-border bg-card"
              }`}
            >
              {plan.isPopular && (
                <div className="mb-4 inline-block rounded-full bg-primary px-4 py-1 text-sm font-semibold text-primary-foreground">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <svg
                      className="h-6 w-6 text-primary flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.isPopular ? "default" : "outline"}
                className={`w-full ${!plan.isPopular && "bg-transparent"}`}
                size="lg"
              >
                {plan.isPopular ? "Get Started" : "Get Started"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
