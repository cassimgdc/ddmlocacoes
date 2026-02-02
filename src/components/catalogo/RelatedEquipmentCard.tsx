import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Equipamento } from '@/data/equipamentos';
import DDMPlaceholder from '@/components/brand/DDMPlaceholder';

interface RelatedEquipmentCardProps {
  equipamento: Equipamento;
  image: string | null;
}

const RelatedEquipmentCard = ({ equipamento, image }: RelatedEquipmentCardProps) => {
  const statusConfig = {
    disponivel: {
      label: 'Disponível',
      className: 'bg-success/10 text-success border-success/20',
    },
    'sob-consulta': {
      label: 'Sob consulta',
      className: 'bg-muted text-muted-foreground border-border',
    },
    indisponivel: {
      label: 'Indisponível',
      className: 'bg-muted text-muted-foreground border-border',
    },
  };

  const status = statusConfig[equipamento.status];
  const hasImage = image && image !== '/placeholder.svg';

  return (
    <Link
      to={`/catalogo/${equipamento.slug}`}
      className="card-ddm group flex flex-col h-full"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {hasImage ? (
          <img
            src={image}
            alt={equipamento.nome}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <DDMPlaceholder 
            aspectRatio="video" 
            showConsultBadge={equipamento.status !== 'disponivel'}
            className="aspect-[4/3]"
          />
        )}
        
        {/* Status badge - only show if has image */}
        {hasImage && (
          <div className="absolute top-2 left-2">
            <Badge variant="outline" className={`${status.className} text-xs backdrop-blur-sm`}>
              {status.label}
            </Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4">
        <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-1 mb-1">
          {equipamento.nome}
        </h4>
        
        {/* Specs line */}
        <p className="text-xs text-muted-foreground mb-2 line-clamp-1">
          {equipamento.specs.map(s => s.value).join(' • ')}
        </p>
        
        <p className="text-sm text-muted-foreground line-clamp-2 mb-auto">
          {equipamento.descricaoCurta}
        </p>
        
        {/* Price & Link */}
        <div className="flex items-center justify-between pt-3 mt-3 border-t border-border/50">
          {equipamento.preco ? (
            <div>
              <span className="text-xs text-muted-foreground">A partir de</span>
              <p className="text-sm font-semibold text-foreground">{equipamento.preco}</p>
            </div>
          ) : (
            <span className="text-xs text-muted-foreground">Valores sob consulta</span>
          )}
          <span className="text-xs text-muted-foreground group-hover:text-accent transition-colors flex items-center gap-1">
            Ver mais
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default RelatedEquipmentCard;
