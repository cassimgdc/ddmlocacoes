import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard = ({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) => {
  return (
    <div 
      className="group relative card-premium p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Glow on hover */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-primary/0 via-primary/0 to-accent/0 opacity-0 group-hover:opacity-100 group-hover:from-primary/20 group-hover:via-primary/10 group-hover:to-accent/20 transition-all duration-500 -z-10 blur-sm" />
      
      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
        <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
      </div>
      
      <h3 className="text-lg font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;
