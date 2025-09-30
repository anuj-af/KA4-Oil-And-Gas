"use client"

import { motion } from "framer-motion"

export function JourneySection() {
  const milestones = [
    {
      year: "1970",
      title: "Foundation",
      description: "KA4 Oil and Gas Company was founded with a vision to revolutionize the energy sector.",
    },
    {
      year: "1985",
      title: "Global Expansion",
      description: "Expanded operations to three continents, establishing key partnerships worldwide.",
    },
    {
      year: "2000",
      title: "Technology Innovation",
      description: "Launched our first sustainable energy initiative and advanced drilling technologies.",
    },
    {
      year: "2015",
      title: "Carbon Neutral Commitment",
      description: "Committed to achieving carbon neutrality by 2030 across all operations.",
    },
    {
      year: "2024",
      title: "Future Forward",
      description: "Leading the industry in renewable energy integration and sustainable practices.",
    },
  ]

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-light text-center mb-16"
        >
          Our Journey
        </motion.h2>

        <div className="relative">
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={`${milestone.year}-${index}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.08 }}
                viewport={{ once: true }}
                className={`flex items-center gap-8 ${index % 2 === 1 ? "flex-row-reverse md:flex-row-reverse" : ""} md:items-start`}
              >
                {/* Marker for mobile */}
                <div className="md:hidden w-4 h-4 bg-primary rounded-full flex-shrink-0" />

                <div className="flex-1 md:w-1/2">
                  <div className="text-sm text-muted-foreground mb-2">{milestone.year}</div>
                  <h3 className="text-2xl font-light mb-3">{milestone.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                </div>

                {/* timeline marker + spacer for desktop */}
                <div className="hidden md:flex md:flex-col items-center w-24">
                  <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center shadow">
                    <div className="w-3 h-3 bg-primary rounded-full" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}