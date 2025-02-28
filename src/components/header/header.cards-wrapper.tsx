import { HeaderCard } from "./header-card";
import { SOCIAL_NETWORKS } from "@/mocks/social-networks";

export function HeaderCardWrapper() {
  return (
    <div className="flex w-full justify-end border-b border-t">
      <div className="flex w-full max-w-[calc(1536px/1.8)]">
        {SOCIAL_NETWORKS.map((link) => (
          <HeaderCard
            key={link.id}
            icon={link.icon}
            label={link.label}
            text={link.text}
            url={link.url}
          />
        ))}
      </div>
    </div>
  );
}
