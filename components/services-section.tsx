import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ServicesSection() {
  const services = [
    {
      number: "01",
      title: "Passive Fire Proofing",
      description:
        "Insulate structural steel to delay loss of design margin of safety in a fire (steel reaches ~400°C–600°C). Fire resistance periods commonly offered: 30, 60, 120, 150, 180 minutes (up to 4 hours) — thickness varies with rating, structure type, usage, size and height."
    },
    {
      number: "02",
      title: "Blasting & Painting",
      description:
        "Comprehensive surface preparation, blasting and coating services for long-lasting protection of piping, tanks, steel structures and installations — performed at our facility or on-site using modern equipment and processes."
    },
    {
      number: "03",
      title: "Scaffolding",
      description:
        "Supply, erection and rental of high-quality scaffolding systems meeting international safety standards. Skilled in project execution, with trained workforce and custom designs for construction and industrial needs."
    },
    {
      number: "04",
      title: "Insulation",
      description:
        "Thermal insulation solutions for onshore and offshore installations — design, material supply and on-site erection backed by engineering drawings and site support."
    },
    {
      number: "05",
      title: "Pipeline Wrapping (Cold Tape Wrapping)",
      description:
        "Cold tape wrapping for long-term corrosion control where high-quality abrasive blast cleaning is not feasible. Surface-tolerant system that extends service life even on surfaces with residual contaminants."
    },
    {
      number: "06",
      title: "Erection & Installation",
      description:
        "Structural steel, supports and equipment erection services with experienced engineers, supervisors and fitters — responsive mobilisation, storage and processing capability to meet tight schedules."
    }
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-muted-foreground mb-4 tracking-wide uppercase">Our Core Services</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Comprehensive Energy Solutions
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {services.map((service, index) => (
            <div key={index} className="group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-start space-x-6">
                <div className="text-6xl font-bold text-muted-foreground/20 group-hover:text-muted-foreground/40 transition-colors duration-300">
                  {service.number}
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-pretty">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/services">
            <Button variant="outline" size="lg" className="px-8 bg-transparent">
              Explore Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}