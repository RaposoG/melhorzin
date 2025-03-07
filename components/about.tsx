"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Database, Globe, Server, Zap } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const { t } = useLanguage()

  const services = [
    {
      icon: <Code className="w-5 h-5" />,
      title: t("frontendDev"),
      description: "Criação de interfaces modernas e responsivas com React, Next.js e Tailwind CSS.",
    },
    {
      icon: <Server className="w-5 h-5" />,
      title: t("backendDev"),
      description: "Construção de APIs robustas e escaláveis com Node.js, Express e TypeScript.",
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: t("database"),
      description: "Modelagem e otimização de bancos de dados SQL e NoSQL.",
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: t("fullWebApps"),
      description: "Desenvolvimento full-stack de aplicações web de ponta a ponta.",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-white">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%231E40AF' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-slate-800 mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          {t("about")}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full blur-md opacity-70"></div>
              <div className="relative aspect-square max-w-md mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src="/profilepic.jpeg"
                  alt="Foto de perfil"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Tech badges */}
              <motion.div
                className="absolute -bottom-5 -right-5 bg-white rounded-full shadow-lg p-3 border border-blue-100"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6, type: "spring" }}
              >
                <Zap className="w-6 h-6 text-blue-500" />
              </motion.div>

              <motion.div
                className="absolute -top-5 -left-5 bg-white rounded-full shadow-lg p-3 border border-blue-100"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.7, type: "spring" }}
              >
                <Code className="w-6 h-6 text-blue-500" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              {t("fullstackDev")}
            </div>

            <h3 className="text-2xl font-bold text-slate-800">{t("transformingIdeas")}</h3>

            <div className="space-y-4 text-slate-700">
              <p className="text-lg">
                Olá! Sou um desenvolvedor FullStack apaixonado por criar soluções web elegantes e funcionais.
              </p>
              <p>
                Com experiência em desenvolvimento front-end e back-end, trabalho com as tecnologias mais modernas para
                entregar projetos de alta qualidade que atendam às necessidades dos clientes.
              </p>
              <p>
                Minha abordagem combina design intuitivo com código limpo e eficiente, sempre buscando a melhor
                experiência para o usuário final.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              {/* <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
              >
                {t("contactMe")}
              </a> */}
              <a
                href="#projects"
                className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg font-medium transition-all border border-slate-200"
              >
                {t("seeProjects")}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Services section */}
        <motion.div
          className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 hover:border-blue-200 transition-all hover:shadow-xl group"
            >
              <div className="flex flex-col h-full">
                <div className="p-3 rounded-lg bg-blue-100 text-blue-600 w-fit mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {service.icon}
                </div>

                <h3 className="font-bold text-slate-800 mb-2">{service.title}</h3>
                <p className="text-sm text-slate-600 flex-grow">{service.description}</p>

                <div className="mt-4 h-0.5 w-12 bg-blue-200 group-hover:w-full transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

