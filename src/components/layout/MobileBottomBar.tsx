import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MobileBottomBarProps {
  isHidden?: boolean;
}

const whatsappLink = `https://wa.me/5531971067272?text=${encodeURIComponent(
  'Olá! Gostaria de solicitar um orçamento.',
)}`;

const MobileBottomBar = ({ isHidden = false }: MobileBottomBarProps) => {
  return (
    <div
      className={`md:hidden fixed z-[9999] transition-transform duration-300 ${
        isHidden ? 'translate-y-full' : 'translate-y-0'
      }`}
      style={{
        bottom: 'calc(16px + env(safe-area-inset-bottom, 0px))',
        left: '16px',
        right: '16px',
      }}
    >
      <Button variant="whatsapp" size="lg" className="w-full h-14 shadow-xl" asChild>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <MessageCircle className="w-5 h-5" />
          Orçamento pelo WhatsApp
        </a>
      </Button>
    </div>
  );
};

export default MobileBottomBar;
