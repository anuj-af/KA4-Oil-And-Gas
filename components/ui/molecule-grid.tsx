"use client"

import { useEffect, useRef } from "react"

interface Node {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  originalX: number
  originalY: number
}

export function MoleculeGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const nodesRef = useRef<Node[]>([])
  const mousePosRef = useRef({ x: -1000, y: -1000 })
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size to match container
    const resizeCanvas = () => {
      canvas.width = container.offsetWidth
      canvas.height = container.offsetHeight
    }
    resizeCanvas()

    // Initialize nodes
    const nodeCount = 25
    nodesRef.current = []
    for (let i = 0; i < nodeCount; i++) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      nodesRef.current.push({
        id: i,
        x,
        y,
        vx: 0,
        vy: 0,
        originalX: x,
        originalY: y,
      })
    }

    // Mouse move handler - track position relative to canvas
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mousePosRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const nodes = nodesRef.current
      const mousePos = mousePosRef.current

      // Update nodes
      nodes.forEach((node) => {
        const dx = mousePos.x - node.x
        const dy = mousePos.y - node.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const repelDistance = 150

        if (distance < repelDistance && distance > 0) {
          // Repel from mouse
          const angle = Math.atan2(dy, dx)
          const force = (repelDistance - distance) / repelDistance
          node.vx = -Math.cos(angle) * force * 5
          node.vy = -Math.sin(angle) * force * 5
        } else {
          // Return to original position
          const returnDx = node.originalX - node.x
          const returnDy = node.originalY - node.y
          const returnDistance = Math.sqrt(returnDx * returnDx + returnDy * returnDy)

          if (returnDistance > 1) {
            const returnForce = 0.02
            node.vx += (returnDx / returnDistance) * returnForce
            node.vy += (returnDy / returnDistance) * returnForce
          }
        }

        // Apply damping
        node.vx *= 0.95
        node.vy *= 0.95

        node.x += node.vx
        node.y += node.vy

        // Wrap around edges
        if (node.x < 0) node.x = canvas.width
        if (node.x > canvas.width) node.x = 0
        if (node.y < 0) node.y = canvas.height
        if (node.y > canvas.height) node.y = 0
      })

      // Draw connections
      ctx.strokeStyle = "rgba(255, 255, 255, 0.66)"
      ctx.lineWidth = 1

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 200) {
            ctx.globalAlpha = 1 - distance / 200
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
            ctx.globalAlpha = 1
          }
        }
      }

      // Draw nodes
      ctx.fillStyle = "rgba(255, 255, 255, 0.6)"
      nodes.forEach((node) => {
        ctx.beginPath()
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2)
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", resizeCanvas)
    animationRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 opacity-60" />
    </div>
  )
}