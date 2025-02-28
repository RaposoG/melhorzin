import Image from "next/image";
import Section from "@/components/ui/section";
import SectionTitle from "@/components/ui/section-title";
import { useTranslations } from "next-intl";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import SVGComponent from "../logo";

export default function About() {
  const t = useTranslations("about-me");

  return (
    <Section id="about">
      <SectionTitle>{t("title")}</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center ">
        <div className="flex justify-center items-center py-4  ">
          <SVGComponent className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px]" />
        </div>
        <div className="space-y-3 md:space-y-4 text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-semibold text-primary">
            {t("title2")} Giovani
          </h3>
          <p className="text-sm sm:text-base text-foreground/80">
            {t("description1")}
          </p>
          <p className="text-sm sm:text-base text-foreground/80">
            {t("description2")}
          </p>
          <p className="text-sm sm:text-base text-foreground/80">
            {t("description3")}
          </p>
        </div>
      </div>
    </Section>
  );
}
