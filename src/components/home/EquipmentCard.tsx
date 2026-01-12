import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface EquipmentCardProps {
  id: string;
  name: string;
  image: string;
  available: boolean;
  tags: string[];
  services: string[];
  comingSoon?: boolean;
  delay?: number;
}

const EquipmentCard = ({ 
  id, 
  name, 
  image, 
  available, 
  tags, 
  services, 
  comingSoon = false,
  delay = 0 
}: EquipmentCardProps) => {
  const whatsappLink = `https://wa.me/5531971067272?text=Olá! Gostaria de solicitar um orçamento para a ${name}.`;

  return (
    <div 
      className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 border border-border/50 opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Image */}
      <div className="relative h-48 bg-muted overflow-hidden">
        {comingSoon ? (
          <div className="w-full h-full flex items-center justify-center bg-secondary/50">
            <span className="text-secondary-foreground/50 font-semibold text-lg">Em breve</span>
          </div>
        ) : (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        )}
        
        {/* Availability Badge */}
        <div className="absolute top-3 right-3">
          {available ? (
            <Badge className="bg-ddm-success text-white flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              Disponível
            </Badge>
          ) : comingSoon ? (
            <Badge variant="secondary">Em breve</Badge>
          ) : (
            <Badge variant="outline" className="bg-card/80 backdrop-blur-sm">Indisponível</Badge>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-foreground mb-3">{name}</h3>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs font-medium">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Services Preview */}
        <ul className="space-y-1 mb-4">
          {services.slice(0, 3).map((service) => (
            <li key={service} className="text-sm text-muted-foreground flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              {service}
            </li>
          ))}
          {services.length > 3 && (
            <li className="text-sm text-primary font-medium">
              +{services.length - 3} serviços
            </li>
          )}
        </ul>

        {/* Actions */}
        {!comingSoon && (
          <div className="flex gap-2">
            <Button variant="cta" size="sm" className="flex-1" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Orçamento
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link to={`/equipamentos/${id}`}>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EquipmentCard;
