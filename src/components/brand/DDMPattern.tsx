/**
 * DDM Technical Pattern - Proprietary SVG background pattern
 * Used for hero overlays, placeholders, and section accents
 * Maintains 4-8% opacity as per brand guidelines
 */
import { cn } from '@/lib/utils';

interface DDMPatternProps {
  className?: string;
  variant?: 'full' | 'subtle' | 'minimal';
  animated?: boolean;
}

const DDMPattern = ({ className, variant = 'subtle', animated = false }: DDMPatternProps) => {
  const opacityMap = {
    full: 'opacity-[0.08]',
    subtle: 'opacity-[0.05]',
    minimal: 'opacity-[0.03]',
  };

  return (
    <div 
      className={cn(
        'absolute inset-0 pointer-events-none overflow-hidden',
        opacityMap[variant],
        className
      )}
      aria-hidden="true"
    >
      {/* Primary diagonal grid */}
      <svg
        className={cn(
          'absolute inset-0 w-full h-full',
          animated && 'animate-[drift_60s_linear_infinite]'
        )}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="ddm-technical-grid"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            {/* Diagonal lines */}
            <line
              x1="0"
              y1="40"
              x2="40"
              y2="0"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-foreground"
            />
            {/* Horizontal accent */}
            <line
              x1="0"
              y1="20"
              x2="40"
              y2="20"
              stroke="currentColor"
              strokeWidth="0.3"
              className="text-foreground"
              strokeDasharray="4 6"
            />
          </pattern>
          
          {/* Corner chamfer accent pattern */}
          <pattern
            id="ddm-chamfer-grid"
            x="0"
            y="0"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            {/* Chamfer corner shape */}
            <polygon
              points="70,0 80,0 80,10"
              fill="currentColor"
              className="text-accent"
              opacity="0.4"
            />
            {/* Grid intersection */}
            <circle
              cx="40"
              cy="40"
              r="1"
              fill="currentColor"
              className="text-foreground"
            />
          </pattern>
        </defs>
        
        <rect width="100%" height="100%" fill="url(#ddm-technical-grid)" />
        <rect width="100%" height="100%" fill="url(#ddm-chamfer-grid)" />
      </svg>
    </div>
  );
};

export default DDMPattern;
