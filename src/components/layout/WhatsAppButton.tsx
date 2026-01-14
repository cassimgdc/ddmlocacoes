import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const whatsappNumber = '5531971067272';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-ddm-whatsapp text-white rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
      style={{
        bottom: 'calc(24px + env(safe-area-inset-bottom, 0px))',
      }}
      aria-label="Falar pelo WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-ddm-success rounded-full animate-ping" />
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-ddm-success rounded-full" />
    </a>
  );
};

export default WhatsAppButton;
