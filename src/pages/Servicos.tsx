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
} from '@/components/ui/carousel';
import { MessageCircle, ArrowRight } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

// Imagens dos serviços
import aberturaValas from '@/assets/servicos/abertura-valas.png';
import terraplanagem from '@/assets/servicos/terraplanagem.png';
import limpezaLotes from '@/assets/servicos/limpeza-lotes.png';
import escavacao from '@/assets/servicos/escavacao.png';
import servicosRurais from '@/assets/servicos/servicos-rurais.png';
import carregamento from '@/assets/servicos/carregamento.png';

const Servicos = () => {
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  const servicos = [
    { titulo: 'Abertura e Limpeza de Valas', imagem: aberturaValas },
    { titulo: 'Terraplanagem e Nivelamento', imagem: terraplanagem },
    { titulo: 'Limpeza de Lotes e Terrenos', imagem: limpezaLotes },
    { titulo: 'Escavação Especializada', imagem: escavacao },
    { titulo: 'Serviços Rurais', imagem: servicosRurais },
    { titulo: 'Carregamento e Movimentação', imagem: carregamento },
  ];

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
            className="w-full animate-fade-in-up"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                    
                    {/* Título do serviço */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                      <h2 className="text-lg md:text-2xl font-bold text-white drop-shadow-lg">
                        {servico.titulo}
                      </h2>
                    </div>
                    
                    {/* Badge de número */}
                    <div className="absolute top-3 right-3 md:top-4 md:right-4 w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-sm md:text-base">
                        {index + 1}
                      </span>
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
