import { Github, Linkedin, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-10 px-4 md:px-8 bg-slate-100 border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-slate-800">Vinicius Rossado</h3>
            <p className="text-slate-600 mt-1">Senior Software Engineer</p>
          </div>

          <div className="flex gap-4">
            <a
              target="_blank"
              href="https://www.github.com/vinirossado"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors shadow-sm"
              aria-label="Github"
            >
              <Github size={20} />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/viniciusrossado/"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors shadow-sm"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>

            <a
              target="_blank"
              href="https://www.instagram.com/vinirossado"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors shadow-sm"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-slate-200 mt-8 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; {currentYear} Vinicius Rossado. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

