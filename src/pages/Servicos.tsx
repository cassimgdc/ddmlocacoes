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
import { MessageCircle, ArrowRight } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';
import { useRef, useState, useEffect } from 'react';

// Imagens dos serviços
import aberturaValas from '@/assets/servicos/abertura-valas.png';
import terraplanagem from '@/assets/servicos/terraplanagem.png';
import limpezaLotes from '@/assets/servicos/limpeza-lotes.png';
import escavacao from '@/assets/servicos/escavacao.png';
import servicosRurais from '@/assets/servicos/servicos-rurais.png';
import carregamento from '@/assets/servicos/carregamento.png';

const AUTOPLAY_DELAY = 5000;

const Servicos = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

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
    if (isPaused) return;
    
    const intervalTime = 50;
    const increment = (100 / (AUTOPLAY_DELAY / intervalTime));
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        return prev + increment;
      });
    }, intervalTime);
    
    return () => clearInterval(interval);
  }, [currentSlide, isPaused]);

  const handleMouseEnter = () => {
    plugin.current.stop();
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    plugin.current.reset();
    setIsPaused(false);
  };

  // Circunferência do círculo (2 * PI * r)
  const circumference = 2 * Math.PI * 15.5;

  return (
    <Layout>
      <Helmet>
        <title>Serviços de Retroescavadeira em Sete Lagoas | DDM Locações</title>
        <meta name="description" content="Terraplanagem, abertura de valas, limpeza de lotes, escavação de fossas e cisternas, serviços rurais. Retroescavadeira Case 580M com operador em Sete Lagoas." />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="canonical" href="https://dig-and-haul-pro.lovable.app/servicos" />
      </Helmet>
      
      {/* Header */}
      <section className="pt-20 pb-4 md:pt-36 md:pb-8">
        <div className="container-ddm">
          <div className="max-w-2xl animate-fade-in text-center mx-auto">
            <h1 className="text-2xl md:text-4xl font-black text-foreground mb-2">
              Nossos Serviços
            </h1>
            <p className="text-muted-foreground text-sm md:text-lg">
              Deslize para conhecer todos os serviços que realizamos
            </p>
          </div>
        </div>
      </section>

      {/* Carrossel de Serviços */}
      <section className="pb-8 md:pb-16">
        <div className="container-ddm">
          <Carousel
            opts={{
              loop: true,
              align: 'center',
            }}
            plugins={[plugin.current]}
            setApi={setApi}
            className="w-full animate-fade-in-up"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {servicos.map((servico, index) => (
                <CarouselItem 
                  key={servico.titulo} 
                  className={`pl-2 md:pl-4 basis-[85%] md:basis-[70%] lg:basis-[60%] stagger-delay-${Math.min(index + 1, 6)}`}
                >
                  <div className="relative aspect-[3/4] md:aspect-[4/3] rounded-2xl overflow-hidden group cursor-grab active:cursor-grabbing shadow-xl">
                    {/* Imagem do serviço */}
                    <img 
                      src={servico.imagem} 
                      alt={servico.titulo}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    
                    {/* Overlay gradiente no bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
                    
                    {/* Indicador de progresso circular */}
                    <div className="absolute top-3 right-3 md:top-4 md:right-4 w-10 h-10 md:w-12 md:h-12">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                        {/* Círculo de fundo */}
                        <circle
                          cx="18"
                          cy="18"
                          r="15.5"
                          fill="rgba(0,0,0,0.5)"
                          stroke="rgba(255,255,255,0.2)"
                          strokeWidth="2.5"
                        />
                        {/* Círculo de progresso animado - só aparece no slide ativo */}
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
                      {/* Número central */}
                      <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm md:text-base drop-shadow-md">
                        {index + 1}
                      </span>
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
            
            {/* Navegação */}
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
      </section>

      {/* CTA */}
      <section className="py-10 md:py-16 bg-muted/30 mb-20 md:mb-0">
        <div className="container-ddm text-center animate-fade-in-up">
          <h2 className="text-lg md:text-3xl font-bold text-foreground mb-2 md:mb-3">
            Precisa de algum desses serviços?
          </h2>
          <p className="text-muted-foreground text-xs md:text-base mb-5 md:mb-6 max-w-md mx-auto">
            Solicite um orçamento sem compromisso. Respondemos rapidamente.
          </p>
          <Button variant="cta" size="lg" className="group touch-feedback w-full sm:w-auto" asChild>
            <Link to="/contato">
              <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
              Pedir Orçamento
              <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Servicos;
