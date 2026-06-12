import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
      <h1>404 - Produto não encontrado</h1>
      <p>O produto que você procura não existe ou foi removido.</p>
      <Link href="/produtos">Voltar para a lista de produtos</Link>
    </div>
  );
}
