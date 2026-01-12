import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const whatsappLink = 'https://wa.me/5531971067272?text=Olá! Gostaria de solicitar um orçamento para locação de máquinas.';

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="hidden md:flex fixed bottom-6 right-6 z-50 items-center gap-2 bg-ddm-whatsapp text-white px-5 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 group"
      aria-label="Conversar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="font-semibold">WhatsApp</span>
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-ping" />
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full" />
    </a>
  );
};

export default WhatsAppButton;
