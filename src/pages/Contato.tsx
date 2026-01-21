import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
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
import Layout from '@/components/layout/Layout';
import {
  MessageCircle,
  MapPin,
  Clock,
  ArrowRight,
  Loader2,
  User,
  Phone,
  CheckCircle,
  Wrench,
} from 'lucide-react';
import { usePhoneFormat } from '@/hooks/usePhoneFormat';
import { useSpamProtection } from '@/hooks/useSpamProtection';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

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

  // Validações por campo para checkmarks
  const isNomeValid = formData.nome.trim().length >= 2;
  const isLocalValid = formData.local.trim().length > 0;
  const isTipoServicoValid = formData.tipoServico !== '';
  const isTelefoneValid = isValidPhone();

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
          <div className="max-w-md mx-auto">
            {/* Card do Formulário */}
            <div className="relative animate-fade-in-up">
              {/* Glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 rounded-3xl blur-xl opacity-40 dark:opacity-50" />
              
              <div className="relative card-premium p-5 md:p-6">
                {/* Mensagem de sucesso */}
                {isSuccess && (
                  <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-xl flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                    <p className="text-sm text-foreground">
                      Formulário enviado! Redirecionando ao WhatsApp...
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-3">
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
                  <div className="space-y-1">
                    <Label htmlFor="nome" className="text-xs flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-primary" />
                      Seu nome *
                    </Label>
                    <InputWithCheck
                      id="nome"
                      placeholder="Nome completo"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className="h-10 text-sm bg-muted/50 border-border/50 focus:border-primary"
                      required
                      maxLength={100}
                      autoComplete="name"
                      isValid={isNomeValid}
                    />
                  </div>

                  {/* Telefone com DDI separado */}
                  <div className="space-y-1">
                    <Label htmlFor="telefone" className="text-xs flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-primary" />
                      Telefone (WhatsApp) *
                    </Label>
                    <div className="flex gap-2">
                      <Input
                        id="ddi"
                        value={ddi}
                        onChange={(e) => handleDdiChange(e.target.value)}
                        className="h-10 w-16 text-sm text-center bg-muted/50 border-border/50 focus:border-primary font-medium"
                        maxLength={4}
                      />
                      <div className="relative flex-1">
                        <Input
                          id="telefone"
                          type="tel"
                          inputMode="numeric"
                          placeholder="(31) 99999-9999"
                          value={phone}
                          onChange={(e) => handlePhoneChange(e.target.value)}
                          className={cn(
                            "h-10 text-sm bg-muted/50 border-border/50 focus:border-primary",
                            isTelefoneValid && "border-green-500/50 pr-10"
                          )}
                          autoComplete="tel-national"
                        />
                        {isTelefoneValid && (
                          <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-green-500 animate-scale-in" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Local */}
                  <div className="space-y-1">
                    <Label htmlFor="local" className="text-xs flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-primary" />
                      Local do serviço *
                    </Label>
                    <InputWithCheck
                      id="local"
                      placeholder="Ex: Sete Lagoas, Bairro Centro"
                      value={formData.local}
                      onChange={(e) => setFormData({ ...formData, local: e.target.value })}
                      className="h-10 text-sm bg-muted/50 border-border/50 focus:border-primary"
                      required
                      maxLength={200}
                      autoComplete="address-level2"
                      isValid={isLocalValid}
                    />
                  </div>

                  {/* Tipo de Serviço */}
                  <div className="space-y-1">
                    <Label className="text-xs flex items-center gap-1.5">
                      <Wrench className="w-3.5 h-3.5 text-primary" />
                      Tipo de serviço *
                    </Label>
                    <div className="relative">
                      <Select
                        value={formData.tipoServico}
                        onValueChange={(value) => setFormData({ ...formData, tipoServico: value })}
                        required
                      >
                        <SelectTrigger className={cn(
                          "h-10 text-sm bg-muted/50 border-border/50 focus:border-primary",
                          isTipoServicoValid && "border-green-500/50 pr-10"
                        )}>
                          <SelectValue placeholder="Selecione o serviço" />
                        </SelectTrigger>
                        <SelectContent className="bg-card border-border">
                          {serviceTypes.map((type) => (
                            <SelectItem key={type} value={type} className="text-sm">
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {isTipoServicoValid && (
                        <CheckCircle className="absolute right-10 top-1/2 -translate-y-1/2 w-4 h-4 text-green-500 animate-scale-in pointer-events-none" />
                      )}
                    </div>
                  </div>

                  {/* Detalhes */}
                  <div className="space-y-1">
                    <Label htmlFor="detalhes" className="text-xs">Detalhes (opcional)</Label>
                    <Textarea
                      id="detalhes"
                      placeholder="Descreva brevemente..."
                      rows={2}
                      value={formData.detalhes}
                      onChange={(e) => setFormData({ ...formData, detalhes: e.target.value })}
                      className="text-sm resize-none bg-muted/50 border-border/50 focus:border-primary"
                      maxLength={500}
                    />
                  </div>

                  {/* Botão de envio */}
                  <Button 
                    type="submit" 
                    variant="cta" 
                    size="default" 
                    className="w-full h-11 text-sm group touch-feedback mt-1"
                    disabled={isSubmitting || !isFormValid}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <MessageCircle className="w-4 h-4" />
                        Enviar e Abrir WhatsApp
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>

                  {/* Dica compacta */}
                  <p className="text-center text-xs text-muted-foreground">
                    📷 Você poderá anexar fotos na conversa do WhatsApp
                  </p>
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
                <p className="text-xs text-foreground font-medium">Sete Lagoas e região</p>
              </div>
              <div className="p-3 rounded-xl bg-muted/20">
                <Clock className="w-5 h-5 text-primary mx-auto mb-1" />
                <p className="text-xs text-muted-foreground">Seg-Sáb</p>
              </div>
            </div>

            {/* Área de Atendimento */}
            <div className="mt-8 p-5 rounded-2xl bg-muted/30 border border-border/50 animate-fade-in stagger-delay-3">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm">Área de Atendimento</h3>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4">
                Atendemos <span className="text-foreground font-semibold">Sete Lagoas</span> e cidades vizinhas:
              </p>
              
              <div className="flex flex-wrap gap-2">
                {[
                  'Sete Lagoas',
                  'Prudente de Morais',
                  'Capim Branco',
                  'Funilândia',
                  'Jequitibá',
                  'Paraopeba',
                  'Caetanópolis',
                  'Baldim',
                ].map((city, index) => (
                  <span 
                    key={city}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                      index === 0 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                    }`}
                  >
                    {city}
                  </span>
                ))}
              </div>
              
              <p className="text-xs text-muted-foreground mt-4 pt-3 border-t border-border/50">
                📍 Consulte disponibilidade para outras localidades
              </p>
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
