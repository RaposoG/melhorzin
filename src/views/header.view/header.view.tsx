import { NavMenu } from '@/components/nav-menu/nav-menu'
import { TopBanner } from '@/components/top-banner/top-banner'

export function HeaderView() {
  return (
    <header className="flex flex-col w-full">
      <TopBanner
        text="Novidades! Clique aqui para saber mais."
        url="/"
        target="_self"
      />
      <NavMenu />
    </header>
  )
}
