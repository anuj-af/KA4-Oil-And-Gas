"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function WhoAreWeSection() {
  return (
    <section id="who-we-are" className="relative bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-28">
        <div className="grid items-center gap-16 md:gap-14 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6"
          >
            <h2 className="font-serif text-3xl md:text-5xl tracking-tight text-balance mb-6">Our Story</h2>

            <div className="max-w-3xl text-pretty leading-relaxed text-foreground/80 space-y-6">
              <p className="font-serif text-lg md:text-xl">
                "KA4 Oil and Gas Company" specialises in providing comprehensive solutions for the energy and industrial
                sectors.
              </p>
              <p className="font-serif text-lg md:text-xl">
                Our services encompass Scaffolding, Sand Blasting, and Painting, ensuring safe and efficient construction
                and maintenance operations.
              </p>
              <p className="font-serif text-lg md:text-xl">
                Additionally, we excel in Pipeline Wrapping, Erection, and HVAC works, delivering reliable infrastructure
                for diverse projects.
              </p>
              <p className="font-serif text-lg md:text-xl">
                With expertise in Passive Fireproofing, we prioritise safety in critical environments.
              </p>
              <p className="font-serif text-lg md:text-xl">
                Moreover, our capabilities extend to the maintenance of Chemical, Nuclear, Hydropower, Cement, and
                Concrete plants, Water Treatment Plants &amp; Sub Stations Work, guaranteeing operational excellence and
                longevity for our clients' facilities.
              </p>
            </div>

            <div className="pt-2">
              <Link href="/about">
                <Button size="lg" variant="outline" className="px-8 bg-transparent">
                  Know More
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 8 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="relative"
            >
              <img
                src="/enhanced-oil-recovery-facility-in-permian-basin-wi.jpg"
                alt="Monochrome industrial facility representing our operations"
                className="w-full h-[320px] md:h-[460px] object-cover rounded-lg grayscale hover:grayscale-0 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.45)] transition-all duration-700"
              />
            </motion.div>
          </div>
      </div>
    </section>
  )
}
