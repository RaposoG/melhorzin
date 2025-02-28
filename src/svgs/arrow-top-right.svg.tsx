import theme from "@/lib/tw-resolve-colors";
import { SVGProps } from "react";

interface ArrowTopRightSvgProps extends SVGProps<SVGSVGElement> {
  pathColor?: string;
  size?: number;
}

export const ArrowTopRightSvg = ({
  pathColor = theme.colors.primary["DEFAULT"],
  size = 17,
  ...props
}: ArrowTopRightSvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 17 17"
    fill="none"
    {...props}
  >
    <path
      fill={pathColor}
      fillRule="evenodd"
      d="M4.75.25H16a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V2.81L1.53 16.53a.75.75 0 0 1-1.06-1.06L14.19 1.75H4.75a.75.75 0 0 1 0-1.5Z"
      clipRule="evenodd"
    />
  </svg>
);
