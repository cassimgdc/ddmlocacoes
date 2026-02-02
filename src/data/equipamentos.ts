export interface Equipamento {
  id: string;
  slug: string;
  nome: string;
  categoria: string;
  descricaoCurta: string;
  descricaoLonga: string;
  specs: { label: string; value: string }[];
  status: 'disponivel' | 'sob-consulta' | 'indisponivel';
  preco?: string;
  imagemPlaceholder: string;
  destaque?: boolean;
}

export const categorias = [
  { id: 'escavacao', nome: 'Escavação' },
  { id: 'terraplanagem', nome: 'Terraplanagem' },
  { id: 'compactacao', nome: 'Compactação' },
  { id: 'transporte', nome: 'Transporte' },
  { id: 'outros', nome: 'Outros' },
];

export const statusOptions = [
  { id: 'disponivel', nome: 'Disponível' },
  { id: 'sob-consulta', nome: 'Sob consulta' },
];

// Seed data - easily replaceable with API/database later
export const equipamentos: Equipamento[] = [
  {
    id: '1',
    slug: 'retroescavadeira-case-580m',
    nome: 'Retroescavadeira Case 580M',
    categoria: 'escavacao',
    descricaoCurta: 'Máquina versátil para terraplanagem, abertura de valas e limpeza de lotes.',
    descricaoLonga: 'A Retroescavadeira Case 580M é uma máquina robusta e versátil, ideal para obras de pequeno e médio porte. Com operador experiente e combustível inclusos, oferece excelente custo-benefício para terraplanagem, abertura de valas, limpeza de terrenos e serviços rurais.',
    specs: [
      { label: 'Potência', value: '95 HP' },
      { label: 'Peso', value: '7.500 kg' },
      { label: 'Prof. escavação', value: '4,3 m' },
    ],
    status: 'disponivel',
    preco: 'R$ 200/hora',
    imagemPlaceholder: '/placeholder.svg',
    destaque: true,
  },
  {
    id: '2',
    slug: 'mini-escavadeira-compacta',
    nome: 'Mini Escavadeira Compacta',
    categoria: 'escavacao',
    descricaoCurta: 'Ideal para espaços reduzidos e trabalhos de precisão.',
    descricaoLonga: 'Mini escavadeira compacta perfeita para obras em locais com espaço limitado. Oferece grande manobrabilidade sem perder potência.',
    specs: [
      { label: 'Potência', value: '25 HP' },
      { label: 'Peso', value: '2.800 kg' },
      { label: 'Largura', value: '1,5 m' },
    ],
    status: 'sob-consulta',
    imagemPlaceholder: '/placeholder.svg',
  },
  {
    id: '3',
    slug: 'pa-carregadeira',
    nome: 'Pá Carregadeira',
    categoria: 'terraplanagem',
    descricaoCurta: 'Carregamento e movimentação de grandes volumes de material.',
    descricaoLonga: 'Pá carregadeira de alta capacidade para movimentação de terra, areia, brita e outros materiais. Ideal para obras de grande porte.',
    specs: [
      { label: 'Capacidade', value: '2,5 m³' },
      { label: 'Potência', value: '150 HP' },
      { label: 'Peso', value: '12.000 kg' },
    ],
    status: 'sob-consulta',
    imagemPlaceholder: '/placeholder.svg',
  },
  {
    id: '4',
    slug: 'rolo-compactador-liso',
    nome: 'Rolo Compactador Liso',
    categoria: 'compactacao',
    descricaoCurta: 'Compactação de solo para fundações e pavimentação.',
    descricaoLonga: 'Rolo compactador vibratório liso para compactação de solos granulares e preparação de bases para pavimentação.',
    specs: [
      { label: 'Peso operacional', value: '8.000 kg' },
      { label: 'Largura tambor', value: '1,7 m' },
      { label: 'Vibração', value: '30 Hz' },
    ],
    status: 'sob-consulta',
    imagemPlaceholder: '/placeholder.svg',
  },
  {
    id: '5',
    slug: 'rolo-compactador-pe-de-carneiro',
    nome: 'Rolo Pé de Carneiro',
    categoria: 'compactacao',
    descricaoCurta: 'Compactação de solos coesivos e argilosos.',
    descricaoLonga: 'Rolo compactador pé de carneiro ideal para compactação de solos argilosos e coesivos em obras de terraplanagem.',
    specs: [
      { label: 'Peso operacional', value: '9.500 kg' },
      { label: 'Largura tambor', value: '1,8 m' },
      { label: 'Tipo', value: 'Vibratório' },
    ],
    status: 'sob-consulta',
    imagemPlaceholder: '/placeholder.svg',
  },
  {
    id: '6',
    slug: 'caminhao-basculante',
    nome: 'Caminhão Basculante',
    categoria: 'transporte',
    descricaoCurta: 'Transporte de terra, entulho e materiais de construção.',
    descricaoLonga: 'Caminhão basculante para transporte e descarga de materiais diversos como terra, areia, brita e entulho.',
    specs: [
      { label: 'Capacidade', value: '12 m³' },
      { label: 'Carga útil', value: '14 ton' },
      { label: 'Eixos', value: 'Trucado' },
    ],
    status: 'sob-consulta',
    imagemPlaceholder: '/placeholder.svg',
  },
  {
    id: '7',
    slug: 'motoniveladora',
    nome: 'Motoniveladora',
    categoria: 'terraplanagem',
    descricaoCurta: 'Nivelamento de terrenos e manutenção de estradas.',
    descricaoLonga: 'Motoniveladora para nivelamento preciso de terrenos, construção e manutenção de estradas e pistas.',
    specs: [
      { label: 'Potência', value: '180 HP' },
      { label: 'Lâmina', value: '3,7 m' },
      { label: 'Peso', value: '15.000 kg' },
    ],
    status: 'sob-consulta',
    imagemPlaceholder: '/placeholder.svg',
  },
  {
    id: '8',
    slug: 'trator-de-esteira',
    nome: 'Trator de Esteira',
    categoria: 'terraplanagem',
    descricaoCurta: 'Movimentação de terra e desmatamento pesado.',
    descricaoLonga: 'Trator de esteira para serviços pesados de movimentação de terra, desmatamento e preparação de terrenos.',
    specs: [
      { label: 'Potência', value: '200 HP' },
      { label: 'Lâmina', value: '4,0 m' },
      { label: 'Peso', value: '20.000 kg' },
    ],
    status: 'sob-consulta',
    imagemPlaceholder: '/placeholder.svg',
  },
  {
    id: '9',
    slug: 'escavadeira-hidraulica',
    nome: 'Escavadeira Hidráulica',
    categoria: 'escavacao',
    descricaoCurta: 'Escavação profunda e movimentação de grandes volumes.',
    descricaoLonga: 'Escavadeira hidráulica de grande porte para escavações profundas, demolições e movimentação de materiais pesados.',
    specs: [
      { label: 'Potência', value: '280 HP' },
      { label: 'Alcance', value: '10 m' },
      { label: 'Caçamba', value: '1,5 m³' },
    ],
    status: 'sob-consulta',
    imagemPlaceholder: '/placeholder.svg',
  },
  {
    id: '10',
    slug: 'placa-vibratoria',
    nome: 'Placa Vibratória',
    categoria: 'compactacao',
    descricaoCurta: 'Compactação manual para áreas pequenas e acabamentos.',
    descricaoLonga: 'Placa vibratória compacta para compactação em áreas de difícil acesso, calçadas e acabamentos.',
    specs: [
      { label: 'Peso', value: '90 kg' },
      { label: 'Largura', value: '50 cm' },
      { label: 'Motor', value: 'Gasolina' },
    ],
    status: 'sob-consulta',
    imagemPlaceholder: '/placeholder.svg',
  },
  {
    id: '11',
    slug: 'bob-cat-carregadeira',
    nome: 'Bob Cat / Mini Carregadeira',
    categoria: 'terraplanagem',
    descricaoCurta: 'Versátil para diversas operações em espaços reduzidos.',
    descricaoLonga: 'Mini carregadeira Bob Cat versátil, aceita diversos implementos e é ideal para obras urbanas com espaço limitado.',
    specs: [
      { label: 'Capacidade', value: '700 kg' },
      { label: 'Potência', value: '65 HP' },
      { label: 'Largura', value: '1,5 m' },
    ],
    status: 'sob-consulta',
    imagemPlaceholder: '/placeholder.svg',
  },
  {
    id: '12',
    slug: 'caminhao-pipa',
    nome: 'Caminhão Pipa',
    categoria: 'transporte',
    descricaoCurta: 'Transporte e distribuição de água para obras.',
    descricaoLonga: 'Caminhão pipa para abastecimento de água em obras, irrigação de vias e controle de poeira.',
    specs: [
      { label: 'Capacidade', value: '10.000 L' },
      { label: 'Bomba', value: 'Alta pressão' },
      { label: 'Alcance', value: '20 m' },
    ],
    status: 'sob-consulta',
    imagemPlaceholder: '/placeholder.svg',
  },
];

// Helper function to get equipment by slug
export const getEquipamentoBySlug = (slug: string): Equipamento | undefined => {
  return equipamentos.find((e) => e.slug === slug);
};

// Helper function to get equipment by category
export const getEquipamentosByCategoria = (categoriaId: string): Equipamento[] => {
  return equipamentos.filter((e) => e.categoria === categoriaId);
};
