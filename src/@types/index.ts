import type { getDeviceType } from '@/src/utils/getDeviceType';
import type {
  ButtonHTMLAttributes,
  Dispatch,
  ReactNode,
  SetStateAction
} from 'react';
import type LinkProps from 'next/link';
import { type emailSchema } from '../schemas';
import type * as z from 'zod';
import { type PropsWithChildren } from 'react';

export interface DefaultProps {
  primaryColor: string;
  secondaryColor: string;
}

export interface BaseProps extends DefaultProps {
  children: React.ReactNode;
  title: string;
  tagline: string;
}

export interface AboutProps extends DefaultProps {
  imagePath: string;
}

export interface JobsProps {
  jobTitle: string;
  company: string;
  companyUrl: string;
  startDate: string;
  endDate?: string;
  location: string;
}

export interface Project extends IconNameProps {
  title: string;
  links: {
    git?: string;
    web?: string;
  };
  description?: string;
  width?: number;
  height?: number;
  margin?: string;
}

export interface IconNameProps {
  iconName?: string;
}

export type Projects = Project;

export interface FeaturedProjectProps {
  project: Project;
  onHover: Dispatch<SetStateAction<string>>;
  isHovered: boolean;
}

export interface LinkProps {
  title: string;
  url: string;
  icon: JSX.Element;
  variant: Variants;
}

type Variants = 'instagram' | 'email' | 'github' | 'linkedin';

export interface ILinkProps {
  link: LinkProps;
  index: number;
}

export interface IconProps {
  isSuccess?: boolean;
}

export interface ToastProps extends IconProps {
  title: string;
  description: string;
  showToast: boolean;
  setShowToast: (showToast: boolean) => void;
  children?: ReactNode;
}

export interface OpenCommandPalleteProps {
  type?: ReturnType<typeof getDeviceType>;
}

export type EmailProps = z.infer<typeof emailSchema>;

export type SendButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren;
