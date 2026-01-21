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
        <link rel="canonical" href="https://dig-and-haul-pro.lovable.app/equipamento" />
      </Helmet>
      
      {/* Hero Section - Enhanced with larger image */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
        <div className="absolute top-20 right-0 w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 md:w-96 h-72 md:h-96 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container-ddm relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left - Image (LARGER with floating animation) */}
            <div className="order-1 flex justify-center opacity-0 animate-fade-in-up">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-primary/5 to-transparent blur-3xl scale-125" />
                
                {/* Image with floating animation */}
                <div className="relative animate-float">
                  <img 
                    src={case580m} 
                    alt="Retroescavadeira Case 580M" 
                    className="w-full max-w-[240px] sm:max-w-sm md:max-w-md lg:max-w-lg h-auto hero-image-glow"
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
            <div className="order-2 space-y-5 md:space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 opacity-0 animate-fade-in-up">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-green-600 dark:text-green-400">Disponível agora</span>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black opacity-0 animate-fade-in-up stagger-1">
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
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Shield className="w-4 h-4 text-primary" />
                  Manutenção em dia
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="w-4 h-4 text-primary" />
                  Operador experiente
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Zap className="w-4 h-4 text-primary" />
                  Pronta entrega
                </div>
              </div>

              {/* CTA */}
              <div className="opacity-0 animate-fade-in-up stagger-4">
                <Button variant="cta" size="lg" asChild className="group w-full sm:w-auto">
                  <Link to="/contato">
                    <MessageCircle className="w-5 h-5 group-hover:animate-wiggle" />
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
      <section className="py-12 md:py-20 bg-muted/50 dark:bg-secondary/30 section-glow">
        <div className="container-ddm">
          <div className="text-center mb-8 md:mb-12 opacity-0 animate-fade-in-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
              Capacidades
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              O que a <span className="text-gradient-vivid">Case 580M</span> pode fazer
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto">
            {capabilities.map((capability, index) => (
              <div 
                key={capability}
                className="flex items-center gap-3 p-4 md:p-5 rounded-xl bg-card border border-border/50 opacity-0 animate-fade-in-up card-hover-lift"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-sm md:text-base font-medium text-foreground">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section - MUCH LARGER with spotlight effect */}
      <section className="py-16 md:py-28 relative overflow-hidden">
        {/* Background effects for spotlight */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container-ddm relative z-10">
          <div className="text-center mb-10 md:mb-14 opacity-0 animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Play className="w-4 h-4" />
              Veja em ação
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
              Retroescavadeira <span className="text-gradient-vivid">trabalhando</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
              Confira a Case 580M em uma obra real na região
            </p>
          </div>

          {/* Video container - with space for mute button */}
          <div className="max-w-xs sm:max-w-sm md:max-w-md mx-auto px-16 opacity-0 animate-reveal-up stagger-2">
            <div className="video-spotlight">
              {/* Glow border animation */}
              <div className="relative rounded-2xl animate-glow-pulse">
                {/* Gradient border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl opacity-60 blur-sm" />
                
                {/* Video card - no bg-card wrapper */}
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
                <Star className="w-4 h-4 text-primary fill-primary" />
                Vídeo real da nossa retroescavadeira em operação
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-12 md:py-20 bg-secondary/30 section-glow">
        <div className="container-ddm">
          <div className="text-center mb-8 md:mb-12 opacity-0 animate-fade-in-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
              Ficha Técnica
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              Especificações <span className="text-gradient-vivid">Técnicas</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-4xl mx-auto">
            {specs.map((spec, index) => (
              <div 
                key={spec.label}
                className="p-5 md:p-6 rounded-2xl bg-card border border-border/50 text-center opacity-0 animate-fade-in-up card-hover-lift gradient-border"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="mx-auto w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-3 md:mb-4">
                  <spec.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <p className="text-xs text-muted-foreground mb-1">{spec.label}</p>
                <p className="text-base md:text-xl font-bold text-foreground">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - Enhanced */}
      <section className="py-12 md:py-20">
        <div className="container-ddm">
          <div className="text-center mb-8 md:mb-12 opacity-0 animate-fade-in-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
              Contratação
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              Formas de <span className="text-gradient-vivid">Contratação</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            {/* Hourly */}
            <div className="p-5 md:p-7 rounded-2xl bg-card border border-border/50 animate-fade-in-up card-hover-lift gradient-border" style={{ animationDelay: '100ms' }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground">Serviço por Hora</h3>
                  <p className="text-sm text-muted-foreground">Ideal para serviços pontuais</p>
                </div>
              </div>

              <div className="mb-5">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl md:text-4xl font-black text-gradient-vivid">R$ 200</span>
                  <span className="text-muted-foreground">/hora*</span>
                </div>
              </div>

              <ul className="space-y-2.5 mb-5">
                {[
                  { icon: User, text: 'Operador experiente incluso' },
                  { icon: Fuel, text: 'Combustível incluso' },
                  { icon: Clock, text: 'Mínimo de 2 horas' },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <item.icon className="w-4 h-4 text-green-600 dark:text-green-400" />
                    {item.text}
                  </li>
                ))}
              </ul>

              <Button variant="outline" className="w-full" asChild>
                <Link to="/contato">
                  Solicitar Orçamento
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

            {/* Daily - Featured */}
            <div className="relative p-5 md:p-7 rounded-2xl bg-card border-2 border-primary/50 animate-fade-in-up card-hover-lift animate-glow-pulse" style={{ animationDelay: '200ms' }}>
              {/* Popular badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                  Mais Econômico
                </span>
              </div>

              <div className="flex items-center gap-3 mb-5 pt-2">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground">Serviço por Diária</h3>
                  <p className="text-sm text-muted-foreground">Melhor custo-benefício</p>
                </div>
              </div>

              <div className="mb-5">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl md:text-4xl font-black text-gradient-vivid">Sob Consulta</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">Os valores variam conforme tipo de serviço, deslocamento, tempo estimado e condições do terreno</p>
              </div>

              <ul className="space-y-2.5 mb-5">
                {[
                  { icon: User, text: 'Operador experiente incluso' },
                  { icon: Fuel, text: 'Combustível incluso' },
                  { icon: Clock, text: '8 horas de trabalho' },
                  { icon: CheckCircle2, text: 'Melhor custo por hora' },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <item.icon className="w-4 h-4 text-green-600 dark:text-green-400" />
                    {item.text}
                  </li>
                ))}
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

          {/* Disclaimer */}
          <p className="text-center text-xs text-muted-foreground mt-6 opacity-0 animate-fade-in-up stagger-4">
            * Valores sujeitos a alteração conforme distância, tipo de serviço e condições do terreno.
          </p>
        </div>
      </section>

      {/* Quick Quote Form Section */}
      <section className="py-16 md:py-24 relative overflow-hidden mb-20 md:mb-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[500px] h-[400px] md:h-[500px] border border-primary/10 rounded-full" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container-ddm relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
            {/* Left - Text */}
            <div className="text-center lg:text-left space-y-5 animate-fade-in-up">
              <div>
                <Zap className="w-10 h-10 md:w-12 md:h-12 text-primary mb-4 mx-auto lg:mx-0" />
              </div>
              
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                Precisa de uma <span className="text-gradient-vivid">retroescavadeira?</span>
              </h2>
              
              <p className="text-muted-foreground text-sm md:text-base max-w-md mx-auto lg:mx-0">
                Preencha o formulário ao lado e envie diretamente para nosso WhatsApp. Respondemos em minutos!
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
                  Resposta rápida
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
                  Sem compromisso
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
                  Orçamento grátis
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              <QuickQuoteForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Equipamento;
