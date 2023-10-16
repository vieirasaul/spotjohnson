import styles from './Container.module.css'

export default function Container({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={styles.Container}>
            {children}
        </div>
    );
}
