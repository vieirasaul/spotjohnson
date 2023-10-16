import Link from 'next/link'
import styles from './Header.module.css'
import { Roboto_Mono } from 'next/font/google'
import { getDictionary } from '../[lang]/dictionaries'

const roboto_mono = Roboto_Mono({
    subsets: ['latin'],
    weight: ['400', '700']
})

export default async function Header({ params }: { params: { lang: string } }) {
    const dict = await getDictionary(params.lang)
    return (
        <header className={`${roboto_mono.className} ${styles.Header}`}>
            <nav className={styles.Nav}>
                <Link href="/">{dict.nav.home}</Link>
                <Link href="/">{dict.nav.about}</Link>
                <Link href="/">{dict.nav.contact}</Link>
            </nav>
        </header>
    );
}

