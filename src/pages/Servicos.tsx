import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import {
  MessageCircle,
  ArrowRight,
  Shovel,
  Mountain,
  Trees,
  Construction,
  Tractor,
  Truck,
} from 'lucide-react';

const Servicos = () => {
  const services = [
    {
      icon: Shovel,
      title: 'Abertura e Limpeza de Valas',
      description: 'Escavação de valas para instalação de tubulações de água, esgoto, drenagem pluvial e redes elétricas.',
      examples: ['Tubulação de água', 'Rede de esgoto', 'Drenagem', 'Cabeamento'],
    },
    {
      icon: Mountain,
      title: 'Terraplanagem e Nivelamento',
      description: 'Preparação completa do terreno para construções. Correção de níveis e criação de platôs.',
      examples: ['Preparação para construção', 'Nivelamento', 'Correção de declives'],
    },
    {
      icon: Trees,
      title: 'Limpeza de Lotes e Terrenos',
      description: 'Remoção de vegetação, entulho e materiais do terreno. Deixamos o lote pronto para obra.',
      examples: ['Remoção de vegetação', 'Limpeza de entulho', 'Destoca'],
    },
    {
      icon: Construction,
      title: 'Escavação Especializada',
      description: 'Escavações técnicas para fundações, fossas sépticas, cisternas e piscinas.',
      examples: ['Fossas sépticas', 'Cisternas', 'Fundações', 'Piscinas'],
    },
    {
      icon: Tractor,
      title: 'Serviços Rurais',
      description: 'Abertura de barraginhas, construção de açudes e curvas de nível para contenção.',
      examples: ['Barraginhas', 'Açudes', 'Curvas de nível'],
    },
    {
      icon: Truck,
      title: 'Carregamento e Movimentação',
      description: 'Carga e descarga de materiais, movimentação de terra e entulho na obra.',
      examples: ['Carga em caminhões', 'Movimentação de terra', 'Remoção de entulho'],
    },
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
      <section className="pt-20 pb-6 md:pt-36 md:pb-16">
        <div className="container-ddm">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-2xl md:text-4xl font-black text-foreground mb-3">
              Nossos Serviços
            </h1>
            <p className="text-muted-foreground text-sm md:text-lg">
              Conheça os serviços que realizamos com nossa retroescavadeira Case 580M.
            </p>
          </div>
        </div>
      </section>

      {/* Lista de Serviços */}
      <section className="pb-8 md:pb-16">
        <div className="container-ddm">
          <div className="space-y-3 md:space-y-6">
            {services.map((service, index) => (
              <div 
                key={service.title} 
                className={`card-premium p-4 md:p-8 animate-fade-in-up stagger-delay-${Math.min(index + 1, 6)} touch-feedback`}
              >
                <div className="flex gap-3 md:gap-6">
                  {/* Ícone */}
                  <div className="w-11 h-11 md:w-14 md:h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-5 h-5 md:w-7 md:h-7 text-primary" />
                  </div>
                  
                  {/* Conteúdo */}
                  <div className="flex-1 min-w-0">
                    <h2 className="text-base md:text-xl font-bold text-foreground mb-1 md:mb-2">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground text-xs md:text-base mb-3 md:mb-4 line-clamp-2 md:line-clamp-none">
                      {service.description}
                    </p>
                    
                    {/* Tags - horizontal scroll on mobile */}
                    <div className="flex gap-1.5 md:gap-2 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-hide">
                      {service.examples.map((example) => (
                        <span
                          key={example}
                          className="px-2 md:px-3 py-1 bg-muted rounded-full text-[10px] md:text-xs text-muted-foreground whitespace-nowrap flex-shrink-0"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
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