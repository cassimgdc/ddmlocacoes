import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import InternalHero from '@/components/layout/InternalHero';
import { Button } from '@/components/ui/button';
import {
  Tractor,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Ruler,
  Weight,
  Gauge,
  Wrench,
  Fuel,
  User,
  Clock,
  Shield,
  Play,
} from 'lucide-react';
import case580m from '@/assets/case-580m.png';

// Dados dos equipamentos (pode ser movido para um arquivo separado)
const equipamentosData: Record<string, {
  nome: string;
  categoria: string;
  imagem: string;
  descricao: string;
  descricaoCompleta: string;
  especificacoes: { label: string; valor: string; icon: typeof Ruler }[];
  servicos: string[];
  inclusos: string[];
  precoHora: string;
  videoId?: string;
}> = {
  'retroescavadeira-case-580m': {
    nome: 'Retroescavadeira Case 580M',
    categoria: 'Retroescavadeira',
    imagem: case580m,
    descricao: 'Máquina versátil para escavação, terraplanagem e carregamento.',
    descricaoCompleta: 'A Case 580M é uma retroescavadeira robusta e versátil, ideal para obras residenciais, comerciais e serviços rurais. Com grande capacidade de escavação e carregamento, resolve a maioria dos trabalhos de terraplanagem, abertura de valas e limpeza de terrenos.',
    especificacoes: [
      { label: 'Profundidade escavação', valor: 'Até 4,37m', icon: Ruler },
      { label: 'Capacidade caçamba', valor: '0,26 m³', icon: Weight },
      { label: 'Potência motor', valor: '95 HP', icon: Gauge },
      { label: 'Manutenção', valor: 'Em dia', icon: Wrench },
    ],
    servicos: [
      'Abertura de valas para tubulação',
      'Terraplanagem de terrenos',
      'Limpeza de lotes e entulhos',
      'Escavação para fundações',
      'Carregamento de materiais',
      'Serviços rurais diversos',
    ],
    inclusos: [
      'Operador experiente',
      'Combustível durante o trabalho',
      'Deslocamento (consulte área)',
      'Seguro da máquina',
    ],
    precoHora: 'R$ 200',
    videoId: 'dQw4w9WgXcQ', // Placeholder
  },
};

const CatalogoDetalhe = () => {
  const { slug } = useParams<{ slug: string }>();
  const equipamento = slug ? equipamentosData[slug] : null;

  if (!equipamento) {
    return <Navigate to="/catalogo" replace />;
  }

  return (
    <Layout>
      <Helmet>
        <title>{equipamento.nome} | DDM Locações - Sete Lagoas</title>
        <meta name="description" content={`${equipamento.descricao} Aluguel com operador incluso em Sete Lagoas e região. ${equipamento.precoHora}/hora.`} />
        <link rel="canonical" href={`https://ddmlocacoes.lovable.app/catalogo/${slug}`} />
        <meta property="og:title" content={`${equipamento.nome} | DDM Locações`} />
        <meta property="og:description" content={equipamento.descricao} />
      </Helmet>

      <InternalHero
        badge={equipamento.categoria}
        badgeIcon={Tractor}
        title={equipamento.nome}
        subtitle={equipamento.descricao}
        breadcrumbs={[
          { label: 'Catálogo', href: '/catalogo' },
          { label: equipamento.nome },
        ]}
        size="sm"
      />

      {/* Conteúdo Principal */}
      <section className="py-10 md:py-16">
        <div className="container-ddm">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Imagem */}
            <div className="relative">
              <div className="rounded-2xl bg-gradient-to-br from-secondary/50 to-muted/30 p-8 md:p-12 border border-border/50">
                <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50" />
                <img
                  src={equipamento.imagem}
                  alt={equipamento.nome}
                  className="relative w-full h-auto max-h-[400px] object-contain animate-float"
                />
              </div>

              {/* Badge preço */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 md:left-auto md:-right-4 md:translate-x-0 md:bottom-8">
                <div className="px-5 py-3 rounded-xl bg-card border border-border shadow-lg">
                  <p className="text-xs text-muted-foreground text-center">A partir de</p>
                  <p className="text-2xl font-bold text-gradient-vivid text-center">
                    {equipamento.precoHora}
                    <span className="text-sm font-normal text-muted-foreground">/hora</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Detalhes */}
            <div className="space-y-6">
              {/* Descrição */}
              <div>
                <h2 className="text-lg font-display font-bold text-foreground mb-2">Sobre o equipamento</h2>
                <p className="text-muted-foreground">{equipamento.descricaoCompleta}</p>
              </div>

              {/* Especificações */}
              <div>
                <h3 className="text-base font-display font-bold text-foreground mb-3">Especificações</h3>
                <div className="grid grid-cols-2 gap-3">
                  {equipamento.especificacoes.map((spec) => (
                    <div key={spec.label} className="p-3 rounded-xl bg-muted/30 border border-border/30">
                      <div className="flex items-center gap-2 mb-1">
                        <spec.icon className="w-4 h-4 text-primary" />
                        <span className="text-xs text-muted-foreground">{spec.label}</span>
                      </div>
                      <p className="font-semibold text-foreground">{spec.valor}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusos */}
              <div>
                <h3 className="text-base font-display font-bold text-foreground mb-3">Incluso no aluguel</h3>
                <div className="grid grid-cols-2 gap-2">
                  {equipamento.inclusos.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-ddm-success flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button variant="cta" size="lg" asChild className="group flex-1">
                  <Link to="/contato">
                    <MessageCircle className="w-5 h-5" />
                    Solicitar Orçamento
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://wa.me/5531971067272" target="_blank" rel="noopener noreferrer">
                    WhatsApp Direto
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços que realiza */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container-ddm">
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
              Serviços que <span className="text-gradient-vivid">realiza</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-3xl mx-auto">
            {equipamento.servicos.map((servico) => (
              <div key={servico} className="p-4 rounded-xl bg-card border border-border/50 text-center">
                <Wrench className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">{servico}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que escolher */}
      <section className="py-12 md:py-16">
        <div className="container-ddm">
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
              Por que alugar <span className="text-gradient-vivid">conosco</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { icon: User, label: 'Operador experiente' },
              { icon: Fuel, label: 'Combustível incluso' },
              { icon: Shield, label: 'Máquina segurada' },
              { icon: Clock, label: 'Atendimento rápido' },
            ].map((item) => (
              <div key={item.label} className="p-5 rounded-xl bg-card border border-border/50 text-center card-hover-lift">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CatalogoDetalhe;
