import styles from "./page.module.css";

export const metadata = {
  title: "Sobre | Catálogo Interativo",
};

export default function SobrePage() {
  return (
    <div className={styles.sobre}>
      <h1>Sobre o Projeto</h1>
      <p>
        Este projeto foi desenvolvido como avaliação da disciplina de
        Programação Web I, do curso de Engenharia de Software, do Centro
        Universitário Alfredo Nasser.
      </p>
      <p>
        O objetivo é demonstrar a aplicação prática dos conceitos de
        componentização, Server e Client Components, gerenciamento de estado
        com React Hooks (useState), roteamento baseado em arquivos (incluindo
        rotas dinâmicas) e estilização com CSS Modules, utilizando o
        framework Next.js.
      </p>
      <h2>Tecnologias utilizadas</h2>
      <ul>
        <li>Next.js (App Router)</li>
        <li>React</li>
        <li>CSS Modules</li>
        <li>Git e GitHub</li>
        <li>Deploy na Vercel</li>
      </ul>
    </div>
  );
}
