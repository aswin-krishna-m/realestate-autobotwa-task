export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Beverly Hills, CA",
      review:
        "The team made our home buying experience incredibly smooth. They understood exactly what we were looking for and found us the perfect property within our budget. Highly recommended!",
    },
    {
      name: "Michael Chen",
      location: "Manhattan, NY",
      review:
        "Professional, knowledgeable, and genuinely caring. They guided us through every step of purchasing our first penthouse. The entire process was transparent and stress-free.",
    },
    {
      name: "Emily Rodriguez",
      location: "Miami, FL",
      review:
        "Exceptional service from start to finish. They helped us find our dream beachfront home and negotiated a great deal. We couldn't be happier with our new coastal estate!",
    },
  ]

  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Real stories from people who found their perfect home with us
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-card p-8 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-16 w-16 overflow-hidden rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <svg
                    className="h-8 w-8 text-primary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
              <p className="leading-relaxed text-muted-foreground italic">{testimonial.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
