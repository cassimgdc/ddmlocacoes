import { MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhatsAppButton = () => {
  return (
    <Link
      to="/contato"
      className="hidden md:flex fixed bottom-6 right-6 z-50 items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 group"
      aria-label="Solicitar orçamento"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="font-semibold">Pedir Orçamento</span>
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-ddm-success rounded-full animate-ping" />
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-ddm-success rounded-full" />
    </Link>
  );
};

export default WhatsAppButton;
