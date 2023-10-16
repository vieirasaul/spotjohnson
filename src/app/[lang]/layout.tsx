import '../globals.css'
import type { Metadata } from 'next'
import Header from '../components/Header'
import { defaultLocale } from '@/middleware';

export const metadata: Metadata = {
  title: 'Spotjohnson',
  description: 'Spotify data app',
}


export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const lang = params.lang ?? defaultLocale;
  return (
    <html lang={lang}>
      <body>        
        <Header params={{
          lang: lang
        }} />
        {children}
      </body>
    </html>
  )
}
