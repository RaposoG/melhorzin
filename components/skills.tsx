"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Code, Database, Globe, Layers, Server, Smartphone } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

interface Skill {
  name: string
  level: number
  icon: React.ReactNode
  category: string
  description: string
}

const skills: Skill[] = [
  {
    name: "C#",
    level: 75,
    icon: <Server className="w-6 h-6" />,
    category: "Linguagens",
    description: "Criação de APIs RESTful e serviços escaláveis",
  },
  {
    name: "Go",
    level: 75,
    icon: <Server className="w-6 h-6" />,
    category: "Linguagens",
    description: "Criação de APIs RESTful e serviços escaláveis",
  },
  {
    name: "TypeScript",
    level: 80,
    icon: <Code className="w-6 h-6" />,
    category: "Linguagens",
    description: "Tipagem estática para desenvolvimento mais seguro e produtivo",
  },
  {
    name: "Angular",
    level: 85,
    icon: <Layers className="w-6 h-6" />,
    category: "Frontend",
    description: "Desenvolvimento de interfaces modernas com hooks e componentes reutilizáveis",
  },
  {
    name: "Ionic",
    level: 70,
    icon: <Smartphone className="w-6 h-6" />,
    category: "Mobile",
    description: "Criação de aplicativos móveis multiplataforma",
  },
  {
    name: "SwiftUI",
    level: 30,
    icon: <Smartphone className="w-6 h-6" />,
    category: "Mobile",
    description: "Criação de aplicativos móveis nativos para iOS",
  },
  {
    name: "StencilJS",
    level: 80,
    icon: <Globe className="w-6 h-6" />,
    category: "Frontend",
    description: "Desenvolvimento de aplicações React com SSR e SSG",
  },
  {
    name: "MongoDB",
    level: 65,
    icon: <Database className="w-6 h-6" />,
    category: "Banco de Dados",
    description: "Modelagem de dados NoSQL e operações de CRUD",
  },
  {
    name: "SqlServer",
    level: 65,
    icon: <Database className="w-6 h-6" />,
    category: "Banco de Dados",
    description: "Modelagem de dados SQL e operações de CRUD",
  },
  {
    name: "Oracle",
    level: 40,
    icon: <Database className="w-6 h-6" />,
    category: "Banco de Dados",
    description: "Modelagem de dados SQL e operações de CRUD",
  },
  {
    name: "Docker",
    level: 30,
    icon: <Smartphone className="w-6 h-6" />,
    category: "DevOps",
    description: "Criação de ambientes de desenvolvimento e produção isolados",
  },
  {
    name: "Kubernetes",
    level: 30,
    icon: <Smartphone className="w-6 h-6" />,
    category: "DevOps",
    description: "Orquestração de contêineres e escalabilidade de aplicações",
  },

  {
    name: "Bicep",
    level: 30,
    icon: <Smartphone className="w-6 h-6" />,
    category: "Cloud",
    description: "Criação de infraestrutura como código para Azure",
  },
  {
    name: "Terraform",
    level: 30,
    icon: <Smartphone className="w-6 h-6" />,
    category: "Cloud",
    description: "Criação de infraestrutura como código para Cloud",
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null)
  const { t } = useLanguage()

  // Agrupar habilidades por categoria
  const categories = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = []
      }
      acc[skill.category].push(skill)
      return acc
    },
    {} as Record<string, Skill[]>,
  )

  return (
    <section id="skills" className="py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-blue-50 opacity-70">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 0, 100, 0.05) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-200/20 backdrop-blur-sm"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-slate-800 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          {t("skills")}
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Skill hexagon grid */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                className="relative group"
                onMouseEnter={() => setActiveSkill(skill)}
                onMouseLeave={() => setActiveSkill(null)}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 h-full border border-blue-100 transition-all duration-300 hover:border-blue-300">
                  <div
                    className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-t-xl"
                    style={{ opacity: skill.level / 100 }}
                  ></div>

                  <div className="flex flex-col items-center text-center h-full">
                    <div className="mb-3 p-3 rounded-full bg-blue-100/50 text-blue-600">{skill.icon}</div>
                    <h3 className="font-bold text-slate-800 mb-1">{skill.name}</h3>
                    <div className="text-xs text-slate-500 mb-3">{skill.category}</div>

                    <div className="mt-auto pt-3 w-full">
                      <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-blue-400 to-blue-600"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: 0.3 + 0.1 * index }}
                        />
                      </div>
                      <div className="flex justify-between mt-1 text-xs text-slate-500">
                        <span>{t("beginnerLevel")}</span>
                        <span>{t("advancedLevel")}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skill details panel */}
          <div className="lg:col-span-1">
            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 h-full border border-blue-100 sticky top-24"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="font-bold text-slate-800 mb-4 text-lg">{t("skillDetails")}</h3>

              {activeSkill ? (
                <motion.div
                  key={activeSkill.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100/50 text-blue-600">{activeSkill.icon}</div>
                    <div>
                      <h4 className="font-bold text-slate-800">{activeSkill.name}</h4>
                      <div className="text-xs text-slate-500">{activeSkill.category}</div>
                    </div>
                  </div>

                  {/* <div>
                    <div className="text-sm text-slate-600 mb-2">{t("proficiencyLevel")}</div>
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                        style={{ width: `${activeSkill.level}%` }}
                      />
                    </div>
                    <div className="text-right text-xs text-slate-500 mt-1">{activeSkill.level}%</div>
                  </div> */}

                  <div>
                    <div className="text-sm text-slate-600 mb-1">{t("description")}</div>
                    <p className="text-sm text-slate-700">{activeSkill.description}</p>
                  </div>
                </motion.div>
              ) : (
                <div className="h-full flex items-center justify-center text-center p-4">
                  <p className="text-slate-500 text-sm">{t("hoverSkill")}</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Skill categories */}
        <motion.div
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {Object.entries(categories).map(([category, categorySkills], index) => (
            <div key={category} className="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-blue-100">
              <h3 className="font-bold text-slate-800 mb-3">{category}</h3>
              <div className="space-y-2">
                {categorySkills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="text-blue-600">{skill.icon}</div>
                      <span className="text-sm text-slate-700">{skill.name}</span>
                    </div>
                    <span className="text-xs font-medium px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                      {skill.level}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

