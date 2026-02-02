import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  MessageCircle,
  MapPin,
  Clock,
  Shield,
  Star,
  Target,
  Heart,
  Handshake,
  CheckCircle2,
} from 'lucide-react';
import logoImg from '@/assets/logo-ddm.png';
import { motion } from 'framer-motion';
import SteelDivider from '@/components/brand/SteelDivider';
import DDMPattern from '@/components/brand/DDMPattern';

const Sobre = () => {
  const valores = [
    {
      icon: Target,
      titulo: 'Compromisso',
      descricao: 'Entregamos o que prometemos, no prazo combinado.',
    },
    {
      icon: Heart,
      titulo: 'Dedicação',
      descricao: 'Cada obra é tratada com atenção e cuidado.',
    },
    {
      icon: Handshake,
      titulo: 'Transparência',
      descricao: 'Orçamento claro, sem surpresas no final.',
    },
    {
      icon: Star,
      titulo: 'Qualidade',
      descricao: 'Equipamento revisado e operador experiente.',
    },
  ];

  const diferenciais = [
    'Atendimento personalizado',
    'Resposta rápida pelo WhatsApp',
    'Operador experiente incluso',
    'Combustível incluso',
    'Máquina sempre revisada',
    'Preço justo e competitivo',
  ];

  return (
    <Layout>
      <Helmet>
        <title>Sobre a DDM Locações | Aluguel de Retroescavadeira - Sete Lagoas</title>
        <meta name="description" content="Conheça a DDM Locações: locação de retroescavadeira com operador em Sete Lagoas e região. Anos de experiência, equipamento de qualidade e atendimento diferenciado." />
        <link rel="canonical" href="https://ddmlocacoes.com.br/sobre" />
      </Helmet>

      {/* Hero Section with Large Logo and DDM Pattern */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-muted/50 to-background">
        {/* DDM Technical Pattern */}
        <DDMPattern variant="minimal" />
        
        {/* Accent bar */}
        <div className="absolute top-0 left-0 w-32 h-0.5 bg-accent" />
        
        <div className="container-ddm relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            {/* Large Logo */}
            <div className="mb-8">
              <img 
                src={logoImg} 
                alt="DDM Locações" 
                className="h-32 sm:h-40 md:h-52 lg:h-64 w-auto"
              />
            </div>

            {/* Tagline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight max-w-2xl">
              Mais do que aluguel de máquinas
            </h1>
            <p className="text-lg md:text-xl text-accent font-medium mt-2">
              Uma parceria para sua obra dar certo
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12 mt-10 pt-8 border-t border-border/60">
              {[
                { valor: '500+', label: 'Locações' },
                { valor: '10+', label: 'Anos' },
                { valor: '8+', label: 'Cidades' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">{stat.valor}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* História - Editorial 2 columns */}
      <section className="py-12 md:py-16">
        <div className="container-ddm">
          <SteelDivider icon="cog" className="mb-8" />
          
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left - Text */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-5"
            >
              <h2 className="text-xl md:text-2xl font-bold text-foreground">
                Experiência e dedicação em cada obra
              </h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A DDM Locações nasceu da paixão por máquinas e do desejo de oferecer um serviço diferenciado para quem precisa de retroescavadeira em <span className="text-foreground font-medium">Sete Lagoas e região</span>.
                </p>
                <p>
                  Sabemos que cada obra tem suas particularidades. Por isso, oferecemos atendimento personalizado, com orçamento justo e sem surpresas. Nossa máquina está sempre revisada e nosso operador é experiente e comprometido com o resultado.
                </p>
                <p>
                  Atendemos desde pequenas obras residenciais até projetos maiores, sempre com o mesmo cuidado e atenção aos detalhes.
                </p>
              </div>
            </motion.div>

            {/* Right - Values cards with DDM chamfer */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-2 gap-4"
            >
              {valores.map((valor, index) => (
                <div 
                  key={valor.titulo} 
                  className="card-ddm p-5"
                >
                  <div className="w-10 h-10 ddm-chamfer-tr-sm bg-accent/10 flex items-center justify-center mb-3">
                    <valor.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{valor.titulo}</h3>
                  <p className="text-sm text-muted-foreground">{valor.descricao}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diferenciais with DDM Pattern */}
      <section className="relative py-12 md:py-16 bg-muted/30 border-y border-border overflow-hidden">
        <DDMPattern variant="minimal" />
        
        <div className="container-ddm relative z-10">
          <div className="max-w-3xl mx-auto">
            <SteelDivider icon="shovel" variant="centered" className="mb-6" />
            
            <h2 className="text-xl md:text-2xl font-bold text-foreground text-center mb-8">
              Por que nos escolher
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {diferenciais.map((item) => (
                <div key={item} className="card-ddm flex items-center gap-3 p-4">
                  <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Info cards with DDM chamfer */}
      <section className="py-12 md:py-16">
        <div className="container-ddm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { icon: MapPin, label: 'Sete Lagoas e Região' },
              { icon: Clock, label: 'Atendimento Rápido' },
              { icon: Shield, label: 'Seguro Incluso' },
              { icon: Star, label: 'Avaliações Positivas' },
            ].map((item) => (
              <div key={item.label} className="card-ddm p-4 text-center">
                <item.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                <p className="text-sm font-medium text-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA with brand signature */}
      <section className="relative py-12 md:py-16 bg-muted/30 border-t border-border overflow-hidden">
        <DDMPattern variant="minimal" />
        
        <div className="container-ddm relative z-10">
          <SteelDivider icon="truck" variant="centered" className="mb-6" />
          
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">
              Vamos trabalhar juntos?
            </h2>
            <p className="text-muted-foreground mb-6">
              Entre em contato e descubra como podemos ajudar na sua obra.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button variant="default" size="lg" asChild className="ddm-chamfer-tr-sm">
                <Link to="/contato">
                  <MessageCircle className="w-4 h-4" />
                  Fale Conosco
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-success/30 text-success hover:bg-success/5 hover:border-success/50"
                onClick={() => window.open('https://wa.me/5531971067272', '_blank')}
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Direto
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sobre;
