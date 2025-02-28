"use client";

import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import Cookies from "js-cookie";
import { Check, Globe } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { languages } from "@/i18n/config";

interface ToggleLanguageProps {
  type?: "icon" | "text";
}

export default function ToggleLanguage({ type = "icon" }: ToggleLanguageProps) {
  const router = useRouter();
  const currentLocale = useLocale();

  const changeLanguage = (newLocale: string) => {
    Cookies.set("NEXT_LOCALE", newLocale, { path: "/" });
    router.refresh();
  };

  const getCurrentLanguage = () => {
    return languages.find((lang) => lang.code === currentLocale) || languages[0];
  };

  const currentLang = getCurrentLanguage();

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="w-auto px-3 gap-2">
          {type === "icon" ? (
            <>
              <currentLang.flag title={currentLang.name} className="h-4 w-6" />
            </>
          ) : (
            <span>{currentLang.name}</span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {languages.map((language) => (
          <DropdownMenuItem key={language.code} className="flex items-center justify-between cursor-pointer" onClick={() => changeLanguage(language.code)}>
            <div className="flex items-center gap-2">
              <language.flag title={language.name} className="h-4 w-6" />
              <span>{language.name}</span>
            </div>
            {currentLocale === language.code && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <div className="p-2 text-xs text-muted-foreground">{currentLang.region}</div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
