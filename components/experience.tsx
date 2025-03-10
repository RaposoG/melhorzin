"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Calendar, MapPin, Briefcase, ChevronDown, ChevronUp, ExternalLink } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const experiences = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "Riverty",
    companyUrl: "https://riverty.com",
    location: "Tallinn, Estonia",
    period: "2022 - Presente",
    description:
      "Desenvolvimento de aplicações web com React e Next.js. Implementação de design systems e otimização de performance.",
    featured: true,
    technologies: ["C#", ".Net", "TypeScript", "Ionic", "StencilJS", "Azure"],
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "Arvato Financial Solutions Tech Center",
    companyUrl: "https://arvato.com",
    location: "Tallinn, Estonia",
    period: "2022 - 2022",
    description:
      "Desenvolvimento de aplicações web com React e Next.js. Implementação de design systems e otimização de performance.",
    technologies: ["C#", ".Net", "TypeScript", "Ionic", "StencilJS", "Azure"],
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "MAGIT IT PARTNER",
    location: "Ribeirão Preto, Brasil",
    period: "2020 - 2022",
    description: "Desenvolvimento de sites responsivos e landing pages para clientes de diversos setores.",
    technologies: ["C#", ".NET", "Angular", "React Native", "Oracle", "SQL Server", "MongoDB"],
  },
  {
    id: 4,
    title: "Full Stack Developer",
    company: "GooWe",
    location: "Ribeirão Preto, Brasil",
    period: "2019 - 2020",
    description: "Desenvolvimento de sites responsivos e landing pages para clientes de diversos setores.",
    technologies: ["C#", "Elixir", ".NET", "Angular", "Flutter", "SQL Server", "MongoDB"],
  },
  {
    id: 5,
    title: "Full Stack Developer",
    company: "Kezz IT",
    location: "Ribeirão Preto, Brasil",
    period: "2019 - 2019",
    description: "Desenvolvimento de sites responsivos e landing pages para clientes de diversos setores.",
    technologies: ["C#", ".NET", "Angular", "SQL Server"],
  },
  {
    id: 6,
    title: "Full Stack Developer",
    company: "Onsoft Web",
    location: "Ribeirão Preto, Brasil",
    period: "2018 - 2019",
    description: "Desenvolvimento de sites responsivos e landing pages para clientes de diversos setores.",
    technologies: ["C#", ".NET", "Angular", "Xamarin", "SQL Server"],
  },
  {
    id: 7,
    title: "Web Freelancer",
    company: "Freelance",
    location: "Ribeirão Preto, Brasil",
    period: "2018 - 2019",
    description: "Desenvolvimento de sites responsivos e landing pages para clientes de diversos setores.",
    technologies: ["Ruby", "Ruby on Rails", "Angular", "SQL Server"],
  },
]

// Mapeamento de tecnologias para tipos
const technologyTypes: Record<string, "language" | "framework" | "tool" | "database" | "cloud"> = {
  React: "framework",
  "Next.js": "framework",
  TypeScript: "language",
  JavaScript: "language",
  Elixir: "language",
  "C#": "language",
  ".NET": "framework",
  Flutter: "framework",
  Xamarin: "framework",
  "React Native": "framework",
  Angular: "framework",
  "SQL Server": "database",
  Oracle: "database",
  MongoDB: "database",
  Azure: "cloud",
  AWS: "cloud",
}

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null)
  const { t } = useLanguage()

  const toggleExperience = (id: number) => {
    if (expandedExperience === id) {
      setExpandedExperience(null)
    } else {
      setExpandedExperience(id)
    }
  }

  const getTechnologyColor = (tech: string) => {
    const type = technologyTypes[tech] || "framework"

    switch (type) {
      case "language":
        return "bg-blue-100 text-blue-700"
      case "framework":
        return "bg-purple-100 text-purple-700"
      case "tool":
        return "bg-amber-100 text-amber-700"
      case "database":
        return "bg-green-100 text-green-700"
      case "cloud":
        return "bg-cyan-100 text-cyan-700"
      default:
        return "bg-slate-100 text-slate-700"
    }
  }

  return (
    <section
      id="experience"
      className="py-20 px-4 md:px-8 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%231E3A8A' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            {t("careerJourney")}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">{t("professionalExperience")}</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">{t("experienceDescription")}</p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className={`bg-white rounded-xl shadow-md overflow-hidden border ${exp.featured ? "border-blue-200" : "border-slate-200"}`}
            >
              {/* Experience header */}
              <div className={`p-6 ${exp.featured ? "bg-gradient-to-r from-blue-50 to-white" : ""}`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-lg ${exp.featured ? "bg-blue-100 text-blue-600" : "bg-slate-100 text-slate-600"} flex-shrink-0`}
                    >
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">{exp.title}</h3>
                      <div className="flex items-center mt-1">
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg font-medium text-blue-600 hover:text-blue-700 transition-colors flex items-center"
                        >
                          {exp.company}
                          <ExternalLink size={14} className="ml-1.5 opacity-70" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 text-sm text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={16} className="text-slate-400" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={16} className="text-slate-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-slate-600">{exp.description}</p>
                </div>

                {/* Technologies */}
                {exp.technologies && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2.5 py-1 rounded-full text-xs font-medium ${getTechnologyColor(tech)}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Toggle button */}
                <button
                  onClick={() => toggleExperience(exp.id)}
                  className={`mt-4 flex items-center gap-1 text-sm font-medium ${exp.featured ? "text-blue-600 hover:text-blue-700" : "text-slate-600 hover:text-slate-800"} transition-colors`}
                >
                  {expandedExperience === exp.id ? (
                    <>
                      <span>{t("showLess")}</span>
                      <ChevronUp size={16} />
                    </>
                  ) : (
                    <>
                      <span>{t("showMore")}</span>
                      <ChevronDown size={16} />
                    </>
                  )}
                </button>
              </div>

              {/* Expanded content - Poderia ser preenchido com mais detalhes se disponíveis */}
              {expandedExperience === exp.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`px-6 pb-6 ${exp.featured ? "bg-gradient-to-r from-blue-50 to-white" : ""}`}
                >
                  <div className="pt-4 border-t border-slate-100">
                    <h4 className="font-medium text-slate-800 mb-3">{t("responsibilities")}</h4>
                    <ul className="space-y-2 text-sm text-slate-600 list-disc pl-5">
                      <li>Desenvolvimento e manutenção de aplicações web utilizando tecnologias modernas</li>
                      <li>Colaboração com equipes multidisciplinares para entregar soluções de alta qualidade</li>
                      <li>Implementação de boas práticas de desenvolvimento e padrões de código</li>
                      <li>Participação em code reviews e sessões de pair programming</li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
          >
            <span>{t("discussYourProject")}</span>
          </a>
        </motion.div> */}
      </div>
    </section>
  )
}

