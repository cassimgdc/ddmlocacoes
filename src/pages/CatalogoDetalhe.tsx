import { useMemo } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import ProductGallery from '@/components/catalogo/ProductGallery';
import ProductQuoteForm from '@/components/catalogo/ProductQuoteForm';
import RelatedEquipmentCard from '@/components/catalogo/RelatedEquipmentCard';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  Info,
  Search,
  CalendarCheck,
  Truck,
  Home,
} from 'lucide-react';
import { getEquipamentoBySlug, equipamentos } from '@/data/equipamentos';
import case580m from '@/assets/case-580m.png';

// Extended equipment data for detail page
const equipamentoExtendedData: Record<string, {
  imagens: string[];
  descricaoLonga: string;
  inclusos: string[];
  observacoes: { titulo: string; conteudo: string }[];
}> = {
  'retroescavadeira-case-580m': {
    imagens: [case580m],
    descricaoLonga: `A Retroescavadeira Case 580M é uma máquina robusta e versátil, reconhecida pela sua confiabilidade e desempenho em obras de pequeno e médio porte.

Com capacidade de escavação de até 4,37 metros de profundidade e potência de 95 HP, ela é ideal para:
- Terraplanagem de terrenos residenciais e comerciais
- Abertura de valas para tubulação de água, esgoto e energia
- Limpeza de lotes e remoção de entulhos
- Escavação para fundações e piscinas
- Carregamento e movimentação de materiais
- Serviços rurais e agrícolas

Nossa máquina passa por manutenção preventiva rigorosa, garantindo disponibilidade e segurança durante todo o período de locação.`,
    inclusos: [
      'Operador experiente e habilitado',
      'Combustível durante o trabalho',
      'Deslocamento dentro da área de cobertura',
      'Seguro da máquina',
      'Manutenção preventiva em dia',
      'Suporte técnico durante a locação',
    ],
    observacoes: [
      {
        titulo: 'Área de Atendimento',
        conteudo: 'Atendemos Sete Lagoas e região, incluindo Prudente de Morais, Capim Branco, Funilândia, Jequitibá, Paraopeba, Caetanópolis e Baldim. Para outras localidades, consulte disponibilidade e valor de deslocamento.',
      },
      {
        titulo: 'Condições do Terreno',
        conteudo: 'O terreno deve permitir acesso seguro da máquina. Terrenos muito íngremes, alagados ou com obstáculos podem limitar a operação. Consulte-nos para avaliar a viabilidade.',
      },
      {
        titulo: 'Tempo Mínimo',
        conteudo: 'O tempo mínimo de locação é de 2 horas. Para serviços maiores, oferecemos diárias com melhor custo-benefício.',
      },
      {
        titulo: 'Cancelamento',
        conteudo: 'Cancelamentos com menos de 24 horas de antecedência podem incorrer em taxa de deslocamento. Reagendamentos são gratuitos mediante disponibilidade.',
      },
    ],
  },
};

// Default extended data for equipment without specific data
const defaultExtendedData = {
  imagens: ['/placeholder.svg'],
  descricaoLonga: '',
  inclusos: [
    'Operador experiente',
    'Combustível incluso',
    'Suporte técnico',
  ],
  observacoes: [
    {
      titulo: 'Disponibilidade',
      conteudo: 'Este equipamento está sob consulta. Entre em contato para verificar disponibilidade e condições.',
    },
  ],
};

const CatalogoDetalhe = () => {
  const { slug } = useParams<{ slug: string }>();
  const equipamento = slug ? getEquipamentoBySlug(slug) : null;

  // Get extended data
  const extendedData = slug && equipamentoExtendedData[slug]
    ? equipamentoExtendedData[slug]
    : defaultExtendedData;

  // Get related equipment (same category, excluding current)
  const relatedEquipamentos = useMemo(() => {
    if (!equipamento) return [];
    return equipamentos
      .filter((e) => e.categoria === equipamento.categoria && e.id !== equipamento.id)
      .slice(0, 6);
  }, [equipamento]);

  // Get image for equipment
  const getEquipImage = (slug: string) => {
    if (slug === 'retroescavadeira-case-580m') return case580m;
    return '/placeholder.svg';
  };

  if (!equipamento) {
    return <Navigate to="/catalogo" replace />;
  }

  const statusConfig = {
    disponivel: {
      label: 'Disponível',
      className: 'bg-ddm-success/10 text-ddm-success border-ddm-success/20',
    },
    'sob-consulta': {
      label: 'Sob consulta',
      className: 'bg-accent/10 text-accent border-accent/20',
    },
    indisponivel: {
      label: 'Indisponível',
      className: 'bg-muted text-muted-foreground border-border',
    },
  };

  const status = statusConfig[equipamento.status];

  // Use extended description or fallback to base
  const fullDescription = extendedData.descricaoLonga || equipamento.descricaoLonga;

  return (
    <Layout>
      <Helmet>
        <title>{equipamento.nome} | DDM Locações - Sete Lagoas</title>
        <meta
          name="description"
          content={`${equipamento.descricaoCurta} Aluguel com operador incluso em Sete Lagoas e região.${equipamento.preco ? ` ${equipamento.preco}.` : ''}`}
        />
        <link rel="canonical" href={`https://ddmlocacoes.lovable.app/catalogo/${slug}`} />
      </Helmet>

      {/* Breadcrumb + Header */}
      <section className="pt-28 md:pt-32 pb-6 bg-gradient-to-b from-secondary/30 to-transparent">
        <div className="container-ddm">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-foreground transition-colors flex items-center gap-1">
              <Home className="w-4 h-4" />
              Início
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/catalogo" className="hover:text-foreground transition-colors">
              Catálogo
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium truncate max-w-[200px]">
              {equipamento.nome}
            </span>
          </nav>

          {/* Title + Badge */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground">
              {equipamento.nome}
            </h1>
            <Badge variant="outline" className={`${status.className} w-fit`}>
              {status.label}
            </Badge>
          </div>
        </div>
      </section>

      {/* Main Content: 2 columns */}
      <section className="py-8 md:py-12">
        <div className="container-ddm">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Left Column: Gallery + Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Gallery */}
              <ProductGallery
                images={extendedData.imagens}
                alt={equipamento.nome}
              />

              {/* Description */}
              <div>
                <h2 className="text-lg font-display font-bold text-foreground mb-3">
                  Sobre o Equipamento
                </h2>
                <div className="prose prose-sm max-w-none text-muted-foreground">
                  {fullDescription.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-3 last:mb-0 whitespace-pre-line">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div>
                <h2 className="text-lg font-display font-bold text-foreground mb-4">
                  Especificações
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {equipamento.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="p-4 rounded-xl bg-muted/30 border border-border/30"
                    >
                      <p className="text-xs text-muted-foreground mb-1">{spec.label}</p>
                      <p className="font-bold text-foreground">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Included items */}
              <div>
                <h2 className="text-lg font-display font-bold text-foreground mb-4">
                  Incluso no Aluguel
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {extendedData.inclusos.map((item) => (
                    <div key={item} className="flex items-center gap-3 p-3 rounded-lg bg-ddm-success/5 border border-ddm-success/10">
                      <CheckCircle2 className="w-5 h-5 text-ddm-success flex-shrink-0" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Observations / FAQ Accordion */}
              <div>
                <h2 className="text-lg font-display font-bold text-foreground mb-4">
                  Informações Importantes
                </h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {extendedData.observacoes.map((obs, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border border-border/50 rounded-lg px-4 bg-card"
                    >
                      <AccordionTrigger className="hover:no-underline py-4">
                        <div className="flex items-center gap-3">
                          <Info className="w-4 h-4 text-primary" />
                          <span className="font-medium text-foreground text-left">
                            {obs.titulo}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 text-muted-foreground">
                        {obs.conteudo}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            {/* Right Column: Sticky Quote Form */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-28">
                <ProductQuoteForm
                  equipamentoNome={equipamento.nome}
                  preco={equipamento.preco}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Equipment */}
      {relatedEquipamentos.length > 0 && (
        <section className="py-12 md:py-16 bg-secondary/30">
          <div className="container-ddm">
            <h2 className="text-xl md:text-2xl font-display font-bold text-foreground mb-6">
              Equipamentos <span className="text-gradient-vivid">Relacionados</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {relatedEquipamentos.map((equip) => (
                <RelatedEquipmentCard
                  key={equip.id}
                  equipamento={equip}
                  image={getEquipImage(equip.slug)}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Mini How it Works */}
      <section className="py-12 md:py-16">
        <div className="container-ddm">
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
              Como <span className="text-gradient-vivid">Funciona</span>
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto">
            {[
              { icon: Search, step: 1, title: 'Escolha', desc: 'Selecione o equipamento' },
              { icon: CalendarCheck, step: 2, title: 'Agende', desc: 'Defina data e período' },
              { icon: Truck, step: 3, title: 'Receba', desc: 'Entregamos no local' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="relative inline-block mb-3">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-cta mx-auto">
                    <item.icon className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-card border-2 border-primary flex items-center justify-center text-xs font-bold text-primary">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-bold text-foreground text-sm md:text-base mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-xs md:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CatalogoDetalhe;
