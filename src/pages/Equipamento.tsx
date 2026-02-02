import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import {
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Clock,
  Calendar,
  Play,
  Shield,
  User,
  Zap,
  Star,
  Gauge,
  Weight,
  Ruler,
  Box,
  Fuel,
  Wrench,
} from 'lucide-react';

import case580m from '@/assets/case-580m.png';
import MediaCard from '@/components/home/MediaCard';
import QuickQuoteForm from '@/components/home/QuickQuoteForm';

const Equipamento = () => {
  const whatsappLink = 'https://wa.me/5531971067272?text=Olá! Gostaria de solicitar um orçamento para a Retroescavadeira Case 580M.';

  const capabilities = [
    'Abertura de valas e escavações',
    'Terraplanagem e nivelamento',
    'Limpeza de lotes e terrenos',
    'Carregamento de materiais',
    'Escavação para fundações e fossas',
    'Serviços rurais (barraginhas, açudes)',
  ];

  const specs = [
    { icon: Gauge, label: 'Potência', value: '95 HP' },
    { icon: Weight, label: 'Peso operacional', value: '7.500 kg' },
    { icon: Ruler, label: 'Prof. escavação', value: 'Até 4,5m' },
    { icon: Box, label: 'Cap. caçamba', value: '0,19 m³' },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Retroescavadeira Case 580M para Aluguel | DDM Locações Sete Lagoas</title>
        <meta name="description" content="Alugue a Retroescavadeira Case 580M com operador experiente. 95 HP, escavação até 4,5m. A partir de R$ 200/hora em Sete Lagoas e região. Veja especificações." />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="canonical" href="https://ddmlocacoes.lovable.app/equipamento" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_-10%,hsl(28_100%_50%/0.12),transparent)]" />
        <div className="absolute bottom-0 left-0 w-72 md:w-[400px] h-72 md:h-[400px] bg-accent/10 rounded-full blur-[100px]" />
        
        <div className="container-ddm relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left - Image */}
            <div className="order-1 flex justify-center opacity-0 animate-fade-in-up">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-radial from-primary/25 via-primary/10 to-transparent blur-3xl scale-125" />
                
                {/* Image with floating animation */}
                <div className="relative animate-float">
                  <img 
                    src={case580m} 
                    alt="Retroescavadeira Case 580M" 
                    className="w-full max-w-[260px] sm:max-w-sm md:max-w-md lg:max-w-lg h-auto hero-image-glow"
                    loading="eager"
                    decoding="sync"
                    width={600}
                    height={450}
                    fetchPriority="high"
                  />
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="order-2 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-ddm-success/10 border border-ddm-success/20 opacity-0 animate-fade-in-up">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ddm-success opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-ddm-success"></span>
                </span>
                <span className="text-sm font-semibold text-ddm-success">Disponível agora</span>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-black opacity-0 animate-fade-in-up stagger-1">
                <span className="text-foreground">Retroescavadeira</span>
                <br />
                <span className="text-gradient-vivid">Case 580M</span>
              </h1>

              {/* Description */}
              <p className="text-base md:text-lg text-muted-foreground opacity-0 animate-fade-in-up stagger-2">
                Máquina versátil e potente, ideal para diversos tipos de serviço. 
                Sempre revisada e com operador experiente.
              </p>

              {/* Trust indicators */}
              <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up stagger-3">
                {[
                  { icon: Shield, text: 'Manutenção em dia' },
                  { icon: User, text: 'Operador experiente' },
                  { icon: Zap, text: 'Pronta entrega' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="opacity-0 animate-fade-in-up stagger-4">
                <Button variant="cta" size="lg" asChild className="group w-full sm:w-auto">
                  <Link to="/contato">
                    <MessageCircle className="w-5 h-5" />
                    Pedir Orçamento
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 md:py-24 bg-secondary/30 section-glow">
        <div className="container-ddm">
          <div className="text-center mb-10 md:mb-14 opacity-0 animate-fade-in-up">
            <span className="badge-industrial mb-4">
              <Wrench className="w-4 h-4" />
              Capacidades
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground">
              O que a <span className="text-gradient-vivid">Case 580M</span> faz
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {capabilities.map((capability, index) => (
              <div 
                key={capability}
                className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border/50 opacity-0 animate-fade-in-up card-hover-lift"
                style={{ animationDelay: `${(index + 1) * 80}ms` }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-ddm-success/10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-ddm-success" />
                </div>
                <span className="text-sm md:text-base font-medium text-foreground">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-primary/5 rounded-full blur-[120px]" />
        
        <div className="container-ddm relative z-10">
          <div className="text-center mb-10 md:mb-14 opacity-0 animate-fade-in-up">
            <span className="badge-industrial mb-4">
              <Play className="w-4 h-4" />
              Veja em ação
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
              Retroescavadeira <span className="text-gradient-vivid">trabalhando</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Confira a Case 580M em uma obra real na região
            </p>
          </div>

          {/* Video container */}
          <div className="max-w-xs sm:max-w-sm md:max-w-md mx-auto px-8 md:px-16 opacity-0 animate-reveal-up stagger-2">
            <div className="video-spotlight">
              <div className="relative rounded-2xl animate-glow-pulse">
                {/* Gradient border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl opacity-60 blur-sm" />
                
                {/* Video card */}
                <div className="relative rounded-xl">
                  <MediaCard
                    type="video"
                    src="https://www.youtube.com/shorts/cTclcnHgReA"
                    alt="Case 580M em operação"
                    autoplay={true}
                    loop={true}
                    muted={true}
                  />
                </div>
              </div>
            </div>
            
            {/* Video caption */}
            <div className="text-center mt-6 opacity-0 animate-fade-in-up stagger-4">
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <Star className="w-4 h-4 text-accent fill-accent" />
                Vídeo real da nossa retroescavadeira em operação
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-16 md:py-24 bg-secondary/30 section-glow">
        <div className="container-ddm">
          <div className="text-center mb-10 md:mb-14 opacity-0 animate-fade-in-up">
            <span className="badge-industrial mb-4">
              <Gauge className="w-4 h-4" />
              Ficha Técnica
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground">
              Especificações <span className="text-gradient-vivid">Técnicas</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            {specs.map((spec, index) => (
              <div 
                key={spec.label}
                className="p-6 rounded-2xl bg-card border border-border/50 text-center opacity-0 animate-fade-in-up card-hover-lift gradient-border"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="mx-auto w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <spec.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">{spec.label}</p>
                <p className="text-xl md:text-2xl font-display font-bold text-foreground">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24">
        <div className="container-ddm">
          <div className="text-center mb-10 md:mb-14 opacity-0 animate-fade-in-up">
            <span className="badge-industrial mb-4">
              <Clock className="w-4 h-4" />
              Contratação
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground">
              Formas de <span className="text-gradient-vivid">Contratação</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5 md:gap-6 max-w-4xl mx-auto">
            {/* Hourly */}
            <div className="p-6 md:p-8 rounded-2xl bg-card border border-border/50 opacity-0 animate-fade-in-up stagger-1 card-hover-lift gradient-border">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-foreground">Serviço por Hora</h3>
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
                  { icon: User, text: 'Operador experiente incluso' },
                  { icon: Fuel, text: 'Combustível incluso' },
                  { icon: Clock, text: 'Mínimo de 2 horas' },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <item.icon className="w-4 h-4 text-ddm-success" />
                    {item.text}
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

            {/* Daily - Featured */}
            <div className="relative p-6 md:p-8 rounded-2xl bg-card border-2 border-primary/50 opacity-0 animate-fade-in-up stagger-2 card-hover-lift animate-glow-pulse">
              {/* Popular badge */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="px-5 py-1.5 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-bold shadow-cta">
                  Mais Econômico
                </span>
              </div>

              <div className="flex items-center gap-4 mb-5 pt-3">
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center">
                  <Calendar className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-foreground">Serviço por Diária</h3>
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
                  { icon: User, text: 'Operador experiente incluso' },
                  { icon: Fuel, text: 'Combustível incluso' },
                  { icon: Clock, text: '8 horas de trabalho' },
                  { icon: CheckCircle2, text: 'Melhor custo por hora' },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <item.icon className="w-4 h-4 text-ddm-success" />
                    {item.text}
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

          {/* Disclaimer */}
          <p className="text-center text-xs text-muted-foreground mt-6">
            *Valores podem variar conforme serviço, terreno e deslocamento.
          </p>
        </div>
      </section>

      {/* Quick Quote Form Section */}
      <section className="py-20 md:py-28 relative overflow-hidden mb-20 md:mb-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,hsl(28_100%_50%/0.08),transparent)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] border border-primary/10 rounded-full" />
        
        <div className="container-ddm relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
            {/* Left - Text */}
            <div className="text-center lg:text-left space-y-5 animate-fade-in-up">
              <div>
                <span className="badge-industrial mb-4">
                  <Zap className="w-4 h-4" />
                  Resposta Rápida
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground">
                Pronto para <span className="text-gradient-vivid">começar?</span>
              </h2>
              
              <p className="text-muted-foreground">
                Preencha o formulário ao lado e receba um orçamento personalizado pelo WhatsApp em minutos.
              </p>
              
              <ul className="space-y-3 text-left inline-block">
                {[
                  'Resposta em minutos',
                  'Sem compromisso',
                  'Atendimento personalizado',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-ddm-success" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right - Form */}
            <div className="animate-fade-in-up stagger-2">
              <QuickQuoteForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Equipamento;