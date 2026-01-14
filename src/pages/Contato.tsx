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
    phone, 
    rawPhone, 
    handlePhoneChange, 
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

  const sendToWebhook = async () => {
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

      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        mode: 'no-cors', // Evita erros de CORS
      });
    } catch (error) {
      // Silently fail - webhook is secondary
      console.error('Webhook error:', error);
    }
  };

  const openWhatsApp = () => {
    const message = formatWhatsAppMessage();
    const whatsappUrl = `https://wa.me/5531971067272?text=${message}`;

    // iOS/Safari pode bloquear popups; fallback para navegação direta
    const w = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    if (!w) {
      window.location.assign(whatsappUrl);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
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

    setIsSubmitting(true);

    // Registra o envio para rate limiting
    registerSubmit(rawPhone);

    // Envia para webhook e abre WhatsApp em paralelo
    await Promise.all([
      sendToWebhook(),
      new Promise<void>((resolve) => {
        openWhatsApp();
        resolve();
      }),
    ]);

    setIsSuccess(true);
    setIsSubmitting(false);

    toast({
      title: '✅ Formulário enviado!',
      description: 'Em instantes você será atendido pelo WhatsApp.',
    });

    // Reset após sucesso (após 3s para o usuário ver a mensagem)
    setTimeout(() => {
      setFormData({ nome: '', local: '', tipoServico: '', detalhes: '' });
      resetPhone();
      setIsSuccess(false);
    }, 3000);
  };

  const isFormValid = formData.nome && formData.local && formData.tipoServico && isValidPhone();

  return (
    <Layout>
      <Helmet>
        <title>Contato e Orçamento | DDM Locações - Retroescavadeira Sete Lagoas</title>
        <meta name="description" content="Solicite orçamento para aluguel de retroescavadeira em Sete Lagoas. Atendimento rápido pelo WhatsApp (31) 97106-7272. Resposta em minutos." />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="canonical" href="https://ddmlocacoes.lovable.app/contato" />
      </Helmet>
      
      {/* Header */}
      <section className="pt-20 pb-4 md:pt-36 md:pb-16">
        <div className="container-ddm">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-2xl md:text-4xl font-black text-foreground mb-2 md:mb-4">
              Solicitar Orçamento
            </h1>
            <p className="text-muted-foreground text-sm md:text-lg">
              Preencha o formulário abaixo e você será direcionado ao WhatsApp para finalizar o atendimento.
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="pb-8 md:pb-16">
        <div className="container-ddm">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Formulário */}
            <div className="animate-fade-in-up order-2 lg:order-1">
              <h2 className="text-base md:text-xl font-bold text-foreground mb-4 md:mb-6">
                Dados para Orçamento
              </h2>

              {/* Mensagem de sucesso */}
              {isSuccess && (
                <div className="mb-6 p-4 bg-ddm-success/10 border border-ddm-success/30 rounded-xl flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-ddm-success flex-shrink-0" />
                  <p className="text-sm text-foreground">
                    Formulário enviado com sucesso! Em instantes você será atendido pelo WhatsApp.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
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
                <div className="space-y-1.5 md:space-y-2">
                  <Label htmlFor="nome" className="text-sm flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    Seu nome *
                  </Label>
                  <Input
                    id="nome"
                    placeholder="Digite seu nome completo"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    className="h-11 md:h-12 text-base"
                    required
                    maxLength={100}
                  />
                </div>

                {/* Telefone */}
                <div className="space-y-1.5 md:space-y-2">
                  <Label htmlFor="telefone" className="text-sm flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    Telefone (WhatsApp) *
                  </Label>
                  <Input
                    id="telefone"
                    type="tel"
                    inputMode="numeric"
                    placeholder="+55 (31) 99999-9999"
                    value={phone}
                    onChange={(e) => handlePhoneChange(e.target.value)}
                    className="h-11 md:h-12 text-base"
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    Digite apenas números. O DDD é obrigatório.
                  </p>
                </div>

                {/* Local */}
                <div className="space-y-1.5 md:space-y-2">
                  <Label htmlFor="local" className="text-sm flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    Local do serviço *
                  </Label>
                  <Input
                    id="local"
                    placeholder="Ex: Sete Lagoas, Bairro Centro"
                    value={formData.local}
                    onChange={(e) => setFormData({ ...formData, local: e.target.value })}
                    className="h-11 md:h-12 text-base"
                    required
                    maxLength={200}
                  />
                </div>

                {/* Tipo de Serviço */}
                <div className="space-y-1.5 md:space-y-2">
                  <Label className="text-sm">Tipo de serviço *</Label>
                  <Select
                    value={formData.tipoServico}
                    onValueChange={(value) => setFormData({ ...formData, tipoServico: value })}
                    required
                  >
                    <SelectTrigger className="h-11 md:h-12 text-base">
                      <SelectValue placeholder="Selecione" />
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
                <div className="space-y-1.5 md:space-y-2">
                  <Label htmlFor="detalhes" className="text-sm">Detalhes (opcional)</Label>
                  <Textarea
                    id="detalhes"
                    placeholder="Descreva o serviço que precisa..."
                    rows={3}
                    value={formData.detalhes}
                    onChange={(e) => setFormData({ ...formData, detalhes: e.target.value })}
                    className="text-base resize-none"
                    maxLength={500}
                  />
                </div>

                {/* Dica */}
                <div className="flex items-start gap-3 p-3 md:p-4 bg-muted/50 rounded-xl text-xs md:text-sm">
                  <Camera className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">
                    Após enviar, você pode anexar fotos ou vídeos do terreno 
                    na conversa do WhatsApp.
                  </p>
                </div>

                {/* Botão de envio */}
                <Button 
                  type="submit" 
                  variant="cta" 
                  size="lg" 
                  className="w-full group touch-feedback"
                  disabled={isSubmitting || !isFormValid}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 md:w-5 md:h-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                      Enviar Formulário
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Informações */}
            <div className="animate-fade-in-up stagger-delay-2 order-1 lg:order-2">
              <h2 className="text-base md:text-xl font-bold text-foreground mb-4 md:mb-6">
                Informações
              </h2>

              <div className="space-y-2 md:space-y-4">
                <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 card-premium">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-ddm-whatsapp rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-foreground text-sm md:text-base">
                      Atendimento via WhatsApp
                    </p>
                    <p className="text-muted-foreground text-xs md:text-sm">Resposta rápida</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 card-premium">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-muted rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-foreground text-sm md:text-base">Sete Lagoas - MG</p>
                    <p className="text-muted-foreground text-xs md:text-sm">E cidades da região</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 card-premium">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-muted rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-foreground text-sm md:text-base">Seg - Sáb: 7h às 18h</p>
                    <p className="text-muted-foreground text-xs md:text-sm">Horário de atendimento</p>
                  </div>
                </div>
              </div>

              {/* Dica */}
              <div className="mt-5 md:mt-8 p-4 md:p-6 bg-muted/30 rounded-xl">
                <h3 className="font-bold text-foreground text-sm md:text-base mb-2 md:mb-3">
                  Para agilizar seu orçamento:
                </h3>
                <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-muted-foreground">
                  <li>• Informe o local exato do serviço</li>
                  <li>• Descreva o tipo de trabalho necessário</li>
                  <li>• Envie fotos ou vídeos do terreno</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer for fixed bottom CTA */}
      <div className="h-16 md:hidden" />
    </Layout>
  );
};

export default Contato;
