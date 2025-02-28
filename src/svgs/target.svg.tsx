import { SVGProps } from "react";

export const TargetSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    fill="none"
    {...props}
  >
    <path
      fill="#FFD11A"
      d="M28.927 34.417H21.12V50h7.806V34.417ZM28.927 0H21.12v15.583h7.806V0ZM34.41 21.095V28.9h15.584v-7.805H34.41ZM0 21.102v7.805h15.583v-7.805H0Z"
    />
    <path
      fill="#404040"
      d="m34.424 28.877-5.52 5.52 11.02 11.018 5.519-5.52-11.02-11.018ZM10.092 4.546l-5.52 5.519 11.02 11.019 5.519-5.52L10.09 4.547ZM28.887 15.589l5.52 5.519 11.018-11.02-5.52-5.518-11.018 11.019ZM4.557 39.92l5.52 5.519L21.094 34.42l-5.52-5.52L4.558 39.92Z"
    />
  </svg>
);
