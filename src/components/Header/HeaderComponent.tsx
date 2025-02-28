"use client";
import Link from "next/link";
import { useState } from "react";

import { IoIosMail, IoIosClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { menuLabels } from "@/variables/data";
import { MenuProps } from "@/types/interfaces";
import ButtonComponent from "../Button/ButtonComponent";

export default function HeaderComponent() {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

  return (
    <>
      <header className="mobile flex w-full items-center justify-between gap-2 p-4 lg:hidden">
        <GiHamburgerMenu
          size={32}
          onClick={() => setToggleMobileMenu(!toggleMobileMenu)}
        />
        {toggleMobileMenu && (
          <div className="absolute left-0 top-0 z-50 h-screen w-full bg-black bg-opacity-80 p-4 lg:hidden">
            <nav
              role="navigation"
              aria-label="Navigation Menu"
              className="relative flex items-center"
            >
              <ul className="mt-2 flex flex-col justify-evenly gap-4">
                {menuLabels.map((item: MenuProps) => (
                  <li
                    className="text-xl text-color-six"
                    key={item.id}
                    onClick={() => setToggleMobileMenu(false)}
                  >
                    <Link
                      href={item.link ?? ""}
                      aria-label={`Go to section ${item.title}`}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <IoIosClose
                size={40}
                fill="#ffff"
                className="absolute right-0 top-0"
                onClick={() => setToggleMobileMenu(false)}
              />
            </nav>
          </div>
        )}
        <h1 className="text-2xl">
          <Link href="#" className="cssanimation leFadeInRight sequence">
            Mathpholio!
          </Link>
        </h1>
        <Link
          href="mailto:matheusg_souza@outlook.com"
          aria-label="Reach me out through here"
          target="_blank"
          className="flex h-10 items-center gap-1 rounded-lg bg-black p-2 text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 dark:bg-color-four"
        >
          <IoIosMail size={24} />
        </Link>
      </header>

      <header className="fixed z-50 m-auto -mt-8 hidden w-full items-center justify-between bg-gradient-to-b from-white px-[9%] pt-8 dark:from-black lg:flex">
        <h1 className="text-4xl">
          <Link href="#" className="cssanimation leFadeInRight sequence">
            Mathpholio!
          </Link>
        </h1>
        <nav
          role="navigation"
          aria-label="Navigation Menu"
          className="ml-4 mr-auto flex items-center"
        >
          <ul className="flex justify-evenly">
            {menuLabels.map((item: MenuProps) => (
              <li className="relative mx-2 text-xl" key={item.id}>
                <Link
                  className="nav	before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-black before:transition-all before:duration-200 before:content-[''] before:hover:w-full dark:before:bg-white"
                  href={item.link ?? ""}
                  aria-label={`Go to section ${item.title}`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ButtonComponent
          label="Contact"
          link="mailto:matheusg_souza@outlook.com"
          ariaLabel="Send me an email"
        >
          <IoIosMail size={20} />
        </ButtonComponent>
      </header>
    </>
  );
}
