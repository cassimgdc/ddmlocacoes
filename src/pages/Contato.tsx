import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
  ArrowLeft,
  MessageCircle,
  Phone,
  MapPin,
  Clock,
  Send,
  Upload,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    cidade: '',
    tipoServico: '',
    dataDesejada: '',
    descricao: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const serviceTypes = [
    'Abertura de valas',
    'Terraplanagem',
    'Limpeza de lote/terreno',
    'Escavação (fossa/cisterna/fundação)',
    'Serviços rurais (barraginhas, açudes)',
    'Carregamento/movimentação de material',
    'Outro serviço',
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.nome.trim()) {
      newErrors.nome = 'Nome é obrigatório';
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = 'WhatsApp é obrigatório';
    } else if (!/^\d{10,11}$/.test(formData.whatsapp.replace(/\D/g, ''))) {
      newErrors.whatsapp = 'WhatsApp inválido';
    }

    if (!formData.cidade.trim()) {
      newErrors.cidade = 'Cidade/Bairro é obrigatório';
    }

    if (!formData.tipoServico) {
      newErrors.tipoServico = 'Selecione o tipo de serviço';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatWhatsAppMessage = () => {
    const lines = [
      `*Solicitação de Orçamento - DDM Locações*`,
      ``,
      `👤 *Nome:* ${formData.nome}`,
      `📱 *WhatsApp:* ${formData.whatsapp}`,
      `📍 *Localização:* ${formData.cidade}`,
      `🔧 *Tipo de Serviço:* ${formData.tipoServico}`,
    ];

    if (formData.dataDesejada) {
      lines.push(`📅 *Data Desejada:* ${formData.dataDesejada}`);
    }

    if (formData.descricao) {
      lines.push(``, `📝 *Descrição:*`, formData.descricao);
    }

    return encodeURIComponent(lines.join('\n'));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate a brief loading state
    setTimeout(() => {
      const whatsappUrl = `https://wa.me/5531971067272?text=${formatWhatsAppMessage()}`;
      window.open(whatsappUrl, '_blank');
      setSubmitted(true);
      setIsSubmitting(false);
    }, 500);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  if (submitted) {
    return (
      <Layout>
        <section className="min-h-screen flex items-center justify-center bg-background">
          <div className="container-ddm py-32 text-center">
            <div className="w-20 h-20 bg-ddm-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-ddm-success" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Mensagem enviada!
            </h1>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Sua solicitação foi aberta no WhatsApp. Se a janela não abriu, clique no botão abaixo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" asChild>
                <a href={`https://wa.me/5531971067272?text=${formatWhatsAppMessage()}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Abrir WhatsApp
                </a>
              </Button>
              <Button variant="outline" size="lg" onClick={() => { setSubmitted(false); setFormData({ nome: '', whatsapp: '', cidade: '', tipoServico: '', dataDesejada: '', descricao: '' }); }}>
                Novo Orçamento
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Header */}
      <section className="pt-32 pb-12 bg-secondary">
        <div className="container-ddm">
          <Link to="/" className="inline-flex items-center gap-2 text-secondary-foreground/70 hover:text-primary mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Voltar ao início
          </Link>
          <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">Contato</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-4">
            Solicitar Orçamento
          </h1>
          <p className="text-secondary-foreground/70 max-w-2xl">
            Preencha o formulário abaixo e envie diretamente para nosso WhatsApp. Responderemos o mais rápido possível.
          </p>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="bg-primary py-4">
        <div className="container-ddm">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-primary-foreground">
            <a href="https://wa.me/5531971067272" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <MessageCircle className="w-5 h-5" />
              <span className="font-semibold">(31) 97106-7272</span>
            </a>
            <div className="hidden md:block w-px h-6 bg-primary-foreground/30" />
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Sete Lagoas e região</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-primary-foreground/30" />
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Seg - Sáb: 7h às 18h</span>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-background">
        <div className="container-ddm">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Nome */}
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome *</Label>
                    <Input
                      id="nome"
                      placeholder="Seu nome completo"
                      value={formData.nome}
                      onChange={(e) => handleInputChange('nome', e.target.value)}
                      className={errors.nome ? 'border-destructive' : ''}
                    />
                    {errors.nome && (
                      <p className="text-destructive text-sm flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.nome}
                      </p>
                    )}
                  </div>

                  {/* WhatsApp */}
                  <div className="space-y-2">
                    <Label htmlFor="whatsapp">WhatsApp *</Label>
                    <Input
                      id="whatsapp"
                      placeholder="(31) 99999-9999"
                      value={formData.whatsapp}
                      onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                      className={errors.whatsapp ? 'border-destructive' : ''}
                    />
                    {errors.whatsapp && (
                      <p className="text-destructive text-sm flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.whatsapp}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Cidade/Bairro */}
                  <div className="space-y-2">
                    <Label htmlFor="cidade">Cidade / Bairro *</Label>
                    <Input
                      id="cidade"
                      placeholder="Ex: Sete Lagoas, Centro"
                      value={formData.cidade}
                      onChange={(e) => handleInputChange('cidade', e.target.value)}
                      className={errors.cidade ? 'border-destructive' : ''}
                    />
                    {errors.cidade && (
                      <p className="text-destructive text-sm flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.cidade}
                      </p>
                    )}
                  </div>

                  {/* Tipo de Serviço */}
                  <div className="space-y-2">
                    <Label>Tipo de Serviço *</Label>
                    <Select
                      value={formData.tipoServico}
                      onValueChange={(value) => handleInputChange('tipoServico', value)}
                    >
                      <SelectTrigger className={errors.tipoServico ? 'border-destructive' : ''}>
                        <SelectValue placeholder="Selecione o serviço" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceTypes.map((type) => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.tipoServico && (
                      <p className="text-destructive text-sm flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.tipoServico}
                      </p>
                    )}
                  </div>
                </div>

                {/* Data Desejada */}
                <div className="space-y-2">
                  <Label htmlFor="dataDesejada">Data Desejada (opcional)</Label>
                  <Input
                    id="dataDesejada"
                    type="date"
                    value={formData.dataDesejada}
                    onChange={(e) => handleInputChange('dataDesejada', e.target.value)}
                  />
                </div>

                {/* Descrição */}
                <div className="space-y-2">
                  <Label htmlFor="descricao">Descrição do Serviço (opcional)</Label>
                  <Textarea
                    id="descricao"
                    placeholder="Descreva o serviço que você precisa, dimensões do terreno, tipo de solo, etc."
                    rows={4}
                    value={formData.descricao}
                    onChange={(e) => handleInputChange('descricao', e.target.value)}
                  />
                </div>

                {/* Upload Hint */}
                <div className="bg-muted rounded-xl p-4 flex items-start gap-4">
                  <Upload className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground text-sm">Envie fotos pelo WhatsApp</p>
                    <p className="text-muted-foreground text-sm">
                      Após enviar o formulário, você pode anexar fotos ou vídeos do terreno diretamente na conversa do WhatsApp para um orçamento mais preciso.
                    </p>
                  </div>
                </div>

                {/* Submit */}
                <Button 
                  type="submit" 
                  variant="cta" 
                  size="xl" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar pelo WhatsApp
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Direct Contact */}
              <div className="bg-card rounded-2xl p-6 border border-border/50">
                <h3 className="font-bold text-foreground mb-4">Prefere ligar?</h3>
                <a
                  href="tel:+5531971067272"
                  className="flex items-center gap-3 p-4 bg-muted rounded-xl hover:bg-muted/80 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">(31) 97106-7272</p>
                    <p className="text-muted-foreground text-sm">Seg - Sáb: 7h às 18h</p>
                  </div>
                </a>
              </div>

              {/* Quick WhatsApp */}
              <div className="bg-ddm-whatsapp rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-2">Atendimento rápido</h3>
                <p className="text-white/80 text-sm mb-4">
                  Chame diretamente no WhatsApp para uma resposta imediata.
                </p>
                <Button variant="secondary" size="lg" className="w-full" asChild>
                  <a href="https://wa.me/5531971067272?text=Olá! Gostaria de solicitar um orçamento." target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    Chamar no WhatsApp
                  </a>
                </Button>
              </div>

              {/* Tips */}
              <div className="bg-card rounded-2xl p-6 border border-border/50">
                <h3 className="font-bold text-foreground mb-4">Dicas para um bom orçamento</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-ddm-success mt-0.5 flex-shrink-0" />
                    Informe a localização exata do serviço
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-ddm-success mt-0.5 flex-shrink-0" />
                    Descreva o tipo de trabalho necessário
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-ddm-success mt-0.5 flex-shrink-0" />
                    Envie fotos ou vídeos do terreno
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-ddm-success mt-0.5 flex-shrink-0" />
                    Mencione se há restrições de acesso
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;
