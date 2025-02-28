import type { Metadata } from 'next'
import { Inter, Playfair } from 'next/font/google'

import './globals.css'

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
  title: 'Henrique Teixeira Dev | Page Not Found',
  description:
    'Entregue de corpo e alma ao universo da tecnologia e desenvolvimento, dedicando horas e horas a aprimorar minhas habilidades e conhecimentos nessa área.'
}

interface RootLayoutProps {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export default async function RootLayout({
  children
}: Readonly<RootLayoutProps>) {
  return (
    <html>
      <body
        className={`${inter.className} ${playfair.variable}`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  )
}
