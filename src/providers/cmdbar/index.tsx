import { KBarPortal, KBarProvider } from 'kbar';
import {
  type LottieComponentProps,
  type LottieRefCurrentProps
} from 'lottie-react';
import { useRouter } from 'next/router';
import {
  type PropsWithChildren,
  type ReactElement,
  useRef,
  useState,
  useCallback
} from 'react';
import { RiGithubLine, RiInstagramLine, RiLinkedinLine } from 'react-icons/ri';
import { LottieRender, RenderResults, Toast } from '@/src/components';
import { Animator, Positioner, Search } from './styles';

import { useTranslation } from 'next-i18next';

type ActionType = {
  id: string;
  name: string;
  shortcut: string[];
  keywords: string;
  section: string;
  perform: () => void;
  icon: ReactElement<LottieComponentProps> | ReactElement;
};

export function CommandBarProvider({ children }: PropsWithChildren) {
  const copyLinkRef = useRef<LottieRefCurrentProps>(null);
  const emailRef = useRef<LottieRefCurrentProps>(null);
  const sourceRef = useRef<LottieRefCurrentProps>(null);
  const homeRef = useRef<LottieRefCurrentProps>(null);
  const aboutRef = useRef<LottieRefCurrentProps>(null);
  const projectsRef = useRef<LottieRefCurrentProps>(null);

  const router = useRouter();
  const [showToast, setShowToast] = useState(false);

  const { t } = useTranslation();

  const copyUrl = useCallback(() => {
    void navigator.clipboard.writeText(window.location.href);
    setShowToast(true);
  }, []);

  const iconStyle = { width: 24, height: 24 };

  const actions: ActionType[] = [
    {
      id: 'home',
      name: t('common.kbar.actions.home'),
      shortcut: ['g', 'h'],
      keywords: 'go-home',
      section: t('common.kbar.sections.goto'),
      perform: () => void router.push('/'),
      icon: (
        <LottieRender lottieRef={homeRef} style={iconStyle} iconName='home' />
      )
    },
    {
      id: 'about',
      name: t('common.kbar.actions.about'),
      shortcut: ['g', 'a'],
      keywords: 'go-about',
      section: t('common.kbar.sections.goto'),
      perform: () => void router.push('/about'),
      icon: (
        <LottieRender lottieRef={aboutRef} style={iconStyle} iconName='about' />
      )
    },
    {
      id: 'projects',
      name: t('common.kbar.actions.projects'),
      shortcut: ['g', 'p'],
      keywords: 'go-projects',
      section: t('common.kbar.sections.goto'),
      perform: () => void router.push('/projects'),
      icon: (
        <LottieRender
          lottieRef={projectsRef}
          style={iconStyle}
          iconName='projects'
        />
      )
    },
    {
      id: 'copy',
      name: t('common.kbar.actions.copy'),
      shortcut: ['u'],
      keywords: 'copy-url',
      section: t('common.kbar.sections.general'),
      perform: copyUrl,
      icon: (
        <LottieRender
          lottieRef={copyLinkRef}
          style={iconStyle}
          iconName='copy-link'
        />
      )
    },
    {
      id: 'email',
      name: t('common.kbar.actions.email'),
      shortcut: ['e'],
      keywords: 'send-email',
      section: t('common.kbar.sections.general'),
      perform: () => void router.push('/contact'),
      icon: (
        <LottieRender lottieRef={emailRef} style={iconStyle} iconName='email' />
      )
    },
    {
      id: 'source',
      name: t('common.kbar.actions.source'),
      shortcut: ['s'],
      keywords: 'view-source',
      section: t('common.kbar.sections.general'),
      perform: () =>
        window.open('https://github.com/micheldslive/micode.dev', '_blank'),
      icon: (
        <LottieRender
          lottieRef={sourceRef}
          style={iconStyle}
          iconName='source'
        />
      )
    },
    {
      id: 'github',
      name: 'GitHub',
      shortcut: ['f', 'g'],
      keywords: 'go-github',
      section: t('common.kbar.sections.follow'),
      perform: () => window.open('https://github.com/micheldslive', '_blank'),
      icon: <RiGithubLine />
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      shortcut: ['f', 'l'],
      keywords: 'go-linkedin',
      section: t('common.kbar.sections.follow'),
      perform: () =>
        window.open('https://linkedin.com/in/micheldslive', '_blank'),
      icon: <RiLinkedinLine />
    },
    {
      id: 'instagram',
      name: 'Instagram',
      shortcut: ['f', 'i'],
      keywords: 'go-instagram',
      section: t('common.kbar.sections.follow'),
      perform: () =>
        window.open('https://www.instagram.com/micheldslive', '_blank'),
      icon: <RiInstagramLine />
    }
  ];

  return (
    <>
      <KBarProvider actions={actions}>
        <KBarPortal>
          <Positioner>
            <Animator>
              <Search placeholder='Type a command or search…' />
              <RenderResults />
            </Animator>
          </Positioner>
        </KBarPortal>

        {children}
      </KBarProvider>

      <Toast
        title={t('common.kbar.toast.title')}
        description={t('common.kbar.toast.description')}
        isSuccess
        showToast={showToast}
        setShowToast={setShowToast}
      />
    </>
  );
}
