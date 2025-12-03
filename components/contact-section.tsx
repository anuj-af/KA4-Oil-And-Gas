import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="animate-fade-in-up">
            <h2 className="text-sm font-medium text-muted-foreground mb-4 tracking-wide uppercase">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-balance">
              Let's Discuss Your Energy Needs
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">
              Ready to explore how KA4 Oil & Gas Services LLC can power your next project? Our team of experts is here to provide
              tailored solutions for your unique requirements.
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Headquarters</h4>
                <p className="text-muted-foreground">1250 Energy Plaza, Houston, TX 77002</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Contact</h4>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
                <p className="text-muted-foreground">info@ka4oilandgas.com</p>
              </div>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input placeholder="First Name" className="bg-background" />
                <Input placeholder="Last Name" className="bg-background" />
              </div>
              <Input placeholder="Email Address" type="email" className="bg-background" />
              <Input placeholder="Company" className="bg-background" />
              <Textarea placeholder="Tell us about your project..." rows={6} className="bg-background resize-none" />
              <Button size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
