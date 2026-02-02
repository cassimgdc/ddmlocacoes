import { LucideIcon, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  delay?: number;
}

const CategoryCard = ({ icon: Icon, title, description, href, delay = 0 }: CategoryCardProps) => {
  return (
    <Link 
      to={href}
      className="group block card-premium p-5 md:p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
          <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">{description}</p>
        </div>
        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
      </div>
    </Link>
  );
};

export default CategoryCard;
