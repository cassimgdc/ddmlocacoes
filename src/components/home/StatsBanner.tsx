import { LucideIcon } from 'lucide-react';

interface Stat {
  icon: LucideIcon;
  value: string;
  label: string;
}

interface StatsBannerProps {
  stats: Stat[];
  className?: string;
}

const StatsBanner = ({ stats, className = '' }: StatsBannerProps) => {
  return (
    <div className={`w-full py-6 md:py-8 bg-secondary/50 border-y border-border/50 ${className}`}>
      <div className="container-ddm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="flex flex-col items-center text-center opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-2xl md:text-3xl font-display font-black text-foreground mb-1">
                {stat.value}
              </span>
              <span className="text-sm text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsBanner;
