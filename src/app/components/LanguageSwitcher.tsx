'use client'
import Link from 'next-intl/link';
import Image from 'next/image'
import styles from './LanguageSwitcher.module.css'

export default function LanguageSwitcher() {    

    const flagWidth = 42;
    const flagHeight = 32;

    return (
        <div className={styles.Wrapper}>
            <Link href="/" locale="pt">
                <Image
                    src="/br.svg"
                    width={flagWidth}
                    height={flagHeight}
                    alt="Brazil's flag"
                />
            </Link>
            <Link href="/" locale="en">
                <Image
                    src="/us.svg"
                    width={flagWidth}
                    height={flagHeight}
                    alt="United States's flag"
                />
            </Link>
            <Link href="/" locale="es">
                <Image
                    src="/es.svg"
                    width={flagWidth}
                    height={flagHeight}
                    alt="Spain's flag"
                />
            </Link>
        </div>
    );
}


