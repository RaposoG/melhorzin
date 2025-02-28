import React from "react";
import { US, BR, ES, FR, DE } from "country-flag-icons/react/3x2";

// Ajustamos a tipagem da propriedade 'flag' para aceitar componentes de bandeira diretamente
export interface Language {
  code: string;
  name: string;
  flag: React.FC<{ title?: string; className?: string }>;
  region: string;
}

export const languages: Language[] = [
  {
    code: "en",
    name: "English",
    flag: US,
    region: "United States",
  },
  {
    code: "pt-br",
    name: "Português",
    flag: BR,
    region: "Brasil",
  },
  {
    code: "es",
    name: "Español",
    flag: ES,
    region: "España",
  },
  {
    code: "fr",
    name: "Français",
    flag: FR,
    region: "France",
  },
  {
    code: "de",
    name: "Deutsch",
    flag: DE,
    region: "Deutschland",
  },
];

export const defaultLocale = "en";