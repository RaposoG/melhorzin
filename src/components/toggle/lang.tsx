"use client";

import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import Cookies from "js-cookie";
import { Check, Globe } from "lucide-react";
import { languages } from "@/i18n/config";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";

export default function ToggleLanguage() {
  const router = useRouter();
  const currentLocale = useLocale();

  const changeLanguage = (newLocale: string) => {
    Cookies.set("NEXT_LOCALE", newLocale, { path: "/" });
    router.refresh();
  };

  const getCurrentLanguage = () => {
    return languages.find((lang) => lang.code === currentLocale) || languages[0];
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="w-auto px-3 gap-2">
          <Globe className="h-4 w-4" />
          <span>{getCurrentLanguage().flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {languages.map((language) => (
          <DropdownMenuItem key={language.code} className="flex items-center justify-between cursor-pointer" onClick={() => changeLanguage(language.code)}>
            <div className="flex items-center gap-2">
              <span className="text-base">{language.flag}</span>
              <span>{language.name}</span>
            </div>
            {currentLocale === language.code && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <div className="p-2 text-xs text-muted-foreground">{getCurrentLanguage().region}</div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
