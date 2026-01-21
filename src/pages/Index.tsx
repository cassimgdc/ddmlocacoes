import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import {
  MessageCircle,
  ArrowRight,
  Shovel,
  Mountain,
  Trees,
  Construction,
  CheckCircle2,
  MapPin,
  Clock,
  Shield,
  ChevronRight,
  Star,
  Phone,
  Zap,
  Play,
} from 'lucide-react';

import case580m from '@/assets/case-580m.png';

const Index = () => {
  const services = [
    { icon: Shovel, title: 'Abertura de Valas', href: '/servicos' },
    { icon: Mountain, title: 'Terraplanagem', href: '/servicos' },
    { icon: Trees, title: 'Limpeza de Lotes', href: '/servicos' },
    { icon: Construction, title: 'Escavação', href: '/servicos' },
  ];

  return (
    <Layout>
      <Helmet>
        <title>DDM Locações - Aluguel de Retroescavadeira em Sete Lagoas | Terraplanagem e Escavação</title>
        <meta name="description" content="Aluguel de retroescavadeira Case 580M com operador experiente em Sete Lagoas e região. Terraplanagem, abertura de valas, limpeza de lotes. A partir de R$ 200/hora. Orçamento rápido pelo WhatsApp." />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="canonical" href="https://dig-and-haul-pro.lovable.app/" />
      </Helmet>
      
      {/* Hero - Modernized with larger image */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden pt-16 md:pt-0">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 md:w-96 h-72 md:h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-48 md:w-64 h-48 md:h-64 bg-accent/5 rounded-full blur-3xl" />
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        <div className="container-ddm relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left space-y-5 md:space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 opacity-0 animate-fade-in-up">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-sm font-medium text-primary">Disponível para locação</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight opacity-0 animate-fade-in-up stagger-1">
                <span className="text-foreground">Aluguel de</span>
                <br />
                <span className="text-gradient-vivid">Retroescavadeira</span>
              </h1>

              {/* Description */}
              <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 opacity-0 animate-fade-in-up stagger-2">
                Serviço com operador experiente, máquina revisada e atendimento rápido em Sete Lagoas e região.
              </p>

              {/* Stats row */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 opacity-0 animate-fade-in-up stagger-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">Sete Lagoas e região</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">Atendimento rápido</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Shield className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">Operador incluso</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start opacity-0 animate-fade-in-up stagger-4">
                <Button variant="cta" size="lg" asChild className="group w-full sm:w-auto">
                  <Link to="/contato">
                    <MessageCircle className="w-5 h-5 group-hover:animate-wiggle" />
                    Pedir Orçamento
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
              <div className="flex items-center justify-center lg:justify-start gap-4 pt-2 opacity-0 animate-fade-in-up stagger-5">
                <div className="flex -space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  Clientes satisfeitos na região
                </span>
              </div>
            </div>

            {/* Right - Hero Image (MUCH LARGER with floating animation) */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end opacity-0 animate-fade-in-up stagger-2">
              <div className="relative">
                {/* Glow effect behind image */}
                <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-primary/5 to-transparent blur-3xl scale-110" />
                
                {/* Main image container with floating animation */}
                <div className="relative animate-float">
                  <img 
                    src={case580m} 
                    alt="Retroescavadeira Case 580M" 
                    className="w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto hero-image-glow transition-all duration-500 hover:scale-105"
                    loading="eager"
                  />
                  
                  {/* Floating badge */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 lg:bottom-4 lg:left-auto lg:right-0 lg:translate-x-0">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/90 backdrop-blur-sm border border-primary/30 shadow-lg animate-glow-pulse">
                      <CheckCircle2 className="w-4 h-4 text-ddm-success" />
                      <span className="text-sm font-semibold text-foreground whitespace-nowrap">Pronta Entrega</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Enhanced with hover effects */}
      <section className="py-12 md:py-20 bg-muted/30 section-glow">
        <div className="container-ddm">
          <div className="flex items-center justify-between mb-8 md:mb-12">
            <div className="opacity-0 animate-fade-in-up">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                Nossos Serviços
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                O que podemos <span className="text-gradient-vivid">fazer por você</span>
              </h2>
            </div>
            <Link 
              to="/servicos" 
              className="hidden md:flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              Ver todos
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Grid de serviços */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-6 md:mb-8">
            {services.map((service, index) => (
              <Link
                key={service.title}
                to={service.href}
                className="group opacity-0 animate-fade-in-up card-hover-lift gradient-border"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="relative p-5 md:p-8 rounded-2xl bg-card border border-border/50 text-center transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className="mx-auto w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                    <service.icon className="w-6 h-6 md:w-8 md:h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  
                  {/* Label */}
                  <h3 className="font-semibold text-foreground text-sm md:text-base group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  {/* Arrow indicator */}
                  <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Ver todos */}
          <div className="text-center opacity-0 animate-fade-in-up stagger-6">
            <Button variant="outline" size="lg" asChild className="w-full md:w-auto group">
              <Link to="/servicos">
                Ver todos os serviços
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section - Enhanced */}
      <section className="py-12 md:py-20">
        <div className="container-ddm">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8 md:mb-12 opacity-0 animate-fade-in-up">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                Contratação
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                Formas de <span className="text-gradient-vivid">Contratação</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {/* Por Hora */}
              <div className="p-5 md:p-7 rounded-2xl bg-card border border-border/50 animate-fade-in-up stagger-1 card-hover-lift gradient-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-foreground">Por Hora</h3>
                    <p className="text-sm text-muted-foreground">Ideal para serviços pontuais</p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl md:text-4xl font-black text-gradient-vivid">R$ 200</span>
                    <span className="text-muted-foreground">/hora</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-ddm-success" />
                    Operador experiente incluso
                  </li>
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-ddm-success" />
                    Combustível incluso
                  </li>
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-ddm-success" />
                    Mínimo de 2 horas
                  </li>
                </ul>

                <Button variant="outline" className="w-full" asChild>
                  <Link to="/contato">
                    Solicitar Orçamento
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>

              {/* Por Diária - Featured */}
              <div className="relative p-5 md:p-7 rounded-2xl bg-card border-2 border-primary/50 animate-fade-in-up stagger-2 card-hover-lift animate-glow-pulse">
                {/* Popular badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                    Mais Econômico
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-4 pt-2">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                    <Zap className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-foreground">Por Diária</h3>
                    <p className="text-sm text-muted-foreground">Melhor custo-benefício</p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl md:text-4xl font-black text-gradient-vivid">Sob Consulta</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Valor varia conforme distância</p>
                </div>

                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-ddm-success" />
                    Operador experiente incluso
                  </li>
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-ddm-success" />
                    Combustível incluso
                  </li>
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-ddm-success" />
                    8 horas de trabalho
                  </li>
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-ddm-success" />
                    Melhor custo por hora
                  </li>
                </ul>

                <Button variant="cta" className="w-full group" asChild>
                  <Link to="/contato">
                    <MessageCircle className="w-4 h-4 group-hover:animate-wiggle" />
                    Pedir Orçamento
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>

            <p className="text-center text-muted-foreground text-sm mt-5 md:mt-6 opacity-0 animate-fade-in stagger-3">
              Valores podem variar conforme serviço, terreno e deslocamento.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Enhanced */}
      <section className="py-16 md:py-24 relative overflow-hidden mb-20 md:mb-0">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        
        {/* Decorative circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] border border-primary/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[400px] h-[250px] md:h-[400px] border border-primary/20 rounded-full" />
        
        <div className="container-ddm relative z-10">
          <div className="max-w-2xl mx-auto text-center space-y-6 md:space-y-8">
            <div className="opacity-0 animate-fade-in-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Zap className="w-4 h-4" />
                Resposta rápida garantida
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground opacity-0 animate-fade-in-up stagger-1">
              Pronto para começar seu <span className="text-gradient-vivid">projeto?</span>
            </h2>
            
            <p className="text-base md:text-lg text-muted-foreground opacity-0 animate-fade-in-up stagger-2">
              Preencha o formulário e receba atendimento pelo WhatsApp em minutos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up stagger-3">
              <Button variant="cta" size="xl" asChild className="group w-full sm:w-auto">
                <Link to="/contato">
                  <MessageCircle className="w-5 h-5 group-hover:animate-wiggle" />
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
