import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import CategoriesBento from '@/components/home/CategoriesBento';
import FeaturedShowcase from '@/components/home/FeaturedShowcase';
import HowItWorksEditorial from '@/components/home/HowItWorksEditorial';
import TrustSection from '@/components/home/TrustSection';
import FinalCTA from '@/components/home/FinalCTA';

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>DDM Locações - Aluguel de Equipamentos em Sete Lagoas | Retroescavadeira e Máquinas</title>
        <meta name="description" content="Aluguel de retroescavadeira, escavadeiras e equipamentos para construção em Sete Lagoas e região. Entrega rápida, preços competitivos. Solicite seu orçamento!" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="canonical" href="https://ddmlocacoes.com.br/" />
      </Helmet>

      {/* ===== HERO - Brand Showcase ===== */}
      <HeroSection />

      {/* ===== CATEGORIES - Bento Grid ===== */}
      <CategoriesBento />

      {/* ===== FEATURED EQUIPMENT - Showcase ===== */}
      <FeaturedShowcase />

      {/* ===== HOW IT WORKS - Editorial ===== */}
      <HowItWorksEditorial />

      {/* ===== TRUST SECTION - Area + Commitments ===== */}
      <TrustSection />

      {/* ===== FINAL CTA - Full Form ===== */}
      <FinalCTA />
    </Layout>
  );
};

export default Index;
