import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import InternalHero from '@/components/layout/InternalHero';
import { Button } from '@/components/ui/button';
import {
  Users,
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

      <InternalHero
        badge="Sobre nós"
        badgeIcon={Users}
        title="Conheça a"
        titleHighlight="DDM Locações"
        subtitle="Mais do que aluguel de máquinas: uma parceria para sua obra dar certo."
        breadcrumbs={[{ label: 'Sobre' }]}
      />

      {/* História */}
      <section className="section-padding">
        <div className="container-ddm">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Texto */}
            <div className="space-y-5">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                Experiência e dedicação em cada obra
              </h2>
              
              <div className="space-y-4 text-muted-foreground text-sm">
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

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                {[
                  { valor: '50+', label: 'Projetos realizados' },
                  { valor: '8+', label: 'Cidades atendidas' },
                  { valor: '100%', label: 'Clientes satisfeitos' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-3 rounded-lg bg-muted border border-border">
                    <p className="text-xl font-semibold text-copper">{stat.valor}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="rounded-xl bg-muted border border-border p-6">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: MapPin, label: 'Sete Lagoas e Região' },
                    { icon: Clock, label: 'Atendimento Rápido' },
                    { icon: Shield, label: 'Seguro Incluso' },
                    { icon: Star, label: 'Avaliações Positivas' },
                  ].map((item) => (
                    <div key={item.label} className="p-4 rounded-lg bg-card border border-border text-center">
                      <item.icon className="w-6 h-6 text-copper mx-auto mb-2" />
                      <p className="text-sm font-medium text-foreground">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="section-padding bg-muted/50 border-y border-border">
        <div className="container-ddm">
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground">
              Nossos valores
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {valores.map((valor) => (
              <div key={valor.titulo} className="p-4 rounded-xl bg-card border border-border text-center">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mx-auto mb-3">
                  <valor.icon className="w-5 h-5 text-copper" />
                </div>
                <h3 className="font-medium text-foreground mb-1 text-sm">{valor.titulo}</h3>
                <p className="text-xs text-muted-foreground">{valor.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="section-padding">
        <div className="container-ddm">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                Por que nos escolher
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-2">
              {diferenciais.map((item) => (
                <div key={item} className="flex items-center gap-3 p-3 rounded-lg bg-muted border border-border">
                  <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                  <span className="text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted/50 border-t border-border">
        <div className="container-ddm">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              Vamos trabalhar juntos?
            </h2>
            <p className="text-muted-foreground text-sm mb-6">
              Entre em contato e descubra como podemos ajudar na sua obra.
            </p>
            <Button variant="default" size="lg" asChild>
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
