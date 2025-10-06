"use client"

import { useState } from "react"
import { User, Youtube } from "lucide-react"
import { AnimatedSection } from "./AnimatedSection"
import { Card, CardContent } from "./Card"

// LinkedIn logo (your existing one)
function LinkedInLogoIcon({ className = "" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.62 1.62 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 4.12z"></path>
    </svg>
  )
}

// Extract a YouTube video id from most common URL shapes
function getYouTubeId(url) {
  if (!url) return "";
  try {
    const u = new URL(url);
    if (u.hostname === "youtu.be") return u.pathname.slice(1);
    const v = u.searchParams.get("v");
    if (v) return v;
    const parts = u.pathname.split("/").filter(Boolean);
    const i = parts.findIndex(p => p === "embed" || p === "shorts");
    if (i !== -1 && parts[i + 1]) return parts[i + 1];
  } catch {}
  return "";
}


export function SpeakersSection() {
  const [openVideoId, setOpenVideoId] = useState(null);

  const openVideo = (youtube) => {
    const id = getYouTubeId(youtube);
    if (id) setOpenVideoId(id);
    else if (youtube) window.open(youtube, "_blank", "noopener,noreferrer");
  };

  const speakers = [
    {
      name: "Susinder Gulasekaran",
      company: "Swinnovate",
      topic: "The Problems with Spatial reuse in Wi-Fi 6 & Wi-Fi 7",
      image: "/images/Susinder.png",
      linkedin: "https://www.linkedin.com/in/susinder",
      youtube: "https://youtu.be/EEy9GaDtb5w",
    },
    {
      name: "Dr. Srikanth Subramanian",
      company: "Nanocell Networks",
      topic: "802.11 PHY Evolution, Hits and Misses",
      image: "/images/srikanth.png",
      linkedin: "https://in.linkedin.com/in/srikanth-s-6b0b303",
      youtube: "https://youtu.be/cZFWRNEGJ_c",
    },
    {
      name: "Rasika Nayanajith",
      company: "Independent Expert",
      topic: "Exploring Wi-Fi 7 Security Enhancements",
      image: "/images/rasika.png",
      linkedin: "https://au.linkedin.com/in/rasikanayanajith",
      youtube: "https://youtu.be/-f46TFM6cHk",
    },
    {
      name: "Shashank Tadakamadla",
      company: "Cambium Networks",
      topic: "Real Time WiFi Testing - Providing Immediate Stability & Behavioural Insights",
      image: "images/sashank.png",
      linkedin: "https://in.linkedin.com/in/shashanktadakamadla",
      youtube: "https://youtu.be/u4mHRaMdHIE",
    },
    {
      name: "Gjermund Raaen",
      company: "Independent Expert",
      topic: "Understanding EHT Preamble in WiFi 7 Phy Layer",
      image: "images/Gjermund Raaen.png",
      linkedin: "https://no.linkedin.com/in/gjermund-raaen-954b56265",
      youtube: "https://youtu.be/jXKOhQfgR1w",
    },
    {
      name: "Bhuvnesh Sachdeva",
      company: "HFCL",
      topic: "Role of AI in Wi-Fi",
      image: "/images/bhuvnesh.png",
      linkedin: "https://www.linkedin.com/in/bsach/",
      youtube: "https://youtu.be/HokLLQF78Rc",
    },
    {
      name: "Shivam Thakur",
      company: "Plume Design, Inc",
      topic: "Nuts and Bolts of Wi-Fi and OpenWrt",
      image: "/images/shivam.png",
      linkedin: "https://in.linkedin.com/in/shivam-thakur-49978016a",
      youtube: "https://youtu.be/OVD1UJfEOi8",
    },
  ]

  // Small helper so we don't repeat the same card markup twice
  const SpeakerCard = (speaker: (typeof speakers)[number], key: number) => (
    <AnimatedSection key={key} delay={key * 150}>
      <Card className="group relative hover:shadow-xl transition-all duration-300 border-green-100 hover:border-green-200 bg-white/90 backdrop-blur-sm overflow-hidden h-full flex flex-col">
        {(speaker.linkedin || speaker.youtube) && (
          <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
            {speaker.youtube && (
              <button
                type="button"
                onClick={() => openVideo(speaker.youtube)}
                aria-label={`Play ${speaker.name}'s talk on YouTube`}
                className="text-red-600 hover:text-red-700 focus:outline-none"
                title="Watch on YouTube"
              >
                <Youtube className="w-6 h-6" />
              </button>
            )}
            {speaker.linkedin && speaker.linkedin !== "#" && (
              <a
                href={speaker.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${speaker.name}'s LinkedIn Profile`}
                className="text-[#0077B5] hover:opacity-90"
                title="Open LinkedIn"
              >
                <LinkedInLogoIcon className="w-6 h-6" />
              </a>
            )}
          </div>
        )}

        <CardContent className="p-6 pt-10 text-center flex flex-col h-full">
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="relative mb-6">
              <div className="w-32 h-40 mx-auto mb-4 relative">
                <img
                  src={speaker.image || "/placeholder.svg"}
                  alt={speaker.name}
                  className="w-full h-full object-cover rounded-lg border-2 border-green-200 group-hover:border-green-400 transition-colors shadow-lg"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center shadow-lg">
                  <User className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>

            {speaker.linkedin && speaker.linkedin !== "#" ? (
              <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer">
                <h3 className="font-bold text-lg text-green-800 mb-1 group-hover:text-green-600 transition-colors">
                  {speaker.name}
                </h3>
              </a>
            ) : (
              <h3 className="font-bold text-lg text-green-800 mb-1 group-hover:text-green-600 transition-colors">
                {speaker.name}
              </h3>
            )}

            <p className="font-semibold text-sm text-slate-500 mb-3">{speaker.company}</p>
            <p className="text-green-600 font-medium mb-4 text-sm flex-grow flex items-center justify-center">
              {speaker.topic}
            </p>
          </div>
        </CardContent>
      </Card>
    </AnimatedSection>
  )

  return (
    <section id="speakers" className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Guest Speakers</h2>
            <p className="text-xl text-green-600 max-w-2xl mx-auto">
              Learn from industry experts and thought leaders in wireless technology
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-7xl mx-auto">
          {/* Row 1: first 4 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {speakers.slice(0, 4).map((s, i) => SpeakerCard(s, i))}
          </div>

          {/* Row 2: remaining 3, centered */}
          <div className="mt-8 flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full lg:w-3/4">
              {speakers.slice(4).map((s, i) => SpeakerCard(s, i + 4))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightweight modal player */}
      {openVideoId && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-6"
          onClick={() => setOpenVideoId(null)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setOpenVideoId(null)}
              aria-label="Close video"
              className="absolute -top-10 right-0 text-white/90 hover:text-white"
            >
              ✕
            </button>
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${openVideoId}?autoplay=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  )
}
