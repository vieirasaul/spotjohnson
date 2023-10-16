'use client';

import Link from 'next/link'
import styles from './Header.module.css'
import { Roboto_Mono } from 'next/font/google'
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher'

const roboto_mono = Roboto_Mono({
    subsets: ['latin'],
    weight: ['400', '700']
})

export default function Header() {
    const t = useTranslations('nav');

    return (
        <header className={`${roboto_mono.className} ${styles.Header}`}>
            <nav className={styles.Nav}>
                <Link href="/">{t('home')}</Link>
                <Link href="/">{t('about')}</Link>
                <Link href="/">{t('contact')}</Link>
            </nav>
            <div>
                <LanguageSwitcher />
            </div>
        </header>
    );
}

