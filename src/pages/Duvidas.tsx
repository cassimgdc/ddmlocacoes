import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { MessageCircle, ArrowRight, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Duvidas = () => {
  const siteUrl = 'https://ddmlocacoes.com.br';

  const faqs = [
    {
      question: 'Vocês atendem só Sete Lagoas?',
      answer: 'Atendemos Sete Lagoas e região. Se você estiver em outra cidade próxima, chame no WhatsApp e informe o local.',
    },
    {
      question: 'Como funciona o agendamento?',
      answer: 'Você envia o local e o tipo de serviço. Confirmamos disponibilidade e alinhamos horário/diária conforme necessidade.',
    },
    {
      question: 'Precisa de vistoria antes?',
      answer: 'Na maioria dos casos, fotos/vídeo já resolvem. Para serviços maiores, podemos avaliar conforme o caso.',
    },
    {
      question: 'O que pode mudar o valor do serviço?',
      answer: 'Distância/deslocamento, tempo estimado, tipo de solo, acessos, presença de obstáculos e necessidade de acabamento.',
    },
    {
      question: 'Você faz limpeza e movimentação de material?',
      answer: 'Sim: carregamento e movimentação de material, além de limpeza de lotes e terrenos.',
    },
    {
      question: 'Qual a forma mais rápida de pedir orçamento?',
      answer: 'WhatsApp. Envie: local + serviço + fotos/vídeo. A resposta é rápida.',
    },
  ];

  // Schema.org FAQPage structured data
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <Layout>
      <Helmet>
        <title>Dúvidas Frequentes | DDM Locações - Sete Lagoas</title>
        <meta
          name="description"
          content="Tire suas dúvidas sobre aluguel de retroescavadeira em Sete Lagoas. Saiba como funciona o agendamento, área de atendimento, valores e formas de contato."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${siteUrl}/duvidas`} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}/duvidas`} />
        <meta property="og:title" content="Dúvidas Frequentes | DDM Locações" />
        <meta
          property="og:description"
          content="Tire suas dúvidas sobre aluguel de retroescavadeira em Sete Lagoas. Agendamento, valores e formas de contato."
        />
        <meta property="og:image" content={`${siteUrl}/og-image.png`} />
        <meta property="og:locale" content="pt_BR" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dúvidas Frequentes | DDM Locações" />
        <meta
          name="twitter:description"
          content="Tire suas dúvidas sobre aluguel de retroescavadeira em Sete Lagoas."
        />
        <meta name="twitter:image" content={`${siteUrl}/og-image.png`} />

        {/* FAQPage Schema */}
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Header */}
      <section className="pt-24 pb-8 md:pt-36 md:pb-14 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
        
        <div className="container-ddm relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <span className="badge-industrial mb-4">
              <HelpCircle className="w-4 h-4" />
              FAQ
            </span>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-display font-black text-foreground mb-4">
              Dúvidas <span className="text-gradient-vivid">Frequentes</span>
            </h1>
            <p className="text-muted-foreground text-sm md:text-lg max-w-xl mx-auto">
              Respostas rápidas para as perguntas mais comuns sobre nossos serviços de locação.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="pb-12 md:pb-20">
        <div className="container-ddm">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {/* Coluna 1 */}
              <div className="space-y-4">
                <Accordion type="single" collapsible className="space-y-3">
                  {faqs.slice(0, 3).map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="card-premium border-0 px-4 md:px-5 animate-fade-in-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <AccordionTrigger className="text-left text-sm md:text-base font-semibold text-foreground hover:text-primary py-4 [&[data-state=open]>svg]:text-primary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-sm md:text-base pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Coluna 2 */}
              <div className="space-y-4">
                <Accordion type="single" collapsible className="space-y-3">
                  {faqs.slice(3, 6).map((faq, index) => (
                    <AccordionItem
                      key={index + 3}
                      value={`item-${index + 3}`}
                      className="card-premium border-0 px-4 md:px-5 animate-fade-in-up"
                      style={{ animationDelay: `${(index + 3) * 100}ms` }}
                    >
                      <AccordionTrigger className="text-left text-sm md:text-base font-semibold text-foreground hover:text-primary py-4 [&[data-state=open]>svg]:text-primary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-sm md:text-base pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-secondary/30 section-glow mb-20 md:mb-0">
        <div className="container-ddm text-center animate-fade-in-up">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-display font-bold text-foreground mb-3">
            Ainda tem dúvidas?
          </h2>
          <p className="text-muted-foreground text-sm md:text-base mb-6 max-w-md mx-auto">
            Fale diretamente conosco pelo WhatsApp. Respondemos rápido!
          </p>
          <Button variant="cta" size="lg" className="group" asChild>
            <Link to="/contato">
              <MessageCircle className="w-5 h-5" />
              Pedir Orçamento
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Duvidas;
