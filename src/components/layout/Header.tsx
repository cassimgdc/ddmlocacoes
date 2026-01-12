import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

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

  const navLinks = [
    { href: '/', label: 'Início' },
    { href: '/equipamentos', label: 'Equipamentos' },
    { href: '/contato', label: 'Contato' },
  ];

  const whatsappLink = 'https://wa.me/5531971067272?text=Olá! Gostaria de solicitar um orçamento para locação de máquinas.';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-card/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container-ddm">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">D</span>
                </div>
                <div className="hidden sm:block">
                  <span className={`font-bold text-lg ${isScrolled ? 'text-foreground' : 'text-white'}`}>
                    DDM
                  </span>
                  <span className={`font-medium text-lg ${isScrolled ? 'text-muted-foreground' : 'text-white/80'}`}>
                    {' '}Locações
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`font-medium transition-colors hover:text-primary ${
                    location.pathname === link.href
                      ? 'text-primary'
                      : isScrolled
                      ? 'text-foreground'
                      : 'text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:+5531971067272"
                className={`flex items-center gap-2 font-medium ${
                  isScrolled ? 'text-foreground' : 'text-white'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>(31) 97106-7272</span>
              </a>
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
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled
                  ? 'text-foreground hover:bg-muted'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-card shadow-xl transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <nav className="container-ddm py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                  location.pathname === link.href
                    ? 'bg-primary/10 text-primary'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <hr className="my-2 border-border" />
            <a
              href="tel:+5531971067272"
              className="flex items-center gap-2 px-4 py-3 text-foreground font-medium"
            >
              <Phone className="w-4 h-4" />
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
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border p-3 flex gap-2">
        <Button variant="whatsapp" size="lg" className="flex-1" asChild>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
        </Button>
        <Button variant="cta" size="lg" className="flex-1" asChild>
          <Link to="/contato">
            Orçamento
          </Link>
        </Button>
      </div>
    </>
  );
};

export default Header;
