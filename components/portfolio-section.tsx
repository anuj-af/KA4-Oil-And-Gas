"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function PortfolioSection() {
  const projects = [
    {
      title: "Oil & Gas",
      category: "oil-gas",
      location: null,
      year: null,
      description:
        "At KA4, we prioritise regular inspections and integrity assessments to guarantee the safety and efficiency of oil and gas tanks. Coupled with proactive maintenance measures, we diligently prevent corrosion and leaks to uphold operational excellence and environmental stewardship.",
      highlights: [
        "Regular inspections & integrity assessments",
        "Proactive corrosion prevention and leak control",
        "Tank maintenance & preventive upkeep",
        "Operational safety and environmental stewardship"
      ],
      image: "/markets/market1.jpg",
      stats: {}
    },
    {
      title: "Nuclear Power",
      category: "nuclear",
      location: null,
      year: null,
      description:
        "At KA4, we meticulously conduct routine maintenance procedures to ensure optimal performance and safety of nuclear power plants. Our proactive approach includes comprehensive inspections, equipment testing, and preventive measures to uphold regulatory compliance and operational integrity.",
      highlights: [
        "Routine inspections & equipment testing",
        "Preventive maintenance programs",
        "Regulatory compliance focus",
        "Operational integrity & safety systems"
      ],
      image: "/markets/market2.jpg",
      stats: {}
    },
    {
      title: "Hydropower",
      category: "hydropower",
      location: null,
      year: null,
      description:
        "KA4 places strong emphasis on maintaining hydropower plants with rigorous upkeep protocols. Our strategy involves consistent inspections, servicing of equipment, and proactive initiatives to enhance efficiency and reliability while minimising environmental footprint.",
      highlights: [
        "Consistent inspections & servicing",
        "Efficiency and reliability improvements",
        "Environmentally sensitive maintenance",
        "Turbine and balance-of-plant upkeep"
      ],
      image: "/markets/market3.jpg",
      stats: {}
    },
    {
      title: "Construction (Site Support)",
      category: "construction",
      location: null,
      year: null,
      description:
        "KA4 provides top-notch scaffolding solutions tailored to construction site needs. With a focus on safety and efficiency, we offer expert erection, inspection and dismantling services ensuring optimal support for every project.",
      highlights: [
        "Scaffolding erection, inspection & dismantling",
        "Custom scaffold design and rental",
        "Safety-first workforce training",
        "Turnkey site-support solutions"
      ],
      image: "/markets/market4.jpg",
      stats: {}
    },
    {
      title: "Chemical Plants",
      category: "chemical",
      location: null,
      year: null,
      description:
        "KA4 is dedicated to meticulous maintenance of chemical plants, employing thorough protocols to ensure operational safety and efficiency. Our strategy encompasses regular inspections, equipment fine-tuning, and proactive interventions to minimise risks and meet stringent regulatory standards.",
      highlights: [
        "Thorough inspection & risk mitigation",
        "Preventive equipment tuning & servicing",
        "Compliance with chemical industry standards",
        "Emergency response readiness"
      ],
      image: "/markets/market5.jpg",
      stats: {}
    },
    {
      title: "Water Treatment Plants",
      category: "water-treatment",
      location: null,
      year: null,
      description:
        "Maintenance of water treatment plants involves preventive and corrective measures including regular inspection and servicing of pumps, valves and filters. Proactive monitoring of water quality parameters enables timely adjustments to maintain water purity and safety.",
      highlights: [
        "Pump, valve & filter servicing",
        "Preventive & corrective maintenance",
        "Proactive water quality monitoring",
        "Process optimisation for reliability"
      ],
      image: "/markets/market6.jpg",
      stats: {}
    }
  ];

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-muted-foreground mb-4 tracking-wide uppercase">Featured Markets</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Engineering Excellence in Action
          </h3>
        </div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="group cursor-pointer"
            >
              <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                </div>

                <div className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">{project.location}</div>
                  <h3 className="text-xl font-light mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <Link href="/portfolio">
            <Button variant="outline" size="lg" className="px-8 bg-transparent">
              View Markets
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
