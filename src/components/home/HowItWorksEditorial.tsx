import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { CheckCircle2, Clock, CreditCard, Users, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

const processItems = [
  {
    icon: Clock,
    question: 'Qual o prazo para começar o serviço?',
    answer: 'Após a confirmação do orçamento, podemos iniciar em até 24-48h, dependendo da disponibilidade. Para urgências, consulte por WhatsApp.',
  },
  {
    icon: CreditCard,
    question: 'Quais formas de pagamento são aceitas?',
    answer: 'Aceitamos PIX, transferência bancária e dinheiro. O pagamento pode ser combinado antes ou após a conclusão do serviço, conforme acordado.',
  },
  {
    icon: Users,
    question: 'O aluguel inclui operador?',
    answer: 'Sim! Todos os nossos equipamentos são operados por profissionais experientes. O combustível durante o trabalho também está incluso.',
  },
  {
    icon: Truck,
    question: 'Como funciona a entrega?',
    answer: 'Para Sete Lagoas e cidades próximas, o deslocamento está incluso no valor. Para outras regiões, calculamos uma taxa conforme a distância.',
  },
];

const steps = [
  'Solicite orçamento pelo WhatsApp ou formulário',
  'Receba confirmação em poucos minutos',
  'Agende data, horário e local',
  'Receba o equipamento com operador pronto para trabalhar',
];

const HowItWorksEditorial = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container-ddm">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left - Brief explanation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Como funciona</h2>
              <p className="text-muted-foreground mt-2 text-lg">
                Alugar equipamentos com a DDM é simples. Você escolhe, nós entregamos.
              </p>
            </div>
            
            <ul className="space-y-3">
              {steps.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-copper/10 text-copper text-sm font-semibold flex items-center justify-center mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            {/* Trust signals */}
            <div className="pt-4 border-t border-border">
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: CheckCircle2, text: 'Sem burocracia' },
                  { icon: CheckCircle2, text: 'Orçamento grátis' },
                  { icon: CheckCircle2, text: 'Atendimento rápido' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <item.icon className="w-4 h-4 text-success" />
                    <span>{item.text}</span>
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
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-4">Dúvidas frequentes</h3>
            <Accordion type="single" collapsible className="space-y-2">
              {processItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="rounded-xl bg-card border border-border px-5 data-[state=open]:border-copper/30 transition-colors"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground hover:text-copper py-4 gap-3">
                    <div className="flex items-center gap-3">
                      <item.icon className="w-5 h-5 text-copper flex-shrink-0" />
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
