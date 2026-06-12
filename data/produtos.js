// Dados mockados de produtos (poderia ser substituído por fetch a uma API real, ex: fakestoreapi.com)
export const produtos = [
  {
    id: 1,
    nome: "Fone de Ouvido Bluetooth",
    categoria: "Eletrônicos",
    preco: 149.9,
    imagem: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    descricao:
      "Fone de ouvido sem fio com cancelamento de ruído, bateria de longa duração e conexão Bluetooth 5.0.",
  },
  {
    id: 2,
    nome: "Mochila para Notebook",
    categoria: "Acessórios",
    preco: 99.5,
    imagem: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=400&h=300&fit=crop",
    descricao:
      "Mochila resistente à água com compartimento acolchoado para notebooks de até 15.6 polegadas.",
  },
  {
    id: 3,
    nome: "Smartwatch Fit Pro",
    categoria: "Eletrônicos",
    preco: 259.0,
    imagem: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
    descricao:
      "Relógio inteligente com monitor cardíaco, GPS integrado e diversas funções para atividades físicas.",
  },
  {
    id: 4,
    nome: "Teclado Mecânico RGB",
    categoria: "Periféricos",
    preco: 189.9,
    imagem: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=300&fit=crop",
    descricao:
      "Teclado mecânico com switches azuis, iluminação RGB customizável e construção em alumínio.",
  },
  {
    id: 5,
    nome: "Mouse Gamer Sem Fio",
    categoria: "Periféricos",
    preco: 119.9,
    imagem: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=300&fit=crop",
    descricao:
      "Mouse gamer com sensor de alta precisão, 6 botões programáveis e bateria recarregável.",
  },
 {
  id: 6,
  nome: "Cadeira de Escritório Ergonômica",
  categoria: "Móveis",
  preco: 599.0,
  imagem: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=400&h=300&fit=crop",
  descricao:
    "Cadeira com apoio lombar ajustável, braços reguláveis e estofado respirável.",
},
  {
    id: 7,
    nome: "Câmera de Segurança Wi-Fi",
    categoria: "Eletrônicos",
    preco: 139.0,
    imagem: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=400&h=300&fit=crop",
    descricao:
      "Câmera com visão noturna, detecção de movimento e acesso remoto pelo aplicativo.",
  },
  {
    id: 8,
    nome: "Garrafa Térmica Inox",
    categoria: "Acessórios",
    preco: 49.9,
    imagem: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=300&fit=crop",
    descricao:
      "Garrafa térmica de aço inoxidável que mantém a temperatura por até 12 horas.",
  },
];

export function getProdutoPorId(id) {
  return produtos.find((p) => p.id === Number(id));
}