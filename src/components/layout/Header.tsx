import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, MessageCircle, ChevronRight, Home, Wrench, Tractor, Phone } from 'lucide-react';
import logoImg from '@/assets/logo-ddm.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: '/', label: 'Início', icon: Home, description: 'Página principal' },
    { href: '/servicos', label: 'Serviços', icon: Wrench, description: 'O que fazemos' },
    { href: '/equipamento', label: 'Equipamento', icon: Tractor, description: 'Nossa máquina' },
    { href: '/contato', label: 'Contato', icon: Phone, description: 'Fale conosco' },
  ];

  const whatsappLink = 'https://wa.me/5531971067272?text=Olá! Gostaria de solicitar um orçamento.';

  const isActiveLink = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50'
            : 'bg-background/80 backdrop-blur-sm'
        }`}
      >
        <div className="container-ddm">
          <div className="flex items-center justify-between h-16 md:h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <img 
                src={logoImg} 
                alt="DDM Locações" 
                className="h-14 md:h-28 w-auto transition-all duration-300 group-hover:scale-105 group-hover:brightness-110 group-hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.4)]"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative px-4 py-2 font-medium text-sm transition-colors rounded-lg ${
                    isActiveLink(link.href)
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  {link.label}
                  {isActiveLink(link.href) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center">
              <Button variant="cta" size="default" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4" />
                  Pedir Orçamento
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300 ${
                isMobileMenuOpen 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-muted text-foreground hover:bg-muted/80'
              }`}
              aria-label="Menu"
            >
              <span className={`transition-all duration-300 ${isMobileMenuOpen ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`}>
                <Menu className="w-5 h-5 absolute inset-0 m-auto" />
              </span>
              <span className={`transition-all duration-300 ${isMobileMenuOpen ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`}>
                <X className="w-5 h-5 absolute inset-0 m-auto" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-background/95 backdrop-blur-lg transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div 
          className={`absolute inset-x-0 top-16 bottom-0 flex flex-col transition-all duration-500 ease-out ${
            isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
          }`}
        >
          <nav className="flex-1 container-ddm py-6 overflow-y-auto">
            {/* Navigation Links */}
            <div className="space-y-2">
              {navLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`group flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 ${
                      isActiveLink(link.href)
                        ? 'bg-primary/15 border border-primary/30'
                        : 'bg-card/50 border border-border/50 active:scale-[0.98]'
                    }`}
                    style={{ 
                      transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                      transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                      opacity: isMobileMenuOpen ? 1 : 0
                    }}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                      isActiveLink(link.href)
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-primary group-hover:bg-primary group-hover:text-primary-foreground'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <span className={`block font-semibold text-base ${
                        isActiveLink(link.href) ? 'text-primary' : 'text-foreground'
                      }`}>
                        {link.label}
                      </span>
                      <span className="text-xs text-muted-foreground">{link.description}</span>
                    </div>
                    <ChevronRight className={`w-5 h-5 transition-all ${
                      isActiveLink(link.href) 
                        ? 'text-primary' 
                        : 'text-muted-foreground group-hover:text-foreground group-hover:translate-x-1'
                    }`} />
                  </Link>
                );
              })}
            </div>

            {/* CTA Section */}
            <div 
              className="mt-8 p-5 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/30"
              style={{ 
                transitionDelay: isMobileMenuOpen ? '200ms' : '0ms',
                transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: isMobileMenuOpen ? 1 : 0
              }}
            >
              <h3 className="font-bold text-foreground text-lg mb-2">Precisa de um orçamento?</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Resposta rápida pelo WhatsApp em minutos.
              </p>
              <Button variant="whatsapp" size="lg" className="w-full" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Chamar no WhatsApp
                </a>
              </Button>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Fixed Bottom CTA */}
      <div className={`md:hidden fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isMobileMenuOpen ? 'translate-y-full' : 'translate-y-0'
      }`}>
        <div className="bg-background/95 backdrop-blur-md border-t border-border safe-area-bottom">
          <div className="container-ddm py-3">
            <Button variant="whatsapp" size="lg" className="w-full shadow-lg" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Orçamento pelo WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;