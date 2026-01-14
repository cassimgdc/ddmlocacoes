import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { MessageCircle, MapPin, Wrench, FileText, ArrowRight, Loader2 } from 'lucide-react';

const QuickQuoteForm = () => {
  const [formData, setFormData] = useState({
    local: '',
    tipoServico: '',
    detalhes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceTypes = [
    'Abertura de valas',
    'Terraplanagem e nivelamento',
    'Limpeza de lote/terreno',
    'Escavação (fossa/cisterna/fundação)',
    'Serviços rurais (barraginhas, açudes)',
    'Carregamento/movimentação de material',
    'Outro serviço',
  ];

  const formatWhatsAppMessage = () => {
    const lines = [
      'Ola! Quero orcamento.',
      '',
      `Local: ${formData.local}`,
      `Servico: ${formData.tipoServico}`,
    ];

    if (formData.detalhes) {
      lines.push(`Detalhes: ${formData.detalhes}`);
    }

    lines.push('', 'Posso enviar fotos/video em seguida.');

    return encodeURIComponent(lines.join('\n'));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.local || !formData.tipoServico) {
      return;
    }

    setIsSubmitting(true);

    const message = formatWhatsAppMessage();
    const whatsappUrl = `https://wa.me/5531971067272?text=${message}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="relative">
      {/* Glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 rounded-3xl blur-xl opacity-50" />
      
      <div className="relative card-premium p-8 lg:p-10">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-4">
            ⚡ Resposta em minutos
          </span>
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
            Orçamento em 30 segundos
          </h3>
          <p className="text-muted-foreground">
            Preencha e envie direto para nosso WhatsApp
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Local */}
          <div className="space-y-2">
            <Label htmlFor="local" className="text-foreground flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              Local do serviço *
            </Label>
            <Input
              id="local"
              placeholder="Ex: Sete Lagoas, Bairro Centro"
              value={formData.local}
              onChange={(e) => handleInputChange('local', e.target.value)}
              className="h-12 bg-muted/50 border-border/50 focus:border-primary"
              required
            />
          </div>

          {/* Tipo de Serviço */}
          <div className="space-y-2">
            <Label className="text-foreground flex items-center gap-2">
              <Wrench className="w-4 h-4 text-primary" />
              Tipo de serviço *
            </Label>
            <Select
              value={formData.tipoServico}
              onValueChange={(value) => handleInputChange('tipoServico', value)}
              required
            >
              <SelectTrigger className="h-12 bg-muted/50 border-border/50 focus:border-primary">
                <SelectValue placeholder="Selecione o serviço" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border">
                {serviceTypes.map((type) => (
                  <SelectItem key={type} value={type} className="focus:bg-primary/10">
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Detalhes */}
          <div className="space-y-2">
            <Label htmlFor="detalhes" className="text-foreground flex items-center gap-2">
              <FileText className="w-4 h-4 text-primary" />
              Detalhes (opcional)
            </Label>
            <Textarea
              id="detalhes"
              placeholder="Descreva brevemente o serviço..."
              rows={3}
              value={formData.detalhes}
              onChange={(e) => handleInputChange('detalhes', e.target.value)}
              className="bg-muted/50 border-border/50 focus:border-primary resize-none"
            />
          </div>

          {/* Submit */}
          <Button 
            type="submit" 
            variant="whatsapp" 
            size="xl" 
            className="w-full group"
            disabled={isSubmitting || !formData.local || !formData.tipoServico}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Abrindo WhatsApp...
              </>
            ) : (
              <>
                <MessageCircle className="w-5 h-5" />
                Enviar no WhatsApp
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>
        </form>

        <p className="text-center text-muted-foreground text-xs mt-4">
          Após enviar, você pode anexar fotos/vídeos do terreno
        </p>
      </div>
    </div>
  );
};

export default QuickQuoteForm;
