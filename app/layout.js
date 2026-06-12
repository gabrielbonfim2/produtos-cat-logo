import Header from "../components/Header";
import Footer from "../components/Footer";
import { FavoritosProvider } from "../context/FavoritosContext";
import "./globals.css";

export const metadata = {
  title: "Catálogo Interativo de Produtos",
  description: "Projeto Next.js - Programação Web I",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <FavoritosProvider>
          <Header />
          <main className="container">{children}</main>
          <Footer />
        </FavoritosProvider>
      </body>
    </html>
  );
}
