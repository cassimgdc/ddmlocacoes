import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Send, MessageCircle, Loader2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const FinalCTAForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    mensagem: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nome || !formData.whatsapp) {
      toast({
        title: 'Campos obrigatórios',
        description: 'Informe seu nome e WhatsApp.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    const message = encodeURIComponent(
      `Olá! Vim pelo site.\n\nMeu nome é ${formData.nome}.\n${formData.mensagem ? `Mensagem: ${formData.mensagem}` : ''}`
    );

    window.open(`https://wa.me/5531971067272?text=${message}`, '_blank');

    toast({
      title: 'WhatsApp aberto!',
      description: 'Continue a conversa pelo WhatsApp.',
    });

    setIsSubmitting(false);
    setFormData({ nome: '', whatsapp: '', mensagem: '' });
  };

  return (
    <div className="bg-primary text-primary-foreground rounded-xl p-6 md:p-8">
      <div className="grid lg:grid-cols-2 gap-6 items-center">
        {/* Left - Text */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Pronto para começar?</h2>
          <p className="text-primary-foreground/80 text-sm">
            Preencha seus dados e receba um orçamento rápido pelo WhatsApp.
          </p>
        </div>

        {/* Right - Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <Label htmlFor="cta-nome" className="text-sm text-primary-foreground/80">Nome *</Label>
              <Input
                id="cta-nome"
                placeholder="Seu nome"
                value={formData.nome}
                onChange={(e) => handleChange('nome', e.target.value)}
                className="mt-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
            </div>
            <div>
              <Label htmlFor="cta-whatsapp" className="text-sm text-primary-foreground/80">WhatsApp *</Label>
              <Input
                id="cta-whatsapp"
                placeholder="(31) 99999-9999"
                value={formData.whatsapp}
                onChange={(e) => handleChange('whatsapp', e.target.value)}
                className="mt-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="cta-mensagem" className="text-sm text-primary-foreground/80">Mensagem (opcional)</Label>
            <Textarea
              id="cta-mensagem"
              placeholder="Descreva o que você precisa..."
              value={formData.mensagem}
              onChange={(e) => handleChange('mensagem', e.target.value)}
              rows={2}
              className="mt-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 resize-none"
            />
          </div>

          <Button
            type="submit"
            variant="secondary"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <MessageCircle className="w-4 h-4" />
            )}
            Enviar e Abrir WhatsApp
          </Button>
        </form>
      </div>
    </div>
  );
};

export default FinalCTAForm;
