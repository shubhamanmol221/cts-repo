// Removed Wifi import as it's no longer needed for the logo
// import { Wifi } from 'lucide-react'
import { AnimatedSection } from "./AnimatedSection"

export function Footer() {
  return (
    <AnimatedSection>
      <footer className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              {/* Replaced the Wifi icon and text with the new logo image */}
              <img src="/images/cts_logo.png" alt="CTS 2025 Logo" className="h-10 w-auto" />
            </div>
            <p className="text-green-200 mb-6">Candela Technology Summit - Advancing Wireless Innovation</p>
            <p className="text-green-300 text-sm">© 2025 CTS Event — Powered by Candela Technologies</p>
          </div>
        </div>
      </footer>
    </AnimatedSection>
  )
}
