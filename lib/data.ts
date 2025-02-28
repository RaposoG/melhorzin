import React from "react";

import { LuGraduationCap } from "react-icons/lu";
import { RiEnglishInput } from "react-icons/ri";
import { BiLogoReact } from "react-icons/bi";
import { FcLinux } from "react-icons/fc";
import { MdOutlineSecurity, MdWork } from "react-icons/md";
import { TbBrandNextjs } from "react-icons/tb";
import Ecomerce from "@/public/e-comerce.png";
import Kimmy from "@/public/kimmy.png";
import TSM from "@/public/tsm.png";
import Airbnb from "@/public/airbnb.png";
import Railsongram from "@/public/railsongram.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "English certification",
    location: "Brazil",
    description: "I have a degree in English from the English Live school",
    icon: React.createElement(RiEnglishInput),
    date: "2019",
  },
  {
    title: "Bachelor degree",
    location: "Brazil",
    description: "Graduated in systems analysis and development",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Graduated bootcamp",
    location: "Brazil",
    description:
      "I graduated in information security in intensive hacker/security courses. but I wasn't interested in this area as desired and decided to focus only on frontend.",
    icon: React.createElement(MdOutlineSecurity),
    date: "2020",
  },
  {
    title: "Linux bootcamp",
    location: "Brazil",
    description:
      "To improve my knowledge and improve my skills of technology, I took a Linux course, which made me more comfortable working in different environments.",
    icon: React.createElement(FcLinux),
    date: "2021",
  },
  {
    title: "Code Review - Practicum",
    location: "Brazil",
    description: "Work reviewing students projects in html/css/js",
    icon: React.createElement(MdWork),
    date: "2022",
  },
  {
    title: "Rocketseat",
    location: "Brazil",
    description: "Fullsatack React bootcamp",
    icon: React.createElement(BiLogoReact),
    date: "2022",
  },
  {
    title: "Tech Editor - Triple Ten",
    location: "Brazil",
    description: "Work reviewing students projects in html/css/js",
    icon: React.createElement(MdWork),
    date: "2022",
  },
  {
    title: "Full stack projects",
    location: "Brazil",
    description:
      "bootcamp focused on projects with nextjs/typescript/prisma and different databases",
    icon: React.createElement(TbBrandNextjs),
    date: "2023",
  },
  {
    title: "Frontend Developer - Cashtime",
    location: "Brazil",
    description: "1 year experience as a Frontend Developer at Cashtime",
    icon: React.createElement(MdWork),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "TSM statistics",
    description:
      "Website created to generate wild rift player/team statistics as a form of analysis for them.",
    tags: [
      "Typescript",
      "React",
      "Next.js",
      "Tailwind",
      "Clerk",
      "ChartJs",
      "Postgresql",
      "Prisma",
      "Zod",
      "Vercel",
    ],
    imageUrl: TSM,
  },
  {
    title: "Railsongram",
    description: "Social media app ",
    tags: [
      "Typescript",
      "React",
      "Next.js",
      "Tailwind",
      "Vite",
      "appwrite",
      "storage",
      "FilePond",
      "Zod",
    ],
    imageUrl: Railsongram,
  },
  {
    title: "Kimmy portfolio",
    description:
      "Website intended for a streamer for her personal presentation, with design and links to her social networks",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: Kimmy,
  },
  {
    title: "E-commerce",
    description:
      "My shop is a modern website developer just for fun, show a little bit about my skills",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: Ecomerce,
  },
  {
    title: "Airbnb",
    description:
      "Airbnb clone project with the aim of learning how to create new applications",
    tags: [
      "React",
      "Next.js",
      "Typescript",
      "Tailwind",
      "MongoDB",
      "Prisma",
      "Zod",
    ],
    imageUrl: Airbnb,
  },
] as const;

export const skillsData = [
  "TypeScript",
  "Next.js",
  "React",
  "JavaScript",
  "Node.js",
  "Prisma",
  "Git",
  "Tailwind",
  "Styled-component",
  "HTML",
  "CSS",
  "Clerk",
  "MongoDB",
  "PostgreSQL",
  "Api rest",
] as const;
