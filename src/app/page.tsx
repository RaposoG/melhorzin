import { SpaceBackground } from "@/components/background/space-background";
import { ProjectCard } from "@/components/card/project-card";
import { ContactForm } from "@/components/form/contact-form";
import { HeroSection } from "@/components/section/hero-section";
import { SkillsSection } from "@/components/section/skills-section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge, ChevronRight, Mail, Github, Link, Linkedin } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <SpaceBackground />

      <div className="container relative z-10 mx-auto px-4 py-16">
        <HeroSection />

        <section id="about" className="my-20 scroll-mt-20">
          <h2 className="mb-6 text-3xl font-bold tracking-tight">
            <Badge className="mr-2 bg-purple-900/20 text-purple-300">01</Badge>
            {t("aboutSection.heading")}
          </h2>
          <Card className="border-purple-800/30 bg-black/40 p-6 backdrop-blur-md">
            <p className="mb-4 text-lg text-gray-300">{t("aboutSection.description1")}</p>
            <p className="text-lg text-gray-300">{t("aboutSection.description2")}</p>
            <div className="mt-6">
              <Button variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-900/20">
                {t("aboutSection.button")} <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Card>
        </section>

        <section id="projects" className="my-20 scroll-mt-20">
          <h2 className="mb-6 text-3xl font-bold tracking-tight">
            <Badge className="mr-2 bg-blue-900/20 text-blue-300">02</Badge>
            {t("projectsSection.heading")}
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard title={t("projectsSection.project1")} description={t("projectsSection.project1Desc")} image="/placeholder.svg?height=200&width=400" tags={["React", "TypeScript", "D3.js"]} />
            <ProjectCard title={t("projectsSection.project2")} description={t("projectsSection.project2Desc")} image="/placeholder.svg?height=200&width=400" tags={["Next.js", "Prisma", "tRPC"]} />
            <ProjectCard title={t("projectsSection.project3")} description={t("projectsSection.project3Desc")} image="/placeholder.svg?height=200&width=400" tags={["Vue", "Node.js", "MongoDB"]} />
          </div>
        </section>

        <SkillsSection />

        <section id="contact" className="my-20 scroll-mt-20">
          <h2 className="mb-6 text-3xl font-bold tracking-tight">
            <Badge className="mr-2 bg-green-900/20 text-green-300">04</Badge>
            {t("contactSection.heading")}
          </h2>
          <Card className="border-green-800/30 bg-black/40 p-6 backdrop-blur-md">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-xl font-semibold text-green-300">{t("contactSection.subheading")}</h3>
                <p className="mb-6 text-gray-300">{t("contactSection.description")}</p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="mr-3 h-5 w-5 text-green-400" />
                    <span>hello@spaceportfolio.com</span>
                  </div>
                  <div className="flex items-center">
                    <Github className="mr-3 h-5 w-5 text-green-400" />
                    <Link href="#" className="hover:text-green-300">
                      github.com/spacedev
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <Linkedin className="mr-3 h-5 w-5 text-green-400" />
                    <Link href="#" className="hover:text-green-300">
                      linkedin.com/in/spacedev
                    </Link>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </Card>
        </section>
      </div>

      <footer className="relative z-10 border-t border-gray-800 bg-black/60 py-8 backdrop-blur-md">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
          <div className="mt-4 flex justify-center space-x-4">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-white">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-white">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-white">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </footer>
    </main>
  );
}
