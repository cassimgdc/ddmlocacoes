/**
 * DDM Steel Bar Divider - Proprietary section separator
 * Features: thin line + copper accent + optional icon
 * Used before major sections throughout the site
 */
import { Cog, Shovel, Truck, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

type DividerIcon = 'cog' | 'shovel' | 'truck' | 'none';

interface SteelDividerProps {
  className?: string;
  icon?: DividerIcon;
  customIcon?: LucideIcon;
  label?: string;
  variant?: 'default' | 'centered' | 'accent';
}

const iconMap: Record<Exclude<DividerIcon, 'none'>, LucideIcon> = {
  cog: Cog,
  shovel: Shovel,
  truck: Truck,
};

const SteelDivider = ({
  className,
  icon = 'cog',
  customIcon,
  label,
  variant = 'default',
}: SteelDividerProps) => {
  const IconComponent = customIcon || (icon !== 'none' ? iconMap[icon] : null);

  if (variant === 'centered') {
    return (
      <div className={cn('flex items-center justify-center gap-4 py-2', className)}>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-border max-w-24" />
        
        {IconComponent && (
          <div className="relative flex items-center justify-center">
            <div className="w-8 h-8 rounded-lg bg-muted/60 border border-border flex items-center justify-center">
              <IconComponent className="w-4 h-4 text-accent" />
            </div>
          </div>
        )}
        
        {label && (
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {label}
          </span>
        )}
        
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-border to-border max-w-24" />
      </div>
    );
  }

  if (variant === 'accent') {
    return (
      <div className={cn('relative flex items-center gap-3 py-1', className)}>
        {/* Copper accent bar */}
        <div className="w-1 h-6 rounded-full bg-accent" />
        
        {/* Main line with gradient */}
        <div className="flex-1 h-px bg-gradient-to-r from-accent/30 via-border to-transparent" />
        
        {IconComponent && (
          <IconComponent className="w-4 h-4 text-accent/60" />
        )}
      </div>
    );
  }

  // Default variant
  return (
    <div className={cn('relative flex items-center gap-3', className)}>
      {/* Copper accent dot */}
      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
      
      {/* Steel line */}
      <div className="flex-1 h-px bg-gradient-to-r from-border via-border/80 to-transparent" />
      
      {IconComponent && (
        <div className="flex items-center gap-2">
          <IconComponent className="w-3.5 h-3.5 text-muted-foreground" />
          <div className="w-8 h-px bg-accent/40" />
        </div>
      )}
    </div>
  );
};

export default SteelDivider;
