import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { Send, MessageCircle, Loader2 } from 'lucide-react';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().trim().min(2, 'Nome deve ter pelo menos 2 caracteres').max(100, 'Nome muito longo'),
  whatsapp: z.string().trim().min(10, 'WhatsApp inválido').max(20, 'WhatsApp inválido'),
  city: z.string().trim().min(2, 'Cidade deve ter pelo menos 2 caracteres').max(100, 'Cidade muito longa'),
  message: z.string().trim().max(500, 'Mensagem muito longa').optional(),
});

const QuickContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    city: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate
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
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: 'Recebemos seu pedido!',
      description: 'Entraremos em contato pelo WhatsApp em breve.',
    });
    
    // Reset form
    setFormData({ name: '', whatsapp: '', city: '', message: '' });
    setIsSubmitting(false);
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      `Olá! Vim pelo site da DDM Locações.\n\nNome: ${formData.name}\nCidade: ${formData.city}\n${formData.message ? `Mensagem: ${formData.message}` : ''}`
    );
    window.open(`https://wa.me/5531999999999?text=${message}`, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium text-foreground/90">
            Nome *
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="Seu nome"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-background/50 border-border/50 focus:border-primary"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="whatsapp" className="text-sm font-medium text-foreground/90">
            WhatsApp *
          </Label>
          <Input
            id="whatsapp"
            name="whatsapp"
            placeholder="(31) 99999-9999"
            value={formData.whatsapp}
            onChange={handleChange}
            required
            className="bg-background/50 border-border/50 focus:border-primary"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="city" className="text-sm font-medium text-foreground/90">
          Cidade *
        </Label>
        <Input
          id="city"
          name="city"
          placeholder="Sete Lagoas, Prudente de Morais..."
          value={formData.city}
          onChange={handleChange}
          required
          className="bg-background/50 border-border/50 focus:border-primary"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-medium text-foreground/90">
          Mensagem (opcional)
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Descreva brevemente o que você precisa..."
          value={formData.message}
          onChange={handleChange}
          rows={3}
          className="bg-background/50 border-border/50 focus:border-primary resize-none"
        />
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <Button 
          type="submit" 
          variant="default" 
          size="lg" 
          className="flex-1"
          disabled={isSubmitting}
        >
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
          variant="whatsapp" 
          size="lg" 
          className="flex-1"
          onClick={openWhatsApp}
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp Direto
        </Button>
      </div>
    </form>
  );
};

export default QuickContactForm;
