import { Link } from 'react-router-dom';
import { Phone, MapPin, MessageCircle, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappLink = 'https://wa.me/5531971067272?text=Olá! Gostaria de solicitar um orçamento para locação de retroescavadeira.';

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-background border-t border-border">
      {/* CTA Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        
        <div className="container-ddm py-16 relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
              <CheckCircle2 className="w-4 h-4" />
              Atendimento rápido pelo WhatsApp
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pronto para começar sua obra?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Solicite seu orçamento agora e receba uma resposta em minutos. 
              Atendemos Sete Lagoas e toda a região.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="whatsapp" size="xl" className="group" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Chamar no WhatsApp
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="/#orcamento" onClick={() => scrollToSection('orcamento')}>
                  Formulário de Orçamento
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-ddm py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-cta">
                <span className="text-primary-foreground font-black text-2xl">D</span>
              </div>
              <div>
                <span className="font-black text-xl text-foreground">DDM</span>
                <span className="font-medium text-xl text-muted-foreground"> Locações</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Locação de retroescavadeira com operador experiente. 
              Qualidade, pontualidade e segurança em cada serviço.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              Sete Lagoas - MG e região
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-6 text-lg">Navegação</h3>
            <ul className="space-y-3">
              {[
                { label: 'Início', href: '/' },
                { label: 'Serviços', href: '/#servicos' },
                { label: 'Equipamento', href: '/#equipamentos' },
                { label: 'Preços', href: '/#precos' },
                { label: 'Orçamento', href: '/#orcamento' },
                { label: 'Dúvidas', href: '/#faq' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-foreground mb-6 text-lg">Serviços</h3>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                Abertura de valas
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                Terraplanagem
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                Limpeza de lotes
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                Escavação
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                Serviços rurais
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                Movimentação de material
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-foreground mb-6 text-lg">Contato</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-ddm-whatsapp/10 rounded-xl hover:bg-ddm-whatsapp/20 transition-colors group"
                >
                  <div className="w-10 h-10 bg-ddm-whatsapp rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">(31) 97106-7272</p>
                    <p className="text-muted-foreground text-xs">WhatsApp</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="tel:+5531971067272"
                  className="flex items-center gap-3 p-3 bg-muted rounded-xl hover:bg-muted/80 transition-colors"
                >
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">(31) 97106-7272</p>
                    <p className="text-muted-foreground text-xs">Telefone</p>
                  </div>
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm p-3">
                <Clock className="w-5 h-5 text-primary" />
                <span>Seg - Sáb: 7h às 18h</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container-ddm py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {currentYear} DDM Locações. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span>Sete Lagoas - MG</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Retroescavadeira Case 580M</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
