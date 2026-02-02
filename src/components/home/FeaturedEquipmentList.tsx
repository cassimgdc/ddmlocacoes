import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { equipamentos } from '@/data/equipamentos';
import case580m from '@/assets/case-580m.png';

// Get image for equipment
const getEquipImage = (slug: string) => {
  if (slug === 'retroescavadeira-case-580m') return case580m;
  return '/placeholder.svg';
};

const FeaturedEquipmentList = () => {
  // Get featured/available items first
  const featured = equipamentos
    .sort((a, b) => {
      if (a.destaque && !b.destaque) return -1;
      if (!a.destaque && b.destaque) return 1;
      if (a.status === 'disponivel' && b.status !== 'disponivel') return -1;
      if (a.status !== 'disponivel' && b.status === 'disponivel') return 1;
      return 0;
    })
    .slice(0, 6);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">Equipamentos em Destaque</h2>
        <Link to="/catalogo" className="text-sm text-copper hover:underline flex items-center gap-1">
          Ver catálogo
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {featured.map((equip) => (
          <div
            key={equip.id}
            className="group rounded-lg bg-card border border-border overflow-hidden hover:border-copper/30 transition-all"
          >
            {/* Image */}
            <Link to={`/catalogo/${equip.slug}`} className="block relative aspect-[16/10] overflow-hidden bg-muted">
              {equip.status === 'disponivel' ? (
                <>
                  <img
                    src={getEquipImage(equip.slug)}
                    alt={equip.nome}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Status badge */}
                  <span className="absolute top-2 left-2 text-xs px-2 py-0.5 rounded bg-success/90 text-white font-medium">
                    Disponível
                  </span>
                  {equip.destaque && (
                    <span className="absolute top-2 right-2 text-xs px-2 py-0.5 rounded bg-copper/90 text-white font-medium">
                      Destaque
                    </span>
                  )}
                </>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-muted p-4">
                  <Clock className="w-8 h-8 text-muted-foreground mb-2" />
                  <span className="text-xs text-muted-foreground">Em breve</span>
                </div>
              )}
            </Link>

            {/* Content */}
            <div className="p-3">
              <Link to={`/catalogo/${equip.slug}`}>
                <h3 className="font-medium text-foreground text-sm group-hover:text-copper transition-colors line-clamp-1">
                  {equip.nome}
                </h3>
              </Link>
              
              {/* Metadata line */}
              <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                {equip.specs.map(s => s.value).join(' • ')}
              </p>

              {/* Price & CTA */}
              <div className="flex items-center justify-between mt-3 pt-2 border-t border-border/50">
                {equip.preco ? (
                  <span className="text-sm font-medium text-copper">{equip.preco}</span>
                ) : (
                  <span className="text-xs text-muted-foreground">Sob consulta</span>
                )}
                <Button variant="ghost" size="sm" asChild className="h-7 text-xs">
                  <Link to={`/catalogo/${equip.slug}`}>
                    Detalhes
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedEquipmentList;
