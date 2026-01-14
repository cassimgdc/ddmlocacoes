import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
  Calendar,
  ChevronRight,
} from 'lucide-react';

import case580m from '@/assets/case-580m.png';

const Index = () => {
  const whatsappLink = 'https://wa.me/5531971067272?text=Olá! Gostaria de solicitar um orçamento.';

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
      
      {/* Hero */}
      <section className="pt-20 pb-8 md:pt-36 md:pb-24">
        <div className="container-ddm">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            {/* Texto */}
            <div className="animate-fade-in order-2 lg:order-1">
              <Badge className="bg-primary/10 text-primary border-primary/20 mb-3">
                <MapPin className="w-3 h-3 mr-1" />
                Sete Lagoas e Região
              </Badge>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-3 leading-tight">
                Aluguel de Retroescavadeira
              </h1>

              <p className="text-muted-foreground text-sm md:text-lg mb-4 md:mb-6 max-w-lg">
                Serviço com operador experiente, máquina revisada e atendimento rápido.
              </p>

              {/* Destaques - Horizontal scroll on mobile */}
              <div className="flex gap-3 mb-5 md:mb-8 overflow-x-auto pb-2 -mx-5 px-5 md:mx-0 md:px-0 md:flex-wrap scrollbar-hide">
                {['Operador experiente', 'Máquina revisada', 'Orçamento rápido'].map((item) => (
                  <div 
                    key={item} 
                    className="flex items-center gap-1.5 text-xs md:text-sm text-foreground whitespace-nowrap bg-muted/50 px-3 py-1.5 rounded-full border border-border/50"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-ddm-success flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="cta" size="lg" className="group text-sm md:text-base touch-feedback" asChild>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                    Pedir Orçamento
                    <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="text-sm md:text-base touch-feedback" asChild>
                  <Link to="/servicos">
                    Ver Serviços
                  </Link>
                </Button>
              </div>
            </div>

            {/* Imagem */}
            <div className="relative animate-fade-in stagger-delay-2 order-1 lg:order-2">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/10 rounded-3xl blur-2xl" />
              <img
                src={case580m}
                alt="Retroescavadeira Case 580M"
                className="relative w-full max-w-[200px] sm:max-w-sm md:max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Serviços - Horizontal scroll on mobile */}
      <section className="py-8 md:py-16 bg-muted/30">
        <div className="container-ddm">
          <div className="flex items-center justify-between mb-5 md:mb-10">
            <div className="animate-fade-in-up">
              <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-foreground mb-1">
                Principais Serviços
              </h2>
              <p className="text-muted-foreground text-xs md:text-base">
                Atendemos diversos tipos de obra
              </p>
            </div>
            <Link 
              to="/servicos" 
              className="hidden md:flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              Ver todos
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile: Horizontal scroll / Desktop: Grid */}
          <div className="md:hidden -mx-5 px-5">
            <div className="flex gap-3 overflow-x-auto pb-4 scroll-snap-x scrollbar-hide">
              {services.map((service, index) => (
                <Link
                  key={service.title}
                  to={service.href}
                  className="group card-premium p-4 min-w-[140px] flex-shrink-0 text-center hover:border-primary/30 transition-all scroll-snap-item touch-feedback"
                >
                  <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <service.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-semibold text-foreground text-xs">{service.title}</h3>
                </Link>
              ))}
              {/* Ver mais card */}
              <Link
                to="/servicos"
                className="group card-premium p-4 min-w-[120px] flex-shrink-0 text-center hover:border-primary/30 transition-all scroll-snap-item touch-feedback flex flex-col items-center justify-center"
              >
                <div className="w-11 h-11 bg-muted rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:bg-primary transition-all">
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </div>
                <span className="font-semibold text-muted-foreground text-xs group-hover:text-foreground">Ver mais</span>
              </Link>
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-4 gap-4 mb-8">
            {services.map((service, index) => (
              <Link
                key={service.title}
                to={service.href}
                className={`group card-premium p-6 text-center hover:border-primary/30 transition-all animate-fade-in-up stagger-delay-${index + 1}`}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground text-sm">{service.title}</h3>
              </Link>
            ))}
          </div>

          <div className="text-center animate-fade-in stagger-delay-5 hidden md:block">
            <Button variant="outline" size="default" asChild>
              <Link to="/servicos">
                Ver todos os serviços
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Preços - Cards empilhados no mobile */}
      <section className="py-8 md:py-16">
        <div className="container-ddm">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-6 md:mb-10 animate-fade-in-up">
              <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-foreground mb-1 md:mb-2">
                Formas de Contratação
              </h2>
            </div>

            <div className="grid gap-3 md:grid-cols-2 md:gap-6">
              {/* Por Hora */}
              <div className="card-premium p-4 md:p-6 animate-fade-in-up stagger-delay-1 touch-feedback">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 md:w-10 md:h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 md:w-5 md:h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="font-bold text-foreground text-sm md:text-base">Por Hora</h3>
                      <p className="text-xl md:text-2xl font-black text-primary whitespace-nowrap">R$ 200</p>
                    </div>
                    <p className="text-muted-foreground text-xs md:text-sm mt-0.5">
                      Mínimo 2h. Operador e combustível inclusos.
                    </p>
                  </div>
                </div>
              </div>

              {/* Por Diária */}
              <div className="card-premium p-4 md:p-6 border-primary/30 animate-fade-in-up stagger-delay-2 touch-feedback">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 md:w-10 md:h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 md:w-5 md:h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="font-bold text-foreground text-sm md:text-base">Por Diária</h3>
                      <p className="text-xl md:text-2xl font-black text-primary whitespace-nowrap">Sob Consulta</p>
                    </div>
                    <p className="text-muted-foreground text-xs md:text-sm mt-0.5">
                      8h de trabalho. Melhor custo-benefício.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-muted-foreground text-xs mt-4 md:mt-6 animate-fade-in stagger-delay-3">
              Valores podem variar conforme serviço, terreno e deslocamento.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-10 md:py-16 bg-muted/30 mb-20 md:mb-0">
        <div className="container-ddm text-center animate-fade-in-up">
          <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-foreground mb-2">
            Pronto para começar?
          </h2>
          <p className="text-muted-foreground text-xs md:text-base mb-5 max-w-md mx-auto">
            Solicite um orçamento rápido pelo WhatsApp e receba resposta em minutos.
          </p>
          <Button variant="whatsapp" size="lg" className="group touch-feedback" asChild>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
              Chamar no WhatsApp
              <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;