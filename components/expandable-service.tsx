"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

interface ExpandableServiceProps {
  title: string
  description?: string
  content: string | string[]
  image?: string
  isCard?: boolean
}

export function ExpandableService({ title, description, content, image, isCard = true }: ExpandableServiceProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const contentArray = Array.isArray(content) ? content : [content]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`${
        isCard
          ? "bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          : "bg-background p-6 rounded-lg shadow-lg"
      }`}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-start justify-between gap-4 text-left hover:opacity-70 transition-opacity"
      >
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-serif font-light mb-1">{title}</h3>
          {description && <p className="text-sm text-muted-foreground">{description}</p>}
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 mt-1"
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-4 mt-4 border-t border-muted">
              <div className="flex flex-col gap-4">
                <div>
                  {contentArray.map((item, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed mb-3 last:mb-0 text-sm">
                      {item}
                    </p>
                  ))}
                </div>

                {image && (
                  <div className="relative w-40 h-32 rounded-lg overflow-hidden shadow-md flex-shrink-0">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={title}
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
