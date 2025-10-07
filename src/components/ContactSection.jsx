import { useState, useEffect } from "react"
import { Mail, UserPlus, X, Radio, FileText } from "lucide-react"
import { AnimatedSection } from "./AnimatedSection"
import { Card, CardContent } from "./Card"

export function ContactSection({ currentEdition = "bangalore" }) {
  const isVizagEdition = currentEdition === "vizag"
  const [showNotification, setShowNotification] = useState(false)

  // Auto-close notification after 3 seconds
  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [showNotification])

  const handleRegisterClick = () => {
    setShowNotification(true)
  }

  return (
    <section id="contact" className="py-20 bg-white relative">
      {/* Coming Soon Notification - For Bangalore Edition */}
      {!isVizagEdition && showNotification && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[9999] w-11/12 max-w-md bg-green-600/90 backdrop-blur-md text-white p-4 rounded-xl shadow-2xl border border-white/20 animate-fade-in-down">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <Radio className="w-6 h-6 text-green-200" />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-base font-semibold">Coming Soon</p>
            </div>
            <button
              onClick={() => setShowNotification(false)}
              className="ml-4 p-1 rounded-md hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Close notification"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Get in Touch</h2>
            {isVizagEdition ? (
              <>
                <p className="text-xl text-green-600">This event is FREE for anyone attending online.</p>
                <p className="text-xl text-green-600 mt-2">In person attendance is by invitation only, so please contact us if you are interested in attending in person.</p>
              </>
            ) : (
              <>
                <p className="text-xl text-green-600">This event is FREE for anyone attending online or offline.</p>
                <p className="text-xl text-green-600 mt-2">Register now using the Register Now button below to secure your spot!</p>
              </>
            )}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <div className="max-w-md mx-auto">
            <Card className="border-green-100">
              <CardContent className="p-8 pt-10 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {isVizagEdition ? (
                    <Mail className="w-8 h-8 text-green-600" />
                  ) : (
                    <FileText className="w-8 h-8 text-green-600" />
                  )}
                </div>
                {isVizagEdition ? (
                  <>
                    <h3 className="font-semibold text-green-800 text-xl mb-4">Email Us</h3>
                    <p className="text-green-600 text-lg font-medium">info@candelatech.com</p>
                  </>
                ) : (
                  <button
                    onClick={handleRegisterClick}
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg flex items-center gap-2 mx-auto"
                  >
                    <UserPlus className="w-5 h-5" />
                    Register Now
                  </button>
                )}
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}