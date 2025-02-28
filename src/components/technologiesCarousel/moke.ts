import {
  SiJavascript,
  SiTypescript,
  SiGo,
  SiNextdotjs,
  SiNodedotjs,
  SiAwslambda,
  SiAmazons3,
  SiAmazondynamodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiRust,
  SiPython,
  SiReact,
} from "react-icons/si";

type Icon = {
  name:
    | "JavaScript"
    | "TypeScript"
    | "Go"
    | "Next.js"
    | "Node.js"
    | "AWS Lambda"
    | "Amazon S3"
    | "DynamoDB"
    | "PostgreSQL"
    | "MySQL"
    | "Redis"
    | "Rust"
    | "Python"
    | "React";
  IconComponent: any;
  colorDark: string;
  colorLight: string;
};

export const icon: Icon[] = [
  {
    name: "JavaScript",
    IconComponent: SiJavascript,
    colorDark: "#F7DF1E",
    colorLight: "#F7DF1E",
  },
  {
    name: "TypeScript",
    IconComponent: SiTypescript,
    colorDark: "#3178C6",
    colorLight: "#3178C6",
  },
  {
    name: "Go",
    IconComponent: SiGo,
    colorDark: "#00ADD8",
    colorLight: "#00ADD8",
  },
  {
    name: "Next.js",
    IconComponent: SiNextdotjs,
    colorDark: "#FFFFFF",
    colorLight: "#000000",
  },
  {
    name: "Node.js",
    IconComponent: SiNodedotjs,
    colorDark: "#68A063",
    colorLight: "#68A063",
  },
  {
    name: "AWS Lambda",
    IconComponent: SiAwslambda,
    colorDark: "#FF9900",
    colorLight: "#FF9900",
  },
  {
    name: "Amazon S3",
    IconComponent: SiAmazons3,
    colorDark: "#569A31",
    colorLight: "#569A31",
  },
  {
    name: "DynamoDB",
    IconComponent: SiAmazondynamodb,
    colorDark: "#4053D6",
    colorLight: "#4053D6",
  },
  {
    name: "PostgreSQL",
    IconComponent: SiPostgresql,
    colorDark: "#336791",
    colorLight: "#336791",
  },
  {
    name: "MySQL",
    IconComponent: SiMysql,
    colorDark: "#4479A1",
    colorLight: "#4479A1",
  },
  {
    name: "Redis",
    IconComponent: SiRedis,
    colorDark: "#DC382D",
    colorLight: "#DC382D",
  },
  {
    name: "Rust",
    IconComponent: SiRust,
    colorDark: "#ffffff",
    colorLight: "#000000",
  },
  {
    name: "Python",
    IconComponent: SiPython,
    colorDark: "#FFD75E",
    colorLight: "#FFD75E",
  },
  {
    name: "React",
    IconComponent: SiReact,
    colorDark: "#61DAFB",
    colorLight: "#61DAFB",
  },
];
