import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/layout/Layout';
import FAQSection from '@/components/home/FAQSection';
import {
  ArrowLeft,
  MessageCircle,
  CheckCircle2,
  Clock,
  Calendar,
  MapPin,
  Shovel,
  Mountain,
  Trees,
  Construction,
  Tractor,
  Truck,
  Camera,
  FileText,
} from 'lucide-react';

import case580m from '@/assets/case-580m.png';

const EquipamentoDetalhe = () => {
  const services = [
    { icon: Shovel, name: 'Abertura e limpeza de valas' },
    { icon: Mountain, name: 'Terraplanagem e nivelamento' },
    { icon: Trees, name: 'Limpeza de lotes e terrenos' },
    { icon: Construction, name: 'Escavação para fossa, cisterna e fundação' },
    { icon: Tractor, name: 'Barraginhas, açudes e serviços rurais' },
    { icon: Truck, name: 'Carregamento e movimentação de material' },
  ];

  const specs = [
    { label: 'Modelo', value: 'Case 580M' },
    { label: 'Tipo', value: 'Retroescavadeira' },
    { label: 'Potência', value: '95 HP' },
    { label: 'Profundidade de escavação', value: 'Até 4,5m' },
    { label: 'Caçamba traseira', value: '0,25 m³' },
    { label: 'Caçamba frontal', value: '1,0 m³' },
  ];

  const indicatedFor = [
    'Lotes urbanos e residenciais',
    'Obras e construções',
    'Sítios e fazendas',
    'Áreas rurais',
    'Condomínios',
    'Empreendimentos comerciais',
  ];

  const faqItems = [
    {
      question: 'Qual o preço da hora da Retroescavadeira?',
      answer: 'O valor do serviço por hora é de R$ 200,00, com mínimo de 2 horas. Para diárias (8 horas), consulte para um orçamento personalizado com melhor custo-benefício.',
    },
    {
      question: 'A máquina já vem com operador?',
      answer: 'Sim! Todos os nossos equipamentos são alugados com operador experiente e habilitado, já incluso no valor.',
    },
    {
      question: 'Preciso providenciar combustível?',
      answer: 'Não. O combustível já está incluso no valor do serviço. Você não precisa se preocupar com isso.',
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-secondary via-secondary to-secondary/90">
        <div className="container-ddm">
          <Link to="/equipamentos" className="inline-flex items-center gap-2 text-secondary-foreground/70 hover:text-primary mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Voltar aos equipamentos
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <Badge className="bg-ddm-success text-white mb-4">
                <CheckCircle2 className="w-3 h-3 mr-1" />
                Disponível
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-4">
                Retroescavadeira<br />
                <span className="text-primary">Case 580M</span>
              </h1>
              <p className="text-secondary-foreground/70 text-lg mb-6">
                Máquina versátil e potente, ideal para terraplanagem, valas, escavação e serviços rurais. Atendemos Sete Lagoas e região.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {['Terraplanagem', 'Valas', 'Rural', 'Escavação', 'Limpeza'].map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contato">
                    <MessageCircle className="w-5 h-5" />
                    Pedir Orçamento
                  </Link>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <Link to="/servicos">
                    Ver Serviços
                  </Link>
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={case580m}
                  alt="Retroescavadeira Case 580M"
                  className="w-full h-auto"
                />
              </div>
              {/* Price Badge */}
              <div className="absolute -bottom-4 -right-4 bg-card rounded-xl p-4 shadow-xl">
                <p className="text-sm text-muted-foreground mb-1">A partir de</p>
                <p className="text-3xl font-bold text-primary">R$ 200<span className="text-base text-muted-foreground">/hora</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container-ddm">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Serviços</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              O que ela faz
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={service.name} 
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50 hover:shadow-md transition-all opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="font-medium text-foreground">{service.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs & Indicated For */}
      <section className="section-padding bg-muted">
        <div className="container-ddm">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Specs */}
            <div>
              <Badge variant="secondary" className="mb-4">Especificações</Badge>
              <h3 className="text-2xl font-bold text-foreground mb-6">Dados técnicos</h3>
              <div className="bg-card rounded-xl overflow-hidden border border-border/50">
                {specs.map((spec, index) => (
                  <div key={spec.label} className={`flex justify-between p-4 ${index !== specs.length - 1 ? 'border-b border-border/50' : ''}`}>
                    <span className="text-muted-foreground">{spec.label}</span>
                    <span className="font-semibold text-foreground">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Indicated For */}
            <div>
              <Badge variant="secondary" className="mb-4">Indicação</Badge>
              <h3 className="text-2xl font-bold text-foreground mb-6">Ideal para</h3>
              <div className="grid grid-cols-2 gap-3">
                {indicatedFor.map((item) => (
                  <div key={item} className="flex items-center gap-2 bg-card p-4 rounded-xl border border-border/50">
                    <CheckCircle2 className="w-5 h-5 text-ddm-success flex-shrink-0" />
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Speeds Up */}
      <section className="section-padding bg-background">
        <div className="container-ddm">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">Dica</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              O que agiliza seu orçamento
            </h2>
            <p className="text-muted-foreground mb-8">
              Para enviarmos um orçamento mais preciso e rápido, é útil ter essas informações em mãos:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-xl border border-border/50">
                <MapPin className="w-10 h-10 text-primary mx-auto mb-4" />
                <h4 className="font-bold text-foreground mb-2">Localização</h4>
                <p className="text-muted-foreground text-sm">Cidade, bairro e ponto de referência do local do serviço.</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border/50">
                <FileText className="w-10 h-10 text-primary mx-auto mb-4" />
                <h4 className="font-bold text-foreground mb-2">Tipo de Serviço</h4>
                <p className="text-muted-foreground text-sm">Descreva o que precisa: vala, terraplanagem, limpeza, etc.</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border/50">
                <Camera className="w-10 h-10 text-primary mx-auto mb-4" />
                <h4 className="font-bold text-foreground mb-2">Fotos ou Vídeo</h4>
                <p className="text-muted-foreground text-sm">Imagens do terreno ajudam a avaliar o serviço.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-secondary">
        <div className="container-ddm">
          <div className="text-center mb-12">
            <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">Contratação</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
              Formas de locação
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Por Hora */}
            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Clock className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Por Hora</h3>
                  <p className="text-muted-foreground text-sm">Serviços rápidos e pontuais</p>
                </div>
              </div>
              <div className="text-4xl font-bold text-primary mb-4">
                R$ 200<span className="text-lg text-muted-foreground">/hora</span>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
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
              <Button variant="cta" size="lg" className="w-full" asChild>
                <Link to="/contato">
                  <MessageCircle className="w-5 h-5" />
                  Contratar por Hora
                </Link>
              </Button>
            </div>

            {/* Por Diária */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border-2 border-primary relative">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                Mais Popular
              </Badge>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Calendar className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Por Diária</h3>
                  <p className="text-muted-foreground text-sm">Obras maiores e projetos</p>
                </div>
              </div>
              <div className="text-4xl font-bold text-primary mb-4">
                Sob Consulta
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
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
              <Button variant="cta" size="lg" className="w-full" asChild>
                <Link to="/contato">
                  <MessageCircle className="w-5 h-5" />
                  Consultar Diária
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="container-ddm">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">Dúvidas</Badge>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Perguntas frequentes sobre a Case 580M
              </h2>
            </div>
            <FAQSection items={faqItems} />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EquipamentoDetalhe;
