import Link from 'next/link'
import styles from './Header.module.css'
import { Roboto_Mono } from 'next/font/google'

const roboto_mono = Roboto_Mono({
    subsets: ['latin'],
    weight: ['400', '700']
})

export default function Header() {
    return (
        <header className={`${roboto_mono.className} ${styles.Header}`}>
            <nav className={styles.Nav}>
                <Link href="/">Home</Link>
                <Link href="/">About</Link>
                <Link href="/">Contact</Link>
            </nav>
        </header>
    );
}

