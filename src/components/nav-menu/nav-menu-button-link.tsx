"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

interface NavMenuButtonLinkProps
  extends React.ComponentPropsWithoutRef<typeof Button> {
  url: string;
  text: string;
}

export function NavMenuButtonLink({
  url,
  text,
  ...props
}: NavMenuButtonLinkProps) {
  const usePathName = usePathname();

  return (
    <Button
      variant={usePathName.slice(0, 1) === url ? "outline" : "link"}
      className="text-white"
      asChild
      {...props}
    >
      <Link href={url}>{text}</Link>
    </Button>
  );
}
