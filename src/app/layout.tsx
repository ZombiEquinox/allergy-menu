'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavigationBar from "@/components/NavBar";
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Allergy Menu',
  description: 'Track your allergies and find restaurants that fit your diet.',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <html lang="en">
      <body className={inter.className}>
        {pathname !== '/auth/login' ? <NavigationBar/> : null}
        {children}
      </body>
    </html>
  )
}
