import TechnologiesCarousel from "@/components/technologiesCarousel/index";
import { useTranslations } from "next-intl";

export default function Technologies() {
  const t = useTranslations("technologiesCarousel");

  return (
    <section id="technologies" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
          {t("title")}
        </h2>
        <TechnologiesCarousel />
      </div>
    </section>
  );
}
