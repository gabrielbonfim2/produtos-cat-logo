import { notFound } from "next/navigation";
import Link from "next/link";
import { produtos, getProdutoPorId } from "../../../data/produtos";
import BotaoFavorito from "../../../components/BotaoFavorito";
import styles from "./page.module.css";

// Gera as rotas estáticas para cada produto (opcional, mas boa prática)
export function generateStaticParams() {
  return produtos.map((produto) => ({ id: String(produto.id) }));
}

export function generateMetadata({ params }) {
  const produto = getProdutoPorId(params.id);
  return {
    title: produto ? `${produto.nome} | Catálogo` : "Produto não encontrado",
  };
}

export default function DetalheProdutoPage({ params }) {
  const produto = getProdutoPorId(params.id);

  if (!produto) {
    notFound();
  }

  return (
    <div className={styles.detalhe}>
      <Link href="/produtos" className={styles.voltar}>
        ← Voltar para produtos
      </Link>

      <div className={styles.conteudo}>
        <img src={produto.imagem} alt={produto.nome} className={styles.imagem} />
        <div className={styles.info}>
          <span className={styles.categoria}>{produto.categoria}</span>
          <h1>{produto.nome}</h1>
          <p className={styles.preco}>
            R$ {produto.preco.toFixed(2).replace(".", ",")}
          </p>
          <p className={styles.descricao}>{produto.descricao}</p>
          <BotaoFavorito id={produto.id} />
        </div>
      </div>
    </div>
  );
}
