import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Equipamento } from '@/data/equipamentos';

interface RelatedEquipmentCardProps {
  equipamento: Equipamento;
  image: string;
}

const RelatedEquipmentCard = ({ equipamento, image }: RelatedEquipmentCardProps) => {
  const statusConfig = {
    disponivel: {
      label: 'Disponível',
      className: 'bg-ddm-success/10 text-ddm-success border-ddm-success/20',
    },
    'sob-consulta': {
      label: 'Sob consulta',
      className: 'bg-accent/10 text-accent border-accent/20',
    },
    indisponivel: {
      label: 'Indisponível',
      className: 'bg-muted text-muted-foreground border-border',
    },
  };

  const status = statusConfig[equipamento.status];

  return (
    <Link
      to={`/catalogo/${equipamento.slug}`}
      className="group block card-premium overflow-hidden hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary/50">
        <img
          src={image}
          alt={equipamento.nome}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent" />
        
        {/* Status badge */}
        <div className="absolute top-2 left-2">
          <Badge variant="outline" className={`${status.className} text-xs`}>
            {status.label}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h4 className="font-display font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1 mb-1">
          {equipamento.nome}
        </h4>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
          {equipamento.descricaoCurta}
        </p>
        <div className="flex items-center justify-between">
          {equipamento.preco ? (
            <span className="text-sm font-semibold text-primary">{equipamento.preco}</span>
          ) : (
            <span className="text-xs text-muted-foreground">Sob consulta</span>
          )}
          <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors flex items-center gap-1">
            Ver mais
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default RelatedEquipmentCard;
