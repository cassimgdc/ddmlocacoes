import { Clock, Calendar, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const PricingSection = () => {
  const whatsappLink = 'https://wa.me/5531971067272?text=Olá! Gostaria de solicitar um orçamento para locação de retroescavadeira.';

  return (
    <section id="precos" className="section-padding bg-secondary/50">
      <div className="container-ddm">
        <div className="text-center mb-12">
          <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
            Contratação
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Formas de Contratação
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Escolha a modalidade ideal para sua obra. Orçamentos personalizados e sem compromisso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
          {/* Por Hora */}
          <div className="card-premium p-8 hover:border-primary/30 transition-all duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <Clock className="w-8 h-8 text-primary" />
            </div>
            
            <h3 className="text-xl font-bold text-foreground mb-2">Serviço por Hora</h3>
            
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-4xl font-black text-primary">R$ 200</span>
              <span className="text-muted-foreground">/hora</span>
            </div>
            
            <p className="text-muted-foreground text-sm mb-6">
              Ideal para serviços rápidos e pontuais. Contratação flexível.
            </p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-sm text-foreground">
                <CheckCircle2 className="w-4 h-4 text-ddm-success flex-shrink-0" />
                Mínimo de 2 horas
              </li>
              <li className="flex items-center gap-3 text-sm text-foreground">
                <CheckCircle2 className="w-4 h-4 text-ddm-success flex-shrink-0" />
                Operador experiente incluso
              </li>
              <li className="flex items-center gap-3 text-sm text-foreground">
                <CheckCircle2 className="w-4 h-4 text-ddm-success flex-shrink-0" />
                Combustível incluso
              </li>
            </ul>

            <Button variant="outline" size="lg" className="w-full" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Solicitar orçamento
              </a>
            </Button>
          </div>

          {/* Por Diária */}
          <div className="relative card-premium card-glow p-8 border-primary/30">
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-cta">
              Mais Popular
            </Badge>
            
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6 shadow-cta">
              <Calendar className="w-8 h-8 text-primary-foreground" />
            </div>
            
            <h3 className="text-xl font-bold text-foreground mb-2">Serviço por Diária</h3>
            
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-4xl font-black text-gradient">Sob Consulta</span>
            </div>
            
            <p className="text-muted-foreground text-sm mb-6">
              Para obras maiores e projetos completos. Melhor custo-benefício.
            </p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-sm text-foreground">
                <CheckCircle2 className="w-4 h-4 text-ddm-success flex-shrink-0" />
                8 horas de trabalho
              </li>
              <li className="flex items-center gap-3 text-sm text-foreground">
                <CheckCircle2 className="w-4 h-4 text-ddm-success flex-shrink-0" />
                Melhor custo-benefício
              </li>
              <li className="flex items-center gap-3 text-sm text-foreground">
                <CheckCircle2 className="w-4 h-4 text-ddm-success flex-shrink-0" />
                Desconto para múltiplas diárias
              </li>
            </ul>

            <Button variant="cta" size="lg" className="w-full group" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Pedir orçamento
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>

        <p className="text-center text-muted-foreground text-sm max-w-2xl mx-auto">
          * Os valores podem variar conforme o tipo de serviço, condições do terreno, 
          distância de deslocamento e tempo estimado. Solicite um orçamento personalizado.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
