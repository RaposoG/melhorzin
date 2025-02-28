interface SvgComponentProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const StarSvg = ({ size = 20, ...props }: SvgComponentProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <path
      fill="#FFCE22"
      d="M8.607 1.943c.772-1.318 2.678-1.318 3.45 0l1.726 2.944a2 2 0 0 0 1.297.942l3.333.731c1.492.328 2.08 2.14 1.066 3.282l-2.266 2.551a2 2 0 0 0-.496 1.524l.335 3.396c.15 1.52-1.392 2.64-2.792 2.029l-3.127-1.368a2 2 0 0 0-1.602 0l-3.127 1.367c-1.4.613-2.941-.507-2.791-2.028l.334-3.396a2 2 0 0 0-.496-1.524l-2.266-2.55C.17 8.7.759 6.887 2.251 6.56l3.333-.731a2 2 0 0 0 1.297-.942l1.726-2.944Z"
    />
  </svg>
);
