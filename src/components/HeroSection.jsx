"use client"

import { useState, useRef, useEffect } from "react"
import { Calendar, Clock, MapPin, Play, Pause, Radio, X, FileText, Download } from "lucide-react"
import { CalendarButton } from "./CalendarButton"

export function HeroSection({ currentEdition = "bangalore" }) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true)
  const [showNotification, setShowNotification] = useState(false)
  const [showAgenda, setShowAgenda] = useState(false) // State for PDF modal
  const videoRef = useRef(null)

  const isVizagEdition = currentEdition === "vizag"

  // Auto-close notification after 3 seconds
  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [showNotification])

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsVideoPlaying(!isVideoPlaying)
    }
  }

  const handleWatchLiveClick = () => {
    if (isVizagEdition) {
      // Vizag Edition: Open watch live link
      window.open("https://youtu.be/2112-BiWqrA?si=oiLLLY3tn4966KUr", "_blank")
    } else {
      // Bangalore Edition: Show coming soon
      setShowNotification(true)
    }
  }

  const handleEventAgendaClick = () => {
    if (isVizagEdition) {
      // Vizag Edition: Show PDF agenda
      setShowAgenda(true)
    } else {
      // Bangalore Edition: Show coming soon
      setShowNotification(true)
    }
  }

  const handleRegistrationClick = () => {
    // Bangalore Edition only: Show coming soon
    setShowNotification(true)
  }

  return (
    <>
      {/* PDF Agenda Modal - For Vizag Edition */}
      {isVizagEdition && showAgenda && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white/95 rounded-2xl shadow-2xl w-full max-w-4xl h-[90vh] flex flex-col overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50/80">
              <h3 className="text-lg font-semibold text-gray-800">Event Agenda</h3>
              <div className="flex items-center gap-4">
                <a
                  href="/cts_agenda.pdf"
                  download="Candela_Technology_Summit_2025_Agenda.pdf"
                  className="flex items-center gap-2 text-white bg-green-600 hover:bg-green-700 transition-colors px-4 py-2 rounded-lg text-sm font-medium"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </a>
                <button
                  onClick={() => setShowAgenda(false)}
                  className="text-gray-500 hover:text-gray-800 hover:bg-gray-200 p-2 rounded-full"
                  aria-label="Close agenda view"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="flex-grow">
              <iframe
                src="/cts_agenda.pdf"
                title="Event Agenda PDF"
                width="100%"
                height="100%"
                className="border-none"
              ></iframe>
            </div>
          </div>
        </div>
      )}

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-center">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video ref={videoRef} autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="/wifi-fest_new.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/40"></div>
        </div>

        {/* Coming Soon Notification - For Bangalore Edition */}
        {!isVizagEdition && showNotification && (
          <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[9999] w-11/12 max-w-md bg-green-600/90 backdrop-blur-md text-white p-4 rounded-xl shadow-2xl border border-white/20 animate-fade-in-down">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Radio className="w-6 h-6 text-green-200" />
              </div>
              <div className="ml-3 flex-1">
                <p className="text-base font-semibold">Coming Soon</p>
                {/* <p className="text-sm mt-1">
                  This feature will be available soon. Stay tuned!
                </p> */}
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

        {/* Video Control Button */}
        <button
          onClick={toggleVideo}
          className="absolute top-6 right-6 z-30 w-12 h-12 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-green-700 hover:bg-white/90 transition-all duration-300 shadow-lg"
          aria-label={isVideoPlaying ? "Pause video" : "Play video"}
        >
          {isVideoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </button>

        {/* Centered Content Container */}
        <div className="relative z-20 flex flex-col items-center w-full max-w-4xl px-4">
          
          <div className="-mb-10 animate-fade-in-up z-10">
            <img src="/images/cts_logo.png" alt="Summit Logo" className="w-48 h-48 md:w-56 md:h-56 object-contain drop-shadow-xl" />
          </div>

          <div className="bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-2xl p-8 md:p-12 shadow-2xl hover:bg-white/15 hover:border-white/40 transition-all duration-500 hover:scale-[1.02] w-full mb-8">
            <div className="pt-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg animate-fade-in-up animation-delay-200">
                Candela Technology
                <span className="block text-green-300">Summit 2025</span>
              </h1>
              <div className="flex justify-center mb-4">
                <span className="inline-flex items-center gap-2 backdrop-blur-sm px-4 py-2 rounded-full font-semibold shadow-lg border border-white/30 text-gray-800 text-base" style={{ backgroundColor: '#86EFAC' }}>
                  <MapPin className="w-5 h-5 text-red-500" />
                  {isVizagEdition ? "Vizag Edition" : "Bangalore Edition"}
                </span>
              </div>
              <p className="text-xl text-white/90 leading-relaxed drop-shadow-md animate-fade-in-up animation-delay-400">
                Join us for a deep dive into cutting-edge wireless technology, evolving Wi-Fi standards, and advanced testing strategies driving real-world user experience.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up animation-delay-600">
            <div className="flex items-center gap-2 text-white bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md border border-white/20">
              <Calendar className="w-5 h-5" />
              <span className="font-medium">
                {isVizagEdition ? "August 22, 2025 (Friday)" : "November 7, 2025 (Friday)"}
              </span>
            </div>
            <div className="flex items-center gap-2 text-white bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md border border-white/20">
              <Clock className="w-5 h-5" />
              <span className="font-medium">
                {isVizagEdition ? "9:30 AM – 6:00 PM IST" : "9:00 AM – 4:00 PM IST"}
              </span>
            </div>
            <div className="flex items-center gap-2 text-white bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md border border-white/20">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">
                {isVizagEdition ? "Visakhapatnam" : "Bangalore"}
              </span>
            </div>
            
            <button 
              onClick={handleWatchLiveClick}
              className="flex items-center gap-2 text-white bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md border border-white/20 hover:bg-white/20 transition-colors duration-300"
            >
              <Radio className="w-5 h-5 text-green-300" />
              <span className="font-medium">Watch live</span>
            </button>
            
            {/* UPDATED: Event Agenda Button */}
            <button
              onClick={handleEventAgendaClick}
              className="flex items-center gap-2 text-white bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md border border-white/20 hover:bg-white/20 transition-colors duration-300"
            >
              <FileText className="w-5 h-5" />
              <span className="font-medium">Event Agenda</span>
            </button>
            
            <CalendarButton
              edition={currentEdition}
              className="font-medium !h-auto !min-w-min flex items-center gap-2 text-white bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md border border-white/20 hover:bg-white/20"
            />

            {!isVizagEdition && (
              <button
                onClick={handleRegistrationClick}
                className="flex items-center gap-2 text-white bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md border border-white/20 hover:bg-white/20 transition-colors duration-300"
              >
                <FileText className="w-5 h-5" />
                <span className="font-medium">Registration</span>
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  )
}