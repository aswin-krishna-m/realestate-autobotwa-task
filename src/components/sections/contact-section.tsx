"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Have questions? We're here to help you find your perfect property
          </p>
        </div>

        {/* Contact Form */}
        <div className="mx-auto max-w-2xl">
          <form className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Name
                </label>
                <Input id="name" placeholder="Your full name" className="rounded-lg border-border bg-background" />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-foreground">
                  Phone
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Your phone number"
                  className="rounded-lg border-border bg-background"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Your email address"
                className="rounded-lg border-border bg-background"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell us about your property requirements..."
                rows={6}
                className="rounded-lg border-border bg-background resize-none"
              />
            </div>

            <Button type="submit" size="lg" className="w-full text-base font-semibold">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
