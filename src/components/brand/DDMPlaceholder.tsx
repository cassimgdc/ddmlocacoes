/**
 * DDM Equipment Placeholder - Branded placeholder for items without photos
 * Features: technical pattern + chamfered shape + centered icon
 * Replaces generic empty states throughout the site
 */
import { Cog, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import DDMPattern from './DDMPattern';

interface DDMPlaceholderProps {
  className?: string;
  aspectRatio?: 'video' | 'square' | 'portrait';
  showConsultBadge?: boolean;
  text?: string;
}

const DDMPlaceholder = ({
  className,
  aspectRatio = 'video',
  showConsultBadge = false,
  text = 'Imagem em breve',
}: DDMPlaceholderProps) => {
  const aspectClasses = {
    video: 'aspect-video',
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
  };

  return (
    <div
      className={cn(
        'relative w-full overflow-hidden bg-gradient-to-br from-muted via-muted/90 to-secondary/50',
        aspectClasses[aspectRatio],
        className
      )}
    >
      {/* Technical pattern background */}
      <DDMPattern variant="subtle" />

      {/* Chamfered decorative frame */}
      <div className="absolute inset-3 sm:inset-4">
        {/* Top-right chamfer accent */}
        <div 
          className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-accent/20"
          style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}
        />
        
        {/* Bottom-left chamfer accent */}
        <div 
          className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-accent/20"
          style={{ clipPath: 'polygon(0 100%, 100% 100%, 0 0)' }}
        />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 sm:w-32 h-24 sm:h-32 rounded-full border border-border/40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 sm:w-48 h-36 sm:h-48 rounded-full border border-border/20" />

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 sm:gap-3">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-card/60 backdrop-blur-sm border border-border/60 flex items-center justify-center">
          <Cog className="w-6 h-6 sm:w-7 sm:h-7 text-muted-foreground/60" />
        </div>
        <span className="text-xs sm:text-sm font-medium text-muted-foreground/70 tracking-wide">
          {text}
        </span>
      </div>

      {/* Consult badge */}
      {showConsultBadge && (
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-card/80 backdrop-blur-sm border border-border text-xs font-medium text-muted-foreground">
          <Clock className="w-3 h-3" />
          Em breve
        </div>
      )}

      {/* Brand corner accent */}
      <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-accent/10 to-transparent" />
    </div>
  );
};

export default DDMPlaceholder;
