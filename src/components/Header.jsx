"use client"
import { Menu, X, ChevronDown } from "lucide-react"
import { useState } from "react"

export function Header({ onBackToHome, currentEdition, setCurrentEdition }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isEventsDropdownOpen, setIsEventsDropdownOpen] = useState(false)
  const [isMobileEventsOpen, setIsMobileEventsOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleLinkClick = (event, sectionId) => {
    event.preventDefault()
    setIsMobileMenuOpen(false)
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleEditionChange = (edition) => {
    setCurrentEdition(edition)
    setIsEventsDropdownOpen(false)
    setIsMobileEventsOpen(false)
    setIsMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <header className="bg-white/80 backdrop-blur-md border-b border-green-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 cursor-pointer" onClick={onBackToHome}>
              <img src="/images/cts_logo.png" alt="CTS 2025 Logo" className="h-10 w-auto" />
              <div className="text-green-700 text-sm font-medium">Powered by Candela Technologies</div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {/* Events Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsEventsDropdownOpen(!isEventsDropdownOpen)}
                  className="flex items-center gap-1 text-green-700 hover:text-green-800 font-medium transition-colors"
                >
                  Events
                  <ChevronDown className={`w-4 h-4 transition-transform ${isEventsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isEventsDropdownOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setIsEventsDropdownOpen(false)}
                    ></div>
                    <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-green-100 py-2 z-50">
                      <button
                        onClick={() => handleEditionChange("bangalore")}
                        className={`w-full text-left px-4 py-2 hover:bg-green-50 transition-colors ${
                          currentEdition === "bangalore" ? "bg-green-100 text-green-800 font-semibold" : "text-green-700"
                        }`}
                      >
                        CTS 2025 Bangalore Edition
                      </button>
                      <button
                        onClick={() => handleEditionChange("vizag")}
                        className={`w-full text-left px-4 py-2 hover:bg-green-50 transition-colors ${
                          currentEdition === "vizag" ? "bg-green-100 text-green-800 font-semibold" : "text-green-700"
                        }`}
                      >
                        CTS 2025 Vizag Edition
                      </button>
                    </div>
                  </>
                )}
              </div>

              {/* Vizag Edition: Show all navigation links */}
              {currentEdition === "vizag" && (
                <>
                  <a
                    href="#speakers"
                    onClick={(e) => handleLinkClick(e, "speakers")}
                    className="text-green-700 hover:text-green-800 font-medium transition-colors"
                  >
                    Speakers
                  </a>
                  <a
                    href="#sessions"
                    onClick={(e) => handleLinkClick(e, "sessions")}
                    className="text-green-700 hover:text-green-800 font-medium transition-colors"
                  >
                    Sessions
                  </a>
                  <a
                    href="#panel-discussion"
                    onClick={(e) => handleLinkClick(e, "panel-discussion")}
                    className="text-green-700 hover:text-green-800 font-medium transition-colors"
                  >
                    Panel Discussion
                  </a>
                </>
              )}

              {/* Contact - Always visible */}
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "contact")}
                className="text-green-700 hover:text-green-800 font-medium transition-colors"
              >
                Contact
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-green-700 hover:text-green-800 transition-colors"
              aria-label="Toggle mobile menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={toggleMobileMenu}></div>
          <div className="absolute right-0 top-0 h-full w-64 bg-white shadow-xl">
            <div className="p-6">
              <div className="flex justify-end mb-8">
                <button
                  onClick={toggleMobileMenu}
                  className="p-2 text-green-700 hover:text-green-800 transition-colors"
                  aria-label="Close mobile menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="flex flex-col gap-6">
                {/* Events Dropdown - Mobile */}
                <div>
                  <button
                    onClick={() => setIsMobileEventsOpen(!isMobileEventsOpen)}
                    className="flex items-center justify-between w-full text-lg font-medium text-green-800 hover:text-green-600 cursor-pointer transition-colors"
                  >
                    Events
                    <ChevronDown className={`w-5 h-5 transition-transform ${isMobileEventsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isMobileEventsOpen && (
                    <div className="mt-3 ml-4 flex flex-col gap-3">
                      <button
                        onClick={() => handleEditionChange("bangalore")}
                        className={`text-left py-2 px-3 rounded-lg transition-colors ${
                          currentEdition === "bangalore" ? "bg-green-100 text-green-800 font-semibold" : "text-green-700 hover:bg-green-50"
                        }`}
                      >
                        View Bangalore Edition
                      </button>
                      <button
                        onClick={() => handleEditionChange("vizag")}
                        className={`text-left py-2 px-3 rounded-lg transition-colors ${
                          currentEdition === "vizag" ? "bg-green-100 text-green-800 font-semibold" : "text-green-700 hover:bg-green-50"
                        }`}
                      >
                        View Vizag Edition
                      </button>
                    </div>
                  )}
                </div>

                {/* Vizag Edition: Show all navigation links */}
                {currentEdition === "vizag" && (
                  <>
                    <a
                      href="#speakers"
                      onClick={(e) => handleLinkClick(e, "speakers")}
                      className="text-lg font-medium text-green-800 hover:text-green-600 cursor-pointer transition-colors"
                    >
                      Speakers
                    </a>
                    <a
                      href="#sessions"
                      onClick={(e) => handleLinkClick(e, "sessions")}
                      className="text-lg font-medium text-green-800 hover:text-green-600 cursor-pointer transition-colors"
                    >
                      Sessions
                    </a>
                    <a
                      href="#panel-discussion"
                      onClick={(e) => handleLinkClick(e, "panel-discussion")}
                      className="text-lg font-medium text-green-800 hover:text-green-600 cursor-pointer transition-colors"
                    >
                      Panel Discussion
                    </a>
                  </>
                )}

                {/* Contact - Always visible */}
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, "contact")}
                  className="text-lg font-medium text-green-800 hover:text-green-600 cursor-pointer transition-colors"
                >
                  Contact
                </a>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  )
}