import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, MessageCircle } from 'lucide-react';
import logoImg from '@/assets/logo-ddm.png';
import MobileMenu from './MobileMenu';
import MobileBottomBar from './MobileBottomBar';

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

  const navLinks = [
    { href: '/', label: 'Início' },
    { href: '/servicos', label: 'Serviços' },
    { href: '/equipamento', label: 'Equipamento' },
    { href: '/contato', label: 'Contato' },
  ];

  const whatsappLink = `https://wa.me/5531971067272?text=${encodeURIComponent(
    'Olá! Gostaria de solicitar um orçamento.',
  )}`;

  const isActiveLink = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

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
                className="h-12 md:h-28 w-auto transition-all duration-300 group-hover:scale-105 group-hover:brightness-110 group-hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.4)]"
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
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-muted text-foreground hover:bg-muted/80 active:scale-95 transition-all"
              aria-label="Abrir menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />

      {/* Mobile Bottom CTA Bar */}
      <MobileBottomBar isHidden={isMobileMenuOpen} />
    </>
  );
};

export default Header;