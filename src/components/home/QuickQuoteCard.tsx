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
import { MessageCircle, Send, Phone, Loader2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const serviceTypes = [
  { value: 'retroescavadeira', label: 'Retroescavadeira' },
  { value: 'terraplanagem', label: 'Terraplanagem' },
  { value: 'abertura-valas', label: 'Abertura de Valas' },
  { value: 'limpeza-lotes', label: 'Limpeza de Lotes' },
  { value: 'escavacao', label: 'Escavação' },
  { value: 'carregamento', label: 'Carregamento' },
  { value: 'servicos-rurais', label: 'Serviços Rurais' },
  { value: 'outro', label: 'Outro serviço' },
];

const QuickQuoteCard = () => {
  const [formData, setFormData] = useState({
    tipo: '',
    cidade: '',
    periodo: '',
    mensagem: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.tipo || !formData.cidade) {
      toast({
        title: 'Campos obrigatórios',
        description: 'Selecione o tipo de serviço e informe a cidade.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    // Build WhatsApp message
    const message = encodeURIComponent(
      `Olá! Quero um orçamento.\n\nServiço: ${serviceTypes.find(s => s.value === formData.tipo)?.label || formData.tipo}\nCidade: ${formData.cidade}\n${formData.periodo ? `Período: ${formData.periodo}\n` : ''}${formData.mensagem ? `Observação: ${formData.mensagem}` : ''}`
    );

    // Open WhatsApp
    window.open(`https://wa.me/5531971067272?text=${message}`, '_blank');

    toast({
      title: 'WhatsApp aberto!',
      description: 'Continue a conversa pelo WhatsApp.',
    });

    setIsSubmitting(false);
  };

  const openWhatsAppDirect = () => {
    window.open('https://wa.me/5531971067272', '_blank');
  };

  return (
    <div className="bg-card rounded-xl border border-border p-5 md:p-6">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-foreground">Orçamento Rápido</h2>
        <p className="text-sm text-muted-foreground">Preencha e receba seu orçamento pelo WhatsApp</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <Label htmlFor="tipo" className="text-sm">Tipo de serviço *</Label>
          <Select value={formData.tipo} onValueChange={(v) => handleChange('tipo', v)}>
            <SelectTrigger className="mt-1 bg-muted/50 border-border">
              <SelectValue placeholder="Selecione..." />
            </SelectTrigger>
            <SelectContent className="bg-card border-border">
              {serviceTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="cidade" className="text-sm">Cidade *</Label>
          <Input
            id="cidade"
            placeholder="Ex: Sete Lagoas"
            value={formData.cidade}
            onChange={(e) => handleChange('cidade', e.target.value)}
            className="mt-1 bg-muted/50 border-border"
          />
        </div>

        <div>
          <Label htmlFor="periodo" className="text-sm">Período (opcional)</Label>
          <Input
            id="periodo"
            placeholder="Ex: 2 dias, 1 semana"
            value={formData.periodo}
            onChange={(e) => handleChange('periodo', e.target.value)}
            className="mt-1 bg-muted/50 border-border"
          />
        </div>

        <div>
          <Label htmlFor="mensagem" className="text-sm">Observação (opcional)</Label>
          <Textarea
            id="mensagem"
            placeholder="Detalhes do serviço..."
            value={formData.mensagem}
            onChange={(e) => handleChange('mensagem', e.target.value)}
            rows={2}
            className="mt-1 bg-muted/50 border-border resize-none"
          />
        </div>

        <div className="pt-2 space-y-2">
          <Button
            type="submit"
            variant="default"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )}
            Solicitar Orçamento
          </Button>
          
          <Button
            type="button"
            variant="outline"
            className="w-full text-success border-success/30 hover:bg-success/10"
            onClick={openWhatsAppDirect}
          >
            <Phone className="w-4 h-4 text-success" />
            Falar no WhatsApp
          </Button>
        </div>
      </form>
    </div>
  );
};

export default QuickQuoteCard;
