import { LucideIcon } from 'lucide-react';

interface QuoteTipCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const QuoteTipCard = ({ icon: Icon, title, description, delay = 0 }: QuoteTipCardProps) => {
  return (
    <div 
      className="group flex items-start gap-4 p-5 card-premium rounded-xl hover:border-primary/30 transition-all duration-300 opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
        <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
      </div>
      <div>
        <h4 className="font-bold text-foreground mb-1">{title}</h4>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default QuoteTipCard;
