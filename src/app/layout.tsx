import './globals.css'
import type { Metadata } from 'next'
import Header from './components/Header'

export const metadata: Metadata = {
  title: 'Spotjohnson',
  description: 'Spotify data app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">      
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
