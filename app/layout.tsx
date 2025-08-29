import './globals.css'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import ThemeProvider from './theme-provider'  // using next-themes wrapper

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins'
})

export const metadata = {
  title: 'My Portfolio',
  description: 'A personal portfolio built with Next.js and Tailwind',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
       suppressHydrationWarning
        className={`${poppins.className} font-poppins bg-gray-100/50 dark:bg-gray-900 text-black dark:text-white overflow-x-hidden`}
      >
        <ThemeProvider>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
