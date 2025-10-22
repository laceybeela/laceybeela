import './globals.css'
import { Syne, Italianno } from 'next/font/google'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})
const italianno = Italianno({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-italianno',
  display: 'swap',
})

export const metadata = {
  title: 'Lacey Beela',
  description: 'Desert oracle / flower field portal',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${italianno.variable} bg-cream text-plum antialiased`}>
        {children}
      </body>
    </html>
  )
}
