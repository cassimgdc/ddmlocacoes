import { Link } from 'react-router-dom';
import { Phone, MapPin, MessageCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoImg from '@/assets/logo-ddm.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappLink = 'https://wa.me/5531971067272?text=Olá! Gostaria de solicitar um orçamento.';

  return (
    <footer className="bg-secondary border-t border-border pb-20 md:pb-0">
      <div className="container-ddm py-10 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Logo e descrição */}
          <div className="col-span-2 lg:col-span-1">
            <img 
              src={logoImg} 
              alt="DDM Locações" 
              className="h-12 md:h-16 w-auto mb-3 md:mb-4"
            />
            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
              Aluguel de retroescavadeira com operador experiente em Sete Lagoas e região.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="font-bold text-foreground text-sm md:text-base mb-3 md:mb-4">Navegação</h3>
            <ul className="space-y-1.5 md:space-y-2">
              {[
                { label: 'Início', href: '/' },
                { label: 'Serviços', href: '/servicos' },
                { label: 'Equipamento', href: '/equipamento' },
                { label: 'Contato', href: '/contato' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-xs md:text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-bold text-foreground text-sm md:text-base mb-3 md:mb-4">Contato</h3>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-ddm-whatsapp" />
                  (31) 97106-7272
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                Sete Lagoas - MG
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                Seg - Sáb: 7h às 18h
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="font-bold text-foreground text-sm md:text-base mb-3 md:mb-4">Orçamento</h3>
            <p className="text-muted-foreground text-xs md:text-sm mb-3 md:mb-4">
              Solicite um orçamento rápido pelo WhatsApp.
            </p>
            <Button variant="whatsapp" size="default" className="w-full md:w-auto" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                WhatsApp
              </a>
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
