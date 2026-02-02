import { Link } from 'react-router-dom';
import { MapPin, MessageCircle, Clock, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoImg from '@/assets/logo-ddm.png';
import DDMPattern from '@/components/brand/DDMPattern';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-card border-t border-border pb-24 md:pb-0 overflow-hidden">
      {/* DDM Technical Pattern - Brand signature */}
      <DDMPattern variant="minimal" className="z-0" />
      
      <div className="container-ddm relative z-10 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div>
            <Link to="/" className="inline-block">
              <img 
                src={logoImg} 
                alt="DDM Locações" 
                className="h-16 md:h-20 w-auto mb-4"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">
              Aluguel de retroescavadeira com operador experiente em <span className="text-foreground font-medium">Sete Lagoas e região</span>.
            </p>
            <span className="badge-available">
              <span className="w-1.5 h-1.5 rounded-full bg-success" />
              Disponível agora
            </span>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm">
              Navegação
            </h3>
            <ul className="space-y-2">
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
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm">
              Contato
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+5531971067272"
                  className="flex items-start gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="w-4 h-4 text-success mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">(31) 97106-7272</p>
                    <p className="text-xs">WhatsApp disponível</p>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-accent mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Sete Lagoas - MG</p>
                  <p className="text-xs">E cidades vizinhas</p>
                </div>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Clock className="w-4 h-4 text-accent mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Seg - Sáb</p>
                  <p className="text-xs">7h às 18h</p>
                </div>
              </li>
            </ul>
          </div>

          {/* CTA with DDM chamfer */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm">
              Orçamento Rápido
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Solicite um orçamento sem compromisso. Resposta em minutos!
            </p>
            <Button variant="default" size="default" className="w-full ddm-chamfer-tr-sm" asChild>
              <Link to="/contato">
                <MessageCircle className="w-4 h-4" />
                Pedir Orçamento
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Brand Signature Bottom bar */}
      <div className="relative border-t border-border bg-muted/30">
        {/* Accent bar */}
        <div className="absolute top-0 left-0 w-24 h-0.5 bg-accent" />
        
        <div className="container-ddm py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
            {/* Brand signature */}
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <p className="text-muted-foreground text-xs">
                © {currentYear} <span className="text-foreground font-medium">DDM Locações</span> — Sete Lagoas e Região
              </p>
            </div>
            
            {/* Links + CTA */}
            <div className="flex items-center gap-4 text-xs">
              <Link to="/privacidade" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacidade
              </Link>
              <Link to="/termos" className="text-muted-foreground hover:text-foreground transition-colors">
                Termos
              </Link>
              <span className="hidden md:block text-border">|</span>
              <Link 
                to="/contato" 
                className="hidden md:flex items-center gap-1 text-accent hover:text-accent/80 font-medium transition-colors"
              >
                Pedir orçamento
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
