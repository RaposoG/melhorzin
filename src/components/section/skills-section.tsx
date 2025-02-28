"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Code, Layers, Database, Palette, Cpu, Globe } from 'lucide-react'

export function SkillsSection() {
  const skills = [
    {
      category: "Frontend",
      icon: <Code className="h-6 w-6 text-orange-400" />,
      items: ["React", "Next.js", "Vue", "TypeScript", "Tailwind CSS"]
    },
    {
      category: "Backend",
      icon: <Layers className="h-6 w-6 text-blue-400" />,
      items: ["Node.js", "Express", "Python", "Django", "GraphQL"]
    },
    {
      category: "Database",
      icon: <Database className="h-6 w-6 text-green-400" />,
      items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"]
    },
    {
      category: "Design",
      icon: <Palette className="h-6 w-6 text-purple-400" />,
      items: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "UI/UX"]
    },
    {
      category: "DevOps",
      icon: <Cpu className="h-6 w-6 text-red-400" />,
      items: ["Docker", "Kubernetes", "AWS", "CI/CD", "GitHub Actions"]
    },
    {
      category: "Other",
      icon: <Globe className="h-6 w-6 text-teal-400" />,
      items: ["SEO", "Performance Optimization", "Accessibility", "Testing", "Analytics"]
    }
  ]
  
  return (
    <section id="skills" className="my-20 scroll-mt-20">
      <h2 className="mb-6 text-3xl font-bold tracking-tight">
        <Badge variant="outline" className="mr-2 bg-teal-900/20 text-teal-300">
          03
        </Badge>
        Skills
      </h2>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="border-teal-800/30 bg-black/40 p-6 backdrop-blur-md">
              <div className="mb-4 flex items-center">
                {skill.icon}
                <h3 className="ml-3 text-xl font-semibold text-white">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <Badge key={item} className="bg-teal-900/30 text-teal-200">
                    {item}
                  </Badge>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
