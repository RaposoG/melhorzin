import Link from "next/link";
import React from "react";
import * as interfaces from "@/types/interfaces";

export default function ButtonComponent({
  label,
  link,
  ariaLabel,
  isMobile,
  children,
}: interfaces.ButtonComponentProps) {
  const className = isMobile
    ? "flex h-10 w-36 items-center justify-center gap-1 rounded-xl bg-black p-2 px-8 text-white drop-shadow-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 dark:border-solid dark:bg-color-two dark:text-white"
    : "flex h-10 w-36 items-center justify-center gap-1 rounded-xl bg-black p-2 px-8 text-white drop-shadow-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 dark:border-solid dark:bg-color-four dark:text-white";

  return (
    <Link
      aria-label={ariaLabel}
      target="_blank"
      href={link ?? ""}
      className={className}
    >
      {label}
      {children}
    </Link>
  );
}
