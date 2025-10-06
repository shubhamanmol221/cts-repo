import { Users, MessageCircle, Clock, User } from "lucide-react"
import { AnimatedSection } from "./AnimatedSection"
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "./Card"
import { Badge } from "./Badge"

export function PanelDiscussionSection() {
  return (
    <section id="panel-discussion" className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Panel Discussion</h2>
            <p className="text-xl text-green-600 max-w-2xl mx-auto">
              Interactive discussion on building impactful careers in the Wi-Fi industry
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-6xl mx-auto">
          <AnimatedSection delay={300}>
            <Card className="group hover:shadow-xl transition-all duration-300 border-green-100 hover:border-green-200 overflow-hidden">
              <div className="flex flex-col lg:flex-row h-auto">
                <div className="lg:w-1/2 relative flex items-center justify-center bg-gradient-to-br from-green-50/30 to-white/50">
                  <div className="w-full h-full relative">
                    <img
                      src="/images/panel_discussion.png"
                      alt="Panel Discussion - Building Impactful Careers in Wi-Fi Industry"
                      className="w-full h-full object-cover rounded-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                <div className="lg:w-1/2 flex flex-col">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <Badge className="bg-blue-100 text-blue-700 mb-3">Panel Discussion</Badge>
                        <CardTitle className="text-green-800 group-hover:text-green-600 transition-colors leading-tight text-lg">
                          Building Impactful Careers in Wi-Fi Industry
                        </CardTitle>
                        <CardDescription className="text-green-600 font-medium mt-1">
                          Interactive Career Discussion
                        </CardDescription>
                      </div>
                      <MessageCircle className="w-5 h-5 text-green-400 group-hover:text-green-600 transition-colors flex-shrink-0 mt-1" />
                    </div>
                  </CardHeader>

                  <CardContent className="flex-1 pt-0">
                    <p className="text-green-700 leading-relaxed mb-4 text-sm">
                      Join our expert panel as they share insights on career development, industry trends, and
                      opportunities in the wireless technology sector.
                    </p>

                    <div className="space-y-3 mb-4">
                      <div className="flex flex-wrap items-center gap-3 text-xs text-green-600">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>Interactive Session</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          <span>Q&A Included</span>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-1 text-sm">
                          <User className="w-3 h-3" />
                          Panel Participants
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            <span className="text-blue-700 text-xs">
                              <strong>Sitarama</strong> (Moderator)
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            <span className="text-green-700 text-xs">
                              <strong>Srikanth Subramanian</strong>
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            <span className="text-green-700 text-xs">
                              <strong>Rasika Nayanajith</strong>
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            <span className="text-green-700 text-xs">
                              <strong>Sashank Tadakamadla</strong>
                            </span>  
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            <span className="text-green-700 text-xs">
                              <strong>Shivam Thakur</strong>
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            <span className="text-green-700 text-xs">
                              <strong>Bhuvnesh Sachdeva</strong>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-auto pt-3 border-t border-green-100">
                      <p className="text-green-600 font-medium text-xs">
                        Don't miss this opportunity to gain valuable insights from industry experts!
                      </p>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}