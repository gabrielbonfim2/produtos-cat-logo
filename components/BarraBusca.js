"use client";

import styles from "./BarraBusca.module.css";

export default function BarraBusca({ valor, onChange }) {
  return (
    <input
      type="text"
      className={styles.input}
      placeholder="Buscar produtos..."
      value={valor}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
