import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from '@/components/ui/carousel';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import {
  MessageCircle,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  MapPin,
  Clock,
  Shield,
  Star,
  Phone,
  Zap,
  Play,
} from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';
import { useRef, useState, useEffect, useCallback } from 'react';

// Imagens dos serviços
import aberturaValas from '@/assets/servicos/abertura-valas.png';
import terraplanagem from '@/assets/servicos/terraplanagem.png';
import limpezaLotes from '@/assets/servicos/limpeza-lotes.png';
import escavacao from '@/assets/servicos/escavacao.png';
import servicosRurais from '@/assets/servicos/servicos-rurais.png';
import carregamento from '@/assets/servicos/carregamento.png';

const AUTOPLAY_DELAY = 5000;

const Index = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const plugin = useRef(
    Autoplay({ delay: AUTOPLAY_DELAY, stopOnInteraction: true })
  );

  const servicos = [
    { 
      titulo: 'Abertura e Limpeza de Valas', 
      imagem: aberturaValas,
      descricao: 'Escavação de valas para instalação de tubulações de água, esgoto, drenagem pluvial e redes elétricas.',
      tags: ['Tubulação de água', 'Rede de esgoto', 'Drenagem', 'Cabeamento']
    },
    { 
      titulo: 'Terraplanagem e Nivelamento', 
      imagem: terraplanagem,
      descricao: 'Preparação completa do terreno para construções. Correção de níveis e criação de platôs.',
      tags: ['Preparação para construção', 'Nivelamento', 'Correção de declives']
    },
    { 
      titulo: 'Limpeza de Lotes e Terrenos', 
      imagem: limpezaLotes,
      descricao: 'Remoção de vegetação, entulho e materiais do terreno. Deixamos o lote pronto para obra.',
      tags: ['Remoção de vegetação', 'Limpeza de entulho', 'Destoca']
    },
    { 
      titulo: 'Escavação Especializada', 
      imagem: escavacao,
      descricao: 'Escavações técnicas para fundações, fossas sépticas, cisternas e piscinas.',
      tags: ['Fossas sépticas', 'Cisternas', 'Fundações', 'Piscinas']
    },
    { 
      titulo: 'Serviços Rurais', 
      imagem: servicosRurais,
      descricao: 'Abertura de barraginhas, construção de açudes e curvas de nível para contenção.',
      tags: ['Barraginhas', 'Açudes', 'Curvas de nível']
    },
    { 
      titulo: 'Carregamento e Movimentação', 
      imagem: carregamento,
      descricao: 'Carga e descarga de materiais, movimentação de terra e entulho na obra.',
      tags: ['Carga em caminhões', 'Movimentação de terra', 'Remoção de entulho']
    },
  ];

  // Circunferência do círculo (2 * PI * r)
  const circumference = 2 * Math.PI * 15.5;

  // Listener para mudança de slide
  useEffect(() => {
    if (!api) return;
    
    const onSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
      setProgress(0);
    };
    
    api.on('select', onSelect);
    onSelect();
    
    return () => { 
      api.off('select', onSelect); 
    };
  }, [api]);

  // Animação do progresso
  useEffect(() => {
    if (isPaused || lightboxOpen) return;
    
    const intervalTime = 50;
    const increment = (100 / (AUTOPLAY_DELAY / intervalTime));
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        return prev + increment;
      });
    }, intervalTime);
    
    return () => clearInterval(interval);
  }, [currentSlide, isPaused, lightboxOpen]);

  const handleMouseEnter = () => {
    plugin.current.stop();
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    plugin.current.reset();
    setIsPaused(false);
  };

  const goToSlide = useCallback((index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  }, [api]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    plugin.current.stop();
    setIsPaused(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    plugin.current.reset();
    setIsPaused(false);
  };

  const lightboxPrev = () => {
    setLightboxIndex(prev => (prev === 0 ? servicos.length - 1 : prev - 1));
  };

  const lightboxNext = () => {
    setLightboxIndex(prev => (prev === servicos.length - 1 ? 0 : prev + 1));
  };

  return (
    <Layout>
      <Helmet>
        <title>DDM Locações - Aluguel de Retroescavadeira em Sete Lagoas | Terraplanagem e Escavação</title>
        <meta name="description" content="Aluguel de retroescavadeira Case 580M com operador experiente em Sete Lagoas e região. Terraplanagem, abertura de valas, limpeza de lotes. A partir de R$ 200/hora. Orçamento rápido pelo WhatsApp." />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="canonical" href="https://dig-and-haul-pro.lovable.app/" />
      </Helmet>
      
      {/* Hero Section - Carrossel de Serviços como destaque */}
      <section className="relative pt-20 md:pt-28 pb-6 md:pb-10 overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 md:w-96 h-72 md:h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-48 md:w-64 h-48 md:h-64 bg-accent/5 rounded-full blur-3xl" />
        
        {/* Badge flutuante */}
        <div className="container-ddm relative z-10 mb-4 md:mb-6">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 opacity-0 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium text-primary">Disponível para locação</span>
            </div>
          </div>
        </div>
        
        {/* Carrossel de Serviços */}
        <div className="relative z-10">
          <Carousel
            opts={{
              loop: true,
              align: 'center',
            }}
            plugins={[plugin.current]}
            setApi={setApi}
            className="w-full animate-fade-in-up stagger-1"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {servicos.map((servico, index) => (
                <CarouselItem 
                  key={servico.titulo} 
                  className="pl-2 md:pl-4 basis-[85%] md:basis-[70%] lg:basis-[55%]"
                >
                  <div 
                    className="relative aspect-[3/4] md:aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer shadow-2xl"
                    onClick={() => openLightbox(index)}
                  >
                    {/* Imagem do serviço */}
                    <img 
                      src={servico.imagem} 
                      alt={servico.titulo}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                    
                    {/* Overlay gradiente no bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
                    
                    {/* Indicador de progresso circular */}
                    <div className="absolute top-3 right-3 md:top-4 md:right-4 w-10 h-10 md:w-12 md:h-12">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                        <circle
                          cx="18"
                          cy="18"
                          r="15.5"
                          fill="rgba(0,0,0,0.5)"
                          stroke="rgba(255,255,255,0.2)"
                          strokeWidth="2.5"
                        />
                        <circle
                          cx="18"
                          cy="18"
                          r="15.5"
                          fill="none"
                          stroke="hsl(var(--primary))"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeDasharray={circumference}
                          strokeDashoffset={currentSlide === index ? circumference - (circumference * progress / 100) : circumference}
                          className="transition-[stroke-dashoffset] duration-100 ease-linear"
                        />
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm md:text-base drop-shadow-md">
                        {index + 1}
                      </span>
                    </div>
                    
                    {/* Ícone de expandir */}
                    <div className="absolute top-3 left-3 md:top-4 md:left-4 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                    </div>
                    
                    {/* Conteúdo textual */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 space-y-2 md:space-y-3">
                      <h2 className="text-lg md:text-2xl font-bold text-white drop-shadow-lg">
                        {servico.titulo}
                      </h2>
                      <p className="text-white/85 text-xs md:text-sm leading-relaxed line-clamp-2">
                        {servico.descricao}
                      </p>
                      <div className="flex flex-wrap gap-1.5 md:gap-2 pt-1">
                        {servico.tags.map(tag => (
                          <span 
                            key={tag} 
                            className="text-[10px] md:text-xs bg-white/20 backdrop-blur-sm px-2 py-0.5 md:px-2.5 md:py-1 rounded-full text-white/90 border border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navegação do carrossel */}
            <div className="hidden md:block">
              <CarouselPrevious className="left-4 lg:left-8 w-12 h-12 bg-background/80 backdrop-blur-sm border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all" />
              <CarouselNext className="right-4 lg:right-8 w-12 h-12 bg-background/80 backdrop-blur-sm border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all" />
            </div>
          </Carousel>
          
          {/* Indicador de swipe para mobile */}
          <div className="flex items-center justify-center gap-2 mt-4 md:hidden text-muted-foreground text-xs">
            <span>←</span>
            <span>Arraste para navegar</span>
            <span>→</span>
          </div>
        </div>
        
        {/* Thumbnails de navegação */}
        <div className="container-ddm mt-4 md:mt-6">
          <div className="flex justify-center gap-2 md:gap-3 flex-wrap animate-fade-in-up stagger-2">
            {servicos.map((servico, index) => (
              <button
                key={servico.titulo}
                onClick={() => goToSlide(index)}
                className={`
                  relative w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden transition-all duration-300
                  ${currentSlide === index 
                    ? 'ring-2 ring-primary ring-offset-2 ring-offset-background scale-105 shadow-lg' 
                    : 'opacity-50 hover:opacity-100 hover:scale-105'
                  }
                `}
              >
                <img 
                  src={servico.imagem} 
                  alt={servico.titulo}
                  className="w-full h-full object-cover"
                />
                {currentSlide === index && (
                  <div className="absolute inset-0 bg-primary/20" />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Headline Section */}
      <section className="py-10 md:py-16 relative">
        <div className="container-ddm">
          <div className="max-w-3xl mx-auto text-center space-y-5 md:space-y-6">
            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight opacity-0 animate-fade-in-up">
              <span className="text-foreground">Aluguel de</span>
              <br />
              <span className="text-gradient-vivid">Retroescavadeira</span>
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto opacity-0 animate-fade-in-up stagger-1">
              Serviço com operador experiente, máquina revisada e atendimento rápido em Sete Lagoas e região.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 opacity-0 animate-fade-in-up stagger-2">
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
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center opacity-0 animate-fade-in-up stagger-3">
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
            <div className="flex items-center justify-center gap-4 pt-2 opacity-0 animate-fade-in-up stagger-4">
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
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 md:py-20 bg-muted/30">
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

      {/* Final CTA Section */}
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

      {/* Lightbox Fullscreen - Apenas imagem sem texto */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-none">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Botão fechar */}
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navegação anterior */}
            <button 
              onClick={lightboxPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>

            {/* Imagem - apenas imagem sem overlay de texto */}
            <div className="relative max-w-5xl w-full mx-4 md:mx-16">
              <img 
                src={servicos[lightboxIndex].imagem} 
                alt={servicos[lightboxIndex].titulo}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
              />
            </div>

            {/* Navegação próximo */}
            <button 
              onClick={lightboxNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>

            {/* Contador */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
              {lightboxIndex + 1} / {servicos.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Index;
