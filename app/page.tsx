import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Footer from "@/components/footer"
import LanguageSwitcher from "@/components/language-switcher"
import Contact from "@/components/contact"
import ThemeToggle from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <ThemeToggle />
      <LanguageSwitcher />
      <Hero name="Vinicius Rossado" title="Senior Software Engineer" photoUrl="/profilepic.jpeg" />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Footer />
    </main>
  )
}

