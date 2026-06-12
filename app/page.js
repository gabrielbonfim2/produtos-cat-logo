import Link from "next/link";
import { produtos } from "../data/produtos";
import CardProduto from "../components/CardProduto";
import styles from "./page.module.css";

export default function HomePage() {
  const destaques = produtos.slice(0, 4);

  return (
    <div>
      <section className={styles.hero}>
        <h1>Catálogo Interativo de Produtos</h1>
        <p>
          Encontre os melhores produtos de eletrônicos, acessórios e muito
          mais. Navegue, pesquise e favorite seus itens preferidos!
        </p>
        <Link href="/produtos" className={styles.botao}>
          Ver todos os produtos
        </Link>
      </section>

      <section>
        <h2>Destaques</h2>
        <div className={styles.grid}>
          {destaques.map((produto) => (
            <CardProduto key={produto.id} produto={produto} />
          ))}
        </div>
      </section>
    </div>
  );
}
