import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Footer from "@/components/footer"
import LanguageSwitcher from "@/components/language-switcher"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      <LanguageSwitcher />
      <Hero name="Vinicius Rossado" title="Senior Software Engineer" photoUrl="/placeholder.svg?height=1080&width=1920" />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}

