"use client";

import { useState } from "react";
import BarraBusca from "./BarraBusca";
import CardProduto from "./CardProduto";
import styles from "./ListaProdutos.module.css";

export default function ListaProdutos({ produtos }) {
  const [busca, setBusca] = useState("");

  const produtosFiltrados = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div>
      <BarraBusca valor={busca} onChange={setBusca} />

      {produtosFiltrados.length === 0 ? (
        <p>Nenhum produto encontrado para "{busca}".</p>
      ) : (
        <div className={styles.grid}>
          {produtosFiltrados.map((produto) => (
            <CardProduto key={produto.id} produto={produto} />
          ))}
        </div>
      )}
    </div>
  );
}
