import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { MessageCircle, ArrowRight, Truck, Wrench, ShieldCheck, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBg from '@/assets/hero-bg.jpg';

const serviceTypes = [
  { value: 'retroescavadeira', label: 'Retroescavadeira' },
  { value: 'terraplanagem', label: 'Terraplanagem' },
  { value: 'abertura-valas', label: 'Abertura de Valas' },
  { value: 'limpeza-lotes', label: 'Limpeza de Lotes' },
  { value: 'escavacao', label: 'Escavação' },
  { value: 'carregamento', label: 'Carregamento' },
  { value: 'servicos-rurais', label: 'Serviços Rurais' },
  { value: 'outro', label: 'Outro serviço' },
];

const HeroSection = () => {
  const [formData, setFormData] = useState({
    tipo: '',
    cidade: '',
    periodo: '',
    observacao: '',
  });
  const [modalOpen, setModalOpen] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleQuickQuote = () => {
    if (!formData.tipo || !formData.cidade) {
      return;
    }

    const serviceName = serviceTypes.find(s => s.value === formData.tipo)?.label || formData.tipo;
    let message = `Olá! Quero um orçamento.\n\nServiço: ${serviceName}\nCidade: ${formData.cidade}`;
    
    if (formData.periodo) {
      message += `\nPeríodo: ${formData.periodo}`;
    }
    if (formData.observacao) {
      message += `\nObservação: ${formData.observacao}`;
    }

    window.open(`https://wa.me/5531971067272?text=${encodeURIComponent(message)}`, '_blank');
  };

  const differentials = [
    { icon: Truck, text: 'Entrega rápida' },
    { icon: Wrench, text: 'Operador incluso' },
    { icon: ShieldCheck, text: 'Equipamento revisado' },
  ];

  const stats = [
    { value: '+500', label: 'locações' },
    { value: '10+', label: 'anos' },
    { value: '8+', label: 'cidades' },
  ];

  return (
    <section className="relative min-h-[85vh] lg:min-h-[80vh] flex items-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Equipamentos DDM Locações" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-graphite/95 via-graphite/85 to-graphite/60" />
      </div>

      <div className="container-ddm relative z-10 py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content - 7 columns */}
          <div className="lg:col-span-7 space-y-6">
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Locação de equipamentos para obra, com entrega rápida.
              </h1>
              <p className="text-lg text-white/80 max-w-xl">
                Atendemos Sete Lagoas e toda a região metropolitana. Orçamento sem compromisso.
              </p>
            </div>

            {/* Differentials */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-white/90">
              {differentials.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <item.icon className="w-4 h-4 text-copper" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Button 
                asChild 
                size="lg" 
                className="bg-copper hover:bg-copper/90 text-white"
              >
                <Link to="/contato">
                  Pedir orçamento
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
              >
                <Link to="/catalogo">
                  Ver catálogo
                </Link>
              </Button>
            </div>

            {/* Social proof - Stats */}
            <div className="flex items-center gap-6 pt-4 border-t border-white/20 mt-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Compact Quote Card - 5 columns */}
          <div className="lg:col-span-5">
            <div className="bg-card rounded-xl border border-border p-5 md:p-6 shadow-elevated">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-success" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Orçamento rápido</h3>
                  <p className="text-xs text-muted-foreground">Receba pelo WhatsApp</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="tipo" className="text-sm font-medium">Tipo de serviço</Label>
                  <Select value={formData.tipo} onValueChange={(v) => handleChange('tipo', v)}>
                    <SelectTrigger className="mt-1.5 h-11 bg-muted/50">
                      <SelectValue placeholder="Selecione o serviço..." />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      {serviceTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="cidade" className="text-sm font-medium">Cidade</Label>
                  <Input
                    id="cidade"
                    placeholder="Ex: Sete Lagoas"
                    value={formData.cidade}
                    onChange={(e) => handleChange('cidade', e.target.value)}
                    className="mt-1.5 h-11 bg-muted/50"
                  />
                </div>

                <Button
                  onClick={handleQuickQuote}
                  disabled={!formData.tipo || !formData.cidade}
                  className="w-full h-11 bg-success hover:bg-success/90 text-white font-medium"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Receber orçamento no WhatsApp
                </Button>

                {/* Expand modal trigger */}
                <Dialog open={modalOpen} onOpenChange={setModalOpen}>
                  <DialogTrigger asChild>
                    <button className="w-full text-center text-sm text-muted-foreground hover:text-copper transition-colors flex items-center justify-center gap-1">
                      Adicionar período e detalhes
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Detalhes do orçamento</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 pt-4">
                      <div>
                        <Label className="text-sm font-medium">Tipo de serviço</Label>
                        <Select value={formData.tipo} onValueChange={(v) => handleChange('tipo', v)}>
                          <SelectTrigger className="mt-1.5 h-11 bg-muted/50">
                            <SelectValue placeholder="Selecione o serviço..." />
                          </SelectTrigger>
                          <SelectContent className="bg-card border-border">
                            {serviceTypes.map((type) => (
                              <SelectItem key={type.value} value={type.value}>
                                {type.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label className="text-sm font-medium">Cidade</Label>
                        <Input
                          placeholder="Ex: Sete Lagoas"
                          value={formData.cidade}
                          onChange={(e) => handleChange('cidade', e.target.value)}
                          className="mt-1.5 h-11 bg-muted/50"
                        />
                      </div>
                      <div>
                        <Label className="text-sm font-medium">Período desejado</Label>
                        <Input
                          placeholder="Ex: 2 dias, 1 semana"
                          value={formData.periodo}
                          onChange={(e) => handleChange('periodo', e.target.value)}
                          className="mt-1.5 h-11 bg-muted/50"
                        />
                      </div>
                      <div>
                        <Label className="text-sm font-medium">Observações</Label>
                        <Textarea
                          placeholder="Detalhes sobre o serviço..."
                          value={formData.observacao}
                          onChange={(e) => handleChange('observacao', e.target.value)}
                          className="mt-1.5 bg-muted/50 min-h-[80px] resize-none"
                        />
                      </div>
                      <Button
                        onClick={() => {
                          handleQuickQuote();
                          setModalOpen(false);
                        }}
                        disabled={!formData.tipo || !formData.cidade}
                        className="w-full h-11 bg-success hover:bg-success/90 text-white font-medium"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Enviar pelo WhatsApp
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
