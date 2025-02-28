import { useKBar } from 'kbar';
import { useRouter } from 'next/router';
import { useState } from 'react';
import {
  Anchor,
  Aside,
  CmdButton,
  CmdIcon,
  Header,
  Hover,
  List,
  Nav,
  NavContainer
} from './styles';
import { Themming, MiCodeLogo, LanguageSelect } from '@/src/components';
import { useTranslation } from 'next-i18next';

export const pages = ['about', 'projects', 'contact'] as const;

export const Navbar = () => {
  const { asPath } = useRouter();
  const [hovered, setHovered] = useState('');
  const { query } = useKBar();
  const { t } = useTranslation();

  return (
    <Header aria-label='header'>
      <MiCodeLogo />
      <Nav>
        <List>
          {pages.map(page => {
            const path = `/${page.toLowerCase()}`;
            const isHovered = hovered === page;

            return (
              <li key={page}>
                <Anchor href={path}>
                  <NavContainer
                    onHoverStart={() => setHovered(page)}
                    onHoverEnd={() => setHovered('')}
                    css={
                      asPath === path
                        ? {
                            color: '$primary',
                            '&::after': { opacity: 1 }
                          }
                        : {}
                    }
                  >
                    {isHovered && (
                      <Hover
                        layoutId='nav'
                        initial={{ y: 0 }}
                        animate={{
                          y: -1,
                          transition: {
                            type: 'tween',
                            repeat: 1,
                            repeatType: 'reverse'
                          }
                        }}
                        exit={{ y: 0 }}
                      />
                    )}
                    {t(`common.navbar.${page}`)}
                  </NavContainer>
                </Anchor>
              </li>
            );
          })}
        </List>
      </Nav>
      <Aside>
        <LanguageSelect />
        <Themming />
        <CmdButton type='button' aria-label='Command' onClick={query.toggle}>
          <CmdIcon />
        </CmdButton>
      </Aside>
    </Header>
  );
};
