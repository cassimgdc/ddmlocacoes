import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { InputWithCheck } from '@/components/ui/input-with-check';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { MessageCircle, MapPin, Wrench, FileText, ArrowRight, Loader2, User, Phone, CheckCircle } from 'lucide-react';
import { usePhoneFormat } from '@/hooks/usePhoneFormat';
import { useSpamProtection } from '@/hooks/useSpamProtection';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const WEBHOOK_URL = 'https://n8n2.easybr.site/webhook/14f30970-8945-456f-9c1e-eba82b566d91';

interface QuickQuoteFormProps {
  equipmentName?: string;
}

const QuickQuoteForm = ({ equipmentName }: QuickQuoteFormProps) => {
  const [formData, setFormData] = useState({
    nome: '',
    local: '',
    tipoServico: '',
    detalhes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const { 
    ddi, phone, rawPhone, 
    handlePhoneChange, handleDdiChange, 
    isValidPhone, getPhoneForSubmit, getFormattedPhone, resetPhone 
  } = usePhoneFormat();

  const {
    honeypot, setHoneypot,
    checkCanSubmit, registerSubmit, validateData,
  } = useSpamProtection();

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
      '*Olá! Quero orçamento.*',
      '',
      `*Nome:* ${formData.nome.trim()}`,
      `*Telefone:* ${getFormattedPhone()}`,
      `*Local:* ${formData.local.trim()}`,
      `*Serviço:* ${formData.tipoServico}`,
    ];

    if (equipmentName) {
      lines.push(`*Equipamento:* ${equipmentName}`);
    }

    if (formData.detalhes.trim()) {
      lines.push(`*Detalhes:* ${formData.detalhes.trim()}`);
    }

    lines.push('', 'Posso enviar fotos/vídeo em seguida.');

    return encodeURIComponent(lines.join('\n'));
  };

  const sendToWebhook = async () => {
    try {
      const payload = {
        nome: formData.nome.trim(),
        telefone: getFormattedPhone(),
        telefone_raw: getPhoneForSubmit(),
        local: formData.local.trim(),
        tipo_servico: formData.tipoServico,
        equipamento: equipmentName || null,
        detalhes: formData.detalhes.trim() || null,
        data_hora: new Date().toISOString(),
        origem: equipmentName ? 'site-equipamento' : 'site-formulario-rapido',
      };

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);

      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
    } catch {
      // Silently fail - WhatsApp is the primary channel
    }
  };

  // Validações por campo para checkmarks
  const isNomeValid = formData.nome.trim().length >= 2;
  const isLocalValid = formData.local.trim().length > 0;
  const isTipoServicoValid = formData.tipoServico !== '';
  const isTelefoneValid = isValidPhone();

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!isNomeValid) {
      newErrors.nome = 'Informe seu nome';
    }
    
    if (!isTelefoneValid) {
      newErrors.telefone = 'Telefone inválido';
    }
    
    if (!isLocalValid) {
      newErrors.local = 'Informe o local do serviço';
    }
    
    if (!isTipoServicoValid) {
      newErrors.tipoServico = 'Selecione o tipo de serviço';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação visual
    if (!validateForm()) {
      toast({
        title: 'Campos obrigatórios',
        description: 'Preencha todos os campos marcados.',
        variant: 'destructive',
      });
      return;
    }

    // Validação anti-spam
    const dataValidation = validateData(formData.nome, rawPhone);
    if (!dataValidation.canSubmit) {
      toast({ title: 'Erro', description: dataValidation.errorMessage, variant: 'destructive' });
      return;
    }

    const spamCheck = checkCanSubmit(rawPhone);
    if (!spamCheck.canSubmit) {
      toast({ title: 'Aguarde', description: spamCheck.errorMessage, variant: 'destructive' });
      return;
    }

    setIsSubmitting(true);

    // Abre WhatsApp imediatamente
    const message = formatWhatsAppMessage();
    const whatsappUrl = `https://wa.me/5531971067272?text=${message}`;
    const w = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    if (!w) {
      window.location.assign(whatsappUrl);
    }

    registerSubmit(rawPhone);
    sendToWebhook();

    toast({ 
      title: 'Enviado!', 
      description: 'WhatsApp aberto em nova aba.',
    });

    // Reset após delay
    setTimeout(() => {
      setFormData({ nome: '', local: '', tipoServico: '', detalhes: '' });
      resetPhone();
      setErrors({});
      setIsSubmitting(false);
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="relative">
      {/* Glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 rounded-3xl blur-xl opacity-50" />
      
      <div className="relative card-premium p-6 lg:p-8">
        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-2">
            ⚡ Sem compromisso
          </span>
          {equipmentName && (
            <p className="text-primary font-medium text-sm mb-1">🚜 {equipmentName}</p>
          )}
          <p className="text-muted-foreground text-sm">
            Preencha e envie direto para nosso WhatsApp
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Honeypot anti-spam */}
          <input
            type="text"
            name="website"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, width: 0 }}
          />

          {/* Nome */}
          <div className="space-y-1.5">
            <Label htmlFor="nome" className="text-foreground text-sm flex items-center gap-2">
              <User className="w-4 h-4 text-primary" />
              Seu nome *
            </Label>
            <InputWithCheck
              id="nome"
              placeholder="Nome completo"
              value={formData.nome}
              onChange={(e) => handleInputChange('nome', e.target.value)}
              className="h-11 bg-muted/50 border-border/50 focus:border-primary transition-colors"
              maxLength={100}
              isValid={isNomeValid}
              hasError={!!errors.nome}
            />
            {errors.nome && (
              <p className="text-xs text-red-500">{errors.nome}</p>
            )}
          </div>

          {/* Telefone */}
          <div className="space-y-1.5">
            <Label htmlFor="telefone" className="text-foreground text-sm flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              Telefone (WhatsApp) *
            </Label>
            <div className="flex gap-2">
              <Input
                value={ddi}
                onChange={(e) => handleDdiChange(e.target.value)}
                className="h-11 w-16 text-center bg-muted/50 border-border/50 font-medium"
                maxLength={4}
              />
              <div className="relative flex-1">
                <Input
                  id="telefone"
                  type="tel"
                  inputMode="numeric"
                  placeholder="(31) 99999-9999"
                  value={phone}
                  onChange={(e) => {
                    handlePhoneChange(e.target.value);
                    if (errors.telefone) setErrors((prev) => ({ ...prev, telefone: '' }));
                  }}
                  className={cn(
                    "h-11 bg-muted/50 border-border/50 focus:border-primary transition-colors",
                    errors.telefone && "border-red-500 focus:border-red-500",
                    isTelefoneValid && !errors.telefone && "border-green-500/50 pr-10"
                  )}
                />
                {isTelefoneValid && !errors.telefone && (
                  <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-green-500 animate-scale-in" />
                )}
              </div>
            </div>
            {errors.telefone && (
              <p className="text-xs text-red-500">{errors.telefone}</p>
            )}
          </div>

          {/* Local */}
          <div className="space-y-1.5">
            <Label htmlFor="local" className="text-foreground text-sm flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              Local do serviço *
            </Label>
            <InputWithCheck
              id="local"
              placeholder="Ex: Sete Lagoas, Bairro Centro"
              value={formData.local}
              onChange={(e) => handleInputChange('local', e.target.value)}
              className="h-11 bg-muted/50 border-border/50 focus:border-primary transition-colors"
              maxLength={200}
              isValid={isLocalValid}
              hasError={!!errors.local}
            />
            {errors.local && (
              <p className="text-xs text-red-500">{errors.local}</p>
            )}
          </div>

          {/* Tipo de Serviço */}
          <div className="space-y-1.5">
            <Label className="text-foreground text-sm flex items-center gap-2">
              <Wrench className="w-4 h-4 text-primary" />
              Tipo de serviço *
            </Label>
            <div className="relative">
              <Select
                value={formData.tipoServico}
                onValueChange={(value) => handleInputChange('tipoServico', value)}
              >
                <SelectTrigger 
                  className={cn(
                    "h-11 bg-muted/50 border-border/50 focus:border-primary transition-colors",
                    errors.tipoServico && "border-red-500 focus:border-red-500",
                    isTipoServicoValid && !errors.tipoServico && "border-green-500/50 pr-10"
                  )}
                >
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
              {isTipoServicoValid && !errors.tipoServico && (
                <CheckCircle className="absolute right-10 top-1/2 -translate-y-1/2 w-4 h-4 text-green-500 animate-scale-in pointer-events-none" />
              )}
            </div>
            {errors.tipoServico && (
              <p className="text-xs text-red-500">{errors.tipoServico}</p>
            )}
          </div>

          {/* Detalhes */}
          <div className="space-y-1.5">
            <Label htmlFor="detalhes" className="text-foreground text-sm flex items-center gap-2">
              <FileText className="w-4 h-4 text-primary" />
              Detalhes (opcional)
            </Label>
            <Textarea
              id="detalhes"
              placeholder="Descreva brevemente o serviço..."
              rows={3}
              value={formData.detalhes}
              onChange={(e) => handleInputChange('detalhes', e.target.value)}
              className="bg-muted/50 border-border/50 focus:border-primary transition-colors resize-none"
              maxLength={500}
            />
          </div>

          {/* Submit */}
          <Button 
            type="submit" 
            variant="whatsapp" 
            size="xl" 
            className="w-full group"
            disabled={isSubmitting}
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
