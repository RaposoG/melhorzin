import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import React from "react";
import { ResumeData } from "./types";

export const DATA: ResumeData = {
  name: "Your Name",
  initials: "YN",
  url: "https://yourwebsite.com",
  location: "Your City, Country",
  locationLink: "https://www.google.com/maps/place/yourcity",
  description: "A brief professional description about yourself",
  summary: "A more detailed professional summary highlighting your key experiences and achievements",
  avatarUrl: "/your-avatar.png",

  skills: ["React", "TypeScript", "Python"],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],

  contact: {
    email: "your.email@example.com",
    tel: "+1234567890",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/yourusername",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/yourusername",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/yourusername",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Company Name",
      title: "Your Job Title",
      start: "Month Year",
      end: "Present",
      description: "Detailed description of your responsibilities and achievements",
    },
  ],

  education: [
    {
      school: "University Name",
      degree: "Degree Name",
      start: "Year",
      end: "Year",
    },
  ],

  projects: [
    {
      title: "Project Name",
      description: "Detailed description of the project",
      technologies: ["Next.js", "TypeScript"],
      links: [
        {
          type: "Website",
          href: "https://projectwebsite.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
  ],

  // Optional sections
  hackathons: [
    {
      title: "Hackathon Name",
      dates: "Date Range",
      description: "Your project or achievement at the hackathon",
    },
  ],
} as const;

// Helper function to safely access nested properties
export const getResumeValue = <T,>(
  obj: any,
  path: string,
  defaultValue: T
): T => {
  return path.split('.').reduce((acc, part) => {
    return acc && acc[part] !== undefined ? acc[part] : defaultValue;
  }, obj);
};
