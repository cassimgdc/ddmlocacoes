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
    { label: 'Profundidade de escavação', value: 'Até 4,5m' },
    { label: 'Capacidade da caçamba', value: '0,19 m³' },
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="container-ddm">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Imagem */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/10 rounded-3xl blur-2xl" />
                <img
                  src={case580m}
                  alt="Retroescavadeira Case 580M"
                  className="relative w-full max-w-lg mx-auto"
                />
              </div>
            </div>

            {/* Info */}
            <div className="order-1 lg:order-2">
              <Badge className="bg-ddm-success/10 text-ddm-success border-ddm-success/20 mb-4">
                <CheckCircle2 className="w-3 h-3 mr-1" />
                Disponível
              </Badge>

              <h1 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                Retroescavadeira Case 580M
              </h1>

              <p className="text-muted-foreground text-lg mb-6">
                Máquina versátil e potente, ideal para diversos tipos de serviço em obras 
                residenciais, comerciais e rurais. Sempre revisada e com operador experiente.
              </p>

              <Button variant="cta" size="xl" className="group" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Pedir Orçamento
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* O que ela faz */}
      <section className="py-16 bg-muted/30">
        <div className="container-ddm">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              O que ela faz
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {capabilities.map((item) => (
                <div key={item} className="flex items-center gap-3 p-4 card-premium">
                  <CheckCircle2 className="w-5 h-5 text-ddm-success flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vídeo em Ação */}
      <section className="py-16">
        <div className="container-ddm">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Play className="w-4 h-4" />
              <span className="text-sm font-medium">Veja em ação</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              A máquina trabalhando
            </h2>
            <p className="text-muted-foreground mb-8">
              Confira a Case 580M em uma obra real na região.
            </p>

            <div className="max-w-sm mx-auto">
              <MediaCard
                type="video"
                src="https://www.youtube.com/shorts/cTclcnHgReA"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Especificações */}
      <section className="py-16">
        <div className="container-ddm">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Especificações
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((item) => (
                <div key={item.label} className="p-4 card-premium text-center">
                  <p className="text-muted-foreground text-sm mb-1">{item.label}</p>
                  <p className="text-xl font-bold text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Preços */}
      <section className="py-16 bg-muted/30">
        <div className="container-ddm">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Contratação
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-premium p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Por Hora</h3>
                    <p className="text-2xl font-black text-primary">R$ 200</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-ddm-success" />
                    Mínimo de 2 horas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-ddm-success" />
                    Operador incluso
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-ddm-success" />
                    Combustível incluso
                  </li>
                </ul>
              </div>

              <div className="card-premium p-6 border-primary/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Por Diária</h3>
                    <p className="text-2xl font-black text-primary">Sob Consulta</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-ddm-success" />
                    8 horas de trabalho
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-ddm-success" />
                    Melhor custo-benefício
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-ddm-success" />
                    Desconto para múltiplas diárias
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-center text-muted-foreground text-xs mt-6">
              Valores podem variar conforme tipo de serviço, terreno e deslocamento.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container-ddm text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Interessado?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Solicite um orçamento pelo WhatsApp. Respondemos rapidamente.
          </p>
          <Button variant="whatsapp" size="xl" className="group" asChild>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Chamar no WhatsApp
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Equipamento;
