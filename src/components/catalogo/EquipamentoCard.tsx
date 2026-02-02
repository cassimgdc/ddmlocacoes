import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Equipamento } from '@/data/equipamentos';
import DDMPlaceholder from '@/components/brand/DDMPlaceholder';
import case580m from '@/assets/case-580m.png';

interface EquipamentoCardProps {
  equipamento: Equipamento;
  onQuote: (equipamento: Equipamento) => void;
  delay?: number;
}

// Helper to get equipment image
const getEquipmentImage = (equipamento: Equipamento): string | null => {
  if (equipamento.slug === 'retroescavadeira-case-580m') {
    return case580m;
  }
  // Return null for placeholder
  if (equipamento.imagemPlaceholder === '/placeholder.svg') {
    return null;
  }
  return equipamento.imagemPlaceholder;
};

const EquipamentoCard = ({ equipamento, onQuote, delay = 0 }: EquipamentoCardProps) => {
  const imageSrc = getEquipmentImage(equipamento);
  
  const statusConfig = {
    disponivel: {
      label: 'Disponível',
      className: 'bg-success/10 text-success border-success/20',
    },
    'sob-consulta': {
      label: 'Em breve',
      className: 'bg-muted text-muted-foreground border-border',
    },
    indisponivel: {
      label: 'Indisponível',
      className: 'bg-muted text-muted-foreground border-border',
    },
  };

  const status = statusConfig[equipamento.status];

  return (
    <div
      className="card-ddm group flex flex-col h-full"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Image */}
      <Link to={`/catalogo/${equipamento.slug}`} className="block relative aspect-[4/3] overflow-hidden">
        {imageSrc ? (
          <img
            src={imageSrc}
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
        
        {/* Status badge */}
        {imageSrc && (
          <div className="absolute top-2 left-2">
            <Badge variant="outline" className={`${status.className} text-xs backdrop-blur-sm`}>
              {status.label}
            </Badge>
          </div>
        )}

        {/* Featured badge */}
        {equipamento.destaque && (
          <div className="absolute top-2 right-2">
            <Badge className="bg-accent/90 text-white border-0 text-xs">
              Destaque
            </Badge>
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4">
        {/* Title */}
        <Link to={`/catalogo/${equipamento.slug}`}>
          <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-1 mb-1">
            {equipamento.nome}
          </h3>
        </Link>

        {/* Specs as metadata line */}
        <p className="text-xs text-muted-foreground mb-3 line-clamp-1">
          {equipamento.specs.map(s => s.value).join(' • ')}
        </p>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-auto">
          {equipamento.descricaoCurta}
        </p>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-3 mt-3 border-t border-border/50">
          <div className="min-w-0">
            {equipamento.preco ? (
              <div>
                <span className="text-xs text-muted-foreground">A partir de</span>
                <p className="text-sm font-semibold text-foreground">{equipamento.preco}</p>
              </div>
            ) : (
              <span className="text-xs text-muted-foreground">Em breve</span>
            )}
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Link 
              to={`/catalogo/${equipamento.slug}`}
              className="text-xs text-muted-foreground hover:text-accent transition-colors flex items-center gap-1"
            >
              Detalhes
              <ArrowRight className="w-3 h-3" />
            </Link>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onQuote(equipamento)}
              className="h-7 text-xs px-3"
            >
              Orçar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipamentoCard;
