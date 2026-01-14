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
} from 'lucide-react';

const Contato = () => {
  const [formData, setFormData] = useState({
    local: '',
    tipoServico: '',
    detalhes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const whatsappLink = `https://wa.me/5531971067272?text=${encodeURIComponent(
    'Olá! Gostaria de solicitar um orçamento.',
  )}`;

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
      `Local: ${formData.local}`,
      `Servico: ${formData.tipoServico}`,
    ];

    if (formData.detalhes) {
      lines.push(`Detalhes: ${formData.detalhes}`);
    }

    return encodeURIComponent(lines.join('\n'));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.local || !formData.tipoServico) return;

    setIsSubmitting(true);

    const message = formatWhatsAppMessage();
    const whatsappUrl = `https://wa.me/5531971067272?text=${message}`;

    // iOS/Safari pode bloquear popups; fallback para navegação direta
    const w = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    if (!w) {
      window.location.assign(whatsappUrl);
    }

    setIsSubmitting(false);
  };

  return (
    <Layout>
      <Helmet>
        <title>Contato e Orçamento | DDM Locações - Retroescavadeira Sete Lagoas</title>
        <meta name="description" content="Solicite orçamento para aluguel de retroescavadeira em Sete Lagoas. Atendimento rápido pelo WhatsApp (31) 97106-7272. Resposta em minutos." />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="canonical" href="https://dig-and-haul-pro.lovable.app/contato" />
      </Helmet>
      
      {/* Header */}
      <section className="pt-20 pb-4 md:pt-36 md:pb-16">
        <div className="container-ddm">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-2xl md:text-4xl font-black text-foreground mb-2 md:mb-4">
              Contato
            </h1>
            <p className="text-muted-foreground text-sm md:text-lg">
              Solicite um orçamento ou tire suas dúvidas. 
              A forma mais rápida é pelo WhatsApp.
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
                Orçamento Rápido
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                <div className="space-y-1.5 md:space-y-2">
                  <Label htmlFor="local" className="text-sm">Local do serviço *</Label>
                  <Input
                    id="local"
                    placeholder="Ex: Sete Lagoas, Bairro Centro"
                    value={formData.local}
                    onChange={(e) => setFormData({ ...formData, local: e.target.value })}
                    className="h-11 md:h-12 text-base"
                    required
                  />
                </div>

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

                <div className="flex items-start gap-3 p-3 md:p-4 bg-muted/50 rounded-xl text-xs md:text-sm">
                  <Camera className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">
                    Após enviar, você pode anexar fotos ou vídeos do terreno 
                    na conversa do WhatsApp.
                  </p>
                </div>

                <Button 
                  type="submit" 
                  variant="cta" 
                  size="lg" 
                  className="w-full group touch-feedback"
                  disabled={isSubmitting || !formData.local || !formData.tipoServico}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 md:w-5 md:h-5 animate-spin" />
                      Abrindo WhatsApp...
                    </>
                  ) : (
                    <>
                      <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                      Enviar pelo WhatsApp
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
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 card-premium hover:border-primary/30 transition-all group touch-feedback"
                  aria-label="Chamar no WhatsApp"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-ddm-whatsapp rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-foreground group-hover:text-primary transition-colors text-sm md:text-base">
                      Chamar no WhatsApp
                    </p>
                    <p className="text-muted-foreground text-xs md:text-sm">Resposta rápida</p>
                  </div>
                </a>
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