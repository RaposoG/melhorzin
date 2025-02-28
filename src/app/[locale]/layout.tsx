import type { Metadata } from 'next'
import { Inter, Playfair } from 'next/font/google'

import '../globals.css'
import { ThemeProvider } from '@/providers/theme.provider'
import { HeaderView } from '@/views/header.view/header.view'
import { FooterView } from '@/views/footer.view/footer.view'
import { notFound } from 'next/navigation'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
})

const playfair = Playfair({
  weight: '900',
  style: 'italic',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: 'Henrique Teixeira Dev | Melhorzin',
  description:
    'Entregue de corpo e alma ao universo da tecnologia e desenvolvimento, dedicando horas e horas a aprimorar minhas habilidades e conhecimentos nessa área.'
}

interface RootLayoutProps {
  children: React.ReactNode
  params: {
    locale: string
  }
}

const routing = {
  locales: ['pt', 'en'],
  defaultLocale: 'pt-BR'
}

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<RootLayoutProps>) {
  return (
    <html lang={locale}>
      <body
        className={`${inter.className} ${playfair.variable} `}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex w-full min-h-screen flex-col">
            <HeaderView />
            {children}
            <FooterView />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
