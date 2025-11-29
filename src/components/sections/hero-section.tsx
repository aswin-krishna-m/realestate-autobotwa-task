import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/house.jpg')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            {/* Heading */}
            <h1 className="text-balance text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Find Your Dream Home Here
            </h1>

            {/* Subtext */}
            <p className="mt-6 text-pretty text-lg leading-relaxed text-white/90 sm:text-xl">
              Discover exceptional properties tailored to your lifestyle. From modern condos to luxury estates, we
              connect you with homes that match your vision of perfect living.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="bg-white text-black hover:bg-white/90 text-base font-semibold">
                Browse Properties
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-black text-base font-semibold"
              >
                Contact an Agent
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
