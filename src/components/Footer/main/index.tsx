import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';
import { RiMailLine } from 'react-icons/ri';
import { Link } from '..';
import type { LinkProps } from '@/src/@types';
import { Container } from './styles';

const links: LinkProps[] = [
  {
    title: 'Email',
    url: '/contact',
    icon: <RiMailLine />,
    variant: 'email'
  },
  {
    title: 'GitHub',
    url: 'https://github.com/micheldslive',
    icon: <BsGithub />,
    variant: 'github'
  },
  {
    title: 'LinkedIn',
    url: 'https://linkedin.com/in/micheldslive',
    icon: <BsLinkedin />,
    variant: 'linkedin'
  },
  {
    title: 'Instagram',
    url: 'https://instagram.com/micheldslive',
    icon: <FaInstagram />,
    variant: 'instagram'
  }
];

export function Footer() {
  return (
    <Container>
      {links.map((link, index) => (
        <Link key={index} link={link} index={index} />
      ))}
    </Container>
  );
}
