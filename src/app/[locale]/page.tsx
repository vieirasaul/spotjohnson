'use client';

import { Ubuntu } from 'next/font/google'
import styles from './page.module.css'
import { useTranslations } from 'next-intl';
import Container from '../components/Container'

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '500', '700']
})

export default function Home() {
  const t = useTranslations('main');

  return (
    <main className={`${ubuntu.className} ${styles.Main}`}>
      <Container>
        <div className={styles.Wrapper}>
          <h1>{t('title')}</h1>
          <h2>{t('subtitle')}</h2>
        </div>
      </Container>
    </main>
  )
}
