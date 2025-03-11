import { useTranslations } from "next-intl";
import { NavMenuButtonLink } from "./nav-menu-button-link";

export function NavMenuNavLink() {
  const t = useTranslations("nav-menu");

  const NAV_MENU_DATA = [
    {
      text: t("welcome"),
      url: "/",
    },
    {
      text: t("technology"),
      url: "#technology",
    },
    {
      text: t("competence"),
      url: "#competence",
    },
    {
      text: t("journey"),
      url: "#journey",
    },
    {
      text: t("career"),
      url: "#career",
    },
    // {
    //   text: t("testimonials"),
    //   url: "#testimonials",
    // },
    {
      text: t("projects"),
      url: "#projects",
    },
  ];

  return (
    <ul className="inline-flex items-center">
      {NAV_MENU_DATA.map((link, index) => (
        <li key={index}>
          <NavMenuButtonLink text={link.text} url={link.url} />
        </li>
      ))}
    </ul>
  );
}


