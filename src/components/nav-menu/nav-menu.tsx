import Link from 'next/link'
import { Button } from '../ui/button'
import { NavMenuLogo } from './nav-menu-logo'
import { NavMenuNavLink } from './nav-menu-nav-link'

export function NavMenu() {
  return (
    <section className="w-full py-6 bg-zinc-900">
      <div className="flex items-center content-box justify-between px-4">
        <NavMenuLogo />
        <NavMenuNavLink />
        <Button asChild>
          <Link href="/contact">Contato</Link>
        </Button>
      </div>
    </section>
  )
}
