import React from "react"

const videoIds = [
  "EEy9GaDtb5w",
  "cZFWRNEGJ_c",
  "-f46TFM6cHk",
  "OVD1UJfEOi8",
  "jXKOhQfgR1w",
  "HokLLQF78Rc",
  "u4mHRaMdHIE",
  "njz4NdjR5pc",
  "escBu0TLrV0",
  "4NVbOV2YFbU",
  "ve1n06TJT94",
  "n9XqHra-tyk",
  "S8VM_XD1lFM",
  "MOzPoR_nL64",
]

export function VideosSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
          Event Videos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {videoIds.map((id) => (
            <div
              key={id}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-green-100"
            >
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${id}`}
                  title={`YouTube video ${id}`}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-2xl"
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
