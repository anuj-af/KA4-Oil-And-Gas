export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-sm font-medium text-muted-foreground mb-4 tracking-wide uppercase">
              KA4 Oil & Gas Services LLC
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-balance">
              Pioneering Innovation in Energy Excellence
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed text-pretty">
              For over three decades, KA4 Oil & Gas Services LLC has been at the forefront of energy innovation, combining cutting-edge
              technology with sustainable practices to deliver exceptional results across the global energy sector.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Our commitment to environmental stewardship and operational excellence drives us to continuously push the
              boundaries of what's possible in energy production and distribution.
            </p>
          </div>

          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <img
              src="/black-and-white-industrial-facility-with-geometric.jpg"
              alt="KA4 Oil and Gas facility"
              className="w-full h-96 object-cover rounded-lg grayscale shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
