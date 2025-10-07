import { useState, useEffect } from "react"
import { Mail, UserPlus, X, FileText } from "lucide-react"
import { AnimatedSection } from "./AnimatedSection"
import { Card, CardContent } from "./Card"

export function ContactSection({ currentEdition = "bangalore" }) {
  const isVizagEdition = currentEdition === "vizag"
  const [showNotification, setShowNotification] = useState(false)
  const [showRegistrationForm, setShowRegistrationForm] = useState(false)
  const [isFormLoading, setIsFormLoading] = useState(true)

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
    setShowRegistrationForm(true)
    setIsFormLoading(true)
  }

  return (
    <section id="contact" className="py-20 bg-white relative">
      {/* Registration Form Modal - For Bangalore Edition */}
      {!isVizagEdition && showRegistrationForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white/95 rounded-2xl shadow-2xl w-full max-w-4xl h-[90vh] flex flex-col overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50/80">
              <h3 className="text-lg font-semibold text-gray-800">Registration Form</h3>
              <button
                onClick={() => setShowRegistrationForm(false)}
                className="text-gray-500 hover:text-gray-800 hover:bg-gray-200 p-2 rounded-full"
                aria-label="Close registration form"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-grow relative">
              {isFormLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/80">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-gray-600 font-medium">Loading registration form...</p>
                  </div>
                </div>
              )}
              <iframe
                src="https://forms.gle/hoiNBEgdsSErKNVY7"
                title="Registration Form"
                width="100%"
                height="100%"
                className="border-none"
                onLoad={() => setIsFormLoading(false)}
              ></iframe>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4">
        {/* Coming Soon Section - For Bangalore Edition Only */}
        {!isVizagEdition && (
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-green-800 mb-6">Coming Soon</h2>
              <p className="text-xl text-green-600 mb-4">
                Speakers • Sessions • Panel Discussion
              </p>
            </div>
          </AnimatedSection>
        )}

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
                <p className="text-xl text-green-600">This event is FREE for anyone attending online or in-person</p>
                <p className="text-xl text-green-600 mt-2">Secure your spot at the event!</p>
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