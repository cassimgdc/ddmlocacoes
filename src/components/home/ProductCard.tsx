import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price?: string;
  href: string;
  featured?: boolean;
  delay?: number;
}

const ProductCard = ({ 
  image, 
  title, 
  description, 
  price, 
  href, 
  featured = false,
  delay = 0 
}: ProductCardProps) => {
  return (
    <div 
      className={`group relative card-premium overflow-hidden opacity-0 animate-fade-in-up ${
        featured ? 'border-primary/30' : ''
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Featured badge */}
      {featured && (
        <div className="absolute top-3 right-3 z-10">
          <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
            Destaque
          </span>
        </div>
      )}
      
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary/50">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
      </div>
      
      {/* Content */}
      <div className="p-4 md:p-5">
        <h3 className="font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="flex items-center justify-between gap-3">
          {price && (
            <div>
              <p className="text-xs text-muted-foreground">A partir de</p>
              <p className="font-bold text-primary">{price}</p>
            </div>
          )}
          <Button variant="outline" size="sm" asChild className="ml-auto group/btn">
            <Link to={href}>
              Ver detalhes
              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
