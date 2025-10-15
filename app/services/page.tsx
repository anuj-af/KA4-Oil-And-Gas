"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<number | null>(null)

  const services = [
    {
      title: "Passive Fire Proofing",
      description:
        "Insulate structural steel to delay loss of design margin of safety in a fire (steel reaches ~400°C–600°C). Fire resistance periods commonly offered: 30, 60, 120, 150, 180 minutes (up to 4 hours) — thickness varies with rating, structure type, usage, size and height.",
      features: [
        "Save life by allowing safe evacuation of people",
        "Allow safe access for firefighters",
        "Protect the building from structural failure",
        "Dense concrete fire protection",
        "Lightweight cementitious systems",
        "Intumescent coatings"
      ],
      image: "/services/service1.jpg"
    },
    {
      title: "Blasting & Painting",
      description:
        "Comprehensive surface preparation, blasting and coating services for long-lasting protection of piping, tanks, steel structures and installations — performed at our facility or on-site using modern equipment and processes.",
      features: [
        "Corrosion survey & risk assessment",
        "Surface preparation: compressed air & machine blasting, airless blast cleaning",
        "Cleaning/stripping (alkaline, manual & mechanical)",
        "Airless spraying and coating application",
        "Organic, metal and non-metal inorganic coatings/linings",
        "Piping, storage tank & steel structure coating (internal & external)",
        "Coating DFT testing and QA procedures",
        "Sandblasting as per SSPC SP12 standards",
        "Use of abrasives (including Garnet 30/60) to client profile"
      ],
      image: "/services/service2.jpg"
    },
    {
      title: "Scaffolding",
      description:
        "Supply, erection and rental of high-quality scaffolding systems meeting international safety standards. Skilled in project execution, with trained workforce and custom designs for construction and industrial needs.",
      features: [
        "Tower scaffolds",
        "Access scaffolds",
        "Independent scaffolds",
        "Birdcage scaffolds",
        "Staircase scaffolds",
        "Cantilever scaffolds",
        "Suspended scaffolds",
        "Mobile scaffolds",
        "Cuplock scaffolds",
        "Guardrails & custom designed scaffolds",
        "Scaffold rental & turnkey scaffold solutions"
      ],
      image: "/services/service3.jpg"
    },
    {
      title: "Insulation",
      description:
        "Thermal insulation solutions for onshore and offshore installations — design, material supply and on-site erection backed by engineering drawings and site support.",
      features: [
        "Hot and cold insulation",
        "Cryogenic insulation",
        "Thermal spray insulation",
        "Acoustical insulation",
        "Full design & drawing support",
        "Material supply and on-site installation"
      ],
      image: "/services/service4.jpeg"
    },
    {
      title: "Pipeline Wrapping (Cold Tape Wrapping)",
      description:
        "Cold tape wrapping for long-term corrosion control where high-quality abrasive blast cleaning is not feasible. Surface-tolerant system that extends service life even on surfaces with residual contaminants.",
      features: [
        "Cold tape wrapping supply & application",
        "Surface tolerant coating for low-quality cleaning standards",
        "Optimised corrosion protection for in-situ conditions",
        "Suitable where abrasive blasting is limited by environment",
        "Focus on cost per m² protected over service life"
      ],
      image: "/services/service5.jpg"
    },
    {
      title: "Erection & Installation",
      description:
        "Structural steel, supports and equipment erection services with experienced engineers, supervisors and fitters — responsive mobilisation, storage and processing capability to meet tight schedules.",
      features: [
        "Platform erection",
        "Pipe rack erection",
        "Cable support erection",
        "Vessel erection services",
        "Stairs & handrails installation",
        "Deep tunnel erection",
        "Tank erection services",
        "Skilled erection workforce and project mobilisation"
      ],
      image: "/services/service6.jpg"
    },
    {
      title: "HVAC Works",
      description:
        "Design, fabrication and installation of HVAC systems to meet occupant comfort and process environmental requirements across industrial, commercial and institutional buildings.",
      features: [
        "G.I. sheet ducting system fabrication",
        "P.I. sheet ducting system fabrication",
        "Round ducting system fabrication",
        "Stainless steel & M.S. sheet ducting fabrication",
        "Aluminium sheet duct systems",
        "G.I. sheet trunking",
        "Air diffusion systems and diffusers with VCDs"
      ],
      extras: [
        "4-way supply diffuser with VCD",
        "4-way return diffuser with VCD",
        "Toilet exhaust air disc valve",
        "Round ceiling diffuser with VCD"
      ],
      image: "/services/service7.jpg"
    },
    {
      "title": "Formwork",
      "description": "Our steel panel formwork system is engineered for high-volume, repetitive concrete casting projects, providing exceptional durability and a superior finish. The modular design ensures speed and dimensional consistency for all vertical elements.",
      "features": [
        "High-strength steel frame with a durable, integrated forming face (e.g., phenolic plywood or polymer)",
        "Withstands lateral concrete pressure up to 60 kN/m² for walls and 80 kN/m² for columns",
        "Quick-locking clamps and standardized accessories for rapid assembly and stripping",
        "Delivers high-quality, smooth surface finish, often eliminating the need for plastering",
        "Designed for 100+ reuses with minimal maintenance for lowest long-term cost per pour",
        "Perfect for high-rise cores, shear walls, retaining walls, basements, and commercial structures"
      ],
      "image": "/services/service8.jpg"
    }
  ];

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-6xl md:text-8xl font-light mb-6 text-balance">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive energy solutions spanning the entire value chain, from exploration to distribution, powered
              by innovation and sustainability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <h2 className="text-4xl md:text-5xl font-light mb-6">{service.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">{service.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 + featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => setSelectedService(index)}
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    Learn More <ArrowRight size={16} />
                  </motion.button>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className={`relative h-96 rounded-lg overflow-hidden shadow-2xl ${
                    index % 2 === 1 ? "lg:col-start-1" : ""
                  }`}
                >
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6">Ready to Partner with Us?</h2>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              Discover how our comprehensive energy solutions can power your business forward.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-foreground text-primary px-8 py-4 rounded-lg font-medium hover:bg-opacity-90 transition-all"
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </div>
      </section> */}

      <Footer />
      {/* Modal Dialog for Service Details */}
      <Dialog open={selectedService !== null} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="!w-[90vw] !max-w-none max-h-[90vh] overflow-y-auto">
          {selectedService !== null && (
            <>
              <DialogHeader>
                <DialogTitle className="text-4xl font-light mb-4">{services[selectedService].title}</DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                <div className="relative h-80 rounded-lg overflow-hidden">
                  <Image
                    src={services[selectedService].image || "/placeholder.svg"}
                    alt={services[selectedService].title}
                    fill
                    className="object-cover grayscale"
                  />
                </div>

                <div className="space-y-4">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {services[selectedService].description}
                  </p>

                  <div className="pt-6">
                    <h3 className="text-2xl font-light mb-4">Core Capabilities</h3>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <h3 className="text-2xl font-light mb-4">Key Features</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {services[selectedService].features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
                          <div className="w-3 h-3 bg-primary rounded-full"></div>
                          <span className="font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
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
