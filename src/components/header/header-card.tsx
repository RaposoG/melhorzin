import Link from "next/link";

interface HeaderCardProps {
  label: string;
  text: string;
  icon: React.ReactNode;
  url: string;
}

export function HeaderCard({ icon, label, text, url }: HeaderCardProps) {
  return (
    <Link href={url} className="border-l first:border-l-0" target="_blank">
      <div className="flex gap-3 flex-1 justify-center flex-col p-12 ">
        <span className="text-3xl font-bold inline-flex items-center gap-2">
          {label}
          {icon}
        </span>
        <p className="text-muted-foreground">{text}</p>
      </div>
    </Link>
  );
}
