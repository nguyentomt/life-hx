import type { Metadata } from 'next'
import Head from 'next/head'
import { Inter, Grandiflora_One, Moirai_One, Montserrat, Tajawal  } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const grandifloraOne = Grandiflora_One({ subsets: ['latin'], weight: "400" })

const montserrat = Montserrat({ subsets: ['latin'], weight: "100" })
const tajawal = Tajawal({ subsets: ['latin'], weight: "200" })

export const metadata: Metadata = {
  title: 'Life Hx',
  description: 'A dynamic forum for sharing life hacks',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
      <script src="https://accounts.google.com/gsi/client" async defer></script>
      </Head>

      <script src="https://accounts.google.com/gsi/client" async defer></script>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
