export function TeamSection() {
  const team = [
    {
      name: "Sarah Mitchell",
      role: "Chief Executive Officer",
      image: "/professional-business-portrait-black-and-white.jpg",
    },
    {
      name: "David Chen",
      role: "Chief Technology Officer",
      image: "/professional-business-portrait-black-and-white.jpg",
    },
    {
      name: "Maria Rodriguez",
      role: "Head of Operations",
      image: "/professional-business-portrait-black-and-white.jpg",
    },
  ]

  return (
    <section id="team" className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-muted-foreground mb-4 tracking-wide uppercase">Leadership Team</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Visionary Leaders Driving Innovation
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="text-center group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-6 mx-auto w-48 h-48 overflow-hidden rounded-full">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">{member.name}</h4>
              <p className="text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
