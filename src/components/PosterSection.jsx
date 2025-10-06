"use client"

import { AnimatedSection } from "./AnimatedSection"

export function PosterSection({ currentEdition = "bangalore" }) {
  const isBangaloreEdition = currentEdition === "bangalore"

  const video = {
    src: "https://www.youtube.com/embed/2112-BiWqrA",
    title: isBangaloreEdition
      ? "Vizag - Candela Technology Summit 2025 Event Highlights Reel"
      : "Candela Technology Summit 2025 Event Highlights Reel",
    description: "Experience the cutting-edge technology and networking opportunities at the Candela Technology Summit.",
  }

  return (
    <section className="py-20 bg-gradient-to-br from-white to-green-50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Event Highlights</h2>
            <p className="text-xl text-green-600 max-w-2xl mx-auto">{video.description}</p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <div className="max-w-5xl mx-auto">
            {/* Main Video Display */}
            <div className="relative group mb-8">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl" style={{ paddingTop: "56.25%" }}>
                <iframe
                  src={video.src}
                  title={video.title}
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Video Title */}
              <div className="mt-4 text-center">
                <h3 className="text-2xl font-bold text-green-800 mb-2">{video.title}</h3>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}