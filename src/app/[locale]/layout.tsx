import '../globals.css'
import type { Metadata } from 'next'
import Header from '../components/Header'
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';


export const metadata: Metadata = {
  title: 'Spotjohnson',
  description: 'Spotify data app',
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'pt' }, { locale: 'es' }];
}

export default async function LocaleLayout({
    children,
    params,
  }: {
    children: React.ReactNode;
    params: { locale: string };
  }) {
  
  let messages;
  try {
    messages = (await import(`../messages/${params.locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={params.locale}>
      <body>                
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
