export function ServicesSection() {
  const services = [
    {
      number: "01",
      title: "Oil Exploration",
      description:
        "Advanced geological surveys and cutting-edge exploration technologies to identify and assess new energy reserves with precision and environmental responsibility.",
    },
    {
      number: "02",
      title: "Refinery Operations",
      description:
        "State-of-the-art refining processes that maximize efficiency while maintaining the highest safety and environmental standards in the industry.",
    },
    {
      number: "03",
      title: "Energy Distribution",
      description:
        "Comprehensive logistics and distribution networks ensuring reliable energy delivery to markets worldwide through strategic partnerships.",
    },
    {
      number: "04",
      title: "Sustainable Solutions",
      description:
        "Innovative approaches to reduce environmental impact while developing renewable energy alternatives for a sustainable future.",
    },
  ]

  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
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
      </div>
    </section>
  )
}
