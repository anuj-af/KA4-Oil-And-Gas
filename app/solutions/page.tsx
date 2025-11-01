"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import { ExpandableService } from "@/components/expandable-service"

export default function SolutionsPage() {
  // Engineering services data
  const engineeringServices = [
  {
    title: "Consulting and Concept Design",
    description: "Basic evaluation, definition and feasibility studies",
    content:
      "Basic evaluation, definition of the task and project objectives; optimization studies, investigation of variants, feasibility studies; investment cost estimates",
  },
  {
    title: "FEED (Front End Engineering Design)",
    description: "Preliminary and detailed planning of projects",
    content:
      "Preliminary and detailed planning of projects to determine the approximate investment cost and duration of the project",
  },
  {
    title: "Basic Engineering",
    description: "Authority engineering and process control technology",
    content:
      "Authority engineering (approval planning, safety and fire protection concept, risk analyses); installation studies; apparatus specifications, machines, process control technology",
  },
  {
    title: "Detailed Engineering",
    description: "Execution planning and structural detailing",
    content:
      "Execution planning; technical specifications, three-dimensional installation planning; steel construction plan, foundation plan",
  },
  {
    title: "Software Engineering",
    description: "Development of customised software solutions",
    content:
      "Development of customised software solutions; preparation of documentation; support for software changes/adaptations and maintenance work, digital advisory services",
  },
  {
    title: "Process Engineering",
    description: "Flow diagrams, process descriptions and optimization",
    content:
      "Basic flow diagrams, quantity and energy balances, process and process descriptions; process optimization, efficiency improvements",
  },
];
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative group pt-32 pb-20 px-6 overflow-hidden">
  {/* Background image with grayscale hover effect */}
  <div
    className="absolute inset-0 bg-[url('/temp/solution4.jpg')] bg-cover bg-center filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out -z-10"
  />

  {/* Overlay to improve text contrast */}
  <div className="absolute inset-0 bg-black/50" />

  <div className="relative max-w-6xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <h1 className="text-6xl md:text-8xl font-serif font-light mb-6 text-gray-200 drop-shadow-lg">
        Solutions
      </h1>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-serif">
        Comprehensive solutions across the entire lifecycle of your industrial projects
      </p>
    </motion.div>
  </div>
</section>


      {/* Section 1: KA4 Project Solutions */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-4">KA4 Project Solutions</h2>
            <p className="text-2xl text-muted-foreground font-serif font-light mb-8">
              We make your Projects more efficient.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground max-w-4x mb-6">
              We are your multidisciplinary partner for the handling of your project portfolio from
              relatively small to large and complex projects. Our services cover the entire project
              lifecycle, from the concept phase through to construction including commissioning.
              With our extensive project experience and the approaches we have developed from
              it, we are able to deliver efficient project execution to our customers. In order to
              ensure consistency in the services tailored to the different project types, we have
              developed a modular and therefore comprehensive solution: the KA4 Project
              Solution.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-serif font-light mb-6">Advantages for our customers</h3>
              <ul className="space-y-4">
                {[
                  "Efficient project execution (time, performance, quality)",
                  "Highest level of safety",
                  "Integrated processes and methods (engineering to execution)",
                  "Multidisciplinary expertise",
                  "Internal production",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src="/solutions/solution1.jpg"
                alt="Project Solutions"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center mb-12"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src="/temp/Solution1B.jpg"
                alt="Engineering and Execution"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-serif font-light mb-6">
                Engineering and Execution Through Cost Optimised Solution
              </h3>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                The engineering and construction of industrial plants and infrastructure projects require a high level
                of expertise and precision. KA4 Oil And Gas Services, a leading international engineering and
                industrial services provider, has proven its capability in executing projects through cost-optimised
                solutions.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Our integrated approach combines advanced engineering design with efficient execution strategies,
                ensuring optimal project outcomes while maintaining the highest standards of quality and safety.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 p-8 bg-background rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-serif font-light mb-4">Services & Markets</h3>
            <p className="text-muted-foreground leading-relaxed">
              KA4 Oil And Gas Services can provide all services related to the different phases of
              a project from definition until realisation. Different delivery models can be adopted
              depending on project type and customer's requirements. Our customers are in the markets of energy, life science, nuclear, chemical,
              petrochemical, oil and gas, cement, metallurgy and other process industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 2: KA4 Maintenance Solutions */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src="/solutions/solution2.jpeg"
                alt="Project Solutions"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-light mb-4">KA4 Maintenance Solutions</h2>
              <p className="text-2xl text-muted-foreground font-serif font-light mb-8">
                We take on the maintenance while you focus on your core business
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground max-w-4xl mb-6">
                As an industrial service provider with decades of experience, KA4 is your partner for
                the maintenance of process plants. Our maintenance experts ensure your plants run
                smoothly, avoid unplanned plant shutdowns and perform turnarounds involving
                thousands of work steps safely and on time.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground max-w-4xl">
                We deliver all services for our customers as a service partner along the asset
                lifecycle, from planning to coordination and execution of all maintenance work
                to the use of digital solutions in the maintenance of industrial plants. We have put together
                our knowledge and experience as a maintenance partner for our customers in the
                KA4 Maintenance Solutions.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-muted/30 p-8 rounded-lg mb-20"
          >
            <h3 className="text-2xl font-serif font-light mb-6">Added value for our customers</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "All services along the asset lifecycle",
                "Securing and optimising efficiency and sustainability",
                "Increased lifetime of the equipment",
                "Avoiding unplanned production downtime",
                "Improving energy and CO2 efficiency",
                "Access to and flexibility of resources",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-lg leading-relaxed text-muted-foreground max-w-4xl mb-6">
                As a leading industrial services provider, KA4 is the preferred choice as maintenance
                partner for many well-known companies. To ensure that all customers can benefit
                equally from our services, we have brought together and carefully structured the
                comprehensive expertise we have gained over the course of several decades.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground max-w-4xl mb-4">
                The result is a solution that is unique in the industry: the KA4 Maintenance Solutions.
                This comprehensive approach is structured in nine modules and is based on the
                experience and knowledge from more than 400 maintenance analyses. The solution
                is precisely customised to the individual demands of the client and follows two
                distinct objectives:
              </p>
              <ul className="list-disc list-inside text-lg leading-relaxed text-muted-foreground max-w-4xl space-y-1 mb-6">
                <li>Increasing the reliability of plants</li>
                <li>While optimising maintenance costs</li>
              </ul>
              <p className="text-lg leading-relaxed text-muted-foreground max-w-4xl">
                Over a period of five years, the potential for cost reductions is as high as 20-30
                percent while plant productivity can be increased by up to 10 percent under certain
                conditions.
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
                src="/temp/solution2B.png"
                alt="Project Solutions"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: KA4 Turnaround Solutions */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-lg overflow-hidden shadow-2xl mb-12"
            >
              <Image
                src="/solutions/solution3.jpg"
                alt="Project Solutions"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-light mb-4">KA4 Turnaround Solutions</h2>
              <p className="text-lg leading-relaxed text-muted-foreground max-w-4xl mb-4">
                Standard procedure in the process industry is to close down plants on a
                regular basis so that they can be thoroughly checked and improved as part of
                a general plant shutdown, also known as turnaround. For industrial plant
                operators, this means:
              </p>
              <ul className="list-disc list-inside text-lg leading-relaxed text-muted-foreground max-w-4xl space-y-1 mb-6">
                <li>Production down time</li>
                <li>Losing substantial turnover and profits, and subsequently</li>
                <li>Potentially causing reputational impact with customers and
                  shareholders.</li>
              </ul>
              <p className="text-lg leading-relaxed text-muted-foreground max-w-4xl mb-8">
                With its KA4 Turnaround Solution , KA4 has developed a methodology that
enables plant turnarounds in the process industry to be implemented in an
optimal way. The result is a systematic approach allowing turnarounds to be
planned and executed at various locations of the respective customer, and
over multiple turnaround cycles.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-2xl font-serif font-light mb-8">
                When plants stand still: We make your turnaround work
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground max-w-4xl mb-4">
                Process industry plants must undergo a turnaround every two to five years to ensure
their integrity. During this process, production is stopped and comprehensive
maintenance, inspection and modernization work is conducted. The quick completion
of the turnaround is crucial when it comes to keeping these downtimes and the costs
associated with them as short as possible.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground max-w-4xl mb-8">
                These solutions allow us to respond individually to the requirements of our
customers. We draw up a detailed project plan that includes all the necessary work
steps and their timing. Not only are all services across the entire value chain
documented, but efficient time management is also made possible. In addition, we
make use of digital solutions, such as the turnaround app that we developed
in-house.
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
                src="/temp/solution3B.jpg"
                alt="Project Solutions"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-background p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-serif font-light mb-6">Advantages for our customers</h3>
              <ul className="space-y-4">
                {[
                  "Reduced downtime, improved work planning and scheduling",
                  "Longer intervals between turnarounds through the use of digital solutions, resulting in an increase in the service life of plant equipment",
                  "Securing qualified personnel by accessing our global network of experienced turnaround specialists",
                  "Ensuring safety and quality through implementation of the highest standards",
                  "Providing cost-efficient and transparent solutions through attractive contract models and optimal turnaround execution",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-background p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-serif font-light mb-6">Strategic Partnership Benefits</h3>
              <ul className="space-y-4">
                {[
                  "Strict adherence to the same high HSE standards by all our employees",
                  "Skilled personnel who deliver optimal quality and innovative solutions for complex problems",
                  "Quick and flexible access to a wealth of resources and special tools",
                  "Intelligent digital solutions for an efficient turnaround management",
                  "Years of experience, compiled and made available for all projects in our KA4 handbook",
                  "Fewer interfaces thanks to having one major partner",
                  "Customised collaboration models tailored to the customer's individual needs."
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: KA4 Engineering Solutions */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src="/solutions/solution4.jpg"
                alt="Project Solutions"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-light mb-4">KA4 Engineering Solutions</h2>
              <p className="text-2xl text-muted-foreground font-serif font-light mb-8">
                Customers-focused engineering, design and consultancy services throughout the entire lifecycle
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground max-w-4xl mb-6">
                Engineering for greenfield plants or modification and modernization projects
                for brownfield plants: We deliver the optimised solution for our customers in
                terms of efficiency and sustainability for process plants, oil and gas plants,
chemical and petrochemical plants, energy transition, power, plant-related
construction and infrastructure, as well as for the pharmaceutical and
bio-pharmaceutical industries - from feasibility studies to planning, consulting
and implementation.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground max-w-4xl">
                With decades of experience around the globe, we are in a position to offer our
customers a full range of engineering, design and consultancy services. These
include concept, basic, detail and process engineering as well as project
management, construction site management and consultancy activities.
              </p>
            </motion.div>
          </div>
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-8"
            >              <p className="text-4xl font-serif font-light mb-8">
                Our Engineering Services
              </p>
            </motion.div>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
              {engineeringServices.map((service, index) => (
                <ExpandableService
                  key={index}
                  title={service.title}
                  description={service.description}
                  content={service.content}
                  isCard={true}
                />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-muted/30 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-serif font-light mb-6">Added Value</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Comprehensive engineering and consultancy services from a single source",
                  "Many decades of experience and expertise; worldwide integrated knowledge-sharing",
                  "Large team of experienced engineers and consultants with specialist knowledge in the industry",
                  "Standardised way of working across the entire organisation",
                  "Transparent and reliable cost planning for new construction and modifications",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground leading-relaxed">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
        </div>
      </section>

      {/* Section 5: KA4 ISP Solutions */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-light mb-4">
                KA4 Insulation, Scaffolding & Corrosion Protection
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground max-w-4xl mb-8">
                Solutions for insulation, scaffolding, preservation. Helping industry leaders maximize productivity and
                minimize downtime.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {[
                  "Time-saving access to a large number of highly skilled workers on short notice",
                  "Cost-efficient service solutions for the life cycle of your assets",
                  "One-stop shop for all maintenance and project services",
                  "Safety first, safety always!",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground leading-relaxed font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src="/solutions/solution6.png"
                alt="Project Solutions"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Scaffolding",
                description: "Scaffolding app, magnetic anchors, 3D scanning",
              },
              {
                title: "Rope Access",
                description: "Safe & efficient solutions for difficult access sites",
              },
              {
                title: "Cherry Pickers",
                description: "Alternative for medium-height projects",
              },
              {
                title: "Insulation",
                description: "IsoScan/TIP-Check, thermal/cold insulation, coldbox insulation",
              },
              {
                title: "Painting & Blasting",
                description: "Advanced surface prep & coatings",
              },
              {
                title: "Preservation",
                description: "Corrosion control",
              },
              {
                title: "Passive Fire Protection",
                description: "Fire safety and integrity",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-serif font-light mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: KA4 Mechanical Solutions */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src="/solutions/solution7.jpg"
                alt="Project Solutions"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-light mb-4">KA4 Mechanical Solutions</h2>
              <p className="text-lg leading-relaxed text-muted-foreground max-w-4xl">
                Supporting energy and process industries with comprehensive mechanical expertise.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-muted/30 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-serif font-light mb-6">Services</h3>
              <ul className="space-y-3">
                {[
                  "Process & detail engineering",
                  "Production/installation of vessels, tanks, apparatuses",
                  "Piping construction",
                  "Steel structures",
                  "Plant installation",
                  "Rotating equipment services",
                  "Fittings service",
                  "QA/QC",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-muted/30 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-serif font-light mb-6">Specialties</h3>
              <ul className="space-y-3">
                {[
                  "Prefabrication, apparatus & tank engineering",
                  "Specialized welding methods",
                  "Rotating & static equipment services",
                  "Valve services (maintenance, repair, spare parts)",
                  "Bolting & tensioning",
                  "Machining",
                  "Heat treatment",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-background p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-serif font-light mb-6">Customer Benefits</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Plant construction from single source",
                "Increased asset availability",
                "Flexible access to resources",
                "Cost-efficient and sustainable solutions",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
