export function PortfolioSection() {
  const projects = [
    {
      title: "North Sea Operations",
      category: "Offshore Drilling",
      image: "/black-and-white-offshore-oil-rig-in-ocean-dramatic.jpg",
    },
    {
      title: "Renewable Integration",
      category: "Sustainable Energy",
      image: "/black-and-white-wind-turbines-and-solar-panels-ind.jpg",
    },
    {
      title: "Pipeline Infrastructure",
      category: "Distribution Network",
      image: "/black-and-white-industrial-pipeline-system-geometr.jpg",
    },
  ]

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-muted-foreground mb-4 tracking-wide uppercase">Featured Projects</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Engineering Excellence in Action
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden rounded-lg bg-card shadow-lg hover:shadow-xl transition-all duration-500">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm font-medium text-white/80 mb-2">{project.category}</p>
                  <h4 className="text-xl font-bold text-balance">{project.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
