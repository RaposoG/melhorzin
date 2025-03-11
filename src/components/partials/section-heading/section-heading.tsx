import { Button } from "@/components/ui/button";
import { ArrowTopRightSvg } from "@/svgs/arrow-top-right.svg";
import Link from "next/link";

interface SectionHeadingProps {
  pretitle: string;
  title: string;
  buttonLabel?: string;
  url?: string;
}

export function SectionHeading({
  pretitle,
  title,
  buttonLabel,
  url,
}: SectionHeadingProps) {
  return (
    <div className="w-full py-14 bg-zinc-900 px-4" >
      <div className="flex items-center w-full content-box justify-between">
        <div className="flex flex-col gap-5">
          {pretitle && (
            <span className="p-3 bg-zinc-700 w-fit rounded-md">{pretitle}</span>
          )}
          <h2 className="font-semibold text-5xl">{title}</h2>
        </div>

        {buttonLabel && url && (
          <Button variant={"outline"} size={"lg"} asChild>
            <Link href={url} className="flex items-center gap-3">
              {buttonLabel}
              <ArrowTopRightSvg size={14} />
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}
