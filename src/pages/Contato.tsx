import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
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
import Layout from '@/components/layout/Layout';
import {
  MessageCircle,
  MapPin,
  Clock,
  ArrowRight,
  Loader2,
  Camera,
  User,
  Phone,
  CheckCircle,
  Wrench,
} from 'lucide-react';
import { usePhoneFormat } from '@/hooks/usePhoneFormat';
import { useSpamProtection } from '@/hooks/useSpamProtection';
import { toast } from '@/hooks/use-toast';

const WEBHOOK_URL = 'https://n8n2.easybr.site/webhook/14f30970-8945-456f-9c1e-eba82b566d91';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    local: '',
    tipoServico: '',
    detalhes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { 
    ddi,
    phone, 
    rawPhone, 
    handlePhoneChange,
    handleDdiChange,
    isValidPhone, 
    getPhoneForSubmit,
    getFormattedPhone,
    resetPhone 
  } = usePhoneFormat();

  const {
    honeypot,
    setHoneypot,
    checkCanSubmit,
    registerSubmit,
    validateData,
  } = useSpamProtection();

  const serviceTypes = [
    'Abertura de valas',
    'Terraplanagem',
    'Limpeza de lote/terreno',
    'Escavação (fossa/cisterna/fundação)',
    'Serviços rurais',
    'Carregamento de material',
    'Outro',
  ];

  const formatWhatsAppMessage = () => {
    const lines = [
      'Ola! Quero orcamento.',
      '',
      `Nome: ${formData.nome}`,
      `Telefone: ${getFormattedPhone()}`,
      `Local: ${formData.local}`,
      `Servico: ${formData.tipoServico}`,
    ];

    if (formData.detalhes) {
      lines.push(`Detalhes: ${formData.detalhes}`);
    }

    return encodeURIComponent(lines.join('\n'));
  };

  const sendToWebhook = async (): Promise<boolean> => {
    try {
      const payload = {
        nome: formData.nome.trim(),
        telefone: getFormattedPhone(),
        telefone_raw: getPhoneForSubmit(),
        local: formData.local.trim(),
        tipo_servico: formData.tipoServico,
        detalhes: formData.detalhes.trim() || null,
        data_hora: new Date().toISOString(),
        origem: 'site',
        userAgent: navigator.userAgent || null,
      };

      // Usando fetch com timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      return response.ok;
    } catch (error) {
      console.error('Webhook error:', error);
      return false;
    }
  };

  const getWhatsAppUrl = () => {
    const message = formatWhatsAppMessage();
    return `https://wa.me/5531971067272?text=${message}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação básica
    if (!formData.nome || !formData.local || !formData.tipoServico || !isValidPhone()) {
      toast({
        title: 'Campos obrigatórios',
        description: 'Preencha todos os campos obrigatórios.',
        variant: 'destructive',
      });
      return;
    }

    // Validação anti-spam
    const dataValidation = validateData(formData.nome, rawPhone);
    if (!dataValidation.canSubmit) {
      toast({
        title: 'Erro de validação',
        description: dataValidation.errorMessage,
        variant: 'destructive',
      });
      return;
    }

    const spamCheck = checkCanSubmit(rawPhone);
    if (!spamCheck.canSubmit) {
      toast({
        title: 'Aguarde',
        description: spamCheck.errorMessage,
        variant: 'destructive',
      });
      return;
    }

    // IMPORTANTE: Abre WhatsApp IMEDIATAMENTE no evento do clique
    // (antes de qualquer async) para evitar bloqueio de popup
    const whatsappUrl = getWhatsAppUrl();
    window.open(whatsappUrl, '_blank');

    setIsSubmitting(true);

    // Registra o envio para rate limiting
    registerSubmit(rawPhone);

    // Dispara webhook em background
    sendToWebhook();

    // Marca como sucesso
    setIsSuccess(true);
    
    toast({
      title: '✅ Formulário enviado!',
      description: 'WhatsApp aberto em nova aba.',
    });

    setIsSubmitting(false);

    // Reset após sucesso (após 5s para o usuário ver a mensagem)
    setTimeout(() => {
      setFormData({ nome: '', local: '', tipoServico: '', detalhes: '' });
      resetPhone();
      setIsSuccess(false);
    }, 5000);
  };

  const isFormValid = formData.nome && formData.local && formData.tipoServico && isValidPhone();

  return (
    <Layout>
      <Helmet>
        <title>Solicitar Orçamento | DDM Locações - Retroescavadeira Sete Lagoas</title>
        <meta name="description" content="Solicite orçamento para aluguel de retroescavadeira em Sete Lagoas. Atendimento rápido pelo WhatsApp. Resposta em minutos." />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="canonical" href="https://ddmlocacoes.lovable.app/contato" />
      </Helmet>
      
      {/* Header */}
      <section className="pt-20 pb-4 md:pt-32 md:pb-8">
        <div className="container-ddm">
          <div className="max-w-xl mx-auto text-center animate-fade-in">
            <h1 className="text-2xl md:text-4xl font-black text-foreground mb-2 md:mb-4">
              Solicitar Orçamento
            </h1>
            <p className="text-muted-foreground text-sm md:text-base">
              Preencha seus dados e você será direcionado ao WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Formulário Principal */}
      <section className="pb-8 md:pb-16">
        <div className="container-ddm">
          <div className="max-w-lg mx-auto">
            {/* Card do Formulário */}
            <div className="relative animate-fade-in-up">
              {/* Glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 rounded-3xl blur-xl opacity-50" />
              
              <div className="relative card-premium p-6 md:p-8">
                {/* Mensagem de sucesso */}
                {isSuccess && (
                  <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-xl flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                    <p className="text-sm text-foreground">
                      Formulário enviado! Redirecionando ao WhatsApp...
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot - campo invisível para bots */}
                  <input
                    type="text"
                    name="website"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    style={{ 
                      position: 'absolute', 
                      left: '-9999px', 
                      opacity: 0,
                      height: 0,
                      width: 0,
                    }}
                  />

                  {/* Nome */}
                  <div className="space-y-1.5">
                    <Label htmlFor="nome" className="text-sm flex items-center gap-2">
                      <User className="w-4 h-4 text-primary" />
                      Seu nome *
                    </Label>
                    <Input
                      id="nome"
                      placeholder="Digite seu nome completo"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className="h-12 text-base bg-muted/50 border-border/50 focus:border-primary"
                      required
                      maxLength={100}
                      autoComplete="name"
                    />
                  </div>

                  {/* Telefone com DDI separado */}
                  <div className="space-y-1.5">
                    <Label htmlFor="telefone" className="text-sm flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary" />
                      Telefone (WhatsApp) *
                    </Label>
                    <div className="flex gap-2">
                      {/* DDI */}
                      <Input
                        id="ddi"
                        value={ddi}
                        onChange={(e) => handleDdiChange(e.target.value)}
                        className="h-12 w-20 text-base text-center bg-muted/50 border-border/50 focus:border-primary font-medium"
                        maxLength={4}
                      />
                      {/* Telefone */}
                      <Input
                        id="telefone"
                        type="tel"
                        inputMode="numeric"
                        placeholder="(31) 99999-9999"
                        value={phone}
                        onChange={(e) => handlePhoneChange(e.target.value)}
                        className="h-12 flex-1 text-base bg-muted/50 border-border/50 focus:border-primary"
                        autoComplete="tel-national"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Digite DDD + número. Ex: (31) 97106-7272
                    </p>
                  </div>

                  {/* Local */}
                  <div className="space-y-1.5">
                    <Label htmlFor="local" className="text-sm flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      Local do serviço *
                    </Label>
                    <Input
                      id="local"
                      placeholder="Ex: Sete Lagoas, Bairro Centro"
                      value={formData.local}
                      onChange={(e) => setFormData({ ...formData, local: e.target.value })}
                      className="h-12 text-base bg-muted/50 border-border/50 focus:border-primary"
                      required
                      maxLength={200}
                      autoComplete="address-level2"
                    />
                  </div>

                  {/* Tipo de Serviço */}
                  <div className="space-y-1.5">
                    <Label className="text-sm flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-primary" />
                      Tipo de serviço *
                    </Label>
                    <Select
                      value={formData.tipoServico}
                      onValueChange={(value) => setFormData({ ...formData, tipoServico: value })}
                      required
                    >
                      <SelectTrigger className="h-12 text-base bg-muted/50 border-border/50 focus:border-primary">
                        <SelectValue placeholder="Selecione o serviço" />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border">
                        {serviceTypes.map((type) => (
                          <SelectItem key={type} value={type} className="text-base">
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Detalhes */}
                  <div className="space-y-1.5">
                    <Label htmlFor="detalhes" className="text-sm">Detalhes (opcional)</Label>
                    <Textarea
                      id="detalhes"
                      placeholder="Descreva brevemente o serviço..."
                      rows={3}
                      value={formData.detalhes}
                      onChange={(e) => setFormData({ ...formData, detalhes: e.target.value })}
                      className="text-base resize-none bg-muted/50 border-border/50 focus:border-primary"
                      maxLength={500}
                    />
                  </div>

                  {/* Dica */}
                  <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-xl text-xs">
                    <Camera className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      Você poderá anexar fotos ou vídeos do terreno na conversa do WhatsApp.
                    </p>
                  </div>

                  {/* Botão de envio */}
                  <Button 
                    type="submit" 
                    variant="cta" 
                    size="lg" 
                    className="w-full h-14 text-base group touch-feedback"
                    disabled={isSubmitting || !isFormValid}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <MessageCircle className="w-5 h-5" />
                        Enviar e Abrir WhatsApp
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Informações secundárias */}
            <div className="mt-8 grid grid-cols-3 gap-3 text-center animate-fade-in stagger-delay-2">
              <div className="p-3 rounded-xl bg-muted/20">
                <MessageCircle className="w-5 h-5 text-green-600 dark:text-green-400 mx-auto mb-1" />
                <p className="text-xs text-muted-foreground">Resposta rápida</p>
              </div>
              <div className="p-3 rounded-xl bg-muted/20">
                <MapPin className="w-5 h-5 text-primary mx-auto mb-1" />
                <p className="text-xs text-muted-foreground">Sete Lagoas</p>
              </div>
              <div className="p-3 rounded-xl bg-muted/20">
                <Clock className="w-5 h-5 text-primary mx-auto mb-1" />
                <p className="text-xs text-muted-foreground">Seg-Sáb</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer for fixed bottom CTA */}
      <div className="h-20 md:hidden" />
    </Layout>
  );
};

export default Contato;
