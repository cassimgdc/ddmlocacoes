import { LucideIcon } from 'lucide-react';

interface DifferentialItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const DifferentialItem = ({ icon: Icon, title, description, delay = 0 }: DifferentialItemProps) => {
  return (
    <div 
      className="group flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-all duration-300 opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-cta group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-6 h-6 text-primary-foreground" />
      </div>
      <div>
        <h3 className="font-bold text-foreground mb-1">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default DifferentialItem;
