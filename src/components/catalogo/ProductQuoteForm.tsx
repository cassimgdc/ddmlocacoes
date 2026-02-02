import { useState } from 'react';
import { Send, MessageCircle, Loader2, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().trim().min(2, 'Nome deve ter pelo menos 2 caracteres').max(100, 'Nome muito longo'),
  whatsapp: z.string().trim().min(10, 'WhatsApp inválido').max(20, 'WhatsApp inválido'),
  city: z.string().trim().min(2, 'Cidade deve ter pelo menos 2 caracteres').max(100, 'Cidade muito longa'),
  period: z.string().trim().max(100, 'Período muito longo').optional(),
  message: z.string().trim().max(500, 'Mensagem muito longa').optional(),
});

interface Lead {
  id: string;
  equipamento: string;
  name: string;
  whatsapp: string;
  city: string;
  period?: string;
  message?: string;
  createdAt: string;
}

// Save lead to localStorage queue
const saveLeadToQueue = (lead: Omit<Lead, 'id' | 'createdAt'>) => {
  const queue: Lead[] = JSON.parse(localStorage.getItem('leadQueue') || '[]');
  const newLead: Lead = {
    ...lead,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  queue.push(newLead);
  localStorage.setItem('leadQueue', JSON.stringify(queue));
  return newLead;
};

interface ProductQuoteFormProps {
  equipamentoNome: string;
  preco?: string;
}

const ProductQuoteForm = ({ equipamentoNome, preco }: ProductQuoteFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    city: '',
    period: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = formSchema.safeParse(formData);
    if (!result.success) {
      toast({
        title: 'Erro no formulário',
        description: result.error.errors[0].message,
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Save to localStorage queue
    saveLeadToQueue({
      equipamento: equipamentoNome,
      ...formData,
    });

    toast({
      title: 'Pedido enviado com sucesso!',
      description: 'Entraremos em contato pelo WhatsApp em breve.',
    });

    // Reset form
    setFormData({ name: '', whatsapp: '', city: '', period: '', message: '' });
    setIsSubmitting(false);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Olá! Gostaria de um orçamento para:\n\n📦 *${equipamentoNome}*\n\n👤 Nome: ${formData.name || '(preencher)'}\n📍 Cidade: ${formData.city || '(preencher)'}\n📅 Período: ${formData.period || 'A definir'}\n${formData.message ? `💬 Obs: ${formData.message}` : ''}`
    );
    window.open(`https://wa.me/5531999999999?text=${message}`, '_blank');
  };

  return (
    <div className="card-premium p-5 md:p-6 border-primary/20">
      {/* Header */}
      <div className="mb-5 pb-4 border-b border-border/50">
        <h3 className="font-display font-bold text-foreground text-lg mb-1">
          Solicitar Orçamento
        </h3>
        <p className="text-sm text-muted-foreground">{equipamentoNome}</p>
        {preco && (
          <div className="mt-3 flex items-center gap-2">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">A partir de</span>
            <span className="font-bold text-primary">{preco}</span>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="pq-name">Nome *</Label>
          <Input
            id="pq-name"
            name="name"
            placeholder="Seu nome completo"
            value={formData.name}
            onChange={handleChange}
            required
            aria-required="true"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="pq-whatsapp">WhatsApp *</Label>
          <Input
            id="pq-whatsapp"
            name="whatsapp"
            placeholder="(31) 99999-9999"
            value={formData.whatsapp}
            onChange={handleChange}
            required
            aria-required="true"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="pq-city">Cidade *</Label>
          <Input
            id="pq-city"
            name="city"
            placeholder="Sete Lagoas, Prudente de Morais..."
            value={formData.city}
            onChange={handleChange}
            required
            aria-required="true"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="pq-period">Período de uso</Label>
          <Input
            id="pq-period"
            name="period"
            placeholder="Ex: 3 dias, 1 semana..."
            value={formData.period}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="pq-message">Mensagem (opcional)</Label>
          <Textarea
            id="pq-message"
            name="message"
            placeholder="Descreva brevemente o serviço..."
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className="resize-none"
          />
        </div>

        <div className="space-y-3 pt-2">
          <Button type="submit" variant="cta" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Enviar Pedido
              </>
            )}
          </Button>
          <Button
            type="button"
            variant="outline"
            size="lg"
            className="w-full"
            onClick={handleWhatsApp}
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp Direto
          </Button>
        </div>
      </form>

      {/* Trust badge */}
      <div className="mt-4 pt-4 border-t border-border/50 text-center">
        <p className="text-xs text-muted-foreground">
          ⚡ Resposta em até 2 horas • Sem compromisso
        </p>
      </div>
    </div>
  );
};

export default ProductQuoteForm;
