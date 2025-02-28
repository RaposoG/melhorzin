import type { ILinkProps } from '@/src/@types';
import { Anchor, Title } from './styles';

export const Link = ({ link, index }: ILinkProps) => {
  const target = link.url.startsWith('http') ? '_blank' : '_self';

  return (
    <Anchor
      type={link.variant}
      key={index}
      href={link.url}
      target={target}
      aria-label='link'
    >
      <Title>{link.title}</Title>
      {link.icon}
    </Anchor>
  );
};
