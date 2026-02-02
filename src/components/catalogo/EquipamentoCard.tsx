import { ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Equipamento } from '@/data/equipamentos';
import case580m from '@/assets/case-580m.png';

interface EquipamentoCardProps {
  equipamento: Equipamento;
  onQuote: (equipamento: Equipamento) => void;
  delay?: number;
}

// Helper to get equipment image
const getEquipmentImage = (equipamento: Equipamento): string => {
  if (equipamento.slug === 'retroescavadeira-case-580m') {
    return case580m;
  }
  return equipamento.imagemPlaceholder;
};

const EquipamentoCard = ({ equipamento, onQuote, delay = 0 }: EquipamentoCardProps) => {
  const isAvailable = equipamento.status === 'disponivel';
  const imageSrc = getEquipmentImage(equipamento);

  return (
    <div
      className="group rounded-lg bg-card border border-border overflow-hidden hover:border-copper/30 transition-all"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Image */}
      <Link to={`/catalogo/${equipamento.slug}`} className="block relative aspect-[4/3] overflow-hidden bg-muted">
        {isAvailable ? (
          <>
            <img
              src={imageSrc}
              alt={equipamento.nome}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            
            {/* Status badge */}
            <span className="absolute top-2 left-2 text-xs px-2 py-0.5 rounded bg-success/90 text-white font-medium">
              Disponível
            </span>

            {/* Featured badge */}
            {equipamento.destaque && (
              <span className="absolute top-2 right-2 text-xs px-2 py-0.5 rounded bg-copper/90 text-white font-medium">
                Destaque
              </span>
            )}
          </>
        ) : (
          /* Coming Soon overlay for unavailable equipment */
          <div className="w-full h-full flex flex-col items-center justify-center bg-muted p-4">
            <Clock className="w-10 h-10 text-muted-foreground/50 mb-2" />
            <p className="text-sm font-medium text-muted-foreground">Em Breve</p>
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="p-3 space-y-2">
        {/* Title */}
        <Link to={`/catalogo/${equipamento.slug}`}>
          <h3 className="font-medium text-foreground text-sm group-hover:text-copper transition-colors line-clamp-1">
            {equipamento.nome}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
          {equipamento.descricaoCurta}
        </p>

        {/* Specs as metadata line (not chips) */}
        <p className="text-xs text-muted-foreground">
          {equipamento.specs.map(s => s.value).join(' • ')}
        </p>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-2 border-t border-border/50">
          <div>
            {equipamento.preco ? (
              <span className="text-sm font-medium text-copper">{equipamento.preco}</span>
            ) : (
              <span className="text-xs text-muted-foreground">Sob consulta</span>
            )}
          </div>
          <div className="flex gap-1.5">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="h-7 text-xs px-2"
            >
              <Link to={`/catalogo/${equipamento.slug}`}>
                Detalhes
              </Link>
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={() => onQuote(equipamento)}
              className="h-7 text-xs px-2"
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
