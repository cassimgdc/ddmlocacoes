import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { X, MessageCircle, Home, Wrench, Tractor, Phone, ArrowRight, HelpCircle } from 'lucide-react';
import { useEffect } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { href: '/', label: 'Início', icon: Home },
  { href: '/catalogo', label: 'Catálogo', icon: Tractor },
  { href: '/servicos', label: 'Serviços', icon: Wrench },
  { href: '/sobre', label: 'Sobre', icon: HelpCircle },
  { href: '/contato', label: 'Contato', icon: Phone },
];

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const location = useLocation();

  const isActiveLink = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on route change
  useEffect(() => {
    onClose();
  }, [location, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-background/80 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer - Compact */}
      <div
        className={`lg:hidden fixed top-0 right-0 z-50 w-[280px] bg-background/98 backdrop-blur-xl border-l border-b border-border/50 shadow-2xl rounded-bl-2xl transition-all duration-300 ease-out ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between h-14 px-4 border-b border-border/30">
          <span className="text-base font-display font-bold text-foreground">Menu</span>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-muted/80 text-foreground hover:bg-primary hover:text-primary-foreground active:scale-95 transition-all"
            aria-label="Fechar menu"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Navigation - Compact */}
        <nav className="flex flex-col p-3 gap-1.5">
          {navLinks.map((link, index) => {
            const Icon = link.icon;
            const isActive = isActiveLink(link.href);
            
            return (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => {
                  onClose();
                  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                }}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 active:scale-[0.98] ${
                  isActive
                    ? 'bg-primary/15 border border-primary/30'
                    : 'hover:bg-muted/50'
                }`}
                style={{
                  transitionDelay: isOpen ? `${index * 30}ms` : '0ms',
                }}
              >
                <div className={`w-8 h-8 rounded-md flex items-center justify-center ${
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-primary'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className={`font-medium text-sm ${
                  isActive ? 'text-primary' : 'text-foreground'
                }`}>
                  {link.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* CTA Orçamento - Highlighted */}
        <div className="p-3 pt-0">
          <Button variant="default" size="default" className="w-full h-11 text-sm font-semibold" asChild>
            <Link to="/contato" onClick={() => {
              onClose();
              window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            }}>
              <MessageCircle className="w-4 h-4" />
              Pedir Orçamento
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
