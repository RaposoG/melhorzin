import { PropsWithChildren } from "react";

type AvatarProps = {
  avatarImage: string;
  size?: number;
};

type CardProps = {
  name: string;
  role: string;
};
type AvatarWithInfoType = {
  ({ children }: PropsWithChildren<{}>): JSX.Element;
  Avatar: (props: AvatarProps) => JSX.Element;
  Info: (props: CardProps) => JSX.Element;
};

const AvatarWithInfo: AvatarWithInfoType = ({ children }) => {
  return <div className="flex items-center gap-4">{children}</div>;
};

const Avatar = ({
  avatarImage = "https://github.com/henriqueteixeiradev.png",
  size = 80,
}: AvatarProps) => {
  return (
    <div
      className="w-20 h-20 flex justify-center items-center rounded-full bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${avatarImage})`,
        width: size,
        height: size,
      }}
    />
  );
};

const Info = ({ name, role }: CardProps) => {
  return (
    <div className="flex flex-col">
      <b className="text-xl">{name}</b>
      <small className="text-muted-foreground text-lg">{role}</small>
    </div>
  );
};
AvatarWithInfo.Avatar = Avatar;
AvatarWithInfo.Info = Info;

export { AvatarWithInfo };
