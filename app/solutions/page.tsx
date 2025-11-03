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

  // ISP services data
  const ispServices = [
    {
      title: "Scaffolding",
      content: [
        "Our decades of experience mean you get the best solution tailored to your project and work environment. We optimise safety by reducing risk hours at height while matching the solution—whether scaffolding, rope access, cherry pickers or other means—to safe and efficient access.",
        "KA4 is the most progressive service provider in the scaffolding construction industry. Our process, product and safety innovations have accelerated professionalism in. scaffolding construction, furthering the industry’s ability to deliver safe and affordable services.",
        "Our scaffolding innovations include:",
        "The scaffolding app",
        "Magnetic anchors",
        "3D scanning",
      ],
      image: "/solutions/solution6a.jpg"
    },
    {
      title: "Rope Access",
      content: [
        "Our vast experience using ropes, climbing techniques and safety equipment on difficult-to-access work sites is helping customers accomplish more, safely. Whether at height or in depth, such as work sites above water, in confined spaces or within buildings, industrial climbing practised by KA4 is safe, efficient and flexible.",
        "Rope access is used when other working methods are unsafe, not possible or have a negative impact on the environment. Think, for example, of sloping roofs that can’t be reached with aerial work platforms or of work sites above water that can’t be reached with scaffolding.",
        "Increasingly, customers who previously viewed industrial climbing as too dangerous now see it as an access option that actually increases safety by significantly reducing the number of hours at risk.",
        "We implement this service in various markets, including: Chemicals & Petrochemicals, Maritime, Offshore, Civil & Infrastructure",
      ],
      image: "/solutions/solution6a.jpg"
    },
    {
      title: "Cherry Pickers & Alternative Solutions",
      content: [
        "For short-term medium-height projects, cherry pickers are often the best alternative to scaffolding or rope access. Alternative solutions are always considered in determining the safest and most cost-efficient ways to reach your asset.",
        "Insulation - the key to energy-efficient operations: Industrial insulation significantly contributes to the integrity of pipes, assets and installations. Insulating your assets can also support your energy efficiency goals. Bad-quality insulation can cause heat loss or even integrity loss due to Corrosion Under Insulation (CUI).",
        "Our IsoScan / TIP-Check can identify and visualise areas where you can save energy. The IsoScan uses a thermographic camera to visualise what the naked eye cannot see. By identifying places on an object or installation where heat loss occurs, you get a good picture of the quality of the thermal insulation and whether it needs replacement. The scan reveals both potential savings and the associated investment costs. By also paying attention to CUI during the scan, maintenance costs can be significantly reduced over time. At the same time, process safety is improved substantially.",
        "Cold insulation: We apply cold insulation, primarily in temperatures up to 20° C, to prevent surface condensation and ice formation. Materials commonly applied include foam glass, PIR/PUR or elastomers, with an aluminum/steel/terostat finish.",
        "Thermal insulation: KA4 has years of experience applying thermal insulation to prevent heat loss and fire hazards. In temperatures ranging from 20° C to 70° C, customers typically request thermal insulation to create safer working conditions. At higher temperatures, thermal insulation is applied to maintain optimal process conditions and ensure safety. At very high temperatures, above 600° C, when insulating with mineral wool, a layer of high-temperature insulation is often applied first.",
        "Coldbox insulation: KA4 specialises in insulating cold boxes. The insulation consists of perlite granules sprinkled between the piping. During maintenance, this insulation must be removed and reinserted, a job that Bilfinger has completed.",
        "Three advantages due to insulation:",
        "Safety: High quality insulation prevents corrosion under insulation (CUI).",
        "Process safety: Good insulation ensures that equipment always maintains the required temperature.",
        "Energy efficiency: The use of efficient insulation helps to reduce energy consumption and thus improve overall energy efficiency.",
      ],
      image: "/solutions/solution6c.jpeg"
    },
    {
      title: "Painting",
      content: [
        "KA4 is a reliable and experienced painting partner. Our expertise in the painting process and materials—including special coatings—helps you preserve steel and protect it from external influences that cause corrosion",
        "Blasting (surface pretreatment): Properly pretreating a steel surface before painting it is essential to preserving the material’s durability. One of the most thorough methods of pretreatment is blasting.",
        "KA4 experts can recommend and perform the best type of blasting for your installation, including: Dust-free blasting, Sponge blasting, Induction blasting, Vacuum blasting, Hydro Jetting, Wet blasting (turbo blasting), Ice blasting",
        "Preservation: KA4 is a specialist in protecting iron and steel structures from corrosion. With our situation-specific corrosion control program, we can recommend and implement the appropriate type of preservation for your assets.",
        "Passive Fire Protection: Protecting steel in fire-prone environments helps ensure its integrity. Passive Fire Protection implemented by our specialists stops corrosion and heat.",
        "Insulating coatings: Let our industrial insulation experts help you determine if coatings with insulating properties are right for your insulation challenge. We have experience applying various coatings to assets needing heat and cold insulation and in applying anti-condensation coatings."

      ],
      image: "/solutions/solution6d.jpg"
    },
  ]

  // Mechanical services data
  const mechanicalServices = [
    {
      title: "Prefabrication",
      content:
        "Prefabrication includes the manufacture of piping spools and assemblies for complete industrial and power plants throughout the world.",
      image: "/placeholder.svg"
    },
    {
      title: "Apparatus & Tank Engineering",
      content:
        "We manufacture heat accumulators, tanks, apparatus and vessels such as filter separators, heat exchangers, process vessels, scrapper traps, storage vessels and general pressure vessels.",
        image: "/placeholder.svg"
    },
    {
      title: "Specialised Welding",
      content: [
        "KA4 has decades of experience in the field of welding. Our team of welding technology specialists works with the following welding methods:",
        "Gas fusion welding",
        "Manual arc welding",
        "Metal active gas/metal inert gas welding",
        "Tungsten inert gas welding",
        "We ensure compliance with both national and international standards and regulations.",
      ],
      image: "/solutions/solution7c.jpg"
    },
    {
      title: "Piping Construction",
      content: [
        "We offer top-quality individual piping solutions and always in accordance with the highest technological standards. Through the extensive prefabrication of piping and components in our own workshops, KA4 ensures efficient workflows and a high level of safety and quality.",
        "We manufacture and assemble high-quality piping systems in all common nominal sizes and made from a range of materials: Stainless steel, Hastelloy, Steel / PTFE, Enamel, Plastic, PVDF, Glass.",
      ],
      image: "/solutions/solution7d.jpg"
    },
    {
      title: "Steel Structures",
      content: [
        "We produce steel and specialised structures of any kind, including stages, platforms, stairs, walkways, pipe bridges, piping supports or the manufacturing of skids. KA4 is the partner you need when it comes to aluminum and steel structures. We support our customers not only in design, but also in the preparation of structural analysis (including drawings) and parts lists as well as in the modular planning of skids and piping bridges.",
        "Our manufacturing and approval processes are based on DIN EN 1090-2 with design classes EXC 3 and EXC 4. Plan",
      ],
      image: "/placeholder.svg"
    },
    {
      title: "Plant Installation",
      content: [
        "The professional installation of plants, equipment, machines and systems is a decisive factor in the industry. With our experts, we work to ensure smooth commissioning and trouble-free operation of your plant.",
        "We are specialised in the creation of what are known as Mechanical Execution Concepts which enable us to apply our many years of expertise in a time and cost-efficient manner for our customers at an early planning stage.",
        "We have decades of experience in various industries, including the chemical and pharmaceutical industry, power plant and mechanical engineering as well as in the new industries associated with the energy transition, such as battery production, hydrogen and CCUS."
      ],
      image: "/solutions/solution7e.jpg"
    },
    {
      title: "Rotating Equipment Services",
      content: [
        "From manufacturer-independent consulting and maintenance to ongoing optimization and repair, KA4 offers comprehensive services throughout the entire service life of rotating equipment. We monitor ongoing operations and guarantee process safety and maximum reliability. This service package is complemented by a large rental pool that includes consisting of pumps, drive motors and frequency converters.",
        "Pumps, reciprocating compressors and turbomachinery are at the heart of many production plants. They convey liquid or gaseous raw materials as well as process industry end products and ensure they are in constant motion. Because they generally operate around the clock, they are significantly responsible for the availability and economic efficiency of process industry plants.",
      ],
      image: "/solutions/solution7f.jpg"
    },
    {
      title: "Rotating Equipment Assesment",
      content: [
        "With the KA4 Rotating Assessment, we help our customers develop risk-based and sustainable maintenance for their rotating equipment. This is a tool for identifying optimization potential and recommending measures to reduce costs and improve availability.",
        "Services for heavy rotating equipment: Turbines, compressors and gearbox",
        "Status monitoring online and offline using vibration measurements, Oil sampling - analysis and evaluation, Maintenance and cleaning of lubricating oil and hydraulic systems, Troubleshooting and RCA (root cause analysis), Planning and execution of general overhauls as a turnkey project including mechanical / scaffolding / electrical / automation and insulation services, Alignment and balancing of compressor and turbine trains, Heavy assembly of all components, Management and repair of critical spare parts.",
        "Services for pumps and electric motor",
        "Consulting: Experienced technicians and engineers support customers as early as the planning phase and work to optimise availability as well as improve the energy efficiency of rotating machines",
        "Maintenance: Predictive maintenance using vibration measurements to avoid unexpected downtime and reduce repair costs",
        "Workshop service: OEM-independent full service with detailed damage analysis and solution-oriented repair",
        "Rental equipment pool: Reducing customers’ investment costs by renting pumps, electric motors or frequency converters; uncomplicated and fast replacement supply in case of damage of the rented equipment"
      ],
      image: "/solutions/solution7g.jpg"
    },
    {
      title: "Static Equipment Services",
      content: [
        "We ensure smooth operation, increased efficiency and reliability of your static equipment. We offer our customers a comprehensive service package for boilers, burners, deaerators, steam accumulators, heat exchangers, vessels and caissons along the entire value chain.",
      ],
      image: "/placeholder.svg"
    },
    {
      title: "Valve Service",
      content: [
        "Our qualified specialists carry out manufacturer-independent services on valves and plant components of all sizes in close coordination with the responsible inspection authority. We would be happy to provide you with advice regarding plant shutdowns.",
        "Full service for valve",
        "Maintenance: Repair of all makes and nominal sizes in our workshops as well as on site in your plants.",
        "Workshop service: OEM-independent complete services with detailed damage analysis and repair in accordance with the manufacturer’s specifications, full documentation including acceptance by the responsible inspection authority.",
        "Manufacturing of spare parts: OEM-independent procurement and in-house production of spare parts in accordance with drawings or state-of-the-art 3D measurement; uncomplicated and fast supply of critical spare parts in the event of damage.",
      ],
      image: "/solutions/solution7h.jpg"
    },
    {
      title: "Quality Assurance and Quality Control",
      content: [
        "KA4 conducts its services in accordance with international regulations and approves them. We rely on strict quality assurance (QA) and quality control (QC) throughout the production process. This ensures the achievement of the desired product quality.",
      ],
      image: "/placeholder.svg"
    },
    {
      title: "Bolting & Tensioning",
      content: [
        "Effective flange management and bolt integrity are critical to safe and leak-free equipment production. Our experienced team uses various tools and techniques to secure bolted joints and offers comprehensive solutions for tightening and tensioning projects.",
        "Bolting & Tensioning Services: Torquing & tensioning, Load measuring, Hot bolt clamping, Flange protection",
      ],
      image: "/solutions/solution7i.png"
    },
    {
      title: "Machining",
      content:
        "Our machining technology is equipped with modern turning, milling and grinding machines as well as boring machines and covers a wide range of machining tasks.",
        image: "/placeholder.svg"
    },
    {
      title: "Heat Treatment",
      content:
        "We support comprehensive heat treatment services, including weld integrity control through preheating, post-weld heat treatment and metal property enhancement.",
        image: "/solutions/solution7j.jpg"
    },
  ]
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
                src="/temp/Solution2B.png"
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
                src="/temp/Solution3B.jpg"
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
          <div className="grid md:grid-cols-2 gap-6 mb-12 items-start">
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
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
                KA4 solutions for access-to-height, insulation, preservation and related services help
                leaders in the process industry maximise productivity and minimise downtime. Our
                multidisciplinary approach ensures safe and efficient services, enabling you to focus
                your assets and people on core responsibilities.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground max-w-4xl mb-8">
                Benefits for our Insulation, Scaffolding and Corrosion Protection(ISP) customers:
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

          <div className="grid md:grid-cols-2 gap-6 items-start">
            {ispServices.map((service, index) => (
              <ExpandableService key={index} title={service.title} content={service.content} image={service.image} isCard={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: KA4 Mechanical Solutions */}
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
                KA4 supports the energy and process industry by delivering comprehensive mechanical solutions in the following specialist areas:
              </p>
              <ul className="list-disc list-inside text-lg leading-relaxed text-muted-foreground max-w-4xl space-y-1 mb-6">
                <li>Process and detail engineering (mechanical)</li>
                <li>Production and installation of vessels, tanks and apparatuses</li>
                <li>Piping construction</li>
                <li>Steel structures</li>
                <li>Plant installation</li>
                <li>Rotating equipment</li>
                <li>Fittings service</li>
                <li>Quality assurance and quality control</li>
              </ul>
              <p className="text-lg leading-relaxed text-muted-foreground max-w-4xl mb-6">With our in-house workshops, we provide our customers with customised
                solutions, guaranteeing the highest level of quality and safety. Our team of
                highly-competent mechanical professionals ensure that the power and
                process industries are able to increase plant efficiency.</p>
              <p className="text-lg leading-relaxed text-muted-foreground max-w-4xl mb-6">
                We work with the most modern design and calculation programs and have our
                finger on the pulse of the most recent developments in the industry.
                KA4 looks back on decades of experience in the manufacturing field. Flexible,
                reliable and with a clear focus on the customer, we are a competent and
                efficient partner in international plant engineering. With our extensively
                equipped workshops and flexible working hours, we can ensure our
                customers receive customised products of the highest quality.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground max-w-4xl">
                We offer the following services:
              </p>

            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
            <div className="grid grid-cols-1 gap-6 items-start">
              {mechanicalServices.slice(0, 4).map((service, index) => (
                <ExpandableService key={index} title={service.title} content={service.content} image={service.image} isCard={true} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-lg overflow-hidden shadow-2xl sticky top-20"
            >
              <Image
                src="/solutions/solution7b.webp"
                alt="Mechanical Solutions"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>

          {/* Remaining mechanical services */}
          <div className="grid md:grid-cols-2 gap-6 mb-12 items-start">
            {mechanicalServices.slice(4).map((service, index) => (
              <ExpandableService key={index + 4} title={service.title} content={service.content} image={service.image} isCard={true} />
            ))}
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
                "Plant construction from a single source, from engineering to implementation and commissioning",
                "Avoiding unnecessary interfaces and costs",
                "Increased asset availability through status-based maintenance and optimization measures",
                "Short-term and flexible access to a large number of specialist tools and human resources with a range of qualifications",
                "Cost-efficient and sustainable service solutions throughout the entire service life of the rotating machine",
                "Sustainable repair by machining the parts on site in your plants as well as overhauling plant components if technically possible and necessary"
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
