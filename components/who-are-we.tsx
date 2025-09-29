"use client"

import { motion } from "framer-motion"

export function WhoAreWeSection() {
  return (
    <section id="who-we-are" className="relative bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6 lg:px-8 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-6"
        >
          <h2 className="font-serif text-3xl md:text-5xl tracking-tight text-balance">Who Are We ?</h2>

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
        </motion.div>
      </div>
    </section>
  )
}
