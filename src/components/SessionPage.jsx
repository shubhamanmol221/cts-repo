"use client"

import { ArrowRight, User, Clock, Calendar, BookOpen, Target, Users, Share2 } from "lucide-react"
import { Card, CardHeader, CardContent, CardTitle } from "./Card"
import { Badge } from "./Badge"
import { Button } from "./Button"

// Removed Wifi import as it's no longer needed for the logo
// import { Wifi } from 'lucide-react'

export function SessionPage({ session, onBack }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-green-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 cursor-pointer" onClick={onBack}>
              {/* Replaced the Wifi icon and text with the new logo image */}
              <img src="/images/cts_logo.png" alt="CTS 2025 Logo" className="h-12 w-auto" />
              <div className="hidden md:block text-green-700 text-sm font-medium">Powered by Candela Technologies</div>
            </div>
            <div className="flex items-center gap-4">
              {/* <Button
                variant="outline"
                size="sm"
                className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button> */}
              <Button variant="ghost" size="sm" onClick={onBack}>
                <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                Back to Sessions
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Session Hero */}
      <section className="py-16 bg-gradient-to-br from-green-100 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Badge className="bg-green-100 text-green-700 mb-4 text-sm font-medium">{session.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6 leading-tight">{session.title}</h1>

            {/* Add session image */}
            {session.image && (
              <div className="mb-8">
                <img
                  src={session.image || "/placeholder.svg"}
                  alt={session.title}
                  className="w-full max-w-2xl mx-auto h-64 object-cover rounded-xl shadow-lg border border-green-200"
                />
              </div>
            )}

            <div className="flex flex-wrap items-center gap-6 mb-8 text-green-700">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span className="font-medium">{session.authors}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{session.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{session.duration}</span>
              </div>
            </div>
            <p className="text-xl text-green-700 leading-relaxed">{session.abstract}</p>
          </div>
        </div>
      </section>

      {/* Session Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Full Description */}
            <Card className="border-green-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-800">
                  <BookOpen className="w-6 h-6" />
                  Session Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-700 leading-relaxed text-lg">{session.fullDescription}</p>
              </CardContent>
            </Card>

            {/* Learning Objectives */}
            <Card className="border-green-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-800">
                  <Target className="w-6 h-6" />
                  Learning Objectives
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {session.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-green-700">{objective}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Target Audience & Prerequisites */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-green-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-800">
                    <Users className="w-6 h-6" />
                    Target Audience
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-700 leading-relaxed">{session.targetAudience}</p>
                </CardContent>
              </Card>

              <Card className="border-green-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-800">
                    <BookOpen className="w-6 h-6" />
                    Prerequisites
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-700 leading-relaxed">{session.prerequisites}</p>
                </CardContent>
              </Card>
            </div>

            {/* CTA Section */}
            <Card className="border-green-200 bg-gradient-to-br from-green-50 to-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-green-800 mb-4">Don't Miss This Session!</h3>
                <p className="text-green-700 mb-6 max-w-2xl mx-auto">
                  Join us on August 22, 2025, for this insightful presentation and connect with industry experts.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {/* <Button size="lg" className="px-8 py-3 rounded-xl">
                    Register for CTS 2025
                  </Button> */}
                  <Button variant="outline" size="lg" className="px-8 py-3 rounded-xl bg-transparent" onClick={onBack}>
                    View All Sessions
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  )
}
