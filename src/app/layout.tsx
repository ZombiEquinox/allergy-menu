'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavigationBar from "@/components/NavBar";
import { usePathname } from 'next/navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Allergy Menu',
  description: 'Track your allergies and find restaurants that fit your diet.',
}

const authPages = (path)=>{
  switch(path){
    case '/auth/login':
      return true;
    case '/auth/signup':
      return true;
    default:
      return false;
    }
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationBar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
