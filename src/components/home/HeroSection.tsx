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
import { MessageCircle, ArrowRight, Truck, Wrench, ShieldCheck, Clock, MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBg from '@/assets/hero-bg.jpg';
import { motion } from 'framer-motion';
import DDMPattern from '@/components/brand/DDMPattern';

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

  const stats = [
    { value: '+500', label: 'locações realizadas', icon: Truck },
    { value: '10+', label: 'anos de experiência', icon: Calendar },
    { value: '8+', label: 'cidades atendidas', icon: MapPin },
  ];

  return (
    <section className="relative min-h-[90vh] lg:min-h-[85vh] flex items-center overflow-hidden">
      {/* Background with diagonal clip */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
          }}
        >
          <img 
            src={heroBg} 
            alt="Equipamentos DDM Locações" 
            className="w-full h-full object-cover"
          />
          {/* Primary overlay - Using dark graphite for both themes */}
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(222,47%,11%)]/95 via-[hsl(222,47%,11%)]/90 to-[hsl(222,47%,11%)]/70" />
          
          {/* Vignette overlay - Dark radial gradient on edges for focus */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 80% 60% at 35% 40%, transparent 0%, hsl(222 47% 11% / 0.4) 100%)',
            }}
          />
          
          {/* DDM Technical Pattern - Brand signature overlay */}
          <DDMPattern variant="minimal" className="text-white" />
        </div>
        
        {/* Bottom fade to page background */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container-ddm relative z-10 pt-24 pb-16 lg:pt-28 lg:pb-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Content - 7 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Headline - Shorter with smart breaks + backdrop blur for readability */}
            <div className="space-y-4 backdrop-blur-[2px] bg-black/5 rounded-lg p-4 -m-4 lg:p-0 lg:m-0 lg:bg-transparent lg:backdrop-blur-none">
              <h1 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-bold text-white leading-[1.1] tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                Locação de equipamentos{' '}<br className="hidden sm:block" />
                <span className="text-[hsl(28,80%,52%)] drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]">para sua obra.</span>
              </h1>
              <p className="text-base lg:text-lg text-white/80 max-w-lg leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
                Retroescavadeiras e máquinas pesadas com operador incluso. 
                Atendemos Sete Lagoas e região.
              </p>
            </div>

            {/* Differentials - Clean metadata line */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-white/80 text-sm">
              <div className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-[hsl(28,80%,52%)]" />
                <span>Entrega rápida</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Wrench className="w-3.5 h-3.5 text-[hsl(28,80%,52%)]" />
                <span>Operador incluso</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[hsl(28,80%,52%)]" />
                <span>Equipamento revisado</span>
              </div>
            </div>

            {/* CTAs - Primary action first */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                asChild 
                size="default" 
                className="h-11 px-5 bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
              >
                <Link to="/catalogo">
                  Ver catálogo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="default"
                className="h-11 px-5 border-white/25 text-white hover:bg-white/10 hover:border-white/40 font-medium"
              >
                <Link to="/contato">
                  Pedir orçamento
                </Link>
              </Button>
            </div>

            {/* Stats - Hidden on mobile, visible on sm+ */}
            <div className="hidden sm:flex items-center gap-6 lg:gap-8 pt-6 border-t border-white/10">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2">
                  <stat.icon className="w-4 h-4 text-[hsl(28,80%,52%)]/80" />
                  <div>
                    <span className="text-lg lg:text-xl font-bold text-white">{stat.value}</span>
                    <span className="text-xs text-white/50 ml-1.5 hidden md:inline">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Enterprise Quote Card with DDM chamfer - 5 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="ddm-chamfer-tr bg-card border border-border/80 p-6 shadow-lg">
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/60">
                <div className="w-10 h-10 ddm-chamfer-tr-sm bg-primary/5 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Orçamento rápido</h3>
                  <p className="text-xs text-muted-foreground">Resposta em até 15 minutos</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="tipo" className="text-sm font-medium text-foreground">Tipo de serviço</Label>
                  <Select value={formData.tipo} onValueChange={(v) => handleChange('tipo', v)}>
                    <SelectTrigger className="mt-1.5 h-11 bg-muted/30 border-border/60 focus:border-primary/50">
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
                  <Label htmlFor="cidade" className="text-sm font-medium text-foreground">Cidade</Label>
                  <Input
                    id="cidade"
                    placeholder="Ex: Sete Lagoas"
                    value={formData.cidade}
                    onChange={(e) => handleChange('cidade', e.target.value)}
                    className="mt-1.5 h-11 bg-muted/30 border-border/60 focus:border-primary/50"
                  />
                </div>

                {/* Primary CTA - Graphite */}
                <Button
                  onClick={handleQuickQuote}
                  disabled={!formData.tipo || !formData.cidade}
                  className="w-full h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                >
                  Solicitar orçamento
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>

                {/* Secondary - WhatsApp outline */}
                <Button
                  variant="outline"
                  onClick={() => window.open('https://wa.me/5531971067272', '_blank')}
                  className="w-full h-10 border-success/30 text-success hover:bg-success/5 hover:border-success/50 font-medium text-sm"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Falar pelo WhatsApp
                </Button>

                {/* Expand modal trigger - Subtle link */}
                <Dialog open={modalOpen} onOpenChange={setModalOpen}>
                  <DialogTrigger asChild>
                    <button className="w-full text-center text-xs text-muted-foreground hover:text-accent transition-colors flex items-center justify-center gap-1 pt-1">
                      Adicionar período e detalhes
                      <ArrowRight className="w-3 h-3" />
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
                          <SelectTrigger className="mt-1.5 h-11 bg-muted/30">
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
                          className="mt-1.5 h-11 bg-muted/30"
                        />
                      </div>
                      <div>
                        <Label className="text-sm font-medium">Período desejado</Label>
                        <Input
                          placeholder="Ex: 2 dias, 1 semana"
                          value={formData.periodo}
                          onChange={(e) => handleChange('periodo', e.target.value)}
                          className="mt-1.5 h-11 bg-muted/30"
                        />
                      </div>
                      <div>
                        <Label className="text-sm font-medium">Observações</Label>
                        <Textarea
                          placeholder="Detalhes sobre o serviço..."
                          value={formData.observacao}
                          onChange={(e) => handleChange('observacao', e.target.value)}
                          className="mt-1.5 bg-muted/30 min-h-[80px] resize-none"
                        />
                      </div>
                      <Button
                        onClick={() => {
                          handleQuickQuote();
                          setModalOpen(false);
                        }}
                        disabled={!formData.tipo || !formData.cidade}
                        className="w-full h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                      >
                        Solicitar orçamento
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
