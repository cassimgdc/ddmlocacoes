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
      className="flex items-start gap-4 opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 text-primary-foreground" />
      </div>
      <div>
        <h3 className="font-bold text-foreground mb-1">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
};

export default DifferentialItem;
