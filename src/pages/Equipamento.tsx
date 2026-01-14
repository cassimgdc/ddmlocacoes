import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/layout/Layout';
import {
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Clock,
  Calendar,
  Play,
} from 'lucide-react';

import case580m from '@/assets/case-580m.png';
import MediaCard from '@/components/home/MediaCard';

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

  const features = [
    { label: 'Potência', value: '95 HP' },
    { label: 'Peso operacional', value: '7.500 kg' },
    { label: 'Prof. escavação', value: 'Até 4,5m' },
    { label: 'Cap. caçamba', value: '0,19 m³' },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Retroescavadeira Case 580M para Aluguel | DDM Locações Sete Lagoas</title>
        <meta name="description" content="Alugue a Retroescavadeira Case 580M com operador experiente. 95 HP, escavação até 4,5m. A partir de R$ 200/hora em Sete Lagoas e região. Veja especificações." />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="canonical" href="https://dig-and-haul-pro.lovable.app/equipamento" />
      </Helmet>
      
      {/* Header */}
      <section className="pt-20 pb-6 md:pt-36 md:pb-16">
        <div className="container-ddm">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            {/* Imagem - First on mobile */}
            <div className="order-1 lg:order-1 animate-fade-in">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/10 rounded-3xl blur-2xl" />
                <img
                  src={case580m}
                  alt="Retroescavadeira Case 580M"
                  className="relative w-full max-w-[200px] sm:max-w-xs md:max-w-lg mx-auto"
                />
              </div>
            </div>

            {/* Info */}
            <div className="order-2 lg:order-2 animate-fade-in stagger-delay-2">
              <Badge className="bg-ddm-success/10 text-ddm-success border-ddm-success/20 mb-3">
                <CheckCircle2 className="w-3 h-3 mr-1" />
                Disponível
              </Badge>

              <h1 className="text-2xl md:text-4xl font-black text-foreground mb-3">
                Retroescavadeira Case 580M
              </h1>

              <p className="text-muted-foreground text-sm md:text-lg mb-5">
                Máquina versátil e potente, ideal para diversos tipos de serviço. 
                Sempre revisada e com operador experiente.
              </p>

              <Button variant="cta" size="lg" className="group touch-feedback w-full sm:w-auto" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                  Pedir Orçamento
                  <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* O que ela faz */}
      <section className="py-8 md:py-16 bg-muted/30">
        <div className="container-ddm">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-lg md:text-3xl font-bold text-foreground mb-5 md:mb-8 text-center animate-fade-in-up">
              O que ela faz
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
              {capabilities.map((item, index) => (
                <div 
                  key={item} 
                  className={`flex items-center gap-3 p-3 md:p-4 card-premium animate-fade-in-up stagger-delay-${Math.min(index + 1, 6)} touch-feedback`}
                >
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-ddm-success flex-shrink-0" />
                  <span className="text-foreground text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vídeo em Ação */}
      <section className="py-8 md:py-16">
        <div className="container-ddm">
          <div className="max-w-2xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-xl md:text-3xl font-bold text-foreground mb-2 md:mb-4 flex items-center justify-center gap-2">
              <Play className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              Veja em ação
            </h2>
            <p className="text-muted-foreground text-xs md:text-base mb-5 md:mb-8">
              Confira a Case 580M em uma obra real na região.
            </p>

            <div className="max-w-[240px] sm:max-w-[280px] mx-auto animate-fade-in stagger-delay-2">
              <MediaCard
                type="video"
                src="https://www.youtube.com/shorts/cTclcnHgReA"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Especificações */}
      <section className="py-8 md:py-16">
        <div className="container-ddm">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-lg md:text-3xl font-bold text-foreground mb-5 md:mb-8 text-center animate-fade-in-up">
              Especificações
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-4">
              {features.map((item, index) => (
                <div 
                  key={item.label} 
                  className={`p-3 md:p-4 card-premium text-center animate-fade-in-up stagger-delay-${index + 1} touch-feedback`}
                >
                  <p className="text-muted-foreground text-[10px] md:text-sm mb-0.5 md:mb-1">{item.label}</p>
                  <p className="text-base md:text-xl font-bold text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Preços */}
      <section className="py-8 md:py-16 bg-muted/30">
        <div className="container-ddm">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-lg md:text-3xl font-bold text-foreground mb-5 md:mb-8 text-center animate-fade-in-up">
              Contratação
            </h2>

            <div className="grid gap-3 md:grid-cols-2 md:gap-6">
              {/* Por Hora */}
              <div className="card-premium p-4 md:p-6 animate-fade-in-up stagger-delay-1 touch-feedback">
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-sm md:text-base">Por Hora</h3>
                    <p className="text-xl md:text-2xl font-black text-primary">R$ 200</p>
                  </div>
                </div>
                <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-ddm-success flex-shrink-0" />
                    Mínimo de 2 horas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-ddm-success flex-shrink-0" />
                    Operador incluso
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-ddm-success flex-shrink-0" />
                    Combustível incluso
                  </li>
                </ul>
              </div>

              {/* Por Diária */}
              <div className="card-premium p-4 md:p-6 border-primary/30 animate-fade-in-up stagger-delay-2 touch-feedback">
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-sm md:text-base">Por Diária</h3>
                    <p className="text-xl md:text-2xl font-black text-primary">Sob Consulta</p>
                  </div>
                </div>
                <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-ddm-success flex-shrink-0" />
                    8 horas de trabalho
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-ddm-success flex-shrink-0" />
                    Melhor custo-benefício
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-ddm-success flex-shrink-0" />
                    Desconto para múltiplas diárias
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-center text-muted-foreground text-[10px] md:text-xs mt-4 md:mt-6 animate-fade-in stagger-delay-3">
              Valores podem variar conforme tipo de serviço, terreno e deslocamento.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-16 mb-20 md:mb-0">
        <div className="container-ddm text-center animate-fade-in-up">
          <h2 className="text-lg md:text-3xl font-bold text-foreground mb-2 md:mb-3">
            Interessado?
          </h2>
          <p className="text-muted-foreground text-xs md:text-base mb-5 md:mb-6 max-w-md mx-auto">
            Solicite um orçamento pelo WhatsApp. Respondemos rapidamente.
          </p>
          <Button variant="whatsapp" size="lg" className="group touch-feedback w-full sm:w-auto" asChild>
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

export default Equipamento;