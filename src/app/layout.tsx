import { ReactNode } from 'react'
import { Kanit } from 'next/font/google'

// These styles apply to every route in the application
import './globals.css'

const kanit = Kanit({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br" className={kanit.className}>
      <body className=" bg-slate-700">{children}</body>
    </html>
  )
}
