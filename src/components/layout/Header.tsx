import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Phone } from 'lucide-react';
import logoImg from '@/assets/logo-ddm.png';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMobileCTA, setShowMobileCTA] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const heroThreshold = window.innerHeight * 0.5;
      setShowMobileCTA(!isHomePage || window.scrollY > heroThreshold);
    };
    
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

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
            ? 'bg-card/95 backdrop-blur-lg border-b border-border/60 shadow-sm'
            : isHomePage 
              ? 'bg-transparent' 
              : 'bg-card/95 backdrop-blur-lg border-b border-border/60'
        }`}
      >
        {/* Top bar - Minimal contact info (only on scroll up or non-home) */}
        <div className={`hidden md:block transition-all duration-300 overflow-hidden ${
          isScrolled ? 'max-h-0 opacity-0' : 'max-h-8 opacity-100'
        }`}>
          <div className="container-ddm">
            <div className="flex items-center justify-center py-1.5 text-[11px]">
              <div className="flex items-center gap-3 text-muted-foreground">
                <a 
                  href="tel:+5531971067272" 
                  className="flex items-center gap-1 hover:text-foreground transition-colors"
                >
                  <Phone className="w-2.5 h-2.5" />
                  <span>(31) 97106-7272</span>
                </a>
                <span className="text-border/80">•</span>
                <span>Sete Lagoas e Região</span>
                <span className="text-border/80">•</span>
                <span>Seg - Sáb: 7h às 18h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="container-ddm">
          <div className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? 'h-14' : 'h-14 md:h-16'
          }`}>
            {/* Logo */}
            <Link to="/" className="flex items-center" onClick={handleNavClick}>
              <img 
                src={logoImg} 
                alt="DDM Locações" 
                className={`w-auto transition-all duration-300 ${
                  isScrolled ? 'h-8 md:h-10' : 'h-9 md:h-12'
                }`}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={handleNavClick}
                  className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                    isActiveLink(link.href)
                      ? 'text-foreground bg-muted/80'
                      : isHomePage && !isScrolled
                        ? 'text-white/90 hover:text-white hover:bg-white/10'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Spacer for layout balance */}
            <div className="hidden lg:block w-1" />

            {/* Mobile Controls */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={`w-9 h-9 flex items-center justify-center rounded-lg transition-colors ${
                  isHomePage && !isScrolled
                    ? 'bg-white/10 text-white hover:bg-white/20'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
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