import { useState } from 'react';
import { Send, MessageCircle, Loader2, Zap, CheckCircle, User, Phone, MapPin, Calendar, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { InputWithCheck } from '@/components/ui/input-with-check';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { usePhoneFormat } from '@/hooks/usePhoneFormat';
import { cn } from '@/lib/utils';
import { supabase } from '@/integrations/supabase/client';

// Save lead to Supabase database
const saveLeadToDatabase = async (lead: {
  equipamento: string;
  name: string;
  whatsapp: string;
  city: string;
  period?: string;
  message?: string;
}) => {
  try {
    const { error } = await supabase.from('leads').insert({
      origem: 'catalogo',
      nome: lead.name,
      whatsapp: lead.whatsapp,
      cidade: lead.city,
      item_slug: lead.equipamento,
      periodo: lead.period || null,
      mensagem: lead.message || null,
      status: 'novo',
    });

    if (error) {
      console.error('Error saving lead:', error);
    }
  } catch (err) {
    console.error('Error saving lead:', err);
  }
};

interface ProductQuoteFormProps {
  equipamentoNome: string;
  preco?: string;
}

const ProductQuoteForm = ({ equipamentoNome, preco }: ProductQuoteFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    period: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const { 
    ddi, phone, rawPhone, 
    handlePhoneChange, handleDdiChange, 
    isValidPhone, getFormattedPhone, resetPhone 
  } = usePhoneFormat();

  // Validações por campo
  const isNameValid = formData.name.trim().length >= 2;
  const isCityValid = formData.city.trim().length >= 2;
  const isPhoneValid = isValidPhone();

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!isNameValid) {
      newErrors.name = 'Informe seu nome (mínimo 2 caracteres)';
    }
    
    if (!isPhoneValid) {
      newErrors.whatsapp = 'Telefone inválido (inclua DDD)';
    }
    
    if (!isCityValid) {
      newErrors.city = 'Informe a cidade';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: 'Campos obrigatórios',
        description: 'Preencha os campos marcados corretamente.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    // Save to database
    await saveLeadToDatabase({
      equipamento: equipamentoNome,
      name: formData.name.trim(),
      whatsapp: getFormattedPhone(),
      city: formData.city.trim(),
      period: formData.period.trim() || undefined,
      message: formData.message.trim() || undefined,
    });

    toast({
      title: 'Pedido enviado!',
      description: 'Entraremos em contato pelo WhatsApp em breve.',
    });

    // Reset form
    setTimeout(() => {
      setFormData({ name: '', city: '', period: '', message: '' });
      resetPhone();
      setErrors({});
      setIsSubmitting(false);
    }, 1500);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Olá! Gostaria de um orçamento para:\n\n📦 *${equipamentoNome}*\n\n👤 Nome: ${formData.name.trim() || '(preencher)'}\n📱 WhatsApp: ${getFormattedPhone() || '(preencher)'}\n📍 Cidade: ${formData.city.trim() || '(preencher)'}\n📅 Período: ${formData.period.trim() || 'A definir'}\n${formData.message.trim() ? `💬 Obs: ${formData.message.trim()}` : ''}`
    );
    window.open(`https://wa.me/5531971067272?text=${message}`, '_blank');
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
        {/* Nome */}
        <div className="space-y-1.5">
          <Label htmlFor="pq-name" className="text-foreground text-sm flex items-center gap-2">
            <User className="w-4 h-4 text-primary" />
            Nome *
          </Label>
          <InputWithCheck
            id="pq-name"
            name="name"
            placeholder="Seu nome completo"
            value={formData.name}
            onChange={handleChange}
            maxLength={100}
            isValid={isNameValid}
            hasError={!!errors.name}
          />
          {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
        </div>

        {/* Telefone */}
        <div className="space-y-1.5">
          <Label htmlFor="pq-whatsapp" className="text-foreground text-sm flex items-center gap-2">
            <Phone className="w-4 h-4 text-primary" />
            WhatsApp *
          </Label>
          <div className="flex gap-2">
            <Input
              value={ddi}
              onChange={(e) => handleDdiChange(e.target.value)}
              className="h-10 w-16 text-center bg-muted/50 border-border/50 font-medium"
              maxLength={4}
            />
            <div className="relative flex-1">
              <Input
                id="pq-whatsapp"
                type="tel"
                inputMode="numeric"
                placeholder="(31) 99999-9999"
                value={phone}
                onChange={(e) => {
                  handlePhoneChange(e.target.value);
                  if (errors.whatsapp) setErrors((prev) => ({ ...prev, whatsapp: '' }));
                }}
                className={cn(
                  "h-10 bg-muted/50 border-border/50 focus:border-primary transition-colors",
                  errors.whatsapp && "border-red-500 focus:border-red-500",
                  isPhoneValid && !errors.whatsapp && "border-green-500/50 pr-10"
                )}
              />
              {isPhoneValid && !errors.whatsapp && (
                <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-green-500" />
              )}
            </div>
          </div>
          {errors.whatsapp && <p className="text-xs text-red-500">{errors.whatsapp}</p>}
        </div>

        {/* Cidade */}
        <div className="space-y-1.5">
          <Label htmlFor="pq-city" className="text-foreground text-sm flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            Cidade *
          </Label>
          <InputWithCheck
            id="pq-city"
            name="city"
            placeholder="Sete Lagoas, Prudente de Morais..."
            value={formData.city}
            onChange={handleChange}
            maxLength={100}
            isValid={isCityValid}
            hasError={!!errors.city}
          />
          {errors.city && <p className="text-xs text-red-500">{errors.city}</p>}
        </div>

        {/* Período */}
        <div className="space-y-1.5">
          <Label htmlFor="pq-period" className="text-foreground text-sm flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            Período de uso
          </Label>
          <Input
            id="pq-period"
            name="period"
            placeholder="Ex: 3 dias, 1 semana..."
            value={formData.period}
            onChange={handleChange}
            maxLength={100}
            className="h-10 bg-muted/50 border-border/50"
          />
        </div>

        {/* Mensagem */}
        <div className="space-y-1.5">
          <Label htmlFor="pq-message" className="text-foreground text-sm flex items-center gap-2">
            <FileText className="w-4 h-4 text-primary" />
            Mensagem (opcional)
          </Label>
          <Textarea
            id="pq-message"
            name="message"
            placeholder="Descreva brevemente o serviço..."
            value={formData.message}
            onChange={handleChange}
            rows={3}
            maxLength={500}
            className="resize-none bg-muted/50 border-border/50"
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
