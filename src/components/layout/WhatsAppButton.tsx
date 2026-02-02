import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const whatsappNumber = '5531971067272';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-ddm-whatsapp text-white rounded-xl shadow-lg hover:scale-110 hover:shadow-[0_12px_40px_-8px_hsl(142_70%_45%_/_0.5)] transition-all duration-300 group"
      style={{
        bottom: 'calc(24px + env(safe-area-inset-bottom, 0px))',
      }}
      aria-label="Falar pelo WhatsApp"
    >
      <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping" />
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full" />
    </a>
  );
};

export default WhatsAppButton;