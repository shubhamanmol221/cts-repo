// CalendarButton.jsx
"use client"

import { Calendar } from "lucide-react"

export function CalendarButton({ className = "", edition = "bangalore" }) {
  const generateICS = () => {
    const isVizagEdition = edition === "vizag"

    const eventDetails = {
      title: "Candela Technology Summit 2025",
      description:
        "Join us for an immersive day of cutting-edge wireless technology insights, AI-driven innovations, and the future of Wi-Fi standards. Technical sessions, panel discussions, and networking opportunities.",
      location: isVizagEdition
        ? "SB Square Hotel & Banquet, Visakhapatnam, Andhra Pradesh"
        : "Bangalore, Karnataka",
      startDate: isVizagEdition ? "2025-08-22T09:30:00" : "2025-11-07T09:30:00", // Vizag: Aug 22, Bangalore: Nov 7
      endDate: isVizagEdition ? "2025-08-22T18:00:00" : "2025-11-07T18:00:00",   // Vizag: Aug 22, Bangalore: Nov 7
      timezone: "Asia/Kolkata",
    }

    const startUTC = new Date(`${eventDetails.startDate}+05:30`).toISOString().replace(/[-:]/g, "").split(".")[0] + "Z"
    const endUTC = new Date(`${eventDetails.endDate}+05:30`).toISOString().replace(/[-:]/g, "").split(".")[0] + "Z"
    const now = new Date().toISOString().replace(/[-:]/g, "").split(".")[0] + "Z"

    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//CTS 2025//Event//EN",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      `UID:cts2025-${now}@candelatech.com`,
      `DTSTAMP:${now}`,
      `DTSTART:${startUTC}`,
      `DTEND:${endUTC}`,
      `SUMMARY:${eventDetails.title}`,
      `DESCRIPTION:${eventDetails.description.replace(/,/g, "\\,")}`,
      `LOCATION:${eventDetails.location.replace(/,/g, "\\,")}`,
      "STATUS:CONFIRMED",
      "TRANSP:OPAQUE",
      "BEGIN:VALARM",
      "TRIGGER:-PT1H",
      "ACTION:DISPLAY",
      "DESCRIPTION:Reminder: CTS 2025 starts in 1 hour",
      "END:VALARM",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n")

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" })
    const link = document.createElement("a")
    link.href = URL.createObjectURL(blob)
    link.download = "CTS-2025-Event.ics"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(link.href)
  }

  const base =
    "flex items-center gap-2 text-white bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md border border-white/20 " +
    "hover:bg-white/20 transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-white/40"

  return (
    <button type="button" onClick={generateICS} className={`${base} ${className}`} aria-label="Add to Calendar">
      <Calendar className="w-5 h-5" />
      <span>Add to Calendar</span>
    </button>
  )
}
