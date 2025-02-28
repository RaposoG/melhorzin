import { useTranslations } from "next-intl";
import { Language } from "../Language";
import ModeToggle from "../modeToggle";

type HeaderProps = {
  activeSection: string;
};

type NavItems = {
  value: "home" | "about" | "services" | "technologies" | "contact";
};

const navItems: NavItems[] = [
  { value: "home" },
  { value: "about" },
  { value: "technologies" },
  { value: "services" },
  { value: "contact" },
];

export default function Header({ activeSection }: HeaderProps) {
  const t = useTranslations("header.nav");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-sm  ">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex relative justify-end space-x-8 items-center ">
          <ul className="flex mx-auto gap-4">
            {navItems.map((item) => (
              <li key={item.value}>
                <button
                  onClick={() => scrollToSection(item.value)}
                  className={`capitalize ${
                    activeSection === item.value
                      ? "text-primary"
                      : "text-foreground hover:text-primary/75"
                  } transition-colors`}
                >
                  {t(item.value)}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex gap-2 absolute right-0">
            <ModeToggle />
            <Language />
          </div>
        </div>
      </nav>
    </header>
  );
}
