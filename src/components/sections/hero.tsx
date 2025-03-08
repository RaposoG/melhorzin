import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const socialLinks = [
  { Icon: Github, likes: "https://github.com/lkgiovani" },
  { Icon: Linkedin, likes: "https://www.linkedin.com/in/lkgiovani/" },
  { Icon: Mail, likes: "mailto:lkgiovani@gmail.com" },
];

export default function Hero() {
  const t = useTranslations("hero");

  const handleDownload = (lang: string) => {
    const fileUrl = lang === "pt" ? "/cv_pt_br.pdf" : "/cv_en.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    const fileName = fileUrl.split("/").pop() || "download.pdf";
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="h-screen flex items-center relative mt-10">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 md:mb-4 text-foreground">
            Giovani souza
          </h1>
          <h2 className="text-xl sm:text-2xl mb-3 md:mb-6 text-foreground">
            {t("iAm")}
            <span className="text-primary"> {t("position")}</span>
          </h2>
          <p className="text-gray-400 mb-4 md:mb-8 max-w-xl">
            {t("description")}
          </p>

          <div className="flex gap-3 md:gap-4 mb-6 md:mb-8">
            {socialLinks.map((Icon, index) => (
              <a
                key={index}
                href={Icon.likes}
                className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-primary/80 flex items-center justify-center hover:bg-foreground/20 transition-colors text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon.Icon className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            ))}
          </div>
          <div className="flex gap-4">
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button className="bg-primary hover:bg-primary/70 text-background text-sm md:text-base">
                  Download CV
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => handleDownload("pt")}>
                  PT-BR
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleDownload("en")}>
                  EN
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <Avatar className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]">
            <AvatarImage src="./eu.jpg" alt="Giovani Souza" />
            <AvatarFallback>GS</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </section>
  );
}
