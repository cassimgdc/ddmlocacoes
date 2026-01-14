import { MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface MobileBottomBarProps {
  isHidden?: boolean;
}

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
      <Button variant="cta" size="lg" className="w-full h-14 shadow-xl" asChild>
        <Link to="/contato">
          <MessageCircle className="w-5 h-5" />
          Pedir Orçamento
          <ArrowRight className="w-4 h-4" />
        </Link>
      </Button>
    </div>
  );
};

export default MobileBottomBar;
