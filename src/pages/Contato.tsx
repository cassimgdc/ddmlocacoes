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
import PageHeaderCompact from '@/components/layout/PageHeaderCompact';
import {
  MessageCircle,
  MapPin,
  Clock,
  Loader2,
  User,
  Phone,
  CheckCircle,
  Mail,
  Building2,
  Calendar,
  FileText,
} from 'lucide-react';
import { usePhoneFormat } from '@/hooks/usePhoneFormat';
import { useSpamProtection } from '@/hooks/useSpamProtection';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { supabase } from '@/integrations/supabase/client';

const WEBHOOK_URL = 'https://n8n2.easybr.site/webhook/14f30970-8945-456f-9c1e-eba82b566d91';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    email: '',
    cidade: '',
    itensInteresse: '',
    periodo: '',
    mensagem: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const { 
    ddi,
    phone, 
    rawPhone, 
    handlePhoneChange,
    handleDdiChange,
    isValidPhone, 
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
    'Retroescavadeira Case 580M',
    'Abertura de valas',
    'Terraplanagem e nivelamento',
    'Limpeza de lote/terreno',
    'Escavação (fossa/cisterna/fundação)',
    'Serviços rurais (barraginhas, açudes)',
    'Carregamento de material',
    'Outro serviço',
  ];

  // Validações por campo para checkmarks
  const isNomeValid = formData.nome.trim().length >= 2;
  const isCidadeValid = formData.cidade.trim().length >= 2;
  const isTelefoneValid = isValidPhone();
  const isItensValid = formData.itensInteresse !== '';

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      value: '(31) 97106-7272',
      href: 'tel:+5531971067272',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '(31) 97106-7272',
      href: 'https://wa.me/5531971067272',
    },
    {
      icon: MapPin,
      title: 'Região',
      value: 'Sete Lagoas e região',
    },
    {
      icon: Clock,
      title: 'Atendimento',
      value: 'Seg-Sáb: 7h-18h',
    },
  ];

  const formatWhatsAppMessage = () => {
    const lines = [
      'Olá! Quero um orçamento.',
      '',
      `Meu nome é ${formData.nome.trim()}.`,
      `Tenho interesse em: ${formData.itensInteresse}.`,
      `Período: ${formData.periodo.trim() || 'A definir'}.`,
      `Cidade: ${formData.cidade.trim()}.`,
    ];

    if (formData.empresa.trim()) {
      lines.push(`Empresa: ${formData.empresa.trim()}`);
    }

    if (formData.mensagem.trim()) {
      lines.push(`Observações: ${formData.mensagem.trim()}`);
    }

    return encodeURIComponent(lines.join('\n'));
  };

  const saveLeadToDatabase = async () => {
    try {
      const { error } = await supabase.from('leads').insert({
        origem: 'contato',
        nome: formData.nome.trim(),
        whatsapp: getFormattedPhone(),
        email: formData.email.trim() || null,
        cidade: formData.cidade.trim(),
        empresa: formData.empresa.trim() || null,
        item_slug: formData.itensInteresse || null,
        periodo: formData.periodo.trim() || null,
        mensagem: formData.mensagem.trim() || null,
        status: 'novo',
      });

      if (error) {
        console.error('Error saving lead:', error);
      }
    } catch (err) {
      console.error('Error saving lead:', err);
    }
  };

  const sendToWebhook = async () => {
    try {
      const payload = {
        nome: formData.nome.trim(),
        telefone: getFormattedPhone(),
        email: formData.email.trim() || null,
        cidade: formData.cidade.trim(),
        empresa: formData.empresa.trim() || null,
        item_interesse: formData.itensInteresse,
        periodo: formData.periodo.trim() || null,
        mensagem: formData.mensagem.trim() || null,
        data_hora: new Date().toISOString(),
        origem: 'contato',
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
      // Silent fail - DB and WhatsApp are primary
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!isNomeValid) newErrors.nome = 'Informe seu nome';
    if (!isTelefoneValid) newErrors.telefone = 'Telefone inválido';
    if (!isCidadeValid) newErrors.cidade = 'Informe a cidade';
    if (!isItensValid) newErrors.itens = 'Selecione um item';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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

    // Abre WhatsApp IMEDIATAMENTE no evento do clique
    const message = formatWhatsAppMessage();
    const whatsappUrl = `https://wa.me/5531971067272?text=${message}`;
    window.open(whatsappUrl, '_blank');

    setIsSubmitting(true);
    registerSubmit(rawPhone);

    // Salva no banco de dados e webhook em background
    await Promise.all([saveLeadToDatabase(), sendToWebhook()]);

    setIsSuccess(true);
    toast({
      title: '✅ Orçamento solicitado!',
      description: 'Seus dados foram salvos. WhatsApp aberto.',
    });

    setIsSubmitting(false);

    // Reset após sucesso
    setTimeout(() => {
      setFormData({
        nome: '',
        empresa: '',
        email: '',
        cidade: '',
        itensInteresse: '',
        periodo: '',
        mensagem: '',
      });
      resetPhone();
      setErrors({});
      setIsSuccess(false);
    }, 5000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Solicitar Orçamento | DDM Locações - Retroescavadeira Sete Lagoas</title>
        <meta name="description" content="Solicite orçamento para aluguel de retroescavadeira em Sete Lagoas. Atendimento rápido pelo WhatsApp. Resposta em minutos." />
        <link rel="canonical" href="https://ddmlocacoes.com.br/contato" />
        <meta property="og:title" content="Solicitar Orçamento | DDM Locações" />
        <meta property="og:description" content="Orçamento rápido para retroescavadeira em Sete Lagoas." />
        <meta property="og:url" content="https://ddmlocacoes.com.br/contato" />
        <meta property="og:type" content="website" />
      </Helmet>

      <PageHeaderCompact
        title="Solicitar Orçamento"
        subtitle="Preencha o formulário e receba seu orçamento pelo WhatsApp"
        breadcrumbs={[{ label: 'Orçamento' }]}
      />

      {/* Main Content: 2 columns */}
      <section className="py-6 md:py-10">
        <div className="container-ddm">
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Left: Form */}
            <div className="lg:col-span-2">
              <div className="rounded-lg bg-card border border-border p-5 md:p-6">
                {/* Mensagem de sucesso */}
                {isSuccess && (
                  <div className="mb-5 p-3 bg-success/10 border border-success/30 rounded-lg flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground text-sm">Orçamento solicitado!</p>
                      <p className="text-xs text-muted-foreground">WhatsApp aberto. Entraremos em contato em breve.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot */}
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

                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Nome */}
                    <div className="space-y-1">
                      <Label htmlFor="nome" className="text-sm flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-accent" />
                        Seu nome *
                      </Label>
                      <InputWithCheck
                        id="nome"
                        placeholder="Nome completo"
                        value={formData.nome}
                        onChange={(e) => handleInputChange('nome', e.target.value)}
                        className="h-10 bg-muted/50 border-border"
                        maxLength={100}
                        isValid={isNomeValid}
                        hasError={!!errors.nome}
                      />
                      {errors.nome && <p className="text-xs text-red-500">{errors.nome}</p>}
                    </div>

                    {/* Empresa */}
                    <div className="space-y-1">
                      <Label htmlFor="empresa" className="text-sm flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-accent" />
                        Empresa (opcional)
                      </Label>
                      <Input
                        id="empresa"
                        placeholder="Nome da empresa"
                        value={formData.empresa}
                        onChange={(e) => handleInputChange('empresa', e.target.value)}
                        className="h-10 bg-muted/50 border-border"
                        maxLength={100}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {/* WhatsApp */}
                    <div className="space-y-1">
                      <Label htmlFor="telefone" className="text-sm flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-accent" />
                        WhatsApp *
                      </Label>
                      <div className="flex gap-2">
                        <Input
                          value={ddi}
                          onChange={(e) => handleDdiChange(e.target.value)}
                          className="h-10 w-14 text-center bg-muted/50 border-border text-sm"
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
                              "h-10 bg-muted/50 border-border",
                              errors.telefone && "border-red-500",
                              isTelefoneValid && !errors.telefone && "border-success/50 pr-9"
                            )}
                          />
                          {isTelefoneValid && !errors.telefone && (
                            <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-success" />
                          )}
                        </div>
                      </div>
                      {errors.telefone && <p className="text-xs text-red-500">{errors.telefone}</p>}
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <Label htmlFor="email" className="text-sm flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-accent" />
                        Email (opcional)
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="h-10 bg-muted/50 border-border"
                        maxLength={100}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Cidade */}
                    <div className="space-y-1">
                      <Label htmlFor="cidade" className="text-sm flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-accent" />
                        Cidade *
                      </Label>
                      <InputWithCheck
                        id="cidade"
                        placeholder="Ex: Sete Lagoas"
                        value={formData.cidade}
                        onChange={(e) => handleInputChange('cidade', e.target.value)}
                        className="h-10 bg-muted/50 border-border"
                        maxLength={100}
                        isValid={isCidadeValid}
                        hasError={!!errors.cidade}
                      />
                      {errors.cidade && <p className="text-xs text-red-500">{errors.cidade}</p>}
                    </div>

                    {/* Período */}
                    <div className="space-y-1">
                      <Label htmlFor="periodo" className="text-sm flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-accent" />
                        Período (opcional)
                      </Label>
                      <Input
                        id="periodo"
                        placeholder="Ex: 2 dias, 1 semana..."
                        value={formData.periodo}
                        onChange={(e) => handleInputChange('periodo', e.target.value)}
                        className="h-10 bg-muted/50 border-border"
                        maxLength={100}
                      />
                    </div>
                  </div>

                  {/* Tipo de serviço */}
                  <div className="space-y-1">
                    <Label htmlFor="itensInteresse" className="text-sm flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-accent" />
                      Tipo de serviço *
                    </Label>
                    <Select
                      value={formData.itensInteresse}
                      onValueChange={(v) => {
                        handleInputChange('itensInteresse', v);
                        if (errors.itens) setErrors((prev) => ({ ...prev, itens: '' }));
                      }}
                    >
                      <SelectTrigger
                        id="itensInteresse"
                        className={cn(
                          "h-10 bg-muted/50 border-border",
                          errors.itens && "border-red-500",
                          isItensValid && "border-success/50"
                        )}
                      >
                        <SelectValue placeholder="Selecione o serviço..." />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border z-50">
                        {serviceTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.itens && <p className="text-xs text-red-500">{errors.itens}</p>}
                  </div>

                  {/* Mensagem */}
                  <div className="space-y-1">
                    <Label htmlFor="mensagem" className="text-sm">Mensagem (opcional)</Label>
                    <Textarea
                      id="mensagem"
                      placeholder="Descreva brevemente o serviço..."
                      value={formData.mensagem}
                      onChange={(e) => handleInputChange('mensagem', e.target.value)}
                      rows={3}
                      className="bg-muted/50 border-border resize-none"
                      maxLength={500}
                    />
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    variant="default"
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

            {/* Right: Contact Info */}
            <div className="space-y-4">
              <h3 className="text-base font-semibold text-foreground">Informações de Contato</h3>
              
              <div className="space-y-3">
                {contactInfo.map((item) => (
                  <div key={item.title} className="p-3 rounded-lg bg-card border border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                        <item.icon className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{item.title}</p>
                        {item.href ? (
                          <a href={item.href} className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick tip */}
              <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                <p className="text-sm font-medium text-foreground mb-1">Dica rápida</p>
                <p className="text-xs text-muted-foreground">
                  Para um orçamento mais preciso, envie fotos ou vídeos do local do serviço pelo WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;
