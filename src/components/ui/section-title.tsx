import type React from "react";
interface SectionTitleProps {
  children: React.ReactNode;
  highlight?: string;
}

export default function SectionTitle({
  children,
  highlight,
}: SectionTitleProps) {
  if (highlight) {
    const parts = children!.toString().split(highlight);
    return (
      <h2 className="text-4xl font-bold mb-12 text-center">
        {parts[0]}
        <span className="text-foreground">{highlight}</span>
        {parts[1]}
      </h2>
    );
  }

  return (
    <h2 className="text-4xl font-bold mb-12 text-foreground text-center">
      {children}
    </h2>
  );
}
