"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

export default function SolutionsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-8xl font-serif font-light mb-6 text-balance">Solutions</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-serif">
              Comprehensive solutions across the entire lifecycle of your industrial projects
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 1: KA4 Project Solutions */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-4">KA4 Project Solutions</h2>
            <p className="text-2xl text-muted-foreground font-serif font-light mb-8">
              Project partner for the process industry
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground max-w-4xl">
              We make your projects more efficient. We are your multidisciplinary partner for handling project
              portfolios from small to large and complex projects. Our services cover the entire lifecycle, from concept
              to construction to commissioning. With proven approaches and extensive experience, we deliver efficient
              project execution.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-serif font-light mb-6">Advantages for our customers</h3>
              <ul className="space-y-4">
                {[
                  "Efficient project execution (time, performance, quality)",
                  "Highest level of safety",
                  "Integrated processes and methods (engineering to execution)",
                  "Multidisciplinary expertise",
                  "Internal production",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src="/solutions/solution1.jpg"
                alt="Project Solutions"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 p-8 bg-background rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-serif font-light mb-4">Services & Markets</h3>
            <p className="text-muted-foreground leading-relaxed">
              We provide services across all project phases from definition to realization. Customers are in energy,
              life science, nuclear, chemical, petrochemical, oil & gas, cement, metallurgy, and other process
              industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 2: KA4 Maintenance Solutions */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative h-96 rounded-lg overflow-hidden shadow-2xl"
              >
                  <Image
                      src="/solutions/solution2.jpeg"
                      alt="Project Solutions"
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
              </motion.div>
              <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="mb-12"
              >
                  <h2 className="text-4xl md:text-5xl font-serif font-light mb-4">KA4 Maintenance Solutions</h2>
                  <p className="text-2xl text-muted-foreground font-serif font-light mb-8">
                      We take on the maintenance while you focus on your core business
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground max-w-4xl">
                      As an industrial service provider with decades of experience, KA4 ensures smooth operations, avoids
                      shutdowns, and performs turnarounds on time. Services cover the asset lifecycle, from planning and
                      execution to digital solutions.
                  </p>
              </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-muted/30 p-8 rounded-lg"
          >
            <h3 className="text-2xl font-serif font-light mb-6">Added value for our customers</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "All services along the asset lifecycle",
                "Securing and optimising efficiency and sustainability",
                "Increased equipment lifetime",
                "Avoiding unplanned downtime",
                "Improving energy and CO2 efficiency",
                "Flexible resource access",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: KA4 Turnaround Solutions */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="mb-12"
              >
                  <h2 className="text-4xl md:text-5xl font-serif font-light mb-4">KA4 Turnaround Solutions</h2>
                  <p className="text-2xl text-muted-foreground font-serif font-light mb-8">
                      When plants stand still: We make your turnaround work
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground max-w-4xl">
                      Plants undergo shutdowns every 2–5 years for inspection, maintenance, and modernization. KA4 enables
                      optimal turnarounds with detailed planning, efficient scheduling, and a digital turnaround app.
                  </p>
              </motion.div>
              <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative h-96 rounded-lg overflow-hidden shadow-2xl"
              >
                  <Image
                      src="/solutions/solution3.jpg"
                      alt="Project Solutions"
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
              </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-background p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-serif font-light mb-6">Advantages for our customers</h3>
              <ul className="space-y-4">
                {[
                  "Reduced downtime, improved work planning & scheduling",
                  "Longer intervals between turnarounds",
                  "Access to global turnaround specialists",
                  "Ensuring safety and quality",
                  "Cost-efficient and transparent solutions",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-background p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-serif font-light mb-6">Strategic Partnership Benefits</h3>
              <ul className="space-y-4">
                {[
                  "Strict HSE standards",
                  "Skilled personnel & innovative solutions",
                  "Quick access to resources and tools",
                  "Digital solutions for efficient management",
                  "Knowledge sharing & KA4 handbook",
                  "Fewer interfaces with one major partner",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: KA4 Engineering Solutions */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative h-96 rounded-lg overflow-hidden shadow-2xl"
                >
                    <Image
                        src="/solutions/solution4.jpg"
                        alt="Project Solutions"
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-light mb-4">KA4 Engineering Solutions</h2>
                    <p className="text-2xl text-muted-foreground font-serif font-light mb-8">
                    Customer-focused engineering, design & consultancy
                    </p>
                    <p className="text-lg leading-relaxed text-muted-foreground max-w-4xl">
                    Supports both greenfield and brownfield projects across industries: process, oil & gas, chemical,
                    petrochemical, energy, pharma, infra. Services range from feasibility studies to planning, consulting, and
                    implementation.
                    </p>
                </motion.div>
            </div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-muted/30 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-serif font-light mb-6">Services</h3>
              <ul className="space-y-3">
                {[
                  "Consulting & Concept Design",
                  "FEED (Front End Engineering Design)",
                  "Basic & Detailed Engineering",
                  "Software Engineering",
                  "Process Engineering",
                  "Project Management & Procurement",
                  "HSE Consultancy",
                  "Management Consultancy",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-muted/30 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-serif font-light mb-6">Added Value</h3>
              <ul className="space-y-3">
                {[
                  "End-to-end services from a single source",
                  "Decades of expertise",
                  "Large team of specialists",
                  "Standardized methods across organization",
                  "Transparent, reliable cost planning",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5: KA4 ISP Solutions */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-12"
            >
                <h2 className="text-4xl md:text-5xl font-serif font-light mb-4">
                KA4 Insulation, Scaffolding & Corrosion Protection
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground max-w-4xl mb-8">
                Solutions for insulation, scaffolding, preservation. Helping industry leaders maximize productivity and
                minimize downtime.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-12">
                {[
                    "Time-saving workforce access",
                    "Cost-efficient lifecycle services",
                    "One-stop shop",
                    "Safety first",
                ].map((item, index) => (
                    <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                    >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground leading-relaxed font-medium">{item}</span>
                    </motion.div>
                ))}
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative h-96 rounded-lg overflow-hidden shadow-2xl"
            >
                <Image
                    src="/solutions/solution6.png"
                    alt="Project Solutions"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
            </motion.div>
        </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Scaffolding",
                description: "Scaffolding app, magnetic anchors, 3D scanning",
              },
              {
                title: "Rope Access",
                description: "Safe & efficient solutions for difficult access sites",
              },
              {
                title: "Cherry Pickers",
                description: "Alternative for medium-height projects",
              },
              {
                title: "Insulation",
                description: "IsoScan/TIP-Check, thermal/cold insulation, coldbox insulation",
              },
              {
                title: "Painting & Blasting",
                description: "Advanced surface prep & coatings",
              },
              {
                title: "Preservation",
                description: "Corrosion control",
              },
              {
                title: "Passive Fire Protection",
                description: "Fire safety and integrity",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-serif font-light mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: KA4 Mechanical Solutions */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative h-96 rounded-lg overflow-hidden shadow-2xl"
            >
                <Image
                    src="/solutions/solution7.jpg"
                    alt="Project Solutions"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-12"
            >
                <h2 className="text-4xl md:text-5xl font-serif font-light mb-4">KA4 Mechanical Solutions</h2>
                <p className="text-lg leading-relaxed text-muted-foreground max-w-4xl">
                Supporting energy and process industries with comprehensive mechanical expertise.
                </p>
            </motion.div>
        </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-muted/30 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-serif font-light mb-6">Services</h3>
              <ul className="space-y-3">
                {[
                  "Process & detail engineering",
                  "Production/installation of vessels, tanks, apparatuses",
                  "Piping construction",
                  "Steel structures",
                  "Plant installation",
                  "Rotating equipment services",
                  "Fittings service",
                  "QA/QC",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-muted/30 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-serif font-light mb-6">Specialties</h3>
              <ul className="space-y-3">
                {[
                  "Prefabrication, apparatus & tank engineering",
                  "Specialized welding methods",
                  "Rotating & static equipment services",
                  "Valve services (maintenance, repair, spare parts)",
                  "Bolting & tensioning",
                  "Machining",
                  "Heat treatment",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-background p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-serif font-light mb-6">Customer Benefits</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Plant construction from single source",
                "Increased asset availability",
                "Flexible access to resources",
                "Cost-efficient and sustainable solutions",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
