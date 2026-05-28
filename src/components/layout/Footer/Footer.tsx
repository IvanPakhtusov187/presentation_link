import styles from './Footer.module.scss';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          © {year} Иван Пахтусов. Frontend Developer.
        </p>
        <p className={styles.stack}>
          Built with React, TypeScript, Vite & Framer Motion
        </p>
      </div>
    </footer>
  );
}
