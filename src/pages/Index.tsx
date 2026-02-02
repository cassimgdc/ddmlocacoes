import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import QuickQuoteCard from '@/components/home/QuickQuoteCard';
import CategoryGrid from '@/components/home/CategoryGrid';
import FeaturedEquipmentList from '@/components/home/FeaturedEquipmentList';
import HowItWorksAccordion from '@/components/home/HowItWorksAccordion';
import AreaCoverageCard from '@/components/home/AreaCoverageCard';
import FAQPreview from '@/components/home/FAQPreview';
import TestimonialsSimple from '@/components/home/TestimonialsSimple';
import FinalCTAForm from '@/components/home/FinalCTAForm';
import { TrendingUp, Clock, MapPin } from 'lucide-react';

const Index = () => {
  const stats = [
    { icon: TrendingUp, value: '+500', label: 'Locações realizadas' },
    { icon: Clock, value: '10+', label: 'Anos de experiência' },
    { icon: MapPin, value: '8+', label: 'Cidades atendidas' },
  ];

  return (
    <Layout>
      <Helmet>
        <title>DDM Locações - Aluguel de Equipamentos em Sete Lagoas | Retroescavadeira e Máquinas</title>
        <meta name="description" content="Aluguel de retroescavadeira, escavadeiras e equipamentos para construção em Sete Lagoas e região. Entrega rápida, preços competitivos. Solicite seu orçamento!" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="canonical" href="https://ddmlocacoes.com.br/" />
      </Helmet>

      {/* ===== FOLD 1: Quick Quote + Categories ===== */}
      <section className="pt-20 md:pt-24 pb-8 bg-background">
        <div className="container-ddm">
          <div className="grid lg:grid-cols-5 gap-6">
            {/* Left - Quick Quote (2 cols) */}
            <div className="lg:col-span-2">
              <QuickQuoteCard />
            </div>

            {/* Right - Categories (3 cols) */}
            <div className="lg:col-span-3">
              <CategoryGrid />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-4 border-y border-border bg-muted/30">
        <div className="container-ddm">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-background flex items-center justify-center border border-border">
                  <stat.icon className="w-4 h-4 text-copper" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-foreground leading-tight">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Featured Equipment ===== */}
      <section className="py-8 md:py-12">
        <div className="container-ddm">
          <FeaturedEquipmentList />
        </div>
      </section>

      {/* ===== How It Works ===== */}
      <section className="py-8 md:py-12 bg-muted/30 border-y border-border">
        <div className="container-ddm">
          <HowItWorksAccordion />
        </div>
      </section>

      {/* ===== Area Coverage ===== */}
      <section className="py-8 md:py-12">
        <div className="container-ddm">
          <AreaCoverageCard />
        </div>
      </section>

      {/* ===== FAQ Preview ===== */}
      <section className="py-8 md:py-12 bg-muted/30 border-y border-border">
        <div className="container-ddm">
          <FAQPreview />
        </div>
      </section>

      {/* ===== Testimonials ===== */}
      <section className="py-8 md:py-12">
        <div className="container-ddm">
          <TestimonialsSimple />
        </div>
      </section>

      {/* ===== Final CTA ===== */}
      <section className="py-8 md:py-12">
        <div className="container-ddm">
          <FinalCTAForm />
        </div>
      </section>
    </Layout>
  );
};

export default Index;
