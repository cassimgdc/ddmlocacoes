import { Link } from 'react-router-dom';
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
  const whatsappLink = 'https://wa.me/5531971067272?text=Olá! Gostaria de solicitar um orçamento.';

  const services = [
    {
      icon: Shovel,
      title: 'Abertura e Limpeza de Valas',
      description: 'Escavação de valas para instalação de tubulações de água, esgoto, drenagem pluvial e redes elétricas. Trabalho preciso com dimensões sob medida.',
      examples: ['Tubulação de água', 'Rede de esgoto', 'Drenagem', 'Cabeamento elétrico'],
    },
    {
      icon: Mountain,
      title: 'Terraplanagem e Nivelamento',
      description: 'Preparação completa do terreno para construções. Correção de níveis, remoção de elevações e criação de platôs para edificações.',
      examples: ['Preparação para construção', 'Nivelamento de terreno', 'Correção de declives', 'Platôs'],
    },
    {
      icon: Trees,
      title: 'Limpeza de Lotes e Terrenos',
      description: 'Remoção de vegetação, entulho e materiais do terreno. Deixamos o lote pronto para iniciar qualquer tipo de obra.',
      examples: ['Remoção de vegetação', 'Limpeza de entulho', 'Preparação de lotes', 'Destoca'],
    },
    {
      icon: Construction,
      title: 'Escavação Especializada',
      description: 'Escavações técnicas para fundações, fossas sépticas, cisternas e piscinas. Medidas precisas conforme projeto.',
      examples: ['Fossas sépticas', 'Cisternas', 'Fundações', 'Piscinas'],
    },
    {
      icon: Tractor,
      title: 'Serviços Rurais',
      description: 'Soluções para propriedades rurais como abertura de barraginhas, construção de açudes e curvas de nível para contenção de água.',
      examples: ['Barraginhas', 'Açudes', 'Curvas de nível', 'Estradas rurais'],
    },
    {
      icon: Truck,
      title: 'Carregamento e Movimentação',
      description: 'Carga e descarga de materiais de construção, movimentação de terra, entulho e outros materiais dentro da obra.',
      examples: ['Carga em caminhões', 'Movimentação de terra', 'Remoção de entulho', 'Descarga de materiais'],
    },
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="container-ddm">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              Nossos Serviços
            </h1>
            <p className="text-muted-foreground text-lg">
              Conheça os serviços que realizamos com nossa retroescavadeira Case 580M. 
              Operador experiente e equipamento revisado para sua obra.
            </p>
          </div>
        </div>
      </section>

      {/* Lista de Serviços */}
      <section className="pb-16">
        <div className="container-ddm">
          <div className="space-y-6">
            {services.map((service, index) => (
              <div key={service.title} className="card-premium p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-foreground mb-2">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {service.examples.map((example) => (
                        <span
                          key={example}
                          className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground"
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
      <section className="py-16 bg-muted/30">
        <div className="container-ddm text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Precisa de algum desses serviços?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Solicite um orçamento sem compromisso. Respondemos rapidamente pelo WhatsApp.
          </p>
          <Button variant="cta" size="xl" className="group" asChild>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Pedir Orçamento
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Servicos;
