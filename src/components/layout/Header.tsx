import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, MessageCircle, Phone } from 'lucide-react';
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled
            ? 'bg-card/98 backdrop-blur-md shadow-soft border-b border-border'
            : 'bg-transparent'
        }`}
      >
        {/* Top bar - Contact info */}
        <div className={`hidden md:block border-b border-border/50 bg-card transition-all duration-200 ${
          isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'
        }`}>
          <div className="container-ddm">
            <div className="flex items-center justify-between py-2 text-xs">
              <div className="flex items-center gap-4">
                <a 
                  href="tel:+5531971067272" 
                  className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="w-3 h-3" />
                  <span>(31) 97106-7272</span>
                </a>
                <span className="text-border">|</span>
                <span className="text-muted-foreground">
                  Sete Lagoas e Região
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-muted-foreground">
                  Seg - Sáb: 7h às 18h
                </span>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="container-ddm">
          <div className={`flex items-center justify-between transition-all duration-200 ${
            isScrolled ? 'h-14 md:h-16' : 'h-14 md:h-18'
          }`}>
            {/* Logo */}
            <Link to="/" className="flex items-center" onClick={handleNavClick}>
              <img 
                src={logoImg} 
                alt="DDM Locações" 
                className={`w-auto transition-all duration-200 ${
                  isScrolled ? 'h-8 md:h-12' : 'h-10 md:h-16'
                }`}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={handleNavClick}
                  className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                    isActiveLink(link.href)
                      ? 'text-foreground bg-muted'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              {isScrolled && <ThemeToggle />}
              <Button variant="default" size="default" asChild>
                <Link to="/contato">
                  <MessageCircle className="w-4 h-4" />
                  Pedir Orçamento
                </Link>
              </Button>
            </div>

            {/* Mobile Controls */}
            <div className="lg:hidden flex items-center gap-2">
              {/* Mobile CTA */}
              <div className={`transition-all duration-200 ${showMobileCTA ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <Button variant="default" size="sm" asChild className="h-8 px-3 text-xs">
                  <Link to="/contato">
                    <MessageCircle className="w-3.5 h-3.5" />
                    Orçamento
                  </Link>
                </Button>
              </div>
              
              <ThemeToggle />
              
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
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
