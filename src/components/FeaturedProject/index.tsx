import { type LottieRefCurrentProps } from 'lottie-react';
import { useRef } from 'react';
import {
  Body,
  Description,
  Hover,
  Link,
  LinkContent,
  Project,
  Title
} from './styles';
import type { FeaturedProjectProps } from '@/src/@types';
import { LottieRender } from '../LottieRender';

export const FeaturedProject = ({
  project,
  onHover,
  isHovered
}: FeaturedProjectProps) => {
  const { title, links, description, iconName, width, height, margin } =
    project;

  const iconRef = useRef<LottieRefCurrentProps | null>(null);
  const githubIconRef = useRef<LottieRefCurrentProps | null>(null);
  const webIconRef = useRef<LottieRefCurrentProps | null>(null);

  return (
    <Project
      onHoverStart={() => onHover(title)}
      onHoverEnd={() => onHover('')}
      data-testid='featuredProject'
      onMouseEnter={() => iconRef.current?.play()}
      onMouseLeave={() => iconRef.current?.stop()}
      aria-label='featuredProject'
    >
      <LottieRender
        lottieRef={iconRef}
        style={{
          width: width || 24,
          height: height || 24,
          margin: margin || '0 0 10px 0'
        }}
        iconName={iconName}
      />
      <Body>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <LinkContent>
          {links.git && (
            <Link
              href={links.git}
              show={isHovered}
              target='_blank'
              onMouseEnter={() => githubIconRef.current?.play()}
              onMouseLeave={() => githubIconRef.current?.stop()}
            >
              <LottieRender lottieRef={githubIconRef} iconName={'source'} />
            </Link>
          )}
          {links.web && (
            <Link
              href={links.web}
              show={isHovered}
              target='_blank'
              onMouseEnter={() => webIconRef.current?.play()}
              onMouseLeave={() => webIconRef.current?.stop()}
            >
              <LottieRender lottieRef={webIconRef} iconName={'copy-link'} />
            </Link>
          )}
        </LinkContent>
      </Body>
      {isHovered && (
        <Hover
          layoutId='projects'
          initial={{ y: 0, opacity: 1 }}
          animate={{
            y: 5,
            transition: {
              type: 'tween',
              repeat: 1,
              repeatType: 'reverse'
            }
          }}
          exit={{ y: 0, opacity: 0 }}
        />
      )}
    </Project>
  );
};
