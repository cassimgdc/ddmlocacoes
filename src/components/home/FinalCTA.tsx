import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Send, MessageCircle, Loader2 } from 'lucide-react';
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
    periodo: '',
    mensagem: '',
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
        periodo: formData.periodo || null,
        mensagem: formData.mensagem || null,
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
      if (formData.periodo) {
        message += `\nPeríodo: ${formData.periodo}`;
      }
      if (formData.mensagem) {
        message += `\n\nObservação: ${formData.mensagem}`;
      }

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
        periodo: '',
        mensagem: '',
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
    <section className="py-12 md:py-16 bg-background">
      <div className="container-ddm">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Solicite seu orçamento
            </h2>
            <p className="text-muted-foreground mt-2">
              Preencha o formulário e receba uma proposta personalizada
            </p>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-xl border border-border p-6 md:p-8 shadow-soft"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="nome" className="text-sm font-medium">Nome *</Label>
                  <Input
                    id="nome"
                    placeholder="Seu nome"
                    value={formData.nome}
                    onChange={(e) => handleChange('nome', e.target.value)}
                    className="mt-1.5 h-11 bg-muted/50"
                  />
                </div>
                <div>
                  <Label htmlFor="whatsapp" className="text-sm font-medium">WhatsApp *</Label>
                  <Input
                    id="whatsapp"
                    placeholder="(31) 99999-9999"
                    value={phone}
                    onChange={(e) => handlePhoneChange(e.target.value)}
                    className="mt-1.5 h-11 bg-muted/50"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="cidade" className="text-sm font-medium">Cidade *</Label>
                  <Input
                    id="cidade"
                    placeholder="Ex: Sete Lagoas"
                    value={formData.cidade}
                    onChange={(e) => handleChange('cidade', e.target.value)}
                    className="mt-1.5 h-11 bg-muted/50"
                  />
                </div>
                <div>
                  <Label className="text-sm font-medium">Tipo de serviço</Label>
                  <Select value={formData.tipo} onValueChange={(v) => handleChange('tipo', v)}>
                    <SelectTrigger className="mt-1.5 h-11 bg-muted/50">
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

              <div>
                <Label htmlFor="periodo" className="text-sm font-medium">Período desejado</Label>
                <Input
                  id="periodo"
                  placeholder="Ex: 2 dias, 1 semana"
                  value={formData.periodo}
                  onChange={(e) => handleChange('periodo', e.target.value)}
                  className="mt-1.5 h-11 bg-muted/50"
                />
              </div>

              <div>
                <Label htmlFor="mensagem" className="text-sm font-medium">Observações</Label>
                <Textarea
                  id="mensagem"
                  placeholder="Detalhes adicionais sobre o serviço..."
                  value={formData.mensagem}
                  onChange={(e) => handleChange('mensagem', e.target.value)}
                  rows={3}
                  className="mt-1.5 bg-muted/50 resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 h-11 bg-copper hover:bg-copper/90 text-white font-medium"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4 mr-2" />
                  )}
                  Enviar orçamento
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="h-11 border-success/30 text-success hover:bg-success/10"
                  onClick={() => window.open('https://wa.me/5531971067272', '_blank')}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp direto
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
