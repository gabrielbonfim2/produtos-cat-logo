import Link from "next/link";
import BotaoFavorito from "./BotaoFavorito";
import styles from "./CardProduto.module.css";

export default function CardProduto({ produto }) {
  return (
    <div className={styles.card}>
      <Link href={`/produto/${produto.id}`} className={styles.link}>
        <img src={produto.imagem} alt={produto.nome} className={styles.imagem} />
        <div className={styles.info}>
          <span className={styles.categoria}>{produto.categoria}</span>
          <h3 className={styles.nome}>{produto.nome}</h3>
          <p className={styles.preco}>
            R$ {produto.preco.toFixed(2).replace(".", ",")}
          </p>
        </div>
      </Link>
      <div className={styles.acoes}>
        <BotaoFavorito id={produto.id} />
      </div>
    </div>
  );
}
