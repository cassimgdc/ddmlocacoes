import { Link } from 'react-router-dom';
import { MapPin, MessageCircle, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoImg from '@/assets/logo-ddm.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 dark:bg-secondary border-t border-border pb-24 md:pb-0">
      <div className="container-ddm py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
          {/* Logo e descrição */}
          <div className="col-span-2 lg:col-span-1">
            <img 
              src={logoImg} 
              alt="DDM Locações" 
              className="h-10 md:h-16 w-auto mb-3"
            />
            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
              Aluguel de retroescavadeira com operador experiente em <span className="text-foreground font-medium">Sete Lagoas e região</span>.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="font-bold text-foreground text-sm md:text-base mb-3">Navegação</h3>
            <ul className="space-y-2">
              {[
                { label: 'Início', href: '/' },
                { label: 'Equipamento', href: '/equipamento' },
                { label: 'Dúvidas', href: '/duvidas' },
                { label: 'Contato', href: '/contato' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary active:text-primary transition-colors text-xs md:text-sm touch-feedback inline-block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-bold text-foreground text-sm md:text-base mb-3">Contato</h3>
            <ul className="space-y-2.5 text-xs md:text-sm">
              <li>
                <Link
                  to="/contato"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary active:text-primary transition-colors touch-feedback"
                >
                  <MessageCircle className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0" />
                  (31) 97106-7272
                </Link>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                Sete Lagoas - MG
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                Seg - Sáb: 7h às 18h
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="font-bold text-foreground text-sm md:text-base mb-3">Orçamento</h3>
            <p className="text-muted-foreground text-xs md:text-sm mb-3">
              Solicite um orçamento rápido.
            </p>
            <Button variant="cta" size="default" className="w-full md:w-auto touch-feedback" asChild>
              <Link to="/contato">
                <MessageCircle className="w-4 h-4" />
                Pedir Orçamento
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-border/50">
        <div className="container-ddm py-4 text-center">
          <p className="text-muted-foreground text-xs">
            © {currentYear} DDM Locações. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
