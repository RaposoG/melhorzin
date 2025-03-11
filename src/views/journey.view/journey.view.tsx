import { SectionHeading } from "@/components/partials/section-heading/section-heading";
import { Skills } from "@/components/partials/skills/skils";
import { TargetSvg } from "@/svgs/target.svg";
import { useTranslations } from "next-intl";

export function JourneyView() {
  const t = useTranslations("journey");

  const company_one = useTranslations("journey.company_one")
  const company_two = useTranslations("journey.company_two")
  const company_three = useTranslations("journey.company_three")
  const company_four = useTranslations("journey.company_four")

  const DATA = [
    {
      id: 1,
      title: company_one("name"),
      description: company_one("description"),
    },
    {
      id: 2,
      title: company_two("name"),
      description: company_two("description"),
    },
    {
      id: 3,
      title: company_three("name"),
      description: company_three("description"),
    },
    {
      id: 4,
      title: company_four("name"),
      description: company_four("description"),
    },
  ];

  return (
    <div id="journey">
      <SectionHeading pretitle={t("pretitle")} title={t("title")} />

      <div className="bg-[url(/img/svgs/sun-rays.svg)] bg-no-repeat bg-left-top bg-contain bg-clip-content">
        <Skills>
          <Skills.Heading
            icon={<TargetSvg />}
            description={t("description")}
          />
          <Skills.Cards data={DATA} />
        </Skills>
      </div>
    </div>
  );
}

