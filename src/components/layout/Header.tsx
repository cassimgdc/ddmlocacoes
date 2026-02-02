import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, MessageCircle, ArrowRight, Phone } from 'lucide-react';
import logoImg from '@/assets/logo-ddm.png';
import MobileMenu from './MobileMenu';
import { ThemeToggle } from '@/components/ui/theme-toggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMobileCTA, setShowMobileCTA] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const heroThreshold = window.innerHeight * 0.5;
      const isHomePage = location.pathname === '/';
      setShowMobileCTA(!isHomePage || window.scrollY > heroThreshold);
    };
    
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const navLinks = [
    { href: '/', label: 'Início' },
    { href: '/catalogo', label: 'Catálogo' },
    { href: '/servicos', label: 'Serviços' },
    { href: '/sobre', label: 'Sobre' },
    { href: '/contato', label: 'Contato' },
  ];

  const isActiveLink = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const handleNavClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/98 backdrop-blur-xl shadow-lg shadow-black/10 dark:shadow-black/30 border-b border-border/50'
            : 'bg-transparent'
        }`}
      >
        {/* Top bar - Contact info */}
        <div className={`hidden md:block border-b border-border/30 transition-all duration-300 ${
          isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'
        }`}>
          <div className="container-ddm">
            <div className="flex items-center justify-between py-2 text-sm">
              <div className="flex items-center gap-6">
                <a 
                  href="tel:+5531971067272" 
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>(31) 97106-7272</span>
                </a>
                <span className="text-muted-foreground/50">|</span>
                <span className="text-muted-foreground">
                  Sete Lagoas e Região
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-muted-foreground text-xs">
                  Seg - Sáb: 7h às 18h
                </span>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="container-ddm">
          <div className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? 'h-16 md:h-18' : 'h-16 md:h-20'
          }`}>
            {/* Logo */}
            <Link to="/" className="flex items-center group" onClick={handleNavClick}>
              <img 
                src={logoImg} 
                alt="DDM Locações" 
                className={`w-auto transition-all duration-300 group-hover:scale-105 ${
                  isScrolled ? 'h-10 md:h-14' : 'h-12 md:h-20'
                }`}
                style={{
                  filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.15))'
                }}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={handleNavClick}
                  className={`relative px-4 py-2.5 font-medium text-sm transition-all rounded-lg ${
                    isActiveLink(link.href)
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  {link.label}
                  {isActiveLink(link.href) && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              {isScrolled && <ThemeToggle />}
              <Button variant="cta" size="default" asChild className="group">
                <Link to="/contato">
                  <MessageCircle className="w-4 h-4" />
                  Pedir Orçamento
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </div>

            {/* Mobile Controls */}
            <div className="lg:hidden flex items-center gap-2">
              {/* Mobile CTA */}
              <div className={`transition-all duration-300 ${showMobileCTA ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                <Button variant="cta" size="sm" asChild className="h-9 px-3 text-xs">
                  <Link to="/contato">
                    <MessageCircle className="w-3.5 h-3.5" />
                    Orçamento
                  </Link>
                </Button>
              </div>
              
              <ThemeToggle />
              
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-muted/80 text-foreground hover:bg-primary hover:text-primary-foreground active:scale-95 transition-all"
                aria-label="Abrir menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </>
  );
};

export default Header;