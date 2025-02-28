import { NavMenuButtonLink } from "./nav-menu-button-link";

export function NavMenuNavLink() {
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

const NAV_MENU_DATA = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "News",
    url: "/news",
  },
  {
    text: "Podcasts",
    url: "/podcasts",
  },
  {
    text: "Resources",
    url: "/resources",
  },
];
