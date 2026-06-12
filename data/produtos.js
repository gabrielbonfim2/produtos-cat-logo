// Dados mockados de produtos (poderia ser substituído por fetch a uma API real, ex: fakestoreapi.com)
export const produtos = [
  {
    id: 1,
    nome: "Fone de Ouvido Bluetooth",
    categoria: "Eletrônicos",
    preco: 149.9,
    imagem: "https://picsum.photos/seed/fone/400/300",
    descricao:
      "Fone de ouvido sem fio com cancelamento de ruído, bateria de longa duração e conexão Bluetooth 5.0.",
  },
  {
    id: 2,
    nome: "Mochila para Notebook",
    categoria: "Acessórios",
    preco: 99.5,
    imagem: "https://picsum.photos/seed/mochila/400/300",
    descricao:
      "Mochila resistente à água com compartimento acolchoado para notebooks de até 15.6 polegadas.",
  },
  {
    id: 3,
    nome: "Smartwatch Fit Pro",
    categoria: "Eletrônicos",
    preco: 259.0,
    imagem: "https://picsum.photos/seed/smartwatch/400/300",
    descricao:
      "Relógio inteligente com monitor cardíaco, GPS integrado e diversas funções para atividades físicas.",
  },
  {
    id: 4,
    nome: "Teclado Mecânico RGB",
    categoria: "Periféricos",
    preco: 189.9,
    imagem: "https://picsum.photos/seed/teclado/400/300",
    descricao:
      "Teclado mecânico com switches azuis, iluminação RGB customizável e construção em alumínio.",
  },
  {
    id: 5,
    nome: "Mouse Gamer Sem Fio",
    categoria: "Periféricos",
    preco: 119.9,
    imagem: "https://picsum.photos/seed/mouse/400/300",
    descricao:
      "Mouse gamer com sensor de alta precisão, 6 botões programáveis e bateria recarregável.",
  },
  {
    id: 6,
    nome: "Cadeira de Escritório Ergonômica",
    categoria: "Móveis",
    preco: 599.0,
    imagem: "https://picsum.photos/seed/cadeira/400/300",
    descricao:
      "Cadeira com apoio lombar ajustável, braços reguláveis e estofado respirável.",
  },
  {
    id: 7,
    nome: "Câmera de Segurança Wi-Fi",
    categoria: "Eletrônicos",
    preco: 139.0,
    imagem: "https://picsum.photos/seed/camera/400/300",
    descricao:
      "Câmera com visão noturna, detecção de movimento e acesso remoto pelo aplicativo.",
  },
  {
    id: 8,
    nome: "Garrafa Térmica Inox",
    categoria: "Acessórios",
    preco: 49.9,
    imagem: "https://picsum.photos/seed/garrafa/400/300",
    descricao:
      "Garrafa térmica de aço inoxidável que mantém a temperatura por até 12 horas.",
  },
];

export function getProdutoPorId(id) {
  return produtos.find((p) => p.id === Number(id));
}
