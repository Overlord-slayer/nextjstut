import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navbar'
import MyProfilePic from './components/MyProfilePic'

export const metadata: Metadata = {
  title: 'Blog de Samuel',
  description: 'Creado por Samuel Argueta',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='dark:bg-slate-800'>
        <Navbar/>
        <MyProfilePic/>
        {children}
      </body>
    </html>
  )
}
