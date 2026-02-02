import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { CheckCircle2 } from 'lucide-react';

const processItems = [
  {
    question: 'Como solicitar um orçamento?',
    answer: 'Envie uma mensagem pelo WhatsApp ou preencha o formulário no site. Informe o serviço desejado, local e período. Respondemos em poucos minutos com o valor e disponibilidade.',
  },
  {
    question: 'O que está incluso no aluguel?',
    answer: 'Todos os aluguéis incluem operador experiente, combustível durante o trabalho e seguro da máquina. Você não precisa se preocupar com nada além de indicar o local.',
  },
  {
    question: 'Quais formas de pagamento são aceitas?',
    answer: 'Aceitamos PIX, transferência bancária e dinheiro. O pagamento pode ser combinado antes ou após a conclusão do serviço, conforme acordado.',
  },
  {
    question: 'Como funciona o deslocamento?',
    answer: 'Para Sete Lagoas e cidades próximas, o deslocamento está incluso. Para outras regiões, cobramos uma taxa calculada conforme a distância.',
  },
  {
    question: 'Posso cancelar ou reagendar?',
    answer: 'Sim! Cancelamentos com mais de 24h de antecedência são gratuitos. Reagendamentos também são gratuitos, sujeitos à disponibilidade.',
  },
];

const HowItWorksAccordion = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-6 lg:gap-10">
      {/* Left - Brief explanation */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Como funciona</h2>
        <p className="text-sm text-muted-foreground">
          Alugar equipamentos com a DDM é simples e rápido. Você escolhe, nós entregamos.
        </p>
        
        <ul className="space-y-2">
          {[
            'Solicite orçamento pelo WhatsApp ou formulário',
            'Receba confirmação em minutos',
            'Agende data e local',
            'Receba o equipamento com operador',
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
              <span className="text-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right - FAQ Accordion */}
      <div>
        <Accordion type="single" collapsible className="space-y-2">
          {processItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-lg bg-card border border-border px-4"
            >
              <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:text-accent py-3">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm pb-3">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default HowItWorksAccordion;
