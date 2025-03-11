import Link from 'next/link'
import { Button } from '../ui/button'
import { NavMenuLogo } from './nav-menu-logo'
import { NavMenuNavLink } from './nav-menu-nav-link'
import { useTranslations } from 'next-intl'
import { ArrowTopRightSvg } from '@/svgs/arrow-top-right.svg'

export function NavMenu() {
  const t = useTranslations("nav-menu")
  return (
    <section className="w-full py-6 bg-zinc-900">
      <div className="flex items-center content-box justify-between px-4">
        <NavMenuLogo />
        <NavMenuNavLink />
        <Button asChild>
          <Link
            href={`https://api.whatsapp.com/send?phone=5582987389360&text=Ol%C3%A1%2C+gostaria+de+entrar+em+contato+com+voc%C3%AA`}
            target="_blank"
          >
            {t("contact")}
            <ArrowTopRightSvg className='ml-2' pathColor="black" size={12} />
          </Link>
        </Button>
      </div>
    </section>
  )
}
