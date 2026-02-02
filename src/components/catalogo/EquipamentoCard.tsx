import { ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Equipamento } from '@/data/equipamentos';
import case580m from '@/assets/case-580m.png';

interface EquipamentoCardProps {
  equipamento: Equipamento;
  onQuote: (equipamento: Equipamento) => void;
  delay?: number;
}

// Helper to check if equipment has a real image
const getEquipmentImage = (equipamento: Equipamento): string => {
  if (equipamento.slug === 'retroescavadeira-case-580m') {
    return case580m;
  }
  return equipamento.imagemPlaceholder;
};

const isPlaceholderImage = (equipamento: Equipamento): boolean => {
  return equipamento.slug !== 'retroescavadeira-case-580m';
};

const EquipamentoCard = ({ equipamento, onQuote, delay = 0 }: EquipamentoCardProps) => {
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
  const hasRealImage = !isPlaceholderImage(equipamento);
  const imageSrc = getEquipmentImage(equipamento);

  return (
    <div
      className="group card-premium overflow-hidden opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Image */}
      <Link to={`/catalogo/${equipamento.slug}`} className="block relative aspect-[4/3] overflow-hidden bg-secondary/50">
        {hasRealImage ? (
          <img
            src={imageSrc}
            alt={equipamento.nome}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          /* Placeholder - Coming Soon overlay */
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-muted/80 via-secondary/60 to-muted/80 p-6">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-3">
              <Clock className="w-8 h-8 text-primary/60" />
            </div>
            <p className="text-sm font-semibold text-foreground/80 text-center">Foto em breve</p>
            <p className="text-xs text-muted-foreground text-center mt-1">Equipamento disponível</p>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent" />
        
        {/* Status badge */}
        <div className="absolute top-3 left-3">
          <Badge variant="outline" className={`${status.className} font-medium`}>
            {status.label}
          </Badge>
        </div>

        {/* Featured badge */}
        {equipamento.destaque && (
          <div className="absolute top-3 right-3">
            <Badge className="bg-primary text-primary-foreground font-bold">
              Destaque
            </Badge>
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="p-4 md:p-5 space-y-3">
        {/* Title */}
        <Link to={`/catalogo/${equipamento.slug}`}>
          <h3 className="font-display font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
            {equipamento.nome}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
          {equipamento.descricaoCurta}
        </p>

        {/* Specs chips */}
        <div className="flex flex-wrap gap-2">
          {equipamento.specs.slice(0, 3).map((spec) => (
            <span
              key={spec.label}
              className="inline-flex items-center px-2.5 py-1 rounded-md bg-muted/50 text-xs text-muted-foreground"
            >
              <span className="font-medium text-foreground mr-1">{spec.value}</span>
              {spec.label}
            </span>
          ))}
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-2 border-t border-border/50">
          <div>
            {equipamento.preco ? (
              <>
                <p className="text-xs text-muted-foreground">A partir de</p>
                <p className="font-bold text-primary">{equipamento.preco}</p>
              </>
            ) : (
              <p className="text-sm text-muted-foreground">Sob consulta</p>
            )}
          </div>
          <Button
            variant="cta"
            size="sm"
            onClick={() => onQuote(equipamento)}
            className="group/btn"
          >
            Orçar
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EquipamentoCard;
