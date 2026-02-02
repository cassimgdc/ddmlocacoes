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
import InternalHero from '@/components/layout/InternalHero';
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
  Mail,
  Building2,
  Calendar,
  FileText,
  Home,
  ChevronRight,
} from 'lucide-react';
import { usePhoneFormat } from '@/hooks/usePhoneFormat';
import { useSpamProtection } from '@/hooks/useSpamProtection';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { supabase } from '@/integrations/supabase/client';
import { Link } from 'react-router-dom';

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

  const contactCards = [
    {
      icon: Phone,
      title: 'Telefone',
      value: '(31) 97106-7272',
      href: 'tel:+5531971067272',
      color: 'text-primary',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '(31) 97106-7272',
      href: 'https://wa.me/5531971067272',
      color: 'text-green-500',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'contato@ddmlocacoes.com.br',
      href: 'mailto:contato@ddmlocacoes.com.br',
      color: 'text-blue-500',
    },
    {
      icon: MapPin,
      title: 'Endereço',
      value: 'Sete Lagoas, MG',
      href: 'https://maps.google.com/?q=Sete+Lagoas+MG',
      color: 'text-accent',
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
        <link rel="canonical" href="https://ddmlocacoes.lovable.app/contato" />
      </Helmet>

      {/* Hero interno com breadcrumb */}
      <section className="pt-28 md:pt-32 pb-6 bg-gradient-to-b from-secondary/30 to-transparent">
        <div className="container-ddm">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-foreground transition-colors flex items-center gap-1">
              <Home className="w-4 h-4" />
              Início
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">Orçamento</span>
          </nav>

          <div className="text-center max-w-xl mx-auto">
            <span className="badge-industrial mb-4">
              <MessageCircle className="w-4 h-4" />
              Contato
            </span>
            <h1 className="text-2xl md:text-4xl font-display font-black text-foreground mb-3">
              Solicitar <span className="text-gradient-vivid">Orçamento</span>
            </h1>
            <p className="text-muted-foreground">
              Preencha o formulário e receba um orçamento rápido pelo WhatsApp
            </p>
          </div>
        </div>
      </section>

      {/* Cards de contato */}
      <section className="py-6 md:py-10">
        <div className="container-ddm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto">
            {contactCards.map((card, index) => (
              <a
                key={card.title}
                href={card.href}
                target={card.href.startsWith('http') ? '_blank' : undefined}
                rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-center opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform`}>
                  <card.icon className={`w-5 h-5 ${card.color}`} />
                </div>
                <p className="text-xs text-muted-foreground mb-1">{card.title}</p>
                <p className="text-sm font-medium text-foreground truncate">{card.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário Principal */}
      <section className="pb-12 md:pb-20">
        <div className="container-ddm">
          <div className="max-w-2xl mx-auto">
            {/* Card do Formulário */}
            <div className="relative opacity-0 animate-fade-in-up stagger-2">
              <div className="absolute -inset-3 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 rounded-3xl blur-xl opacity-40" />
              
              <div className="relative card-premium p-6 md:p-8">
                {/* Mensagem de sucesso */}
                {isSuccess && (
                  <div className="mb-6 p-4 bg-ddm-success/10 border border-ddm-success/30 rounded-xl flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-ddm-success flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Orçamento solicitado!</p>
                      <p className="text-sm text-muted-foreground">WhatsApp aberto. Entraremos em contato em breve.</p>
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
                    <div className="space-y-1.5">
                      <Label htmlFor="nome" className="text-sm flex items-center gap-2">
                        <User className="w-4 h-4 text-primary" />
                        Seu nome *
                      </Label>
                      <InputWithCheck
                        id="nome"
                        placeholder="Nome completo"
                        value={formData.nome}
                        onChange={(e) => handleInputChange('nome', e.target.value)}
                        className="h-11 bg-muted/50 border-border/50"
                        maxLength={100}
                        isValid={isNomeValid}
                        hasError={!!errors.nome}
                      />
                      {errors.nome && <p className="text-xs text-red-500">{errors.nome}</p>}
                    </div>

                    {/* Empresa */}
                    <div className="space-y-1.5">
                      <Label htmlFor="empresa" className="text-sm flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-primary" />
                        Empresa (opcional)
                      </Label>
                      <Input
                        id="empresa"
                        placeholder="Nome da empresa"
                        value={formData.empresa}
                        onChange={(e) => handleInputChange('empresa', e.target.value)}
                        className="h-11 bg-muted/50 border-border/50"
                        maxLength={100}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {/* WhatsApp */}
                    <div className="space-y-1.5">
                      <Label htmlFor="telefone" className="text-sm flex items-center gap-2">
                        <Phone className="w-4 h-4 text-primary" />
                        WhatsApp *
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
                              "h-11 bg-muted/50 border-border/50",
                              errors.telefone && "border-red-500",
                              isTelefoneValid && !errors.telefone && "border-green-500/50 pr-10"
                            )}
                          />
                          {isTelefoneValid && !errors.telefone && (
                            <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-green-500" />
                          )}
                        </div>
                      </div>
                      {errors.telefone && <p className="text-xs text-red-500">{errors.telefone}</p>}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <Label htmlFor="email" className="text-sm flex items-center gap-2">
                        <Mail className="w-4 h-4 text-primary" />
                        Email (opcional)
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="h-11 bg-muted/50 border-border/50"
                        maxLength={100}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Cidade */}
                    <div className="space-y-1.5">
                      <Label htmlFor="cidade" className="text-sm flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        Cidade *
                      </Label>
                      <InputWithCheck
                        id="cidade"
                        placeholder="Ex: Sete Lagoas"
                        value={formData.cidade}
                        onChange={(e) => handleInputChange('cidade', e.target.value)}
                        className="h-11 bg-muted/50 border-border/50"
                        maxLength={100}
                        isValid={isCidadeValid}
                        hasError={!!errors.cidade}
                      />
                      {errors.cidade && <p className="text-xs text-red-500">{errors.cidade}</p>}
                    </div>

                    {/* Período */}
                    <div className="space-y-1.5">
                      <Label htmlFor="periodo" className="text-sm flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        Período (opcional)
                      </Label>
                      <Input
                        id="periodo"
                        placeholder="Ex: 2 dias, 1 semana..."
                        value={formData.periodo}
                        onChange={(e) => handleInputChange('periodo', e.target.value)}
                        className="h-11 bg-muted/50 border-border/50"
                        maxLength={100}
                      />
                    </div>
                  </div>

                  {/* Itens de interesse */}
                  <div className="space-y-1.5">
                    <Label className="text-sm flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-primary" />
                      Item de interesse *
                    </Label>
                    <div className="relative">
                      <Select
                        value={formData.itensInteresse}
                        onValueChange={(value) => handleInputChange('itensInteresse', value)}
                      >
                        <SelectTrigger className={cn(
                          "h-11 bg-muted/50 border-border/50",
                          errors.itens && "border-red-500",
                          isItensValid && !errors.itens && "border-green-500/50"
                        )}>
                          <SelectValue placeholder="Selecione o serviço ou equipamento" />
                        </SelectTrigger>
                        <SelectContent className="bg-card border-border">
                          {serviceTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {isItensValid && !errors.itens && (
                        <CheckCircle className="absolute right-10 top-1/2 -translate-y-1/2 w-4 h-4 text-green-500 pointer-events-none" />
                      )}
                    </div>
                    {errors.itens && <p className="text-xs text-red-500">{errors.itens}</p>}
                  </div>

                  {/* Observações */}
                  <div className="space-y-1.5">
                    <Label htmlFor="mensagem" className="text-sm flex items-center gap-2">
                      <FileText className="w-4 h-4 text-primary" />
                      Observações (opcional)
                    </Label>
                    <Textarea
                      id="mensagem"
                      placeholder="Descreva brevemente o serviço, local, dimensões do terreno..."
                      rows={3}
                      value={formData.mensagem}
                      onChange={(e) => handleInputChange('mensagem', e.target.value)}
                      className="bg-muted/50 border-border/50 resize-none"
                      maxLength={500}
                    />
                  </div>

                  {/* Botão de envio */}
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
                        Enviando...
                      </>
                    ) : (
                      <>
                        <MessageCircle className="w-5 h-5" />
                        Solicitar Orçamento
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>

                  <p className="text-center text-muted-foreground text-xs">
                    📷 Após enviar, você pode anexar fotos/vídeos do terreno no WhatsApp
                  </p>
                </form>
              </div>
            </div>

            {/* Área de Atendimento */}
            <div className="mt-10 p-6 rounded-2xl bg-muted/30 border border-border/50 opacity-0 animate-fade-in-up stagger-3">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-primary/10">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-bold text-foreground">Área de Atendimento</h3>
              </div>
              
              <p className="text-muted-foreground mb-4">
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
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                      index === 0 
                        ? 'bg-primary/20 text-primary' 
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {city}
                  </span>
                ))}
              </div>

              <p className="text-sm text-muted-foreground mt-4">
                Para outras localidades, consulte disponibilidade e valor de deslocamento.
              </p>
            </div>

            {/* Informações adicionais */}
            <div className="mt-8 grid grid-cols-3 gap-4 text-center opacity-0 animate-fade-in-up stagger-4">
              <div className="p-4 rounded-xl bg-muted/20">
                <MessageCircle className="w-6 h-6 text-green-500 mx-auto mb-2" />
                <p className="text-sm font-medium text-foreground">Resposta rápida</p>
                <p className="text-xs text-muted-foreground">Em até 2 horas</p>
              </div>
              <div className="p-4 rounded-xl bg-muted/20">
                <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium text-foreground">Horário</p>
                <p className="text-xs text-muted-foreground">Seg-Sáb 7h-18h</p>
              </div>
              <div className="p-4 rounded-xl bg-muted/20">
                <CheckCircle className="w-6 h-6 text-ddm-success mx-auto mb-2" />
                <p className="text-sm font-medium text-foreground">Sem compromisso</p>
                <p className="text-xs text-muted-foreground">Orçamento grátis</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;
