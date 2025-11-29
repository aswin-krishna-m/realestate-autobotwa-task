export function PropertyHighlightsSection() {
  const properties = [
    {
      image: "/villa.jpg",
      alt: "Modern Villa",
      title: "Modern Villa Oasis",
      description:
        "Stunning 4-bedroom villa with infinity pool, panoramic views, and contemporary architecture in prime location.",
      price: "$2,450,000",
    },
    {
      image: "/penthouse.jpg",
      alt: "Urban Penthouse",
      title: "Downtown Penthouse",
      description:
        "Luxurious 3-bedroom penthouse featuring floor-to-ceiling windows, rooftop terrace, and breathtaking city views.",
      price: "$1,890,000",
    },
    {
      image: "/mansion.jpg",
      alt: "Coastal Mansion",
      title: "Coastal Estate",
      description:
        "Elegant 5-bedroom beachfront estate with private beach access, wine cellar, and state-of-the-art amenities.",
      price: "$3,200,000",
    },
  ]

  return (
    <section className="bg-muted/30 py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Featured Properties
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Handpicked luxury homes and premium properties from our exclusive collection
          </p>
        </div>

        {/* Property Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-xl bg-card shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={property.image || "/placeholder.svg"}
                  alt={property.alt}
                  className="h-72 w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground">{property.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{property.description}</p>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-foreground">{property.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
