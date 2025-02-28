import { BookA, Computer, PackageCheck } from "lucide-react";
import { BenefitsCardView } from "./benefits.card.view";
import theme from "@/lib/tw-resolve-colors";
import { useTranslations } from "next-intl";

export function BenefitsView() {
  const discover = useTranslations("features.discover");
  const define = useTranslations("features.define");
  const deliver = useTranslations("features.deliver");

  const DATA = [
    {
      id: 1,
      title: discover("title"),
      subtitle: discover("subtitle"),
      description: discover("description"),
      icon: <Computer size={40} color={theme.colors.muted.foreground} />,
    },
    {
      id: 2,
      title: define("title"),
      subtitle: define("subtitle"),
      description: define("description"),
      icon: <BookA size={40} color={theme.colors.muted.foreground} />,
    },
    {
      id: 3,
      title: deliver("title"),
      subtitle: deliver("subtitle"),
      description: deliver("description"),
      icon: <PackageCheck size={40} color={theme.colors.muted.foreground} />,
    },
  ];

  return (
    <section className="w-full border-b">
      <div className="grid grid-cols-3 items-center w-full mx-auto max-w-[1696px]">
        {DATA.map((benefit) => (
          <BenefitsCardView
            key={benefit.id}
            title={benefit.title}
            subtitle={benefit.subtitle}
            description={benefit.description}
            icon={benefit.icon}
          />
        ))}
      </div>

    </section>
  );
}

