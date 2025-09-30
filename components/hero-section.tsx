"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

// Create the autoplay plugin instance outside of JSX (prevents runtime/TS issues)
const autoplay = Autoplay({
  delay: 5000,
  stopOnInteraction: false,
  stopOnMouseEnter: true,
})

export function HeroSection() {
  return (
    <section id="home" className="mt-16 md:mt-0 relative h-100 md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <Carousel
          // embla options: loop and better alignment to minimize gaps/artifacts
          opts={{
            loop: true,
            align: "center",
            containScroll: "trimSnaps",
            // you can tweak speed if your Carousel accepts it; otherwise framer-motion controls visual feel
          }}
          plugins={[autoplay as unknown as any]}
          className="h-full"
        >
          {/* Make content a flex container so slides sit flush next to each other */}
          <CarouselContent className="h-full flex">
            {[
              "/banners/1.jpg",
              "/banners/2.jpg",
              "/banners/3.png",
              "/banners/4.jpeg",
              "/banners/5.jpeg",
              "/banners/6.jpeg"
            ].map((src, idx) => (
              // Ensure each slide is non-flexible and full width to remove gaps
              <CarouselItem key={src} className="h-full flex-none w-full">
                {/* Use framer-motion for crossfade + scale (easeOut) */}
                <motion.img
                  key={src + String(idx)}
                  initial={{ scale: 1.06, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} // easeOut-like curve
                  src={src}
                  alt={`Hero image ${idx + 1}`}
                  // IMPORTANT: make img a block element (removes inline-image gaps) and object-cover
                  className="block w-full h-[70vh] md:h-screen object-cover grayscale"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* darker overlay so text reads well */}
        <div className="absolute inset-0 bg-black/40" />
      </div>
      {/* END Background Slider */}

      {/* Content */}
      <div className="relative z-10 text-center px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 tracking-tight text-balance"
          >
            KA4 OIL AND GAS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed text-pretty"
          >
            Powering the future through innovative energy solutions and sustainable industrial excellence
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link href="/portfolio">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-white text-black hover:bg-white/90 text-lg px-8 py-6">
                  Explore Our Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </Link>

            <Link href="/about">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-6 bg-transparent hidden sm:flex"
                >
                  Learn More
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}