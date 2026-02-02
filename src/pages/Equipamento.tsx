import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import {
  MessageCircle,
  ArrowRight,
  Play,
  Shield,
  User,
  Zap,
  Gauge,
  Weight,
  Ruler,
  Box,
  Camera,
} from 'lucide-react';

import case580m from '@/assets/case-580m.png';
import MediaCard from '@/components/home/MediaCard';

// Import service images for gallery
import escavacaoImg from '@/assets/servicos/escavacao.png';
import terraplenagembImg from '@/assets/servicos/terraplanagem.png';
import valasImg from '@/assets/servicos/abertura-valas.png';
import carregamentoImg from '@/assets/servicos/carregamento.png';

const Equipamento = () => {
  const specs = [
    { icon: Gauge, label: 'Potência', value: '95 HP' },
    { icon: Weight, label: 'Peso', value: '7.500 kg' },
    { icon: Ruler, label: 'Escavação', value: 'Até 4,5m' },
    { icon: Box, label: 'Caçamba', value: '0,19 m³' },
  ];

  const galleryImages = [
    { src: escavacaoImg, alt: 'Escavação de fundação' },
    { src: terraplenagembImg, alt: 'Terraplanagem de terreno' },
    { src: valasImg, alt: 'Abertura de valas' },
    { src: carregamentoImg, alt: 'Carregamento de material' },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Retroescavadeira Case 580M | DDM Locações Sete Lagoas</title>
        <meta name="description" content="Alugue a Retroescavadeira Case 580M com operador. 95 HP, escavação até 4,5m. Sete Lagoas e região." />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="canonical" href="https://ddmlocacoes.lovable.app/equipamento" />
      </Helmet>
      
      {/* Hero - Compacto com CTA */}
      <section className="pt-16 pb-10 md:pt-20 md:pb-14 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
        
        <div className="container-ddm relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Machine Image */}
            <div className="flex-shrink-0 opacity-0 animate-fade-in-up">
              <div className="relative animate-float">
                <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-primary/5 to-transparent blur-2xl scale-110" />
                <img 
                  src={case580m} 
                  alt="Retroescavadeira Case 580M" 
                  className="relative w-48 md:w-64 lg:w-72 h-auto"
                  loading="eager"
                  width={300}
                  height={225}
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center lg:text-left space-y-4">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-ddm-success/10 border border-ddm-success/20 opacity-0 animate-fade-in-up">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ddm-success opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-ddm-success"></span>
                </span>
                <span className="text-xs font-semibold text-ddm-success">Disponível</span>
              </div>

              {/* Title */}
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-display font-black opacity-0 animate-fade-in-up stagger-1">
                <span className="text-foreground">Retroescavadeira </span>
                <span className="text-gradient-vivid">Case 580M</span>
              </h1>

              {/* Trust indicators inline */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 opacity-0 animate-fade-in-up stagger-2">
                {[
                  { icon: Shield, text: 'Revisada' },
                  { icon: User, text: 'Com operador' },
                  { icon: Zap, text: 'Pronta entrega' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <item.icon className="w-3.5 h-3.5 text-primary" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-2 opacity-0 animate-fade-in-up stagger-3">
                <Button variant="cta" size="lg" asChild className="group">
                  <Link to="/contato">
                    <MessageCircle className="w-4 h-4" />
                    Pedir Orçamento
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Specs - Compact grid */}
            <div className="grid grid-cols-2 gap-3 lg:gap-4 opacity-0 animate-fade-in-up stagger-3">
              {specs.map((spec) => (
                <div 
                  key={spec.label}
                  className="p-3 md:p-4 rounded-xl bg-card/80 border border-border/50 text-center"
                >
                  <spec.icon className="w-5 h-5 text-primary mx-auto mb-1" />
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wide">{spec.label}</p>
                  <p className="text-sm md:text-base font-display font-bold text-foreground">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Section - Principal */}
      <section className="py-12 md:py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-secondary/20" />
        
        <div className="container-ddm relative z-10">
          <div className="text-center mb-6 md:mb-8 opacity-0 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-3">
              <Play className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-semibold text-primary">Veja em ação</span>
            </div>
            <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
              Case 580M <span className="text-gradient-vivid">trabalhando</span>
            </h2>
          </div>

          {/* Video */}
          <div className="max-w-xs mx-auto px-8 md:px-16 opacity-0 animate-fade-in-up stagger-1">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl opacity-50 blur-sm" />
              <div className="relative rounded-xl overflow-hidden">
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
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container-ddm">
          <div className="text-center mb-6 md:mb-8 opacity-0 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-3">
              <Camera className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-semibold text-primary">Galeria</span>
            </div>
            <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
              Fotos dos <span className="text-gradient-vivid">serviços</span>
            </h2>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto">
            {galleryImages.map((image, index) => (
              <div 
                key={image.alt}
                className="group relative rounded-xl overflow-hidden opacity-0 animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${(index + 1) * 80}ms` }}
              >
                <div className="aspect-square">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p className="absolute bottom-2 left-2 right-2 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.alt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Compacto */}
      <section className="py-14 md:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        
        <div className="container-ddm relative z-10">
          <div className="max-w-lg mx-auto text-center space-y-5 opacity-0 animate-fade-in-up">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              Precisa de um <span className="text-gradient-vivid">orçamento?</span>
            </h2>
            
            <p className="text-muted-foreground text-sm md:text-base">
              Fale conosco pelo WhatsApp e receba uma proposta rápida
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="cta" size="lg" asChild className="group">
                <Link to="/contato">
                  <MessageCircle className="w-4 h-4" />
                  Pedir Orçamento
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" asChild>
                <a href="https://wa.me/5531971067272?text=Olá! Vi o site e gostaria de saber mais sobre a retroescavadeira." target="_blank" rel="noopener noreferrer">
                  Chamar no WhatsApp
                </a>
              </Button>
            </div>

            <p className="text-xs text-muted-foreground pt-2">
              Atendimento de Seg a Sáb, 7h às 18h
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Equipamento;
