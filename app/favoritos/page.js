"use client";

import { useFavoritos } from "../../context/FavoritosContext";
import { produtos } from "../../data/produtos";
import CardProduto from "../../components/CardProduto";
import styles from "./page.module.css";

export default function FavoritosPage() {
  const { favoritos } = useFavoritos();

  const produtosFavoritos = produtos.filter((produto) =>
    favoritos.includes(produto.id)
  );

  return (
    <div>
      <h1>Meus Favoritos</h1>

      {produtosFavoritos.length === 0 ? (
        <p>Você ainda não favoritou nenhum produto.</p>
      ) : (
        <div className={styles.grid}>
          {produtosFavoritos.map((produto) => (
            <CardProduto key={produto.id} produto={produto} />
          ))}
        </div>
      )}
    </div>
  );
}
