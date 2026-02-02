import { Link } from 'react-router-dom';
import { MapPin, MessageCircle, Clock, ArrowRight, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoImg from '@/assets/logo-ddm.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-secondary/50 dark:bg-card border-t border-border/50 pb-24 md:pb-0 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container-ddm py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo e descrição */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block">
              <img 
                src={logoImg} 
                alt="DDM Locações" 
                className="h-12 md:h-16 w-auto mb-4 hover:scale-105 transition-transform"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Aluguel de retroescavadeira com operador experiente em <span className="text-foreground font-medium">Sete Lagoas e região</span>.
            </p>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-ddm-success/10 text-ddm-success border border-ddm-success/20">
                <span className="w-1.5 h-1.5 rounded-full bg-ddm-success animate-pulse" />
                Disponível agora
              </span>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="font-display font-bold text-foreground mb-4 text-sm uppercase tracking-wider">
              Navegação
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Início', href: '/' },
                { label: 'Catálogo', href: '/catalogo' },
                { label: 'Serviços', href: '/servicos' },
                { label: 'Sobre Nós', href: '/sobre' },
                { label: 'Dúvidas', href: '/duvidas' },
                { label: 'Contato', href: '/contato' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary active:text-primary transition-colors text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-display font-bold text-foreground mb-4 text-sm uppercase tracking-wider">
              Contato
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="tel:+5531971067272"
                  className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-ddm-whatsapp/10 flex items-center justify-center group-hover:bg-ddm-whatsapp/20 transition-colors flex-shrink-0">
                    <Phone className="w-4 h-4 text-ddm-whatsapp" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">(31) 97106-7272</p>
                    <p className="text-xs text-muted-foreground">WhatsApp disponível</p>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Sete Lagoas - MG</p>
                  <p className="text-xs text-muted-foreground">E cidades vizinhas</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Seg - Sáb</p>
                  <p className="text-xs text-muted-foreground">7h às 18h</p>
                </div>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="font-display font-bold text-foreground mb-4 text-sm uppercase tracking-wider">
              Orçamento Rápido
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Solicite um orçamento sem compromisso. Resposta em minutos!
            </p>
            <Button variant="cta" size="default" className="w-full group" asChild>
              <Link to="/contato">
                <MessageCircle className="w-4 h-4" />
                Pedir Orçamento
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
            
            {/* Trust badges */}
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                ✓ Operador incluso
              </span>
              <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                ✓ Combustível incluso
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/50 bg-background/50">
        <div className="container-ddm py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
            <p className="text-muted-foreground text-xs">
              © {currentYear} DDM Locações. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <Link to="/politica-de-privacidade" className="hover:text-primary transition-colors">
                Privacidade
              </Link>
              <Link to="/termos" className="hover:text-primary transition-colors">
                Termos
              </Link>
              <span className="hidden md:inline text-border">|</span>
              <span>Sete Lagoas - MG</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;