type SocialPlatform = {
  name: string;
  url: string;
  icon: React.ComponentType;
  navbar: boolean;
};

type NavItem = {
  href: string;
  icon: React.ComponentType;
  label: string;
};

type WorkExperience = {
  company: string;
  href?: string;
  badges?: string[];
  location?: string;
  title: string;
  logoUrl?: string;
  start: string;
  end: string;
  description?: string;
};

type Education = {
  school: string;
  href?: string;
  degree: string;
  logoUrl?: string;
  start: string;
  end: string;
};

type ProjectLink = {
  type: string;
  href: string;
  icon: JSX.Element;
};

type Project = {
  title: string;
  href?: string;
  dates?: string;
  active?: boolean;
  description?: string;
  technologies?: string[];
  links?: ProjectLink[];
  image?: string;
  video?: string;
};

type Hackathon = {
  title: string;
  dates: string;
  location?: string;
  description?: string;
  image?: string;
  win?: string;
  links?: ProjectLink[];
};

type ResumeData = {
  name: string;
  initials: string;
  url?: string;
  location: string;
  locationLink?: string;
  description: string;
  summary?: string;
  avatarUrl?: string;
  skills: string[];
  navbar: NavItem[];
  contact: {
    email?: string;
    tel?: string;
    social: Record<string, SocialPlatform>;
  };
  work: WorkExperience[];
  education: Education[];
  projects: Project[];
  hackathons?: Hackathon[];
};

export type { SocialPlatform, NavItem, WorkExperience, Education, ProjectLink, Project, Hackathon, ResumeData };