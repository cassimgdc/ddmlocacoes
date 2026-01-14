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
        <link rel="canonical" href="https://dig-and-haul-pro.lovable.app/" />
      </Helmet>
      {/* Hero */}
      <section className="pt-24 pb-12 md:pt-36 md:pb-24">
        <div className="container-ddm">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Texto */}
            <div className="animate-fade-in">
              <Badge className="bg-primary/10 text-primary border-primary/20 mb-3 md:mb-4">
                <MapPin className="w-3 h-3 mr-1" />
                Sete Lagoas e Região
              </Badge>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-3 md:mb-4 leading-tight">
                Aluguel de Retroescavadeira
              </h1>

              <p className="text-muted-foreground text-base md:text-lg mb-5 md:mb-6 max-w-lg">
                Serviço com operador experiente, máquina revisada e atendimento rápido. 
                Solicite um orçamento pelo WhatsApp.
              </p>

              {/* Destaques */}
              <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8">
                {['Operador experiente', 'Máquina revisada', 'Orçamento rápido'].map((item) => (
                  <div key={item} className="flex items-center gap-1.5 text-xs md:text-sm text-foreground">
                    <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-ddm-success" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="cta" size="lg" className="group md:text-base" asChild>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                    Pedir Orçamento
                    <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="md:text-base" asChild>
                  <Link to="/servicos">
                    Ver Serviços
                  </Link>
                </Button>
              </div>
            </div>

            {/* Imagem */}
            <div className="relative animate-fade-in stagger-delay-2 mt-4 lg:mt-0">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/10 rounded-3xl blur-2xl" />
              <img
                src={case580m}
                alt="Retroescavadeira Case 580M"
                className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Serviços resumidos */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container-ddm">
          <div className="text-center mb-8 md:mb-10 animate-fade-in-up">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2">
              Principais Serviços
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Atendemos diversos tipos de obra
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
            {services.map((service, index) => (
              <Link
                key={service.title}
                to={service.href}
                className={`group card-premium p-4 md:p-6 text-center hover:border-primary/30 transition-all animate-fade-in-up stagger-delay-${index + 1}`}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <service.icon className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground text-xs md:text-sm">{service.title}</h3>
              </Link>
            ))}
          </div>

          <div className="text-center animate-fade-in stagger-delay-5">
            <Button variant="outline" size="default" asChild>
              <Link to="/servicos">
                Ver todos os serviços
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Preços resumidos */}
      <section className="py-12 md:py-16">
        <div className="container-ddm">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8 md:mb-10 animate-fade-in-up">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2">
                Formas de Contratação
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="card-premium p-5 md:p-6 animate-fade-in-up stagger-delay-1">
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <div className="w-9 h-9 md:w-10 md:h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-sm md:text-base">Por Hora</h3>
                    <p className="text-xl md:text-2xl font-black text-primary">R$ 200</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-xs md:text-sm">
                  Mínimo de 2 horas. Operador e combustível inclusos.
                </p>
              </div>

              <div className="card-premium p-5 md:p-6 border-primary/30 animate-fade-in-up stagger-delay-2">
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <div className="w-9 h-9 md:w-10 md:h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Calendar className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-sm md:text-base">Por Diária</h3>
                    <p className="text-xl md:text-2xl font-black text-primary">Sob Consulta</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-xs md:text-sm">
                  8 horas de trabalho. Melhor custo-benefício para obras maiores.
                </p>
              </div>
            </div>

            <p className="text-center text-muted-foreground text-xs mt-5 md:mt-6 animate-fade-in stagger-delay-3">
              Valores podem variar conforme tipo de serviço, terreno e deslocamento.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-12 md:py-16 bg-muted/30 mb-16 md:mb-0">
        <div className="container-ddm text-center animate-fade-in-up">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2 md:mb-3">
            Pronto para começar?
          </h2>
          <p className="text-muted-foreground text-sm md:text-base mb-5 md:mb-6 max-w-md mx-auto">
            Solicite um orçamento rápido pelo WhatsApp e receba uma resposta em minutos.
          </p>
          <Button variant="whatsapp" size="lg" className="group" asChild>
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
