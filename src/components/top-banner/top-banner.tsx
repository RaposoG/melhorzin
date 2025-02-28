import { ArrowTopRightSvg } from "@/svgs/arrow-top-right.svg";
import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

interface TopBannerProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
  url: string;
}

export function TopBanner({ text, url, ...props }: TopBannerProps) {
  return (
    <section className="w-full flex py-5 justify-center items-center">
      <Link
        href={url}
        className="flex items-center gap-3 w-fit text-base font-light text-muted-foreground hover:brightness-110 transition-all"
        {...props}
      >
        {text} <ArrowTopRightSvg />
      </Link>
    </section>
  );
}
