import { Cog } from 'lucide-react';

interface EquipmentPlaceholderProps {
  className?: string;
}

const EquipmentPlaceholder = ({ className = '' }: EquipmentPlaceholderProps) => {
  return (
    <div className={`relative w-full h-full flex flex-col items-center justify-center overflow-hidden ${className}`}>
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted via-muted/80 to-secondary/50" />
      
      {/* Technical SVG pattern */}
      <div 
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(45deg, currentColor 1px, transparent 1px),
            linear-gradient(-45deg, currentColor 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 10px 10px',
        }}
      />
      
      {/* Decorative circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-border/30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-border/20" />
      
      {/* Icon and text */}
      <div className="relative z-10 flex flex-col items-center gap-2 text-muted-foreground/60">
        <Cog className="w-10 h-10" />
        <span className="text-xs font-medium tracking-wide uppercase">Imagem em breve</span>
      </div>
    </div>
  );
};

export default EquipmentPlaceholder;
