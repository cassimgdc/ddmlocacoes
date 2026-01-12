import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/layout/Layout';
import ServiceCard from '@/components/home/ServiceCard';
import DifferentialItem from '@/components/home/DifferentialItem';
import EquipmentCard from '@/components/home/EquipmentCard';
import TestimonialCard from '@/components/home/TestimonialCard';
import FAQSection from '@/components/home/FAQSection';
import MediaCard from '@/components/home/MediaCard';
import {
  MessageCircle,
  ArrowRight,
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
  DollarSign,
  Calendar,
} from 'lucide-react';

import heroBg from '@/assets/hero-bg.jpg';
import case580m from '@/assets/case-580m.png';

const Index = () => {
  const whatsappLink = 'https://wa.me/5531971067272?text=Olá! Gostaria de solicitar um orçamento para locação de máquinas.';

  const services = [
    {
      icon: Shovel,
      title: 'Abertura e Limpeza de Valas',
      description: 'Valas para tubulação, drenagem, esgoto e instalações hidráulicas com precisão.',
    },
    {
      icon: Mountain,
      title: 'Terraplanagem e Nivelamento',
      description: 'Preparação do terreno para construção, nivelamento e correção de declives.',
    },
    {
      icon: Trees,
      title: 'Limpeza de Lotes e Terrenos',
      description: 'Remoção de entulho, vegetação e preparação de áreas para obras.',
    },
    {
      icon: Construction,
      title: 'Escavação para Fossa/Cisterna',
      description: 'Escavação precisa para fossas sépticas, cisternas e fundações.',
    },
    {
      icon: Tractor,
      title: 'Serviços Rurais',
      description: 'Barraginhas, açudes, curvas de nível e preparação de áreas rurais.',
    },
    {
      icon: Truck,
      title: 'Carregamento e Movimentação',
      description: 'Carga e descarga de materiais, movimentação de terra e entulho.',
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
    {
      icon: CheckCircle2,
      title: 'Pontualidade',
      description: 'Compromisso com horários e prazos acordados.',
    },
    {
      icon: DollarSign,
      title: 'Transparência',
      description: 'Orçamentos claros, sem surpresas no valor final.',
    },
  ];

  const equipments = [
    {
      id: 'case-580m',
      name: 'Retroescavadeira Case 580M',
      image: case580m,
      available: true,
      tags: ['Terraplanagem', 'Valas', 'Rural'],
      services: ['Abertura de valas', 'Terraplanagem', 'Escavação', 'Limpeza de lotes', 'Serviços rurais'],
    },
    {
      id: 'caminhao',
      name: 'Caminhão Basculante',
      image: '',
      available: false,
      tags: ['Transporte', 'Entulho'],
      services: ['Transporte de material', 'Remoção de entulho'],
      comingSoon: true,
    },
    {
      id: 'mini-escavadeira',
      name: 'Mini Escavadeira',
      image: '',
      available: false,
      tags: ['Valas', 'Espaços Reduzidos'],
      services: ['Valas em áreas pequenas', 'Fundações'],
      comingSoon: true,
    },
  ];

  const testimonials = [
    {
      name: 'Carlos Oliveira',
      location: 'Sete Lagoas - MG',
      text: 'Serviço excelente! O operador foi muito profissional e cuidadoso com meu terreno. Recomendo!',
      rating: 5,
    },
    {
      name: 'Maria Santos',
      location: 'Prudente de Morais - MG',
      text: 'Contratei para limpeza do lote e fiquei muito satisfeita. Preço justo e trabalho bem feito.',
      rating: 5,
    },
    {
      name: 'José Silva',
      location: 'Capim Branco - MG',
      text: 'Precisava de uma vala urgente e eles atenderam no mesmo dia. Muito ágeis!',
      rating: 5,
    },
    {
      name: 'Ana Paula Costa',
      location: 'Funilândia - MG',
      text: 'Fiz a terraplanagem do meu sítio com eles. Trabalho impecável e dentro do prazo.',
      rating: 5,
    },
  ];

  const faqItems = [
    {
      question: 'Vocês atendem só Sete Lagoas?',
      answer: 'Não! Atendemos Sete Lagoas e toda a região, incluindo Prudente de Morais, Capim Branco, Funilândia, Jequitibá, Paraopeba, Caetanópolis, Baldim e outras cidades próximas. O valor do deslocamento pode variar conforme a distância.',
    },
    {
      question: 'Como funciona o agendamento?',
      answer: 'É simples! Entre em contato pelo WhatsApp informando o tipo de serviço, localização e data desejada. Verificamos a disponibilidade e confirmamos o agendamento. Quanto antes você entrar em contato, maiores as chances de conseguir a data ideal.',
    },
    {
      question: 'Precisa de vistoria antes?',
      answer: 'Depende do serviço. Para trabalhos simples como abertura de valas pequenas, geralmente não é necessário. Para serviços maiores como terraplanagem, podemos fazer uma visita prévia sem custo para avaliar o terreno e dar um orçamento mais preciso.',
    },
    {
      question: 'O que pode mudar o valor do serviço?',
      answer: 'Alguns fatores podem influenciar: tipo de solo (pedra, argila, etc.), condições de acesso ao terreno, distância do deslocamento, tempo estimado do serviço e necessidade de trabalhos extras não previstos inicialmente.',
    },
    {
      question: 'Vocês fazem limpeza e movimentação de material?',
      answer: 'Sim! A retroescavadeira pode fazer carregamento em caminhões, movimentação de terra, entulho e outros materiais. Se precisar de transporte, podemos indicar parceiros de confiança.',
    },
    {
      question: 'Qual a forma mais rápida de pedir orçamento?',
      answer: 'WhatsApp! Basta enviar uma mensagem com fotos ou vídeo do local, descrever o serviço desejado e informar sua localização. Respondemos rapidamente com o orçamento.',
    },
    {
      question: 'Existe mínimo de horas?',
      answer: 'Sim, geralmente trabalhamos com mínimo de 2 horas para serviços por hora. Para diárias, o mínimo é de 8 horas trabalhadas.',
    },
    {
      question: 'Quais formas de pagamento?',
      answer: 'Aceitamos PIX, dinheiro e transferência bancária. O pagamento é feito ao final do serviço, após conferência do trabalho realizado.',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 via-secondary/85 to-secondary/70" />
        </div>

        {/* Content */}
        <div className="relative container-ddm py-32 text-center">
          <Badge className="bg-primary/20 text-primary border-primary/30 mb-6 animate-fade-in">
            <CheckCircle2 className="w-3 h-3 mr-1" />
            Atendemos Sete Lagoas e Região
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            Locação de Máquinas<br />
            <span className="text-primary">com Operador</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 animate-fade-in-up stagger-1">
            Atendimento rápido, operador experiente e máquinas revisadas. 
            Terraplanagem, valas, limpeza de lotes e muito mais.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up stagger-2">
            <Button variant="hero" size="xl" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Pedir Orçamento
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/equipamentos">
                Ver Equipamentos
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>

          {/* Quick Info */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12 animate-fade-in-up stagger-3">
            <div className="flex items-center gap-2 text-white/70">
              <Phone className="w-4 h-4 text-primary" />
              <span>(31) 97106-7272</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Sete Lagoas - MG</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <Clock className="w-4 h-4 text-primary" />
              <span>Seg - Sáb: 7h às 18h</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="section-padding bg-background">
        <div className="container-ddm">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Nossos Serviços</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Soluções completas para sua obra
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Da preparação do terreno à finalização do projeto, oferecemos os serviços que você precisa com qualidade e agilidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} delay={index * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="section-padding bg-muted">
        <div className="container-ddm">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">Por que nos escolher</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Diferenciais que fazem a diferença
              </h2>
              <p className="text-muted-foreground mb-8">
                Não somos apenas mais uma empresa de locação. Nosso compromisso é entregar resultado, com profissionalismo e respeito ao seu tempo e investimento.
              </p>
              <Button variant="cta" size="lg" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Fale Conosco
                </a>
              </Button>
            </div>

            <div className="grid gap-6">
              {differentials.map((item, index) => (
                <DifferentialItem key={item.title} {...item} delay={index * 100} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section id="equipamentos" className="section-padding bg-background">
        <div className="container-ddm">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Equipamentos</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Máquinas em destaque
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Equipamentos de qualidade, revisados e prontos para seu serviço.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipments.map((equipment, index) => (
              <EquipmentCard key={equipment.id} {...equipment} delay={index * 100} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild>
              <Link to="/equipamentos">
                Ver todos os equipamentos
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-secondary">
        <div className="container-ddm">
          <div className="text-center mb-12">
            <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">Contratação</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
              Como funciona
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Por Hora */}
            <div className="bg-card rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Serviço por Hora</h3>
              <div className="text-4xl font-bold text-primary mb-2">R$ 200<span className="text-lg text-muted-foreground">/hora</span></div>
              <p className="text-muted-foreground text-sm mb-4">Ideal para serviços rápidos e pontuais</p>
              <ul className="text-sm text-left space-y-2 text-muted-foreground">
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

            {/* Por Diária */}
            <div className="bg-card rounded-2xl p-8 text-center shadow-lg border-2 border-primary">
              <Badge className="absolute -mt-12 bg-primary text-primary-foreground">Mais Popular</Badge>
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Serviço por Diária</h3>
              <div className="text-4xl font-bold text-primary mb-2">Sob Consulta</div>
              <p className="text-muted-foreground text-sm mb-4">Para obras maiores e projetos completos</p>
              <ul className="text-sm text-left space-y-2 text-muted-foreground">
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

          <p className="text-center text-secondary-foreground/60 text-sm mt-8 max-w-2xl mx-auto">
            * Os valores podem variar conforme o tipo de serviço, condições do terreno, distância de deslocamento e tempo estimado. 
            Solicite um orçamento personalizado.
          </p>
        </div>
      </section>

      {/* Media Section */}
      <section className="section-padding bg-background">
        <div className="container-ddm">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Portfólio</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Vídeos e fotos de obras reais
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Confira nosso trabalho em ação. Qualidade que você pode ver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <MediaCard
              type="video"
              src="https://www.youtube.com/shorts/cTclcnHgReA"
              alt="Retroescavadeira Case 580M em ação"
              delay={0}
            />
            <MediaCard
              type="image"
              src={case580m}
              alt="Retroescavadeira Case 580M"
              delay={100}
            />
            <MediaCard
              type="image"
              src={heroBg}
              alt="Obra de terraplanagem"
              delay={200}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-muted">
        <div className="container-ddm">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Depoimentos</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              O que nossos clientes dizem
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.name} {...testimonial} delay={index * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-padding bg-background">
        <div className="container-ddm">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Dúvidas Frequentes</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Perguntas e Respostas
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tire suas dúvidas sobre nossos serviços, formas de contratação e área de atendimento.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <FAQSection items={faqItems} />
          </div>
        </div>
      </section>

      {/* Area Section */}
      <section className="section-padding bg-muted">
        <div className="container-ddm">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">Área de Atendimento</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Sete Lagoas e toda a região
              </h2>
              <p className="text-muted-foreground mb-6">
                Atendemos Sete Lagoas e cidades vizinhas. O valor do deslocamento pode variar conforme a distância.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Sete Lagoas',
                  'Prudente de Morais',
                  'Capim Branco',
                  'Funilândia',
                  'Jequitibá',
                  'Paraopeba',
                  'Caetanópolis',
                  'Baldim',
                  'Pedro Leopoldo',
                  'Matozinhos',
                  'Vespasiano',
                  'E mais...',
                ].map((city) => (
                  <div key={city} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-3 h-3 text-primary" />
                    {city}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                  <p className="text-muted-foreground text-sm">Mapa da região</p>
                </div>
              </div>
              <p className="text-center text-muted-foreground text-sm">
                Entre em contato para confirmar atendimento na sua cidade.
              </p>
              <Button variant="cta" size="lg" className="w-full mt-4" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Consultar Disponibilidade
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
