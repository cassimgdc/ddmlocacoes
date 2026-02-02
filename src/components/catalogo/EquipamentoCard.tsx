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
      className="group rounded-xl bg-card border border-border overflow-hidden hover:border-copper/30 transition-all"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Image */}
      <Link to={`/catalogo/${equipamento.slug}`} className="block relative aspect-[4/3] overflow-hidden bg-secondary/50">
        {isAvailable ? (
          <>
            <img
              src={imageSrc}
              alt={equipamento.nome}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent" />
            
            {/* Available badge */}
            <div className="absolute top-3 left-3">
              <span className="badge-available">
                <span className="w-1.5 h-1.5 rounded-full bg-success" />
                Disponível
              </span>
            </div>

            {/* Featured badge */}
            {equipamento.destaque && (
              <div className="absolute top-3 right-3">
                <span className="badge-copper">Destaque</span>
              </div>
            )}
          </>
        ) : (
          /* Coming Soon overlay for unavailable equipment */
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-muted via-secondary/80 to-muted p-6 relative">
            <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-3">
              <Clock className="w-8 h-8 text-accent" />
            </div>
            <p className="text-base font-bold text-foreground text-center">Em Breve</p>
            <p className="text-xs text-muted-foreground text-center mt-1 max-w-[140px]">
              Este equipamento estará disponível em breve
            </p>
            
            {/* Coming soon badge */}
            <div className="absolute top-3 left-3">
              <span className="badge-consult">Em breve</span>
            </div>
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="p-4 md:p-5 space-y-3">
        {/* Title */}
        <Link to={`/catalogo/${equipamento.slug}`}>
          <h3 className="font-medium text-foreground group-hover:text-copper transition-colors line-clamp-1">
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
                <p className="font-semibold text-copper">{equipamento.preco}</p>
              </>
            ) : (
              <p className="text-sm text-muted-foreground">Sob consulta</p>
            )}
          </div>
          <Button
            variant="default"
            size="sm"
            onClick={() => onQuote(equipamento)}
          >
            Orçar
            <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EquipamentoCard;
