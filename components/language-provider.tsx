"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "pt" | "en" | "ru" | "et"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const translations = {
  pt: {
    welcome: "Bem-vindo ao meu portfolio",
    about: "Sobre Mim",
    skills: "Minhas Habilidades",
    projects: "Projetos Recentes",
    contact: "Entre em Contato",
    viewWork: "Conheça meu trabalho",
    contactMe: "Entre em contato",
    fullstackDev: "Desenvolvedor FullStack",
    seeProjects: "Ver projetos",
    sendMessage: "Enviar Mensagem",
    name: "Nome",
    email: "Email",
    message: "Mensagem",
    phone: "Telefone",
    location: "Localização",
    letsChat: "Vamos conversar!",
    availableFor:
      "Estou disponível para projetos freelance, oportunidades de trabalho ou apenas para trocar ideias sobre desenvolvimento web.",
    recentProjects:
      "Explore alguns dos meus trabalhos mais recentes, demonstrando minhas habilidades em desenvolvimento web full-stack.",
    mainFeatures: "Principais recursos:",
    seeMoreGithub: "Ver mais no GitHub",
    checkoutMyLinkedIn: "LinkedIn",
    beginnerLevel: "Iniciante",
    advancedLevel: "Avançado",
    skillDetails: "Detalhes",
    proficiencyLevel: "Nível de proficiência",
    description: "Descrição",
    hoverSkill: "Passe o mouse sobre uma habilidade para ver mais detalhes",
    transformingIdeas: "Transformando ideias em experiências digitais excepcionais",
    frontendDev: "Desenvolvimento Frontend",
    backendDev: "Desenvolvimento Backend",
    database: "Banco de Dados",
    fullWebApps: "Aplicações Web Completas",
  },
  en: {
    welcome: "Welcome to my portfolio",
    about: "About Me",
    skills: "My Skills",
    projects: "Recent Projects",
    contact: "Contact Me",
    viewWork: "View my work",
    contactMe: "Contact me",
    fullstackDev: "Senior Software Engineer",
    seeProjects: "See projects",
    sendMessage: "Send Message",
    name: "Name",
    email: "Email",
    message: "Message",
    phone: "Phone",
    location: "Location",
    letsChat: "Let's chat!",
    availableFor:
      "I'm available for freelance projects, job opportunities, or just to exchange ideas about web development.",
    recentProjects: "Explore some of my recent work, showcasing my skills in full-stack web development.",
    mainFeatures: "Main features:",
    seeMoreGithub: "See more on GitHub",
    checkoutMyLinkedIn: "LinkedIn",
    beginnerLevel: "Beginner",
    advancedLevel: "Advanced",
    skillDetails: "Details",
    proficiencyLevel: "Proficiency level",
    description: "Description",
    hoverSkill: "Hover over a skill to see more details",
    transformingIdeas: "Transforming ideas into exceptional digital experiences",
    frontendDev: "Frontend Development",
    backendDev: "Backend Development",
    database: "Database",
    fullWebApps: "Full Web Applications",
  },
  ru: {
    welcome: "Добро пожаловать в мое портфолио",
    about: "Обо мне",
    skills: "Мои навыки",
    projects: "Недавние проекты",
    contact: "Связаться со мной",
    viewWork: "Посмотреть мои работы",
    contactMe: "Связаться со мной",
    fullstackDev: "Фулстек-разработчик",
    seeProjects: "Посмотреть проекты",
    sendMessage: "Отправить сообщение",
    name: "Имя",
    email: "Электронная почта",
    message: "Сообщение",
    phone: "Телефон",
    location: "Местоположение",
    letsChat: "Давайте пообщаемся!",
    availableFor: "Я доступен для фриланс-проектов, предложений работы или просто для обмена идеями о веб-разработке.",
    recentProjects: "Изучите некоторые из моих последних работ, демонстрирующих мои навыки в фулстек веб-разработке.",
    mainFeatures: "Основные функции:",
    seeMoreGithub: "Смотреть больше на GitHub",
    checkoutMyLinkedIn: "Посмотреть мой LinkedIn",
    beginnerLevel: "Начинающий",
    advancedLevel: "Продвинутый",
    skillDetails: "Детали",
    proficiencyLevel: "Уровень владения",
    description: "Описание",
    hoverSkill: "Наведите курсор на навык, чтобы увидеть подробности",
    transformingIdeas: "Превращаю идеи в исключительный цифровой опыт",
    frontendDev: "Фронтенд-разработка",
    backendDev: "Бэкенд-разработка",
    database: "Базы данных",
    fullWebApps: "Полные веб-приложения",
  },
  et: {
    welcome: "Tere tulemast minu portfooliosse",
    about: "Minust",
    skills: "Minu oskused",
    projects: "Viimased projektid",
    contact: "Võta ühendust",
    viewWork: "Vaata minu tööd",
    contactMe: "Võta minuga ühendust",
    fullstackDev: "Täistekkide arendaja",
    seeProjects: "Vaata projekte",
    sendMessage: "Saada sõnum",
    name: "Nimi",
    email: "E-post",
    message: "Sõnum",
    phone: "Telefon",
    location: "Asukoht",
    letsChat: "Räägime!",
    availableFor:
      "Olen saadaval vabakutseliste projektide, tööpakkumiste jaoks või lihtsalt veebiarenduse ideede vahetamiseks.",
    recentProjects: "Tutvu mõnede minu viimaste töödega, mis näitavad minu oskusi täistekkide veebiarenduses.",
    mainFeatures: "Peamised funktsioonid:",
    seeMoreGithub: "Vaata rohkem GitHubis",
    checkoutMyLinkedIn: "Vaata minu LinkedIni",
    beginnerLevel: "Algaja",
    advancedLevel: "Edasijõudnud",
    skillDetails: "Üksikasjad",
    proficiencyLevel: "Oskuste tase",
    description: "Kirjeldus",
    hoverSkill: "Liiguta hiir oskuse kohale, et näha rohkem üksikasju",
    transformingIdeas: "Muudan ideed erakordseteks digitaalseteks kogemusteks",
    frontendDev: "Frontendi arendus",
    backendDev: "Backendi arendus",
    database: "Andmebaasid",
    fullWebApps: "Täielikud veebirakendused",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

