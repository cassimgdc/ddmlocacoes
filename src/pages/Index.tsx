import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import QuickContactForm from '@/components/home/QuickContactForm';
import {
  MessageCircle,
  ArrowRight,
  Phone,
  MapPin,
  Clock,
  Shield,
  Star,
  Truck,
  Wrench,
  FileCheck,
  HeartHandshake,
  Award,
  CheckCircle2,
  Shovel,
  HardHat,
  Building2,
  Package,
  Search,
  CalendarCheck,
  ThumbsUp,
  TrendingUp,
} from 'lucide-react';
import case580m from '@/assets/case-580m.png';

const Index = () => {
  // Stats for banner below hero
  const heroStats = [
    { icon: TrendingUp, value: '+500', label: 'Locações realizadas' },
    { icon: Clock, value: '10+', label: 'Anos de experiência' },
    { icon: MapPin, value: '8+', label: 'Cidades atendidas' },
  ];

  // Categories for rental
  const categories = [
    { 
      icon: Shovel, 
      title: 'Equipamentos', 
      description: 'Retroescavadeiras, escavadeiras e máquinas pesadas',
      href: '/catalogo'
    },
    { 
      icon: HardHat, 
      title: 'Ferramentas', 
      description: 'Ferramentas profissionais para construção',
      href: '/catalogo'
    },
    { 
      icon: Building2, 
      title: 'Estruturas', 
      description: 'Andaimes, formas e estruturas temporárias',
      href: '/catalogo'
    },
    { 
      icon: Package, 
      title: 'Outros', 
      description: 'Containers, geradores e mais',
      href: '/catalogo'
    },
  ];

  // How it works steps
  const steps = [
    { 
      icon: Search, 
      step: 1, 
      title: 'Escolha o Item', 
      description: 'Navegue pelo catálogo e encontre o equipamento ideal'
    },
    { 
      icon: CalendarCheck, 
      step: 2, 
      title: 'Informe o Período', 
      description: 'Defina por quanto tempo você precisa do equipamento'
    },
    { 
      icon: ThumbsUp, 
      step: 3, 
      title: 'Confirmação', 
      description: 'Receba o orçamento e confirme a locação'
    },
    { 
      icon: Truck, 
      step: 4, 
      title: 'Entrega', 
      description: 'Levamos até você ou retire em nosso local'
    },
  ];

  // Featured product
  const featuredProduct = {
    image: case580m,
    title: 'Retroescavadeira Case 580M',
    description: 'Máquina versátil ideal para terraplanagem, abertura de valas, limpeza de lotes e serviços rurais. Operador experiente e combustível inclusos.',
    price: 'R$ 200/hora',
    href: '/catalogo/retroescavadeira-case-580m',
  };

  // Differentials
  const differentials = [
    { icon: Wrench, title: 'Manutenção em Dia', description: 'Equipamentos sempre revisados e prontos para uso' },
    { icon: Phone, title: 'Suporte 24h', description: 'Atendimento rápido para qualquer necessidade' },
    { icon: FileCheck, title: 'Contrato Flexível', description: 'Locação por hora, dia, semana ou mês' },
    { icon: Truck, title: 'Entrega e Retirada', description: 'Levamos e buscamos o equipamento no local' },
    { icon: Award, title: 'Qualidade Garantida', description: 'Equipamentos de marcas líderes do mercado' },
    { icon: HeartHandshake, title: 'Atendimento Personalizado', description: 'Solução sob medida para seu projeto' },
  ];

  // Testimonials
  const testimonials = [
    {
      name: 'Carlos Silva',
      location: 'Sete Lagoas, MG',
      text: 'Excelente serviço! A retroescavadeira chegou no horário e o operador foi muito profissional. Recomendo!',
      rating: 5,
    },
    {
      name: 'Maria Santos',
      location: 'Prudente de Morais, MG',
      text: 'Contratei para limpar meu lote e ficou perfeito. Preço justo e atendimento nota 10.',
      rating: 5,
    },
    {
      name: 'João Oliveira',
      location: 'Capim Branco, MG',
      text: 'Já é a terceira vez que alugo com a DDM. Sempre confiável e pontual.',
      rating: 5,
    },
  ];

  const scrollToForm = () => {
    document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout>
      <Helmet>
        <title>DDM Locações - Aluguel de Equipamentos em Sete Lagoas | Retroescavadeira e Máquinas</title>
        <meta name="description" content="Aluguel de retroescavadeira, escavadeiras e equipamentos para construção em Sete Lagoas e região. Entrega rápida, preços competitivos. Solicite seu orçamento!" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="canonical" href="https://ddmlocacoes.com.br/" />
      </Helmet>
      
      {/* ===== HERO - Editorial Compact ===== */}
      <section className="pt-20 md:pt-24 pb-12 md:pb-16 bg-card border-b border-border">
        <div className="container-ddm">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              {/* Availability badge */}
              <div className="badge-available inline-flex mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-success" />
                Disponível para locação
              </div>

              {/* Headline - single color */}
              <h1 className="text-3xl sm:text-4xl md:text-display-md font-semibold text-foreground mb-4">
                Aluguel de Equipamentos para sua Obra
              </h1>

              {/* Description */}
              <p className="text-muted-foreground text-base md:text-lg max-w-lg mx-auto lg:mx-0 mb-6">
                Retroescavadeiras, escavadeiras e máquinas pesadas com entrega rápida e suporte completo em <span className="font-medium text-foreground">Sete Lagoas e região</span>.
              </p>

              {/* Features */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
                {[
                  { icon: Truck, label: 'Entrega rápida' },
                  { icon: Shield, label: 'Suporte incluso' },
                  { icon: Wrench, label: 'Manutenção em dia' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted border border-border text-sm">
                    <item.icon className="w-4 h-4 text-copper" />
                    <span className="text-muted-foreground">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Button variant="default" size="lg" onClick={scrollToForm}>
                  <MessageCircle className="w-4 h-4" />
                  Pedir Orçamento
                </Button>
                <Button variant="whatsapp" size="lg" asChild>
                  <a href="https://wa.me/5531971067272" target="_blank" rel="noopener noreferrer">
                    <Phone className="w-4 h-4" />
                    Falar no WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Right - Image in card */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative bg-muted rounded-2xl border border-border p-6 md:p-8">
                <img 
                  src={case580m} 
                  alt="Retroescavadeira Case 580M para aluguel em Sete Lagoas" 
                  className="w-full max-w-[280px] sm:max-w-sm md:max-w-md h-auto"
                  loading="eager"
                  width={600}
                  height={450}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-6 border-b border-border bg-background">
        <div className="container-ddm">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {heroStats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3 text-center">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-copper" />
                </div>
                <div className="text-left">
                  <p className="text-xl font-semibold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CATEGORIES ===== */}
      <section className="section-padding">
        <div className="container-ddm">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
              O que você procura?
            </h2>
            <p className="text-muted-foreground">
              Navegue pelas categorias e encontre o equipamento ideal
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Link
                key={category.title}
                to={category.href}
                className="group p-5 rounded-xl bg-card border border-border hover:border-copper/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center group-hover:bg-copper group-hover:text-white transition-colors">
                    <category.icon className="w-5 h-5 text-copper group-hover:text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-foreground mb-1">{category.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">{category.description}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-copper transition-colors flex-shrink-0 mt-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="section-padding bg-muted/50 border-y border-border">
        <div className="container-ddm">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
              Como funciona?
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.title} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-semibold text-lg flex items-center justify-center mx-auto mb-3">
                  {step.step}
                </div>
                <h3 className="font-medium text-foreground mb-1 text-sm md:text-base">{step.title}</h3>
                <p className="text-muted-foreground text-xs md:text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED EQUIPMENT ===== */}
      <section className="section-padding">
        <div className="container-ddm">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
              Nosso Equipamento
            </h2>
            <p className="text-muted-foreground">
              Em breve, novos equipamentos serão adicionados ao catálogo
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Link 
              to={featuredProduct.href}
              className="group block rounded-xl bg-card border border-border overflow-hidden hover:border-copper/30 transition-all"
            >
              {/* Featured badge */}
              <div className="relative">
                <div className="absolute top-4 left-4 z-10">
                  <span className="badge-available">
                    <span className="w-1.5 h-1.5 rounded-full bg-success" />
                    Disponível
                  </span>
                </div>
                
                {/* Image */}
                <div className="aspect-[16/10] bg-muted flex items-center justify-center p-8">
                  <img 
                    src={featuredProduct.image} 
                    alt={featuredProduct.title}
                    className="w-full max-w-md h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-copper transition-colors">
                  {featuredProduct.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {featuredProduct.description}
                </p>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground">A partir de</p>
                    <p className="text-xl font-semibold text-copper">{featuredProduct.price}</p>
                  </div>
                  <Button variant="default" size="default">
                    Ver Detalhes
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== DIFFERENTIALS ===== */}
      <section className="section-padding bg-muted/50 border-y border-border">
        <div className="container-ddm">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
              Por que escolher a DDM?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {differentials.map((item) => (
              <div 
                key={item.title}
                className="p-5 rounded-xl bg-card border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-copper" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section-padding">
        <div className="container-ddm">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
              O que nossos clientes dizem
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="p-5 rounded-xl bg-card border border-border"
              >
                {/* Rating */}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < testimonial.rating ? 'fill-copper text-copper' : 'text-muted'}`}
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground text-sm mb-4">"{testimonial.text}"</p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-copper font-medium text-xs">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">{testimonial.name}</p>
                    <p className="text-muted-foreground text-xs">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA + FORM ===== */}
      <section id="form-section" className="section-padding bg-primary text-primary-foreground">
        <div className="container-ddm">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left - Text */}
              <div className="text-center lg:text-left">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                  Pronto para começar?
                </h2>
                <p className="text-primary-foreground/80 mb-6">
                  Preencha o formulário e receba seu orçamento sem compromisso. 
                  Respondemos rapidamente pelo WhatsApp!
                </p>
                
                <div className="space-y-2">
                  {[
                    'Orçamento sem compromisso',
                    'Resposta em até 2 horas',
                    'Atendimento personalizado',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 justify-center lg:justify-start">
                      <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                      <span className="text-primary-foreground/90 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Form */}
              <div className="bg-card text-card-foreground rounded-xl p-6 border border-border">
                <QuickContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
