"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, Code, Database } from "lucide-react"
import { Server } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Uma plataforma completa de e-commerce com painel administrativo, pagamentos e gestão de produtos.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    features: [
      "Painel administrativo",
      "Processamento de pagamentos",
      "Carrinho de compras",
      "Autenticação de usuários",
    ],
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Aplicativo de gerenciamento de tarefas com recursos de colaboração em tempo real e notificações.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "Firebase", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    features: ["Colaboração em tempo real", "Notificações", "Filtros avançados", "Integração com calendário"],
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Site de portfolio responsivo com animações suaves e design moderno.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    features: ["Animações suaves", "Design responsivo", "Modo escuro", "Formulário de contato"],
  },
  {
    id: 4,
    title: "E-commerce Platform",
    description: "Uma plataforma completa de e-commerce com painel administrativo, pagamentos e gestão de produtos.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    features: [
      "Painel administrativo",
      "Processamento de pagamentos",
      "Carrinho de compras",
      "Autenticação de usuários",
    ],
  },
  {
    id: 5,
    title: "Task Management App",
    description: "Aplicativo de gerenciamento de tarefas com recursos de colaboração em tempo real e notificações.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "Firebase", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    features: ["Colaboração em tempo real", "Notificações", "Filtros avançados", "Integração com calendário"],
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "Site de portfolio responsivo com animações suaves e design moderno.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    liveUrl: "#",
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
    <section id="projects" className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-blue-50 relative">

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          {t("projects")}
        </motion.h2>

        <motion.p
          className="text-slate-600 text-center max-w-2xl mx-auto mb-12"
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
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 group"
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
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4 text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Features list */}
                <div className="mt-4 space-y-2">
                  <h4 className="text-sm font-medium text-slate-700">{t("mainFeatures")}</h4>
                  <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-xs text-slate-600 flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
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
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-900 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-xl "
          >
            <Github size={18} />
            <span>{t("seeMoreGithub")}</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

