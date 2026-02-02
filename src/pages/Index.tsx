import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import ServicesCarousel from '@/components/home/ServicesCarousel';
import {
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Clock,
  Shield,
  Star,
  Phone,
  Zap,
  Play,
  User,
  Fuel,
  Wrench,
  TrendingUp,
} from 'lucide-react';
import case580m from '@/assets/case-580m.png';

const Index = () => {
  const stats = [
    { icon: MapPin, label: 'Sete Lagoas e região', highlight: true },
    { icon: Clock, label: 'Atendimento rápido' },
    { icon: Shield, label: 'Operador incluso' },
  ];

  const differentials = [
    { icon: User, title: 'Operador Experiente', description: 'Profissional qualificado incluso no serviço' },
    { icon: Fuel, title: 'Combustível Incluso', description: 'Sem custos adicionais durante o trabalho' },
    { icon: Wrench, title: 'Máquina Revisada', description: 'Manutenção em dia, sem surpresas' },
    { icon: TrendingUp, title: 'Preço Competitivo', description: 'Melhor custo-benefício da região' },
  ];

  const cities = [
    'Sete Lagoas',
    'Prudente de Morais',
    'Capim Branco',
    'Funilândia',
    'Jequitibá',
    'Paraopeba',
    'Caetanópolis',
    'Baldim',
  ];

  return (
    <Layout>
      <Helmet>
        <title>DDM Locações - Aluguel de Retroescavadeira em Sete Lagoas | Terraplanagem e Escavação</title>
        <meta name="description" content="Aluguel de retroescavadeira Case 580M com operador experiente em Sete Lagoas e região. Terraplanagem, abertura de valas, limpeza de lotes. A partir de R$ 200/hora. Orçamento rápido pelo WhatsApp." />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="canonical" href="https://ddmlocacoes.lovable.app/" />
      </Helmet>
      
      {/* Hero Section - Full Impact */}
      <section className="relative min-h-[90vh] md:min-h-[85vh] flex items-center pt-28 md:pt-32 pb-16 overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,hsl(28_100%_50%/0.15),transparent)]" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
        
        <div className="container-ddm relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-ddm-success/10 border border-ddm-success/20 opacity-0 animate-fade-in-up">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ddm-success opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-ddm-success"></span>
                </span>
                <span className="text-sm font-semibold text-ddm-success">Disponível para locação</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black leading-[1.1] opacity-0 animate-fade-in-up stagger-1">
                <span className="text-foreground">Aluguel de</span>
                <br />
                <span className="text-gradient-vivid">Retroescavadeira</span>
                <br />
                <span className="text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl">em Sete Lagoas</span>
              </h1>

              {/* Description */}
              <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 opacity-0 animate-fade-in-up stagger-2">
                Serviço completo com <span className="text-foreground font-medium">operador experiente</span>, 
                máquina revisada e combustível incluso. Atendimento rápido em toda a região.
              </p>

              {/* Stats row */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 opacity-0 animate-fade-in-up stagger-2">
                {stats.map((stat, index) => (
                  <div key={index} className={`flex items-center gap-2 px-3 py-2 rounded-lg ${
                    stat.highlight 
                      ? 'bg-primary/10 border border-primary/20' 
                      : 'bg-muted/50'
                  }`}>
                    <stat.icon className={`w-4 h-4 ${stat.highlight ? 'text-primary' : 'text-muted-foreground'}`} />
                    <span className={`text-sm font-medium ${stat.highlight ? 'text-primary' : 'text-muted-foreground'}`}>
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start opacity-0 animate-fade-in-up stagger-3">
                <Button variant="cta" size="lg" asChild className="group w-full sm:w-auto">
                  <Link to="/contato">
                    <MessageCircle className="w-5 h-5" />
                    Pedir Orçamento Grátis
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="group w-full sm:w-auto">
                  <Link to="/equipamento">
                    <Play className="w-4 h-4" />
                    Ver Equipamento
                  </Link>
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center justify-center lg:justify-start gap-4 pt-2 opacity-0 animate-fade-in-up stagger-4">
                <div className="flex -space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  Clientes satisfeitos na região
                </span>
              </div>
            </div>

            {/* Right - Image */}
            <div className="order-1 lg:order-2 flex justify-center opacity-0 animate-fade-in-up">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-radial from-primary/25 via-primary/10 to-transparent blur-3xl scale-125" />
                
                {/* Machine image with floating animation */}
                <div className="relative animate-float">
                  <img 
                    src={case580m} 
                    alt="Retroescavadeira Case 580M para aluguel em Sete Lagoas" 
                    className="w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg h-auto hero-image-glow"
                    loading="eager"
                    decoding="sync"
                    width={600}
                    height={450}
                    fetchPriority="high"
                  />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 lg:left-auto lg:-right-4 lg:translate-x-0 lg:bottom-1/4">
                  <div className="px-4 py-2.5 rounded-xl bg-card border border-border shadow-lg flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">A partir de</p>
                      <p className="text-lg font-bold text-foreground">R$ 200<span className="text-sm font-normal text-muted-foreground">/hora</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-16 md:py-24 bg-secondary/30 section-glow">
        <div className="container-ddm">
          <div className="text-center mb-10 md:mb-14 opacity-0 animate-fade-in-up">
            <span className="badge-industrial mb-4">
              <Shield className="w-4 h-4" />
              Por que nos escolher
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground">
              Tudo <span className="text-gradient-vivid">incluso</span> no serviço
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {differentials.map((item, index) => (
              <div 
                key={item.title}
                className="p-5 md:p-6 rounded-xl bg-card border border-border/50 text-center opacity-0 animate-fade-in-up card-hover-lift"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="mx-auto w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-1.5 text-sm md:text-base">{item.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carrossel Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="container-ddm relative z-10 mb-8">
          <div className="text-center opacity-0 animate-fade-in-up">
            <span className="badge-industrial mb-4">
              <Wrench className="w-4 h-4" />
              Serviços
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground">
              O que a <span className="text-gradient-vivid">retroescavadeira</span> faz
            </h2>
          </div>
        </div>
        
        {/* Carrossel de Serviços */}
        <div className="relative z-10">
          <ServicesCarousel 
            mobileSize="basis-[85%]"
            tabletSize="md:basis-[70%]"
            desktopSize="lg:basis-[50%]"
            className="animate-fade-in-up stagger-2"
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 bg-muted/30 section-glow">
        <div className="container-ddm">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 md:mb-14 opacity-0 animate-fade-in-up">
              <span className="badge-industrial mb-4">
                <Clock className="w-4 h-4" />
                Contratação
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground">
                Formas de <span className="text-gradient-vivid">Contratação</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5 md:gap-6">
              {/* Por Hora */}
              <div className="p-6 md:p-8 rounded-2xl bg-card border border-border/50 card-hover-lift gradient-border opacity-0 animate-fade-in-up stagger-1">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Clock className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-foreground">Por Hora</h3>
                    <p className="text-sm text-muted-foreground">Ideal para serviços pontuais</p>
                  </div>
                </div>

                <div className="mb-5">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl md:text-5xl font-display font-black text-gradient-vivid">R$ 200</span>
                    <span className="text-muted-foreground">/hora*</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {[
                    'Operador experiente incluso',
                    'Combustível incluso',
                    'Mínimo de 2 horas',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-ddm-success flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="w-full" size="lg" asChild>
                  <Link to="/contato">
                    Solicitar Orçamento
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>

              {/* Por Diária - Featured */}
              <div className="relative p-6 md:p-8 rounded-2xl bg-card border-2 border-primary/50 card-hover-lift animate-glow-pulse opacity-0 animate-fade-in-up stagger-2">
                {/* Popular badge */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-5 py-1.5 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-bold shadow-cta">
                    Mais Econômico
                  </span>
                </div>

                <div className="flex items-center gap-4 mb-5 pt-3">
                  <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center">
                    <Zap className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-foreground">Por Diária</h3>
                    <p className="text-sm text-muted-foreground">Melhor custo-benefício</p>
                  </div>
                </div>

                <div className="mb-5">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl md:text-4xl font-display font-black text-gradient-vivid">Sob Consulta</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Valores variam conforme serviço, deslocamento e terreno</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {[
                    'Operador experiente incluso',
                    'Combustível incluso',
                    '8 horas de trabalho',
                    'Melhor custo por hora',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-ddm-success flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Button variant="cta" className="w-full group" size="lg" asChild>
                  <Link to="/contato">
                    <MessageCircle className="w-4 h-4" />
                    Pedir Orçamento
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>

            <p className="text-center text-muted-foreground text-sm mt-6 opacity-0 animate-fade-in stagger-3">
              *Valores podem variar conforme serviço, terreno e deslocamento.
            </p>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-16 md:py-24">
        <div className="container-ddm">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10 md:mb-14 opacity-0 animate-fade-in-up">
              <span className="badge-industrial mb-4">
                <MapPin className="w-4 h-4" />
                Cobertura
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground">
                Área de <span className="text-gradient-vivid">Atendimento</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-border/50 shadow-lg opacity-0 animate-fade-in-up stagger-1">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120584.36969178873!2d-44.32807087891628!3d-19.46576840000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa57e99c1e2ac79%3A0x54eb4dcf4c9f4439!2sSete%20Lagoas%2C%20MG!5e0!3m2!1spt-BR!2sbr!4v1705600000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="320"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa Sete Lagoas"
                  className="w-full h-[280px] md:h-[320px]"
                />
              </div>

              {/* Cities */}
              <div className="p-6 md:p-8 rounded-2xl bg-card border border-border/50 opacity-0 animate-fade-in-up stagger-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground text-lg">Cidades Atendidas</h3>
                    <p className="text-sm text-muted-foreground">
                      <span className="text-foreground font-semibold">Sete Lagoas</span> e região
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {cities.map((city, index) => (
                    <span 
                      key={city}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        index === 0 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                      }`}
                    >
                      {city}
                    </span>
                  ))}
                </div>

                <div className="pt-5 border-t border-border/50">
                  <p className="text-sm text-muted-foreground flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    Consulte disponibilidade para outras localidades da região
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden mb-20 md:mb-0">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,hsl(28_100%_50%/0.1),transparent)]" />
        
        {/* Decorative circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[700px] h-[500px] md:h-[700px] border border-primary/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] border border-primary/15 rounded-full" />
        
        <div className="container-ddm relative z-10">
          <div className="max-w-2xl mx-auto text-center space-y-6 md:space-y-8">
            <div className="opacity-0 animate-fade-in-up">
              <span className="badge-industrial">
                <Zap className="w-4 h-4" />
                Resposta rápida garantida
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground opacity-0 animate-fade-in-up stagger-1">
              Pronto para começar seu <span className="text-gradient-vivid">projeto?</span>
            </h2>
            
            <p className="text-base md:text-lg text-muted-foreground opacity-0 animate-fade-in-up stagger-2">
              Preencha o formulário e receba atendimento pelo WhatsApp em minutos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up stagger-3">
              <Button variant="cta" size="xl" asChild className="group w-full sm:w-auto">
                <Link to="/contato">
                  <MessageCircle className="w-5 h-5" />
                  Solicitar Orçamento
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild className="group w-full sm:w-auto">
                <a href="tel:+5531971067272">
                  <Phone className="w-5 h-5" />
                  (31) 97106-7272
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;