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
  { href: '/equipamento', label: 'Equipamento', icon: Tractor },
  { href: '/duvidas', label: 'Dúvidas', icon: HelpCircle },
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
        className={`md:hidden fixed inset-0 z-40 bg-background/80 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`md:hidden fixed inset-y-0 right-0 z-50 w-[85%] max-w-[320px] bg-background border-l border-border shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between h-16 px-5 border-b border-border/50">
          <span className="text-lg font-bold text-foreground">Menu</span>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-muted text-foreground hover:bg-muted/80 active:scale-95 transition-all"
            aria-label="Fechar menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col p-5 gap-2">
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
                className={`flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-200 active:scale-[0.98] ${
                  isActive
                    ? 'bg-primary/15 border border-primary/30'
                    : 'bg-card/50 border border-border/30 hover:bg-card'
                }`}
                style={{
                  transitionDelay: isOpen ? `${index * 40}ms` : '0ms',
                }}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-primary'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className={`font-semibold text-base ${
                  isActive ? 'text-primary' : 'text-foreground'
                }`}>
                  {link.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* CTA Orçamento - Fixed at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-border/50 bg-background safe-area-bottom">
          <Button variant="cta" size="lg" className="w-full h-14 text-base" asChild>
            <Link to="/contato" onClick={() => {
              onClose();
              window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            }}>
              <MessageCircle className="w-5 h-5" />
              Pedir Orçamento
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
