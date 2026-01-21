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
} from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>DDM Locações - Aluguel de Retroescavadeira em Sete Lagoas | Terraplanagem e Escavação</title>
        <meta name="description" content="Aluguel de retroescavadeira Case 580M com operador experiente em Sete Lagoas e região. Terraplanagem, abertura de valas, limpeza de lotes. A partir de R$ 200/hora. Orçamento rápido pelo WhatsApp." />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="canonical" href="https://dig-and-haul-pro.lovable.app/" />
      </Helmet>
      
      {/* Headline Section - Agora Primeiro */}
      <section className="pt-20 md:pt-28 pb-10 md:pb-16 relative">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 md:w-96 h-72 md:h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-48 md:w-64 h-48 md:h-64 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container-ddm relative z-10">
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

      {/* Carrossel Section - Agora Segundo */}
      <section className="py-8 md:py-12 relative overflow-hidden">
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
          <ServicesCarousel 
            mobileSize="basis-[85%]"
            tabletSize="md:basis-[70%]"
            desktopSize="lg:basis-[55%]"
            className="animate-fade-in-up stagger-1"
          />
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
                  <p className="text-sm text-muted-foreground mt-1">Os valores variam conforme tipo de serviço, deslocamento, tempo estimado e condições do terreno</p>
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
    </Layout>
  );
};

export default Index;
