import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        Bonjour
      </main>
      <footer className={styles.footer}>
        &copy;Pierre &quot;Kobaru&quot; Tusseau
      </footer>
    </div>
  );
}
