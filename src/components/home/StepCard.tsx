import { LucideIcon } from 'lucide-react';

interface StepCardProps {
  icon: LucideIcon;
  step: number;
  title: string;
  description: string;
  delay?: number;
  isLast?: boolean;
}

const StepCard = ({ icon: Icon, step, title, description, delay = 0, isLast = false }: StepCardProps) => {
  return (
    <div 
      className="relative flex flex-col items-center text-center opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Step number badge */}
      <div className="relative mb-4">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-cta">
          <Icon className="w-7 h-7 text-primary-foreground" />
        </div>
        <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-card border-2 border-primary flex items-center justify-center text-sm font-bold text-primary">
          {step}
        </span>
      </div>
      
      {/* Content */}
      <h3 className="font-display font-bold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed max-w-[200px]">{description}</p>
      
      {/* Connector line (hidden on last item) */}
      {!isLast && (
        <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-gradient-to-r from-primary/50 via-primary/20 to-transparent" />
      )}
    </div>
  );
};

export default StepCard;
