import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import CategoryCard from '@/components/home/CategoryCard';
import StepCard from '@/components/home/StepCard';
import ProductCard from '@/components/home/ProductCard';
import TestimonialCard from '@/components/home/TestimonialCard';
import ClientLogos from '@/components/home/ClientLogos';
import StatsBanner from '@/components/home/StatsBanner';
import QuickContactForm from '@/components/home/QuickContactForm';
import {
  MessageCircle,
  ArrowRight,
  Phone,
  MapPin,
  Clock,
  Shield,
  Star,
  Zap,
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
    { icon: Zap, value: '24h', label: 'Atendimento rápido' },
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
      title: 'Entrega/Retirada', 
      description: 'Levamos até você ou retire em nosso local'
    },
  ];

  // Featured product - only Case 580M for now
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
        <link rel="canonical" href="https://ddmlocacoes.lovable.app/" />
      </Helmet>
      
      {/* ===== SECTION 1: HERO ===== */}
      <section className="relative min-h-[90vh] md:min-h-[85vh] flex items-center pt-28 md:pt-32 pb-8 overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,hsl(28_100%_50%/0.15),transparent)]" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
        
        <div className="container-ddm relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-ddm-success/10 border border-ddm-success/20 opacity-0 animate-fade-in-up">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ddm-success opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-ddm-success"></span>
                </span>
                <span className="text-sm font-semibold text-ddm-success">Disponível para locação</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black leading-[1.1] opacity-0 animate-fade-in-up stagger-1">
                <span className="text-foreground">Aluguel de</span>
                <br />
                <span className="text-gradient-vivid">Equipamentos</span>
                <br />
                <span className="text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl">para sua Obra</span>
              </h1>

              {/* Description */}
              <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 opacity-0 animate-fade-in-up stagger-2">
                Retroescavadeiras, escavadeiras e máquinas pesadas com <span className="text-foreground font-medium">entrega rápida</span> e 
                <span className="text-foreground font-medium"> suporte completo</span> em <span className="text-foreground font-semibold">Sete Lagoas e região</span>.
              </p>

              {/* Hero features overlay */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 opacity-0 animate-fade-in-up stagger-2">
                {[
                  { icon: Truck, label: 'Entrega rápida' },
                  { icon: Shield, label: 'Suporte incluso' },
                  { icon: Wrench, label: 'Manutenção em dia' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 border border-border/50">
                    <item.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-muted-foreground">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start opacity-0 animate-fade-in-up stagger-3">
                <Button variant="cta" size="lg" onClick={scrollToForm} className="group w-full sm:w-auto">
                  <MessageCircle className="w-5 h-5" />
                  Pedir Orçamento
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="whatsapp" size="lg" asChild className="group w-full sm:w-auto">
                  <a href="https://wa.me/5531999999999" target="_blank" rel="noopener noreferrer">
                    <Phone className="w-4 h-4" />
                    Falar no WhatsApp
                  </a>
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center justify-center lg:justify-start gap-4 pt-2 opacity-0 animate-fade-in-up stagger-4">
                <div className="flex -space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  Clientes satisfeitos na região
                </span>
              </div>
            </div>

            {/* Right - Image */}
            <div className="order-1 lg:order-2 flex justify-center opacity-0 animate-fade-in-up">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-radial from-primary/25 via-primary/10 to-transparent blur-3xl scale-125" />
                
                {/* Machine image with floating animation */}
                <div className="relative animate-float">
                  <img 
                    src={case580m} 
                    alt="Retroescavadeira Case 580M para aluguel em Sete Lagoas" 
                    className="w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg h-auto hero-image-glow"
                    loading="eager"
                    decoding="sync"
                    width={600}
                    height={450}
                    fetchPriority="high"
                  />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 lg:left-auto lg:-right-4 lg:translate-x-0 lg:bottom-1/4">
                  <div className="px-4 py-2.5 rounded-xl bg-card border border-border shadow-lg flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">A partir de</p>
                      <p className="text-lg font-bold text-foreground">R$ 200<span className="text-sm font-normal text-muted-foreground">/hora</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner below Hero */}
      <StatsBanner stats={heroStats} />

      {/* ===== SECTION 2: CATEGORIES ===== */}
      <section className="py-16 md:py-24">
        <div className="container-ddm">
          <div className="text-center mb-10 md:mb-14 opacity-0 animate-fade-in-up">
            <span className="badge-industrial mb-4">
              <Package className="w-4 h-4" />
              Categorias
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground">
              O que você <span className="text-gradient-vivid">procura?</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Navegue pelas categorias e encontre o equipamento ideal para seu projeto
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {categories.map((category, index) => (
              <CategoryCard
                key={category.title}
                icon={category.icon}
                title={category.title}
                description={category.description}
                href={category.href}
                delay={(index + 1) * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: HOW IT WORKS ===== */}
      <section className="py-16 md:py-24 bg-secondary/30 section-glow">
        <div className="container-ddm">
          <div className="text-center mb-10 md:mb-14 opacity-0 animate-fade-in-up">
            <span className="badge-industrial mb-4">
              <CheckCircle2 className="w-4 h-4" />
              Simples e Rápido
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground">
              Como <span className="text-gradient-vivid">funciona?</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {steps.map((step, index) => (
              <StepCard
                key={step.title}
                icon={step.icon}
                step={step.step}
                title={step.title}
                description={step.description}
                delay={(index + 1) * 100}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: FEATURED EQUIPMENT ===== */}
      <section className="py-16 md:py-24">
        <div className="container-ddm">
          <div className="text-center mb-10 md:mb-14 opacity-0 animate-fade-in-up">
            <span className="badge-industrial mb-4">
              <Star className="w-4 h-4" />
              Equipamento
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground">
              Nosso <span className="text-gradient-vivid">Equipamento</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Em breve, novos equipamentos serão adicionados ao catálogo
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Main featured equipment card */}
            <Link 
              to={featuredProduct.href}
              className="group block card-premium overflow-hidden border-primary/30 opacity-0 animate-fade-in-up stagger-1"
            >
              {/* Featured badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-bold shadow-cta">
                  Disponível
                </span>
              </div>
              
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-secondary/50 flex items-center justify-center p-8">
                <img 
                  src={featuredProduct.image} 
                  alt={featuredProduct.title}
                  className="w-full max-w-md h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {featuredProduct.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  {featuredProduct.description}
                </p>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">A partir de</p>
                    <p className="text-2xl font-bold text-gradient-vivid">{featuredProduct.price}</p>
                  </div>
                  <Button variant="cta" size="lg" className="group/btn w-full sm:w-auto">
                    Ver Detalhes
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: DIFFERENTIALS ===== */}
      <section className="py-16 md:py-24 bg-muted/30 section-glow">
        <div className="container-ddm">
          <div className="text-center mb-10 md:mb-14 opacity-0 animate-fade-in-up">
            <span className="badge-industrial mb-4">
              <Shield className="w-4 h-4" />
              Diferenciais
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground">
              Por que escolher a <span className="text-gradient-vivid">DDM?</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {differentials.map((item, index) => (
              <div 
                key={item.title}
                className="group p-5 md:p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: TESTIMONIALS ===== */}
      <section className="py-16 md:py-24">
        <div className="container-ddm">
          <div className="text-center mb-10 md:mb-14 opacity-0 animate-fade-in-up">
            <span className="badge-industrial mb-4">
              <Star className="w-4 h-4" />
              Depoimentos
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground">
              O que nossos clientes <span className="text-gradient-vivid">dizem</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6 mb-12">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.name}
                name={testimonial.name}
                location={testimonial.location}
                text={testimonial.text}
                rating={testimonial.rating}
                delay={(index + 1) * 100}
              />
            ))}
          </div>

          {/* Client logos */}
          <ClientLogos className="opacity-0 animate-fade-in-up stagger-3" />
        </div>
      </section>

      {/* ===== SECTION 7: CTA + FORM ===== */}
      <section id="form-section" className="py-16 md:py-24 bg-gradient-to-br from-secondary via-secondary to-muted relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_120%,hsl(28_100%_50%/0.15),transparent)]" />
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
        
        <div className="container-ddm relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left - Text */}
              <div className="text-center lg:text-left opacity-0 animate-fade-in-up">
                <span className="badge-industrial mb-4">
                  <MessageCircle className="w-4 h-4" />
                  Orçamento Grátis
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                  Pronto para <span className="text-gradient-vivid">começar?</span>
                </h2>
                <p className="text-muted-foreground mb-6">
                  Preencha o formulário e receba seu orçamento sem compromisso. 
                  Respondemos rapidamente pelo WhatsApp!
                </p>
                
                <div className="space-y-3">
                  {[
                    'Orçamento sem compromisso',
                    'Resposta em até 2 horas',
                    'Atendimento personalizado',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 justify-center lg:justify-start">
                      <CheckCircle2 className="w-5 h-5 text-ddm-success flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Form */}
              <div className="card-premium p-6 md:p-8 opacity-0 animate-fade-in-up stagger-1">
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
