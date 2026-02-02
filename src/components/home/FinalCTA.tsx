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
import { ArrowRight, MessageCircle, Loader2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { usePhoneFormat } from '@/hooks/usePhoneFormat';
import { motion } from 'framer-motion';

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

const FinalCTA = () => {
  const { phone, rawPhone, handlePhoneChange, getPhoneForSubmit, resetPhone } = usePhoneFormat();
  const [formData, setFormData] = useState({
    nome: '',
    cidade: '',
    tipo: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nome || !rawPhone || !formData.cidade) {
      toast({
        title: 'Campos obrigatórios',
        description: 'Preencha nome, WhatsApp e cidade.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Save lead to database
      const { error } = await supabase.from('leads').insert({
        nome: formData.nome,
        whatsapp: getPhoneForSubmit(),
        cidade: formData.cidade,
        origem: 'home_cta',
        status: 'novo',
      });

      if (error) throw error;

      // Build WhatsApp message
      const serviceName = serviceTypes.find(s => s.value === formData.tipo)?.label || formData.tipo;
      let message = `Olá! Sou ${formData.nome} de ${formData.cidade}.`;
      if (serviceName) {
        message += `\n\nServiço: ${serviceName}`;
      }
      message += '\n\nGostaria de um orçamento.';

      // Open WhatsApp
      window.open(`https://wa.me/5531971067272?text=${encodeURIComponent(message)}`, '_blank');

      toast({
        title: 'Mensagem enviada!',
        description: 'Continue a conversa pelo WhatsApp.',
      });

      // Reset form
      setFormData({
        nome: '',
        cidade: '',
        tipo: '',
      });
      resetPhone();
    } catch (error) {
      console.error('Error saving lead:', error);
      toast({
        title: 'Erro ao enviar',
        description: 'Tente novamente ou entre em contato pelo WhatsApp.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container-ddm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          {/* Elegant container with subtle shape */}
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
            {/* Subtle corner accent */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-accent/5 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary/3 to-transparent pointer-events-none" />
            
            <div className="relative z-10 p-6 md:p-10">
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                  Solicite seu orçamento
                </h2>
                <p className="text-muted-foreground mt-2">
                  Preencha os dados e receba uma proposta personalizada
                </p>
              </div>

              {/* Form - Short and objective */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="cta-nome" className="text-sm font-medium">Nome *</Label>
                    <Input
                      id="cta-nome"
                      placeholder="Seu nome"
                      value={formData.nome}
                      onChange={(e) => handleChange('nome', e.target.value)}
                      className="mt-1.5 h-11 bg-muted/30 border-border/60"
                    />
                  </div>
                  <div>
                    <Label htmlFor="cta-whatsapp" className="text-sm font-medium">WhatsApp *</Label>
                    <Input
                      id="cta-whatsapp"
                      placeholder="(31) 99999-9999"
                      value={phone}
                      onChange={(e) => handlePhoneChange(e.target.value)}
                      className="mt-1.5 h-11 bg-muted/30 border-border/60"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="cta-cidade" className="text-sm font-medium">Cidade *</Label>
                    <Input
                      id="cta-cidade"
                      placeholder="Ex: Sete Lagoas"
                      value={formData.cidade}
                      onChange={(e) => handleChange('cidade', e.target.value)}
                      className="mt-1.5 h-11 bg-muted/30 border-border/60"
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Tipo de serviço</Label>
                    <Select value={formData.tipo} onValueChange={(v) => handleChange('tipo', v)}>
                      <SelectTrigger className="mt-1.5 h-11 bg-muted/30 border-border/60">
                        <SelectValue placeholder="Selecione..." />
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
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 pt-3">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        Solicitar orçamento
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="h-12 px-6 border-success/30 text-success hover:bg-success/5 hover:border-success/50 font-medium"
                    onClick={() => window.open('https://wa.me/5531971067272', '_blank')}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;