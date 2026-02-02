import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import InternalHero from '@/components/layout/InternalHero';
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
        <link rel="canonical" href={`${siteUrl}/duvidas`} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <InternalHero
        badge="FAQ"
        badgeIcon={HelpCircle}
        title="Dúvidas"
        titleHighlight="Frequentes"
        subtitle="Respostas rápidas para as perguntas mais comuns sobre nossos serviços de locação."
        breadcrumbs={[{ label: 'Dúvidas' }]}
      />

      {/* FAQ Accordion */}
      <section className="section-padding">
        <div className="container-ddm">
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {/* Coluna 1 */}
              <div className="space-y-3">
                <Accordion type="single" collapsible className="space-y-2">
                  {faqs.slice(0, 3).map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="rounded-xl bg-card border border-border px-4"
                    >
                      <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:text-copper py-3">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-sm pb-3">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Coluna 2 */}
              <div className="space-y-3">
                <Accordion type="single" collapsible className="space-y-2">
                  {faqs.slice(3, 6).map((faq, index) => (
                    <AccordionItem
                      key={index + 3}
                      value={`item-${index + 3}`}
                      className="rounded-xl bg-card border border-border px-4"
                    >
                      <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:text-copper py-3">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-sm pb-3">
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
      <section className="section-padding bg-muted/50 border-t border-border">
        <div className="container-ddm text-center">
          <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
            Ainda tem dúvidas?
          </h2>
          <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
            Fale diretamente conosco pelo WhatsApp. Respondemos rápido!
          </p>
          <Button variant="default" size="lg" asChild>
            <Link to="/contato">
              <MessageCircle className="w-4 h-4" />
              Pedir Orçamento
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Duvidas;
