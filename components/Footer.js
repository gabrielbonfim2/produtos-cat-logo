import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Catálogo de Produtos - Programação Web I</p>
    </footer>
  );
}
