"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { MapPin, Calendar, TrendingUp } from "lucide-react"

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const filters = [
    { id: "all", label: "All Markets" },
    { id: "oil-gas", label: "Oil & Gas" },
    { id: "nuclear", label: "Nuclear Power" },
    { id: "hydropower", label: "Hydropower" },
    { id: "construction", label: "Construction" },
    { id: "chemical", label: "Chemical Plants" },
    { id: "water-treatment", label: "Water Treatment" },
    { id: "cement", label: "Cement Plants" },
    { id: "concrete", label: "Concrete Plants" },
    { id: "waste-to-energy", label: "Waste to Energy" },
    { id: "thermal-power", label: "Thermal Power" }
  ];


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
      title: "Construction (Scaffolding & Site Support)",
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
    },
    {
      title: "Cement Plants",
      category: "cement",
      location: null,
      year: null,
      description:
        "Maintenance of cement plants involves regular inspection and upkeep of kilns, mills and crushers to ensure smooth operations and prevent downtime. Proactive monitoring of production processes helps optimise efficiency and address issues early.",
      highlights: [
        "Kiln, mill & crusher upkeep",
        "Production process monitoring",
        "Downtime prevention and optimisation",
        "Predictive & preventive maintenance"
      ],
      image: "/markets/market7.jpg",
      stats: {}
    },
    {
      title: "Concrete Plants",
      category: "concrete",
      location: null,
      year: null,
      description:
        "In concrete plants, routine checks and servicing of batching equipment, mixers and conveyor belts prevent breakdowns and maintain production efficiency. Monitoring material quality and equipment performance enables timely adjustments for high-quality output.",
      highlights: [
        "Batching equipment & mixer servicing",
        "Conveyor maintenance and alignment",
        "Material quality monitoring",
        "Production continuity & quality control"
      ],
      image: "/markets/market8.jpg",
      stats: {}
    },
    {
      title: "Waste to Energy",
      category: "waste-to-energy",
      location: null,
      year: null,
      description:
        "Maintenance in waste-to-energy plants is essential for uninterrupted energy generation. Regular inspections and servicing of incinerators, boilers and turbines, together with emissions and feedstock monitoring, ensure compliance and efficient conversion of waste into energy.",
      highlights: [
        "Incinerator, boiler & turbine servicing",
        "Emissions monitoring & compliance",
        "Feedstock quality management",
        "Maximising uptime for continuous generation"
      ],
      image: "/markets/market9.jpg",
      stats: {}
    },
    {
      title: "Thermal Power Plant",
      category: "thermal-power",
      location: null,
      year: null,
      description:
        "KA4 excels in maintaining thermal power plants with precision and efficiency. From regular inspections to emergency repairs, our teams ensure uninterrupted operation and compliance with environmental regulations while optimising plant performance for reliability and sustainability.",
      highlights: [
        "Regular inspections & emergency repairs",
        "Environmental compliance & emissions control",
        "Performance optimisation for reliability",
        "Boiler, turbine and balance-of-plant maintenance"
      ],
      image: "/markets/market10.png",
      stats: {}
    }
  ];

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-6xl md:text-8xl font-light mb-6 text-balance">Our Markets</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Showcasing our most significant projects across exploration, production, refining, and renewable energy
              initiatives worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(projects.indexOf(project))}
              >
                <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    />
                    {/* <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                      {project.year}
                    </div> */}
                  </div>

                  <div className="p-6">
                    <div className="text-sm text-muted-foreground mb-2">{project.location}</div>
                    <h3 className="text-xl font-light mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>

                    {/* <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-sm font-medium">{value}</div>
                          <div className="text-xs text-muted-foreground capitalize">{key}</div>
                        </div>
                      ))}
                    </div> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6">Global Impact</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our projects span across continents, delivering energy solutions that power communities and drive economic
              growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "150+", label: "Active Projects", delay: 0 },
              { number: "50", label: "Countries", delay: 0.1 },
              { number: "$25B", label: "Total Investment", delay: 0.2 },
              { number: "2M", label: "Barrels Daily", delay: 0.3 },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: stat.delay }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-light mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />

      <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="!w-[90vw] !max-w-none  max-h-[90vh] overflow-y-auto">
          {selectedProject !== null && (
            <>
              <DialogHeader>
                <DialogTitle className="text-4xl font-light mb-2">{projects[selectedProject].title}</DialogTitle>
                <div className="flex items-center gap-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{projects[selectedProject].location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{projects[selectedProject].year}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp size={16} />
                    <span className="capitalize">{projects[selectedProject].category}</span>
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-6 mt-6">
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <Image
                    src={projects[selectedProject].image || "/placeholder.svg"}
                    alt={projects[selectedProject].title}
                    fill
                    className="object-cover grayscale"
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-light">Project Overview</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {projects[selectedProject].description}
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-light">Key Highlights</h3>
                  <div className="grid gap-3">
                    {projects[selectedProject].highlights.map((highlight, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                        className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </main>
  )
}
