import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappLink = 'https://wa.me/5531971067272?text=Olá! Gostaria de solicitar um orçamento para locação de máquinas.';

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary to-accent py-12">
        <div className="container-ddm text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Pronto para iniciar sua obra?
          </h2>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
            Entre em contato agora e receba um orçamento rápido. Atendemos Sete Lagoas e toda a região.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Chamar no WhatsApp
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/contato">
                Formulário de Orçamento
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-ddm py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">D</span>
              </div>
              <div>
                <span className="font-bold text-lg text-secondary-foreground">DDM</span>
                <span className="font-medium text-lg text-secondary-foreground/80"> Locações</span>
              </div>
            </div>
            <p className="text-secondary-foreground/70 text-sm mb-4">
              Locação de máquinas com operador experiente em Sete Lagoas e região. Qualidade, pontualidade e segurança em cada serviço.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/equipamentos" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Equipamentos
                </Link>
              </li>
              <li>
                <Link to="/equipamentos/case-580m" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Retroescavadeira Case 580M
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Contato / Orçamento
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2 text-secondary-foreground/70 text-sm">
              <li>Abertura e limpeza de valas</li>
              <li>Terraplanagem e nivelamento</li>
              <li>Limpeza de lotes e terrenos</li>
              <li>Escavação (fossa, cisterna, fundação)</li>
              <li>Barraginhas, açudes, serviços rurais</li>
              <li>Carregamento e movimentação</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-ddm-whatsapp" />
                  (31) 97106-7272
                </a>
              </li>
              <li>
                <a
                  href="tel:+5531971067272"
                  className="flex items-center gap-2 text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  (31) 97106-7272
                </a>
              </li>
              <li className="flex items-start gap-2 text-secondary-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Sete Lagoas - MG e região</span>
              </li>
              <li className="flex items-start gap-2 text-secondary-foreground/70">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Seg - Sáb: 7h às 18h</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container-ddm py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-secondary-foreground/50 text-sm text-center md:text-left">
            © {currentYear} DDM Locações. Todos os direitos reservados.
          </p>
          <p className="text-secondary-foreground/50 text-sm">
            Sete Lagoas - MG | CNPJ: XX.XXX.XXX/0001-XX
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
