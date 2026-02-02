import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Equipamento } from '@/data/equipamentos';

interface EquipamentoCardProps {
  equipamento: Equipamento;
  onQuote: (equipamento: Equipamento) => void;
  delay?: number;
}

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

  return (
    <div
      className="group card-premium overflow-hidden opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Image */}
      <Link to={`/catalogo/${equipamento.slug}`} className="block relative aspect-[4/3] overflow-hidden bg-secondary/50">
        <img
          src={equipamento.imagemPlaceholder}
          alt={equipamento.nome}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
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
