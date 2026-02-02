import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const whatsappNumber = '5531971067272';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 bg-card text-success rounded-xl border border-border shadow-elevated hover:shadow-lg hover:border-success/50 transition-all duration-200"
      style={{
        bottom: 'calc(24px + env(safe-area-inset-bottom, 0px))',
      }}
      aria-label="Falar pelo WhatsApp"
    >
      <MessageCircle className="w-5 h-5" />
    </a>
  );
};

export default WhatsAppButton;
