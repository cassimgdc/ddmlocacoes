import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Vocês atendem só Sete Lagoas?',
    answer: 'Atendemos Sete Lagoas e região. Se você estiver em outra cidade próxima, chame no WhatsApp e informe o local.',
  },
  {
    question: 'Qual o tempo mínimo de locação?',
    answer: 'O tempo mínimo é de 2 horas. Para serviços maiores, oferecemos diárias com melhor custo-benefício.',
  },
  {
    question: 'O operador e combustível estão inclusos?',
    answer: 'Sim! Todos os aluguéis incluem operador experiente e combustível durante o trabalho.',
  },
  {
    question: 'Precisa de vistoria antes?',
    answer: 'Na maioria dos casos, fotos ou vídeo já resolvem. Para serviços maiores, podemos avaliar conforme o caso.',
  },
  {
    question: 'Qual a forma mais rápida de pedir orçamento?',
    answer: 'WhatsApp. Envie: local + serviço + fotos/vídeo. A resposta é rápida.',
  },
];

const FAQPreview = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">Dúvidas Frequentes</h2>
        <Link to="/duvidas" className="text-sm text-accent hover:underline flex items-center gap-1">
          Ver todas
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <Accordion type="single" collapsible className="space-y-2">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`faq-${index}`}
            className="rounded-lg bg-card border border-border px-4"
          >
            <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:text-accent py-3">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm pb-3">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQPreview;
