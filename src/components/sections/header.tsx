import { useTranslations } from "next-intl";
import { Language } from "../Language";
import ModeToggle from "../modeToggle";
import SVGComponent from "../logo";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-sm transition-all ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <SVGComponent className="w-8 h-8 md:w-10 md:h-10" />
          </div>
          <button
            className="block md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground transition-all duration-300 rotate-90 animate-in" />
            ) : (
              <Menu className="h-6 w-6 text-foreground transition-all duration-300 animate-in" />
            )}
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex mx-auto gap-4 md:space-x-8">
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

          <div className="hidden md:flex items-center gap-2 ml-auto">
            <ModeToggle />
            <Language />
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-black/95 backdrop-blur-sm z-40 animate-in fade-in slide-in-from-top duration-300 ">
            <ul className="flex bg-background/95 flex-col items-start space-y-6  pb-5">
              {navItems.map((item, index) => (
                <li
                  key={item.value}
                  style={{ animationDelay: `${index * 75}ms` }}
                  className="animate-in fade-in slide-in-from-right-8"
                >
                  <Button
                    onClick={() => scrollToSection(item.value)}
                    variant={"link"}
                    className={`text-lg capitalize ${
                      activeSection === item.value
                        ? "text-primary font-medium"
                        : "text-foreground hover:text-primary/75"
                    } transition-colors`}
                  >
                    {t(item.value)}
                  </Button>
                </li>
              ))}
              <li
                className="animate-in fade-in slide-in-from-right-8"
                style={{ animationDelay: `${navItems.length * 75}ms` }}
              >
                <ModeToggle showText={true} />
              </li>
              <li
                className="animate-in fade-in slide-in-from-right-8"
                style={{ animationDelay: `${(navItems.length + 1) * 75}ms` }}
              >
                <Language type="text" />
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
