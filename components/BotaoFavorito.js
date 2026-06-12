"use client";

import { useFavoritos } from "../context/FavoritosContext";
import styles from "./BotaoFavorito.module.css";

export default function BotaoFavorito({ id }) {
  const { ehFavorito, alternarFavorito } = useFavoritos();
  const favorito = ehFavorito(id);

  return (
    <button
      className={`${styles.botao} ${favorito ? styles.ativo : ""}`}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        alternarFavorito(id);
      }}
      aria-label="Favoritar produto"
    >
      {favorito ? "❤️ Favoritado" : "🤍 Favoritar"}
    </button>
  );
}
