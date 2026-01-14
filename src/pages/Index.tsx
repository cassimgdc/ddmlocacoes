import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/layout/Layout';
import ServiceCard from '@/components/home/ServiceCard';
import DifferentialItem from '@/components/home/DifferentialItem';
import EquipmentCard from '@/components/home/EquipmentCard';
import FAQSection from '@/components/home/FAQSection';
import MediaCard from '@/components/home/MediaCard';
import QuickQuoteForm from '@/components/home/QuickQuoteForm';
import QuoteTipCard from '@/components/home/QuoteTipCard';
import PricingSection from '@/components/home/PricingSection';
import {
  MessageCircle,
  ArrowRight,
  ArrowDown,
  Shovel,
  Mountain,
  Trees,
  Construction,
  Tractor,
  Truck,
  UserCheck,
  Clock,
  Wrench,
  Shield,
  CheckCircle2,
  MapPin,
  Phone,
  Camera,
} from 'lucide-react';

import heroBg from '@/assets/hero-bg.jpg';
import case580m from '@/assets/case-580m.png';

const Index = () => {
  const whatsappLink = 'https://wa.me/5531971067272?text=Olá! Gostaria de solicitar um orçamento para locação de retroescavadeira.';

  const services = [
    {
      icon: Shovel,
      title: 'Abertura e Limpeza de Valas',
      description: 'Tubulação, drenagem, esgoto e instalações hidráulicas com precisão e rapidez.',
    },
    {
      icon: Mountain,
      title: 'Terraplanagem e Nivelamento',
      description: 'Preparação de terreno para construção civil, correção de declives e platôs.',
    },
    {
      icon: Trees,
      title: 'Limpeza de Lotes e Terrenos',
      description: 'Remoção de entulho, vegetação densa e preparação completa do lote.',
    },
    {
      icon: Construction,
      title: 'Escavação Especializada',
      description: 'Fossas sépticas, cisternas e fundações com medidas precisas.',
    },
    {
      icon: Tractor,
      title: 'Serviços Rurais',
      description: 'Barraginhas, açudes, curvas de nível e infraestrutura para sítios.',
    },
    {
      icon: Truck,
      title: 'Carregamento e Movimentação',
      description: 'Carga/descarga de materiais, movimentação de terra e entulho.',
    },
  ];

  const differentials = [
    {
      icon: UserCheck,
      title: 'Operador Experiente',
      description: 'Profissional qualificado com anos de experiência em diversos tipos de obra.',
    },
    {
      icon: Clock,
      title: 'Atendimento Rápido',
      description: 'Agilidade no orçamento e disponibilidade para iniciar o serviço.',
    },
    {
      icon: Wrench,
      title: 'Máquina Revisada',
      description: 'Equipamentos sempre em dia com manutenção preventiva.',
    },
    {
      icon: Shield,
      title: 'Segurança e Cuidado',
      description: 'Zelo com seu terreno e conformidade com normas de segurança.',
    },
  ];

  const quoteTips = [
    {
      icon: MapPin,
      title: 'Local do serviço',
      description: 'Informe cidade, bairro ou endereço aproximado para calcular o deslocamento.',
    },
    {
      icon: Wrench,
      title: 'Tipo de serviço',
      description: 'Descreva o que precisa: vala, terraplanagem, limpeza de lote, etc.',
    },
    {
      icon: Camera,
      title: 'Fotos ou vídeo',
      description: 'Imagens do terreno ajudam a dar um orçamento mais preciso e rápido.',
    },
  ];

  const faqItems = [
    {
      question: 'Atendem só Sete Lagoas?',
      answer: 'Não! Atendemos Sete Lagoas e toda a região, incluindo Prudente de Morais, Capim Branco, Funilândia, Jequitibá, Paraopeba, Caetanópolis, Baldim e outras cidades próximas. O deslocamento pode influenciar no valor.',
    },
    {
      question: 'Como funciona o agendamento?',
      answer: 'Simples: envie uma mensagem pelo WhatsApp com o tipo de serviço, localização e data desejada. Verificamos disponibilidade e confirmamos rapidamente.',
    },
    {
      question: 'Precisa de vistoria antes?',
      answer: 'Depende do serviço. Para trabalhos simples, geralmente não. Para terraplanagens maiores, podemos fazer uma visita prévia sem custo.',
    },
    {
      question: 'O que pode mudar o valor?',
      answer: 'Tipo de solo (pedra, argila), condições de acesso, distância de deslocamento, tempo estimado e serviços extras não previstos.',
    },
    {
      question: 'Fazem limpeza e movimentação de material?',
      answer: 'Sim! Carregamento em caminhões, movimentação de terra e entulho. Se precisar de transporte, indicamos parceiros.',
    },
    {
      question: 'Qual a forma mais rápida de pedir orçamento?',
      answer: 'WhatsApp! Envie fotos ou vídeo do local, descreva o serviço e informe sua localização.',
    },
    {
      question: 'Como enviar fotos e vídeos?',
      answer: 'Após iniciar a conversa no WhatsApp, é só anexar as imagens ou vídeos do terreno. Quanto mais detalhes, melhor o orçamento.',
    },
    {
      question: 'Qual o prazo de resposta no WhatsApp?',
      answer: 'Geralmente respondemos em minutos durante o horário comercial (Seg-Sáb, 7h às 18h).',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/70" />
        </div>

        {/* Content */}
        <div className="relative container-ddm py-32 text-center">
          <Badge className="bg-primary/20 text-primary border-primary/30 mb-6 animate-fade-in px-4 py-2">
            <MapPin className="w-3.5 h-3.5 mr-2" />
            Sete Lagoas e Região
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 leading-tight animate-fade-in-up">
            Retroescavadeira em<br />
            <span className="text-gradient">Sete Lagoas e Região</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up stagger-1">
            Serviço com operador experiente, atendimento rápido e máquina sempre revisada. 
            Sua obra começa com segurança.
          </p>

          {/* Bullets */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in-up stagger-2">
            {['Operador experiente', 'Máquina revisada', 'Atendimento rápido'].map((item) => (
              <div key={item} className="flex items-center gap-2 text-foreground/80 text-sm">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                {item}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up stagger-3">
            <Button variant="cta" size="xl" className="group" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Orçamento no WhatsApp
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#servicos">
                Ver Serviços
                <ArrowDown className="w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* Quick Info */}
          <div className="flex flex-wrap justify-center gap-6 mt-14 animate-fade-in-up stagger-4">
            <a href="tel:+5531971067272" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="w-4 h-4 text-primary" />
              <span>(31) 97106-7272</span>
            </a>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Sete Lagoas - MG</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4 text-primary" />
              <span>Seg - Sáb: 7h às 18h</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="section-padding">
        <div className="container-ddm">
          <div className="text-center mb-14">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">Nossos Serviços</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Soluções completas para sua obra
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Da preparação do terreno à finalização do projeto, oferecemos os serviços que você precisa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} delay={index * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section id="equipamentos" className="section-padding bg-secondary/30">
        <div className="container-ddm">
          <div className="text-center mb-14">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">Equipamento</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Retroescavadeira Case 580M
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Equipamento versátil e potente, pronto para atender sua obra.
            </p>
          </div>

          <EquipmentCard
            id="case-580m"
            name="Retroescavadeira Case 580M"
            image={case580m}
            available={true}
            featured={true}
            tags={['Terraplanagem', 'Valas', 'Rural', 'Escavação']}
            services={[
              'Abertura de valas e escavações',
              'Terraplanagem e nivelamento',
              'Carregamento de materiais',
              'Limpeza de lotes e terrenos',
              'Serviços rurais e barraginhas',
            ]}
          />
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* Video Section */}
      <section className="section-padding">
        <div className="container-ddm">
          <div className="text-center mb-14">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">Obras Reais</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Veja a máquina em ação
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Confira nosso trabalho em obras reais da região.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <MediaCard
              type="video"
              src="https://www.youtube.com/shorts/cTclcnHgReA"
              alt="Retroescavadeira Case 580M em ação"
              title="Obra em andamento"
              delay={0}
            />
            <MediaCard
              type="image"
              src={case580m}
              alt="Retroescavadeira Case 580M"
              title="Case 580M"
              delay={100}
            />
            <MediaCard
              type="image"
              src={heroBg}
              alt="Obra de terraplanagem"
              title="Terraplanagem"
              delay={200}
            />
          </div>
        </div>
      </section>

      {/* Quick Quote Section */}
      <section id="orcamento" className="section-padding bg-secondary/30">
        <div className="container-ddm">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">Orçamento Rápido</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                O que agiliza seu orçamento
              </h2>
              <p className="text-muted-foreground mb-8">
                Quanto mais informações, mais rápido e preciso será o orçamento. Veja o que você pode nos enviar:
              </p>

              <div className="space-y-4">
                {quoteTips.map((tip, index) => (
                  <QuoteTipCard key={tip.title} {...tip} delay={index * 100} />
                ))}
              </div>

              {/* Differentials */}
              <div className="mt-10 pt-10 border-t border-border">
                <h3 className="font-bold text-foreground mb-6">Por que nos escolher</h3>
                <div className="grid gap-4">
                  {differentials.map((item, index) => (
                    <DifferentialItem key={item.title} {...item} delay={index * 100} />
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:sticky lg:top-28">
              <QuickQuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-padding">
        <div className="container-ddm">
          <div className="text-center mb-14">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">Dúvidas Frequentes</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Perguntas e Respostas
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tire suas dúvidas sobre nossos serviços e área de atendimento.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <FAQSection items={faqItems} />
          </div>
        </div>
      </section>

      {/* Area Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-ddm">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">Área de Atendimento</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Sete Lagoas e toda a região
              </h2>
              <p className="text-muted-foreground mb-8">
                Atendemos Sete Lagoas e cidades vizinhas. O valor do deslocamento pode variar conforme a distância.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  'Sete Lagoas',
                  'Prudente de Morais',
                  'Capim Branco',
                  'Funilândia',
                  'Jequitibá',
                  'Paraopeba',
                  'Caetanópolis',
                  'Baldim',
                  'E mais...',
                ].map((city) => (
                  <div key={city} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-3 h-3 text-primary flex-shrink-0" />
                    {city}
                  </div>
                ))}
              </div>
            </div>

            <div className="card-premium p-8">
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center mb-6">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                  <p className="text-muted-foreground text-sm">Região de atendimento</p>
                </div>
              </div>
              <p className="text-center text-muted-foreground text-sm mb-6">
                Entre em contato para confirmar atendimento na sua cidade.
              </p>
              <Button variant="cta" size="lg" className="w-full group" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Consultar Disponibilidade
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
