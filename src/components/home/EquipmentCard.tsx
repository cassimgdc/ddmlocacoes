import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';

interface EquipmentCardProps {
  id: string;
  name: string;
  image: string;
  available: boolean;
  tags: string[];
  services: string[];
  comingSoon?: boolean;
  featured?: boolean;
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
  featured = false,
  delay = 0 
}: EquipmentCardProps) => {
  if (featured) {
    return (
      <div 
        className="relative card-premium card-glow overflow-hidden opacity-0 animate-fade-in-up"
        style={{ animationDelay: `${delay}ms` }}
      >
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Image Side */}
          <div className="relative h-64 lg:h-auto overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-card via-card/50 to-transparent" />
            
            {/* Availability Badge */}
            <div className="absolute top-4 left-4">
              <Badge className="bg-ddm-success text-white shadow-lg flex items-center gap-1.5 px-3 py-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Disponível agora
              </Badge>
            </div>
          </div>

          {/* Content Side */}
          <div className="p-8 lg:p-10 flex flex-col justify-center">
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs font-medium bg-primary/10 text-primary border-primary/20">
                  {tag}
                </Badge>
              ))}
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">{name}</h3>
            
            <p className="text-muted-foreground mb-6">
              Máquina versátil e potente, ideal para diversos tipos de serviço em obras residenciais, comerciais e rurais.
            </p>

            {/* Services */}
            <div className="mb-8">
              <h4 className="font-semibold text-foreground mb-3">O que ela faz:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {services.map((service) => (
                  <li key={service} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="cta" size="lg" className="flex-1 group" asChild>
                <Link to="/contato">
                  <MessageCircle className="w-5 h-5" />
                  Pedir Orçamento
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to={`/equipamentos/${id}`}>
                  Ver detalhes
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Standard card (for coming soon items)
  return (
    <div 
      className="group card-premium overflow-hidden hover:-translate-y-2 transition-all duration-300 opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Image */}
      <div className="relative h-48 bg-muted overflow-hidden">
        {comingSoon ? (
          <div className="w-full h-full flex items-center justify-center bg-secondary/50">
            <span className="text-muted-foreground font-semibold text-lg">Em breve</span>
          </div>
        ) : (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        )}
        
        {/* Badge */}
        <div className="absolute top-3 right-3">
          {available ? (
            <Badge className="bg-ddm-success text-white flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              Disponível
            </Badge>
          ) : comingSoon ? (
            <Badge variant="secondary" className="bg-secondary">Em breve</Badge>
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
            <Badge key={tag} variant="secondary" className="text-xs font-medium bg-muted text-muted-foreground">
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
        </ul>

        {/* Actions */}
        {!comingSoon && (
          <div className="flex gap-2">
            <Button variant="cta" size="sm" className="flex-1" asChild>
              <Link to="/contato">
                Orçamento
              </Link>
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
