import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, MessageCircle, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll spy for home page sections
      if (location.pathname === '/') {
        const sections = ['servicos', 'equipamentos', 'precos', 'orcamento', 'faq'];
        for (const section of sections.reverse()) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100) {
              setActiveSection(section);
              return;
            }
          }
        }
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { href: '/', label: 'Início', section: '' },
    { href: '/#servicos', label: 'Serviços', section: 'servicos' },
    { href: '/#equipamentos', label: 'Equipamento', section: 'equipamentos' },
    { href: '/#precos', label: 'Preços', section: 'precos' },
    { href: '/#orcamento', label: 'Orçamento', section: 'orcamento' },
    { href: '/#faq', label: 'FAQ', section: 'faq' },
  ];

  const whatsappLink = 'https://wa.me/5531971067272?text=Olá! Gostaria de solicitar um orçamento para locação de retroescavadeira.';

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const section = href.replace('/#', '');
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isLinkActive = (section: string) => {
    if (location.pathname !== '/') return false;
    if (section === '' && activeSection === '') return true;
    return activeSection === section;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50'
            : 'bg-transparent'
        }`}
      >
        <div className="container-ddm">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-11 h-11 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-cta group-hover:scale-110 transition-transform duration-300">
                  <span className="text-primary-foreground font-black text-xl">D</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-accent/30 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
              <div className="hidden sm:block">
                <span className="font-black text-xl text-foreground">
                  DDM
                </span>
                <span className="font-medium text-xl text-muted-foreground">
                  {' '}Locações
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-4 py-2 font-medium text-sm transition-colors rounded-lg ${
                    isLinkActive(link.section)
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.label}
                  {isLinkActive(link.section) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-primary rounded-full" />
                  )}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+5531971067272"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <div className="w-9 h-9 bg-muted rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-semibold text-sm">(31) 97106-7272</span>
              </a>
              <Button variant="cta" size="default" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4" />
                  Orçamento
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-lg border-b border-border shadow-xl transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
          }`}
        >
          <nav className="container-ddm py-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  handleNavClick(e, link.href);
                  setIsMobileMenuOpen(false);
                }}
                className={`px-4 py-3 rounded-xl font-medium transition-colors ${
                  isLinkActive(link.section)
                    ? 'bg-primary/10 text-primary'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                {link.label}
              </a>
            ))}
            <hr className="my-3 border-border" />
            <a
              href="tel:+5531971067272"
              className="flex items-center gap-3 px-4 py-3 text-foreground font-medium"
            >
              <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              (31) 97106-7272
            </a>
            <Button variant="cta" size="lg" className="mx-4 mt-2" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Pedir Orçamento
              </a>
            </Button>
          </nav>
        </div>
      </header>

      {/* Mobile Fixed CTA Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-border p-3 flex gap-2">
        <Button variant="whatsapp" size="lg" className="flex-1" asChild>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
        </Button>
        <Button variant="cta" size="lg" className="flex-1" asChild>
          <a href="/#orcamento" onClick={(e) => handleNavClick(e, '/#orcamento')}>
            Orçamento Rápido
          </a>
        </Button>
      </div>
    </>
  );
};

export default Header;
