"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"
import { MoleculeGrid } from "./ui/molecule-grid"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 relative overflow-hidden">
      <MoleculeGrid />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <h3 className="text-2xl font-light mb-4">KA4 Oil & Gas Services LLC</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-md leading-relaxed">
              Empowering Potential. Delivering Performance.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                <span className="text-sm text-primary-foreground/80">1200 Energy Plaza, Houston, TX 77002</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span className="text-sm text-primary-foreground/80">+971 544588455</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span className="text-sm text-primary-foreground/80">info@ka4oilandgas.com</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-medium mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <Link href="/services" className="hover:text-primary-foreground transition-colors">
                  Passive Fire Proofing
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary-foreground transition-colors">
                  Blasting & Painting
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary-foreground transition-colors">
                  Scaffolding
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary-foreground transition-colors">
                  All Services
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <Link href="/about" className="hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-primary-foreground transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-primary-foreground transition-colors">
                  Markets
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-primary-foreground/20 mt-12 pt-8 text-center"
        >
          <p className="text-primary-foreground/60">© 2025 KA4 Oil & Gas Services LLC. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
