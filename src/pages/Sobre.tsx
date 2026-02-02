import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import PageHeaderCompact from '@/components/layout/PageHeaderCompact';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  MessageCircle,
  MapPin,
  Clock,
  Shield,
  Star,
  Target,
  Heart,
  Handshake,
  CheckCircle2,
} from 'lucide-react';

const Sobre = () => {
  const valores = [
    {
      icon: Target,
      titulo: 'Compromisso',
      descricao: 'Entregamos o que prometemos, no prazo combinado.',
    },
    {
      icon: Heart,
      titulo: 'Dedicação',
      descricao: 'Cada obra é tratada com atenção e cuidado.',
    },
    {
      icon: Handshake,
      titulo: 'Transparência',
      descricao: 'Orçamento claro, sem surpresas no final.',
    },
    {
      icon: Star,
      titulo: 'Qualidade',
      descricao: 'Equipamento revisado e operador experiente.',
    },
  ];

  const diferenciais = [
    'Atendimento personalizado',
    'Resposta rápida pelo WhatsApp',
    'Operador experiente incluso',
    'Combustível incluso',
    'Máquina sempre revisada',
    'Preço justo e competitivo',
  ];

  return (
    <Layout>
      <Helmet>
        <title>Sobre a DDM Locações | Aluguel de Retroescavadeira - Sete Lagoas</title>
        <meta name="description" content="Conheça a DDM Locações: locação de retroescavadeira com operador em Sete Lagoas e região. Anos de experiência, equipamento de qualidade e atendimento diferenciado." />
        <link rel="canonical" href="https://ddmlocacoes.com.br/sobre" />
      </Helmet>

      <PageHeaderCompact
        title="Sobre a DDM Locações"
        subtitle="Mais do que aluguel de máquinas: uma parceria para sua obra dar certo"
        breadcrumbs={[{ label: 'Sobre' }]}
      />

      {/* História - Editorial 2 columns */}
      <section className="py-6 md:py-10">
        <div className="container-ddm">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left - Text */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-foreground">
                Experiência e dedicação em cada obra
              </h2>
              
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  A DDM Locações nasceu da paixão por máquinas e do desejo de oferecer um serviço diferenciado para quem precisa de retroescavadeira em Sete Lagoas e região.
                </p>
                <p>
                  Sabemos que cada obra tem suas particularidades. Por isso, oferecemos atendimento personalizado, com orçamento justo e sem surpresas. Nossa máquina está sempre revisada e nosso operador é experiente e comprometido com o resultado.
                </p>
                <p>
                  Atendemos desde pequenas obras residenciais até projetos maiores, sempre com o mesmo cuidado e atenção aos detalhes.
                </p>
              </div>

              {/* Stats inline */}
              <div className="grid grid-cols-3 gap-2 pt-2">
                {[
                  { valor: '50+', label: 'Projetos' },
                  { valor: '8+', label: 'Cidades' },
                  { valor: '100%', label: 'Satisfeitos' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-3 rounded-lg bg-muted border border-border">
                    <p className="text-lg font-semibold text-copper">{stat.valor}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Values cards */}
            <div className="grid grid-cols-2 gap-3">
              {valores.map((valor) => (
                <div key={valor.titulo} className="p-4 rounded-lg bg-card border border-border">
                  <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center mb-2">
                    <valor.icon className="w-4 h-4 text-copper" />
                  </div>
                  <h3 className="font-medium text-foreground mb-1 text-sm">{valor.titulo}</h3>
                  <p className="text-xs text-muted-foreground">{valor.descricao}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-6 md:py-10 bg-muted/30 border-y border-border">
        <div className="container-ddm">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-lg font-semibold text-foreground text-center mb-4">
              Por que nos escolher
            </h2>

            <div className="grid sm:grid-cols-2 gap-2">
              {diferenciais.map((item) => (
                <div key={item} className="flex items-center gap-2 p-3 rounded-lg bg-card border border-border">
                  <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Info cards */}
      <section className="py-6 md:py-10">
        <div className="container-ddm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto">
            {[
              { icon: MapPin, label: 'Sete Lagoas e Região' },
              { icon: Clock, label: 'Atendimento Rápido' },
              { icon: Shield, label: 'Seguro Incluso' },
              { icon: Star, label: 'Avaliações Positivas' },
            ].map((item) => (
              <div key={item.label} className="p-3 rounded-lg bg-card border border-border text-center">
                <item.icon className="w-5 h-5 text-copper mx-auto mb-1.5" />
                <p className="text-xs font-medium text-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-6 md:py-10 bg-muted/30 border-t border-border">
        <div className="container-ddm">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="text-lg font-semibold text-foreground mb-2">
              Vamos trabalhar juntos?
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              Entre em contato e descubra como podemos ajudar na sua obra.
            </p>
            <Button variant="default" size="default" asChild>
              <Link to="/contato">
                <MessageCircle className="w-4 h-4" />
                Fale Conosco
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sobre;
