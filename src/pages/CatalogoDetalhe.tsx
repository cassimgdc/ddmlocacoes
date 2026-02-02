import { useMemo } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import PageHeaderCompact from '@/components/layout/PageHeaderCompact';
import ProductGallery from '@/components/catalogo/ProductGallery';
import ProductQuoteForm from '@/components/catalogo/ProductQuoteForm';
import RelatedEquipmentCard from '@/components/catalogo/RelatedEquipmentCard';
import VideoShowcase from '@/components/catalogo/VideoShowcase';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { CheckCircle2, Info, ArrowRight } from 'lucide-react';
import { getEquipamentoBySlug, equipamentos } from '@/data/equipamentos';
import case580m from '@/assets/case-580m.png';

// Extended equipment data for detail page
const equipamentoExtendedData: Record<string, {
  imagens: string[];
  descricaoLonga: string;
  inclusos: string[];
  observacoes: { titulo: string; conteudo: string }[];
  video?: {
    url: string;
    highlights?: string[];
  };
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
    video: {
      url: 'https://youtube.com/shorts/YOUR_VIDEO_ID',
      highlights: ['Terraplanagem', 'Abertura de valas', 'Operador experiente', 'Sete Lagoas'],
    },
  },
};

// Default extended data for equipment without specific data
const defaultExtendedData: {
  imagens: string[];
  descricaoLonga: string;
  inclusos: string[];
  observacoes: { titulo: string; conteudo: string }[];
  video?: {
    url: string;
    highlights?: string[];
  };
} = {
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
  video: undefined,
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
      .slice(0, 3);
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
      className: 'bg-success/10 text-success',
    },
    'sob-consulta': {
      label: 'Sob consulta',
      className: 'bg-muted text-muted-foreground',
    },
    indisponivel: {
      label: 'Indisponível',
      className: 'bg-muted text-muted-foreground',
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
        <link rel="canonical" href={`https://ddmlocacoes.com.br/catalogo/${slug}`} />
        <meta property="og:title" content={`${equipamento.nome} | DDM Locações`} />
        <meta property="og:description" content={`${equipamento.descricaoCurta} Aluguel em Sete Lagoas.`} />
        <meta property="og:url" content={`https://ddmlocacoes.com.br/catalogo/${slug}`} />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Header */}
      <PageHeaderCompact
        title={equipamento.nome}
        breadcrumbs={[
          { label: 'Catálogo', href: '/catalogo' },
          { label: equipamento.nome },
        ]}
      />

      {/* Status badge below header */}
      <div className="border-b border-border bg-background">
        <div className="container-ddm py-2">
          <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${status.className}`}>
            {status.label}
          </span>
        </div>
      </div>

      {/* Main Content: 2 columns */}
      <section className="py-6 md:py-8">
        <div className="container-ddm">
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Left Column: Gallery + Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Gallery */}
              <ProductGallery
                images={extendedData.imagens}
                alt={equipamento.nome}
              />

              {/* Video Showcase - Em Ação */}
              {extendedData.video && (
                <VideoShowcase
                  videoUrl={extendedData.video.url}
                  title={`${equipamento.nome} em Ação`}
                  subtitle="Veja o equipamento trabalhando em obras reais da região"
                  highlights={extendedData.video.highlights}
                />
              )}

              {/* Description */}
              <div>
                <h2 className="text-base font-semibold text-foreground mb-2">
                  Sobre o Equipamento
                </h2>
                <div className="text-sm text-muted-foreground space-y-2">
                  {fullDescription.split('\n').map((paragraph, index) => (
                    <p key={index} className="whitespace-pre-line">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div>
                <h2 className="text-base font-semibold text-foreground mb-3">
                  Especificações
                </h2>
                <div className="overflow-hidden rounded-lg border border-border">
                  <table className="w-full text-sm">
                    <tbody>
                      {equipamento.specs.map((spec, index) => (
                        <tr key={spec.label} className={index % 2 === 0 ? 'bg-muted/30' : 'bg-card'}>
                          <td className="px-3 py-2 text-muted-foreground">{spec.label}</td>
                          <td className="px-3 py-2 font-medium text-foreground text-right">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Included items */}
              <div>
                <h2 className="text-base font-semibold text-foreground mb-3">
                  Incluso no Aluguel
                </h2>
                <div className="grid sm:grid-cols-2 gap-2">
                  {extendedData.inclusos.map((item) => (
                    <div key={item} className="flex items-center gap-2 p-2.5 rounded-lg bg-success/5 border border-success/10">
                      <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Observations Accordion */}
              <div>
                <h2 className="text-base font-semibold text-foreground mb-3">
                  Informações Importantes
                </h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {extendedData.observacoes.map((obs, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border border-border rounded-lg px-3 bg-card"
                    >
                      <AccordionTrigger className="hover:no-underline py-3 text-sm">
                        <div className="flex items-center gap-2">
                          <Info className="w-3.5 h-3.5 text-accent" />
                          <span className="font-medium text-foreground text-left">
                            {obs.titulo}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-3 text-muted-foreground text-sm">
                        {obs.conteudo}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            {/* Right Column: Sticky Quote Form */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-20">
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
        <section className="py-6 md:py-8 bg-muted/30 border-t border-border">
          <div className="container-ddm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-semibold text-foreground">
                Equipamentos Relacionados
              </h2>
              <Link to="/catalogo" className="text-sm text-accent hover:underline flex items-center gap-1">
                Ver todos
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
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
    </Layout>
  );
};

export default CatalogoDetalhe;
