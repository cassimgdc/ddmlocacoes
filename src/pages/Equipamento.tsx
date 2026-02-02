import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import {
  MessageCircle,
  ArrowRight,
  Shield,
  User,
  Zap,
  Gauge,
  Weight,
  Ruler,
  Box,
} from 'lucide-react';

import case580m from '@/assets/case-580m.png';
import MediaCard from '@/components/home/MediaCard';

// Gallery images
import escavacaoImg from '@/assets/servicos/escavacao.png';
import terraplenagembImg from '@/assets/servicos/terraplanagem.png';
import valasImg from '@/assets/servicos/abertura-valas.png';
import carregamentoImg from '@/assets/servicos/carregamento.png';

const Equipamento = () => {
  const specs = [
    { icon: Gauge, label: 'Potência', value: '95 HP' },
    { icon: Weight, label: 'Peso', value: '7.500 kg' },
    { icon: Ruler, label: 'Escavação', value: '4,5m' },
    { icon: Box, label: 'Caçamba', value: '0,19 m³' },
  ];

  const galleryImages = [
    { src: escavacaoImg, alt: 'Escavação' },
    { src: terraplenagembImg, alt: 'Terraplanagem' },
    { src: valasImg, alt: 'Abertura de valas' },
    { src: carregamentoImg, alt: 'Carregamento' },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Retroescavadeira Case 580M | DDM Locações</title>
        <meta name="description" content="Alugue a Retroescavadeira Case 580M com operador. 95 HP, escavação até 4,5m. Sete Lagoas e região." />
        <link rel="canonical" href="https://ddmlocacoes.lovable.app/equipamento" />
      </Helmet>
      
      {/* Hero Compacto */}
      <section className="pt-14 pb-8 md:pt-20 md:pb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />
        
        <div className="container-ddm relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            {/* Machine */}
            <div className="flex-shrink-0 opacity-0 animate-fade-in-up">
              <div className="relative animate-float">
                <div className="absolute inset-0 bg-gradient-radial from-primary/15 to-transparent blur-2xl scale-110" />
                <img 
                  src={case580m} 
                  alt="Case 580M" 
                  className="relative w-40 md:w-52 h-auto"
                  loading="eager"
                />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ddm-success/10 border border-ddm-success/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute h-full w-full rounded-full bg-ddm-success opacity-75"></span>
                  <span className="relative rounded-full h-2 w-2 bg-ddm-success"></span>
                </span>
                <span className="text-xs font-semibold text-ddm-success">Disponível</span>
              </div>

              <h1 className="text-2xl md:text-3xl font-display font-black">
                <span className="text-foreground">Case </span>
                <span className="text-gradient-vivid">580M</span>
              </h1>

              <div className="flex flex-wrap justify-center md:justify-start gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Shield className="w-3 h-3 text-primary" /> Revisada</span>
                <span className="flex items-center gap-1"><User className="w-3 h-3 text-primary" /> Com operador</span>
                <span className="flex items-center gap-1"><Zap className="w-3 h-3 text-primary" /> Pronta entrega</span>
              </div>

              <Button variant="cta" size="default" asChild className="group mt-2">
                <Link to="/contato">
                  <MessageCircle className="w-4 h-4" />
                  Pedir Orçamento
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Specs Mini */}
            <div className="grid grid-cols-4 md:grid-cols-2 gap-2 opacity-0 animate-fade-in-up stagger-2">
              {specs.map((spec) => (
                <div key={spec.label} className="p-2.5 md:p-3 rounded-lg bg-card/60 border border-border/40 text-center min-w-[70px]">
                  <spec.icon className="w-4 h-4 text-primary mx-auto mb-0.5" />
                  <p className="text-[9px] text-muted-foreground uppercase">{spec.label}</p>
                  <p className="text-xs md:text-sm font-bold text-foreground">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Media Section - Video + Gallery juntos */}
      <section className="py-10 md:py-16 bg-secondary/30">
        <div className="container-ddm">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-10 items-start max-w-5xl mx-auto">
            
            {/* Video - Principal */}
            <div className="order-1 lg:order-1">
              <div className="text-center lg:text-left mb-4">
                <h2 className="text-lg md:text-xl font-display font-bold text-foreground">
                  Veja a máquina <span className="text-gradient-vivid">trabalhando</span>
                </h2>
              </div>
              
              <div className="max-w-[280px] sm:max-w-xs mx-auto lg:mx-0 px-6 md:px-12 opacity-0 animate-fade-in-up">
                <div className="relative">
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl opacity-40 blur-md animate-pulse" />
                  <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-primary/20">
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

            {/* Gallery - Lado */}
            <div className="order-2 lg:order-2 lg:w-[280px]">
              <div className="text-center lg:text-left mb-4">
                <h3 className="text-base md:text-lg font-display font-semibold text-foreground">
                  Fotos dos serviços
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-2 opacity-0 animate-fade-in-up stagger-1">
                {galleryImages.map((image, index) => (
                  <div 
                    key={image.alt}
                    className="group relative rounded-lg overflow-hidden cursor-pointer"
                    style={{ animationDelay: `${(index + 1) * 50}ms` }}
                  >
                    <div className="aspect-square">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                      <span className="text-white text-[10px] font-medium">{image.alt}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-12 md:py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-background" />
        
        <div className="container-ddm relative z-10">
          <div className="max-w-md mx-auto text-center space-y-4 opacity-0 animate-fade-in-up">
            <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
              Precisa de <span className="text-gradient-vivid">orçamento?</span>
            </h2>
            
            <p className="text-sm text-muted-foreground">
              Fale conosco e receba uma proposta rápida
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Button variant="cta" size="lg" asChild className="group">
                <Link to="/contato">
                  <MessageCircle className="w-4 h-4" />
                  Pedir Orçamento
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" asChild>
                <a href="https://wa.me/5531971067272" target="_blank" rel="noopener noreferrer">
                  WhatsApp Direto
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Equipamento;
