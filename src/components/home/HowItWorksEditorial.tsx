import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Clock, CreditCard, Users, Truck, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const faqItems = [
  {
    icon: Clock,
    question: 'Qual o prazo para iniciar?',
    answer: 'Após a confirmação, podemos iniciar em 24-48h dependendo da disponibilidade. Para urgências, consulte pelo WhatsApp.',
  },
  {
    icon: CreditCard,
    question: 'Formas de pagamento',
    answer: 'Aceitamos PIX, transferência bancária e dinheiro. O pagamento pode ser combinado antes ou após a conclusão.',
  },
  {
    icon: Users,
    question: 'O aluguel inclui operador?',
    answer: 'Sim! Todos os equipamentos são operados por profissionais experientes. Combustível durante o trabalho também incluso.',
  },
  {
    icon: Truck,
    question: 'Como funciona a entrega?',
    answer: 'Para Sete Lagoas e região próxima, o deslocamento está incluso. Outras regiões têm taxa calculada pela distância.',
  },
];

const benefits = [
  'Orçamento sem compromisso',
  'Sem burocracia',
  'Atendimento rápido',
  'Equipamentos revisados',
];

const HowItWorksEditorial = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container-ddm">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Editorial content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                Como funciona
              </h2>
              <p className="text-muted-foreground mt-3 text-lg leading-relaxed">
                Alugar equipamentos com a DDM é simples e direto. 
                Você escolhe, nós entregamos pronto para uso.
              </p>
            </div>
            
            {/* Steps as numbered list */}
            <div className="space-y-4">
              {[
                'Solicite orçamento pelo WhatsApp ou formulário',
                'Receba confirmação em poucos minutos',
                'Agende data, horário e local',
                'Receba o equipamento com operador',
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                  <span className="text-foreground pt-1">{step}</span>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="pt-6 border-t border-border">
              <div className="grid grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-5">Perguntas frequentes</h3>
            <Accordion type="single" collapsible className="space-y-3">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="rounded-xl bg-card border border-border px-5 data-[state=open]:border-primary/20 data-[state=open]:shadow-sm transition-all"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary py-4 gap-3 [&[data-state=open]>div>svg]:text-primary">
                    <div className="flex items-center gap-3">
                      <item.icon className="w-5 h-5 text-copper flex-shrink-0 transition-colors" />
                      <span>{item.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4 pl-8">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksEditorial;