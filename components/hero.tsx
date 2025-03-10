"use client"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import { Code, Award, Briefcase, CheckCircle2, Layers, Smartphone } from "lucide-react"
import CodeTerminal from "./code-terminal"

interface HeroProps {
  name: string
  title: string
  photoUrl: string
  yearsOfExperience?: number
}

export default function Hero({ name, title, photoUrl, yearsOfExperience = 7 }: HeroProps) {
  const { t } = useLanguage()

  const codeLines = [
    "using System;",
    "using System.Linq;",
    "using System.Collections.Generic;",
    "\n",
    "",
    "namespace Portfolio",
    "{",
    "    public class SeniorDeveloper",
    "    {",
    `        public string Name { get; } = "${name}";`,
    `        public string Role { get; } = "${title}";`,
    `        public int YearsOfExperience { get; } = ${yearsOfExperience + 1};`,
    "        public List<string> Skills { get; } = new List<string>",
    "        {",
    '            "Architecture",',
    '            "Leadership",',
    '            "Mentoring",',
    '            "Problem Solving",',
    '            "Teamwork"',
    "        };",
    "\n",
    "        public IEnumerable<Solution> SolveComplexProblems()",
    "        {",
    "            return _solutions",
    "                .Where(s => s.IsScalable && s.IsEfficient)",
    "                .OrderBy(s => s.Complexity);",
    "        }",
    "\n",
    "        public IEnumerable<CodeReview> DeliverQualityCode()",
    "        {",
    "            return _codeBase.Select(c => new CodeReview",
    "            {",
    "                Code = c,",
    "                IsTestable = true,",
    "                IsReadable = true,",
    "                IsOptimized = true",
    "            });",
    "        }",
    "    }",
    "}",
  ]

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with blur */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${photoUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(8px) brightness(0.7)",
        }}
      />

      {/* Overlay for better text visibility with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 to-slate-900/60 dark:from-slate-900/80 dark:to-black/80 backdrop-blur-sm z-10" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        {/* Left side - Text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-6 inline-block"
          >
            <div className="text-xs md:text-sm tracking-widest text-blue-200 dark:text-orange-200 uppercase font-medium mb-2">
              {t("welcome")}
            </div>
            <div className="h-0.5 w-20 bg-gradient-to-r from-blue-400 to-blue-200 dark:from-orange-500 dark:to-orange-300"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-2"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 dark:bg-orange-500/20 backdrop-blur-sm border border-blue-400/30 dark:border-orange-400/30 text-blue-200 dark:text-orange-200 text-xs font-medium mb-4">
              <Award className="w-3.5 h-3.5 mr-1.5" />
              <span>
                {yearsOfExperience}+ {t("yearsExperience")}
              </span>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {name.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index + 0.3 }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-xl md:text-2xl text-blue-100 dark:text-orange-100 font-light">
              <span className="text-blue-300 dark:text-orange-400">&lt;</span> {title}{" "}
              <span className="text-blue-300 dark:text-orange-400">/&gt;</span>
            </h2>
          </motion.div>

          {/* Key achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="space-y-3 mb-8"
          >
            {[
              { icon: <Briefcase className="w-4 h-4" />, text: t("seniorAchievement1") },
              { icon: <CheckCircle2 className="w-4 h-4" />, text: t("seniorAchievement2") },
              { icon: <Award className="w-4 h-4" />, text: t("seniorAchievement3") },
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="flex items-center text-blue-100 dark:text-orange-100"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 dark:bg-orange-500/20 flex items-center justify-center mr-3">
                  {achievement.icon}
                </div>
                <p className="text-sm md:text-base">{achievement.text}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#about"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 dark:bg-orange-500/10 dark:hover:bg-orange-500/20 text-white border border-white/30 dark:border-orange-500/30 backdrop-blur-sm rounded-full font-medium transition-all"
            >
              {t("viewWork")}
            </a>
            <a
              href="https://www.linkedin.com/in/viniciusrossado/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600/90 hover:bg-blue-600 dark:bg-orange-500/90 dark:hover:bg-orange-500 text-white rounded-full font-medium transition-all shadow-lg shadow-blue-500/20 dark:shadow-orange-500/20 hover:shadow-blue-500/40 dark:hover:shadow-orange-500/40"
            >
              {t("contactMe")}
            </a>
          </motion.div>
        </motion.div>

        {/* Right side - Terminal */}
        <CodeTerminal codeLines={codeLines} name={name} title={title} yearsOfExperience={yearsOfExperience} />
      </div>

      {/* Tech stack badges */}
      <div className="absolute bottom-20 left-0 right-0 z-20 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap justify-center gap-3 px-4"
        >
          {[
            { icon: <Code className="w-4 h-4" />, text: "C#" },
            { icon: <Code className="w-4 h-4" />, text: "TypeScript" },
            { icon: <Code className="w-4 h-4" />, text: "Go" },
            { icon: <Layers className="w-4 h-4" />, text: "Angular" },
            { icon: <Smartphone className="w-4 h-4" />, text: "SwiftUI" },
          ].map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }}
              className="flex items-center gap-1.5 bg-slate-800/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 dark:border-orange-900/30 rounded-full px-3 py-1.5 text-xs text-blue-100 dark:text-orange-100"
            >
              {tech.icon}
              <span>{tech.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 1.5,
        }}
      >
        <div className="w-6 h-10 border-2 border-white/50 dark:border-orange-500/50 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/70 dark:bg-orange-500/70 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}

