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
        <meta property="og:title" content="Sobre a DDM Locações" />
        <meta property="og:description" content="Locação de retroescavadeira com qualidade em Sete Lagoas." />
        <meta property="og:url" content="https://ddmlocacoes.com.br/sobre" />
        <meta property="og:image" content="https://ddmlocacoes.com.br/og-image.png" />
        <meta property="og:type" content="website" />
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
      <section className="py-12 md:py-20">
        <div className="container-ddm">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Texto */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                Experiência e dedicação em <span className="text-gradient-vivid">cada obra</span>
              </h2>
              
              <div className="space-y-4 text-muted-foreground">
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
              <div className="grid grid-cols-3 gap-4 pt-4">
                {[
                  { valor: '50+', label: 'Projetos realizados' },
                  { valor: '8+', label: 'Cidades atendidas' },
                  { valor: '100%', label: 'Clientes satisfeitos' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 rounded-xl bg-muted/30 border border-border/30">
                    <p className="text-2xl md:text-3xl font-display font-bold text-gradient-vivid">{stat.valor}</p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 p-8 border border-border/50">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: MapPin, label: 'Sete Lagoas e Região' },
                    { icon: Clock, label: 'Atendimento Rápido' },
                    { icon: Shield, label: 'Seguro Incluso' },
                    { icon: Star, label: 'Avaliações Positivas' },
                  ].map((item) => (
                    <div key={item.label} className="p-4 rounded-xl bg-card/80 backdrop-blur-sm border border-border/30 text-center">
                      <item.icon className="w-8 h-8 text-primary mx-auto mb-2" />
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
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container-ddm">
          <div className="text-center mb-10">
            <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
              Nossos <span className="text-gradient-vivid">valores</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {valores.map((valor) => (
              <div key={valor.titulo} className="p-5 rounded-xl bg-card border border-border/50 text-center card-hover-lift">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <valor.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">{valor.titulo}</h3>
                <p className="text-sm text-muted-foreground">{valor.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-12 md:py-16">
        <div className="container-ddm">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                Por que <span className="text-gradient-vivid">nos escolher</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {diferenciais.map((item) => (
                <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-muted/30 border border-border/30">
                  <CheckCircle2 className="w-5 h-5 text-ddm-success flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-muted/20">
        <div className="container-ddm">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Vamos trabalhar <span className="text-gradient-vivid">juntos</span>?
            </h2>
            <p className="text-muted-foreground mb-6">
              Entre em contato e descubra como podemos ajudar na sua obra.
            </p>
            <Button variant="cta" size="lg" asChild className="group">
              <Link to="/contato">
                <MessageCircle className="w-5 h-5" />
                Fale Conosco
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sobre;
