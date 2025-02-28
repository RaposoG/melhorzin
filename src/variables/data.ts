import { MenuProps, TechSkills, Services } from "../types/interfaces";

export const websiteLogo: string = "/assets/logo.png";
export const menuLabels: Array<MenuProps> = [
  { id: "1", title: "Work experience", link: "#work-experience" },
  { id: "2", title: "Projects", link: "#projects" },
  { id: "3", title: "Skills", link: "#skills" },
];
export const services: Array<Services> = [
  {
    id: "1",
    title: "Web development",
    icon: "/assets/web.svg",
    description:
      "Crafting captivating digital experiences with the JavaScript development stack. Transforming designs into interactive interfaces for seamless user engagement. Elevating brands with visually stunning layouts and responsive design.",
  },
  {
    id: "2",
    title: "Mobile development",
    icon: "/assets/mobile.svg",
    description:
      "Transforming ideas into intuitive mobile apps. Expertise in iOS and Android platforms. Seamlessly blending design and functionality for a standout user experience. Elevate your brand with our mobile development expertise.",
  },
  {
    id: "3",
    title: "Back-end development",
    icon: "/assets/server.svg",
    description:
      "Powering your applications with robust backend solutions. Expertise in databases, APIs, and server-side technologies. Ensuring scalability, security, and reliability. Elevate your digital infrastructure with our backend development expertise.",
  },
];

export const techs: Array<TechSkills> = [
  {
    icon: "/assets/react.svg",
    title: "React",
    description:
      "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.",
  },
  {
    icon: "/assets/nodejs.svg",
    title: "Node.js",
    description:
      "Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.",
  },
  {
    icon: "/assets/react-native.svg",
    title: "React Native",
    description:
      "React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use the React framework along with native platform capabilities.",
  },
  {
    icon: "/assets/typescript.svg",
    title: "Typescript",
    description:
      "TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. It is designed for the development of large applications and transpiles to JavaScript.",
  },
  {
    icon: "/assets/nextjs.svg",
    title: "Next.js",
    description:
      "Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.",
  },
  {
    icon: "/assets/git.svg",
    title: "Git",
    description:
      "Git is a distributed version control system that tracks changes in any set of computer files, usually used for coordinating work among programmers who are collaboratively developing source code during software development.",
  },
  {
    icon: "/assets/expo.svg",
    title: "Expo",
    description:
      "Expo is a comprehensive platform and framework designed to facilitate the development, deployment, and management of universal native apps using React Native.",
  },
  {
    icon: "/assets/jest.svg",
    title: "Jest",
    description:
      "Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase. It allows you to write tests with an approachable, familiar and feature-rich API that gives you results quickly.",
  },
];
