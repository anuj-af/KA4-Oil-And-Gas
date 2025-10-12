"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-8xl font-light mb-6 text-balance">Our Story</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              For over five decades, KA4 Oil & Gas Services LLC has been at the forefront of energy innovation, transforming how the
              world powers its future through sustainable practices and cutting-edge technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-light mb-8">About KA4 Oil & Gas</h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                At KA4 Oil & Gas Services LLC, we are more than just an oil and gas company, we are
                pioneers in energy exploration, innovation, and sustainability. We are one of the
                largest international contractor and maintenance services providers in the field of oil
                & gas construction focusing on both onshore and offshore. Established in the UAE in
                2023, we have been known as a complete service provider to major EPC companies
                all over the Middle East.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                KA4 is certified by ISO 9001, ISO 14001 and ISO 45001:2023. We undertake the
                execution of Oil & Gas field services comprising Passive Fire Proofing, Blasting &
                Painting, Scaffolding, Pipeline Wrapping and Coating, Fire Proofing for Cables,
                Structural Erection and Installation.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                As a leading player in the oil and gas industry, we recognize that ensuring the
                well-being of our workforce, communities, and the environment is non-negotiable.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                With a steadfast commitment to safety, we have implemented rigorous protocols,
                state-of-the-art technologies, and comprehensive training programs to mitigate risks
                and hazards at every step of our operations. From exploration and extraction to
                transportation and distribution, safety is ingrained in our culture and guides our every
                decision.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                At KA4, safety isn't just a priority; it's a core value that guides our actions and defines
                who we are. We understand that our success is intrinsically linked to the well-being of
                our people and the communities we serve. By prioritising safety today, we are laying
                the foundation for a sustainable and prosperous tomorrow.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src="/oil-refinery-at-sunset-with-modern-industrial-arch.jpg"
                alt="Modern oil refinery"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-lg overflow-hidden shadow-2xl order-2 md:order-none"
            >
              <Image
                src="/professional-business-portrait-black-and-white.jpg"
                alt="Modern oil refinery"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-light mb-8">Message From The CEO</h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Oil and gas projects aren't just a task; it's a commitment to reliability, a pledge to
                safety, and a testament to our unwavering dedication to keeping the world moving
                forward.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                In an industry as dynamic and challenging as ours, adaptability is key. We have
                consistently demonstrated our ability to navigate through fluctuating market
                conditions, technological advancements, and evolving regulatory landscapes. Our
                resilience and determination have not only sustained us but have also propelled us
                towards new heights of success.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                At the heart of our operations lies a steadfast dedication to excellence in every
                aspect of our work. Whether it's exploration and production, refining and marketing,
                or delivering cutting-edge solutions, we remain unwavering in our pursuit of
                excellence. Our commitment to safety, environmental stewardship, and corporate
                responsibility continues to define who we are and what we stand for.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                As we look to the future, we recognize the imperative to innovate and embrace
                change. But our success is not measured solely by financial performance or
                technological advancement. It is also defined by the positive impact we have on the
                communities in which we operate. Whether it's creating jobs, supporting local
                economies, or investing in education and healthcare, we remain steadfast in our
                commitment to being a responsible corporate citizen.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                As we move forward, let us continue to uphold the values that have guided us thus
                far: integrity, innovation, and a relentless pursuit of excellence. T ogether, we will
                continue to shape the future of energy, delivering value to our customers,
                shareholders, and society at large.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-light mb-8">Our Mission</h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                We are committed to leveraging our expertise, innovation, and operational excellence
                to meet the evolving energy needs of society. Guided by integrity, safety, and
                sustainability, we strive to:
              </p>
              <ul className="list-disc list-inside space-y-1 text-lg leading-relaxed text-muted-foreground mb-4">
                <li>Ensure the safety and well-being of our employees, contractors, and the communities in which we operate.</li>
                <li>Maximise the value of our resources through efficient and responsible exploration, production, and distribution practices.</li>
                <li>Embrace innovation and technological advancements to optimise operations and minimise environmental impact.</li>
                <li>Cultivate long-term partnerships based on transparency, trust, and mutual benefit.</li>
                <li>Uphold the highest ethical standards in all aspects of our business, fostering a culture of integrity, diversity, and inclusivity.</li>
              </ul>
              <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                Through our unwavering commitment to excellence and sustainability, we aspire to be
                a trusted global leader in the oil and gas industry, driving positive change and
                shaping a brighter future for generations to come.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src="/enhanced-oil-recovery-facility-in-permian-basin-wi.jpg"
                alt="Modern oil refinery"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Vission */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-lg overflow-hidden shadow-2xl order-2 md:order-none"
            >
              <Image
                src="/modern-oil-drilling-platform-with-advanced-technol.jpg"
                alt="Modern oil refinery"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-light mb-8">Our Vission</h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                We envision a future where our team of experts, equipped with advanced training and
                expertise, collaborates seamlessly with state-of-the-art technology to unlock new
                frontiers in energy exploration and production. Through the convergence of human
                ingenuity and technological innovation, we will:
              </p>
              <ul className="list-disc list-inside space-y-1 text-lg leading-relaxed text-muted-foreground mb-4">
                <li>
                  Empower our workforce with world-class training, mentorship, and development
                  opportunities, cultivating a diverse and inclusive culture of excellence where every
                  individual can thrive and contribute to our collective success.
                </li>
               <li>
                  Foster a culture of continuous learning, curiosity, and adaptability, where we embrace
                  change as an opportunity for growth and innovation, staying ahead of industry trends
                  and anticipating the needs of tomorrow's energy landscape.
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-light text-center mb-16"
          >
            Core Values
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Safety",
                description:
                  "We prioritise the safety and well-being of our employees, contractors, communities, and the environment above all else. Safety is non-negotiable, and we continuously strive for zero harm in all aspects of our operations.",
                delay: 0,
              },
              {
                title: "Integrity",
                description:
                  "We conduct ourselves with honesty, transparency, and ethical integrity in all our interactions. We honour our commitments, uphold the highest standards of professionalism, and adhere to legal and regulatory requirements without compromise.",
                delay: 0.1,
              },
              {
                title: "Excellence",
                description:
                  "We are committed to excellence in everything we do. We strive for continuous improvement, innovation, and operational efficiency to deliver superior results and exceed the expectations of our stakeholders.",
                delay: 0.2,
              },
              {
                title: "Respect",
                description:
                  "We treat everyone with dignity, respect, and fairness, valuing diversity, inclusion, and cultural sensitivity. We foster a collaborative and supportive work environment where ideas are welcomed, differences are celebrated, and contributions are recognized.",
                delay: 0.3,
              },
              {
                title: "Customer Focus",
                description:
                  "We are driven by a commitment to understanding and exceeding the needs and expectations of our customers. We strive to deliver exceptional value, quality products, and reliable services that contribute to their success and satisfaction.",
                delay: 0.4,
              },
              {
                title: "Teamwork",
                description:
                  "We believe in the power of teamwork and collaboration. We leverage the diverse talents, perspectives, and experiences of our employees to achieve common goals, solve complex challenges, and drive innovation and growth.",
                delay: 0.5,
              },
              {
                title: "Community Engagement",
                description:
                  "We are active participants in the communities where we operate, contributing to their social, economic, and cultural development. We engage with stakeholders, listen to their feedback, and work collaboratively to create shared value and build lasting relationships.",
                delay: 0.6,
              },
              {
                title: "Accountability",
                description:
                  "We take ownership of our actions, decisions, and outcomes. We hold ourselves and each other accountable for upholding our core values, achieving our goals, and delivering on our commitments with integrity and professionalism.",
                delay: 0.7,
              },
              {
                title: "Adaptability",
                description:
                  "We embrace change, innovation, and agility as essential components of our success. We remain flexible, open-minded, and resilient in the face of challenges, continuously learning and evolving to stay ahead in a dynamic and competitive industry.",
                delay: 0.8,
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: value.delay }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-light text-primary-foreground">{index + 1}</span>
                </div>
                <h3 className="text-2xl font-light mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
