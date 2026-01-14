import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MobileBottomBarProps {
  isHidden?: boolean;
}

const whatsappLink = 'https://wa.me/5531971067272?text=Olá! Gostaria de solicitar um orçamento.';

const MobileBottomBar = ({ isHidden = false }: MobileBottomBarProps) => {
  return (
    <div 
      className={`md:hidden fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ${
        isHidden ? 'translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="bg-background/95 backdrop-blur-md border-t border-border px-4 py-3 safe-area-bottom">
        <Button variant="whatsapp" size="lg" className="w-full h-12" asChild>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-5 h-5" />
            Orçamento pelo WhatsApp
          </a>
        </Button>
      </div>
    </div>
  );
};

export default MobileBottomBar;
