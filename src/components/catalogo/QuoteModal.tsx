import { useState } from 'react';
import { X, Send, MessageCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { toast } from '@/hooks/use-toast';
import { z } from 'zod';
import { Equipamento } from '@/data/equipamentos';

const formSchema = z.object({
  name: z.string().trim().min(2, 'Nome deve ter pelo menos 2 caracteres').max(100, 'Nome muito longo'),
  whatsapp: z.string().trim().min(10, 'WhatsApp inválido').max(20, 'WhatsApp inválido'),
  city: z.string().trim().min(2, 'Cidade deve ter pelo menos 2 caracteres').max(100, 'Cidade muito longa'),
  period: z.string().trim().max(100, 'Período muito longo').optional(),
  message: z.string().trim().max(500, 'Mensagem muito longa').optional(),
});

interface QuoteModalProps {
  equipamento: Equipamento | null;
  isOpen: boolean;
  onClose: () => void;
}

const QuoteModal = ({ equipamento, isOpen, onClose }: QuoteModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [redirectToWhatsApp, setRedirectToWhatsApp] = useState(false);
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

    if (redirectToWhatsApp) {
      const message = encodeURIComponent(
        `Olá! Gostaria de um orçamento para:\n\n📦 *${equipamento?.nome}*\n\n👤 Nome: ${formData.name}\n📍 Cidade: ${formData.city}\n📅 Período: ${formData.period || 'A definir'}\n${formData.message ? `💬 Obs: ${formData.message}` : ''}`
      );
      window.open(`https://wa.me/5531999999999?text=${message}`, '_blank');
    }

    toast({
      title: 'Pedido enviado!',
      description: redirectToWhatsApp
        ? 'Você será redirecionado para o WhatsApp.'
        : 'Entraremos em contato pelo WhatsApp em breve.',
    });

    // Reset and close
    setFormData({ name: '', whatsapp: '', city: '', period: '', message: '' });
    setIsSubmitting(false);
    onClose();
  };

  if (!equipamento) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="font-display text-xl">Solicitar Orçamento</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {equipamento.nome}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="space-y-2">
            <Label htmlFor="quote-name">Nome *</Label>
            <Input
              id="quote-name"
              name="name"
              placeholder="Seu nome completo"
              value={formData.name}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="quote-whatsapp">WhatsApp *</Label>
            <Input
              id="quote-whatsapp"
              name="whatsapp"
              placeholder="(31) 99999-9999"
              value={formData.whatsapp}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="quote-city">Cidade *</Label>
            <Input
              id="quote-city"
              name="city"
              placeholder="Sete Lagoas, Prudente de Morais..."
              value={formData.city}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="quote-period">Período de uso</Label>
            <Input
              id="quote-period"
              name="period"
              placeholder="Ex: 3 dias, 1 semana..."
              value={formData.period}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="quote-message">Mensagem (opcional)</Label>
            <Textarea
              id="quote-message"
              name="message"
              placeholder="Detalhes do serviço..."
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className="resize-none"
            />
          </div>

          {/* WhatsApp toggle */}
          <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50 border border-border/50">
            <div className="flex items-center gap-3">
              <MessageCircle className="w-5 h-5 text-ddm-whatsapp" />
              <Label htmlFor="whatsapp-toggle" className="text-sm cursor-pointer">
                Falar no WhatsApp agora
              </Label>
            </div>
            <Switch
              id="whatsapp-toggle"
              checked={redirectToWhatsApp}
              onCheckedChange={setRedirectToWhatsApp}
              aria-label="Redirecionar para WhatsApp"
            />
          </div>

          {/* Submit */}
          <div className="flex gap-3 pt-2">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancelar
            </Button>
            <Button type="submit" variant="cta" className="flex-1" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Enviar
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteModal;
