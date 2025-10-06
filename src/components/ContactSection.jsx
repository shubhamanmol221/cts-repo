import { Mail } from "lucide-react"
import { AnimatedSection } from "./AnimatedSection"
import { Card, CardContent } from "./Card"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Get in Touch</h2>
            <p className="text-xl text-green-600">This event is FREE for anyone attending online.</p>
            <p className="text-xl text-green-600 mt-2">In person attendance is by invitation only, so please contact us if you are interested in attending in person.</p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <div className="max-w-md mx-auto">
            <Card className="border-green-100">
              <CardContent className="p-8 pt-10 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-green-800 text-xl mb-4">Email Us</h3>
                <p className="text-green-600 text-lg font-medium">info@candelatech.com</p>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}