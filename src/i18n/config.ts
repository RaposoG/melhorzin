export interface Language {
  code: string;
  name: string;
  flag: string;
  region: string;
}

export const languages: Language[] = [
  {
    code: "en",
    name: "English",
    flag: "🇺🇸",
    region: "United States",
  },
  {
    code: "pt-br",
    name: "Português",
    flag: "🇧🇷",
    region: "Brasil",
  },
  {
    code: "es",
    name: "Español",
    flag: "🇪🇸",
    region: "España",
  },
  {
    code: "fr",
    name: "Français",
    flag: "🇫🇷",
    region: "France",
  },
  {
    code: "de",
    name: "Deutsch",
    flag: "🇩🇪",
    region: "Deutschland",
  },
];

export const defaultLocale = "en";
