import theme from "@/lib/tw-resolve-colors";
import { ArrowTopRightSvg } from "@/svgs/arrow-top-right.svg";
import { TargetSvg } from "@/svgs/target.svg";
import Link from "next/link";

interface BenefitsCardViewProps {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
}

export function BenefitsCardView({
  title,
  subtitle,
  description,
  icon,
}: BenefitsCardViewProps) {
  return (
    <div className="col-span-1 flex flex-col  py-12 gap-7 px-20 h-full border-r last:border-none">
      {icon}

      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-semibold text-primary">{title}</h2>
          <small className="text-foreground text-lg">{subtitle}</small>
        </div>
        {/* <button className="flex justify-center items-center p-3 rounded-full bg-primary-default bg-primary hover:brightness-110 transition-all">
          <Link href="">
            <ArrowTopRightSvg pathColor={theme.colors.black} />
          </Link>
        </button> */}
      </div>
      <p className="text-muted-foreground text-lg">{description}</p>
    </div>
  );
}
