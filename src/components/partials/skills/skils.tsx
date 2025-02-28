import React from "react";

type SkillsProps = {
  children: React.ReactNode;
};

type SkillsHeadingProps = {
  icon: React.JSX.Element;
  title?: string;
  description: string;
};

type SkillsCardsProps = {
  data: {
    title?: string;
    description: string;
  }[];
};

const Skills: {
  ({ children }: SkillsProps): React.JSX.Element;
  Heading(props: SkillsHeadingProps): React.JSX.Element;
  Cards(data: SkillsCardsProps): React.JSX.Element;
} = ({ children }: SkillsProps) => {
  return (
    <div className="w-full border-t border-b">
      <div className="flex items-center w-full content-box">{children}</div>
    </div>
  );
};

const SkillsHeading = ({ icon, title, description }: SkillsHeadingProps) => {
  return (
    <div className="flex flex-col gap-12 w-[40%]">
      {icon}

      <div className="flex flex-col w-full gap-4">
        {title && <h3 className="text-4xl font-semibold">{title}</h3>}
        <p className="text-lg text-muted-foreground pr-20">{description}</p>
      </div>
    </div>
  );
};

const Cards = ({ data }: SkillsCardsProps) => {
  return (
    <div className="flex w-[60%] flex-wrap gap-7 border-l py-20 pl-20">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-[45%] flex-col gap-5 border rounded-xl p-10 bg-zinc-900"
        >
          <h4 className="text-2xl font-semibold">{item.title}</h4>
          <p className="text-lg text-muted-foreground">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

SkillsHeading.displayName = "SkillsHeading";

Skills.Heading = SkillsHeading;
Skills.Cards = Cards;

export { Skills };
