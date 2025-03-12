"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, Code, Database } from "lucide-react"
import { Server } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const projects = [
  {
    id: crypto.randomUUID(),
    title: "URL-Shortener",
    description: "Plataforma para encurtar URLS sendo capaz de suportar um grade volume de dados, tendo sido feito deploy na Azure.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["C#", ".Net", "CosmosDB", "Azure", "Bicep", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "https://github.com/vinirossado/URL-Shortener",
    features: [
      "Geração de URLs curtas",
      "Redirecionamento de URLs",
      "Estatísticas de acesso",
      "Observabilidade",
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "GCLI",
    description: "CLI em Golang para criação de projetos projetos em Golang, ja contendo uma estrutura robusta e pronta para producao.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Golang", "PostgreSQL", "Mustache", "Cobra", "Gorm", "Docker"],
    liveUrl: "#",
    githubUrl: "https://github.com/vinirossado/gcli",
    features: [
      "Criação de projetos em Golang com multiplos templates",
      "Geração de CRUDs de formas simplificadas",
      "Servidor de Migration com Hot Reload",
      "Dockerização do projeto",
      "Pronto para produção",
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "MTG Card Inventory",
    description: "Aplicativo para gerenciamento de inventário e decks de cartas de Magic The Gathering.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["SwiftUI", "Swift", "PostgreSQL", ".Net"],
    liveUrl: "#",
    githubUrl: "https://github.com/vinirossado/MTG-Card-Inventory",
    features: [
      "Listagem de cartas catalogadas com filtros avançados",
      "Criação de decks personalizados",
      "Sincronização com banco de dados remoto",
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "MTG Life Counter",
    description: "Aplicativo para gerenciamento de vida e histórico de partidas de Magic The Gathering.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["SwiftUI", "Swift", "PostgreSQL", ".Net"],
    liveUrl: "#",
    githubUrl: "https://github.com/vinirossado/MTG-LifeCounter",
    features: [
      "Contador de vida para até 6 jogadores",
      "Histórico de partidas",
      "Sincronização com banco de dados remoto",
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "GCLI Advanced Template",
    description: "Template avançado para o GCLI, contendo autenticação, autorização, testes e documentação.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Go", "Gorm", "Zap", "Swagger", "JWT", "Docker"],
    liveUrl: "#",
    githubUrl: "https://github.com/vinirossado/gcli-advanced-template",
    features: [
      "Autenticação e autorização",
      "Testes unitários e de integração",
      "Documentação com Swagger",
      "Dockerização",
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "Portfolio Website",
    description: "Site de portfolio responsivo com animações suaves e design moderno.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.Js", "React", "Framer Motion", "Tailwind CSS"],
    liveUrl: "rossado.melhorzin.com",
    githubUrl: "#",
    features: ["Animações suaves", "Design responsivo", "Modo escuro", "Formulário de contato"],
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [activeProject, setActiveProject] = useState<number | null>(null)
  const { t } = useLanguage()

  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-gradient-to-b from-white dark:from-slate-900 to-blue-50 dark:to-slate-800 relative">

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          {t("projects")}
        </motion.h2>

        <motion.p
          className="text-slate-600 dark:text-slate-400 text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t("recentProjects")}
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              className="bg-white dark:bg-slate-800 rounded-xl 
               overflow-hidden shadow-lg hover:shadow-xl transition-all
               duration-300
               border border-slate-100 dark:border-slate-700
               group"
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay tech icons */}
                <div className="absolute top-4 right-4 z-20">
                  <div className="flex gap-2">
                    {project.tags.includes("React") && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={activeProject === index ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="w-8 h-8 rounded-full bg-blue-600/80 backdrop-blur-sm flex items-center justify-center text-white"
                      >
                        <Code className="w-4 h-4" />
                      </motion.div>
                    )}
                    {project.tags.includes("Node.js") && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={activeProject === index ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        className="w-8 h-8 rounded-full bg-green-600/80 backdrop-blur-sm flex items-center justify-center text-white"
                      >
                        <Server className="w-4 h-4" />
                      </motion.div>
                    )}
                    {project.tags.includes("MongoDB") && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={activeProject === index ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.3, delay: 0.3 }}
                        className="w-8 h-8 rounded-full bg-green-700/80 backdrop-blur-sm flex items-center justify-center text-white"
                      >
                        <Database className="w-4 h-4" />
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Project links */}
                <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-1 text-sm text-white bg-blue-600/90 hover:bg-blue-600 px-3 py-1.5 rounded-full backdrop-blur-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={14} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-1 text-sm text-white bg-slate-800/90 hover:bg-slate-800 px-3 py-1.5 rounded-full backdrop-blur-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={14} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-orange-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-blue-100 dark:bg-slate-700 text-blue-700 dark:text-orange-400 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Features list */}
                <div className="mt-4 space-y-2">
                  <h4 className="text-sm font-medium text-slate-700 dark:text-slate-700">{t("mainFeatures")}</h4>
                  <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-orange-500"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a
            href="https://github.com/vinirossado"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-900 dark:bg-orange-600 dark:hover:bg-orange-700 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-xl "
          >
            <Github size={18} />
            <span>{t("seeMoreGithub")}</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

