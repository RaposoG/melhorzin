"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    location: "São Paulo, Brasil",
    period: "2021 - Presente",
    description:
      "Desenvolvimento de aplicações web com React e Next.js. Implementação de design systems e otimização de performance.",
  },
  {
    title: "Senior Software Engineer",
    company: "Digital Innovations",
    location: "Rio de Janeiro, Brasil",
    period: "2018 - 2021",
    description:
      "Desenvolvimento full-stack com Node.js e React. Criação de APIs RESTful e integração com serviços de terceiros.",
  },
  {
    title: "Web Developer",
    company: "Creative Agency",
    location: "Belo Horizonte, Brasil",
    period: "2016 - 2018",
    description: "Desenvolvimento de sites responsivos e landing pages para clientes de diversos setores.",
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="experience" className="py-20 px-4 md:px-8 bg-blue-50">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-slate-800 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          Experiência Profissional
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-slate-200"></div>

          {/* Timeline items */}
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className={`relative mb-12 md:mb-24 ${
                index % 2 === 0 ? "md:pr-12 md:text-right md:ml-0 md:mr-auto" : "md:pl-12 md:ml-auto md:mr-0"
              } md:w-1/2 pl-10 md:pl-0`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-auto md:right-0 top-0 w-4 h-4 rounded-full bg-blue-400 shadow-md md:transform md:translate-x-2"></div>

              {/* Content */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-slate-800 mb-1">{exp.title}</h3>
                <h4 className="text-lg font-medium text-blue-600 mb-3">{exp.company}</h4>

                <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-sm text-slate-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <p className="text-slate-600">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

