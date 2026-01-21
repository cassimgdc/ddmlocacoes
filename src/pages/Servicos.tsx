import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import ServicesCarousel from '@/components/home/ServicesCarousel';
import { MessageCircle, ArrowRight } from 'lucide-react';

const Servicos = () => {
  return (
    <Layout>
      <Helmet>
        <title>Serviços de Retroescavadeira em Sete Lagoas | DDM Locações</title>
        <meta name="description" content="Terraplanagem, abertura de valas, limpeza de lotes, escavação de fossas e cisternas, serviços rurais. Retroescavadeira Case 580M com operador em Sete Lagoas." />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="canonical" href="https://dig-and-haul-pro.lovable.app/servicos" />
      </Helmet>
      
      {/* Header */}
      <section className="pt-20 pb-4 md:pt-36 md:pb-8">
        <div className="container-ddm">
          <div className="max-w-2xl animate-fade-in text-center mx-auto">
            <h1 className="text-2xl md:text-4xl font-black text-foreground mb-2">
              Nossos Serviços
            </h1>
            <p className="text-muted-foreground text-sm md:text-lg">
              Deslize para conhecer todos os serviços que realizamos
            </p>
          </div>
        </div>
      </section>

      {/* Carrossel de Serviços */}
      <section className="pb-8 md:pb-16">
        <div className="container-ddm">
          <ServicesCarousel 
            mobileSize="basis-[85%]"
            tabletSize="md:basis-[70%]"
            desktopSize="lg:basis-[60%]"
            className="animate-fade-in-up"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-16 bg-muted/30 mb-20 md:mb-0">
        <div className="container-ddm text-center animate-fade-in-up">
          <h2 className="text-lg md:text-3xl font-bold text-foreground mb-2 md:mb-3">
            Precisa de algum desses serviços?
          </h2>
          <p className="text-muted-foreground text-xs md:text-base mb-5 md:mb-6 max-w-md mx-auto">
            Solicite um orçamento sem compromisso. Respondemos rapidamente.
          </p>
          <Button variant="cta" size="lg" className="group touch-feedback w-full sm:w-auto" asChild>
            <Link to="/contato">
              <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
              Pedir Orçamento
              <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Servicos;
