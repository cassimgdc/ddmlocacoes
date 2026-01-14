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
  Phone,
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

  const whatsappLink = 'https://wa.me/5531971067272?text=Olá! Gostaria de solicitar um orçamento.';

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
      `Olá! Quero orçamento.`,
      ``,
      `📍 Local: ${formData.local}`,
      `🔧 Serviço: ${formData.tipoServico}`,
    ];

    if (formData.detalhes) {
      lines.push(`📝 Detalhes: ${formData.detalhes}`);
    }

    return encodeURIComponent(lines.join('\n'));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.local || !formData.tipoServico) return;

    setIsSubmitting(true);
    setTimeout(() => {
      window.open(`https://wa.me/5531971067272?text=${formatWhatsAppMessage()}`, '_blank');
      setIsSubmitting(false);
    }, 300);
  };

  return (
    <Layout>
      <Helmet>
        <title>Contato e Orçamento | DDM Locações - Retroescavadeira Sete Lagoas</title>
        <meta name="description" content="Solicite orçamento para aluguel de retroescavadeira em Sete Lagoas. Atendimento rápido pelo WhatsApp (31) 97106-7272. Resposta em minutos." />
        <link rel="canonical" href="https://dig-and-haul-pro.lovable.app/contato" />
      </Helmet>
      {/* Header */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="container-ddm">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              Contato
            </h1>
            <p className="text-muted-foreground text-lg">
              Solicite um orçamento ou tire suas dúvidas. 
              A forma mais rápida é pelo WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="pb-16">
        <div className="container-ddm">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulário */}
            <div className="animate-fade-in-up">
              <h2 className="text-xl font-bold text-foreground mb-6">
                Orçamento Rápido
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="local">Local do serviço *</Label>
                  <Input
                    id="local"
                    placeholder="Ex: Sete Lagoas, Bairro Centro"
                    value={formData.local}
                    onChange={(e) => setFormData({ ...formData, local: e.target.value })}
                    className="h-12"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>Tipo de serviço *</Label>
                  <Select
                    value={formData.tipoServico}
                    onValueChange={(value) => setFormData({ ...formData, tipoServico: value })}
                    required
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      {serviceTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="detalhes">Detalhes (opcional)</Label>
                  <Textarea
                    id="detalhes"
                    placeholder="Descreva o serviço que precisa..."
                    rows={4}
                    value={formData.detalhes}
                    onChange={(e) => setFormData({ ...formData, detalhes: e.target.value })}
                  />
                </div>

                <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-xl text-sm">
                  <Camera className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">
                    Após enviar, você pode anexar fotos ou vídeos do terreno 
                    na conversa do WhatsApp para um orçamento mais preciso.
                  </p>
                </div>

                <Button 
                  type="submit" 
                  variant="cta" 
                  size="xl" 
                  className="w-full group"
                  disabled={isSubmitting || !formData.local || !formData.tipoServico}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Abrindo WhatsApp...
                    </>
                  ) : (
                    <>
                      <MessageCircle className="w-5 h-5" />
                      Enviar pelo WhatsApp
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Informações */}
            <div className="animate-fade-in-up stagger-delay-2">
              <h2 className="text-xl font-bold text-foreground mb-6">
                Informações
              </h2>

              <div className="space-y-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 card-premium hover:border-primary/30 transition-all group"
                >
                  <div className="w-12 h-12 bg-ddm-whatsapp rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground group-hover:text-primary transition-colors">
                      (31) 97106-7272
                    </p>
                    <p className="text-muted-foreground text-sm">WhatsApp</p>
                  </div>
                </a>

                <a
                  href="tel:+5531971067272"
                  className="flex items-center gap-4 p-4 card-premium hover:border-primary/30 transition-all group"
                >
                  <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground group-hover:text-primary transition-colors">
                      (31) 97106-7272
                    </p>
                    <p className="text-muted-foreground text-sm">Telefone</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 card-premium">
                  <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Sete Lagoas - MG</p>
                    <p className="text-muted-foreground text-sm">E cidades da região</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 card-premium">
                  <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Seg - Sáb: 7h às 18h</p>
                    <p className="text-muted-foreground text-sm">Horário de atendimento</p>
                  </div>
                </div>
              </div>

              {/* Dica */}
              <div className="mt-8 p-6 bg-muted/30 rounded-xl">
                <h3 className="font-bold text-foreground mb-3">
                  Para agilizar seu orçamento:
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Informe o local exato do serviço</li>
                  <li>• Descreva o tipo de trabalho necessário</li>
                  <li>• Envie fotos ou vídeos do terreno</li>
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
