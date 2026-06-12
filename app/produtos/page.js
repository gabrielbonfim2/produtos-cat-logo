import { produtos } from "../../data/produtos";
import ListaProdutos from "../../components/ListaProdutos";

export const metadata = {
  title: "Produtos | Catálogo Interativo",
};

export default function ProdutosPage() {
  return (
    <div>
      <h1>Nossos Produtos</h1>
      <p>Use a barra de busca para filtrar os produtos pelo nome.</p>
      <ListaProdutos produtos={produtos} />
    </div>
  );
}
